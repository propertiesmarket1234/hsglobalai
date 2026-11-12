"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
import { blogPosts } from "@/data/blogPosts";

export default function LatestInsights() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const ins = dict.home.latestInsights;

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  // Sync with the blog hub's canonical featured article selection (IDs 1, 9, 10)
  const featuredCandidates = blogPosts.filter((post) => post.featured);
  const latestPosts = (featuredCandidates.length > 0 ? featuredCandidates : blogPosts).slice(0, 3);

  return (
    <section
      id="latest-insights"
      className="relative bg-[var(--lp-bg)] px-4 py-20 sm:px-6 md:py-28 text-[var(--lp-ink)] border-b border-[var(--lp-line)]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10 sm:mb-14"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
              {ins.badge}
            </span>
            <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--lp-ink)] sm:text-[46px]">
              {ins.titlePrefix}{" "}
              <span className="text-[var(--lp-muted)]">{ins.titleHighlight}</span>
            </h2>
          </div>

          <Link
            href={lPath("/blog")}
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98]"
          >
            <span>{ins.exploreAll || "Explore All"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* 3 Featured Articles Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={lPath(`/blog/${post.slug}`)}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--lp-shadow-card)]"
              >
                <div>
                  {/* Article Artwork Frame (1:1 square artwork framed cleanly edge-to-edge) */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-[18px] border border-[var(--lp-line)] bg-[var(--lp-tile)]">
                    <Image
                      src={post.bannerImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Metadata Row */}
                  <div className="mt-5 flex items-center justify-between gap-2 text-[11px]">
                    <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-2.5 py-0.5 font-semibold text-[var(--lp-ink)]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[var(--lp-muted)] font-medium">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] leading-[1.3] text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[var(--lp-ink-2)] line-clamp-3">
                    {post.snippet}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--lp-line)] flex items-center justify-between text-[12px]">
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
      </div>
    </section>
  );
}
