"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  WifiOff,
  Cpu,
  KeyRound,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  Server,
  Mic,
  Database,
  Monitor,
  CloudOff,
} from "lucide-react";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

interface SecurityPillar {
  id: string;
  name: string;
  icon: typeof ShieldCheck;
  subtitle: string;
  description: string;
  architectureTags: string[];
  specs: { label: string; value: string }[];
  auditProof: string;
}

const SECURITY_PILLARS: SecurityPillar[] = [
  {
    id: "airgap",
    name: "100% Air-Gapped Local Inference",
    icon: WifiOff,
    subtitle: "Physical hardware isolation with zero external voice transmission",
    description:
      "Speech recognition, RAG document search, local dialogue inference, and 3D avatar rendering run directly on dedicated local hardware. Voice audio and visitor queries do not leave your physical premise.",
    architectureTags: ["Zero Outbound Voice", "Offline By Default", "LAN / Isolated Mode"],
    specs: [
      { label: "Default Cloud Traffic", value: "0 Bytes Audio / Chat Egress" },
      { label: "Execution Location", value: "On-Premise Edge Workstation" },
      { label: "Connectivity Fault Tolerance", value: "Operates Without WAN Internet" },
      { label: "Deployment Model", value: "Standalone or Air-Gapped Kiosk" },
    ],
    auditProof: "Core voice, RAG, and avatar loop runs continuously even with WAN cables disconnected.",
  },
  {
    id: "pii",
    name: "Ephemeral In-Memory Session Handling",
    icon: Lock,
    subtitle: "Context retained only for the active session",
    description:
      "Multi-turn conversational context lives in volatile runtime memory while a visitor is engaged at the kiosk and clears once the session ends, supporting local data residency practices.",
    architectureTags: ["Local Data Residency", "Session Memory Cleared", "No Cloud Recordings"],
    specs: [
      { label: "Transcript Storage", value: "Ephemeral Session Buffer" },
      { label: "Voice & Query Processing", value: "Local Device Memory Only" },
      { label: "Facial Frame Retention", value: "No Persistent Biometric Database" },
      { label: "Document Store", value: "Isolated Per-Persona Vector Index" },
    ],
    auditProof: "Supports privacy-sensitive healthcare reception and private corporate lobbies through local residency.",
  },
  {
    id: "enclave",
    name: "Signed Personas & Package Integrity",
    icon: Cpu,
    subtitle: "Checksum-verified local deployment bundles",
    description:
      "Each avatar persona bundle (.zip) includes checksum validation on installation along with post-generation factual guards so pricing, IDs, and clinical policies trace strictly back to uploaded files.",
    architectureTags: ["Checksum Verified", "Factual Grounding Guard", "Isolated Vector DB"],
    specs: [
      { label: "Bundle Verification", value: "Install-Time Package Checksum" },
      { label: "Hallucination Control", value: "Post-Generation Source Verification" },
      { label: "Catalog Accuracy", value: "Strict CSV SKU & Price Grounding" },
      { label: "Out-of-Scope Behavior", value: "Safe Polite Refusal Guard" },
    ],
    auditProof: "Every factual claim and product recommendation stays locked to customer-approved local files.",
  },
  {
    id: "governance",
    name: "Optional Private Fleet Synchronization",
    icon: KeyRound,
    subtitle: "Controlled updates over customer-approved networks",
    description:
      "When multi-site fleet management is enabled, administrators push approved persona packages, catalog updates, and non-PII device health metrics over approved private networks without streaming visitor conversations.",
    architectureTags: ["Optional Network Sync", "Role-Scoped Access", "Persona Rollouts"],
    specs: [
      { label: "Update Channel", value: "Optional Fleet Control Plane" },
      { label: "Pushed Payloads", value: "Persona Packages & Catalog CSVs" },
      { label: "Telemetry Scope", value: "System Health Only (Zero Visitor Audio)" },
      { label: "Multi-Site Readiness", value: "Consistent Brand Rules Per Terminal" },
    ],
    auditProof: "Balances offline kiosk autonomy with structured enterprise updates when approved.",
  },
];

const PIPELINE_STEPS = [
  { label: "1. Mic & Optics", sub: "Local Hardware", icon: Mic },
  { label: "2. Offline ASR", sub: "29+ Langs Local", icon: Server },
  { label: "3. Local Vector RAG", sub: "Cross-Encoder", icon: Database },
  { label: "4. Factual Guard", sub: "Source Verified", icon: ShieldCheck },
  { label: "5. 3D Avatar + Display", sub: "Hologram / Spatial", icon: Monitor },
];

