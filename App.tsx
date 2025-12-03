import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { Sidebar } from './components/Sidebar';
import { PhonicsList } from './components/PhonicsList';
import { WordStage } from './components/WordStage';
import { Logo } from './components/Logo';
import { PHONICS_DATA } from './constants';
import { PhonicsCategory, PhonicsPattern, PhonicsWord, ScreenState } from './types';
import { analyzeWord } from './services/geminiService';
import { Search, Sparkles, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('LOGIN');
  const [activeCategoryId, setActiveCategoryId] = useState<string>(PHONICS_DATA[0].id);
  const [activePattern, setActivePattern] = useState<PhonicsPattern>(PHONICS_DATA[0].patterns[0]);
  const [activeWord, setActiveWord] = useState<PhonicsWord>(PHONICS_DATA[0].patterns[0].examples[0]);
  
  // Mobile menu state
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Custom Input State
  const [customInput, setCustomInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDynamicMode, setIsDynamicMode] = useState(false);

  const activeCategory = PHONICS_DATA.find(c => c.id === activeCategoryId) || PHONICS_DATA[0];

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
      sentence: `Breakdown for: ${result.word}`, // Placeholder as sentence gen is extra cost/latency
      highlight: result.highlight,
    });
    
    // Create a temporary "Dynamic" pattern context
    setActivePattern({
      id: 'dynamic',
      pattern: result.phonicsType, // Use the AI identified type
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
    <div className="flex h-screen bg-[#f8fafc] text-gray-800 font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar - Hidden on mobile unless toggled */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-40 h-full`}>
        <Sidebar 
          categories={PHONICS_DATA} 
          selectedCategory={activeCategoryId} 
          onSelectCategory={handleCategorySelect}
          onLogout={handleLogout}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm z-10">
          <div className="flex items-center gap-4">
             <button 
                className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
             >
               {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
             {/* Horizontal Logo Layout */}
             <Logo layout="row" />
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 font-medium">
             <span>Welcome, Wonder</span>
             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 text-white flex items-center justify-center font-bold shadow-md">
               W
             </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
          
          {/* 1. Pattern Selection Area */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-gray-700 flex items-center gap-2">
                <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
                Select a Pattern
              </h3>
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                {activeCategory.patterns.length} patterns
              </span>
            </div>
            <PhonicsList 
              patterns={activeCategory.patterns}
              selectedPatternId={isDynamicMode ? null : activePattern.id}
              onSelectPattern={handlePatternSelect}
            />
          </section>

          {/* 2. Word Stage (The Big Show) */}
          <section>
             <WordStage 
                wordData={activeWord} 
                pattern={activePattern.pattern}
                isDynamic={isDynamicMode} 
             />
          </section>

          {/* 3. Examples List (for selected pattern) & Custom Input */}
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
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors 
                          ${activeWord.word === ex.word 
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
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
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-yellow-300" />
                Analyze Any Word
              </h4>
              <p className="text-indigo-100 text-xs mb-4">Type a word to see its syllable breakdown.</p>
              
              <form onSubmit={handleCustomAnalyze} className="relative">
                <input 
                  type="text" 
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="e.g., hippopotamus"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-indigo-200 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isAnalyzing}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
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