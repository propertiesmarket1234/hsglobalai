"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

const features = [
  {
    number: "01",
    title: "Secure On-Device AI",
    subtitle: "Air-Gapped Data Privacy",
    description:
      "Deploy high-performance digital humans that run 100% locally on physical edge hardware. Protect sensitive customer interactions and business intelligence with zero cloud data leakage.",
    badge: "Local Processing",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    imageSrc: "/products/hologram-box/hologram-box.png",
    icon: (
      <svg
        className="h-6 w-6 text-cyan-400"
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
    title: "Multilingual Voice AI",
    subtitle: "Human-Like Conversation",
    description:
      "Engage global visitors with natural, human-like voice interaction across 29+ languages, regional accents, and per-persona voice cloning for seamless customer service.",
    badge: "29+ Global Languages",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    imageSrc: "/images/avatars/talking_lady_avatar.png",
    icon: (
      <svg
        className="h-6 w-6 text-cyan-400"
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
    title: "Custom Brand Avatars",
    subtitle: "Tailored Corporate Persona",
    description:
      "Create bespoke 3D digital avatars engineered to embody your exact brand identity, voice, attire, and domain expertise for authentic customer engagement.",
    badge: "Bespoke Design",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    imageSrc: "/images/avatars/executive_lady.png",
    icon: (
      <svg
        className="h-6 w-6 text-cyan-400"
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
    title: "Knowledge & Catalog AI",
    subtitle: "Intelligent Business Search",
    description:
      "Instantly connect corporate document RAG and product catalog data to deliver grounded, real-time answers across 3D hologram boxes, kiosks, and digital displays.",
    badge: "Document & Catalog RAG",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "group-hover:border-cyan-500/40",
    imageSrc: "/products/digital-humans/digital-human-dashboard.jpg",
    icon: (
      <svg
        className="h-6 w-6 text-cyan-400"
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
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const wComp = (dict as any).whyHsGlobalComponent || {};

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white border-t border-white/10">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-950/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {wComp.badge || "Why HS Global AI"}
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {wComp.titlePrefix || "AI built for the "}{" "}
              <span className="bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent">
                {wComp.titleHighlight || "real world."}
              </span>
            </h2>

            <p className="max-w-md text-base leading-7 text-gray-400 md:text-lg">
              {wComp.subtitle || "Engineered to operate securely, intelligently, and reliably across physical environments with Low Latency and zero cloud dependency."}
            </p>
          </div>
        </motion.div>

        {/* FEATURE CARDS GRID WITH PICTORIAL PREVIEWS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80 p-6 backdrop-blur-xl transition-colors duration-500 hover:bg-neutral-900/60 ${feature.borderColor}`}
            >
              {/* Radial gradient background on hover */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${feature.accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold tracking-wider text-gray-500 group-hover:text-white transition-colors">
                    {feature.number}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-gray-400 backdrop-blur-sm group-hover:border-white/25 group-hover:text-white transition-all">
                    {feature.badge}
                  </span>
                </div>

                {/* Pictorial Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 my-2">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-1.5 filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-2 left-2 flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-500/40 bg-black/80 text-cyan-300 backdrop-blur-md shadow-md">
                    {feature.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                  Explore Tech
                </span>
                <span className="text-sm text-cyan-400 group-hover:translate-x-1 transition-all">
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