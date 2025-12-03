import React from 'react';
import { PhonicsWord } from '../types';
import { Volume2, Sparkles } from 'lucide-react';
import { speakText } from '../services/ttsService';

interface WordStageProps {
  wordData: PhonicsWord | null;
  pattern: string;
  isDynamic?: boolean;
}

export const WordStage: React.FC<WordStageProps> = ({ wordData, pattern, isDynamic = false }) => {
  if (!wordData) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-300">
        <Sparkles size={48} className="mb-4 opacity-50" />
        <p className="text-xl">Select a pattern to begin</p>
      </div>
    );
  }

  // Helper to split text by a specific highlight string (case insensitive)
  // Returns an array of elements with the highlighted part styled
  const highlightText = (text: string, highlight: string, highlightClass: string = "text-rose-500 font-extrabold") => {
    if (!highlight) return [text];
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
      <span key={i} className={highlightClass}>{part}</span> : 
      <span key={i}>{part}</span>
    );
  };

  const renderSyllable = (syllable: string, index: number) => {
    return (
      <span key={index} className="inline-flex mx-1">
        <span className="bg-white px-5 py-4 rounded-3xl shadow-sm border-b-4 border-gray-100 text-5xl font-bold text-gray-700 flex tracking-wide">
            {highlightText(syllable, wordData.highlight)}
        </span>
        {/* Dot separator unless it's the last one */}
        {index < wordData.syllables.length - 1 && (
          <span className="self-center text-gray-300 text-3xl mx-3 opacity-50">•</span>
        )}
      </span>
    );
  };

  // Helper to highlight phonics in the full word sentence
  const renderSentence = () => {
      const sentence = wordData.sentence;
      const targetWord = wordData.word;
      
      // First split by the target word to isolate it
      const parts = sentence.split(new RegExp(`\\b(${targetWord})\\b`, 'gi'));

      return (
        <p className="text-xl md:text-3xl text-gray-600 leading-relaxed font-medium">
            {parts.map((part, i) => {
                if (part.toLowerCase() === targetWord.toLowerCase()) {
                    // Inside the target word, highlight the pattern
                    return (
                        <span key={i} className="inline-block mx-1 text-indigo-900 font-bold border-b-2 border-indigo-200 pb-0.5 px-1 relative top-[-1px]">
                             {highlightText(part, wordData.highlight, "text-rose-500")}
                        </span>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </p>
      )
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-indigo-100/40 overflow-hidden border border-white relative">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-[10rem] -z-0 opacity-50"></div>

        {/* Header / Top Bar */}
        <div className="relative z-10 p-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className={`px-4 py-1.5 ${isDynamic ? 'bg-purple-100 text-purple-600' : 'bg-indigo-50 text-indigo-600'} text-xs font-bold rounded-full uppercase tracking-widest shadow-sm`}>
              {isDynamic ? 'AI Analysis' : 'Pattern'}
            </span>
            <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Focus Sound:</span>
                <span className="text-rose-500 font-extrabold text-2xl font-mono bg-rose-50 px-3 py-1 rounded-lg border border-rose-100">
                    {pattern.split(' ')[0]}
                </span>
            </div>
          </div>
          <button 
            onClick={() => speakText(wordData.word)}
            className="p-4 bg-white rounded-2xl text-indigo-600 shadow-lg shadow-indigo-100 border border-indigo-50 hover:scale-105 active:scale-95 transition-all group"
            title="Listen to word"
          >
            <Volume2 size={28} className="group-hover:text-indigo-500 fill-indigo-50" />
          </button>
        </div>

        {/* Main Stage Area */}
        <div className="relative z-10 px-10 pb-16 pt-8 flex flex-col items-center justify-center gap-14 text-center">
          
          {/* Syllable Breakdown */}
          <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in-up">
            {wordData.syllables.map((syl, idx) => renderSyllable(syl, idx))}
          </div>

          {/* Combined Word (IPA style visual) */}
          <div className="text-gray-400 font-mono text-xl tracking-wider opacity-60">
            /{wordData.word}/
          </div>

          {/* Sentence Section */}
          {!isDynamic && wordData.sentence && (
             <div 
                className="w-full max-w-3xl mt-2 p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 relative group cursor-pointer hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300" 
                onClick={() => speakText(wordData.sentence, 0.85)}
             >
                <div className="absolute top-5 right-5 text-indigo-200 group-hover:text-indigo-500 transition-colors bg-white p-2 rounded-full shadow-sm">
                    <Volume2 size={22} />
                </div>
                {renderSentence()}
             </div>
          )}
        </div>
      </div>
    </div>
  );
};