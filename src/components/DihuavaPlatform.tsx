"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { UserCheck, FileText, Globe, Sparkles, ShoppingBag, Brain } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

interface HighlightItem {
  label: string;
  detail: string;
}

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  tags: string[];
  stat: string;
  highlights: HighlightItem[];
  linkUrl: string;
  linkText: string;
}

export default function DihuavaPlatform() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const hp = dict.home.platform;

  const lPath = (path: string) => {
    if (currentLocale === "en") return path;
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  const capabilities: CapabilityItem[] = [
    {
      id: "avatar",
      title: hp.capabilities.avatar.title,
      subtitle: hp.capabilities.avatar.subtitle,
      description: hp.capabilities.avatar.description,
      icon: UserCheck,
      tags: hp.capabilities.avatar.tags,
      stat: hp.capabilities.avatar.stat,
      linkUrl: "/products/ai-digital-human/avatar-customization",
      linkText: hp.capabilities.avatar.linkText,
      highlights: hp.capabilities.avatar.highlights,
    },
    {
      id: "document",
      title: hp.capabilities.document.title,
      subtitle: hp.capabilities.document.subtitle,
      description: hp.capabilities.document.description,
      icon: FileText,
      tags: hp.capabilities.document.tags,
      stat: hp.capabilities.document.stat,
      linkUrl: "/products/ai-digital-human/document-intelligence",
      linkText: hp.capabilities.document.linkText,
      highlights: hp.capabilities.document.highlights,
    },
    {
      id: "language",
      title: hp.capabilities.language.title,
      subtitle: hp.capabilities.language.subtitle,
      description: hp.capabilities.language.description,
      icon: Globe,
      tags: hp.capabilities.language.tags,
      stat: hp.capabilities.language.stat,
      linkUrl: "/products/ai-digital-human/multilingual-support",
      linkText: hp.capabilities.language.linkText,
      highlights: hp.capabilities.language.highlights,
    },
    {
      id: "persona",
      title: hp.capabilities.persona.title,
      subtitle: hp.capabilities.persona.subtitle,
      description: hp.capabilities.persona.description,
      icon: Sparkles,
      tags: hp.capabilities.persona.tags,
      stat: hp.capabilities.persona.stat,
      linkUrl: "/products/ai-digital-human/persona-management",
      linkText: hp.capabilities.persona.linkText,
      highlights: hp.capabilities.persona.highlights,
    },
    {
      id: "catalog",
      title: hp.capabilities.catalog.title,
      subtitle: hp.capabilities.catalog.subtitle,
      description: hp.capabilities.catalog.description,
      icon: ShoppingBag,
      tags: hp.capabilities.catalog.tags,
      stat: hp.capabilities.catalog.stat,
      linkUrl: "/products/ai-digital-human/ai-product-catalog",
      linkText: hp.capabilities.catalog.linkText,
      highlights: hp.capabilities.catalog.highlights,
    },
    {
      id: "brain-clone",
      title: (hp.capabilities as any).brainClone?.title || "Brain Clone",
      subtitle: (hp.capabilities as any).brainClone?.subtitle || "Source-Grounded Personal Knowledge Engine",
      description: (hp.capabilities as any).brainClone?.description || "Turn a person's recorded talks and teachings into a source-grounded digital human that answers from what they actually said.",
      icon: Brain,
      tags: (hp.capabilities as any).brainClone?.tags || ["Source-Grounded Answers", "On-Device Hardware", "Rights Approval Required", "No Invention Guard"],
      stat: (hp.capabilities as any).brainClone?.stat || "IN DEVELOPMENT",
      linkUrl: "/products/ai-digital-human",
      linkText: (hp.capabilities as any).brainClone?.linkText || "Explore DIHUAVA Platform Architecture →",
      highlights: (hp.capabilities as any).brainClone?.highlights || [
        { label: "Source-Grounded Answers", detail: "Answers from the person's recorded words, with source passages available on demand." },
        { label: "On-Device Hardware", detail: "Processing runs on customer-owned hardware with zero cloud data transmission." },
        { label: "Rights Approval Required", detail: "Requires signed release from the individual, estate, or institution before setup." },
        { label: "Grounded Response Guard", detail: "When the recorded material does not contain the answer, Brain Clone does not invent one." },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const activeCapability = capabilities.find((c) => c.id === activeTab) || capabilities[0];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/3 top-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-cyan-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {hp.badge}
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {hp.title}{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                {hp.titleHighlight}
              </span>
            </h2>

            <p className="max-w-md text-base leading-7 text-gray-400">
              {hp.subtitle}
            </p>
          </div>
        </motion.div>

        {/* INTERACTIVE CAPABILITIES SHOWCASE */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* TABS SELECTOR (Left 5 Cols) */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {capabilities.map((cap) => {
              const isActive = cap.id === activeTab;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className={`group relative flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-cyan-500/50 bg-cyan-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                      : "border-white/10 bg-neutral-950/60 backdrop-blur-md hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <cap.icon className="w-5 h-5 text-cyan-300" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3
                        className={`text-lg font-bold transition-colors ${
                          isActive ? "text-cyan-300" : "text-white group-hover:text-gray-200"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      <p className="text-xs font-medium text-gray-400">{cap.subtitle}</p>
                    </div>
                  </div>

                  <span
                    className={`text-sm transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-cyan-400" : "text-gray-600 group-hover:text-white"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE TAB DISPLAY (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeCapability.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl"
            >
              {/* Top Stat Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
                    <activeCapability.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {hp.deepDive}
                    </span>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {activeCapability.title}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
                  <span className="text-xs font-semibold text-cyan-300">
                    {activeCapability.stat}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                {activeCapability.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {activeCapability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Executive Highlights Card */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-neutral-900/80 p-5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {hp.highlightsTitle}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {hp.activeSystem}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {activeCapability.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                        ✓
                      </span>
                      <p className="text-gray-300 leading-normal">
                        <strong className="font-semibold text-white">{item.label}:</strong>{" "}
                        <span className="text-gray-400">{item.detail}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Redirection Page CTA Button */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
                <span className="text-xs text-gray-400 font-medium">
                  {hp.footerQuestion}
                </span>
                <a
                  href={lPath(activeCapability.linkUrl)}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-950/80 px-5 py-2.5 text-xs font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black hover:scale-105"
                >
                  <span>{activeCapability.linkText}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
