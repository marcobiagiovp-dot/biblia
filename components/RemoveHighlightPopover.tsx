
import React from 'react';
import { TrashIcon } from './icons';

interface RemoveHighlightPopoverProps {
  top: number;
  left: number;
  onRemove: () => void;
}

export const RemoveHighlightPopover: React.FC<RemoveHighlightPopoverProps> = ({ top, left, onRemove }) => {
  return (
    <div
      className="absolute z-20 bg-gray-900/90 dark:bg-gray-700/90 text-white rounded-md shadow-lg p-1 flex items-center space-x-1"
      style={{ top: `${top}px`, left: `${left}px`, transform: 'translate(-50%, -120%)' }}
      onMouseUp={e => e.stopPropagation()} 
      onMouseDown={e => e.stopPropagation()}
    >
      <button 
        onClick={onRemove}
        className="p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        title="Remove highlight"
        aria-label="Remove selected highlight"
      >
        <TrashIcon className="h-5 w-5 text-red-400" />
      </button>
    </div>
  );
};
