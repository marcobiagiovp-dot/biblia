
import type { BibleApiResponse, BibleVerse } from '../types';

const API_URL = 'https://bible-api.com/';

export const fetchChapter = async (book: string, chapter: number): Promise<BibleVerse[]> => {
  const query = `${book} ${chapter}`;
  
  try {
    const response = await fetch(`${API_URL}${encodeURIComponent(query)}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('This chapter could not be found. Please check the book and chapter number.');
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: BibleApiResponse = await response.json();
    return data.verses;

  } catch (error) {
    console.error('Error fetching Bible chapter:', error);
    throw new Error('Failed to load Bible chapter. Please check your network connection and try again.');
  }
};
