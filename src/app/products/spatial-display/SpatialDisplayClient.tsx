"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Plus,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

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
  { label: "Available Sizes", value: '32-inch, 43-inch, 55-inch, 65-inch, 75-inch, 86-inch' },
  { label: "Profile Thickness", value: "Ultra-Slim 6 cm Body Thickness" },
  { label: "Display & Touch Panel", value: "Spatial Display Touch Screen with 4K Ultra HD Resolution" },
  { label: "3D Display Technology", value: "Light-Field Spatial Optical Panel" },
  { label: "Optical Tracking Sensor", value: "High-Speed Real-Time Optical Eye & Motion Camera" },
  { label: "AI Software Compatibility", value: "DIHUAVA AI Platform (Runs 100% offline on-device by default)" },
  { label: "3D Asset Compatibility", value: "DIHUAVA 3D Avatars, OBJ/FBX 3D Models, Real-Time Unity/Unreal Engine" },
  { label: "Documentation", value: "Spatial Display Data Sheet, Product Specifications PDF" },
];

const faqsList = [
  {
    q: "What is a Spatial Display?",
    a: "Spatial Display is a glasses-free 3D display technology that uses spatial optical techniques to present immersive visual depth directly to viewers without requiring 3D glasses or headsets. HS Global AI's Spatial Display seamlessly integrates with DIHUAVA AI Digital Humans for interactive customer and enterprise experiences.",
  },
  {
    q: "Is the Spatial Display completely glasses-free?",
    a: "Yes. Spatial Display features lenticular light-field optical technology paired with real-time optical eye tracking to deliver natural stereoscopic 3D depth perception directly to viewer eyes without specialized eyewear or AR/VR headsets.",
  },
  {
    q: "What sizes are available for commercial deployment?",
    a: "Spatial Display is available in six confirmed screen sizes: 32-inch, 43-inch, 55-inch, 65-inch, 75-inch, and 86-inch 4K Ultra HD touch panels.",
  },
  {
    q: "How does the DIHUAVA AI software integrate with Spatial Display?",
    a: "Spatial Display acts as the physical 3D volumetric display hardware layer, while DIHUAVA serves as the AI software intelligence layer. DIHUAVA powers real-time AI Digital Human avatars, speech recognition, local document RAG, and multilingual conversations on the Spatial Display screen.",
  },
  {
    q: "What is the key difference between Spatial Display and an AI Hologram Box?",
    a: "Spatial Display is an ultra-slim 6 cm glasses-free 3D display screen panel using light-field spatial optics. The AI Hologram Box is a 3D glass enclosure showcase designed for life-size 1:1 holographic avatar presentations. Both hardware platforms connect to the DIHUAVA AI software engine.",
  },
  {
    q: "Where can Spatial Display be deployed in enterprise settings?",
    a: "Spatial Display is purpose-built for high-traffic commercial environments including retail luxury showcases, corporate lobbies, hospital wayfinding, educational facilities, hospitality concierge desks, museums, and public exhibitions.",
  },
];

