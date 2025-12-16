
import React from 'react';
import { PencilIcon, UserPlusIcon, SearchIcon } from './icons';

interface FooterProps {
  onNotesClick: () => void;
  onSearchClick: () => void;
  onContactsClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNotesClick, onSearchClick, onContactsClick }) => {
  return (
    <footer className="sticky bottom-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-[0_-2px_6px_rgba(0,0,0,0.08)] dark:shadow-[0_-2px_6px_rgba(0,0,0,0.2)] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={onNotesClick}
            className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-1/3"
            aria-label="Important Observations"
          >
            <PencilIcon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium tracking-wide">Observations</span>
          </button>
          <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
          <button
            onClick={onSearchClick}
            className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-1/3"
            aria-label="Find Observations"
          >
            <SearchIcon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium tracking-wide">Find Observations</span>
          </button>
          <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
          <button
            onClick={onContactsClick}
            className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-1/3"
            aria-label="My Contacts"
          >
            <UserPlusIcon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium tracking-wide">Contacts</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
