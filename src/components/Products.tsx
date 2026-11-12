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

  const products = [
    {
      id: "01",
      title: fp.items.dihuava.title,
      category: fp.items.dihuava.category,
      specBadge: "On-Device AI Suite · 29+ Langs",
      description: fp.items.dihuava.description,
      icon: Sparkles,
      iconColor: "text-[var(--lp-accent)]",
      imageSrc: "/products/digital-humans/digital-human-dashboard.jpg",
      imageAlt: "DIHUAVA AI Digital Human Software Control Platform",
      objectClass: "object-cover object-center",
      tags: fp.items.dihuava.tags.slice(0, 3),
      href: lPath("/products/ai-digital-human"),
    },
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
      objectClass: "object-contain p-2",
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
      objectClass: "object-contain p-2",
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
      objectClass: "object-contain p-2",
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
      className="relative overflow-hidden py-16 sm:py-24 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]"
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

        {/* IMAGE-LED 2x2 PRODUCT SHOWCASE */}
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => {
            const activeImg = product.images ? product.images[hologramIndex] : product.imageSrc;
            const Icon = product.icon;
            return (
              <motion.article
                key={product.id}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[var(--lp-card)] p-4 sm:p-6 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)] transition-shadow hover:shadow-[var(--lp-shadow-lift)]"
              >
                <div>
                  {/* LARGE PRODUCT PHOTOGRAPHY FRAME FIRST */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0B1224] border border-white/10">
                    <Image
                      src={activeImg}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`${product.objectClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                    />
                    <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-3 py-1 backdrop-blur-md">
                      <Icon className={`h-3.5 w-3.5 ${product.iconColor}`} strokeWidth={2} />
                      <span className="text-[11px] font-semibold text-white">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/75 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
                      {product.specBadge}
                    </div>
                  </div>

                  {/* CONCISE TITLE + SINGLE SUMMARY SENTENCE */}
                  <div className="mt-5 flex items-baseline justify-between gap-2">
                    <h3 className="text-xl sm:text-[22px] font-semibold tracking-tight text-[var(--lp-ink)]">
                      {product.title}
                    </h3>
                    <span className="text-xs font-mono text-[var(--lp-muted)]">
                      {product.id}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-[var(--lp-ink-2)] line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* SPECS STRIP + ACTION */}
                <div className="mt-5 pt-4 border-t border-[var(--lp-line)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--lp-ink-2)]"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href={product.href}
                    className="group/link inline-flex h-8.5 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-white transition-all active:scale-[0.98] shrink-0"
                  >
                    <span>Explore Specs</span>
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
