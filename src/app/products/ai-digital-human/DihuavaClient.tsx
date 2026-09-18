"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

import {
  Camera,
  Sparkles,
  ShoppingBag,
  Zap,
  Globe,
  ShieldCheck,
  Cpu,
  User,
  BookOpen,
  Brain,
} from "lucide-react";

// CORE PLATFORM SUBSYSTEMS
const coreModules = [
  {
    id: "selfie-engine",
    title: "Selfie With Avatar",
    subtitle: "Instant On-Device Photo Compositing",
    description:
      "Visitors tap Selfie on the display to capture a photo standing beside the AI Avatar. Features deterministic real-time face-scale matching, 6 creative filters (Realistic, Original, B&W, Vivid, Warm, Cool), and optional QR phone sharing with 24-hour auto-expiring links.",
    icon: Camera,
    badge: "Interactive Photo Experience",
    featureUrl: "/products/ai-digital-human/avatar-customization",
    highlights: [
      "Real-time local compositing",
      "Scale & height face alignment matching",
      "6 instant photographic filters",
      "24-Hour auto-expiring QR share links",
    ],
  },
  {
    id: "live-character",
    title: "Live Character Experience",
    subtitle: "Real-Time Cartoon Face Mode",
    description:
      "A real-time camera-driven cartoon rendering mode where a visitor's live facial expressions (smiles, blinks, head turns) deform a stylized character skin directly onto their face in real time with ultra-low latency.",
    icon: Sparkles,
    badge: "Real-Time Face Tracking",
    featureUrl: "/products/ai-digital-human/avatar-customization",
    highlights: [
      "Real-time camera face tracking",
      "Live expression & blink deformation",
      "No-code character library expansion",
      "High-engagement exhibition draw",
    ],
  },
  {
    id: "product-catalog",
    title: "AI Product Catalog",
    subtitle: "CSV-Driven Recommendation Engine",
    description:
      "Converts product catalog CSVs into an intelligent spoken recommendation system. Displays interactive product cards, price filtering, and automatic audio-visual synchronization so the avatar only discusses products currently on screen.",
    icon: ShoppingBag,
    badge: "Smart Recommendation",
    featureUrl: "/products/ai-digital-human/ai-product-catalog",
    highlights: [
      "Structured 9-column catalog schema",
      "Audio-visual sync with screen cards",
      "Automatic search vocabulary AI",
      "Multilingual catalog translation",
    ],
  },
  {
    id: "offline-rag",
    title: "Enterprise Knowledge RAG",
    subtitle: "On-Device PDF RAG with Reranking",
    description:
      "Ingest custom corporate PDFs, CSVs, TXT, and Markdown files directly onto the local device. An on-device relevance reranker scores passages before generating grounded responses with zero data leaving your premises.",
    icon: Zap,
    badge: "100% Offline RAG",
    featureUrl: "/products/ai-digital-human/document-intelligence",
    highlights: [
      "Local PDF, CSV, TXT & Markdown RAG",
      "On-device relevance reranking",
      "Zero cloud data transmission",
      "Diagnostic retrieval verification",
    ],
  },
  {
    id: "multilingual-voice",
    title: "Multilingual Engine & Voice Cloning",
    subtitle: "29+ Global Languages & Brand Voice Matching",
    description:
      "Full on-device speech recognition, voice synthesis, and translation across 29+ global languages, including regional accents and automatic per-persona voice cloning.",
    icon: Globe,
    badge: "29+ Global Languages",
    featureUrl: "/products/ai-digital-human/multilingual-support",
    highlights: [
      "100% local speech recognition & TTS",
      "Real-time 29+ global languages engine",
      "Automatic per-persona voice cloning",
      "Localized currency & number speech",
    ],
  },
  {
    id: "brain-clone",
    title: "Brain Clone",
    subtitle: "Source-Grounded Personal Knowledge Engine",
    description:
      "Turn a person's recorded talks and teachings into a source-grounded digital human that answers from what they actually said.",
    icon: Brain,
    badge: "IN DEVELOPMENT",
    featureUrl: "/products/ai-digital-human",
    highlights: [
      "Answers from recorded words with source passages on demand",
      "Processing runs on customer-owned hardware",
      "Rights approval required before setup",
      "Does not invent answers when unrecorded",
    ],
  },
  {
    id: "airgap-privacy",
    title: "Enterprise Air-Gap Privacy",
    subtitle: "100% On-Device Data Security",
    description:
      "Engineered for highly regulated enterprise environments (banking, defense, healthcare). All voice computations, LLM dialogues, document searches, and photo compositing occur locally on physical edge hardware.",
    icon: ShieldCheck,
    badge: "Air-Gap Compliance",
    featureUrl: "/products/ai-digital-human/persona-management",
    highlights: [
      "100% local hardware processing",
      "GDPR, PDPA & HIPAA-friendly",
      "Zero voice data transmission",
      "Cryptographic device licensing",
    ],
  },
];

// ARCHITECTURAL PILLARS (8 CORE TECHNOLOGIES)
const archPillars = [
  {
    title: "AI Engine Subsystems",
    desc: "Local Conversational LLM, Automatic Speech Recognition (ASR), Machine Translation, and Semantic Reasoning running 100% on-device.",
    icon: Cpu,
  },
  {
    title: "Digital Avatar Renderer",
    desc: "3D facial mesh rendering, real-time lip synchronization, micro-expressions, posture control, and persona identity management.",
    icon: User,
  },
  {
    title: "29+ Multilingual Speech Engine",
    desc: "Real-time speech recognition & synthesis across 29+ global languages and 7+ Indian languages with instant auto-switch.",
    icon: Globe,
  },
  {
    title: "Knowledge & Catalog RAG Engine",
    desc: "Air-gapped local vector indexer with cross-encoder reranking, multi-column CSV catalog import, and auto vocabulary generation.",
    icon: BookOpen,
  },
  {
    title: "Low-Latency Edge Pipeline",
    desc: "High-speed local stream architecture delivering end-to-end conversational response times with Low Latency for fluid dialogue.",
    icon: Zap,
  },
  {
    title: "Computer Vision & Face Tracking",
    desc: "HD wide-angle camera face tracking, eye-gaze direction sensing, visitor posture tracking, and presence detection array.",
    icon: Camera,
  },
  {
    title: "100% Offline Air-Gapped Security",
    desc: "Zero cloud internet dependency, enterprise privacy compliance, encrypted local vector storage, and physical edge workstation hosting.",
    icon: ShieldCheck,
  },
  {
    title: "Spatial & Hologram Display Controller",
    desc: "Synchronized output drivers for 3D Hologram Boxes, volumetric optical spatial displays, touch kiosks, and multi-screen arrays.",
    icon: Sparkles,
  },
];

