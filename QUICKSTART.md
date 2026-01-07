# Quick Start Guide

## One-Time Setup

### 1. Backend Configuration
```bash
cd backend

# Install dependencies
npm install

# Create .env file with your settings
# (Already provided, but update email settings)
```

**Important: Update `backend/.env`** with:
- Your Gmail account (or other email service)
- App Password from Google Account
- Notification email address

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install
```

## Running the Project

### Terminal 1 - Start Backend
```bash
cd backend
npm run dev
```
✓ Backend runs on `http://localhost:5050`

### Terminal 2 - Start Frontend
```bash
cd frontend
npm run dev
```
✓ Frontend runs on `http://localhost:5173`

## Testing the Setup

1. Open `http://localhost:5173` in your browser
2. Click on "Projects" to test API integration
3. Fill out the Contact form to test validation and submission

## Next Steps

### Customize Your Portfolio

1. **Resume** - Edit `frontend/src/pages/Resume.jsx`
   - Add your name, title, experience
   - Update skills and education

2. **Projects** - Edit `backend/data/projects.json`
   - Add your real projects
   - Update links and descriptions

3. **Social Links** - Edit `frontend/src/components/Footer.jsx`
   - Update GitHub, LinkedIn, Twitter URLs

4. **Email Setup** - Verify `backend/.env`
   - Test by submitting contact form
   - Check email for notifications

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
# Outputs to frontend/dist/
```

**Backend:**
```bash
# Just use npm start in production
npm start
```

## Deployment

### Frontend (GitHub Pages)
1. Build: `npm run build`
2. Deploy `dist/` folder to GitHub Pages
3. Update backend URL if needed

### Backend (Railway/Heroku)
1. Push code to GitHub
2. Connect repository to Railway
3. Set environment variables in dashboard
4. Deploy

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5050)
- `NODE_ENV` - Set to `production` for deployment
- `FRONTEND_URL` - Your frontend URL for CORS
- `EMAIL_*` - Gmail configuration

Example for production on Railway:
```
NODE_ENV=production
FRONTEND_URL=https://yourgithubpages.com
PORT=5050
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=notification@example.com
```

## Troubleshooting

### Port 5000 already in use
```bash
# Kill process using port 5000
lsof -i :5000 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
```

### Email not sending
- Check `.env` EMAIL_* variables
- For Gmail: Use App Password, not regular password
- Enable "Less secure app access" if not using App Password

### Frontend can't reach API
- Ensure backend is running on port 5050
- Check `vite.config.js` proxy configuration
- For production, update API URL in vite.config.js

### Build failing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## File Structure Reference

```
personaldevsite/
├── backend/
│   ├── src/
│   │   ├── index.js          # Main Express server
│   │   ├── config.js         # Configuration
│   │   ├── email.js          # Email sending
│   │   ├── rateLimit.js      # Rate limiting
│   │   └── validation.js     # Input validation
│   ├── data/
│   │   └── projects.json     # Your projects
│   ├── .env                  # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── App.jsx           # Main app
│   │   └── main.jsx          # Entry point
│   ├── vite.config.js        # Vite config
│   ├── tailwind.config.js    # Tailwind config
│   └── package.json
│
└── README.md
```

## API Reference

### GET /api/projects
Returns all projects from `backend/data/projects.json`

### POST /api/contact
Submit contact form
- Rate limited to 5 requests per 15 min per IP
- Validates: name (min 2 chars), email, message (min 10 chars)
- Sends email notification

### GET /api/health
Health check endpoint (returns `{"status":"ok"}`)

## Support

For detailed information:
- Backend: See `backend/README.md`
- Frontend: See `frontend/README.md`
- Root: See `README.md`
