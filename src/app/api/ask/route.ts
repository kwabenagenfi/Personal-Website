import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { answerBank } from "@/lib/answerBank";
import answerEmbeddings from "@/lib/answerEmbeddings.json";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function cosineSimilarity(a: number[], b: number[]) {
    let dot = 0, magA = 0, magB = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        magA += a[i] * a[i];
        magB += b[i] * b[i];
    }

    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

export async function POST(req: NextRequest) {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
        return NextResponse.json({ error: "Missing question" }, { status: 400 });
    }

    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: question,
    });
    const queryEmbedding = response.data[0].embedding;

    let bestMatch: { id: string; score: number } | null = null;

    for (const entry of answerEmbeddings) {
        const score = cosineSimilarity(queryEmbedding, entry.embedding);
        if (!bestMatch || score > bestMatch.score) {
            bestMatch = { id: entry.id, score };
        }
    }

    const THRESHOLD = 0.4;

    if (!bestMatch || bestMatch.score < THRESHOLD) {
        return NextResponse.json({
            matched: false,
            answer: "I don't have an answer for that yet - feel free to reach out through the Contact page!",
        });
    }

    const matchedEntry = answerBank.find((e) => e.id === bestMatch!.id);

    return NextResponse.json({
        matched: true,
        entry: matchedEntry,
        score: bestMatch.score,
    });
}