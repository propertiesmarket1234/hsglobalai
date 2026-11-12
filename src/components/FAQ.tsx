"use client";

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

const ALL_CATEGORY = "__ALL__";

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
  const categories = Array.from(new Set(faqData.map((item) => item.category).filter(Boolean)));
  const allLabel = faqSec.categories?.[0] || "All Questions";

  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-16 sm:py-24 bg-white border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)]" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              {faqSec.badge || "Frequently Asked Questions"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            Things enterprise leaders ask before deploying.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--lp-muted)]">
            {faqSec.subheading ||
              "Questions on on-device AI hardware, domain accuracy, or physical kiosk installation? Contact contact@hsglobalai.com."}
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        {categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setSelectedCategory(ALL_CATEGORY)}
              className={`inline-flex h-8.5 items-center rounded-full px-4 text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === ALL_CATEGORY
                  ? "bg-[var(--lp-ink)] text-white shadow-xs"
                  : "bg-[var(--lp-tile)] text-[var(--lp-ink-2)] border border-[var(--lp-line)] hover:bg-[var(--lp-card)]"
              }`}
            >
              {allLabel}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex h-8.5 items-center rounded-full px-4 text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[var(--lp-ink)] text-white shadow-xs"
                    : "bg-[var(--lp-tile)] text-[var(--lp-ink-2)] border border-[var(--lp-line)] hover:bg-[var(--lp-card)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* FAQ ACCORDION LIST — ALL ITEMS PRESERVED IN SSR HTML/DOM FOR SEO */}
        <div className="divide-y divide-[var(--lp-line)] border-y border-[var(--lp-line)]">
          {faqData.map((item, idx) => {
            const matchesFilter =
              selectedCategory === ALL_CATEGORY || item.category === selectedCategory;
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={matchesFilter ? "py-4 sm:py-5" : "hidden"}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  className="group flex w-full items-start justify-between gap-4 text-left transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    {item.category && (
                      <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
                        {item.category}
                      </span>
                    )}
                    <span
                      className={`block text-[15px] sm:text-[17px] font-semibold tracking-tight transition-colors leading-snug ${
                        isOpen
                          ? "text-[var(--lp-accent)]"
                          : "text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)]"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <span
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--lp-line)] transition-all duration-200 ${
                      isOpen
                        ? "rotate-45 bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs"
                        : "bg-[var(--lp-tile)] text-[var(--lp-ink)] group-hover:bg-[var(--lp-card)]"
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-3xl text-[13.5px] sm:text-[15px] leading-[1.65] text-[var(--lp-ink-2)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
