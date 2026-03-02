/**
 * High-reliability TTS Service
 * Uses a combination of Google Translate TTS (MP3) and Browser Fallback
 */

const speakWithGoogle = (text: string): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      // Using the public Google Translate TTS endpoint (no API key required)
      // This returns a high-quality MP3 stream
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en-GB&client=tw-ob`;
      
      const audio = new Audio(url);
      
      // Set a timeout in case it hangs
      const timeout = setTimeout(() => {
        audio.pause();
        resolve(false);
      }, 3000);

      audio.onplaying = () => {
        console.log("Google TTS playing...");
      };

      audio.onended = () => {
        clearTimeout(timeout);
        resolve(true);
      };

      audio.onerror = (e) => {
        console.warn("Google TTS Error:", e);
        clearTimeout(timeout);
        resolve(false);
      };

      audio.play().catch(err => {
        console.warn("Audio play blocked or failed:", err);
        clearTimeout(timeout);
        resolve(false);
      });
    } catch (e) {
      console.error("Google TTS Exception:", e);
      resolve(false);
    }
  });
};

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

    // Try to find a good voice
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => 
      (v.name.includes('Microsoft') && v.name.includes('Online') && v.lang.includes('en-GB')) ||
      v.lang.includes('en-GB') || v.name.includes('British')
    );

    if (targetVoice) utterance.voice = targetVoice;
    window.speechSynthesis.speak(utterance);
    
    // Safety resolve if it gets stuck
    setTimeout(() => resolve(true), 2000);
  });
};

export const speakText = async (text: string, rate: number = 0.9) => {
  console.log(`Attempting to speak: "${text}"`);
  
  // 1. Try Google Translate TTS first (Most reliable MP3 mode)
  const success = await speakWithGoogle(text);
  
  // 2. Fallback to browser TTS if Google fails
  if (!success) {
    console.log("Google TTS failed, falling back to browser...");
    await speakWithBrowser(text, rate);
  }
};

// Pre-load browser voices
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
}
