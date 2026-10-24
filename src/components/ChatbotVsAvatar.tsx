"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { TrendingDown, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function ChatbotVsAvatar() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const comp = dict.home.comparison;
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const comparisonRows = [
    {
      feature: "Customer Engagement & Attention",
      chatbot: "Low (8% - 12% read rate)",
      humanStaff: "High (when attentive)",
      digitalHuman: "Highest (84% visual engagement lift)",
    },
    {
      feature: "24/7 Operational Staffing Cost",
      chatbot: "Low recurring software cost",
      humanStaff: "$120,000+/year per desk (3 shifts)",
      digitalHuman: "Up to 70% cost reduction vs staffing",
    },
    {
      feature: "Queue & Wait Time Elimination",
      chatbot: "Zero wait, but low satisfaction",
      humanStaff: "Bottlenecks during peak rushes",
      digitalHuman: "Zero queue delay, instant voice reply",
    },
    {
      feature: "Multilingual Spoken Fluency",
      chatbot: "Text translation only (often clumsy)",
      humanStaff: "Limited to hired staff languages",
      digitalHuman: "29+ global languages spoken fluently",
    },
    {
      feature: "Air-Gapped On-Premise Security",
      chatbot: "Cloud-dependent (data risk)",
      humanStaff: "Human memory leakage risk",
      digitalHuman: "100% offline private hardware option",
    },
    {
      feature: "Service Tone & Brand Consistency",
      chatbot: "Cold, robotic text paragraphs",
      humanStaff: "Varies by shift fatigue & turnover",
      digitalHuman: "100% consistent empathetic presence",
    },
  ];

  return (
    <section
      id="roi-comparison"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-white border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              Staffing vs Software Paradigm
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            Why enterprise leaders choose digital humans over chatbots and manual staffing.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
            Text chatbots feel impersonal and get ignored. Round-the-clock manual staffing is costly and suffers from high turnover.
            AI digital humans combine the emotional warmth of human presence with the infinite scale of software.
          </p>
        </div>

        {/* 3 VALUE PILLARS (SWIPECRAFT WHITE CARDS WITH PREMIUM ICON BADGES) */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-[24px] bg-[var(--lp-card)] p-4 sm:p-6 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
          >
            <div className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-2xl bg-[rgba(255,90,31,0.08)] border border-[rgba(255,90,31,0.18)] shadow-xs">
              <TrendingDown className="h-4 sm:h-5 w-4 sm:h-5 text-[var(--lp-accent)]" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 sm:mt-5 text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em] text-[var(--lp-ink)]">
              Drastic Cost Reduction
            </h3>
            <p className="mt-2 text-xs sm:text-[14px] leading-[1.6] text-[var(--lp-ink-2)]">
              Replace multiple overlapping shifts, recruitment overhead, and overtime expenses with a reliable 24/7 autonomous assistant that never takes sick leave.
            </p>
            <div className="mt-4 sm:mt-5 border-t border-[var(--lp-line)] pt-3.5 flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)] shrink-0" />
              <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--lp-accent-ink)]">
                Up to 70% lower annual overhead
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-[24px] bg-[var(--lp-card)] p-4 sm:p-6 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
          >
            <div className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-2xl bg-[rgba(22,163,74,0.08)] border border-[rgba(22,163,74,0.18)] shadow-xs">
              <Zap className="h-4 sm:h-5 w-4 sm:h-5 text-[#16a34a]" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 sm:mt-5 text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em] text-[var(--lp-ink)]">
              Zero Wait Time Queues
            </h3>
            <p className="mt-2 text-xs sm:text-[14px] leading-[1.6] text-[var(--lp-ink-2)]">
              Every customer, patient, and visitor is greeted immediately upon walking up to the display. Fast-track product lookups and patient check-in with zero delays.
            </p>
            <div className="mt-4 sm:mt-5 border-t border-[var(--lp-line)] pt-3.5 flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#16a34a] shrink-0" />
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#16a34a]">
                Low-latency vocal responses
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-[24px] bg-[var(--lp-card)] p-4 sm:p-6 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
          >
            <div className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs">
              <ShieldCheck className="h-4 sm:h-5 w-4 sm:h-5 text-[var(--lp-ink)]" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 sm:mt-5 text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em] text-[var(--lp-ink)]">
              100% Air-Gapped Privacy
            </h3>
            <p className="mt-2 text-xs sm:text-[14px] leading-[1.6] text-[var(--lp-ink-2)]">
              Unlike public cloud AI, our digital human software can deploy on-premise on private hardware for sensitive defence bases and HIPAA hospital networks.
            </p>
            <div className="mt-4 sm:mt-5 border-t border-[var(--lp-line)] pt-3.5 flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-ink)] shrink-0" />
              <span className="text-[11px] sm:text-[12px] font-semibold text-[var(--lp-ink)]">
                Zero data leaves your facility
              </span>
            </div>
          </motion.div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center justify-between px-1 mb-2.5 sm:hidden text-[11px] text-[var(--lp-muted)]">
            <span className="font-medium text-[var(--lp-ink-2)]">Direct feature comparison</span>
            <span className="inline-flex items-center gap-1 font-semibold text-[var(--lp-accent)]">
              Swipe to compare &rarr;
            </span>
          </div>
          <div className="rounded-[28px] bg-[var(--lp-tile)] p-2 sm:p-3 border border-[var(--lp-line)]">
            <div className="overflow-hidden rounded-2xl sm:rounded-[22px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-[var(--lp-shadow-card)]">
              <div className="overflow-x-auto scrollbar-none">
                <table className="min-w-[620px] w-full border-collapse text-left text-[13px] sm:text-[14px]">
                  <thead>
                    <tr className="border-b border-[var(--lp-line)] bg-[var(--lp-tile)]">
                      <th className="p-4 sm:p-5 font-semibold text-[var(--lp-ink)]">Capability / Metric</th>
                      <th className="p-4 sm:p-5 font-medium text-[var(--lp-muted)]">Legacy Chatbots</th>
                      <th className="p-4 sm:p-5 font-medium text-[var(--lp-muted)]">24/7 Shift Staffing</th>
                      <th className="p-4 sm:p-5 font-semibold text-[var(--lp-ink)] bg-[rgba(255,90,31,0.06)]">
                        HS Global AI Digital Human
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--lp-line)]">
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="hover:bg-[var(--lp-tile)]/40 transition-colors">
                        <td className="p-4 sm:p-5 font-medium text-[var(--lp-ink)]">
                          {row.feature}
                        </td>
                        <td className="p-4 sm:p-5 text-[var(--lp-muted)]">
                          {row.chatbot}
                        </td>
                        <td className="p-4 sm:p-5 text-[var(--lp-muted)]">
                          {row.humanStaff}
                        </td>
                        <td className="p-4 sm:p-5 font-semibold text-[var(--lp-ink)] bg-[rgba(255,90,31,0.06)]">
                          <span className="inline-flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--lp-accent)] shrink-0" />
                            <span>{row.digitalHuman}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
