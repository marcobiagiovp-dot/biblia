import React, { useEffect, useRef } from 'react';
import type { BibleVerse, Highlight } from '../types';
import { ShareIcon } from './icons';

interface BibleDisplayProps {
  verses: BibleVerse[];
  fontSizeClass: string;
  scrollToVerse: number | null;
  chapterTitle: string | null;
  highlights: Highlight[];
  onTextSelect: () => void;
  onHighlightClick: (highlight: Highlight, event: React.MouseEvent) => void;
  onShareVerse: (verse: BibleVerse) => void;
}

const renderVerseText = (verse: BibleVerse, highlights: Highlight[], onHighlightClick: (highlight: Highlight, event: React.MouseEvent) => void) => {
    const verseText = verse.text.trim();
    
    // Get all highlight objects applicable to this verse
    const applicableHighlights = highlights
      .filter(h => verse.verse >= h.startVerse && verse.verse <= h.endVerse)
      .sort((a, b) => a.startOffset - b.startOffset);
  
    if (applicableHighlights.length === 0) {
      return <>{verseText}</>;
    }
  
    // Map highlights to a format that includes verse-specific start/end offsets and the original highlight object
    const verseHighlights = applicableHighlights.map(h => ({
        start: (verse.verse === h.startVerse) ? h.startOffset : 0,
        end: (verse.verse === h.endVerse) ? h.endOffset : verseText.length,
        highlight: h
    }));

    // Merge overlapping/adjacent blocks for seamless visual rendering
    const mergedHighlights = verseHighlights.reduce((acc, current) => {
      if (acc.length === 0) {
        return [{ ...current, highlights: [current.highlight] }];
      }
      
      const last = acc[acc.length - 1];
      
      if (current.start <= last.end) {
        last.end = Math.max(last.end, current.end);
        last.highlights.push(current.highlight);
      } else {
        acc.push({ ...current, highlights: [current.highlight] });
      }
      return acc;
    }, [] as {start: number; end: number; highlights: Highlight[]}[]);
  
    const parts = [];
    let lastIndex = 0;
  
    mergedHighlights.forEach(({ start, end, highlights: mergedHls }) => {
      if (start > lastIndex) {
        parts.push(<span key={lastIndex}>{verseText.substring(lastIndex, start)}</span>);
      }
      parts.push(
        <mark 
          key={start} 
          className="bg-yellow-300 dark:bg-yellow-600/70 px-0.5 rounded cursor-pointer hover:bg-yellow-400 dark:hover:bg-yellow-500/70 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            // For simplicity, we act on the first highlight in a merged block.
            onHighlightClick(mergedHls[0], e);
          }}
        >
          {verseText.substring(start, end)}
        </mark>
      );
      lastIndex = end;
    });
  
    if (lastIndex < verseText.length) {
      parts.push(<span key={lastIndex}>{verseText.substring(lastIndex)}</span>);
    }
  
    return <>{parts}</>;
};

export const BibleDisplay: React.FC<BibleDisplayProps> = ({
  verses,
  fontSizeClass,
  scrollToVerse,
  chapterTitle,
  highlights,
  onTextSelect,
  onHighlightClick,
  onShareVerse,
}) => {
  // FIX: The ref is for a div element, not a paragraph.
  const verseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    verseRefs.current = verseRefs.current.slice(0, verses.length);
  }, [verses]);

  useEffect(() => {
    if (scrollToVerse && verseRefs.current[scrollToVerse - 1]) {
      verseRefs.current[scrollToVerse - 1]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [scrollToVerse]);

  return (
    <div
      id="bible-display-content"
      className={`px-4 pt-4 pb-20 md:px-6 md:pt-6 font-serif ${fontSizeClass} transition-all duration-300`}
      onMouseUp={onTextSelect}
    >
      {chapterTitle && (
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400 italic font-sans">
          {chapterTitle}
        </h3>
      )}
      {verses.map((verse, index) => (
        <div 
          key={verse.verse} 
          id={`verse-${verse.verse}`} 
          // FIX: Ref callback should not return a value.
          ref={el => { verseRefs.current[index] = el; }}
          className="mb-4 leading-relaxed flex items-start group"
        >
          <sup className="font-sans font-bold text-blue-600 dark:text-blue-400 mr-2 select-none">
            {verse.verse}
          </sup>
          <p className={`flex-1 ${scrollToVerse === verse.verse ? 'px-1 bg-yellow-200 dark:bg-yellow-700/70 rounded' : ''}`}>
              {renderVerseText(verse, highlights, onHighlightClick)}
          </p>
          <button
            onClick={() => onShareVerse(verse)}
            className="ml-2 p-1 rounded-full text-gray-400 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label={`Share verse ${verse.verse}`}
            title={`Share verse ${verse.verse}`}
          >
            <ShareIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};