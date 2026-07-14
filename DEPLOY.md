# Ghostatlas — Next.js 14 site

## What this is

The Claude Design HTML mockup converted into a real Next.js 14 (App Router) project:

- `app/layout.tsx` — fonts (Fraunces / Inter / JetBrains Mono via `next/font/google`), global metadata
- `app/globals.css` — Jade Dynasty palette (`#EAF5F1` / `#2F7F6D` / `#0F3F35`) as CSS variables + all component styles
- `components/` — Nav, Hero, RoutingConsole (animated, client-side), Products, HowItWorks, Pricing (tabbed, client-side), CtaBand, Footer
- `data/pricing.ts` — all pricing numbers, editable in one place
- `data/site.ts` — dashboard, registration, ordering, and legacy app URL helpers

Dashboard CTAs point to `https://dashboard.ghostatlasip.com`; registration and ordering CTAs use the dashboard's `/register` and `/order` routes. The footer's legal and API Docs links remain on `https://app.ghostatlasip.com` pending confirmed destinations.

## Pricing — what changed and the assumption I made

You gave flat package prices (Rotating Residential: $8/1GB, $25/5GB, $40/10GB; Static Datacenter: $12/5IPs, $20/10IPs, $35/20IPs), but chose "per-unit recurring rate" when I asked how to read them. So `data/pricing.ts` uses the per-unit rate implied by each package (price ÷ quantity), with that quantity as the tier's minimum:

- **Rotating Residential** — Starter $8.00/GB (1+ GB), Scale $5.00/GB (5+ GB), Volume $4.00/GB (10+ GB)
- **Static Datacenter** — Starter $2.40/IP/mo (5+ IPs), Scale $2.00/IP/mo (10+ IPs), Volume $1.75/IP/mo (20+ IPs)

Static Residential ISP keeps the original design's placeholder pricing. Static Mobile's displayed Scale rate is $14.00/IP/mo.

If any of that math isn't what you intended, it's all in `data/pricing.ts` — one array, easy to hand-edit.

## Run it locally

```
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to Vercel

1. Push this project to a GitHub repo (or run `vercel` from inside the project directory to deploy directly from your machine via the Vercel CLI).
2. In the Vercel dashboard: **Add New → Project**, import the repo. Framework preset auto-detects as Next.js — no config needed.
3. Deploy. No environment variables are required (the app URL is a hardcoded constant, not a secret).

## Point ghostatlasip.com at it

1. In the Vercel project → **Settings → Domains**, add `ghostatlasip.com` (and `www.ghostatlasip.com` if you want that too).
2. Vercel will show you the exact DNS records to add at your domain registrar — typically an `A` record for the apex domain and a `CNAME` for `www`. Use whatever Vercel displays on that screen (values can change), not a hardcoded IP.
3. Wait for DNS propagation, then Vercel auto-issues the SSL certificate.

## Known open item: WHMCS on app.ghostatlasip.com

Not touched here — you're waiting on Asura support to respond about the license key (`WHMCS-bfb3f0eedd6f7452b907`, server `198.251.89.229`). Once you hear back, share the response and I can help interpret next steps.
