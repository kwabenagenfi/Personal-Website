import { NextRequest, NextResponse } from "next/server";
import { tavily } from "@tavily/core";
import Anthropic from "@anthropic-ai/sdk";
import { checkRateLimit } from "@/lib/rateLimit";

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
        return NextResponse.json({ error: "Missing question" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") ?? "local-dev";
    const { allowed, remaining } = await checkRateLimit(ip);

    if (!allowed) {
        return NextResponse.json(
            { error: "You've reached the search limit for this demo." },
            { status: 429 }
        );
    }

    const searchResults = await tvly.search(question, { maxResults: 5 });

    const context = searchResults.results
        .map((r, i) => `[${i + 1}] ${r.title}\n${r.content}\nSource: ${r.url}`)
        .join("\n\n");

    const completion = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 700,
        messages: [
            {
                role: "user",
                content: `Answer the question using only the search result below. Be concise. Cite sources by number.


Decide the best format for the answer:
- If the question asks for a list, ranking or comparison of multiple items, respond with a table.
- Otherwise, respond with plain text.

Respond with ONLY JSON, no markdown fences, no other text, matching exactly one of these shapes
{"format": "text", "answer": "..."}
{"format": "table", "columns": ["...", "..."], "rows": [["...", "..."], ["...", "..."]]}

Question: ${question}

Search results:
${context}`,

            },
        ],
    });

    const block = completion.content.find((b) => b.type === "text");
    const raw = block?.type === "text" ? block.text : "";

    let parsed;
    try {
        const cleaned = raw.replace(/```json|```/g, "").trim();
        parsed = JSON.parse(cleaned);
    } catch {
        parsed = { format: "text", answer: raw };
    }

    return NextResponse.json({
        result: parsed,
        sources: searchResults.results.map((r) => ({ title: r.title, url: r.url })),
        remaining,
    });

}