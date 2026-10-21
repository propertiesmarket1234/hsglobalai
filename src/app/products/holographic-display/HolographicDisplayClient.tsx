"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Cpu,
  Eye,
  Volume2,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  ShieldCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

const hologramHeroImages = [
  {
    src: "/products/digital-humans/digital-human-new.png",
    alt: "AI Hologram Box with DIHUAVA AI Digital Human",
    caption: "Life-size 1:1 scale digital avatar enclosure in executive silver suit",
  },
  {
    src: "/products/hologram-box/hologram-box-saree.jpg",
    alt: "3D AI Hologram Box display for enterprise environments",
    caption: "Life-size 1:1 scale digital avatar enclosure in traditional attire",
  },
];

const hologramFeatures = [
  {
    title: "Life-Size 4K 3D Volumetric Enclosure",
    description:
      "Available in 55-inch, 65-inch, 75-inch, and 86-inch vertical 4K Ultra-HD holographic glass showcases displaying 1:1 scale digital human avatars with hyper-realistic depth perception across retail showrooms, banking branches, corporate lobbies, and exhibition centers.",
    icon: Box,
    badge: "4K Ultra-HD | 55\" - 86\"",
  },
  {
    title: "Integrated AI Workstation",
    description:
      "Built-in high-performance industrial AI computing unit running the DIHUAVA 100% offline AI engine delivering low-latency real-time performance, zero cloud dependency, and enterprise-grade data privacy.",
    icon: Cpu,
    badge: "On-Device Edge GPU",
  },
  {
    title: "Multimodal Interaction Sensors",
    description:
      "Equipped with wide-angle HD camera tracking, directional microphone array, capacitive touch glass, and distance proximity sensors for natural human interaction.",
    icon: Eye,
    badge: "Camera & Sensor Array",
  },
  {
    title: "Directional Acoustic Sound Bar",
    description:
      "Focused spatial audio system designed for noisy exhibition halls, bank lobbies, and shopping malls, ensuring crystal-clear speech intelligibility.",
    icon: Volume2,
    badge: "Spatial Audio Array",
  },
];

const hardwareSpecs = [
  { label: "Available Sizes", value: "55-inch, 65-inch, 75-inch, 86-inch Vertical Showcases" },
  { label: "Display Resolution", value: "4K Ultra-HD (3840 x 2160) Optical Holographic Panel" },
  { label: "Optical Glass", value: "High-transmittance anti-reflective beam-splitter glass" },
  { label: "Touch System", value: "Multi-touch capacitive touch sensor glass" },
  { label: "Camera & Sensors", value: "HD Wide-Angle Camera + Proximity Sensor Array" },
  { label: "Audio Output", value: "Integrated high-fidelity directional acoustic sound system" },
  { label: "AI Computing", value: "Integrated NVIDIA RTX industrial GPU edge workstation" },
  { label: "Software Compatibility", value: "DIHUAVA AI Digital Human Platform (100% Offline Edge)" },
];

export default function HolographicDisplayClient() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const hPage = (dict as any).hologramPage || {};
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: (dict as any).common?.navHome || "Home",
        item: `https://www.hsglobalai.com${lPath("/")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `https://www.hsglobalai.com${lPath("/products")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Holographic Display",
        item: `https://www.hsglobalai.com${lPath("/products/holographic-display")}`,
      },
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hologramHeroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      {/* HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[var(--lp-muted)] mb-6">
            <Link href={lPath("/products")} className="hover:text-[var(--lp-ink)] transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-[var(--lp-ink)] font-semibold">3D Hologram Box</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                  Volumetric 3D Holographic Hardware
                </span>
              </div>

              <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
                Life-sized 3D Hologram Box for{" "}
                <span className="text-[var(--lp-muted)]">
                  physical customer presence.
                </span>
              </h1>

              <p className="mt-5 text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px] max-w-2xl">
                Bring intelligent AI digital humans into physical environments through life-sized 1:1 scale 3D holographic showcases. Powered by on-premise industrial GPU hardware, directional audio, and 29+ global language speech recognition.
              </p>

              {/* Size Selector Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)] mr-1">
                  Enclosure Sizes:
                </span>
                {["55-Inch", "65-Inch", "75-Inch", "86-Inch (Life-Size 1:1)"].map((sz) => (
                  <span
                    key={sz}
                    className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-semibold text-[var(--lp-ink)] shadow-2xs"
                  >
                    {sz}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={lPath("/contact")}
                  className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                >
                  <span>Request Hologram Box Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Download Spec Sheet (PDF)</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-3 shadow-[var(--lp-shadow-card)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0B1224]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={hologramHeroImages[currentImageIndex].src}
                        alt={hologramHeroImages[currentImageIndex].alt}
                        fill
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Top Left Slide Indicators */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-white/90 px-3 py-1.5 backdrop-blur-md shadow-xs">
                    {hologramHeroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          currentImageIndex === idx
                            ? "w-6 bg-[var(--lp-accent)]"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                    <span className="text-[10px] font-semibold text-[var(--lp-ink)] ml-1">
                      Enclosure View {currentImageIndex + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-[var(--lp-line)] bg-white/90 p-3 backdrop-blur-md shadow-xs">
                    <p className="text-xs font-medium text-[var(--lp-ink)]">
                      {hologramHeroImages[currentImageIndex].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE HARDWARE FEATURES */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Engineered for Public Spaces
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Precision 3D Holographic Display Engineering
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              Commercial-grade structural cabinetry with integrated edge compute, directional acoustics, and high-footfall thermal dissipation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hologramFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex flex-col justify-between rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 shadow-xs"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs mb-5">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full bg-[var(--lp-card)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--lp-muted)] mb-2 inline-block">
                      {feat.badge}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--lp-ink)]">
                      {feat.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-[var(--lp-ink-2)]">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HARDWARE SPECIFICATIONS */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Technical Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              Hologram Box Architecture &amp; Dimensions
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
            <div className="divide-y divide-[var(--lp-line)]">
              {hardwareSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-12 sm:items-center hover:bg-[var(--lp-tile)]/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-[var(--lp-muted)] sm:col-span-5">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-[var(--lp-ink)] sm:col-span-7">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
