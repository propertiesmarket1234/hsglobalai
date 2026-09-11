"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Maximize,
  Eye,
  Target,
  Zap,
  ShoppingBag,
  Building2,
  Stethoscope,
  GraduationCap,
  Castle,
  HelpCircle,
  CheckCircle2,
  Monitor,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const spatialFeatures = [
  {
    title: "Ultra-Slim 6 cm Profile & 4K Ultra HD",
    description:
      "Engineered with an ultra-thin 6 cm depth profile featuring a high-precision 4K Ultra HD touch screen panel for true volumetric spatial depth.",
    icon: Maximize,
    badge: "6 cm Ultra-Slim 4K",
  },
  {
    title: "Volumetric 3D Visuals",
    description:
      "Advanced lenticular light-field spatial optics enabling natural 3D depth perception without requiring specialized wearables or headsets.",
    icon: Eye,
    badge: "3D Spatial Optics",
  },
  {
    title: "Real-Time Optical Eye Tracking",
    description:
      "High-speed precision camera sensors continuously track viewer eye position, dynamically rendering perspective shifts for crisp, stereoscopic 3D clarity from any angle.",
    icon: Target,
    badge: "Eye Tracking AI",
  },
  {
    title: "DIHUAVA AI Integration",
    description:
      "Seamlessly connects with the DIHUAVA platform to deliver interactive AI Digital Humans, conversational experiences, and 3D content in true spatial depth.",
    icon: Zap,
    badge: "Interactive Avatars",
  },
];

const definitionPoints = [
  {
    title: "Immersive Visual Display",
    description:
      "Delivers realistic 3D volumetric visual depth perception directly to viewer eyes without requiring specialized glasses or AR/VR headsets.",
    icon: Eye,
  },
  {
    title: "3D & Spatial Presentation",
    description:
      "Presents products, architectural models, and graphics with true spatial depth, turning 2D visual media into engaging stereoscopic assets.",
    icon: Layers,
  },
  {
    title: "Interactive Experience",
    description:
      "Combines a responsive multi-touch glass panel with real-time optical eye-tracking sensors to adapt perspective as viewers move.",
    icon: Target,
  },
  {
    title: "AI Digital Human Integration",
    description:
      "Serves as an immersive physical stage for DIHUAVA AI Digital Human avatars to converse with visitors in real-time.",
    icon: Zap,
  },
  {
    title: "Enterprise & Visitor Engagement",
    description:
      "Engineered for high-traffic physical customer environments to transform passive signage into active engagement touchpoints.",
    icon: Building2,
  },
];

const spatialIndustries = [
  {
    title: "Retail & Shopping",
    category: "Commercial Showcase",
    description:
      "Interactive product visualization, guided shopping experiences, and 3D luxury product demonstrations.",
    link: "/industries/retail",
    icon: ShoppingBag,
  },
  {
    title: "Corporate & Enterprise",
    category: "Lobby & Reception",
    description:
      "Interactive reception desks, building directory assistance, executive presentations, and visitor onboarding.",
    link: "/industries/corporate",
    icon: Building2,
  },
  {
    title: "Healthcare & Clinics",
    category: "Patient Guidance",
    description:
      "Patient information assistance, hospital department wayfinding, and interactive medical education.",
    link: "/industries/healthcare",
    icon: Stethoscope,
  },
  {
    title: "Education & Training",
    category: "Interactive Learning",
    description:
      "STEM learning demonstrations, complex 3D model exploration, and immersive training environments.",
    link: "/industries/education",
    icon: GraduationCap,
  },
  {
    title: "Hospitality & Tourism",
    category: "Visitor Services",
    description:
      "Hotel concierge assistance, regional destination exploration, and interactive cultural storytelling.",
    link: "/industries/tourism",
    icon: Castle,
  },
  {
    title: "Museums & Public Spaces",
    category: "Exhibition Docent",
    description:
      "Interactive exhibit storytelling, public information kiosks, and high-impact visitor engagement.",
    link: "/industries/tourism",
    icon: HelpCircle,
  },
];

