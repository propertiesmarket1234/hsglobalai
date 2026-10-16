"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  TrendingUp,
  Zap,
  Clock,
  Globe2,
  Star,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";

const impacts = [
  {
    title: "Reduced Operational Costs",
    description:
      "Automate repetitive customer inquiries and front-desk workflows, freeing human staff for high-value advisory tasks.",
    icon: TrendingDown,
    iconColor: "text-[var(--lp-accent)]",
    stat: "-70% Staffing Overhead",
  },
  {
    title: "Higher Customer Engagement",
    description:
      "Lifelike 3D Digital Human AI experiences increase visitor attention, dwell time, and overall brand recall dramatically.",
    icon: TrendingUp,
    iconColor: "text-[var(--lp-accent)]",
    stat: "4x Higher Dwell Time",
  },
  {
    title: "Instant Information Delivery",
    description:
      "Provide immediate, accurate responses to customer questions without queues or waiting for staff availability.",
    icon: Zap,
    iconColor: "text-[#16a34a]",
    stat: "Sub-Second Latency",
  },
  {
    title: "24/7 Floor Availability",
    description:
      "Deliver consistent, high-quality customer assistance across all physical branches, kiosks, and operating hours.",
    icon: Clock,
    iconColor: "text-[var(--lp-ink)]",
    stat: "Zero Unattended Hours",
  },
  {
    title: "Multilingual Fluency",
    description:
      "Engage visitors in 29+ global languages and regional dialects with automatic voice detection and lip sync.",
    icon: Globe2,
    iconColor: "text-[var(--lp-ink)]",
    stat: "29+ Global Languages",
  },
  {
    title: "Consistent Service Quality",
    description:
      "Eliminate bad days, employee fatigue, and high staff turnover. Every customer gets empathetic, patient care.",
    icon: Star,
    iconColor: "text-[var(--lp-accent)]",
    stat: "98% Positive Feedback",
  },
  {
    title: "Enterprise Air-Gapped Security",
    description:
      "Built for strict corporate compliance with 100% on-premise local execution, zero cloud data pings, and HIPAA/GDPR alignment.",
    icon: ShieldCheck,
    iconColor: "text-[var(--lp-ink)]",
    stat: "100% On-Premise",
  },
  {
    title: "Scalable Across Facilities",
    description:
      "Deploy and manage digital humans across hundreds of branch kiosks, hospitals, retail stores, and campuses effortlessly.",
    icon: Building2,
    iconColor: "text-[var(--lp-ink)]",
    stat: "Unlimited Kiosks",
  },
];

export default function IndustryImpact() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24 bg-[var(--lp-tile)]">
      <div className="mx-auto max-w-[1200px]">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[44rem] text-center">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
            Measurable Business Outcomes
          </span>
          <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
            The strategic ROI of deploying AI digital humans.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
            Proven commercial impact across physical retail, healthcare triage, high-security facilities, and large-scale public exhibitions.
          </p>
        </div>

        {/* 8 IMPACT CARDS GRID */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col justify-between rounded-[24px] bg-[var(--lp-card)] p-6 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)] transition-all hover:shadow-[var(--lp-shadow-lift)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs"
                    >
                      <Icon className={`h-5 w-5 ${item.iconColor}`} strokeWidth={1.75} />
                    </motion.div>
                    <span className="rounded-full bg-[rgba(255,90,31,0.08)] px-2.5 py-1 text-[11px] font-semibold text-[var(--lp-accent-ink)]">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-[var(--lp-ink)]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--lp-ink-2)]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[var(--lp-line)] pt-3.5 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                  <span className="text-[12px] font-semibold text-[var(--lp-ink-2)]">
                    Enterprise Validated
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
