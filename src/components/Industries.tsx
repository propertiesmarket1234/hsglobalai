"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  HeartPulse,
  Landmark,
  Shield,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

interface IndustryCardData {
  id: string;
  label: string;
  title: string;
  description: string;
  specPill: string;
  imageSrc: string;
  imageAlt: string;
  icon: typeof ShoppingBag;
  href: string;
}

const INDUSTRY_CARDS: IndustryCardData[] = [
  {
    id: "retail",
    label: "Retail & Luxury Stores",
    title: "24/7 store concierge & catalog stylist",
    description:
      "Guide shoppers through collections, sizes, and product pairings with synchronized on-screen media.",
    specPill: "CSV Catalog RAG · Multilingual",
    imageSrc: "/images/use-cases/jewellery_hologram_kiosk.png",
    imageAlt: "Interactive Retail Digital Human Kiosk in Luxury Showroom",
    icon: ShoppingBag,
    href: "/industries/retail",
  },
  {
    id: "healthcare",
    label: "Hospitals & Clinics",
    title: "Compassionate reception & wayfinding",
    description:
      "Direct patients across clinics, answer department questions locally, and bridge 29+ spoken languages.",
    specPill: "Local Privacy · 29+ Langs",
    imageSrc: "/images/avatars/ai_digital_human_lady.png",
    imageAlt: "Healthcare AI Digital Human Patient Guidance Assistant",
    icon: HeartPulse,
    href: "/industries/healthcare",
  },
  {
    id: "banking",
    label: "Banking & Finance",
    title: "Private branch concierge & policy guide",
    description:
      "Explain financial products, branch workflows, and onboarding requirements inside air-gapped branches.",
    specPill: "Air-Gapped Branch Hardware",
    imageSrc: "/images/use-cases/banking_hologram_kiosk.png",
    imageAlt: "Banking Branch 3D Hologram Kiosk Assistant",
    icon: Landmark,
    href: "/industries/banking",
  },
  {
    id: "corporate",
    label: "Corporate & Security",
    title: "Air-gapped enterprise & facility host",
    description:
      "Run reception, visitor safety briefings, and manual search completely offline on dedicated GPU stations.",
    specPill: "100% On-Device · Zero Cloud",
    imageSrc: "/images/use-cases/executive_lady_hologram.png",
    imageAlt: "Corporate Executive Lobby AI Digital Human Hologram",
    icon: Shield,
    href: "/industries/corporate",
  },
  {
    id: "tourism",
    label: "Museums, Tourism & Expos",
    title: "Life-sized holographic docent & guide",
    description:
      "Engage international crowds across exhibitions and cultural venues with multilingual storytelling.",
    specPill: "55\"–86\" Volumetric Hologram",
    imageSrc: "/images/use-cases/museum_hologram_avatar.png",
    imageAlt: "Museum and Exhibition 3D Holographic Digital Human Presenter",
    icon: Sparkles,
    href: "/industries/tourism",
  },
  {
    id: "education",
    label: "Education & Campuses",
    title: "Interactive campus & lab mentor",
    description:
      "Deliver admissions support, campus maps, and course advisory across university hubs continuously.",
    specPill: "24/7 Campus Knowledge Hub",
    imageSrc: "/images/avatars/education_assistant.png",
    imageAlt: "Education Campus Interactive Digital Human Assistant",
    icon: GraduationCap,
    href: "/industries/education",
  },
];

export default function Industries() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const shouldReduceMotion = useReducedMotion();

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  return (
    <section
      id="domains"
      className="relative overflow-hidden py-16 sm:py-24 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)]" />
              <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
                Industry Deployments
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
              Built for physical environments where presence builds trust.
            </h2>
          </div>

          <Link
            href={lPath("/industries")}
            className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-5 text-xs sm:text-sm font-semibold text-[var(--lp-ink)] shadow-xs hover:bg-[var(--lp-card)] transition-all self-start md:self-auto"
          >
            <span>All 6 Industries</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* VISUAL 6-CARD INDUSTRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.id}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between overflow-hidden rounded-[24px] bg-[var(--lp-card)] p-4 sm:p-5 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)] transition-shadow hover:shadow-[var(--lp-shadow-lift)]"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0B1224] border border-white/10">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1 backdrop-blur-md">
                      <Icon className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                      <span className="text-[11px] font-semibold text-white">
                        {card.label}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-[19px] font-semibold tracking-tight text-[var(--lp-ink)] leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-[var(--lp-ink-2)] line-clamp-2">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[var(--lp-line)] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-[var(--lp-muted)] truncate">
                    {card.specPill}
                  </span>
                  <Link
                    href={lPath(card.href)}
                    className="group/link inline-flex items-center gap-1 text-xs font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors shrink-0"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
