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
          "Cloud-based digital human platforms stream audio and video over the public internet, introducing variable network latency, recurring per-minute usage fees, and external data residency risks. In contrast, DIHUAVA runs on-premise on dedicated edge hardware, avoiding recurring cloud API usage charges while keeping daily voice and document processing local; software licensing, maintenance, updates, and support terms depend on the agreed commercial package.",
      },
    },
    {
      "@type": "Question",
      "name": "Can enterprises centrally manage multiple offline DIHUAVA kiosks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. While daily conversational interactions execute autonomously offline on each individual display, DIHUAVA supports optional local-area network (LAN) and cloud-management configurations. Enterprise administrators can remotely update knowledge documents, manage avatar assets, adjust interaction parameters, and monitor hardware health across multi-location fleets from a centralized administrative console.",
      },
    },
    {
      "@type": "Question",
      "name": "How does on-device document RAG prevent hallucinations and keep customer data local?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA utilizes an on-device Retrieval-Augmented Generation (RAG) engine with two-stage cross-encoder re-ranking and a post-generation grounding guard. Responses are strictly grounded in verified local corporate documents (PDF, DOCX, CSV, TXT, and Markdown). If a visitor asks a question not covered in the local knowledge base, the avatar politely indicates that the information is unavailable rather than inventing unverified claims. When operating in offline on-device mode, document indexing and vector processing execute locally on venue hardware without mandatory cloud transmission.",
      },
    },
    {
      "@type": "Question",
      "name": "Can DIHUAVA be deployed as an AI digital human teacher or educational assistant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. DIHUAVA is designed for deployment across universities, K-12 schools, and corporate academies as an interactive AI digital human teacher and campus assistant. Operating on interactive kiosks or life-size 3D hologram boxes, the avatar can ingest approved textbook PDFs, campus directories, and syllabus materials via on-device RAG to answer student inquiries and conduct multilingual conversational practice 100% offline without exposing institutional queries to third-party cloud servers.",
      },
    },
    {
      "@type": "Question",
      "name": "Is DIHUAVA licensed as standalone software, or does it require purchasing display hardware?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA is a standalone offline AI digital human software platform developed by HS Global AI. Organizations can deploy DIHUAVA software on their own compatible 64-bit Windows 11 or Ubuntu 22.04 LTS workstations with a modern multi-core CPU, dedicated NVIDIA RTX GPU (8GB VRAM baseline recommendation), directional USB microphones, HD/4K webcams, and HDMI or DisplayPort screens—or pair it with optional turnkey touchscreen kiosks, 3D Hologram Boxes (55″–86″), and Glasses-Free Spatial Displays (32″–86″). Commercial licensing, maintenance, updates, and optional hardware integration depend on the selected deployment package.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DIHUAVA answer customer questions from documents and recommend products in real time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DIHUAVA pairs an on-device document RAG engine with a CSV-driven AI Product Catalog. Organizations ingest local PDF, DOCX, CSV, TXT, and Markdown files alongside 9-column product catalog spreadsheets containing product images and optional MP4 demo clips. During spoken conversations, cross-encoder re-ranking and grounding checks keep answers tied to approved files, while synchronized picture-in-picture product cards and side-by-side comparison trays present relevant recommendations verified against local CSV product IDs and prices.",
      },
    },
    {
      "@type": "Question",
      "name": "Can organizations customize the digital human avatar's appearance, brand wardrobe, and voice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Organizations can select existing enterprise personas or create custom digital humans tailored in appearance, corporate wardrobe, and conversational tone. Using zero-shot neural voice cloning, a single 5 to 30 second clean WAV or MP3 recording pre-encodes a 24kHz voice profile that synthesizes speech locally on-device without ongoing cloud voice API calls, while self-contained persona packages let teams switch kiosk roles without code changes.",
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
