<a name="top"></a>

# Chappy — Custom DTC Ecommerce Platform

[![framework](https://img.shields.io/badge/framework-Next.js%2015-000000)](https://nextjs.org)
[![language](https://img.shields.io/badge/language-TypeScript-3178C6)](https://www.typescriptlang.org)
[![styling](https://img.shields.io/badge/styling-Tailwind%20CSS-06B6D4)](https://tailwindcss.com)
[![backend](https://img.shields.io/badge/backend-Medusa%20v2-7C3AED)](https://medusajs.com)
[![database](https://img.shields.io/badge/database-PostgreSQL%2016-336791)](https://www.postgresql.org)
[![cache](https://img.shields.io/badge/cache-Redis%207-DC382D)](https://redis.io)
[![billing](https://img.shields.io/badge/billing-Chargebee-FF6C37)](https://www.chargebee.com)
[![payments](https://img.shields.io/badge/payments-NMI%2C%20Checkout.com-2ea44f)](#-why-custom)
[![checkout](https://img.shields.io/badge/checkout-native%2C%20ClickBank-2ea44f)](#-feature-overview)
[![pkg manager](https://img.shields.io/badge/pkg%20manager-pnpm-F69220)](https://pnpm.io)
[![GitHub release](https://img.shields.io/github/v/release/chappy-APEX-Medusa-Templates/chappy)](#)
[![GitHub last commit](https://img.shields.io/github/last-commit/chappy-APEX-Medusa-Templates/chappy)](#)
[![license](https://img.shields.io/badge/license-private-lightgrey)](#-notes)

⭐ Star us on GitHub — your support keeps the build moving!

[![Share on X](https://img.shields.io/badge/share-000000?logo=x&logoColor=white)](https://x.com/intent/tweet?text=Custom%20DTC%20ecommerce%20platform%20%E2%80%94%20own%20servers%2C%20own%20payment%20stack%2C%20no%20holds%3A%20https%3A%2F%2Fgithub.com%2Fchappy-APEX-Medusa-Templates%2Fchappy%20%23ecommerce%20%23DTC%20%23NextJS)
[![Share on Facebook](https://img.shields.io/badge/share-1877F2?logo=facebook&logoColor=white)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/chappy-APEX-Medusa-Templates/chappy)
[![Share on LinkedIn](https://img.shields.io/badge/share-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/chappy-APEX-Medusa-Templates/chappy)
[![Share on Reddit](https://img.shields.io/badge/share-FF4500?logo=reddit&logoColor=white)](https://www.reddit.com/submit?title=Custom%20DTC%20ecommerce%20platform%20with%20own%20payment%20stack&url=https://github.com/chappy-APEX-Medusa-Templates/chappy)
[![Share on Telegram](https://img.shields.io/badge/share-0088CC?logo=telegram&logoColor=white)](https://t.me/share/url?url=https://github.com/chappy-APEX-Medusa-Templates/chappy&text=Custom%20DTC%20ecommerce%20platform%20%E2%80%94%20own%20servers%2C%20own%20payment%20stack%2C%20no%20holds)

**High-volume direct-to-consumer ecommerce platform built for full ownership — own servers, own payment stack, no third-party platform holds.**

---

## Table of Contents

- [Why Custom](#-why-custom)
- [Feature Overview](#-feature-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Frontend Commands](#-frontend-commands)
- [Route Map](#-route-map)
- [Advertorial Pages](#-advertorial-pages)
- [Documentation](#-documentation)
- [Notes](#-notes)

---

## 🚫 Why Custom

Shopify and hosted platforms hold funds, throttle integrations, and gate processor choices. This stack gives the brand complete control:

- **Own servers** — no platform terms that freeze payouts
- **Own payment stack** — direct processor relationships (NMI, Checkout.com) with automatic failover
- **Own checkout flows** — native Medusa checkout and ClickBank integration
- **Own subscription engine** — Chargebee-backed billing with custom dunning and retries

---

## 📦 Feature Overview

| Category | What's included |
|----------|----------------|
| **Checkout** | Native Medusa checkout, ClickBank checkout, bundle builder |
| **Subscriptions** | Chargebee billing, dunning, retries, customer self-serve portal |
| **Payment routing** | Multi-processor routing (NMI primary, Checkout.com backup), health-based failover scaffolding |
| **Disputes** | Chargeflow alert ingestion, Medusa order sync, processor refund orchestration |
| **Acquisition** | Quiz funnel, one-time offer upsell (OTO), advertorial / VSL landing pages |
| **Storefront** | Product pages, best-sellers collection, account management |

---

## 🛠 Tech Stack

**Frontend**
- [Next.js 15](https://nextjs.org) — App Router, SSR/SSG
- TypeScript, Tailwind CSS
- Radix UI (accessible primitives), Framer Motion (animations), Lucide React (icons)

**Backend**
- [Medusa.js v2](https://medusajs.com) — headless commerce engine
- PostgreSQL 16 — primary datastore
- Redis 7 — caching and background job queues

**Integrations**
- [Chargebee](https://chargebee.com) — subscription contracts, invoices, dunning
- NMI — primary payment processor
- Checkout.com — backup payment processor
- [Chargeflow](https://chargeflow.io) — dispute automation

---

## 📁 Project Structure

```
.
├── frontend/                     # Next.js 15 App Router storefront
│   ├── app/
│   │   ├── (main)/               # Core storefront
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── products/         # Product detail pages
│   │   │   ├── collections/      # Collection pages (best sellers)
│   │   │   ├── account/          # Customer account + subscription portal
│   │   │   └── s/a/<slug>/       # Advertorial / VSL landing pages
│   │   ├── checkout/             # Native Medusa checkout + thank-you
│   │   ├── clickbank-checkout/   # ClickBank checkout flow
│   │   ├── build-bundle/         # Bundle / upsell builder
│   │   ├── quiz/                 # Quiz acquisition funnel
│   │   └── oto/                  # One-time offer upsell
│   └── src/
│       ├── sections/             # Page section components
│       ├── components/           # Shared UI components
│       ├── hooks/                # React hooks
│       ├── lib/                  # API clients (Medusa, subscriptions)
│       └── config/               # Nav links and site config
│
├── backend/                      # Medusa.js v2 backend
│   ├── src/
│   │   └── modules/
│   │       ├── subscription-commerce/   # Chargebee billing integration
│   │       ├── payment-routing/         # Multi-processor routing layer
│   │       └── dispute-service/         # Chargeflow + refund orchestration
│   └── env.example               # All required environment variables
│
├── docs/
│   ├── dispute-service/          # Architecture, setup, Medusa config
│   ├── subscription-commerce/    # Module design, Chargebee integration
│   └── payment-router/           # Processor config reference
│
└── docker-compose.yml            # Local PostgreSQL + Redis
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** 9+ — `npm install -g pnpm`
- **Docker** — for local Postgres and Redis

### 1. Start infrastructure

```bash
docker compose up -d
```

Starts PostgreSQL on `5432` and Redis on `6379`.

### 2. Configure the backend

```bash
cp backend/env.example backend/.env
```

Required variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `JWT_SECRET` | Long random string |
| `COOKIE_SECRET` | Long random string |
| `CHARGEBEE_SITE` | Chargebee site name |
| `CHARGEBEE_API_KEY` | Chargebee API key |
| `CHARGEBEE_WEBHOOK_USERNAME` | Webhook basic-auth username |
| `CHARGEBEE_WEBHOOK_PASSWORD` | Webhook basic-auth password |
| `NMI_SECURITY_KEY` | NMI security key |
| `CHECKOUT_COM_SECRET_KEY` | Checkout.com secret key |

See [`backend/env.example`](backend/env.example) for the full list.

### 3. Start the backend

```bash
cd backend
pnpm install
pnpm db:migrate
pnpm dev           # http://localhost:9000
```

### 4. Start the frontend

```bash
cd frontend
pnpm install
pnpm dev           # http://localhost:3000
```

---

## ⚡ Frontend Commands

From the `frontend/` directory:

```bash
pnpm dev      # Development server with HMR
pnpm build    # Production build (also serves as validation — no test runner)
pnpm start    # Serve the production build
```

---

## 🗺 Route Map

| Route | Description |
|-------|-------------|
| `/` | Main storefront |
| `/products/gruns-superfood-gummies` | Product detail |
| `/collections/best-sellers` | Best sellers |
| `/checkout` | Native checkout |
| `/checkout/thank-you` | Post-purchase confirmation |
| `/clickbank-checkout` | ClickBank checkout |
| `/build-bundle` | Bundle builder |
| `/quiz` | Quiz funnel |
| `/oto` | One-time offer upsell |
| `/account/subscriptions` | Subscription self-serve portal |
| `/s/a/<slug>` | Advertorial / VSL pages |

---

## 📝 Advertorial Pages

Each route under `/s/a/<slug>` is content-driven — no code changes needed for copy or media updates:

```
app/(main)/s/a/<slug>/
  page.tsx       # Renders TopBar with content props
  copy.json      # All text: headings, CTAs, comments, footer
  media.json     # All media: image/video URLs, icon URLs
```

---

## 📚 Documentation

- [Dispute Service](docs/dispute-service/README.md) — Chargeflow ingestion, refund orchestration, Medusa integration
- [Subscription Commerce](docs/subscription-commerce/architecture.md) — Chargebee module design and billing lifecycle
- [Payment Router](docs/payment-router/medusa-config.example.md) — Processor configuration reference

---

## ⚠️ Notes

**Payment routing:** The multi-processor routing layer (NMI, Checkout.com) is architectural scaffolding. Gateway charge calls are stubbed and return `success: false` — real processor credentials and charge implementations are required before going live. See `backend/src/modules/payment-routing/` and `docs/payment-router/`.

[↑ Back to top](#top)
