'use client';

import '../styles/globals.css';
import { BookProvider } from '../context/BookContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <BookProvider>
          <nav className="bg-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <a href="/" className="text-lg font-bold">
                Books App
              </a>
              <div className="flex space-x-4">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <a href="/create" className="hover:underline">
                  Create
                </a>
              </div>
            </div>
          </nav>
          <main className="container mx-auto px-4 py-6">{children}</main>
        </BookProvider>
      </body>
    </html>
  );
}
