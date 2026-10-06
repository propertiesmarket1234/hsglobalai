import type { Metadata } from "next";
import SpatialDisplayClient from "./SpatialDisplayClient";
import { getLocalizedAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Spatial Display | Glasses-Free 3D Display | HS Global AI",
  description:
    "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
  alternates: getLocalizedAlternates("/products/spatial-display"),
  openGraph: {
    title: "Spatial Display | Glasses-Free 3D Display | HS Global AI",
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
    title: "Spatial Display | Glasses-Free 3D Display | HS Global AI",
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
  "model": "32-inch, 43-inch, 55-inch, 65-inch, 75-inch, 86-inch 4K Spatial Display",
  "image": "https://www.hsglobalai.com/products/spatial-display/spatial-display.png",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Spatial Display?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spatial Display is a glasses-free 3D display technology that uses spatial optical techniques to present immersive visual depth directly to viewers without requiring 3D glasses or headsets. HS Global AI's Spatial Display can integrate with DIHUAVA AI Digital Humans for interactive customer and enterprise experiences.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Spatial Display glasses-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Spatial Display features lenticular light-field optical technology and real-time optical eye tracking to deliver natural 3D depth perception directly to viewer eyes without specialized glasses or AR/VR headsets.",
      },
    },
    {
      "@type": "Question",
      "name": "What sizes are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spatial Display is available in six confirmed screen sizes: 32-inch, 43-inch, 55-inch, 65-inch, 75-inch, and 86-inch 4K Ultra HD touch panels.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DIHUAVA AI integrate with Spatial Display?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spatial Display serves as the physical 3D display hardware layer, while DIHUAVA acts as the AI software intelligence layer. DIHUAVA powers real-time AI Digital Human avatars, speech recognition, local document RAG, and multilingual conversations on the Spatial Display screen.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between Spatial Display and an AI Hologram Box?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spatial Display is an ultra-slim 6 cm glasses-free 3D display screen panel using light-field spatial optics. The AI Hologram Box is a 3D glass enclosure showcase designed for life-size 1:1 holographic avatar presentations. Both hardware platforms connect to the DIHUAVA AI software engine.",
      },
    },
    {
      "@type": "Question",
      "name": "Where can Spatial Display be deployed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spatial Display can be deployed across commercial environments including retail showcases, corporate lobbies, healthcare clinics, educational facilities, hospitality concierge desks, museums, and public exhibition spaces.",
      },
    },
  ],
};

export default function SpatialDisplayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SpatialDisplayClient />
    </>
  );
}

