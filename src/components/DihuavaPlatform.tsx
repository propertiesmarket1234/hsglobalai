"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { UserCheck, FileText, Globe, Sparkles, ShoppingBag } from "lucide-react";

interface HighlightItem {
  label: string;
  detail: string;
}

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  tags: string[];
  stat: string;
  highlights: HighlightItem[];
  linkUrl: string;
  linkText: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: "avatar",
    title: "Avatar & Zero-Shot Voice Cloning",
    subtitle: "Photoreal Persona & Zero-Shot Voice Synth",
    description:
      "Your brand's face and voice generated once, running in real time on your kiosk with 60 FPS lip-sync, state transitions, and zero-shot voice cloning from a single 5–30 second audio clip.",
    icon: UserCheck,
    tags: ["Photoreal Persona", "Zero-Shot Voice Clone", "State Transitions", "On-Device 60 FPS"],
    stat: "100% Brand Voice",
    linkUrl: "/platform/avatar-customization",
    linkText: "Learn More About Avatar & Voice Cloning →",
    highlights: [
      { label: "Zero-Shot Voice Cloning", detail: "Single 5 to 30 second WAV/MP3 clip pre-encoded at 24kHz mono with no per-hour API fees." },
      { label: "State-Driven Presence", detail: "Visually listens, thinks, and speaks with smooth cross-fades between state video clips." },
      { label: "Real-Time Lipsync", detail: "Phonemes generated on-device as speech plays—faster than real time so speech never lags." },
    ],
  },
  {
    id: "document",
    title: "Document Intelligence (On-Device RAG)",
    subtitle: "On-Device RAG with Cross-Encoder Re-Ranking",
    description:
      "Upload enterprise PDFs, Word files, and Markdown documents locally. Our cross-encoder re-ranker retrieves grounded answers on-device with zero data leaving your building.",
    icon: FileText,
    tags: ["100% Air-Gapped RAG", "Cross-Encoder Reranker", "Multi-Format Data Import", "Grounding Guard"],
    stat: "No Cloud Dependency",
    linkUrl: "/platform/document-intelligence",
    linkText: "Learn More About Document Intelligence →",
    highlights: [
      { label: "100% Air-Gapped Local Search", detail: "Embedding, vector search, re-ranking, and response generation run entirely locally." },
      { label: "Cross-Encoder Re-Ranking", detail: "Two-stage retrieval delivers maximum factual accuracy, especially across languages." },
      { label: "Post-Generation Grounding Guard", detail: "Suppresses hallucinated prices or IDs if they do not trace back to retrieved source text." },
    ],
  },
  {
    id: "language",
    title: "Multilingual Support (29+ Languages)",
    subtitle: "29+ Global Languages & 7 Indian Languages",
    description:
      "Full offline ASR, translation, and neural speech synthesis across 29+ global languages including 7 specialized Indian languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati) running 100% on-device.",
    icon: Globe,
    tags: ["29+ Global Languages", "7 Indian Languages", "Auto Language Switch", "100% Offline STT/TTS"],
    stat: "29+ Languages Offline",
    linkUrl: "/platform/multilingual-support",
    linkText: "Learn More About Multilingual Capabilities →",
    highlights: [
      { label: "29+ Global Languages", detail: "Native offline speech processing across English, Spanish, Mandarin, Russian, Arabic, and 24+ more." },
      { label: "7 Specialized Indian Languages", detail: "Purpose-built edge models for Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati." },
      { label: "Instant Auto Language Switch", detail: "Instantly detects incoming visitor language and adapts speech synthesis dynamically." },
    ],
  },
  {
    id: "persona",
    title: "Persona Management & Brand Safety",
    subtitle: "Zero-Code Vertical Drop-In Packages",
    description:
      "Drop a persona package into your kiosk dashboard to instantly transform software roles from a luxury jeweller into a hospital receptionist or bank concierge with no code required.",
    icon: Sparkles,
    tags: ["Zero-Code Swaps", "Pre-Generated Greetings", "Intent Classification", "Barge-In Support"],
    stat: "0 Code Changes",
    linkUrl: "/platform/persona-management",
    linkText: "Learn More About Persona Management →",
    highlights: [
      { label: "Zero-Code Vertical Swaps", detail: "Drop in a package (.zip) to instantly swap avatar, voice, knowledge base, and vertical UI skin." },
      { label: "Pre-Generated Greetings", detail: "Greetings generated at upload for instant speech playback with 0ms initial thinking pause." },
      { label: "Real-Time Visitor Barge-In", detail: "Visitor can interrupt mid-sentence; avatar stops speaking immediately and listens." },
    ],
  },
  {
    id: "catalog",
    title: "AI Product Catalogue & Sales Engine",
    subtitle: "Spreadsheet-Driven Picture-in-Picture Sales",
    description:
      "Upload a 9-column CSV spreadsheet and asset bundle. The avatar sells directly from your product catalogue, presenting picture-in-picture cards and MP4 demo clips while speaking.",
    icon: ShoppingBag,
    tags: ["9-Column CSV Import", "Show While Speaking", "MP4 Demo Videos", "Price Grounding"],
    stat: "Picture-in-Picture",
    linkUrl: "/platform/ai-product-catalog",
    linkText: "Explore AI Product Catalogue Solutions →",
    highlights: [
      { label: "9-Column CSV Schema", detail: "One product spans multiple feature rows, enabling spoken feature Q&A without dialogue scripting." },
      { label: "Picture-in-Picture Card Display", detail: "Matching product cards and MP4 demo video clips appear dynamically on screen as avatar speaks." },
      { label: "Strict Price & ID Grounding", detail: "Post-generation verification prevents avatar from quoting incorrect prices or unlisted items." },
    ],
  },
];

