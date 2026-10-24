"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
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
  Plus,
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

export const platformData: Record<string, PlatformPageData> = {
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
      "The voice engine uses zero-shot neural cloning. By uploading a single 5 to 30 second clean audio clip (WAV or MP3), the system normalizes the audio to 24kHz mono and pre-encodes the voice profile once at upload. From then on, the avatar speaks any sentence in any of our 29+ supported languages in your authentic voice synthesized 100% on-device without recurring cloud API usage charges.",
    ],
    specs: [
      { label: "Lip-Sync Latency", value: "Low Latency On-Device" },
      { label: "Voice Sample Needed", value: "5–30s Audio Clip" },
      { label: "Neural Output", value: "24kHz Mono" },
      { label: "Data Confidentiality", value: "100% Offline On-Device by Default (Air-Gap Capable)" },
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
        description: "High-resolution facial crop demonstrating real-time phoneme mapping and mouth blendshape movements during natural speech.",
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
        desc: "Requires only one 5–30 second clean audio clip. No studio recording sessions, GPU re-training runs, or recurring cloud voice API charges.",
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
        desc: "The avatar listens, thinks, speaks, and switches languages on-device with Low-Latency lip-sync and 0ms cloud dependency.",
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
    overviewHeading: "High-Precision Local Retrieval Stack with Cross-Encoder Architecture",
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
        title: "Drag & Drop PDF Upload to Instant Grounded Answer",
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
        title: "Multi-Format Local Processing",
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
      { item: "Deduplication", spec: "Automatic MD5 hash checking prevents duplicate imports" },
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
    title: "Multilingual AI Avatar Software & Speech Synthesis",
    subtitle: "29+ Spoken Global Languages Running 100% On-Device",
    description:
      "Enterprise multilingual AI avatar software delivering on-device speech recognition, neural voice synthesis, and real-time translation across 29+ global languages and 7 Indian regional languages without recurring cloud API fees.",
    icon: Globe,
    overviewHeading: "29+ Shipping Languages with Purpose-Built Regional Speech Models",
    overviewParagraphs: [
      "The DIHUAVA multilingual stack delivers complete speech recognition, translation, and neural voice synthesis across 29+ shipping global languages running on local edge hardware without recurring cloud API usage charges.",
      "A major breakthrough is our dedicated support for 7 Indian regional languages: Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati. Standard cloud speech vendors struggle with non-Latin script phonemes on local hardware. We built specialized speech recognition and synthesis models specifically trained for these regional scripts, delivering fluid, natural conversations at international airports, retail malls, and government venues.",
    ],
    specs: [
      { label: "Languages Supported", value: "29+ Global Languages" },
      { label: "Regional Models", value: "7 Indian Languages" },
      { label: "Auto-Switch Performance", value: "Automatic Detection" },
      { label: "Cloud API Usage Charges", value: "Avoided via Local Deployment" },
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
        title: "On-Device Speech Execution",
        desc: "Core speech recognition, translation, LLM dialogue, and voice synthesis run locally on the kiosk, avoiding recurring cloud API usage charges.",
      },
      {
        title: "Real-Time Automatic Language Switching",
        desc: "Detects the visitor's spoken language upon their first sentence, automatically switching dialogue language instantly.",
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
        title: "Zero Cloud Dependency by Default",
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
        desc: "On-device ASR recognizes speech and identifies the language instantly, mapping vocabulary against client document terms.",
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
          "No. Core speech recognition, translation, and voice synthesis run locally on your device hardware, avoiding recurring cloud API usage charges. Software licensing, maintenance, updates, and support terms depend on the agreed commercial package.",
      },
      {
        question: "How fast does the avatar switch languages?",
        answer:
          "Language detection and switching happen instantly as soon as the visitor speaks their first sentence.",
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

export default function PlatformClient({ initialSlug }: { initialSlug?: string }) {
  const params = useParams();
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
  const rawSlug = (params?.slug as string) || initialSlug || "";

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
          <h1 className="text-4xl font-bold text-[var(--lp-ink)] sm:text-5xl">Feature Page Not Found</h1>
          <p className="mt-4 text-[var(--lp-muted)]">The platform capability page you are looking for does not exist.</p>
          <Link
            href={lPath("/products/ai-digital-human")}
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to DIHUAVA Platform Overview</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const activeVideo = data.demoVideos?.find((v) => v.id === activeVideoId) || data.demoVideos?.[0];

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href={lPath("/products/ai-digital-human")}
              className="inline-flex items-center gap-2 text-xs font-medium text-[var(--lp-muted)] hover:text-[var(--lp-ink)] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Return to DIHUAVA Platform Overview
            </Link>
            <Link
              href={lPath(`/products/ai-digital-human/${data.slug}`)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lp-ink)] border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 rounded-full shadow-2xs transition-colors hover:bg-[var(--lp-tile)]"
            >
              <span>Platform Specs Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                {data.badge}
              </span>
            </div>

            <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
              {data.title}
            </h1>

            <p className="mt-4 text-lg font-semibold text-[var(--lp-accent)] max-w-3xl">
              {data.subtitle}
            </p>

            <p className="mt-5 text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px] max-w-3xl">
              {data.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={lPath("/contact")}
                className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Architecture Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={lPath("/contact/download-center")}
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
              >
                <span>Download Whitepaper (PDF)</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS SUMMARY BAR */}
      <section className="relative bg-[var(--lp-tile)] px-6 py-8 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {data.specs.map((spec, i) => (
              <div key={i} className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
                <span className="block text-[11px] uppercase tracking-wider text-[var(--lp-muted)]">
                  {spec.label}
                </span>
                <span className="mt-1 block text-lg font-bold text-[var(--lp-ink)]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL OVERVIEW */}
      <section className="relative px-6 py-20 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
                Deep Dive Architecture
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] md:text-4xl">
                {data.overviewHeading}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--lp-ink-2)]">
                {data.overviewParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-xs">
                <h3 className="text-lg font-bold text-[var(--lp-ink)] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Engineering Standards
                </h3>
                <ul className="space-y-3.5 text-xs leading-6 text-[var(--lp-ink-2)]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>100% On-Device GPU Processing (Zero Cloud Latency)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Deterministic Low-Latency Lip-Sync Precision</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Air-Gapped Data Security Designed for GDPR/HIPAA Privacy Alignment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>24/7 Continuous Commercial Hardware Reliability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DEMO VIDEO GALLERY */}
      {data.demoVideos && data.demoVideos.length > 0 && (
        <section className="relative bg-[var(--lp-tile)] px-6 py-20 border-b border-[var(--lp-line)]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
                Interactive Demonstrations
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] md:text-4xl">
                Feature Demonstration Videos
              </h2>
              <p className="mt-3 text-sm text-[var(--lp-ink-2)]">
                Select a demonstration below to inspect local-first execution.
              </p>
            </div>

            {/* Video Player Display */}
            {activeVideo && (
              <div className="mb-10 overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
                <div className="relative aspect-video w-full bg-black">
                  <video
                    key={activeVideo.id}
                    src={activeVideo.videoSrc}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 border-t border-[var(--lp-line)] bg-[var(--lp-card)]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[var(--lp-ink)]">{activeVideo.title}</h3>
                    <span className="rounded-full bg-[var(--lp-tile)] px-3 py-1 text-xs text-[var(--lp-ink)] border border-[var(--lp-line)]">
                      Duration: {activeVideo.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--lp-ink-2)]">{activeVideo.description}</p>
                </div>
              </div>
            )}

            {/* Video Thumbnails Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.demoVideos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideoId(video.id)}
                  className={`text-left rounded-2xl border p-4 transition-all duration-300 ${
                    (activeVideoId === video.id || (!activeVideoId && video.id === data.demoVideos[0].id))
                      ? "border-[var(--lp-accent)] bg-[var(--lp-card)] shadow-xs ring-1 ring-[var(--lp-accent)]"
                      : "border-[var(--lp-line)] bg-[var(--lp-card)] hover:bg-[var(--lp-tile)]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[var(--lp-accent)] mb-2">
                    <span className="flex items-center gap-1 font-semibold">
                      <Play className="w-3 h-3 fill-current" /> DEMO
                    </span>
                    <span className="text-[var(--lp-muted)]">{video.duration}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--lp-ink)] line-clamp-2">{video.title}</h4>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. MICRO-FEATURES GRID */}
      <section className="relative px-6 py-20 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
              Technical Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Micro-Features &amp; Engineering Detail
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.microFeatures.map((mf, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lp-tile)] text-[var(--lp-ink)] text-xs font-bold border border-[var(--lp-line)] mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-[var(--lp-ink)] mb-2">{mf.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--lp-ink-2)]">{mf.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS WORKFLOW STEPS */}
      <section className="relative bg-[var(--lp-tile)] px-6 py-20 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
              Workflow Breakdown
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              How It Works End-to-End
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 shadow-xs"
              >
                <span className="text-2xl font-bold text-[var(--lp-accent)]">{item.step}</span>
                <h3 className="mt-3 text-lg font-bold text-[var(--lp-ink)]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--lp-ink-2)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INPUT REQUIREMENTS CHECKLIST */}
      <section className="relative px-6 py-20 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
              Deployment Prerequisites
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-4xl">
              Input Requirements Checklist
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
            <div className="divide-y divide-[var(--lp-line)]">
              {data.inputChecklist.map((req, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 gap-2 px-6 py-4.5 sm:grid-cols-3 sm:gap-4 ${
                    i % 2 === 0 ? "bg-[var(--lp-card)]" : "bg-[var(--lp-tile)]/40"
                  }`}
                >
                  <span className="text-sm font-semibold text-[var(--lp-ink)]">
                    {req.item}
                  </span>
                  <span className="text-sm text-[var(--lp-ink-2)] sm:col-span-2">
                    {req.spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRY USE CASES */}
      <section className="relative bg-[var(--lp-tile)] px-6 py-20 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
            Target Deployments
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-4xl">
            Primary Industry Applications
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
            {data.useCases.map((uc, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-4 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-[var(--lp-ink)]">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURE FAQ */}
      <section className="relative px-6 py-20 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
              Feature Insights
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {data.faq.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="text-base font-semibold text-[var(--lp-ink)] pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--lp-tile)] text-[var(--lp-ink)]"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-[var(--lp-ink-2)] border-t border-[var(--lp-line)] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. NEXT FEATURE NAVIGATION FOOTER BANNER */}
      <section className="relative bg-[var(--lp-tile)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs text-[var(--lp-muted)] uppercase tracking-widest font-semibold">
            NEXT PLATFORM CAPABILITY
          </span>
          <h3 className="mt-2 text-2xl font-bold text-[var(--lp-ink)] md:text-3xl">
            {data.nextFeatureName}
          </h3>
          <Link
            href={lPath(`/products/ai-digital-human/${data.nextFeatureSlug}`)}
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore Next Feature</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
