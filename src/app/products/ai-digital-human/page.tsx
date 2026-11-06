import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/i18n/config";
import DihuavaClient from "./DihuavaClient";

export const metadata: Metadata = {
  title: {
    absolute: "Offline AI Digital Human Software & Platform | DIHUAVA by HS Global AI",
  },
  description:
    "DIHUAVA by HS Global AI is an on-device AI digital human software platform running offline on local hardware with local document RAG, 29+ languages, and turnkey kiosk integration.",
  alternates: getLocalizedAlternates("/products/ai-digital-human"),
  openGraph: {
    title: "Offline AI Digital Human Software & Platform | DIHUAVA by HS Global AI",
    description:
      "DIHUAVA by HS Global AI is an on-device AI digital human software platform running offline on local hardware with local document RAG, 29+ languages, and turnkey kiosk integration.",
    url: "https://www.hsglobalai.com/products/ai-digital-human",
    siteName: "HS Global AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline AI Digital Human Software & Platform | DIHUAVA by HS Global AI",
    description:
      "DIHUAVA by HS Global AI is an on-device AI digital human software platform running offline on local hardware with local document RAG, 29+ languages, and turnkey kiosk integration.",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.hsglobalai.com/products/ai-digital-human#webpage",
  "url": "https://www.hsglobalai.com/products/ai-digital-human",
  "name": "Offline AI Digital Human Software & Platform | DIHUAVA by HS Global AI",
  "description":
    "DIHUAVA by HS Global AI is an on-device AI digital human software platform running offline on local hardware with local document RAG, 29+ languages, and turnkey kiosk integration.",
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
    "AI Digital Human Software",
    "Offline AI Digital Human Software",
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
    "DIHUAVA is an on-device AI digital human software platform developed by HS Global AI for enterprise kiosks, holographic displays, and customer engagement, featuring offline execution, local RAG, and multilingual support.",
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
      "name": "What is AI digital human software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "AI digital human software is an application that combines conversational artificial intelligence, speech recognition, speech synthesis, and real-time 3D avatar animation to create interactive virtual human representations. These avatars interact naturally with people in physical or digital spaces, answering questions, guiding users, and delivering customer service. In DIHUAVA by HS Global AI, this software platform runs directly on local hardware for responsive, private interactions.",
      },
    },
    {
      "@type": "Question",
      "name": "What is an offline AI digital human, and how does it operate on-device?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "An offline AI digital human runs its core speech recognition, language model reasoning, knowledge retrieval, and avatar facial animation locally on dedicated edge hardware rather than streaming video and audio over cloud servers. DIHUAVA is designed for on-device operation, allowing interactive avatars to converse autonomously without requiring continuous internet connectivity, eliminating cloud round-trip latency, and keeping proprietary enterprise data within the local facility.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DIHUAVA work without continuous internet connectivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA executes the complete conversational pipeline—including Voice Activity Detection (VAD), Speech-to-Text (STT), local document Retrieval-Augmented Generation (RAG), Large Language Model (LLM) reasoning, and 3D lip-sync rendering—directly on the local workstation's CPU and dedicated NVIDIA RTX GPU. Daily customer interactions operate autonomously offline. Network connectivity remains optional for initial installation, remote software updates, centralized fleet oversight, or mobile QR sharing.",
      },
    },
    {
      "@type": "Question",
      "name": "What hardware does DIHUAVA require?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA requires a dedicated workstation or embedded industrial PC running 64-bit Windows 11 or Linux (Ubuntu 22.04 LTS), paired with a modern multi-core processor and a dedicated NVIDIA RTX GPU. An 8GB VRAM GPU provides a baseline recommendation for standard full-HD and 4K avatars; actual requirements depend on model selection, avatar complexity, and concurrent workloads. The platform connects to standard directional microphone arrays, HD/4K optical webcams, and display outputs via HDMI or DisplayPort.",
      },
    },
    {
      "@type": "Question",
      "name": "Which languages does DIHUAVA support offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA supports real-time conversational interaction across 29+ global languages, including English, Mandarin, Spanish, French, German, Japanese, and Korean, along with 7 Indian regional languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati). The speech engine detects incoming spoken languages automatically on-device without relying on third-party cloud translation services.",
      },
    },
    {
      "@type": "Question",
      "name": "Can DIHUAVA work with interactive kiosks and holographic displays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. DIHUAVA is engineered specifically for physical enterprise presence. It integrates natively with freestanding touch kiosks, countertop totems, transparent OLED displays, and 3D Hologram Boxes (55″–86″). It supports responsive touchscreen navigation, interactive CSV product catalogs, and camera-based visitor face tracking. While HS Global AI develops the DIHUAVA software platform, compatible physical kiosks and holographic enclosures are manufactured and integrated with hardware partners such as Siddhartha Industries Private Limited.",
      },
    },
    {
      "@type": "Question",
      "name": "Can enterprises centrally manage multiple DIHUAVA deployments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. While daily conversational interactions run autonomously offline on each individual kiosk or display, DIHUAVA supports optional local-area network (LAN) and cloud-connected management configurations. Enterprise administrators can remotely update knowledge documents, manage avatar assets, adjust interaction parameters, and monitor hardware health across multi-venue fleets from a centralized administrative console.",
      },
    },
    {
      "@type": "Question",
      "name": "How does on-device processing support enterprise data locality and privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "On-device processing ensures that visitor voice input, conversational queries, and confidential corporate documents remain confined to the physical edge workstation. Because language reasoning and vector document retrieval (RAG) execute locally on dedicated hardware without transmitting payloads to multi-tenant cloud APIs, organizations maintain strict data locality, avoid external data exposure risks, and satisfy on-premise data governance requirements.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DIHUAVA handle enterprise document search and prevent hallucinations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA incorporates an on-device Retrieval-Augmented Generation (RAG) engine with two-stage cross-encoder re-ranking. Rather than relying on unconstrained generative output, answers are strictly grounded in imported enterprise documents (PDFs, CSV product catalogs, TXT, and Markdown). If a visitor asks a question not addressed in the verified source materials, the avatar politely indicates that the information is unavailable rather than inventing unverified claims.",
      },
    },
    {
      "@type": "Question",
      "name": "How is DIHUAVA different from cloud-based digital human platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Cloud-based digital human platforms stream audio and video over public internet connections using WebRTC, introducing variable network latency, recurring per-minute API fees, and external data residency risks. In contrast, DIHUAVA runs its conversational pipeline locally on edge hardware, ensuring low-latency interaction, consistent performance during internet outages, and complete on-premise data security. On-premise deployment avoids recurring cloud API usage fees for daily conversations, with software licensing and maintenance tailored to the enterprise agreement.",
      },
    },
    {
      "@type": "Question",
      "name": "How can an enterprise request pricing or a demonstration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Enterprises can schedule a live demonstration or request hardware and licensing pricing by contacting our engineering team at sales@hsglobalai.com or through our contact page. HS Global AI provides tailored deployments based on hardware selection, language requirements, and venue deployment scale.",
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
