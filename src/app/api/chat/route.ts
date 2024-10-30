import { noteIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
// import  { getEmbedding } from "@/lib/openAi";
import  { getEmbedding } from "@/lib/openAI";
// import genAI, { getEmbedding } from "@/lib/genAI";
import { auth } from "@clerk/nextjs/server";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { openai } from '@ai-sdk/openai';
import { streamText } from "ai"


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const messages: ChatCompletionMessage[] = body.messages;
    
        

        const truncatedMessage = messages.slice(-6);
        const {userId} =auth();
        const embedding = await getEmbedding(
            truncatedMessage.map((message)=> message.content).join("\n")  
        )
        
        console.log("Embedding generated", embedding);
        const vectorQueryResponse = await noteIndex.query({
            vector: embedding,
            topK: 4,
            filter:{userId}
        })
        const releventNote = await prisma.note.findMany({
            where:{
                id:{
                    in: vectorQueryResponse.matches.map((match)=> match.id)
                }
            }
        })

        console.log("Relevent Note found", releventNote);

        const systemMessage:ChatCompletionMessage = {
            role: "assistant",
            content : "you are an intellegent note taking app. You answer the user question based on their existing notes."+
            "the Relevent note for this query are:\n"+
            releventNote.map((note)=>`Title:${note.title}\n\n content:${note.content}`).join("\n\n"),
            refusal:"none"
        }

        const prompt = [systemMessage, ...truncatedMessage]
        .map((msg) => `${msg.role}: ${msg.content}`)
        .join("\n");

        const result = await streamText({
            model: openai("gpt-3.5-turbo"),
            prompt,
          });

        return result.toDataStreamResponse();

        
        

    } catch (error) {
        console.log(error);
        return  Response.json({error: "Internal Server Error"}, {status: 500});
    }
}


