"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const spatialFeatures = [
  {
    title: "Volumetric 3D Visuals",
    description:
      "Advanced lenticular light-field spatial optics enabling natural 3D depth perception without requiring specialized wearables or headsets.",
    icon: "👁️",
    badge: "3D Spatial Optics",
  },
  {
    title: "Real-Time Optical Eye Tracking",
    description:
      "High-speed precision camera sensors continuously track viewer eye position, dynamically rendering perspective shifts for crisp, stereoscopic 3D clarity from any angle.",
    icon: "🎯",
    badge: "Eye Tracking AI",
  },
  {
    title: "DIHUAVA Avatar Engine Integration",
    description:
      "Seamlessly paired with HS Global AI's DIHUAVA engine to render interactive 3D avatars, real-time conversational agents, and 3D product models in true spatial depth.",
    icon: "⚡",
    badge: "Interactive Avatars",
  },
  {
    title: "High-Brightness Commercial Panel",
    description:
      "Industrial-grade 800 nits high-brightness display engineered for bright retail environments, trade shows, luxury brand showrooms, and spatial digital signage.",
    icon: "✨",
    badge: "800 Nits Brightness",
  },
];

const spatialSpecs = [
  { label: "Screen Sizes", value: "86-Inch, 65-Inch (Custom volumetric wall tiling available)" },
  { label: "3D Display Technology", value: "Light-Field Spatial Optical Panel" },
  { label: "Tracking Sensor", value: "High-Speed Real-Time Optical Eye & Head Motion Camera" },
  { label: "Viewing Angle & Depth", value: "160° Ultra-Wide Viewing Angle with 3D Depth Field" },
  { label: "Brightness & Contrast", value: "800 nits Commercial Grade / 5000:1 Dynamic Contrast Ratio" },
  { label: "Content Compatibility", value: "DIHUAVA 3D Digital Humans, OBJ/FBX 3D Models, Real-Time Unity/Unreal Engine" },
  { label: "Available Documentation", value: "86 Inch SPATIAL DISPLAY Data Sheet, Latest Spatial Screen Price List" },
];

export default function SpatialDisplayPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href="/products" className="hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">Spatial Display</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  Volumetric 3D Optics
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                AI Spatial Display{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  Volumetric Screen.
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                Transform standard digital signage into immersive 3D spatial experiences. Designed for luxury product showcases, retail storefronts, architectural walkthroughs, and interactive digital human interactions.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  Book Spatial Display Demo →
                </Link>
                <Link
                  href="/contact/download-center"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  Download Spatial Datasheet (PDF)
                </Link>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] overflow-hidden rounded-3xl border border-cyan-500/35 bg-neutral-950/90 p-3.5 backdrop-blur-xl shadow-[0_0_60px_rgba(6,182,212,0.25)]">
                {/* Ambient glow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-sky-500/5 to-transparent pointer-events-none" />

                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl">
                  <Image
                    src="/products/spatial-display/spatial-display.png"
                    alt="AI Spatial Display Volumetric Screen Showcase"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-contain bg-neutral-950"
                  />

                  {/* Gradient vignette for contrast */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                  {/* Top Live Tech Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                    </span>
                    <span className="text-[11px] font-mono font-medium tracking-wider text-cyan-300 uppercase">
                      3D Volumetric Hardware
                    </span>
                  </div>

                  {/* Bottom System Overlay Status */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/15 bg-black/80 p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-semibold">● SPATIAL DISPLAY 3D</span>
                      <span className="text-emerald-400 font-bold">LIGHT-FIELD OPTICS</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-gray-300">
                      Real-time 3D volumetric product showcase with glasses-free spatial depth shift
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPATIAL DISPLAY FEATURES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Technology Overview
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Next-generation spatial visuals for real-world spaces.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {spatialFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/40 text-2xl">
                      {feature.icon}
                    </span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Technical Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Spatial Display Specifications
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-2xl backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {spatialSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-2 px-6 py-4.5 sm:grid-cols-3 sm:gap-4 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-cyan-300 font-mono">
                    {spec.label}
                  </span>
                  <span className="text-sm text-gray-300 sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SPATIAL DATA SHEET */}
      <section className="relative overflow-hidden bg-black px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Download Spatial Display Specifications & Prices
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Access 86 Inch Spatial Display Data Sheets and current price lists in our Download Center.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/download-center"
              className="rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Get Spatial Display Datasheet →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
