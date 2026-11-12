"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Store,
  HeartPulse,
  Shield,
  Sparkles,
  Globe,
  Cpu,
  ArrowRight,
  Activity,
  Lock,
  Volume2,
  CheckCircle2,
} from "lucide-react";
import {
  Locale,
  nonDefaultLocales,
  getLocalizedPath,
} from "@/i18n/config";

interface DomainPersona {
  id: string;
  domainName: string;
  domainIcon: typeof Store;
  personaName: string;
  personaRole: string;
  videoSrc: string;
  posterSrc: string;
  capabilityBadge: string;
  modeBadge: string;
  initialMessage: string;
  promptOptions: {
    question: string;
    answer: string;
  }[];
}

const DOMAIN_PERSONAS: DomainPersona[] = [
  {
    id: "retail",
    domainName: "Retail",
    domainIcon: Store,
    personaName: "Elena",
    personaRole: "Store Concierge",
    videoSrc: "/videos/avatars/elena_speaking.mp4",
    posterSrc: "/images/avatars/full_digital_human_presenter.png",
    capabilityBadge: "CSV Product Catalog RAG",
    modeBadge: "24/7 Floor Coverage",
    initialMessage:
      "Welcome to our flagship store. Ask me about available sizes, backroom inventory, care materials, or curated pairing recommendations.",
    promptOptions: [
      {
        question: "Check Chelsea Boot in size 42",
        answer:
          "Size 42 in the Chelsea Leather Boot is available in Backroom Shelf B-4. I can display the lookbook card here or reserve a pair at Fitting Counter 2.",
      },
      {
        question: "Suggest a luxury silk gift pairing",
        answer:
          "Our Artisan Silk Scarf pairs directly with the Hand-Poured Amber Crystal Candle from the seasonal collection, including bespoke boutique gift wrapping.",
      },
      {
        question: "Explain your return window",
        answer:
          "Unworn items in original condition can be exchanged or returned within 30 days across all flagship locations using your digital receipt.",
      },
    ],
  },
  {
    id: "healthcare",
    domainName: "Healthcare",
    domainIcon: HeartPulse,
    personaName: "Sophia",
    personaRole: "Patient Guidance",
    videoSrc: "/videos/avatars/sophia_speaking.mp4",
    posterSrc: "/images/avatars/modern_digital_human_presenter.png",
    capabilityBadge: "Local Data Residency",
    modeBadge: "29+ Spoken Languages",
    initialMessage:
      "Hello, I am Sophia. I help patients navigate hospital wings, review pre-appointment instructions, and locate clinic reception desks in their preferred language.",
    promptOptions: [
      {
        question: "Directions to Radiology Suite 2B",
        answer:
          "Take the west elevators to Level 2, turn left past the central atrium, and follow the blue corridor markers straight to Radiology Suite 2B.",
      },
      {
        question: "Pre-procedure fasting checklist",
        answer:
          "Per clinic guidelines, please avoid solid foods for 8 hours before your scheduled time. Clear water is typically permitted up to 2 hours before arrival.",
      },
      {
        question: "Speak with reception in Hindi or Tamil",
        answer:
          "I understand and speak 29+ global languages including 7 Indian regional languages on-device, helping every patient feel understood immediately.",
      },
    ],
  },
  {
    id: "defence",
    domainName: "Security",
    domainIcon: Shield,
    personaName: "Victoria",
    personaRole: "Air-Gapped Host",
    videoSrc: "/videos/avatars/victoria_speaking.mp4",
    posterSrc: "/images/avatars/executive_lady.png",
    capabilityBadge: "100% Offline By Default",
    modeBadge: "Zero Cloud Transmission",
    initialMessage:
      "Secure offline node active. Procedural manuals, visitor safety protocols, and facility directories run locally on dedicated GPU hardware with zero WAN dependency.",
    promptOptions: [
      {
        question: "Verify network air-gap status",
        answer:
          "All speech recognition, document search, and avatar synthesis run 100% locally on hardware. Zero voice audio or queries leave this premise.",
      },
      {
        question: "Open emergency evacuation map",
        answer:
          "Displaying Wing B assembly routes and muster point Alpha-2 directly from your verified local facility safety manual.",
      },
      {
        question: "Check visitor escort protocol",
        answer:
          "Level-2 visitors require host verification at Security Desk 1 and badge activation prior to entering controlled operations corridors.",
      },
    ],
  },
  {
    id: "events",
    domainName: "Events",
    domainIcon: Sparkles,
    personaName: "Meilin",
    personaRole: "Expo Concierge",
    videoSrc: "/videos/avatars/meilin_speaking.mp4",
    posterSrc: "/images/avatars/asian_lady.png",
    capabilityBadge: "55\"–86\" Hologram Ready",
    modeBadge: "Selfie & QR Experience",
    initialMessage:
      "Welcome to the exhibition pavilion! Ask me for hall maps, live keynote timings, booth showcases, or capture a Selfie With Avatar right on screen.",
    promptOptions: [
      {
        question: "Where is the AI keynote stage?",
        answer:
          "The main keynote begins in 15 minutes at Grand Auditorium Hall A, just past Concourse 3 on your right.",
      },
      {
        question: "How does Selfie With Avatar work?",
        answer:
          "Tap Selfie on screen to stand beside me in life-size volumetric 3D—the kiosk composites your photo locally and generates an instant QR share link.",
      },
      {
        question: "Switch greeting to Spanish or Mandarin",
        answer:
          "Just speak naturally in Spanish, Mandarin, French, Russian, or Hindi—language switching happens automatically on the very first sentence.",
      },
    ],
  },
];

