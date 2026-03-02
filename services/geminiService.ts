import { GoogleGenAI, Type } from "@google/genai";
import { SyllableResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const analyzeWord = async (word: string): Promise<SyllableResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the English word "${word}". 
      1. Break it into syllables.
      2. Identify the main phonics pattern or vowel sound (e.g., "Short a", "ai digraph", "tion suffix").
      3. Identify which letters represent that sound to highlight.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            syllables: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            phonicsType: { type: Type.STRING },
            highlight: { 
              type: Type.STRING,
              description: "The specific substring within the word that should be highlighted corresponding to the main phonics pattern."
            }
          },
          required: ["word", "syllables", "phonicsType", "highlight"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as SyllableResult;
    }
    throw new Error("No response from AI");
  } catch (error) {
    console.error("Error analyzing word:", error);
    // Fallback for demo if API fails or key missing
    return {
      word: word,
      syllables: [word],
      phonicsType: "Unknown",
      highlight: ""
    };
  }
};