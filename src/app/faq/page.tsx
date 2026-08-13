"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-cyan-600/15 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-6">
            Frequently Asked Questions — FAQs
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Questions.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Find detailed answers about DIHUAVA's On-Device AI engine, 3D Hologram Box setup, multilingual voice avatars, air-gapped security, and custom integrations.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ />

      <CTA />
      <Footer />
    </main>
  );
}
