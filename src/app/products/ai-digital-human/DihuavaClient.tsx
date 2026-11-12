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
  Landmark,
  Plane,
  GraduationCap,
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
    featureCta: "Explore Selfie & Photo Features",
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
    featureCta: "Explore Face Tracking Specs",
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
    featureCta: "Explore AI Product Catalog Specs",
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
    featureCta: "Explore Document Intelligence & RAG",
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
    featureUrl: "/products/ai-digital-human/multilingual-support",
    featureCta: "Explore Multilingual & Voice Engine",
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
    featureCta: "Explore Avatar & Voice Cloning",
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
    featureUrl: "/products/ai-digital-human/persona-management",
    featureCta: "Explore Persona Management Specs",
    highlights: [
      "Long-term knowledge base indexing",
      "Executive knowledge preservation",
      "Personal voice & conversational twin",
      "Private on-device offline storage",
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
    desc: "Real-time speech recognition & synthesis across 29+ global languages and 7 Indian regional languages with automatic detection.",
    icon: Globe2,
  },
  {
    title: "Knowledge & Catalog RAG Engine",
    desc: "Local on-device vector indexer (air-gap capable) with cross-encoder reranking, multi-column CSV catalog import, and auto vocabulary generation.",
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
    title: "On-Device Security & Data Locality",
    desc: "100% offline on-device execution by default keeps speech input, local RAG queries, and 3D rendering on physical edge workstations without mandatory cloud transmission, supporting air-gapped deployments alongside optional network management.",
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
    speed: "Low Latency",
    desc: "Optimized for high-throughput public kiosks and responsive question-answering on supported edge hardware.",
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
    feature: "Data Privacy & Data Residency",
    dihuava: "Local on-device execution; voice input and document queries remain on premises without mandatory cloud transmission",
    cloud: "Queries streamed to third-party cloud servers with external logging and multi-tenant residency",
  },
  {
    feature: "Network Dependency",
    dihuava: "Operates offline locally; continuous broadband is not required for daily autonomous avatar interactions",
    cloud: "Requires continuous high-bandwidth internet connectivity; sessions fail during network outages",
  },
  {
    feature: "Conversational Latency",
    dihuava: "Local GPU inference avoids cloud network round-trips and external API queue delays",
    cloud: "Subject to variable WAN latency, router jitter, and public cloud queue backpressure",
  },
  {
    feature: "Licensing & Operating Cost",
    dihuava: "On-premise deployment can avoid recurring cloud API usage charges. Software licensing, maintenance, updates, and support terms depend on the agreed commercial package.",
    cloud: "Unpredictable recurring expenses scaling linearly with customer conversation minutes and token volume",
  },
  {
    feature: "Deployment Form Factors",
    dihuava: "Native hardware driver integration for interactive touch kiosks, 3D hologram boxes, and spatial displays",
    cloud: "Primarily web browser embeds with limited native peripheral hardware support",
  },
];

const productSpecs = [
  { label: "Software & Hardware Packaging", value: "Available as a standalone DIHUAVA software license for compatible Windows/Linux GPU hardware, or paired with optional touchscreen kiosks, 3D Hologram Boxes (55″–86″), and Spatial Displays (32″–86″)" },
  { label: "Supported Operating Systems", value: "Windows 11 (64-bit), Linux (Ubuntu 22.04 LTS)" },
  { label: "Processor & GPU Requirements", value: "Modern multi-core CPU, dedicated NVIDIA RTX GPU (8GB VRAM baseline recommendation; actual requirements depend on model selection, avatar resolution, and concurrent workloads)" },
  { label: "Offline Operation Scope", value: "Core speech recognition, document retrieval (RAG), LLM reasoning, and 3D lip-sync execute locally on-device without continuous internet" },
  { label: "Network Connectivity Role", value: "Optional for daily interaction; utilized for initial setup, software updates, remote management, and optional mobile QR photo sharing" },
  { label: "Physical Display Outputs", value: "Interactive Touch Kiosks, 3D Hologram Boxes (55″–86″), Spatial Displays (32″–86″) via HDMI / DisplayPort" },
  { label: "Audio & Vision Peripherals", value: "Standard directional USB microphone arrays and HD / 4K optical webcams for face tracking" },
  { label: "Multilingual Language Coverage", value: "29+ Global Languages plus 7 Indian Regional Languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati) with on-device language detection" },
  { label: "Enterprise Knowledge Formats", value: "PDF, DOCX, CSV Product Catalogs, TXT, and Markdown ingested into local on-device RAG" },
];

