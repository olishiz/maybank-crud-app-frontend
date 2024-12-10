'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchBookById, updateBook } from '@/services/api';

const DetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await fetchBookById(Number(id));
        setBook(data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error('Error fetching book:', err);
        setError('Failed to load book details. Please try again.');
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    if (id) fetchBook();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBook(Number(id), book); // Send updated book data to the backend
      alert('Book updated successfully!');
      window.location.href = '/'; // Redirect to the list page
    } catch (err) {
      console.error('Error updating book:', err);
      setError('Failed to update book. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="text-red-500 bg-red-100 p-4 rounded">
        <p>{error}</p>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Book</h1>
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default DetailPage;
