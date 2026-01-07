# Personal Portfolio Website

A full-stack personal portfolio website built with modern web technologies.

## Project Structure

```
personaldevsite/
├── frontend/              # React + Vite + Tailwind CSS
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md
│
├── backend/               # Node.js + Express API
│   ├── src/
│   ├── data/
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── README.md (this file)
```

## Quick Start

See also: [QUICKSTART.md](./QUICKSTART.md) and [DEPLOYMENT.md](./DEPLOYMENT.md) for a detailed, step-by-step guide.

### Prerequisites
- Node.js 16+ 
- npm or yarn

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

Backend runs on `http://localhost:5050`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Features

### Frontend
- ✅ Multi-page React SPA with React Router
- ✅ Responsive design with Tailwind CSS
- ✅ Projects page fetches from API
- ✅ Contact form with validation (React Hook Form + Zod)
- ✅ Resume page with custom content
- ✅ Reusable components (Navbar, Footer, ProjectCard)

### Backend
- ✅ Express.js REST API
- ✅ GET `/api/projects` - Returns projects from JSON file
- ✅ POST `/api/contact` - Handles contact submissions
- ✅ Input validation with Zod
- ✅ Email notifications via Nodemailer
- ✅ IP-based rate limiting
- ✅ CORS configured
- ✅ Environment variable management

## API Endpoints

### GET /api/projects
Returns list of portfolio projects

**Response:**
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Description",
    "technologies": ["React", "Node.js"],
    "link": "https://...",
    "github": "https://..."
  }
]
```

### POST /api/contact
Submits contact form (rate limited to 5 requests per 15 min per IP)

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message..."
}
```

## Configuration

### Backend (.env)
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=notification@example.com
```

### Frontend (vite.config.js)
API proxy configured to forward `/api` requests to backend in development.
For production, update the proxy target URL.

## Customization

### Add Projects
Edit `backend/data/projects.json` with your projects

### Update Resume
Edit `frontend/src/pages/Resume.jsx` with your information

### Update Social Links
Edit `frontend/src/components/Footer.jsx`

## Deployment

### Frontend (GitHub Pages)
GitHub Actions workflow builds and deploys automatically. Ensure repo variable `VITE_API_BASE` points to your backend URL with `/api`.

### Backend (Railway)
- Create service from this repo, root directory `backend`, start command `npm start`.
- Set envs: `NODE_ENV=production`, `FRONTEND_URL=https://<user>.github.io/personaldevsite`, and `EMAIL_*` as needed.
- Railway sets `PORT` automatically; the app reads it.

## Technologies

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Zod

### Backend
- Node.js
- Express
- Nodemailer
- Zod
- CORS

## Development

### Run Both Concurrently
In separate terminals:

```bash
# Terminal 1 - Backend (5050)
cd backend
npm run dev  # or: npm run dev:bg; tail -f server.log

# Terminal 2 - Frontend (5173)
cd ../frontend
npm run dev  # or: npm run dev:bg; tail -f vite.log
```

### Environment Variables
- Backend: Copy `.env.example` to `.env` and update
- Frontend: Uses Vite proxy for development

## Email Setup

For Gmail:
1. Enable 2FA
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use in `.env` EMAIL_PASSWORD

## Contact Form Flow

1. User fills form on contact page
2. Client validates with Zod
3. POST to `/api/contact`
4. Server validates again with Zod
5. Rate limiting checked
6. Email sent via Nodemailer
7. Success response to frontend

## Security Notes

- Store sensitive data in `.env` files (never commit)
- Rate limiting prevents spam
- Input validation on both client and server
- CORS configured to frontend domain
- Email via OAuth/App Password (not plain password)

## Next Steps

1. Customize resume and social links
2. Add your projects to `backend/data/projects.json`
3. Set up email credentials in `.env`
4. Test contact form
5. Build and deploy

## Support

For detailed setup instructions, see:
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)
