"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: "01",
    title: "AI Digital Humans",
    category: "Conversational Avatars",
    description:
      "Intelligent, human-like AI avatars designed for natural real-time customer interactions across languages.",
    imageSrc: "/products/digital-humans/digital-human-new.png",
    imageAlt: "AI Digital Human Avatar",
    tags: ["Multilingual", "Voice AI", "Digital Avatars"],
    accentGlow: "rgba(6, 182, 212, 0.25)",
    href: "/products/dihuava",
  },
  {
    id: "02",
    title: "AI Hologram Box",
    category: "3D Holographic Display",
    description:
      "Bring interactive AI-powered digital humans into real-world physical environments via 3D glass enclosures.",
    imageSrc: "/products/hologram-box/hologram-box.png",
    imageAlt: "AI Hologram Box",
    tags: ["3D Hologram", "Offline AI", "Interactive"],
    accentGlow: "rgba(6, 182, 212, 0.25)",
    href: "/products/holographic-display",
  },
  {
    id: "03",
    title: "Spatial Display",
    category: "Volumetric Visuals",
    description:
      "Immersive visual experiences that transform how digital content is presented in retail and public spaces.",
    imageSrc: "/products/spatial-display/spatial-display.png",
    imageAlt: "Spatial Volumetric Display",
    tags: ["Volumetric", "Glasses-Free", "3D Signage"],
    accentGlow: "rgba(6, 182, 212, 0.25)",
    href: "/products/spatial-display",
  },
  {
    id: "04",
    title: "Virtual Try-On",
    category: "Smart Mirror Tech",
    description:
      "AI-powered virtual experiences that enable customers to visualize products and apparel digitally in real time.",
    imageSrc: "/products/virtual-try-on/virtual-try-on.png",
    imageAlt: "Virtual Try-On Smart Mirror",
    tags: ["Real-Time Fitting", "Virtual Fitting", "Retail Tech"],
    accentGlow: "rgba(6, 182, 212, 0.25)",
    href: "/contact",
  },
];

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white border-t border-white/10">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Featured Products
            </span>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              AI products designed for{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                real-world experiences.
              </span>
            </h2>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white/10 hover:scale-105"
            >
              <span>View All Products</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* PRODUCTS CARDS GRID WITH ALTERNATING LEFT/RIGHT SLIDE REVEALS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {products.map((product, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: isLeft ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]"
              >
                {/* Product Visual Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <motion.div
                    className="relative h-full w-full"
                    animate={{
                      scale: [1, 1.04, 1],
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={
                        product.id === "03"
                          ? "object-contain bg-neutral-950 p-1.5 transition-transform duration-700 group-hover:scale-105"
                          : "object-cover transition-transform duration-700 group-hover:scale-105"
                      }
                    />
                  </motion.div>

                  {/* Ambient dark gradient vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 font-mono text-xs font-semibold tracking-wider text-white/90 rounded-full border border-white/20 bg-black/70 px-3.5 py-1 backdrop-blur-md">
                    {product.id} — {product.category}
                  </div>
                </div>

                {/* Text Info */}
                <div className="mt-8">
                  <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-gray-300">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors group-hover:text-cyan-400"
                  >
                    <span>Explore {product.title}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}