export default function SpatialDisplayClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const sPage = (dict as any).spatialPage || {};
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const localizedSpecs = sPage.specs || spatialSpecs;
  const localizedDefPoints = sPage.definitionPoints || sPage.defPoints || definitionPoints;
  const localizedFeatures = (sPage.features || spatialFeatures).map((feat: any, idx: number) => ({
    ...spatialFeatures[idx],
    title: feat.title,
    description: feat.description,
    badge: feat.badge,
  }));
  const localizedIndustries = (sPage.industries || spatialIndustries).map((ind: any, idx: number) => ({
    ...spatialIndustries[idx],
    title: ind.title,
    category: ind.category,
    description: ind.description,
  }));
  const localizedBusinessValues = (sPage.businessValues || businessValues).map((val: any, idx: number) => ({
    ...businessValues[idx],
    title: val.title,
    description: val.description,
  }));
  const localizedComparison = sPage.comparisonRows || comparisonData;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: (dict as any).common?.navHome || "Home",
        item: `https://www.hsglobalai.com${lPath("/")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: sPage.breadcrumbProducts || "Products",
        item: `https://www.hsglobalai.com${lPath("/products")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: sPage.breadcrumbCurrent || "Spatial Display",
        item: `https://www.hsglobalai.com${lPath("/products/spatial-display")}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      {/* HERO SECTION: SWIPECRAFT LIGHT AESTHETIC */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[var(--lp-muted)] mb-6">
            <Link href={lPath("/products")} className="hover:text-[var(--lp-ink)] transition-colors">
              {sPage.breadcrumbProducts || "Products"}
            </Link>
            <span>/</span>
            <span className="text-[var(--lp-ink)] font-semibold">{sPage.breadcrumbCurrent || "Spatial Display"}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
                  {sPage.heroBadge || "Naked-Eye 3D AI Display"}
                </span>
              </div>

              <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
                {sPage.heroTitle || "Spatial Display "}{" "}
                <span className="text-[var(--lp-muted)]">
                  {sPage.heroTitleHighlight || "(3D Volumetric)"}
                </span>
              </h1>

              <p className="mt-5 text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px] max-w-2xl">
                {sPage.heroDescription || "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments."}
                {sPage.heroInlineDesc1 || " Featuring an ultra-slim "}
                <strong>{sPage.heroInlineThick || "6 cm body thickness"}</strong>
                {sPage.heroInlineDesc2 || " and "}
                <strong>{sPage.heroInlinePanel || "4K Ultra HD touch screen panel"}</strong>
                {sPage.heroInlineDesc3 || ", available in "}
                <strong>{sPage.heroInlineSizes || '32", 43", 55", 65", 75", and 86"'}</strong>
                {sPage.heroInlineDesc4 || " display sizes. Also explore our life-size "}
                <Link href={lPath("/products/holographic-display")} className="text-[var(--lp-accent)] hover:underline font-semibold transition-colors">
                  {sPage.heroHologramLinkText || "AI Hologram Box enclosures"}
                </Link>
                .
              </p>

              {/* Size Selector Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-muted)] mr-1">
                  Available Sizes:
                </span>
                {['32"', '43"', '55"', '65"', '75"', '86" (4K Touch)'].map((sz) => (
                  <span
                    key={sz}
                    className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3 py-1 text-xs font-semibold text-[var(--lp-ink)] shadow-2xs"
                  >
                    {sz}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={lPath("/contact")}
                  className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                >
                  <span>{(sPage.ctaPrimaryBtn || "Book Spatial Display Demo").replace(/→/g, "").trim()}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
                >
                  <span>{sPage.ctaSecondaryBtn || "Download Spatial Datasheet (PDF)"}</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] overflow-hidden rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-3.5 shadow-[var(--lp-shadow-card)]">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-[#0F172A] border border-[var(--lp-line)] shadow-lg">
                  <Image
                    src="/products/spatial-display/spatial-display.png"
                    alt={sPage.imageAlt || "AI Spatial Display Volumetric Screen Showcase"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain bg-[#0F172A]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
                    </span>
                    <span className="text-[11px] font-medium tracking-wider text-white uppercase">
                      {sPage.heroPillProfile || '6 cm Profile • 32"–86"'}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/15 bg-black/75 p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-semibold">{sPage.heroOverlayThickness || "6 CM PROFILE"}</span>
                      <span className="text-amber-400 font-bold">4K ULTRA HD</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-gray-200">
                      {sPage.heroOverlayCaption || "Spatial Display Touch Screen with 4K Ultra HD volumetric depth perception"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY HARDWARE HIGHLIGHT SECTION */}
      <section className="relative overflow-hidden bg-[var(--lp-tile)] px-6 py-20 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-4 py-1.5 mb-6 shadow-2xs">
            <span className="text-xs font-bold tracking-widest text-[var(--lp-ink)] uppercase">
              {(sPage.hardwareHighlightBadge || "Confirmed Hardware Specifications").replace(/★/g, "").trim()}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--lp-ink)] mt-2 mb-4">
            6 cm Ultra-Slim Profile &amp; 4K Resolution
          </h2>

          <div className="flex items-center justify-center gap-4 sm:gap-8 my-4">
            <div className="flex-1 max-w-[120px] sm:max-w-[220px] h-[2px] bg-[var(--lp-line)]" />
            <div className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[var(--lp-ink)] font-sans">
              6 cm
            </div>
            <div className="flex-1 max-w-[120px] sm:max-w-[220px] h-[2px] bg-[var(--lp-line)]" />
          </div>

          <h3 className="mt-6 text-2xl sm:text-4xl font-semibold tracking-tight text-[var(--lp-ink)] leading-tight">
            {sPage.hardwareHighlightTitle1 || "Spatial Display Touch Screen"}{" "}
            <span className="text-[var(--lp-accent)]">
              {sPage.hardwareHighlightTitle2 || "With 4K Ultra HD"}
            </span>
          </h3>

          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-8 text-[var(--lp-ink-2)]">
            {sPage.hardwareHighlightDesc || "Experience the fusion of high-precision touch sensitivity and lenticular light-field 3D optics. Ultra-slim profile allows seamless recessed architectural wall mounting or standalone floor kiosk deployment."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] px-6 py-3.5 shadow-2xs">
              <p className="text-xs text-[var(--lp-muted)] uppercase">{sPage.cardProfileLabel || "Body Profile"}</p>
              <p className="text-xl font-bold text-[var(--lp-ink)] mt-0.5">{sPage.cardProfileVal || "6 cm Depth"}</p>
            </div>
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] px-6 py-3.5 shadow-2xs">
              <p className="text-xs text-[var(--lp-muted)] uppercase">{sPage.cardSizesLabel || "Available Sizes"}</p>
              <p className="text-xl font-bold text-[var(--lp-ink)] mt-0.5">{sPage.cardSizesVal || '32", 43", 55", 65", 75", 86"'}</p>
            </div>
            <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] px-6 py-3.5 shadow-2xs">
              <p className="text-xs text-[var(--lp-muted)] uppercase">{sPage.cardPanelLabel || "Interactive Panel"}</p>
              <p className="text-xl font-bold text-[var(--lp-accent)] mt-0.5">{sPage.cardPanelVal || "4K Touch Screen"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DEFINITION SECTION — WHAT IS SPATIAL DISPLAY? */}
      <section className="relative overflow-hidden px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--lp-accent)] uppercase">
              {sPage.defSectionBadge || "Product Definition"}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-5xl">
              {sPage.defSectionTitle || "What is Spatial Display?"}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--lp-ink-2)]">
              {sPage.defSectionDesc || "Spatial Display is a glasses-free 3D display technology that uses spatial optical techniques to present immersive visual depth directly to viewers without requiring 3D glasses or headsets. HS Global AI's Spatial Display can integrate with DIHUAVA AI Digital Humans for interactive customer and enterprise experiences."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedDefPoints.map((pt: any, idx: number) => {
              const IconComp = definitionPoints[idx]?.icon || Eye;
              return (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-7 shadow-xs hover:shadow-md transition-shadow"
                >
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-ink)] mb-5 shadow-2xs"
                  >
                    <IconComp className="w-5 h-5 text-[var(--lp-ink)]" />
                  </motion.span>
                  <h3 className="text-lg font-bold text-[var(--lp-ink)] mb-2">{pt.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--lp-ink-2)]">{pt.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIHUAVA AI INTEGRATION SECTION */}
      <section className="relative overflow-hidden bg-[var(--lp-tile)] px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Box */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3.5 py-1.5 mb-6 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[var(--lp-accent)]" />
                <span className="text-xs font-bold tracking-wider text-[var(--lp-ink)] uppercase">
                  {sPage.partnershipBadge || "Hardware & Software Synergy"}
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-5xl leading-tight">
                {sPage.partnershipTitlePrefix || "Integrating Spatial Display with "}{" "}
                <span className="text-[var(--lp-muted)]">
                  {sPage.partnershipTitleHighlight || "DIHUAVA AI Digital Humans"}
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--lp-ink-2)] sm:text-lg">
                {sPage.partnershipDesc1 || "While Spatial Display serves as the physical naked-eye 3D screen, DIHUAVA provides the cognitive AI layer: real-time avatar synthesis, directional speech understanding, and on-premise knowledge retrieval."}
              </p>

              <div className="mt-6 rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-5 shadow-xs">
                <span className="text-xs font-bold text-[var(--lp-accent)] uppercase tracking-wider block mb-1">
                  {sPage.canonicalArchBadge || "Canonical AI Architecture"}
                </span>
                <p className="text-sm font-semibold text-[var(--lp-ink)] leading-relaxed">
                  {sPage.canonicalArchQuote || "The Spatial Display screen functions as the physical stage, while the DIHUAVA platform acts as the AI intelligence engine powering customer conversations."}
                </p>
              </div>

              <p className="mt-6 text-sm text-[var(--lp-ink-2)] leading-relaxed">
                {sPage.partnershipDesc2 || "This modular architecture ensures enterprise clients can update avatar personalities, fine-tune domain knowledge bases, and add new capabilities without replacing physical display assets."}
              </p>

              <div className="mt-8">
                <Link
                  href={lPath("/products/ai-digital-human")}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors"
                >
                  <span>{sPage.learnDihuavaLink || "Learn more about DIHUAVA AI Platform"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-[var(--lp-shadow-card)]">
                <h3 className="text-lg font-bold text-[var(--lp-ink)] mb-6 border-b border-[var(--lp-line)] pb-4">
                  {sPage.sysArchCardTitle || "System Architecture Division"}
                </h3>

                <div className="space-y-6">
                  <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-5">
                    <span className="text-xs font-bold text-[var(--lp-accent)] uppercase">
                      {sPage.physLayerBadge || "Physical Layer (Hardware)"}
                    </span>
                    <h4 className="text-lg font-bold text-[var(--lp-ink)] mt-1">{sPage.physLayerName || "Spatial Display"}</h4>
                    <ul className="mt-2 text-xs text-[var(--lp-ink-2)] space-y-1.5">
                      {(sPage.physBullets || ["• 6 cm Ultra-Slim Body Thickness", "• 32\", 43\", 55\", 65\", 75\", 86\" 4K Touch Panels", "• Light-Field Spatial Optics", "• Real-Time Eye Tracking Sensors"]).map((b: string, i: number) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-5">
                    <span className="text-xs font-bold text-[var(--lp-ink)] uppercase">
                      {sPage.intelLayerBadge || "Intelligence Layer (Software)"}
                    </span>
                    <h4 className="text-lg font-bold text-[var(--lp-ink)] mt-1">{sPage.intelLayerName || "DIHUAVA Platform"}</h4>
                    <ul className="mt-2 text-xs text-[var(--lp-ink-2)] space-y-1.5">
                      {(sPage.intelBullets || ["• AI Digital Human Avatars", "• On-Device Speech & Local RAG", "• 29+ Global Languages", "• 100% Offline GPU Processing"]).map((b: string, i: number) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPATIAL FEATURES */}
      <section className="relative overflow-hidden px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
              {sPage.featuresTitle || sPage.techOverviewBadge || "Technology Overview"}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] md:text-5xl">
              {sPage.techOverviewHeading || "Next-generation spatial visuals for real-world spaces."}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {localizedFeatures.map((feature: any) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-ink)] shadow-2xs"
                    >
                      <feature.icon className="w-5 h-5 text-[var(--lp-ink)]" strokeWidth={1.75} />
                    </motion.span>
                    <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-1 text-xs font-semibold text-[var(--lp-ink-2)]">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPATIAL DISPLAY INDUSTRY APPLICATIONS */}
      <section className="relative overflow-hidden bg-[var(--lp-tile)] px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--lp-accent)] uppercase">
              {sPage.targetDeploymentsBadge || "Target Deployments"}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-5xl">
              {sPage.targetDeploymentsTitle || "Spatial Display Across Commercial Sectors"}
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              {sPage.targetDeploymentsSubtitle || "Tailored volumetric solutions engineered for high-traffic physical customer touchpoints."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedIndustries.map((ind: any, idx: number) => {
              const IndIcon = ind.icon || Building2;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group flex flex-col justify-between rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-7 shadow-xs hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <motion.span
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-ink)] shadow-2xs"
                      >
                        <IndIcon className="w-5 h-5 text-[var(--lp-ink)]" />
                      </motion.span>
                      <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-1 text-[11px] font-semibold tracking-wide text-[var(--lp-ink-2)]">
                        {ind.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors mb-2">
                      {ind.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-[var(--lp-ink-2)] mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--lp-line)]">
                    <Link
                      href={lPath(ind.link)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors uppercase tracking-wider"
                    >
                      <span>{sPage.exploreIndustryBtn || "Explore Solution"}</span>
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
      <section className="relative overflow-hidden px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--lp-accent)] uppercase">
              {sPage.valueSectionBadge || "Commercial Intent & Value"}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-5xl">
              {sPage.valueSectionTitle || "What Business Problems Does Spatial Display Solve?"}
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              {sPage.valueSectionSubtitle || "Transforming passive screens into high-converting volumetric customer experiences."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedBusinessValues.map((val: any, idx: number) => {
              const ValIcon = val.icon || Sparkles;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-7 shadow-xs hover:shadow-md transition-shadow"
                >
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-ink)] mb-5 shadow-2xs"
                  >
                    <ValIcon className="w-5 h-5 text-[var(--lp-ink)]" />
                  </motion.span>
                  <h3 className="text-lg font-bold text-[var(--lp-ink)] mb-2">{val.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--lp-ink-2)]">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPATIAL DISPLAY VS CONVENTIONAL DISPLAY COMPARISON TABLE */}
      <section className="relative overflow-hidden bg-[var(--lp-tile)] px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--lp-accent)] uppercase">
              {sPage.compSectionBadge || "Technology Comparison"}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-5xl">
              {sPage.compSectionTitle || "Spatial Display vs. Conventional Display"}
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              {sPage.compSectionSubtitle || "Why leading enterprises are transitioning from flat signage to volumetric naked-eye 3D."}
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
            <div className="grid grid-cols-12 bg-[var(--lp-tile)] px-6 py-4 border-b border-[var(--lp-line)] text-xs font-bold uppercase tracking-wider text-[var(--lp-ink)]">
              <div className="col-span-4 sm:col-span-3">{sPage.tableHeaderCategory || "Feature Category"}</div>
              <div className="col-span-4 sm:col-span-4 text-[var(--lp-muted)]">{sPage.tableHeaderConventional || "Conventional 2D Display"}</div>
              <div className="col-span-4 sm:col-span-5 text-[var(--lp-accent)]">{sPage.tableHeaderSpatial || "Spatial Display (3D)"}</div>
            </div>

            <div className="divide-y divide-[var(--lp-line)]">
              {localizedComparison.map((row: any, idx: number) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 px-6 py-5 text-sm ${
                    idx % 2 === 0 ? "bg-[var(--lp-card)]" : "bg-[var(--lp-tile)]/40"
                  }`}
                >
                  <div className="col-span-12 sm:col-span-3 font-semibold text-[var(--lp-ink)] mb-2 sm:mb-0">
                    {row.feature}
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-[var(--lp-muted)] pr-4 mb-2 sm:mb-0">
                    {row.conventional}
                  </div>
                  <div className="col-span-12 sm:col-span-5 font-semibold text-[var(--lp-ink)]">
                    {row.spatial}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPATIAL DISPLAY VS AI HOLOGRAM BOX COMPARISON SECTION */}
      <section className="relative overflow-hidden px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--lp-accent)] uppercase">
              Form Factor &amp; Platform Architecture
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-5xl">
              Spatial Display vs. AI Hologram Box
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              Understand the distinct physical form factors and how the DIHUAVA AI software platform powers interactive experiences across both hardware displays.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Spatial Display Card */}
            <div className="rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1 text-xs font-bold text-[var(--lp-ink)] uppercase">
                  Hardware • 3D Screen Panel
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[var(--lp-ink)]">Spatial Display</h3>
                <p className="mt-3 text-sm text-[var(--lp-ink-2)] leading-relaxed">
                  Ultra-slim 6 cm depth display screen panel using lenticular light-field spatial optics and real-time optical eye tracking to deliver glasses-free 3D stereoscopic depth perception and immersive visual experiences.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-[var(--lp-ink-2)]">
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Glasses-Free / Naked-Eye 3D
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Ultra-Slim 6 cm Display Panel
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Spatial Light-Field Optical Tech
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    32", 43", 55", 65", 75", 86" Touch Panels
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--lp-line)]">
                <span className="text-xs text-[var(--lp-accent)] font-semibold">Primary Role: Volumetric 3D Visual Stage</span>
              </div>
            </div>

            {/* AI Hologram Box Card */}
            <div className="rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1 text-xs font-bold text-[var(--lp-ink)] uppercase">
                  Hardware • Holographic Enclosure
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[var(--lp-ink)]">AI Hologram Box</h3>
                <p className="mt-3 text-sm text-[var(--lp-ink-2)] leading-relaxed">
                  3D holographic display showcase enclosure in a glass cabinet form factor, delivering life-size 1:1 holographic presentation for interactive avatar engagement.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-[var(--lp-ink-2)]">
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    3D Holographic Showcase Enclosure
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Box / Glass Cabinet Form Factor
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Life-Size Holographic Presentation
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    55", 65", 75", 86" Glass Enclosures
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--lp-line)]">
                <Link href={lPath("/products/holographic-display")} className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors">
                  <span>Explore AI Hologram Box</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* DIHUAVA Software Card */}
            <div className="rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1 text-xs font-bold text-[var(--lp-ink)] uppercase">
                  Software • AI Intelligence Layer
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[var(--lp-ink)]">DIHUAVA Platform</h3>
                <p className="mt-3 text-sm text-[var(--lp-ink-2)] leading-relaxed">
                  Enterprise AI Digital Human software platform serving as the intelligence layer powering interactive avatars, local speech recognition, 29+ global languages, and document RAG across hardware.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-[var(--lp-ink-2)]">
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    AI Digital Human Avatars
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Intelligence &amp; Software Layer
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    100% Offline Edge GPU RAG
                  </li>
                  <li className="flex items-center gap-2 text-[var(--lp-ink)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Powers Supported Hardware
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--lp-line)]">
                <Link href={lPath("/products/ai-digital-human")} className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors">
                  <span>Explore DIHUAVA AI Platform</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-[var(--lp-tile)] px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lp-accent)]">
              {sPage.specsTitle || sPage.specsSectionBadge || "Technical Specifications"}
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-4xl">
              {sPage.specsSectionTitle || "Spatial Display Specifications"}
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
            <div className="divide-y divide-[var(--lp-line)]">
              {localizedSpecs.map((spec: any, i: number) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-2 px-6 py-4.5 sm:grid-cols-3 sm:gap-4 ${
                    i % 2 === 0 ? "bg-[var(--lp-card)]" : "bg-[var(--lp-tile)]/40"
                  }`}
                >
                  <span className="text-sm font-semibold text-[var(--lp-ink)]">
                    {spec.label}
                  </span>
                  <span className="text-sm text-[var(--lp-ink-2)] sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="relative overflow-hidden px-6 py-24 border-b border-[var(--lp-line)]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--lp-accent)] uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--lp-ink)] sm:text-5xl">
              Spatial Display FAQs
            </h2>
            <p className="mt-4 text-base text-[var(--lp-ink-2)]">
              Essential answers regarding Spatial Display technology, glasses-free 3D optics, available sizes, and DIHUAVA AI integration.
            </p>
          </div>

          <div className="space-y-4">
            {faqsList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="text-base font-semibold text-[var(--lp-ink)] pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--lp-tile)] text-[var(--lp-ink)]"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title={sPage.ctaTitle || "Bring 3D Spatial Displays"}
        highlightTitle={sPage.ctaHighlight || "To Your Customer Environment"}
        description={sPage.ctaDesc}
        primaryButtonText={sPage.ctaPrimaryText || sPage.ctaPrimary || "Book a Demo"}
        secondaryButtonText={sPage.ctaSecondaryText || sPage.ctaSecondary || "Download Datasheets (PDF)"}
        secondaryButtonHref={lPath("/contact/download-center")}
      />
      <Footer />
    </main>
  );
}
