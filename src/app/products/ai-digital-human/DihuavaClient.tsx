"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

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

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[850px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href="/products" className="hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">DIHUAVA Platform</span>
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
                  Flagship Local AI Platform
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                AI Digital Humans Built for{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  Real-World Customer Interaction.
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                DIHUAVA is an enterprise AI Digital Human software platform powering interactive digital humans that communicate naturally, understand your business knowledge, speak multiple languages, and run locally across interactive kiosks, <Link href="/products/holographic-display" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Boxes</Link>, and <Link href="/products/spatial-display" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Displays</Link>.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  Request DIHUAVA Demo →
                </Link>
                <Link
                  href="/contact/download-center"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  Download Documentation (PDF)
                </Link>
              </div>

              {/* Quick Feature Badges */}
              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  🔒 100% Offline Air-Gapped
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  🌐 29+ Global Languages
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  📸 Selfie With Avatar
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  🎭 Live Cartoon Mode
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  🧠 Brain Clone (In Dev)
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
                      <span className="text-emerald-400">STATUS: 100% LOCAL</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-300">
                      On-Device Speech, Voice Cloning, PDF RAG & Photo Compositing Active
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
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">Global Languages</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">100%</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">On-Device Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL LAYERS SECTION */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              System Architecture
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Eight Core Technologies Powering Dihuava
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Dihuava operates via an integrated local-first model where conversational AI, rendering, multilingual speech, vision, and hardware interaction function harmoniously on physical edge workstations.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {archPillars.map((pillar, idx) => (
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
              Simple 4-Step Process
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              How Dihuava Works
            </h2>
            <p className="mt-4 text-base text-gray-400">
              A seamless end-to-end edge pipeline powering human-like interactions without cloud dependencies.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((item, idx) => (
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
              Core Platform Subsystems
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              7 Intelligent Modules. 1 Integrated Local AI.
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Everything your digital human needs to understand, communicate, recommend, and interact — running locally on the edge.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreModules.map((module) => (
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
                  {module.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-cyan-400">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {module.featureUrl && (
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={module.featureUrl}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:underline font-mono"
                    >
                      <span>View Deep Dive Specs</span>
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
              Next-Gen Visitor Engagement
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Selfie & Live Character Experiences
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Elevate physical venue engagement beyond speech with instant on-device photography and real-time facial cartoon warping.
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
                      ON-DEVICE COMPOSITING
                    </span>
                    <h3 className="text-2xl font-bold text-white">Selfie With Avatar</h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  Visitors tap <strong className="text-white">Selfie</strong> on the kiosk to pose beside the AI avatar. In under a second (~300–400ms), the system performs deterministic on-device face scaling and height matching to produce a realistic composite photo.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">Instant Photographic Filters:</span>
                    <p className="mt-1 text-gray-400">Realistic (default), Original, Black & White, Vivid, Warm, and Cool.</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">QR Code Phone Sharing:</span>
                    <p className="mt-1 text-gray-400">Visitors scan an on-screen QR code to download their photo. Links automatically expire in 24 hours, keeping data private.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>FAST ON-DEVICE PROCESSING</span>
                <span className="text-emerald-400">24-HR AUTO DELETE</span>
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
                      REAL-TIME FACE TRACKING
                    </span>
                    <h3 className="text-2xl font-bold text-white">Live Character Experience</h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  A real-time cartoon/character rendering mode where the camera tracks a visitor's face and warps a stylized character design directly onto their live reflection at <strong className="text-white">ultra-low latency</strong>.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">Dynamic Expression Deformation:</span>
                    <p className="mt-1 text-gray-400">As the visitor smiles, blinks, or turns their head, the cartoon character skin stretches and moves in perfect sync.</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">No-Code Character Library:</span>
                    <p className="mt-1 text-gray-400">Drop new character head assets into the library folder to instantly expand choices without software code updates.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>LOW-LATENCY</span>
                <span className="text-emerald-400">LIVE FACE MESH</span>
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
              Voice Architecture
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Natural Voice Across 29+ Languages
            </h2>
            <p className="mt-4 text-base text-gray-400">
              DIHUAVA delivers natural, multilingual voice interaction with local speech processing, regional language support, and customizable voice experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {voiceCapabilities.map((tier, idx) => (
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
                Persona Management
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Custom AI Digital Humans for Every Industry
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">
                Organizations configure digital humans with industry-specific personalities, communication styles, voice behavior, micro-gestures, and corporate branding.
              </p>

              <div className="mt-8 space-y-4">
                {personaProfiles.map((p, idx) => (
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
                  TAILORED EXPERIENCE
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Custom AI Persona
                </h3>

                <div className="mt-6 space-y-4">
                  {customPersonaFeatures.map((feature, i) => (
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
                🔬 IN ACTIVE DEVELOPMENT ROADMAP
              </div>
              <h3 className="text-3xl font-bold text-white">Virtual Try-On (Garment Fitting)</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300 max-w-2xl">
                An active R&D workstream evaluating real-time garment rendering to allow shoppers to visualize retail apparel, fashion, and luxury accessories digitally overlaid on their reflection in real time.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold text-black hover:bg-cyan-400 transition-colors uppercase tracking-wider"
            >
              Inquire Roadmap →
            </Link>
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES: DIHUAVA VS CLOUD AI */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Why DIHUAVA
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Businesses Choose DIHUAVA
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-neutral-950/90 shadow-2xl backdrop-blur-xl">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-cyan-950/60 font-mono text-xs uppercase text-cyan-300 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4 text-cyan-400">DIHUAVA Local Platform</th>
                  <th className="px-6 py-4 text-gray-400">Typical Cloud Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-sans">
                {comparisonTable.map((row, idx) => (
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
              Platform Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              DIHUAVA Enterprise Product Specs
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/80 backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {productSpecs.map((spec, i) => (
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
              Product Insights
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
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
        badgeText="Build the Future with AI"
        title="Ready to Deploy Your"
        highlightTitle="AI Digital Human?"
        description="Bring 29+ multilingual, private, and interactive AI experiences to your retail space, corporate environment, healthcare facility, or public venue."
        primaryButtonText="Book a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Download Product Datasheet"
        secondaryButtonHref="/contact/download-center"
      />
      <Footer />
    </main>
  );
}
