"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export interface UseCaseStory {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  highlightColor: string;
  description: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  imageSrc: string;
  imageAlt: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
}

export default function ImmersiveUseCases() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const uc = dict.home.useCases;

  const lPath = (path: string) => {
    if (currentLocale === "en") return path;
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  const useCases: UseCaseStory[] = [
    {
      id: "museums",
      badge: uc.museums.badge,
      titlePrefix: uc.museums.titlePrefix,
      titleHighlight: uc.museums.titleHighlight,
      highlightColor: "from-cyan-400 via-sky-300 to-cyan-500",
      description: uc.museums.description,
      ctaPrimaryText: uc.museums.ctaPrimaryText,
      ctaSecondaryText: uc.museums.ctaSecondaryText,
      ctaPrimaryHref: lPath("/contact"),
      ctaSecondaryHref: lPath("/industries#tourism"),
      imageSrc: "/images/use-cases/museum_hologram_avatar.png",
      imageAlt: "Interactive Museum Hologram Avatar Exhibit",
      capabilities: uc.museums.capabilities,
      metrics: uc.museums.metrics,
    },
    {
      id: "retail",
      badge: uc.retail.badge,
      titlePrefix: uc.retail.titlePrefix,
      titleHighlight: uc.retail.titleHighlight,
      highlightColor: "from-cyan-400 via-sky-300 to-cyan-500",
      description: uc.retail.description,
      ctaPrimaryText: uc.retail.ctaPrimaryText,
      ctaSecondaryText: uc.retail.ctaSecondaryText,
      ctaPrimaryHref: lPath("/contact"),
      ctaSecondaryHref: lPath("/industries#retail"),
      imageSrc: "/images/use-cases/jewellery_hologram_kiosk.png",
      imageAlt: "Actual 3D Holographic Jewellery Product Kiosk with Live Digital Human Presenter",
      capabilities: uc.retail.capabilities,
      metrics: uc.retail.metrics,
    },
    {
      id: "banking",
      badge: uc.banking.badge,
      titlePrefix: uc.banking.titlePrefix,
      titleHighlight: uc.banking.titleHighlight,
      highlightColor: "from-cyan-400 via-sky-300 to-cyan-500",
      description: uc.banking.description,
      ctaPrimaryText: uc.banking.ctaPrimaryText,
      ctaSecondaryText: uc.banking.ctaSecondaryText,
      ctaPrimaryHref: lPath("/contact"),
      ctaSecondaryHref: lPath("/industries#banking"),
      imageSrc: "/images/use-cases/banking_hologram_kiosk.png",
      imageAlt: "3D Hologram Kiosk display featuring Lady Corporate Wealth Advisor for Bank VIP Lounges",
      capabilities: uc.banking.capabilities,
      metrics: uc.banking.metrics,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("museums");

  // Unconditional automatic slide show: advances slide every 4 seconds continuously without user interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = useCases.findIndex((u) => u.id === prev);
        const nextIndex = (currentIndex + 1) % useCases.length;
        return useCases[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [useCases]);

  const activeStory = useMemo(
    () => useCases.find((u) => u.id === activeTab) || useCases[0],
    [activeTab, useCases]
  );

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white border-t border-white/10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[850px] rounded-full bg-cyan-600/10 blur-[170px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[700px] rounded-full bg-sky-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {uc.badge}
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {uc.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-white via-neutral-100 to-cyan-400 bg-clip-text text-transparent">
              {uc.titleHighlight}
            </span>
          </h2>
        </div>

        {/* FEATURED USE CASE CARD SPOTLIGHT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 md:p-12 backdrop-blur-2xl shadow-2xl"
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* LEFT COLUMN: STORY DETAILS & CTAS — SLIDES FROM LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-mono">
                    {activeStory.badge}
                  </span>

                  <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                    {activeStory.titlePrefix}
                    <span
                      className={`bg-gradient-to-r ${activeStory.highlightColor} bg-clip-text text-transparent`}
                    >
                      {activeStory.titleHighlight}
                    </span>
                  </h3>

                  <p className="mt-6 text-sm sm:text-base leading-8 text-gray-300">
                    {activeStory.description}
                  </p>

                  {/* Capabilities Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeStory.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md"
                      >
                        ✓ {cap}
                      </span>
                    ))}
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {activeStory.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-2xl font-bold text-white font-mono">{m.value}</p>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAS */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href={activeStory.ctaPrimaryHref}
                    className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-xs font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                  >
                    {activeStory.ctaPrimaryText}
                  </Link>

                  <Link
                    href={activeStory.ctaSecondaryHref}
                    className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
                  >
                    {activeStory.ctaSecondaryText} →
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: HIGH-RES SPATIAL HOLOGRAPHIC VISUAL DISPLAY — SLIDES & FLOATS WITH LASER SCAN ANIMATION */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-cyan-500/40 bg-neutral-950/90 shadow-[0_0_50px_rgba(6,182,212,0.35)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] hover:border-cyan-400 group"
                >
                  {/* Image Display */}
                  <Image
                    src={activeStory.imageSrc}
                    alt={activeStory.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Laser Scan Beam Animation */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#06b6d4] z-20 opacity-80"
                  />

                  {/* Dark gradient vignette overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />

                  {/* HUD Corner Accents */}
                  <div className="pointer-events-none absolute top-3 left-3 h-5 w-5 border-t-2 border-l-2 border-cyan-400 z-20 opacity-80" />
                  <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 border-t-2 border-r-2 border-cyan-400 z-20 opacity-80" />
                  <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-cyan-400 z-20 opacity-80" />
                  <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-cyan-400 z-20 opacity-80" />

                  <div className="absolute bottom-4 right-4 z-20 rounded-full border border-cyan-500/50 bg-black/85 px-4 py-1.5 text-xs font-bold text-cyan-300 backdrop-blur-md flex items-center gap-2 shadow-lg">
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>{uc.hologramKioskBadge}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Subtle Slide Progress Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeTab === uc.id
                  ? "w-8 bg-cyan-400 shadow-[0_0_12px_#06b6d4]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
