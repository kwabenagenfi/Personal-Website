import OpenAI from "openai";
import fs from "fs";
import { answerBank } from "../src/lib/answerBank";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const embeddings: { id: string; embedding: number[] }[] = [];

    for (const entry of answerBank) {
        const response = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: entry.question,
        });
        embeddings.push({ id: entry.id, embedding: response.data[0].embedding });
        console.log(`Embedded: ${entry.id}`);
    }

    fs.writeFileSync(
        "src/lib/answerEmbeddings.json",
        JSON.stringify(embeddings, null, 2)
    );
    console.log("Done - wrote src/lib/answerEmbeddings.json");
}

main();