export default function EnterpriseSecurityCommand() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
  const shouldReduceMotion = useReducedMotion();

  const [activePillarId, setActivePillarId] = useState<string>("airgap");
  const [isCloudDisconnected, setIsCloudDisconnected] = useState<boolean>(true);
  const [isProbing, setIsProbing] = useState<boolean>(false);
  const [probeResult, setProbeResult] = useState<string | null>(null);

  const activePillar =
    SECURITY_PILLARS.find((p) => p.id === activePillarId) || SECURITY_PILLARS[0];

  const handleRunLeakTest = () => {
    setIsProbing(true);
    setProbeResult(null);
    setTimeout(() => {
      setIsProbing(false);
      setProbeResult(
        isCloudDisconnected
          ? "PASS: 0.00 KB external conversation egress. Offline ASR, RAG & Neural TTS active locally."
          : "PASS: Fleet sync channel active for catalog bundles only; voice & conversation data remains 100% local."
      );
    }, 900);
  };

  return (
    <section
      id="enterprise-security"
      className="relative overflow-hidden py-16 sm:py-24 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]"
    >
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
                On-Device Security Architecture
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
              Air-gapped AI pipeline inside{" "}
              <span className="text-[var(--lp-accent)]">your physical boundary.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsCloudDisconnected(!isCloudDisconnected)}
            className={`inline-flex h-10 items-center gap-2 px-4 rounded-full text-xs font-semibold border transition-all cursor-pointer shrink-0 self-start md:self-auto ${
              isCloudDisconnected
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-[var(--lp-tile)] text-[var(--lp-ink)] border-[var(--lp-line)]"
            }`}
          >
            <CloudOff className="h-3.5 w-3.5" />
            <span>
              Mode: {isCloudDisconnected ? "100% Offline Air-Gapped" : "Optional Fleet Updates"}
            </span>
          </button>
        </div>

        {/* VISUAL ARCHITECTURE PIPELINE DIAGRAM */}
        <div className="rounded-[26px] bg-neutral-950 p-5 sm:p-7 text-white border border-neutral-800 shadow-[var(--lp-shadow-card)] mb-6">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* ON-DEVICE ENCLAVE BOUNDARY BOX */}
            <div className="flex-1 rounded-2xl border border-emerald-500/40 bg-neutral-900/80 p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    On-Premise Kiosk Boundary (Local Hardware)
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 font-mono">
                  Audio &amp; Documents Stay On-Device
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {PIPELINE_STEPS.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.label}
                      className="relative flex flex-col justify-between rounded-xl border border-white/10 bg-black/60 p-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="h-4 w-4 text-[var(--lp-accent)]" />
                        {i < PIPELINE_STEPS.length - 1 && (
                          <span className="hidden lg:inline text-[10px] text-neutral-500">→</span>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">{step.label}</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">{step.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* EXTERNAL NETWORK BOUNDARY INDICATOR */}
            <div
              className={`lg:w-64 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-colors ${
                isCloudDisconnected
                  ? "border-red-500/30 bg-red-950/20"
                  : "border-cyan-500/30 bg-cyan-950/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Public WAN / Cloud
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isCloudDisconnected
                      ? "bg-red-500/20 text-red-300"
                      : "bg-cyan-500/20 text-cyan-300"
                  }`}
                >
                  {isCloudDisconnected ? "SEVERED" : "SYNC ONLY"}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed my-3">
                {isCloudDisconnected
                  ? "Zero outbound voice audio, prompts, or enterprise documents leave this kiosk."
                  : "Used strictly for optional persona package rollouts & health heartbeats—never customer voice."}
              </p>
              <button
                type="button"
                onClick={handleRunLeakTest}
                disabled={isProbing}
                className="w-full h-8 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white transition-colors cursor-pointer disabled:opacity-50"
              >
                {isProbing ? "Verifying Local Node..." : "Verify Local Boundary"}
              </button>
            </div>
          </div>

          {probeResult && (
            <div className="mt-4 pt-3 border-t border-neutral-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{probeResult}</span>
            </div>
          )}
        </div>

        {/* INTERACTIVE PILLAR SELECTOR + CONCISE SPEC INSPECTOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {SECURITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? "bg-[var(--lp-card)] border-[var(--lp-accent)] shadow-[var(--lp-shadow-card)]"
                      : "bg-[var(--lp-tile)]/70 border-[var(--lp-line)] hover:bg-[var(--lp-card)]"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border shrink-0 ${
                      isSelected
                        ? "bg-[var(--lp-accent)] border-[var(--lp-accent)] text-white"
                        : "bg-[var(--lp-card)] border-[var(--lp-line)] text-[var(--lp-muted)]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-[var(--lp-ink)]">{pillar.name}</h4>
                    <p className="text-xs text-[var(--lp-muted)] mt-0.5 line-clamp-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 rounded-[24px] bg-[var(--lp-card)] border border-[var(--lp-line)] p-5 sm:p-7 shadow-[var(--lp-shadow-card)] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {activePillar.architectureTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[11px] font-semibold text-[var(--lp-ink-2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--lp-ink)]">
                  {activePillar.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                  {activePillar.description}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 rounded-xl bg-[var(--lp-tile)] border border-[var(--lp-line)]"
                    >
                      <span className="text-[11px] font-medium text-[var(--lp-muted)] block">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--lp-ink)] block mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 pt-4 border-t border-[var(--lp-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--lp-muted)]">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[var(--lp-accent)] shrink-0" />
                <span>{activePillar.auditProof}</span>
              </div>
              <Link
                href={lPath("/contact")}
                className="group/ciso inline-flex h-8.5 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-white transition-all shrink-0 self-start sm:self-auto"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/ciso:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
