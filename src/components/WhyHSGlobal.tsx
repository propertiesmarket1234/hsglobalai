"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "100% Offline AI",
    subtitle: "Zero Cloud Dependency",
    description:
      "Run intelligent, high-performance AI digital humans locally without depending on cloud servers or external internet connectivity.",
    badge: "Local Processing",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    icon: (
      <svg
        className="h-8 w-8 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Multilingual Experiences",
    subtitle: "Real-Time Neural Speech",
    description:
      "Communicate naturally across 30+ global languages, voice cloning, and regional accents for global and localized customer experiences.",
    badge: "30+ Global Languages",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    icon: (
      <svg
        className="h-8 w-8 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7.45M19.07 4.93A10 10 0 113.07 19.07m16-14.14A10 10 0 003.07 4.93"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Custom AI Avatars",
    subtitle: "Tailored Brand Aesthetics",
    description:
      "Create bespoke 3D digital avatars engineered to represent your exact brand identity, voice, attire, and domain expertise.",
    badge: "Bespoke Design",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    icon: (
      <svg
        className="h-8 w-8 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Privacy by Design",
    subtitle: "Enterprise-Grade Security",
    description:
      "Keep sensitive customer interactions, biometric data, and proprietary knowledge bases safely secured within air-gapped systems.",
    badge: "Air-Gapped Privacy",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    icon: (
      <svg
        className="h-8 w-8 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function WhyHSGlobal() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
      {/* Subtle radial ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-cyan-900/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Why HS Global AI
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              AI built for the{" "}
              <span className="bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent">
                real world.
              </span>
            </h2>

            <p className="max-w-md text-base leading-7 text-gray-400 md:text-lg">
              Engineered to operate securely, intelligently, and reliably across physical environments with Low Latency and zero cloud dependency.
            </p>
          </div>
        </motion.div>

        {/* FEATURE CARDS GRID */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80 p-8 backdrop-blur-xl transition-colors duration-500 hover:bg-neutral-900/60 ${feature.borderColor}`}
            >
              {/* Radial gradient background on hover */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${feature.accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Light reflection sweep */}
              <motion.div
                className="pointer-events-none absolute -inset-full z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 4 + index,
                  ease: "easeInOut",
                }}
              />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold tracking-wider text-gray-500 group-hover:text-white transition-colors">
                    {feature.number}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-gray-400 backdrop-blur-sm group-hover:border-white/25 group-hover:text-white transition-all">
                    {feature.badge}
                  </span>
                </div>

                {/* Animated Icon */}
                <motion.div
                  className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/60 shadow-inner backdrop-blur-md group-hover:border-white/20 transition-all"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title & Subtitle */}
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                  Explore Architecture
                </span>
                <span className="text-sm text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}