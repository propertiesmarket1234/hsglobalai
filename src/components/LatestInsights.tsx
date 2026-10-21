"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Camera } from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function LatestInsights() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const ins = dict.home.latestInsights;

  const lPath = (path: string) => {
    if (currentLocale === "en") return path;
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  const latestPosts = [
    {
      slug: "what-is-a-digital-human-avatar",
      title: ins.posts[0]?.title || "What is a Digital Human Avatar? How AI Avatars Are Transforming Business",
      category: ins.posts[0]?.category || "AI Digital Humans",
      readTime: ins.posts[0]?.readTime || "6 min read",
      snippet: ins.posts[0]?.snippet || "",
      tag: ins.posts[0]?.tag || "Definitional Guide",
      imageSrc: "/images/blog/blog_banner_digital_human.png",
    },
    {
      slug: "why-100-offline-ai",
      title: ins.posts[1]?.title || "Why 100% Offline AI is the Future of Enterprise Technology",
      category: ins.posts[1]?.category || "On-Device AI",
      readTime: ins.posts[1]?.readTime || "7 min read",
      snippet: ins.posts[1]?.snippet || "",
      tag: ins.posts[1]?.tag || "Air-Gapped Privacy",
      imageSrc: "/images/blog/blog_banner_offline_security.png",
    },
    {
      slug: "ai-business-automation",
      title: ins.posts[2]?.title || "AI Business Automation: How Digital Humans Streamline Enterprise Operations",
      category: ins.posts[2]?.category || "Business Automation",
      readTime: ins.posts[2]?.readTime || "8 min read",
      snippet: ins.posts[2]?.snippet || "",
      tag: ins.posts[2]?.tag || "Enterprise ROI",
      imageSrc: "/images/blog/blog_banner_automation.png",
    },
  ];

  const eventPhotos = [
    { src: "/images/events/led-china-2026.png", title: "LED China 2026 Live Demo Booth", loc: "Guangzhou Expo" },
    { src: "/images/events/isle-china-2026.png", title: "ISLE China 2026 Holographic Display", loc: "Shenzhen World Expo" },
    { src: "/images/events/led-china-demo-1.jpg", title: "Interactive Digital Human Kiosk", loc: "International Tech Summit" },
    { src: "/images/events/led-china-demo-2.jpg", title: "3D Holographic Showcase Unit", loc: "Enterprise Exhibition" },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white border-t border-white/10">
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
                {ins.badge}
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {ins.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                {ins.titleHighlight}
              </span>
            </h2>
          </div>

          <Link
            href={lPath("/blog")}
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 text-xs sm:text-[14px] font-semibold backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white/10 active:scale-[0.98] cursor-pointer shadow-xs"
          >
            <span>{ins.exploreAll}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
          </Link>
        </motion.div>

        {/* 3 Pictorial Articles Grid */}
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
                href={lPath(`/blog/${post.slug}`)}
                className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]"
              >
                {/* Pictorial Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/80 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs text-gray-400 font-medium">#{post.tag}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                        <Clock className="w-3 h-3 text-gray-500" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-300 line-clamp-2">
                      {post.snippet}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-bold">
                    <span>{ins.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* EXECUTIVE TRADE SHOW & LIVE EVENT PICTURE GALLERY WALL */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <Camera className="w-4 h-4" /> Global Expo Deployments
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Live Trade Show & Exhibition Showcase
              </h3>
            </div>

            <Link
              href={lPath("/events")}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-5 py-2.5 text-xs font-bold text-cyan-300 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
            >
              <span>View All Expo Deployments</span>
              <span>→</span>
            </Link>
          </div>

          {/* Event Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 shadow-xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="block text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                    📍 {photo.loc}
                  </span>
                  <p className="text-xs font-bold text-white leading-tight truncate mt-0.5">
                    {photo.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
