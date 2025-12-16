
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { BibleSelector } from './components/BibleSelector';
import { BibleDisplay } from './components/BibleDisplay';
import { Footer } from './components/Footer';
import { NotesModal } from './components/Notes';
import { SearchModal } from './components/SearchModal';
import { ContactsModal } from './components/ContactsModal';
import { ShareModal } from './components/ShareModal';
import { HighlightPopover } from './components/HighlightPopover';
import { RemoveHighlightPopover } from './components/RemoveHighlightPopover';
import { SplashScreen } from './components/SplashScreen';
import { BIBLE_BOOKS, FONT_SIZES, CHAPTER_TITLES } from './constants';
import { fetchChapter } from './services/bibleService';
import { getChapterData, saveNote, getAllNotes, addHighlight, removeHighlight, getAllContacts, addContact, deleteContact, updateContact } from './services/dbService';
import type { BibleVerse, SearchResult, Highlight, Contact } from './types';
import { ChevronLeftIcon, ChevronRightIcon } from './components/icons';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [fontSizeIndex, setFontSizeIndex] = useState<number>(2); // Default to 'text-lg'

  const [selectedBook, setSelectedBook] = useState<string>(BIBLE_BOOKS[0].name);
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [scrollToVerse, setScrollToVerse] = useState<number | null>(null);
  
  const [verses, setVerses] = useState<BibleVerse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [chapterTitle, setChapterTitle] = useState<string | null>(null);
  
  const [isNotesModalOpen, setIsNotesModalOpen] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');
  const [showSaveConfirmation, setShowSaveConfirmation] = useState<boolean>(false);
  
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const [isContactsModalOpen, setIsContactsModalOpen] = useState<boolean>(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [verseToShare, setVerseToShare] = useState<BibleVerse | null>(null);

  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [popover, setPopover] = useState<{ top: number; left: number; range: Range } | null>(null);
  const [removePopover, setRemovePopover] = useState<{ top: number; left: number; highlightId: string } | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const loadContacts = useCallback(async () => {
    try {
        const savedContacts = await getAllContacts();
        setContacts(savedContacts);
    } catch(err) {
        console.error("Failed to load contacts:", err);
    }
  }, []);

  useEffect(() => {
    if (showSplash) return;
    loadContacts();
  }, [showSplash, loadContacts]);

  const loadChapter = useCallback(async (book: string, chapter: number) => {
    setIsLoading(true);
    setError(null);
    setScrollToVerse(null);

    const title = CHAPTER_TITLES[book]?.[chapter - 1] || null;
    setChapterTitle(title);

    try {
      const [chapterData, chapterVerses] = await Promise.all([
        getChapterData(book, chapter),
        fetchChapter(book, chapter)
      ]);
      setNote(chapterData.note || '');
      setHighlights(chapterData.highlights || []);
      setVerses(chapterVerses);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      setVerses([]);
      setNote('');
      setHighlights([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (showSplash) return;
    loadChapter(selectedBook, selectedChapter);
  }, [showSplash, selectedBook, selectedChapter, loadChapter]);
  
  useEffect(() => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
    }
  }, [selectedBook, selectedChapter]);

  // Handle note searching
  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim().length > 1) {
        try {
          const allNotes = await getAllNotes();
          const filteredResults = allNotes.filter(item =>
            item.note.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSearchResults(filteredResults);
        } catch (error) {
          console.error("Failed to search notes:", error);
        }
      } else {
        setSearchResults([]);
      }
    };
    if (searchQuery) {
        performSearch();
    }
  }, [searchQuery]);


  const handleBookChange = (book: string) => {
    setSelectedBook(book);
    setSelectedChapter(1);
  };

  const handleChapterChange = (chapter: number) => {
    setSelectedChapter(chapter);
  };
  
  const handleVerseChange = (verse: number) => {
    setScrollToVerse(verse);
  };

  const increaseFontSize = () => {
    setFontSizeIndex((prev) => Math.min(prev + 1, FONT_SIZES.length - 1));
  };

  const decreaseFontSize = () => {
    setFontSizeIndex((prev) => Math.max(prev - 1, 0));
  };

  const currentBook = BIBLE_BOOKS.find(b => b.name === selectedBook) || BIBLE_BOOKS[0];

  const handlePreviousChapter = () => {
      if (selectedChapter > 1) {
          setSelectedChapter(prev => prev - 1);
      }
  };

  const handleNextChapter = () => {
      if (currentBook && selectedChapter < currentBook.chapters) {
          setSelectedChapter(prev => prev + 1);
      }
  };

  const handleSaveNote = async () => {
    try {
      await saveNote(selectedBook, selectedChapter, note);
      setShowSaveConfirmation(true);
      const timer = setTimeout(() => {
          setShowSaveConfirmation(false);
      }, 3000); // Hide message after 3 seconds
      return () => clearTimeout(timer);
    } catch (error) {
      console.error("Failed to save note:", error);
      alert("There was an error saving your note. Please try again.");
    }
  };

  const handleSearchResultClick = (book: string, chapter: number) => {
    setSelectedBook(book);
    setSelectedChapter(chapter);
    setIsSearchModalOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleCloseSearch = () => {
    setIsSearchModalOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (removePopover) setRemovePopover(null);

    if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
      if(popover) setPopover(null); // Hide popover if selection is cleared
      return;
    }
  
    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();
  
    let parent = range.commonAncestorContainer.parentElement;
    let inBibleDisplay = false;
    while(parent) {
      if (parent.id === 'bible-display-content') {
        inBibleDisplay = true;
        break;
      }
      parent = parent.parentElement;
    }
    
    if (selectedText && inBibleDisplay) {
      const rect = range.getBoundingClientRect();
      setPopover({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX + rect.width / 2,
        range: range,
      });
    } else {
      if (popover) setPopover(null);
    }
  };
  
  const handleSaveHighlight = async () => {
    if (!popover) return;
    
    const { range } = popover;
    
    const getVerseNumber = (node: Node): number | null => {
        let current = node.nodeType === Node.TEXT_NODE ? node.parentElement : node as Element;
        while (current) {
            if (current.id && current.id.startsWith('verse-')) {
                return parseInt(current.id.split('-')[1], 10);
            }
            current = current.parentElement;
        }
        return null;
    }
    
    const startVerse = getVerseNumber(range.startContainer);
    const endVerse = getVerseNumber(range.endContainer);

    if (startVerse === null || endVerse === null) {
        console.error("Could not determine verse for highlight.");
        setPopover(null);
        return;
    }

    const newHighlight: Highlight = {
        id: Date.now().toString(),
        startVerse,
        endVerse,
        startOffset: range.startOffset,
        endOffset: range.endOffset,
        text: range.toString(),
    };

    try {
      await addHighlight(selectedBook, selectedChapter, newHighlight);
      setHighlights(prev => [...prev, newHighlight]);
    } catch(error) {
      console.error("Failed to save highlight:", error);
      alert("There was an error saving your highlight. Please try again.");
    } finally {
      setPopover(null);
      window.getSelection()?.removeAllRanges();
    }
  };

  const handleHighlightClick = (highlight: Highlight, event: React.MouseEvent) => {
    if (popover) setPopover(null);
    window.getSelection()?.removeAllRanges();

    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setRemovePopover({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX + rect.width / 2,
      highlightId: highlight.id,
    });
  };

  const handleRemoveHighlight = async () => {
    if (!removePopover) return;

    try {
      await removeHighlight(selectedBook, selectedChapter, removePopover.highlightId);
      setHighlights(prev => prev.filter(h => h.id !== removePopover.highlightId));
    } catch(error) {
      console.error("Failed to remove highlight:", error);
      alert("There was an error removing your highlight. Please try again.");
    } finally {
      setRemovePopover(null);
    }
  };

  const handleAddContact = async (name: string, phone: string) => {
    try {
      const newId = await addContact(name, phone);
      setContacts(prev => [...prev, { id: newId, name, phone }]);
    } catch(error) {
      console.error("Failed to add contact:", error);
      alert("There was an error adding the contact. Please try again.");
    }
  };

  const handleDeleteContact = async (id: number) => {
    try {
      await deleteContact(id);
      setContacts(prev => prev.filter(c => c.id !== id));
    } catch(error) {
      console.error("Failed to delete contact:", error);
      alert("There was an error deleting the contact. Please try again.");
    }
  };

  const handleUpdateContact = async (id: number, name: string, phone: string) => {
    try {
      await updateContact(id, name, phone);
      setContacts(prev => prev.map(c => c.id === id ? { id, name, phone } : c));
    } catch(error) {
      console.error("Failed to update contact:", error);
      alert("There was an error updating the contact. Please try again.");
    }
  };

  const handleShareVerse = (verse: BibleVerse) => {
    setVerseToShare(verse);
    setIsShareModalOpen(true);
  };

  const handleSelectContactToShare = (contact: Contact) => {
    if (verseToShare) {
      // In a real app, you would integrate with a sharing API (e.g., Web Share API, or send an SMS via a backend)
      alert(`Sharing "${verseToShare.book_name} ${verseToShare.chapter}:${verseToShare.verse} - ${verseToShare.text}" with ${contact.name} (${contact.phone})`);
      setIsShareModalOpen(false);
      setVerseToShare(null);
    }
  };


  return (
    <>
      <SplashScreen isVisible={showSplash} />
      {!showSplash && (
        <div className="flex flex-col h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 animate-[fade-in_500ms_ease-in-out]">
          <Header
            isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
          />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col overflow-hidden">
            <BibleSelector
              selectedBook={selectedBook}
              onBookChange={handleBookChange}
              selectedChapter={selectedChapter}
              onChapterChange={handleChapterChange}
              verses={verses}
              onVerseChange={handleVerseChange}
            />
            <div className="flex flex-col flex-1 overflow-hidden min-h-0 mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex-1 flex justify-start">
                    <button
                    onClick={handlePreviousChapter}
                    disabled={selectedChapter === 1}
                    aria-label="Previous Chapter"
                    className="p-2 rounded-full text-gray-600 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                    <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mx-4">
                  {`${selectedBook} ${selectedChapter}`}
                </h2>
                <div className="flex-1 flex justify-end items-center">
                    <button
                    onClick={handleNextChapter}
                    disabled={selectedChapter === (currentBook?.chapters || Infinity)}
                    aria-label="Next Chapter"
                    className="p-2 rounded-full text-gray-600 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                    <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>
              </div>

              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto"
                onClick={() => {
                  if (popover) setPopover(null);
                  if (removePopover) setRemovePopover(null);
                }}
              >
                {isLoading ? (
                  <div className="h-full flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
                  </div>
                ) : error ? (
                  <div className="p-4 md:p-6">
                    <div className="bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 rounded-md" role="alert">
                      <p className="font-bold">Error</p>
                      <p>{error}</p>
                    </div>
                  </div>
                ) : verses.length === 0 ? (
                  <div className="h-full flex justify-center items-center text-center text-gray-500 dark:text-gray-400">
                     <p>No verses to display.</p>
                  </div>
                ) : (
                  <BibleDisplay
                    verses={verses}
                    fontSizeClass={FONT_SIZES[fontSizeIndex]}
                    scrollToVerse={scrollToVerse}
                    chapterTitle={chapterTitle}
                    highlights={highlights}
                    onTextSelect={handleTextSelection}
                    onHighlightClick={handleHighlightClick}
                    onShareVerse={handleShareVerse}
                  />
                )}
              </div>
            </div>
          </main>
          <Footer
            onNotesClick={() => setIsNotesModalOpen(true)}
            onSearchClick={() => setIsSearchModalOpen(true)}
            onContactsClick={() => setIsContactsModalOpen(true)}
          />
          {popover && (
            <HighlightPopover
              top={popover.top}
              left={popover.left}
              onHighlight={handleSaveHighlight}
            />
          )}
          {removePopover && (
            <RemoveHighlightPopover
              top={removePopover.top}
              left={removePopover.left}
              onRemove={handleRemoveHighlight}
            />
          )}
           <NotesModal 
            isOpen={isNotesModalOpen}
            onClose={() => setIsNotesModalOpen(false)}
            note={note}
            onNoteChange={setNote}
            onSaveNote={handleSaveNote}
            showConfirmation={showSaveConfirmation}
            book={selectedBook}
            chapter={selectedChapter}
          />
          <SearchModal
            isOpen={isSearchModalOpen}
            onClose={handleCloseSearch}
            query={searchQuery}
            onQueryChange={setSearchQuery}
            results={searchResults}
            onResultClick={handleSearchResultClick}
          />
          <ContactsModal
            isOpen={isContactsModalOpen}
            onClose={() => setIsContactsModalOpen(false)}
            contacts={contacts}
            onAddContact={handleAddContact}
            onDeleteContact={handleDeleteContact}
            onUpdateContact={handleUpdateContact}
          />
          <ShareModal
            isOpen={isShareModalOpen}
            onClose={() => setIsShareModalOpen(false)}
            verseToShare={verseToShare}
            contacts={contacts}
            onShare={handleSelectContactToShare}
          />
        </div>
      )}
    </>
  );
};

export default App;
