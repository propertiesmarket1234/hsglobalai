"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

// Featured Recent Events (Using exact real photos from user requests)
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
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
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
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
];



// Event Highlights Gallery / Key Moments
const eventHighlights = [
  {
    id: 1,
    title: "Interactive 3D Hologram Box Demos",
    category: "Live Demos",
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
    event: "LED China 2026",
    image: "/images/events/led-china-demo-2.jpg",
    description:
      "Demonstrating live 3D hologram box interaction and enterprise AI avatar integration to international trade visitors.",
    stat: "500+ Booth Demos",
  },
  {
    id: 3,
    title: "Retail & Exhibition Kiosk Showcase",
    category: "Exhibitions",
    event: "ISLE China 2026",
    image: "/images/events/isle-china-2026.jpg",
    description:
      "Demonstrating 3D Hologram Boxes configured for automated retail product advice and multilingual attendee assistance.",
    stat: "120+ Partner Inquiries",
  },
  {
    id: 4,
    title: "Air-Gapped Offline AI Privacy Workshop",
    category: "Keynote Talks",
    event: "Tech Briefing Series",
    image: "/images/events/led-china-2026.jpg",
    description:
      "Technical deep dive into how HS Global AI runs enterprise LLMs and digital humans locally on edge hardware with zero data leaks.",
    stat: "100% Data Privacy",
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedLedImageIndex, setSelectedLedImageIndex] = useState(0);

  const categories = ["All", "Exhibitions", "Live Demos", "Keynote Talks"];

  const filteredHighlights =
    activeTab === "All"
      ? eventHighlights
      : eventHighlights.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-neutral-950 via-black to-black py-24 md:py-32">
          {/* Ambient Lighting Glows */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] bg-cyan-500/15 blur-[160px] rounded-full" />
          <div className="pointer-events-none absolute right-10 top-1/3 h-[350px] w-[350px] bg-blue-600/10 blur-[140px] rounded-full" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">
            {/* Category Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                GLOBAL EXHIBITIONS & LIVE DEMONSTRATIONS
              </span>
            </motion.div>

            {/* Main Page Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
            >
              HS Global AI <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                Events & Exhibitions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-base md:text-xl text-gray-300 leading-relaxed"
            >
              HS Global AI actively participates in global exhibitions to showcase our AI-powered hologram technology and digital human solutions across industries worldwide.
            </motion.p>

            {/* Key Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto"
            >
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-xl hover:border-cyan-500/30 transition-colors">
                <div className="text-3xl font-black text-cyan-400">5,000+</div>
                <div className="mt-1 text-xs text-gray-400 font-medium">Booth Visitors</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-xl hover:border-cyan-500/30 transition-colors">
                <div className="text-3xl font-black text-cyan-300">120+</div>
                <div className="mt-1 text-xs text-gray-400 font-medium">Live Demos Conducted</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-xl hover:border-cyan-500/30 transition-colors">
                <div className="text-3xl font-black text-teal-300">25+</div>
                <div className="mt-1 text-xs text-gray-400 font-medium">Global Media Highlights</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-xl hover:border-cyan-500/30 transition-colors">
                <div className="text-3xl font-black text-cyan-400">100%</div>
                <div className="mt-1 text-xs text-gray-400 font-medium">On-Device Local AI</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RECENT EVENTS & EXHIBITIONS SECTION */}
        <section className="relative py-20 px-6 bg-black">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                OUR PROJECT & SHOWCASE
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Recent Events & Exhibitions
              </h2>
              <p className="mt-4 max-w-2xl text-gray-400 text-base">
                Discover where we have demonstrated our photorealistic digital humans and 3D hologram box technology to enterprise leaders.
              </p>
            </div>

            {/* EVENT CARDS GRID */}
            <div className="grid gap-10 md:grid-cols-2">
              {recentEvents.map((event, idx) => {
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/15 bg-neutral-950 shadow-2xl backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-300"
                  >
                    {/* Main Photo Banner with Animation */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                      <Image
                        key={currentImgSrc}
                        src={currentImgSrc}
                        alt={currentImgAlt}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

                      {/* Location & Date Tag */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/15">
                          📍 {event.location}
                        </span>
                        <span className="rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                          {event.dates}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="relative px-6 pt-4 pb-8 flex-1 flex flex-col justify-between space-y-6">
                      <div>
                        {/* Pill Badge & Circular Arrow Icon Button */}
                        <div className="flex items-center justify-between mb-6 -mt-10">
                          <div className="rounded-full bg-cyan-500 px-6 py-2.5 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                            <span className="text-base font-extrabold text-black tracking-wide">
                              {event.title}
                            </span>
                          </div>

                          <Link
                            href="#highlights"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-black shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                            aria-label={`View ${event.title} highlights`}
                          >
                            <svg
                              className="h-5 w-5 stroke-[2.5]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 17L17 7M17 7H7M17 7V17"
                              />
                            </svg>
                          </Link>
                        </div>

                        {/* Interactive Photo Selector for LED China */}
                        {event.id === "led-china-2026" && (
                          <div className="mb-5 rounded-2xl border border-white/10 bg-neutral-900/80 p-2.5 backdrop-blur-md">
                            <span className="block text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-2 px-1">
                              📸 Live Exhibition Photos (Click to View):
                            </span>
                            <div className="grid grid-cols-3 gap-2">
                              {event.gallery.map((gItem, gIdx) => (
                                <button
                                  key={gIdx}
                                  onClick={() => setSelectedLedImageIndex(gIdx)}
                                  className={`relative h-16 w-full overflow-hidden rounded-xl border transition-all ${
                                    selectedLedImageIndex === gIdx
                                      ? "border-cyan-400 ring-2 ring-cyan-400/50 scale-[1.02]"
                                      : "border-white/15 opacity-70 hover:opacity-100 hover:border-white/40"
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

                        {/* Subtitle */}
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {event.tagline}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Highlights checklist */}
                      <div className="pt-4 border-t border-white/10">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                          EXHIBITION KEY HIGHLIGHTS
                        </h4>
                        <ul className="grid grid-cols-1 gap-2.5">
                          {event.highlights.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2.5 text-xs text-gray-300"
                            >
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-[10px]">
                                ✓
                              </span>
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
        <section id="highlights" className="relative border-t border-white/10 bg-black py-20 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                EXHIBITION MOMENTS
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Event Highlights & Key Moments
              </h2>
              <p className="mt-3 text-gray-400 text-sm max-w-xl mx-auto">
                Moments from HS Global AI&apos;s participation at international exhibitions.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                    activeTab === cat
                      ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "border border-white/10 bg-neutral-900/80 text-gray-300 hover:border-cyan-500/40 hover:text-white"
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
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] transition-all group"
                  >
                    {/* Live Event Photo Header */}
                    <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/30">
                        <span>{item.category}</span>
                        <span>{item.event}</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                        <span className="text-gray-400 font-medium">Highlight:</span>
                        <span className="font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
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
