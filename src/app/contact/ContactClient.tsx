"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";

export interface SheetItem {
  title: string;
  filename: string;
  lang?: string;
}

const dataSheetsAndPriceList: SheetItem[] = [
  { title: "86 Inch HOLOGRAM BOX DATA SHEET", filename: "86_Inch_Hologram_Box_Data_Sheet.pdf" },
  { title: "Hologram Box With Software Specification Sheet", filename: "Hologram_Box_Software_Data_Sheet.pdf" },
  { title: "Hologram Box Product Comparison Sheet", filename: "Hologram_Box_Product_Comparison_Sheet.pdf" },
  { title: "OEM 许可证规格表", filename: "OEM_License_Data_Sheet_ZH.pdf", lang: "Chinese" },
  { title: "86 Inch SPATIAL DISPLAY Data Sheet", filename: "86_Inch_Spatial_Display_Data_Sheet.pdf" },
  { title: "Dihuava Product Brochure 2026 JUN", filename: "Dihuava_Product_Brochure_2026_JUN.pdf" },
  { title: "AI数字人软件介绍 2026 JUN Bilingual", filename: "AI_Digital_Human_Software_Intro_2026_JUN_Bilingual.pdf", lang: "Bilingual" },
  { title: "SPATIAL Display 空间屏规格表", filename: "Spatial_Display_Data_Sheet_ZH.pdf", lang: "Chinese" },
  { title: "HS International Business Card", filename: "HS_International_Business_Card.pdf" },
];

const dihuavaBrochures: SheetItem[] = [
  { title: "Dihuava-Brochure", filename: "Dihuava_Brochure_Overview.pdf" },
  { title: "Dihuava – Digital Human Avatar _ Product Brochure", filename: "Dihuava_Digital_Human_Avatar_Product_Brochure.pdf" },
];

const dihuavaTemplates: SheetItem[] = [
  { title: "Template For Traders", filename: "Dihuava_Template_For_Traders.pdf" },
  { title: "General Inquiry Templets", filename: "Dihuava_General_Inquiry_Templates.pdf" },
  { title: "Template For Hardware Manufacturers", filename: "Dihuava_Template_For_Hardware_Manufacturers.pdf" },
  { title: "Template For The System Integrators", filename: "Dihuava_Template_For_System_Integrators.pdf" },
];

export interface CountryCodeItem {
  code: string;
  country: string;
  flag: string;
}

const countryCodes: CountryCodeItem[] = [
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+1", country: "United States / Canada", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
];

