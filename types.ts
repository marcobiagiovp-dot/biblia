
export interface BibleVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BibleBook {
  name: string;
  chapters: number;
}

export interface BibleApiResponse {
  reference: string;
  verses: BibleVerse[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

export interface Highlight {
  id: string;
  startVerse: number;
  startOffset: number;
  endVerse: number;
  endOffset: number;
  text: string;
}

export interface ChapterData {
  id: string; // "Book:Chapter"
  book: string;
  chapter: number;
  note: string;
  highlights: Highlight[];
}

export interface SearchResult {
  book: string;
  chapter: number;
  note: string;
}

export interface Contact {
  id: number;
  name: string;
  phone: string;
}
