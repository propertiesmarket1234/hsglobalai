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
} from "lucide-react";

const hologramHeroImages = [
  {
    src: "/products/digital-humans/digital-human-new.png",
    alt: "Life-size 3D hologram display box with executive AI digital human",
    caption: "Life-size 1:1 scale digital avatar enclosure in executive silver suit",
  },
  {
    src: "/products/hologram-box/hologram-box-saree.jpg",
    alt: "Life-size 3D hologram display box with cultural AI digital avatar",
    caption: "Life-size 1:1 scale digital avatar enclosure in traditional attire",
  },
];

const hologramFeatures = [
  {
    title: "Life-Size 4K 3D Volumetric Enclosure",
    description:
      "Available in 55-inch, 65-inch, 75-inch, and 86-inch vertical 4K Ultra-HD holographic glass showcases displaying 1:1 scale digital human avatars with hyper-realistic depth perception and lifelike presence.",
    icon: Box,
    badge: "4K Ultra-HD | 55\" - 86\"",
  },
  {
    title: "Integrated AI Workstation",
    description:
      "Built-in high-performance industrial AI computing unit running the DIHUAVA 100% offline AI engine delivering Low Latency real-time performance, zero cloud dependency, and enterprise-grade data privacy.",
    icon: Cpu,
    badge: "On-Device Processing",
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
    badge: "Spatial Audio",
  },
];


