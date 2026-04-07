# NexaGrowth — Digital Growth Agency Website

A full-featured agency website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — lightning-fast dev server & build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations
- **React Router v6** — client-side routing
- **React Hook Form** — form validation
- **Lucide React** — icons

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, benefits, stats, testimonials, CTA |
| Services | `/services` | Service blocks + pricing packages |
| About | `/about` | Vision, team, awards, stats, testimonials |
| Blog | `/blog` | Filterable + searchable article list |
| Contact | `/contact` | Contact form + info + office location |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

That's it — no environment variables needed.

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx         # Navbar + Footer wrapper
│   ├── Navbar.tsx         # Sticky responsive navbar
│   ├── Footer.tsx         # Full footer with links
│   ├── SectionHeader.tsx  # Reusable section titles
│   ├── TestimonialCard.tsx
│   └── BlogCard.tsx
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── data/
│   └── index.ts           # All static content
├── hooks/
│   └── useScrollAnimation.ts
├── App.tsx                # Routing
├── main.tsx               # Entry point
└── index.css              # Global styles + Tailwind
```

## Customisation

- **Brand name / colors** → `tailwind.config.js` + `index.css`
- **Content** → `src/data/index.ts` (all copy, services, team, blog posts)
- **Fonts** → `index.html` Google Fonts link + `tailwind.config.js`
