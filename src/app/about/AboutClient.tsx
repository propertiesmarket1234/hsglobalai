"use client";

import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  User,
  Globe2,
  Tv,
  Sparkles,
  BarChart2,
  Zap,
  Lock,
  Rocket,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

const missionVisionValues = [
  {
    title: "Our Mission",
    tagline: "Empowering Human-AI Presence",
    description:
      "To deploy lifelike, empathetic AI digital humans that resolve customer needs instantly in physical environments, driving measurable revenue lift and cutting operational labor costs by up to 70%.",
    icon: Target,
    badge: "Corporate Mission",
  },
  {
    title: "Our Vision",
    tagline: "Autonomous Front-Line Workforce",
    description:
      "To become the world's most trusted provider of on-premise physical AI avatars and 3D volumetric displays, bridging digital intelligence with physical stores, clinics, and government facilities.",
    icon: Eye,
    badge: "Global Vision",
  },
  {
    title: "Our Core Values",
    tagline: "Ethical & Air-Gapped AI",
    description:
      "Engineered on strict data privacy, local on-device GPU processing, and transparent customer assistance. We believe enterprise AI must operate safely without exposing private citizen data to third-party clouds.",
    icon: ShieldCheck,
    badge: "Ethics & Air-Gap",
  },
];

const enterprisePillars = [
  {
    title: "Autonomous Digital Humans",
    description:
      "Deploy photorealistic avatars that engage visitors naturally with lip synchronization, eye-contact sensing, and compassionate dialogue.",
    icon: User,
  },
  {
    title: "29+ Global Languages",
    description:
      "Communicate fluently across 29+ international languages and regional dialects with instant auto-switching and natural accents.",
    icon: Globe2,
  },
  {
    title: "3D Volumetric Hardware",
    description:
      "Enclose digital human assistants in life-sized 65'' and 86'' holographic cabinets and glasses-free executive spatial displays.",
    icon: Tv,
  },
  {
    title: "Sub-Second Latency Dialogue",
    description:
      "Ultra-low latency speech pipeline delivers vocal responses within milliseconds, eliminating awkward conversational pauses.",
    icon: Zap,
  },
  {
    title: "Air-Gapped On-Device Processing",
    description:
      "100% private local GPU edge workstation hosting. Zero customer audio or facial biometrics ever leave your facility.",
    icon: Lock,
  },
  {
    title: "Domain-Grounded Intelligence",
    description:
      "Index store catalogs, hospital clinical triage protocols, and corporate SOP manuals with strict zero-hallucination guardrails.",
    icon: Sparkles,
  },
  {
    title: "Measurable Staffing Cost Savings",
    description:
      "Replace overlapping 24/7 shifts and recruitment overhead with an always-attentive assistant that lowers overhead by up to 70%.",
    icon: BarChart2,
  },
  {
    title: "Continuous Platform Evolution",
    description:
      "Continuous upgrades to facial mesh deformation, speech models, and spatial display controllers from our Singapore and India labs.",
    icon: Rocket,
  },
];

const approachItems = [
  {
    number: "01",
    title: "Air-Gapped by Design",
    description:
      "Engineered to run entirely on local GPU workstations without cloud dependencies, ensuring complete compliance with GDPR, HIPAA, and national security mandates.",
  },
  {
    number: "02",
    title: "Designed for Physical Footfall",
    description:
      "Built specifically for the acoustics, lighting conditions, and visitor dynamics of busy retail stores, hospital lobbies, and public exhibitions.",
  },
  {
    number: "03",
    title: "Zero Wait-Time Customer Care",
    description:
      "Eliminates front-desk bottlenecks and queue frustration with immediate vocal greeting and instant product or department wayfinding.",
  },
  {
    number: "04",
    title: "Enterprise Turnkey Deployment",
    description:
      "From hardware enclosure delivery to custom avatar branding and localized document indexing, our engineers deliver ready-to-run systems.",
  },
];

