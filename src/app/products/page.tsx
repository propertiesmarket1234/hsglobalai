import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "AI Digital Humans, Hologram & Spatial Display Products",
  description:
    "Explore HS Global AI products: DIHUAVA AI Digital Human platform, 3D Hologram Box displays, and naked-eye spatial AI displays for enterprise deployment.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "AI Digital Humans, Hologram & Spatial Display Products | HS Global AI",
    description:
      "Explore HS Global AI products: DIHUAVA AI Digital Human platform, 3D Hologram Box displays, and naked-eye spatial AI displays for enterprise deployment.",
    url: "https://www.hsglobalai.com/products",
    siteName: "HS Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Digital Humans, Hologram & Spatial Display Products | HS Global AI",
    description:
      "Explore HS Global AI products: DIHUAVA AI Digital Human platform, 3D Hologram Box displays, and naked-eye spatial AI displays for enterprise deployment.",
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
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "HS Global AI Product Portfolio",
  "description": "Enterprise AI Digital Humans, 3D Hologram Box displays, and naked-eye spatial AI displays.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "DIHUAVA AI Digital Human Platform",
      "url": "https://www.hsglobalai.com/products/dihuava",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "3D AI Holographic Display",
      "url": "https://www.hsglobalai.com/products/holographic-display",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Glasses-Free 3D Spatial Display",
      "url": "https://www.hsglobalai.com/products/spatial-display",
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Virtual Try-On — Active R&D",
      "url": "https://www.hsglobalai.com/blog/what-is-virtual-try-on-technology",
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ProductsClient />
    </>
  );
}