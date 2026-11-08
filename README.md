# WARSIA EDUCATIONAL & SOCIAL DEVELOPMENT TRUST
### Official Humanitarian & Social Welfare Digital Platform

> **"Service to Humanity – The Mark of True Faith"**

A modern, high-performance, responsive, and SEO-optimized static website built for **Warsia Educational & Social Development Trust**, located in Vijayapura (Bijapur), Karnataka, India.

---

## 1. Official Organization Information

* **Organization Name:** WARSIA EDUCATIONAL & SOCIAL DEVELOPMENT TRUST
* **President:** Mohammed Shafi H Mahabari
* **NGO Darphan ID:** `KA/2026/0996453`
* **Registered Address:** Near PDJ High School, Darbar Galli, Vijayapura – 586101, Karnataka, India
* **Contact Numbers:**
  * `+91 9449779786` (Primary)
  * `+91 9620304427`
  * `+91 9606406210`
* **Official Motto / Slogan:** "Service to Humanity – The Mark of True Faith"

---

## 2. Core Pillars & Humanitarian Focus

1. **Masjid Imam Monthly Support:** Providing regular, dignified monthly financial assistance to Masjid Imams in Vijayapura in honor of their moral and community leadership.
2. **Temple Pandit Monthly Support:** Providing equal, regular, dignified monthly financial assistance to Temple Pandits in recognition of their spiritual dedication and cultural guardianship.
3. **Blood Donation & Emergency Assistance:** Cultivating a voluntary donor network and assisting patient families with life-saving blood coordination in Vijayapura hospitals.
4. **Educational Development:** Encouraging school retention, basic study assistance, mentorship, and girls' education awareness.
5. **Social Welfare & Relief:** Extending festive food kits, hunger relief, elder care, and emergency aid to vulnerable families.

---

## 3. Official Brand Identity & Design System

The visual design is strictly built from the client's official brand emblem:

* **Primary Navy Blue:** `#002887` (`primary.main`) — Primary buttons, navigation highlights, dominant headers
* **Deep Navy Blue:** `#001B5C` (`primary.dark`) — Hero backgrounds and footer base
* **Saffron Orange:** `#F27501` (`warning.main`) — Warm accents, secondary badges, decorative stripes
* **Trust Green:** `#006000` (`secondary.main`) — Humanitarian aid, community service, WhatsApp CTAs
* **Emergency Blood Red:** `#C62828` (`error.main`) — Blood donation helpline and accents
* **Background Surfaces:** `#FFFFFF` (default) & `#F7F8FC` (cards and paper)
* **Text Hierarchy:** Dark Text `#172033` (`text.primary`) & Muted Text `#667085` (`text.secondary`)

### Logo Usage
* **Header & Favicon:** `/logo/warsia-logo.png` (Emblem without slogan)
* **Footer & About Page:** `/logo/warsia-logo-with-slogan.png` (Emblem with official slogan)
* **Image Scaling:** Strictly preserved aspect ratio (`object-fit: contain`) with high contrast.

---

## 4. Technology Stack & Architecture

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript 5.9 (Strict mode, zero `any`)
* **UI Component Library:** Material UI (MUI v6) with `@mui/material-nextjs` AppRouterCacheProvider
* **Styling Engine:** Emotion (`@emotion/react`, `@emotion/styled`) + Tailwind CSS v4
* **Animations:** Framer Motion (viewport-based subtle reveals with `prefers-reduced-motion` compliance)
* **Form & Validation:** React Hook Form + Zod validation with direct WhatsApp handoff
* **Static Export:** Configured with `output: 'export'` for 100% serverless, zero-backend static deployment

---

## 5. Website Route Map

* `/` — Homepage (Hero, About, 5 Initiatives, Community Support, Blood Donation, Education, Impact, Gallery preview, Volunteer, Final CTA)
* `/about` — About Us (Trust History, Full Official Logo, President Mohammed Shafi H Mahabari, Darphan ID, Values)
* `/initiatives` — Initiatives Overview
* `/initiatives/masjid-imam-support` — Masjid Imam Monthly Support (Balanced parity)
* `/initiatives/temple-pandit-support` — Temple Pandit Monthly Support (Balanced parity)
* `/initiatives/blood-donation` — Voluntary Blood Donor Network & Emergency Helpline
* `/initiatives/education` — Educational Development & Mentorship
* `/initiatives/social-development` — Social Welfare & Food Kit Relief
* `/gallery` — Photographic Archive (Diwali, Eid, Ugadi, Food Kit distribution, Darphan certificate)
* `/volunteer` — Volunteer Registration & WhatsApp Handoff
* `/contact` — Office Location, Click-to-Call numbers, WhatsApp Desk, Google Maps
* `/privacy-policy` — Transparency, data security, and privacy policy
* `/terms-and-conditions` — Non-profit terms and governance
* `/sitemap.xml` & `/robots.txt` — Search engine discovery and indexing

---

## 6. Getting Started & Development

### Prerequisites
* Node.js v20+ or v22+
* npm or pnpm

### Installation
```bash
# Navigate to the project directory
cd warsia_trust

# Install dependencies
npm install --legacy-peer-deps
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Typecheck & Lint
```bash
npm run lint
npx tsc --noEmit
```

### Building for Production (Static Export)
```bash
npm run build
```
This generates the standalone static distribution in the `out/` folder ready to be deployed to any web hosting platform or CDN.

---

## 7. Deployment Options

Because the project outputs pure static assets (`out/` directory), it can be deployed with zero backend maintenance:

* **Vercel:** Connect the repository, set root directory to `warsia_trust`, build command `npm run build`, output directory `out`.
* **Netlify:** Build command `npm run build`, publish directory `out`.
* **GitHub Pages:** Deploy the contents of the `out` directory to `gh-pages` branch.
* **Cloudflare Pages / AWS S3 + CloudFront:** Upload the contents of `out/`.

---

© 2026 WARSIA EDUCATIONAL & SOCIAL DEVELOPMENT TRUST. All rights reserved.  
Darphan ID: `KA/2026/0996453` | Vijayapura, Karnataka.
