# 📝 InkFlow

> A modern full-stack note-taking application built with **React**, **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**.

InkFlow is a clean, responsive, and secure note-taking application that allows users to create, organize, edit, and manage personal notes from anywhere. Built as a portfolio project, it demonstrates modern full-stack development practices, REST API design, authentication, and responsive UI development.

## 🌐 Live Demo

👉 https://inkflow-azure-eta.vercel.app/

## 💻 GitHub Repository

👉 https://github.com/Anfas01/inkflow

---

## 📸 Screenshots

> *(Add screenshots or a GIF here)*

- 🏠 Home Dashboard
- 📝 Note Editor
- 🔐 Login & Register
- 📱 Mobile View

---

# ✨ Features

- 🔐 Secure JWT Authentication
- 📝 Create, Edit & Delete Notes
- 📚 Organize Personal Notes
- 🔍 Fast & Clean User Experience
- 📱 Fully Responsive Design
- 🚀 Modern Minimal UI
- ⚡ RESTful API Architecture
- 🔒 Protected Routes
- 💾 MongoDB Database Integration
- 🎨 Beautiful Tailwind CSS Interface

---

# 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- JWT (JSON Web Tokens)
- bcrypt

### Deployment

- Vercel
- MongoDB Atlas

---

# 🏗 Architecture

```
React (Vite)
      │
      ▼
 REST API (Express)
      │
      ▼
Authentication (JWT)
      │
      ▼
MongoDB Atlas
```

---

# 📂 Project Structure

```
InkFlow
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   └── assets/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── utils/
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/Anfas01/inkflow.git

cd inkflow
```

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

PORT=5000
```

Run the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file.

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Run the frontend:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# 📦 Available Scripts

### Backend

```bash
npm run dev
```

Starts the Express development server.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

---

# 🔐 Authentication

InkFlow uses JWT-based authentication.

- User Registration
- User Login
- Protected API Routes
- Password Hashing with bcrypt
- Token Verification Middleware

---

# 📚 REST API

### Authentication

```
POST /api/auth/register

POST /api/auth/login
```

### Notes

```
GET    /api/note/get

POST   /api/note/create

PATCH  /api/note/update/:id

DELETE /api/note/delete/:id
```

All note endpoints require a valid JWT.

---

# 💡 What I Learned

Building InkFlow helped me gain practical experience with:

- Designing RESTful APIs
- JWT Authentication & Authorization
- MongoDB & Mongoose
- Express Middleware
- React State Management
- Responsive UI Design
- Tailwind CSS
- API Integration
- Project Structure & Clean Code
- Full-Stack Application Deployment

---

# 🚧 Challenges

Some of the challenges I solved while building InkFlow:

- Implementing secure JWT authentication
- Protecting user-specific data
- Building reusable React components
- Managing API communication between frontend and backend
- Structuring a scalable full-stack project
- Creating a responsive and intuitive user interface

---

# 🔮 Future Improvements

- Rich Text Editor
- Categories & Tags
- Note Search
- Dark / Light Theme
- Archive & Trash
- Pin Important Notes
- Markdown Support
- File Attachments
- Unit & Integration Testing
- Docker Support

---

# 🙌 Acknowledgements

- React
- Express.js
- MongoDB
- Tailwind CSS
- Vercel

---

# 👨‍💻 Author

**Anfas**

- GitHub: https://github.com/Anfas01
- LinkedIn: http://www.linkedin.com/in/-anfas-m
- Portfolio: https://anfas01-github-io.vercel.app

---

⭐ If you found this project interesting, consider giving it a star!
