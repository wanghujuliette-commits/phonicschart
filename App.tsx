import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { Sidebar } from './components/Sidebar';
import { PhonicsList } from './components/PhonicsList';
import { WordStage } from './components/WordStage';
import { Logo } from './components/Logo';
import { PHONICS_DATA } from './constants';
import { PhonicsCategory, PhonicsPattern, PhonicsWord, ScreenState, Theme } from './types';
import { analyzeWord } from './services/geminiService';
import { Search, Sparkles, Menu, X, Palette, Check } from 'lucide-react';

const THEMES: Record<Theme, { 
  name: string; 
  primary: string; 
  secondary: string; 
  accent: string;
  gradient: string;
  bg: string;
}> = {
  classic: {
    name: 'Classic',
    primary: 'indigo',
    secondary: 'purple',
    accent: 'rose',
    gradient: 'from-indigo-600 to-purple-700',
    bg: 'bg-[#f8fafc]'
  },
  ocean: {
    name: 'Ocean',
    primary: 'cyan',
    secondary: 'blue',
    accent: 'amber',
    gradient: 'from-cyan-600 to-blue-600',
    bg: 'bg-cyan-50/30'
  },
  sunset: {
    name: 'Sunset',
    primary: 'orange',
    secondary: 'rose',
    accent: 'purple',
    gradient: 'from-orange-500 to-rose-600',
    bg: 'bg-orange-50/30'
  }
};

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('LOGIN');
  const [activeCategoryId, setActiveCategoryId] = useState<string>(PHONICS_DATA[0].id);
  const [activePattern, setActivePattern] = useState<PhonicsPattern>(PHONICS_DATA[0].patterns[0]);
  const [activeWord, setActiveWord] = useState<PhonicsWord>(PHONICS_DATA[0].patterns[0].examples[0]);
  
  // Theme State
  const [currentTheme, setCurrentTheme] = useState<Theme>('classic');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  
  // Mobile menu state
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Custom Input State
  const [customInput, setCustomInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDynamicMode, setIsDynamicMode] = useState(false);

  const activeCategory = PHONICS_DATA.find(c => c.id === activeCategoryId) || PHONICS_DATA[0];
  const themeColors = THEMES[currentTheme];

  const handleLogin = () => setScreen('APP');
  const handleLogout = () => setScreen('LOGIN');

  const handleCategorySelect = (id: string) => {
    setActiveCategoryId(id);
    const cat = PHONICS_DATA.find(c => c.id === id);
    if (cat && cat.patterns.length > 0) {
      setActivePattern(cat.patterns[0]);
      setActiveWord(cat.patterns[0].examples[0]);
      setIsDynamicMode(false);
    }
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handlePatternSelect = (pattern: PhonicsPattern) => {
    setActivePattern(pattern);
    setActiveWord(pattern.examples[0]);
    setIsDynamicMode(false);
  };

  const handleExampleSelect = (word: PhonicsWord) => {
    setActiveWord(word);
    setIsDynamicMode(false);
  };

  const handleCustomAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsAnalyzing(true);
    const result = await analyzeWord(customInput);
    
    setActiveWord({
      word: result.word,
      syllables: result.syllables,
      sentence: `Breakdown for: ${result.word}`, 
      highlight: result.highlight,
    });
    
    setActivePattern({
      id: 'dynamic',
      pattern: result.phonicsType, 
      description: 'AI Analysis',
      examples: [] 
    });
    
    setIsDynamicMode(true);
    setIsAnalyzing(false);
    setCustomInput('');
  };

  if (screen === 'LOGIN') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className={`flex h-screen ${themeColors.bg} text-gray-800 font-sans overflow-hidden transition-colors duration-500`}>
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar - Slide from RIGHT on mobile */}
      <div className={`fixed inset-y-0 right-0 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 md:left-0 md:inset-auto transition duration-300 ease-out z-40 h-full md:order-1`}>
        <Sidebar 
          categories={PHONICS_DATA} 
          selectedCategory={activeCategoryId} 
          onSelectCategory={handleCategorySelect}
          onLogout={handleLogout}
          theme={currentTheme}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative md:order-2">
        
        {/* Top Navbar */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm z-10 sticky top-0">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
             <Logo layout="row" />
          </div>
          
          {/* Right: Actions & Mobile Menu */}
          <div className="flex items-center gap-3">
             {/* Theme Switcher */}
             <div className="relative">
               <button 
                 onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                 className={`p-2 rounded-full transition-colors ${isThemeMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                 title="Change Theme"
               >
                 <Palette size={20} className={`text-${themeColors.primary}-500`} />
               </button>
               
               {isThemeMenuOpen && (
                 <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200 z-50">
                    {(Object.keys(THEMES) as Theme[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setCurrentTheme(t);
                          setIsThemeMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-full bg-${THEMES[t].primary}-500`}></span>
                          {THEMES[t].name}
                        </span>
                        {currentTheme === t && <Check size={14} className="text-green-500" />}
                      </button>
                    ))}
                 </div>
               )}
               {/* Overlay to close dropdown */}
               {isThemeMenuOpen && <div className="fixed inset-0 z-40" onClick={() => setIsThemeMenuOpen(false)}></div>}
             </div>

             {/* User Profile (Desktop) */}
             <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 font-medium ml-2">
               <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${themeColors.gradient} text-white flex items-center justify-center font-bold shadow-md`}>
                 W
               </div>
             </div>

             {/* Mobile Menu Button (Right Side) */}
             <button 
                className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
             >
               {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
          
          {/* 1. Pattern Selection Area */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-gray-700 flex items-center gap-2">
                <span className={`w-2 h-6 bg-${themeColors.primary}-500 rounded-full`}></span>
                Select a Pattern
              </h3>
              <span className="text-xs text-gray-400 bg-white/50 px-2 py-1 rounded border border-gray-100">
                {activeCategory.patterns.length} patterns
              </span>
            </div>
            <PhonicsList 
              patterns={activeCategory.patterns}
              selectedPatternId={isDynamicMode ? null : activePattern.id}
              onSelectPattern={handlePatternSelect}
              theme={currentTheme}
            />
          </section>

          {/* 2. Word Stage (The Big Show) */}
          <section>
             <WordStage 
                wordData={activeWord} 
                pattern={activePattern.pattern}
                isDynamic={isDynamicMode} 
                theme={currentTheme}
             />
          </section>

          {/* 3. Examples List & Custom Input */}
          <section className="grid md:grid-cols-2 gap-6 pb-12">
            
            {/* Left: Pre-defined Examples */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
               <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">More Examples</h4>
               {!isDynamicMode ? (
                 <div className="flex flex-wrap gap-2">
                    {activePattern.examples.map((ex, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleExampleSelect(ex)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                          ${activeWord.word === ex.word 
                            ? `bg-${themeColors.primary}-50 text-${themeColors.primary}-700 border-${themeColors.primary}-200 shadow-sm transform scale-105` 
                            : 'bg-gray-50 text-gray-600 border-transparent hover:bg-gray-100'}`}
                      >
                        {ex.word}
                      </button>
                    ))}
                 </div>
               ) : (
                 <div className="text-gray-400 text-sm italic">
                   Currently viewing AI analysis. Select a pattern above to return to standard examples.
                 </div>
               )}
            </div>

            {/* Right: Custom Analysis Input */}
            <div className={`bg-gradient-to-br ${themeColors.gradient} rounded-2xl p-6 text-white shadow-xl shadow-${themeColors.primary}-200/50`}>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-white/90 animate-pulse" />
                Analyze Any Word
              </h4>
              <p className="text-white/80 text-xs mb-4">Type a word to see its syllable breakdown.</p>
              
              <form onSubmit={handleCustomAnalyze} className="relative">
                <input 
                  type="text" 
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="e.g., hippopotamus"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={isAnalyzing}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white text-${themeColors.primary}-600 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50`}
                >
                  {isAnalyzing ? (
                    <div className={`w-5 h-5 border-2 border-${themeColors.primary}-600 border-t-transparent rounded-full animate-spin`}></div>
                  ) : (
                    <Search size={20} />
                  )}
                </button>
              </form>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
};

export default App;