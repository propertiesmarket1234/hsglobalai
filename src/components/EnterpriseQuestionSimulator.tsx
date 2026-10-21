"use client";

import { useState } from "react";
import {
  ShoppingBag,
  HeartPulse,
  Shield,
  Landmark,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  Volume2,
  Clock,
  Send,
  MessageSquare,
  Bot,
  User,
} from "lucide-react";

interface ScenarioQuestion {
  question: string;
  response: string;
  latencyMs: number;
  pipelineSteps: string[];
  businessImpact: string;
  actionTaken: string;
}

interface DomainScenario {
  id: string;
  domainName: string;
  icon: typeof ShoppingBag;
  personaTitle: string;
  personaAvatar: string;
  questions: ScenarioQuestion[];
}

const DOMAIN_SCENARIOS: DomainScenario[] = [
  {
    id: "retail",
    domainName: "Retail & Luxury",
    icon: ShoppingBag,
    personaTitle: "Elena · Luxury Store Concierge",
    personaAvatar: "Elena",
    questions: [
      {
        question: "Do you have the tailored navy cashmere blazer in European size 50 in backroom stock?",
        response:
          "Yes, we have 2 units of the Navy Cashmere Blazer in European size 50 located on Backroom Shelf B-14. I have placed a 15-minute hold on one for you, and Associate Marcus has been notified to bring it directly to Fitting Suite 3.",
        latencyMs: 164,
        pipelineSteps: [
          "Local ERP Inventory Query (18ms)",
          "Fit Silhouette Size Mapping (22ms)",
          "Fitting Room Hold Token Issued",
        ],
        businessImpact: "Eliminates staff inventory search time and prevents lost walk-out sales.",
        actionTaken: "Fitting Room Hold & Associate Notification",
      },
      {
        question: "I am looking for an anniversary gift under $1,200 with bespoke packaging.",
        response:
          "I recommend our Signature Italian Silk Scarf paired with the Hand-Poured Amber Crystal Candle set ($980 total). It qualifies for complimentary hand-embossed calligraphy gift wrapping, ready in 8 minutes at Counter 2.",
        latencyMs: 182,
        pipelineSteps: [
          "Catalog Pricing & Gift Margin Filter (24ms)",
          "Gift-Wrap Fulfillment Queue Assigned",
        ],
        businessImpact: "3.2x higher cross-sell basket value via personalized visual guidance.",
        actionTaken: "Cross-Sell Basket Recommended & Gift-Wrap Dispatched",
      },
      {
        question: "What is your global exchange policy for international boutique purchases?",
        response:
          "All unworn garments with original security tags can be exchanged or refunded across our 48 global flagship stores within 30 days. You can tap your digital passport on this kiosk to initiate the VAT tax-refund voucher.",
        latencyMs: 155,
        pipelineSteps: [
          "Multilingual Policy Retrieval (12ms)",
          "Global Store Network Database Lookup",
        ],
        businessImpact: "Zero front-desk friction for international high-net-worth shoppers.",
        actionTaken: "Instant VAT Return Voucher Initiated",
      },
    ],
  },
  {
    id: "healthcare",
    domainName: "Hospitals & Clinics",
    icon: HeartPulse,
    personaTitle: "Sophia · Patient Intake & Triage Guide",
    personaAvatar: "Sophia",
    questions: [
      {
        question: "My mother has sudden acute chest pressure and dizziness. Where should we go right now?",
        response:
          "Please stay right here. I am triggering an immediate Priority Code Yellow alert for our Emergency Triage team. Orderly David is en route to this terminal with a wheelchair, and Dr. Lin in Urgent Bay 2 has been paged.",
        latencyMs: 142,
        pipelineSteps: [
          "Emergency Clinical Keyword Detection (8ms)",
          "Priority Code Yellow Nurse Call Activated",
          "Automated Wheelchair Dispatcher Alerted",
        ],
        businessImpact: "Zero-latency patient escalation during critical cardiovascular events.",
        actionTaken: "Emergency Triage Escalated & Staff Paged",
      },
      {
        question: "I have an MRI scan scheduled with Dr. Vance at 11:15 AM. How do I pre-check in?",
        response:
          "Welcome, Mr. Harrison. You are confirmed for MRI Suite 4 at 11:15 AM. Please scan the barcode on your appointment card below to verify your metal-implant questionnaire and dispense your secure locker key card.",
        latencyMs: 175,
        pipelineSteps: [
          "Hospital EHR Intake Record Synced (26ms)",
          "Pre-MRI Metal Safety Checklist Verified",
          "Digital Locker Pass Token Issued",
        ],
        businessImpact: "Reduces patient waiting room congestion by 40% while preserving nurse focus.",
        actionTaken: "Pre-Check-in Validated & Locker Card Dispensed",
      },
      {
        question: "Can you explain pre-procedure fasting guidelines in Mandarin for my grandmother?",
        response:
          "尊敬的家属您好。手术前8小时内请勿进食任何固体食物；手术前2小时内可饮用少量清水。若需降压药等常规药物，请在护士指导下用少量清水吞服。",
        latencyMs: 168,
        pipelineSteps: [
          "Native Dialect Accent Modulation (34ms)",
          "Surgical Intake Fasting Protocol Loaded",
        ],
        businessImpact: "Eliminates medical procedure cancellations caused by language barriers.",
        actionTaken: "Multilingual Clinical Fasting Guidance Delivered",
      },
    ],
  },
  {
    id: "defence",
    domainName: "Defence & Government",
    icon: Shield,
    personaTitle: "Commander Marcus · Air-Gapped Briefing Officer",
    personaAvatar: "Marcus",
    questions: [
      {
        question: "Foreign military delegation arrival for technical briefing. Request temporary area credentials.",
        response:
          "Identity verification initiated on air-gapped terminal. Cross-checking biometric manifest against offline cryptographic authorization ledger. Biometric clearance confirmed: Security clearance Level 3. Printing encrypted access token with zero external network connectivity.",
        latencyMs: 135,
        pipelineSteps: [
          "Offline Cryptographic Hash Verification (14ms)",
          "Physical Badge Access Token Generated",
          "Zero Outbound WAN Telemetry Verified",
        ],
        businessImpact: "Strict physical security without reliance on public cloud infrastructure.",
        actionTaken: "Air-Gapped Encrypted Access Pass Issued",
      },
      {
        question: "Run the emergency facility power isolation checklist for Substation Delta.",
        response:
          "Emergency Power Isolation Protocol Alpha-9 loaded from local encrypted SSD. Step 1: Disengage main bus-tie circuit breaker on Cabinet 4. Step 2: Confirm auxiliary diesel generator backup telemetry is synchronized at 60 Hz.",
        latencyMs: 148,
        pipelineSteps: [
          "Local Secure SOP Document RAG Ingestion (16ms)",
          "Step-by-Step Operator Verification Prompts",
        ],
        businessImpact: "Reliable mission-critical continuity during grid disruption or cyber events.",
        actionTaken: "Offline Emergency Facility Checklist Displayed",
      },
    ],
  },
  {
    id: "banking",
    domainName: "Private Wealth Banking",
    icon: Landmark,
    personaTitle: "Julian · Corporate Treasury Concierge",
    personaAvatar: "Julian",
    questions: [
      {
        question: "I need to execute a cross-border corporate treasury liquidity transfer exceeding $2.5M.",
        response:
          "Good morning. For institutional transfers of this volume, dual-custody authorization is required. I have verified your corporate signatory token on our on-premise HSM, and Senior Relationship Director Evelyn has been alerted in Private Suite 6.",
        latencyMs: 158,
        pipelineSteps: [
          "Hardware Security Module (HSM) Token Verified",
          "Anti-Phishing Signatory Policy Enforced",
          "Private Boardroom Escort Alert Sent",
        ],
        businessImpact: "VIP institutional clients received with zero lobby waiting friction.",
        actionTaken: "Executive Suite Reserved & Director Notified",
      },
      {
        question: "Summarize our audited balance sheet debt ratios against Q3 covenant thresholds.",
        response:
          "According to your audited Q3 financial report, the Debt-to-Equity ratio stands at 1.42x against the maximum covenant threshold of 2.10x, leaving a safety buffer of $14.8M. Interest coverage ratio is currently 4.8x.",
        latencyMs: 172,
        pipelineSteps: [
          "Local Private Financial RAG Analysis (28ms)",
          "Covenant Threshold Bounds Calculation",
        ],
        businessImpact: "Confidential corporate finance data analyzed 100% on-premise with zero leakage.",
        actionTaken: "Audited Financial Ratios Summarized",
      },
    ],
  },
];

