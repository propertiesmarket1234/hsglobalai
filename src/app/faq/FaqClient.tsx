"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function FaqClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const faqSec = dict.home.faqSection;

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-20 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--lp-ink-2)] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              {faqSec.badge || "Knowledge Base & Answers"}
            </span>

            <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
              Frequently Asked{" "}
              <span className="text-[var(--lp-muted)]">
                Questions.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]">
              {faqSec.subheading || "Answers regarding on-premise edge hardware, 3D Hologram Box dimensions, multilingual voice recognition, air-gapped security, and enterprise rollout."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ />

      <CTA />
      <Footer />
    </main>
  );
}
