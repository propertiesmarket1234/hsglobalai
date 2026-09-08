import type { Metadata } from "next";
import HolographicDisplayClient from "./HolographicDisplayClient";

export const metadata: Metadata = {
  title: "3D Hologram Display Box & AI Hologram | HS Global AI",
  description:
    "Explore HS Global AI's 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, with 4K Ultra-HD optical glass, AI computing, sensors, and DIHUAVA integration.",
  alternates: {
    canonical: "/products/holographic-display",
  },
  openGraph: {
    title: "3D Hologram Display Box & AI Hologram | HS Global AI",
    description:
      "Explore HS Global AI's 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, with 4K Ultra-HD optical glass, AI computing, sensors, and DIHUAVA integration.",
    url: "https://www.hsglobalai.com/products/holographic-display",
    images: [
      {
        url: "https://www.hsglobalai.com/products/digital-humans/digital-human-new.png",
        width: 1200,
        height: 630,
        alt: "3D Hologram Display Box with DIHUAVA AI Digital Human",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Hologram Display Box & AI Hologram | HS Global AI",
    description:
      "Explore HS Global AI's 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, with 4K Ultra-HD optical glass, AI computing, sensors, and DIHUAVA integration.",
    images: ["https://www.hsglobalai.com/products/digital-humans/digital-human-new.png"],
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
    "3D Hologram Box volumetric enclosure available in 55\", 65\", 75\", and 86\" sizes, featuring 4K holographic glass and integrated industrial AI computing unit for life-sized interactive digital avatars.",
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
