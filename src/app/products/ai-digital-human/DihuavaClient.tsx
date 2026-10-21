"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

import {
  Camera,
  Sparkles,
  ShoppingBag,
  Zap,
  Globe2,
  ShieldCheck,
  Cpu,
  User,
  BookOpen,
  Brain,
  Lock,
  HeartPulse,
  Building2,
  Plus,
  ArrowRight,
  CheckCircle2,
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
    icon: Globe2,
    badge: "29+ Global Languages",
    featureUrl: "/products/ai-digital-human",
    highlights: [
      "Auto language switching without touch input",
      "Low latency voice generation",
      "Local offline inference capability",
      "Signature brand voice cloning",
    ],
  },
  {
    id: "custom-avatar-studio",
    title: "Custom Avatar Studio",
    subtitle: "Personalized Digital Human Personas",
    description:
      "Choose from professional digital avatars or build custom 3D character avatars with customized brand attire, personalized acoustic profiles, unique conversational tone, and corporate styling.",
    icon: User,
    badge: "Avatar Studio",
    featureUrl: "/products/ai-digital-human/avatar-customization",
    highlights: [
      "Catalog of enterprise personas",
      "Brand attire, color & styling customization",
      "Configurable conversational tone & personality",
      "Custom speech reference voice cloning",
    ],
  },
  {
    id: "brain-clone",
    title: "Brain Clone (In Dev)",
    subtitle: "Digital Persona Knowledge Twin",
    description:
      "A long-term digital persona preservation architecture designed to index personal histories, philosophies, corporate executive knowledge bases, and distinctive speech patterns into an interactive digital twin.",
    icon: Brain,
    badge: "Active R&D",
    featureUrl: "/products/ai-digital-human/avatar-customization",
    highlights: [
      "Long-term knowledge base indexing",
      "Executive knowledge preservation",
      "Personal voice & conversational twin",
      "Air-gapped private offline storage",
    ],
  },
];

// ARCHITECTURAL PILLARS
const architecturalPillars = [
  {
    title: "Digital Avatar Renderer",
    desc: "3D facial mesh rendering, real-time lip synchronization, micro-expressions, posture control, and persona identity management.",
    icon: User,
  },
  {
    title: "29+ Multilingual Speech Engine",
    desc: "Real-time speech recognition & synthesis across 29+ global languages and major regional dialects with instant auto-switch.",
    icon: Globe2,
  },
  {
    title: "Knowledge & Catalog RAG Engine",
    desc: "Air-gapped local vector indexer with cross-encoder reranking, multi-column CSV catalog import, and auto vocabulary generation.",
    icon: BookOpen,
  },
  {
    title: "Low-Latency Edge Pipeline",
    desc: "High-speed local stream architecture delivering end-to-end conversational response times with low latency for fluid dialogue.",
    icon: Zap,
  },
  {
    title: "Computer Vision & Face Tracking",
    desc: "Wide-angle camera face tracking, eye-gaze direction sensing, visitor posture tracking, and presence detection array.",
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
  {
    title: "Hardware Edge Acceleration",
    desc: "Optimized for local NVIDIA RTX GPU acceleration with unified VRAM execution across speech, LLM, and rendering models.",
    icon: Cpu,
  },
];

// HOW DIHUAVA WORKS STEPS
const howItWorksSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "Voice input, documents, product catalogs, and visitor questions are processed locally on the edge.",
    badge: "Local Data Input",
  },
  {
    step: "02",
    title: "Think",
    desc: "The local AI engine retrieves relevant knowledge and generates a grounded response with strict guardrails.",
    badge: "On-Device AI",
  },
  {
    step: "03",
    title: "Speak",
    desc: "Text is converted to natural speech in the visitor's detected language using voice cloning models.",
    badge: "Multilingual Voice",
  },
  {
    step: "04",
    title: "Interact",
    desc: "The digital human moves, speaks with lip sync, and presents visual cards on the display in real time.",
    badge: "Real-Time Avatar",
  },
];

