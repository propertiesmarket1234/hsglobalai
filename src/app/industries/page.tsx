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

      {/* INDUSTRIES HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[750px] rounded-full bg-gradient-to-b from-cyan-500/15 via-blue-600/5 to-transparent blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                Industry-Specific AI Deployments
              </span>
            </div>

            {/* Grid Layout */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                  Digital Human AI built for{" "}
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    every industry.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-base leading-8 text-gray-300 sm:text-lg">
                  Our Digital Human AI platform helps organizations automate customer interactions, improve service quality, reduce operational costs, and deliver engaging experiences through lifelike AI avatars and 3D holograms.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                    Banking & Finance
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                    Retail & Malls
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                    Healthcare
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 8 MEASURABLE BUSINESS OUTCOMES / PROVEN IMPACT */}
      <IndustryImpact />

      {/* 6 INDUSTRY SHOWCASE SECTORS */}
      <IndustriesShowcase />

      {/* IMMERSIVE PORTRAITS THAT SPEAK & REAL-WORLD USE CASES */}
      <ImmersiveUseCases />

      <CTA />
      <Footer />
    </main>
  );
}