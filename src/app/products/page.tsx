"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";
import DihuavaPlatform from "@/components/DihuavaPlatform";
import ChatbotVsAvatar from "@/components/ChatbotVsAvatar";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* PRODUCTS HERO SECTION WITH BACKSIDE DIGITAL HUMAN VIDEO */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        {/* Horizontal Background Video (Backside of Text) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-40 filter brightness-90 contrast-110"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay Gradients for High-Contrast Readable Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category Tag Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                HS Global AI Suite — Products
              </span>
            </div>

            {/* Grid Layout with Balanced Alignment */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              {/* Heading Column */}
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1] drop-shadow-2xl">
                  AI products built for{" "}
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    real-world experiences.
                  </span>
                </h1>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-base leading-8 text-gray-200 sm:text-lg drop-shadow">
                  Explore intelligent AI solutions designed to connect digital
                  experiences with physical environments — from AI Digital Humans
                  and holographic avatars to spatial displays and Virtual Try-On.
                </p>

                {/* Capability Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    Offline AI Engine
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    Real-Time Interaction
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    3D Holographics
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Divider Accent */}
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* CORE PLATFORM CAPABILITIES ENGINE */}
      <DihuavaPlatform />

      {/* CHATBOT VS DIGITAL HUMAN AVATAR COMPARISON */}
      <ChatbotVsAvatar />

      {/* CALL TO ACTION SECTION */}
      <CTA />

      <Footer />
    </main>
  );
}