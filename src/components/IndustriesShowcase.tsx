"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark,
  ShoppingBag,
  Building2,
  HeartPulse,
  Castle,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

const industries = [
  {
    number: "01",
    slug: "banking",
    title: "Banking & Financial Services",
    subtitle: "Branch AI Bankers & Concierge",
    description:
      "Transform branch experiences with 3D hologram AI bankers for customer onboarding, loan explanations, queue handling, account inquiries, and multilingual financial advisory – delivering secure, zero-wait banking journeys.",
    useCase: "Holographic Branch Banker & Queue Assistant",
    features: [
      "AI Customer Onboarding",
      "Multilingual Financial Advisory",
      "Account & Loan Explanations",
      "Interactive Queue Handling",
    ],
    icon: Landmark,
    accentColor: "text-[var(--lp-accent)]",
  },
  {
    number: "02",
    slug: "retail",
    title: "Retail & Luxury Stores",
    subtitle: "Holographic Brand Ambassadors",
    description:
      "Engage shoppers with holographic brand ambassadors, smart product explainers, interactive product discovery displays, and Virtual Try-On smart mirrors (Active R&D) designed to boost in-store footfall and checkout conversion rates.",
    useCase: "3D Holographic Shopping Guide & Smart Mirror",
    features: [
      "Virtual Try-On (Active R&D)",
      "Interactive Product Discovery",
      "AI Sales Ambassador",
      "Smart Promotional Displays",
    ],
    icon: ShoppingBag,
    accentColor: "text-[var(--lp-accent)]",
  },
  {
    number: "03",
    slug: "corporate",
    title: "Corporate & Defence Facilities",
    subtitle: "Digital Receptionists & Secure Triage",
    description:
      "Enhance front-desk operations with digital receptionists, visitor management holograms, employee onboarding guides, and air-gapped on-premise AI assistants for high-security facilities.",
    useCase: "Holographic Front-Desk Receptionist",
    features: [
      "Digital Reception",
      "Visitor Check-In & Badge Issue",
      "Employee HR Support",
      "100% Air-Gapped Security",
    ],
    icon: Building2,
    accentColor: "text-[var(--lp-ink)]",
  },
  {
    number: "04",
    slug: "healthcare",
    title: "Healthcare & Clinics",
    subtitle: "Patient Intake & Navigation AI",
    description:
      "Deploy hologram healthcare assistants for patient navigation, appointment scheduling, administrative intake assistance, and clinic guidance with a compassionate, human-like interface.",
    useCase: "Hospital Navigation & Patient Intake AI",
    features: [
      "Patient Guidance & Intake",
      "Hospital Complex Navigation",
      "Appointment Booking",
      "Multilingual Care Support",
    ],
    icon: HeartPulse,
    accentColor: "text-[#16a34a]",
  },
  {
    number: "05",
    slug: "tourism",
    title: "Tourism, Expos & Exhibitions",
    subtitle: "Hologram Tour Guides & Keynote Hosts",
    description:
      "Deliver unforgettable visitor experiences using 3D hologram tour guides, multilingual information kiosks, exhibition storytelling avatars, and interactive museum docents powered by digital humans.",
    useCase: "Multilingual Holographic Museum Docent",
    features: [
      "Holographic Tour Guides",
      "Multilingual Exhibition Kiosks",
      "Interactive Storytelling",
      "Wayfinding & Sightseeing",
    ],
    icon: Castle,
    accentColor: "text-[var(--lp-accent)]",
  },
  {
    number: "06",
    slug: "education",
    title: "Education & Corporate Training",
    subtitle: "3D Hologram Tutors & Instructors",
    description:
      "Deliver immersive learning experiences using AI Digital Human tutors, campus guides, virtual science lab assistants, and 3D hologram instructors for schools, universities, and corporate academies.",
    useCase: "Interactive 3D AI Tutor & Campus Docent",
    features: [
      "3D AI Tutors & Lecturers",
      "Interactive Learning Labs",
      "Campus Orientation",
      "Multilingual Education",
    ],
    icon: GraduationCap,
    accentColor: "text-[var(--lp-ink)]",
  },
];

export default function IndustriesShowcase() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  return (
    <section className="relative overflow-hidden bg-[var(--lp-bg)] px-4 py-20 sm:px-6 md:py-28 text-[var(--lp-ink)]">
      <div className="relative mx-auto max-w-7xl divide-y divide-[var(--lp-line)]">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <div key={industry.number} id={industry.slug} className="py-16 first:pt-0 last:pb-0 overflow-hidden">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* LEFT HEADER & ICON */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold tracking-wider text-[var(--lp-accent)]">
                      {industry.number}
                    </span>
                    <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--lp-muted)]">
                      {industry.subtitle}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs"
                    >
                      <Icon className={`w-6 h-6 ${industry.accentColor}`} strokeWidth={1.75} />
                    </motion.span>
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-ink)] sm:text-3xl lg:text-4xl">
                      {industry.title}
                    </h2>
                  </div>
                </motion.div>

                {/* RIGHT DESCRIPTION & FEATURES */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7"
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="relative overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 sm:p-8 shadow-[var(--lp-shadow-card)]"
                  >
                    {/* Primary Use Case Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,90,31,0.2)] bg-[rgba(255,90,31,0.08)] px-3.5 py-1 text-xs font-semibold text-[var(--lp-accent-ink)]">
                      <span>Deployment:</span>
                      <span>{industry.useCase}</span>
                    </div>

                    <p className="mt-4 text-base leading-7 text-[var(--lp-ink-2)]">
                      {industry.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {industry.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3.5 py-1.5 text-xs font-medium text-[var(--lp-ink)] shadow-2xs"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 pt-5 border-t border-[var(--lp-line)] flex items-center justify-between">
                      <Link
                        href={lPath(`/industries/${industry.slug}`)}
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors"
                      >
                        <span>Explore {industry.title} Architecture</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}