"use client";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

const categories = [
  "All",
  "Digital Humans",
  "Business Automation",
  "Enterprise Infrastructure",
  "Customer Experience",
  "Smart Retail",
  "Voice AI",
  "Security & Privacy",
];

export default function BlogPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const featuredPost = useMemo(
    () => blogPosts.find((p) => p.featured) ?? blogPosts[0],
    []
  );

  console.log(
    "BLOG SLUGS:",
    blogPosts.map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
    }))
  );

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-cyan-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                HS Global AI Knowledge Hub & Insights
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              AI Insights &{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                Holographic Tech.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Explore in-depth articles, architectural guides, and research on Digital Human Avatars, On-Device AI models, Enterprise RAG, and 3D Holographic displays.
            </p>

            {/* LIVE SEARCH BAR */}
            <div className="mx-auto mt-10 max-w-xl">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400 text-lg">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, topic, or keyword..."
                  className="w-full rounded-2xl border border-white/20 bg-neutral-950/80 py-4 pl-12 pr-12 text-sm text-white placeholder-gray-400 backdrop-blur-xl transition-all focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-semibold text-gray-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST BANNER */}
      {!searchQuery && selectedCategory === "All" && (
        <section className="relative px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => {
                if (featuredPost?.slug) {
                  router.push(`/blog/${featuredPost.slug}`);
                }
              }} className="group relative cursor-pointer overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950 p-6 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* FEATURED BANNER IMAGE */}
                <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-white/10 relative h-64 sm:h-80 w-full bg-neutral-900">
                  <Image
                    src={featuredPost.bannerImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-bold text-black backdrop-blur-md shadow-lg">
                    ★ Featured Article
                  </span>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-300 border border-white/15">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs font-mono text-gray-400">{featuredPost.readTime}</span>
                      <span className="text-xs font-mono text-gray-500">• {featuredPost.date}</span>
                    </div>

                    <h2 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-300">
                      {featuredPost.snippet}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs font-medium text-gray-400">
                      By {featuredPost.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 group-hover:translate-x-2 transition-transform">
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CATEGORIES & ARTICLES GRID */}
      <section className="relative overflow-hidden bg-black px-6 pb-28 border-t border-white/10">
        <div className="relative mx-auto max-w-7xl pt-12">
          {/* CATEGORY NAV BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${selectedCategory === cat
                  ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "border border-white/15 bg-neutral-950/70 text-gray-300 hover:border-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ARTICLES GRID */}
          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-neutral-950/60 p-12 text-center">
              <span className="text-4xl">🔍</span>
              <h3 className="mt-4 text-xl font-bold text-white">No articles found</h3>
              <p className="mt-2 text-sm text-gray-400">
                Try adjusting your search query or category filter.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    if (post.slug) {
                      router.push(`/blog/${post.slug}`);
                    }
                  }} className="group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]"
                >
                  {/* FULL BANNER IMAGE */}
                  <div className="relative h-52 w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                    <Image
                      src={post.bannerImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                    {/* Floating Category Badge */}
                    <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                      {post.category}
                    </span>

                    {/* Read Time */}
                    <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 font-mono text-[10px] text-gray-300 backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>

                  {/* CARD BODY */}
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-3 text-xs leading-6 text-gray-300 line-clamp-3">
                        {post.snippet}
                      </p>

                      {/* TAGS */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-400"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <Link
                        href={post.slug ? `/blog/${post.slug}` : "#"} className="font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FULL ARTICLE READER MODAL WITH HIGH SEO H1/H2/H3 STRUCTURE */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl rounded-3xl border border-cyan-500/40 bg-neutral-950 text-white shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner Header */}
              <div className="relative h-64 sm:h-80 w-full shrink-0 bg-neutral-900 border-b border-white/10">
                <Image
                  src={activePost.bannerImage}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 z-10 rounded-full border border-white/30 bg-black/60 p-2.5 text-gray-300 hover:text-white hover:border-white transition-colors backdrop-blur-md"
                >
                  ✕
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-bold text-black shadow-md">
                      {activePost.category}
                    </span>
                    <span className="text-xs font-mono text-gray-300 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      {activePost.date} • {activePost.readTime}
                    </span>
                  </div>

                  {/* SEO MAIN ARTICLE TITLE H1 */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                    {activePost.title}
                  </h1>
                </div>
              </div>

              {/* Scrollable Modal Content Body */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-6 text-sm leading-8 text-gray-200">
                <div className="flex items-center gap-3 text-xs text-cyan-400 font-semibold border-b border-white/10 pb-4">
                  <span>Author: {activePost.author}</span>
                  <span>•</span>
                  <span>HS Global AI Enterprise Hub</span>
                </div>

                {activePost.content.split("\n\n").map((paragraph, i) => {
                  // H2 Tag Formatting
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 border-l-4 border-cyan-400 pl-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  // H3 Tag Formatting
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-lg font-semibold text-cyan-300 mt-6 mb-2">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  // H4 Tag Formatting
                  if (paragraph.startsWith("#### ")) {
                    return (
                      <h4 key={i} className="text-base font-semibold text-gray-100 mt-4 mb-1">
                        {paragraph.replace("#### ", "")}
                      </h4>
                    );
                  }
                  // Horizontal Divider
                  if (paragraph.trim() === "---") {
                    return <hr key={i} className="my-6 border-white/10" />;
                  }
                  // Markdown Table Formatting
                  if (paragraph.startsWith("|")) {
                    const rows = paragraph.split("\n");
                    return (
                      <div key={i} className="my-6 overflow-x-auto rounded-xl border border-white/15 bg-black/60 p-4">
                        <table className="w-full text-left text-xs">
                          <tbody>
                            {rows.map((row, rIdx) => {
                              const cols = row.split("|").filter((c) => c.trim() !== "");
                              if (rIdx === 1) return null; // Separator row
                              return (
                                <tr key={rIdx} className={rIdx === 0 ? "border-b border-cyan-500/30 font-bold text-cyan-300 bg-cyan-500/10" : "border-b border-white/10 hover:bg-white/5"}>
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
                  // Bullet Point List Parsing
                  if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
                    const lines = paragraph.split("\n");
                    return (
                      <ul key={i} className="my-4 space-y-2 pl-2">
                        {lines.map((line, lIdx) => {
                          if (line.startsWith("- ")) {
                            const cleanText = line.replace("- ", "");
                            return (
                              <li key={lIdx} className="flex items-start gap-2.5 text-gray-300">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                <span>{cleanText}</span>
                              </li>
                            );
                          }
                          return <p key={lIdx} className="text-gray-300 mb-2">{line}</p>;
                        })}
                      </ul>
                    );
                  }
                  // Links / Call to action buttons inside text
                  if (paragraph.includes("[") && paragraph.includes("](") && paragraph.includes(")")) {
                    const linkText = paragraph.substring(paragraph.indexOf("[") + 1, paragraph.indexOf("]"));
                    const linkHref = paragraph.substring(paragraph.indexOf("](") + 2, paragraph.indexOf(")"));
                    return (
                      <div key={i} className="my-8 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 to-black p-6 text-center shadow-lg">
                        <p className="text-base font-bold text-white mb-4">Ready to Transform Your Customer Engagement?</p>
                        <Link
                          href={linkHref}
                          onClick={() => setActivePost(null)}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-xs font-bold text-black shadow-lg transition-all hover:scale-105 hover:from-cyan-300 hover:to-blue-400"
                        >
                          {linkText} →
                        </Link>
                      </div>
                    );
                  }

                  return <p key={i} className="text-gray-300 leading-8">{paragraph}</p>;
                })}

                {/* Tags & Footer Close */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activePost.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActivePost(null)}
                    className="rounded-full bg-cyan-500 px-6 py-2.5 text-xs font-bold text-black transition-all hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    Close Article
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
