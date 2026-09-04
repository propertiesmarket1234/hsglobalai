import type { Metadata } from "next";
import SpatialDisplayClient from "./SpatialDisplayClient";

export const metadata: Metadata = {
  title: "Spatial Display for Immersive AI Experiences | HS Global AI",
  description:
    "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
  alternates: {
    canonical: "/products/spatial-display",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.hsglobalai.com/products/spatial-display#product",
  "name": "Spatial Display",
  "alternateName": "AI Spatial Display Volumetric Screen",
  "url": "https://www.hsglobalai.com/products/spatial-display",
  "image": "https://www.hsglobalai.com/products/spatial-display/spatial-display.png",
  "description":
    "Naked-eye 3D spatial AI display featuring an ultra-slim 6cm body profile and 4K Ultra HD touch screen for immersive volumetric visual experiences.",
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
      "name": "Spatial Display",
      "item": "https://www.hsglobalai.com/products/spatial-display",
    },
  ],
};

export default function SpatialDisplayPage() {
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
      <SpatialDisplayClient />
    </>
  );
}
