
import React, { useEffect, useRef } from 'react';
import type { SearchResult } from '../types';
import { SearchIcon } from './icons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onQueryChange: (query: string) => void;
  results: SearchResult[];
  onResultClick: (book: string, chapter: number) => void;
}

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong key={i} className="font-bold bg-yellow-200 dark:bg-yellow-700/70 rounded px-1">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
};

export const SearchModal: React.FC<SearchModalProps> = ({ 
  isOpen, 
  onClose, 
  query,
  onQueryChange,
  results,
  onResultClick
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Focus input on open
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-start pt-16 sm:pt-24 p-4 transition-opacity animate-[fade-in_150ms_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div 
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <SearchIcon className="h-5 w-5 mr-3 text-gray-400" />
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search your observations..."
                className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                aria-label="Search notes"
            />
             <button onClick={onClose} aria-label="Close search" className="ml-4 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length <= 1 && (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                <p>Enter at least 2 characters to search.</p>
            </div>
          )}
          {query.trim().length > 1 && results.length === 0 && (
             <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                <p>No results found for "{query}".</p>
            </div>
          )}
          {results.length > 0 && (
            <ul>
                {results.map(({ book, chapter, note }, index) => (
                    <li key={`${book}-${chapter}-${index}`}>
                        <button 
                            onClick={() => onResultClick(book, chapter)}
                            className="w-full text-left p-4 hover:bg-gray-100 dark:hover:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700"
                        >
                            <div className="font-bold text-blue-600 dark:text-blue-400">{book} {chapter}</div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 truncate">
                                <HighlightedText text={note} highlight={query} />
                            </p>
                        </button>
                    </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
