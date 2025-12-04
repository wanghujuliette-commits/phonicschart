import React from 'react';
import { PhonicsPattern, Theme } from '../types';

interface PhonicsListProps {
  patterns: PhonicsPattern[];
  selectedPatternId: string | null;
  onSelectPattern: (pattern: PhonicsPattern) => void;
  theme: Theme;
}

export const PhonicsList: React.FC<PhonicsListProps> = ({ 
  patterns, 
  selectedPatternId, 
  onSelectPattern,
  theme
}) => {
  const getThemeClasses = () => {
    switch(theme) {
      case 'ocean':
        return {
          active: 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-300',
          hoverBorder: 'hover:border-cyan-200',
          activeText: 'text-cyan-100'
        };
      case 'sunset':
        return {
          active: 'bg-gradient-to-br from-orange-500 to-rose-600 shadow-orange-300',
          hoverBorder: 'hover:border-orange-200',
          activeText: 'text-orange-100'
        };
      default:
        return {
          active: 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-300',
          hoverBorder: 'hover:border-indigo-200',
          activeText: 'text-indigo-100'
        };
    }
  };

  const colors = getThemeClasses();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 p-1">
      {patterns.map((p) => {
        const isSelected = selectedPatternId === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onSelectPattern(p)}
            className={`
              relative overflow-hidden group flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300
              ${isSelected 
                ? `${colors.active} border-transparent text-white shadow-lg transform scale-105` 
                : `bg-white border-gray-100 text-gray-600 ${colors.hoverBorder} hover:shadow-md`
              }
            `}
          >
            <span className={`text-xl font-bold mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
              {p.pattern}
            </span>
            {p.ipa && (
              <span className={`text-xs opacity-80 ${isSelected ? colors.activeText : 'text-gray-400'}`}>
                {p.ipa}
              </span>
            )}
            
            {/* Active Indicator Dot */}
            {isSelected && (
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};