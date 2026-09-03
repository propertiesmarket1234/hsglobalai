import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";
import {
  ShieldCheck,
  FileText,
  Globe,
  Ticket,
  Landmark,
  ShoppingBag,
  Building2,
  Stethoscope,
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
} from "lucide-react";

const getIconComponent = (iconStr: string) => {
  switch (iconStr) {
    case "🔒": return ShieldCheck;
    case "📄": return FileText;
    case "🌐": return Globe;
    case "🎫": return Ticket;
    case "🏦": return Landmark;
    case "🛍️": return ShoppingBag;
    case "🏢": return Building2;
    case "🏥": return Stethoscope;
    case "🏛️": return Castle;
    case "🎓": return GraduationCap;
    case "📊": return BarChart2;
    case "⚡": return Zap;
    case "🎬": return Film;
    case "👥": return Users;
    case "📦": return Box;
    case "👤": return UserCheck;
    case "✨": return Sparkles;
    default: return HelpCircle;
  }
};

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    return {
      title: "Industry Solutions | HS Global AI",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: "website",
    },
  };
}

export default async function IndustrySubPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const allIndustries = Object.values(industriesData);
  const MainIcon = getIconComponent(industry.icon);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-28 border-b border-white/10">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-cyan-400 transition-colors">
              Industries
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">{industry.title}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase font-mono">
                  {industry.badge}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                {industry.title.split("&")[0]}{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  {industry.title.includes("&") ? `& ${industry.title.split("&")[1]}` : ""}
                </span>
              </h1>

              <p className="mt-4 text-xl font-medium text-cyan-300 font-mono">
                {industry.subtitle}
              </p>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                {industry.heroOverview}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  Request {industry.title} Demo →
                </Link>
                <Link
                  href="/contact/download-center"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  Download Solution Brief (PDF)
                </Link>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950/90 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
                    <MainIcon className="w-8 h-8 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">
                      INDUSTRY DEPLOYMENT {industry.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Target Environment
                    </span>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Physical Locations, Retail Stores, VIP Lounges & Public Enclosures
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-4 backdrop-blur-md">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Core AI Architecture
                    </span>
                    <p className="mt-1 text-sm font-semibold text-cyan-200">
                      100% Offline On-Device GPU Inference & Local PDF Document RAG
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>STATUS: READY TO DEPLOY</span>
                  <span className="text-emerald-400">29+ LANGUAGES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & BUSINESS IMPACT */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-16 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {industry.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md shadow-lg"
              >
                <p className="text-3xl font-extrabold text-cyan-400 drop-shadow md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-300 font-mono">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="relative overflow-hidden px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Tailored Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Engineered specifically for {industry.title}.
            </h2>
            <p className="mt-4 text-base text-gray-400 leading-7">
              Our digital human platform integrates with existing enterprise systems to automate operations while preserving data privacy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industry.capabilities.map((cap, idx) => {
              const CapIcon = getIconComponent(cap.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-neutral-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] mb-5">
                      <CapIcon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
                    </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* REAL-WORLD DEPLOYMENT USE CASES - HIGH VISIBILITY & STUNNING DESIGN */}
      <section className="relative overflow-hidden bg-black px-6 py-28 md:py-36 border-b border-cyan-500/30">
        {/* Ambient Radial Background Light Orbs */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1000px] rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-600/10 to-transparent blur-[180px]" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-600/15 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header Block with Glowing Badge and Gradient Typography */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/40 bg-cyan-950/90 px-5 py-2 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-extrabold tracking-[0.25em] text-cyan-300 uppercase font-mono">
                DEPLOYMENT USE CASES
              </span>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight">
              Real-world{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 bg-clip-text text-transparent">
                {industry.slug === "banking" ? "banking" : industry.title.toLowerCase()}
              </span>{" "}
              applications.
            </h2>

            <p className="mt-5 text-base text-gray-300 sm:text-lg leading-8">
              Explore how our 3D Hologram Box and Digital Human AI platform are deployed across 6 core operational workflows in {industry.title}.
            </p>
          </div>

          {/* 6 High-Impact Glowing Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industry.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/35 bg-neutral-950/90 p-8 backdrop-blur-2xl shadow-[0_0_35px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_55px_rgba(6,182,212,0.4)]"
              >
                {/* Top Accent Gradient Line */}
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category Pill & Number Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 font-mono tracking-wide">
                      {useCase.category}
                    </span>
                    <span className="rounded-xl border border-cyan-500/40 bg-cyan-950/90 px-3 py-1 font-mono text-xs font-bold text-cyan-400 shadow-inner">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-7 text-gray-300">
                    {useCase.description}
                  </p>
                </div>

                {/* Key Advantage Footer Box */}
                <div className="mt-8 pt-6 border-t border-white/15">
                  <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/70 p-3.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:border-cyan-400/70 transition-colors">
                    <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                      <span className="text-amber-400 text-sm">⚡</span> Key Advantage: {useCase.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="relative overflow-hidden px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Enterprise Specs
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Technical Architecture & Standards
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {industry.techSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="grid gap-4 p-6 sm:grid-cols-12 sm:items-center hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-400 sm:col-span-4 font-mono">
                    {spec.label}
                  </span>
                  <span className="text-sm font-bold text-cyan-300 sm:col-span-8">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES NAVIGATOR */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                Explore Other Industries
              </span>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                AI solutions for every sector
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:underline"
            >
              <span>View All Industries</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allIndustries.map((ind) => {
              const isCurrent = ind.slug === industry.slug;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className={`group relative flex items-center justify-between rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 ${
                    isCurrent
                      ? "border-cyan-400 bg-cyan-950/60 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                      : "border-white/15 bg-black/60 hover:border-cyan-500/40 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{ind.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono">0{ind.number}</p>
                    </div>
                  </div>
                  <span className="text-cyan-400 transition-transform group-hover:translate-x-1">
                    →
                  </span>
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
