"use client";

import { motion } from "framer-motion";

export default function BuildAvatarPipeline() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[750px] rounded-full bg-cyan-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-4">
            Avatar Engineering Pipeline
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            How We{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              Build Your Avatar
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            From concept to a live, interactive digital human. Every character HS Global AI builds goes through the same rigorous pipeline. Enterprise quality, delivered in weeks.
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* CARD 1: TOP LEFT - Character Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Character Design</span> & Styling
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                We build your avatar using advanced rendering pipelines: custom skin tones, hair, wardrobe, and facial features tuned to your brand brief.
              </p>
            </div>

            {/* Custom SVG Icon Container */}
            <div className="mt-8 flex justify-center">
              <div className="relative flex h-36 w-full max-w-[200px] items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4 transition-transform group-hover:scale-105">
                <svg className="h-20 w-20 text-cyan-400/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="24" r="14" strokeDasharray="3 3" />
                  <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" />
                  <circle cx="32" cy="24" r="4" fill="currentColor" className="text-cyan-400" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: CENTER TALL - Real-Time Performance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-cyan-950/30 via-neutral-950/90 to-black p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.15)] lg:row-span-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
                ● Real-Time On-Device
              </div>
              <h3 className="text-2xl font-bold text-white">
                <span className="text-cyan-400">Real-Time</span> Performance
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Your avatar renders locally and streams on-device: high fidelity, zero cloud install required, sub-3000ms response time for fluid conversation.
              </p>
            </div>

            {/* Center Avatar Silhouette Illustration */}
            <div className="my-8 flex justify-center py-6">
              <div className="relative flex h-56 w-full max-w-[240px] items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/30 p-6 transition-transform group-hover:scale-105">
                {/* Glowing Background Core */}
                <div className="absolute h-24 w-24 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />
                <svg className="relative z-10 h-36 w-36 text-cyan-400" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="18" r="10" />
                  <line x1="32" y1="28" x2="32" y2="46" />
                  <line x1="20" y1="36" x2="44" y2="36" />
                  <line x1="32" y1="46" x2="22" y2="58" />
                  <line x1="32" y1="46" x2="42" y2="58" />
                  <path d="M18 60 Q32 54 46 60" strokeDasharray="2 2" stroke="currentColor" />
                  <circle cx="32" cy="18" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/60 p-4 text-center">
              <span className="text-xs font-mono text-cyan-400">⚡ Low-Latency On-Device Rendering Engine</span>
            </div>
          </motion.div>

          {/* CARD 3: TOP RIGHT - Knowledge & AI Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Knowledge</span> & AI Integration
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                We wire your knowledge base, brand guidelines, and LLM of choice into the character so every response stays on-brand, accurate, and contextually aware.
              </p>
            </div>

            {/* Custom SVG Icon Container */}
            <div className="mt-8 flex justify-center">
              <div className="relative flex h-36 w-full max-w-[200px] items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4 transition-transform group-hover:scale-105">
                <svg className="h-20 w-20 text-cyan-400/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 44C12 44 8 40 8 34C8 28.5 12 24.5 17 24C19 17 25 12 32 12C40 12 46.5 17.5 47.5 25C52.5 25.5 56 29.5 56 35C56 40.5 51.5 44 46 44Z" strokeDasharray="3 3" />
                  <circle cx="32" cy="28" r="3" fill="currentColor" className="text-cyan-400" />
                  <circle cx="22" cy="36" r="2.5" fill="currentColor" className="text-cyan-400" />
                  <circle cx="42" cy="36" r="2.5" fill="currentColor" className="text-cyan-400" />
                  <line x1="32" y1="28" x2="22" y2="36" />
                  <line x1="32" y1="28" x2="42" y2="36" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: BOTTOM LEFT - Voice & Personality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Voice</span> & Personality
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Cloned or synthetic voice, configured in your native language and tone. Multilingual by default, with real-time speech response.
              </p>
            </div>

            {/* Custom SVG Icon Container */}
            <div className="mt-8 flex justify-center">
              <div className="relative flex h-36 w-full max-w-[200px] items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4 transition-transform group-hover:scale-105">
                <svg className="h-20 w-20 text-cyan-400/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="24" y="14" width="16" height="24" rx="8" />
                  <path d="M16 34c0 8.837 7.163 16 16 16s16-7.163 16-16" />
                  <line x1="32" y1="50" x2="32" y2="58" />
                  <path d="M8 34 Q 12 28, 16 34 T 24 34" stroke="currentColor" />
                  <path d="M40 34 Q 48 28, 52 34 T 56 34" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: BOTTOM RIGHT - Deploy Anywhere */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Deploy</span> Anywhere
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Web, mobile, kiosk, 3D Hologram Box, spatial display or live stage. Your avatar runs on any device, any screen, in any country, around the clock.
              </p>
            </div>

            {/* Custom SVG Icon Container */}
            <div className="mt-8 flex justify-center">
              <div className="relative flex h-36 w-full max-w-[200px] items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4 transition-transform group-hover:scale-105">
                <svg className="h-20 w-20 text-cyan-400/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="32" r="20" />
                  <ellipse cx="32" cy="32" rx="8" ry="20" />
                  <line x1="12" y1="32" x2="52" y2="32" />
                  <rect x="10" y="10" width="6" height="6" rx="1" fill="currentColor" className="text-cyan-400" />
                  <rect x="48" y="10" width="6" height="6" rx="1" fill="currentColor" className="text-cyan-400" />
                  <rect x="48" y="48" width="6" height="6" rx="1" fill="currentColor" className="text-cyan-400" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
