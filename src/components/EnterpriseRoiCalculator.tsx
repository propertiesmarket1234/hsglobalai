"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import {
  TrendingDown,
  DollarSign,
  Clock,
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Layers,
  FileSpreadsheet,
} from "lucide-react";

export default function EnterpriseRoiCalculator() {
  const [locations, setLocations] = useState<number>(8);
  const [shifts, setShifts] = useState<number>(3); // 1 = 8h, 2 = 16h, 3 = 24/7
  const [salary, setSalary] = useState<number>(55000); // Annual salary per staff member

  const sliderLocationsId = useId();
  const sliderSalaryId = useId();

  // Financial calculations
  // Traditional human staffing cost per year across all locations & shifts
  const annualHumanCost = locations * shifts * salary;

  // HS Global AI hardware + software operational cost (approx $14,800/yr per unit amortized + maintenance)
  const annualAiCost = locations * 14800;

  // Total net annual savings
  const annualSavings = Math.max(0, annualHumanCost - annualAiCost);
  const savingsPercent = Math.min(
    88,
    Math.max(45, Math.round((annualSavings / annualHumanCost) * 100))
  );

  // Payback period in months
  const paybackMonths = ((annualAiCost / annualSavings) * 12).toFixed(1);

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat("en-US").format(val);
  };

  // Queue capacity & hours
  const totalHoursCovered = formatNumber(locations * 8760);
  const estimatedInteractionsYear = formatNumber(locations * 420 * 365);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="roi-calculator"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-white border-b border-[var(--lp-line)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[var(--lp-muted)] uppercase">
              Enterprise Cost Analysis
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] leading-[1.12]">
            Calculate your exact{" "}
            <span className="text-[var(--lp-accent)]">operational savings</span>{" "}
            with digital humans.
          </h2>

          <p className="mt-3.5 sm:mt-4 text-sm sm:text-lg leading-relaxed text-[var(--lp-muted)]">
            Adjust the interactive drag bars below to model front-of-house
            staffing overhead against HS Global AI on-premise hardware deployments.
          </p>
        </div>

        {/* INTERACTIVE WORKBENCH: 2-COLUMN LAYOUT (NESTED IN SWIPECRAFT CONTAINER) */}
        <div className="rounded-[28px] bg-[var(--lp-tile)] p-2 sm:p-3.5 border border-[var(--lp-line)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
            {/* LEFT PANEL: INTERACTIVE DRAG BARS & CONTROLS (6 COLS) */}
            <div className="lg:col-span-6 rounded-2xl bg-[var(--lp-card)] border border-[var(--lp-line)] p-4 sm:p-6 lg:p-7 shadow-[var(--lp-shadow-card)]">
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[var(--lp-line)]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--lp-ink)]">
                    Deployment Parameters
                  </h3>
                  <p className="text-xs text-[var(--lp-muted)] mt-1">
                    Model your enterprise physical footprint
                  </p>
                </div>
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[var(--lp-accent)] shrink-0">
                  <Building2 className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1.8} />
                </div>
              </div>

            <div className="mt-8 space-y-8">
              {/* SLIDER 1: PHYSICAL STATIONS / KIOSKS */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor={sliderLocationsId}
                    className="text-sm font-semibold text-[var(--lp-ink)] flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-[var(--lp-muted)]" />
                    Physical Stations / Kiosks
                  </label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] text-xs sm:text-sm font-bold text-[var(--lp-ink)] font-mono shadow-xs">
                    {locations} {locations === 1 ? "Station" : "Stations"}
                  </span>
                </div>
                <input
                  id={sliderLocationsId}
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={locations}
                  onChange={(e) => setLocations(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[var(--lp-tile)] rounded-lg appearance-none cursor-pointer accent-[var(--lp-accent)]"
                />
                <div className="flex justify-between text-[11px] text-[var(--lp-muted)] mt-1.5 font-mono">
                  <span>1 single kiosk</span>
                  <span>25 regional desks</span>
                  <span>50+ nationwide</span>
                </div>
              </div>

              {/* SLIDER 2: AVERAGE ANNUAL HUMAN SALARY */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor={sliderSalaryId}
                    className="text-sm font-semibold text-[var(--lp-ink)] flex items-center gap-2"
                  >
                    <DollarSign className="w-4 h-4 text-[var(--lp-muted)]" />
                    Annual Salary per Staff Desk
                  </label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] text-xs sm:text-sm font-bold text-[var(--lp-ink)] font-mono shadow-xs">
                    {formatCurrency(salary)}/yr
                  </span>
                </div>
                <input
                  id={sliderSalaryId}
                  type="range"
                  min="30000"
                  max="110000"
                  step="2500"
                  value={salary}
                  onChange={(e) => setSalary(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[var(--lp-tile)] rounded-lg appearance-none cursor-pointer accent-[var(--lp-accent)]"
                />
                <div className="flex justify-between text-[11px] text-[var(--lp-muted)] mt-1.5 font-mono">
                  <span>$30,000 (Entry)</span>
                  <span>$70,000 (Concierge)</span>
                  <span>$110,000+ (Specialist)</span>
                </div>
              </div>

              {/* TOGGLE: COVERAGE MODEL (SHIFTS) - SWIPECRAFT SEGMENTED CONTROL */}
              <div>
                <label className="text-sm font-semibold text-[var(--lp-ink)] flex items-center gap-2 mb-2.5">
                  <Clock className="w-4 h-4 text-[var(--lp-muted)]" />
                  Operating Coverage Window
                </label>
                <div className="inline-flex w-full p-1 rounded-full bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs">
                  <button
                    type="button"
                    onClick={() => setShifts(1)}
                    className={`flex-1 h-8 px-3 rounded-full text-xs font-semibold transition-all duration-150 inline-flex items-center justify-center active:scale-[0.98] cursor-pointer ${
                      shifts === 1
                        ? "bg-white text-[var(--lp-ink)] shadow-xs"
                        : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                    }`}
                  >
                    8h (1 Shift)
                  </button>
                  <button
                    type="button"
                    onClick={() => setShifts(2)}
                    className={`flex-1 h-8 px-3 rounded-full text-xs font-semibold transition-all duration-150 inline-flex items-center justify-center active:scale-[0.98] cursor-pointer ${
                      shifts === 2
                        ? "bg-white text-[var(--lp-ink)] shadow-xs"
                        : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                    }`}
                  >
                    16h (2 Shifts)
                  </button>
                  <button
                    type="button"
                    onClick={() => setShifts(3)}
                    className={`flex-1 h-8 px-3 rounded-full text-xs font-semibold transition-all duration-150 inline-flex items-center justify-center active:scale-[0.98] cursor-pointer ${
                      shifts === 3
                        ? "bg-white text-[var(--lp-ink)] shadow-xs"
                        : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                    }`}
                  >
                    24/7 (3 Shifts)
                  </button>
                </div>
                <p className="text-[11px] text-[var(--lp-muted)] mt-2">
                  {shifts === 3
                    ? "Full 24/7/365 coverage requires 3 continuous 8-hour staff rotations."
                    : shifts === 2
                    ? "Covers extended retail hours with morning and evening rotations."
                    : "Standard single business day shift."}
                </p>
              </div>
            </div>

            {/* ENTERPRISE GUARANTEES */}
            <div className="mt-8 pt-6 border-t border-[var(--lp-line)] grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[var(--lp-muted)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--lp-accent)] shrink-0" />
                <span>Zero overtime or attrition</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--lp-accent)] shrink-0" />
                <span>Air-gapped on-premise hardware</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: DYNAMIC LIVE FINANCIAL SUMMARY (6 COLS) */}
          <div className="lg:col-span-6 rounded-2xl bg-[var(--lp-card)] border border-[var(--lp-line)] p-4 sm:p-6 lg:p-7 shadow-[var(--lp-shadow-card)] flex flex-col justify-between">
            <div>
              {/* PRIMARY SAVINGS CALLOUT */}
              <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
                    Projected Net Annual Savings
                  </span>
                  <div className="mt-2 flex flex-wrap items-baseline gap-2.5 sm:gap-3">
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-ink)] font-mono">
                      {formatCurrency(annualSavings)}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 sm:py-1 rounded-full bg-[rgba(22,163,74,0.1)] border border-[rgba(22,163,74,0.2)] text-[11px] sm:text-xs font-bold text-[#16a34a]">
                      -{savingsPercent}% Overhead
                    </span>
                  </div>
                </div>
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[rgba(255,90,31,0.08)] border border-[rgba(255,90,31,0.18)] text-[var(--lp-accent)] shrink-0 self-start">
                  <TrendingDown className="w-5 sm:w-6 h-5 sm:h-6" strokeWidth={1.8} />
                </div>
              </div>

              {/* VISUAL SPENDING COMPARISON BARS */}
              <div className="mt-6 sm:mt-8 space-y-4 p-4 sm:p-5 rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)]">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--lp-muted)] mb-1.5">
                    <span>Traditional Manual Staffing Expense</span>
                    <span className="text-[var(--lp-ink)] font-mono">
                      {formatCurrency(annualHumanCost)}/yr
                    </span>
                  </div>
                  <div className="h-3 w-full bg-[var(--lp-card)] rounded-full overflow-hidden border border-[var(--lp-line)]">
                    <div className="h-full bg-neutral-400 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--lp-muted)] mb-1.5">
                    <span className="text-[var(--lp-ink)] font-bold">
                      HS Global AI Enterprise Solution
                    </span>
                    <span className="text-[var(--lp-accent)] font-mono font-bold">
                      {formatCurrency(annualAiCost)}/yr
                    </span>
                  </div>
                  <div className="h-3 w-full bg-[var(--lp-card)] rounded-full overflow-hidden border border-[var(--lp-line)]">
                    <motion.div
                      className="h-full bg-[var(--lp-accent)] rounded-full"
                      animate={{
                        width: `${Math.max(10, Math.min(100, (annualAiCost / annualHumanCost) * 100))}%`,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  </div>
                </div>
              </div>

              {/* 3 SECONDARY OPERATIONAL METRICS */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-3 sm:p-4 text-center">
                  <span className="text-[11px] font-medium text-[var(--lp-muted)] block">
                    Break-Even
                  </span>
                  <span className="mt-1 text-base sm:text-lg font-bold text-[var(--lp-ink)] font-mono block">
                    {paybackMonths} mo
                  </span>
                  <span className="text-[10px] text-[var(--lp-muted)] block mt-0.5">
                    CapEx Payback
                  </span>
                </div>

                <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-3 sm:p-4 text-center">
                  <span className="text-[11px] font-medium text-[var(--lp-muted)] block">
                    Service Hours
                  </span>
                  <span className="mt-1 text-base sm:text-lg font-bold text-[var(--lp-ink)] font-mono block">
                    {totalHoursCovered}
                  </span>
                  <span className="text-[10px] text-[var(--lp-muted)] block mt-0.5">
                    Hours / Year
                  </span>
                </div>

                <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-3 sm:p-4 text-center">
                  <span className="text-[11px] font-medium text-[var(--lp-muted)] block">
                    Guest Capacity
                  </span>
                  <span className="mt-1 text-base sm:text-lg font-bold text-[var(--lp-ink)] font-mono block">
                    {estimatedInteractionsYear}
                  </span>
                  <span className="text-[10px] text-[var(--lp-muted)] block mt-0.5">
                    Annual Visits
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="mt-8 pt-6 border-t border-[var(--lp-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[var(--lp-muted)] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
                <span>Audited enterprise hardware pricing</span>
              </div>
              <a
                href="#contact"
                className="group/roi w-full sm:w-auto inline-flex h-10 items-center justify-center gap-2 px-5 rounded-full bg-[var(--lp-ink)] text-white text-xs sm:text-[13px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] hover:bg-[#2A2A2F] active:scale-[0.98] transition-all duration-150 cursor-pointer"
              >
                <span>Request Custom ROI Audit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/roi:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