const hardwareSpecs = [
  { label: "Display Sizes", value: "55-inch, 65-inch, 75-inch, 86-inch" },
  { label: "Display Resolution & Technology", value: "Ultra-HD 4K (3840 x 2160) high-transmission 3D holographic optical glass" },
  { label: "Brightness & Contrast", value: "700 nits / 4000:1 dynamic contrast ratio" },
  { label: "AI Computing Unit", value: "Built-in industrial-grade AI workstation (Edge GPU/NPU) running 100% offline" },
  { label: "Touch & Camera System", value: "10-point capacitive touch glass + wide-angle tracking camera" },
  { label: "Audio Hardware", value: "Integrated directional soundbar + beamforming microphone array" },
  { label: "Operating Environment", value: "Designed for continuous 24/7 commercial operation" },
];

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function HolographicDisplayClient() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const hPage = (dict as any).holographicPage || {};
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const localizedContent: Record<string, {
    breadcrumbProducts: string;
    breadcrumbCurrent: string;
    availableSpecs: string;
    size55: string;
    size65: string;
    size75: string;
    size86: string;
    ctaPrimaryBtn: string;
    ctaSecondaryBtn: string;
    sizesLabel: string;
    statusBadge: string;
    slideText: string;
    slideCaptions: string[];
    featuresBadge: string;
    featuresHeading: string;
    specsBadge: string;
    specsHeading: string;
    tableHeaderSpec: string;
    tableHeaderDetails: string;
    ctaTitle: string;
    ctaHighlight: string;
    ctaDesc: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
  }> = {
    zh: {
      breadcrumbProducts: "产品中心",
      breadcrumbCurrent: "3D全息显示柜",
      availableSpecs: "可选规格：",
      size55: "55 英寸",
      size65: "65 英寸",
      size75: "75 英寸",
      size86: "86 英寸",
      ctaPrimaryBtn: "预约全息柜演示 →",
      ctaSecondaryBtn: "下载规格参数表 (PDF)",
      sizesLabel: "尺寸：",
      statusBadge: "● 3D全息显示柜",
      slideText: "幻灯片",
      slideCaptions: [
        "商务西装高阶全息真人1:1数字人胶囊展柜",
        "传统服饰全息文化展示真人1:1数字人展柜",
      ],
      featuresBadge: "硬件亮点",
      featuresHeading: "专为物理实体空间打造的即插即用全息硬件",
      specsBadge: "硬件技术参数",
      specsHeading: "3D全息显示柜详细技术指标",
      tableHeaderSpec: "规格项目",
      tableHeaderDetails: "详细参数",
      ctaTitle: "让 AI 数字人走入",
      ctaHighlight: "您的物理实体空间",
      ctaDesc: "探索专为零售、银行、企业、医疗、博物馆和展厅打造的全息沉浸式交互显示硬件。",
      ctaPrimaryText: "预约演示",
      ctaSecondaryText: "下载技术白皮书 (PDF)",
    },
    ru: {
      breadcrumbProducts: "Продукты",
      breadcrumbCurrent: "3D Голографический Куб",
      availableSpecs: "Доступные размеры:",
      size55: "55 дюймов",
      size65: "65 дюймов",
      size75: "75 дюймов",
      size86: "86 дюймов",
      ctaPrimaryBtn: "Запросить демо Hologram Box →",
      ctaSecondaryBtn: "Скачать спецификацию (PDF)",
      sizesLabel: "РАЗМЕРЫ:",
      statusBadge: "● 3D ГОЛОГРАФИЧЕСКИЙ КУБ",
      slideText: "СЛАЙД",
      slideCaptions: [
        "Витрина с цифровым аватаром 1:1 в деловом костюме",
        "Витрина с цифровым аватаром 1:1 в традиционном костюме",
      ],
      featuresBadge: "Основные характеристики",
      featuresHeading: "Готовое голографическое оборудование для физических пространств.",
      specsBadge: "Технические характеристики",
      specsHeading: "Технические параметры 3D Голографического Куба",
      tableHeaderSpec: "Характеристика",
      tableHeaderDetails: "Детали",
      ctaTitle: "Внедрите ИИ Цифровых Людей",
      ctaHighlight: "В ваше физическое пространство",
      ctaDesc: "Откройте для себя голографическое оборудование для ритейла, банков, офисов, здравоохранения и музеев.",
      ctaPrimaryText: "Запросить демо",
      ctaSecondaryText: "Скачать спецификацию (PDF)",
    },
    es: {
      breadcrumbProducts: "Productos",
      breadcrumbCurrent: "Caja Holográfica 3D",
      availableSpecs: "Especificaciones disponibles:",
      size55: "55 pulgadas",
      size65: "65 pulgadas",
      size75: "75 pulgadas",
      size86: "86 pulgadas",
      ctaPrimaryBtn: "Solicitar demo de Caja Holográfica →",
      ctaSecondaryBtn: "Descargar ficha técnica (PDF)",
      sizesLabel: "TAMAÑOS:",
      statusBadge: "● CAJA HOLOGRÁFICA 3D",
      slideText: "DIAPOSITIVA",
      slideCaptions: [
        "Vitrina de avatar digital a escala 1:1 en traje ejecutivo",
        "Vitrina de avatar digital a escala 1:1 en atuendo tradicional",
      ],
      featuresBadge: "Aspectos destacados",
      featuresHeading: "Hardware holográfico listo para usar en espacios físicos.",
      specsBadge: "Especificaciones de hardware",
      specsHeading: "Parámetros técnicos de Caja Holográfica 3D",
      tableHeaderSpec: "Especificación",
      tableHeaderDetails: "Detalles",
      ctaTitle: "Lleve Humanos Digitales con IA",
      ctaHighlight: "A su espacio físico",
      ctaDesc: "Explore hardware de pantalla holográfica diseñado para comercio, banca, empresas, salud y museos.",
      ctaPrimaryText: "Solicitar una demo",
      ctaSecondaryText: "Descargar ficha técnica (PDF)",
    },
    fr: {
      breadcrumbProducts: "Produits",
      breadcrumbCurrent: "Boîte Hologramme 3D",
      availableSpecs: "Spécifications disponibles :",
      size55: "55 pouces",
      size65: "65 pouces",
      size75: "75 pouces",
      size86: "86 pouces",
      ctaPrimaryBtn: "Réserver une démo Boîte Hologramme →",
      ctaSecondaryBtn: "Télécharger la fiche technique (PDF)",
      sizesLabel: "TAILLES :",
      statusBadge: "● BOÎTE HOLOGRAMME 3D",
      slideText: "DIAPOSITIVE",
      slideCaptions: [
        "Enceinte d'avatar numérique à l'échelle 1:1 en costume exécutif",
        "Enceinte d'avatar numérique à l'échelle 1:1 en tenue traditionnelle",
      ],
      featuresBadge: "Points forts du matériel",
      featuresHeading: "Matériel holographique clé en main conçu pour les espaces physiques.",
      specsBadge: "Spécifications du matériel",
      specsHeading: "Paramètres techniques de la Boîte Hologramme 3D",
      tableHeaderSpec: "Spécification",
      tableHeaderDetails: "Détails",
      ctaTitle: "Intégrez des Humains Virtuels IA",
      ctaHighlight: "Dans votre espace physique",
      ctaDesc: "Découvrez du matériel d'affichage holographique conçu pour le commerce, la banque, les entreprises, la santé et les musées.",
      ctaPrimaryText: "Réserver une démo",
      ctaSecondaryText: "Télécharger la fiche technique (PDF)",
    },
    en: {
      breadcrumbProducts: "Products",
      breadcrumbCurrent: "AI Hologram Box",
      availableSpecs: "Available Specs:",
      size55: '55" Inch',
      size65: '65" Inch',
      size75: '75" Inch',
      size86: '86" Inch',
      ctaPrimaryBtn: "Book Hologram Box Demo →",
      ctaSecondaryBtn: "Download Spec Sheets (PDF)",
      sizesLabel: "SIZES:",
      statusBadge: "● AI HOLOGRAM BOX",
      slideText: "SLIDE",
      slideCaptions: [
        "Life-size 1:1 scale digital avatar enclosure in executive silver suit",
        "Life-size 1:1 scale digital avatar enclosure in traditional attire",
      ],
      featuresBadge: "Hardware Highlights",
      featuresHeading: "Turnkey holographic hardware built for physical spaces.",
      specsBadge: "Hardware Specifications",
      specsHeading: "AI Hologram Box Technical Parameters",
      tableHeaderSpec: "Specification",
      tableHeaderDetails: "Details",
      ctaTitle: "Bring AI Digital Humans",
      ctaHighlight: "Into Your Physical Space",
      ctaDesc: "Explore holographic display hardware designed for immersive customer engagement across retail, banking, corporate, healthcare, museums, and exhibitions.",
      ctaPrimaryText: "Book a Demo",
      ctaSecondaryText: "Download Datasheets (PDF)",
    },
  };

  const t = localizedContent[currentLocale] || localizedContent.en;

  const localizedSpecs = hPage.hardwareSpecs || hardwareSpecs;
  const localizedFeatures = hologramFeatures.map((feat, idx) => {
    const dictFeat = hPage.hologramFeatures && hPage.hologramFeatures[idx];
    return dictFeat
      ? { ...feat, title: dictFeat.title || feat.title, description: dictFeat.description || feat.description, badge: dictFeat.badge || feat.badge }
      : feat;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hologramHeroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href={lPath("/products")} className="hover:text-cyan-400 transition-colors">
              {t.breadcrumbProducts}
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">{t.breadcrumbCurrent}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  {hPage.heroBadge || "3D Optical Glass Hardware"}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                {hPage.heroTitle || "Holographic Display "}{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  {hPage.heroTitleHighlight || "(Hologram Box)"}
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                {hPage.heroDescription || "Bring intelligent AI Digital Humans into physical environments through 3D holographic experiences supporting 29+ global languages, interactive speech recognition, and custom voice cloning."}
              </p>

              {/* Size Badge Selector Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                  {t.availableSpecs}
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  4K Ultra-HD
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {t.size55}
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {t.size65}
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {t.size75}
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {t.size86}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={lPath("/contact")}
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  {hPage.ctaPrimary ? `${hPage.ctaPrimary} →` : t.ctaPrimaryBtn}
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  {hPage.ctaSecondary || t.ctaSecondaryBtn}
                </Link>
              </div>
            </div>

            {/* Right Visual Image with Size Badges & Auto-Sliding Dual Images */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950/80 p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
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

                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Left Auto Slide Indicators */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1.5 backdrop-blur-md">
                    {hologramHeroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          idx === currentImageIndex ? "w-6 bg-cyan-400" : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Top Right Size Badge Floating Pill on Image */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-black/85 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <span className="text-[11px] font-semibold text-cyan-300 font-mono">{t.sizesLabel}</span>
                    <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-xs font-extrabold text-white border border-cyan-400/40">55"</span>
                    <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-xs font-extrabold text-white border border-cyan-400/40">65"</span>
                    <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-xs font-extrabold text-white border border-cyan-400/40">75"</span>
                    <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-xs font-extrabold text-white border border-cyan-400/40">86"</span>
                  </div>

                  {/* System Overlay Status */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/15 bg-black/85 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-bold">{t.statusBadge}</span>
                      <span className="text-emerald-400 font-bold">{t.slideText} {currentImageIndex + 1}/{hologramHeroImages.length}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-300">
                      {t.slideCaptions[currentImageIndex]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOLOGRAM BOX FEATURES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {hPage.featuresTitle || t.featuresBadge}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.featuresHeading}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {localizedFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <feature.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {hPage.specsTitle || t.specsBadge}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.specsHeading}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-4 bg-cyan-950/60 font-mono text-xs uppercase text-cyan-300 border-b border-white/10">
              <span>{t.tableHeaderSpec}</span>
              <span className="sm:col-span-2">{t.tableHeaderDetails}</span>
            </div>
            <div className="divide-y divide-white/10">
              {localizedSpecs.map((spec: any, i: number) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-2 px-6 py-4.5 sm:grid-cols-3 sm:gap-4 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-cyan-300 font-mono">
                    {spec.label}
                  </span>
                  <span className="text-sm text-gray-300 sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={t.ctaTitle}
        highlightTitle={t.ctaHighlight}
        description={t.ctaDesc}
        primaryButtonText={t.ctaPrimaryText}
        secondaryButtonText={t.ctaSecondaryText}
        secondaryButtonHref={lPath("/contact/download-center")}
      />
      <Footer />
    </main>
  );
}
