"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  HeartPulse,
  Shield,
  Sparkles,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function Industries() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const ind = dict.home.industriesSection;

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  return (
    <section
      id="domains"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER: SWIPECRAFT EDITORIAL STYLE */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              Enterprise Domain Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            Built for physical environments where human presence drives trust.
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
            Text chatbots get ignored, and manual staffing is costly and inconsistent.
            Deploy autonomous digital humans that eliminate wait times, lower costs by up to 70%, and never tire.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {/* CARD 1 (COL-SPAN 2): RETAIL & LUXURY FLAGSHIPS */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[28px] bg-[var(--lp-tile)] p-4 sm:p-7 md:col-span-2 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="max-w-md">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs">
                    <ShoppingBag className="h-4 w-4 text-[var(--lp-accent)]" strokeWidth={1.75} />
                  </div>
                  <span className="text-[13px] font-semibold text-[var(--lp-ink)]">
                    Retail & Luxury Stores
                  </span>
                </div>

                <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.025em] text-[var(--lp-ink)] sm:text-[26px]">
                  The 24/7 store concierge that never misses a sale.
                </h3>

                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--lp-ink-2)]">
                  Eliminate walkouts during peak rushes. Digital human kiosks guide shoppers through complete product catalogs, check backroom sizing, and recommend personalized luxury pairings in 29+ languages.
                </p>

                {/* ROI Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,90,31,0.1)] px-3 py-1 text-[12px] font-semibold text-[var(--lp-accent-ink)]">
                    <CheckCircle2 className="h-3 w-3 text-[var(--lp-accent)]" />
                    70% Labor Cost Saved
                  </span>
                  <span className="rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] px-3 py-1 text-[12px] font-medium text-[var(--lp-ink)] shadow-xs">
                    3.2x Basket Size Lift
                  </span>
                  <span className="rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] px-3 py-1 text-[12px] font-medium text-[var(--lp-ink)] shadow-xs">
                    Zero Queue Abandonment
                  </span>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0B1224] shadow-[var(--lp-shadow-lift)] lg:w-72 lg:shrink-0">
                <Image
                  src="/images/use-cases/jewellery_hologram_kiosk.png"
                  alt="Interactive Retail Digital Human Kiosk"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[var(--lp-line)] pt-4">
              <span className="text-[13px] text-[var(--lp-muted)]">
                Deployable as interactive touchscreen kiosk or 3D hologram box
              </span>
              <Link
                href={lPath("/industries/retail")}
                className="group/link inline-flex h-8 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-white text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-[var(--lp-tile)] transition-all duration-150 shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
              >
                <span>Read Retail Case Study</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </motion.article>

          {/* CARD 2 (COL-SPAN 1): HOSPITALS & HEALTHCARE */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[28px] bg-[var(--lp-tile)] p-4 sm:p-7 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs">
                  <HeartPulse className="h-4 w-4 text-[#16a34a]" strokeWidth={1.75} />
                </div>
                <span className="text-[13px] font-semibold text-[var(--lp-ink)]">
                  Hospitals & Clinics
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.025em] text-[var(--lp-ink)] sm:text-[22px]">
                Compassionate patient intake without nurse burnout.
              </h3>

              <p className="mt-2.5 text-[14px] leading-[1.6] text-[var(--lp-ink-2)]">
                Relieve overwhelmed reception desks. Patients check in, receive appointment guidance, and navigate large medical complexes with zero wait time.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(21,128,61,0.1)] px-3 py-1 text-[12px] font-semibold text-[var(--lp-success)]">
                  <CheckCircle2 className="h-3 w-3 text-[var(--lp-success)]" />
                  40% Wait Time Reduced
                </span>
                <span className="rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] px-3 py-1 text-[12px] font-medium text-[var(--lp-ink)] shadow-xs">
                  100% Patient Privacy
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[var(--lp-line)] pt-4">
              <span className="text-[12px] text-[var(--lp-muted)]">
                Privacy-aligned patient intake & navigation kiosk
              </span>
              <Link
                href={lPath("/industries/healthcare")}
                className="group/link inline-flex h-8 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-white text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-[var(--lp-tile)] transition-all duration-150 shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
              >
                <span>Explore Patient Navigation</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </motion.article>

          {/* CARD 3 (COL-SPAN 1): DEFENCE & AIR-GAPPED SITES */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[28px] bg-[var(--lp-tile)] p-4 sm:p-7 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs">
                  <Shield className="h-4 w-4 text-[var(--lp-ink)]" strokeWidth={1.75} />
                </div>
                <span className="text-[13px] font-semibold text-[var(--lp-ink)]">
                  Defence & High-Security
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.025em] text-[var(--lp-ink)] sm:text-[22px]">
                100% air-gapped on-premise intelligence.
              </h3>

              <p className="mt-2.5 text-[14px] leading-[1.6] text-[var(--lp-ink-2)]">
                Zero internet connection required. Operates completely on private local GPU hardware for classified facility briefings and tactical manual lookup.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] px-3 py-1 text-[12px] font-semibold text-[var(--lp-ink)] shadow-xs">
                  <Lock className="h-3 w-3 text-[var(--lp-ink)]" />
                  Zero Cloud Transmission
                </span>
                <span className="rounded-full bg-[rgba(255,90,31,0.1)] px-3 py-1 text-[12px] font-semibold text-[var(--lp-accent-ink)]">
                  Military-Grade Offline
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[var(--lp-line)] pt-4">
              <span className="text-[12px] text-[var(--lp-muted)]">
                Classified offline on-premise GPU
              </span>
              <Link
                href={lPath("/contact")}
                className="group/link inline-flex h-8 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-white text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-[var(--lp-tile)] transition-all duration-150 shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
              >
                <span>Request Air-Gapped Briefing</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </motion.article>

          {/* CARD 4 (COL-SPAN 2): EVENTS, EXPOS & HOLOGRAPHIC STAGES */}
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[28px] bg-[var(--lp-tile)] p-4 sm:p-7 md:col-span-2 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="max-w-md">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs">
                    <Sparkles className="h-4 w-4 text-[var(--lp-accent)]" strokeWidth={1.75} />
                  </div>
                  <span className="text-[13px] font-semibold text-[var(--lp-ink)]">
                    Events, Expos & Hospitality
                  </span>
                </div>

                <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.025em] text-[var(--lp-ink)] sm:text-[26px]">
                  Life-sized 3D hologram presenters that captivate crowds.
                </h3>

                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--lp-ink-2)]">
                  Handle 10,000+ repetitive attendee inquiries per day without staff fatigue. Digital humans print badges, guide visitors to booths, and present keynote highlights continuously.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,90,31,0.1)] px-3 py-1 text-[12px] font-semibold text-[var(--lp-accent-ink)]">
                    <CheckCircle2 className="h-3 w-3 text-[var(--lp-accent)]" />
                    10,000+ Interactions/Day
                  </span>
                  <span className="rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] px-3 py-1 text-[12px] font-medium text-[var(--lp-ink)] shadow-xs">
                    29+ Languages Real-Time
                  </span>
                  <span className="rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] px-3 py-1 text-[12px] font-medium text-[var(--lp-ink)] shadow-xs">
                    Zero Host Fatigue
                  </span>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0B1224] shadow-[var(--lp-shadow-lift)] lg:w-72 lg:shrink-0">
                <Image
                  src="/images/use-cases/museum_hologram_avatar.png"
                  alt="3D Hologram Exhibition Presenter"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[var(--lp-line)] pt-4">
              <span className="text-[13px] text-[var(--lp-muted)]">
                Available in 65&apos;&apos; and 86&apos;&apos; life-sized volumetric hologram enclosures
              </span>
              <Link
                href={lPath("/industries/tourism")}
                className="group/link inline-flex h-8 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-white text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-[var(--lp-tile)] transition-all duration-150 shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
              >
                <span>Explore Event Holograms</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}