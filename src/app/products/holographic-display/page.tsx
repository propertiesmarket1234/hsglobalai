import type { Metadata } from "next";
import HolographicDisplayClient from "./HolographicDisplayClient";

export const metadata: Metadata = {
  title: "AI Hologram Box & Holographic Display | HS Global AI",
  description:
    "3D Hologram Box display unit integrating DIHUAVA AI Digital Humans for life-sized, interactive 3D holographic experiences in retail, banking, and public spaces.",
  alternates: {
    canonical: "/products/holographic-display",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.hsglobalai.com/products/holographic-display#product",
  "name": "AI Hologram Box",
  "alternateName": "AI Holographic Display Showcase",
  "url": "https://www.hsglobalai.com/products/holographic-display",
  "image": "https://www.hsglobalai.com/products/digital-humans/digital-human-new.png",
  "description":
    "3D Hologram Box volumetric enclosure featuring 4K holographic glass and integrated industrial AI computing unit for life-sized interactive digital avatars.",
  "brand": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
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
      "name": "AI Hologram Box",
      "item": "https://www.hsglobalai.com/products/holographic-display",
    },
  ],
};

export default function HolographicDisplayPage() {
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
      <HolographicDisplayClient />
    </>
  );
}
