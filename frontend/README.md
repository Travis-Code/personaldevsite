# Portfolio Frontend

React + Vite + Tailwind CSS frontend for the personal portfolio website.

## Features

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **React Router**: Multi-page SPA with smooth navigation
- **Projects Page**: Fetches projects from backend API with loading/error states
- **Contact Form**: Client-side validation with React Hook Form and Zod
- **Resume Page**: Formatted resume content (customize with your info)
- **Clean Components**: Reusable components (Navbar, Footer, ProjectCard)

## Installation

```bash
npm install
```

## Development

Start dev server (with hot reload):
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

The dev server proxies `/api` requests to `http://localhost:5000` (backend)

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer with links
│   └── ProjectCard.jsx # Project display card
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Projects.jsx    # Projects listing
│   ├── Resume.jsx      # Resume page
│   └── Contact.jsx     # Contact form
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Tailwind directives
```

## Customization

### Update Resume
Edit `src/pages/Resume.jsx` with your information:
- Name and title
- Contact information
- Professional summary
- Experience details
- Skills
- Education

### Update Social Links
Edit footer links in `src/components/Footer.jsx`:
- GitHub profile URL
- LinkedIn profile URL
- Twitter profile URL

### Add Project Data
The Projects page fetches from `/api/projects`. Add projects to `backend/data/projects.json`

## Deployment

### GitHub Pages
The frontend can be deployed to GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains production-ready files
3. Deploy to GitHub Pages using GitHub Actions or other CI/CD tools
4. Update `FRONTEND_URL` in backend `.env` to your GitHub Pages URL

### Environment
Update the API proxy URL in `vite.config.js` for production:
```javascript
server: {
  proxy: {
    '/api': {
      target: 'https://your-backend-url.com',
      changeOrigin: true
    }
  }
}
```

## Technologies

- **React 18**: UI library
- **Vite**: Fast build tool
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Efficient form handling
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration with React Hook Form

## Notes

- Forms validate on client-side with Zod before submission
- Projects are fetched from backend API on page load
- Loading and error states are displayed during data fetching
- All styling uses Tailwind CSS classes for consistency

