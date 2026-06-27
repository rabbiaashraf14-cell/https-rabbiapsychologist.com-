# Rabbia Ashraf & Associates

## Project Overview
Rabbia Ashraf & Associates is a global parent guidance and child development support platform built with Astro, Tailwind CSS, TypeScript, and Firebase Hosting.

## Tech Stack
* Astro
* TypeScript
* Tailwind CSS (v4)
* Firebase Hosting

## Install Steps
```sh
npm install
```

## Local Dev Command
```sh
npm run dev
```

## Build Command
```sh
npm run build
```

## Firebase Deployment Steps
### Preview
```sh
npm run firebase:preview
```

### Production Deploy
```sh
npm run firebase:deploy
```

## Folder Structure
* `public/`: Static assets (images, icons, robots.txt, sitemap.xml)
* `src/components/`: Reusable UI components
* `src/layouts/`: Base layouts for pages
* `src/pages/`: Astro pages
* `src/data/`: Data files (providers, pricing, services, regions)
* `src/styles/`: Global CSS and Tailwind tokens

## Editing Content
* **Providers:** `src/data/providers.ts`
* **Pricing:** `src/data/pricing.ts`
* **Services:** `src/data/services.ts`
* **Regions:** `src/data/regions.ts`
* **Booking Link:** Update in `src/data/site.ts`

## Legal Disclaimer Note
The site uses international service disclaimers. Always maintain safe boundaries around clinical diagnoses. Services should be framed globally as parent consultation, psychoeducation, and educational guidance unless explicitly verified by legal credentials.

## Firebase Configuration
A placeholder `.firebaserc` file is included in this repository. Before deploying to Firebase, update the `default` project ID in `.firebaserc` to match your actual Firebase project ID.