// HOW DIHUAVA WORKS STEPS
const howItWorksSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "Voice input, documents, product catalogs, and visitor questions are processed locally.",
    badge: "Local Data Input",
  },
  {
    step: "02",
    title: "Think",
    desc: "The local AI engine retrieves relevant knowledge and generates a grounded response.",
    badge: "On-Device AI",
  },
  {
    step: "03",
    title: "Respond",
    desc: "The digital human responds using natural speech, facial expressions, and personalized behavior.",
    badge: "Neural Expression",
  },
  {
    step: "04",
    title: "Interact",
    desc: "Connect the AI digital human to hologram boxes, kiosks, spatial displays, and other physical environments.",
    badge: "Hardware Sync",
  },
];

// VOICE SYNTHESIS ENGINE
const voiceCapabilities = [
  {
    name: "Expressive Neural Voice Engine",
    speed: "Expressive Synthesis",
    desc: "Optimized for natural speech with expressive audible reactions like laughter, warmth, and fluid conversational cadence.",
  },
  {
    name: "Regional Accent & Dialect Adaptation",
    speed: "Localized Speech",
    desc: "Specialized neural models for global and regional accents with localized currency, numbering, and regional speech rhythm.",
  },
  {
    name: "29+ Global Languages Engine",
    speed: "29+ Global Languages",
    desc: "Covers English, Mandarin, Hindi, Spanish, Arabic, French, German, Japanese, Korean, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, Russian, and major international languages.",
  },
];

// PERSONA TYPES
const personaProfiles = [
  {
    title: "Retail Sales Ambassador",
    desc: "Proactive product recommendations, cross-selling, promotional announcements, and interactive Virtual Try-On assistance.",
    icon: "🛍️",
  },
  {
    title: "Healthcare Patient Assistant",
    desc: "Empathetic hospital wayfinding, symptom intake triage, appointment scheduling, and multilingual discharge instructions.",
    icon: "🏥",
  },
  {
    title: "Corporate Receptionist",
    desc: "Visitor check-in, guest badge issuance, host notifications, workplace wayfinding, and employee HR policy Q&A.",
    icon: "🏢",
  },
  {
    title: "Custom Brand Avatar",
    desc: "Custom 3D character mesh, corporate wardrobe, custom voice cloning reference, and branded interaction style.",
    icon: "⭐",
  },
];

// CUSTOM AI PERSONA FEATURES
const customPersonaFeatures = [
  {
    title: "Appearance",
    desc: "Create a digital human aligned with your brand identity.",
  },
  {
    title: "Voice",
    desc: "Use multilingual voices or a customized corporate voice.",
  },
  {
    title: "Personality",
    desc: "Configure communication style, tone and behavior.",
  },
  {
    title: "Brand Identity",
    desc: "Apply your organization's visual identity and interaction style.",
  },
];

// COMPARISON MATRIX
const comparisonTable = [
  { feature: "AI Processing", dihuava: "Local / On-Device", cloud: "Cloud-Based" },
  { feature: "Internet Dependency", dihuava: "Designed for Offline Operation", cloud: "Typically Requires Connectivity" },
  { feature: "Voice Processing", dihuava: "Local Processing", cloud: "May Use Remote Processing" },
  { feature: "Languages", dihuava: "29+ Local Languages", cloud: "Depends on Provider" },
  { feature: "Selfie Experience", dihuava: "Local Compositing", cloud: "Cloud-Dependent Workflows" },
  { feature: "Live Character", dihuava: "Real-Time Face Tracking", cloud: "Depends on Implementation" },
  { feature: "Data Architecture", dihuava: "Edge / Air-Gapped Deployment", cloud: "Cloud Infrastructure" },
];

// PRODUCT SPECS
const productSpecs = [
  { label: "Core AI Architecture", value: "Fully local on-device voice & conversation platform" },
  { label: "Supported Languages", value: "29+ Global Languages" },
  { label: "Speech & Voice Engine", value: "Speech recognition, synthesis & voice cloning" },
  { label: "Document RAG", value: "PDF, TXT, CSV & Markdown" },
  { label: "Product Catalog", value: "Product recommendation & screen synchronization" },
  { label: "Photo & Character", value: "Selfie With Avatar + Live Character" },
];

// FREQUENTLY ASKED QUESTIONS
const faqs = [
  {
    q: "Does DIHUAVA require internet connectivity?",
    a: "No. DIHUAVA runs 100% offline on-device by default, with optional cloud-management configurations available. The full 29-language voice pipeline, document RAG, product catalog, Selfie compositing, and Live Character rendering run completely offline on local hardware.",
  },
  {
    q: "How many languages are supported on-device?",
    a: "29+ global languages fully local, including English, Mandarin, Hindi, Spanish, Arabic, French, German, Japanese, Korean, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, and major international languages.",
  },
  {
    q: "Is visitor voice or conversation data transmitted to the cloud?",
    a: "Zero voice or conversation data is sent to external servers. All AI processing occurs locally on physical edge hardware, ensuring complete compliance with GDPR, PDPA, and HIPAA privacy standards.",
  },
  {
    q: "Can we clone our own corporate brand voice?",
    a: "Yes. Custom persona packages can include short reference audio recordings. The platform clones the persona's voice automatically across English and multilingual synthesis tiers with no manual voice-training step.",
  },
  {
    q: "What is Selfie With Avatar?",
    a: "Selfie With Avatar allows visitors to tap Selfie on screen and instantly capture a photo standing next to the avatar. Real-time compositing matches face size and vertical height, applies creative filters, and generates a 24-hour QR share link.",
  },
  {
    q: "What is Live Character Experience?",
    a: "Live Character Experience is a real-time cartoon face mode. The camera tracks visitor facial movements (smiles, blinks, head turns) and warps a stylized character skin directly onto their face with ultra-low latency.",
  },
];

