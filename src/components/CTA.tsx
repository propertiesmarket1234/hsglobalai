"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight, FileText } from "lucide-react";
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
    "Join leading retail chains, hospital networks, and enterprises reducing staffing overhead by up to 70% while providing instant, empathetic 24/7 customer care.";

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-[32px] bg-white px-6 py-10 sm:px-12 sm:py-16 text-center border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,90,31,0.08)] border border-[rgba(255,90,31,0.18)] px-3.5 py-1 text-[12px] font-semibold text-[var(--lp-accent)] mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            {finalBadgeText}
          </span>

          <h2 className="mx-auto max-w-3xl text-balance text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            {finalTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-[18px] leading-[1.65] text-[var(--lp-ink-2)]">
            {finalDescription}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              href={lPath(primaryButtonHref)}
              className="group/btn w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all duration-150 hover:bg-[#2A2A2F] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_14px_rgba(17,17,19,0.3)] active:scale-[0.98] cursor-pointer"
            >
              <span>{primaryButtonText || "Schedule Private Architecture Pilot"}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1 shrink-0" />
            </Link>

            <Link
              href={lPath(secondaryButtonHref)}
              className="group/btn2 w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] border border-[var(--lp-line)] shadow-xs transition-all duration-150 hover:bg-[var(--lp-tile)] hover:border-[var(--lp-line-strong)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              <FileText className="h-4 w-4 text-[var(--lp-muted)] transition-colors group-hover/btn2:text-[var(--lp-ink)] shrink-0" />
              <span>{secondaryButtonText || "Download Domain Case Studies"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}