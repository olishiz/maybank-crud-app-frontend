
# CRUD Application with Next.js and TailwindCSS

A simple CRUD (Create, Read, Update, Delete) application for managing books. This app is built using **Next.js**, **TailwindCSS**, and connects to a backend API for data management.

## Features

- **List View**: View a list of all books.
- **Create Book**: Add a new book with details like name, description, author, and price.
- **Edit Book**: Update book details using a dynamic route.
- **Delete Book**: Remove a book from the list.
- **Responsive Design**: Styled using TailwindCSS for a clean and responsive UI.

---

## Technologies Used

### Frontend
- **Next.js**: For server-side rendering and file-based routing.
- **TailwindCSS**: For styling the application.

---

## Installation and Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/your-repo/crud-app.git
cd crud-app
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:3030` to see the app in action.

---

## Project Structure

```plaintext
src/
├── app/                # Next.js app directory (File-based routing)
│   ├── create/         # Route for creating books
│   │   ├── page.tsx
│   ├── [id]/           # Dynamic route for viewing/editing books
│   │   ├── page.tsx
│   ├── page.tsx        # Home page (list view)
├── context/            # Context API for state management
├── services/           # API service functions (Axios)
└── styles/             # TailwindCSS global styles
```

---

## API Endpoints

- **GET /books**: Fetch all books.
- **GET /books/:id**: Fetch a single book by ID.
- **POST /books**: Create a new book.
- **PUT /books/:id**: Update a book by ID.
- **DELETE /books/:id**: Delete a book by ID.

---

## How to Use

1. Navigate to the home page (`/`) to view the list of books.
2. Click **"Create"** to add a new book.
3. Click **"View/Edit"** on any book to update its details.
4. Click **"Delete"** to remove a book.

---

## License

This project is licensed under the MIT License.

---

## Author

Developed by Oliver Sim.