const businessValues = [
  {
    title: "Attract Foot Traffic & Visitor Attention",
    description:
      "Captures visual attention in busy retail stores, trade shows, and lobbies using glasses-free 3D spatial visual impact.",
    icon: Sparkles,
  },
  {
    title: "Present Complex Products Visually",
    description:
      "Showcases intricate 3D product designs, internal component breakdowns, and architectural layouts in volumetric detail.",
    icon: Layers,
  },
  {
    title: "Explain Information Interactively",
    description:
      "Replaces static display screens with touch-responsive and voice-guided conversational information delivery.",
    icon: Zap,
  },
  {
    title: "Elevate Visitor Engagement",
    description:
      "Creates memorable physical interactions that increase visitor dwell time and strengthen brand confidence.",
    icon: CheckCircle2,
  },
  {
    title: "Connect AI Digital Humans to Physical Spaces",
    description:
      "Provides a physical volumetric stage for DIHUAVA AI Digital Humans to greet visitors, answer questions, and guide customers.",
    icon: Monitor,
  },
];

const comparisonData = [
  {
    feature: "Visual Depth & Presentation",
    conventional: "Flat 2D image output; single focal plane view",
    spatial: "Volumetric 3D spatial depth perception without specialized glasses",
  },
  {
    feature: "Viewer Interaction",
    conventional: "Passive viewing or basic 2D touch menu navigation",
    spatial: "Multi-touch glass surface paired with real-time optical eye-tracking perspective shifts",
  },
  {
    feature: "AI Avatar Integration",
    conventional: "Standard 2D flat video avatar overlay",
    spatial: "Immersive 3D visual stage rendering for lifelike DIHUAVA AI Digital Humans",
  },
  {
    feature: "Deployment Environments",
    conventional: "Standard digital signage, broadcast screens, and basic video loops",
    spatial: "High-impact retail showcases, corporate lobbies, healthcare guidance, and exhibition centers",
  },
  {
    feature: "Perspective Adaptation",
    conventional: "Static viewing angle; visual perspective distorts off-center",
    spatial: "Dynamic eye-tracking sensor adjusts 3D perspective to match viewer position",
  },
];