export default function DihuavaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
  const hp = dict.home.platform;
  const brainCloneData = (hp.capabilities as any)?.brainClone;
  const dPage = (dict as any).dihuavaPage || {};

  const localizedModules = (dPage.coreModules || coreModules).map((module: any, idx: number) => {
    const baseModule = coreModules[idx] || module;
    if (module.id === "brain-clone" && brainCloneData) {
      const highlightsList: string[] = brainCloneData.highlights
        ? brainCloneData.highlights.map((h: any) => (typeof h === "string" ? h : h.detail))
        : module.highlights;
      return {
        ...baseModule,
        ...module,
        title: (brainCloneData.title as string) || module.title,
        subtitle: (brainCloneData.subtitle as string) || module.subtitle,
        description: (brainCloneData.description as string) || module.description,
        badge: (brainCloneData.stat as string) || module.badge,
        highlights: highlightsList,
      };
    }
    return {
      ...baseModule,
      ...module,
    };
  });

  const localizedArchPillars = (dPage.archPillars || archPillars).map((pillar: any, idx: number) => ({
    ...(archPillars[idx] || pillar),
    ...pillar,
  }));

  const localizedHowItWorks = (dPage.howItWorksSteps || howItWorksSteps).map((step: any, idx: number) => ({
    ...(howItWorksSteps[idx] || step),
    ...step,
  }));

  const localizedVoiceCaps = (dPage.voiceCapabilities || voiceCapabilities).map((cap: any, idx: number) => ({
    ...(voiceCapabilities[idx] || cap),
    ...cap,
  }));

  const localizedPersonaProfiles = (dPage.personaProfiles || personaProfiles).map((prof: any, idx: number) => ({
    ...(personaProfiles[idx] || prof),
    ...prof,
  }));

  const localizedCustomPersonaFeatures = (dPage.customPersonaFeatures || customPersonaFeatures).map((feat: any, idx: number) => ({
    ...(customPersonaFeatures[idx] || feat),
    ...feat,
  }));

  const localizedComparisonTable = (dPage.comparisonTable || comparisonTable).map((item: any, idx: number) => ({
    ...(comparisonTable[idx] || item),
    ...item,
  }));

  const localizedProductSpecs = (dPage.productSpecs || productSpecs).map((spec: any, idx: number) => ({
    ...(productSpecs[idx] || spec),
    ...spec,
  }));

  const localizedFaqs = (dPage.faqs || faqs).map((faq: any, idx: number) => ({
    ...(faqs[idx] || faq),
    ...faq,
  }));

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[850px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href={lPath("/products")} className="hover:text-cyan-400 transition-colors">
              {currentLocale === "zh" ? "产品" : currentLocale === "ru" ? "Продукты" : currentLocale === "es" ? "Productos" : currentLocale === "fr" ? "Produits" : "Products"}
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">
              {currentLocale === "zh" ? "DIHUAVA 平台" : currentLocale === "ru" ? "Платформа DIHUAVA" : currentLocale === "es" ? "Plataforma DIHUAVA" : currentLocale === "fr" ? "Plateforme DIHUAVA" : "DIHUAVA Platform"}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  {currentLocale === "zh" ? "旗舰级端侧 AI 平台" : currentLocale === "ru" ? "Флагманская локальная AI-платформа" : currentLocale === "es" ? "Plataforma insignia de IA local" : currentLocale === "fr" ? "Plateforme d'IA locale phare" : "Flagship Local AI Platform"}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                {currentLocale === "zh" ? (
                  <>专为 <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">真实场景客户交互</span> 打造的 AI 数字人</>
                ) : currentLocale === "ru" ? (
                  <>Цифровые аватары AI для <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">реального взаимодействия с клиентами.</span></>
                ) : currentLocale === "es" ? (
                  <>Digital Humans de IA creados para la <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">interacción con clientes en el mundo real.</span></>
                ) : currentLocale === "fr" ? (
                  <>Humains numériques IA conçus pour <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">l'interaction client dans le monde réel.</span></>
                ) : (
                  <>AI Digital Humans Built for <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">Real-World Customer Interaction.</span></>
                )}
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                {currentLocale === "zh" ? (
                  <>DIHUAVA 是企业级 AI 数字人软件平台，赋能实时交互数字人自然沟通、理解企业知识库、支持多语言，并可在交互式终端、<Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI 全息舱</Link>及 <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D 空间显示器</Link>上完全端侧本地运行。</>
                ) : currentLocale === "ru" ? (
                  <>DIHUAVA — это корпоративная программная платформа AI Digital Human для интерактивных цифровых аватаров, которые естественно общаются, понимают вашу бизнес-базу знаний, говорят на многих языках и работают локально на интерактивных киосках, <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Box</Link> и <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Display</Link>.</>
                ) : currentLocale === "es" ? (
                  <>DIHUAVA es una plataforma de software empresarial de AI Digital Human que impulsa humanos digitales interactivos que se comunican con naturalidad, comprenden su conocimiento empresarial, hablan múltiples idiomas y se ejecutan localmente en quioscos interactivos, <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Boxes</Link> y <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Displays</Link>.</>
                ) : currentLocale === "fr" ? (
                  <>DIHUAVA est une plateforme logicielle entreprise d'AI Digital Human alimentant des humains numériques interactifs qui communiquent naturellement, comprennent vos connaissances d'entreprise, parlent plusieurs langues et s'exécutent localement sur des bornes interactives, des <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Boxes</Link> et des <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Displays</Link>.</>
                ) : (
                  <>DIHUAVA is an enterprise AI Digital Human software platform powering interactive digital humans that communicate naturally, understand your business knowledge, speak multiple languages, and run locally across interactive kiosks, <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Boxes</Link>, and <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Displays</Link>.</>
                )}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={lPath("/contact")}
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  {currentLocale === "zh" ? "预约 DIHUAVA 演示 →" : currentLocale === "ru" ? "Запросить демо DIHUAVA →" : currentLocale === "es" ? "Solicitar demo de DIHUAVA →" : currentLocale === "fr" ? "Demander une démo DIHUAVA →" : "Request DIHUAVA Demo →"}
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  {currentLocale === "zh" ? "下载技术文档 (PDF)" : currentLocale === "ru" ? "Скачать документацию (PDF)" : currentLocale === "es" ? "Descargar documentación (PDF)" : currentLocale === "fr" ? "Télécharger la documentation (PDF)" : "Download Documentation (PDF)"}
                </Link>
              </div>

              {/* Quick Feature Badges */}
              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🔒 100% 端侧物理隔离" : currentLocale === "ru" ? "🔒 100% Офлайн Air-Gap" : currentLocale === "es" ? "🔒 100% Local Air-Gap" : currentLocale === "fr" ? "🔒 100% Hors ligne Air-Gap" : "🔒 100% Offline Air-Gapped"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🌐 29+ 全球语言支持" : currentLocale === "ru" ? "🌐 29+ Языков мира" : currentLocale === "es" ? "🌐 29+ Idiomas globales" : currentLocale === "fr" ? "🌐 29+ Langues mondiales" : "🌐 29+ Global Languages"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "📸 与数字人合影" : currentLocale === "ru" ? "📸 Селфи с аватаром" : currentLocale === "es" ? "📸 Selfie con el Avatar" : currentLocale === "fr" ? "📸 Selfie avec l'Avatar" : "📸 Selfie With Avatar"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🎭 实时卡通变脸" : currentLocale === "ru" ? "🎭 Режим мультперсонажа" : currentLocale === "es" ? "🎭 Modo Personaje Animado" : currentLocale === "fr" ? "🎭 Mode Personnage Animé" : "🎭 Live Cartoon Mode"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🧠 脑分身 (开发中)" : currentLocale === "ru" ? "🧠 Brain Clone (В разработке)" : currentLocale === "es" ? "🧠 Clon de Cerebro (En dev)" : currentLocale === "fr" ? "🧠 Clone de Cerveau (En dév)" : "🧠 Brain Clone (In Dev)"}
                </span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950/80 p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src="/products/digital-humans/digital-human-dashboard.jpg"
                    alt="DIHUAVA AI Digital Human Platform Dashboard"
                    fill
                    priority
                    className="object-contain w-full h-full bg-neutral-950"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* System Overlay Status */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/80 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400">● DIHUAVA ENTERPRISE AI ENGINE</span>
                      <span className="text-emerald-400">
                        {currentLocale === "zh" ? "状态：100% 本地运行" : currentLocale === "ru" ? "СТАТУС: 100% ЛОКАЛЬНО" : currentLocale === "es" ? "ESTADO: 100% LOCAL" : currentLocale === "fr" ? "STATUT : 100% LOCAL" : "STATUS: 100% LOCAL"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-300">
                      {currentLocale === "zh" ? "端侧语音、声音克隆、PDF RAG 与照片合成已激活" : currentLocale === "ru" ? "Локальная речь, клонирование голоса, PDF RAG и фотокомпозитинг активны" : currentLocale === "es" ? "Voz en dispositivo, clonación de voz, RAG de PDF y composición fotográfica activados" : currentLocale === "fr" ? "Vocal sur appareil, clonage vocal, RAG PDF et composition photo actifs" : "On-Device Speech, Voice Cloning, PDF RAG & Photo Compositing Active"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS COUNTER BAR */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-12 border-b border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">29+</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">
                {currentLocale === "zh" ? "全球语言" : currentLocale === "ru" ? "Языков мира" : currentLocale === "es" ? "Idiomas globales" : currentLocale === "fr" ? "Langues mondiales" : "Global Languages"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">100%</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">
                {currentLocale === "zh" ? "端侧本地处理" : currentLocale === "ru" ? "Локальная обработка" : currentLocale === "es" ? "Procesamiento en dispositivo" : currentLocale === "fr" ? "Traitement sur appareil" : "On-Device Processing"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL LAYERS SECTION */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "系统架构" : currentLocale === "ru" ? "Архитектура системы" : currentLocale === "es" ? "Arquitectura del sistema" : currentLocale === "fr" ? "Architecture système" : "System Architecture"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "驱动 Dihuava 的八大核心技术" : currentLocale === "ru" ? "Восемь ключевых технологий DIHUAVA" : currentLocale === "es" ? "Ocho tecnologías clave que impulsan Dihuava" : currentLocale === "fr" ? "Huit technologies clés alimentant Dihuava" : "Eight Core Technologies Powering Dihuava"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "Dihuava 采用集成的本地优先架构，对话 AI、渲染、多语言语音、视觉与硬件交互在物理边缘工作站上高效协同。" : currentLocale === "ru" ? "DIHUAVA работает по интегративной локальной модели, где разговорный AI, рендеринг, многоязычная речь, зрение и аппаратное взаимодействие функционируют локально." : currentLocale === "es" ? "Dihuava opera mediante un modelo integrado local donde la IA conversacional, el renderizado, el habla multilingüe, la visión y la interacción de hardware funcionan localmente." : currentLocale === "fr" ? "Dihuava fonctionne via un modèle intégré axé sur le local où l'IA conversationnelle, le rendu, la parole multilingue, la vision et l'interaction matérielle fonctionnent harmonieusement sur des stations de travail physiques." : "Dihuava operates via an integrated local-first model where conversational AI, rendering, multilingual speech, vision, and hardware interaction function harmoniously on physical edge workstations."}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {localizedArchPillars.map((pillar: any, idx: number) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] mb-6">
                    <pillar.icon className="w-7 h-7 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-gray-300">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
                  PILLAR {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DIHUAVA WORKS SECTION */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "简单 4 步流程" : currentLocale === "ru" ? "Простой 4-шаговый процесс" : currentLocale === "es" ? "Proceso simple de 4 pasos" : currentLocale === "fr" ? "Processus simple en 4 étapes" : "Simple 4-Step Process"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "Dihuava 工作原理" : currentLocale === "ru" ? "Как работает DIHUAVA" : currentLocale === "es" ? "Cómo funciona Dihuava" : currentLocale === "fr" ? "Comment fonctionne Dihuava" : "How Dihuava Works"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "无缝的端到端边缘流水线，无需云端依赖即可提供拟人化交互。" : currentLocale === "ru" ? "Сквозной локальный конвейер, обеспечивающий естественноподобное взаимодействие без зависимости от облака." : currentLocale === "es" ? "Un flujo continuo de extremo a extremo que impulsa interacciones humanas sin dependencia de la nube." : currentLocale === "fr" ? "Un pipeline d'extrémité à extrémité fluide alimentant des interactions humaines sans dépendance au cloud." : "A seamless end-to-end edge pipeline powering human-like interactions without cloud dependencies."}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {localizedHowItWorks.map((item: any, idx: number) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-xl">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-300">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>{item.badge}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PLATFORM SUBSYSTEMS GRID (7 MODULES) */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "核心平台子系统" : currentLocale === "ru" ? "Ключевые подсистемы платформы" : currentLocale === "es" ? "Subsistemas principales de la plataforma" : currentLocale === "fr" ? "Sous-systèmes principaux de la plateforme" : "Core Platform Subsystems"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "7 大智能模块。1 套集成端侧 AI。" : currentLocale === "ru" ? "7 Интеллектуальных модулей. 1 Локальный AI." : currentLocale === "es" ? "7 módulos inteligentes. 1 IA local integrada." : currentLocale === "fr" ? "7 modules intelligents. 1 IA locale intégrée." : "7 Intelligent Modules. 1 Integrated Local AI."}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "数字人理解、沟通、推荐与交互所需的一切功能，均在端侧边缘本地运行。" : currentLocale === "ru" ? "Все, что нужно цифровому аватару для понимания, общения и рекомендаций — локально на устройстве." : currentLocale === "es" ? "Todo lo que su humano digital necesita para comprender, comunicarse, recomendar e interactuar, ejecutándose localmente en el dispositivo." : currentLocale === "fr" ? "Tout ce dont votre humain numérique a besoin pour comprendre, communiquer, recommander et interagir — s'exécutant localement sur l'appareil." : "Everything your digital human needs to understand, communicate, recommend, and interact — running locally on the edge."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {localizedModules.map((module: any) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <module.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-300 font-mono">
                      {module.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {module.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-cyan-400">
                    {module.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {module.description}
                  </p>
                </div>

                <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
                  {module.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-cyan-400">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {module.featureUrl && (
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={lPath(module.featureUrl)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:underline font-mono"
                    >
                      <span>{currentLocale === "zh" ? "查看深度规格" : currentLocale === "ru" ? "Подробные характеристики" : currentLocale === "es" ? "Ver especificaciones detalladas" : currentLocale === "fr" ? "Voir les spécifications détaillées" : "View Deep Dive Specs"}</span>
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT 1: INTERACTIVE VISITOR EXPERIENCES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "次世代访客互动体验" : currentLocale === "ru" ? "Интерактив нового поколения" : currentLocale === "es" ? "Compromiso de visitantes de última generación" : currentLocale === "fr" ? "Engagement visiteur de nouvelle génération" : "Next-Gen Visitor Engagement"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "与数字人合影与实时变脸体验" : currentLocale === "ru" ? "Селфи и режим мультперсонажа" : currentLocale === "es" ? "Experiencias de Selfie y Personaje Animado" : currentLocale === "fr" ? "Expériences Selfie & Personnage Animé" : "Selfie & Live Character Experiences"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "突破传统语音对话，通过端侧即时合影拍照与实时面部卡通变脸提升线下场景吸引力。" : currentLocale === "ru" ? "Повышайте вовлеченность гостей на площадке благодаря мгновенным селфи и трекингу лица." : currentLocale === "es" ? "Eleve el compromiso en su espacio físico con fotografía instantánea en el dispositivo y deformación facial animada en tiempo real." : currentLocale === "fr" ? "Élevez l'engagement dans vos locaux au-delà de la parole avec la photographie instantanée sur appareil et la déformation cartoon en temps réel." : "Elevate physical venue engagement beyond speech with instant on-device photography and real-time facial cartoon warping."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Selfie Feature Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <Camera className="w-7 h-7 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {currentLocale === "zh" ? "端侧照片合成" : currentLocale === "ru" ? "ЛОКАЛЬНЫЙ КОМПОЗИТИНГ" : currentLocale === "es" ? "COMPOSICIÓN EN DISPOSITIVO" : currentLocale === "fr" ? "COMPOSITION SUR APPAREIL" : "ON-DEVICE COMPOSITING"}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {currentLocale === "zh" ? "与数字人合影" : currentLocale === "ru" ? "Селфи с аватаром" : currentLocale === "es" ? "Selfie con el Avatar" : currentLocale === "fr" ? "Selfie avec l'Avatar" : "Selfie With Avatar"}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  {currentLocale === "zh" ? (
                    <>访客在终端上点击 <strong className="text-white">合影</strong>，即可与 AI 数字人并排拍照。系统在不到一秒（约 300–400ms）内进行确定性端侧面部缩放与身高对齐，生成逼真的合影照片。</>
                  ) : currentLocale === "ru" ? (
                    <>Посетители нажимают <strong className="text-white">Селфи</strong> на киоске, чтобы сфотографироваться рядом с AI-аватором. Менее чем за секунду (~300–400 мс) система выполняет локальное масштабирование лица для создания фото.</>
                  ) : currentLocale === "es" ? (
                    <>Los visitantes tocan <strong className="text-white">Selfie</strong> en el quiosco para posar junto al avatar de IA. En menos de un segundo (~300–400 ms), el sistema realiza la coincidencia de escala facial en el dispositivo para producir una foto realista.</>
                  ) : currentLocale === "fr" ? (
                    <>Les visiteurs touchent <strong className="text-white">Selfie</strong> sur la borne pour poser à côté de l'avatar IA. En moins d'une seconde (~300–400 ms), le système effectue la mise à l'échelle faciale sur l'appareil pour produire une photo réaliste.</>
                  ) : (
                    <>Visitors tap <strong className="text-white">Selfie</strong> on the kiosk to pose beside the AI avatar. In under a second (~300–400ms), the system performs deterministic on-device face scaling and height matching to produce a realistic composite photo.</>
                  )}
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "即时相片滤镜：" : currentLocale === "ru" ? "Мгновенные фотофильтры:" : currentLocale === "es" ? "Filtros fotográficos instantáneos:" : currentLocale === "fr" ? "Filtres photographiques instantanés :" : "Instant Photographic Filters:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "写实（默认）、原图、黑白、鲜艳、暖色与冷色。" : currentLocale === "ru" ? "Реалистичный (по умолчанию), Оригинал, Ч/Б, Яркий, Теплый и Холодный." : currentLocale === "es" ? "Realista (predeterminado), Original, Blanco y negro, Vívido, Cálido y Frío." : currentLocale === "fr" ? "Réaliste (par défaut), Original, Noir & blanc, Éclatant, Chaud et Froid." : "Realistic (default), Original, Black & White, Vivid, Warm, and Cool."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "二维码手机分享：" : currentLocale === "ru" ? "QR-код для скачивания на телефон:" : currentLocale === "es" ? "Compartir por código QR:" : currentLocale === "fr" ? "Partage par code QR :" : "QR Code Phone Sharing:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "访客扫描屏幕上的二维码下载照片。分享链接在 24 小时内自动过期，保护隐私安全。" : currentLocale === "ru" ? "Посетители сканируют QR-код на экране для скачивания фото. Ссылки автоматически удаляются через 24 часа." : currentLocale === "es" ? "Los visitantes escanean un código QR para descargar su foto. Los enlaces caducan automáticamente en 24 horas." : currentLocale === "fr" ? "Les visiteurs scannent un code QR sur l'écran pour télécharger leur photo. Les liens expirent automatiquement après 24 heures." : "Visitors scan an on-screen QR code to download their photo. Links automatically expire in 24 hours, keeping data private."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>{currentLocale === "zh" ? "端侧极速处理" : currentLocale === "ru" ? "БЫСТРАЯ ОБРАБОТКА НА УСТРОЙСТВЕ" : currentLocale === "es" ? "PROCESAMIENTO RÁPIDO EN DISPOSITIVO" : currentLocale === "fr" ? "TRAITEMENT RAPIDE SUR APPAREIL" : "FAST ON-DEVICE PROCESSING"}</span>
                <span className="text-emerald-400">{currentLocale === "zh" ? "24小时自动删除" : currentLocale === "ru" ? "АВТОУДАЛЕНИЕ ЧЕРЕЗ 24 Ч" : currentLocale === "es" ? "ELIMINACIÓN AUTOMÁTICA EN 24 HORAS" : currentLocale === "fr" ? "SUPPRESSION AUTOMATIQUE 24H" : "24-HR AUTO DELETE"}</span>
              </div>
            </div>

            {/* Live Character Feature Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <Sparkles className="w-7 h-7 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {currentLocale === "zh" ? "实时面部追踪" : currentLocale === "ru" ? "ТРЕКИНГ ЛИЦА В РЕАЛЬНОМ ВРЕМЕНИ" : currentLocale === "es" ? "SEGUIMIENTO FACIAL EN TIEMPO REAL" : currentLocale === "fr" ? "SUIVI FACIAL EN TEMPS RÉEL" : "REAL-TIME FACE TRACKING"}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {currentLocale === "zh" ? "实时卡通角色体验" : currentLocale === "ru" ? "Режим мультперсонажа" : currentLocale === "es" ? "Modo Personaje Animado" : currentLocale === "fr" ? "Expérience Personnage Animé" : "Live Character Experience"}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  {currentLocale === "zh" ? (
                    <>基于摄像头的实时卡通渲染模式，精准追踪访客面部特征，以<strong className="text-white">超低延迟</strong>将卡通造型叠加到实时画面中。</>
                  ) : currentLocale === "ru" ? (
                    <>Режим рендеринга мультяшного персонажа в реальном времени, когда камера отслеживает лицо посетителя с <strong className="text-white">ультранизкой задержкой</strong>.</>
                  ) : currentLocale === "es" ? (
                    <>Un modo de renderizado de personajes en tiempo real donde la cámara sigue el rostro del visitante con <strong className="text-white">ultra baja latencia</strong>.</>
                  ) : currentLocale === "fr" ? (
                    <>Un mode de rendu de personnage en temps réel où la caméra suit le visage du visiteur avec une <strong className="text-white">latence ultra-faible</strong>.</>
                  ) : (
                    <>A real-time cartoon/character rendering mode where the camera tracks a visitor's face and warps a stylized character design directly onto their live reflection at <strong className="text-white">ultra-low latency</strong>.</>
                  )}
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "动态表情形变：" : currentLocale === "ru" ? "Динамическая мимика:" : currentLocale === "es" ? "Deformación dinámica de expresiones:" : currentLocale === "fr" ? "Déformation dynamique des expressions :" : "Dynamic Expression Deformation:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "当访客微笑、眨眼或转头时，卡通皮肤完全同步延伸与变动。" : currentLocale === "ru" ? "При улыбке, моргании или повороте головы персонаж мгновенно повторяет движения." : currentLocale === "es" ? "Cuando el visitante sonríe, parpadea o gira la cabeza, la piel del personaje animado se mueve en perfecta sincronía." : currentLocale === "fr" ? "Lorsque le visiteur sourit, cligne des yeux ou tourne la tête, la peau du personnage animé bouge en parfaite synchronisation." : "As the visitor smiles, blinks, or turns their head, the cartoon character skin stretches and moves in perfect sync."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "零代码角色库：" : currentLocale === "ru" ? "Библиотека персонажей без кода:" : currentLocale === "es" ? "Biblioteca de personajes sin código:" : currentLocale === "fr" ? "Bibliothèque de personnages sans code :" : "No-Code Character Library:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "只需将新的角色头部资源放入库文件夹中，即可无需修改代码快速拓展角色。" : currentLocale === "ru" ? "Просто добавьте файлы персонажей в папку библиотеки без необходимости пересборки кода." : currentLocale === "es" ? "Añada nuevos recursos de personajes a la carpeta de la biblioteca para ampliar las opciones sin actualizar código." : currentLocale === "fr" ? "Déposez de nouveaux éléments de personnages dans le dossier pour élargir les choix sans mise à jour de code." : "Drop new character head assets into the library folder to instantly expand choices without software code updates."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>{currentLocale === "zh" ? "低延迟" : currentLocale === "ru" ? "НИЗКАЯ ЗАДЕРЖКА" : currentLocale === "es" ? "BAJA LATENCIA" : currentLocale === "fr" ? "FAIBLE LATENCE" : "LOW-LATENCY"}</span>
                <span className="text-emerald-400">{currentLocale === "zh" ? "实时面部网格" : currentLocale === "ru" ? "СЕТКА ЛИЦА В РЕАЛЬНОМ ВРЕМЕНИ" : currentLocale === "es" ? "MALLA FACIAL EN VIVO" : currentLocale === "fr" ? "MAILLAGE FACIAL EN DIRECT" : "LIVE FACE MESH"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT 2: TIERED VOICE SYNTHESIS & MULTILINGUAL */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "语音架构" : currentLocale === "ru" ? "Архитектура речи" : currentLocale === "es" ? "Arquitectura de voz" : currentLocale === "fr" ? "Architecture vocale" : "Voice Architecture"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "覆盖 29+ 语言的自然语音交互" : currentLocale === "ru" ? "Естественная речь на 29+ языках" : currentLocale === "es" ? "Voz natural en 29+ idiomas" : currentLocale === "fr" ? "Voix naturelle dans plus de 29 langues" : "Natural Voice Across 29+ Languages"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "DIHUAVA 提供自然、多语言的语音交互，具备端侧语音处理、区域语言支持与可定制的语音体验。" : currentLocale === "ru" ? "DIHUAVA обеспечивает естественное многоязычное голосовое взаимодействие с локальной обработкой речи." : currentLocale === "es" ? "DIHUAVA ofrece una interacción de voz multilingüe y natural con procesamiento de voz local y soporte de idiomas regionales." : currentLocale === "fr" ? "DIHUAVA offre une interaction vocale multilingue et naturelle avec traitement local de la parole et gestion des langues régionales." : "DIHUAVA delivers natural, multilingual voice interaction with local speech processing, regional language support, and customizable voice experiences."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {localizedVoiceCaps.map((tier: any, idx: number) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl hover:border-cyan-400/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 font-mono mb-4">
                    {tier.speed}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                  <p className="text-sm leading-6 text-gray-300">{tier.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
                  FEATURE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONA MANAGEMENT & ACOUSTIC PROFILES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Persona Types */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                {currentLocale === "zh" ? "角色管理" : currentLocale === "ru" ? "Управление персонажами" : currentLocale === "es" ? "Gestión de personas" : currentLocale === "fr" ? "Gestion des personas" : "Persona Management"}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {currentLocale === "zh" ? "为各行业定制 AI 数字人" : currentLocale === "ru" ? "Персонализированные AI-аватары для отраслей" : currentLocale === "es" ? "Digital Humans de IA personalizados para cada industria" : currentLocale === "fr" ? "Humains numériques IA personnalisés pour chaque industrie" : "Custom AI Digital Humans for Every Industry"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">
                {currentLocale === "zh" ? "企业可根据行业需求配置数字人的个性、沟通风格、语音行为、微表情姿态及品牌标识。" : currentLocale === "ru" ? "Предприятия настраивают цифровых аватаров с учетом отраслевой специфики, стиля общения и бренда." : currentLocale === "es" ? "Las organizaciones configuran humanos digitales con personalidades específicas, estilos de comunicación y marca corporativa." : currentLocale === "fr" ? "Les organisations configurent des humains numériques avec des personnalités, styles de communication et marque d'entreprise." : "Organizations configure digital humans with industry-specific personalities, communication styles, voice behavior, micro-gestures, and corporate branding."}
              </p>

              <div className="mt-8 space-y-4">
                {localizedPersonaProfiles.map((p: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-neutral-950 p-4 backdrop-blur-md"
                  >
                    <span className="text-2xl mt-0.5">{p.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-white">{p.title}</h4>
                      <p className="mt-1 text-xs leading-5 text-gray-400">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Custom AI Persona */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {currentLocale === "zh" ? "专属定制体验" : currentLocale === "ru" ? "ИНДИВИДУАЛЬНАЯ НАСТРОЙКА" : currentLocale === "es" ? "EXPERIENCIA A MEDIDA" : currentLocale === "fr" ? "EXPÉRIENCE SUR MESURE" : "TAILORED EXPERIENCE"}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {currentLocale === "zh" ? "定制 AI 角色" : currentLocale === "ru" ? "Кастомный AI-аватар" : currentLocale === "es" ? "Persona de IA personalizada" : currentLocale === "fr" ? "Persona IA personnalisé" : "Custom AI Persona"}
                </h3>

                <div className="mt-6 space-y-4">
                  {localizedCustomPersonaFeatures.map((feature: any, i: number) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <h4 className="text-sm font-semibold text-cyan-300 font-mono">{feature.title}</h4>
                      <p className="mt-1 text-xs text-gray-400">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP INNOVATION: VIRTUAL TRY-ON */}
      <section className="relative overflow-hidden bg-black px-6 py-20 border-b border-white/10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-neutral-950 to-black p-8 md:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 font-mono mb-4">
                {currentLocale === "zh" ? "🔬 研发路线图规划中" : currentLocale === "ru" ? "🔬 В АКТИВНОЙ РАЗРАБОТКЕ" : currentLocale === "es" ? "🔬 EN HOJA DE RUTA DE DESARROLLO" : currentLocale === "fr" ? "🔬 SUR LA FEUILLE DE ROUTE DE DÉVELOPPEMENT" : "🔬 IN ACTIVE DEVELOPMENT ROADMAP"}
              </div>
              <h3 className="text-3xl font-bold text-white">
                {currentLocale === "zh" ? "Virtual Try-On (虚拟试穿功能)" : currentLocale === "ru" ? "Virtual Try-On (Виртуальная примерка)" : currentLocale === "es" ? "Virtual Try-On (Prueba virtual de ropa)" : currentLocale === "fr" ? "Virtual Try-On (Essayage virtuel)" : "Virtual Try-On (Garment Fitting)"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300 max-w-2xl">
                {currentLocale === "zh" ? "正在研发的实时服装渲染功能，可让顾客在镜前实时预览服装、时尚及奢侈配饰的拟真试穿效果。" : currentLocale === "ru" ? "Активное направление R&D для отображения одежды и аксессуаров на зеркале в реальном времени." : currentLocale === "es" ? "Línea de I+D activa que evalúa el renderizado de prendas en tiempo real para visualizar ropa y accesorios en tiempo real." : currentLocale === "fr" ? "Projet R&D actif évaluant le rendu de vêtements en temps réel pour permettre aux clients de visualiser les vêtements et accessoires en temps réel." : "An active R&D workstream evaluating real-time garment rendering to allow shoppers to visualize retail apparel, fashion, and luxury accessories digitally overlaid on their reflection in real time."}
              </p>
            </div>
            <Link
              href={lPath("/contact")}
              className="shrink-0 rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold text-black hover:bg-cyan-400 transition-colors uppercase tracking-wider"
            >
              {currentLocale === "zh" ? "咨询路线图 →" : currentLocale === "ru" ? "Запросить планы →" : currentLocale === "es" ? "Consultar plan →" : currentLocale === "fr" ? "Consulter la feuille de route →" : "Inquire Roadmap →"}
            </Link>
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES: DIHUAVA VS CLOUD AI */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "为什么选择 DIHUAVA" : currentLocale === "ru" ? "Почему DIHUAVA" : currentLocale === "es" ? "Por qué DIHUAVA" : currentLocale === "fr" ? "Pourquoi DIHUAVA" : "Why DIHUAVA"}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {currentLocale === "zh" ? "为什么企业选择 DIHUAVA" : currentLocale === "ru" ? "Почему компании выбирают DIHUAVA" : currentLocale === "es" ? "Por qué las empresas eligen DIHUAVA" : currentLocale === "fr" ? "Pourquoi les entreprises choisissent DIHUAVA" : "Why Businesses Choose DIHUAVA"}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-neutral-950/90 shadow-2xl backdrop-blur-xl">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-cyan-950/60 font-mono text-xs uppercase text-cyan-300 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">{currentLocale === "zh" ? "功能特性" : currentLocale === "ru" ? "Функционал" : currentLocale === "es" ? "Característica" : currentLocale === "fr" ? "Fonctionnalité" : "Feature"}</th>
                  <th className="px-6 py-4 text-cyan-400">{currentLocale === "zh" ? "DIHUAVA 本地平台" : currentLocale === "ru" ? "Локальная платформа DIHUAVA" : currentLocale === "es" ? "Plataforma local DIHUAVA" : currentLocale === "fr" ? "Plateforme locale DIHUAVA" : "DIHUAVA Local Platform"}</th>
                  <th className="px-6 py-4 text-gray-400">{currentLocale === "zh" ? "传统云端架构" : currentLocale === "ru" ? "Типичная облачная архитектура" : currentLocale === "es" ? "Arquitectura en la nube típica" : currentLocale === "fr" ? "Architecture cloud typique" : "Typical Cloud Architecture"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-sans">
                {localizedComparisonTable.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-4 font-semibold text-cyan-300">{row.dihuava}</td>
                    <td className="px-6 py-4 text-gray-400">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TECHNICAL & PRODUCT SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "平台技术规格" : currentLocale === "ru" ? "Технические характеристики" : currentLocale === "es" ? "Especificaciones de la plataforma" : currentLocale === "fr" ? "Spécifications de la plateforme" : "Platform Specifications"}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {currentLocale === "zh" ? "DIHUAVA 企业级产品规格" : currentLocale === "ru" ? "Характеристики DIHUAVA Enterprise" : currentLocale === "es" ? "Especificaciones de DIHUAVA Enterprise" : currentLocale === "fr" ? "Spécifications produit DIHUAVA Enterprise" : "DIHUAVA Enterprise Product Specs"}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/80 backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {localizedProductSpecs.map((spec: any, i: number) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-2 px-6 py-4.5 sm:grid-cols-3 sm:gap-4 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-cyan-300 font-mono">
                    {spec.label}
                  </span>
                  <span className="text-sm text-gray-300 sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "常见解答" : currentLocale === "ru" ? "Ответы на вопросы" : currentLocale === "es" ? "Preguntas frecuentes" : currentLocale === "fr" ? "Questions fréquentes" : "Product Insights"}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              {currentLocale === "zh" ? "常见问题解答" : currentLocale === "ru" ? "Часто задаваемые вопросы" : currentLocale === "es" ? "Preguntas frecuentes" : currentLocale === "fr" ? "Foire aux questions" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="space-y-4">
            {localizedFaqs.map((faq: any, idx: number) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-cyan-400 font-mono text-lg ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm leading-7 text-gray-300 border-t border-white/10 mt-2 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SINGLE CALL TO ACTION SECTION */}
      <CTA
        badgeText={
          currentLocale === "zh"
            ? "构建未来 AI 交互"
            : currentLocale === "ru"
            ? "Создавайте будущее с AI"
            : currentLocale === "es"
            ? "Construya el futuro con IA"
            : currentLocale === "fr"
            ? "Construisez l'avenir avec l'IA"
            : "Build the Future with AI"
        }
        title={
          currentLocale === "zh"
            ? "准备好部署您的"
            : currentLocale === "ru"
            ? "Готовы развернуть вашего"
            : currentLocale === "es"
            ? "¿Listo para desplegar su"
            : currentLocale === "fr"
            ? "Prêt à déployer votre"
            : "Ready to Deploy Your"
        }
        highlightTitle={
          currentLocale === "zh"
            ? "AI 数字人了吗？"
            : currentLocale === "ru"
            ? "AI-аватара?"
            : currentLocale === "es"
            ? "IA Digital Human?"
            : currentLocale === "fr"
            ? "IA Digital Human ?"
            : "AI Digital Human?"
        }
        description={
          currentLocale === "zh"
            ? "为您的零售门店、企业前台、医疗机构或公共场所带来 29+ 多语言、私密且互动的 AI 体验。"
            : currentLocale === "ru"
            ? "Внедрите многоязычные, защищенные и интерактивные AI-аватары в ваш бизнес, ритейл или медицинский центр."
            : currentLocale === "es"
            ? "Lleve experiencias de IA multilingües, privadas e interactivas a su espacio comercial, empresa, centro de salud o espacio público."
            : currentLocale === "fr"
            ? "Apportez des expériences IA multilingues, privées et interactives à votre espace de vente, entreprise, établissement de santé ou lieu public."
            : "Bring 29+ multilingual, private, and interactive AI experiences to your retail space, corporate environment, healthcare facility, or public venue."
        }
        primaryButtonText={
          currentLocale === "zh"
            ? "预约演示"
            : currentLocale === "ru"
            ? "Забронировать демо"
            : currentLocale === "es"
            ? "Reservar una demo"
            : currentLocale === "fr"
            ? "Réserver une démo"
            : "Book a Demo"
        }
        primaryButtonHref="/contact"
        secondaryButtonText={
          currentLocale === "zh"
            ? "下载产品规格书"
            : currentLocale === "ru"
            ? "Скачать спецификацию"
            : currentLocale === "es"
            ? "Descargar ficha del producto"
            : currentLocale === "fr"
            ? "Télécharger la fiche produit"
            : "Download Product Datasheet"
        }
        secondaryButtonHref="/contact/download-center"
      />
      <Footer />
    </main>
  );
}
