"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export interface UseCaseStory {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  imageSrc: string;
  imageAlt: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
}

export default function ImmersiveUseCases() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const uc = dict.home.useCases;
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const useCases: UseCaseStory[] = [
    {
      id: "museums",
      badge: "Tourism & Culture",
      titlePrefix: "Interactive Museum",
      titleHighlight: " Holographic Docent",
      description:
        "Preserve cultural narratives and deliver interactive, multilingual exhibit tours. Visitors engage in natural spoken dialogue with life-sized historical avatars that recall complex historical context instantly.",
      ctaPrimaryText: "Request Museum Pilot",
      ctaSecondaryText: "View Exhibition Holograms",
      ctaPrimaryHref: lPath("/contact"),
      ctaSecondaryHref: lPath("/industries/tourism"),
      imageSrc: "/images/use-cases/museum_hologram_avatar.png",
      imageAlt: "Interactive Museum Hologram Avatar Exhibit",
      capabilities: [
        "Multilingual Historical Storytelling",
        "Interactive Q&A on Artifacts",
        "29+ Languages Real-Time",
        "Life-Sized 86'' Hologram Enclosure",
      ],
      metrics: [
        { label: "Visitor Dwell Time", value: "4.2x" },
        { label: "Language Coverage", value: "29+" },
        { label: "Uptime Reliability", value: "99.9%" },
      ],
    },
    {
      id: "retail",
      badge: "Retail & Luxury",
      titlePrefix: "Jewellery Flagship",
      titleHighlight: " 3D Smart Kiosk",
      description:
        "Deploy a tireless 24/7 sales stylist for flagship luxury stores. Digital humans demonstrate jewellery collections, explain craftsmanship details, and check backroom inventory without customer wait times.",
      ctaPrimaryText: "Request Retail Demo",
      ctaSecondaryText: "Explore Retail Cases",
      ctaPrimaryHref: lPath("/contact"),
      ctaSecondaryHref: lPath("/industries/retail"),
      imageSrc: "/images/use-cases/jewellery_hologram_kiosk.png",
      imageAlt: "Actual 3D Holographic Jewellery Product Kiosk with Live Digital Human Presenter",
      capabilities: uc.retail.capabilities,
      metrics: uc.retail.metrics,
    },
    {
      id: "banking",
      badge: uc.banking.badge,
      titlePrefix: uc.banking.titlePrefix,
      titleHighlight: uc.banking.titleHighlight,
      description: uc.banking.description,
      ctaPrimaryText: uc.banking.ctaPrimaryText,
      ctaSecondaryText: uc.banking.ctaSecondaryText,
      ctaPrimaryHref: lPath("/contact"),
      ctaSecondaryHref: lPath("/industries/banking"),
      imageSrc: "/images/use-cases/banking_hologram_kiosk.png",
      imageAlt: "3D Hologram Kiosk display featuring Lady Corporate Wealth Advisor for Bank VIP Lounges",
      capabilities: uc.banking.capabilities,
      metrics: uc.banking.metrics,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("museums");
  const activeStory = useCases.find((u) => u.id === activeTab) || useCases[0];

  return (
    <section className="relative overflow-hidden bg-[var(--lp-tile)] px-4 py-20 sm:px-6 md:py-28 text-[var(--lp-ink)]">
      <div className="mx-auto max-w-[1200px]">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[44rem] text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
            Physical Space Deployments
          </span>
          <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
            Real environments. Real business outcomes.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
            Explore how enterprise organizations deploy AI digital humans across museum halls and luxury retail flagships.
          </p>

          {/* TAB SWITCHER */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] p-1.5 shadow-xs">
            {useCases.map((story) => {
              const isSelected = activeTab === story.id;
              return (
                <button
                  key={story.id}
                  onClick={() => setActiveTab(story.id)}
                  className={`relative inline-flex h-8 items-center justify-center rounded-full px-4 text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer ${
                    isSelected ? "text-[var(--lp-ink)] font-semibold" : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeUseCasePill"
                      className="absolute inset-0 rounded-full bg-[var(--lp-tile)] shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{story.badge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED USE CASE CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 sm:p-10 md:p-12 shadow-[var(--lp-shadow-card)]"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* LEFT COLUMN: STORY DETAILS */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,90,31,0.08)] px-3 py-1 text-xs font-semibold text-[var(--lp-accent-ink)]">
                    {activeStory.badge}
                  </span>

                  <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--lp-ink)]">
                    {activeStory.titlePrefix}
                    <span className="text-[var(--lp-accent)]">{activeStory.titleHighlight}</span>
                  </h3>

                  <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[var(--lp-ink-2)]">
                    {activeStory.description}
                  </p>

                  {/* Capabilities Pills with CheckCircle2 */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeStory.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                        <span>{cap}</span>
                      </span>
                    ))}
                  </div>

                  {/* Metrics Grid */}
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--lp-line)] pt-6">
                    {activeStory.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-2xl font-bold text-[var(--lp-ink)] font-mono">{m.value}</p>
                        <p className="text-[11px] text-[var(--lp-muted)] uppercase tracking-wider mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={activeStory.ctaPrimaryHref}
                    className="group/btn inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{activeStory.ctaPrimaryText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={activeStory.ctaSecondaryHref}
                    className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-6 text-sm font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{activeStory.ctaSecondaryText}</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: REAL PHOTOGRAPHIC DEMONSTRATION */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0B1224] shadow-[var(--lp-shadow-lift)] lg:col-span-6">
                <Image
                  src={activeStory.imageSrc}
                  alt={activeStory.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
