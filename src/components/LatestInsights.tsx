"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
import { blogPosts } from "@/data/blogPosts";

const EXHIBITION_HIGHLIGHTS = [
  {
    src: "/images/events/led-china-2026.jpg",
    title: "LED China 2026",
    caption: "Life-Size Hologram Box Booth",
  },
  {
    src: "/images/events/led-china-demo-1.jpg",
    title: "Live Avatar Q&A",
    caption: "Interactive Voice Showcase",
  },
  {
    src: "/images/events/led-china-demo-2.jpg",
    title: "Enterprise Delegations",
    caption: "On-Device Edge Demos",
  },
  {
    src: "/images/events/isle-china-2026.jpg",
    title: "ISLE China 2026",
    caption: "Retail & Spatial Display",
  },
];

export default function LatestInsights() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const ins = dict.home.latestInsights;
  const shouldReduceMotion = useReducedMotion();

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  // Sync with the blog hub's canonical featured article selection (IDs 1, 9, 10)
  const featuredCandidates = blogPosts.filter((post) => post.featured);
  const latestPosts = (featuredCandidates.length > 0 ? featuredCandidates : blogPosts).slice(0, 3);

  return (
    <section
      id="latest-insights"
      className="relative bg-[var(--lp-bg)] px-4 py-16 sm:px-6 md:py-24 text-[var(--lp-ink)] border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              {ins.badge}
            </span>
            <h2 className="mt-2.5 text-balance text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.12] tracking-tight text-[var(--lp-ink)]">
              {ins.titlePrefix}{" "}
              <span className="text-[var(--lp-muted)] font-medium">{ins.titleHighlight}</span>
            </h2>
          </div>

          <Link
            href={lPath("/blog")}
            className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#2A2A2F] active:scale-[0.98] self-start md:self-auto"
          >
            <span>{ins.exploreAll || "Explore All"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* 3 Distinct Featured Articles Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : idx * 0.06 }}
            >
              <Link
                href={lPath(`/blog/${post.slug}`)}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--lp-shadow-card)]"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)]">
                    <Image
                      src={post.bannerImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 text-[11px]">
                    <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-2.5 py-0.5 font-semibold text-[var(--lp-ink)]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[var(--lp-muted)] font-medium">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[17px] font-semibold tracking-tight leading-[1.32] text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--lp-ink-2)] line-clamp-2">
                    {post.snippet}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[var(--lp-line)] flex items-center justify-between text-xs">
                  <span className="text-[var(--lp-muted)] font-medium">
                    #{post.tags[0] || post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                    <span>{ins.readArticle || "Read Article"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* GLOBAL EXHIBITIONS & LIVE DEPLOYMENT PHOTOGRAPHY STRIP */}
        <div className="mt-12 sm:mt-14 rounded-[26px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--lp-card)] border border-[var(--lp-line)]">
                <Calendar className="h-4 w-4 text-[var(--lp-accent)]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--lp-ink)]">
                  Live Trade Exhibitions &amp; Hardware Showcases
                </h3>
                <p className="text-xs text-[var(--lp-muted)]">
                  Hands-on demonstrations from LED China 2026 &amp; ISLE China 2026
                </p>
              </div>
            </div>

            <Link
              href={lPath("/events")}
              className="group inline-flex h-8.5 items-center gap-1.5 px-4 rounded-full border border-[var(--lp-line)] bg-white text-xs font-semibold text-[var(--lp-ink)] hover:border-[var(--lp-accent)] hover:text-[var(--lp-accent)] transition-all self-start sm:self-auto shrink-0"
            >
              <span>Explore Events Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {EXHIBITION_HIGHLIGHTS.map((item) => (
              <Link
                key={item.src}
                href={lPath("/events")}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--lp-line)] bg-neutral-900"
              >
                <Image
                  src={item.src}
                  alt={`${item.title} — ${item.caption}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3">
                  <p className="text-xs font-semibold text-white">{item.title}</p>
                  <p className="text-[11px] text-white/80 line-clamp-1">{item.caption}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