export default function ContactClient({ defaultTab = "contact" }: { defaultTab?: "contact" | "downloads" }) {
  const [activeTab, setActiveTab] = useState<"contact" | "downloads">(defaultTab);
  const [activeLocationMap, setActiveLocationMap] = useState<"singapore" | "india">("singapore");
  const [downloadingTitle, setDownloadingTitle] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    email: "",
    countryCode: "+65",
    phone: "",
    company: "",
    designation: "",
    industry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const cPage = (dict as any).contactPage || {};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleDownload = (item: SheetItem) => {
    setDownloadingTitle(item.title);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = `/downloads/${item.filename}`;
      link.download = item.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingTitle(null);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION WITH BACKSIDE DIGITAL HUMAN VIDEO */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/10">
        {/* Horizontal Background Video (Backside of Text) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-40 filter brightness-90 contrast-110"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay Gradients for High-Contrast Readable Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-cyan-600/15 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              {cPage.heroBadge || "Get in Touch — HS Global AI"}
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-2xl">
              {cPage.heroTitle || "Start your AI journey with "}{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                {cPage.heroTitleHighlight || "HS Global AI."}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg drop-shadow">
              {cPage.heroDescription || "Reach out to our global team in Singapore HQ or India Office to book a live demo, request datasheets, or discuss custom enterprise deployments."}
            </p>

            {/* TAB SELECTOR BUTTONS MATCHING USER DESIGN REQUIREMENT */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab("contact")}
                className={`rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "contact"
                    ? "bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.6)] scale-105"
                    : "border border-white/20 bg-black/60 text-gray-300 hover:border-cyan-400 hover:text-white"
                }`}
              >
                📬 Contact & Demo Inquiry
              </button>

              <button
                onClick={() => setActiveTab("downloads")}
                className={`rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "downloads"
                    ? "bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.6)] scale-105"
                    : "border border-white/20 bg-black/60 text-gray-300 hover:border-cyan-400 hover:text-white"
                }`}
              >
                📥 Download Spec Sheets (PDF)
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAB CONTENT 1: CONTACT FORM & GLOBAL LOCATIONS */}
      {activeTab === "contact" && (
        <>
          <section className="relative overflow-hidden bg-black px-6 py-20">
            <div className="relative mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-12">
                {/* LEFT COLUMN: GLOBAL HEADQUARTERS & REGIONAL OFFICES */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                      Global Infrastructure
                    </span>
                    <h2 className="mt-2 text-3xl font-bold text-white">Our Global Offices</h2>
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      HS Global AI serves enterprise clients worldwide with main headquarters in Singapore and regional development in India.
                    </p>
                  </div>

                  {/* SINGAPORE HEADQUARTERS CARD */}
                  <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-neutral-950 p-7 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all hover:border-cyan-400">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300 font-mono">
                        🇸🇬 GLOBAL HEADQUARTERS
                      </span>
                      <span className="text-xs text-gray-400 font-mono">SINGAPORE</span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white">HS GLOBAL SG PTE LTD</h3>
                    <p className="mt-2 text-xs leading-6 text-gray-300">
                      20 COLLYER QUAY, #09-01, SINGAPORE – 049319
                    </p>

                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                      <div className="flex items-center justify-between text-gray-300">
                        <span className="font-semibold text-cyan-300">Official Email:</span>
                        <a href="mailto:info@hsglobalai.com" className="hover:underline font-mono text-cyan-400">
                          info@hsglobalai.com
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span className="font-semibold text-cyan-300">Website:</span>
                        <span className="font-mono text-gray-300">hsglobalai.com</span>
                      </div>
                    </div>
                  </div>

                  {/* INDIA OFFICE CARD */}
                  <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 p-7 backdrop-blur-xl transition-all hover:border-cyan-500/40">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-300 font-mono">
                        🇮🇳 INDIA REGIONAL OFFICE
                      </span>
                      <span className="text-xs text-gray-400 font-mono">ANDHRA PRADESH</span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white">HS GLOBAL AI INDIA</h3>
                    <p className="mt-2 text-xs leading-6 text-gray-300">
                      49-4-1, 17/3E, Prasanth Colony, 1st line, Gunadala, Kanuru, Andhra Pradesh 520004, India
                    </p>

                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                      <div className="flex items-center justify-between text-gray-300">
                        <span className="font-semibold text-cyan-300">Phone Support:</span>
                        <a href="tel:+919959666699" className="hover:underline font-mono text-cyan-400">
                          +91 99596 66699
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span className="font-semibold text-cyan-300">Office Hours:</span>
                        <span className="font-mono text-gray-300">Mon–Sat: 9:30 AM – 6:30 PM (IST)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: INTERACTIVE INQUIRY & DEMO REQUEST FORM */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 md:p-10 backdrop-blur-2xl shadow-2xl">
                    <h3 className="text-2xl font-bold text-white">Request a Live DIHUAVA Demo</h3>
                    <p className="mt-2 text-xs text-gray-400">
                      Fill out the form below to connect with our technical solution architects.
                    </p>

                    {submitted ? (
                      <div className="my-10 rounded-2xl border border-cyan-500/50 bg-cyan-950/40 p-8 text-center backdrop-blur-md">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-black text-2xl font-bold mb-4 shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                          ✓
                        </div>
                        <h4 className="text-2xl font-bold text-white">Inquiry Received Successfully</h4>
                        <p className="mt-2 text-sm text-gray-300">
                          Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Our enterprise AI specialist will review your project requirements and respond within 24 hours.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-6 rounded-full border border-cyan-400/40 bg-black px-6 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/10"
                        >
                          Submit Another Request
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Subbarao Motupalli"
                              className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="info@hsglobalai.com"
                              className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Phone Number (With Country Code) *
                            </label>
                            <div className="flex items-center rounded-xl border border-white/15 bg-black/60 overflow-hidden focus-within:border-cyan-400">
                              <select
                                value={formData.countryCode}
                                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                className="bg-neutral-900 border-r border-white/15 px-3 py-3.5 text-sm text-cyan-300 focus:outline-none cursor-pointer shrink-0 max-w-[135px] sm:max-w-[150px]"
                              >
                                {countryCodes.map((c) => (
                                  <option key={`${c.country}-${c.code}`} value={c.code} className="bg-black text-white">
                                    {c.flag} {c.code} ({c.country})
                                  </option>
                                ))}
                              </select>
                              <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="6000 0000"
                                className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Company / Organization
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Global Retail Inc."
                              className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                            Industry
                          </label>
                          <select
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                          >
                            <option value="Banking">Banking</option>
                            <option value="Retail">Retail</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Tourism">Tourism</option>
                            <option value="Education">Education</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Advertising">Advertising</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                            Project Details & Message *
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Describe your target deployment environment or specific AI requirements..."
                            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-400 px-6 py-4 text-sm font-bold text-white shadow-xl transition-all hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Sending Inquiry...</span>
                            </>
                          ) : (
                            <span>Submit Inquiry & Request Live Demo</span>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EMBEDDED GOOGLE MAPS SECTION: DYNAMIC LOCATION SWITCHER */}
          <section className="relative overflow-hidden bg-black px-6 py-20 border-t border-white/10">
            <div className="relative mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                    Interactive Location Maps
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
                    {activeLocationMap === "singapore"
                      ? "Visit Our Singapore Headquarters"
                      : "Visit Our India Regional Office"}
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    {activeLocationMap === "singapore"
                      ? "Located at HS GLOBAL SG PTE LTD, 20 COLLYER QUAY, #09-01, SINGAPORE – 049319."
                      : "Located at 49-4-1, 17/3E, Prasanth Colony, 1st line, Gunadala, Kanuru, Andhra Pradesh 520004, India."}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {/* LOCATION MAP SWITCHER BUTTONS */}
                  <div className="inline-flex rounded-full border border-white/15 bg-neutral-950 p-1.5 backdrop-blur-md">
                    <button
                      onClick={() => setActiveLocationMap("singapore")}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                        activeLocationMap === "singapore"
                          ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <span>🇸🇬 Singapore HQ</span>
                    </button>
                    <button
                      onClick={() => setActiveLocationMap("india")}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                        activeLocationMap === "india"
                          ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <span>🇮🇳 India Office</span>
                    </button>
                  </div>

                  {/* GET DIRECTIONS LINK */}
                  <a
                    href={
                      activeLocationMap === "singapore"
                        ? "https://www.google.com/maps/search/?api=1&query=HS+GLOBAL+SG+PTE+LTD,+20+COLLYER+QUAY,+#09-01,+SINGAPORE+-+049319"
                        : "https://www.google.com/maps/search/?api=1&query=49-4-1,+17/3E,+Prasanth+Colony,+1st+line,+Gunadala,+Kanuru,+Andhra+Pradesh+520004,+India"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 text-xs font-bold text-cyan-300 backdrop-blur-md transition-all hover:bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  >
                    <span>Get Directions</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* GOOGLE MAPS IFRAME CONTAINER */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 shadow-2xl">
                <iframe
                  title={
                    activeLocationMap === "singapore"
                      ? "HS GLOBAL SG PTE LTD Singapore Headquarters Map"
                      : "HS Global AI India Office Map"
                  }
                  src={
                    activeLocationMap === "singapore"
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.81926219468!2d103.85040997576572!3d1.2835154617833075!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190875b1c5cd%3A0x6331a690e9d67568!2s20%20Collyer%20Quay%2C%20Singapore%20049319!5e0!3m2!1sen!2ssg!4v1710000000000!5m2!1sen!2ssg"
                      : "https://maps.google.com/maps?q=49-4-1,+17/3E,+Prasanth+Colony,+1st+line,+Gunadala,+Kanuru,+Andhra+Pradesh+520004,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  }
                  width="100%"
                  height="520"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />

                {/* RED MARKER PIN OVERLAY MATCHING GOOGLE MAPS PIN */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 rounded-2xl border border-red-500/50 bg-black/90 px-5 py-3.5 shadow-[0_0_35px_rgba(239,68,68,0.5)] backdrop-blur-xl">
                  {/* Red Pin Circle */}
                  <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 shadow-lg">
                    <div className="h-3.5 w-3.5 rounded-full bg-white animate-pulse" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {activeLocationMap === "singapore" ? "HS GLOBAL SG PTE LTD" : "HS GLOBAL AI INDIA"}
                      </h4>
                      <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[9px] font-bold text-red-400 border border-red-500/40">
                        {activeLocationMap === "singapore" ? "HQ PIN" : "INDIA OFFICE PIN"}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-gray-300 mt-0.5">
                      {activeLocationMap === "singapore"
                        ? "20 COLLYER QUAY, #09-01, SINGAPORE – 049319"
                        : "49-4-1, 17/3E, PRASANTH COLONY, KANURU, AP 520004"}
                    </p>
                  </div>
                </div>

                {/* OVERLAY ADDRESS BADGE */}
                <div className="absolute bottom-6 left-6 max-w-sm rounded-2xl border border-white/20 bg-black/85 p-6 backdrop-blur-xl shadow-2xl hidden sm:block">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                    <h4 className="text-sm font-bold text-white">
                      {activeLocationMap === "singapore" ? "Singapore Global HQ" : "India Regional Office"}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-gray-300">
                    {activeLocationMap === "singapore"
                      ? "20 COLLYER QUAY, #09-01, SINGAPORE – 049319"
                      : "49-4-1, 17/3E, Prasanth Colony, 1st line, Gunadala, Kanuru, Andhra Pradesh 520004, India"}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-cyan-400 border-t border-white/10 pt-3">
                    <span>{activeLocationMap === "singapore" ? "Raffles Place MRT (Exit B)" : "Vijayawada Region"}</span>
                    <span>Mon-Sat: 9:30am - 6:30pm (IST)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* TAB CONTENT 2: EXACT DOWNLOAD CENTER STRUCTURE MATCHING SCREENSHOTS */}
      {activeTab === "downloads" && (
        <section className="relative overflow-hidden bg-black px-6 py-16 border-t border-white/10">
          <div className="relative mx-auto max-w-7xl space-y-20">

            {/* SECTION 1: DATA SHEETS & PRICE LIST */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-2 text-sm font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  Data Sheets & Specifications
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dataSheetsAndPriceList.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-2xl border border-white/15 bg-neutral-950/80 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                  >
                    <div>
                      {item.lang && (
                        <span className="inline-block mb-2 rounded-md bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-500/30">
                          {item.lang}
                        </span>
                      )}
                      <h3 className="text-base font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-center">
                      <button
                        onClick={() => handleDownload(item)}
                        disabled={downloadingTitle === item.title}
                        className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 px-8 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                      >
                        {downloadingTitle === item.title ? "DOWNLOADING..." : "DOWNLOAD"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: DIHUAVA BROCHURE */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-2 text-sm font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  Dihuava Brochure
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
                {dihuavaBrochures.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-2xl border border-white/15 bg-neutral-950/80 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                  >
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-center">
                      <button
                        onClick={() => handleDownload(item)}
                        disabled={downloadingTitle === item.title}
                        className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 px-8 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                      >
                        {downloadingTitle === item.title ? "DOWNLOADING..." : "DOWNLOAD"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: DIHUAVA TEMPLATES */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-2 text-sm font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  Dihuava Templates
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {dihuavaTemplates.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-2xl border border-white/15 bg-neutral-950/80 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                  >
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-center">
                      <button
                        onClick={() => handleDownload(item)}
                        disabled={downloadingTitle === item.title}
                        className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 px-8 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                      >
                        {downloadingTitle === item.title ? "DOWNLOADING..." : "DOWNLOAD"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </main>
  );
}
