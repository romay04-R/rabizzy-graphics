# Rabizzy Graphics

A modern design studio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx      — root layout with fonts and metadata
  page.tsx        — main page component
  globals.css     — global styles and animations
components/
  Hero.tsx        — hero section with tri-panel background and interactive effects
  HeroArt.tsx     — abstract line-art overlay for hero
lib/
  data.ts         — hero panel configuration and data
```

## Features

- **Hero Section**: Tri-panel photographic background with interactive mouse tracking
- **Blend Mode Effects**: Headline uses mix-blend-mode for visual impact
- **Service Ticker**: Animated marquee showcasing services
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Next.js Image optimization

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push your code to the `main` branch on GitHub
2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `gh-pages`
3. The workflow will automatically build and deploy on every push to `main`

### Manual Deployment

To build locally:

```bash
npm run build
```

The static files will be in the `out/` directory.
