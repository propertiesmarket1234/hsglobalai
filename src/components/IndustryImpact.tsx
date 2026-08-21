"use client";

import { motion } from "framer-motion";

const impacts = [
  {
    title: "Reduced Operational Costs",
    description:
      "Automate repetitive customer inquiries and front-desk workflows while allowing human staff to focus on high-value advisory tasks.",
    icon: "💰",
    stat: "-45% Support Costs",
  },
  {
    title: "Higher Customer Engagement",
    description:
      "Interactive 3D Digital Human AI experiences increase visitor attention, dwell time, and overall brand satisfaction.",
    icon: "📈",
    stat: "4x Higher Dwell Time",
  },
  {
    title: "Faster Information Delivery",
    description:
      "Provide instant, accurate responses to customer questions without queues or waiting for staff availability.",
    icon: "⚡",
    stat: "< 3000ms Answer Time",
  },
  {
    title: "24/7 Service Availability",
    description:
      "Deliver consistent, high-quality customer assistance across all physical branches, kiosks, and time zones.",
    icon: "🕒",
    stat: "99.9% Uptime",
  },
  {
    title: "Multilingual Communication",
    description:
      "Engage visitors in 30+ primary languages with automatic language detection & voice cloning.",
    icon: "🌍",
    stat: "30+ Languages",
  },
  {
    title: "Improved Brand Perception",
    description:
      "Create futuristic, memorable holographic interactions that position your organization as an innovative market leader.",
    icon: "⭐",
    stat: "98% Customer Satisfaction",
  },
  {
    title: "Enterprise Security & Privacy",
    description:
      "Built for strict corporate compliance with 100% local on-device processing, air-gapped security, and zero data pings.",
    icon: "🔒",
    stat: "100% Air-Gapped",
  },
  {
    title: "Scalable Across Locations",
    description:
      "Deploy and manage digital humans across hundreds of branch kiosks, hospitals, retail stores, and campuses from one dashboard.",
    icon: "🏢",
    stat: "Unlimited Kiosks",
  },
];

export default function IndustryImpact() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 border-t border-white/10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-cyan-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Measurable Business Results
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Proven Impact Across{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Industries.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Our platform helps organizations increase operational efficiency, deliver instant customer service, and strengthen brand perception.
          </p>
        </motion.div>

        {/* 8 IMPACT CARDS GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-neutral-900/60"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-2xl shadow-inner group-hover:border-cyan-500/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {item.stat}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
