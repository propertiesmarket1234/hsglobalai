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
                    : currentLocale === "ru"
                    ? "DIHUAVA обеспечивает программный слой AI цифровых людей для работы голографических и объемных 3D-дисплеев HS Global AI."
                    : currentLocale === "es"
                    ? "DIHUAVA proporciona la capa de software de Humanos Digitales con IA que impulsa las experiencias holográficas y de pantallas espaciales de HS Global AI."
                    : currentLocale === "fr"
                    ? "DIHUAVA fournit la couche logicielle d'Humains Virtuels IA qui alimente les expériences holographiques et d'écrans spatiaux d'HS Global AI."
                    : "DIHUAVA provides the AI Digital Human software layer that can power HS Global AI's holographic and spatial display experiences."}
                </p>

                {/* Capability Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                    {currentLocale === "zh" ? "🌍 29+ 种全球语言" : currentLocale === "ru" ? "🌍 29+ Мировых языков" : currentLocale === "es" ? "🌍 29+ Idiomas globales" : currentLocale === "fr" ? "🌍 29+ Langues mondiales" : "🌍 29+ Global Languages"}
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    {currentLocale === "zh" ? "数字人形象定制与声音克隆" : currentLocale === "ru" ? "Кастомизация аватаров и клонирование голоса" : currentLocale === "es" ? "Personalización de avatares y clonación de voz" : currentLocale === "fr" ? "Personnalisation d'avatar & Clonage vocal" : "Avatar Customization & Voice Cloning"}
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    {currentLocale === "zh" ? "100% 离线 AI 引擎" : currentLocale === "ru" ? "100% Автономный AI-движок" : currentLocale === "es" ? "Motor de IA 100% sin conexión" : currentLocale === "fr" ? "Moteur IA 100% hors ligne" : "100% Offline AI Engine"}
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
                    {currentLocale === "zh" ? "3D 全息技术" : currentLocale === "ru" ? "3D-Голография" : currentLocale === "es" ? "Holografía 3D" : currentLocale === "fr" ? "Holographie 3D" : "3D Holographics"}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Ecosystem Taxonomy */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-white/10 pt-8">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "软件平台" : currentLocale === "ru" ? "Программная платформа" : currentLocale === "es" ? "Plataforma de software" : currentLocale === "fr" ? "Plateforme logicielle" : "Software Platform"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "DIHUAVA AI 平台" : currentLocale === "ru" ? "Платформа DIHUAVA AI" : currentLocale === "es" ? "Plataforma DIHUAVA AI" : currentLocale === "fr" ? "Plateforme DIHUAVA AI" : "DIHUAVA AI Platform"}
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "3D 硬件舱体" : currentLocale === "ru" ? "3D-Аппаратный куб" : currentLocale === "es" ? "Cabina de hardware 3D" : currentLocale === "fr" ? "Caisson matériel 3D" : "3D Hardware Enclosure"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "全息显示" : currentLocale === "ru" ? "Голографический дисплей" : currentLocale === "es" ? "Pantalla Holográfica" : currentLocale === "fr" ? "Écran Holographique" : "Holographic Display"}
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "裸眼 3D 显示屏" : currentLocale === "ru" ? "3D-Дисплей без очков" : currentLocale === "es" ? "Pantalla 3D sin gafas" : currentLocale === "fr" ? "Écran 3D sans lunettes" : "Glasses-Free 3D Display"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "Spatial Display 3D空间显示" : currentLocale === "ru" ? "Spatial Display (Объемный дисплей)" : currentLocale === "es" ? "Spatial Display (Pantalla Espacial)" : currentLocale === "fr" ? "Spatial Display (Écran Spatial)" : "Spatial Display"}
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                  {currentLocale === "zh" ? "前沿研发能力" : currentLocale === "ru" ? "Активные R&D разработки" : currentLocale === "es" ? "Capacidad de I+D activa" : currentLocale === "fr" ? "Capacité R&D active" : "Active R&D Capability"}
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentLocale === "zh" ? "Virtual Try-On 虚拟试穿" : currentLocale === "ru" ? "Виртуальная примерка (Virtual Try-On)" : currentLocale === "es" ? "Espejo Virtual Try-On (Prueba Virtual)" : currentLocale === "fr" ? "Miroir Virtual Try-On (Essayage Virtuel)" : "Virtual Try-On Mirror"}
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
            {currentLocale === "zh" ? "行业部署解决方案" : currentLocale === "ru" ? "Отраслевые решения для внедрения" : currentLocale === "es" ? "Soluciones de despliegue industrial" : currentLocale === "fr" ? "Solutions de déploiement sectoriel" : "Industry Deployment Solutions"}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {currentLocale === "zh" ? "专为垂直企业环境打造" : currentLocale === "ru" ? "Разработано для специфических корпоративных задач" : currentLocale === "es" ? "Diseñado para entornos empresariales verticales" : currentLocale === "fr" ? "Conçu pour les environnements d'entreprise verticaux" : "Engineered for Vertical Enterprise Environments"}
          </h3>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto">
            {currentLocale === "zh"
              ? "了解 HS Global AI 数字人与全息显示屏如何部署于企业各行业的工作流程中。"
              : currentLocale === "ru"
              ? "Узнайте, как цифровые люди и голографические дисплеи HS Global AI внедряются в рабочие процессы предприятий различных отраслей."
              : currentLocale === "es"
              ? "Descubra cómo se despliegan los humanos digitales y vitrinas holográficas de HS Global AI en los flujos de trabajo de diversos sectores empresariales."
              : currentLocale === "fr"
              ? "Découvrez comment les humains virtuelles et écrans holographiques d'HS Global AI sont déployés dans les flux de travail des entreprises."
              : "Discover how HS Global AI digital humans and holographic displays are deployed across enterprise sector workflows."}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <Link href={lPath("/industries")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "所有行业解决方案 →" : currentLocale === "ru" ? "Все отраслевые решения →" : currentLocale === "es" ? "Todas las soluciones industriales →" : currentLocale === "fr" ? "Toutes les solutions sectorielles →" : "All Industry Solutions →"}
            </Link>
            <Link href={lPath("/industries/healthcare")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "医疗与就医体验 →" : currentLocale === "ru" ? "Здравоохранение и забота о пациентах →" : currentLocale === "es" ? "Salud y experiencia del paciente →" : currentLocale === "fr" ? "Santé & Expérience patient →" : "Healthcare & Patient Experience →"}
            </Link>
            <Link href={lPath("/industries/retail")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "零售与智能试穿终端 →" : currentLocale === "ru" ? "Ритейл и умные примеряющие киоски →" : currentLocale === "es" ? "Comercio y quioscos con espejo inteligente →" : currentLocale === "fr" ? "Commerce & Bornes miroirs intelligents →" : "Retail & Smart Mirror Kiosks →"}
            </Link>
            <Link href={lPath("/industries/banking")} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-gray-200 hover:border-cyan-400 hover:text-white transition-colors">
              {currentLocale === "zh" ? "金融与物理隔离智能礼宾 →" : currentLocale === "ru" ? "Банки и автономный консьерж-сервис →" : currentLocale === "es" ? "Banca y conserjería aislada sin conexión →" : currentLocale === "fr" ? "Banque & Conciergerie autonome hors ligne →" : "Banking & Air-Gapped Concierge →"}
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