export default function DihuavaPlatform() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const activeCapability = capabilities.find((c) => c.id === activeTab) || capabilities[0];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/3 top-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-cyan-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              The DIHUAVA Architecture
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Core platform{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                capabilities.
              </span>
            </h2>

            <p className="max-w-md text-base leading-7 text-gray-400">
              Everything required to deploy, manage, and scale intelligent digital humans across on-device kiosks, holograms, and spatial displays.
            </p>
          </div>
        </motion.div>

        {/* INTERACTIVE CAPABILITIES SHOWCASE */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* TABS SELECTOR (Left 5 Cols) */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {capabilities.map((cap) => {
              const isActive = cap.id === activeTab;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className={`group relative flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-cyan-500/50 bg-cyan-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                      : "border-white/10 bg-neutral-950/60 backdrop-blur-md hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <cap.icon className="w-5 h-5 text-cyan-300" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3
                        className={`text-lg font-bold transition-colors ${
                          isActive ? "text-cyan-300" : "text-white group-hover:text-gray-200"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      <p className="text-xs font-medium text-gray-400">{cap.subtitle}</p>
                    </div>
                  </div>

                  <span
                    className={`text-sm transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-cyan-400" : "text-gray-600 group-hover:text-white"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE TAB DISPLAY (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeCapability.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl"
            >
              {/* Top Stat Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
                    <activeCapability.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Feature Deep Dive
                    </span>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {activeCapability.title}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
                  <span className="text-xs font-semibold text-cyan-300">
                    {activeCapability.stat}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                {activeCapability.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {activeCapability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Executive Highlights Card */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-neutral-900/80 p-5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Platform Highlights
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Active System
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {activeCapability.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                        ✓
                      </span>
                      <p className="text-gray-300 leading-normal">
                        <strong className="font-semibold text-white">{item.label}:</strong>{" "}
                        <span className="text-gray-400">{item.detail}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Redirection Page CTA Button */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
                <span className="text-xs text-gray-400 font-medium">
                  Want more technical details & live deployment specs?
                </span>
                <a
                  href={activeCapability.linkUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-950/80 px-5 py-2.5 text-xs font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black hover:scale-105"
                >
                  <span>{activeCapability.linkText}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
