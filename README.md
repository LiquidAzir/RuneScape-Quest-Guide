# OSRS Quest Guide

An interactive step-by-step Old School RuneScape quest guide designed to be opened
side-by-side with OSRS Mobile (or any other client). Pick a quest, follow the
checklist, and tap each step as you go — your progress is saved locally in your
browser.

## Features

- Alphabetical list of all ~170 OSRS quests with members/F2P + difficulty filters
- Step-by-step walkthroughs with checkable steps, item lists, recommended gear,
  enemies, and rewards
- Progress saved per-device in `localStorage` (no account needed)
- Mobile-first dark UI optimized for split-screen use
- Built as a static site with Next.js — fast on any device, deployable to Vercel
  for free

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Building & deploying

```bash
npm run build
npm run start
```

The site is statically generated — every quest page is pre-rendered at build
time using `generateStaticParams`, so it deploys cleanly to Vercel, Netlify,
Cloudflare Pages, or any static host.

## Adding a new walkthrough

1. Create `lib/quests/walkthroughs/<slug>.ts` exporting a `QuestWalkthrough`.
2. Register it in `lib/quests/walkthroughs/index.ts`.

The list page automatically shows a `Guide` badge for any quest with a
walkthrough registered. Quests without one fall back to a "Walkthrough coming
soon" page that links out to the OSRS Wiki entry.

## Data sources

Quest names, members status and difficulty come from the
[OSRS Wiki quest list](https://oldschool.runescape.wiki/w/Quests/List).
Walkthrough text is original content written specifically for this app.

Not affiliated with Jagex.
