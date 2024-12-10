'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchBooks } from '@/services/api';

interface Book {
  id: number;
  name: string;
  description: string;
  author: string;
  price: number;
}

interface BookContextProps {
  books: Book[];
  refreshBooks: () => Promise<void>;
}

export const BookContext = createContext<BookContextProps | undefined>(
  undefined
);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const refreshBooks = async () => {
    const data = await fetchBooks();
    setBooks(data);
  };

  useEffect(() => {
    refreshBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, refreshBooks }}>
      {children}
    </BookContext.Provider>
  );
};
