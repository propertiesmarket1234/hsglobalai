import type { Metadata } from "next";
import SpatialDisplayClient from "./SpatialDisplayClient";
import { getLocalizedAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "3D Spatial Display & Glasses-Free 3D Display",
  description:
    "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
  alternates: getLocalizedAlternates("/products/spatial-display"),
  openGraph: {
    title: "Spatial Display for Immersive AI Experiences | HS Global AI",
    description:
      "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
    url: "https://www.hsglobalai.com/products/spatial-display",
    images: [
      {
        url: "https://www.hsglobalai.com/products/spatial-display/spatial-display.png",
        width: 1200,
        height: 630,
        alt: "AI Spatial Display Volumetric Screen Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spatial Display for Immersive AI Experiences | HS Global AI",
    description:
      "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
    images: ["https://www.hsglobalai.com/products/spatial-display/spatial-display.png"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.hsglobalai.com/products/spatial-display#product",
  "name": "3D Spatial Display",
  "alternateName": "Glasses-Free 3D AI Display Panel",
  "category": "3D Spatial Display",
  "description":
    "Naked-eye 3D spatial AI displays with 6 cm ultra-slim profile, 4K Ultra HD touch screen, lenticular light-field optics, and DIHUAVA AI integration.",
  "brand": {
    "@type": "Brand",
    "name": "HS Global AI",
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  "model": "55-inch, 65-inch, 75-inch, 86-inch 4K Spatial Display",
  "image": "https://www.hsglobalai.com/products/spatial-display/spatial-display.png",
};

export default function SpatialDisplayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SpatialDisplayClient />
    </>
  );
}

