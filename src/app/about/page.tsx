"use client";

import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const missionVisionValues = [
  {
    title: "Our Mission",
    tagline: "Enhancing Human-AI Interaction",
    description:
      "To create lifelike AI-driven hologram experiences that enhance human-machine interaction and deliver meaningful business value. We empower organizations with intelligent digital human solutions that streamline communication and automate routine tasks.",
    icon: "🎯",
    accentColor: "from-cyan-500/20 via-blue-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    badge: "Mission Statement",
  },
  {
    title: "Our Vision",
    tagline: "Redefining Customer Engagement",
    description:
      "To become the global leader in Digital Human and Holographic AI platforms. We envision a future where AI avatars seamlessly integrate into physical business operations, providing personalized, real-time interactions across all touchpoints.",
    icon: "👁️",
    accentColor: "from-purple-500/20 via-indigo-500/5 to-transparent",
    accentGlow: "rgba(168, 85, 247, 0.3)",
    badge: "Global Vision",
  },
  {
    title: "Our Core Values",
    tagline: "Ethical AI & Data Privacy",
    description:
      "Driven by innovation, trust, and ethical AI development. We prioritize data privacy, air-gapped security, and responsible AI practices while delivering immersive customer experiences that create long-term value.",
    icon: "💎",
    accentColor: "from-emerald-500/20 via-teal-500/5 to-transparent",
    accentGlow: "rgba(16, 185, 129, 0.3)",
    badge: "Ethics & Security",
  },
];

const enterprisePillars = [
  {
    title: "Digital Human AI Assistant",
    description:
      "Create lifelike AI assistants that engage customers naturally through voice, visual expressions, and intelligent multi-turn conversations.",
    icon: "👤",
  },
  {
    title: "Multilingual Voice AI & Voice Cloning",
    description:
      "Communicate with global customers across 30+ languages with real-time neural speech synthesis & voice cloning.",
    icon: "🌍",
  },
  {
    title: "Interactive Experience Solutions",
    description:
      "Deliver engaging customer experiences through 3D Hologram Boxes, spatial displays, and interactive retail kiosks.",
    icon: "📺",
  },
  {
    title: "Avatar Customization & Voice Cloning",
    description:
      "Build branded digital humans tailored to your industry with custom 3D facial rendering, voice cloning, tone of voice, and custom 3D attire.",
    icon: "✨",
  },
  {
    title: "Business Analytics Dashboard",
    description:
      "Track customer interactions, engagement metrics, conversation trends, and kiosk performance through real-time analytics.",
    icon: "📊",
  },
  {
    title: "Enterprise Scalability",
    description:
      "Deploy Digital Human AI solutions seamlessly across multi-location branches, departments, web apps, and physical kiosks.",
    icon: "⚡",
  },
  {
    title: "Secure Enterprise Architecture",
    description:
      "Protect sensitive customer data with 100% on-device local execution, air-gapped security, and role-based access controls.",
    icon: "🔒",
  },
  {
    title: "Continuous Innovation",
    description:
      "Stay ahead with evolving LLM architectures, enhanced RAG document intelligence, and future-ready platform upgrades.",
    icon: "🚀",
  },
];

const approachItems = [
  {
    number: "01",
    title: "Offline-First AI Architecture",
    description:
      "Designed to operate 100% locally on GPU edge hardware without depending on external cloud servers or internet pings.",
  },
  {
    number: "02",
    title: "Privacy by Design",
    description:
      "Keep sensitive customer interactions, biometric data, and proprietary knowledge bases safely secured within air-gapped systems.",
  },
  {
    number: "03",
    title: "Multilingual Intelligence & Voice Cloning",
    description:
      "Natural AI interactions designed to support global customers across 30+ languages, voice cloning, and regional dialects.",
  },
  {
    number: "04",
    title: "Built for Physical Spaces",
    description:
      "Engineered for practical real-world deployment across retail stores, banking halls, healthcare clinics, and executive lobbies.",
  },
];

const industries = [
  { name: "Banking & Financial Services", count: "Branch Avatars & Loan Advisory" },
  { name: "Retail & Shopping Malls", count: "3D Holographic Product Guides" },
  { name: "Corporate & Executive Lobbies", count: "Virtual Receptionists & Wayfinding" },
  { name: "Tourism, Museums & Exhibitions", count: "Multilingual Tour Docents" },
  { name: "Healthcare & Telemedicine", count: "Patient Intake & Triage AI" },
  { name: "Education & Corporate Training", count: "Interactive 3D AI Instructors" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                About HS Global AI — The Digital Human Company
              </span>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                  Building the future of{" "}
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    AI-powered customer engagement.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-base leading-8 text-gray-300 sm:text-lg">
                  HS Global AI is a technology company specializing in Digital Human AI, Voice AI, and intelligent customer engagement solutions designed to connect digital experiences with physical environments.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-cyan-400">
                  <span>📍 Global HQ: Singapore (20 Collyer Quay, #09-01)</span>
                </div>
              </div>
            </div>

            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-t border-white/10">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Our Core Foundation
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30"
              >
                {/* Accent glow on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${item.accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-300 backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {item.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HS GLOBAL AI — 8 ENTERPRISE PILLARS */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-t border-white/10">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Why Choose HS Global AI
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Enterprise AI Solutions Built For Real Results
            </h2>
            <p className="mt-4 max-w-2xl text-base text-gray-400">
              Our platform combines advanced AI technologies with practical business applications, helping organizations improve customer experiences, reduce operational costs, and scale efficiently.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enterprisePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-neutral-900/60"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-2xl shadow-inner group-hover:border-cyan-500/40 transition-colors">
                    {pillar.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-gray-400 group-hover:text-gray-300 transition-colors">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-t border-white/10">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Our Approach
              </span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Intelligent by design. Practical by nature.
              </h2>
            </div>
            <p className="text-base text-gray-400 leading-7">
              We design AI experiences around the realities of physical environments, business operations, customer interactions, privacy, and accessibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {approachItems.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-white/10 bg-neutral-950/60 p-8 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-neutral-900/50"
              >
                <span className="font-mono text-sm font-semibold text-cyan-400">
                  {item.number}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-t border-white/10">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Target Sectors
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Industries We Serve
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="group flex flex-col justify-between py-6 sm:flex-row sm:items-center transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-semibold text-gray-500">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </h3>
                </div>
                <span className="mt-2 text-xs font-medium text-gray-400 sm:mt-0">
                  {ind.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}