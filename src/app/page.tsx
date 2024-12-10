'use client';

import React, { useContext } from 'react';
import { BookContext } from '@/context/BookContext';
import { deleteBook } from '@/services/api';

const ListPage = () => {
  const { books, refreshBooks } = useContext(BookContext)!;

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this book?')) {
      await deleteBook(id);
      alert('Book deleted successfully!');
      await refreshBooks();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Books List</h1>
      {books.length === 0 ? (
        <p className="text-gray-500">No books available. Create one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-bold">Book name: {book.name}</h2>
                <p className="text-gray-500">Description: {book.description}</p>
                <p className="text-sm text-gray-400">Author: {book.author}</p>
                <p className="text-sm text-gray-400">Price: RM {book.price}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href={`/${book.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View / Edit
                </a>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPage;
