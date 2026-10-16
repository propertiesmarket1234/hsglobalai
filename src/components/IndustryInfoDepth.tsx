"use client";

import { motion } from "framer-motion";
import { Info, HelpCircle, Lightbulb, Compass, Users, AlertTriangle } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

interface InfoDepthProps {
  title: string;
  infoDepth: {
    what: string;
    why: string;
    how: string;
    where: string;
    who: string;
    limitations: string;
  };
}

export default function IndustryInfoDepth({ title, infoDepth }: InfoDepthProps) {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const depthSec = (dict as any).industryInfoDepthComponent || {};
  const cLabels = depthSec.cardLabels || {};
  const cTitles = depthSec.cardTitles || {};

  if (!infoDepth) return null;

  const cards = [
    {
      label: cLabels.what || "WHAT IS IT?",
      title: `${cTitles.what || "AI Digital Humans in "}${title}`,
      content: infoDepth.what,
      icon: Info,
    },
    {
      label: cLabels.why || "WHY DEPLOY IT?",
      title: cTitles.why || "Value & Operational Impact",
      content: infoDepth.why,
      icon: Lightbulb,
    },
    {
      label: cLabels.how || "HOW DOES IT WORK?",
      title: cTitles.how || "Core System Assistance",
      content: infoDepth.how,
      icon: HelpCircle,
    },
    {
      label: cLabels.where || "WHERE DEPLOYED?",
      title: cTitles.where || "Physical Target Locations",
      content: infoDepth.where,
      icon: Compass,
    },
    {
      label: cLabels.who || "WHO INTERACTS?",
      title: cTitles.who || "Audience & User Profiles",
      content: infoDepth.who,
      icon: Users,
    },
    {
      label: cLabels.limitations || "DEPLOYMENT BOUNDARIES",
      title: cTitles.limitations || "Safe Scope & Guardrails",
      content: infoDepth.limitations,
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)]">
      <div className="mx-auto max-w-[1200px]">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[44rem] text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
            Comprehensive Architecture Breakdown
          </span>
          <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
            In-Depth Analysis: {title}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
            Detailed operational guide covering deployment environments, audience profiles, and architecture boundaries.
          </p>
        </div>

        {/* 6 ARCHITECTURE CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="flex flex-col justify-between rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-7 shadow-[var(--lp-shadow-card)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[var(--lp-tile)] px-3 py-1 text-[11px] font-semibold text-[var(--lp-muted)] uppercase tracking-wider">
                      {card.label}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs"
                    >
                      <Icon className="h-4 w-4 text-[var(--lp-accent)]" strokeWidth={1.75} />
                    </motion.div>
                  </div>

                  <h3 className="mt-5 text-[19px] font-bold text-[var(--lp-ink)]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
