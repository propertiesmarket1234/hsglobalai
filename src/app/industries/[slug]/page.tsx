import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";
import { getLocalizedIndustryData, getLocalizedUIStrings } from "@/data/localizedIndustriesData";
import IndustryInfoDepth from "@/components/IndustryInfoDepth";
import IndustryFAQ from "@/components/IndustryFAQ";
import { getLocalizedAlternates } from "@/i18n/config";
import {
  ShieldCheck,
  FileText,
  Globe2,
  Ticket,
  Landmark,
  ShoppingBag,
  Building2,
  HeartPulse,
  Castle,
  GraduationCap,
  BarChart2,
  Zap,
  Film,
  Users,
  Box,
  UserCheck,
  Sparkles,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const getIconComponent = (iconStr: string) => {
  switch (iconStr.toLowerCase()) {
    case "lock":
    case "shield": return ShieldCheck;
    case "file":
    case "doc":
    case "note":
    case "list": return FileText;
    case "globe":
    case "earth": return Globe2;
    case "ticket": return Ticket;
    case "bank":
    case "landmark": return Landmark;
    case "bag":
    case "retail":
    case "shop": return ShoppingBag;
    case "building":
    case "corporate":
    case "office": return Building2;
    case "hospital":
    case "health":
    case "stethoscope":
    case "pulse": return HeartPulse;
    case "gov":
    case "heritage":
    case "castle": return Castle;
    case "education":
    case "school":
    case "book": return GraduationCap;
    case "chart":
    case "growth":
    case "bar": return BarChart2;
    case "zap":
    case "flash": return Zap;
    case "film":
    case "video": return Film;
    case "users":
    case "people":
    case "audience":
    case "speech": return Users;
    case "box":
    case "cube": return Box;
    case "avatar":
    case "user":
    case "vip":
    case "crown": return UserCheck;
    case "sparkles":
    case "magic":
    case "gem":
    case "diamond": return Sparkles;
    default: return HelpCircle;
  }
};

interface IndustryPageProps {
  params: Promise<{
    slug: string;
    lang?: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug, lang = "en" } = await params;
  const industry = getLocalizedIndustryData(slug, lang);

  if (!industry) {
    return {
      title: "Industry Not Found | HS Global AI",
    };
  }

  const cleanTitle = industry.metaTitle.replace(/ \| HS Global AI$/i, "");

  return {
    title: cleanTitle,
    description: industry.metaDescription,
    alternates: getLocalizedAlternates(`/industries/${slug}`, lang),
    openGraph: {
      title: cleanTitle,
      description: industry.metaDescription,
      type: "website",
    },
  };
}

export default async function IndustrySubPage({ params }: IndustryPageProps) {
  const { slug, lang = "en" } = await params;
  const industry = getLocalizedIndustryData(slug, lang);
  const ui = getLocalizedUIStrings(lang);

  if (!industry) {
    notFound();
  }

  const allIndustries = Object.keys(industriesData).map((s) => getLocalizedIndustryData(s, lang));
  const MainIcon = getIconComponent(industry.icon);

  const homeHref = lang === "en" ? "/" : `/${lang}`;
  const industriesHref = lang === "en" ? "/industries" : `/${lang}/industries`;
  const contactHref = lang === "en" ? "/contact" : `/${lang}/contact`;
  const downloadHref = lang === "en" ? "/contact/download-center" : `/${lang}/contact/download-center`;
  const holoHref = lang === "en" ? "/products/holographic-display" : `/${lang}/products/holographic-display`;
  const avatarHref = lang === "en" ? "/products/ai-digital-human" : `/${lang}/products/ai-digital-human`;
  const spatialHref = lang === "en" ? "/products/spatial-display" : `/${lang}/products/spatial-display`;

  const baseUrl = "https://www.hsglobalai.com";
  const currentPath = lang === "en" ? `/industries/${industry.slug}` : `/${lang}/industries/${industry.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: ui.home,
        item: `${baseUrl}${homeHref}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: ui.industries,
        item: `${baseUrl}${industriesHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.title,
        item: `${baseUrl}${currentPath}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}${currentPath}#service`,
    "name": `${industry.title} AI Solutions`,
    "serviceType": `${industry.title} AI Digital Human & Hologram Automation`,
    "description": industry.description,
    "provider": {
      "@type": "Organization",
      "@id": "https://www.hsglobalai.com/#organization",
      "name": "HS Global AI",
      "url": "https://www.hsglobalai.com",
    },
    "areaServed": "Worldwide",
    "url": `${baseUrl}${currentPath}`,
  };

  const faqSchema = industry.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: industry.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Header />

      {/* HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[var(--lp-muted)] mb-6 font-mono">
            <Link href={homeHref} className="hover:text-[var(--lp-ink)] transition-colors">
              {ui.home}
            </Link>
            <span>/</span>
            <Link href={industriesHref} className="hover:text-[var(--lp-ink)] transition-colors">
              {ui.industries}
            </Link>
            <span>/</span>
            <span className="text-[var(--lp-ink)] font-semibold">{industry.title}</span>
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
                  {industry.badge}
                </span>
              </div>

              <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
                {industry.h1Title || industry.title}
              </h1>

              <p className="mt-3 text-lg font-medium text-[var(--lp-muted)]">
                {industry.subtitle}
              </p>

              <p className="mt-5 text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px] max-w-2xl">
                {industry.heroOverview}
              </p>

              {/* Supported Platforms Link Strip */}
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[var(--lp-muted)]">
                <span className="font-semibold text-[var(--lp-ink)]">Supported Hardware &amp; AI Stack:</span>
                <Link href={avatarHref} className="inline-flex h-7 items-center justify-center rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-3 text-[11px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile-2)] transition-colors active:scale-[0.98] cursor-pointer">
                  DIHUAVA Digital Human
                </Link>
                <Link href={holoHref} className="inline-flex h-7 items-center justify-center rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-3 text-[11px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile-2)] transition-colors active:scale-[0.98] cursor-pointer">
                  3D Hologram Cabinet
                </Link>
                <Link href={spatialHref} className="inline-flex h-7 items-center justify-center rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-3 text-[11px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile-2)] transition-colors active:scale-[0.98] cursor-pointer">
                  Spatial 3D Screen
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={contactHref}
                  className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                >
                  <span>Request {industry.title} Pilot</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={downloadHref}
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
                >
                  <span>{ui.downloadPdf}</span>
                </Link>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-8 shadow-[var(--lp-shadow-card)]">
                <div className="flex items-center gap-4 border-b border-[var(--lp-line)] pb-6">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs">
                    <MainIcon className="w-7 h-7" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="font-mono text-xs text-[var(--lp-muted)] tracking-wider uppercase">
                      DEPLOYMENT ARCHITECTURE {industry.number}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--lp-ink)]">{industry.title}</h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-4 shadow-2xs">
                    <span className="text-xs font-semibold text-[var(--lp-muted)] uppercase tracking-wider block">
                      {ui.targetEnvironment}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-[var(--lp-ink)]">
                      {ui.targetEnvValue}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-4 shadow-2xs">
                    <span className="text-xs font-semibold text-[var(--lp-muted)] uppercase tracking-wider block">
                      {ui.coreAiArch}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-[var(--lp-accent-ink)]">
                      {ui.coreAiArchValue}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--lp-line)] flex items-center justify-between text-xs font-mono text-[var(--lp-muted)]">
                  <span>{ui.statusReady}</span>
                  <span className="font-semibold text-[#16a34a]">{ui.languages29}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & BUSINESS IMPACT */}
      <section className="px-4 py-16 sm:px-6 md:py-20 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {industry.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 text-center shadow-xs"
              >
                <p className="text-3xl font-extrabold text-[var(--lp-accent)] font-mono md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              {ui.tailoredCapabilitiesBadge}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              {ui.tailoredCapabilitiesTitle.replace("{title}", industry.title)}
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              {ui.tailoredCapabilitiesDesc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industry.capabilities.map((cap, idx) => {
              const CapIcon = getIconComponent(cap.icon);
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 shadow-xs"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-accent)] shadow-xs mb-5">
                      <CapIcon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-lg font-bold text-[var(--lp-ink)]">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL-WORLD DEPLOYMENT USE CASES */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              {ui.useCasesBadge}
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              {ui.useCasesTitle.replace("{title}", industry.title)}
            </h2>

            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              {ui.useCasesDesc.replace("{title}", industry.title)}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industry.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-7 shadow-[var(--lp-shadow-card)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="rounded-full bg-[var(--lp-tile)] px-3 py-1 text-xs font-semibold text-[var(--lp-muted)]">
                      {useCase.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[var(--lp-muted)]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[var(--lp-ink)] mb-2.5">
                    {useCase.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[var(--lp-ink-2)]">
                    {useCase.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--lp-line)]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lp-accent-ink)]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                    <span>{ui.keyAdvantage}: {useCase.highlight}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICAL INFORMATION DEPTH */}
      {industry.infoDepth && (
        <IndustryInfoDepth title={industry.title} infoDepth={industry.infoDepth} />
      )}

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[960px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              {ui.enterpriseSpecsBadge}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl">
              {ui.enterpriseSpecsTitle}
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
            <div className="divide-y divide-[var(--lp-line)]">
              {industry.techSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="grid gap-2 p-5 sm:grid-cols-12 sm:items-center hover:bg-[var(--lp-tile)]/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-[var(--lp-muted)] sm:col-span-5 font-mono">
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

      {/* INDUSTRY FAQ */}
      {industry.faqs && (
        <IndustryFAQ title={industry.title} faqs={industry.faqs} />
      )}

      {/* OTHER INDUSTRIES NAVIGATOR */}
      <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
                {ui.exploreOtherBadge}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[var(--lp-ink)] md:text-3xl">
                {ui.exploreOtherTitle}
              </h2>
            </div>
            <Link
              href={industriesHref}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)]"
            >
              <span>{ui.viewAllIndustries}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allIndustries.map((ind) => {
              const isCurrent = ind.slug === industry.slug;
              const indHref = lang === "en" ? `/industries/${ind.slug}` : `/${lang}/industries/${ind.slug}`;
              const IndIcon = getIconComponent(ind.icon);
              return (
                <Link
                  key={ind.slug}
                  href={indHref}
                  className={`group flex items-center justify-between rounded-[20px] border p-4 transition-all ${
                    isCurrent
                      ? "border-[var(--lp-ink)] bg-[var(--lp-card)] shadow-xs"
                      : "border-[var(--lp-line)] bg-[var(--lp-card)] hover:bg-[var(--lp-tile)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--lp-tile)] text-[var(--lp-accent)] border border-[var(--lp-line)]">
                      <IndIcon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-[var(--lp-muted)] font-mono">0{ind.number}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--lp-muted)] group-hover:translate-x-1 group-hover:text-[var(--lp-ink)] transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
