"use client";

import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "User Interaction & Engagement",
    traditional: "Static text-only chatbox in corner",
    dihuava: "Lifelike 3D Avatar with natural speech & gestures",
    highlight: true,
  },
  {
    feature: "Engagement Retention",
    traditional: "Low (~20-30% retention rate)",
    dihuava: "4x Higher Customer Retention & Delight",
    highlight: true,
  },
  {
    feature: "Data Privacy & Security",
    traditional: "Cloud API pings; data leakage risk",
    dihuava: "100% On-Device / Air-Gapped Local AI",
    highlight: true,
  },
  {
    feature: "Document Intelligence (RAG)",
    traditional: "Requires cloud connection & monthly token fees",
    dihuava: "Instant local PDF/RAG lookup with zero cloud latency",
    highlight: false,
  },
  {
    feature: "Physical Real-World Presence",
    traditional: "Web browser popup only",
    dihuava: "3D Hologram Box, Smart Mirrors, Kiosks & Screens",
    highlight: true,
  },
  {
    feature: "Multilingual Voice Capabilities",
    traditional: "Robotic text-to-speech engine",
    dihuava: "Human-like neural speech in 23+ languages",
    highlight: false,
  },
];

export default function ChatbotVsAvatar() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[450px] w-[550px] rounded-full bg-cyan-900/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Why Upgrade Your Technology
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Digital Human AI vs.{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Traditional Chatbots
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Compare why enterprise leaders are switching from text chatbots to interactive 3D digital human avatars.
          </p>
        </motion.div>

        {/* COMPARISON TABLE */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-12 border-b border-white/10 bg-white/5 p-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <div className="col-span-4 sm:col-span-4">Capability</div>
            <div className="col-span-4 sm:col-span-4 text-gray-500">Traditional Chatbots</div>
            <div className="col-span-4 sm:col-span-4 text-cyan-400 font-bold flex items-center gap-1.5">
              <span>● DIHUAVA Digital Humans</span>
            </div>
          </div>

          <div className="divide-y divide-white/10 text-sm sm:text-base">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center p-6 transition-colors hover:bg-white/[0.03]"
              >
                <div className="col-span-4 sm:col-span-4 font-semibold text-white">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 text-gray-400 text-xs sm:text-sm">
                  {row.traditional}
                </div>
                <div className="col-span-4 sm:col-span-4 text-cyan-300 font-medium text-xs sm:text-sm flex items-center gap-2">
                  <span className="text-emerald-400 text-base">✓</span>
                  <span>{row.dihuava}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
