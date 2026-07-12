# InkFlow

InkFlow is a clean, modern, and full-stack note-taking application. It provides a seamless user experience for creating, managing, and accessing your notes from anywhere. The project is built with a React frontend and a Node.js/Express backend.

## Features

-   **User Authentication**: Secure user registration and login system using JWT (JSON Web Tokens).
-   **CRUD Operations for Notes**:
    -   **Create**: Add new notes with a title and content.
    -   **Read**: View all your notes or a single note in detail.
    -   **Update**: Edit existing notes.
    -   **Delete**: Remove notes you no longer need.
-   **Responsive Design**: A beautiful and intuitive interface built with Tailwind CSS that works on all devices.
-   **Private Notes**: Each user can only access their own notes.
-   **RESTful API**: A well-structured backend API for managing users and notes.

## Tech Stack

-   **Frontend**:
    -   [React](https://reactjs.org/)
    -   [Vite](https://vitejs.dev/)
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [React Router](https://reactrouter.com/)
-   **Backend**:
    -   [Node.js](https://nodejs.org/)
    -   [Express](https://expressjs.com/)
    -   [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
    -   [JSON Web Tokens (JWT)](https://jwt.io/) for authentication
    -   [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing

## Project Structure

The project is organized into two main directories:

-   `frontend/`: Contains the React application, components, pages, and services.
-   `backend/`: Contains the Node.js/Express server, API routes, controllers, models, and middleware.

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   Node.js (v18.x or higher)
-   npm or yarn
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
    Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    # Your MongoDB connection string
    MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/inkflow?retryWrites=true&w=majority

    # A secret key for signing JWTs (can be any random string)
    JWT_SECRET=your_jwt_secret_key

    # The port for the backend server
    PORT=5000
    ```
    Start the backend server:
    ```sh
    npm run dev
    ```
    The server will be running on `http://localhost:5000`.

3.  **Frontend Setup:**
    ```sh
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory and add the following:
    ```env
    # The base URL for your backend API
    VITE_API_BASE_URL=http://localhost:5000/api
    ```
    Start the frontend development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## API Endpoints

The backend provides the following REST API endpoints:

### Auth Routes

-   `POST /api/users/register`: Register a new user.
-   `POST /api/users/login`: Log in an existing user.

### Notes Routes

-   `GET /api/notes`: Get all notes for the authenticated user.
-   `GET /api/notes/:id`: Get a single note by its ID.
-   `POST /api/notes`: Create a new note.
-   `PATCH /api/notes/:id`: Update an existing note.
-   `DELETE /api/notes/:id`: Delete a note.

All note-related routes are protected and require a valid JWT in the `Authorization` header.
