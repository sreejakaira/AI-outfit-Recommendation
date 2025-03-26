import React from 'react';
import { HomeIcon, ShirtIcon, BoxIcon } from 'lucide-react';
export function Navigation({
  activePage,
  setActivePage,
  theme
}) {
  const navItems = [{
    id: 'home',
    label: 'Home',
    icon: HomeIcon
  }, {
    id: 'wardrobe',
    label: 'Wardrobe',
    icon: ShirtIcon
  }, {
    id: 'suggestions',
    label: 'Suggestions',
    icon: BoxIcon
  }];
  return <nav className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b transition-colors duration-200 ease-in-out sticky top-16 z-40`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around">
          {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return <button key={item.id} className={`
                  flex items-center py-3 px-6 relative
                  transition-all duration-200 ease-in-out
                  ${theme === 'dark' ? 'hover:text-purple-400' : 'hover:text-indigo-600'}
                  ${isActive ? theme === 'dark' ? 'text-purple-400' : 'text-indigo-600' : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
                `} onClick={() => setActivePage(item.id)}>
                <Icon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && <div className={`
                    absolute bottom-0 left-0 right-0 h-0.5
                    ${theme === 'dark' ? 'bg-purple-400' : 'bg-indigo-600'}
                    animate-fadeIn
                  `} />}
              </button>;
        })}
        </div>
      </div>
    </nav>;
}