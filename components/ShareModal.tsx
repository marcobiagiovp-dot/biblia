
import React, { useEffect, useRef } from 'react';
import type { Contact, BibleVerse } from '../types';
import { ShareIcon, UsersIcon } from './icons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  contacts: Contact[];
  verseToShare: BibleVerse | null;
  onShare: (contact: Contact) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  contacts,
  verseToShare,
  onShare,
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
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !verseToShare) {
    return null;
  }

  const verseReference = `${verseToShare.book_name} ${verseToShare.chapter}:${verseToShare.verse}`;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity animate-[fade-in_150ms_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg transform transition-all flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 id="share-modal-title" className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <ShareIcon className="h-6 w-6 mr-3" />
            Share Verse
          </h2>
          <button onClick={onClose} aria-label="Close share modal" className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-4 border-b border-gray-200 dark:border-gray-700">
            <p className="font-bold text-blue-600 dark:text-blue-400">{verseReference}</p>
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
                "{verseToShare.text}"
            </blockquote>
        </div>

        <div className="flex-1 p-4 md:p-6 overflow-y-auto max-h-[50vh]">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center">
                <UsersIcon className="h-5 w-5 mr-2" />
                Select a Contact
            </h3>
          {contacts.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">You haven't added any contacts to share with.</p>
          ) : (
            <ul className="space-y-2">
              {contacts.map((contact) => (
                <li key={contact.id}>
                    <button 
                        onClick={() => onShare(contact)}
                        className="w-full text-left flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                    >
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-gray-100">{contact.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{contact.phone}</p>
                        </div>
                        <ShareIcon className="h-5 w-5 text-blue-500" />
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
