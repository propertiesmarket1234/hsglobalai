"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function Industries() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const ind = dict.home.industriesSection;

  const lPath = (path: string) => {
    if (currentLocale === "en") return path;
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  const industries = [
    {
      number: "01",
      slug: "banking",
      title: ind.items[0]?.title || "Banking & Financial Services",
      description: ind.items[0]?.description || "",
      imageSrc: "/images/use-cases/banking_hologram_kiosk.png",
      badge: "VIP Banking & Wealth",
    },
    {
      number: "02",
      slug: "retail",
      title: ind.items[1]?.title || "Retail & Advertising",
      description: ind.items[1]?.description || "",
      imageSrc: "/images/use-cases/jewellery_hologram_kiosk.png",
      badge: "Luxury Retail & Jewellery",
    },
    {
      number: "03",
      slug: "corporate",
      title: ind.items[2]?.title || "Corporate Services",
      description: ind.items[2]?.description || "",
      imageSrc: "/images/avatars/full_digital_human_presenter.png",
      badge: "Corporate Reception",
    },
    {
      number: "04",
      slug: "tourism",
      title: ind.items[3]?.title || "Tourism & Exhibitions",
      description: ind.items[3]?.description || "",
      imageSrc: "/images/use-cases/museum_hologram_avatar.png",
      badge: "Museums & Culture",
    },
    {
      number: "05",
      slug: "healthcare",
      title: ind.items[4]?.title || "Healthcare & Telemedicine",
      description: ind.items[4]?.description || "",
      imageSrc: "/images/avatars/modern_digital_human_presenter.png",
      badge: "Patient Intake & Guidance",
    },
    {
      number: "06",
      slug: "education",
      title: ind.items[5]?.title || "Education & Training",
      description: ind.items[5]?.description || "",
      imageSrc: "/images/avatars/education_assistant.png",
      badge: "Campus & Science",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-950/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label & header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {ind.badge}
          </span>
        </div>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            {ind.headingLine1}{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              {ind.headingLine2}
            </span>
          </h2>

          <p className="max-w-md text-base leading-relaxed text-gray-300">
            {ind.description}
          </p>
        </div>

        {/* PICTORIAL INDUSTRY CARDS GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]"
            >
              <Link href={lPath(`/industries/${industry.slug}`)} className="flex flex-col h-full p-6">
                {/* Pictorial Image Display Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <Image
                    src={industry.imageSrc}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/80 px-3 py-1 text-[11px] font-mono font-semibold text-cyan-300 backdrop-blur-md shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>{industry.badge}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 font-mono text-xs font-bold text-white/80 bg-black/70 px-2.5 py-0.5 rounded-md border border-white/20">
                    {industry.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      {industry.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-300">
                      {industry.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400">
                    <span>Explore Solutions</span>
                    <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom summary banner */}
        <div className="mt-16 text-center">
          <p className="inline-block rounded-2xl border border-cyan-500/30 bg-cyan-950/40 px-6 py-4 text-sm sm:text-base font-medium text-cyan-200 backdrop-blur-md max-w-3xl shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            {ind.bottomBanner}
          </p>
        </div>
      </div>
    </section>
  );
}