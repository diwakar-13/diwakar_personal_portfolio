# diwakar_personal_portfolio

## projectOverview
Personal portfolio built with **Next.js (App Router)**, **React**, and **Tailwind CSS**. It includes dedicated route pages for **About**, **Projects**, and **Contact**, plus shared UI components and styling utilities.

## features
- **About** page with structured sections (e.g., Education, Experience, Skills)
- **Projects** page with reusable layout
- **Contact** page with form UI
- **Animated/interactive UI components** (e.g., transitions, animated text)
- **Theme support** via shared theme provider components
- **Responsive layout** using Tailwind CSS and reusable UI primitives

## installation
```bash
# 1) Clone the repository
git clone <your-repo-url>
cd diwakar_personal_portfolio

# 2) Install dependencies
npm ci

# 3) Run the development server
npm run dev
```

## usage
- Open the app in your browser (default Next.js dev server):
  - Visit: http://localhost:3000
- Navigate through routes:
  - `/about`
  - `/projects`
  - `/contact`
- The **Contact** page can submit data via the app’s contact API route:
  - `POST /api/contact` (see API Reference)

## techStack
- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **Node.js + npm** (project managed with `package.json` / `package-lock.json`)

## apiReference
The repository exposes a serverless API route under `src/app/api`.

### Public API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/contact` | Contact form submission handler implemented in `src/app/api/contact/route.js` |

### Notes
- No other public API routes are present under `src/app/api` besides the contact route listed above.