"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";
import GlobalLanguagesSection from "@/components/GlobalLanguagesSection";
import DihuavaPlatform from "@/components/DihuavaPlatform";
import ChatbotVsAvatar from "@/components/ChatbotVsAvatar";
import CTA from "@/components/CTA";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function ProductsClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
  const pPage = (dict as any).productsPage || {};

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* PRODUCTS HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-28 pb-12 sm:px-6 md:pt-36 md:pb-16 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                {pPage.heroBadge || "Enterprise Product Suite — Hardware & Software"}
              </span>
            </div>

            {/* Grid Layout with Balanced Alignment */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
                  Physical hardware & software for the{" "}
                  <span className="text-[var(--lp-muted)]">
                    digital workforce.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]">
                  {pPage.heroDescription || "From proprietary on-premise AI software (DIHUAVA) to life-sized 3D Hologram Cabinets and glasses-free Spatial Displays. Engineered for retail flagships, hospitals, and defence installations."}
                </p>

                {/* Capability Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                    29+ Global Languages
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                    100% Offline Edge AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                    3D Volumetric Displays
                  </span>
                </div>

                <div className="mt-6">
                  <Link
                    href={lPath("/contact/download-center")}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Download Engineering Datasheets</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Ecosystem Taxonomy */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-[var(--lp-line)] pt-8">
              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--lp-muted)] block">
                  Software Layer
                </span>
                <span className="text-sm font-semibold text-[var(--lp-ink)] mt-0.5 block">
                  DIHUAVA AI Engine
                </span>
              </div>
              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--lp-muted)] block">
                  3D Hologram Cabinet
                </span>
                <span className="text-sm font-semibold text-[var(--lp-ink)] mt-0.5 block">
                  65&apos;&apos; &amp; 86&apos;&apos; Hologram Boxes
                </span>
              </div>
              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--lp-muted)] block">
                  Executive Desk Unit
                </span>
                <span className="text-sm font-semibold text-[var(--lp-ink)] mt-0.5 block">
                  Glasses-Free Spatial 3D
                </span>
              </div>
              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--lp-muted)] block">
                  Interactive Fitting
                </span>
                <span className="text-sm font-semibold text-[var(--lp-ink)] mt-0.5 block">
                  Virtual Try-On Mirror
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* DEDICATED 29+ GLOBAL LANGUAGES SECTION */}
      <GlobalLanguagesSection />

      {/* DIHUAVA SOFTWARE PLATFORM INTELLIGENCE */}
      <DihuavaPlatform />

      {/* COST CUTTING & ASSISTANCE QUALITY COMPARISON */}
      <ChatbotVsAvatar />

      <CTA />
      <Footer />
    </main>
  );
}
