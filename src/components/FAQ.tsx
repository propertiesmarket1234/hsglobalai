"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const faqSec = dict.home.faqSection;

  const categories = faqSec.categories;
  const faqData: FAQItem[] = faqSec.items;

  const [selectedCategory, setSelectedCategory] = useState(faqSec.categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    selectedCategory === faqSec.categories[0]
      ? faqData
      : faqData.filter((f) => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white border-t border-white/10">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              {faqSec.badge}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {faqSec.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            {faqSec.subheading}
          </p>
        </motion.div>

        {/* CATEGORY FILTER TABS */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-black shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-105"
                  : "border border-white/15 bg-white/5 text-gray-300 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ACCORDION LIST */}
        <div className="mt-12 space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-500/50 bg-neutral-950/90 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    : "border-white/15 bg-neutral-950/60 hover:border-white/30"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left text-base font-semibold text-white sm:text-lg hover:text-cyan-300 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-cyan-400 text-cyan-400 bg-cyan-500/10" : "text-gray-400"
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 pb-6 text-sm leading-7 text-gray-300 sm:text-base border-t border-white/10 pt-4 overflow-hidden"
                    >
                      <p>{faq.answer}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-mono">
                        <span>{faqSec.categoryLabel} {faq.category.toUpperCase()}</span>
                        <span className="text-cyan-400 font-semibold">{faqSec.verified}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
