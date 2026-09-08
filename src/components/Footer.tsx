"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export default function Footer() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/20 bg-neutral-950/95 backdrop-blur-2xl px-6 text-white shadow-[0_-10px_40px_rgba(0,0,0,0.9)]">
      {/* Ambient Glow Orb */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-cyan-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl py-20">
        {/* MAIN FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-6"
        >
          {/* BRAND & HQ ADDRESS (2 COLS) */}
          <div className="lg:col-span-2">
            <Link href={lPath("/")} className="inline-flex flex-col items-center group">
              <Image
                src="/logo/hs-global-ai-logo.png"
                alt="HS Global AI"
                width={90}
                height={70}
                className="h-auto w-[90px] transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
              />

              <span className="mt-2 text-sm font-bold tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                HS GLOBAL AI
              </span>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-gray-400 text-sm">
              {dict.footer.description}
            </p>

            <div className="mt-6 space-y-2 text-xs text-gray-400">
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 shrink-0 font-mono">{dict.footer.singaporeHQLabel}</span>
                <span>{dict.footer.singaporeHQAddress}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 shrink-0 font-mono">{dict.footer.indiaOfficeLabel}</span>
                <span>{dict.footer.indiaOfficeAddress}</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <span className="text-cyan-400 shrink-0 font-mono">{dict.footer.emailLabel}</span>
                <a href="mailto:sales@hsglobalai.com" className="hover:text-white transition-colors">
                  sales@hsglobalai.com
                </a>
              </p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              {dict.footer.productsHeader}
            </h3>

            <div className="flex flex-col gap-2.5 text-sm text-gray-400">
              <Link href={lPath("/products/ai-digital-human")} className="transition-all hover:text-white hover:translate-x-1 font-semibold text-gray-300">
                {dict.footer.dihuavaDigitalHumans}
              </Link>
              <Link href={lPath("/products/ai-digital-human/avatar-customization")} className="transition-all hover:text-cyan-300 hover:translate-x-1 text-xs text-gray-400 pl-2">
                • {dict.footer.avatarVoiceCloning}
              </Link>
              <Link href={lPath("/products/ai-digital-human/document-intelligence")} className="transition-all hover:text-cyan-300 hover:translate-x-1 text-xs text-gray-400 pl-2">
                • {dict.footer.documentIntelligence}
              </Link>
              <Link href={lPath("/products/ai-digital-human/multilingual-support")} className="transition-all hover:text-cyan-300 hover:translate-x-1 text-xs text-gray-400 pl-2">
                • {dict.footer.multilingualEngine}
              </Link>
              <Link href={lPath("/products/holographic-display")} className="transition-all hover:text-white hover:translate-x-1 font-semibold text-gray-300 pt-1">
                {dict.footer.hologramBox}
              </Link>
              <Link href={lPath("/products/spatial-display")} className="transition-all hover:text-white hover:translate-x-1 font-semibold text-gray-300">
                {dict.footer.spatialDisplay}
              </Link>
              <Link href={lPath("/products")} className="transition-all hover:text-white hover:translate-x-1 text-xs text-cyan-400 pt-1">
                {dict.footer.allProductsOverviewLink}
              </Link>
            </div>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              {dict.footer.industriesHeader}
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href={lPath("/industries/banking")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.bankingFinancial}
              </Link>
              <Link href={lPath("/industries/retail")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.retailAdvertising}
              </Link>
              <Link href={lPath("/industries/corporate")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.corporateServices}
              </Link>
              <Link href={lPath("/industries/tourism")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.tourismExhibitions}
              </Link>
              <Link href={lPath("/industries/healthcare")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.healthcare}
              </Link>
              <Link href={lPath("/industries/education")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.education}
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              {dict.footer.companyHeader}
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href={lPath("/about")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.aboutUs}
              </Link>
              <Link href={lPath("/events")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.eventsExhibitions}
              </Link>
              <Link href={lPath("/contact")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.contactUs}
              </Link>
              <Link href={lPath("/contact/download-center")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.downloadCenter}
              </Link>
              <Link href={lPath("/contact")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.bookDemo}
              </Link>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              {dict.footer.usefulLinksHeader}
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href={lPath("/contact/download-center")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.datasheetsSpecs}
              </Link>
              <Link href={lPath("/faq")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.faqs}
              </Link>
              <Link href={lPath("/privacy")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.privacyPolicy}
              </Link>
              <Link href={lPath("/terms")} className="transition-all hover:text-white hover:translate-x-1">
                {dict.footer.termsConditions}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM FOOTER */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {dict.footer.copyrightNotice}</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href={lPath("/contact/download-center")} className="transition-colors hover:text-cyan-400">
              {dict.footer.downloadCenter}
            </Link>
            <Link href={lPath("/faq")} className="transition-colors hover:text-cyan-400">
              {dict.footer.faqs}
            </Link>
            <Link href={lPath("/privacy")} className="transition-colors hover:text-cyan-400">
              {dict.footer.privacyPolicy}
            </Link>
            <Link href={lPath("/terms")} className="transition-colors hover:text-cyan-400">
              {dict.footer.termsConditions}
            </Link>

            {/* OFFICIAL SOCIAL LINKS */}
            <div className="flex items-center gap-5 border-l border-white/15 pl-6">
              <a
                href="https://www.facebook.com/hsglobalai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v9h4v-9h3l1-4h-4V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>

              <a
                href="https://x.com/HSGlobalAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110 font-bold text-sm"
              >
                𝕏
              </a>

              <a
                href="https://www.linkedin.com/company/hs-global-ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.5 8.5H2.5V21h3V8.5ZM4 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 4 3ZM9 8.5h2.9v1.7h.1c.4-.8 1.4-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9V8.5Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/hsglobalai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@hsglobalai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 12s0-3.5-.4-5.2a3 3 0 0 0-2.1-2.1C18.8 4.2 12 4.2 12 4.2s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 8.5 1 12 1 12s0 3.5.4 5.2a3 3 0 0 0 2.1 2.1c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1C23 15.5 23 12 23 12Zm-13.2 4V8l6.9 4-6.9 4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
