"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

interface CTAProps {
  badgeText?: string;
  title?: string;
  highlightTitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTA({
  badgeText,
  title,
  highlightTitle,
  description,
  primaryButtonText,
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref = "/contact/download-center",
}: CTAProps) {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const finalBadgeText = badgeText || "Enterprise Deployment & Pilots";
  const finalTitle = title || "Ready to deploy your digital workforce?";
  const finalDescription =
    description ||
    "Deploy interactive 3D digital humans and air-gapped on-device AI kiosks across retail stores, hospitals, and enterprise lobbies for consistent 24/7 customer guidance.";

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-16 sm:py-24 bg-[var(--lp-tile)] border-b border-[var(--lp-line)] scroll-mt-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* PREMIUM DARK CARD WITH RADIAL AMBIENT LIGHTING & RESTRAINED GLOW */}
        <div className="relative overflow-hidden rounded-[26px] sm:rounded-[36px] bg-gradient-to-b from-[#111115] via-[#14141A] to-[#0E0E12] px-6 py-12 sm:px-12 sm:py-16 text-center border border-white/12 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6),0_0_50px_-15px_rgba(255,90,31,0.18)]">
          {/* Subtle Radial Lighting Highlights */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[580px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.20)_0%,rgba(6,182,212,0.06)_45%,transparent_75%)] blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-[var(--lp-accent)]/5 blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-[12px] font-semibold text-white !text-white mb-5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)] animate-pulse" />
              {finalBadgeText}
            </span>

            <h2 className="mx-auto max-w-3xl text-balance text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white !text-white leading-[1.12]">
              {finalTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-[17px] leading-[1.65] text-neutral-200 !text-neutral-200">
              {finalDescription}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <Link
                href={lPath(primaryButtonHref)}
                className="group/btn w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm sm:text-[15px] font-bold text-[var(--lp-ink)] shadow-[0_2px_12px_rgba(255,255,255,0.18)] transition-all duration-150 hover:bg-neutral-100 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span>{primaryButtonText || "Schedule Private Architecture Pilot"}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1 shrink-0" />
              </Link>

              <Link
                href={lPath(secondaryButtonHref)}
                className="group/btn2 w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-sm sm:text-[15px] font-semibold text-white !text-white border border-white/20 backdrop-blur-md shadow-xs transition-all duration-150 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <FileText className="h-4 w-4 text-white !text-white transition-colors group-hover/btn2:text-white shrink-0" />
                <span>{secondaryButtonText || "Download Domain Case Studies"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
