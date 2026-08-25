# ZTax App — React

A full React + TypeScript rebuild of the ZTax App marketing site (Home, Services, About Us, FAQ),
unified into one consistent design system with routing, scroll animations, and an animated hero.

The four original pages in this repo (`ztax_app_home_page`, `ztax_app_services`,
`ztax_app_about_us`, `ztax_app_faq_page`, `ztax_home_page_animated_hero`) were static HTML mockups,
each with its own slightly different color tokens, fonts, and icon set. This app merges them into
one cohesive brand (forest green `#062d1f` / sage `#c8dbcd` / lime accent) and turns them into real,
navigable routes of a single-page app.

## Stack

- **React 19 + TypeScript**, built with **Vite**
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `src/index.css` — no `tailwind.config.js` needed)
- **React Router v7** for client-side routing between pages
- **Framer Motion** for scroll-reveal animations, page transitions, hover/tap micro-interactions,
  and the animated nav underline
- **lucide-react** for icons (replaces the mix of inline SVG / Font Awesome / Material Symbols used
  across the original mockups)
- A hand-rolled **WebGL noise-gradient shader** (`src/components/ui/ShaderBackground.tsx`) powers the
  animated hero background, ported from `ztax_home_page_animated_hero`

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    layout/   Header, Footer, PageWrapper (route transitions), ScrollToTop
    ui/       Reveal (scroll-in animation), Button/ButtonLink, Badge, Logo, ShaderBackground
  data/       content.ts — shared copy, pricing, FAQ entries, image URLs
  pages/      Home.tsx, Services.tsx, About.tsx, FAQ.tsx
  App.tsx     routes + animated route transitions
  index.css   design tokens (colors, fonts, keyframes) via Tailwind v4 @theme
```

## Routes

| Path        | Page                                   |
|-------------|-----------------------------------------|
| `/`         | Home — animated WebGL hero, value props, how-it-works, app download |
| `/services` | Services — pricing cards, add-ons, value proposition |
| `/about`    | About Us — mission/vision, journey, why-choose grid |
| `/faq`      | FAQ — live search + category filter over the FAQ list |

## Language support

The whole site (nav, hero, every section, footer) is fully trilingual — **English, Español, العربية** —
via `src/i18n/`:

- `translations.ts` holds every string per language, typed against one shared interface so `en`/`es`/`ar`
  can never drift out of sync (a missing key fails the build).
- `LanguageContext.tsx` provides the active language app-wide, persists the choice in `localStorage`, and
  flips `<html lang>`/`<html dir>` so Arabic renders right-to-left (flexbox/grid mirror automatically off
  the `dir` attribute) with the Cairo font for Arabic text.
- Switch language from the compact globe dropdown in the header (every page) or the pill buttons in the
  Home hero — both drive the same global state.

To add a language: add its code to `Lang` in `translations.ts`, fill in a new object satisfying
`Translations`, and add it to `LANGS` in `Header.tsx` / `Home.tsx`.

## Notes

- Images are referenced from their original hosted URLs (Google-hosted Stitch prototype assets).
  Swap `src/data/content.ts` → `IMAGES` with your own asset URLs/imports for production use.
- "Start My Return" links out to `https://ztaxapp.vercel.app/login` (see `EXTERNAL_LINKS` in
  `src/data/content.ts`) — update that one constant if the login URL ever changes.
- The header's App Store / Google Play icons currently point to `#` — wire them up to your real store
  listing URLs when available.
- All animations respect `prefers-reduced-motion` via Framer Motion's defaults where applicable;
  consider wrapping heavier effects (the shader, floating phone mockup) behind a `useReducedMotion()`
  check if strict accessibility compliance is required.
# ZTax-Webpage