const faqs = [
  {
    q: "What is offline AI digital human software?",
    a: "Offline AI digital human software is an application that runs conversational artificial intelligence, speech recognition, local knowledge retrieval, and real-time 3D avatar animation directly on local edge hardware without streaming voice or video to third-party cloud servers. DIHUAVA executes its entire conversational loop on-device to deliver low-latency, private interactions for physical kiosks and interactive displays.",
  },
  {
    q: "How does DIHUAVA run 100% offline without continuous internet connectivity?",
    a: "DIHUAVA executes Voice Activity Detection (VAD), Speech-to-Text (STT), local document Retrieval-Augmented Generation (RAG), language model reasoning, and 3D facial lip-sync rendering entirely on the local workstation's CPU and dedicated NVIDIA RTX GPU. Daily visitor interactions operate autonomously without internet access. Network connectivity remains optional for initial setup, software updates, centralized fleet oversight, or mobile QR sharing.",
  },
  {
    q: "What hardware and GPU specifications are required to run DIHUAVA?",
    a: "DIHUAVA requires a dedicated workstation or industrial embedded PC running 64-bit Windows 11 or Linux (Ubuntu 22.04 LTS), a modern multi-core processor, and a dedicated NVIDIA RTX GPU. An 8GB VRAM GPU provides a baseline recommendation for standard full-HD and 4K avatars; actual requirements depend on model selection, avatar complexity, and concurrent workloads. The system connects via HDMI or DisplayPort to touch kiosks, 3D hologram boxes, or spatial displays.",
  },
  {
    q: "Which languages does DIHUAVA support for offline conversational interaction?",
    a: "DIHUAVA supports real-time conversational interaction across 29+ global languages—including English, Mandarin, Spanish, French, German, Japanese, and Korean—as well as 7 Indian regional languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati). Spoken language detection executes on-device without external cloud translation APIs.",
  },
  {
    q: "How does DIHUAVA compare with cloud-based digital human platforms?",
    a: "Cloud-based digital human platforms stream audio and video over the public internet, introducing variable network latency, recurring per-minute usage fees, and external data residency risks. In contrast, DIHUAVA runs on-premise on dedicated edge hardware, avoiding recurring cloud API usage charges while keeping daily voice and document processing local; software licensing, maintenance, updates, and support terms depend on the agreed commercial package.",
  },
  {
    q: "Can enterprises centrally manage multiple offline DIHUAVA kiosks?",
    a: "Yes. While daily conversational interactions execute autonomously offline on each individual display, DIHUAVA supports optional local-area network (LAN) and cloud-management configurations. Enterprise administrators can remotely update knowledge documents, manage avatar assets, adjust interaction parameters, and monitor hardware health across multi-location fleets from a centralized administrative console.",
  },
  {
    q: "How does on-device document RAG prevent hallucinations and keep customer data local?",
    a: "DIHUAVA utilizes an on-device Retrieval-Augmented Generation (RAG) engine with two-stage cross-encoder re-ranking and a post-generation grounding guard. Responses are strictly grounded in verified local corporate documents (PDF, DOCX, CSV, TXT, and Markdown). If a visitor asks a question not covered in the local knowledge base, the avatar politely indicates that the information is unavailable rather than inventing unverified claims. When operating in offline on-device mode, document indexing and vector processing execute locally on venue hardware without mandatory cloud transmission.",
  },
  {
    q: "Can DIHUAVA be deployed as an AI digital human teacher or educational assistant?",
    a: "Yes. DIHUAVA is designed for deployment across universities, K-12 schools, and corporate academies as an interactive AI digital human teacher and campus assistant. Operating on interactive kiosks or life-size 3D hologram boxes, the avatar can ingest approved textbook PDFs, campus directories, and syllabus materials via on-device RAG to answer student inquiries and conduct multilingual conversational practice 100% offline without exposing institutional queries to third-party cloud servers.",
  },
  {
    q: "Is DIHUAVA licensed as standalone software, or does it require purchasing display hardware?",
    a: "DIHUAVA is a standalone offline AI digital human software platform developed by HS Global AI. Organizations can deploy DIHUAVA software on their own compatible 64-bit Windows 11 or Ubuntu 22.04 LTS workstations with a modern multi-core CPU, dedicated NVIDIA RTX GPU (8GB VRAM baseline recommendation), directional USB microphones, HD/4K webcams, and HDMI or DisplayPort screens—or pair it with optional turnkey touchscreen kiosks, 3D Hologram Boxes (55″–86″), and Glasses-Free Spatial Displays (32″–86″). Commercial licensing, maintenance, updates, and optional hardware integration depend on the selected deployment package.",
  },
  {
    q: "How does DIHUAVA answer customer questions from documents and recommend products in real time?",
    a: "DIHUAVA pairs an on-device document RAG engine with a CSV-driven AI Product Catalog. Organizations ingest local PDF, DOCX, CSV, TXT, and Markdown files alongside 9-column product catalog spreadsheets containing product images and optional MP4 demo clips. During spoken conversations, cross-encoder re-ranking and grounding checks keep answers tied to approved files, while synchronized picture-in-picture product cards and side-by-side comparison trays present relevant recommendations verified against local CSV product IDs and prices.",
  },
  {
    q: "Can organizations customize the digital human avatar's appearance, brand wardrobe, and voice?",
    a: "Yes. Organizations can select existing enterprise personas or create custom digital humans tailored in appearance, corporate wardrobe, and conversational tone. Using zero-shot neural voice cloning, a single 5 to 30 second clean WAV or MP3 recording pre-encodes a 24kHz voice profile that synthesizes speech locally on-device without ongoing cloud voice API calls, while self-contained persona packages let teams switch kiosk roles without code changes.",
  },
];

