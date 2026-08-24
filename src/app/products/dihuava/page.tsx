"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// CORE PLATFORM SUBSYSTEMS
const coreModules = [
  {
    id: "selfie-engine",
    title: "Selfie With Avatar Engine",
    subtitle: "Instant On-Device Photo Compositing",
    description:
      "Visitors tap Selfie on the display to capture a photo standing beside the AI Avatar. Features deterministic sub-second face-scale matching, 6 creative filters (Realistic, Original, B&W, Vivid, Warm, Cool), and optional QR phone sharing with 24-hour auto-expiring links.",
    icon: "📸",
    badge: "Interactive Photo Experience",
    highlights: [
      "Sub-second (~300–400ms) local compositing",
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
    icon: "🎭",
    badge: "Real-Time Face Tracking",
    highlights: [
      "50–100ms real-time camera face tracking",
      "Live expression & blink deformation",
      "No-code character library expansion",
      "High-engagement exhibition draw",
    ],
  },
  {
    id: "product-catalog",
    title: "AI Product Catalog System",
    subtitle: "CSV-Driven Recommendation Engine",
    description:
      "Converts product catalog CSVs into an intelligent spoken recommendation system. Displays interactive product cards, price filtering, and automatic audio-visual synchronization so the avatar only discusses products currently on screen.",
    icon: "🛍️",
    badge: "Smart Recommendation",
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
    icon: "⚡",
    badge: "100% Offline RAG",
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
    subtitle: "29+ Languages & Brand Voice Matching",
    description:
      "Full on-device speech recognition, voice synthesis, and translation across 29+ languages. Includes dedicated low-latency engines for 7 Indian languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati) and automatic per-persona voice cloning.",
    icon: "🌐",
    badge: "29+ Local Languages",
    highlights: [
      "100% local speech recognition & TTS",
      "Dedicated 7 Indian language fast tier",
      "Automatic per-persona voice cloning",
      "Localized currency & number speech",
    ],
  },
  {
    id: "airgap-privacy",
    title: "Enterprise Air-Gap Privacy",
    subtitle: "100% On-Device Data Security",
    description:
      "Engineered for highly regulated enterprise environments (banking, defense, healthcare). All voice computations, LLM dialogues, document searches, and photo compositing occur locally on physical edge hardware.",
    icon: "🔒",
    badge: "Air-Gap Compliance",
    highlights: [
      "100% local hardware processing",
      "GDPR, PDPA & HIPAA-friendly",
      "Zero voice data transmission",
      "Cryptographic device licensing",
    ],
  },
];

// ARCHITECTURAL PILLARS
const archPillars = [
  {
    title: "AI Engine Subsystems",
    desc: "Local Conversational Engine, Speech Recognition, Tiered Voice Synthesis, Machine Translation, and Semantic Search RAG.",
    icon: "🧠",
  },
  {
    title: "Digital Avatar Renderer",
    desc: "3D facial mesh rendering, lip synchronization, micro-expressions, posture control, and persona identity management.",
    icon: "👤",
  },
  {
    title: "Knowledge & Catalog Engine",
    desc: "RAG indexer with relevance reranking, 9-column product CSV catalog, and automatic vocabulary generation.",
    icon: "📚",
  },
  {
    title: "Universal Hardware Layer",
    desc: "3D Hologram Boxes, touch displays, 4K camera tracking, dual microphone arrays, and local GPU workstations.",
    icon: "🖥️",
  },
];

// VOICE SYNTHESIS TIERS
const voiceTiers = [
  {
    name: "Fast English-Tuned Tier",
    speed: "3x Faster Synthesis",
    desc: "Optimized for natural English speech with expressive audible reactions like laughs and conversational cadence.",
  },
  {
    name: "Dedicated 7 Indian Languages Tier",
    speed: "40ms Translation Latency",
    desc: "Specialized model for Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati with localized lakh/crore numbering.",
  },
  {
    name: "General Multilingual Tier",
    speed: "22 Global Languages",
    desc: "Covers Mandarin Chinese, Arabic, Spanish, French, German, Japanese, Korean, Russian, Turkish, and European languages.",
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

// ACOUSTIC ENVIRONMENT PROFILES
const acousticProfiles = [
  {
    name: "Indoor Patient Profile",
    desc: "Calibrated for quiet executive lounges, private bank offices, and medical clinics with gentle voice sensitivity.",
  },
  {
    name: "Indoor Responsive Profile",
    desc: "Optimized for corporate lobbies, retail stores, and campus centers with balanced noise cancellation.",
  },
  {
    name: "Outdoor Patient Profile",
    desc: "Tuned for high ambient noise exhibition halls, airport terminals, and shopping mall corridors with aggressive VAD.",
  },
];

// HARDWARE HOLOGRAPHIC ENCLOSURES
const hologramModels = [
  { model: "HS55OTB", size: "55-Inch", resolution: "4K UHD (2160 × 3840)", aspect: "9:16 Portrait" },
  { model: "HS65OTB", size: "65-Inch", resolution: "4K UHD (2160 × 3840)", aspect: "9:16 Portrait" },
  { model: "HS75OTB", size: "75-Inch", resolution: "4K UHD (2160 × 3840)", aspect: "9:16 Portrait" },
  { model: "HS86OTB", size: "86-Inch", resolution: "4K UHD (2160 × 3840)", aspect: "9:16 Portrait" },
];

// COMPARISON MATRIX
const comparisonTable = [
  { feature: "AI Voice & Conversation", dihuava: "100% Local On-Device", cloud: "Cloud API Dependent" },
  { feature: "Internet Dependency", dihuava: "Not Required (Air-Gapped)", cloud: "Mandatory Active Connection" },
  { feature: "Voice Data Privacy", dihuava: "Zero Cloud Voice Transmission", cloud: "External Cloud Processing" },
  { feature: "Multilingual Engine", dihuava: "29+ Languages Fully Local", cloud: "Cloud Voice API Required" },
  { feature: "Selfie With Avatar", dihuava: "Sub-Second Local Compositing", cloud: "Slow Cloud Generation" },
  { feature: "Live Character Mode", dihuava: "Real-Time 50-100ms Face Track", cloud: "High Latency or Unsupported" },
  { feature: "Regulatory Compliance", dihuava: "GDPR, PDPA & HIPAA-Friendly", cloud: "Complex Cloud Compliance" },
];

// INDUSTRY USE CASES
const industryUseCases = [
  {
    title: "Banking & Financial Services",
    icon: "🏦",
    description:
      "Deploy air-gapped avatar bankers in VIP lounges for onboarding, loan disclosures, and queue management without cloud data risk.",
  },
  {
    title: "Retail & Shopping Malls",
    icon: "🛍️",
    description:
      "Boost store footfall with AI product recommendation catalogs, Virtual Try-On previews, and Selfie With Avatar engagement.",
  },
  {
    title: "Corporate Lobbies & HR",
    icon: "🏢",
    description:
      "Automate visitor check-in, issue visitor badges, and answer employee policy queries with 24/7 holographic receptionists.",
  },
  {
    title: "Healthcare & Hospitals",
    icon: "🏥",
    description:
      "Guide patients through hospital departments, triage intake symptoms, and explain pre/post-op care in 30+ languages.",
  },
  {
    title: "Tourism & Museum Exhibits",
    icon: "🏛️",
    description:
      "Bring historical figures and cultural docents to life with 3D hologram storytelling, multilingual Q&A, and interactive photo souvenirs.",
  },
  {
    title: "Education & Campus Academies",
    icon: "🎓",
    description:
      "Engage students with 3D hologram STEM tutors, virtual lab safety instructors, and 24/7 campus admissions guides.",
  },
];

// PRODUCT SPECS
const productSpecs = [
  { label: "Core AI Architecture", value: "Fully Local On-Device Voice & Conversation Platform" },
  { label: "Supported Languages", value: "29 Languages Fully Local (7 Dedicated Indian Languages + 22 Global)" },
  { label: "Speech & Voice Engine", value: "Tiered On-Device Speech Recognition & Synthesis with Voice Cloning" },
  { label: "Document RAG Support", value: "On-Device Vector Search + Relevance Reranker (PDF, TXT, CSV, MD)" },
  { label: "Product Catalog Engine", value: "9-Column Feature-Row Schema with Audio-Visual Screen Card Sync" },
  { label: "Photo & Cartoon Modules", value: "Selfie With Avatar (Filter & QR Share) + Live Character Mode" },
  { label: "Concurrency & Capacity", value: "Up to 10 Concurrent Sessions per Kiosk / Unlimited Daily Interactions" },
  { label: "Display Enclosure Specs", value: "4K Ultra HD Volumetric Glass (55\", 65\", 75\", 86\" Hologram Enclosures)" },
];

// FREQUENTLY ASKED QUESTIONS
const faqs = [
  {
    q: "Does DIHUAVA require internet connectivity?",
    a: "No. The full 29-language voice pipeline, document RAG, product catalog, Selfie compositing, and Live Character rendering run completely offline on local hardware. Internet is only optionally used if an administrator enables Selfie QR cloud sharing.",
  },
  {
    q: "How many languages are supported on-device?",
    a: "29 languages fully local, including 7 dedicated Indian languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati) and 22 global languages (English, Mandarin, Arabic, Spanish, French, German, Japanese, etc.).",
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
    a: "Selfie With Avatar allows visitors to tap Selfie on screen and instantly capture a photo standing next to the avatar. Sub-second compositing matches face size and vertical height, applies creative filters, and generates a 24-hour QR share link.",
  },
  {
    q: "What is Live Character Experience?",
    a: "Live Character Experience is a real-time cartoon face mode. The camera tracks visitor facial movements (smiles, blinks, head turns) and warps a stylized character skin directly onto their face at 50–100ms ultra-low latency.",
  },
];

export default function DihuavaProductPage() {
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
                DIHUAVA AI Digital Human{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  Avatar Platform.
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                An enterprise-grade, local-first Digital Human platform engineered for 3D Hologram Boxes, touch kiosks, and smart displays. Delivers real-time 29+ language speech, on-device document RAG, AI product catalog recommendations, Selfie With Avatar photo sharing, and Live Cartoon Face rendering with 100% air-gapped privacy.
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
                  🌐 29+ Local Languages
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  📸 Selfie With Avatar
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  🎭 Live Cartoon Mode
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
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">29+</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">Local Voice Languages</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">0%</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">Cloud Data Leakage</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">~300ms</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">Selfie Compositing</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">10</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">Concurrent Sessions</p>
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
              Built on 4 Edge Architecture Pillars
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Dihuava operates via an integrated local-first model where conversational AI, rendering, knowledge indexing, and hardware interaction function harmoniously on physical edge workstations.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {archPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950 text-3xl mb-6">
                    {pillar.icon}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-gray-300">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
                  PILLAR 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PLATFORM SUBSYSTEMS GRID (6 MODULES) */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Core Platform Subsystems
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              6 Intelligent Modules. 1 Integrated Local AI.
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Dihuava combines conversational intelligence, document indexing, product recommendations, voice cloning, and interactive media modules into one privacy-first edge platform.
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
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/40 text-2xl">
                      {module.icon}
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
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-950 text-3xl">
                    📸
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
                <span>SPEED: ~300-400ms</span>
                <span className="text-emerald-400">24-HR AUTO DELETE</span>
              </div>
            </div>

            {/* Live Character Feature Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-950 text-3xl">
                    🎭
                  </span>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      REAL-TIME FACE TRACKING
                    </span>
                    <h3 className="text-2xl font-bold text-white">Live Character Experience</h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  A real-time cartoon/character rendering mode where the camera tracks a visitor's face and warps a stylized character design directly onto their live reflection at <strong className="text-white">50–100ms ultra-low latency</strong>.
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
                <span>LATENCY: 50-100ms</span>
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
              3-Tiered Voice Synthesis Engine
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Dihuava uses a tiered speech synthesis pipeline matched to language families, delivering expressive natural voice output with automatic voice cloning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {voiceTiers.map((tier, idx) => (
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
                  TIER 0{idx + 1}
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
                Specialized Avatars for Every Industry
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

            {/* Right: Acoustic Profiles */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  ENVIRONMENT ENGINE
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  3 Built-In Acoustic Profiles
                </h3>
                <p className="mt-3 text-sm text-gray-300">
                  Tune voice detection sensitivity, microphone gain, noise thresholds, and response timing to match physical room acoustics.
                </p>

                <div className="mt-6 space-y-4">
                  {acousticProfiles.map((ac, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <h4 className="text-sm font-semibold text-cyan-300 font-mono">{ac.name}</h4>
                      <p className="mt-1 text-xs text-gray-400">{ac.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE HOLOGRAPHIC ENCLOSURES */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Display Hardware Integration
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Holographic Display Enclosures
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Dihuava powers 3D Hologram Boxes with optical glass enclosures, high-transmittance glass, and integrated multi-sensor hardware.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hologramModels.map((h, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-black/80 p-6 backdrop-blur-md text-center hover:border-cyan-400/40 transition-colors"
              >
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                  MODEL {h.model}
                </span>
                <p className="text-3xl font-extrabold text-white mb-2">{h.size}</p>
                <div className="space-y-1 text-xs text-gray-400 font-mono">
                  <p>{h.resolution}</p>
                  <p>{h.aspect}</p>
                  <p className="text-emerald-400">60Hz Refresh Rate</p>
                </div>
              </div>
            ))}
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

      {/* INDUSTRY DEPLOYMENT SHOWCASE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Enterprise Verticals
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Proven Across Every Industry
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/15 bg-black/80 p-6 backdrop-blur-md hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{useCase.icon}</span>
                  <h3 className="text-lg font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-xs leading-6 text-gray-300">
                  {useCase.description}
                </p>
              </div>
            ))}
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
              DIHUAVA Edge AI vs Cloud AI Systems
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-neutral-950/90 shadow-2xl backdrop-blur-xl">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-cyan-950/60 font-mono text-xs uppercase text-cyan-300 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">Platform Feature</th>
                  <th className="px-6 py-4 text-cyan-400">DIHUAVA Local Platform</th>
                  <th className="px-6 py-4 text-gray-400">Cloud-Based Competitors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-sans">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-4 font-semibold text-cyan-300">✓ {row.dihuava}</td>
                    <td className="px-6 py-4 text-gray-400">✕ {row.cloud}</td>
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

      {/* DOWNLOAD BROCHURES & DOCS */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to deploy DIHUAVA AI Digital Humans?
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Access product documentation, technical whitepapers, and hardware integration specs in our Download Center.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Contact Enterprise Sales →
            </Link>
            <Link
              href="/contact/download-center"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
            >
              Go to Download Center
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
