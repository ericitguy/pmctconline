# PMCTC Website

Official website for **Passion for Mother and Child Training Centre (PMCTC)** — a Ghanaian nonprofit equipping single mothers with vocational training, emotional support and childcare so mothers and children can thrive. Founded 17 February 2014 by Mrs. Alberta Eku-Sika Addo. Klagon, behind Breaking Yoke Ministry, Ghana.

Live: **https://www.pmctconline.com** · Production source: this repository.

## Stack

- **Next.js 16** (App Router, static prerendering — no server needed beyond forms)
- **React 19**, **TypeScript**, **Tailwind CSS 3**
- Server Actions for enquiry forms (volunteer / partnership / contact)
- Next Image optimization (AVIF/WebP) over 66 curated photographs in `public/photos/`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3100
npm run build      # production build (all routes prerendered)
npm start          # serve the production build
```

Node.js 20+ recommended (tested on Node 20).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Editorial homepage: hero, mission/vision, programmes, pillars, timeline, people, partners, giving |
| `/about` | Story, founding, four-pillar approach |
| `/programmes` · `/programmes/[slug]` | Programme index + details (catering, fashion, hairdressing, cosmetology, emotional support, childcare) |
| `/impact` | Verified department records, consent-first storytelling |
| `/stories` | Story framework pending consented participant stories |
| `/team` | Advisory board + staff |
| `/gallery` | 66-photo masonry gallery |
| `/donate` | Giving options — online payment disabled until provider is configured |
| `/get-involved` | Volunteer & partnership forms |
| `/contact` | Contact details + enquiry form |
| `/privacy` · `/terms` | Legal pages (drafts pending PMCTC review) |
| `/sitemap.xml` · `/robots.txt` | SEO infrastructure |
| 404 | Branded not-found page |

## Content integrity

All organisation facts (founding date, vision, mission, departments, staff, partners, contact details) come from PMCTC's official overview. Verified impact numbers only; participant stories publish only with documented consent; no invented statistics, testimonials or outcomes. Source PDF and raw photo drop are intentionally not committed (see `.gitignore`).

## Deploying to Vercel

1. Import the GitHub repository (`ericitguy/pmctconline`) at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detected). No environment variables required.
3. Deploy — every route is prerendered; forms work out of the box.

## Before launch (configurations pending)

- [ ] Verified payment provider (Paystack/Hubtel) → enable online giving on `/donate`
- [ ] Enquiry routing to staff inbox/SMS (currently logged server-side in `app/actions.ts`)
- [ ] Spam protection (rate limiting / CAPTCHA) on forms
- [ ] Verified map embed + full street address on `/contact`
- [ ] Consent-approved participant stories on `/stories`
- [ ] Legal pages reviewed by PMCTC under Ghana's Data Protection Act, 2012 (Act 843)
