// import { GoogleGenerativeAI } from "@google/generative-ai";




// export async function getEmbedding(text:string){
// const genAIApi = process.env.GOOGLE_GENERATIVE_AI_API_KEY
// if(!genAIApi) {
//   throw new Error('No Google AI API key provided');
// }
// const genAI = new GoogleGenerativeAI(genAIApi);
// const model = genAI.getGenerativeModel({
//     model: "text-embedding-004",
// });

 
//   const result = await model.embedContent(text);
//   if(!result) {
//     throw new Error('error generating embedding');
//   }
//   return result.embedding;
// }


// // // import OpenAI from 'openai'

// // // const apiKey = process.env.OPENAI_API_KEY ;

// // const googleAPIKey = process.env.GOOGLE_AI_API

// // // if(!apiKey) {
// // //   throw new Error('No OpenAI API key provided');
// // // }


// // // const openai =  new OpenAI({ apiKey });

// // // // export openai;

// // // export async function getEmbedding(text: string) {
// // //   const response = await openai.embeddings.create({
// // //     model :"text-embedding-ada-002",
// // //     input : text
// // //   })

// // //   const embedding = response.data[0].embedding;

// // //   if(!embedding) {
// // //     throw new Error('error generating embedding');
// // //   }

// // //   console.log(embedding);
  
// // //   return embedding;
// // // }


// // // google generative ai

// // if(!googleAPIKey) {
// //   throw new Error('No Google AI API key provided');
// // }


// // const genAI = new GoogleGenerativeAI(googleAPIKey);

// // const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// // export default chatModel;

// // export async function getEmbedding(text: string) {
  

  
  
// //   const result = await chatModel.embedContent(text);

// //   const embedding = result.embedding.values;

// //   if(!embedding) {
// //     throw new Error('error generating embedding');
// //   }

// //   console.log(embedding);

// //   return embedding;

// // }



