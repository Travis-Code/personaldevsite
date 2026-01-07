# 📑 File Index - Personal Portfolio Website

## 📌 Start Here
- **QUICKSTART.md** - Step-by-step setup guide (read this first!)
- **README.md** - Complete project overview
- **SETUP_COMPLETE.md** - Setup checklist and status
- **PROJECT_SUMMARY.md** - Detailed feature summary

---

## 📁 Frontend (`/frontend`)

### Main Application
- **src/App.jsx** - Main app component with React Router setup
- **src/main.jsx** - React DOM entry point
- **index.html** - HTML file (root)

### Components (`src/components/`)
- **Navbar.jsx** - Navigation bar with links to all pages
- **Footer.jsx** - Footer with social media links
- **ProjectCard.jsx** - Reusable project card component

### Pages (`src/pages/`)
- **Home.jsx** - Landing page with call-to-action
- **Projects.jsx** - Projects listing (fetches from API)
- **Resume.jsx** - Resume/CV page (customizable)
- **Contact.jsx** - Contact form with validation

### Styling
- **src/index.css** - Global styles with Tailwind directives
- **src/App.css** - App-specific styles

### Configuration
- **vite.config.js** - Vite config with API proxy
- **tailwind.config.js** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS with Tailwind and autoprefixer
- **package.json** - Dependencies and scripts

### Documentation
- **README.md** - Frontend-specific documentation

---

## 🔧 Backend (`/backend`)

### API Server
- **src/index.js** - Main Express server
  - GET /api/projects
  - POST /api/contact
  - GET /api/health

### Modules
- **src/config.js** - Environment configuration
- **src/validation.js** - Zod validation schemas
- **src/email.js** - Nodemailer email setup
- **src/rateLimit.js** - IP-based rate limiting middleware

### Data
- **data/projects.json** - Sample projects (customize with yours)

### Configuration
- **.env** - Environment variables (for local development)
- **.env.example** - Environment template with explanations
- **package.json** - Dependencies and scripts

### Documentation
- **README.md** - Backend-specific documentation

---

## 📚 Root Documentation

- **README.md** - Complete project overview, features, and setup
- **QUICKSTART.md** - Quick start guide with troubleshooting
- **PROJECT_SUMMARY.md** - What was built and what's next
- **SETUP_COMPLETE.md** - Setup completion checklist
- **FILE_INDEX.md** - This file
- **.gitignore** - Git ignore rules

---

## 🗂️ Directory Tree

```
personaldevsite/
├── .gitignore                    # Git ignore configuration
├── README.md                     # Root documentation
├── QUICKSTART.md                 # Quick start guide
├── PROJECT_SUMMARY.md            # Feature summary
├── SETUP_COMPLETE.md             # Setup checklist
├── FILE_INDEX.md                 # This file
│
├── frontend/                     # React + Vite frontend
│   ├── .gitignore
│   ├── index.html                # HTML entry point
│   ├── package.json              # Frontend dependencies
│   ├── package-lock.json
│   ├── vite.config.js            # Vite configuration
│   ├── tailwind.config.js        # Tailwind configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── eslint.config.js
│   ├── README.md                 # Frontend documentation
│   ├── public/                   # Static files
│   │   └── vite.svg
│   └── src/                      # Source code
│       ├── main.jsx              # Entry point
│       ├── App.jsx               # Main component
│       ├── App.css               # App styles
│       ├── index.css             # Global styles
│       ├── assets/
│       │   └── react.svg
│       ├── components/
│       │   ├── Navbar.jsx        # Navigation
│       │   ├── Footer.jsx        # Footer
│       │   └── ProjectCard.jsx   # Project card
│       └── pages/
│           ├── Home.jsx          # Home page
│           ├── Projects.jsx      # Projects page
│           ├── Resume.jsx        # Resume page
│           └── Contact.jsx       # Contact form
│
└── backend/                      # Node.js + Express backend
    ├── .env                      # Environment variables (local)
    ├── .env.example              # Environment template
    ├── package.json              # Backend dependencies
    ├── package-lock.json
    ├── README.md                 # Backend documentation
    ├── src/                      # Source code
    │   ├── index.js              # Express server
    │   ├── config.js             # Configuration
    │   ├── validation.js         # Zod schemas
    │   ├── email.js              # Email sending
    │   └── rateLimit.js          # Rate limiting
    └── data/
        └── projects.json         # Projects data
```

---

## 🚀 Quick Reference

### Running the Project
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

### Building for Production
```bash
# Frontend
cd frontend && npm run build

# Backend (just use npm start)
npm start
```

### Customizing
- **Resume** → `frontend/src/pages/Resume.jsx`
- **Projects** → `backend/data/projects.json`
- **Social Links** → `frontend/src/components/Footer.jsx`
- **Email** → `backend/.env`
- **Styling** → `frontend/tailwind.config.js`

---

## 📦 Key Files by Purpose

### API Endpoints
- **backend/src/index.js** - All endpoints defined here

### Form Handling
- **frontend/src/pages/Contact.jsx** - Contact form
- **backend/src/validation.js** - Zod schemas
- **backend/src/email.js** - Email notifications

### Styling
- **frontend/tailwind.config.js** - Theme configuration
- **frontend/src/index.css** - Global styles
- **frontend/src/App.css** - App styles

### Configuration
- **backend/.env** - Backend environment variables
- **frontend/vite.config.js** - Vite and API proxy config
- **frontend/tailwind.config.js** - Tailwind CSS config
- **backend/src/config.js** - Config loading logic

### Data
- **backend/data/projects.json** - Project listings

---

## 📋 File Checklist

### Frontend Files
- ✅ App.jsx (routing setup)
- ✅ main.jsx (entry point)
- ✅ index.css (global styles)
- ✅ App.css (app styles)
- ✅ Navbar.jsx (navigation)
- ✅ Footer.jsx (footer + social)
- ✅ ProjectCard.jsx (card component)
- ✅ Home.jsx (home page)
- ✅ Projects.jsx (projects page)
- ✅ Resume.jsx (resume page)
- ✅ Contact.jsx (contact form)
- ✅ vite.config.js (vite config)
- ✅ tailwind.config.js (tailwind config)
- ✅ postcss.config.js (postcss config)
- ✅ package.json (dependencies)
- ✅ index.html (HTML entry)

### Backend Files
- ✅ index.js (Express server)
- ✅ config.js (configuration)
- ✅ validation.js (Zod schemas)
- ✅ email.js (email sending)
- ✅ rateLimit.js (rate limiting)
- ✅ projects.json (projects data)
- ✅ .env (environment variables)
- ✅ .env.example (environment template)
- ✅ package.json (dependencies)

### Documentation Files
- ✅ README.md (root)
- ✅ QUICKSTART.md (setup guide)
- ✅ PROJECT_SUMMARY.md (features)
- ✅ SETUP_COMPLETE.md (checklist)
- ✅ FILE_INDEX.md (this file)
- ✅ frontend/README.md (frontend docs)
- ✅ backend/README.md (backend docs)

---

## 🎯 Next Steps

1. **Read QUICKSTART.md** - Full setup instructions
2. **Start both servers** - Backend and frontend
3. **Customize content** - Resume, projects, social links
4. **Test locally** - All pages and features
5. **Deploy** - Follow deployment instructions in README.md

---

## 📞 Support

- Questions about setup? → **QUICKSTART.md**
- Frontend issues? → **frontend/README.md**
- Backend issues? → **backend/README.md**
- Project overview? → **README.md**
- Full checklist? → **SETUP_COMPLETE.md**

---

**Status:** ✅ Complete and Ready to Use
**Created:** January 7, 2026
