"use client";

import { motion } from "framer-motion";

const industries = [
  {
    number: "01",
    title: "Banking & Financial Services",
    subtitle: "Branch AI Bankers & Concierge",
    description:
      "Transform branch experiences with 3D hologram AI bankers for customer onboarding, loan explanations, queue handling, account inquiries, and multilingual financial advisory – delivering secure, interactive banking journeys.",
    useCase: "Holographic Branch Banker & Queue Assistant",
    features: [
      "AI Customer Onboarding",
      "Multilingual Financial Advisory",
      "Account & Loan Explanations",
      "Interactive Queue Handling",
    ],
    icon: "🏦",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "02",
    title: "Retail & Advertising",
    subtitle: "Holographic Brand Ambassadors",
    description:
      "Engage shoppers with holographic brand ambassadors, smart product explainers, Virtual Try-On mirrors, and interactive promotional displays designed to boost in-store footfall and checkout conversion rates.",
    useCase: "3D Holographic Shopping Guide & Smart Mirror",
    features: [
      "Virtual Try-On",
      "Interactive Product Discovery",
      "AI Sales Ambassador",
      "Smart Promotional Displays",
    ],
    icon: "🛍️",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "03",
    title: "Corporate Services",
    subtitle: "Digital Receptionists & HR AI",
    description:
      "Enhance front-desk operations with digital receptionists, visitor management holograms, employee onboarding guides, and enterprise-grade AI assistants for HR, IT, and internal corporate communications.",
    useCase: "Holographic Front-Desk Receptionist",
    features: [
      "Digital Reception",
      "Visitor Check-In & Badge Issue",
      "Employee HR Support",
      "Corporate Directory",
    ],
    icon: "🏢",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "04",
    title: "Healthcare & Telemedicine",
    subtitle: "Patient Triage & Navigation AI",
    description:
      "Deploy hologram healthcare assistants for patient guidance, appointment scheduling, hospital navigation, triage symptom check, and tele-consultation support with a compassionate, human-like interface.",
    useCase: "Hospital Navigation & Patient Intake AI",
    features: [
      "Patient Guidance & Triage",
      "Hospital Navigation",
      "Appointment Booking",
      "Multilingual Care Support",
    ],
    icon: "🏥",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "05",
    title: "Tourism & Exhibitions",
    subtitle: "Hologram Tour Guides & Storytellers",
    description:
      "Deliver unforgettable visitor experiences using 3D hologram tour guides, multilingual information kiosks, exhibition storytelling avatars, and interactive museum docents powered by digital humans.",
    useCase: "Multilingual Holographic Museum Docent",
    features: [
      "Holographic Tour Guides",
      "Multilingual Exhibition Kiosks",
      "Interactive Storytelling",
      "Wayfinding & Sightseeing",
    ],
    icon: "🏛️",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "06",
    title: "Education & Training",
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
    icon: "🎓",
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
];

export default function IndustriesShowcase() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="relative mx-auto max-w-7xl divide-y divide-white/10">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="py-20 first:pt-0 last:pb-0"
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* LEFT HEADER & ICON */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-semibold tracking-wider text-cyan-400">
                    {industry.number}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-gray-400 backdrop-blur-sm">
                    {industry.subtitle}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-neutral-950 text-3xl shadow-inner backdrop-blur-md">
                    {industry.icon}
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {industry.title}
                  </h2>
                </div>
              </div>

              {/* RIGHT DESCRIPTION & FEATURES */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30">
                  {/* Subtle background glow */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${industry.accentColor} opacity-30`}
                  />

                  {/* Primary Use Case Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                    <span>💡 Deployment:</span>
                    <span>{industry.useCase}</span>
                  </div>

                  <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {industry.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors hover:text-cyan-400"
                    >
                      <span>Deploy for {industry.title}</span>
                      <span className="transition-transform group-hover:translate-x-1 text-lg">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}