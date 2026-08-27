"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, DollarSign } from "lucide-react";

// Competitive Digital Human Market Comparison Data
const marketComparisonData = [
  {
    capability: "Offline Network Resilience",
    dihuava: "Runs 100% offline",
    cloudApis: "Session drops immediately when Wi-Fi dies",
    enterprisePlatforms: "Session drops when network disconnects",
    gpuBlueprints: "Fails if external APIs drop connection",
  },
  {
    capability: "Photo with Avatar (Selfie + QR)",
    dihuava: "Native Selfie Pose & QR Instant Mobile Sharing",
    cloudApis: "Not offered",
    enterprisePlatforms: "Not offered",
    gpuBlueprints: "Not offered",
  },
  {
    capability: "Offline Air-Gapped Execution",
    dihuava: "100% On-Device (STT, RAG, LLM, TTS, Lip-Sync)",
    cloudApis: "Streamed from cloud server",
    enterprisePlatforms: "Cloud-first (Requires active cloud connection)",
    gpuBlueprints: "Runs on GPU but calls third-party cloud APIs",
  },
  {
    capability: "Visitor Speech Data Privacy",
    dihuava: "100% Air-Gapped (Speech & voice never leave building)",
    cloudApis: "Streamed over internet to vendor servers",
    enterprisePlatforms: "Streamed to cloud servers",
    gpuBlueprints: "Depends on external API endpoints configured",
  },
  {
    capability: "On-Site Hardware Footprint",
    dihuava: "1 Compact Mac Mini (Fits behind kiosk screen)",
    cloudApis: "None on-site (Heavy monthly cloud API bills)",
    enterprisePlatforms: "Vendor hosted (Cloud subscription)",
    gpuBlueprints: "2x Datacenter GPUs + 2x Servers PER single stream",
  },
  {
    capability: "Talk-Time Cost Structure",
    dihuava: "$0 Per Minute (Fixed local compute electricity)",
    cloudApis: "$0.10 – $0.37 per active minute",
    enterprisePlatforms: "High monthly cloud subscription tiers",
    gpuBlueprints: "Heavy GPU CapEx + third-party API usage fees",
  },
  {
    capability: "Document Intelligence (RAG)",
    dihuava: "Native On-Device RAG + Cross-Encoder Re-Ranking",
    cloudApis: "Not included (Bring your own external API)",
    enterprisePlatforms: "Requires expensive custom integration build",
    gpuBlueprints: "Reference code pattern (Assemble yourself)",
  },
  {
    capability: "Spreadsheet AI Product Catalogue",
    dihuava: "CSV Upload + Picture-in-Picture Cards & MP4 Videos",
    cloudApis: "Not included",
    enterprisePlatforms: "Custom enterprise build required",
    gpuBlueprints: "Not included",
  },
  {
    capability: "Voice Cloning",
    dihuava: "Zero-shot from one 5–30s clip, synthesized on-device",
    cloudApis: "Usually via third-party voice vendor (cloud-billed)",
    enterprisePlatforms: "Vendor / partner voices",
    gpuBlueprints: "ElevenLabs in reference config",
  },
  {
    capability: "Global Spoken Languages",
    dihuava: "29+ Global Languages (100% On-Device)",
    cloudApis: "Varies, cloud-dependent",
    enterprisePlatforms: "Varies (Cloud subscription)",
    gpuBlueprints: "Depends on configured NIMs",
  },
  {
    capability: "Offline Indian Language Support",
    dihuava: "7 Specialized Indian Languages (Hindi, Tamil, Telugu, etc.)",
    cloudApis: "Cloud only",
    enterprisePlatforms: "Cloud only",
    gpuBlueprints: "Cloud only",
  },
];

export default function ChatbotVsAvatar() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10" id="comparison">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[600px] rounded-full bg-cyan-900/10 blur-[170px]" />
      <div className="pointer-events-none absolute left-1/4 top-10 h-[400px] w-[500px] rounded-full bg-blue-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
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
              Enterprise Platform Comparison
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            DIHUAVA On-Device Digital Humans vs.{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Standard Cloud Digital Humans
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            Compare why enterprise leaders choose DIHUAVA’s 100% on-device AI stack over cloud-streamed avatar services, enterprise platforms, and GPU blueprints.
          </p>
        </motion.div>

        {/* 3 STRATEGIC ENTERPRISE WINNERS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 to-black/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Your Customer Data Never Leaves</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Speech recognition, RAG retrieval, dialogue, and voice synthesis run 100% on-device. Zero visitor audio or confidential documents are streamed over the internet to external cloud servers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 to-black/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">1 Compact Computer vs. 2 Datacenter GPUs</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Legacy platforms require multiple heavy datacenter GPUs per simultaneous stream. DIHUAVA runs the complete pipeline locally on a single compact Mac Mini that fits behind the display screen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 to-black/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <DollarSign className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">The Meter Never Runs ($0/min)</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Cloud avatar services charge $0.10–$0.37 per active minute. DIHUAVA operates at fixed local compute costs—your kiosks run 24/7 around the clock with zero per-minute cloud API charges.
            </p>
          </motion.div>
        </div>

        {/* MASTER COMPARISON MATRIX TABLE */}
        <div className="mt-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Master Feature Matrix</span>
          <h3 className="text-2xl font-bold text-white sm:text-3xl mt-1">
            DIHUAVA On-Device AI vs. Standard Digital Humans
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-x-auto rounded-3xl border border-cyan-500/30 bg-neutral-950/90 backdrop-blur-xl shadow-2xl"
        >
          <table className="w-full min-w-[900px] text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-cyan-950/40 text-xs font-semibold uppercase tracking-wider text-gray-300">
                <th className="p-6">Capability</th>
                <th className="p-6 text-cyan-300 font-bold bg-cyan-500/10 border-x border-cyan-500/20">
                  ● DIHUAVA (On-Device)
                </th>
                <th className="p-6 text-gray-400">Cloud Avatar APIs</th>
                <th className="p-6 text-gray-400">Enterprise Platforms</th>
                <th className="p-6 text-gray-400">GPU Blueprints</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {marketComparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white max-w-[200px]">
                    {row.capability}
                  </td>
                  <td className="p-6 text-cyan-300 font-bold bg-cyan-950/20 border-x border-cyan-500/20">
                    <div className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 mt-0.5">
                        ✓
                      </span>
                      <span>{row.dihuava}</span>
                    </div>
                  </td>
                  <td className="p-6 text-gray-400 font-medium">
                    {row.cloudApis}
                  </td>
                  <td className="p-6 text-gray-400 font-medium">
                    {row.enterprisePlatforms}
                  </td>
                  <td className="p-6 text-gray-400 font-medium">
                    {row.gpuBlueprints}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
