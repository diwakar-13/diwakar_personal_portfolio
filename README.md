# diwakar_personal_portfolio

## projectOverview

A personal portfolio site built with Next.js, React, and Tailwind CSS. It showcases a clean, responsive UI across About, Projects, and Contact sections, backed by a lightweight API for handling contact form submissions.

### What’s included
- App Router-based routes under src/app (about, projects, contact) with a shared layout.
- Reusable UI components and a small component library under src/app/_components and src/components/ui.
- A public contact API at src/app/api/contact/route.js for handling form submissions.
- Tailwind CSS styling wired through PostCSS with a global stylesheet.
- Asset-driven design using images and icons in the /public folder.

## features

- App Router pages: /about, /projects, /contact with consistent navigation and layout.
- Reusable component library (Navbar, Footer, Logo, UI primitives) for rapid UI assembly.
- Tailwind CSS-based responsive design for mobile and desktop viewports.
- Theme toggle support (animated theme toggler) for light/dark appearance.
- Contact form integrated with a dedicated API endpoint at /api/contact.
- Asset-first approach leveraging images and icons from the public directory.
- Structured Project and About sections with sub-components (Education, Experience, Skills, etc.).
- SEO-friendly Next.js pages with server-side rendering where appropriate.

## installation

Prerequisites
- Node.js (and npm) installed on your development machine.

Commands
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build

# 4. Start in production mode
npm run start
```

Notes
- The project uses npm (evidenced by package-lock.json) and Next.js with Tailwind CSS.
- By default, the dev server runs on http://localhost:3000.

## usage

- Access the site locally after starting the dev server:
  - About: http://localhost:3000/about
  - Projects: http://localhost:3000/projects
  - Contact: http://localhost:3000/contact
- The public directory contains assets used across the site (images and icons) for visual polish.
- The contact form submits data to the API endpoint at /api/contact (handled by src/app/api/contact/route.js).
- To test the API directly (example):
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Your Name","email":"you@example.com","message":"Hello!"}'

- The codebase includes a theme toggle component for light/dark UI and a compact set of UI primitives to build pages.

## techStack

- Next.js (App Router) for server-rendered React apps
- React for component-driven UI
- Tailwind CSS for utility-first styling
- PostCSS with a global stylesheet for Tailwind integration
- Public assets under /public for images and icons
- A small internal API at /api/contact for handling contact submissions

Badges
- ![Next.js](https://img.shields.io/badge/Next.js-12-blue?logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue?logo=tailwindcss&logoColor=white)

## apiReference

| Endpoint | HTTP Methods | Description |
| --- | --- | --- |
| /api/contact | See src/app/api/contact/route.js | Contact form submission handler for the site's contact page. The route.js file defines the actual HTTP methods implemented for this endpoint. |

Note: This repository exposes at least one public API endpoint at /api/contact. No additional public API routes are present in the provided file structure.