const industries = [
  { name: "Retail & Luxury Flagships", count: "Smart Store Concierge & Inventory Guides" },
  { name: "Hospitals & Medical Centers", count: "Patient Intake & Compassionate Wayfinding" },
  { name: "Banking & Wealth Management", count: "Holographic Branch Bankers & Account Advisory" },
  { name: "Defence & High-Security Sites", count: "100% Air-Gapped Visitor Briefing Assistants" },
  { name: "Events, Expos & Museums", count: "Multilingual Hologram Docents & Keynote Presenters" },
  { name: "Corporate Headquarters", count: "Front-Desk Digital Receptionists & Badge Issuance" },
];

export default function AboutClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const aPage = (dict as any).aboutPage || {};
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-28 pb-12 sm:px-6 md:pt-36 md:pb-16 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                {aPage.heroBadge || "About HS Global AI — The Digital Human Company"}
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
                  Building the future of{" "}
                  <span className="text-[var(--lp-muted)]">
                    physical AI engagement.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]">
                  {aPage.heroDescription || "HS Global AI develops enterprise-grade Digital Human AI, voice intelligence, and 3D holographic display hardware engineered to connect digital intelligence with physical spaces."}
                </p>

                {/* GLOBAL OFFICES (CLEAN BADGES, ZERO EMOJIS) */}
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-[var(--lp-ink)]">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 shadow-2xs">
                    <MapPin className="h-3 w-3 text-[var(--lp-accent)]" />
                    Global HQ: Singapore (Collyer Quay)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 shadow-2xs">
                    <Building2 className="h-3 w-3 text-[var(--lp-accent)]" />
                    India Center: Cyber Towers (Hyderabad)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 shadow-2xs">
                    <Globe2 className="h-3 w-3 text-[var(--lp-accent)]" />
                    China Office: Shenzhen (Bao&apos;an)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[44rem] text-center mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Our Core Foundation
            </span>
            <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
              Mission, Vision &amp; Ethical Principles
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
              How we build sustainable, trustworthy, and high-impact enterprise AI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {missionVisionValues.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group flex flex-col justify-between rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-[var(--lp-shadow-card)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-accent)] shadow-xs"
                      >
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </motion.div>
                      <span className="rounded-full bg-[rgba(255,90,31,0.08)] px-3 py-1 text-[11px] font-semibold text-[var(--lp-accent-ink)]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[var(--lp-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
                      {item.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HS GLOBAL AI — 8 ENTERPRISE PILLARS */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[44rem] text-center mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Strategic Advantage
            </span>
            <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
              Why Enterprise Leaders Choose HS Global AI
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
              Eight reasons leading retail chains, hospitals, and high-security institutions partner with us.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {enterprisePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group flex flex-col justify-between rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 shadow-[var(--lp-shadow-card)]"
                >
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs"
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </motion.div>

                    <h3 className="mt-5 text-[17px] font-bold text-[var(--lp-ink)]">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--lp-ink-2)]">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)] border-t border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
                Our Architecture Approach
              </span>
              <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
                Intelligent by design. Practical by nature.
              </h2>
            </div>
            <p className="text-[16px] leading-[1.65] text-[var(--lp-ink-2)]">
              We engineer AI for the realities of physical spaces: crowd noise, fluctuating footfall, offline reliability, and absolute privacy compliance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {approachItems.map((item) => (
              <div
                key={item.number}
                className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-7 shadow-[var(--lp-shadow-card)]"
              >
                <span className="font-mono text-sm font-semibold text-[var(--lp-accent)]">
                  {item.number}
                </span>
                <h3 className="mt-3 text-xl font-bold text-[var(--lp-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET SECTORS WE SERVE */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-t border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              Target Deployments
            </span>
            <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
              Industries We Serve
            </h2>
          </div>

          <div className="divide-y divide-[var(--lp-line)] border-y border-[var(--lp-line)]">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="group flex flex-col justify-between py-6 sm:flex-row sm:items-center transition-colors hover:bg-[var(--lp-tile)]/50 px-2 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-semibold text-[var(--lp-muted)]">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                    {ind.name}
                  </h3>
                </div>
                <span className="mt-2 text-xs font-medium text-[var(--lp-muted)] sm:mt-0 flex items-center gap-2">
                  <span>{ind.count}</span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--lp-accent)]" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
