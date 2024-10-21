import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai"

export const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE
  }
  // {
  //   category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
  //   threshold: HarmBlockThreshold.BLOCK_NONE,
  // },
]

export const CompletionAIModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    candidateCount: 1,
    stopSequences: ["\n"],
    // A token is equivalent to about 4 characters for Gemini models. 100 tokens are about 60-80 English words.
    maxOutputTokens: 10,
    temperature: 0.5
  },
  safetySettings
})

const prompt = "Write a story about a magic backpack."
