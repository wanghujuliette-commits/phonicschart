export const speakText = (text: string, rate: number = 0.9) => {
  if (!window.speechSynthesis) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate; // Slightly slower for learning
  utterance.pitch = 1;

  // Try to find a British voice
  const voices = window.speechSynthesis.getVoices();
  const britishVoice = voices.find(
    (voice) => 
      voice.lang.includes('en-GB') || 
      voice.name.includes('UK') || 
      voice.name.includes('British')
  );

  if (britishVoice) {
    utterance.voice = britishVoice;
  }

  window.speechSynthesis.speak(utterance);
};

// Pre-load voices (chrome requires this sometimes)
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
}