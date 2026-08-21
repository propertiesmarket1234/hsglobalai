"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Deploy On-Device",
    subtitle: "Rapid Setup & Zero Cloud Dependencies",
    description:
      "Install DIHUAVA software onto your local hardware, Hologram Box, or kiosk in under 30 minutes. All AI models run locally with Low Latency.",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    icon: "🚀",
  },
  {
    step: "02",
    title: "Interact & Engage",
    subtitle: "Natural 3D Voice & Gesture Communication",
    description:
      "Digital Human avatars engage visitors in real time with natural voice conversations, multi-language detection, and smart document lookup.",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    icon: "💬",
  },
  {
    step: "03",
    title: "Convert & Analyze",
    subtitle: "Automate Tasks & Drive Retail Sales",
    description:
      "Guide customers to product selections, collect leads, resolve customer queries automatically, and monitor real-time analytics from your dashboard.",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    icon: "📈",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-cyan-900/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Simple 3-Step Process
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            How DIHUAVA{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Transforms Business.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            From hardware installation to instant customer conversion, experience seamless enterprise deployment.
          </p>
        </motion.div>

        {/* 3 STEPS GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30"
            >
              {/* Top Step Pill */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-white/30 group-hover:text-cyan-400 transition-colors">
                    {item.step}
                  </span>
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {item.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Progress Line */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
                <span>Phase {item.step} Deployment</span>
                <span className="text-cyan-400 font-mono">100% Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
