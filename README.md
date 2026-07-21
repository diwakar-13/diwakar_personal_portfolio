# diwakar_personal_portfolio

## projectOverview
A personal portfolio built with Next.js (App Router), React, and Tailwind CSS. The source uses the src/app directory structure and includes dedicated routes for About, Projects and Contact, a server-side API route for contact submissions, a comprehensive UI component library under src/components/ui, and a set of static assets in public/.

Key repository locations:
- Pages / routes: src/app/(routes)/about, src/app/(routes)/projects, src/app/(routes)/contact
- API route: src/app/api/contact/route.js
- Reusable UI components: src/components/ui/*.jsx
- Global styles and layout: src/app/globals.css, src/app/layout.js
- Static assets: public/

## features
- Multi-page personal portfolio with About, Projects and Contact routes (App Router)
- Contact API route for processing contact submissions (src/app/api/contact/route.js)
- Reusable component library (src/components/ui) including buttons, inputs, cards, navigation, dialogs, etc.
- Theme provider and animated theme toggling (src/components/theme-provider.jsx, animated-theme-toggler)
- Global layout, Navbar, Footer and AnimatedText components for consistent UI
- Tailwind CSS utility-based styling with PostCSS integration
- Static assets and resume included in public/ (images and PDF)

## installation
Prerequisites
- Node.js LTS (v16+ recommended)
- npm (bundled with Node.js)

Clone and install
```bash
# clone repository
git clone <repository-url>
cd diwakar_personal_portfolio

# install dependencies
npm install
```

Common npm scripts (standard for Next.js projects)
```bash
# run development server
npm run dev

# build for production
npm run build

# start production server (after build)
npm start
```

Note: The repository includes next.config.mjs, postcss.config.mjs and other config files used by Next.js + Tailwind setups.

## usage
Run development server and open in browser:
```bash
npm run dev
# then visit http://localhost:3000
```

Build and run production:
```bash
npm run build
npm start
```

Development tips
- Pages and routes: edit files under src/app/(routes) — About, Projects and Contact.
- Reusable UI components are in src/components/ui — use these instead of creating duplicate UI elements.
- Global styles are in src/app/globals.css.
- Static assets (images, resume PDF) live in public/ and can be referenced from the app with /<filename> (for example /diwakar_resume.pdf).

Environment variables
- No explicit environment variables are present in the repository tree. If you integrate third-party services for the contact route (email providers, serverless functions, etc.), add the necessary environment variables to your environment or .env.local (Next.js will load .env.local automatically).

## techStack
Badges:
[![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/) [![npm](https://img.shields.io/badge/npm-%23000000.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

Primary technologies used:
- Next.js (App Router) — project routing in src/app
- React — UI library
- Tailwind CSS — utility-first styling (global CSS in src/app/globals.css)
- PostCSS — postcss.config.mjs present
- ESLint — eslint.config.mjs present

Repository files of interest (based on tree)
- next.config.mjs
- postcss.config.mjs
- src/app/layout.js, src/app/globals.css, src/app/page.js
- src/app/(routes)/about/page.jsx, src/app/(routes)/projects/page.jsx, src/app/(routes)/contact/page.jsx
- src/components/ui/* (many UI components)
- public/* (images and resume PDF)

## apiReference
The repository exposes the following API route found in the App Router:

| Route | Source file | Methods | Description |
|---|---:|---|---|
| /api/contact | src/app/api/contact/route.js | See implementation in src/app/api/contact/route.js | Contact-related API route (implementation details and exported HTTP method handlers are defined in the file). |

Notes:
- The table lists the real API route discovered in the repository tree. Consult src/app/api/contact/route.js for exact HTTP methods (GET/POST/PUT/DELETE) implemented and request/response formats.

## license
No LICENSE file was found in the repository tree. This project does not currently specify a license. Add a LICENSE file (for example MIT, Apache-2.0, etc.) at the repository root to define permitted usage and redistribution.