export interface PhonicsWord {
  word: string;
  syllables: string[]; // e.g., ["mag", "net"]
  sentence: string; // "The magnet represents the force."
  highlight: string; // The part of the word to highlight matching the pattern (e.g., "a")
  translation?: string;
}

export interface PhonicsPattern {
  id: string;
  pattern: string; // The label shown e.g., "ai", "ea"
  description: string; // e.g., "Long A sound"
  examples: PhonicsWord[];
  ipa?: string; // /eɪ/
}

export interface PhonicsCategory {
  id: string;
  title: string;
  icon: string; // key for lucide icon
  patterns: PhonicsPattern[];
}

export type ScreenState = 'LOGIN' | 'APP';

export interface SyllableResult {
  word: string;
  syllables: string[];
  phonicsType: string;
  highlight: string;
}