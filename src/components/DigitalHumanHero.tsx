"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Store,
  HeartPulse,
  Shield,
  Sparkles,
  TrendingUp,
  Clock,
  ArrowRight,
  Activity,
  CheckCircle2,
  Lock,
  Volume2,
} from "lucide-react";
import {
  Locale,
  nonDefaultLocales,
  getLocalizedPath,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

interface DomainPersona {
  id: string;
  domainName: string;
  domainIcon: typeof Store;
  personaName: string;
  personaRole: string;
  videoSrc: string;
  primaryMetric: string;
  secondaryMetric: string;
  costSavingBadge: string;
  initialMessage: string;
  promptOptions: {
    question: string;
    answer: string;
  }[];
}

const DOMAIN_PERSONAS: DomainPersona[] = [
  {
    id: "retail",
    domainName: "Retail & Luxury",
    domainIcon: Store,
    personaName: "Elena",
    personaRole: "Smart Store Concierge & Sales Stylist",
    videoSrc: "/videos/avatars/elena_speaking.mp4",
    primaryMetric: "70% Lower Staffing Overhead",
    secondaryMetric: "3.2x Higher Basket Conversion",
    costSavingBadge: "24/7 Floor Coverage",
    initialMessage:
      "Welcome to our flagship store! I can find any product across our catalog, check backroom sizes, and recommend matching accessories instantly.",
    promptOptions: [
      {
        question: "Check shoe size in backroom",
        answer:
          "Size 42 in the Chelsea Leather Boot is currently in stock in Backroom Shelf B-4. Would you like me to reserve it for you at counter 2?",
      },
      {
        question: "Recommend luxury gift set",
        answer:
          "Based on popular purchases this season, our Artisan Silk Scarf and Gold Accent Perfume set is our most gifted luxury pairing. It includes bespoke gift wrapping.",
      },
      {
        question: "What is your return policy?",
        answer:
          "Items in original condition can be returned or exchanged within 30 days. You can tap your digital receipt right at this kiosk for instant store credit.",
      },
    ],
  },
  {
    id: "healthcare",
    domainName: "Hospitals & Clinics",
    domainIcon: HeartPulse,
    personaName: "Sophia",
    personaRole: "Patient Intake & Compassionate Triage Guide",
    videoSrc: "/videos/avatars/sophia_speaking.mp4",
    primaryMetric: "40% Wait Time Reduction",
    secondaryMetric: "100% Patient Intake Privacy",
    costSavingBadge: "Relieves Nurse Burnout",
    initialMessage:
      "Hello! I am Sophia, your patient intake assistant. Let's check you in for your appointment, review your intake forms, and guide you to your department.",
    promptOptions: [
      {
        question: "Check in for Dr. Aris appointment",
        answer:
          "Welcome, Mr. Davis. You are checked in for Dr. Aris at 10:30 AM in Cardiology. Your vitals check is pre-assigned to Consultation Room 4.",
      },
      {
        question: "Guide me to Radiology 2B",
        answer:
          "Take the west elevators to Level 2, turn left at the atrium, and follow the blue wall guide. Radiology 2B is located immediately on your right.",
      },
      {
        question: "Pre-surgery fasting instructions",
        answer:
          "Please do not consume solid foods for 8 hours prior to your scheduled procedure. Clear water is permitted up to 2 hours before admission.",
      },
    ],
  },
  {
    id: "defence",
    domainName: "Defence & High-Security",
    domainIcon: Shield,
    personaName: "Commander Marcus",
    personaRole: "Air-Gapped Facility Briefing Specialist",
    videoSrc: "/videos/avatars/victoria_speaking.mp4",
    primaryMetric: "100% Air-Gapped On-Device AI",
    secondaryMetric: "Zero Cloud Data Leakage",
    costSavingBadge: "Classified On-Premise Use",
    initialMessage:
      "Secure offline terminal initialized. All procedural manuals, safety protocols, and mission checklists are indexed locally on private GPU hardware with zero internet connection.",
    promptOptions: [
      {
        question: "Access classified system checklist",
        answer:
          "Access verified. Section 4.2 Emergency Power Isolation checklist displayed. Step 1: Engage secondary hydraulic lock on panel Alpha-9.",
      },
      {
        question: "Equipment maintenance step 4",
        answer:
          "Step 4 requires checking hydraulic fluid pressure at Valve Junction 12. Pressure must read between 180 and 210 PSI before re-engaging primary drive.",
      },
      {
        question: "Offline emergency protocol",
        answer:
          "Initiating Perimeter Lockdown Protocol Delta. All internal blast bulkheads are sealed, and emergency auxiliary power is routed to command communications.",
      },
    ],
  },
  {
    id: "events",
    domainName: "Events & Exhibitions",
    domainIcon: Sparkles,
    personaName: "Meilin",
    personaRole: "Holographic Keynote Host & Event Concierge",
    videoSrc: "/videos/avatars/meilin_speaking.mp4",
    primaryMetric: "3.8x Longer Visitor Dwell Time",
    secondaryMetric: "29+ Global Languages",
    costSavingBadge: "10,000+ Inquiries / Day",
    initialMessage:
      "Welcome to Global Tech Expo 2026! I am your interactive event host. I can print your attendee badge, guide you to exhibition booths, and schedule 1-on-1 speaker meetings.",
    promptOptions: [
      {
        question: "Where is the AI Keynote?",
        answer:
          "The main AI keynote by Dr. Tanaka begins in 15 minutes at Grand Auditorium Hall A. Head through Hallway 3 past the registration concourse.",
      },
      {
        question: "Print my attendee badge",
        answer:
          "Please scan your confirmation QR code at the scanner below my screen. Your VIP delegate badge will print in approximately 4 seconds.",
      },
      {
        question: "Schedule 1-on-1 booth meeting",
        answer:
          "Booth 14 has an open consultation slot at 2:00 PM with the Product Director. Would you like me to book this into your event app calendar?",
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
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const [activeDomain, setActiveDomain] = useState<DomainPersona>(DOMAIN_PERSONAS[0]);
  const [aiResponseText, setAiResponseText] = useState<string>(DOMAIN_PERSONAS[0].initialMessage);
  const [aiStatus, setAiStatus] = useState<"idle" | "speaking">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelectDomain = (domain: DomainPersona) => {
    setActiveDomain(domain);
    setAiResponseText(domain.initialMessage);
    setAiStatus("speaking");
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    setTimeout(() => {
      setAiStatus("idle");
    }, 4000);
  };

  const handleSelectPrompt = (prompt: { question: string; answer: string }) => {
    setAiStatus("speaking");
    setAiResponseText(prompt.answer);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    setTimeout(() => {
      setAiStatus("idle");
    }, 5500);
  };

  return (
    <section
      id="hero"
      className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 border-b border-[var(--lp-line)] bg-[var(--lp-bg)]"
    >
      <div className="mx-auto max-w-7xl">
        {/* TIER 1: ANNOUNCEMENT PILL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Link
            href={lPath("/industries")}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 sm:px-4 py-1.5 text-xs sm:text-[13px] font-medium text-[var(--lp-ink)] shadow-xs transition-all duration-200 hover:border-[var(--lp-accent)] hover:shadow-sm active:scale-[0.98] max-w-full text-center"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--lp-accent)] shrink-0" />
            <span className="font-semibold text-[var(--lp-ink)]">Proven 70% Staffing Cost Reduction</span>
            <span className="text-[var(--lp-muted)] hidden sm:inline">·</span>
            <span className="text-[var(--lp-muted)] group-hover:text-[var(--lp-ink)] transition-colors hidden sm:inline">
              Enterprise Digital Humans for Physical Spaces
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-[var(--lp-muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--lp-accent)] shrink-0" />
          </Link>
        </motion.div>

        {/* TIER 2: TWO-TONE HEADLINE & VALUE PROPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 sm:mt-8 max-w-4xl text-center"
        >
          <h1 className="text-balance text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.1] sm:leading-[1.08]">
            The digital workforce for enterprise.{" "}
            <span className="text-[var(--lp-muted)] font-medium block sm:inline">
              Where service, care, and security meet.
            </span>
          </h1>

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
            Deploy 24/7 autonomous digital human assistants across retail stores, hospitals, defence installations, and premier events.
            DIHUAVA is HS Global AI&apos;s offline AI digital human software platform, built for secure on-device customer engagement.
            Cut staffing overhead by up to 70% while delivering responsive, empathetic, multilingual service.
          </p>

          {/* DUAL ACTION BUTTONS (SWIPECRAFT STANDARD UNIFORM PADDING & MARGINS) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              href={lPath("/contact")}
              className="group/hero-btn inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all duration-150 hover:bg-[#2A2A2F] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_14px_rgba(17,17,19,0.3)] active:scale-[0.98] cursor-pointer"
            >
              <span>Deploy Digital Workforce</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/hero-btn:translate-x-1" />
            </Link>

            <Link
              href={lPath("/industries")}
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] border border-[var(--lp-line)] shadow-xs transition-all duration-150 hover:bg-[var(--lp-tile)] hover:border-[var(--lp-line-strong)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Domain ROI</span>
            </Link>
          </div>
        </motion.div>

        {/* TIER 3: THE LIVING DIGITAL HUMAN POD (CLEAN, PRODUCTION-GRADE STAGE) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 rounded-[28px] bg-[var(--lp-tile)] p-2 sm:p-3.5 border border-[var(--lp-line)]"
        >
          <div className="rounded-2xl sm:rounded-[22px] bg-[var(--lp-card)] p-3.5 sm:p-5 lg:p-6 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]">
            {/* STAGE HEADER: SWIPECRAFT UNIFIED SEGMENTED CONTROL & PERSONA BADGE */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-[var(--lp-line)]">
              {/* SEGMENTED DOMAIN BUTTONS */}
              <div className="inline-flex items-center p-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs w-full lg:w-auto overflow-x-auto scrollbar-none">
                {DOMAIN_PERSONAS.map((d) => {
                  const isSelected = activeDomain.id === d.id;
                  const Icon = d.domainIcon;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => handleSelectDomain(d)}
                      className={`inline-flex h-8 items-center gap-1.5 sm:gap-2 rounded-full px-4 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                        isSelected
                          ? "bg-white text-[var(--lp-ink)] shadow-xs"
                          : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 shrink-0 transition-colors ${isSelected ? "text-[var(--lp-accent)]" : "text-[var(--lp-muted)]"}`} />
                      <span>{d.domainName}</span>
                    </button>
                  );
                })}
              </div>

              {/* PERSONA STATUS PILL */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] text-xs font-medium text-[var(--lp-ink)] shadow-xs max-w-full">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-semibold shrink-0">{activeDomain.personaName}</span>
                <span className="text-[var(--lp-muted)] shrink-0">·</span>
                <span className="text-[var(--lp-muted)] truncate">{activeDomain.personaRole}</span>
              </div>
            </div>

            {/* VIDEO CANVAS CONTAINER */}
            <div className="relative mt-4 sm:mt-5 aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0F1117] shadow-inner">
              <video
                ref={videoRef}
                key={activeDomain.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover filter brightness-[0.98] contrast-[1.02]"
              >
                <source src={activeDomain.videoSrc} type="video/mp4" />
              </video>

              {/* TOP-LEFT METRIC BADGE */}
              <div className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10">
                <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-black/70 px-2.5 sm:px-3.5 py-1 sm:py-1.5 backdrop-blur-md">
                  <TrendingUp className="h-3 sm:h-3.5 w-3 sm:h-3.5 text-emerald-400" />
                  <span className="text-[11px] sm:text-xs font-semibold text-white">
                    {activeDomain.primaryMetric}
                  </span>
                </div>
              </div>

              {/* TOP-RIGHT ENTERPRISE GUARANTEE BADGE */}
              <div className="absolute right-3 top-3 sm:right-4 sm:top-4 z-10 hidden sm:block">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
                  <Lock className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                  <span className="text-xs font-semibold text-white">
                    {activeDomain.costSavingBadge}
                  </span>
                </div>
              </div>

              {/* BOTTOM SUBTLE STATUS STRIP OVER VIDEO */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end px-5 pb-3">
                <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{activeDomain.personaName} ({activeDomain.domainName}) · Live Speech Ready</span>
                </div>
              </div>
            </div>

            {/* DEDICATED INTERACTIVE DIALOGUE & PROMPT CONSOLE (BELOW VIDEO: NO OVERFLOW OR TRUNCATION) */}
            <div className="mt-4 sm:mt-5 p-4 sm:p-5 rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)]">
              {/* LIVE DIALOGUE HEADER */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--lp-line)]">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-[var(--lp-accent)] shrink-0" />
                  <span className="text-xs font-bold text-[var(--lp-ink)]">
                    Live Digital Human Speech Transcript
                  </span>
                </div>

                {/* AUDIO WAVE VISUALIZER */}
                <div className="flex items-center gap-1 h-3.5">
                  {[0.5, 0.9, 1, 0.7, 0.95, 0.4, 0.8, 0.6, 0.9, 0.5].map((scale, i) => (
                    <span
                      key={i}
                      className={`w-0.5 rounded-full transition-all duration-200 ${
                        aiStatus === "speaking" ? "bg-[var(--lp-accent)] h-3.5" : "bg-neutral-400 h-1.5"
                      }`}
                      style={{
                        transform: aiStatus === "speaking" ? `scaleY(${scale})` : "none",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* RESPONSE TEXT: CRISP, FULLY VISIBLE, ZERO TRUNCATION */}
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[var(--lp-ink)] font-medium">
                &ldquo;{aiResponseText}&rdquo;
              </p>

              {/* TEST PROMPT INQUIRY BUTTONS */}
              <div className="mt-4 pt-3.5 border-t border-[var(--lp-line)]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                  <span className="text-xs font-semibold text-[var(--lp-muted)] shrink-0">
                    Test inquiry:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeDomain.promptOptions.map((opt) => (
                      <button
                        key={opt.question}
                        type="button"
                        onClick={() => handleSelectPrompt(opt)}
                        className="inline-flex h-8 items-center justify-center px-4 rounded-full text-xs font-medium bg-white border border-[var(--lp-line)] text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-[var(--lp-tile)] transition-all duration-150 active:scale-[0.98] shadow-xs cursor-pointer"
                      >
                        {opt.question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TIER 4: SUB-HERO ENTERPRISE ROI & HARDWARE ECOSYSTEM BAR (SWIPECRAFT SYMMETRICAL STRUCTURE) */}
        <div className="mt-8 sm:mt-12 border-t border-[var(--lp-line)] pt-6 sm:pt-8">
          <div className="rounded-2xl xl:rounded-full bg-[var(--lp-tile)] p-3 xl:px-5 xl:py-2 border border-[var(--lp-line)] shadow-xs">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 xl:gap-4">
              {/* GROUP 1: ENTERPRISE ROI */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--lp-muted)] uppercase tracking-wider shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)] animate-pulse" />
                  Enterprise ROI
                </span>
                <div className="hidden sm:block h-3.5 w-px bg-[var(--lp-line-strong)] shrink-0" />
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { label: "70% Cost Cut", icon: TrendingUp, href: "#enterprise-security" },
                    { label: "Zero Wait", icon: Clock, href: "#enterprise-simulator" },
                    { label: "100% Air-Gap", icon: Lock, href: "#enterprise-security" },
                    { label: "29+ Global Languages", icon: CheckCircle2, href: "#global-languages" },
                  ].map(({ label, icon: Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="inline-flex h-7.5 items-center justify-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-white px-2.5 sm:px-3 text-[11px] font-semibold text-[var(--lp-ink)] shadow-2xs hover:border-[var(--lp-ink)] hover:bg-[var(--lp-tile)] transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
                    >
                      <Icon className="h-3.5 w-3.5 text-[var(--lp-accent)] shrink-0" />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CENTRAL VERTICAL DIVIDER (VISIBLE ON XL+ ONLY) */}
              <div className="hidden xl:block h-5 w-px bg-[var(--lp-line-strong)] shrink-0" />
              {/* HORIZONTAL DIVIDER ON SMALLER SCREENS */}
              <div className="block xl:hidden w-full h-px bg-[var(--lp-line)]" />

              {/* GROUP 2: PHYSICAL FORM FACTORS */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--lp-muted)] uppercase tracking-wider shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  Form Factors
                </span>
                <div className="hidden sm:block h-3.5 w-px bg-[var(--lp-line-strong)] shrink-0" />
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { label: "Retail Kiosks", icon: Store, href: lPath("/products") },
                    { label: "3D Holograms", icon: Sparkles, href: lPath("/products/holographic-display") },
                    { label: "Hospital Triage", icon: HeartPulse, href: lPath("/industries/healthcare") },
                    { label: "VIP Spatial", icon: Activity, href: lPath("/products/spatial-display") },
                  ].map(({ label, icon: Icon, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="inline-flex h-7.5 items-center justify-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-white px-2.5 sm:px-3 text-[11px] font-semibold text-[var(--lp-ink)] shadow-2xs hover:border-[var(--lp-ink)] hover:bg-[var(--lp-tile)] transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
                    >
                      <Icon className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
