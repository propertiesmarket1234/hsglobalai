"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, DollarSign } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function ChatbotVsAvatar() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const comp = dict.home.comparison;

  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10" id="comparison">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[600px] rounded-full bg-cyan-900/10 blur-[170px]" />
      <div className="pointer-events-none absolute left-1/4 top-10 h-[400px] w-[500px] rounded-full bg-blue-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              {comp.badge}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {comp.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              {comp.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            {comp.subtitle}
          </p>
        </motion.div>

        {/* 3 STRATEGIC ENTERPRISE WINNERS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 to-black/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{comp.winners.privacyTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {comp.winners.privacyDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 to-black/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{comp.winners.hardwareTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {comp.winners.hardwareDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 to-black/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <DollarSign className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{comp.winners.costTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {comp.winners.costDesc}
            </p>
          </motion.div>
        </div>

        {/* MASTER COMPARISON MATRIX TABLE */}
        <div className="mt-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">{comp.matrixTitle}</span>
          <h3 className="text-2xl font-bold text-white sm:text-3xl mt-1">
            {comp.matrixSubtitle}
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-x-auto rounded-3xl border border-cyan-500/30 bg-neutral-950/90 backdrop-blur-xl shadow-2xl"
        >
          <table className="w-full min-w-[900px] text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-cyan-950/40 text-xs font-semibold uppercase tracking-wider text-gray-300">
                <th className="p-6">{comp.tableHeaders.capability}</th>
                <th className="p-6 text-cyan-300 font-bold bg-cyan-500/10 border-x border-cyan-500/20">
                  {comp.tableHeaders.dihuava}
                </th>
                <th className="p-6 text-gray-400">{comp.tableHeaders.cloudApis}</th>
                <th className="p-6 text-gray-400">{comp.tableHeaders.enterprisePlatforms}</th>
                <th className="p-6 text-gray-400">{comp.tableHeaders.gpuBlueprints}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {comp.matrixRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                  <td className="p-6 font-semibold text-white max-w-[200px]">
                    {row.capability}
                  </td>
                  <td className="p-6 text-cyan-300 font-bold bg-cyan-950/20 border-x border-cyan-500/20">
                    <div className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 mt-0.5">
                        ✓
                      </span>
                      <span>{row.dihuava}</span>
                    </div>
                  </td>
                  <td className="p-6 text-gray-400 font-medium">
                    {row.cloudApis}
                  </td>
                  <td className="p-6 text-gray-400 font-medium">
                    {row.enterprisePlatforms}
                  </td>
                  <td className="p-6 text-gray-400 font-medium">
                    {row.gpuBlueprints}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
