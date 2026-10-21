"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";
import { MapPin, Calendar, Camera, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

// Featured Recent Events
const recentEvents = [
  {
    id: "led-china-2026",
    title: "LED China 2026",
    dates: "March 1-3, 2026",
    location: "Shenzhen Convention & Exhibition Center, China",
    tagline: "Showcasing AI-powered hologram and digital human technology.",
    description:
      "HS Global AI demonstrated advanced hologram displays and lifelike digital human avatars at LED China 2026, attracting global visitors and industry professionals.",
    image: "/images/events/led-china-2026.jpg",
    gallery: [
      {
        src: "/images/events/led-china-2026.jpg",
        alt: "LED China 2026 Main Entrance Venue",
        caption: "Main Venue Entrance",
      },
      {
        src: "/images/events/led-china-demo-1.jpg",
        alt: "HS Global AI 3D Hologram Box Jewelry Demo at LED China 2026",
        caption: "3D Hologram Pendant Demo",
      },
      {
        src: "/images/events/led-china-demo-2.jpg",
        alt: "HS Global AI Live Visitor Engagement at LED China 2026",
        caption: "Live Exhibition Handshake Demo",
      },
    ],
    highlights: [
      "Live 3D Hologram Box AI Avatar interaction",
      "Neural speech synthesis in multi-languages",
      "Real-time customer engagement analytics",
      "100% air-gapped local GPU processing showcase",
    ],
    badge: "Completed Exhibition",
  },
  {
    id: "isle-china-2026",
    title: "ISLE China 2026",
    dates: "March 5-7, 2026",
    location: "Shenzhen International Convention & Exhibition Center, China",
    tagline: "Live demonstrations of hologram AI assistants.",
    description:
      "At ISLE China 2026, HS Global AI presented immersive hologram solutions designed for retail showrooms, exhibitions, and interactive customer engagement.",
    image: "/images/events/isle-china-2026.jpg",
    gallery: [
      {
        src: "/images/events/isle-china-2026.jpg",
        alt: "ISLE China 2026 Main Exhibition Venue",
        caption: "Main Exhibition Venue",
      },
    ],
    highlights: [
      "Interactive Hologram Box AI Kiosks",
      "Autonomous digital human host & guide",
      "Custom branded 3D avatar personalities",
      "Enterprise knowledge base integration",
    ],
    badge: "Completed Exhibition",
  },
];

// Event Highlights Gallery / Key Moments
const eventHighlights = [
  {
    id: 1,
    title: "Interactive 3D Hologram Box Demos",
    category: "Live Demos",
    categoryIdx: 2,
    event: "LED China 2026",
    image: "/images/events/led-china-demo-1.jpg",
    description:
      "Attendees engaged with real-time AI avatars inside 3D hologram boxes, testing natural speech recognition and 3D product visualizations.",
    stat: "3,200+ Interactions",
  },
  {
    id: 2,
    title: "Global Partner Engagement & Handshake Demos",
    category: "Live Demos",
    categoryIdx: 2,
    event: "LED China 2026",
    image: "/images/events/led-china-demo-2.jpg",
    description:
      "Demonstrating live 3D hologram box interaction and enterprise AI avatar integration to international trade visitors.",
    stat: "500+ Booth Demos",
  },
  {
    id: 3,
    title: "Smart Retail & Interactive Display Showcases",
    category: "Industry Applications",
    categoryIdx: 1,
    event: "ISLE China 2026",
    image: "/images/events/isle-china-2026.jpg",
    description:
      "Demonstrating digital human assistants in interactive retail configurations for high-end boutique environments.",
    stat: "98% Positive Feedback",
  },
  {
    id: 4,
    title: "Exhibition Keynote & Live Q&A Sessions",
    category: "Keynotes & Panels",
    categoryIdx: 3,
    event: "LED China 2026",
    image: "/images/events/led-china-2026.jpg",
    description:
      "HS Global AI founders and research engineers delivered technical briefings on on-device Edge AI speech models and 3D hologram boxes.",
    stat: "4 Technical Briefings",
  },
];

export default function EventsClient() {
  const [selectedLedImageIndex, setSelectedLedImageIndex] = useState(0);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const ePage = (dict as any).eventsPage || {};

  const categories: string[] = ePage.categories || [
    "All Moments",
    "Industry Applications",
    "Live Demos",
    "Keynotes & Panels",
  ];

  const localizedRecentEvents = recentEvents.map((evt, idx) => {
    const dictEvt = ePage.recentEvents && ePage.recentEvents[idx];
    if (!dictEvt) return evt;
    return {
      ...evt,
      dates: dictEvt.dates || evt.dates,
      location: dictEvt.location || evt.location,
      tagline: dictEvt.tagline || evt.tagline,
      description: dictEvt.description || evt.description,
      badge: dictEvt.badge || evt.badge,
      galleryPrompt: dictEvt.galleryPrompt || "Live Exhibition Photos (Click to View):",
      gallery: evt.gallery.map((gItem, gIdx) => {
        const caption = dictEvt.galleryCaptions && dictEvt.galleryCaptions[gIdx];
        return caption ? { ...gItem, caption } : gItem;
      }),
      highlightsHeading: dictEvt.highlightsHeading || "EXHIBITION KEY HIGHLIGHTS",
      highlights: dictEvt.highlights || evt.highlights,
    };
  });

  const localizedHighlights = eventHighlights.map((item, idx) => {
    const dictH = ePage.highlights && ePage.highlights[idx];
    if (!dictH) return item;
    const catIdx = dictH.categoryIdx !== undefined ? dictH.categoryIdx : item.categoryIdx;
    return {
      ...item,
      title: dictH.title || item.title,
      category: categories[catIdx] || dictH.category || item.category,
      categoryIdx: catIdx,
      description: dictH.description || item.description,
      stat: dictH.stat || item.stat,
    };
  });

  const filteredHighlights =
    activeTabIdx === 0
      ? localizedHighlights
      : localizedHighlights.filter((item) => item.categoryIdx === activeTabIdx);

  return (
    <div className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 border-b border-[var(--lp-line)]">
          <div className="relative mx-auto max-w-[1200px] text-center">
            {/* Category Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                {ePage.heroBadge || "Global Exhibitions & Demonstrations"}
              </span>
            </motion.div>

            {/* Main Page Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]"
            >
              {ePage.heroTitle || "HS Global AI"} <br className="hidden sm:inline" />
              <span className="text-[var(--lp-muted)]">
                {ePage.heroTitleHighlight || "Events & Exhibitions"}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]"
            >
              {ePage.heroSubtitle ||
                "HS Global AI actively participates in global exhibitions to showcase our AI-powered hologram technology and digital human solutions across industries worldwide."}
            </motion.p>

            {/* Key Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto"
            >
              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
                <div className="text-3xl font-bold text-[var(--lp-ink)]">
                  {ePage.metrics?.visitorsVal || "5,000+"}
                </div>
                <div className="mt-1 text-xs text-[var(--lp-muted)] font-medium">
                  {ePage.metrics?.visitorsLabel || "Booth Visitors"}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
                <div className="text-3xl font-bold text-[var(--lp-ink)]">
                  {ePage.metrics?.demosVal || "120+"}
                </div>
                <div className="mt-1 text-xs text-[var(--lp-muted)] font-medium">
                  {ePage.metrics?.demosLabel || "Live Demos Conducted"}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
                <div className="text-3xl font-bold text-[var(--lp-ink)]">
                  {ePage.metrics?.mediaVal || "25+"}
                </div>
                <div className="mt-1 text-xs text-[var(--lp-muted)] font-medium">
                  {ePage.metrics?.mediaLabel || "Media Spotlights"}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-2xs">
                <div className="text-3xl font-bold text-[var(--lp-accent)]">
                  {ePage.metrics?.offlineVal || "100%"}
                </div>
                <div className="mt-1 text-xs text-[var(--lp-muted)] font-medium">
                  {ePage.metrics?.offlineLabel || "On-Device Local AI"}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RECENT EVENTS & EXHIBITIONS SECTION */}
        <section className="relative py-20 px-4 sm:px-6 border-b border-[var(--lp-line)]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
                {ePage.recentSectionBadge || "PROJECT SHOWCASE"}
              </span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] md:text-5xl">
                {ePage.recentSectionHeading || "Recent Events & Exhibitions"}
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--lp-ink-2)] text-base">
                {ePage.recentSectionDesc ||
                  "Discover where we have demonstrated our photorealistic digital humans and 3D hologram box technology to enterprise leaders."}
              </p>
            </div>

            {/* EVENT CARDS GRID */}
            <div className="grid gap-8 md:grid-cols-2">
              {localizedRecentEvents.map((event, idx) => {
                const currentImgSrc =
                  event.id === "led-china-2026"
                    ? event.gallery[selectedLedImageIndex].src
                    : event.image;
                const currentImgAlt =
                  event.id === "led-china-2026"
                    ? event.gallery[selectedLedImageIndex].alt
                    : event.title;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    {/* Main Photo Banner */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
                      <Image
                        key={currentImgSrc}
                        src={currentImgSrc}
                        alt={currentImgAlt}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Location & Date Tag */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                          <MapPin className="h-3 w-3 text-[var(--lp-accent)]" />
                          <span>{event.location}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                          <Calendar className="h-3 w-3 text-white" />
                          <span>{event.dates}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                      <div>
                        {/* Event Title Badge & Action */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="rounded-full bg-[var(--lp-ink)] px-4 py-1.5 text-sm font-bold text-white shadow-xs">
                            {event.title}
                          </span>

                          <Link
                            href="#highlights"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--lp-tile)] text-[var(--lp-ink)] border border-[var(--lp-line)] hover:bg-[var(--lp-ink)] hover:text-white transition-all active:scale-[0.98] cursor-pointer"
                            aria-label={`View ${event.title} highlights`}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>

                        {/* Interactive Photo Selector for LED China */}
                        {event.id === "led-china-2026" && (
                          <div className="mb-5 rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-3">
                            <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[var(--lp-ink)] mb-2 font-semibold">
                              <Camera className="h-3 w-3 text-[var(--lp-accent)]" />
                              <span>Live Exhibition Gallery (Click to Inspect):</span>
                            </span>
                            <div className="grid grid-cols-3 gap-2">
                              {event.gallery.map((gItem, gIdx) => (
                                <button
                                  key={gIdx}
                                  onClick={() => setSelectedLedImageIndex(gIdx)}
                                  className={`relative h-16 w-full overflow-hidden rounded-xl border transition-all ${
                                    selectedLedImageIndex === gIdx
                                      ? "border-[var(--lp-accent)] ring-2 ring-[var(--lp-accent)]/30 scale-[1.02]"
                                      : "border-[var(--lp-line)] opacity-75 hover:opacity-100"
                                  }`}
                                >
                                  <Image
                                    src={gItem.src}
                                    alt={gItem.alt}
                                    fill
                                    className="object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tagline */}
                        <h3 className="text-lg md:text-xl font-bold text-[var(--lp-ink)] leading-snug">
                          {event.tagline}
                        </h3>

                        {/* Description */}
                        <p className="mt-2.5 text-sm text-[var(--lp-ink-2)] leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Highlights checklist */}
                      <div className="pt-4 border-t border-[var(--lp-line)]">
                        <h4 className="text-xs uppercase tracking-wider text-[var(--lp-muted)] mb-3 font-semibold">
                          {(event as any).highlightsHeading || "EXHIBITION KEY HIGHLIGHTS"}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {event.highlights.map((item: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-xs text-[var(--lp-ink-2)]"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EVENT HIGHLIGHTS & MEDIA GALLERY */}
        <section id="highlights" className="relative bg-[var(--lp-tile)] py-20 px-4 sm:px-6 border-b border-[var(--lp-line)]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
                {ePage.momentsSectionBadge || "EXHIBITION MOMENTS"}
              </span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] md:text-4xl">
                {ePage.momentsSectionHeading || "Event Highlights & Key Moments"}
              </h2>
              <p className="mt-2 text-[var(--lp-ink-2)] text-sm max-w-xl mx-auto">
                {ePage.momentsSectionSub ||
                  "Moments from HS Global AI's participation at international exhibitions."}
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat, catIndex) => (
                <button
                  key={catIndex}
                  onClick={() => setActiveTabIdx(catIndex)}
                  className={`inline-flex h-8 items-center justify-center rounded-full px-4 text-xs font-semibold transition-all cursor-pointer active:scale-[0.98] ${
                    activeTabIdx === catIndex
                      ? "bg-[var(--lp-ink)] text-white shadow-xs"
                      : "border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="wait">
                {filteredHighlights.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs hover:shadow-md transition-all group"
                  >
                    {/* Live Event Photo Header */}
                    <div className="relative h-44 w-full overflow-hidden bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                        <span>{item.category}</span>
                        <span>{item.event}</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h4 className="text-base font-bold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-xs text-[var(--lp-ink-2)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[var(--lp-line)] flex items-center justify-between text-xs">
                        <span className="text-[var(--lp-muted)] font-medium">
                          {ePage.highlightLabel || "Highlight:"}
                        </span>
                        <span className="font-bold text-[var(--lp-ink)] bg-[var(--lp-tile)] px-2.5 py-1 rounded-md border border-[var(--lp-line)]">
                          {item.stat}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
