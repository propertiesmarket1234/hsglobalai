"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const capabilities = [
  {
    id: "avatar",
    title: "Digital Human Avatar",
    subtitle: "Hyper-Realistic Avatars",
    description:
      "Lifelike avatars featuring natural facial expressions via speech and micro-gestures suited for high-end retail, banking, and executive spaces.",
    icon: "👤",
    tags: ["Natural Expressions via speech"],
    stat: "99.4% Realism Score",
  },
  {
    id: "document",
    title: "Document Intelligence",
    subtitle: "Instant On-Device RAG Engine",
    description:
      "Upload enterprise PDFs, product manuals, banking guidelines, and knowledge bases for instant, offline AI RAG responses with zero data leaving your premises.",
    icon: "📄",
    tags: ["Offline RAG", "PDF Ingestion", "Enterprise Knowledge"],
    stat: "< 3000ms Search Speed",
  },
  {
    id: "language",
    title: "Language Intelligence",
    subtitle: "23+ Languages & Accents",
    description:
      "Automatic real-time language detection and fluid multi-turn conversational AI supporting global and regional dialects with natural voice synthesis.",
    icon: "🌍",
    tags: ["23+ Languages", "Auto-Detect", "Neural Voice"],
    stat: "23+ Dialects Supported",
  },
  {
    id: "persona",
    title: "Persona Management",
    subtitle: "Custom Brand Voice & Tone",
    description:
      "Configure avatar personality, greeting scripts, industry domain expertise, custom attire, and multi-modal behavior to match your brand's unique identity.",
    icon: "✨",
    tags: ["Brand Identity", "Domain Expert", "Custom Outfit"],
    stat: "100% Brand Tailored",
  },
  {
    id: "catalog",
    title: "AI Product Catalog",
    subtitle: "Interactive Discovery & Upselling",
    description:
      "Empower avatars to showcase 3D product models, compare features, recommend items based on customer preference, and drive instant conversions at retail kiosks.",
    icon: "🛍️",
    tags: ["3D Product Views", "AI Upselling", "Retail Kiosks"],
    stat: "+38% Sales Conversion",
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
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-xl shadow-inner">
                      {cap.icon}
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
                  <span className="text-3xl">{activeCapability.icon}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Feature Deep Dive
                    </span>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {activeCapability.title}
                    </h3>
                  </div>
                </div>

                <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
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

              {/* Interactive Mock Platform Preview Box */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-6">
                <div className="flex items-center justify-between text-xs text-gray-500 border-b border-white/10 pb-3 font-mono">
                  <span>SYSTEM_MODULE // DIHUAVA_CORE</span>
                  <span className="text-emerald-400">● ON-DEVICE ACTIVE</span>
                </div>

                <div className="mt-4 space-y-2 font-mono text-xs text-gray-400">
                  <p className="text-cyan-400">&gt; Initializing {activeCapability.title} Engine...</p>
                  <p>&gt; Offline RAG Index: Ready (0 cloud ping)</p>
                  <p className="text-gray-500">&gt; Neural Audio Synthesizer: 23 Languages loaded</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
