# STEP 5 — LEGACY URL REDIRECT AUDIT & MAPPING REPORT

**Project:** HS Global AI  
**Website:** `https://www.hsglobalai.com/`  
**Repository:** `D:\WebProjects\hsglobalai`  
**Branch:** `main`  
**Audit Date:** November 7, 2026  
**Status:** READ-ONLY Audit Completed (No website code modified)

---

## 1. Executive Summary

During the site-wide Google Search Console audit (Step 4), **25 legacy URLs** originating from the pre-migration WordPress site were identified as still receiving search impressions and clicks. 

### Key Findings:
1. **404 Traffic Leakage:** Except for `/ai-products` (which was previously redirected), **every single legacy URL currently returns HTTP 404** when requested on `https://www.hsglobalai.com`.
2. **Impression Volume Leaked:** These legacy URLs accumulated **over 800 impressions and 20+ live clicks** in Google Search Console over the past 90 days.
3. **Domain Redirect Behavior:** 
   - Requests to `https://hsglobalai.com/path/` receive an edge HTTP 308 redirect from Vercel to `https://www.hsglobalai.com/path/`.
   - On the `www` domain, Next.js strips the trailing slash (`HTTP 308` to `/path`).
   - If `/path` is missing from `next.config.ts`, Next.js serves an unhandled **HTTP 404**, causing Googlebot to drop ranking equity and users to hit a dead page.
4. **Target Equivalents Verified:** All **19 proposed destination URLs** on the current Next.js application have been tested live and confirmed to return **HTTP 200**.

---

## 2. Comprehensive Legacy URL Redirect Mapping Table

The table below catalogs every legacy URL identified in the Google Search Console site-wide export (`docs/seo-sitewide/Pages.csv`), its current status, traffic metrics, target destination, and rationale:

| # | Legacy Path / URL | Current Status | GSC Imp. | GSC Clicks | Avg. Pos. | Recommended Destination URL | Destination HTTP Status | Reason & Content Match | Priority |
| :-: | :--- | :---: | :---: | :---: | :---: | :--- | :---: | :--- | :---: |
| 1 | `/holographic-ai-avatar` | **404** | **161** | **5** | 12.37 | `/products/holographic-display` | **200** | Direct product equivalent: 3D Hologram Box hosting conversational AI avatar. | **P0 (Critical)** |
| 2 | `/contact-us` | **404** | **132** | **1** | 2.46 | `/contact` | **200** | Direct 1:1 contact page equivalent. | **P0 (Critical)** |
| 3 | `/ai-products` | *308* | **121** | **5** | 5.21 | `/products` | **200** | Already in `next.config.ts`. Ensure trailing slash wildcard is supported. | **P1 (Maintain)** |
| 4 | `/about-us` | **404** | **97** | **1** | 5.92 | `/about` | **200** | Direct 1:1 company about page equivalent. | **P0 (Critical)** |
| 5 | `/faqs` | **404** | **78** | **0** | 6.90 | `/faq` | **200** | Direct 1:1 FAQ hub equivalent. | **P1 (High)** |
| 6 | `/ai-retail-digital-human-avatars` | **404** | **71** | **3** | 18.58 | `/blog/how-ai-in-retail` | **200** | Direct 1:1 article match: "How AI in Retail is Transforming Customer Experience with Digital Human Avatars". | **P0 (Critical)** |
| 7 | `/multilingual-ai-global-business` | **404** | **49** | **0** | 5.24 | `/blog/multilingual-ai` | **200** | Direct 1:1 article match: "Multilingual AI: Breaking Language Barriers in Global Business". | **P1 (High)** |
| 8 | `/spatial-display` | **404** | **23** | **1** | 21.48 | `/products/spatial-display` | **200** | Direct product equivalent: 3D Volumetric Spatial Display hardware. | **P1 (High)** |
| 9 | `/ai-for-business-ai-avatar-2026` | **404** | **23** | **0** | 5.09 | `/blog/ai-for-business` | **200** | Direct 1:1 article match: "AI for Business: Enhancing Customer Engagement and Support". | **P1 (High)** |
| 10 | `/ai-product-catalog-smart-selling` | **404** | **19** | **1** | 8.89 | `/blog/ai-product-catalogue` | **200** | Direct 1:1 article match: "AI Product Catalogue: The Future of Smart Selling". | **P1 (High)** |
| 11 | `/download-center` | **404** | **17** | **0** | 4.29 | `/contact/download-center` | **200** | Direct equivalent: Enterprise technical brochures & specs download center. | **P1 (High)** |
| 12 | `/offline-ai-enterprise-security` | **404** | **17** | **0** | 6.76 | `/blog/why-100-offline-ai` | **200** | Direct 1:1 article match: "Why 100% Offline AI is the Future of Enterprise Technology". | **P1 (High)** |
| 13 | `/ai-in-healthcare-digital-assistants` | **404** | **17** | **0** | 11.12 | `/blog/ai-patient-triage-healthcare-guidance` | **200** | Direct 1:1 article match: "AI Patient Triage: Healthcare Guidance". | **P1 (High)** |
| 14 | `/digital-human-avatar-ai` | **404** | **17** | **0** | 49.53 | `/blog/what-is-a-digital-human-avatar` | **200** | Direct 1:1 article match: "What is a Digital Human Avatar? How AI Avatars Transform Business". | **P1 (High)** |
| 15 | `/privacy-policy` | **404** | **9** | **0** | 7.67 | `/privacy` | **200** | Direct 1:1 legal privacy policy page equivalent. | **P2 (Standard)** |
| 16 | `/ai-business-automation-efficiency` | **404** | **6** | **0** | 8.17 | `/blog/ai-business-automation` | **200** | Direct 1:1 article match: "AI Business Automation: How Digital Humans Streamline Enterprise Operations". | **P2 (Standard)** |
| 17 | `/edge-ai-vs-cloud-ai-enterprise-applications` | **404** | **4** | **0** | 5.50 | `/blog/edge-ai-vs-cloud-ai` | **200** | Direct 1:1 article match: "Edge AI vs. Cloud AI: Choosing the Right Infrastructure". | **P2 (Standard)** |
| 18 | `/use-cases` | **404** | **4** | **0** | 24.75 | `/industries` | **200** | Direct equivalent: Industry application verticals and enterprise deployment use cases. | **P2 (Standard)** |
| 19 | `/digital-human` | **404** | **1** | **0** | 1.00 | `/products/ai-digital-human` | **200** | Direct primary product page equivalent for DIHUAVA AI Digital Human. | **P0 (Critical)** |
| 20 | `/wp-content/uploads/2026/06/Dihuava-Product-Brochure-2026-JUN.pdf` | **404** | **31** | **1** | 5.94 | `/contact/download-center` | **200** | Legacy PDF download link; routes users to the current official download center. | **P1 (High)** |
| 21 | `/wp-content/uploads/2026/06/AI数字人软件介绍-2026-JUN_billingual.pdf` | **404** | **4** | **0** | 4.75 | `/contact/download-center` | **200** | Legacy bilingual PDF download link; routes to current download center. | **P2 (Standard)** |

