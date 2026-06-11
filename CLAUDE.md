# CLAUDE.md

## Project overview

Personal portfolio site for Alex Dumitru, deployed at alexdmtr.github.io. Single-page, English-only static site built with Next.js 15 and exported to GitHub Pages. Design: modern dark-default with a light toggle and scroll-triggered motion.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build with static export to `out/`
- `npm run lint` — ESLint (note: no ESLint config is committed; `npm run build` already runs type checking)

## Tech stack

- **Next.js 15.4** with `output: "export"` (static HTML, no server)
- **React 19**, **TypeScript 5.8**
- **Tailwind CSS v4** with `@tailwindcss/postcss` — config is CSS-first (`@theme` block in `globals.css`), no `tailwind.config.js`
- **Framer Motion** — scroll-reveal animations via the `Reveal` wrapper (`components/reveal.tsx`)
- **lucide-react** — icons
- `lib/utils.ts` has the `cn()` helper (clsx + tailwind-merge). `components/ui/button.tsx` is an unused shadcn leftover.

## Project structure

```
app/
  layout.tsx          — root layout, fonts (next/font), metadata, no-flash theme script, background layers
  page.tsx            — root route, renders <PortfolioPage />
  not-found.tsx       — 404 page
  globals.css         — Tailwind import, @theme tokens, .dark overrides, background mesh/glow, keyframes

components/
  portfolio-page.tsx  — main portfolio (all sections), server component
  site-nav.tsx        — client: sticky nav, scroll-spy active highlight, mobile menu
  theme-toggle.tsx    — client: light/dark toggle (sun/moon), persists to localStorage
  reveal.tsx          — client: Framer Motion scroll-reveal wrapper

content/
  site.ts             — single typed content source (types + data), English only

lib/
  utils.ts            — cn() utility
```

## Routing

- Single route `/` only. No i18n / locale routing.

## Theming

- Dark is the default. `<html>` ships with `class="dark"`; a blocking script in `layout.tsx` applies the saved theme before paint to avoid a flash.
- Toggle is `theme-toggle.tsx` — a segmented pill (`role="group"`) holding a one-click light/dark flip (sun/moon) and a back-arrow "back to system theme" segment that slides out to its right only while an explicit choice is active; collapsed, the pill is a 40px circle matching the nav's other round buttons. Explicit choices persist to `localStorage` key `alexdmtr-theme`; resetting clears the key and follows `prefers-color-scheme` live. The preference is mirrored on `<html data-theme-pref>` (set before paint by the no-flash script); the reset button's visibility uses the `theme-system` custom variant in `globals.css` (no flash or hydration mismatch), and its enter/exit animation is pure CSS via `starting:` (`@starting-style`) + `transition-discrete`.
- Dark mode uses the `class="dark"` strategy; overrides live in the `.dark {}` block in `globals.css`.

## Styling conventions

- All styling is inline Tailwind utility classes — no separate CSS class names (except the background helpers `pg-grid` / `pg-glow` in globals.css).
- Design tokens are prefixed `pg-` to avoid shadcn collisions (e.g. `bg-pg-surface`, `text-pg-muted`, `border-pg-line`, `text-pg-accent`). Light values in `@theme`, dark in `.dark {}`.
- Fluid sizing vars: `--text-display`, `--text-section`, `--text-hero-copy`, `--spacing-section`, `--spacing-page`.
- Fonts: `--font-sans` (Inter) body, `--font-display` (Inter Tight) headings — both variable fonts loaded via `next/font/google` in `layout.tsx`.
- Element resets (`a`, `body`, `button`, `::selection`) **must** stay inside `@layer base` in `globals.css`. Unlayered CSS outranks Tailwind's `@layer utilities`, so an unlayered `a { color: inherit }` would override `text-*` color utilities on links (this previously made a button label invisible).
- `@keyframes rise-in` drives the hero entrance (CSS, staggered via `[animation-delay:…]`); scroll sections use `Reveal`. Both respect `prefers-reduced-motion`.

## Content editing

All copy lives in `content/site.ts` as a typed `SiteContent` object — edit the data, types are colocated. Sections: hero, stats, experience (includes education), stack (tech), portfolio, footer.

Portfolio projects (`site.portfolio.projects`, type `Project`) render as cards with a thumbnail from `public/projects/` (live-app screenshots; falls back to an accent-gradient placeholder if `image` is omitted), description, tag chips, and optional `liveUrl` / `repoUrl` links. Apps that support dark mode also set `imageDark` (a `<name>-dark.png` capture of the app in dark theme), shown instead of `image` when the site theme is dark. Screenshots are 1000×625 (16:10, matching the card's aspect ratio); light/dark pairs are captured at the same viewport and app state so the swap doesn't shift framing.

Experience is split into `roles` (featured — full timeline rows) and `earlier` (de-emphasised internships/early roles, rendered as a compact grid under `earlierTitle`). Education (University of Manchester) is a featured `role`, not a separate section. Each role can set `logo: "/logos/<file>"` (png or svg, from `public/logos/`); without one it falls back to an initials monogram (`CompanyLogo`, which has an `sm` variant for the earlier grid). `period`, `summary`, and `tags` are optional. Logo tiles use the theme-aware `--color-pg-tile` token so any logo colour reads in both themes.

> Email is intentionally **not** published on the site. Public links are GitHub and LinkedIn only (`site.socials`), shown as icons in the nav and as text links in the footer.

## Static export

`next.config.mjs` sets `output: "export"`. Build produces `out/` with `index.html` and `404.html`. Images are unoptimized (no server-side optimization for static export).
