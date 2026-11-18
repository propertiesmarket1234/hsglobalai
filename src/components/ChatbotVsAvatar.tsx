"use client";

import { CheckCircle2, XCircle, AlertTriangle, Globe, Lock, Sparkles, Cpu, Clock, ShieldCheck } from "lucide-react";

export default function ChatbotVsAvatar() {
  const comparisonRows = [
    {
      feature: "Visitor Presence & Engagement",
      featureSub: "Physical visual draw in physical facilities",
      chatbot: {
        tag: "Small Screen Widget",
        desc: "Overlooked text box with low user retention",
        status: "negative",
      },
      humanStaff: {
        tag: "Stationary Staff",
        desc: "High when present at desk, absent during breaks",
        status: "neutral",
      },
      digitalHuman: {
        tag: "Life-Sized Embodied Host",
        desc: "3D Hologram Box or 4K Spatial Display commanding immediate attention",
        status: "positive",
      },
    },
    {
      feature: "Extended Hours & Coverage",
      featureSub: "Operational availability & staffing costs",
      chatbot: {
        tag: "24/7 (Text Only)",
        desc: "Available online, but cannot greet physical footfall",
        status: "neutral",
      },
      humanStaff: {
        tag: "Shift-Constrained",
        desc: "Requires multi-shift overtime, recruitment & ongoing training",
        status: "negative",
      },
      digitalHuman: {
        tag: "Continuous 24/7 Floor Coverage",
        desc: "Zero staffing fatigue, consistent enterprise hospitality day & night",
        status: "positive",
      },
    },
    {
      feature: "Intake & Interaction Speed",
      featureSub: "Turnaround time from question to answer",
      chatbot: {
        tag: "Typing Friction",
        desc: "Slow on-screen virtual keyboard input causing queue bottlenecks",
        status: "negative",
      },
      humanStaff: {
        tag: "Variable Intake",
        desc: "Prone to peak-hour line buildup and inconsistent wait times",
        status: "neutral",
      },
      digitalHuman: {
        tag: "Sub-200ms Spoken Audio",
        desc: "Natural conversational speech recognition & instant vocal reply",
        status: "positive",
      },
    },
    {
      feature: "Multilingual Fluency",
      featureSub: "Global tourist & multi-ethnic visitor support",
      chatbot: {
        tag: "Text Translation",
        desc: "Machine-translated text with phrasing errors and no vocal nuance",
        status: "neutral",
      },
      humanStaff: {
        tag: "Staff-Dependent",
        desc: "Limited to individual employee languages (usually 1–2)",
        status: "negative",
      },
      digitalHuman: {
        tag: "29+ Global & 7 Indian Regional",
        desc: "Native lip-sync and empathetic speech synthesis on the very first phrase",
        status: "positive",
      },
    },
    {
      feature: "Data Privacy & Architecture",
      featureSub: "Compliance in banks, hospitals & government",
      chatbot: {
        tag: "Third-Party Cloud APIs",
        desc: "Voice and query text transmitted over public WAN with data privacy risks",
        status: "negative",
      },
      humanStaff: {
        tag: "Manual Procedures",
        desc: "Paper or terminal logging susceptible to physical loss or oversight",
        status: "neutral",
      },
      digitalHuman: {
        tag: "100% Offline Air-Gapped",
        desc: "On-premise GPU workstation with zero outbound cloud audio transmission",
        status: "positive",
      },
    },
    {
      feature: "Catalog & Knowledge Grounding",
      featureSub: "Accuracy on internal documents & inventory",
      chatbot: {
        tag: "Hallucination Risk",
        desc: "Ungrounded LLM chat or brittle hardcoded decision trees",
        status: "negative",
      },
      humanStaff: {
        tag: "Variable Memory",
        desc: "Knowledge varies across new hires; requires constant manual updates",
        status: "neutral",
      },
      digitalHuman: {
        tag: "Local Cross-Encoder RAG",
        desc: "Strict source citation from local CSVs, PDFs, and facility manuals",
        status: "positive",
      },
    },
  ];

  return (
    <section
      id="roi-comparison"
      className="relative overflow-hidden py-16 sm:py-24 bg-white border-b border-[var(--lp-line)] scroll-mt-20"
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

        {/* COMPACT COMPARISON MATRIX WITH CLEAR STATUS BADGES */}
        <div className="flex items-center justify-between px-1 mb-2.5 sm:hidden text-[11px] text-[var(--lp-muted)]">
          <span className="font-medium text-[var(--lp-ink-2)]">Architectural breakdown</span>
          <span className="font-semibold text-[var(--lp-accent)]">Swipe table &rarr;</span>
        </div>

        <div className="rounded-[24px] sm:rounded-[28px] bg-[var(--lp-tile)] p-2 sm:p-3 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]">
          <div className="overflow-hidden rounded-[18px] sm:rounded-[22px] border border-[var(--lp-line)] bg-[var(--lp-card)]">
            <div className="overflow-x-auto scrollbar-none">
              <table className="min-w-[720px] w-full border-collapse text-left text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-[var(--lp-line)] bg-[var(--lp-tile)]">
                    <th className="p-4 sm:p-5 font-semibold text-[var(--lp-ink)] w-[26%]">
                      Evaluation Dimension
                    </th>
                    <th className="p-4 sm:p-5 font-medium text-[var(--lp-muted)] w-[24%]">
                      Conventional Chatbots
                    </th>
                    <th className="p-4 sm:p-5 font-medium text-[var(--lp-muted)] w-[22%]">
                      Manual Front Desk
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-[var(--lp-accent-ink)] bg-[rgba(255,90,31,0.06)] w-[28%] border-l border-[rgba(255,90,31,0.15)]">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-[var(--lp-accent)] shrink-0" />
                        <span>HS Global AI Digital Human</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--lp-line)]">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-[var(--lp-tile)]/40 transition-colors">
                      {/* DIMENSION */}
                      <td className="p-4 sm:p-5 align-top">
                        <div className="font-bold text-[var(--lp-ink)]">{row.feature}</div>
                        <div className="text-[11px] text-[var(--lp-muted)] mt-0.5">{row.featureSub}</div>
                      </td>

                      {/* CHATBOT */}
                      <td className="p-4 sm:p-5 align-top">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-[11px] font-semibold text-amber-800 mb-1.5">
                          <AlertTriangle className="h-3 w-3 text-amber-600 shrink-0" />
                          <span>{row.chatbot.tag}</span>
                        </span>
                        <p className="text-xs text-[var(--lp-muted)] leading-relaxed">{row.chatbot.desc}</p>
                      </td>

                      {/* MANUAL STAFF */}
                      <td className="p-4 sm:p-5 align-top">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 border border-gray-200 px-2 py-0.5 text-[11px] font-semibold text-gray-700 mb-1.5">
                          <Clock className="h-3 w-3 text-gray-500 shrink-0" />
                          <span>{row.humanStaff.tag}</span>
                        </span>
                        <p className="text-xs text-[var(--lp-muted)] leading-relaxed">{row.humanStaff.desc}</p>
                      </td>

                      {/* HS GLOBAL AI */}
                      <td className="p-4 sm:p-5 align-top bg-[rgba(255,90,31,0.04)] border-l border-[rgba(255,90,31,0.12)]">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11.5px] font-bold text-emerald-800 mb-1.5 shadow-2xs">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{row.digitalHuman.tag}</span>
                        </span>
                        <p className="text-xs font-medium text-[var(--lp-ink)] leading-relaxed">{row.digitalHuman.desc}</p>
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