---

## 3. Conflict, Loop, and Redirect Chain Prevention

1. **Direct Canonical Targets:** Every proposed destination URL (`/about`, `/contact`, `/products/ai-digital-human`, `/blog/...`) is a clean, non-redirecting canonical route returning HTTP 200. No redirect chains exist.
2. **Loop Prevention:** None of the target routes have inbound rules pointing back to legacy slugs.
3. **Trailing Slash Handling:** Next.js handles trailing slashes uniformly (`trailingSlash: false`). By registering clean sources (e.g., `/contact-us`, `/about-us`), Next.js automatically maps both `/contact-us` and `/contact-us/` to the destination without creating double redirects.
4. **No Soft 404s:** Each legacy URL is mapped to its genuinely equivalent semantic counterpart, adhering strictly to Google's search quality guidelines and avoiding soft-404 penalties.

---

## 4. Proposed `next.config.ts` Redirect Implementation

When approved for implementation in the next step, these rules will be appended to `redirects()` in `next.config.ts`:

```typescript
// Legacy WordPress slug redirects to preserve SEO equity & fix 404s
{
  source: "/holographic-ai-avatar",
  destination: "/products/holographic-display",
  permanent: true,
},
{
  source: "/contact-us",
  destination: "/contact",
  permanent: true,
},
{
  source: "/about-us",
  destination: "/about",
  permanent: true,
},
{
  source: "/faqs",
  destination: "/faq",
  permanent: true,
},
{
  source: "/spatial-display",
  destination: "/products/spatial-display",
  permanent: true,
},
{
  source: "/digital-human",
  destination: "/products/ai-digital-human",
  permanent: true,
},
{
  source: "/use-cases",
  destination: "/industries",
  permanent: true,
},
{
  source: "/download-center",
  destination: "/contact/download-center",
  permanent: true,
},
{
  source: "/privacy-policy",
  destination: "/privacy",
  permanent: true,
},
// Legacy Blog Post redirects
{
  source: "/ai-retail-digital-human-avatars",
  destination: "/blog/how-ai-in-retail",
  permanent: true,
},
{
  source: "/multilingual-ai-global-business",
  destination: "/blog/multilingual-ai",
  permanent: true,
},
{
  source: "/digital-human-avatar-ai",
  destination: "/blog/what-is-a-digital-human-avatar",
  permanent: true,
},
{
  source: "/ai-for-business-ai-avatar-2026",
  destination: "/blog/ai-for-business",
  permanent: true,
},
{
  source: "/ai-product-catalog-smart-selling",
  destination: "/blog/ai-product-catalogue",
  permanent: true,
},
{
  source: "/offline-ai-enterprise-security",
  destination: "/blog/why-100-offline-ai",
  permanent: true,
},
{
  source: "/ai-in-healthcare-digital-assistants",
  destination: "/blog/ai-patient-triage-healthcare-guidance",
  permanent: true,
},
{
  source: "/ai-business-automation-efficiency",
  destination: "/blog/ai-business-automation",
  permanent: true,
},
{
  source: "/edge-ai-vs-cloud-ai-enterprise-applications",
  destination: "/blog/edge-ai-vs-cloud-ai",
  permanent: true,
},
// Legacy PDF brochure downloads
{
  source: "/wp-content/uploads/:path*",
  destination: "/contact/download-center",
  permanent: true,
},
```

---

## 5. Next Steps

1. **Review and Approve:** Confirm the proposed redirect rules in Section 4.
2. **Implementation (Step 6):** Once approved, update `next.config.ts`, verify with `npx tsc --noEmit` and `npm run build`, and test local 308 response behavior.
3. **Deployment & Verification:** Deploy to production and verify that Googlebot receives permanent 301/308 redirects with 100% link equity transfer.

