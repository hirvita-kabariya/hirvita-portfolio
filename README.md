# Hirvita Portfolio

Personal portfolio website for Hirvita Kabariya, built with React + Vite, including an AI chat assistant powered by Groq.

## Features

- Modern single-page portfolio (About, Experience, Skills, Projects)
- Interactive UI and responsive design
- Embedded AI assistant ("Ask Hirvita")
- Public deployment-ready API via Vercel Serverless Functions

## Tech Stack

- Frontend: React, Vite
- Backend (local): Express
- Hosted API (production): Vercel Functions (`api/chat.js`)
- AI Provider: Groq API

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Create `.env` in the project root:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.3-70b-versatile
```

### 3) Run app

Run frontend + local backend together:

```bash
npm run dev:full
```

Or run separately:

```bash
# Terminal 1
npm run server

# Terminal 2
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import repository in Vercel.
3. Keep preset as `Vite`.
4. Add environment variables in Vercel:
   - `GROQ_API_KEY`
   - `GROQ_MODEL` (optional, defaults to `llama-3.3-70b-versatile`)
5. Deploy.

Your live URL will be in the format:
`https://your-project-name.vercel.app`

## Security Notes

- Never commit `.env`.
- Keep `GROQ_API_KEY` private (use local `.env` and Vercel env vars only).

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run server` - Start local Express API server
- `npm run dev:full` - Run frontend and backend together
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
