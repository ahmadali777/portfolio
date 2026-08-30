# Portfolio — build context

This file preserves the "Claude Project" context so future updates are cheap.
Read this before editing. It captures the identity kit, the voice, and the
repeatable process for adding case studies.

## Who it's for / what this is

A personal portfolio for **Ahmad** — a software engineer who builds with
**Flutter, Dart, and Firebase** (frontend web via React + Vite + Tailwind).
The message: *"Apps for real problems, not resumes."*

## Identity kit

- Heading font: **Noto Serif**
- Body font: **Playwrite New Zealand** (falls back to sans on the site)
- Palette (accent shades used by `src/data/brandColors.js`):
  `["#f8f7f2", "#e0e1dd", "#e3e8ee", "#778da9", "#415a77", "#1b263b", "#0d1b2a", "#234870", "#3875b6", "#74a3d4"]`
- Favicon: single-line mark from `public/favicon.svg` / `src/assets/favicon_io`
- Mood: **minimalist, deliberate, engineering-focused** — product case studies
  take center stage.

## Voice (use this for ALL copy)

Simple. Direct. Honest. No corporate buzzwords.
Talk like a regular human to a friend. **Never** use "streamline", "optimize",
"cutting-edge", or "leveraging".

## Tech / conventions

- React 19 + Vite + Tailwind v4 + React Router. State with hooks only (no Redux).
- Case studies are data-driven — see `src/data/products.js`:
  adding a product = one image + one object, no component edits.
- Tech-icon names in `techStack` must exactly match keys in `src/data/techIcons.js`.
- Contact form posts through the Vercel/Resend API in `/api`.

## Adding the next case study

Follow `HOW_TO_ADD_CASE.md` — the three-beat shape (**The Problem / What I Did /
The Outcome**), add an image under `src/assets/productsPhotos/`, add one object
to `src/data/products.js`, then `npm run build`.

## Commands

- `npm run dev` — local dev
- `npm run build` — production build
- `npm run lint` — eslint

## Next planned case (reminder)

Publishing **Noorani Qaida** to the **Google Play Store** — see `reminders/`.
