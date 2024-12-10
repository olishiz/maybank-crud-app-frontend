'use client';

import React, { useState } from 'react';
import { createBook } from '@/services/api';

const CreatePage = () => {
  const [book, setBook] = useState({
    name: '',
    description: '',
    author: '',
    price: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate required fields
      if (!book.name || !book.description || !book.author || book.price <= 0) {
        alert('Please fill in all required fields with valid data.');
        return;
      }

      // Call API to create the book
      await createBook(book);
      alert('Book created successfully!');
      window.location.href = '/'; // Redirect to the list page
    } catch (error) {
      console.error('Error creating book:', error);
      alert('Failed to create book. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create a New Book</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={book.name}
            onChange={(e) => setBook({ ...book, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={book.price}
            onChange={(e) =>
              setBook({ ...book, price: Number(e.target.value) })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
