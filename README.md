# Super Solar Fencing — website

This is the company site for **Super Solar Power Fencing Technology**, a solar fencing supplier and installer based in Coimbatore, Tamil Nadu. The pages cover products, services, about, contact, PDFs, and project imagery.

## Stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Sanity** for CMS content (products, services, projects, etc.) via `next-sanity`
- **Framer Motion** and **Swiper** where animations/carousels are used

## Project layout (where to look)

| Path | What it is |
|------|------------|
| `app/` | Routes and pages (`page.tsx`, layouts) |
| `app/studio/` | Sanity Studio UI (see below) |
| `components/` | Shared UI and sections |
| `lib/` | Data helpers (`catalogData`, Sanity client/fetch, types) |
| `sanity/` | Sanity schema, structure, env helpers |
| `public/` | Static files (images, PDFs) — served as-is |

## Environment variables

Create a **`.env.local`** in the project root (not committed). The app expects:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project ID  
- `NEXT_PUBLIC_SANITY_DATASET` — dataset name (e.g. `production`)  
- `NEXT_PUBLIC_SANITY_API_VERSION` — optional; defaults are set in `sanity/env.ts` if unset  

Without the Sanity vars, the client in `lib/sanityClient.ts` will throw at runtime when those modules load.

## Scripts

```bash
npm install
npm run dev          # dev server — http://localhost:3000
npm run build        # production build
npm start            # run production build locally
npm run lint         # ESLint
npm run seed:cms     # sample Sanity seed (see scripts/)
```

## Sanity Studio

With `npm run dev` running, open **`/studio`** to edit CMS content (schemas live under `sanity/schemas`). Queries and mapping into the app are in `lib/sanityFetch.ts` and `lib/catalogData.ts`.

## Build for production

```bash
npm run build
npm start
```

Set the same env vars on your host (Vercel, etc.) so production builds can talk to Sanity.
