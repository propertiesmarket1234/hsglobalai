"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  WifiOff,
  Cpu,
  Database,
  KeyRound,
  FileCheck2,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Server,
  Zap,
} from "lucide-react";

interface SecurityPillar {
  id: string;
  name: string;
  icon: typeof ShieldCheck;
  subtitle: string;
  description: string;
  complianceTags: string[];
  specs: { label: string; value: string }[];
  auditProof: string;
}

const SECURITY_PILLARS: SecurityPillar[] = [
  {
    id: "airgap",
    name: "100% Air-Gapped Local Inference",
    icon: WifiOff,
    subtitle: "Physical hardware isolation with zero cloud communication",
    description:
      "All neural speech synthesis, 3D avatar rendering, and large language model inference run directly on physical on-premise hardware (NVIDIA RTX / Neural Processing Units). Not a single audio frame or text token is ever transmitted over external public networks.",
    complianceTags: ["Zero Outbound Telemetry", "No Internet Required", "LAN Only Option"],
    specs: [
      { label: "Outbound Network Ports", value: "All Blocked (0 open WAN ports)" },
      { label: "Inference Latency", value: "<180ms Local Hardware Bus" },
      { label: "Network Fault Tolerance", value: "100% Uptime During Fiber Outages" },
      { label: "Deployment Options", value: "Fully Disconnected Physical Kiosk" },
    ],
    auditProof: "Physical network cable can be unplugged with zero interruption to avatar dialogue.",
  },
  {
    id: "pii",
    name: "Ephemeral PII In-Memory Sanitization",
    icon: Lock,
    subtitle: "Zero persistent storage of biometric faces or voice audio",
    description:
      "Visitor audio captures and facial gaze landmarks exist exclusively in volatile high-speed RAM during real-time turn-taking. The moment a customer steps away from the display sensor array, the buffer is cryptographically zeroed out. No conversation transcripts are written to persistent disk storage.",
    complianceTags: ["GDPR Article 9 Biometrics", "HIPAA Healthcare Safe", "SOC 2 Type II Ready"],
    specs: [
      { label: "Disk Persistence", value: "0 Bytes (RAM-Only Stream)" },
      { label: "Memory Flush Latency", value: "<15ms Upon Session End" },
      { label: "Biometric Retention", value: "Zero Facial Templates Stored" },
      { label: "Data Subject Rights", value: "Automated Ephemeral Deletion" },
    ],
    auditProof: "Meets strict medical patient confidentiality and confidential defence screening mandates.",
  },
  {
    id: "enclave",
    name: "Hardware Enclave & Secure Boot",
    icon: Cpu,
    subtitle: "Tamper-resistant physical kiosk architecture",
    description:
      "Every HS Global AI display terminal features cryptographically signed firmware, secure boot enforcement, and OS lock-down. USB ports are locked at the kernel level to prevent unauthorized device injection, and physical chassis sensors detect unauthorized enclosure access.",
    complianceTags: ["Kernel USB Lockout", "Signed Bootloader", "Chassis Tamper Switch"],
    specs: [
      { label: "Boot Verification", value: "Hardware TPM 2.0 Attestation" },
      { label: "Chassis Protection", value: "Physical Tamper Detection Microswitch" },
      { label: "Operating System", value: "Hardened Read-Only Embedded Linux" },
      { label: "Access Privilege", value: "Cryptographic Hardware Key Only" },
    ],
    auditProof: "Immune to physical kiosk hacking, drive extraction, or peripheral payload attacks.",
  },
  {
    id: "governance",
    name: "Enterprise Governance & Audit Ledger",
    icon: KeyRound,
    subtitle: "Centralized fleet configuration with immutable telemetry",
    description:
      "Multi-location enterprises can push catalog updates and brand guardrails across 100+ kiosks via private enterprise VPNs. Audit logs record hardware health, interaction durations, and system diagnostics without capturing sensitive customer speech or identities.",
    complianceTags: ["Private Enterprise VPN", "Role-Based Access (RBAC)", "Immutable Audit Trail"],
    specs: [
      { label: "Fleet Provisioning", value: "Encrypted Enterprise Configuration Push" },
      { label: "Role Privileges", value: "Admin, Store Manager, Auditor Roles" },
      { label: "Health Monitoring", value: "Non-PII Telemetry (Thermal, FPS, Uptime)" },
      { label: "Key Management", value: "Customer-Managed Master Encryption Keys" },
    ],
    auditProof: "Comprehensive architectural sign-off for enterprise cybersecurity audits.",
  },
];

