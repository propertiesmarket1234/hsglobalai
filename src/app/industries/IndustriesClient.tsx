"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import IndustriesShowcase from "@/components/IndustriesShowcase";
import IndustryImpact from "@/components/IndustryImpact";
import ImmersiveUseCases from "@/components/ImmersiveUseCases";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function IndustriesClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const indPage = (dict as any).industriesPage || {};
  const indSec = dict.home.industriesSection;

  const localizedContent: Record<string, {
    heroDescription: string;
    pills: string[];
  }> = {
    zh: {
      heroDescription: "我们的数字人 AI 平台助力企业与机构自动化客户服务、提升服务品质、降低运营成本，并凭借逼真的 AI 阿凡达与 3D 全息显示屏打造高吸引力的沉浸式体验。",
      pills: ["金融与银行", "零售与商场", "医疗健康"],
    },
    ru: {
      heroDescription: "Наша платформа ИИ Цифровых Людей помогает организациям автоматизировать обслуживание клиентов, повышать качество сервиса, снижать операционные расходы и создавать незабываемый опыт.",
      pills: ["Банки и Финансы", "Ритейл и Моллы", "Здравоохранение"],
    },
    es: {
      heroDescription: "Nuestra plataforma de IA de Humanos Digitales ayuda a las organizaciones a automatizar las interacciones con los clientes, mejorar la calidad del servicio, reducir los costos operativos y ofrecer experiencias atractivas.",
      pills: ["Banca y Finanzas", "Comercio y Centros Comerciales", "Salud"],
    },
    fr: {
      heroDescription: "Notre plateforme d'Humains Virtuels IA aide les organisations à automatiser les interactions clients, améliorer la qualité de service, réduire les coûts opérationnels et offrir des expériences captivantes.",
      pills: ["Banque & Finance", "Vente au Détail & Centres Commerciaux", "Santé"],
    },
    en: {
      heroDescription: "Our Digital Human AI platform helps organizations automate customer interactions, improve service quality, reduce operational costs, and deliver engaging experiences through lifelike AI avatars and 3D holograms.",
      pills: ["Banking & Finance", "Retail & Malls", "Healthcare"],
    },
  };

  const t = localizedContent[currentLocale] || localizedContent.en;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* INDUSTRIES HERO SECTION WITH DUAL SLIDE-IN ANIMATION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[750px] rounded-full bg-gradient-to-b from-cyan-500/15 via-blue-600/5 to-transparent blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase font-mono">
              {indPage.heroBadge || "Enterprise Industry Solutions"}
            </span>
          </motion.div>

          {/* Grid Layout with Dual Left and Right Slide Movements */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12 overflow-hidden">
            {/* LEFT COLUMN — SLIDES FROM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                {indPage.heroTitle || indSec.headingLine1 || "AI Digital Humans across "}{" "}
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  {indPage.heroTitleHighlight || indSec.headingLine2 || "every major sector."}
                </span>
              </h1>
            </motion.div>

            {/* RIGHT COLUMN — SLIDES FROM RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pb-2"
            >
              <p className="text-base leading-8 text-gray-300 sm:text-lg">
                {indPage.heroDescription || t.heroDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* 8 MEASURABLE BUSINESS OUTCOMES / PROVEN IMPACT */}
      <IndustryImpact />

      {/* 6 INDUSTRY SHOWCASE SECTORS WITH LEFT/RIGHT SLIDE ANIMATIONS */}
      <IndustriesShowcase />

      {/* IMMERSIVE PORTRAITS THAT SPEAK & REAL-WORLD USE CASES */}
      <ImmersiveUseCases />

      <CTA />
      <Footer />
    </main>
  );
}
