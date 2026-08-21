"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    id: "offline-rag",
    title: "Offline RAG & Enterprise Knowledge",
    description:
      "Ingest custom corporate PDFs, product catalogs, banking rules, and training materials directly onto the local device. DIHUAVA delivers instant, offline search responses with Low Latency and total data privacy.",
    icon: "⚡",
    metrics: ["100% Offline Capable", "< 3000ms Response", "Low Latency"],
  },
  {
    id: "multilingual-voice",
    title: "Multilingual Support (30+ Languages)",
    description:
      "Fluid automatic language detection supporting 30+ global languages and regional dialects. Natural speech synthesis with pitch modulation, voice cloning, and lip-sync precision.",
    icon: "🌐",
    metrics: ["30+ Languages", "Auto-Language Detect", "Voice Cloning AI"],
  },
  {
    id: "persona-engine",
    title: "Avatar Customization & Voice Cloning",
    description:
      "Configure 3D facial mesh, wardrobe, gender, voice cloning, tone of voice, and micro-gestures. From historical legends like Einstein and Ratan Tata to custom corporate brand ambassadors.",
    icon: "🎭",
    metrics: ["Custom 3D Avatars", "Voice Cloning", "Brand Tone Control"],
  },
  {
    id: "multi-device",
    title: "Universal Hardware Deployment",
    description:
      "Engineered to run seamlessly across touch kiosks, 3D Hologram Boxes, spatial volumetric displays, mobile apps, web browsers, and large-scale LED walls.",
    icon: "🖥️",
    metrics: ["Holograms & Displays", "Web & Kiosk Ready", "24/7 Continuous Operation"],
  },
];

const technicalSpecs = [
  { label: "Deployment Engine", value: "On-Device Local AI Workstation / Cloud API Hybrid" },
  { label: "RAG Document Formats", value: "PDF, DOCX, TXT, CSV, Enterprise Knowledge Bases" },
  { label: "Low Latency", value: "< 300ms Speech Synthesis & Animation Generation" },
  { label: "Languages Supported", value: "English, Mandarin, Arabic, Spanish, Hindi, French + 17 dialect accents" },
  { label: "Rendering Tech", value: "Real-Time 3D Neural Facial Avatar Synthesis" },
  { label: "Security & Privacy", value: "Local Storage Encryption, Zero Data Leakage, SOC2 Compliant Arch" },
];

export default function DihuavaProductPage() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href="/products" className="hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">DIHUAVA Platform</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  Flagship AI Engine
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                DIHUAVA AI Digital Human{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  Avatar Platform.
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                The core intelligent engine powering real-time conversational avatars for corporate lobbies, high-end banking, retail kiosks, and museum exhibits. Featuring sub-second response times and offline RAG document intelligence.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  Request DIHUAVA Demo →
                </Link>
                <Link
                  href="/contact/download-center"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  Download Brochure (PDF)
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950/80 p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src="/products/digital-humans/digital-human-new.png"
                    alt="DIHUAVA AI Digital Human"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* System Overlay Status */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/80 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400">● DIHUAVA CORE v4.2</span>
                      <span className="text-emerald-400">STATUS: ACTIVE</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-300">
                      On-Device Neural Avatar & Speech Synthesizer Running
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM ARCHITECTURE & CAPABILITIES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Engineered for seamless, off-line enterprise AI.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/40 text-2xl">
                      {feature.icon}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {feature.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      ✓ {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              System Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              DIHUAVA Enterprise Technical Specs
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-2xl backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {technicalSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-2 px-6 py-4.5 sm:grid-cols-3 sm:gap-4 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-cyan-300 font-mono">
                    {spec.label}
                  </span>
                  <span className="text-sm text-gray-300 sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD BROCHURES */}
      <section className="relative overflow-hidden bg-black px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to explore DIHUAVA documentation?
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Access product brochures, inquiry templates, and system architecture guides in our Download Center.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/download-center"
              className="rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Go to Download Center →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
