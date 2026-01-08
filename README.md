# Professional Portfolio - Software Developer & Business Analyst

A clean, professional single-page portfolio website showcasing software development skills and business analysis expertise.

## Overview

This is a simplified, static HTML/CSS/JS portfolio designed for software developers with business analysis experience. No build tools, no frameworks—just fast, accessible, professional content.

## Features

- **Responsive Design**: Works on all devices
- **Single Page**: Smooth scrolling sections
- **Professional Sections**:
  - Hero/Introduction
  - About with highlights
  - Technical Skills + BA Expertise
  - Experience Timeline
  - Featured Projects
  - Contact Form
- **No Dependencies**: Vanilla HTML/CSS/JS
- **Easy to Deploy**: Works anywhere—GitHub Pages, Netlify, Vercel, or any static host

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Travis-Code/personaldevsite.git
cd personaldevsite
```

2. Open `index.html` in your browser:
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or use a simple local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## Customization

### 1. Update Personal Information

Edit `index.html`:
- Replace "Your Name" throughout
- Update email, LinkedIn, GitHub links
- Modify the hero subtitle and about text

### 2. Add Your Experience

In the Experience section, replace the timeline items with your actual work history:
- Job titles and companies
- Dates
- Key accomplishments (use bullet points)

### 3. Update Projects

Replace the project cards with your actual projects:
- Project name and type (Development/BA/Full-Stack)
- Description and impact
- Technologies used

### 4. Customize Skills

Update the skills lists in three categories:
- Development (languages, frameworks, tools)
- Business Analysis (methodologies, techniques)
- Tools & Methods (software, practices)

### 5. Style Tweaks

Edit `styles.css` to change:
- Colors: Update CSS variables in `:root`
- Fonts: Change `font-family` in `body`
- Spacing: Adjust padding/margin values
- Animations: Modify transitions and transforms

### 6. Contact Form

The form currently shows a success message locally. To make it functional:

**Option A: Use Formspree (Recommended)**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Uncomment and update the fetch code in `script.js` (line ~70)

**Option B: Use your own backend**
- Update the fetch URL to point to your API endpoint

## Deployment

### GitHub Pages

1. Push code to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch `main`
4. Your site will be live at `https://username.github.io/personaldevsite/`

### Netlify

1. Drag and drop the folder to [netlify.com/drop](https://netlify.com/drop)
2. Or connect your GitHub repo for automatic deploys

### Vercel

```bash
npm install -g vercel
vercel
```

## File Structure

```
personaldevsite/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips

- Keep content concise and impactful
- Use metrics and results in your experience/projects
- Ensure contact info is up to date
- Test on mobile devices
- Optimize any images you add (use WebP format, compress)
- Consider adding a PDF resume download link

## License

MIT License - feel free to use this template for your own portfolio.

---

**Need help?** Open an issue or reach out via the contact form on your deployed site!
