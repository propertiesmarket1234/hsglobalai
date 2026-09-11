"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProductItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  images?: string[];
  imageAlt: string;
  accentColor: string;
  accentGlow: string;
  badge: string;
  linkHref: string;
  linkText?: string;
  reverseLayout?: boolean;
}

const products: ProductItem[] = [
  {
    id: "digital-humans",
    number: "01",
    title: "AI Digital Humans",
    subtitle: "Real-Time 29+ Multilingual Avatars",
    description:
      "Intelligent, human-like AI avatars designed to communicate naturally with customers across 29+ global languages, industries, and real-world environments with hyper-realistic facial expressions and custom voice cloning.",
    tags: ["29+ Global Languages", "Voice Cloning", "Custom Avatars", "Real-Time Interaction"],
    imageSrc: "/products/digital-humans/digital-human-dashboard.jpg",
    imageAlt: "DIHUAVA AI Digital Human Platform",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.25)",
    badge: "Interactive Stream",
    linkHref: "/products/ai-digital-human",
    linkText: "Explore DIHUAVA AI Digital Human Platform",
  },
  {
    id: "hologram-box",
    number: "02",
    title: "AI Hologram Box",
    subtitle: "3D Display Enclosure in 29+ Global Languages",
    description:
      "Bring intelligent AI Digital Humans into physical environments through 3D holographic experiences supporting 29+ global languages, interactive speech recognition, and custom voice cloning for retail showcases and executive lobbies.",
    tags: ["29+ Global Languages", "3D Holographic", "Offline AI Engine", "Multiple Sizes"],
    imageSrc: "/products/digital-humans/digital-human-new.png",
    images: [
      "/products/digital-humans/digital-human-new.png",
      "/products/hologram-box/hologram-box-saree.jpg",
    ],
    imageAlt: "3D AI Holographic Display Unit",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.25)",
    badge: "3D Holographic",
    linkHref: "/products/holographic-display",
    linkText: "Explore 3D Hologram Display Box",
    reverseLayout: true,
  },
  {
    id: "spatial-display",
    number: "03",
    title: "Spatial Display",
    subtitle: "Volumetric & Interactive 29+ Language Visuals",
    description:
      "Transform digital content into immersive visual experiences supporting 29+ global languages, designed to capture attention and create engaging interactive experiences in physical spaces.",
    tags: ["29+ Global Languages", "Immersive 3D Visuals", "Digital Signage", "Interactive Display"],
    imageSrc: "/products/spatial-display/spatial-display.png",
    imageAlt: "Glasses-Free 3D Spatial Display",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.25)",
    badge: "Volumetric 3D",
    linkHref: "/products/spatial-display",
    linkText: "Explore Glasses-Free 3D Spatial Display",
  },
  {
    id: "virtual-try-on",
    number: "04",
    title: "Virtual Try-On",
    subtitle: "AI Smart Mirror with 29+ Language Voice Guidance",
    description:
      "Enable customers to visualize products digitally before making a purchase, creating interactive shopping experiences with instant real-time outfit previewing and 29+ global language voice guidance.",
    tags: ["29+ Global Languages", "AI Smart Mirror", "Real-Time Fitting", "Retail Experience"],
    imageSrc: "/products/virtual-try-on/virtual-try-on.png",
    imageAlt: "Virtual Try-On Smart Mirror Interactive Kiosk (Active R&D)",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.25)",
    badge: "Active R&D Capability",
    linkHref: "/blog/what-is-virtual-try-on-technology",
    linkText: "Learn About Virtual Try-On R&D Technology",
    reverseLayout: true,
  },
];

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function ProductShowcase() {
  const [hologramIndex, setHologramIndex] = useState(0);
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const fp = dict.home.featuredProducts.items;
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  useEffect(() => {
    const timer = setInterval(() => {
      setHologramIndex((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const localizedProducts = products.map((item) => {
    if (item.id === "digital-humans" && fp.dihuava) {
      return {
        ...item,
        title: fp.dihuava.title || item.title,
        subtitle: fp.dihuava.category || item.subtitle,
        description: fp.dihuava.description || item.description,
      };
    }
    if (item.id === "hologram-box" && fp.hologramBox) {
      return {
        ...item,
        title: fp.hologramBox.title || item.title,
        subtitle: fp.hologramBox.category || item.subtitle,
        description: fp.hologramBox.description || item.description,
      };
    }
    if (item.id === "spatial-display" && fp.spatialDisplay) {
      return {
        ...item,
        title: fp.spatialDisplay.title || item.title,
        subtitle: fp.spatialDisplay.category || item.subtitle,
        description: fp.spatialDisplay.description || item.description,
      };
    }
    if (item.id === "virtual-try-on" && fp.virtualTryOn) {
      return {
        ...item,
        title: fp.virtualTryOn.title || item.title,
        subtitle: fp.virtualTryOn.category || item.subtitle,
        description: fp.virtualTryOn.description || item.description,
      };
    }
    return item;
  });

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black" />

      <div className="relative mx-auto max-w-7xl">
        <div className="divide-y divide-white/10">
          {localizedProducts.map((product, index) => {
            const activeImg = product.images ? product.images[hologramIndex] : product.imageSrc;
            return (
              <div key={product.id} className="py-24 first:pt-0 last:pb-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                    product.reverseLayout ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* IMAGE CONTAINER WITH CONTINUOUS SCROLL / FLOAT ANIMATION */}
                  <div
                    className={`group relative ${
                      product.reverseLayout ? "lg:col-start-2" : ""
                    }`}
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-2xl border border-white/15 bg-neutral-900/40 p-2 backdrop-blur-xl shadow-2xl"
                      animate={{
                        y: [0, -14, 0, 14, 0],
                        boxShadow: [
                          `0 10px 40px -10px ${product.accentGlow}`,
                          `0 25px 65px -5px ${product.accentGlow}`,
                          `0 10px 40px -10px ${product.accentGlow}`,
                        ],
                      }}
                      transition={{
                        duration: 7 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Glowing background gradient inside frame */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-50 transition-opacity duration-700 group-hover:opacity-100`}
                      />

                      {/* Continuous Auto-Pan Image Container */}
                      <div className={`relative w-full overflow-hidden rounded-xl bg-black/60 ${
                        product.id === "digital-humans" ? "aspect-[16/11]" : "aspect-[4/5]"
                      }`}>
                        {/* Live Status Badge overlay */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                          </span>
                          <span className="text-xs font-medium tracking-wider text-white/90 uppercase">
                            {product.badge}
                          </span>
                        </div>

                        {/* Glass light reflection sheen layer */}
                        <motion.div
                          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatDelay: 3 + index,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Continuous Smooth Camera Motion Image */}
                        {product.imageSrc ? (
                          <motion.div
                            className="relative h-full w-full"
                            animate={{
                              y: ["0%", "-4%", "0%", "3%", "0%"],
                              scale: [1, 1.05, 1.02, 1.04, 1],
                            }}
                            transition={{
                              duration: 12 + index * 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Image
                              src={activeImg}
                              alt={product.imageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className={
                                product.id === "spatial-display" || product.id === "digital-humans" || product.id === "hologram-box"
                                  ? "object-contain bg-neutral-950 p-1.5 transition-transform duration-700 group-hover:scale-105"
                                  : "object-cover transition-transform duration-700 group-hover:scale-105"
                              }
                              priority={index === 0}
                            />
                          </motion.div>
                      ) : (
                        <div className="relative h-full w-full bg-gradient-to-br from-cyan-950/80 via-neutral-950 to-black p-8 flex flex-col justify-between overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-sky-600/5 to-transparent blur-xl" />
                          <div className="relative z-10 font-mono text-xs text-cyan-400 tracking-wider">
                            ● VOLUMETRIC OPTICAL PANEL
                          </div>
                          <div className="relative z-10 my-auto text-center">
                            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                              3D SPATIAL DISPLAY
                            </span>
                            <p className="mt-2 text-xs text-gray-400 font-mono">
                              Eye-tracked depth shift technology
                            </p>
                          </div>
                          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-gray-500">
                            <span>86" OPTICAL LIGHT-FIELD</span>
                            <span>SUB-MILLIMETER DEPTH</span>
                          </div>
                        </div>
                      )}

                      {/* Subtle Vignette Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                      {/* Number Overlay in corner */}
                      <div className="absolute bottom-4 right-5 z-20 font-mono text-3xl font-light text-white/40 group-hover:text-white/80 transition-colors">
                        {product.number}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* TEXT / DETAILS CONTENT */}
                <div
                  className={`flex flex-col justify-center ${
                    product.reverseLayout ? "lg:col-start-1" : ""
                  }`}
                >
                  <p className="mb-4 text-xs tracking-[0.3em] font-semibold text-gray-400 uppercase">
                    {product.number} — {product.subtitle}
                  </p>

                  <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                    {product.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                    {product.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Link
                      href={lPath(product.linkHref)}
                      className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition-colors hover:text-cyan-400"
                    >
                      <span>{product.linkText || `Explore ${product.title}`}</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-lg"
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}