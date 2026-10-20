# Taza Article 🌿
> **"Fresh articles, every week"**

A fast, modern, and SEO-optimized static blog engineered for zero database bloat, 100/100 Lighthouse performance, and built-in monetization readiness.

- **Niche:** Curated free developer tools, zero-cost cloud databases, student pack hacks, and project blueprints for CS & B.Tech engineering students in India.
- **Hosting:** 100% free to host forever on **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.
- **Tech Stack:** [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) + Markdown / MDX + RSS / Sitemap.

---

## 🌟 Key Features

### 1. High Performance & SEO First
- **Zero JavaScript by default:** Lightning-fast static HTML generation.
- **Near-Instant Load Times:** Designed for 95+ score on Google PageSpeed / Lighthouse.
- **Auto-Generated Sitemap & Robots.txt:** Automatic `/sitemap-index.xml` and `/robots.txt`.
- **JSON-LD Schema Markup:** Integrated `BlogPosting` / `Article`, `BreadcrumbList`, and `WebSite` search action schemas.
- **Open Graph & Twitter Cards:** Dynamic social preview images and metadata on every page.
- **Clean URLs:** Canonical category routes (e.g., `/[category]/[slug]`).

### 2. Design & Aesthetics
- **Light & Dark Mode:** Smooth client-side toggle with local storage persistence and system preference sync.
- **Emerald / Teal Palette:** Fresh modern color scheme inspired by "Taza" (Fresh).
- **Responsive & Mobile-First:** Designed for seamless reading on smartphones, tablets, and laptops.
- **Clean Typography:** Powered by `@tailwindcss/typography` with styled code blocks via Shiki syntax highlighting.

### 3. Monetization Ready (AdSense & Affiliates)
- **Reserved Ad Slots:** Pre-configured containers with fixed aspect ratios to eliminate Cumulative Layout Shift (CLS):
  - Below-title ad (`<AdBanner slotType="below-title" />`)
  - Mid-article ad (`<AdBanner slotType="in-article" />`)
  - Sticky sidebar ad (`<AdBanner slotType="sidebar" />`)
  - Footer banner ad (`<AdBanner slotType="footer" />`)
- **`<AffiliateBox>` Component:** Reusable review box with rating badges, pros/cons lists, verified price notes, and compliant `rel="nofollow sponsored"` CTA buttons.
- **`<ComparisonTable>` Component:** Responsive, side-by-side comparison matrix for "Best X" articles.
- **Legal & Compliance Pages:** AdSense-compliant `/privacy`, `/terms`, `/contact`, and `/affiliate-disclosure` pages.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js:** v20.0.0 or higher
- **npm:** v9.0.0 or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
Following project conventions, launch the server in background mode:
```bash
astro dev --background
```
Or standard interactive mode:
```bash
npm run dev
```

Your local site will be running at:
👉 **`http://localhost:4321`**

To manage the background server:
```bash
npx astro dev status  # Check server status
npx astro dev logs    # View live dev logs
npx astro dev stop    # Stop background server
```

### 4. Build for Production
To verify and compile static production files in the `/dist` directory:
```bash
npm run build
```

---

## ✍️ How to Add a New Article

Adding an article is as simple as creating a new `.md` or `.mdx` file in `src/content/blog/`.

### Step 1: Copy the Template
We included a ready-to-use template:
```bash
cp src/content/blog/_template.md src/content/blog/my-new-article.mdx
```

### Step 2: Fill in the Frontmatter
```yaml
---
title: "Top Free Alternatives to AWS for College Projects"
description: "A comprehensive guide comparing Supabase, Render, and Neon for final year student budgets."
pubDate: 2026-10-20
category: "Cloud & Databases" # Choose: Developer Tools, Cloud & Databases, Student Perks & Packs, Learning & DSA, Project Blueprints
tags: ["Cloud", "Supabase", "Free Hosting", "B.Tech"]
heroImage: "/images/sample-hero.svg"
featured: false # Set to true to highlight on the homepage hero grid
author: "Taza Editorial Team"
affiliateDisclosure: true # Adds the compliant disclosure notice
---
```

### Step 3: Embed Interactive Components in MDX
You can use the built-in monetization components directly inside any `.mdx` post:

```mdx
import AffiliateBox from '../../components/AffiliateBox.astro';
import ComparisonTable from '../../components/ComparisonTable.astro';

## Tool Recommendation

<AffiliateBox
  title="Supabase"
  badge="Editor's Choice"
  rating="4.9 / 5"
  priceNote="Free Tier Available (₹0)"
  description="Open-source Firebase alternative with PostgreSQL, Auth, and Storage."
  pros={[
    "Generous free tier with 2 active databases",
    "Built-in authentication and auto-generated REST APIs"
  ]}
  cons={[
    "Inactivity pause after 1 week on free tier (easy 1-click restore)"
  ]}
  affiliateUrl="https://supabase.com"
  buttonText="Claim Free Project →"
/>
```

---

## ⚙️ Configuration & Customization

All site-wide settings are centralized in **[`src/config/site.ts`](src/config/site.ts)**:

```typescript
export const siteConfig = {
  name: 'Taza Article',
  tagline: 'Fresh articles, every week',
  siteUrl: 'https://tazaarticle.com', // Replace with your production domain
  
  // Google Analytics & Google Search Console
  googleAnalyticsId: 'G-XXXXXXXXXX', // Set your GA4 measurement ID
  googleSiteVerification: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',

  // Google AdSense
  adsenseClientId: 'ca-pub-XXXXXXXXXXXXXXXX', // Your Google AdSense Publisher ID
  adsEnabled: true, // Toggle ad containers on/off
  
  contactEmail: 'contact@tazaarticle.com',
  // ...
};
```

