"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

interface ProductItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  images?: string[];
  imageAlt: string;
  badge: string;
  linkHref: string;
  linkText?: string;
  reverseLayout?: boolean;
}

const products: ProductItem[] = [
  {
    id: "digital-humans",
    number: "01",
    title: "AI Digital Humans",
    subtitle: "Real-Time Multilingual Autonomous Avatars",
    description:
      "Intelligent, empathetic AI avatars designed to communicate naturally with customers across 29+ global languages, retail sales floors, and hospital lobbies with hyper-realistic lip synchronization and custom voice cloning.",
    tags: ["29+ Global Languages", "Voice Reference Cloning", "Sub-Second Vocal Reply", "Empathetic Presence"],
    imageSrc: "/products/digital-humans/digital-human-dashboard.jpg",
    imageAlt: "DIHUAVA AI Digital Human Platform",
    badge: "Autonomous Workforce",
    linkHref: "/products/ai-digital-human",
    linkText: "Explore DIHUAVA AI Digital Human Platform",
  },
  {
    id: "hologram-box",
    number: "02",
    title: "AI Hologram Box",
    subtitle: "3D Volumetric Hardware Enclosure",
    description:
      "Bring intelligent AI Digital Humans into physical environments through life-sized 3D holographic experiences supporting 29+ global languages, interactive voice recognition, and 100% on-device private processing.",
    tags: ["65'' and 86'' Enclosures", "3D Volumetric Depth", "Air-Gapped Offline AI", "High-Footfall Enclosure"],
    imageSrc: "/products/digital-humans/digital-human-new.png",
    images: [
      "/products/digital-humans/digital-human-new.png",
      "/products/hologram-box/hologram-box-saree.jpg",
    ],
    imageAlt: "3D AI Holographic Display Unit",
    badge: "Life-Sized 3D Hardware",
    linkHref: "/products/holographic-display",
    linkText: "Explore 3D Hologram Display Box",
    reverseLayout: true,
  },
  {
    id: "spatial-display",
    number: "03",
    title: "Spatial Display",
    subtitle: "Glasses-Free 3D Interactive Screen",
    description:
      "Transform digital consultations into immersive volumetric experiences without 3D glasses. Engineered for VIP banking desks, luxury brand showcases, and medical consultation stations.",
    tags: ["Glasses-Free 3D", "Executive Desk Unit", "Ultra-High Contrast", "Real-Time Interaction"],
    imageSrc: "/products/spatial-display/spatial-display.png",
    imageAlt: "Glasses-Free 3D Spatial Display",
    badge: "Glasses-Free Volumetric",
    linkHref: "/products/spatial-display",
    linkText: "Explore Glasses-Free 3D Spatial Display",
  },
  {
    id: "virtual-try-on",
    number: "04",
    title: "Virtual Try-On",
    subtitle: "Interactive AI Smart Mirror",
    description:
      "Enable customers to visualize products digitally before making a purchase, creating interactive shopping experiences with product visualization and 29+ global language voice guidance (apparel outfit previewing on active R&D roadmap).",
    tags: ["29+ Global Languages", "AI Smart Mirror", "Product Visualization", "Retail Experience"],
    imageSrc: "/products/virtual-try-on/virtual-try-on.png",
    imageAlt: "Virtual Try-On Smart Mirror Interactive Kiosk (Active R&D)",
    badge: "Interactive Retail (Active R&D)",
    linkHref: "/blog/what-is-virtual-try-on-technology",
    linkText: "Learn About Virtual Try-On Technology",
    reverseLayout: true,
  },
];

export default function ProductShowcase() {
  const [hologramIndex, setHologramIndex] = useState(0);
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const fp = dict.home.featuredProducts.items;
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  useEffect(() => {
    const timer = setInterval(() => {
      setHologramIndex((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--lp-bg)] px-4 py-20 sm:px-6 md:py-28 text-[var(--lp-ink)]">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="divide-y divide-[var(--lp-line)]">
          {products.map((product) => {
            const activeImg = product.images ? product.images[hologramIndex] : product.imageSrc;
            return (
              <div key={product.id} className="py-20 first:pt-0 last:pb-0">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                    product.reverseLayout ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* HARDWARE PREVIEW CONTAINER */}
                  <div className={`group relative ${product.reverseLayout ? "lg:col-start-2" : ""}`}>
                    <div className="relative overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-3 shadow-[var(--lp-shadow-card)]">
                      <div className={`relative w-full overflow-hidden rounded-2xl bg-[#0B1224] ${
                        product.id === "digital-humans" ? "aspect-[16/11]" : "aspect-[4/5]"
                      }`}>
                        {/* Live Status Badge */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-white/90 px-3.5 py-1.5 backdrop-blur-md shadow-xs">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
                          </span>
                          <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-ink)] uppercase">
                            {product.badge}
                          </span>
                        </div>

                        <Image
                          src={activeImg}
                          alt={product.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className={
                            product.id === "spatial-display" || product.id === "digital-humans" || product.id === "hologram-box"
                              ? "object-contain bg-[#0B1224] p-3 transition-transform duration-700 group-hover:scale-105"
                              : "object-cover transition-transform duration-700 group-hover:scale-105"
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className={product.reverseLayout ? "lg:col-start-1" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold tracking-wider text-[var(--lp-accent)]">
                        {product.number}
                      </span>
                      <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--lp-muted)]">
                        {product.subtitle}
                      </span>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--lp-ink)] sm:text-4xl">
                      {product.title}
                    </h2>

                    <p className="mt-4 text-base leading-7 text-[var(--lp-ink-2)] sm:text-lg">
                      {product.description}
                    </p>

                    {/* Feature tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3.5 py-1.5 text-xs font-medium text-[var(--lp-ink)] shadow-2xs"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href={lPath(product.linkHref)}
                        className="group/link inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                      >
                        <span>{product.linkText}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}