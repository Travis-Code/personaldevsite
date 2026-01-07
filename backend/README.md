# Portfolio Backend

Node.js/Express backend API for the portfolio website.

## Features

- **Projects API**: Serves portfolio projects from a JSON file
- **Contact Form API**: Handles contact form submissions with validation
- **Email Notifications**: Sends email when someone submits the contact form
- **Rate Limiting**: Prevents spam with simple IP-based rate limiting
- **CORS**: Configured to accept requests from the frontend

## Installation

```bash
npm install
```

## Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your configuration:
   - Set `FRONTEND_URL` to your frontend URL
   - Configure email settings (Gmail with App Password recommended)
   - Adjust `PORT` if needed

## Running

Development mode (with auto-reload):
```bash
npm run dev
```

Run in background with logs:
```bash
npm run dev:bg
# tail -f server.log
# npm run stop:bg
```

Production mode:
```bash
npm start
```

## API Endpoints

### GET /api/projects
Returns list of projects from `data/projects.json`

**Response:**
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Project description",
    "technologies": ["React", "Node.js"],
    "link": "https://...",
    "github": "https://..."
  }
]
```

### POST /api/contact
Validates and processes contact form submissions

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here..."
}
```

**Response (Success):**
```json
{
  "message": "Message received successfully. We will get back to you soon!"
}
```

**Response (Validation Error - 400):**
```json
{
  "message": "Validation error",
  "errors": [
    {
      "field": "name",
      "message": "Name must be at least 2 characters"
    }
  ]
}
```

**Response (Rate Limited - 429):**
```json
{
  "message": "Too many requests. Please try again later."
}
```

## Email Setup

For Gmail:
1. Enable 2-factor authentication
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password in `.env` (not your regular password)

For other email services, update `EMAIL_SERVICE` in `.env` and credentials accordingly.

## Rate Limiting

- Contact endpoint limited to 5 requests per IP per 15 minutes
- Configurable in `src/config.js`

## Deployment

The backend is designed to run on Railway or similar platforms:

1. Push code to GitHub
2. Connect to Railway
3. Set environment variables in Railway dashboard
4. Deploy

Railway will automatically detect Node.js and run `npm start`.