### Switching Niche
If you want to repurpose this blog for a different niche (e.g. personal finance, remote jobs, design tools):
1. Update `siteConfig.niche`, `siteConfig.name`, and `siteConfig.description` in [`src/config/site.ts`](src/config/site.ts).
2. Modify the category definitions in `siteConfig.categories`.
3. Add your new markdown articles in `src/content/blog/`.

---

## 💰 Monetization Guide (AdSense & Affiliates)

### Setting Up Google AdSense
1. Obtain your Publisher ID (`ca-pub-XXXXXXXXXXXXX`) from Google AdSense.
2. Put your ID into `adsenseClientId` in [`src/config/site.ts`](src/config/site.ts).
3. To display live ads, open [`src/components/AdBanner.astro`](src/components/AdBanner.astro) and uncomment the `<ins class="adsbygoogle" ...>` snippet.
4. The reserved ad containers will automatically maintain height to ensure **zero CLS (Cumulative Layout Shift)** and maximum viewability scores.

### Adding Affiliate Links
- When recommending tools or student software, always use `rel="noopener noreferrer sponsored nofollow"` (the `<AffiliateBox>` component automatically enforces this).
- Disclosures are automatically displayed on any post where `affiliateDisclosure: true` is set in the frontmatter.

---

## 🌐 Free 1-Click Deployment Guide

This site is statically generated and has **zero server dependencies** and **no database requirements**. It is 100% free to host forever.

### Option 1: Deploy to Vercel (Recommended)
Set the Vercel project **Root Directory** to `Taza Article` so it can find
the Astro package and configuration files. The build command is `npm run build`
and the output directory is `dist`.

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Taza Article blog"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/taza-article.git
   git push -u origin main
   ```
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `taza-article` repository.
4. Vercel will automatically detect **Astro**.
5. Click **"Deploy"**. Your site will be live on a fast global edge network in under 1 minute.

### Option 2: Deploy to Netlify
Set the Netlify **Base directory** to `Taza Article`.

1. Log in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"** → Select **GitHub**.
3. Set Build Command: `npm run build`
4. Set Publish Directory: `dist`
5. Click **"Deploy Site"**.

### Option 3: Deploy to GitHub Pages
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 📁 Project Architecture

```
Taza Article/
├── public/
│   ├── favicon.svg             # Branded leaf/T icon
│   └── images/
│       └── og-default.svg      # Social preview image (Open Graph / Twitter)
├── src/
│   ├── components/
│   │   ├── AdBanner.astro           # Reserved AdSense ad slots (zero CLS)
│   │   ├── AffiliateBox.astro       # Product recommendation with pros/cons
│   │   ├── AffiliateDisclosure.astro# Compliant disclosure disclaimer
│   │   ├── ArticleCard.astro        # Modern feed article card
│   │   ├── ComparisonTable.astro    # Best X comparison table
│   │   ├── Footer.astro             # Complete footer with AdSense legal links
│   │   ├── Header.astro             # Header with logo, nav & theme switcher
│   │   ├── NewsletterBox.astro      # "Fresh articles every week" lead box
│   │   ├── SEO.astro                # Meta, OpenGraph, JSON-LD Schema & GA4
│   │   ├── ShareButtons.astro       # WhatsApp, X, LinkedIn, Copy Link
│   │   ├── TableOfContents.astro    # Auto-generated sticky TOC
│   │   └── ThemeToggle.astro        # Light / Dark mode switcher
│   ├── config/
│   │   └── site.ts                  # Centralized site metadata & settings
│   ├── content/
│   │   └── blog/
│   │       ├── _template.md         # Template to copy for new articles
│   │       ├── top-10-free-developer-tools-cs-students-india.mdx
│   │       ├── best-free-cloud-databases-hosting-college-projects.mdx
│   │       └── how-to-get-github-student-pack-india.mdx
│   ├── layouts/
│   │   └── BaseLayout.astro         # Base HTML with theme script & header/footer
│   ├── pages/
│   │   ├── [category]/
│   │   │   └── [slug].astro         # Clean URL article pages
│   │   ├── category/
│   │   │   └── [category].astro     # Category archive pages
│   │   ├── about.astro              # Brand story & mission
│   │   ├── affiliate-disclosure.astro # Dedicated disclosure page
│   │   ├── categories.astro         # Topic directory
│   │   ├── contact.astro            # Contact form & direct email
│   │   ├── index.astro              # Homepage
│   │   ├── privacy.astro            # AdSense & GDPR Privacy Policy
│   │   ├── robots.txt.ts            # Dynamic robots.txt
│   │   ├── search.astro             # Instant client-side search
│   │   └── terms.astro              # Terms & conditions
│   ├── styles/
│   │   └── global.css               # Tailwind CSS v4 & custom variables
│   ├── utils/
│   │   ├── readingTime.ts           # Reading time calculator
│   │   └── slugify.ts               # Clean URL slugifier
│   └── content.config.ts            # Astro Content Collection schema
├── astro.config.mjs                 # Astro configuration with MDX & Sitemap
└── package.json
```

---

## 📄 License
This project is open-source and free to use under the [MIT License](LICENSE).
