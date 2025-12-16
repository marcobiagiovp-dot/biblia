
import React from 'react';
import { BIBLE_BOOKS } from '../constants';
import type { BibleBook, BibleVerse } from '../types';

interface BibleSelectorProps {
  selectedBook: string;
  onBookChange: (book: string) => void;
  selectedChapter: number;
  onChapterChange: (chapter: number) => void;
  verses: BibleVerse[];
  onVerseChange: (verse: number) => void;
}

export const BibleSelector: React.FC<BibleSelectorProps> = ({
  selectedBook,
  onBookChange,
  selectedChapter,
  onChapterChange,
  verses,
  onVerseChange,
}) => {
  const currentBook = BIBLE_BOOKS.find(book => book.name === selectedBook) || BIBLE_BOOKS[0];
  const chapterCount = currentBook.chapters;

  const SelectWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`relative ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md z-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="book-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Book
          </label>
          <SelectWrapper>
            <select
              id="book-select"
              value={selectedBook}
              onChange={(e) => onBookChange(e.target.value)}
              className="block appearance-none w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {BIBLE_BOOKS.map((book: BibleBook) => (
                <option key={book.name} value={book.name}>
                  {book.name}
                </option>
              ))}
            </select>
          </SelectWrapper>
        </div>
        <div>
          <label htmlFor="chapter-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Chapter
          </label>
          <SelectWrapper>
            <select
              id="chapter-select"
              value={selectedChapter}
              onChange={(e) => onChapterChange(Number(e.target.value))}
              className="block appearance-none w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.from({ length: chapterCount }, (_, i) => i + 1).map((chapterNum) => (
                <option key={chapterNum} value={chapterNum}>
                  {chapterNum}
                </option>
              ))}
            </select>
          </SelectWrapper>
        </div>
        <div>
          <label htmlFor="verse-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Go to Verse
          </label>
          <SelectWrapper>
            <select
              id="verse-select"
              onChange={(e) => onVerseChange(Number(e.target.value))}
              value=""
              disabled={verses.length === 0}
              className="block appearance-none w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <option value="" disabled>Select a verse</option>
              {verses.map((verse) => (
                <option key={verse.verse} value={verse.verse}>
                  {verse.verse}
                </option>
              ))}
            </select>
          </SelectWrapper>
        </div>
      </div>
    </div>
  );
};
