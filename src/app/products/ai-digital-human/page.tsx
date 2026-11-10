import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/i18n/config";
import DihuavaClient from "./DihuavaClient";

export const metadata: Metadata = {
  title: {
    absolute: "Offline AI Digital Human Software & Platform | DIHUAVA",
  },
  description:
    "DIHUAVA is an on-device, offline AI digital human software platform by HS Global AI. Runs locally on dedicated hardware with local RAG and 29+ languages.",
  alternates: getLocalizedAlternates("/products/ai-digital-human"),
  openGraph: {
    title: "Offline AI Digital Human Software & Platform | DIHUAVA",
    description:
      "DIHUAVA is an on-device, offline AI digital human software platform by HS Global AI. Runs locally on dedicated hardware with local RAG and 29+ languages.",
    url: "https://www.hsglobalai.com/products/ai-digital-human",
    siteName: "HS Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline AI Digital Human Software & Platform | DIHUAVA",
    description:
      "DIHUAVA is an on-device, offline AI digital human software platform by HS Global AI. Runs locally on dedicated hardware with local RAG and 29+ languages.",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.hsglobalai.com/products/ai-digital-human#webpage",
  "url": "https://www.hsglobalai.com/products/ai-digital-human",
  "name": "Offline AI Digital Human Software & Platform | DIHUAVA",
  "description":
    "DIHUAVA is an on-device, offline AI digital human software platform by HS Global AI. Runs locally on dedicated hardware with local RAG and 29+ languages.",
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
    "On-Device AI Digital Human Software",
    "Offline AI Digital Human Software",
    "AI Digital Human Software Platform",
    "Enterprise Digital Human Software",
    "On-Device AI Digital Human",
    "AI Digital Human Platform",
  ],
  "brand": {
    "@type": "Brand",
    "name": "HS Global AI",
  },
  "sameAs": [
    "https://www.g2.com/products/dihuava/reviews"
  ],
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
    "name": "HS Global AI",
  },
  "creator": {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
    "name": "HS Global AI",
  },
  "image":
    "https://www.hsglobalai.com/products/digital-humans/digital-human-dashboard.jpg",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "AI Digital Human Software Platform",
  "operatingSystem": "Windows 11 (64-bit), Linux (Ubuntu 22.04 LTS)",
  "softwareRequirements":
    "Dedicated NVIDIA RTX GPU (8GB VRAM baseline recommendation), Modern multi-core CPU",
  "processorRequirements": "Modern multi-core CPU",
  "memoryRequirements":
    "Dedicated NVIDIA RTX GPU (8GB VRAM baseline recommendation; actual requirements depend on model selection, avatar resolution, and concurrent workloads)",
  "url": "https://www.hsglobalai.com/products/ai-digital-human",
  "description":
    "DIHUAVA is an on-device, offline AI digital human software platform developed by HS Global AI for enterprise kiosks, holographic displays, and customer engagement, featuring local document RAG and 29+ languages.",
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
          "Offline AI digital human software is an application that runs conversational artificial intelligence, speech recognition, local knowledge retrieval, and real-time 3D avatar animation directly on local edge hardware without streaming voice or video to third-party cloud servers. DIHUAVA executes its entire conversational loop on-device to deliver low-latency, private interactions for physical kiosks and interactive displays.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DIHUAVA run 100% offline without continuous internet connectivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA executes Voice Activity Detection (VAD), Speech-to-Text (STT), local document Retrieval-Augmented Generation (RAG), language model reasoning, and 3D facial lip-sync rendering entirely on the local workstation's CPU and dedicated NVIDIA RTX GPU. Daily visitor interactions operate autonomously without internet access. Network connectivity remains optional for initial setup, software updates, centralized fleet oversight, or mobile QR sharing.",
      },
    },
    {
      "@type": "Question",
      "name": "What hardware and GPU specifications are required to run DIHUAVA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA requires a dedicated workstation or industrial embedded PC running 64-bit Windows 11 or Linux (Ubuntu 22.04 LTS), a modern multi-core processor, and a dedicated NVIDIA RTX GPU. An 8GB VRAM GPU provides a baseline recommendation for standard full-HD and 4K avatars; actual requirements depend on model selection, avatar complexity, and concurrent workloads. The system connects via HDMI or DisplayPort to touch kiosks, 3D hologram boxes, or spatial displays.",
      },
    },
    {
      "@type": "Question",
      "name": "Which languages does DIHUAVA support for offline conversational interaction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA supports real-time conversational interaction across 29+ global languages—including English, Mandarin, Spanish, French, German, Japanese, and Korean—as well as 7 Indian regional languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati). Spoken language detection executes on-device without external cloud translation APIs.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DIHUAVA compare with cloud-based digital human platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Cloud-based digital human platforms stream audio and video over the public internet, introducing variable network latency, recurring per-minute usage fees, and external data residency risks. In contrast, DIHUAVA runs on-premise on dedicated edge hardware, ensuring zero cloud dependency during daily operations, predictable licensing costs, and complete corporate data locality.",
      },
    },
    {
      "@type": "Question",
      "name": "Can enterprises centrally manage multiple offline DIHUAVA kiosks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. While daily conversational interactions execute autonomously offline on each individual display, DIHUAVA supports optional local-area network (LAN) and secure cloud-management configurations. Enterprise administrators can remotely update knowledge documents, manage avatar assets, adjust interaction parameters, and monitor hardware health across multi-location fleets from a centralized administrative console.",
      },
    },
    {
      "@type": "Question",
      "name": "How does on-device document RAG prevent hallucinations and maintain enterprise data privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA utilizes an on-device Retrieval-Augmented Generation (RAG) engine with two-stage cross-encoder re-ranking. Responses are strictly grounded in verified local corporate documents (PDFs, CSVs, TXT, and Markdown). If a visitor asks a question not covered in the local knowledge base, the avatar politely indicates that the information is unavailable rather than inventing unverified claims. Because vector processing executes locally, confidential enterprise data never leaves the facility.",
      },
    },
    {
      "@type": "Question",
      "name": "Can DIHUAVA be deployed as an AI digital human teacher or educational assistant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. DIHUAVA is designed for deployment across universities, K-12 schools, and corporate academies as an interactive AI digital human teacher and campus assistant. Operating on interactive kiosks or life-size 3D hologram boxes, the avatar can ingest approved textbook PDFs, campus directories, and syllabus materials via on-device RAG to answer student inquiries and conduct multilingual conversational practice 100% offline without compromising institutional data privacy.",
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
