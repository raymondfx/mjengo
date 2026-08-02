# Mjengo — Anirudh Builders Ltd

A Next.js landing page for **Anirudh Builders Ltd**, an NCA2-registered building works contractor based in Nairobi, Kenya. Content and project photos are sourced from the company's project portfolio.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `app/page.tsx` — assembles the page sections
- `app/components/` — `Header`, `Hero`, `About`, `Services`, `Projects`, `Contact`, `Footer`
- `app/lib/content.ts` — company info, services and project data
- `public/images/` — project photography

## Build

```bash
pnpm build
```