export default function EnterpriseSecurityCommand() {
  const [activePillarId, setActivePillarId] = useState<string>("airgap");
  const [isSimulatingLeakTest, setIsSimulatingLeakTest] = useState<boolean>(false);
  const [leakTestResult, setLeakTestResult] = useState<string | null>(null);
  const [isCloudDisconnected, setIsCloudDisconnected] = useState<boolean>(true);

  const activePillar =
    SECURITY_PILLARS.find((p) => p.id === activePillarId) || SECURITY_PILLARS[0];

  const handleRunLeakTest = () => {
    setIsSimulatingLeakTest(true);
    setLeakTestResult(null);

    setTimeout(() => {
      setIsSimulatingLeakTest(false);
      setLeakTestResult("PASS: 0.00 KB Leaked across WAN. Zero external DNS handshakes.");
    }, 1200);
  };

  return (
    <section
      id="enterprise-security"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-[var(--lp-bg)] border-b border-[var(--lp-line)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              Zero-Trust Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            Enterprise-grade security{" "}
            <span className="text-[var(--lp-accent)]">engineered for physical facilities.</span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
            Explore our interactive security command center. From 100% air-gapped on-premise
            neural engines to ephemeral PII sanitization, your corporate and patient data never leaves your building.
          </p>
        </div>

        {/* INTERACTIVE SECURITY COMMAND CENTER WORKBENCH */}
        <div className="rounded-[28px] bg-[var(--lp-tile)] p-2 sm:p-3.5 border border-[var(--lp-line)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
            {/* LEFT COLUMN: PILLAR SELECTION TABS & LIVE INTERNET DISCONNECT SIMULATOR (5 COLS) */}
            <div className="lg:col-span-5 space-y-4">
              {/* PILLAR BUTTON LIST */}
              <div className="space-y-3">
                {SECURITY_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  const isSelected = pillar.id === activePillarId;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActivePillarId(pillar.id)}
                      className={`w-full text-left p-3.5 sm:p-5 rounded-2xl border transition-all duration-150 flex items-start gap-3 sm:gap-4 cursor-pointer active:scale-[0.99] ${
                        isSelected
                          ? "bg-[var(--lp-card)] border-[var(--lp-accent)] shadow-[var(--lp-shadow-card)]"
                          : "bg-[var(--lp-card)]/70 border-[var(--lp-line)] hover:bg-[var(--lp-card)]"
                      }`}
                    >
                    <div
                      className={`flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl border shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[var(--lp-accent)] border-[var(--lp-accent)] text-white"
                          : "bg-[var(--lp-card)] border-[var(--lp-line)] text-[var(--lp-muted)]"
                      }`}
                    >
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`text-sm font-bold tracking-tight ${
                            isSelected ? "text-[var(--lp-ink)]" : "text-[var(--lp-muted)]"
                          }`}
                        >
                          {pillar.name}
                        </h4>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-[var(--lp-muted)] mt-1 leading-relaxed">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* LIVE SIMULATOR: INTERNET OUTAGE / AIR-GAP TEST */}
            <div className="mt-6 rounded-2xl bg-[var(--lp-card)] border border-[var(--lp-line)] p-4 sm:p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-[var(--lp-accent)] shrink-0" />
                  <span className="text-xs font-bold text-[var(--lp-ink)]">
                    Simulate Cloud Internet Outage
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCloudDisconnected(!isCloudDisconnected)}
                  className={`inline-flex h-7 items-center justify-center px-3 rounded-full text-[11px] font-bold tracking-wider transition-all duration-150 self-start sm:self-auto cursor-pointer active:scale-[0.98] shadow-2xs ${
                    isCloudDisconnected
                      ? "bg-[rgba(22,163,74,0.12)] text-[#16a34a] border border-[rgba(22,163,74,0.25)]"
                      : "bg-[var(--lp-tile)] text-[var(--lp-muted)] border border-[var(--lp-line)]"
                  }`}
                >
                  {isCloudDisconnected ? "WAN DISCONNECTED" : "WAN CONNECTED"}
                </button>
              </div>

              <div className="mt-3 text-xs leading-relaxed text-[var(--lp-muted)]">
                {isCloudDisconnected ? (
                  <div className="flex items-start gap-2 text-[#16a34a]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      Air-Gapped Local Inference Active. Avatar is conversing normally at 180ms latency on private edge hardware.
                    </span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 text-neutral-500">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      External internet re-enabled. Toggle to disconnect WAN and verify offline autonomy.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACTIVE PILLAR DEEP-DIVE & PACKET INSPECTION TERMINAL (7 COLS) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-[22px] bg-[var(--lp-card)] border border-[var(--lp-line)] p-4 sm:p-8 lg:p-10 shadow-[var(--lp-shadow-card)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {/* PILLAR BADGE & TITLE */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {activePillar.complianceTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[11px] font-semibold text-[var(--lp-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--lp-ink)] mt-2">
                  {activePillar.name}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[var(--lp-muted)]">
                  {activePillar.description}
                </p>

                {/* SPECIFICATION MATRIX */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                  {activePillar.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 sm:p-4 rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)]"
                    >
                      <span className="text-[11px] font-medium text-[var(--lp-muted)] block">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[var(--lp-ink)] block mt-1">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* INTERACTIVE PACKET INSPECTION TEST */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl border border-[var(--lp-line)] bg-neutral-900 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-xs font-semibold text-neutral-300">
                        Hardware Packet Telemetry Probe
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRunLeakTest}
                      disabled={isSimulatingLeakTest}
                      className="inline-flex h-8 items-center justify-center px-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white transition-all duration-150 active:scale-[0.98] self-start sm:self-auto cursor-pointer shadow-xs border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSimulatingLeakTest ? "Scanning ports..." : "Run Packet Probe"}
                    </button>
                  </div>

                  <div className="mt-3 text-xs text-neutral-400 space-y-1">
                    <div>[PROBE:ETH0] Scanning physical interface ports 80/443/8080...</div>
                    <div>[SOCKETS] Active external WAN connections: 0 established</div>
                    {leakTestResult && (
                      <div className="text-emerald-400 font-semibold pt-1">
                        &gt; {leakTestResult}
                      </div>
                    )}
                  </div>
                </div>

                {/* AUDIT PROOF CALLOUT */}
                <div className="mt-6 pt-6 border-t border-[var(--lp-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--lp-muted)]">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-[var(--lp-accent)] shrink-0" />
                    <span>{activePillar.auditProof}</span>
                  </div>
                  <a
                    href="#contact"
                    className="group/ciso inline-flex h-8 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-white text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-[var(--lp-tile)] transition-all duration-150 shadow-2xs active:scale-[0.98] cursor-pointer shrink-0"
                  >
                    <span>Request CISO Whitepaper</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/ciso:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
