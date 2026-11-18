"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Box,
  Layers,
  Tv,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Lock,
  FileCheck2,
} from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function Products() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const fp = dict.home.featuredProducts;
  const shouldReduceMotion = useReducedMotion();

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  // Tier 1 Flagship
  const flagship = {
    id: "01",
    title: fp.items.dihuava.title,
    category: fp.items.dihuava.category,
    specBadge: "On-Device AI Suite · 29+ Langs",
    description: fp.items.dihuava.description,
    imageSrc: "/products/digital-humans/digital-human-dashboard.jpg",
    imageAlt: "DIHUAVA AI Digital Human Software Control Platform",
    tags: [
      "100% Offline by Default",
      "Sub-200ms Voice Synthesis",
      "On-Device Document RAG",
      "29+ Global & 7 Indian Regional Languages",
    ],
    href: lPath("/products/ai-digital-human"),
  };

  // Tier 2 Supporting Hardware & Optics
  const supportingProducts = [
    {
      id: "02",
      title: fp.items.hologramBox.title,
      category: fp.items.hologramBox.category,
      specBadge: "55\" / 65\" / 75\" / 86\" Volumetric",
      description: fp.items.hologramBox.description,
      icon: Box,
      iconColor: "text-cyan-400",
      imageSrc: "/products/digital-humans/digital-human-new.png",
      images: [
        "/products/digital-humans/digital-human-new.png",
        "/products/hologram-box/hologram-box-saree.jpg",
      ],
      imageAlt: "3D AI Hologram Box Life-Size Display Unit",
      tags: fp.items.hologramBox.tags.slice(0, 3),
      href: lPath("/products/holographic-display"),
    },
    {
      id: "03",
      title: fp.items.spatialDisplay.title,
      category: fp.items.spatialDisplay.category,
      specBadge: "6 cm Slim · 32\"–86\" 4K Touch",
      description: fp.items.spatialDisplay.description,
      icon: Layers,
      iconColor: "text-cyan-400",
      imageSrc: "/products/spatial-display/spatial-display.png",
      imageAlt: "Glasses-Free 3D Spatial Display 4K Touch Panel",
      tags: fp.items.spatialDisplay.tags.slice(0, 3),
      href: lPath("/products/spatial-display"),
    },
    {
      id: "04",
      title: fp.items.virtualTryOn.title,
      category: fp.items.virtualTryOn.category,
      specBadge: "Smart Mirrors & Kiosk Optics",
      description: fp.items.virtualTryOn.description,
      icon: Tv,
      iconColor: "text-[var(--lp-accent)]",
      imageSrc: "/products/virtual-try-on/virtual-try-on.png",
      imageAlt: "Virtual Try-On Interactive Retail Mirror Kiosk",
      tags: fp.items.virtualTryOn.tags.slice(0, 3),
      href: lPath("/blog/what-is-virtual-try-on-technology"),
    },
  ];

  const [hologramIndex, setHologramIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setHologramIndex((prev) => (prev + 1) % 2);
    }, 4500);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section
      id="hardware-deployments"
      className="relative overflow-hidden py-16 sm:py-24 bg-[var(--lp-tile)] border-b border-[var(--lp-line)] scroll-mt-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)]" />
              <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
                Product Ecosystem
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
              Software intelligence meets volumetric display hardware.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={lPath("/products")}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#2A2A2F]"
            >
              <span>{fp.viewAllProducts || "All Hardware"}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={lPath("/contact/download-center")}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-5 text-xs sm:text-sm font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-card)]"
            >
              <span>{fp.exploreDownloads || "Spec Sheets"}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ASYMMETRIC TWO-TIER PRODUCT LAYOUT */}
        <div className="space-y-6">
          {/* TIER 1: FLAGSHIP PLATFORM (WIDE DOMINANT CARD) */}
          <motion.article
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-[26px] sm:rounded-[32px] bg-[var(--lp-card)] p-5 sm:p-8 lg:p-10 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)] transition-all hover:shadow-[var(--lp-shadow-lift)] hover:border-[var(--lp-accent)]/30"
          >
            {/* Ambient Background Accent */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[var(--lp-accent)]/5 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* LEFT COLUMN: NARRATIVE & SPECIFICATIONS */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,90,31,0.08)] border border-[rgba(255,90,31,0.2)] px-3 py-1 text-xs font-semibold text-[var(--lp-accent)]">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Flagship AI Software Platform</span>
                    </span>
                    <span className="rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-2.5 py-1 text-[11px] font-mono text-[var(--lp-muted)]">
                      {flagship.id}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[var(--lp-ink)] leading-[1.15]">
                    {flagship.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base leading-[1.65] text-[var(--lp-ink-2)]">
                    {flagship.description}
                  </p>

                  {/* CAPABILITY BADGES */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {flagship.tags.map((tag) => (
                      <div
                        key={tag}
                        className="inline-flex items-center gap-2 rounded-xl bg-[var(--lp-tile)] border border-[var(--lp-line)] px-3 py-2 text-xs font-medium text-[var(--lp-ink)]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ACTION CTA STRIP */}
                <div className="mt-8 pt-5 border-t border-[var(--lp-line)] flex flex-wrap items-center gap-3">
                  <Link
                    href={flagship.href}
                    className="group/link inline-flex h-11 items-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#2A2A2F] active:scale-[0.98]"
                  >
                    <span>Explore DIHUAVA Platform</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <Link
                    href={lPath("/contact/download-center")}
                    className="inline-flex h-11 items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-5 text-xs sm:text-sm font-semibold text-[var(--lp-ink)] hover:bg-white hover:border-[var(--lp-line-strong)] transition-all"
                  >
                    <FileCheck2 className="h-4 w-4 text-[var(--lp-muted)]" />
                    <span>Download Software Specs</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: AUTHENTIC SOFTWARE DASHBOARD & AVATAR CANVAS */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0B1224] border border-white/10 shadow-lg">
                  <Image
                    src={flagship.imageSrc}
                    alt={flagship.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority
                  />

                  {/* FLOATING CAPABILITY PILLS */}
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1 backdrop-blur-md">
                    <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="text-[11px] font-semibold text-white">
                      100% On-Premise GPU
                    </span>
                  </div>

                  <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1 backdrop-blur-md">
                    <Globe className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                    <span className="text-[11px] font-semibold text-white">
                      29+ Global Languages
                    </span>
                  </div>

                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-white/15 bg-black/80 px-3.5 py-2 backdrop-blur-md text-white text-xs">
                    <span className="font-medium text-neutral-300">
                      RAG Search · Speech Lip-Sync · Kiosk Display
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px]">
                      ● Air-Gapped Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* TIER 2: THREE SUPPORTING DISPLAY HARDWARE PRODUCTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingProducts.map((product) => {
              const activeImg = product.images ? product.images[hologramIndex] : product.imageSrc;
              const Icon = product.icon;
              return (
                <motion.article
                  key={product.id}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[var(--lp-card)] p-4 sm:p-5 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)] transition-all hover:shadow-[var(--lp-shadow-lift)] hover:border-[var(--lp-line-strong)]"
                >
                  <div>
                    {/* PRODUCT HARDWARE PHOTOGRAPHY */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0B1224] border border-white/10">
                      <Image
                        src={activeImg}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-x-2.5 top-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
                        <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 backdrop-blur-md max-w-[60%] truncate">
                          <Icon className={`h-3 w-3 shrink-0 ${product.iconColor}`} strokeWidth={2} />
                          <span className="text-[10.5px] font-semibold text-white truncate">
                            {product.category}
                          </span>
                        </div>
                        <div className="rounded-full border border-white/15 bg-black/75 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-md shrink-0">
                          {product.specBadge}
                        </div>
                      </div>
                    </div>

                    {/* TITLE + SUMMARY */}
                    <div className="mt-4 flex items-baseline justify-between gap-2">
                      <h4 className="text-lg sm:text-[19px] font-semibold tracking-tight text-[var(--lp-ink)] leading-snug">
                        {product.title}
                      </h4>
                      <span className="text-xs font-mono text-[var(--lp-muted)]">
                        {product.id}
                      </span>
                    </div>

                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[var(--lp-ink-2)] line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* SPECS STRIP + ACTION */}
                  <div className="mt-5 pt-3.5 border-t border-[var(--lp-line)] flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {product.tags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--lp-ink-2)]"
                        >
                          <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600 shrink-0" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <Link
                      href={product.href}
                      className="group/link inline-flex h-8 items-center gap-1 px-3 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-white transition-all active:scale-[0.98] shrink-0"
                    >
                      <span>Specs</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
