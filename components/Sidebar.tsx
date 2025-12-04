import React from 'react';
import { PhonicsCategory, Theme } from '../types';
import * as Icons from 'lucide-react';

interface SidebarProps {
  categories: PhonicsCategory[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  onLogout: () => void;
  theme: Theme;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  onLogout,
  theme
}) => {
  const getThemeClasses = () => {
    switch(theme) {
      case 'ocean':
        return {
          activeBg: 'bg-gradient-to-r from-cyan-50 to-blue-50',
          activeText: 'text-cyan-800',
          activeIconBg: 'bg-white text-cyan-600',
          border: 'border-cyan-100/50',
          dot: 'bg-cyan-500'
        };
      case 'sunset':
        return {
          activeBg: 'bg-gradient-to-r from-orange-50 to-rose-50',
          activeText: 'text-orange-900',
          activeIconBg: 'bg-white text-orange-600',
          border: 'border-orange-100/50',
          dot: 'bg-orange-500'
        };
      default:
        return {
          activeBg: 'bg-gradient-to-r from-indigo-50 to-purple-50',
          activeText: 'text-indigo-900',
          activeIconBg: 'bg-white text-indigo-600',
          border: 'border-indigo-100/50',
          dot: 'bg-indigo-500'
        };
    }
  };

  const colors = getThemeClasses();

  return (
    <div className="w-full md:w-72 bg-white border-l md:border-l-0 md:border-r border-gray-100 flex flex-col h-full shadow-[2px_0_20px_rgba(0,0,0,0.02)] z-20">
      
      {/* Category List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        <h2 className="px-4 pt-4 pb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Syllabus</h2>
        
        {categories.map((cat) => {
          // Dynamically get icon
          const IconComponent = (Icons as any)[cat.icon] || Icons.Circle;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group
                ${isSelected 
                  ? `${colors.activeBg} ${colors.activeText} shadow-sm border ${colors.border}` 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-transparent'
                }`}
            >
              <div className={`
                p-2 rounded-lg transition-colors shrink-0
                ${isSelected 
                  ? `${colors.activeIconBg} shadow-sm` 
                  : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'}
              `}>
                 <IconComponent size={18} />
              </div>
              
              <div className="flex flex-col items-start text-left overflow-hidden">
                <span className={`font-semibold text-sm truncate w-full`}>
                  {cat.title.split('(')[0]}
                </span>
                <span className="text-[10px] opacity-60 font-['Noto_Sans_SC'] truncate w-full">
                  {cat.title.match(/\((.*?)\)/)?.[1] || ''}
                </span>
              </div>
              
              {isSelected && (
                <div className={`ml-auto w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`}></div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-50 bg-gray-50/50">
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 hover:bg-red-50 py-3 rounded-xl transition-all duration-300 text-sm font-medium"
        >
          <Icons.LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};