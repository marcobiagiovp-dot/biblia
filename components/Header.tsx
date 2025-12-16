
import React from 'react';
import { SunIcon, MoonIcon, PlusIcon, MinusIcon, BookOpenIcon } from './icons';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, increaseFontSize, decreaseFontSize }) => {
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpenIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Bible Reader
            </h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
              <button
                onClick={decreaseFontSize}
                aria-label="Decrease font size"
                className="p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <MinusIcon className="h-5 w-5" />
              </button>
              <span className="px-2 text-sm font-medium select-none text-gray-700 dark:text-gray-200">Aa</span>
              <button
                onClick={increaseFontSize}
                aria-label="Increase font size"
                className="p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
