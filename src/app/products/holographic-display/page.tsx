"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const hologramFeatures = [
  {
    title: "Life-Size 3D Volumetric Enclosure",
    description:
      "Available in 65-inch, 75-inch, and 86-inch vertical holographic glass showcases displaying 1:1 scale digital human avatars with hyper-realistic depth perception and lifelike presence.",
    icon: "📦",
    badge: "65\" / 75\" / 86\" Sizes",
  },
  {
    title: "Integrated AI Workstation",
    description:
      "Built-in industrial-grade computing unit running DIHUAVA offline AI engine. Zero cloud dependence, sub-3000ms latency, and high-security enterprise operation.",
    icon: "⚙️",
    badge: "On-Device Processing",
  },
  {
    title: "Multimodal Interaction Sensors",
    description:
      "Equipped with wide-angle HD camera tracking, directional microphone array, capacitive touch glass, and distance proximity sensors for natural human interaction.",
    icon: "👁️",
    badge: "Camera & Sensor Array",
  },
  {
    title: "Directional Acoustic Sound Bar",
    description:
      "Focused spatial audio system designed for noisy exhibition halls, bank lobbies, and shopping malls, ensuring crystal-clear speech intelligibility.",
    icon: "🔊",
    badge: "Spatial Audio",
  },
];

const hardwareSpecs = [
  { label: "Display Size Options", value: "65-Inch, 75-Inch, 86-Inch (Custom OEM sizes available)" },
  { label: "Display Technology", value: "Ultra-HD 4K (3840 x 2160) High-Transmittance Holographic Optical Glass" },
  { label: "Brightness & Contrast", value: "700 nits High Brightness / 4000:1 Dynamic Contrast Ratio" },
  { label: "Touch & Camera System", value: "10-point Capacitive Touch Glass + 4K Wide-Angle Tracking Camera" },
  { label: "Audio Hardware", value: "Integrated Directional Acoustic Soundbar & Beamforming Microphone Array" },
  { label: "Operating Environment", value: "Designed for continuous 24/7 commercial operations (Lobbies, Malls, Museums)" },
  { label: "Compliant Datasheets", value: "86 Inch Hologram Box Data Sheet, Price List, Product Comparison Sheet" },
];

export default function HolographicDisplayPage() {
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
            <span className="text-cyan-300 font-semibold">AI Hologram Box</span>
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
                  3D Volumetric Enclosure
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                AI Holographic Display{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  Hologram Box.
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                Bring intelligent AI Digital Humans into physical environments. Available in <strong className="text-cyan-300">65-inch, 75-inch, and 86-inch</strong> 3D holographic enclosures engineered for high-impact retail showcases, VIP bank lounges, corporate headquarters, and museum exhibits.
              </p>

              {/* Size Badge Selector Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                  Available Sizes:
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  65" Inch
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  75" Inch
                </span>
                <span className="rounded-full border border-cyan-500/40 bg-cyan-950/80 px-3.5 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  86" Inch
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  Book Hologram Box Demo →
                </Link>
                <Link
                  href="/contact/download-center"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  Download Spec Sheets (PDF)
                </Link>
              </div>
            </div>

            {/* Right Visual Image with Size Badges */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950/80 p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src="/products/hologram-box/hologram-box.png"
                    alt="AI Hologram Box Enclosure Sizes 65 75 86 inch"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Right Size Badge Floating Pill on Image */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-black/85 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <span className="text-[11px] font-semibold text-cyan-300 font-mono">SIZES:</span>
                    <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-xs font-extrabold text-white border border-cyan-400/40">65"</span>
                    <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-xs font-extrabold text-white border border-cyan-400/40">75"</span>
                    <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 text-xs font-extrabold text-white border border-cyan-400/40">86"</span>
                  </div>

                  {/* System Overlay Status */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/15 bg-black/85 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-bold">● AI HOLOGRAM BOX</span>
                      <span className="text-emerald-400 font-bold">65" | 75" | 86"</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-300">
                      Life-size 1:1 scale digital avatar enclosure with touch & camera sensors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOLOGRAM BOX FEATURES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Hardware Highlights
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Turnkey holographic hardware built for physical spaces.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {hologramFeatures.map((feature) => (
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

      {/* HARDWARE SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Hardware Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI Hologram Box Technical Parameters
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 shadow-2xl backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {hardwareSpecs.map((spec, i) => (
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

      {/* DOWNLOAD SPEC SHEETS */}
      <section className="relative overflow-hidden bg-black px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Looking for Hologram Box Datasheets & Price Lists?
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Download official spec sheets, OEM licenses, and product comparisons in PDF format.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/download-center"
              className="rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Get Hologram Box Datasheets →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
