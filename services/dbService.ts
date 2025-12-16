
import type { SearchResult, ChapterData, Highlight, Contact } from '../types';

interface StoredNote extends SearchResult {
  id: string;
}

const DB_NAME = 'BibleReaderDB';
const STORE_NAME = 'notes';
const CONTACTS_STORE_NAME = 'contacts';
const DB_VERSION = 2;

let db: IDBDatabase;

const getDb = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (db) {
      return resolve(db);
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      console.error("Database error:", (event.target as IDBOpenDBRequest).error);
      reject("Error opening database");
    };

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const dbInstance = (event.target as IDBOpenDBRequest).result;
      if (!dbInstance.objectStoreNames.contains(STORE_NAME)) {
        dbInstance.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
      if (!dbInstance.objectStoreNames.contains(CONTACTS_STORE_NAME)) {
        dbInstance.createObjectStore(CONTACTS_STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
  });
};

const defaultChapterData = (book: string, chapter: number): ChapterData => ({
  id: `${book}:${chapter}`,
  book,
  chapter,
  note: '',
  highlights: [],
});

export const getChapterData = async (book: string, chapter: number): Promise<ChapterData> => {
    const db = await getDb();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const id = `${book}:${chapter}`;
  
    return new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => {
        resolve(request.result || defaultChapterData(book, chapter));
      };
      request.onerror = (event) => {
        console.error('Error getting chapter data:', (event.target as IDBRequest).error);
        reject('Failed to get chapter data.');
      };
    });
};
  
export const saveChapterData = async (data: ChapterData): Promise<void> => {
    const db = await getDb();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
  
    return new Promise((resolve, reject) => {
      store.put(data);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => {
          console.error('Error saving chapter data:', transaction.error);
          reject('Failed to save chapter data.');
      }
    });
};

export const saveNote = async (book: string, chapter: number, note: string): Promise<void> => {
    const data = await getChapterData(book, chapter);
    data.note = note;
    await saveChapterData(data);
};
  
export const getNote = async (book: string, chapter: number): Promise<string> => {
    const data = await getChapterData(book, chapter);
    return data.note;
};

export const addHighlight = async (book: string, chapter: number, highlight: Highlight): Promise<void> => {
    const data = await getChapterData(book, chapter);
    if (!data.highlights.find(h => h.id === highlight.id)) {
      data.highlights.push(highlight);
      await saveChapterData(data);
    }
};

export const removeHighlight = async (book: string, chapter: number, highlightId: string): Promise<void> => {
    const data = await getChapterData(book, chapter);
    data.highlights = data.highlights.filter(h => h.id !== highlightId);
    await saveChapterData(data);
};

export const getAllNotes = async (): Promise<SearchResult[]> => {
  const db = await getDb();
  const transaction = db.transaction(STORE_NAME, 'readonly');
  const store = transaction.objectStore(STORE_NAME);

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => {
      const notes: SearchResult[] = request.result
        .filter((item: ChapterData) => item.note)
        .map((item: ChapterData) => ({
            book: item.book,
            chapter: item.chapter,
            note: item.note,
        }));
      resolve(notes);
    };
    request.onerror = (event) => {
      console.error('Error getting all notes:', (event.target as IDBRequest).error);
      reject('Failed to get all notes.');
    };
  });
};

// Contact Management
export const addContact = async (name: string, phone: string): Promise<number> => {
  const db = await getDb();
  const transaction = db.transaction(CONTACTS_STORE_NAME, 'readwrite');
  const store = transaction.objectStore(CONTACTS_STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.add({ name, phone });
    request.onsuccess = () => resolve(request.result as number);
    request.onerror = () => {
      console.error('Error adding contact:', request.error);
      reject('Failed to add contact.');
    };
  });
};

export const getAllContacts = async (): Promise<Contact[]> => {
  const db = await getDb();
  const transaction = db.transaction(CONTACTS_STORE_NAME, 'readonly');
  const store = transaction.objectStore(CONTACTS_STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      console.error('Error getting all contacts:', request.error);
      reject('Failed to get all contacts.');
    };
  });
};

export const deleteContact = async (id: number): Promise<void> => {
  const db = await getDb();
  const transaction = db.transaction(CONTACTS_STORE_NAME, 'readwrite');
  const store = transaction.objectStore(CONTACTS_STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => {
      console.error('Error deleting contact:', request.error);
      reject('Failed to delete contact.');
    };
  });
};

export const updateContact = async (id: number, name: string, phone: string): Promise<void> => {
  const db = await getDb();
  const transaction = db.transaction(CONTACTS_STORE_NAME, 'readwrite');
  const store = transaction.objectStore(CONTACTS_STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.put({ id, name, phone });
    request.onsuccess = () => resolve();
    request.onerror = () => {
      console.error('Error updating contact:', request.error);
      reject('Failed to update contact.');
    };
  });
};
