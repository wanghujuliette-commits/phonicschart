import { Modality } from "@google/genai";
import { getAI } from "./aiClient";

/**
 * High-quality AI Voice using Gemini TTS
 */
const speakWithAI = async (text: string): Promise<boolean> => {
  try {
    const ai = getAI();
    if (!ai) return false;

    console.log(`Requesting AI Voice for: "${text}"`);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say clearly in a British accent: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, // Kore is a common high-quality voice
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const audioBlob = await fetch(`data:audio/wav;base64,${base64Audio}`).then(res => res.blob());
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      return new Promise((resolve) => {
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          resolve(true);
        };
        audio.onerror = () => {
          URL.revokeObjectURL(audioUrl);
          resolve(false);
        };
        audio.play().catch(() => resolve(false));
      });
    }
    return false;
  } catch (error) {
    console.error("AI Voice Error:", error);
    return false;
  }
};

/**
 * Browser-native TTS (Fallback)
 */
const speakWithBrowser = (text: string, rate: number = 0.9): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) {
        resolve(false);
        return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.lang = 'en-GB';

    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);

    const voices = window.speechSynthesis.getVoices();
    const britishVoice = voices.find(v => 
      v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British')
    );

    if (britishVoice) utterance.voice = britishVoice;
    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Main entry point for speaking text
 */
export const speakText = async (text: string, rate: number = 0.9) => {
  // 1. Try high-quality AI voice first
  const success = await speakWithAI(text);
  
  // 2. Fallback to browser voice if AI fails or key is missing
  if (!success) {
    console.log("Falling back to browser voice...");
    await speakWithBrowser(text, rate);
  }
};

// Pre-load browser voices
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
}