// VOICE SYNTHESIS TIERS
const voiceCapabilities = [
  {
    name: "Ultra-Fast Local TTS",
    speed: "Sub-Second Latency",
    desc: "Optimized for high-throughput public kiosks and fast question-answering with immediate vocal replies.",
  },
  {
    name: "Expressive Conversational Voice",
    speed: "Empathetic Cadence",
    desc: "Optimized for natural customer service with audible warmth, realistic pauses, and fluid conversational cadence.",
  },
  {
    name: "29+ Global Language Adaptation",
    speed: "Localized Speech",
    desc: "Specialized neural models for international and regional accents with localized phrasing and numbering.",
  },
];

// PERSONA TYPES (WITH LUCIDE ICONS, ZERO EMOJIS)
const personaProfiles = [
  {
    title: "Retail Sales Ambassador",
    desc: "Proactive product recommendations, cross-selling, promotional announcements, and interactive product exploration (garment fitting on active R&D roadmap).",
    icon: ShoppingBag,
  },
  {
    title: "Healthcare Patient Assistant",
    desc: "Empathetic hospital wayfinding, administrative patient intake assistance, appointment scheduling, and clinic guidance.",
    icon: HeartPulse,
  },
  {
    title: "Corporate Receptionist",
    desc: "Visitor check-in, guest badge issuance, host notifications, workplace wayfinding, and employee HR policy Q&A.",
    icon: Building2,
  },
  {
    title: "Custom Brand Avatar",
    desc: "Custom 3D character mesh, corporate wardrobe, custom voice cloning reference, and branded interaction style.",
    icon: Sparkles,
  },
];

const customPersonaFeatures = [
  {
    title: "Appearance",
    desc: "Create a digital human avatar aligned with your brand visual identity and attire.",
  },
  {
    title: "Voice",
    desc: "Use multilingual voices or a cloned corporate ambassador voice profile.",
  },
  {
    title: "Personality",
    desc: "Configure communication tone, empathy level, and domain response style.",
  },
];

const comparisonTable = [
  {
    feature: "Data Privacy & Security",
    dihuava: "100% On-device local execution, air-gapped, zero external pings",
    cloud: "Data sent to external cloud servers, third-party logging risk",
  },
  {
    feature: "Internet Dependency",
    dihuava: "Zero internet required. Operates reliably during outages",
    cloud: "Requires constant high-bandwidth internet connectivity",
  },
  {
    feature: "Conversational Latency",
    dihuava: "Local GPU execution eliminates cloud network round-trips",
    cloud: "Subject to network packet latency and cloud server queue delays",
  },
  {
    feature: "Operating Cost Model",
    dihuava: "One-time hardware license, zero recurring per-token cloud fees",
    cloud: "Unpredictable per-token and per-minute recurring API charges",
  },
];

const productSpecs = [
  { label: "Deployment Modes", value: "3D Hologram Cabinets, Spatial Displays, Touchscreen Kiosks" },
  { label: "Language Coverage", value: "29+ Global Languages with Automatic Language Detection" },
  { label: "Security Architecture", value: "100% Air-Gapped Local Edge Execution (Zero Cloud Data Leakage)" },
  { label: "Voice Features", value: "Sub-Second TTS, Voice Cloning, Dynamic Real-Time Lip Sync" },
  { label: "Knowledge Formats", value: "PDF, CSV Catalogs, Markdown, Plain Text with Local RAG" },
  { label: "Hardware Hosting", value: "Local NVIDIA RTX GPU Workstation (On-Premise)" },
];

