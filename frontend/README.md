# Notes App

A full-stack MERN notes application with AI-powered features and rate limiting powered by Upstash Redis.

## About

Notes App is a clean, minimal note-taking app built for people who want to capture ideas fast without the clutter. You can create, view, edit, and delete notes — all persisted in MongoDB and served through a RESTful Express API.

What sets it apart is the built-in AI assistant. When writing or reviewing a note, you can ask the AI to summarize the content, suggest improvements, expand on an idea, or generate a title — all without leaving the app. It's like having a writing partner that actually understands context.

The app also handles traffic gracefully with Upstash Redis rate limiting, so it stays stable under load. The UI is built with a dark forest theme using DaisyUI, keeping things easy on the eyes during long writing sessions.

## Tech Stack

**Frontend**
- React 19 + Vite
- React Router v7
- Tailwind CSS + DaisyUI (forest theme)
- Axios
- React Hot Toast
- Lucide React

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Upstash Redis (rate limiting via sliding window)
- dotenv, cors

## Project Structure

```
├── backend/
│   └── src/
│       ├── config/         # DB and Upstash Redis config
│       ├── controllers/    # Notes CRUD logic
│       ├── middleware/     # Rate limiter middleware
│       ├── Model/          # Mongoose Note schema
│       ├── routes/         # API routes
│       └── server.js
└── frontend/
    └── src/
        ├── components/     # Navbar, NoteCard, NotesNotFound, RateLimitedUI
        ├── lib/            # Axios instance
        ├── pages/          # Homepage, CreatePage, NoteDetailPage
        └── App.jsx
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| POST | `/api/notes` | Create a note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

Rate limit: 10 requests per 20 seconds (sliding window).

## Getting Started

### Prerequisites
- Node.js
- MongoDB instance (local or Atlas)
- Upstash Redis account

### Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`, backend on `http://localhost:5001`.