const spatialSpecs = [
  { label: "Available Sizes", value: '55-inch, 65-inch, 75-inch, 86-inch' },
  { label: "Profile Thickness", value: "Ultra-Slim 6 cm Body Thickness" },
  { label: "Display & Touch Panel", value: "Spatial Display Touch Screen with 4K Ultra HD Resolution" },
  { label: "3D Display Technology", value: "Light-Field Spatial Optical Panel" },
  { label: "Optical Tracking Sensor", value: "High-Speed Real-Time Optical Eye & Motion Camera" },
  { label: "AI Software Compatibility", value: "DIHUAVA AI Platform (Runs 100% offline on-device by default)" },
  { label: "3D Asset Compatibility", value: "DIHUAVA 3D Avatars, OBJ/FBX 3D Models, Real-Time Unity/Unreal Engine" },
  { label: "Documentation", value: "Spatial Display Data Sheet, Product Specifications PDF" },
];

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function SpatialDisplayClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const sPage = (dict as any).spatialPage || {};
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const localizedSpecs = sPage.specs || spatialSpecs;
  const localizedDefPoints = definitionPoints.map((pt, idx) => {
    const dictPt = sPage.definitionPoints && sPage.definitionPoints[idx];
    return dictPt ? { ...pt, title: dictPt.title || pt.title, description: dictPt.description || pt.description } : pt;
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href={lPath("/products")} className="hover:text-cyan-400 transition-colors">
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
                  {sPage.heroBadge || "Naked-Eye 3D AI Display"}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                {sPage.heroTitle || "Spatial Display "}{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  {sPage.heroTitleHighlight || "(3D Volumetric)"}
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                {sPage.heroDescription || "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments."} Featuring an ultra-slim <strong>6 cm body thickness</strong> and <strong>4K Ultra HD touch screen panel</strong>, available in <strong>55&quot;, 65&quot;, 75&quot;, and 86&quot;</strong> display sizes. Also explore our life-size <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Box enclosures</Link>.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={lPath("/contact")}
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  Book Spatial Display Demo →
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  Download Spatial Datasheet (PDF)
                </Link>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] overflow-hidden rounded-3xl border border-cyan-500/35 bg-neutral-950/90 p-3.5 backdrop-blur-xl shadow-[0_0_60px_rgba(6,182,212,0.25)]">
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

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                    </span>
                    <span className="text-[11px] font-mono font-medium tracking-wider text-cyan-300 uppercase">
                      6 cm Profile • 55&quot;–86&quot;
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/15 bg-black/80 p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-semibold">● 6 CM THICKNESS</span>
                      <span className="text-amber-400 font-bold">4K ULTRA HD</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-gray-300">
                      Spatial Display Touch Screen with 4K Ultra HD volumetric depth perception
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY HARDWARE HIGHLIGHT SECTION */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-20 border-b border-cyan-500/30">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[700px] rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-amber-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">
              ★ Confirmed Hardware Specifications
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-8 my-4">
            <div className="flex-1 max-w-[120px] sm:max-w-[220px] h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 shadow-[0_0_12px_#06b6d4]" />

            <h2 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.6)] font-mono">
              6 cm
            </h2>

            <div className="flex-1 max-w-[120px] sm:max-w-[220px] h-[3px] bg-gradient-to-l from-transparent via-cyan-400 to-indigo-500 shadow-[0_0_12px_#06b6d4]" />
          </div>

          <h3 className="mt-6 text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white leading-tight">
            Spatial Display Touch Screen
            <br />
            <span className="text-gray-200">With </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
              4K Ultra HD
            </span>
          </h3>

          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-8 text-gray-300">
            Featuring an ultra-thin <strong>6 cm body thickness</strong>, responsive multi-touch interactive glass surface, and ultra-crisp <strong>4K Ultra HD resolution</strong> across <strong>55&quot;, 65&quot;, 75&quot;, and 86&quot;</strong> screen sizes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/40 px-6 py-3.5 backdrop-blur-md">
              <p className="text-xs font-mono text-purple-300 uppercase">Body Profile</p>
              <p className="text-xl font-bold text-white mt-0.5">6 cm Depth</p>
            </div>
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/40 px-6 py-3.5 backdrop-blur-md">
              <p className="text-xs font-mono text-cyan-300 uppercase">Available Sizes</p>
              <p className="text-xl font-bold text-white mt-0.5">55&quot;, 65&quot;, 75&quot;, 86&quot;</p>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/40 px-6 py-3.5 backdrop-blur-md">
              <p className="text-xs font-mono text-amber-300 uppercase">Interactive Panel</p>
              <p className="text-xl font-bold text-amber-400 mt-0.5">4K Touch Screen</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DEFINITION SECTION — WHAT IS SPATIAL DISPLAY? */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              Product Definition
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              What is Spatial Display?
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              Spatial Display is an immersive hardware display platform engineered to present stereoscopic 3D visuals and host interactive AI Digital Humans directly in physical spaces without specialized headsets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {definitionPoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <IconComp className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{pt.title}</h3>
                  <p className="text-sm leading-7 text-gray-300">{pt.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIHUAVA AI INTEGRATION SECTION */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-cyan-500/30">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-cyan-600/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Box */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md mb-6">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase font-mono">
                  Hardware & Software Partnership
                </span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Integrating Spatial Display with{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  DIHUAVA AI Digital Humans
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                Spatial Display serves as the <strong>physical immersive visual environment</strong> for DIHUAVA AI Digital Humans. While Spatial Display provides the 6 cm 4K light-field display panel and optical sensors, DIHUAVA acts as the AI software intelligence layer powering speech recognition, avatar animation, and local document RAG.
              </p>

              <div className="mt-6 rounded-2xl border border-cyan-500/40 bg-cyan-950/60 p-5 backdrop-blur-md">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                  Canonical AI Architecture
                </span>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  &quot;DIHUAVA runs 100% offline on-device by default, with optional cloud-management configurations available.&quot;
                </p>
              </div>

              <p className="mt-6 text-sm text-gray-400 leading-relaxed">
                Spatial Display itself is high-performance 3D display hardware, not an AI system. When paired with DIHUAVA, it provides a physical volumetric stage where interactive AI avatars interact with visitors smoothly in real-time.
              </p>

              <div className="mt-8">
                <Link
                  href={lPath("/products/ai-digital-human")}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 underline"
                >
                  <span>Learn more about DIHUAVA AI Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 font-mono">
                  System Architecture Division
                </h3>

                <div className="space-y-6">
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/30 p-5">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      Physical Layer (Hardware)
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">Spatial Display</h4>
                    <ul className="mt-2 text-xs text-gray-300 space-y-1.5 font-mono">
                      <li>• 6 cm Ultra-Slim Body Thickness</li>
                      <li>• 55&quot;, 65&quot;, 75&quot;, 86&quot; 4K Touch Panels</li>
                      <li>• Light-Field Spatial Optics</li>
                      <li>• Real-Time Eye Tracking Sensors</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/30 bg-sky-950/30 p-5">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                      Intelligence Layer (Software)
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">DIHUAVA Platform</h4>
                    <ul className="mt-2 text-xs text-gray-300 space-y-1.5 font-mono">
                      <li>• AI Digital Human Avatars</li>
                      <li>• On-Device Speech & Local RAG</li>
                      <li>• 29+ Global Languages</li>
                      <li>• 100% Offline GPU Processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPATIAL FEATURES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
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
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <feature.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
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

      {/* SPATIAL DISPLAY INDUSTRY APPLICATIONS */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              Target Deployments
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Spatial Display Across Commercial Sectors
            </h2>
            <p className="mt-4 text-base text-gray-300">
              Discover how naked-eye 3D spatial displays and AI Digital Humans enhance customer environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spatialIndustries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        <IndIcon className="w-6 h-6" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-300 backdrop-blur-sm">
                        {ind.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {ind.title}
                    </h3>

                    <p className="text-xs leading-6 text-gray-300 mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={lPath(ind.link)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors uppercase tracking-wider"
                    >
                      <span>Explore Industry Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS PROBLEM / VALUE SECTION */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              Commercial Intent & Value
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              What Business Problems Does Spatial Display Solve?
            </h2>
            <p className="mt-4 text-base text-gray-300">
              Address key physical customer environment challenges with high-impact 3D visual presentation and interactive avatar integration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessValues.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl border border-cyan-500/20 bg-neutral-950/80 p-8 backdrop-blur-xl shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 mb-5">
                    <ValIcon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm leading-7 text-gray-300">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPATIAL DISPLAY VS CONVENTIONAL DISPLAY COMPARISON TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              Technology Comparison
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Spatial Display vs. Conventional Display
            </h2>
            <p className="mt-4 text-base text-gray-300">
              A factual category-based comparison highlighting visual depth, interactive optics, and AI Digital Human compatibility.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-black/80 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-12 bg-cyan-950/80 px-6 py-4 border-b border-cyan-500/30 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
              <div className="col-span-4 sm:col-span-3">Feature Category</div>
              <div className="col-span-4 sm:col-span-4 text-gray-400">Conventional Display</div>
              <div className="col-span-4 sm:col-span-5 text-cyan-300">Spatial Display</div>
            </div>

            <div className="divide-y divide-white/10">
              {comparisonData.map((row, idx) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 px-6 py-5 text-sm ${
                    idx % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <div className="col-span-12 sm:col-span-3 font-semibold text-white font-mono mb-2 sm:mb-0">
                    {row.feature}
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-gray-400 pr-4 mb-2 sm:mb-0">
                    {row.conventional}
                  </div>
                  <div className="col-span-12 sm:col-span-5 font-semibold text-cyan-200">
                    {row.spatial}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Technical Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Spatial Display Specifications
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-neutral-950/90 shadow-2xl backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {localizedSpecs.map((spec: any, i: number) => (
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

      <CTA
        title="Bring 3D Spatial Displays"
        highlightTitle="To Your Customer Environment"
        description="Experience volumetric light-field displays for retail showcases, corporate lobbies, exhibitions, interactive kiosks, and 3D digital human presentations."
        primaryButtonText="Book a Demo"
        secondaryButtonText="Download Datasheets (PDF)"
        secondaryButtonHref={lPath("/contact/download-center")}
      />
      <Footer />
    </main>
  );
}