export default function DigitalHumanHero() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
  const shouldReduceMotion = useReducedMotion();

  const [activeDomain, setActiveDomain] = useState<DomainPersona>(DOMAIN_PERSONAS[0]);
  const [aiResponseText, setAiResponseText] = useState<string>(DOMAIN_PERSONAS[0].initialMessage);
  const [aiStatus, setAiStatus] = useState<"idle" | "speaking">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);

  const replayClip = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleSelectDomain = (domain: DomainPersona) => {
    setActiveDomain(domain);
    setAiResponseText(domain.initialMessage);
    setAiStatus("speaking");
    replayClip();
    setTimeout(() => setAiStatus("idle"), 4000);
  };

  const handleSelectPrompt = (prompt: { question: string; answer: string }) => {
    setAiStatus("speaking");
    setAiResponseText(prompt.answer);
    replayClip();
    setTimeout(() => setAiStatus("idle"), 5500);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-20 border-b border-[var(--lp-line)] bg-[var(--lp-bg)]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* ASYMMETRIC SPLIT HERO: EDITORIAL VALUE PROP (5 COLS) + LIVE AVATAR STAGE (7 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: FOCUSED HEADLINE, CONCISE PROP & DUAL CTAS */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-left"
          >
            <Link
              href={lPath("/products/ai-digital-human")}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3.5 py-1.5 text-xs font-medium text-[var(--lp-ink)] shadow-xs transition-all hover:border-[var(--lp-accent)]"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--lp-accent)] shrink-0" />
              <span className="font-semibold">DIHUAVA Offline Engine</span>
              <span className="text-[var(--lp-muted)]">·</span>
              <span className="text-[var(--lp-muted)] group-hover:text-[var(--lp-ink)] transition-colors">
                Edge Digital Humans
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-[var(--lp-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--lp-accent)]" />
            </Link>

            <h1 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[var(--lp-ink)] leading-[1.08]">
              The digital workforce for enterprise.{" "}
              <span className="block mt-1 text-[var(--lp-muted)] font-medium text-2xl sm:text-3xl lg:text-[36px] leading-[1.16]">
                Lifelike presence, zero cloud dependency.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-[1.65] text-[var(--lp-ink-2)] max-w-xl">
              HS Global AI combines the <strong className="font-semibold text-[var(--lp-ink)]">DIHUAVA</strong> offline AI software platform with life-size 3D Hologram Boxes and 4K Spatial Displays for interactive visitor engagement on private hardware.
            </p>

            {/* DUAL CTAS */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={lPath("/contact")}
                className="group/hero-btn inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all duration-150 hover:bg-[#2A2A2F] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Deploy Digital Workforce</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/hero-btn:translate-x-1" />
              </Link>

              <Link
                href={lPath("/products")}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[var(--lp-ink)] border border-[var(--lp-line)] shadow-xs transition-all duration-150 hover:bg-[var(--lp-tile)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Explore Hardware</span>
              </Link>
            </div>

            {/* COMPACT VERIFIED CAPABILITY STRIP */}
            <div className="mt-7 pt-5 border-t border-[var(--lp-line)] grid grid-cols-3 gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--lp-ink)]">
                  <Globe className="h-4 w-4 text-[var(--lp-accent)] shrink-0" />
                  <span>29+ Langs</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[var(--lp-muted)] mt-0.5">
                  + 7 Indian regional
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--lp-ink)]">
                  <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Air-Gapped</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[var(--lp-muted)] mt-0.5">
                  On-device by default
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--lp-ink)]">
                  <Cpu className="h-4 w-4 text-[var(--lp-ink)] shrink-0" />
                  <span>60 FPS Sync</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[var(--lp-muted)] mt-0.5">
                  Low-latency speech
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: LIVE SPEAKING AVATAR STAGE + DOMAIN CONTROLS (7 COLS) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-[26px] bg-[var(--lp-tile)] p-2 sm:p-3 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]">
              <div className="rounded-[20px] bg-[var(--lp-card)] p-3 sm:p-4 border border-[var(--lp-line)]">
                {/* DOMAIN TABS + LIVE PERSONA BADGE */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[var(--lp-line)]">
                  <div className="inline-flex items-center p-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] overflow-x-auto scrollbar-none max-w-full">
                    {DOMAIN_PERSONAS.map((d) => {
                      const isSelected = activeDomain.id === d.id;
                      const Icon = d.domainIcon;
                      return (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => handleSelectDomain(d)}
                          className={`inline-flex h-7.5 items-center gap-1.5 rounded-full px-3 text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                            isSelected
                              ? "bg-white text-[var(--lp-ink)] shadow-xs"
                              : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                          }`}
                        >
                          <Icon
                            className={`h-3.5 w-3.5 shrink-0 ${
                              isSelected ? "text-[var(--lp-accent)]" : "text-[var(--lp-muted)]"
                            }`}
                          />
                          <span>{d.domainName}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[11px] font-medium text-[var(--lp-ink)] self-start sm:self-auto shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold">{activeDomain.personaName}</span>
                    <span className="text-[var(--lp-muted)] hidden md:inline">· {activeDomain.personaRole}</span>
                  </div>
                </div>

                {/* VIDEO STAGE CANVAS */}
                <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0B1224] shadow-inner">
                  <video
                    ref={videoRef}
                    key={activeDomain.videoSrc}
                    poster={activeDomain.posterSrc}
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover object-[50%_14%]"
                  >
                    <source src={activeDomain.videoSrc} type="video/mp4" />
                  </video>

                  <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1 backdrop-blur-md">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    <span className="text-[11px] font-semibold text-white">
                      {activeDomain.capabilityBadge}
                    </span>
                  </div>

                  <div className="absolute right-3 top-3 z-10 hidden sm:flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1 backdrop-blur-md">
                    <Lock className="h-3 w-3 text-[var(--lp-accent)]" />
                    <span className="text-[11px] font-semibold text-white">
                      {activeDomain.modeBadge}
                    </span>
                  </div>
                </div>

                {/* CLEAN HIGH-CONTRAST TRANSCRIPT STRIP BELOW VIDEO */}
                <div className="mt-3 rounded-xl bg-[var(--lp-tile)] border border-[var(--lp-line)] p-3">
                  <div className="flex items-center justify-between gap-2 text-[11px] mb-1">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--lp-ink)]">
                      <Activity className="h-3 w-3 text-emerald-600" />
                      <span>Live Speech Transcript</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[var(--lp-muted)] font-medium">
                      <Volume2 className={`h-3 w-3 ${aiStatus === "speaking" ? "text-[var(--lp-accent)]" : "text-[var(--lp-muted)]"}`} />
                      <span>{aiStatus === "speaking" ? "Speaking locally" : "Ready"}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[var(--lp-ink)] font-medium">
                    &ldquo;{aiResponseText}&rdquo;
                  </p>
                </div>

                {/* INTERACTIVE PROMPT PILLS */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-[var(--lp-muted)] mr-1">
                    Ask {activeDomain.personaName}:
                  </span>
                  {activeDomain.promptOptions.map((opt) => (
                    <button
                      key={opt.question}
                      type="button"
                      onClick={() => handleSelectPrompt(opt)}
                      className="inline-flex h-7 items-center rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] px-3 text-[11px] font-medium text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-white transition-all cursor-pointer active:scale-[0.98]"
                    >
                      {opt.question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
