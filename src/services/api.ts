import axios from 'axios';

const API_URL = 'http://localhost:3000/books';

// Fetch all books
export const fetchBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fetch a single book
export const fetchBookById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create a new book
export const createBook = async (book: any) => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

// Update an existing book
export const updateBook = async (id: number, book: any) => {
  const response = await axios.put(`${API_URL}/${id}`, book);
  return response.data;
};

// Delete a book
export const deleteBook = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
