# Agent Guide

This guide defines repository-wide instructions for coding agents working with this codebase.

## Working from this project on macOS

This is a pure Next.js 15 App Router project. There is no backend, no database, and no WSL setup.

- Package manager is **pnpm**. Always use `pnpm` — never `npm` or `yarn`. The lockfile is `pnpm-lock.yaml`.
- Node.js must be available. If a command fails with "command not found: node", the environment's Node.js path may not be on `PATH`; locate it with `which node` or `nvm use`.
- File paths are Unix-style (`/`). There are no Windows path concerns.
- Keep all text files with **LF** line endings. Do not save project files with CRLF or with a UTF-8 BOM.

## Project Structure

```text
app/                          # Next.js App Router
  layout.tsx                  # Root layout (fonts, global styles)
  globals.css                 # CSS variables (design tokens) and base styles
  s/                          # Marketing/advertorial routes
    a/
      <slug>/
        page.tsx              # Route page component — imports and renders TopBar
        adv.json              # Page text content (headings, CTAs, comments, footer)
        adv-media.json        # Page media content (image/video URLs, icon URLs)

src/
  sections/
    TopBar/
      index.tsx               # Main advertorial component tree (all sections in one file)
    ArticleHeader/index.tsx
    ArticleContent/
      index.tsx
      components/
    CommentsSection/
      index.tsx
      components/
    StickyCtaBar/index.tsx
    Disclaimer/index.tsx
  components/
    CtaButton.tsx             # Shared CTA button
    Breadcrumb.tsx            # Shared breadcrumb

public/
  fonts/                      # Self-hosted font files

next.config.js                # Redirects, remote image hostnames
tailwind.config.js            # Theme tokens, custom animations, font families
tsconfig.json                 # Path aliases (@/ → src/)
```

Each advertorial route is driven entirely by its `adv.json` and `adv-media.json` files. The page component reads those files and passes them as props to `TopBar`. No dynamic data fetching occurs at runtime.

## Dev Commands

```bash
pnpm dev       # Start development server on http://localhost:3000
pnpm build     # Production build
pnpm start     # Serve production build
```

The root path `/` redirects to the first advertorial route (`/s/a/why-high-performers-crash`), defined in `next.config.js`.

There is no test runner configured in this project. Validation means a successful `pnpm build`.

## Key Files

- **`app/globals.css`** — CSS custom properties for all design tokens (colors, radius). Edit here to change the design system baseline.
- **`tailwind.config.js`** — Custom colors, font families (`montserrat`, `helvetica`), border-radius tokens, and animation keyframes. All Tailwind customizations live here.
- **`next.config.js`** — Remote image hostnames (`c.animaapp.com`, `cdn.shopify.com`, `images.unsplash.com`) and the root redirect. Add new external image hosts here before using them in `<Image>`.
- **`tsconfig.json`** — Path alias `@/` maps to `src/`. Use `@/sections/...` and `@/components/...` for all internal imports.
- **`src/sections/TopBar/index.tsx`** — The primary component file containing the full advertorial layout. Most page-level changes happen here.

## Troubleshooting

### Port already in use
If `pnpm dev` fails with `EADDRINUSE: address already in use :::3000`, find and kill the process:
```bash
lsof -ti:3000 | xargs kill -9
```

### pnpm not found
Install pnpm globally:
```bash
npm install -g pnpm
```

### Build fails with "Module not found"
If a new external image hostname is used in `<Image src="https://new-cdn.example.com/...">` but not in `next.config.js`, the build will fail in production. Add the hostname under `images.remotePatterns` in `next.config.js`:
```js
{ protocol: "https", hostname: "new-cdn.example.com" }
```

### Tailwind classes not applied in production
This means a dynamic class fragment was used. See the rule in `REVIEW.md`. Fix by switching to a full-class lookup map or `cn()` with explicit class names.

### Font not loading
Self-hosted fonts must be referenced from `public/fonts/`. The `@font-face` declarations live in `app/globals.css`. If a new font file is added to `public/fonts/`, add the corresponding `@font-face` rule in `globals.css` and register the font family in `tailwind.config.js` under `theme.extend.fontFamily`.

