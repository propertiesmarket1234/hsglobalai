"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Deploy On-Device",
    subtitle: "Rapid Setup & Zero Cloud Dependencies",
    description:
      "Install DIHUAVA software onto your local hardware, Hologram Box, or kiosk in under 30 minutes. All AI models run locally with Low Latency.",
    icon: "🚀",
  },
  {
    step: "02",
    title: "Interact & Engage",
    subtitle: "Natural 3D Voice & Gesture Communication",
    description:
      "Digital Human avatars engage visitors in real time with natural voice conversations, multi-language detection, and smart document lookup.",
    icon: "💬",
  },
  {
    step: "03",
    title: "Convert & Analyze",
    subtitle: "Automate Tasks & Drive Retail Sales",
    description:
      "Guide customers to product selections, collect leads, resolve customer queries automatically, and monitor real-time analytics from your dashboard.",
    icon: "📈",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] rounded-full bg-cyan-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Simple 3-Step Process
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            How DIHUAVA{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Transforms Business.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            From hardware installation to instant customer conversion, experience seamless enterprise deployment.
          </p>
        </motion.div>

        {/* 3 STEPS GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]"
            >
              {/* Top Step Pill */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <span className="font-mono text-4xl font-extrabold text-white/20 group-hover:text-cyan-400 transition-colors">
                    {item.step}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/40 text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {item.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Progress Line */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Phase {item.step} Deployment</span>
                <span className="text-cyan-400 font-semibold">100% Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
