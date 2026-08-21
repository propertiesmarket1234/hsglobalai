"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import IndustriesShowcase from "@/components/IndustriesShowcase";
import IndustryImpact from "@/components/IndustryImpact";
import ImmersiveUseCases from "@/components/ImmersiveUseCases";
import { motion } from "framer-motion";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* INDUSTRIES HERO SECTION WITH DUAL SLIDE-IN ANIMATION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[750px] rounded-full bg-gradient-to-b from-cyan-500/15 via-blue-600/5 to-transparent blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase font-mono">
              Industry-Specific AI Deployments
            </span>
          </motion.div>

          {/* Grid Layout with Dual Left and Right Slide Movements */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12 overflow-hidden">
            {/* LEFT COLUMN — SLIDES FROM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                Digital Human AI built for{" "}
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  every industry.
                </span>
              </h1>
            </motion.div>

            {/* RIGHT COLUMN — SLIDES FROM RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pb-2"
            >
              <p className="text-base leading-8 text-gray-300 sm:text-lg">
                Our Digital Human AI platform helps organizations automate customer interactions, improve service quality, reduce operational costs, and deliver engaging experiences through lifelike AI avatars and 3D holograms.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                  Banking & Finance
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                  Retail & Malls
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                  Healthcare
                </span>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* 8 MEASURABLE BUSINESS OUTCOMES / PROVEN IMPACT */}
      <IndustryImpact />

      {/* 6 INDUSTRY SHOWCASE SECTORS WITH LEFT/RIGHT SLIDE ANIMATIONS */}
      <IndustriesShowcase />

      {/* IMMERSIVE PORTRAITS THAT SPEAK & REAL-WORLD USE CASES */}
      <ImmersiveUseCases />

      <CTA />
      <Footer />
    </main>
  );
}