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
    href: "/products#digital-humans",
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
    href: "/products#hologram-box",
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
    href: "/products#spatial-display",
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
    href: "/products#virtual-try-on",
  },
];

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Featured Products
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              AI products designed for{" "}
              <span className="bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent">
                real-world experiences.
              </span>
            </h2>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
            >
              <span>View All Products</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* PRODUCTS CARDS GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30"
            >
              {/* Product Visual Container with Continuous Motion */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                {product.imageSrc ? (
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
                ) : (
                  <div className="relative h-full w-full bg-gradient-to-br from-cyan-950/80 via-neutral-950 to-black p-6 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent blur-lg" />
                    <div className="relative z-10 font-mono text-[10px] text-cyan-400 tracking-widest">
                      LIGHT-FIELD OPTICS
                    </div>
                    <div className="relative z-10 text-center">
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-100">
                        VOLUMETRIC DISPLAY
                      </span>
                    </div>
                    <div className="relative z-10 font-mono text-[10px] text-gray-500 text-right">
                      EYE-TRACKED 3D
                    </div>
                  </div>
                )}

                {/* Ambient dark gradient vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 font-mono text-xs font-semibold tracking-wider text-white/80 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-md">
                  {product.id} — {product.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-8">
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {product.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-400">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm"
                    >
                      {tag}
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
          ))}
        </div>
      </div>
    </section>
  );
}