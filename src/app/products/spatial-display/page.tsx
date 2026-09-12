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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SpatialDisplayClient />
    </>
  );
}