## Text File Format

- Keep all source, config, and style files with **LF** line endings.
- Do not save any file with a UTF-8 BOM.
- When rewriting project files, preserve line endings and do not introduce a BOM.

---

# Development Guidelines

## Coding Style

**Do not write comments in code:**

This is important. Do not write single-line comments that describe what the next line does — they are noise. Self-documenting code with clear variable and component names is preferred. Comments are acceptable only when explaining a non-obvious constraint, a subtle invariant, or a workaround for a specific external bug, and only when the explanation requires at least 3-4 sentences to be useful.

```tsx
// BAD — narrates what the code already says:
// Get the countdown value
const countdown = useCountdown(initialSeconds)
// Render the section heading
if (section.heading) {
  return <Heading text={section.heading} />
}

// GOOD — no comments, code is self-explanatory:
const countdown = useCountdown(initialSeconds)
if (section.heading) {
  return <Heading text={section.heading} />
}

// ACCEPTABLE — non-obvious behavior that would surprise a reader:
// Math.max(0, ...) prevents the timer from going negative when
// the interval fires one final time after seconds reaches 0,
// which can happen on slow render cycles.
const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000)
```

**Style and formatting rules** are in `REVIEW.md` — see that file for operator placement in multi-line expressions, one-argument-per-line calls, type narrowing, Tailwind class safety, and other mechanical rules.

**Prefer explicit return types on exported functions:**

Add return type annotations to all exported components and hooks. Inline components and private helpers can omit them when the type is obvious from context.

```tsx
// BAD — callers cannot see the contract without reading the body:
export function useCountdown(initialSeconds: number) {
  ...
  return formatted
}

// GOOD — return type is part of the contract:
export function useCountdown(initialSeconds: number): string {
  ...
  return formatted
}

// Fine to omit on trivial inferred cases:
const HtmlParagraphs = ({ paragraphs }: { paragraphs: string[] }) => (
  <div>...</div>
)
```

## Server vs. Client Components

This project uses the **Next.js App Router**. By default, every component in `app/` is a Server Component. `src/sections/TopBar/index.tsx` is a Client Component (`"use client"`) because it uses hooks (`useState`, `useEffect`, `useContext`).

Key rules:

- Do not add `"use client"` to `app/layout.tsx` or `app/s/**/page.tsx` — these are Server Components and must remain so. Pass data from JSON files as props into Client Components.
- Any component that uses `useState`, `useEffect`, `useContext`, browser APIs (`window`, `document`), or event handlers must have `"use client"` at the top of its file.
- Keep the Server / Client boundary at the section level. Pages import sections; sections are Client Components when they need interactivity.

```tsx
// app/s/a/my-slug/page.tsx — Server Component, no "use client":
import content from "./adv.json"
import media from "./adv-media.json"
import { TopBar } from "@/sections/TopBar"

export default function MySlugPage() {
  return (
    <main>
      <TopBar content={content} media={media} />
    </main>
  )
}

// src/sections/TopBar/index.tsx — Client Component:
"use client"
import { useState, useEffect } from "react"
// ...
```

## Content System

Each advertorial route is driven by two JSON files co-located with the page:

- `adv.json` — all text content: headings, paragraphs, CTA labels, comment items, footer copy
- `adv-media.json` — all media references: image URLs, video URLs, icon URLs, avatar URLs

The page passes both files as props to `TopBar`. Downstream components read from these via `AdvertorialContext`. To add a new advertorial route:

1. Create `app/s/a/<slug>/` with `page.tsx`, `adv.json`, and `adv-media.json`
2. Copy the structure from an existing route's JSON files and update the values
3. The page component is identical for every route — only the JSON files differ

**Template interpolation**: Paragraph strings in `adv.json` may contain `{{countdown}}` placeholders, which `interpolateTemplate` replaces at render time with the live countdown value. To add a new interpolation key, add the key to the `values` object passed to `<HtmlParagraphs>` and use `{{keyName}}` in the JSON.

**HTML in paragraphs**: Paragraph strings may contain inline HTML (`<b>`, `<em>`, `<a>`, etc.), rendered via `dangerouslySetInnerHTML`. When editing paragraph content in JSON, ensure HTML is well-formed — unmatched tags will silently break rendering.

