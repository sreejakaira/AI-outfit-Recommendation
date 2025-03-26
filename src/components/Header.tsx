import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
export function Header({
  theme,
  toggleTheme
}) {
  return <header className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b transition-colors duration-200 ease-in-out py-4 px-6 sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          StyleAI
        </h1>
        <div className="flex items-center space-x-6">
          <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors duration-200 ease-in-out ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-300 hover:text-gray-100' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>
          <div className="relative">
            <div className={`h-9 w-9 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
              <span className="text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
}