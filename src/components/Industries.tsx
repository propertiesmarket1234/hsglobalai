"use client";

import Link from "next/link";
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
    },
    {
      number: "02",
      slug: "retail",
      title: ind.items[1]?.title || "Retail & Advertising",
      description: ind.items[1]?.description || "",
    },
    {
      number: "03",
      slug: "corporate",
      title: ind.items[2]?.title || "Corporate Services",
      description: ind.items[2]?.description || "",
    },
    {
      number: "04",
      slug: "tourism",
      title: ind.items[3]?.title || "Tourism & Exhibitions",
      description: ind.items[3]?.description || "",
    },
    {
      number: "05",
      slug: "healthcare",
      title: ind.items[4]?.title || "Healthcare & Telemedicine",
      description: ind.items[4]?.description || "",
    },
    {
      number: "06",
      slug: "education",
      title: ind.items[5]?.title || "Education & Training",
      description: ind.items[5]?.description || "",
    },
  ];

  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          {ind.badge}
        </p>

        {/* Main heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-bold md:text-6xl">
            {ind.headingLine1}
            <br />
            {ind.headingLine2}
          </h2>

          <p className="max-w-md text-gray-400">
            {ind.description}
          </p>
        </div>

        {/* Industry list */}
        <div className="mt-20 border-t border-white/10">
          {industries.map((industry) => (
            <Link
              key={industry.number}
              href={lPath(`/industries/${industry.slug}`)}
              className="group grid gap-6 border-b border-white/10 py-10 transition duration-300 hover:bg-white/[0.03] md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:px-6 block"
            >
              <span className="text-sm text-gray-600 font-mono">
                {industry.number}
              </span>

              <h3 className="text-2xl font-medium transition duration-300 group-hover:translate-x-2 group-hover:text-cyan-300 md:text-3xl">
                {industry.title}
              </h3>

              <p className="max-w-lg text-sm leading-6 text-gray-400">
                {industry.description}
              </p>

              <span className="text-xl text-cyan-400 transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom summary banner */}
        <div className="mt-16 text-center">
          <p className="inline-block rounded-2xl border border-cyan-500/30 bg-cyan-950/40 px-6 py-4 text-sm font-medium text-cyan-200 backdrop-blur-md max-w-3xl">
            {ind.bottomBanner}
          </p>
        </div>
      </div>
    </section>
  );
}