"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";
import GlobalLanguagesSection from "@/components/GlobalLanguagesSection";
import DihuavaPlatform from "@/components/DihuavaPlatform";
import ChatbotVsAvatar from "@/components/ChatbotVsAvatar";
import CTA from "@/components/CTA";
import Link from "next/link";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function ProductsClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
  const pPage = (dict as any).productsPage || {};

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* PRODUCTS HERO SECTION WITH BACKSIDE DIGITAL HUMAN VIDEO */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        {/* Horizontal Background Video (Backside of Text) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-40 filter brightness-90 contrast-110"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay Gradients for High-Contrast Readable Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category Tag Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                {pPage.heroBadge || "HS Global AI Suite — Products"}
              </span>
            </div>

            {/* Grid Layout with Balanced Alignment */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              {/* Heading Column */}
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1] drop-shadow-2xl">
                  {pPage.heroTitle || "AI products built for "}{" "}
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    {pPage.heroTitleHighlight || "real-world experiences."}
                  </span>
                </h1>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-base leading-8 text-gray-200 sm:text-lg drop-shadow">
                  {pPage.heroDescription || "Explore HS Global AI products: DIHUAVA AI Digital Human platform, 3D Hologram Box displays, and naked-eye spatial AI displays for 100% offline enterprise deployment."}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cyan-200/90 font-medium">
                  {currentLocale === "zh"
                    ? "DIHUAVA 提供 AI 数字人软件层，为 HS Global AI 的全息与空间显示体验提供动力。"
                    : "DIHUAVA provides the AI Digital Human software layer that can power HS Global AI's holographic and spatial display experiences."}
                </p>

                {/* Capability Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                    {currentLocale === "zh" ? "🌍 29+ 种全球语言" : "🌍 29+ Global Languages"}
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    {currentLocale === "zh" ? "数字人形象定制与声音克隆" : "Avatar Customization & Voice Cloning"}
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    {currentLocale === "zh" ? "100% 离线 AI 引擎" : "100% Offline AI Engine"}
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    {currentLocale === "zh" ? "3D 全息技术" : "3D Holographics"}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Ecosystem Taxonomy */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-white/10 pt-8">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "软件平台" : "Software Platform"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "DIHUAVA AI 平台" : "DIHUAVA AI Platform"}
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "3D 硬件舱体" : "3D Hardware Enclosure"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "全息显示" : "Holographic Display"}
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "裸眼 3D 显示屏" : "Glasses-Free 3D Display"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "Spatial Display 3D空间显示" : "Spatial Display"}
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "前沿研发能力" : "Active R&D Capability"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "Virtual Try-On 虚拟试穿" : "Virtual Try-On Mirror"}
                </span>
              </div>
            </div>

            {/* Bottom Divider Accent */}
            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* DEDICATED 29+ GLOBAL LANGUAGES SECTION */}
      <GlobalLanguagesSection />

      {/* CORE PLATFORM CAPABILITIES ENGINE */}
      <DihuavaPlatform />

      {/* CHATBOT VS DIGITAL HUMAN AVATAR COMPARISON */}
      <ChatbotVsAvatar />

      {/* ENTERPRISE INDUSTRY SOLUTIONS LINKS */}
      <section className="relative overflow-hidden bg-black px-6 py-16 text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {currentLocale === "zh" ? "行业部署解决方案" : "Industry Deployment Solutions"}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {currentLocale === "zh" ? "专为垂直企业环境打造" : "Engineered for Vertical Enterprise Environments"}
          </h3>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto">
            {currentLocale === "zh"
              ? "了解 HS Global AI 数字人与全息显示屏如何部署于企业各行业的工作流程中。"
              : "Discover how HS Global AI digital humans and holographic displays are deployed across enterprise sector workflows."}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <Link href={lPath("/industries")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "所有行业解决方案 →" : "All Industry Solutions →"}
            </Link>
            <Link href={lPath("/industries/healthcare")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "医疗与就医体验 →" : "Healthcare & Patient Experience →"}
            </Link>
            <Link href={lPath("/industries/retail")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "零售与智能试穿终端 →" : "Retail & Smart Mirror Kiosks →"}
            </Link>
            <Link href={lPath("/industries/banking")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "金融与物理隔离智能礼宾 →" : "Banking & Air-Gapped Concierge →"}
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <CTA />

      <Footer />
    </main>
  );
}