const faqs = [
  {
    q: "Can DIHUAVA operate completely without an internet connection?",
    a: "Yes. DIHUAVA is engineered from the ground up for 100% air-gapped operation. Speech recognition, document retrieval (RAG), LLM reasoning, voice synthesis, and 3D facial rendering execute entirely on local GPU edge hardware.",
  },
  {
    q: "Is visitor voice or conversation data transmitted to the cloud?",
    a: "Zero voice or conversation data is sent to external servers. All AI processing occurs locally on physical edge hardware, supporting GDPR, PDPA, and HIPAA privacy principles through complete local data residency.",
  },
  {
    q: "Can we clone our own corporate brand voice?",
    a: "Yes. Custom persona packages can include short reference audio recordings. The platform clones the persona's voice automatically across multilingual synthesis tiers with no manual voice-training step.",
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

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[var(--lp-muted)] mb-6">
            <Link href={lPath("/products")} className="hover:text-[var(--lp-ink)] transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-[var(--lp-ink)] font-semibold">DIHUAVA Platform</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                  Flagship On-Premise AI Platform
                </span>
              </div>

              <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
                AI Digital Humans Built for{" "}
                <span className="text-[var(--lp-muted)]">
                  Physical Customer Presence.
                </span>
              </h1>

              <p className="mt-5 text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]">
                DIHUAVA is our enterprise AI Digital Human software platform powering interactive avatars that communicate naturally, understand your product catalog, speak 29+ global languages, and run 100% offline on local GPU hardware across interactive kiosks, 3D hologram boxes, and spatial displays.
              </p>

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={lPath("/contact")}
                  className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                >
                  <span>Request DIHUAVA Demo</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Download Architecture PDF</span>
                </Link>
              </div>

              {/* QUICK FEATURE BADGES (ZERO EMOJIS, CLEAN ICONS) */}
              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-[var(--lp-line)]">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                  <Lock className="h-3 w-3 text-[var(--lp-ink)]" />
                  100% Offline Air-Gapped
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                  <Globe2 className="h-3 w-3 text-[var(--lp-accent)]" />
                  29+ Global Languages
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                  <Camera className="h-3 w-3 text-[var(--lp-ink)]" />
                  Selfie With Avatar
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                  <Sparkles className="h-3 w-3 text-[var(--lp-accent)]" />
                  Live Cartoon Mode
                </span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-3 shadow-[var(--lp-shadow-card)]">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#0B1224]">
                  <Image
                    src="/products/digital-humans/digital-human-dashboard.jpg"
                    alt="DIHUAVA AI Digital Human Platform Dashboard"
                    fill
                    priority
                    className="object-contain w-full h-full p-2"
                  />
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-[var(--lp-line)] bg-white/90 p-3 backdrop-blur-md shadow-xs">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[var(--lp-ink)]">DIHUAVA ON-PREMISE ENGINE</span>
                      <span className="font-semibold text-[#16a34a]">STATUS: 100% LOCAL</span>
                    </div>
                    <p className="mt-0.5 text-xs text-[var(--lp-muted)]">
                      Local Speech, Voice Cloning, Document RAG &amp; 3D Lip Sync Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS COUNTER BAR */}
      <section className="px-4 py-12 sm:px-6 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
              <p className="text-3xl font-extrabold text-[var(--lp-accent)]">29+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">Global Languages</p>
            </div>
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
              <p className="text-3xl font-extrabold text-[var(--lp-ink)]">100%</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">Air-Gapped Offline</p>
            </div>
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
              <p className="text-3xl font-extrabold text-[var(--lp-accent)]">&lt;800ms</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">Vocal Response Time</p>
            </div>
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
              <p className="text-3xl font-extrabold text-[#16a34a]">70%</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">Staffing Cost Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL LAYERS SECTION */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Unified Subsystem Architecture
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Eight Core Technologies Powering DIHUAVA
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              DIHUAVA operates via an integrated local-first model where conversational AI, rendering, multilingual speech, vision, and hardware drivers execute harmoniously on physical edge workstations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {architecturalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs mb-5">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-lg font-bold text-[var(--lp-ink)] mb-2">{pillar.title}</h3>
                    <p className="text-xs leading-relaxed text-[var(--lp-ink-2)]">{pillar.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[var(--lp-line)] text-xs text-[var(--lp-muted)]">
                    PILLAR 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW DIHUAVA WORKS SECTION */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Real-Time Conversational Flow
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              How DIHUAVA Powers AI Digital Humans
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              A seamless end-to-end edge pipeline powering human-like interactions without cloud latency or security vulnerabilities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((item) => (
              <div
                key={item.step}
                className="group flex flex-col justify-between rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 shadow-[var(--lp-shadow-card)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold text-[var(--lp-accent)]">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-[var(--lp-tile)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--lp-muted)]">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--lp-ink)] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[var(--lp-ink-2)]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[var(--lp-line)] flex items-center justify-between text-xs font-semibold text-[var(--lp-accent-ink)]">
                  <span>{item.badge}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PLATFORM SUBSYSTEMS GRID (7 MODULES) */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Complete Modular Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              7 Intelligent Modules. 1 Integrated Local AI.
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              Everything your digital human needs to understand, communicate, recommend, and interact—running locally on the edge.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreModules.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.id}
                  className="group flex flex-col justify-between rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-7 shadow-xs hover:shadow-[var(--lp-shadow-card)] transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </span>
                      <span className="rounded-full bg-[rgba(255,90,31,0.08)] px-3 py-1 text-[11px] font-semibold text-[var(--lp-accent-ink)]">
                        {module.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--lp-ink)]">
                      {module.title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--lp-muted)] font-medium">
                      {module.subtitle}
                    </p>

                    <p className="mt-3.5 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-1.5 border-t border-[var(--lp-line)] pt-4">
                    {module.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[var(--lp-ink-2)]">
                        <CheckCircle2 className="h-3 w-3 text-[var(--lp-accent)] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {module.featureUrl && (
                    <div className="mt-5 pt-3 border-t border-[var(--lp-line)]">
                      <Link
                        href={lPath(module.featureUrl)}
                        className="group/link text-xs font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View Specifications</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERSONA PROFILES (ZERO EMOJIS, LUCIDE ICONS) */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
                Persona Architecture
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
                Custom AI Digital Humans for Every Enterprise Domain
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--lp-ink-2)]">
                Configure digital humans with industry-specific personalities, communication styles, voice behavior, micro-gestures, and corporate branding.
              </p>

              <div className="mt-8 space-y-3">
                {personaProfiles.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-4 shadow-2xs"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--lp-tile)] text-[var(--lp-accent)] border border-[var(--lp-line)]">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-[var(--lp-ink)]">{p.title}</h4>
                        <p className="mt-1 text-xs leading-5 text-[var(--lp-ink-2)]">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-[var(--lp-shadow-card)]">
                <span className="text-xs font-semibold text-[var(--lp-accent-ink)] uppercase tracking-wider">
                  Tailored Brand Experience
                </span>
                <h3 className="mt-2 text-2xl font-bold text-[var(--lp-ink)]">
                  Custom Enterprise Persona Package
                </h3>

                <div className="mt-6 space-y-3">
                  {customPersonaFeatures.map((feature, i) => (
                    <div key={i} className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-4">
                      <h4 className="text-sm font-semibold text-[var(--lp-ink)]">{feature.title}</h4>
                      <p className="mt-1 text-xs text-[var(--lp-muted)]">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES: DIHUAVA VS CLOUD AI */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Strategic Architecture Comparison
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Why Businesses Choose DIHUAVA On-Premise Platform
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--lp-tile)] text-xs uppercase text-[var(--lp-muted)] border-b border-[var(--lp-line)]">
                <tr>
                  <th className="px-6 py-4 font-semibold text-[var(--lp-ink)]">Capability</th>
                  <th className="px-6 py-4 font-semibold text-[var(--lp-ink)] bg-[rgba(255,90,31,0.06)]">DIHUAVA Local Platform</th>
                  <th className="px-6 py-4 font-medium text-[var(--lp-muted)]">Typical Cloud Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--lp-line)]">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[var(--lp-tile)]/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[var(--lp-ink)]">{row.feature}</td>
                    <td className="px-6 py-4 font-semibold text-[var(--lp-ink)] bg-[rgba(255,90,31,0.06)]">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)] shrink-0" />
                        <span>{row.dihuava}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[var(--lp-muted)]">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Technical Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              DIHUAVA Enterprise Specifications
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
            <div className="divide-y divide-[var(--lp-line)]">
              {productSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-3 sm:gap-4 hover:bg-[var(--lp-tile)]/40 transition-colors"
                >
                  <span className="text-sm font-semibold text-[var(--lp-muted)]">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-[var(--lp-ink)] sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="max-w-xl mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Product Insights
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--lp-ink)] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[var(--lp-line)] border-y border-[var(--lp-line)]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="group flex w-full items-start justify-between gap-4 text-left transition-colors"
                  >
                    <span className={`text-[17px] font-semibold tracking-[-0.015em] sm:text-[18px] transition-colors ${
                      isOpen ? "text-[var(--lp-accent)]" : "text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)]"
                    }`}>
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--lp-line)] transition-colors ${
                        isOpen
                          ? "bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs"
                          : "bg-[var(--lp-tile)] text-[var(--lp-ink)] group-hover:bg-[var(--lp-tile-2)]"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 max-w-3xl text-[15px] leading-[1.65] text-[var(--lp-ink-2)]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
