"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  UserCheck,
  FileText,
  Globe,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  HelpCircle,
  FileCheck,
  Play,
  Film,
  Video,
} from "lucide-react";

interface SpecItem {
  label: string;
  value: string;
}

interface MicroFeature {
  title: string;
  desc: string;
}

interface HowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

interface InputRequirement {
  item: string;
  spec: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface DemoVideo {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoSrc: string;
}

interface PlatformPageData {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  overviewHeading: string;
  overviewParagraphs: string[];
  specs: SpecItem[];
  demoVideos: DemoVideo[];
  microFeatures: MicroFeature[];
  howItWorks: HowItWorksStep[];
  inputChecklist: InputRequirement[];
  useCases: string[];
  faq: FAQItem[];
  nextFeatureSlug: string;
  nextFeatureName: string;
}

const platformData: Record<string, PlatformPageData> = {
  "avatar-customization": {
    slug: "avatar-customization",
    badge: "FEATURE DEEP DIVE",
    title: "Avatar & Zero-Shot Voice Cloning",
    subtitle: "Your Brand's Face and Authentic Voice Generated Once, Running Real-Time On-Device",
    description:
      "A photoreal video persona paired with zero-shot neural voice cloning. Upload a single 5 to 30 second audio clip and reference photo to deploy an interactive digital human running locally at 60 FPS with zero cloud dependencies.",
    icon: UserCheck,
    overviewHeading: "Photoreal Persona & Zero-Shot Voice Synthesis Pipeline",
    overviewParagraphs: [
      "HS Global AI separates digital humans into two distinct, deterministic engineering pipelines: the visual video persona and the neural voice engine. The visual avatar displays seamless state transitions (idle, listening, thinking, speaking, and selfie pose) with smooth cross-fades so state changes never show jarring video cuts.",
      "The voice engine uses zero-shot neural cloning. By uploading a single 5 to 30 second clean audio clip (WAV or MP3), the system normalizes the audio to 24kHz mono and pre-encodes the voice profile once at upload. From then on, the avatar speaks any sentence in any of our 29+ supported languages in your authentic voice synthesized 100% on-device with zero per-hour API fees.",
    ],
    specs: [
      { label: "Lip-Sync Latency", value: "<30ms On-Device" },
      { label: "Voice Sample Needed", value: "5–30s Audio Clip" },
      { label: "Neural Output", value: "24kHz Mono" },
      { label: "Data Confidentiality", value: "100% Air-Gapped" },
    ],
    demoVideos: [
      {
        id: "voice-clone-flow",
        title: "Zero-Shot Voice Clone End-to-End",
        duration: "0:45",
        description: "Upload a 10-second phone audio recording, then watch the digital avatar answer questions in English and Hindi using that exact authentic voice.",
        videoSrc: "/videos/features/avatar_voice_clone_demo.mp4",
      },
      {
        id: "lipsync-closeup",
        title: "60 FPS Real-Time Lipsync Close-Up",
        duration: "0:15",
        description: "High-resolution facial crop demonstrating sub-30ms phoneme mapping and mouth blendshape movements during natural speech.",
        videoSrc: "/videos/features/avatar_lipsync_closeup.mp4",
      },
      {
        id: "state-transitions",
        title: "State Transitions (Idle → Listening → Thinking → Speaking)",
        duration: "0:20",
        description: "Demonstrating smooth cross-fades between visual state video clips when a visitor approaches and speaks to the kiosk.",
        videoSrc: "/videos/features/avatar_state_transitions.mp4",
      },
      {
        id: "character-switcher",
        title: "Instant Character & Persona Switcher",
        duration: "0:10",
        description: "On-screen tap demonstration switching avatar character appearance, wardrobe, and cloned voice profile instantly.",
        videoSrc: "/videos/features/avatar_character_switcher.mp4",
      },
    ],
    microFeatures: [
      {
        title: "Real-Time Lipsync Generation",
        desc: "Mouth movement is generated on-device from audio phonemes as it is spoken—faster than real time, ensuring speech never waits for video.",
      },
      {
        title: "State-Driven Presence & Cross-Fades",
        desc: "The avatar visibly listens, thinks, and speaks with smooth cross-fade transitions between state clips rather than static looping videos.",
      },
      {
        title: "Zero-Shot Voice Cloning",
        desc: "Requires only one 5–30 second clean audio clip. No studio recording sessions, GPU re-training runs, or per-minute voice API charges.",
      },
      {
        title: "Gender-Correct Default Fallback",
        desc: "Avatars deployed without a custom audio clip automatically select a gender-matched default voice—never a mismatched voice profile.",
      },
      {
        title: "Expressive Speech Tags",
        desc: "Supports natural breath, pause, and laugh tags in English speech generation for human-like conversational inflections.",
      },
      {
        title: "Per-Avatar Voice Storage",
        desc: "Each avatar carries its own checksum-verified voice profile. Switching characters on screen updates the voice engine instantly.",
      },
      {
        title: "Multi-Avatar Character Switching",
        desc: "A single kiosk screen can store multiple distinct character personas and switch between them instantly upon visitor selection.",
      },
      {
        title: "Package Integrity Verification",
        desc: "Every avatar package is checksum-verified at installation, ensuring approved brand presentation runs reliably without corruption.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Upload Photo & 10s Voice Clip",
        desc: "Provide 1 high-resolution front-facing photo or video reference plus a 5–30 second clean voice recording.",
      },
      {
        step: "02",
        title: "Cloud Pipeline Generates State Package",
        desc: "Our automated pipeline generates the 3D facial mesh, state video clips (idle, listening, thinking, speaking), and pre-encodes the 24kHz voice profile.",
      },
      {
        step: "03",
        title: "Deploy Package to Local Hardware",
        desc: "Download the self-contained persona package (.zip) directly onto your local GPU kiosk or Hologram Box.",
      },
      {
        step: "04",
        title: "Real-Time On-Device Execution",
        desc: "The avatar listens, thinks, speaks, and switches languages on-device with sub-30ms lip-sync latency and 0ms cloud dependency.",
      },
    ],
    inputChecklist: [
      { item: "Voice Audio Sample", spec: "5–30 seconds clean mono/stereo WAV or MP3 (24kHz+ recommended)" },
      { item: "Visual Reference", spec: "1 front-facing high-res photo OR 4K studio video footage" },
      { item: "Attire & Wardrobe", spec: "Corporate logo badge, uniform SVG/PNG overlay, or custom 3D mesh brief" },
      { item: "Package Size", spec: "~250MB–1.2GB self-contained offline package per character" },
    ],
    useCases: [
      "Executive AI Presenters for Corporate Headquarters & Investor Lounges",
      "Branded Concierge Avatars for Luxury Hotels, Resorts & VIP Check-In",
      "Personalized Virtual Advisory in Banking & Financial Centers",
      "Interactive Host Avatars for International Trade Shows & Expos",
    ],
    faq: [
      {
        question: "How long does voice cloning take to set up?",
        answer:
          "Voice cloning takes under 5 minutes. You upload a 5 to 30 second clean audio recording, and our system pre-encodes the neural voice profile automatically.",
      },
      {
        question: "Does the voice cloning require cloud connections during operation?",
        answer:
          "No. Once the voice profile is encoded into the avatar package, all neural voice synthesis runs 100% locally on your device's GPU with zero internet connection required.",
      },
      {
        question: "Can one kiosk host multiple different avatars?",
        answer:
          "Yes! A single kiosk can store multiple persona packages and allow visitors to switch between characters on screen instantly.",
      },
      {
        question: "What happens if I don't provide a voice recording?",
        answer:
          "The platform automatically assigns a high-quality, gender-correct neural fallback voice matched to your avatar's persona.",
      },
    ],
    nextFeatureSlug: "document-intelligence",
    nextFeatureName: "Document Intelligence (On-Device RAG)",
  },

  "document-intelligence": {
    slug: "document-intelligence",
    badge: "FEATURE DEEP DIVE",
    title: "Document Intelligence & On-Device RAG Engine",
    subtitle: "Local Multi-Format Document Retrieval with Cross-Encoder Re-Ranking",
    description:
      "Upload corporate PDFs, technical manuals, policy guidelines, and spreadsheets. The avatar answers questions grounded strictly in your documents, processing everything locally with zero cloud data leakage.",
    icon: FileText,
    overviewHeading: "Sub-Millisecond Retrieval Stack with Cross-Encoder Precision",
    overviewParagraphs: [
      "DIHUAVA's Document Intelligence engine provides a complete retrieval-augmented generation (RAG) stack running entirely on local device hardware. Documents are chunked and embedded locally, retrieved via vector similarity search, and then re-ranked by an on-device cross-encoder before the answer is generated.",
      "The cross-encoder re-ranker solves the critical accuracy flaw of standard vector search. It evaluates passage relevance in context, ensuring cross-language questions (e.g. asking a question in Hindi about an English PDF manual) retrieve exact, truthful answers. If a question is not covered in your documents, our grounding guard ensures the avatar politely declines to answer rather than hallucinating details.",
    ],
    specs: [
      { label: "Retrieval Speed", value: "<15ms Search" },
      { label: "Indexing Duration", value: "10–60s Per File" },
      { label: "Supported Formats", value: "PDF, DOCX, TXT, MD" },
      { label: "Security Standard", value: "100% Air-Gapped" },
    ],
    demoVideos: [
      {
        id: "rag-pdf-ingest",
        title: "Drag & Drop PDF Ingestion to Instant Grounded Answer",
        duration: "0:40",
        description: "Drag a technical PDF manual into the dashboard, watch local vector indexing, and ask a question answered strictly from the PDF.",
        videoSrc: "/videos/features/document_rag_ingest_demo.mp4",
      },
      {
        id: "rag-offline-test",
        title: "100% Offline Airplane Mode Air-Gapped Test",
        duration: "0:25",
        description: "Disconnecting network cables and demonstrating local vector search and cross-encoder re-ranking with 0ms cloud ping.",
        videoSrc: "/videos/features/document_rag_offline_test.mp4",
      },
      {
        id: "rag-cross-lang",
        title: "Cross-Language Retrieval (Hindi Query → English PDF Source)",
        duration: "0:20",
        description: "Visitor asks a question in Hindi, local cross-encoder retrieves English PDF source text, and avatar responds fluently in Hindi.",
        videoSrc: "/videos/features/document_rag_cross_lang.mp4",
      },
      {
        id: "rag-refusal-guard",
        title: "Post-Generation Factual Refusal Guard",
        duration: "0:15",
        description: "Asking an unlisted question; avatar politely declines to answer instead of hallucinating false details.",
        videoSrc: "/videos/features/document_rag_refusal_guard.mp4",
      },
    ],
    microFeatures: [
      {
        title: "100% Air-Gapped Local Search",
        desc: "Embedding, vector search, cross-encoder re-ranking, and answer generation are executed locally. No document API call ever leaves your building.",
      },
      {
        title: "Cross-Encoder Re-Ranking Engine",
        desc: "Two-stage retrieval architecture (find, then judge) delivers materially higher factual accuracy, especially for cross-language queries.",
      },
      {
        title: "Cross-Language Document Querying",
        desc: "Ask questions in Hindi, Arabic, or Spanish and receive grounded answers pulled directly from your English source PDFs.",
      },
      {
        title: "Post-Generation Grounding Guard",
        desc: "Answers are verified after generation: product IDs, prices, and policy terms must trace back to retrieved source text or they are suppressed.",
      },
      {
        title: "Time-Boxed Answer-Time Ceiling",
        desc: "Retrieval is strictly time-boxed so complex queries degrade gracefully to a short, honest response instead of creating a long pause.",
      },
      {
        title: "Vocabulary Feedback Loop",
        desc: "Mines technical terms, acronyms, and brand names from your documents into the ASR speech recogniser so spoken queries are heard correctly.",
      },
      {
        title: "Isolated Per-Persona Knowledge",
        desc: "Each avatar persona maintains its own isolated document vector store—preventing cross-department data exposure.",
      },
      {
        title: "Multi-Format Local Ingestion",
        desc: "Native support for Markdown (.md), plain text (.txt), Word documents (.docx), and enterprise PDFs with automatic hash deduplication.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Drag & Drop Documents",
        desc: "Upload enterprise PDFs, policy documents, or spreadsheets into your persona dashboard.",
      },
      {
        step: "02",
        title: "Local Chunking & Vector Indexing",
        desc: "The device chunks, embeds, and indexes the files locally in 10–60 seconds, mining custom terminology into the ASR speech model.",
      },
      {
        step: "03",
        title: "Two-Stage Vector Search & Re-Ranking",
        desc: "When a visitor asks a question, vector search retrieves candidate passages, and the cross-encoder re-ranker selects the most accurate source context.",
      },
      {
        step: "04",
        title: "Grounded On-Device Response",
        desc: "The local LLM synthesizes a natural answer, verified by the grounding guard to ensure zero hallucination before the avatar speaks.",
      },
    ],
    inputChecklist: [
      { item: "Supported File Formats", spec: ".md (recommended best), .txt, .docx, .pdf" },
      { item: "Indexing Speed", spec: "10–60 seconds per document on local GPU" },
      { item: "Max Index Capacity", spec: "Up to 500MB per persona knowledge base" },
      { item: "Deduplication", spec: "Automatic MD5 hash checking prevents duplicate ingestion" },
    ],
    useCases: [
      "Banking & Financial Compliance Policy Search Desks",
      "Healthcare Patient Information & Clinical Guidance Kiosks",
      "Enterprise Technical Manual & IT Support Help Desks",
      "Government & Defense Air-Gapped Information Stations",
    ],
    faq: [
      {
        question: "Do our confidential corporate PDFs get sent to external cloud servers?",
        answer:
          "No. All document parsing, vector embedding, cross-encoder re-ranking, and response generation occur 100% locally on your kiosk hardware.",
      },
      {
        question: "What happens if a visitor asks a question that isn't in our documents?",
        answer:
          "Our post-generation grounding guard detects that no source text exists and instructs the avatar to politely decline rather than inventing false answers.",
      },
      {
        question: "Can a visitor ask in Spanish if our documents are written in English?",
        answer:
          "Yes! The cross-encoder re-ranker understands cross-language semantic relationships, retrieving relevant English passages and answering fluently in Spanish.",
      },
      {
        question: "How fast is document indexing?",
        answer:
          "Document indexing typically takes 10 to 60 seconds per file, depending on document length and local GPU processing power.",
      },
    ],
    nextFeatureSlug: "multilingual-support",
    nextFeatureName: "Multilingual Support (29+ Languages)",
  },

  "multilingual-support": {
    slug: "multilingual-support",
    badge: "FEATURE DEEP DIVE",
    title: "Multilingual Support & Speech Synthesis",
    subtitle: "29+ Spoken Global Languages Running 100% On-Device",
    description:
      "Full offline ASR, translation, and neural speech synthesis across 29+ global languages including 7 specialized Indian languages, processed with sub-200ms language switching and zero cloud API charges.",
    icon: Globe,
    overviewHeading: "29+ Shipping Languages with Purpose-Built Regional Speech Models",
    overviewParagraphs: [
      "The DIHUAVA multilingual stack delivers complete speech recognition, translation, and neural voice synthesis across 29+ shipping global languages running 100% on local edge hardware with zero per-minute cloud API fees.",
      "A major breakthrough is our dedicated support for 7 Indian regional languages: Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati. Standard cloud speech vendors struggle with non-Latin script phonemes on local hardware. We built specialized speech recognition and synthesis models specifically trained for these regional scripts, delivering fluid, natural conversations at international airports, retail malls, and government venues.",
    ],
    specs: [
      { label: "Languages Supported", value: "29+ Global Languages" },
      { label: "Regional Models", value: "7 Indian Languages" },
      { label: "Auto-Switch Latency", value: "<200ms Detection" },
      { label: "Cloud API Fees", value: "$0 Per Minute" },
    ],
    demoVideos: [
      {
        id: "multilingual-wall",
        title: "The Multilingual Wall (Fast Cuts Across 6 Languages)",
        duration: "0:30",
        description: "Same question asked back-to-back in English, Spanish, Mandarin, Hindi, Arabic, and French with instant neural speech synthesis.",
        videoSrc: "/videos/features/multilingual_wall_demo.mp4",
      },
      {
        id: "midsentence-switch",
        title: "Mid-Sentence Language Switch & Context Retention",
        duration: "0:20",
        description: "Visitor begins in English and switches mid-sentence to a regional language; avatar follows fluidly without losing session memory.",
        videoSrc: "/videos/features/multilingual_midsentence_switch.mp4",
      },
      {
        id: "indian-language-spotlight",
        title: "Indian Regional Languages Spotlight (Telugu & Tamil Offline)",
        duration: "0:30",
        description: "Demonstrating purpose-built offline speech models for Telugu and Tamil on local kiosk hardware.",
        videoSrc: "/videos/features/multilingual_indian_spotlight.mp4",
      },
    ],
    microFeatures: [
      {
        title: "29+ Global Spoken Languages",
        desc: "Native offline speech processing across English, Spanish, Mandarin, Japanese, Korean, Arabic, Russian, French, German, and 20+ additional languages.",
      },
      {
        title: "7 Specialized Indian Regional Languages",
        desc: "Purpose-built speech recognition and synthesis models for Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati.",
      },
      {
        title: "100% Offline Speech Execution",
        desc: "Speech recognition, translation, LLM dialogue, and voice synthesis run locally on the kiosk. Zero per-minute cloud API charges.",
      },
      {
        title: "Real-Time Automatic Language Switching",
        desc: "Detects the visitor's spoken language upon their first sentence, automatically switching dialogue language in under 200ms.",
      },
      {
        title: "Voice Clone Accent Preservation",
        desc: "Maintains your brand avatar's custom neural voice profile across all 29+ supported languages with natural accent inflections.",
      },
      {
        title: "Sticky Language Selection",
        desc: "Allows venue operators to pin a specific default language per persona or automatically revert to the venue's default after each session.",
      },
      {
        title: "Localized Phoneme & Speech Pauses",
        desc: "Applies native dialect pronunciation rules and natural pauses so speech output sounds respectful and human.",
      },
      {
        title: "Zero Cloud Dependency Guarantee",
        desc: "Operates perfectly in air-gapped environments, underground transit stations, or places with zero network connectivity.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Visitor Speaks in Any Language",
        desc: "A visitor approaches the kiosk and speaks naturally in English, Hindi, Spanish, Arabic, or any of the 29+ supported languages.",
      },
      {
        step: "02",
        title: "Local ASR & Language Identification",
        desc: "On-device ASR recognizes speech and identifies the language in under 200ms, mapping vocabulary against client document terms.",
      },
      {
        step: "03",
        title: "Local LLM Dialogue & Translation",
        desc: "The local AI engine processes the query, retrieves grounded knowledge, and formulates the response in the visitor's language.",
      },
      {
        step: "04",
        title: "Neural Speech Synthesis & Lip-Sync",
        desc: "On-device neural TTS synthesizes speech at 24kHz in the avatar's cloned voice with real-time 60 FPS lip-sync.",
      },
    ],
    inputChecklist: [
      { item: "Language Registry", spec: "29+ pre-installed offline language models" },
      { item: "Indian Language Models", spec: "7 specialized STT/TTS weights pre-loaded (~2.1GB)" },
      { item: "Custom Vocabulary List", spec: "CSV list of brand names, product titles, and regional terms" },
      { item: "Default Language Config", spec: "Configurable default language with auto-detect fallback" },
    ],
    useCases: [
      "International Airport Passenger Assistance & Terminal Concierge",
      "Global Trade Shows, Expos & Multi-Country Convention Centers",
      "Multilingual Bank Branches & Government Service Centers",
      "Luxury Retail Malls in International Tourist Districts",
    ],
    faq: [
      {
        question: "Which Indian languages are supported offline?",
        answer:
          "We natively support 7 Indian languages offline: Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati, using specialized edge models.",
      },
      {
        question: "Do cloud speech services charge per minute when using this system?",
        answer:
          "No. All speech recognition, translation, and voice synthesis run locally on your device hardware, incurring $0 in per-minute API fees.",
      },
      {
        question: "How fast does the avatar switch languages?",
        answer:
          "Language detection and switching happen in under 200ms as soon as the visitor speaks their first sentence.",
      },
      {
        question: "Can we lock the avatar to only speak English and Arabic?",
        answer:
          "Yes. Operators can restrict allowed languages or pin a sticky default language per venue persona.",
      },
    ],
    nextFeatureSlug: "persona-management",
    nextFeatureName: "Persona Management & Brand Safety",
  },

  "persona-management": {
    slug: "persona-management",
    badge: "FEATURE DEEP DIVE",
    title: "Persona Management & Brand Safety",
    subtitle: "Transform Verticals by Uploading Self-Contained Persona Packages—Zero Code Required",
    description:
      "A persona is a self-contained package: avatar videos, voice profile, pre-generated greetings, domain knowledge, product catalogue, and on-screen skin. Drop in a new package to transform your kiosk instantly.",
    icon: Sparkles,
    overviewHeading: "Zero-Code Vertical Transformation & Empathetic Engagement",
    overviewParagraphs: [
      "The core architectural advantage of DIHUAVA is its persona package system. A single hardware kiosk becomes a luxury jeweller, a hospital receptionist, or a bank wealth concierge simply by dropping in a persona package (.zip) without shipping a single line of new software code.",
      "Persona Management also enforces strict corporate brand guardrails. Pre-generated greetings eliminate thinking pauses on initial visitor contact. Intent classification routes queries (price, specs, appointments, directions) to specialized domain handlers, while session memory retains context across multi-turn exchanges, wiping customer data as soon as the visitor walks away.",
    ],
    specs: [
      { label: "Deployment Speed", value: "Instant Drop-In" },
      { label: "Code Modifications", value: "Zero Code" },
      { label: "Greeting Latency", value: "0ms Pre-Generated" },
      { label: "Session Privacy", value: "Auto-Wiped On Exit" },
    ],
    demoVideos: [
      {
        id: "persona-brand-swap",
        title: "Same Kiosk, Three Vertical Brand Transformations",
        duration: "0:30",
        description: "Dropping in persona packages (.zip) to instantly swap kiosk roles between a luxury jeweller, hospital receptionist, and bank concierge.",
        videoSrc: "/videos/features/persona_brand_swap_demo.mp4",
      },
      {
        id: "persona-session-memory",
        title: "Contextual Session Memory Across Multi-Turn Exchanges",
        duration: "0:30",
        description: "Visitor mentions occasion preference early in conversation; avatar recalls preference 3 turns later and wipes data upon exit.",
        videoSrc: "/videos/features/persona_session_memory.mp4",
      },
      {
        id: "persona-barge-in",
        title: "Real-Time Visitor Mid-Sentence Barge-In",
        duration: "0:10",
        description: "Visitor interrupts avatar mid-sentence; avatar stops speaking immediately and listens to the new question.",
        videoSrc: "/videos/features/persona_barge_in_demo.mp4",
      },
      {
        id: "persona-idle-ad-wake",
        title: "Idle Screen Video Ad Reel to Proximity Greeting Wake",
        duration: "0:15",
        description: "Kiosk plays brand ad loop, senses approaching visitor, and wakes to greet them in their native language.",
        videoSrc: "/videos/features/persona_idle_ad_wake.mp4",
      },
    ],
    microFeatures: [
      {
        title: "Zero-Code Persona Swaps",
        desc: "Drop a new persona package into the device dashboard to instantly change avatar appearance, voice, knowledge, and vertical skin.",
      },
      {
        title: "Pre-Generated Greetings",
        desc: "Opening greeting lines are pre-generated at package upload, delivering instant speech playback with zero initial thinking pause.",
      },
      {
        title: "Intent Classification Engine",
        desc: "Central classification authority routes queries (products, prices, appointments, directions, small talk) per persona from domain data.",
      },
      {
        title: "Follow-Up & Chained Questions",
        desc: "Understands multi-part questions like 'What about the blue one?' or 'How much is it and do you have medium?' with domain-tuned depth.",
      },
      {
        title: "Ephemeral Session Memory",
        desc: "Remembers names, budgets, and stated preferences during a conversation, automatically wiping all data as soon as the visitor leaves.",
      },
      {
        title: "Purpose-Built Vertical Skins",
        desc: "Tailored on-screen UI layouts for retail vs. healthcare (product cards vs. doctor/service cards) rather than generic templates.",
      },
      {
        title: "Real-Time Barge-In Support",
        desc: "Visitors can interrupt the avatar mid-sentence; the avatar stops speaking immediately and listens to the new question.",
      },
      {
        title: "Tuned Microphone Listening Profiles",
        desc: "Configurable noise suppression and microphone sensitivity profiles tailored for quiet executive offices vs. noisy exhibition halls.",
      },
      {
        title: "Idle Screen Video Advertising",
        desc: "Displays corporate ad video reels between visitor interactions, instantly waking and greeting visitors upon physical approach.",
      },
      {
        title: "Selfie With Avatar & QR Sharing",
        desc: "Visitors can take a photo standing beside the digital human avatar on screen and receive it instantly on their phone via QR code.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Build Persona Package in Studio",
        desc: "Bundle avatar video states, cloned voice profile, domain PDFs, catalog CSV, and UI skin into a self-contained persona package.",
      },
      {
        step: "02",
        title: "Upload Package to Kiosk Dashboard",
        desc: "Upload the package via local admin dashboard. The kiosk pre-generates greetings and builds vector indexes automatically.",
      },
      {
        step: "03",
        title: "Instant Role & Vertical Transformation",
        desc: "The kiosk transitions immediately to the new brand persona, voice, and UI skin without rebooting or code deployment.",
      },
      {
        step: "04",
        title: "Empathetic, Brand-Safe Interactions",
        desc: "Engage visitors with intent routing, barge-in support, and session memory—wiping customer data immediately upon session completion.",
      },
    ],
    inputChecklist: [
      { item: "Persona Package Format", spec: "Self-contained .zip archive containing manifest.json and sub-assets" },
      { item: "Greeting Set", spec: "Pre-generated opening audio clips across supported primary languages" },
      { item: "UI Vertical Skin", spec: "Select Retail, Healthcare, Banking, or Exhibition kiosk layout" },
      { item: "Ad Reel Assets", spec: "1080p or 4K MP4 video clips for idle screen advertising" },
    ],
    useCases: [
      "Retail Kiosks Swapping Between Multiple Luxury Fashion Brands",
      "Hospital Reception Desks Displaying Doctor & Service Cards",
      "Bank VIP Lounges Offering Wealth Management Advisory",
      "Exhibition Booths Switching Characters Between Morning & Afternoon",
    ],
    faq: [
      {
        question: "Do we need software developers to change our avatar's role?",
        answer:
          "No! Persona packages are completely self-contained. You drop a new package into the dashboard, and the software transforms roles automatically.",
      },
      {
        question: "Can a visitor interrupt the avatar while it is talking?",
        answer:
          "Yes. Our barge-in feature detects incoming visitor speech mid-sentence, causing the avatar to stop speaking immediately and listen.",
      },
      {
        question: "Is customer data stored permanently during conversations?",
        answer:
          "No. Session memory retains context only while the visitor is present. As soon as the interaction ends, all personal data is wiped.",
      },
      {
        question: "What does the kiosk display when no one is talking to it?",
        answer:
          "The display runs your brand's idle ad video reel, automatically waking and greeting visitors when someone approaches.",
      },
    ],
    nextFeatureSlug: "ai-product-catalog",
    nextFeatureName: "AI Product Catalogue & Upselling",
  },

  "ai-product-catalog": {
    slug: "ai-product-catalog",
    badge: "FEATURE DEEP DIVE",
    title: "AI Product Catalogue & Interactive Discovery",
    subtitle: "Spreadsheet-Driven Picture-in-Picture Cards & MP4 Demo Video Sales Engine",
    description:
      "Upload a 9-column CSV spreadsheet and asset bundle. The avatar sells directly from your product catalogue, presenting picture-in-picture cards and MP4 demo clips while speaking.",
    icon: ShoppingBag,
    overviewHeading: "Spreadsheet to Interactive Sales Floor in Minutes",
    overviewParagraphs: [
      "The DIHUAVA AI Product Catalogue converts standard product spreadsheets into an intelligent spoken recommendation engine. By organizing products in a 9-column CSV structure where one product spans multiple feature rows, the avatar answers 'tell me more', 'what is it made of', and 'how does it compare' without anyone writing scripted dialogue.",
      "Catalogue assets consist of high-resolution product images and MP4 demo videos. As the avatar speaks about an item, the corresponding product card appears on screen in picture-in-picture mode. Strict price and product ID grounding checks ensure the avatar never quotes incorrect prices or non-existent items.",
    ],
    specs: [
      { label: "Catalog Schema", value: "9-Column CSV" },
      { label: "Media Assets", value: "Images & MP4 Videos" },
      { label: "Card Sync Latency", value: "<50ms Sync" },
      { label: "Price Grounding", value: "100% Factual Check" },
    ],
    demoVideos: [
      {
        id: "catalog-csv-pip",
        title: "Spreadsheet Upload to Interactive Picture-in-Picture Cards",
        duration: "0:45",
        description: "Uploading 9-column product CSV, visitor asking for a product, and matching picture-in-picture card appearing while avatar speaks.",
        videoSrc: "/videos/features/catalog_csv_pip_demo.mp4",
      },
      {
        id: "catalog-comparison",
        title: "Voice-Driven Side-by-Side Product Comparison Tray",
        duration: "0:25",
        description: "Asking to compare two luxury items; kiosk displays side-by-side comparison tray with specs and prices.",
        videoSrc: "/videos/features/catalog_comparison_tray.mp4",
      },
      {
        id: "catalog-mp4-playback",
        title: "Interactive Product MP4 Video Demonstration Playback",
        duration: "0:15",
        description: "Visitor asks 'show me how it works'; kiosk plays product MP4 demo video clip directly on screen.",
        videoSrc: "/videos/features/catalog_mp4_playback.mp4",
      },
      {
        id: "catalog-healthcare-variant",
        title: "Healthcare Variant (Doctor & Department Services Cards)",
        duration: "0:20",
        description: "Visitor asks for a specialist; kiosk presents doctor cards, department schedules, and service details.",
        videoSrc: "/videos/features/catalog_healthcare_cards.mp4",
      },
    ],
    microFeatures: [
      {
        title: "9-Column CSV Import",
        desc: "Convert standard product spreadsheets into interactive spoken sales intelligence without manual dialogue scripting.",
      },
      {
        title: "Picture-in-Picture Show While Speaking",
        desc: "Matching product cards and media clips appear dynamically on screen as the avatar speaks about them.",
      },
      {
        title: "MP4 Product Demo Video Playback",
        desc: "Plays product demonstration MP4 video clips directly on the kiosk screen when visitors ask 'show me how it works'.",
      },
      {
        title: "Spoken Vocabulary Search Mining",
        desc: "Product names and brand IDs from your CSV are automatically mined into the ASR speech recogniser for accurate listening.",
      },
      {
        title: "Multi-Product Comparison Trays",
        desc: "Displays candidate products side-by-side on screen, allowing visitors to swap and compare items via voice commands.",
      },
      {
        title: "Strict Price & Product ID Grounding",
        desc: "Post-generation verification prevents the avatar from quoting prices or items not explicitly present in the CSV catalog.",
      },
      {
        title: "Feature-Row Upselling & Recommendations",
        desc: "Smart product recommendations derived directly from feature rows rather than hardcoded upsell lists.",
      },
      {
        title: "Duplicate Product & ID Protection",
        desc: "Catalogue uploader validates duplicate product titles and reused IDs before deployment to prevent search errors.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Prepare 9-Column CSV Spreadsheet",
        desc: "Fill out product details, category, price, and feature rows in our standard 9-column CSV template.",
      },
      {
        step: "02",
        title: "Bundle Images & MP4 Demo Clips",
        desc: "Attach high-resolution product images (.png/.jpg) and optional product demonstration video clips (.mp4).",
      },
      {
        step: "03",
        title: "Upload & Auto-Mine Vocabulary",
        desc: "Upload to your persona dashboard. The system mines product names into the ASR vocabulary and verifies price integrity.",
      },
      {
        step: "04",
        title: "Interactive Picture-in-Picture Sales",
        desc: "Visitors speak to search products, view picture-in-picture cards, play demo clips, and receive grounded recommendations.",
      },
    ],
    inputChecklist: [
      { item: "CSV Template", spec: "9-column CSV schema (product_id, title, category, price, feature_row, etc.)" },
      { item: "Product Images", spec: "High-res PNG or JPG files matching product ID naming" },
      { item: "Product Demo Videos", spec: "1080p MP4 video clips for feature demonstration playback" },
      { item: "Currency Formatting", spec: "Configurable venue currency symbol ($ / € / £ / ₹ / ¥)" },
    ],
    useCases: [
      "Luxury Retail & Jewelry Store Interactive Kiosks",
      "Automotive Showroom Car Model & Spec Comparison Stations",
      "Electronics & Appliance Interactive Feature Demonstrators",
      "Hospitality & Service Menu Interactive Ordering Desks",
    ],
    faq: [
      {
        question: "Do we need 3D models to use the AI Product Catalogue?",
        answer:
          "No. The catalogue uses standard high-resolution product images (.png/.jpg) and MP4 video clips attached to product CSV rows.",
      },
      {
        question: "Can the avatar quote a wrong price?",
        answer:
          "No. Our price and product ID grounding check evaluates every generated response, ensuring only verified CSV prices are spoken.",
      },
      {
        question: "How does the avatar handle product comparisons?",
        answer:
          "When a visitor asks to compare items, the kiosk displays candidate product cards side-by-side in a comparison tray.",
      },
      {
        question: "Can product demo videos play while the avatar talks?",
        answer:
          "Yes! When a visitor asks to see how a product works, the kiosk plays the item's MP4 demonstration clip on screen.",
      },
    ],
    nextFeatureSlug: "avatar-customization",
    nextFeatureName: "Avatar & Zero-Shot Voice Cloning",
  },
};

export default function PlatformCapabilityPage() {
  const params = useParams();
  const rawSlug = params?.slug as string;

  // Map legacy / alternative slugs to canonical platform data keys
  const slugMap: Record<string, string> = {
    "avatar-customization": "avatar-customization",
    "avatar-voice": "avatar-customization",
    "document-intelligence": "document-intelligence",
    "multilingual-support": "multilingual-support",
    "multilingual": "multilingual-support",
    "persona-management": "persona-management",
    "persona": "persona-management",
    "ai-product-catalog": "ai-product-catalog",
    "catalog": "ai-product-catalog",
  };

  const canonicalSlug = slugMap[rawSlug] || rawSlug;
  const data = platformData[canonicalSlug];

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
          <h1 className="text-4xl font-extrabold text-cyan-400 sm:text-5xl">Feature Page Not Found</h1>
          <p className="mt-4 text-gray-400">The platform capability page you are looking for does not exist.</p>
          <Link
            href="/#dihuava-capabilities"
            className="mt-8 rounded-full border border-cyan-400/50 bg-cyan-950/80 px-8 py-3.5 text-sm font-bold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black"
          >
            ← Return to Platform Showcase
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const activeVideo = data.demoVideos?.find((v) => v.id === activeVideoId) || data.demoVideos?.[0];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-black px-6 pt-36 pb-20 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[950px] rounded-full bg-cyan-600/15 blur-[170px]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/#dihuava-capabilities"
            className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Platform Capabilities
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                {data.badge}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
              {data.title}
            </h1>

            <p className="mt-4 text-xl font-medium text-cyan-300 md:text-2xl max-w-3xl">
              {data.subtitle}
            </p>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-4xl">
              {data.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-cyan-400 hover:scale-105 shadow-[0_0_25px_rgba(6,182,212,0.4)]"
              >
                Book a Demo
              </a>
              <Link
                href={`/platform/${data.nextFeatureSlug}`}
                className="rounded-full border border-cyan-500/40 bg-black/60 px-8 py-3.5 text-sm font-semibold text-cyan-300 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                Next: {data.nextFeatureName} →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SPEC STRIP */}
      <section className="bg-neutral-950 px-6 py-12 border-b border-white/10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.specs.map((spec, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center rounded-2xl border border-cyan-500/30 bg-black/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] min-h-[135px]"
            >
              <span className="text-xl sm:text-2xl font-extrabold text-cyan-400 leading-tight text-center">
                {spec.value}
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400 text-center">
                {spec.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT IT ACTUALLY IS SECTION */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            <Cpu className="w-4 h-4" /> Architectural Overview
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{data.overviewHeading}</h2>
          <div className="mt-6 space-y-6 text-base leading-8 text-gray-300 sm:text-lg">
            {data.overviewParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 RECORDED DEMO & EXPLANATION VIDEO SPACE */}
      <section className="bg-neutral-950 px-6 py-20 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-3">
              <Film className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Feature Explanation Video Space
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Feature Demonstration Video
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base">
              Reserved space for recorded video demonstration explaining step-by-step feature usage and live performance.
            </p>
          </div>

          {/* EMPTY VIDEO SPACE CONTAINER */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-cyan-500/30 bg-gradient-to-b from-black/90 via-neutral-950/80 to-cyan-950/20 p-10 sm:p-16 text-center backdrop-blur-xl shadow-2xl min-h-[380px] flex flex-col items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-md mb-6">
                <Video className="w-10 h-10 text-cyan-300" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Recorded Video Space
              </h3>
              
              <p className="mt-3 text-sm text-gray-400 max-w-lg leading-relaxed">
                This space is reserved for your feature explanation video. Once your demo video is recorded, it will play directly inside this frame.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/60 px-5 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span>Video Slot Ready • Pending Recorded MP4 Upload</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MICRO-FEATURES GRID */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Core Sub-Capabilities</span>
            <h2 className="text-3xl font-bold text-white sm:text-5xl mt-2">Micro-Features Breakdown</h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base">Engineering features shipping inside the production core.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {data.microFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/15 bg-black/70 p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Client Deployment Flow</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mt-2">How It Works</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.howItWorks.map((step) => (
              <div key={step.step} className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md">
                <span className="text-3xl font-extrabold text-cyan-400">{step.step}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU PROVIDE (INPUT CHECKLIST) */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="w-6 h-6 text-cyan-400" />
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Procurement Checklist</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">What You Provide (Client Input Requirements)</h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-cyan-950/40 text-xs uppercase font-semibold text-cyan-300">
                <tr>
                  <th className="px-6 py-4">Required Item</th>
                  <th className="px-6 py-4">Technical Specification / Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-300">
                {data.inputChecklist.map((req, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">{req.item}</td>
                    <td className="px-6 py-4 text-xs sm:text-sm font-medium text-cyan-200">{req.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE USE CASES */}
      <section className="bg-neutral-950 px-6 py-20 border-b border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Target Deployment Scenarios</span>
            <h2 className="text-3xl font-bold text-white mt-2">Proven Enterprise Verticals</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-200">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURE FAQ */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Frequently Asked Questions</span>
            <h2 className="text-3xl font-bold text-white mt-2">Technical & Business FAQ</h2>
          </div>

          <div className="space-y-6">
            {data.faq.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-neutral-950/80 p-6 backdrop-blur-md">
                <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 shrink-0 text-cyan-400" />
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CROSS-LINKS NAVIGATION */}
      <section className="px-6 py-16 border-b border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Explore Other Core Platform Capabilities</h3>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            <Link
              href="/platform/avatar-customization"
              className="rounded-xl border border-white/10 bg-black p-4 text-xs font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              Avatar & Voice Cloning →
            </Link>
            <Link
              href="/platform/document-intelligence"
              className="rounded-xl border border-white/10 bg-black p-4 text-xs font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              Document Intelligence RAG →
            </Link>
            <Link
              href="/platform/multilingual-support"
              className="rounded-xl border border-white/10 bg-black p-4 text-xs font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              Multilingual (29+ Languages) →
            </Link>
            <Link
              href="/platform/persona-management"
              className="rounded-xl border border-white/10 bg-black p-4 text-xs font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              Persona Management →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