// ENTERPRISE USE CASES
const enterpriseUseCases = [
  {
    id: "banking",
    industry: "Banking and Financial Services",
    headline: "Branch Information & Customer Guidance",
    challenge:
      "Branch visitors frequently wait for customer service desks to ask routine questions about required account documentation, loan checklists, fee schedules, or service counter locations, occupying specialized financial advisory staff.",
    application:
      "Deployed on interactive touchscreen kiosks or spatial displays in branch lobbies, DIHUAVA greets incoming customers, explains service offerings, and provides step-by-step account requirements using local document retrieval—keeping sensitive financial inquiries strictly on-premises.",
    icon: Landmark,
    href: "/industries/banking",
    ctaText: "Explore Banking & Financial Services",
  },
  {
    id: "retail",
    industry: "Retail and Shopping Malls",
    headline: "Product Discovery & Interactive Display Experiences",
    challenge:
      "Shoppers in high-traffic retail stores and multi-floor shopping malls often struggle to locate specific brand outlets, compare item attributes, or check current promotions when floor sales associates are occupied with other shoppers.",
    application:
      "Acting as an interactive concierge on freestanding totems or 3D hologram boxes, the avatar converses with visitors, showcases structured catalog cards, and helps shoppers navigate retail venues with synchronized audio and on-screen visuals.",
    icon: ShoppingBag,
    href: "/industries/retail",
    ctaText: "Explore Retail & Mall Experiences",
  },
  {
    id: "healthcare",
    industry: "Healthcare and Hospitals",
    headline: "Visitor Information & Hospital Wayfinding",
    challenge:
      "Patients and visitors arriving at complex medical centers frequently experience anxiety navigating multi-wing facilities, finding specific clinic desks, or clarifying visiting hours and administrative check-in requirements.",
    application:
      "Situated in main entrance foyers and outpatient waiting areas, DIHUAVA provides clear spoken directions, visiting guidelines, and administrative check-in navigation grounded in hospital directory documents—strictly focused on non-clinical wayfinding and administrative guidance, without offering medical diagnosis, treatment recommendations, or clinical triage.",
    icon: HeartPulse,
    href: "/industries/healthcare",
    ctaText: "Explore Healthcare Wayfinding",
  },
  {
    id: "corporate",
    industry: "Corporate Offices",
    headline: "Reception Assistance & Employee Information",
    challenge:
      "Corporate headquarters and multi-tenant commercial facilities manage constant flows of visitors, contractors, and meeting guests needing front-desk registration, credential guidance, and building directions.",
    application:
      "Operating on reception countertops or lobby kiosks, DIHUAVA welcomes arrivals, assists guests through sign-in protocols, directs visitors to meeting floors, and answers employee handbook queries from verified internal policy documents.",
    icon: Building2,
    href: "/industries/corporate",
    ctaText: "Explore Corporate Reception Solutions",
  },
  {
    id: "tourism",
    industry: "Airports and Tourism",
    headline: "Multilingual Information & Visitor Assistance",
    challenge:
      "International travelers and tourists face unfamiliar transit layouts, tight connection schedules, and language barriers when seeking terminals, baggage claims, local transportation, or regional points of interest.",
    application:
      "Positioned throughout airport terminals, transit concourses, and tourist information hubs, DIHUAVA delivers spoken and displayed directions across 29+ global languages, detecting and switching spoken languages automatically without requiring continuous cloud translation APIs.",
    icon: Plane,
    href: "/industries/tourism",
    ctaText: "Explore Tourism & Transit Solutions",
  },
  {
    id: "education",
    industry: "Education and Campus Learning",
    headline: "Campus Information & AI Digital Human Teacher Solutions",
    challenge:
      "University campuses, school districts, and training academies handle high volumes of repetitive inquiries regarding course schedules, department offices, lab procedures, and campus navigation, stretching administrative staff.",
    application:
      "Placed in student centers, libraries, and science foyers—or projected as life-size holographic teachers inside 3D hologram boxes—DIHUAVA assists students by answering curriculum and orientation questions, explaining lab guidelines via on-device RAG, and providing 29+ language practice 100% offline without exposing student data to public cloud servers.",
    icon: GraduationCap,
    href: "/industries/education",
    ctaText: "Explore Education & Campus Solutions",
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
      <section className="relative bg-white px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24 border-b border-[var(--lp-line)]">
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
                Offline AI Digital Human Software{" "}
                <span className="text-[var(--lp-muted)]">
                  &amp; On-Device Platform
                </span>
              </h1>

              <div className="mt-6 space-y-4 max-w-[60ch] text-[16px] leading-[1.7] text-[var(--lp-ink-2)] sm:text-[17px]">
                <p>
                  DIHUAVA is an offline digital human platform and on-device AI software system developed by HS Global AI. Operating 100% offline on-device by default—with optional network configurations for updates and centralized fleet management—it executes speech recognition, neural voice synthesis across 29+ global languages and 7 specialized Indian languages, and real-time 3D avatar lip-sync locally on venue hardware.
                </p>
                <p>
                  Organizations deploy DIHUAVA as standalone software on compatible Windows or Linux workstations—or paired with optional kiosks, hologram boxes, and spatial displays—to answer customer questions from approved local documents via RAG and deliver relevant product recommendations from synchronized CSV catalogs.
                </p>
              </div>

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
                  100% Offline On-Device
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                  <Globe2 className="h-3 w-3 text-[var(--lp-accent)]" />
                  29+ Global Languages
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                  <Camera className="h-3 w-3 text-[var(--lp-ink)]" />
                  Selfie With Avatar
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-accent)] shadow-2xs">
                  <Sparkles className="h-3 w-3 text-[var(--lp-accent)]" />
                  Live Cartoon Mode
                </span>
                <a
                  href="https://www.g2.com/products/dihuava/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] transition-colors"
                >
                  <span>DIHUAVA on G2</span>
                  <span className="text-[10px] text-[var(--lp-muted)]">↗</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-3.5 shadow-[var(--lp-shadow-card)]">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#0B1224]">
                  <Image
                    src="/products/digital-humans/digital-human-dashboard.jpg"
                    alt="DIHUAVA Offline AI Digital Human Software Dashboard showing on-device conversational interface and speech recognition"
                    fill
                    priority
                    className="object-contain w-full h-full p-2"
                  />
                </div>
                <div className="mt-3 rounded-2xl border border-[var(--lp-line)] bg-white p-3.5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[var(--lp-ink)]">DIHUAVA ON-PREMISE ENGINE</span>
                    <span className="font-semibold text-[#16a34a]">STATUS: 100% LOCAL</span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--lp-muted)]">
                    Local Speech, Voice Cloning, Document RAG &amp; 3D Lip Sync Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION SECTION: WHAT IS OFFLINE AI DIGITAL HUMAN SOFTWARE? */}
      <section className="px-4 py-16 sm:py-20 sm:px-6 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 sm:p-10 shadow-xs">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Direct Definition &amp; Platform Overview
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--lp-ink)] sm:text-3xl">
              What Is DIHUAVA, and How Does an Offline Digital Human Platform Work?
            </h2>
            <div className="mt-5 space-y-4 max-w-[68ch] text-[15px] sm:text-base leading-[1.7] text-[var(--lp-ink-2)]">
              <p>
                Digital human software combines conversational AI, speech recognition, neural voice synthesis, and 3D facial animation to enable natural, real-time interactions with people—learn more in our detailed guide on{" "}
                <Link
                  href={lPath("/blog/what-is-a-digital-human-avatar")}
                  className="text-[var(--lp-ink)] font-semibold underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors"
                >
                  what a digital human avatar is and how AI avatars transform enterprise engagement
                </Link>
                .
              </p>
              <p>
                Built by HS Global AI as an offline digital human platform, DIHUAVA executes speech-to-text, two-stage local document RAG, CSV product catalog retrieval, and 3D avatar rendering locally on dedicated edge hardware. By licensing DIHUAVA as standalone software for compatible workstations or integrating it with optional interactive touch kiosks, 3D hologram boxes, and spatial displays, organizations can answer customer questions from approved local documents and recommend relevant products without requiring continuous cloud connectivity during daily operations.
              </p>
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
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">Offline by Default</p>
            </div>
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
              <p className="text-2xl sm:text-3xl font-extrabold text-[var(--lp-accent)]">Low Latency</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">Edge Response Time</p>
            </div>
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
              <p className="text-2xl sm:text-3xl font-extrabold text-[var(--lp-ink)]">On-Device RAG</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">Document &amp; Catalog AI</p>
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
              On-Device AI Architecture
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              On-Device AI Digital Human Architecture and Offline Processing
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              DIHUAVA is an on-device AI digital human platform engineered for offline enterprise deployment. Speech recognition, document retrieval (RAG), conversational LLM reasoning, voice synthesis, and 3D avatar rendering run locally on physical workstations—eliminating continuous cloud streaming dependencies during daily operations (explore our perspective on{" "}
              <Link
                href={lPath("/blog/why-100-offline-ai")}
                className="text-[var(--lp-ink)] font-semibold underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors"
              >
                why 100% offline AI is the future of enterprise technology
              </Link>
              ), while optional network connectivity remains available for initial installation, software updates, centralized fleet oversight, or mobile QR sharing.
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
              Real-Time Conversational Flow: From Speech Recognition to 3D Rendering
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              An integrated local edge pipeline powering responsive, face-to-face avatar interactions without public cloud round-trips or third-party data transmission.
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
              Modular Software Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              AI Digital Human Software Capabilities: Local RAG, Product Catalog &amp; 29+ Languages
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              Comprehensive capabilities for enterprise multilingual AI avatar software: on-device speech across 29+ global languages and 7 specialized Indian languages, document RAG, CSV-driven product recommendations, interactive selfie compositing, and live cartoon face tracking.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreModules.map((module, idx) => {
              const Icon = module.icon;
              const isLastFullRow = idx === coreModules.length - 1 && coreModules.length % 3 === 1;
              return (
                <div
                  key={module.id}
                  className={`group flex flex-col justify-between rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-7 shadow-xs hover:shadow-[var(--lp-shadow-card)] transition-shadow ${
                    isLastFullRow ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div className={isLastFullRow ? "grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10" : ""}>
                    <div className={isLastFullRow ? "max-w-2xl" : ""}>
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
                      <p className="mt-1 text-xs text-[var(--lp-muted)] font-medium max-w-2xl">
                        {module.subtitle}
                      </p>

                      <p className="mt-3.5 text-sm leading-[1.7] text-[var(--lp-ink-2)] max-w-2xl">
                        {module.description}
                      </p>
                    </div>

                    <div className={isLastFullRow ? "space-y-2 border-t border-[var(--lp-line)] pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8" : "mt-6 space-y-1.5 border-t border-[var(--lp-line)] pt-4"}>
                      {module.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[var(--lp-ink-2)]">
                          <CheckCircle2 className="h-3 w-3 text-[var(--lp-accent)] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {module.featureUrl && (
                    <div className="mt-5 pt-3 border-t border-[var(--lp-line)]">
                      <Link
                        href={lPath(module.featureUrl)}
                        className="group/link text-xs font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{module.featureCta || "Explore Feature Architecture"}</span>
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
                Kiosks &amp; Interactive Spaces
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
                AI Digital Human Software for Kiosks, Hologram Boxes, and Spatial Displays
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--lp-ink-2)]">
                Deploy enterprise digital human software across high-traffic physical touchpoints—optimizing each AI digital human for freestanding touchscreen kiosks, <Link href={lPath("/products/holographic-display")} className="text-[var(--lp-ink)] font-semibold underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors">3D Hologram Boxes (55″–86″)</Link>, and <Link href={lPath("/products/spatial-display")} className="text-[var(--lp-ink)] font-semibold underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors">Glasses-Free Spatial Displays</Link> in <Link href={lPath("/industries/retail")} className="text-[var(--lp-ink)] font-medium underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors">smart retail</Link>, <Link href={lPath("/industries/healthcare")} className="text-[var(--lp-ink)] font-medium underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors">healthcare guidance</Link>, <Link href={lPath("/industries/banking")} className="text-[var(--lp-ink)] font-medium underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors">banking</Link>, and <Link href={lPath("/industries/corporate")} className="text-[var(--lp-ink)] font-medium underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors">corporate reception</Link>.
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

          {/* KIOSK DEPLOYMENT ARCHITECTURE STRIP */}
          <div className="mt-12 rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 sm:p-8 shadow-xs">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-semibold text-[var(--lp-accent-ink)] uppercase tracking-wider block">
                Software vs. Display Hardware Packaging
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[var(--lp-ink)]">
                Standalone Software Licensing vs. Optional Kiosk &amp; Display Hardware
              </h3>
              <p className="mt-2 text-sm text-[var(--lp-ink-2)] leading-relaxed">
                DIHUAVA is licensed by HS Global AI as standalone offline AI digital human software for compatible Windows 11 or Ubuntu 22.04 LTS workstations with dedicated NVIDIA RTX GPUs. Organizations can run DIHUAVA on their own approved displays or procure turnkey physical kiosk enclosures, transparent OLED displays, and 3D hologram boxes manufactured and integrated with hardware partners such as Siddhartha Industries Private Limited across retail, banking, transit, and exhibition venues.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--lp-accent)] shrink-0" />
                  <h4 className="text-sm font-bold text-[var(--lp-ink)]">Touch &amp; Voice Dual Navigation</h4>
                </div>
                <p className="text-xs text-[var(--lp-ink-2)] leading-relaxed">
                  Visitors can speak naturally or tap touchscreen menus to browse product catalogs, select from 29+ languages, and query local document knowledge bases.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--lp-accent)] shrink-0" />
                  <h4 className="text-sm font-bold text-[var(--lp-ink)]">Embedded GPU Hardware</h4>
                </div>
                <p className="text-xs text-[var(--lp-ink-2)] leading-relaxed">
                  Operates on compact industrial workstations or embedded PCs inside the kiosk enclosure. An 8GB VRAM GPU provides a baseline recommendation for smooth local inference.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--lp-accent)] shrink-0" />
                  <h4 className="text-sm font-bold text-[var(--lp-ink)]">Autonomous Offline Reliability</h4>
                </div>
                <p className="text-xs text-[var(--lp-ink-2)] leading-relaxed">
                  Core dialogue, speech synthesis, and facial lip-sync execute 100% on-device by default, ensuring uninterrupted visitor assistance during venue network outages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE USE CASES SECTION */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Industry Deployments
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Enterprise Digital Human Software &amp; Industry Deployments
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              DIHUAVA is designed for on-device and offline operation on compatible hardware across customer-facing environments, with optional cloud-management configurations available for multi-venue oversight. Explore how organizations deploy enterprise digital human software across high-traffic touchpoints.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--lp-ink-2)]">
              The platform is engineered for enterprise IT leaders, customer-experience teams, retail chains, financial institutions, healthcare administrators, transit authorities, university campus managers, and venue operators deploying interactive kiosks or on-premise digital human assistants that require strict data locality and reliable local execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseUseCases.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[var(--lp-accent)]/30 transition-all"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-accent)] shadow-xs mb-4">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--lp-accent-ink)] block">
                      {item.industry}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-[var(--lp-ink)]">
                      {item.headline}
                    </h3>

                    <div className="mt-4 space-y-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--lp-muted)] block">
                          Operational Need
                        </span>
                        <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[var(--lp-ink-2)]">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--lp-muted)] block">
                          Digital Human Application
                        </span>
                        <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[var(--lp-ink-2)]">
                          {item.application}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--lp-line)]">
                    <Link
                      href={lPath(item.href)}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 text-[var(--lp-accent)]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES: DIHUAVA VS CLOUD AI */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-white border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Platform Comparison
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Offline AI Digital Human Platform vs. Cloud-Based Alternatives
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)] max-w-2xl mx-auto">
              Understand how local on-device processing compares with traditional cloud-dependent avatar services in privacy, network dependency, latency, and operational cost, as examined in our technical comparison on{" "}
              <Link
                href={lPath("/blog/edge-ai-vs-cloud-ai")}
                className="text-[var(--lp-ink)] font-semibold underline decoration-[var(--lp-line)] underline-offset-4 hover:text-[var(--lp-accent)] transition-colors"
              >
                Edge AI vs. Cloud AI infrastructure for business
              </Link>
              .
            </p>
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
              Deployment &amp; Hardware
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Hardware and Deployment Requirements for DIHUAVA
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)] max-w-2xl mx-auto">
              Engineering specifications for deploying the DIHUAVA offline AI digital human platform across enterprise physical environments.
            </p>
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
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-white border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="max-w-xl mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Platform &amp; Buyer FAQs
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--lp-ink)] md:text-4xl">
              Frequently Asked Questions About DIHUAVA Offline Digital Human Software
            </h2>
          </div>

          <div className="divide-y divide-[var(--lp-line)] border-y border-[var(--lp-line)]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const questionId = `dihuava-faq-question-${idx}`;
              const answerId = `dihuava-faq-answer-${idx}`;
              return (
                <div key={idx} className="py-6">
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="group flex w-full items-start justify-between gap-4 text-left transition-colors cursor-pointer"
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

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-4 max-w-3xl text-[15px] leading-[1.65] text-[var(--lp-ink-2)]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to deploy DIHUAVA on your hardware or kiosks?"
        description="Schedule an architecture walkthrough with HS Global AI to review offline on-device deployment, local document RAG, CSV product catalog setup, or optional hologram and spatial display integration."
        primaryButtonText="Request DIHUAVA Demo"
        secondaryButtonText="Download Platform Datasheets"
      />
      <Footer />
    </main>
  );
}
