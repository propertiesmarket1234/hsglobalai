"use client";

import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, BookOpen, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

const englishCategories = [
  "All",
  "Digital Humans",
  "Business Automation",
  "Enterprise Infrastructure",
  "Customer Experience",
  "Smart Retail",
  "Voice AI",
  "Security & Privacy",
  "Healthcare AI",
  "Retail AI",
  "Enterprise AI",
];

export default function BlogClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const bPage = dict.blogPage;

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryLabels = englishCategories.map((cat, idx) =>
    Array.isArray(bPage?.categories) && bPage.categories[idx]
      ? bPage.categories[idx]
      : cat
  );

  const featuredPost = useMemo(
    () => blogPosts.find((p) => p.featured) ?? blogPosts[0],
    []
  );

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const selectedEnglishCategory = englishCategories[selectedCategoryIdx];
      const matchesCategory =
        selectedCategoryIdx === 0 || post.category === selectedEnglishCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.snippet.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryIdx, searchQuery]);

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-white px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-20 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                {bPage.heroBadge || "Enterprise AI Knowledge Hub"}
              </span>
            </div>

            <h1 className="mx-auto max-w-4xl text-balance text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[52px] lg:text-[62px]">
              {bPage.heroTitle || "AI Insights &"}{" "}
              <span className="text-[var(--lp-muted)]">
                {bPage.heroTitleHighlight || "Holographic Tech."}
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.7] text-[var(--lp-ink-2)] sm:text-[18px]">
              {bPage.heroSubtitle ||
                "Explore in-depth articles, architectural guides, and research on Digital Human Avatars, On-Device AI models, Enterprise RAG, and 3D Holographic displays."}
            </p>

            {/* LIVE SEARCH BAR */}
            <div className="mx-auto mt-8 max-w-lg">
              <div className="relative flex items-center">
                <Search className="absolute left-4.5 h-4 w-4 text-[var(--lp-muted)] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    bPage.searchPlaceholder ||
                    "Search articles by title, topic, or keyword..."
                  }
                  aria-label="Search blog articles"
                  className="w-full rounded-full border border-[var(--lp-line)] bg-[var(--lp-bg)] py-3.5 pl-11 pr-14 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] shadow-xs transition-all focus:border-[var(--lp-accent)] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[var(--lp-accent)]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-semibold text-[var(--lp-muted)] hover:text-[var(--lp-ink)] cursor-pointer"
                  >
                    {bPage.searchClear || "Clear"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST BANNER */}
      {!searchQuery && selectedCategoryIdx === 0 && featuredPost && (
        <section className="relative bg-[var(--lp-tile)] px-4 py-16 sm:px-6 sm:py-20 border-b border-[var(--lp-line)]">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <Link
                href={lPath(`/blog/${featuredPost.slug}`)}
                className="group block overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 sm:p-8 shadow-xs hover:shadow-[var(--lp-shadow-card)] transition-all duration-300"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* FEATURED ARTWORK FRAME */}
                  <div className="lg:col-span-5 mx-auto max-w-md w-full lg:max-w-none overflow-hidden rounded-[20px] relative aspect-square bg-[var(--lp-tile)] border border-[var(--lp-line)]">
                    <Image
                      src={featuredPost.bannerImage}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--lp-ink)] px-3 py-1 text-[11px] font-semibold text-white">
                          <Sparkles className="h-3 w-3 text-[var(--lp-accent)]" />
                          <span>
                            {(bPage.featuredBadge || "Featured Article").replace(
                              /^[★\s]+/,
                              ""
                            )}
                          </span>
                        </span>
                        <span className="rounded-full bg-[var(--lp-tile)] px-3 py-1 text-xs font-semibold text-[var(--lp-ink-2)] border border-[var(--lp-line)]">
                          {featuredPost.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--lp-muted)]">
                          <Clock className="h-3 w-3" />
                          {featuredPost.readTime}
                        </span>
                        <span className="text-xs text-[var(--lp-muted)]">
                          • {featuredPost.date}
                        </span>
                      </div>

                      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.2] text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-[var(--lp-ink-2)]">
                        {featuredPost.snippet}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[var(--lp-line)]">
                      <span className="text-xs font-medium text-[var(--lp-muted)]">
                        {bPage.byAuthor
                          ? `${bPage.byAuthor} ${featuredPost.author}`
                          : `By ${featuredPost.author}`}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                        <span>
                          {(bPage.readFullArticle || "Read Full Article").replace(
                            /[\s→]+$/,
                            ""
                          )}
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CATEGORIES & ARTICLES GRID */}
      <section className="relative bg-[var(--lp-bg)] px-4 py-16 sm:px-6 sm:py-24 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-[1200px]">
          {/* CATEGORY FILTER CHIPS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categoryLabels.map((cat, catIdx) => (
              <button
                key={englishCategories[catIdx]}
                type="button"
                onClick={() => setSelectedCategoryIdx(catIdx)}
                className={`inline-flex h-9 items-center justify-center rounded-full px-4 text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer ${
                  selectedCategoryIdx === catIdx
                    ? "bg-[var(--lp-ink)] text-white shadow-xs"
                    : "border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ARTICLES GRID */}
          {filteredPosts.length === 0 ? (
            <div className="rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-12 text-center max-w-md mx-auto shadow-xs">
              <BookOpen className="h-10 w-10 text-[var(--lp-muted)] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[var(--lp-ink)]">
                {bPage.noArticlesTitle || "No articles found"}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-[var(--lp-ink-2)]">
                {bPage.noArticlesSub ||
                  "Try adjusting your search query or category filter."}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.24) }}
                  className="h-full"
                >
                  <Link
                    href={lPath(`/blog/${post.slug}`)}
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 sm:p-6 shadow-xs hover:-translate-y-1 hover:shadow-[var(--lp-shadow-card)] transition-all duration-300"
                  >
                    <div>
                      {/* ARTWORK FRAME (1:1 square artwork framed cleanly edge-to-edge) */}
                      <div className="relative aspect-square w-full overflow-hidden rounded-[18px] bg-[var(--lp-tile)] border border-[var(--lp-line)]">
                        <Image
                          src={post.bannerImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      {/* CATEGORY & READ TIME */}
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                        <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-2.5 py-0.5 font-semibold text-[var(--lp-ink)]">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[var(--lp-muted)] font-medium">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] leading-[1.3] text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[var(--lp-ink-2)] line-clamp-3">
                        {post.snippet}
                      </p>

                      {/* TAGS */}
                      {post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--lp-muted)]"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CARD FOOTER */}
                    <div className="mt-6 pt-4 border-t border-[var(--lp-line)] flex items-center justify-between text-xs text-[var(--lp-muted)]">
                      <time>{post.date}</time>
                      <span className="font-semibold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors inline-flex items-center gap-1">
                        <span>
                          {(bPage.readArticle || "Read Article").replace(
                            /[\s→]+$/,
                            ""
                          )}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
