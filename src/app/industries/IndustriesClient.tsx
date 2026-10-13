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
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function IndustriesClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const indPage = (dict as any).industriesPage || {};
  const indSec = dict.home.industriesSection;
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const localizedContent: Record<string, {
    heroDescription: string;
    pills: string[];
  }> = {
    zh: {
      heroDescription: "我们的数字人 AI 平台助力企业自动化客户服务、提升接待品质、降低运营成本，并凭借逼真的 AI 阿凡达与 3D 全息显示屏打造高吸引力的沉浸式体验。",
      pills: ["金融与银行", "零售与奢品", "医疗健康", "国防安全", "文旅博览"],
    },
    ru: {
      heroDescription: "Наша платформа ИИ Цифровых Людей помогает организациям автоматизировать обслуживание клиентов, повышать качество сервиса, снижать операционные расходы и создавать незабываемый опыт.",
      pills: ["Банки и Финансы", "Ритейл и Моллы", "Здравоохранение", "Безопасность", "Выставки"],
    },
    es: {
      heroDescription: "Nuestra plataforma de IA de Humanos Digitales ayuda a las organizaciones a automatizar las interacciones con los clientes, mejorar la calidad del servicio, reducir los costos operativos y ofrecer experiencias atractivas.",
      pills: ["Banca y Finanzas", "Comercio Minorista", "Salud", "Defensa y Seguridad", "Eventos"],
    },
    fr: {
      heroDescription: "Notre plateforme d'Humains Virtuels IA aide les organisations à automatiser les interactions clients, améliorer la qualité de service, réduire les coûts opérationnels et offrir des expériences captivantes.",
      pills: ["Banque & Finance", "Commerce de Luxe", "Santé", "Défense & Sécurité", "Événements"],
    },
    en: {
      heroDescription: "Our Digital Human AI platform helps enterprise organizations automate front-line customer interactions, reduce staffing overhead by up to 70%, and deliver zero-wait empathetic experiences across physical environments.",
      pills: ["Banking & Finance", "Retail & Luxury", "Hospitals & Healthcare", "Defence & High-Security", "Events & Culture"],
    },
  };

  const t = localizedContent[currentLocale] || localizedContent.en;

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* INDUSTRIES HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-28 pb-12 sm:px-6 md:pt-36 md:pb-16 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
              {indPage.heroBadge || "Enterprise Domain Solutions"}
            </span>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
                Autonomous digital humans for{" "}
                <span className="text-[var(--lp-muted)]">
                  every enterprise domain.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 lg:pb-2"
            >
              <p className="text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]">
                {indPage.heroDescription || t.heroDescription}
              </p>

              {/* Domain Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {t.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-medium text-[var(--lp-ink)] shadow-2xs"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={lPath("/contact")}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                >
                  <span>Request Domain Architecture</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8 MEASURABLE BUSINESS OUTCOMES / PROVEN IMPACT */}
      <IndustryImpact />

      {/* 6 INDUSTRY SHOWCASE SECTORS WITH META UI KIT ICONS */}
      <IndustriesShowcase />

      {/* IMMERSIVE PORTRAITS THAT SPEAK & REAL-WORLD USE CASES */}
      <ImmersiveUseCases />

      <CTA />
      <Footer />
    </main>
  );
}
