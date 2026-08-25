"use client";

import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Interaction",
    traditional: "Text-based",
    dihuava: "Voice + visual avatar",
    highlight: true,
  },
  {
    feature: "Customer Experience",
    traditional: "Screen/chat interface",
    dihuava: "Human-like conversation",
    highlight: true,
  },
  {
    feature: "Multilingual Capability",
    traditional: "Depends on implementation",
    dihuava: "29 global languages with voice cloning",
    highlight: false,
  },
  {
    feature: "Knowledge & Document Intelligence",
    traditional: "Cloud/API dependent",
    dihuava: "Local document & knowledge intelligence (RAG)",
    highlight: true,
  },
  {
    feature: "Privacy & Security",
    traditional: "Often cloud-based",
    dihuava: "On-device / offline air-gapped deployment",
    highlight: true,
  },
  {
    feature: "Physical Presence",
    traditional: "Digital screen / web popup",
    dihuava: "Hologram Box, kiosks & 3D displays",
    highlight: true,
  },
  {
    feature: "Customization",
    traditional: "Chat UI / basic personality",
    dihuava: "Avatar, voice, appearance & corporate persona",
    highlight: false,
  },
  {
    feature: "Deployment Capabilities",
    traditional: "Mainly digital",
    dihuava: "Digital + physical real-world environments",
    highlight: true,
  },
];

export default function ChatbotVsAvatar() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[600px] rounded-full bg-cyan-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Why Upgrade Your Technology
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Digital Human AI vs.{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Traditional Chatbots
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Compare why enterprise leaders are switching from text chatbots to interactive 3D digital human avatars.
          </p>
        </motion.div>

        {/* COMPARISON TABLE WITH STAGGERED REVEALS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950/90 backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-12 border-b border-white/10 bg-cyan-500/10 p-6 text-xs font-semibold uppercase tracking-wider text-gray-300 font-mono">
            <div className="col-span-4 sm:col-span-4">Capability</div>
            <div className="col-span-4 sm:col-span-4 text-gray-400">Traditional Chatbots</div>
            <div className="col-span-4 sm:col-span-4 text-cyan-300 font-bold flex items-center gap-1.5">
              <span>● DIHUAVA Digital Humans</span>
            </div>
          </div>

          <div className="divide-y divide-white/10 text-sm sm:text-base">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid grid-cols-12 items-center p-6 transition-colors hover:bg-white/[0.04]"
              >
                <div className="col-span-4 sm:col-span-4 font-semibold text-white">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 text-gray-400 text-xs sm:text-sm">
                  {row.traditional}
                </div>
                <div className="col-span-4 sm:col-span-4 text-cyan-300 font-medium text-xs sm:text-sm flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    ✓
                  </span>
                  <span>{row.dihuava}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
