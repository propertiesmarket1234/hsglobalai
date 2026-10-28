import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/i18n/config";
import DihuavaClient from "./DihuavaClient";

export const metadata: Metadata = {
  title: {
    absolute: "Offline AI Digital Human Software | DIHUAVA by HS Global AI",
  },
  description:
    "Discover DIHUAVA by HS Global AI, an enterprise digital human software platform designed for offline operation, on-device document intelligence, multilingual interactions and interactive displays.",
  alternates: getLocalizedAlternates("/products/ai-digital-human"),
  openGraph: {
    title: "Offline AI Digital Human Software | DIHUAVA by HS Global AI",
    description:
      "Discover DIHUAVA by HS Global AI, an enterprise digital human software platform designed for offline operation, on-device document intelligence, multilingual interactions and interactive displays.",
    url: "https://www.hsglobalai.com/products/ai-digital-human",
    siteName: "HS Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline AI Digital Human Software | DIHUAVA by HS Global AI",
    description:
      "Discover DIHUAVA by HS Global AI, an enterprise digital human software platform designed for offline operation, on-device document intelligence, multilingual interactions and interactive displays.",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.hsglobalai.com/products/ai-digital-human#webpage",
  "url": "https://www.hsglobalai.com/products/ai-digital-human",
  "name": "Offline AI Digital Human Software | DIHUAVA by HS Global AI",
  "description":
    "Discover DIHUAVA by HS Global AI, an enterprise digital human software platform designed for offline operation, on-device document intelligence, multilingual interactions and interactive displays.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.hsglobalai.com/#website",
  },
  "about": {
    "@type": "SoftwareApplication",
    "@id": "https://www.hsglobalai.com/products/ai-digital-human#software",
  },
  "mainEntity": {
    "@type": "SoftwareApplication",
    "@id": "https://www.hsglobalai.com/products/ai-digital-human#software",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "@id": "https://www.hsglobalai.com/products/ai-digital-human#breadcrumb",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.hsglobalai.com/products/ai-digital-human#software",
  "name": "DIHUAVA",
  "alternateName": [
    "DIHUAVA AI Digital Human Platform",
    "DIHUAVA Offline Digital Human Software",
  ],
  "brand": {
    "@type": "Brand",
    "name": "HS Global AI",
  },
  "image":
    "https://www.hsglobalai.com/products/digital-humans/digital-human-dashboard.jpg",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "AI Digital Human Software",
  "operatingSystem": "Windows 11 (64-bit), Linux (Ubuntu 22.04 LTS)",
  "processorRequirements": "Modern multi-core CPU",
  "memoryRequirements":
    "Dedicated NVIDIA RTX GPU (8GB VRAM baseline recommendation; actual requirements depend on model selection, avatar resolution, and concurrent workloads)",
  "url": "https://www.hsglobalai.com/products/ai-digital-human",
  "description":
    "DIHUAVA is an offline AI digital human software platform developed by HS Global AI for enterprise deployment with on-device processing, local RAG, and multilingual capabilities.",
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  "provider": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  "featureList": [
    "Offline On-Device Speech Recognition & Natural Neural TTS Synthesis",
    "On-Device Document Intelligence RAG Engine for Air-Gapped Knowledge Retrieval",
    "Multilingual Conversational AI across 29+ Global Languages and 7 Indian Regional Languages",
    "Deterministic Lip-Sync and 3D Avatar Rendering on Local NVIDIA RTX GPUs",
    "Hardware Output Drivers for Interactive Touch Kiosks, 3D Hologram Boxes, and Spatial Displays",
    "Interactive CSV-Driven Product Catalogs with Dynamic Information Cards",
    "Real-Time Camera Face Tracking and On-Device Selfie Photo Compositing",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.hsglobalai.com/products/ai-digital-human#breadcrumb",
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
      "item": "https://www.hsglobalai.com/products/ai-digital-human",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.hsglobalai.com/products/ai-digital-human#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is offline AI digital human software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Offline AI digital human software is an on-premise application that runs conversational avatars locally on dedicated hardware without depending on a continuous cloud connection. In DIHUAVA by HS Global AI, speech recognition, language reasoning, and 3D facial animation process directly on local GPU hardware, keeping interactions responsive and sensitive corporate documents private within your facility.",
      },
    },
    {
      "@type": "Question",
      "name": "Can DIHUAVA operate without a continuous internet connection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. DIHUAVA is designed for on-device deployment where core speech recognition, document retrieval (RAG), and avatar rendering function completely offline. An active internet connection is not required for daily autonomous customer interactions, though network connectivity is used for initial installation, software updates, remote fleet management, or optional mobile QR photo sharing.",
      },
    },
    {
      "@type": "Question",
      "name": "What hardware is required to run DIHUAVA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA requires a dedicated workstation or embedded PC running Windows 11 or Linux paired with a compatible NVIDIA RTX GPU. An 8GB VRAM GPU provides a baseline recommendation, while actual requirements depend on model complexity, avatar resolution, and simultaneous workloads. The system interfaces with standard directional microphone arrays, HD/4K webcams, and display outputs including HDMI or DisplayPort for kiosks, spatial displays, and 3D hologram boxes.",
      },
    },
    {
      "@type": "Question",
      "name": "Which languages does DIHUAVA support offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA supports real-time conversational interaction across 29+ global languages, including English, Mandarin, Spanish, French, German, Japanese, and Korean, along with 7 Indian regional languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati). The speech engine detects incoming spoken languages automatically on-device.",
      },
    },
    {
      "@type": "Question",
      "name": "Can DIHUAVA be deployed on kiosks and interactive displays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. DIHUAVA is engineered specifically for physical customer presence, including interactive touchscreen kiosks, 3D Hologram Boxes (55″–86″), and glasses-free spatial displays. It supports responsive touch navigation, interactive CSV product catalogs, and optional camera-based visitor face tracking.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DIHUAVA handle enterprise document search and prevent hallucinations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA uses an on-device Retrieval-Augmented Generation (RAG) engine with two-stage cross-encoder re-ranking. Rather than relying on unconstrained web generation, answers are grounded in imported enterprise documents (PDFs, CSVs, TXT, Markdown). If a visitor asks an inquiry not covered in the verified materials, the avatar politely declines to answer rather than inventing unverified claims.",
      },
    },
    {
      "@type": "Question",
      "name": "How is DIHUAVA different from cloud-based digital human platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Cloud-based platforms stream video and audio over public WAN connections, which introduces network round-trip latency, recurring API costs, and external data transmission risks. In contrast, DIHUAVA processes voice and knowledge retrieval locally on edge hardware to keep sensitive data on-premise. On-premise deployment can avoid recurring cloud API usage charges. Software licensing, maintenance, updates, and support terms depend on the agreed commercial package.",
      },
    },
    {
      "@type": "Question",
      "name": "How can an enterprise request pricing or a demonstration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Enterprises can schedule a live demonstration or request hardware and licensing pricing by visiting our contact page or downloading engineering datasheets from our download center. Our technical team works with you to determine the right hardware specifications, avatar styling, and domain knowledge integration for your venue.",
      },
    },
  ],
};

export default function DihuavaProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DihuavaClient />
    </>
  );
}
