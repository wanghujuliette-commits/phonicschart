/**
 * High-reliability TTS Service
 * Completely independent of Google Gemini AI to avoid quota/key issues.
 * Uses Browser-native TTS with high-quality Edge voice priority.
 */

export const speakText = (text: string, rate: number = 0.9): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn("Speech synthesis not supported.");
      resolve(false);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.lang = 'en-GB';

    utterance.onend = () => {
      console.log(`Finished speaking: "${text}"`);
      resolve(true);
    };
    
    utterance.onerror = (e) => {
      console.error("TTS Error:", e);
      resolve(false);
    };

    // Function to find and set the best voice
    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      
      // Priority 1: Edge Online Natural Voices (British)
      let targetVoice = voices.find(v => 
        (v.name.includes('Microsoft') && v.name.includes('Online') && v.lang.includes('en-GB')) ||
        (v.name.includes('Natural') && v.lang.includes('en-GB'))
      );

      // Priority 2: Any British Voice
      if (!targetVoice) {
        targetVoice = voices.find(v => 
          v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British')
        );
      }

      // Priority 3: Any English Voice
      if (!targetVoice) {
        targetVoice = voices.find(v => v.lang.startsWith('en'));
      }

      if (targetVoice) {
        console.log(`Using voice: ${targetVoice.name}`);
        utterance.voice = targetVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    };

    // Some browsers load voices asynchronously
    if (window.speechSynthesis.getVoices().length > 0) {
      setVoice();
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        setVoice();
        window.speechSynthesis.onvoiceschanged = null;
      };
      
      // Fallback if onvoiceschanged doesn't fire
      setTimeout(() => {
        if (window.speechSynthesis.getVoices().length === 0) {
          window.speechSynthesis.speak(utterance);
          resolve(true);
        }
      }, 500);
    }
  });
};

// Pre-load voices
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
}
