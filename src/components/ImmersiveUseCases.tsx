"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface UseCaseStory {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  highlightColor: string;
  description: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  imageSrc: string;
  imageAlt: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
}

const useCases: UseCaseStory[] = [
  {
    id: "museums",
    badge: "MUSEUMS & EXHIBITIONS USE CASE",
    titlePrefix: "Portraits & Holograms That ",
    titleHighlight: "Speak.",
    highlightColor: "from-cyan-400 via-sky-300 to-cyan-500",
    description:
      "Imagine a portrait framed on a gallery wall or inside a 3D Hologram Box. When a visitor steps close, the historical figure begins to speak. Not a pre-recorded video loop—a real conversation. A full-presence conversational avatar that looks, sounds, and reacts in real-time, available every hour the museum is open, in 23+ languages, without staff or volunteers.",
    ctaPrimaryText: "Build Your Exhibition Character",
    ctaSecondaryText: "Explore Museum Solutions",
    ctaPrimaryHref: "/contact",
    ctaSecondaryHref: "/industries#tourism",
    imageSrc: "/images/use-cases/museum_hologram_avatar.png",
    imageAlt: "Interactive Museum Hologram Avatar Exhibit",
    capabilities: [
      "Sub-3000ms Voice Response",
      "Historical Document RAG",
      "23+ Spoken Languages",
      "Offline Air-Gapped Security",
    ],
    metrics: [
      { label: "Dwell Time Increase", value: "+65%" },
      { label: "Languages Supported", value: "23+" },
      { label: "Operating Uptime", value: "24/7" },
    ],
  },
  {
    id: "retail",
    badge: "SMART RETAIL & LUXURY USE CASE",
    titlePrefix: "Holographic Assistants That ",
    titleHighlight: "Sell.",
    highlightColor: "from-cyan-400 via-sky-300 to-cyan-500",
    description:
      "Transform static storefront displays into interactive 3D sales floors. As shoppers explore products, a 3D hologram avatar greets them, recommends complementary luxury items, answers technical specs in their native language, and guides them directly to instant purchase.",
    ctaPrimaryText: "Deploy Retail Hologram Kiosk",
    ctaSecondaryText: "Explore Retail Solutions",
    ctaPrimaryHref: "/contact",
    ctaSecondaryHref: "/industries#retail",
    imageSrc: "/images/blog/blog_banner_product_catalogue.png",
    imageAlt: "Smart Retail Holographic Sales Guide",
    capabilities: [
      "Real-Time 3D Product Catalog",
      "AI Recommendation Engine",
      "Multilingual Voice Sales",
      "POS & Inventory Integration",
    ],
    metrics: [
      { label: "Sales Conversion Lift", value: "2.8x" },
      { label: "Shopper Engagement", value: "3x" },
      { label: "Cloud Dependency", value: "0%" },
    ],
  },
  {
    id: "banking",
    badge: "BANKING & WEALTH MANAGEMENT USE CASE",
    titlePrefix: "Private Wealth Advisors That ",
    titleHighlight: "Protect.",
    highlightColor: "from-cyan-400 via-sky-300 to-cyan-500",
    description:
      "Deploy 100% offline, air-gapped digital human avatars in bank VIP lounges and customer service branches. Avatars execute instant loan lookups, explain policy terms, and qualify clients while keeping all personal financial records air-gapped locally on local GPU hardware.",
    ctaPrimaryText: "Request Private Wealth Demo",
    ctaSecondaryText: "Explore Banking Solutions",
    ctaPrimaryHref: "/contact",
    ctaSecondaryHref: "/industries#banking",
    imageSrc: "/images/blog/blog_banner_offline_security.png",
    imageAlt: "Private Wealth Air-Gapped AI Advisor",
    capabilities: [
      "100% Air-Gapped Storage",
      "Local Enterprise PDF RAG",
      "Zero Cloud Latency",
      "Bank-Grade Compliance",
    ],
    metrics: [
      { label: "Data Leakage Risk", value: "0%" },
      { label: "On-Device Latency", value: "< 3000ms" },
      { label: "Handling Reduction", value: "35%" },
    ],
  },
];

export default function ImmersiveUseCases() {
  const [activeTab, setActiveTab] = useState<string>("museums");

  const activeStory = useMemo(
    () => useCases.find((u) => u.id === activeTab) || useCases[0],
    [activeTab]
  );

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white border-t border-white/10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[850px] rounded-full bg-cyan-600/10 blur-[170px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[700px] rounded-full bg-sky-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER & STORY TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-4">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Immersive Real-World Stories
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bringing Digital Humans to{" "}
              <span className="bg-gradient-to-r from-white via-neutral-100 to-cyan-400 bg-clip-text text-transparent">
                Physical Spaces.
              </span>
            </h2>
          </div>

          {/* TAB SWITCHER */}
          <div className="inline-flex rounded-full border border-white/15 bg-neutral-950/90 p-1.5 backdrop-blur-xl">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === uc.id
                    ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {uc.id === "museums" && "🏛️ Museums"}
                {uc.id === "retail" && "🛍️ Smart Retail"}
                {uc.id === "banking" && "🏦 Banking"}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED USE CASE CARD SPOTLIGHT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 md:p-12 backdrop-blur-2xl shadow-2xl"
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* LEFT COLUMN: STORY DETAILS & CTAS */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-mono">
                    {activeStory.badge}
                  </span>

                  <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                    {activeStory.titlePrefix}
                    <span
                      className={`bg-gradient-to-r ${activeStory.highlightColor} bg-clip-text text-transparent`}
                    >
                      {activeStory.titleHighlight}
                    </span>
                  </h3>

                  <p className="mt-6 text-sm sm:text-base leading-8 text-gray-300">
                    {activeStory.description}
                  </p>

                  {/* Capabilities Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeStory.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md"
                      >
                        ✓ {cap}
                      </span>
                    ))}
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {activeStory.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-2xl font-bold text-white font-mono">{m.value}</p>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAS */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href={activeStory.ctaPrimaryHref}
                    className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-xs font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                  >
                    {activeStory.ctaPrimaryText}
                  </Link>

                  <Link
                    href={activeStory.ctaSecondaryHref}
                    className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
                  >
                    {activeStory.ctaSecondaryText} →
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: HIGH-RES SPATIAL HOLOGRAPHIC VISUAL DISPLAY */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                  <Image
                    src={activeStory.imageSrc}
                    alt={activeStory.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient vignette overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Spatial Equations & Holographic Badge */}
                  <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/75 px-3 py-1 font-mono text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                    E = mc² • Minkowski Spatial AI
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full border border-cyan-500/40 bg-black/75 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Real-Time 3D Hologram Avatar</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
