"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";

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
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-b border-cyan-500/30">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-cyan-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase font-mono">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title} FAQ
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Factual answers regarding AI Digital Human capabilities, deployment options, and operational boundaries.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
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
                  <span className="pr-4 leading-snug">{faq.question}</span>
                  <span
                    className={`ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-cyan-400 text-cyan-400 bg-cyan-500/10" : "text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
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
                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> DIHUAVA VERIFIED FACTUAL ANSWER
                        </span>
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
