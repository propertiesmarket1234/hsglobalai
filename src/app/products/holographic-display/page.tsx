import type { Metadata } from "next";
import HolographicDisplayClient from "./HolographicDisplayClient";
import { getLocalizedAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "3D Hologram Display Box & AI Hologram | HS Global AI",
  description:
    "Explore HS Global AI's 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, with 4K Ultra-HD optical glass, AI computing, sensors, and DIHUAVA integration.",
  alternates: getLocalizedAlternates("/products/holographic-display"),
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

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.hsglobalai.com/products/holographic-display#product",
  "name": "3D Hologram Display Box",
  "alternateName": "AI Hologram Display Showcase",
  "category": "3D Holographic Display",
  "description":
    "Enterprise 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, featuring 4K Ultra-HD optical glass, built-in AI workstation, camera tracking, and DIHUAVA AI Digital Human integration.",
  "brand": {
    "@type": "Brand",
    "name": "HS Global AI",
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  "model": "55-inch, 65-inch, 75-inch, 86-inch 4K Hologram Showcase",
  "url": "https://www.hsglobalai.com/products/holographic-display",
  "image": "https://www.hsglobalai.com/products/digital-humans/digital-human-new.png",
};

export default function HolographicDisplayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <HolographicDisplayClient />
    </>
  );
}
