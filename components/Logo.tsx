import React from 'react';

interface LogoProps {
  size?: 'sm' | 'lg';
  layout?: 'row' | 'col';
}

export const Logo: React.FC<LogoProps> = ({ size = 'sm', layout = 'col' }) => {
  const isLarge = size === 'lg';
  const isRow = layout === 'row';
  
  const iconSize = isLarge ? 80 : 40;
  const textSize = isLarge ? "text-4xl" : "text-xl";
  const subTextSize = isLarge ? "text-lg" : "text-xs";
  
  const containerClasses = isRow 
    ? "flex flex-row items-center gap-3" 
    : "flex flex-col items-center justify-center gap-4";

  const textAlign = isRow ? "text-left" : "text-center";

  return (
    <div className={containerClasses}>
      {/* Icon Container */}
      <div className={`relative flex items-center justify-center rounded-2xl ${isLarge ? 'p-1' : 'p-0.5'}`}>
        {/* Crystal Container */}
        <div className={`relative overflow-hidden`}>
          <svg 
            width={iconSize} 
            height={iconSize} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <defs>
              {/* Deep Purple Crystal Gradient */}
              <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
              
              {/* Facet Highlights */}
              <linearGradient id="facet-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="100%" stopColor="white" stopOpacity="0.1" />
              </linearGradient>
              
              {/* Glow Filter */}
              <filter id="crystal-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Crystal Hexagon Base */}
            <path 
              d="M50 5 L93 25 L93 75 L50 95 L7 75 L7 25 Z" 
              fill="url(#crystal-gradient)"
              stroke="#a5b4fc"
              strokeWidth="2"
            />

            {/* Crystal Facets (Glassy effect) */}
            <path d="M7 25 L50 50 L93 25 L50 5 Z" fill="url(#facet-highlight)" opacity="0.4" />
            <path d="M7 25 L50 50 L50 95 L7 75 Z" fill="#312e81" opacity="0.2" />
            <path d="M93 25 L50 50 L50 95 L93 75 Z" fill="#4338ca" opacity="0.3" />

            {/* Embedded W Text */}
            <text 
              x="50" 
              y="68" 
              fontSize="45" 
              fontWeight="bold" 
              fontFamily="sans-serif" 
              textAnchor="middle" 
              fill="white"
              style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
            >
              W
            </text>
            
            {/* Top Shine */}
            <circle cx="20" cy="20" r="5" fill="white" opacity="0.6" filter="url(#crystal-glow)" />
          </svg>
        </div>
      </div>

      {/* Text Container */}
      <div className={textAlign}>
        <h1 className={`font-bold text-gray-800 tracking-tight ${textSize} font-['Noto_Sans_SC'] leading-none`}>
          新知旺豆
        </h1>
        <p className={`text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-bold tracking-widest uppercase ${subTextSize} font-['Outfit'] mt-0.5`}>
          PhonicsFlow
        </p>
      </div>
    </div>
  );
};