"use client";

import { CheckCircle2, Globe, Lock, Sparkles } from "lucide-react";

export default function ChatbotVsAvatar() {
  const comparisonRows = [
    {
      feature: "Visitor Presence & Attention",
      chatbot: "Small screen widget often overlooked",
      humanStaff: "High when stationed at desk",
      digitalHuman: "Life-sized 3D or spatial embodied host",
    },
    {
      feature: "Extended Hours & Shifts",
      chatbot: "Online 24/7 (text only)",
      humanStaff: "Requires multi-shift staffing & training",
      digitalHuman: "Continuous 24/7 consistent front-line coverage",
    },
    {
      feature: "Queue & Intake Speed",
      chatbot: "Typing friction slows complex lookups",
      humanStaff: "Bottlenecks during peak hours",
      digitalHuman: "Natural spoken answers with low latency",
    },
    {
      feature: "Multilingual Fluency",
      chatbot: "Text translation widgets",
      humanStaff: "Limited to hired staff languages",
      digitalHuman: "29+ global & 7 Indian regional spoken languages",
    },
    {
      feature: "Data & Network Architecture",
      chatbot: "Dependent on third-party cloud APIs",
      humanStaff: "Varies with manual tools",
      digitalHuman: "100% offline on-device execution by default",
    },
    {
      feature: "Catalog & Knowledge Grounding",
      chatbot: "Generic script trees or ungrounded chat",
      humanStaff: "Memory varies across new hires",
      digitalHuman: "Local cross-encoder RAG + strict source guard",
    },
  ];

  return (
    <section
      id="roi-comparison"
      className="relative overflow-hidden py-16 sm:py-24 bg-white border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER + CONCISE SUMMARY PILLS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)]" />
              <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
                Comparison Overview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
              Embodied Digital Humans vs. legacy alternatives.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: "Lifelike Physical Presence", icon: Sparkles },
              { label: "29+ Spoken Languages", icon: Globe },
              { label: "On-Device Privacy", icon: Lock },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-3.5 py-1.5 text-xs font-semibold text-[var(--lp-ink)]"
              >
                <Icon className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* COMPACT COMPARISON MATRIX */}
        <div className="flex items-center justify-between px-1 mb-2.5 sm:hidden text-[11px] text-[var(--lp-muted)]">
          <span className="font-medium text-[var(--lp-ink-2)]">Capability matrix</span>
          <span className="font-semibold text-[var(--lp-accent)]">Swipe table &rarr;</span>
        </div>

        <div className="rounded-[24px] sm:rounded-[28px] bg-[var(--lp-tile)] p-2 sm:p-3 border border-[var(--lp-line)]">
          <div className="overflow-hidden rounded-[18px] sm:rounded-[22px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-[var(--lp-shadow-card)]">
            <div className="overflow-x-auto scrollbar-none">
              <table className="min-w-[640px] w-full border-collapse text-left text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-[var(--lp-line)] bg-[var(--lp-tile)]">
                    <th className="p-4 sm:p-5 font-semibold text-[var(--lp-ink)]">Capability</th>
                    <th className="p-4 sm:p-5 font-medium text-[var(--lp-muted)]">Text Chatbots</th>
                    <th className="p-4 sm:p-5 font-medium text-[var(--lp-muted)]">Manual Shift Desk</th>
                    <th className="p-4 sm:p-5 font-semibold text-[var(--lp-ink)] bg-[rgba(255,90,31,0.06)]">
                      HS Global AI Digital Human
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--lp-line)]">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-[var(--lp-tile)]/40 transition-colors">
                      <td className="p-4 sm:p-5 font-medium text-[var(--lp-ink)]">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-[var(--lp-muted)]">{row.chatbot}</td>
                      <td className="p-4 sm:p-5 text-[var(--lp-muted)]">{row.humanStaff}</td>
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
    </section>
  );
}
