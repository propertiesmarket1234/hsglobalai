"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { UserCheck, FileText, Globe, Sparkles, ShoppingBag, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

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
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const capabilities: CapabilityItem[] = [
    {
      id: "avatar",
      title: "Avatar Customization",
      subtitle: "Hyper-Realistic Photorealistic 3D Personas",
      description:
        "Design bespoke digital humans tailored to your corporate brand. Customize facial features, uniform wardrobe, posture behavior, and corporate voice clone profiles with millisecond-accurate lip synchronization.",
      icon: UserCheck,
      tags: ["Photorealistic 3D Mesh", "Voice Reference Cloning", "Dynamic Lip Sync", "Brand Uniform Wardrobe"],
      stat: "Sub-Second Lip Sync",
      linkUrl: "/products/ai-digital-human/avatar-customization",
      linkText: "Explore Avatar Customization",
      highlights: [
        { label: "Rendering", detail: "Real-time 60 FPS 4K on-premise rendering" },
        { label: "Voice", detail: "Bespoke corporate voice cloning in 29+ global languages" },
      ],
    },
    {
      id: "document",
      title: "Document Intelligence",
      subtitle: "Air-Gapped Local Knowledge RAG",
      description:
        "Upload corporate SOP manuals, clinical medical guidelines, product catalogs, and compliance FAQs. The local AI engine indexes documents offline and answers visitor questions with 100% citation grounding.",
      icon: FileText,
      tags: ["Local PDF & Doc Indexing", "Zero Cloud Transmission", "Instant Document Search", "Strict Hallucination Guards"],
      stat: "100% Air-Gapped",
      linkUrl: "/products/ai-digital-human/document-intelligence",
      linkText: "Explore Document Intelligence",
      highlights: [
        { label: "Security", detail: "Zero data leaves the local physical edge workstation" },
        { label: "Accuracy", detail: "Strict RAG grounding to approved company literature" },
      ],
    },
    {
      id: "languages",
      title: "Multilingual Engine",
      subtitle: "29+ Global Languages",
      description:
        "Engage international shoppers and global tourists effortlessly. The platform detects the spoken language automatically and switches dialogue instantly without requiring manual touch input.",
      icon: Globe,
      tags: ["Auto Language Detection", "29+ Global Languages", "Native Accents", "Zero Lag TTS"],
      stat: "29+ Global Languages",
      linkUrl: "/products/ai-digital-human",
      linkText: "Explore Multilingual Engine",
      highlights: [
        { label: "Coverage", detail: "Major European, Asian, and Middle Eastern languages" },
        { label: "Latency", detail: "Instantaneous dialect switching" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("avatar");
  const activeCapability = capabilities.find((c) => c.id === activeTab) || capabilities[0];

  return (
    <section className="relative overflow-hidden bg-[var(--lp-bg)] px-4 py-20 sm:px-6 md:py-28 text-[var(--lp-ink)]">
      <div className="relative mx-auto max-w-[1200px]">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[44rem] text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
            Software Intelligence Layer
          </span>
          <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
            The brain behind the digital human workforce.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
            DIHUAVA is our proprietary on-premise AI platform powering autonomous avatars across interactive touchscreens, 3D hologram cabinets, and spatial displays.
          </p>
        </div>

        {/* INTERACTIVE CAPABILITIES SHOWCASE */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* TABS SELECTOR (Left 5 Cols) */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {capabilities.map((cap) => {
              const isActive = cap.id === activeTab;
              const Icon = cap.icon;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className={`group relative flex items-center justify-between rounded-2xl border p-5 text-left transition-all cursor-pointer active:scale-[0.99] ${
                    isActive
                      ? "border-[var(--lp-ink)] bg-[var(--lp-card)] shadow-[var(--lp-shadow-card)]"
                      : "border-[var(--lp-line)] bg-[var(--lp-tile)] hover:bg-[var(--lp-tile-2)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] ${
                        isActive ? "bg-[var(--lp-tile)] text-[var(--lp-accent)]" : "bg-[var(--lp-card)] text-[var(--lp-ink)]"
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </motion.span>
                    <div>
                      <h3 className="text-base font-bold text-[var(--lp-ink)]">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-[var(--lp-muted)]">{cap.subtitle}</p>
                    </div>
                  </div>

                  <ArrowRight className={`h-4 w-4 transition-transform ${
                    isActive ? "translate-x-1 text-[var(--lp-accent)]" : "text-[var(--lp-muted)] group-hover:translate-x-0.5"
                  }`} />
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
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 sm:p-10 shadow-[var(--lp-shadow-card)]"
            >
              {/* Top Stat Badge */}
              <div className="flex items-center justify-between border-b border-[var(--lp-line)] pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-accent)] shadow-xs">
                    <activeCapability.icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
                      Platform Capability
                    </span>
                    <h3 className="text-2xl font-bold text-[var(--lp-ink)] sm:text-3xl">
                      {activeCapability.title}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 rounded-full bg-[rgba(255,90,31,0.08)] px-3.5 py-1 text-xs font-semibold text-[var(--lp-accent-ink)]">
                  {activeCapability.stat}
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-7 text-[var(--lp-ink-2)]">
                {activeCapability.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {activeCapability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 text-xs font-medium text-[var(--lp-ink)]"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Active Tab Pictorial Graphic & Specs Display */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-[var(--lp-line)] bg-black/80 p-5 backdrop-blur-md shadow-xl">
                {/* Pictorial Visual Container depending on activeTab */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-950 group">
                  {activeCapability.id === "avatar" && (
                    <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-950/60 via-black to-slate-950">
                      <Image
                        src="/images/avatars/executive_lady.png"
                        alt="AI Avatar Face Customization"
                        fill
                        className="object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 z-10 rounded-full border border-cyan-400/50 bg-black/80 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>Real-Time Lip-Sync Engine</span>
                      </div>
                      <div className="absolute bottom-3 right-3 z-10 rounded-full border border-emerald-500/40 bg-emerald-950/80 px-3 py-1 text-[11px] font-mono text-emerald-300 backdrop-blur-md">
                        60 FPS Neural Rendering
                      </div>
                    </div>
                  )}

                  {activeCapability.id === "document" && (
                    <div className="relative h-full w-full flex items-center justify-center bg-neutral-950">
                      <Image
                        src="/products/digital-humans/digital-human-dashboard.jpg"
                        alt="On-Device Document Intelligence RAG Engine"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 z-10 rounded-full border border-cyan-400/50 bg-black/80 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>Air-Gapped Document RAG Engine</span>
                      </div>
                    </div>
                  )}

                  {activeCapability.id === "language" && (
                    <div className="relative h-full w-full p-6 flex flex-col justify-between bg-gradient-to-br from-cyan-950/80 via-black to-blue-950">
                      <div className="flex items-center justify-between z-10">
                        <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                          🌐 29+ Global Languages + 7 Indian Regional Models
                        </span>
                        <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                          Neural Speech Synthesis
                        </span>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 my-auto z-10">
                        {["English (US/UK)", "Spanish", "Arabic", "Mandarin", "Hindi (हिंदी)", "Telugu (తెలుగు)", "Tamil (தமிழ்)", "Bengali (বাংলা)"].map((lang) => (
                          <div key={lang} className="rounded-lg border border-cyan-500/30 bg-black/70 p-2 text-[11px] font-mono font-medium text-cyan-200 text-center backdrop-blur-md shadow-md">
                            {lang}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 z-10 border-t border-cyan-500/20 pt-2">
                        <span>Offline Acoustic Models</span>
                        <span className="text-cyan-400 font-semibold">Zero Internet Latency</span>
                      </div>
                    </div>
                  )}

                  {activeCapability.id === "persona" && (
                    <div className="relative h-full w-full flex items-center justify-center bg-neutral-950">
                      <Image
                        src="/images/avatars/full_digital_human_presenter.png"
                        alt="Corporate Persona Management"
                        fill
                        className="object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 z-10 rounded-full border border-cyan-400/50 bg-black/80 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>Corporate Persona Engine</span>
                      </div>
                    </div>
                  )}

                  {activeCapability.id === "catalog" && (
                    <div className="relative h-full w-full flex items-center justify-center bg-neutral-950">
                      <Image
                        src="/images/use-cases/jewellery_hologram_kiosk.png"
                        alt="AI Interactive Product Catalogue Kiosk"
                        fill
                        className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 z-10 rounded-full border border-cyan-400/50 bg-black/80 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>CSV-Driven AI Catalogue Kiosk</span>
                      </div>
                    </div>
                  )}

                  {activeCapability.id === "brain-clone" && (
                    <div className="relative h-full w-full flex items-center justify-center bg-neutral-950">
                      <Image
                        src="/images/avatars/albert_einstein.png"
                        alt="Brain Clone Digital Twin Engine"
                        fill
                        className="object-contain p-2 filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 z-10 rounded-full border border-amber-400/50 bg-black/80 px-3 py-1 text-[11px] font-mono text-amber-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                        <span>Source-Grounded Personal Knowledge Engine</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[var(--lp-line)] pt-6">
                {activeCapability.highlights.map((h) => (
                  <div key={h.label} className="rounded-xl bg-[var(--lp-tile)] p-3.5 border border-[var(--lp-line)]">
                    <span className="text-[11px] font-semibold text-[var(--lp-muted)] uppercase tracking-wider block">
                      {h.label}
                    </span>
                    <span className="text-xs font-medium text-[var(--lp-ink)] mt-0.5 block">
                      {h.detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between pt-2">
                <Link
                  href={lPath(activeCapability.linkUrl)}
                  className="group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                >
                  <span>{activeCapability.linkText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
