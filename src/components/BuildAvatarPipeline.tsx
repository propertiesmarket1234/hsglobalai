"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
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

        {/* BENTO GRID LAYOUT WITH HIGH-RES PICTORIAL PREVIEWS */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* CARD 1: TOP LEFT - Character Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Character Design</span> & Styling
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-gray-400">
                Custom skin tones, attire, lip-sync rigging, and facial features tuned to your brand identity.
              </p>
            </div>

            {/* Photo Container */}
            <div className="mt-6 flex justify-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-lg">
                <Image
                  src="/images/avatars/futuristic_female_avatar.png"
                  alt="Avatar Character Design & Styling"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-[11px] text-cyan-300 font-semibold">
                  3D Photorealistic Rigging
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: CENTER TALL - Real-Time Performance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-cyan-950/30 via-neutral-950/90 to-black p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.15)] lg:row-span-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
                ● Real-Time On-Device
              </div>
              <h3 className="text-2xl font-bold text-white">
                <span className="text-cyan-400">Real-Time</span> Performance
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Your avatar renders locally and streams on-device: high fidelity, zero cloud install required, Low Latency response time.
              </p>
            </div>

            {/* Photo Preview Frame */}
            <div className="my-6 flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-2xl border border-cyan-400/40 bg-black/80 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <Image
                  src="/products/hologram-box/hologram-box.png"
                  alt="Real-Time Holographic Performance Unit"
                  fill
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="inline-block rounded-full bg-cyan-950/90 border border-cyan-500/40 px-3 py-1 text-[10px] text-cyan-300 font-bold">
                    60 FPS Local Display
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/60 p-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400">
                <Zap className="h-3.5 w-3.5" />
                <span>Low Latency On-Device Rendering Engine</span>
              </span>
            </div>
          </motion.div>

          {/* CARD 3: TOP RIGHT - Knowledge & AI Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Knowledge</span> & AI Integration
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-gray-400">
                Wire corporate PDFs, brand guidelines, and product catalogues into grounded RAG.
              </p>
            </div>

            {/* Photo Container */}
            <div className="mt-6 flex justify-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-lg">
                <Image
                  src="/products/digital-humans/digital-human-dashboard.jpg"
                  alt="Knowledge Base Document RAG Integration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-[11px] text-cyan-300 font-semibold">
                  Air-Gapped Vector Search RAG
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: BOTTOM LEFT - Voice & Personality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Voice</span> & Personality
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-gray-400">
                Voice cloning across 29+ languages with natural lip-sync synthesis.
              </p>
            </div>

            {/* Photo Container */}
            <div className="mt-6 flex justify-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-lg">
                <Image
                  src="/images/avatars/talking_lady_avatar.png"
                  alt="Voice Cloning & Neural Speech Synthesis"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-[11px] text-cyan-300 font-semibold">
                  🎙️ Cloned Neural Audio Output
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: BOTTOM RIGHT - Deploy Anywhere */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-neutral-900/90 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-cyan-400">Deploy</span> Anywhere
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-gray-400">
                Deploy on 3D Hologram Boxes, kiosks, spatial screens, or live event stages.
              </p>
            </div>

            {/* Photo Container */}
            <div className="mt-6 flex justify-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-lg">
                <Image
                  src="/images/use-cases/jewellery_hologram_kiosk.png"
                  alt="Deployment on Kiosks & Spatial Holograms"
                  fill
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-[11px] text-cyan-300 font-semibold">
                  Multi-Screen & Holographic Hardware
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
