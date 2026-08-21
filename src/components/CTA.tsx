"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 md:py-36 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[40px] border border-cyan-500/30 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 px-8 py-20 text-center md:px-16 md:py-28 shadow-2xl"
        >
          {/* Background Ambient Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-600/20 via-sky-600/10 to-purple-600/15 blur-[150px]" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Build the Future with AI
              </span>
            </span>

            <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl tracking-tight text-white">
              Bring intelligent AI
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 bg-clip-text text-transparent">
                experiences to your business.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-300">
              Discover how HS Global AI can transform customer engagement with AI Digital Humans, holographic experiences, spatial displays, and intelligent on-device solutions.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-sm font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
              >
                Book a Demo
                <span>→</span>
              </Link>
              <Link
                href="/contact/download-center"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-gray-200 backdrop-blur-md transition-all hover:border-cyan-400 hover:text-white"
              >
                Download Datasheets (PDF)
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}