export default function EnterpriseQuestionSimulator() {
  const [activeDomainId, setActiveDomainId] = useState<string>("retail");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [customQuestionInput, setCustomQuestionInput] = useState<string>("");
  const [isSimulatingTyping, setIsSimulatingTyping] = useState<boolean>(false);

  const activeDomain =
    DOMAIN_SCENARIOS.find((d) => d.id === activeDomainId) || DOMAIN_SCENARIOS[0];
  const activeScenario = activeDomain.questions[activeQuestionIndex] || activeDomain.questions[0];

  const handleSelectQuestion = (idx: number) => {
    setIsSimulatingTyping(true);
    setActiveQuestionIndex(idx);
    setTimeout(() => {
      setIsSimulatingTyping(false);
    }, 280);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestionInput.trim()) return;
    setIsSimulatingTyping(true);
    setTimeout(() => {
      setIsSimulatingTyping(false);
      setCustomQuestionInput("");
    }, 400);
  };

  return (
    <section
      id="enterprise-simulator"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-white border-b border-[var(--lp-line)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              Interactive Workflow Terminal
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            See how our digital humans{" "}
            <span className="text-[var(--lp-accent)]">resolve complex domain inquiries.</span>
          </h2>

          <p className="mt-3.5 sm:mt-4 text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
            Select an enterprise industry below and test real-world visitor questions. Watch how
            our on-premise AI processes queries, accesses local inventory or medical records, and delivers empathetic vocal answers in sub-200ms.
          </p>
        </div>

        {/* SWIPECRAFT UNIFIED SEGMENTED CONTROL BAR */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center p-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs max-w-full overflow-x-auto scrollbar-none">
            {DOMAIN_SCENARIOS.map((dom) => {
              const Icon = dom.icon;
              const isSelected = dom.id === activeDomainId;
              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => {
                    setActiveDomainId(dom.id);
                    setActiveQuestionIndex(0);
                  }}
                  className={`inline-flex h-8 items-center gap-2 px-4 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                    isSelected
                      ? "bg-white text-[var(--lp-ink)] shadow-xs"
                      : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                      isSelected ? "text-[var(--lp-accent)]" : "text-[var(--lp-muted)]"
                    }`}
                    strokeWidth={1.8}
                  />
                  <span>{dom.domainName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-COLUMN INTERACTIVE SIMULATOR WORKBENCH (NESTED IN SWIPECRAFT CONTAINER) */}
        <div className="rounded-[28px] bg-[var(--lp-tile)] p-2 sm:p-3.5 border border-[var(--lp-line)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
            {/* LEFT COLUMN: ENTERPRISE QUESTIONS LIST & LIVE QUERY INPUT (5 COLS) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl bg-[var(--lp-card)] border border-[var(--lp-line)] p-4 sm:p-6 shadow-[var(--lp-shadow-card)]">
                <span className="text-xs font-semibold text-[var(--lp-muted)] uppercase tracking-wider block mb-3.5">
                  Select Enterprise Scenario Question
                </span>

                <div className="space-y-2">
                  {activeDomain.questions.map((q, idx) => {
                    const isSelected = idx === activeQuestionIndex;
                    return (
                      <button
                        key={q.question}
                        type="button"
                        onClick={() => handleSelectQuestion(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all duration-150 leading-relaxed cursor-pointer active:scale-[0.99] ${
                          isSelected
                            ? "bg-[var(--lp-tile)] border-[var(--lp-accent)] text-[var(--lp-ink)] font-semibold shadow-xs"
                            : "bg-[var(--lp-card)] border-[var(--lp-line)] text-[var(--lp-muted)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <MessageSquare
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                              isSelected ? "text-[var(--lp-accent)]" : "text-[var(--lp-muted)]"
                            }`}
                          />
                          <span>&ldquo;{q.question}&rdquo;</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* CUSTOM QUESTION PROMPT FORM */}
                <form onSubmit={handleCustomSubmit} className="mt-4 pt-4 border-t border-[var(--lp-line)]">
                  <span className="text-[11px] font-semibold text-[var(--lp-muted)] block mb-2">
                    Or test your own domain question:
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={customQuestionInput}
                      onChange={(e) => setCustomQuestionInput(e.target.value)}
                      placeholder="Type a custom inquiry..."
                      className="flex-1 h-10 px-4 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] text-xs text-[var(--lp-ink)] placeholder-[var(--lp-muted)] focus:outline-none focus:border-[var(--lp-accent)] transition-colors"
                    />
                    <button
                      type="submit"
                      aria-label="Send query"
                      className="inline-flex h-10 items-center justify-center px-4 rounded-full bg-[var(--lp-ink)] text-white text-xs font-semibold hover:bg-[#2A2A2F] active:scale-[0.98] transition-all duration-150 shrink-0 cursor-pointer shadow-xs gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>

              {/* DOMAIN BUSINESS IMPACT METRIC BADGE */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--lp-card)] border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--lp-ink)] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span>Enterprise ROI Impact</span>
                </div>
                <p className="text-xs text-[var(--lp-muted)] leading-relaxed">
                  {activeScenario.businessImpact}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: LIVE DIGITAL HUMAN REASONING & AUDIT TERMINAL (7 COLS) */}
            <div className="lg:col-span-7 rounded-2xl bg-[var(--lp-card)] border border-[var(--lp-line)] p-4 sm:p-6 lg:p-7 shadow-[var(--lp-shadow-card)]">
              {/* AVATAR IDENTITY HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 sm:pb-5 border-b border-[var(--lp-line)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[var(--lp-accent)] shrink-0">
                    <Bot className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--lp-ink)]">
                      {activeDomain.personaTitle}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span className="text-[11px] font-medium text-[var(--lp-muted)]">
                        Edge Model Loaded · 100% Offline
                      </span>
                    </div>
                  </div>
                </div>

                {/* LATENCY TELEMETRY PILL */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(22,163,74,0.08)] border border-[rgba(22,163,74,0.2)] text-xs font-semibold text-[#16a34a] self-start sm:self-auto">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{activeScenario.latencyMs}ms voice response</span>
                </div>
              </div>

              {/* LIVE CONVERSATION STREAM */}
              <div className="mt-5 sm:mt-6 space-y-4">
                {/* USER INQUIRY BUBBLE */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[var(--lp-muted)] shrink-0 mt-0.5">
                    <User className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </div>
                  <div className="flex-1 p-3.5 sm:p-4 rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)] text-xs sm:text-sm font-medium text-[var(--lp-ink)] leading-relaxed">
                    {customQuestionInput.trim() ? customQuestionInput : activeScenario.question}
                  </div>
                </div>

                {/* AVATAR RESPONSE BUBBLE */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-[var(--lp-accent)] text-white shrink-0 mt-0.5">
                    <Bot className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </div>
                  <div className="flex-1 p-4 sm:p-5 rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs text-xs sm:text-sm leading-relaxed text-[var(--lp-ink)]">
                    {isSimulatingTyping ? (
                      <div className="flex items-center gap-1.5 py-1">
                        <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-bounce [animation-delay:0.4s]" />
                      </div>
                    ) : (
                      <div>
                        <p>{activeScenario.response}</p>

                        {/* AUDIO WAVEFORM INDICATOR */}
                        <div className="mt-3.5 pt-3 border-t border-[var(--lp-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[var(--lp-muted)]">
                          <div className="flex items-center gap-2">
                            <Volume2 className="w-3.5 h-3.5 text-[var(--lp-accent)] shrink-0" />
                            <span className="text-[11px] font-medium">Synthesizing 48kHz voice</span>
                          </div>
                          <span className="text-[11px] font-semibold text-[var(--lp-ink)]">
                            Action: {activeScenario.actionTaken}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ACTION PIPELINE AUDIT TRAIL */}
              <div className="mt-6 pt-5 border-t border-[var(--lp-line)]">
                <span className="text-[11px] font-semibold text-[var(--lp-muted)] uppercase tracking-wider block mb-2.5">
                  Real-Time Local Execution Pipeline
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeScenario.pipelineSteps.map((step, sIdx) => (
                    <div
                      key={step}
                      className="p-2.5 rounded-xl bg-[var(--lp-tile)] border border-[var(--lp-line)] text-xs font-medium text-[var(--lp-ink)] flex items-center gap-2"
                    >
                      <span className="w-4 h-4 rounded-full bg-[var(--lp-card)] border border-[var(--lp-line)] flex items-center justify-center text-[10px] font-bold text-[var(--lp-accent)] shrink-0">
                        {sIdx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CALL TO ACTION LINK */}
              <div className="mt-6 pt-5 border-t border-[var(--lp-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--lp-muted)]">
                <span>Need a custom workflow integration?</span>
                <a
                  href="#contact"
                  className="group/sim-cta inline-flex h-8 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-white text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] hover:bg-[var(--lp-tile)] transition-all duration-150 shadow-2xs active:scale-[0.98] shrink-0 cursor-pointer"
                >
                  <span>Deploy Domain Persona Pilot</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/sim-cta:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
