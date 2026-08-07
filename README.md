<a name="top"></a>

# LP Template Library

[![framework](https://img.shields.io/badge/framework-Next.js%2015-000000)](https://nextjs.org)
[![language](https://img.shields.io/badge/language-TypeScript-3178C6)](https://www.typescriptlang.org)
[![styling](https://img.shields.io/badge/styling-Tailwind%20CSS-06B6D4)](https://tailwindcss.com)
[![pkg manager](https://img.shields.io/badge/pkg%20manager-pnpm-F69220)](https://pnpm.io)
[![pages](https://img.shields.io/badge/pages-42%20templates-2ea44f)](#-page-formats)
[![formats](https://img.shields.io/badge/formats-7%20types-7C3AED)](#-page-formats)
[![GitHub last commit](https://img.shields.io/github/last-commit/chappydc1/lp-all-personal)](#)
[![license](https://img.shields.io/badge/license-private-lightgrey)](#)

⭐ Star us on GitHub — your support keeps the build moving!

[![Share on X](https://img.shields.io/badge/share-000000?logo=x&logoColor=white)](https://x.com/intent/tweet?text=42%20production-ready%20DTC%20landing%20pages%20in%20one%20Next.js%2015%20codebase%3A%20https%3A%2F%2Fgithub.com%2Fchappydc1%2Flp-all-personal%20%23landingpages%20%23DTC%20%23NextJS)
[![Share on Facebook](https://img.shields.io/badge/share-1877F2?logo=facebook&logoColor=white)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/chappydc1/lp-all-personal)
[![Share on LinkedIn](https://img.shields.io/badge/share-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/chappydc1/lp-all-personal)
[![Share on Reddit](https://img.shields.io/badge/share-FF4500?logo=reddit&logoColor=white)](https://www.reddit.com/submit?title=42%20production-ready%20DTC%20landing%20pages%20in%20one%20Next.js%2015%20codebase&url=https://github.com/chappydc1/lp-all-personal)
[![Share on Telegram](https://img.shields.io/badge/share-0088CC?logo=telegram&logoColor=white)](https://t.me/share/url?url=https://github.com/chappydc1/lp-all-personal&text=42%20production-ready%20DTC%20landing%20pages%20in%20one%20Next.js%2015%20codebase)

**42 production-ready landing pages. 7 formats. One codebase. Fork a folder, swap the JSON, ship.**

---

## Table of Contents

- [Why This Library](#-why-this-library)
- [Format Overview](#-format-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Dev Commands](#-dev-commands)
- [Production Links](#-production-links)
- [Dev Links](#-dev-links)
- [Page Formats](#-page-formats)
- [Spin Up a New Page](#-spin-up-a-new-page)
- [Developer Guide](#-developer-guide)

---

## 💡 Why This Library

Building a new landing page for each brand from scratch burns time and introduces inconsistency. This library solves that:

- **One codebase, many brands** — every format is battle-tested across multiple portfolio brands
- **Content-driven pages** — all copy and media live in `copy.json` / `media.json`; no code changes needed to re-brand
- **AI-ready** — the two-file content system is designed to be rewritten by an LLM in a single prompt
- **Production-proven** — pages run live on [northlinemd.com](https://www.northlinemd.com) across advertorials, VSLs, quizzes, and sales pages

---

## 📦 Format Overview

| Format | Route prefix | What it is |
|--------|-------------|------------|
| **Advertorial** | `/s/a/` | Article-style editorial pages — news framing, social proof, CTA |
| **Advertorial Listicle** | `/s/a-lis/` | Article-style advertorial with a numbered listicle body — editorial hook, specialist byline, benefit-stacked reasons |
| **Comparison** | `/s/com/` | Ranked product tables with scored reviews and sidebar filters |
| **Listicle** | `/s/lis/` | Numbered-reason articles — hook-driven, benefit-stacked |
| **Quiz** | `/s/q/` | Multi-step interactive funnels with progress bar and result screens |
| **Sales** | `/s/sal/` | Direct-response offer pages — countdown, comparison table, order section |
| **VSL** | `/s/vsl/` | Video sales letter pages — desktop + mobile video covers, tiered order section |

---

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org) — App Router, SSR/SSG
- TypeScript, Tailwind CSS
- Radix UI (accessible primitives), Framer Motion (animations), Lucide React (icons)

---

## 📁 Project Structure

```
app/s/
  a/      # Advertorial          — article-style editorial pages
  a-lis/  # Advertorial Listicle — editorial hook with numbered listicle body
  com/    # Comparison           — ranked product tables
  lis/    # Listicle             — numbered-reason articles
  q/      # Quiz                 — multi-step interactive funnels
  sal/    # Sales                — direct-response offer pages
  vsl/    # VSL                  — video sales letter pages

app/s/<type>/<slug>/
  page.tsx      # Page entry — imports and wires sections
  copy.json     # All user-visible text: headings, CTAs, comments, footer
  media.json    # All media: image/video URLs, icon URLs, Tailwind classes
  sections/     # Page-specific section components (when present)
  components/   # Page-specific UI components (when present)
```

> Every template is fully self-contained — copy, media, components, and sections live alongside the route.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** 9+ — `npm install -g pnpm`

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the dev server

```bash
pnpm dev           # http://localhost:3000
```

### 3. Open a page

Browse any route from the [Dev Links](#-dev-links) section below, e.g. [http://localhost:3000/s/sal/nuz/neck-pain](http://localhost:3000/s/sal/nuz/neck-pain).

---

## ⚡ Dev Commands

```bash
pnpm dev      # Development server with HMR
pnpm build    # Production build (also serves as validation — no test runner)
pnpm start    # Serve the production build
```

---

## 🌐 Production Links

Live pages on **www.northlinemd.com**:

**Advertorial** &nbsp;
[derila](https://www.northlinemd.com/s/a/derila) &nbsp;|&nbsp;
[healthinsider-gynocologist](https://www.northlinemd.com/s/a/healthinsider-gynocologist) &nbsp;|&nbsp;
[hear](https://www.northlinemd.com/s/a/hear) &nbsp;|&nbsp;
[jevawell](https://www.northlinemd.com/s/a/jevawell) &nbsp;|&nbsp;
[morningvitality](https://www.northlinemd.com/s/a/morningvitality) &nbsp;|&nbsp;
[nebroo-v1](https://www.northlinemd.com/s/a/nebroo-v1) &nbsp;|&nbsp;
[spartan](https://www.northlinemd.com/s/a/spartan) &nbsp;|&nbsp;
[today](https://www.northlinemd.com/s/a/today) &nbsp;|&nbsp;
[zikeey](https://www.northlinemd.com/s/a/zikeey)

**Comparison** &nbsp;
[forbes](https://www.northlinemd.com/s/com/forbes) &nbsp;|&nbsp;
[primepicks](https://www.northlinemd.com/s/com/primepicks) &nbsp;|&nbsp;
[shilajit](https://www.northlinemd.com/s/com/shilajit)

**Listicle** &nbsp;
[brez](https://www.northlinemd.com/s/lis/brez) &nbsp;|&nbsp;
[feals](https://www.northlinemd.com/s/lis/feals) &nbsp;|&nbsp;
[gruns](https://www.northlinemd.com/s/lis/gruns) &nbsp;|&nbsp;
[hike](https://www.northlinemd.com/s/lis/hike) &nbsp;|&nbsp;
[javy](https://www.northlinemd.com/s/lis/javy) &nbsp;|&nbsp;
[jones](https://www.northlinemd.com/s/lis/jones) &nbsp;|&nbsp;
[kachava](https://www.northlinemd.com/s/lis/kachava) &nbsp;|&nbsp;
[rejuvacare](https://www.northlinemd.com/s/lis/rejuvacare)

**Quiz** &nbsp;
[chappy](https://www.northlinemd.com/s/q/chappy) &nbsp;|&nbsp;
[chappy2](https://www.northlinemd.com/s/q/chappy2) &nbsp;|&nbsp;
[hear](https://www.northlinemd.com/s/q/hear)

**Sales** &nbsp;
[amala](https://www.northlinemd.com/s/sal/amala) &nbsp;|&nbsp;
[nebroo](https://www.northlinemd.com/s/sal/nebroo) &nbsp;|&nbsp;
[nuz/neck-pain](https://www.northlinemd.com/s/sal/nuz/neck-pain) &nbsp;|&nbsp;
[smoothspine](https://www.northlinemd.com/s/sal/smoothspine)

**VSL** &nbsp;
[abc-news](https://www.northlinemd.com/s/vsl/abc-news) &nbsp;|&nbsp;
[diabetes](https://www.northlinemd.com/s/vsl/diabetes) &nbsp;|&nbsp;
[emma](https://www.northlinemd.com/s/vsl/emma) &nbsp;|&nbsp;
[getokinawatonic](https://www.northlinemd.com/s/vsl/getokinawatonic) &nbsp;|&nbsp;
[glycoflush](https://www.northlinemd.com/s/vsl/glycoflush) &nbsp;|&nbsp;
[oprah](https://www.northlinemd.com/s/vsl/oprah)

---

## 🖥 Dev Links

Local pages on **localhost:3000**:

**Advertorial** &nbsp;
[cardiologist-90-day-capsaicin-investigation](http://localhost:3000/s/a/cardiologist-90-day-capsaicin-investigation) &nbsp;|&nbsp;
[derila](http://localhost:3000/s/a/derila) &nbsp;|&nbsp;
[elavyn](http://localhost:3000/s/a/elavyn) &nbsp;|&nbsp;
[healthinsider-gynocologist](http://localhost:3000/s/a/healthinsider-gynocologist) &nbsp;|&nbsp;
[hear](http://localhost:3000/s/a/hear) &nbsp;|&nbsp;
[jevawell](http://localhost:3000/s/a/jevawell) &nbsp;|&nbsp;
[morningvitality](http://localhost:3000/s/a/morningvitality) &nbsp;|&nbsp;
[nebroo-v1](http://localhost:3000/s/a/nebroo-v1) &nbsp;|&nbsp;
[nebroo-v2](http://localhost:3000/s/a/nebroo-v2) &nbsp;|&nbsp;
[nephrologist-90-day-capsaicin-investigation](http://localhost:3000/s/a/nephrologist-90-day-capsaicin-investigation) &nbsp;|&nbsp;
[nexa](http://localhost:3000/s/a/nexa) &nbsp;|&nbsp;
[nooro](http://localhost:3000/s/a/nooro) &nbsp;|&nbsp;
[rejuvacare](http://localhost:3000/s/a/rejuvacare) &nbsp;|&nbsp;
[rosabella](http://localhost:3000/s/a/rosabella) &nbsp;|&nbsp;
[skinmag-v1](http://localhost:3000/s/a/skinmag-v1) &nbsp;|&nbsp;
[spartan](http://localhost:3000/s/a/spartan) &nbsp;|&nbsp;
[today](http://localhost:3000/s/a/today) &nbsp;|&nbsp;
[trybello](http://localhost:3000/s/a/trybello) &nbsp;|&nbsp;
[urologist-90-day-capsaicin-investigation](http://localhost:3000/s/a/urologist-90-day-capsaicin-investigation) &nbsp;|&nbsp;
[zikeey](http://localhost:3000/s/a/zikeey)

**Advertorial Listicle** &nbsp;
[hike](http://localhost:3000/s/a-lis/hike) &nbsp;|&nbsp;
[rosabella](http://localhost:3000/s/a-lis/rosabella)

**Comparison** &nbsp;
[forbes](http://localhost:3000/s/com/forbes) &nbsp;|&nbsp;
[primepicks](http://localhost:3000/s/com/primepicks) &nbsp;|&nbsp;
[shilajit](http://localhost:3000/s/com/shilajit)

**Listicle** &nbsp;
[brez](http://localhost:3000/s/lis/brez) &nbsp;|&nbsp;
[feals](http://localhost:3000/s/lis/feals) &nbsp;|&nbsp;
[gruns](http://localhost:3000/s/lis/gruns) &nbsp;|&nbsp;
[hike](http://localhost:3000/s/lis/hike) &nbsp;|&nbsp;
[javy](http://localhost:3000/s/lis/javy) &nbsp;|&nbsp;
[jones](http://localhost:3000/s/lis/jones) &nbsp;|&nbsp;
[kachava](http://localhost:3000/s/lis/kachava) &nbsp;|&nbsp;
[rejuvacare](http://localhost:3000/s/lis/rejuvacare) &nbsp;|&nbsp;
[sanlava](http://localhost:3000/s/lis/sanlava)

**Quiz** &nbsp;
[chappy](http://localhost:3000/s/q/chappy) &nbsp;|&nbsp;
[gruns](http://localhost:3000/s/q/gruns) &nbsp;|&nbsp;
[hear](http://localhost:3000/s/q/hear) &nbsp;|&nbsp;
[nooro](http://localhost:3000/s/q/nooro)

**Sales** &nbsp;
[amala](http://localhost:3000/s/sal/amala) &nbsp;|&nbsp;
[nebroo](http://localhost:3000/s/sal/nebroo) &nbsp;|&nbsp;
[nuz/neck-pain](http://localhost:3000/s/sal/nuz/neck-pain) &nbsp;|&nbsp;
[pipitea](http://localhost:3000/s/sal/pipitea) &nbsp;|&nbsp;
[pipitea-matcha](http://localhost:3000/s/sal/pipitea-matcha) &nbsp;|&nbsp;
[smoothspine](http://localhost:3000/s/sal/smoothspine)

**VSL** &nbsp;
[abc-news](http://localhost:3000/s/vsl/abc-news) &nbsp;|&nbsp;
[diabetes](http://localhost:3000/s/vsl/diabetes) &nbsp;|&nbsp;
[emma](http://localhost:3000/s/vsl/emma) &nbsp;|&nbsp;
[getokinawatonic](http://localhost:3000/s/vsl/getokinawatonic) &nbsp;|&nbsp;
[glycoflush](http://localhost:3000/s/vsl/glycoflush) &nbsp;|&nbsp;
[oprah](http://localhost:3000/s/vsl/oprah) &nbsp;|&nbsp;
[pinksalt](http://localhost:3000/s/vsl/pinksalt) &nbsp;|&nbsp;
[today](http://localhost:3000/s/vsl/today)

**Top Advertorials by Type** &nbsp;
Spartan: [spartan](http://localhost:3000/s/a/spartan) &nbsp;|&nbsp; [nooro](http://localhost:3000/s/a/nooro) &nbsp;|&nbsp; [nexa](http://localhost:3000/s/a/nexa) &nbsp;|&nbsp; [nebroo-v1](http://localhost:3000/s/a/nebroo-v1) &nbsp;&nbsp;
News: [jevawell](http://localhost:3000/s/a/jevawell) &nbsp;|&nbsp; [elavyn](http://localhost:3000/s/a/elavyn)

---

## 📋 Page Formats

Every template lives at `app/s/<type>/<slug>/` — fully self-contained with its own copy, media, components, and sections.

---

### 📰 Advertorial `/s/a/`

| Route | Brand | Hook | Source |
|---|---|---|---|
| [`/s/a/derila`](app/s/a/derila/) | **Derila** | Memory foam pillow for over-50s — wake up with no tension headaches | [derila.com](https://derila.com/articles/wake-up-refreshed?c=CAD&l=en&vndr=derfbdov) |
| [`/s/a/healthinsider-gynocologist`](app/s/a/healthinsider-gynocologist/) | **Healthinsider** | Gynecologist tests 5 menopause supplements — only 1 worked for weight loss | [healthinsider.news](https://healthinsider.news/gynecologists-tested-best-supplements-on-patients-to-reduce-cortisol-meno-supplements-en/) |
| [`/s/a/hear`](app/s/a/hear/) | **hear.com** | The tiny German hearing aid taking the U.S. by storm — 540k happy customers | [hear.com](https://www.hear.com/d/best_hearing_aids_dis01) |
| [`/s/a/jevawell`](app/s/a/jevawell/) | **Jevawell** | Vascular specialist exposes the $18B vein industry secret — daily edema gummy | [jevawell.com](https://jevawell.com/pages/adv-1) |
| [`/s/a/morningvitality`](app/s/a/morningvitality/) | **Morning Vitality** | Top MD: rub this 1 mineral on your hips for sciatic nerve relief | [morningvitality.com](https://health.morningvitality.com/xe/bt1t/) |
| [`/s/a/nebroo-v1`](app/s/a/nebroo-v1/) | **Nebroo** | Why did I lose my hearing and what can I do? — CIC hearing aid editorial | [nebroo.com](https://offer.nebroo.com/advert-v1-3) |
| [`/s/a/nebroo-v2`](app/s/a/nebroo-v2/) | **Nebroo v2** | Why Did You Lose Your Hearing and What Can You Do? — updated CIC hearing aid editorial | [nebroo.com](https://offer.nebroo.com) |
| [`/s/a/spartan`](app/s/a/spartan/) | **Spartan** | The cellular mechanism behind energy decline in your 40s — clinical-trial framing | [healthguidancedaily.com](https://healthguidancedaily.com/s/a/why-high-performers-crash) |
| [`/s/a/today`](app/s/a/today/) | **Today / SugarHealth** | Metabolic support editorial in Today-show news style | Today advertorial |
| [`/s/a/zikeey`](app/s/a/zikeey/) | **Zikeey / Sherum ErgoSeat** | If you are painful when you sit, you should read this — ergonomic cushion review | [zikeey.com](https://zikeey.com/me/new/Sherum/memory-foam-seat-cushion/view12776) |
| [`/s/a/cardiologist-90-day-capsaicin-investigation`](app/s/a/cardiologist-90-day-capsaicin-investigation/) | **Lora** | Cardiologist spent 90 days investigating Lora Capsaicin Power Softgels for blood flow improvement | [loraritual.com](https://loraritual.com/products/cayenne-pepper-softgels) |
| [`/s/a/nephrologist-90-day-capsaicin-investigation`](app/s/a/nephrologist-90-day-capsaicin-investigation/) | **Lora** | Nephrologist spent 90 days investigating Lora Capsaicin Power for foamy urine and kidney health | [loraritual.com](https://loraritual.com/products/capsaicin-power-kidney) |
| [`/s/a/urologist-90-day-capsaicin-investigation`](app/s/a/urologist-90-day-capsaicin-investigation/) | **Lora** | Urologist spent 90 days investigating Lora Capsaicin Power Softgels for circulation and ED | [loraritual.com](https://loraritual.com/products/capsaicin-power-ed) |

---

### 🔬 Advertorial Listicle `/s/a-lis/`

Article-style editorial hook paired with a numbered listicle body — specialist byline, investigative framing, benefit-stacked reasons, embedded product recommendation.

| Route | Brand | Hook | Source |
|---|---|---|---|
| [`/s/a-lis/hike`](app/s/a-lis/hike/) | **Hike Footwear** | Why Americans Over 50 Are Switching to These Pain-Relieving Barefoot Shoes | [hike footwear](https://www.hikefootwear.com) |
| [`/s/a-lis/rosabella`](app/s/a-lis/rosabella/) | **Rosabella** | 5 Reasons Why Thousands Are Choosing Rosabella Moringa to Restore Energy, Focus, and Metabolism — and Break Free from Chronic Fatigue | [tryrosabella.com](https://shop.tryrosabella.com/npl-nlp) |

---

### 📊 Comparison `/s/com/`

| Route | Brand | Hook | Source |
|---|---|---|---|
| [`/s/com/forbes`](app/s/com/forbes/) | **Forbes Health** | Top-rated GLP-1 weight loss medications of 2026 | [forbes.com/health](https://www.forbes.com/health/) |
| [`/s/com/primepicks`](app/s/com/primepicks/) | **PrimePicks** | Best wallet trackers of 2026 — scored comparison with sidebar filters | PrimePicks review style |
| [`/s/com/shilajit`](app/s/com/shilajit/) | **BuyeReviews** | 10 best shilajit supplements — animated reveal ranking | Shilajit comparison |

---

### 📝 Listicle `/s/lis/`

| Route | Brand | Hook | Source |
|---|---|---|---|
| [`/s/lis/brez`](app/s/lis/brez/) | **BRĒZ** | 6 reasons Americans are ditching alcohol for BRĒZ — hemp + Lion's Mane | BRĒZ listicle ad |
| [`/s/lis/feals`](app/s/lis/feals/) | **Feals** | Get the relaxing buzz without the hangover, calories, or regret | Feals listicle |
| [`/s/lis/gruns`](app/s/lis/gruns/) | **Grüns** | 6 reasons why Grüns is your gut's new bestie — 60+ ingredients in a gummy | Grüns listicle |
| [`/s/lis/hike`](app/s/lis/hike/) | **Hike Footwear** | Why Americans over 50 are switching to these pain-relieving barefoot shoes | [animaapp.com](https://c.animaapp.com/mpkdc2w7URxoYV) |
| [`/s/lis/javy`](app/s/lis/javy/) | **Javy** | 11 reasons this high-protein iced coffee is the #1 trending drink for Spring 2026 | Javy LP |
| [`/s/lis/jones`](app/s/lis/jones/) | **Jones Road Beauty** | What The Foundation — flawless look, barely-there feel | Jones Road Beauty LP |
| [`/s/lis/kachava`](app/s/lis/kachava/) | **Ka'Chava** | 9 reasons why people love this shake — plant-based all-in-one nutrition | Ka'Chava listicle |
| [`/s/lis/rejuvacare`](app/s/lis/rejuvacare/) | **RejuvaCare** | How this "patch trick" is helping millions melt fat without diets or injections | RejuvaCare listicle |
| [`/s/lis/sanlava`](app/s/lis/sanlava/) | **Sanlava** | 10 reasons why this "Metabolic Switch" breakthrough is changing how women over 45 take back control of blood sugar, cravings & energy | [sanlava.com](https://www.sanlava.com) |

---

### 🧪 Quiz `/s/q/`

| Route | Brand | Hook | Source |
|---|---|---|---|
| [`/s/q/chappy`](app/s/q/chappy/) | **Grüns** | 50-question single-answer quiz → personalised gummy recommendation + confetti | Grüns product quiz |
| [`/s/q/chappy2`](app/s/q/chappy2/) | **Grüns v2** | Alternate Grüns quiz flow with heyflow-style assets and progress bar | [heyflow.com](https://heyflow.com) quiz style |
| [`/s/q/hear`](app/s/q/hear/) | **hear.com** | Hearing qualification quiz — selected option highlights, loading + result screens | hear.com quiz funnel |

---

### 🛒 Sales Page `/s/sal/`

| Route | Brand | Hook | Source |
|---|---|---|---|
| [`/s/sal/amala`](app/s/sal/amala/) | **Amala Health** | Exhausted all day, aging faster than you should? — PrimeCell H2 cellular support | Amala Health sales page |
| [`/s/sal/nebroo`](app/s/sal/nebroo/) | **Nebroo PRO 2.0** | Over 100,000 satisfied customers — hearing aids at 70% OFF, 120-day trial | Nebroo sales page |
| [`/s/sal/nuz/neck-pain`](app/s/sal/nuz/neck-pain/) | **Nuzzle** | Stop your neck pain fast — pillow with countdown, comparison table, video proof | [getnuzzle.com](https://getnuzzle.com) |
| [`/s/sal/smoothspine`](app/s/sal/smoothspine/) | **SmoothSpine** | "Triple Fusion" device decompresses your spine and rehydrates discs from home | SmoothSpine sales page |

---

### 🎬 VSL `/s/vsl/`

| Route | Brand | Hook | Source |
|---|---|---|---|
| [`/s/vsl/abc-news`](app/s/vsl/abc-news/) | **ABC News** | Breaking-news editorial wrapper around a VSL | ABC News editorial style |
| [`/s/vsl/diabetes`](app/s/vsl/diabetes/) | **GlycoCept** | Harvard MD reveals the natural honey blend reversing Type 2 diabetes in 21 days | GlycoCept VSL |
| [`/s/vsl/emma`](app/s/vsl/emma/) | **Emma** | "Do this once a day to empty your bowels like clockwork" — gut renewal formula | Emma VSL |
| [`/s/vsl/getokinawatonic`](app/s/vsl/getokinawatonic/) | **Okinawa Tonic** | Weight loss tonic VSL — desktop + mobile video covers, multi-tier order section | [getokinawatonic.com](https://getokinawatonic.com/sp-vsl-1/) |
| [`/s/vsl/glycoflush`](app/s/vsl/glycoflush/) | **GlycoFlush** | Claim your discounted GlycoLean now — blood sugar VSL | GlycoFlush VSL |
| [`/s/vsl/oprah`](app/s/vsl/oprah/) | **HEALTH** | Celebrity-endorsed weight loss VSL with starter / value / best-value tier order | Oprah-style VSL |
| [`/s/vsl/pinksalt`](app/s/vsl/pinksalt/) | **Pink Salt** | The 4-ingredient recipe celebrities use to drop up to 14 lbs in 10 days | Pink Salt VSL |
| [`/s/vsl/today`](app/s/vsl/today/) | **Today** | Today-show news format VSL | Today-show VSL style |

---

## 🆕 Spin Up a New Page

```bash
cp -R app/s/sal/nuz/neck-pain app/s/sal/<brand>/<campaign>
```

Open `copy.json` (all user-visible text) and `media.json` (asset URLs, timers, Tailwind classes). Hand both to an AI:

> Rewrite all copy for **\<new product\>**. Keep the same structure, key names, array lengths, and `**bold**` conventions.

Route wires up automatically — add `page.tsx` pointing to your `LandingPage` export and Tailwind picks up the JSON classes at build time.

> The fastest starting point is [`app/s/sal/nuz/neck-pain/`](app/s/sal/nuz/neck-pain/) — it has the most complete [developer guide](app/s/sal/nuz/neck-pain/README.md) and the two-file content system.

---

## 📚 Developer Guide

- [`AGENTS.md`](AGENTS.md) — full developer guide: project structure, dev commands, key files, troubleshooting
- [`CHANGELOG.md`](CHANGELOG.md) — release history

---

[↑ Back to top](#top)
