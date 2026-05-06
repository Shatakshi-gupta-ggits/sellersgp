# Sellers Growth Point (SGP)

This repository is now a standard Vite + React app that can be deployed to Vercel as a static site, with a small serverless API route for contact form submissions.

## Current Architecture

- **Frontend**: React + Vite + `react-router-dom`
- **Build output**: static files generated into `dist/`
- **Routing**: client-side React Router
- **API**: serverless endpoint at `api/contact.ts`
- **Deployment target**: Vercel static site with a Vite build

## What changed

### Previous version
- Used **TanStack Start / TanStack React Router / Nitro**
- Had generated route files like `src/routeTree.gen.ts` and `src/routes/__root.tsx`
- Included old server-side runtime code and TanStack-specific plugins/plugins hooks
- Had stale backend/server references and a `package-lock.json` containing TanStack packages

### Current version
- Removed all `@tanstack/*` imports and files
- Replaced routing with `react-router-dom`
- Removed legacy Nitro/TanStack route generation
- Kept the app as a normal Vite buildable static site
- Added `api/contact.ts` as a simple Vercel serverless POST endpoint
- Confirmed `vercel.json` is configured for Vite static deployment

## Why this can deploy to Vercel now

Yes — this code can now be deployed to Vercel.

- `package.json` uses `vite build` as the build command
- `vercel.json` points `outputDirectory` to `dist`
- All client routes are rewritten to `index.html` for SPA routing
- The `api/` folder contains a simple serverless function for `POST /api/contact`
- Admin leads now fetch real submissions from `GET /api/leads`

## Setup and local run

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```

Visit the local URL shown by Vite.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## Deploy to Vercel

If you use the Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel
```

Or connect your repo from the Vercel dashboard.

## Notes

- The current contact API in `api/contact.ts` accepts `POST` requests, logs the payload, and returns a success response.
- There is no longer a separate Express backend or MongoDB dependency in this repo.
- The app is now a Vercel-friendly static Vite project with optional serverless API support.
