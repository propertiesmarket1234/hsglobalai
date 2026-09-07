"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const latestPosts = [
  {
    slug: "what-is-a-digital-human-avatar",
    title: "What is a Digital Human Avatar? How AI Avatars Are Transforming Business",
    category: "AI Digital Humans",
    readTime: "6 min read",
    snippet:
      "A complete guide to embodied 3D AI avatars, neural speech synthesis, and real-time interactive customer engagement.",
    tag: "Definitional Guide",
  },
  {
    slug: "why-100-offline-ai",
    title: "Why 100% Offline AI is the Future of Enterprise Technology",
    category: "On-Device AI",
    readTime: "7 min read",
    snippet:
      "Explore how air-gapped GPU hardware delivers sub-second voice dialogue, zero cloud latency, and 100% data privacy.",
    tag: "Air-Gapped Privacy",
  },
  {
    slug: "ai-business-automation",
    title: "AI Business Automation: How Digital Humans Streamline Enterprise Operations",
    category: "Business Automation",
    readTime: "8 min read",
    snippet:
      "How enterprises leverage local AI digital human avatars to automate front-desk reception and visitor onboarding.",
    tag: "Enterprise ROI",
  },
];

export default function LatestInsights() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-t border-white/10">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-cyan-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Insights & Resources
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Latest AI{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                Insights & Articles
              </span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white/10 hover:scale-105"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
          </Link>
        </motion.div>

        {/* 3 Articles Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 font-mono">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                      <Clock className="w-3 h-3 text-gray-500" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-300 line-clamp-3">
                    {post.snippet}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="text-gray-400">#{post.tag}</span>
                  <span className="inline-flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
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
