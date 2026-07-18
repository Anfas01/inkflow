# InkFlow

InkFlow is a clean, modern, and full-stack note-taking application designed for simplicity and efficiency. It provides a seamless user experience for creating, managing, and accessing your notes from anywhere, wrapped in a polished and professional interface.

> **Note:** This project was developed as a portfolio piece to showcase modern full-stack development practices, including a secure REST API, a responsive React frontend, and a clean, maintainable codebase.

---

**[Live Demo](https://your-live-demo-link.com)** | **[GitHub Repository](https://github.com/your-username/inkflow)**

---

## Screenshots

*(Placeholder for a GIF or screenshots of the application)*

`[Desktop View]` `[Mobile View]` `[Note Editor]`

## Features

-   **User Authentication**: Secure user registration and login system using JWT (JSON Web Tokens).
-   **Full CRUD for Notes**: Create, read, update, and delete notes with a clean and intuitive interface.
-   **Modern UI/UX**: A redesigned interface inspired by leading SaaS applications, built for clarity and focus.
-   **Responsive Design**: A beautiful and intuitive interface that works seamlessly on desktops, tablets, and mobile devices.
-   **Private & Secure**: Notes are private to each user, enforced by a secure, token-based authentication system.
-   **Rich User Experience**: Features like skeleton loading, empty states, and confirmation dialogs create a smooth and professional user experience.
-   **Well-structured RESTful API**: A robust backend API for managing users and notes efficiently.

## Tech Stack

| Category      | Technology                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------------- |
| **Frontend**  | React, Vite, Tailwind CSS, React Router, Lucide React                                                  |
| **Backend**   | Node.js, Express, MongoDB, Mongoose                                                                    |
| **Auth**      | JSON Web Tokens (JWT), bcrypt                                                                          |
| **DevOps**    | ESLint, Prettier (recommended)                                                                         |

## Architecture Overview

The project follows a standard monorepo-like structure with two main directories: `frontend` and `backend`.

-   **`frontend/`**: A React (Vite) single-page application that handles the user interface and client-side logic. It communicates with the backend via a RESTful API. Components are structured for reusability and maintainability.
-   **`backend/`**: A Node.js/Express server that exposes the REST API. It handles business logic, database interactions (MongoDB with Mongoose), and user authentication.

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   Node.js (v18.x or newer)
-   `npm` (or `yarn`/`pnpm`)
-   MongoDB (local instance or a cloud-based service like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <https://github.com/your-username/inkflow.git>
    cd inkflow
    ```

2.  **Backend Setup:**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the required environment variables:
    ```env
    # MongoDB connection string
    MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/inkflow?retryWrites=true&w=majority

    # Secret key for signing JWTs (use a long, random string)
    JWT_SECRET=your_jwt_secret_key

    # Port for the backend server
    PORT=5000
    ```

3.  **Frontend Setup:**
    ```sh
     cd ../frontend
     npm install
     ```
    Create a `.env` file in the `frontend` directory:
    ```env
    # Base URL for your backend API
     VITE_API_BASE_URL=http://localhost:5000/api
     ```

### Available Scripts

To start both the backend and frontend servers, run them in separate terminal windows.

-   **Start Backend Server:**
    ```sh
    # From the /backend directory
    npm run dev
    ```
    The server will start on `http://localhost:5000`.

-   **Start Frontend Dev Server:**
    ```sh
    # From the /frontend directory
     npm run dev
     ```
    The application will be available at `http://localhost:5173`.

## API Endpoints

The backend provides the following REST API endpoints:

### Auth Routes

-   `POST /api/auth/register`: Register a new user.
-   `POST /api/auth/login`: Log in an existing user.

### Notes Routes

-   `GET /api/note/get`: Get all notes for the authenticated user.
-   `POST /api/note/create`: Create a new note.
-   `PATCH /api/note/update/:id`: Update an existing note.
-   `DELETE /api/note/delete/:id`: Delete a note.

All note-related routes are protected and require a valid JWT in the `Authorization` header.

