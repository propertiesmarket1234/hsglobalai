"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function Products() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const fp = dict.home.featuredProducts;

  const lPath = (path: string) => {
    if (currentLocale === "en") return path;
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  const products = [
    {
      id: "01",
      title: fp.items.dihuava.title,
      category: fp.items.dihuava.category,
      description: fp.items.dihuava.description,
      imageSrc: "/products/digital-humans/digital-human-dashboard.jpg",
      imageAlt: "DIHUAVA AI Digital Human Platform",
      tags: fp.items.dihuava.tags,
      accentGlow: "rgba(6, 182, 212, 0.25)",
      href: lPath("/products/ai-digital-human"),
    },
    {
      id: "02",
      title: fp.items.hologramBox.title,
      category: fp.items.hologramBox.category,
      description: fp.items.hologramBox.description,
      imageSrc: "/products/digital-humans/digital-human-new.png",
      images: [
        "/products/digital-humans/digital-human-new.png",
        "/products/hologram-box/hologram-box-saree.jpg",
      ],
      imageAlt: "3D AI Hologram Box Display Unit",
      tags: fp.items.hologramBox.tags,
      accentGlow: "rgba(6, 182, 212, 0.25)",
      href: lPath("/products/holographic-display"),
    },
    {
      id: "03",
      title: fp.items.spatialDisplay.title,
      category: fp.items.spatialDisplay.category,
      description: fp.items.spatialDisplay.description,
      imageSrc: "/products/spatial-display/spatial-display.png",
      imageAlt: "Glasses-Free 3D Spatial Display Volumetric Screen",
      tags: fp.items.spatialDisplay.tags,
      accentGlow: "rgba(6, 182, 212, 0.25)",
      href: lPath("/products/spatial-display"),
    },
    {
      id: "04",
      title: fp.items.virtualTryOn.title,
      category: fp.items.virtualTryOn.category,
      description: fp.items.virtualTryOn.description,
      imageSrc: "/products/virtual-try-on/virtual-try-on.png",
      imageAlt: "Virtual Try-On Smart Mirror Interactive Kiosk (Active R&D)",
      tags: fp.items.virtualTryOn.tags,
      accentGlow: "rgba(6, 182, 212, 0.25)",
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
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              {fp.badge}
            </span>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              {fp.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                {fp.titleHighlight}
              </span>
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={lPath("/contact/download-center")}
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/40 px-6 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105"
              >
                <span>{fp.exploreDownloads}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={lPath("/products")}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white/10 hover:scale-105"
              >
                <span>{fp.viewAllProducts}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* PRODUCTS CARDS GRID WITH ALTERNATING LEFT/RIGHT SLIDE REVEALS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {products.map((product, index) => {
            const isLeft = index % 2 === 0;
            const activeImg = product.images ? product.images[hologramIndex] : product.imageSrc;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: isLeft ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]"
              >
                {/* Product Visual Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <motion.div
                    className="relative h-full w-full"
                    animate={{
                      scale: [1, 1.04, 1],
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={activeImg}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={
                        product.id === "03" || product.id === "01" || product.id === "02"
                          ? "object-contain bg-neutral-950 p-1.5 transition-transform duration-700 group-hover:scale-105"
                          : "object-cover transition-transform duration-700 group-hover:scale-105"
                      }
                    />
                  </motion.div>

                  {/* Ambient dark gradient vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 font-mono text-xs font-semibold tracking-wider text-white/90 rounded-full border border-white/20 bg-black/70 px-3.5 py-1 backdrop-blur-md">
                    {product.id} — {product.category}
                  </div>
                </div>

                {/* Text Info */}
                <div className="mt-8">
                  <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-gray-300">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors group-hover:text-cyan-400"
                  >
                    <span>{fp.explorePrefix} {product.title}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}