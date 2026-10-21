"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X, Sparkles, BookOpen } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
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
];

export default function BlogClient() {
  const router = useRouter();
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const bPage = (dict as any).blogPage || {};

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories: string[] = bPage.categories || englishCategories;

  const featuredPost = useMemo(
    () => blogPosts.find((p) => p.featured) ?? blogPosts[0],
    []
  );

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategoryIdx === 0 ||
        post.category === englishCategories[selectedCategoryIdx];
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryIdx, searchQuery]);

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative px-4 pt-32 pb-14 sm:px-6 md:pt-40 md:pb-20 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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

            <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
              {bPage.heroTitle || "AI Insights &"}{" "}
              <span className="text-[var(--lp-muted)]">
                {bPage.heroTitleHighlight || "Holographic Tech."}
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]">
              {bPage.heroSubtitle ||
                "Explore in-depth articles, architectural guides, and research on Digital Human Avatars, On-Device AI models, Enterprise RAG, and 3D Holographic displays."}
            </p>

            {/* LIVE SEARCH BAR */}
            <div className="mx-auto mt-8 max-w-lg">
              <div className="relative flex items-center">
                <Search className="absolute left-4.5 h-4 w-4 text-[var(--lp-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={bPage.searchPlaceholder || "Search articles by title, topic, or keyword..."}
                  className="w-full rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] py-3.5 pl-11 pr-12 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] shadow-xs transition-all focus:border-[var(--lp-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--lp-accent)]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-semibold text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
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
      {!searchQuery && selectedCategoryIdx === 0 && (
        <section className="relative px-4 py-12 sm:px-6 border-b border-[var(--lp-line)]">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => {
                if (featuredPost?.slug) {
                  router.push(lPath(`/blog/${featuredPost.slug}`));
                }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* FEATURED BANNER IMAGE */}
                <div className="lg:col-span-6 overflow-hidden rounded-2xl relative h-64 sm:h-80 w-full bg-[var(--lp-tile)] border border-[var(--lp-line)]">
                  <Image
                    src={featuredPost.bannerImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--lp-ink)] px-3 py-1 text-xs font-semibold text-white shadow-xs">
                    <Sparkles className="h-3 w-3 text-[var(--lp-accent)]" />
                    <span>Featured Article</span>
                  </span>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full bg-[var(--lp-tile)] px-3 py-1 text-xs font-semibold text-[var(--lp-ink-2)] border border-[var(--lp-line)]">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-[var(--lp-muted)]">{featuredPost.readTime}</span>
                      <span className="text-xs text-[var(--lp-muted)]">• {featuredPost.date}</span>
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                      {featuredPost.snippet}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-6 border-t border-[var(--lp-line)]">
                    <span className="text-xs font-medium text-[var(--lp-muted)]">
                      {bPage.byAuthor ? `${bPage.byAuthor} ${featuredPost.author}` : `By ${featuredPost.author}`}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] group-hover:translate-x-1 transition-all">
                      <span>{bPage.readFullArticle || "Read Full Article"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CATEGORIES & ARTICLES GRID */}
      <section className="relative px-4 py-16 sm:px-6">
        <div className="relative mx-auto max-w-[1200px]">
          {/* CATEGORY NAV BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat, catIdx) => (
              <button
                key={catIdx}
                onClick={() => setSelectedCategoryIdx(catIdx)}
                className={`inline-flex h-8 items-center justify-center rounded-full px-4 text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer ${
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
              <p className="mt-2 text-sm text-[var(--lp-ink-2)]">
                {bPage.noArticlesSub || "Try adjusting your search query or category filter."}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => {
                    if (post.slug) {
                      router.push(lPath(`/blog/${post.slug}`));
                    }
                  }}
                  className="group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs hover:shadow-md transition-all duration-300"
                >
                  {/* BANNER IMAGE */}
                  <div className="relative h-48 w-full overflow-hidden bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
                    <Image
                      src={post.bannerImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Floating Category Badge */}
                    <span className="absolute top-3.5 left-3.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      {post.category}
                    </span>

                    {/* Read Time */}
                    <span className="absolute bottom-3.5 right-3.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10px] text-white backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>

                  {/* CARD BODY */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h2 className="text-lg font-bold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-2.5 text-xs leading-relaxed text-[var(--lp-ink-2)] line-clamp-3">
                        {post.snippet}
                      </p>

                      {/* TAGS */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--lp-muted)]"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="mt-6 pt-4 border-t border-[var(--lp-line)] flex items-center justify-between text-xs text-[var(--lp-muted)]">
                      <span className="">{post.date}</span>
                      <span className="font-semibold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                        <span>{bPage.readArticle || "Read Article"}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FULL ARTICLE READER MODAL */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-4xl rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] text-[var(--lp-ink)] shadow-xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner Header */}
              <div className="relative h-64 sm:h-72 w-full shrink-0 bg-[var(--lp-tile)] border-b border-[var(--lp-line)]">
                <Image
                  src={activePost.bannerImage}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-md"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="rounded-full bg-[var(--lp-ink)] px-3 py-1 text-xs font-semibold text-white">
                      {activePost.category}
                    </span>
                    <span className="text-xs text-white/90 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                      {activePost.date} • {activePost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activePost.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Modal Content Body */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                <div className="flex items-center gap-3 text-xs text-[var(--lp-muted)] border-b border-[var(--lp-line)] pb-4">
                  <span>Author: {activePost.author}</span>
                  <span>•</span>
                  <span>{bPage.enterpriseHubLabel || "HS Global AI Enterprise Hub"}</span>
                </div>

                {activePost.content.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-xl sm:text-2xl font-bold text-[var(--lp-ink)] mt-8 mb-3 border-l-4 border-[var(--lp-accent)] pl-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-lg font-semibold text-[var(--lp-ink)] mt-6 mb-2">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("#### ")) {
                    return (
                      <h4 key={i} className="text-base font-semibold text-[var(--lp-ink)] mt-4 mb-1">
                        {paragraph.replace("#### ", "")}
                      </h4>
                    );
                  }
                  if (paragraph.trim() === "---") {
                    return <hr key={i} className="my-6 border-[var(--lp-line)]" />;
                  }
                  if (paragraph.startsWith("|")) {
                    const rows = paragraph.split("\n");
                    return (
                      <div key={i} className="my-6 overflow-x-auto rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-4">
                        <table className="w-full text-left text-xs">
                          <tbody>
                            {rows.map((row, rIdx) => {
                              const cols = row.split("|").filter((c) => c.trim() !== "");
                              if (rIdx === 1) return null;
                              return (
                                <tr key={rIdx} className={rIdx === 0 ? "border-b border-[var(--lp-line)] font-bold text-[var(--lp-ink)] bg-[var(--lp-card)]" : "border-b border-[var(--lp-line)] hover:bg-[var(--lp-card)]"}>
                                  {cols.map((col, cIdx) => (
                                    <td key={cIdx} className="py-3 px-4">
                                      {col.replace(/\*\*/g, "").trim()}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
                    const lines = paragraph.split("\n");
                    return (
                      <ul key={i} className="my-4 space-y-2 pl-2">
                        {lines.map((line, lIdx) => {
                          if (line.startsWith("- ")) {
                            const cleanText = line.replace("- ", "");
                            return (
                              <li key={lIdx} className="flex items-start gap-2.5 text-[var(--lp-ink-2)]">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lp-accent)]" />
                                <span>{cleanText}</span>
                              </li>
                            );
                          }
                          return <p key={lIdx} className="text-[var(--lp-ink-2)] mb-2">{line}</p>;
                        })}
                      </ul>
                    );
                  }
                  if (paragraph.includes("[") && paragraph.includes("](") && paragraph.includes(")")) {
                    const linkText = paragraph.substring(paragraph.indexOf("[") + 1, paragraph.indexOf("]"));
                    const linkHref = paragraph.substring(paragraph.indexOf("](") + 2, paragraph.indexOf(")"));
                    return (
                      <div key={i} className="my-8 rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 text-center">
                        <p className="text-base font-bold text-[var(--lp-ink)] mb-4">Ready to Transform Your Customer Engagement?</p>
                        <Link
                          href={lPath(linkHref)}
                          onClick={() => setActivePost(null)}
                          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-5 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                        >
                          <span>{linkText}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    );
                  }

                  return <p key={i} className="text-[var(--lp-ink-2)] leading-relaxed">{paragraph}</p>;
                })}

                {/* Tags & Footer Close */}
                <div className="mt-10 pt-6 border-t border-[var(--lp-line)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-[var(--lp-muted)] self-center">{bPage.tagsLabel || "Tags:"}</span>
                    {activePost.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-1 text-xs text-[var(--lp-ink-2)]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActivePost(null)}
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--lp-ink)] px-5 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                  >
                    {bPage.modalClose || "Close Article"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTA />
      <Footer />
    </main>
  );
}
