import type { Metadata } from "next";
import HolographicDisplayClient from "./HolographicDisplayClient";
import { getLocalizedAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "AI Hologram Box & 3D Hologram Display | HS Global AI",
  description:
    "Explore HS Global AI's 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, with 4K Ultra-HD optical glass, AI computing, sensors, and DIHUAVA integration.",
  alternates: getLocalizedAlternates("/products/holographic-display"),
  openGraph: {
    title: "AI Hologram Box & 3D Hologram Display | HS Global AI",
    description:
      "Explore HS Global AI's 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, with 4K Ultra-HD optical glass, AI computing, sensors, and DIHUAVA integration.",
    url: "https://www.hsglobalai.com/products/holographic-display",
    images: [
      {
        url: "https://www.hsglobalai.com/products/digital-humans/digital-human-new.png",
        width: 1200,
        height: 630,
        alt: "AI Hologram Box with DIHUAVA AI Digital Human",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Hologram Box & 3D Hologram Display | HS Global AI",
    description:
      "Explore HS Global AI's 3D Hologram Display Box in 55\", 65\", 75\", and 86\" sizes, with 4K Ultra-HD optical glass, AI computing, sensors, and DIHUAVA integration.",
    images: ["https://www.hsglobalai.com/products/digital-humans/digital-human-new.png"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.hsglobalai.com/products/holographic-display#product",
  "name": "AI Hologram Box 3D Holographic Display",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI Hologram Box?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI Hologram Box is a 3D holographic display enclosure that combines immersive visual presentation with interactive AI Digital Humans. HS Global AI's AI Hologram Box integrates DIHUAVA AI Digital Human software with a built-in AI workstation, multimodal sensors, directional audio, and 4K optical display technology for interactive experiences in physical environments."
      }
    },
    {
      "@type": "Question",
      "name": "What sizes are available for the AI Hologram Box?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI Hologram Box is available in four standard commercial display sizes: 55-inch, 65-inch, 75-inch, and 86-inch vertical Ultra-HD 4K holographic optical glass showcases to support different physical deployment requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AI Hologram Box work with DIHUAVA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI Hologram Box features a built-in industrial AI workstation running the 100% offline DIHUAVA AI Digital Human engine. This enables real-time natural language interaction, document RAG knowledge retrieval, and multimodal speech synthesis on-device."
      }
    },
    {
      "@type": "Question",
      "name": "Where can an AI Hologram Box be deployed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI Hologram Box is designed for continuous 24/7 commercial operation across retail stores, banking halls, corporate lobbies, exhibition centers, healthcare environments, and public spaces."
      }
    },
    {
      "@type": "Question",
      "name": "What display technology does the AI Hologram Box use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It uses Ultra-HD 4K (3840 x 2160) high-transmission 3D holographic optical glass with 700 nits brightness and 4000:1 dynamic contrast ratio for vivid, life-size digital avatar presentation."
      }
    },
    {
      "@type": "Question",
      "name": "Does the AI Hologram Box support AI Digital Humans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. It is natively integrated with DIHUAVA AI Digital Human software, supporting life-size 1:1 digital avatars, 29+ global languages, custom voice cloning, and multimodal sensor interaction."
      }
    }
  ]
};

export default function HolographicDisplayPage() {
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
      <HolographicDisplayClient />
    </>
  );
}

