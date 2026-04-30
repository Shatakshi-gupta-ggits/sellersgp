# Sellers Growth Point (SGP)

This project contains the frontend and backend applications for Sellers Growth Point.

## Architecture

- **Frontend**: A modern web application built with React, Vite, and TanStack Start. Hosted in the root directory.
- **Backend**: A functional Express server located in the `backend/` directory, using a simple local `data.json` file for immediate persistence without the need for a complex database setup.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB URI (Local or Atlas)

### 1. Running the Backend

The Express backend handles the API endpoints and uses MongoDB for production-ready data persistence.

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Set up environment variables:
   - Create a `.env` file in the `backend/` directory.
   - Add your connection string: `MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/database_name`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The backend will run on `http://localhost:5000`.*

### 2. Running the Frontend

The frontend uses Vite, and requests to `/api` are automatically proxied to the backend at `http://localhost:5000/api`.

1. Open a new terminal and stay in the root directory.
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on `http://localhost:8080` (or another port chosen by Vite).*

---

## API Endpoints Overview

The following endpoints are functional and persist data to `backend/data.json`:

### Contact Route
- `POST /api/contact` - Submits a new lead from the contact form.

### Admin Routes
- `GET /api/admin?resource=services` - Retrieves the list of available services.
- `GET /api/admin?resource=leads` - Retrieves the list of leads.
- `GET /api/admin?resource=stats` - Retrieves overview statistics for the admin dashboard.
- `POST /api/admin` - Handles state mutation based on `action` payload:
  - `{ "action": "toggleService", "id": "..." }`
  - `{ "action": "updateLeadStatus", "id": "...", "status": "..." }`
  - `{ "action": "deleteLead", "id": "..." }`
