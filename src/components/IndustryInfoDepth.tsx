"use client";

import { motion } from "framer-motion";
import { Info, HelpCircle, Lightbulb, Compass, Users, AlertTriangle } from "lucide-react";

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

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

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
      color: "border-cyan-500/40 bg-cyan-950/40 text-cyan-300",
    },
    {
      label: cLabels.why || "WHY DEPLOY IT?",
      title: cTitles.why || "Value & Operational Impact",
      content: infoDepth.why,
      icon: Lightbulb,
      color: "border-sky-500/40 bg-sky-950/40 text-sky-300",
    },
    {
      label: cLabels.how || "HOW DOES IT WORK?",
      title: cTitles.how || "Core System Assistance",
      content: infoDepth.how,
      icon: HelpCircle,
      color: "border-indigo-500/40 bg-indigo-950/40 text-indigo-300",
    },
    {
      label: cLabels.where || "WHERE DEPLOYED?",
      title: cTitles.where || "Physical Target Locations",
      content: infoDepth.where,
      icon: Compass,
      color: "border-teal-500/40 bg-teal-950/40 text-teal-300",
    },
    {
      label: cLabels.who || "WHO IS IT FOR?",
      title: cTitles.who || "Target Facilities & Organizations",
      content: infoDepth.who,
      icon: Users,
      color: "border-blue-500/40 bg-blue-950/40 text-blue-300",
    },
    {
      label: cLabels.limitations || "OPERATIONAL BOUNDARIES",
      title: cTitles.limitations || "Scope & Professional Limitations",
      content: infoDepth.limitations,
      icon: AlertTriangle,
      color: "border-amber-500/40 bg-amber-950/40 text-amber-300",
      highlight: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
            {depthSec.badge || "Topical Depth & Architecture"}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {depthSec.headingPrefix || "Understanding AI Digital Humans in "}{title}
          </h2>
          <p className="mt-4 text-base text-gray-300">
            {depthSec.subheading || "A comprehensive breakdown of technology purpose, operational workflows, target environments, and safety boundaries."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative flex flex-col justify-between rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${
                  card.highlight
                    ? "border-amber-500/50 bg-amber-950/20 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                    : "border-white/15 bg-black/60 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      {card.label}
                    </span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${card.color}`}>
                      <CardIcon className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-300">
                    {card.content}
                  </p>
                </div>

                {card.highlight && (
                  <div className="mt-6 pt-4 border-t border-amber-500/30">
                    <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                      ⚠️ Purely Informational & Administrative — No Medical Diagnosis
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
