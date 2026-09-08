"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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

  const finalBadgeText = badgeText || dict.cta.defaultBadge;
  const finalTitle = title || dict.cta.defaultTitle;
  const finalHighlightTitle = highlightTitle || dict.cta.defaultHighlight;
  const finalDescription = description || dict.cta.defaultDescription;
  const finalPrimaryButtonText = primaryButtonText || dict.cta.defaultPrimaryBtn;
  const finalSecondaryButtonText = secondaryButtonText || dict.cta.defaultSecondaryBtn;

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 md:py-36 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[40px] border border-cyan-500/30 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 px-8 py-20 text-center md:px-16 md:py-28 shadow-2xl"
        >
          {/* Background Ambient Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-600/20 via-sky-600/10 to-purple-600/15 blur-[150px]" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                {finalBadgeText}
              </span>
            </span>

            <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl tracking-tight text-white">
              {finalTitle}
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 bg-clip-text text-transparent">
                {finalHighlightTitle}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-300">
              {finalDescription}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={lPath(primaryButtonHref)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 px-9 py-4 text-sm font-bold text-black shadow-[0_0_25px_rgba(6,182,212,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]"
              >
                {finalPrimaryButtonText}
                <span>→</span>
              </Link>
              <Link
                href={lPath(secondaryButtonHref)}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-neutral-950/80 px-8 py-4 text-sm font-semibold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/15 hover:scale-105 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
              >
                {finalSecondaryButtonText}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}