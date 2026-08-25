# Rabizzy Graphics — Portfolio Site

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio for Rabizzy Graphics.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx      — fonts (Anton / Inter / IBM Plex Mono) + global metadata
  page.tsx         — assembles all sections
  globals.css       — base styles, grain texture, reveal-animation classes
components/
  Nav.tsx           — fixed nav with mobile menu
  Hero.tsx          — tri-panel hero, mix-blend headline, mouse parallax, service ticker
  Work.tsx          — portfolio grid (reads from lib/data.ts)
  Services.tsx       — 4 services as spec-sheet rows
  Education.tsx      — background / education section
  CTA.tsx            — closing call to action
  Footer.tsx
  Reveal.tsx         — scroll-in-view animation wrapper (IntersectionObserver)
lib/
  data.ts            — edit this file to update projects, services, and education content
```

## Hero background photography

The hero's three panels now use real photos (black marble, deep red silk,
white flowing fabric) instead of flat colors, tinted with a brand-color
wash and layered under a custom abstract line-art overlay
(`components/HeroArt.tsx`). All three photos are from Unsplash and used
under the [Unsplash License](https://unsplash.com/license) (free for
commercial use, no attribution required) — credit goes to Annie Spratt,
MontyLov, and Pawel Czerwinski. Swap them for your own studio photography
any time by editing the `heroPanels` array in `lib/data.ts`.

## Where to put your own content

- **Projects** — edit the `projects` array in `lib/data.ts`. Each card currently uses a CSS
  gradient placeholder (`gradient` field); swap that block for a real image by replacing the
  placeholder `<div>` in `components/Work.tsx` with `next/image` pointing at a file in `/public`.
- **Services** — edit the `services` array in `lib/data.ts`.
- **Education / background** — edit the `education` array in `lib/data.ts`.
- **Contact email / socials** — update the `mailto:` links in `components/CTA.tsx` and
  `components/Footer.tsx`, and the Instagram link in `components/Footer.tsx`.

## Deploy

Push to a GitHub repo and import it at https://vercel.com/new, or run:

```bash
npm run build
npm start
```
