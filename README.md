# Blog System

A modern, full-stack blog application built with React.js and Node.js, featuring user authentication, CRUD operations for blog posts, and a responsive dark mode design.

## Features

- 🔐 **User Authentication**

  - Secure login and registration
  - Protected routes
  - Persistent authentication state
  - JWT-based authentication

- 📝 **Blog Post Management**

  - Create, read, update, and delete blog posts
  - Rich text editing
  - Image URL support
  - Post listing with pagination

- 🎨 **Modern UI/UX**

  - Responsive design
  - Dark mode support
  - Clean and intuitive interface
  - Loading states and error handling

- 🔄 **Real-time Updates**
  - Immediate UI updates after actions
  - Optimistic updates for better UX
  - Proper error handling and recovery

## Tech Stack

### Frontend

- React.js
- React Router for navigation
- React Hook Form for form handling
- Context API for state management
- Tailwind CSS for styling

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- CORS enabled

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd blog-system
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Install backend dependencies:

```bash
cd ../backend
npm install
```

4. Create a `.env` file in the backend directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Running the Application

1. Start the backend server:

```bash
cd backend
npm start
```

2. Start the frontend development server:

```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
blog-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Posts

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Author

Ahmed Assem Mohamed
