# Deployment Guide

This project deploys as:
- Frontend: GitHub Pages (served under `/personaldevsite/`)
- Backend: Railway (Express API)

Use this guide to deploy and wire them together.

## Overview
- Local dev:
  - Backend: `http://localhost:5050` (watch + background scripts available)
  - Frontend: `http://localhost:5173` (proxies `/api` → backend)
- Production:
  - Frontend is built by Actions and deployed to Pages
  - Backend runs on Railway; you set `VITE_API_BASE` in repo variables to point the frontend at your backend

## 1) Backend on Railway

1. Push code to GitHub (already done in `main`).
2. In Railway, create a new project → "Deploy from GitHub" → connect `Travis-Code/personaldevsite`.
3. Configure as a monorepo service:
   - Root directory: `backend`
   - Start command: `npm start`
4. Set environment variables in Railway (Settings → Variables):
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://travis-code.github.io/personaldevsite` (adjust for your account)
   - `EMAIL_SERVICE=gmail` (or your provider)
   - `EMAIL_USER=...` (sender)
   - `EMAIL_PASSWORD=...` (app password or provider secret)
   - `EMAIL_TO=...` (notification recipient)
   - Do NOT set a static `PORT`; Railway provides `PORT` automatically and the app reads it.
5. Deploy. After deploy succeeds, copy the public URL, e.g. `https://<your-app>.up.railway.app`.

Notes:
- CORS is configured to allow your `FRONTEND_URL` and localhost dev.
- Rate limiting on `/api/contact`: 5 requests / 15 minutes per IP.
- Email is optional; without credentials, contact returns an error.

## 2) Frontend on GitHub Pages

The repo includes a GitHub Actions workflow that builds and publishes the frontend to Pages.

1. In GitHub → repo Settings → Pages → set Source to "GitHub Actions".
2. Set a repo variable for the API base:
   - Settings → Variables → Actions → "New repository variable"
   - Name: `VITE_API_BASE`
   - Value: `https://<your-railway-app>.up.railway.app/api`
3. Push to `main` (or re-run the workflow) to publish.
4. Pages URL will be `https://travis-code.github.io/personaldevsite/`.

Vite is configured with `base: '/personaldevsite/'` so assets resolve correctly on Pages.

## 3) Local Development

Backend:
```bash
cd backend
# dev watcher
npm run dev
# or background mode
npm run dev:bg
# logs
tail -f server.log
# stop background
npm run stop:bg
```

Frontend:
```bash
cd frontend
# dev server
npm run dev
# or background mode
npm run dev:bg
# logs
tail -f vite.log
# stop background
npm run stop:bg
```

Health checks:
```bash
# direct backend
curl -sS http://localhost:5050/api/health
# via proxy
curl -sS http://localhost:5173/api/health
```

## 4) Verifying Production

After Pages and Railway are live:
- Open the Pages site and check the Projects page (should load cards from `/api/projects`).
- Submit the Contact form; expect success if email creds are valid, or a helpful error if not.

## 5) Troubleshooting

- Port conflicts locally:
  - Backend moved to `5050` to avoid common conflicts on `5000`.
  - Use `lsof -i :5050` to see listeners.
- Frontend 404s on Pages:
  - Ensure `vite.config.js` has `base: '/personaldevsite/'` (already set).
- API calls failing on Pages:
  - Confirm repo variable `VITE_API_BASE` is set to your Railway URL with `/api` suffix.
  - Check CORS: `FRONTEND_URL` in Railway env must match your Pages URL.
- Email failures:
  - Verify `EMAIL_*` env vars in Railway; for Gmail, use an App Password.
