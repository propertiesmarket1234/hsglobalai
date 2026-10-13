"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Box,
  Layers,
  Tv,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
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

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const products = [
    {
      id: "01",
      title: fp.items.dihuava.title,
      category: fp.items.dihuava.category,
      description: fp.items.dihuava.description,
      icon: Sparkles,
      iconColor: "text-[var(--lp-accent)]",
      imageSrc: "/products/digital-humans/digital-human-dashboard.jpg",
      imageAlt: "DIHUAVA AI Digital Human Platform",
      tags: fp.items.dihuava.tags,
      href: lPath("/products/ai-digital-human"),
    },
    {
      id: "02",
      title: fp.items.hologramBox.title,
      category: fp.items.hologramBox.category,
      description: fp.items.hologramBox.description,
      icon: Box,
      iconColor: "text-[var(--lp-ink)]",
      imageSrc: "/products/digital-humans/digital-human-new.png",
      images: [
        "/products/digital-humans/digital-human-new.png",
        "/products/hologram-box/hologram-box-saree.jpg",
      ],
      imageAlt: "3D AI Hologram Box Display Unit",
      tags: fp.items.hologramBox.tags,
      href: lPath("/products/holographic-display"),
    },
    {
      id: "03",
      title: fp.items.spatialDisplay.title,
      category: fp.items.spatialDisplay.category,
      description: fp.items.spatialDisplay.description,
      icon: Layers,
      iconColor: "text-[var(--lp-ink)]",
      imageSrc: "/products/spatial-display/spatial-display.png",
      imageAlt: "Glasses-Free 3D Spatial Display Volumetric Screen",
      tags: fp.items.spatialDisplay.tags,
      href: lPath("/products/spatial-display"),
    },
    {
      id: "04",
      title: fp.items.virtualTryOn.title,
      category: fp.items.virtualTryOn.category,
      description: fp.items.virtualTryOn.description,
      icon: Tv,
      iconColor: "text-[var(--lp-accent)]",
      imageSrc: "/products/virtual-try-on/virtual-try-on.png",
      imageAlt: "Virtual Try-On Smart Mirror Interactive Kiosk",
      tags: fp.items.virtualTryOn.tags,
      href: lPath("/blog/what-is-virtual-try-on-technology"),
    },
  ];

  const [hologramIndex, setHologramIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHologramIndex((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hardware-deployments"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
                Physical Hardware & Form Factors
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
              Deploy digital humans into physical spaces.
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
              From freestanding 3D hologram cabinets to interactive touch kiosks and spatial executive displays—engineered for retail floors, hospital lobbies, and exhibitions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
            <Link
              href={lPath("/products")}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-5 text-[13px] sm:text-[14px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all duration-150 hover:bg-[var(--lp-tile-2)] active:scale-[0.98] cursor-pointer"
            >
              <span>{fp.viewAllProducts || "All Hardware"}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href={lPath("/contact/download-center")}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-5 text-[13px] sm:text-[14px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all duration-150 hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
            >
              <span>{fp.exploreDownloads || "Spec Sheets"}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* PRODUCTS CARDS GRID (SWIPECRAFT CLEAN PEBBLE TILES WITH PREMIUM ICONS) */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {products.map((product) => {
            const activeImg = product.images ? product.images[hologramIndex] : product.imageSrc;
            const Icon = product.icon;
            return (
              <motion.article
                key={product.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[28px] bg-[var(--lp-card)] p-4 sm:p-7 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)] transition-all duration-300 hover:shadow-[var(--lp-shadow-lift)]"
              >
                <div>
                  {/* Category Pill with Meta UI kit icon container */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs">
                        <Icon className={`h-4 w-4 ${product.iconColor}`} strokeWidth={1.75} />
                      </div>
                      <span className="rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-3 py-1 text-[12px] font-semibold text-[var(--lp-ink)] shadow-xs">
                        {product.category}
                      </span>
                    </div>
                    <span className="font-mono text-[12px] text-[var(--lp-muted)]">
                      {product.id}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.025em] text-[var(--lp-ink)]">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-[1.6] text-[var(--lp-ink-2)]">
                    {product.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)]/70 px-2.5 py-0.5 text-[11px] font-medium text-[var(--lp-ink-2)] shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hardware Visual Preview */}
                <div className="mt-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0B1224] shadow-md">
                    <Image
                      src={activeImg}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-[var(--lp-line)]/60">
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--lp-muted)]">
                      <ShieldCheck className="h-3.5 w-3.5 text-[var(--lp-muted)] shrink-0" />
                      <span>Ready for physical on-premise installation</span>
                    </span>
                    <Link
                      href={product.href}
                      className="group/link inline-flex h-8 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-white transition-all duration-150 shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}