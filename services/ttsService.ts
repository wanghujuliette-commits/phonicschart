/**
 * Simplest possible TTS Service to avoid complex state issues.
 * No external API dependencies.
 */

export const speakText = (text: string, rate: number = 0.9): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve(false);
      return;
    }

    // 1. Resume engine
    window.speechSynthesis.resume();

    // 2. Create utterance locally
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.lang = 'en-GB';

    // 3. Select voice
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => 
      !v.name.includes('Online') && 
      (v.lang.includes('en-GB') || v.name.includes('UK'))
    ) || voices.find(v => v.lang.startsWith('en'));

    if (voice) {
      utterance.voice = voice;
    }

    // 4. Events
    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);

    // 5. Speak
    window.speechSynthesis.speak(utterance);
    
    // 6. Auto-resolve after 3 seconds as a safety
    setTimeout(() => resolve(true), 3000);
  });
};

// Pre-load
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
}
