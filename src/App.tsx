import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { WardrobePage } from './pages/WardrobePage';
import { SuggestionsPage } from './pages/SuggestionsPage';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
export function App() {
  const [activePage, setActivePage] = useState('home');
  const [wardrobe, setWardrobe] = useState([]);
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const addToWardrobe = item => {
    setWardrobe([...wardrobe, item]);
  };
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'wardrobe':
        return <WardrobePage wardrobe={wardrobe} addToWardrobe={addToWardrobe} />;
      case 'suggestions':
        return <SuggestionsPage wardrobe={wardrobe} />;
      default:
        return <HomePage />;
    }
  };
  return <div className={`min-h-screen transition-colors duration-200 ease-in-out ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Navigation activePage={activePage} setActivePage={setActivePage} theme={theme} />
      <main className="flex-1 pb-8">
        <div className="animate-fadeIn">{renderPage()}</div>
      </main>
    </div>;
}