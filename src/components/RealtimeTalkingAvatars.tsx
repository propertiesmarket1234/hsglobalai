"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Eye, Sparkles, Mic, Globe, Film } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

interface VoiceProfile {
  lang: string;
  accentName: string;
  description: string;
}

interface LadyOption {
  id: string;
  name: string;
  role: string;
  videoSrc?: string;
  imageSrc?: string;
  greeting: string;
  voiceProfile: VoiceProfile;
  capabilityTitle: string;
  capabilityIcon: any;
  userPrompt: string;
  botReply: string;
}

export default function RealtimeTalkingAvatars() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const av = dict.home.avatars;

  const ladyOptions: LadyOption[] = [
    {
      id: "full-presenter",
      name: "Elena Rostova",
      role: "AI Chief Presenter",
      videoSrc: "/videos/avatars/elena-rostova.mp4",
      imageSrc: "/images/avatars/full_digital_human_presenter.png",
      greeting: av.elena.greeting,
      voiceProfile: {
        lang: "en-GB",
        accentName: "British Executive",
        description: av.elena.voiceProfileDesc,
      },
      capabilityTitle: av.elena.capabilityTitle,
      capabilityIcon: Brain,
      userPrompt: av.elena.userPrompt,
      botReply: av.elena.botReply,
    },
    {
      id: "modern-presenter",
      name: "Sophia Vance",
      role: "Digital Executive Host",
      videoSrc: "/videos/avatars/sophia-vance.mp4",
      imageSrc: "/images/avatars/modern_digital_human_presenter.png",
      greeting: av.sophia.greeting,
      voiceProfile: {
        lang: "en-US",
        accentName: "American Tech Host",
        description: av.sophia.voiceProfileDesc,
      },
      capabilityTitle: av.sophia.capabilityTitle,
      capabilityIcon: Eye,
      userPrompt: av.sophia.userPrompt,
      botReply: av.sophia.botReply,
    },
    {
      id: "mei-lin",
      name: "Mei Lin",
      role: "Global Concierge Lead",
      videoSrc: "/videos/avatars/mei-lin.mp4",
      imageSrc: "/images/avatars/asian_lady.png",
      greeting: av.meiLin.greeting,
      voiceProfile: {
        lang: "en-SG",
        accentName: "Asian Concierge",
        description: av.meiLin.voiceProfileDesc,
      },
      capabilityTitle: av.meiLin.capabilityTitle,
      capabilityIcon: Sparkles,
      userPrompt: av.meiLin.userPrompt,
      botReply: av.meiLin.botReply,
    },
    {
      id: "victoria",
      name: "Victoria Vance",
      role: "Corporate Wealth Advisor",
      videoSrc: "/videos/avatars/victoria-vance.mp4",
      imageSrc: "/images/avatars/executive_lady.png",
      greeting: av.victoria.greeting,
      voiceProfile: {
        lang: "en-AU",
        accentName: "Australian Wealth Advisor",
        description: av.victoria.voiceProfileDesc,
      },
      capabilityTitle: av.victoria.capabilityTitle,
      capabilityIcon: Mic,
      userPrompt: av.victoria.userPrompt,
      botReply: av.victoria.botReply,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Carousel Rotation every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ladyOptions.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [ladyOptions.length]);

  const activeLady = ladyOptions[currentIndex];
  const CapabilityIcon = activeLady.capabilityIcon;

  return (
    <section className="relative overflow-hidden bg-black px-4 sm:px-6 py-24 sm:py-32 text-white border-b border-white/10">
      {/* Background cyan ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1000px] rounded-full bg-cyan-900/15 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-4 py-1.5 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              {av.badge}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            {av.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              {av.titleHighlight}
            </span>{" "}
            {av.titleSuffix}
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
            {av.subtitle}
          </p>
        </div>

        {/* CAROUSEL PRESENTER INDICATOR BAR (NON-CLICKABLE VISUAL SHOWCASE) */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-neutral-950/80 p-3.5 backdrop-blur-md pointer-events-none select-none">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-cyan-300 tracking-wider">
              {av.avatarPresenter}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {ladyOptions.map((lady, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <div
                  key={lady.id}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? "border border-cyan-400 bg-cyan-950 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "border border-white/15 bg-black/60 text-gray-400 opacity-60"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isSelected ? "bg-cyan-400 animate-ping" : "bg-gray-500"
                    }`}
                  />
                  <span>{lady.name}</span>
                  <span className="text-[10px] text-gray-400 font-mono">({lady.role})</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* MAIN 2-COLUMN CAROUSEL SHOWCASE (7 Cols Video Frame | 5 Cols Side Panel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pointer-events-none select-none">
          
          {/* LEFT COLUMN: DEDICATED CAROUSEL VIDEO FRAME AREA (7/12 Width) */}
          <div className="lg:col-span-7 relative min-h-[540px] sm:min-h-[620px] rounded-3xl border border-cyan-500/40 bg-neutral-950 overflow-hidden backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.25)] flex flex-col justify-between p-6">
            
            {/* Smooth Video / Slide Frame Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLady.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 z-0 overflow-hidden bg-neutral-950 flex items-center justify-center"
              >
                {activeLady.videoSrc ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={activeLady.videoSrc}
                    className="h-full w-full object-cover object-top filter brightness-105 contrast-105"
                  >
                    <source src={activeLady.videoSrc} type="video/mp4" />
                    {activeLady.imageSrc && (
                      <Image
                        src={activeLady.imageSrc}
                        alt={activeLady.name}
                        fill
                        className="object-cover object-top"
                      />
                    )}
                  </video>
                ) : activeLady.imageSrc ? (
                  <Image
                    src={activeLady.imageSrc}
                    alt={activeLady.name}
                    fill
                    priority
                    className="object-cover object-top filter brightness-105 contrast-105"
                  />
                ) : (
                  <div className="relative flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-neutral-950 via-cyan-950/20 to-black w-full h-full">
                    <div className="rounded-2xl border border-cyan-500/40 bg-cyan-950/60 p-4 text-cyan-300 mb-3 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                      <Film className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider">
                      Video Stream Area — Slide 0{currentIndex + 1} ({activeLady.name})
                    </span>
                    <p className="mt-2 text-xs font-mono text-gray-400 max-w-xs">
                      MP4 Video Slot: {activeLady.videoSrc}
                    </p>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10" />
              </motion.div>
            </AnimatePresence>

            {/* TOP HEADER STATUS BADGES */}
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-black/85 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                  {av.liveStreamBadge}
                </span>
              </div>

              <div className="flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-black/85 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  {activeLady.name}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-cyan-400 border-l border-white/20 pl-2">
                  🎙️ {activeLady.voiceProfile.description}
                </span>
              </div>
            </div>

            {/* BOTTOM STATUS BAR (NON-CLICKABLE VISUAL BADGES) */}
            <div className="relative z-20 flex items-center justify-between gap-4 pt-4 border-t border-white/10 backdrop-blur-md bg-black/60 -mx-6 -mb-6 p-6">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-10 w-10 rounded-full bg-cyan-400/30 animate-ping" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-cyan-950 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                    <Mic className="h-5 w-5" />
                  </div>
                </div>

                <div className="rounded-full border border-cyan-500/40 bg-black/85 px-4 py-2 font-mono text-xs font-bold text-cyan-300 backdrop-blur-md shadow-lg">
                  {av.autonomousStream}
                </div>
              </div>

              <div className="rounded-full border border-white/20 bg-black/80 px-3.5 py-2 font-mono text-xs text-gray-300 backdrop-blur-md">
                🔊 {av.languagesEnabled}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: DEDICATED CAROUSEL CAPABILITY & DIALOGUE PANEL (5/12 Width) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/90 p-6 backdrop-blur-xl shadow-2xl space-y-5">
            
            {/* Top Capability Indicator Card */}
            <div>
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
                {av.avatarCapability}
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLady.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-2xl border border-cyan-400 bg-cyan-950/70 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-cyan-500/40 bg-black/60 p-2.5 text-cyan-300">
                      <CapabilityIcon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {activeLady.capabilityTitle}
                      </h3>
                      <p className="text-xs text-cyan-300 font-mono mt-0.5">
                        {activeLady.voiceProfile.accentName}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Chat Interface Header */}
            <div className="flex items-center justify-between border-b border-white/15 pb-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold tracking-wider text-cyan-400 uppercase">
                  {av.chatInterface}
                </span>
                <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-300">
                  {av.online}
                </span>
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-ping" />
            </div>

            {/* Chat Message Stream */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 min-h-[220px] max-h-[300px] text-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLady.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  {/* User Prompt Bubble */}
                  <div className="flex flex-col items-end">
                    <div className="max-w-[92%] rounded-2xl rounded-br-none px-4 py-3 font-sans font-medium leading-relaxed bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      {activeLady.userPrompt}
                    </div>
                  </div>

                  {/* Bot Response Bubble */}
                  <div className="flex flex-col items-start">
                    <div className="max-w-[92%] rounded-2xl rounded-bl-none px-4 py-3 font-sans leading-relaxed border border-white/15 bg-neutral-900/90 text-gray-200">
                      {activeLady.botReply}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Auto-play Progress Footer Bar */}
            <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300">29+ Global Languages</span>
              </div>
              <span className="text-cyan-400 font-semibold">● {av.autoCarousel}</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