## CTA URL

The external CTA destination is defined as a module-level constant in `src/sections/TopBar/index.tsx`:

```ts
const ADV_CTA_URL = "https://loraritual.com/products/nrx"
```

All CTA anchors (`<a href={ADV_CTA_URL}>`) in that file reference this constant. To change the destination for a page, update this constant. If routes need different destinations, move this constant into `adv.json` and thread it through `AdvertorialContent`.

## Styling with Tailwind

All styling uses Tailwind utility classes. The design system is defined in two places:

**CSS custom properties** (`app/globals.css`) define the color tokens as HSL values. Tailwind color utilities (`bg-background`, `text-foreground`, `border-primary`, etc.) resolve to these variables at runtime. To change a brand color, update the HSL value in `globals.css` — it propagates everywhere automatically.

**`tailwind.config.js`** extends the theme with:
- Named colors that map to CSS variables (`primary`, `secondary`, `muted`, `accent`, etc.)
- Border-radius tokens (`lg`, `md`, `sm`) mapped to `--radius`
- Font families: `font-montserrat` (Montserrat), `font-helvetica` (Helvetica/Arial)
- Custom animation keyframes: `fade-up`, `fade-in`, `pulse-glow`, `slide-down`, `bounce-subtle`

**Usage rules:**
- Use `font-montserrat` for headings, body copy, and CTAs. Use `font-helvetica` for comment UI elements.
- Use the semantic color names (`text-foreground`, `bg-background`) when possible so light/dark mode works automatically. Use raw hex or Tailwind palette colors only when a specific brand shade is required.
- Use the custom animations via their utility class: `animate-fade-up`, `animate-pulse-glow`, etc. Do not write inline `animation` styles.
- Use `reveal` and `reveal-fast` CSS classes (defined in `globals.css`) for scroll-triggered fade-in effects on sections that should animate into view.

**Never hardcode pixel values as magic numbers in JSX style props when a Tailwind utility exists.** Use `mt-[15px]` (arbitrary value syntax) only when no standard spacing token is close enough.

```tsx
// BAD — magic number in style prop, bypasses Tailwind:
<div style={{ marginTop: 15 }}>

// ACCEPTABLE — arbitrary value in Tailwind when no token fits:
<div className="mt-[15px]">

// GOOD — standard Tailwind spacing token:
<div className="mt-4">
```

## React Context Pattern

`AdvertorialContext` makes the page's content and media available to every component in the tree without prop drilling. The pattern used throughout this codebase:

```tsx
// Provider at the root of the section (TopBar):
<AdvertorialContext.Provider value={{ content, media }}>
  {children}
</AdvertorialContext.Provider>

// Consumer hook — throws with a clear message when used outside the tree:
function useAdvertorialData(): AdvertorialData {
  const context = useContext(AdvertorialContext)
  if (!context) {
    throw new Error("TopBar advertorial data is missing.")
  }
  return context
}

// Usage in any child component:
const { content, media } = useAdvertorialData()
```

When adding a new section component that needs access to page data, import and call `useAdvertorialData()` — do not thread props down manually.

## Image and Video Usage

Remote images must use `<Image>` from `next/image` only when the hostname is listed in `next.config.js` under `images.remotePatterns`. For images from unlisted hostnames, or for inline data URLs, use a plain `<img>` tag. For images that don't need optimization (avatars loaded from dynamic URLs at runtime), `<img>` is also acceptable.

Videos use a plain `<video>` element with `autoPlay`, `muted`, `playsInline`, and `loop`. The aspect ratio wrapper pattern keeps them responsive:

```tsx
// Standard video wrapper — preserves 16:9 without layout shift:
<div className="relative w-full overflow-hidden rounded-sm" style={{ paddingTop: "56.25%" }}>
  <video
    src={src}
    autoPlay
    muted
    playsInline
    loop={loop}
    className="absolute h-full w-full left-0 top-0 object-cover"
  />
</div>
```

Always include `alt` text on `<img>` elements. Use `alt=""` only for decorative images that carry no information.
