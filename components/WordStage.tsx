import React from 'react';
import { PhonicsWord, Theme } from '../types';
import { Volume2, Sparkles } from 'lucide-react';
import { speakText } from '../services/ttsService';

interface WordStageProps {
  wordData: PhonicsWord | null;
  pattern: string;
  isDynamic?: boolean;
  theme: Theme;
}

export const WordStage: React.FC<WordStageProps> = ({ wordData, pattern, isDynamic = false, theme }) => {
  // Theme color mapping for internal components
  const getThemeClasses = () => {
    switch(theme) {
      case 'ocean':
        return {
          bgGradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
          accentText: 'text-amber-500',
          accentBg: 'bg-amber-50',
          accentBorder: 'border-amber-100',
          badge: isDynamic ? 'bg-blue-100 text-blue-600' : 'bg-cyan-50 text-cyan-600',
          buttonShadow: 'shadow-cyan-100',
          buttonBorder: 'border-cyan-50',
          buttonHover: 'group-hover:text-cyan-500',
          syllableBorder: 'border-cyan-200',
          syllableTextHighlight: 'text-amber-600',
          highlightClass: 'text-amber-600 font-extrabold',
          sentenceHighlight: 'text-cyan-900 border-cyan-200'
        };
      case 'sunset':
        return {
          bgGradient: 'bg-gradient-to-br from-orange-50 to-rose-50',
          accentText: 'text-purple-600',
          accentBg: 'bg-purple-50',
          accentBorder: 'border-purple-100',
          badge: isDynamic ? 'bg-rose-100 text-rose-600' : 'bg-orange-50 text-orange-600',
          buttonShadow: 'shadow-orange-100',
          buttonBorder: 'border-orange-50',
          buttonHover: 'group-hover:text-orange-500',
          syllableBorder: 'border-orange-200',
          syllableTextHighlight: 'text-purple-600',
          highlightClass: 'text-purple-600 font-extrabold',
          sentenceHighlight: 'text-orange-900 border-orange-200'
        };
      default: // Classic
        return {
          bgGradient: 'bg-gradient-to-br from-indigo-50 to-purple-50',
          accentText: 'text-rose-500',
          accentBg: 'bg-rose-50',
          accentBorder: 'border-rose-100',
          badge: isDynamic ? 'bg-purple-100 text-purple-600' : 'bg-indigo-50 text-indigo-600',
          buttonShadow: 'shadow-indigo-100',
          buttonBorder: 'border-indigo-50',
          buttonHover: 'group-hover:text-indigo-500',
          syllableBorder: 'border-indigo-100',
          syllableTextHighlight: 'text-rose-500',
          highlightClass: 'text-rose-500 font-extrabold',
          sentenceHighlight: 'text-indigo-900 border-indigo-200'
        };
    }
  };

  const colors = getThemeClasses();

  if (!wordData) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-300">
        <Sparkles size={48} className="mb-4 opacity-50" />
        <p className="text-xl">Select a pattern to begin</p>
      </div>
    );
  }

  const highlightText = (text: string, highlight: string, highlightClass: string = colors.highlightClass) => {
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
      <button 
        key={index} 
        className={`
          group relative inline-flex items-center justify-center
          bg-white px-6 py-5 rounded-2xl 
          text-5xl md:text-6xl font-bold text-gray-700 tracking-wide
          border-b-[6px] ${colors.syllableBorder} hover:border-b-[8px] active:border-b-0 active:translate-y-[6px]
          shadow-[0_10px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.05)]
          transition-all duration-150 ease-out select-none
          mx-1.5 my-2
        `}
        onClick={() => speakText(syllable)}
      >
        {highlightText(syllable, wordData.highlight)}
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
      </button>
    );
  };

  const renderSentence = () => {
      const sentence = wordData.sentence;
      const targetWord = wordData.word;
      
      const parts = sentence.split(new RegExp(`\\b(${targetWord})\\b`, 'gi'));

      return (
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            {parts.map((part, i) => {
                if (part.toLowerCase() === targetWord.toLowerCase()) {
                    return (
                        <span key={i} className={`inline-block mx-1 font-bold border-b-2 pb-0.5 px-1 relative top-[-1px] ${colors.sentenceHighlight}`}>
                             {highlightText(part, wordData.highlight, colors.syllableTextHighlight)}
                        </span>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </p>
      )
  }

  return (
    <div className="w-full max-w-5xl mx-auto perspective-1000">
      <div className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-white relative transition-colors duration-500 ${colors.buttonShadow}`}>
        {/* Dynamic background gradient */}
        <div className={`absolute top-0 right-0 w-96 h-96 ${colors.bgGradient} rounded-bl-[10rem] -z-0 opacity-60 transition-colors duration-500`}></div>

        {/* Header / Top Bar */}
        <div className="relative z-10 p-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className={`px-4 py-1.5 ${colors.badge} text-xs font-bold rounded-full uppercase tracking-widest shadow-sm transition-colors`}>
              {isDynamic ? 'AI Analysis' : 'Pattern'}
            </span>
            <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider hidden sm:inline">Focus Sound:</span>
                <span className={`font-extrabold text-2xl font-mono px-3 py-1 rounded-lg border transition-colors ${colors.accentText} ${colors.accentBg} ${colors.accentBorder}`}>
                    {pattern.split(' ')[0]}
                </span>
            </div>
          </div>
          <button 
            onClick={() => speakText(wordData.word)}
            className={`p-4 bg-white rounded-2xl text-gray-600 shadow-lg border hover:scale-105 active:scale-95 transition-all group ${colors.buttonShadow} ${colors.buttonBorder}`}
            title="Listen to word"
          >
            <Volume2 size={28} className={`fill-current ${colors.buttonHover} transition-colors`} />
          </button>
        </div>

        {/* Main Stage Area */}
        <div className="relative z-10 px-6 pb-20 pt-8 flex flex-col items-center justify-center gap-12 text-center">
          
          {/* Syllable Breakdown with 3D Interaction */}
          <div className="flex flex-wrap items-center justify-center animate-fade-in-up py-4">
            {wordData.syllables.map((syl, idx) => (
               <React.Fragment key={idx}>
                 {renderSyllable(syl, idx)}
                 {idx < wordData.syllables.length - 1 && (
                   <span className="text-gray-200 text-3xl mx-1 font-light opacity-50 select-none">•</span>
                 )}
               </React.Fragment>
            ))}
          </div>

          {/* Combined Word (IPA style visual) */}
          <div className="text-gray-400 font-mono text-xl tracking-wider opacity-60 bg-gray-50 px-4 py-1 rounded-lg">
            /{wordData.word}/
          </div>

          {/* Sentence Section */}
          {!isDynamic && wordData.sentence && (
             <div 
                className={`w-full max-w-3xl mt-2 p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 relative group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${colors.buttonShadow}`}
                onClick={() => speakText(wordData.sentence, 0.85)}
             >
                <div className={`absolute top-5 right-5 text-gray-300 ${colors.buttonHover} transition-colors bg-white p-2 rounded-full shadow-sm`}>
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