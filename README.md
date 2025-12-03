# Silent Spruce Retreat — Boutique Homestay Experience

![Status](https://img.shields.io/badge/Status-In%20Development-blue)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)

Silent Spruce Retreat is a modern marketing site for an imaginary boutique homestay. Guests can explore room types, facilities, testimonials, and booking information with a responsive experience powered by the Next.js App Router.

---

## Features

-   **Immersive Landing Page** – Hero section with Booking.com CTA and curated imagery that highlights the property.
-   **Page Suite** – Dedicated routes for About, Rooms, Explore (coming soon), Contact, and a temporary Booking portal placeholder.
-   **Facilities & Testimonials** – Reusable grids/cards that showcase amenities and guest stories using `react-icons`.
-   **Responsive Navigation** – `@headlessui/react` dialog-driven mobile menu plus desktop navigation and CTA button.
-   **Tailwind v4 Theming** – Centralized theme tokens in `globals.css` for effortless brand color changes.

---

## Tech Stack

-   Runtime: Next.js 16 (App Router) + React 19.
-   Language: TypeScript 5.9.
-   Styling: Tailwind CSS 4 with custom tokens, Google Fonts (Poppins, Raleway, Dancing Script).
-   UI Libraries: Headless UI 2.2, React Icons 5.5.
-   Tooling: ESLint 9 (`eslint-config-next`), PostCSS 8, `@tailwindcss/postcss`.
-   Node.js: >= 20 (enforced via `package.json` engines).

---

## Quick Start

### Prerequisites

-   Node.js 20+
-   npm 10+ (ships with Node 20)

### Installation

```bash
git clone <repo-url>
cd silent-spruce-retreat
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to browse the experience. Hot reloading is enabled for pages and components under `src/app` and `src/components`.

### Production Build

```bash
npm run build
npm run start
```

### Scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the Next.js development server          |
| `npm run build` | Create an optimized production bundle         |
| `npm run start` | Serve the production build locally            |
| `npm run lint`  | Run ESLint using `eslint.config.mjs` settings |

---

## Repository Structure

```
/silent-spruce-retreat
├── public/                    # Logos, hero imagery, favicons
├── src/
│   ├── app/
│   │   ├── about/             # Marketing copy about the property
│   │   ├── booking/           # Temporary booking portal & payment placeholder
│   │   ├── contact/           # Contact form shell + Google Map
│   │   ├── explore/           # Coming soon placeholder
│   │   ├── rooms/             # Detailed room cards and amenities
│   │   ├── fonts.ts           # Google font exports
│   │   ├── globals.css        # Tailwind import + theme tokens
│   │   ├── layout.tsx         # App shell with Header/Footer
│   │   └── page.tsx           # Landing hero, Facilities, Testimonials
│   └── components/
│       ├── Header.tsx         # Responsive nav + booking CTA
│       ├── Footer.tsx         # Footer links and branding
│       ├── Facilities.tsx     # Amenity grid
│       └── Testimonials.tsx   # Waterfall testimonial layout
├── eslint.config.mjs          # Flat ESLint config
├── postcss.config.js          # Tailwind v4 PostCSS plugin
├── package.json               # Scripts, dependencies, engines
└── tsconfig.json              # TypeScript settings
```

---

## Architecture Overview

-   **Frontend** – Next.js App Router drives routing, streaming, and server rendering. Components opt into `use client` only when interactivity is required (navigation menu, hero CTA).
-   **Styling** – Tailwind CSS v4 imported directly in `globals.css`. Custom color tokens (`--color-primary`, `--color-secondary`) provide consistent branding across components.
-   **Content** – Amenity data, testimonials, and room descriptions are stored inline within their components for simple edits. Booking URLs live in the hero page and header CTA button.
-   **Forms & Integrations** – The contact form is currently presentational. Hook it into an API route, third-party form service, or email provider as needed. No environment variables are required yet.

---

## Customization Notes

-   Update imagery (hero/room photos) by replacing assets in `public/RoomLarge.png` and `public/Rooms.png`.
-   Logo variations are stored as PNG and SVG to support responsive headers and marketing exports.
-   Tailwind tokens in `src/app/globals.css` control the brand palette—edit once to propagate across the site.
-   Add new pages by creating folders under `src/app/<route>/page.tsx`; the App Router will handle routing automatically.

---

## Deployment

1. `npm run build` to produce the `.next` output.
2. Deploy to any Next.js-compatible host (Vercel, Netlify, custom Node server).
3. `npm run start` (or your platform’s adapter) to serve the production bundle.

Document new environment variables or third-party integrations here if you introduce analytics, form handling, or booking APIs.

---

## License

This project is distributed under the **Silent Spruce Retreat Private License**. All rights are reserved and usage is restricted to Silent Spruce Retreat and its authorized contractors. See [LICENSE](LICENSE) for the full terms or contact `hello@silentspruceretreat.com` for licensing inquiries.
