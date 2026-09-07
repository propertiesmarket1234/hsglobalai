import type { Metadata } from "next";
import DihuavaClient from "./DihuavaClient";

export const metadata: Metadata = {
  title: "AI Digital Human Software Platform | DIHUAVA | HS Global AI",
  description:
    "DIHUAVA by HS Global AI is an enterprise AI Digital Human software platform featuring 100% offline edge processing, 29+ languages, and document intelligence.",
  alternates: {
    canonical: "/products/ai-digital-human",
  },
  openGraph: {
    title: "AI Digital Human Software Platform | DIHUAVA | HS Global AI",
    description:
      "DIHUAVA by HS Global AI is an enterprise AI Digital Human software platform featuring 100% offline edge processing, 29+ languages, and document intelligence.",
    url: "https://www.hsglobalai.com/products/ai-digital-human",
    siteName: "HS Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Digital Human Software Platform | DIHUAVA | HS Global AI",
    description:
      "DIHUAVA by HS Global AI is an enterprise AI Digital Human software platform featuring 100% offline edge processing, 29+ languages, and document intelligence.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.hsglobalai.com/products/ai-digital-human#software",
  "name": "DIHUAVA",
  "alternateName": "DIHUAVA AI Digital Human Platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Cross-platform",
  "url": "https://www.hsglobalai.com/products/ai-digital-human",
  "description":
    "DIHUAVA is an interactive AI Digital Human platform featuring real-time talking avatars, on-device data privacy, multilingual speech synthesis, and offline document intelligence.",
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  "provider": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  "featureList": [
    "Interactive Real-Time Talking Avatars",
    "On-Device Document Intelligence RAG Engine",
    "Multilingual Speech Recognition & Synthesis across 29+ Global Languages",
    "CSV-Driven AI Product Catalogue & Interactive Cards",
    "Selfie With Avatar Photo Experience & QR Sharing",
    "Live Character Real-Time Camera Face Tracking",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.hsglobalai.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.hsglobalai.com/products",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "DIHUAVA",
      "item": "https://www.hsglobalai.com/products/ai-digital-human",
    },
  ],
};

export default function DihuavaProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DihuavaClient />
    </>
  );
}
