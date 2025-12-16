
import React, { useEffect, useRef } from 'react';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: string;
  onNoteChange: (note: string) => void;
  onSaveNote: () => void;
  showConfirmation: boolean;
  book: string;
  chapter: number;
}

export const NotesModal: React.FC<NotesModalProps> = ({ 
  isOpen, 
  onClose, 
  note, 
  onNoteChange, 
  onSaveNote, 
  showConfirmation,
  book,
  chapter
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      const textarea = modalRef.current?.querySelector('textarea');
      textarea?.focus();
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
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity animate-[fade-in_150ms_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="notes-modal-title"
    >
      <div 
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 id="notes-modal-title" className="text-xl font-bold text-gray-900 dark:text-white">
                Observations for {book} {chapter}
            </h2>
            <button onClick={onClose} aria-label="Close notes" className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className="p-4 md:p-6">
            <textarea
                id="notes"
                rows={12}
                value={note}
                onChange={(e) => onNoteChange(e.target.value)}
                placeholder="Write your notes for this chapter here..."
                className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
        </div>
        
        <div className="flex items-center justify-end p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-lg">
            {showConfirmation && (
            <span className="text-sm text-green-600 dark:text-green-400 mr-4 transition-opacity duration-300">
                Notes saved!
            </span>
            )}
            <button
            onClick={onSaveNote}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors"
            >
            Save Notes
            </button>
        </div>
      </div>
    </div>
  );
};
