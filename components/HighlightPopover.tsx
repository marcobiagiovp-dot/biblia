
import React from 'react';
import { HighlighterIcon } from './icons';

interface HighlightPopoverProps {
  top: number;
  left: number;
  onHighlight: () => void;
}

export const HighlightPopover: React.FC<HighlightPopoverProps> = ({ top, left, onHighlight }) => {
  return (
    <div
      className="absolute z-20 bg-gray-900/90 dark:bg-gray-700/90 text-white rounded-md shadow-lg p-1 flex items-center space-x-1"
      style={{ top: `${top}px`, left: `${left}px`, transform: 'translate(-50%, -120%)' }}
      // Prevent mouse up on the popover from re-triggering the selection logic
      onMouseUp={e => e.stopPropagation()} 
      onMouseDown={e => e.stopPropagation()}
    >
      <button 
        onClick={onHighlight}
        className="p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        title="Highlight text"
        aria-label="Highlight selected text"
      >
        <HighlighterIcon className="h-5 w-5 text-yellow-300" />
      </button>
    </div>
  );
};
