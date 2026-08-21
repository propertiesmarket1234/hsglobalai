"use client";

import Header from "@/components/Header";
import DihuavaPlatform from "@/components/DihuavaPlatform";
import Products from "@/components/Products";
import ImmersiveUseCases from "@/components/ImmersiveUseCases";
import AvatarFaceSelection from "@/components/AvatarFaceSelection";
import RealtimeTalkingAvatars from "@/components/RealtimeTalkingAvatars";
import BuildAvatarPipeline from "@/components/BuildAvatarPipeline";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import ChatbotVsAvatar from "@/components/ChatbotVsAvatar";
import Industries from "@/components/Industries";
import WhyHSGlobal from "@/components/WhyHSGlobal";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION WITH BACKSIDE DIGITAL HUMAN VIDEO */}
      <section className="relative flex min-h-[92vh] items-center justify-center px-6 pt-32 pb-24 overflow-hidden border-b border-white/10">
        {/* Horizontal Background Video (Backside of Text) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-45 filter brightness-90 contrast-110"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay Gradients for High-Contrast Readable Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
          <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[950px] rounded-full bg-cyan-600/20 blur-[170px]" />
          <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[750px] rounded-full bg-sky-600/15 blur-[170px]" />
        </div>

        {/* HERO TEXT OVERLAY (ABOVE THE VIDEO WITH Z-10) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center text-white z-10 max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(6,182,212,0.35)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
              Enterprise Digital Human Platform Powered by On-Device AI
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl drop-shadow-2xl">
            AI Experiences
            <br />
            Built for the{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Real World.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-200 sm:text-xl leading-relaxed drop-shadow-md">
            HS Global AI delivers lifelike holographic avatars, multilingual voice conversations, document intelligence, and on-device AI customer engagement—running 100% securely without relying on cloud services.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-9 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
            >
              Book a Demo
            </a>
            <a
              href="/products"
              className="rounded-full border border-cyan-400/40 bg-black/60 px-8 py-4 text-sm font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              Explore Products →
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-2 gap-4 border-t border-white/15 pt-10 sm:grid-cols-4 backdrop-blur-md rounded-2xl bg-black/50 p-6 shadow-2xl border border-cyan-500/20"
          >
            <div>
              <p className="text-3xl font-bold text-cyan-400 drop-shadow">100%</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-medium font-mono">Offline / On-Device AI</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white drop-shadow">30+</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-medium font-mono">Global Languages</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400 drop-shadow">&lt; 3000ms</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-medium font-mono">On-Device Low Latency</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white drop-shadow">4x</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-medium font-mono">Customer Engagement</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE PLATFORM CAPABILITIES */}
      <DihuavaPlatform />

      {/* PORTRAITS & HOLOGRAMS THAT SPEAK (IMMERSIVE USE CASES) */}
      <ImmersiveUseCases />

      {/* CREATE THE PERFECT FACE FOR YOUR BUSINESS (AVATAR FACE SELECTION) */}
      <AvatarFaceSelection />

      {/* REAL-TIME CONVERSATIONAL AVATARS WITH MEMORY */}
      <RealtimeTalkingAvatars />

      {/* FEATURED PRODUCTS */}
      <Products />

      {/* HOW WE BUILD YOUR AVATAR PIPELINE */}
      <BuildAvatarPipeline />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* SOLUTIONS SECTION */}
      <Solutions />

      {/* CHATBOT VS DIGITAL HUMAN COMPARISON */}
      <ChatbotVsAvatar />

      {/* INDUSTRIES SECTION */}
      <Industries />

      {/* WHY HS GLOBAL AI SECTION */}
      <WhyHSGlobal />

      {/* FAQ SECTION */}
      <FAQ />

      {/* CTA SECTION */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}