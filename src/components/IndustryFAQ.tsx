"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface IndustryFAQProps {
  title: string;
  faqs: FAQItem[];
}

export default function IndustryFAQ({ title, faqs }: IndustryFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-t border-[var(--lp-line)] text-[var(--lp-ink)]">
      <div className="mx-auto max-w-[960px]">
        <div className="max-w-xl mb-12">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
            Deployment &amp; Operational FAQ
          </span>
          <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
            {title} FAQ
          </h2>
          <p className="mt-3 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
            Answers regarding hardware deployment, multilingual voice recognition, and on-premise operational safety.
          </p>
        </div>

        <div className="divide-y divide-[var(--lp-line)] border-y border-[var(--lp-line)]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="py-6">
                <button
                  onClick={() => toggle(idx)}
                  className="group flex w-full items-start justify-between gap-4 text-left transition-colors"
                >
                  <span className={`text-[17px] font-semibold tracking-[-0.015em] sm:text-[18px] transition-colors ${
                    isOpen ? "text-[var(--lp-accent)]" : "text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)]"
                  }`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--lp-line)] transition-colors ${
                      isOpen
                        ? "bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs"
                        : "bg-[var(--lp-tile)] text-[var(--lp-ink)] group-hover:bg-[var(--lp-tile-2)]"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2} />
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
                      <p className="mt-4 max-w-3xl text-[15px] leading-[1.65] text-[var(--lp-ink-2)]">
                        {faq.answer}
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
