"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";
import { ShieldCheck, Globe2, Sparkles, Database, ArrowRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Secure On-Device AI",
    subtitle: "Air-Gapped Data Privacy",
    description:
      "Deploy high-performance digital humans that run 100% locally on physical edge hardware. Protect sensitive customer interactions and business intelligence with zero cloud data leakage.",
    badge: "Local Processing",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Multilingual Voice AI",
    subtitle: "Human-Like Conversation",
    description:
      "Engage global visitors with natural, human-like voice interaction across 29+ languages, regional accents, and per-persona voice cloning for seamless customer service.",
    badge: "29+ Global Languages",
    icon: Globe2,
  },
  {
    number: "03",
    title: "Custom Brand Avatars",
    subtitle: "Tailored Corporate Persona",
    description:
      "Create bespoke 3D digital avatars engineered to embody your exact brand identity, voice, attire, and domain expertise for authentic customer engagement.",
    badge: "Bespoke Design",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Knowledge & Catalog AI",
    subtitle: "Intelligent Business Search",
    description:
      "Instantly connect corporate document RAG and product catalog data to deliver grounded, real-time answers across 3D hologram boxes, kiosks, and digital displays.",
    badge: "Document & Catalog RAG",
    icon: Database,
  },
];

export default function WhyHSGlobal() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const wComp = (dict as any).whyHsGlobalComponent || {};

  return (
    <section className="relative overflow-hidden bg-[var(--lp-canvas)] px-6 py-24 text-[var(--lp-ink)] border-t border-[var(--lp-line)]">
      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              {wComp.badge || "Enterprise Advantage"}
            </span>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)]">
              {wComp.titlePrefix || "AI engineered for "}{" "}
              <span className="text-[var(--lp-accent)]">
                {wComp.titleHighlight || "physical enterprise scale."}
              </span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-[var(--lp-muted)]">
              {wComp.subtitle || "Engineered to operate securely, intelligently, and reliably across physical environments with sub-second latency and zero cloud dependency."}
            </p>
          </div>
        </motion.div>

        {/* FEATURE CARDS GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[var(--lp-muted)]">
                      {feature.number}
                    </span>
                    <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-pebble)] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[var(--lp-muted)]">
                      {feature.badge}
                    </span>
                  </div>

                  <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lp-pebble)] border border-[var(--lp-line)] text-[var(--lp-accent)] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[var(--lp-ink)]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--lp-muted)]">
                    {feature.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--lp-muted)]">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--lp-line)] flex items-center justify-between">
                  <span className="text-xs font-medium text-[var(--lp-muted)] group-hover:text-[var(--lp-ink)] transition-colors">
                    Enterprise Spec
                  </span>
                  <ArrowRight className="w-4 h-4 text-[var(--lp-muted)] group-hover:text-[var(--lp-accent)] group-hover:translate-x-1 transition-all" strokeWidth={1.75} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}