import type { Metadata } from "next";
import DihuavaClient from "./DihuavaClient";

export const metadata: Metadata = {
  title: "DIHUAVA | AI Digital Human Platform | HS Global AI",
  description:
    "DIHUAVA is an interactive AI Digital Human platform featuring Low Latency, on-device data privacy, multilingual speech, and offline document intelligence.",
  alternates: {
    canonical: "/products/dihuava",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.hsglobalai.com/products/dihuava#software",
  "name": "DIHUAVA",
  "alternateName": "DIHUAVA AI Digital Human Platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Cross-platform (On-Device Edge GPU Hardware)",
  "url": "https://www.hsglobalai.com/products/dihuava",
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
      "item": "https://www.hsglobalai.com/products/dihuava",
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
