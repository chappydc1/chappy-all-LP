# Nuzzle — Neck Pain LP

A complete, self-contained Next.js landing page. **Copy and content live in two sibling folders** — `copy/copy.json` (user-visible text) and `content/content.json` (asset URLs, icons, video IDs, numeric timers, structural Tailwind classes). `content.ts` deep-merges them into the single shape the section components consume.

Lives at `s/a/nuz/neck-pain/`. The path convention is `s/a/<brand>/<campaign>/` — copy this folder to a sibling path (e.g. `s/a/nuz/back-pain/` or `s/a/cloudrest/mattress/`) to spin up a new LP fast.

## What's in here

```
neck-pain/
  copy/copy.json        ← user-visible text. Edit this with AI for new copy.
  content/content.json  ← image/icon/video URLs, numbers, Tailwind classes.
  content.ts            ← deep-merges both JSONs into LandingPageContent
  types.ts              ← TypeScript shape for the merged content
  styles.css            ← @font-face + page-specific utilities
  LandingPage.tsx       ← composed page — render this from app/page.tsx
  components/           ← shared CTA button + FAQ accordion
  hooks/                ← useCountdown + useScrollReveal
  sections/             ← every visible section of the page
```

## Editing copy

Open `copy/copy.json`. Each top-level key matches a section of the page:

| Key | Section |
|-----|---------|
| `global` | Shared CTA label, sale-ends prefix, secure badge, lock + cc images |
| `countdownBanner` | Top sale banner with countdown timer |
| `navbar` | Top logo bar |
| `stickyBar` | Desktop sticky bar that appears on scroll |
| `mobileOrderBar` | Mobile bottom CTA bar |
| `hero` | Headline + benefit tags + subhead + 5 expanding FAQ accordions |
| `mediaBanner` | "As Seen On" marquee of media logos |
| `video` | Cloudflare Stream video + headline + body copy |
| `painPoints` | "Professionally Recommended" section with bullets + 6-tile grid |
| `features` | "Why Nuzzle Has Worked" — 6 cards around the product image |
| `howItWorks` | 3 numbered explainer steps with 2 videos each |
| `comparison` | Comparison table vs 3 competitors |
| `trustpilot` | Trustpilot-styled reviews grid (heading + rating + reviews[]) |
| `testimonials` | Verified-buyer reviews (heading + rating summary + 10 reviews) |
| `faq` | Closing FAQ with 6 expandable items |
| `guarantee` | 90-day guarantee section + final CTA |
| `footer` | Footer links + copyright + address |

### Editing rules

- **Plain strings** are the default. Just edit them.
- **`**bold**`** inside a string renders inline as `<strong>` (used in video body paragraphs and pain-points bullets).
- **Multi-paragraph bodies** are arrays of strings. Each becomes its own paragraph (rendered with a blank line between them).
- **Countdown timers** (`ctaCountdownSeconds`, `countdownBanner.initialSeconds`, etc.) live in `content/content.json` as a starting number of seconds. The hook ticks down from there on each render.
- **Image, icon, and video URLs** live in `content/content.json` — easy to swap when re-branding.
- **`hero.faq[].type`** lives in `content/content.json` (it's a structural discriminator) and can be `"shipping"`, `"text"`, or `"returns"`. The matching text fields (`question`, `text`, `email`, etc.) live in `copy/copy.json`. See `types.ts` for the full merged shape.
- **Tailwind classes in JSON** (e.g. `mediaBanner.logos[].heightClass`, `howItWorks.steps[].containerVariantClass`) live in `content/content.json`. `tailwind.config.js` scans `./app/**/*.json` so these classes are picked up at build time.
- **Mixed arrays** (e.g. `hero.shippingBadges: [{ icon, label }]`) are split element-wise — `icon` lives in `content/content.json` and `label` in `copy/copy.json`. The merger zips them by index, so **both files must keep the same array length** when you add or remove an entry.

### "Asking AI" workflow

Hand AI both JSONs (or just `copy/copy.json` when only the wording is changing) plus a brief like:

> Here is copy/copy.json for a landing page. Rewrite all copy for a memory-foam mattress brand called Cloudrest. Keep the same structure, key names, array lengths, and `**bold**` conventions.

For a full re-brand including assets, hand AI both files and ask it to keep array indices aligned. The TypeScript types will catch any shape errors at build time.

## Spinning up a new LP in this repo

1. `cp -R s/a/nuz/neck-pain s/a/nuz/back-pain` (or `s/a/<new-brand>/<new-campaign>/`)
2. Open `app/page.tsx` and switch the import to your new LP:
   ```tsx
   import { LandingPage } from "@/a/nuz/back-pain/LandingPage";
   ```
3. Open `app/globals.css` and switch the CSS import:
   ```css
   @import "../s/a/nuz/back-pain/styles.css";
   ```
4. Edit `copy/copy.json` for wording and `content/content.json` for assets (handing both to AI is the fast path)
5. `npm run dev`

That's it — tailwind, types, and aliases work because they're wildcard-scoped to `./s/**` and `@/*`.

## Dropping into a fresh Next.js project

If you're starting from a brand-new Next.js + Tailwind project:

1. Copy the folder in at `s/a/<brand>/<campaign>/`.
2. Wire `app/page.tsx`:
   ```tsx
   import { LandingPage } from "@/a/<brand>/<campaign>/LandingPage";
   export default function Page() {
     return <LandingPage />;
   }
   ```
3. Wire `app/globals.css`:
   ```css
   @tailwind components;
   @tailwind utilities;
   @import "../s/a/<brand>/<campaign>/styles.css";
   @tailwind base;
   /* …your base CSS vars… */
   ```
4. `tailwind.config.js`:
   ```js
   content: [
     "./s/**/*.{ts,tsx}",
     "./s/**/*.json", // Tailwind classes live in some JSON files (content/content.json)
     "./app/**/*.{ts,tsx}",
   ],
   ```
   Plus copy the relevant `theme.extend` keys (custom fonts, keyframes, animations) from this project's tailwind config.
5. `tsconfig.json` path alias:
   ```json
   "paths": { "@/*": ["./s/*"] }
   ```
6. Install deps: `next`, `react`, `react-dom`, `tailwindcss`, `typescript`, `@types/react`.

## Inside this folder, all imports are relative

`sections/Foo/index.tsx` imports `../../hooks/useCountdown`, not `@/a/nuz/neck-pain/hooks/useCountdown`. That's intentional — the folder is self-contained and you can drop it anywhere without configuring path aliases for it.

The only `@/...` import is from outside the folder (your `app/page.tsx`).
