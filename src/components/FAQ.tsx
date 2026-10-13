"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const faqSec = dict.home.faqSection;

  const faqData: FAQItem[] = faqSec.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-white border-b border-[var(--lp-line)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            Things enterprise leaders ask before deploying.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
            Have questions about on-premise hardware, domain accuracy, or staffing cost reduction? Contact our deployment engineers directly at contact@hsglobalai.com.
          </p>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="divide-y divide-[var(--lp-line)] border-y border-[var(--lp-line)]">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 sm:py-6">
                <button
                  onClick={() => toggle(idx)}
                  className="group flex w-full items-start justify-between gap-3.5 sm:gap-4 text-left transition-all duration-150 cursor-pointer active:scale-[0.99]"
                >
                  <span className={`text-[15px] sm:text-[18px] font-semibold tracking-[-0.015em] transition-colors leading-snug ${
                    isOpen ? "text-[var(--lp-accent)]" : "text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)]"
                  }`}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`mt-0.5 sm:mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--lp-line)] transition-colors ${
                      isOpen
                        ? "bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs"
                        : "bg-[var(--lp-tile)] text-[var(--lp-ink)] group-hover:bg-[var(--lp-tile-2)]"
                    }`}
                  >
                    <Plus className="h-3.5 sm:h-4 w-3.5 sm:w-4" strokeWidth={2} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 sm:mt-4 max-w-3xl text-[13px] sm:text-[15px] leading-[1.65] text-[var(--lp-ink-2)]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
