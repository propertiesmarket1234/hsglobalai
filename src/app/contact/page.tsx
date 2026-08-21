"use client";

import { useState } from "react";
import Link from "next/link";
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
  { title: "Hologram Box With Software Price List", filename: "Hologram_Box_Software_Price_List.pdf" },
  { title: "Hologram Box Product Comparison Sheet", filename: "Hologram_Box_Product_Comparison_Sheet.pdf" },
  { title: "OEM 许可证价格表", filename: "OEM_License_Price_List_ZH.pdf", lang: "Chinese" },
  { title: "86 Inch SPATIAL DISPLAY Data Sheet", filename: "86_Inch_Spatial_Display_Data_Sheet.pdf" },
  { title: "Dihuava Product Brochure 2026 JUN", filename: "Dihuava_Product_Brochure_2026_JUN.pdf" },
  { title: "AI数字人软件介绍 2026 JUN Bilingual", filename: "AI_Digital_Human_Software_Intro_2026_JUN_Bilingual.pdf", lang: "Bilingual" },
  { title: "SPATIAL Display 空间屏最新价格表", filename: "Spatial_Display_Latest_Price_List_ZH.pdf", lang: "Chinese" },
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
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+1", country: "United States / Canada", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+852", country: "Hong Kong SAR", flag: "🇭🇰" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+420", country: "Czechia", flag: "🇨🇿" },
  { code: "+36", country: "Hungary", flag: "🇭🇺" },
  { code: "+40", country: "Romania", flag: "🇷🇴" },
  { code: "+7", country: "Kazakhstan / Russia", flag: "🇰🇿" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+54", country: "Argentina", flag: "🇦🇷" },
  { code: "+56", country: "Chile", flag: "🇨🇱" },
  { code: "+57", country: "Colombia", flag: "🇨🇴" },
  { code: "+51", country: "Peru", flag: "🇵🇪" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
];

export default function ContactPage({ defaultTab = "contact" }: { defaultTab?: "contact" | "downloads" }) {
  const [activeTab, setActiveTab] = useState<"contact" | "downloads">(defaultTab);
  const [submitted, setSubmitted] = useState(false);
  const [downloadingTitle, setDownloadingTitle] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+65",
    phone: "",
    company: "",
    industry: "Banking",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownload = (item: SheetItem) => {
    setDownloadingTitle(item.title);

    const fileContent = `=====================================================
HS GLOBAL AI OFFICIAL DOWNLOAD
=====================================================
Document Title: ${item.title}
Filename: ${item.filename}
Language: ${item.lang || "English"}
Platform: DIHUAVA On-Device AI Platform

TECHNICAL SPECIFICATIONS:
- 100% On-Device Air-Gapped AI Inference
- Sub-3000ms Low Latency Voice
- 30+ Spoken Multilingual Voice Engines & Voice Cloning
- Optical 3D Holographic Display Glass Specifications

Singapore Headquarters: 20 Collyer Quay, #09-01, Singapore 049319
Official Website: https://hsglobalai.com
Enterprise Contact: sales@hsglobalai.com
=====================================================`;

    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = item.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadingTitle(null);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION WITH SUBPAGE TAB SWITCHER */}
      <section className="relative overflow-hidden px-6 pt-32 pb-14 md:pt-40 md:pb-16 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* BREADCRUMB */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                {activeTab === "contact"
                  ? "Contact HS Global AI — Singapore HQ"
                  : "Contact Us — Download Center"}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {activeTab === "contact" ? (
                <>
                  Connect With Our{" "}
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    AI Solutions Team.
                  </span>
                </>
              ) : (
                <>
                  Official Resource &{" "}
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                    Download Center.
                  </span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              {activeTab === "contact"
                ? "Speak with our enterprise specialists to schedule a live demonstration, inquire about DIHUAVA deployments, or visit our Singapore headquarters."
                : "Download English & Chinese product data sheets, price lists, Dihuava brochures, partner templates, and connect directly with executive team QR codes."}
            </p>

            {/* INTEGRATED SUBPAGE TAB SWITCHER BUTTONS */}
            <div className="mt-10 flex items-center justify-center">
              <div className="inline-flex rounded-full border border-white/20 bg-neutral-950/90 p-1.5 backdrop-blur-xl shadow-2xl">
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold transition-all ${
                    activeTab === "contact"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span>📍 Contact Us & HQ Map</span>
                </button>

                <button
                  onClick={() => setActiveTab("downloads")}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold transition-all ${
                    activeTab === "downloads"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span>📥 Download Center</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAB CONTENT 1: MAIN CONTACT FORM & SINGAPORE MAP */}
      {activeTab === "contact" && (
        <>
          <section className="relative overflow-hidden bg-black px-6 py-16 border-t border-white/10">
            <div className="relative mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-12">
                {/* LEFT COLUMN: CONTACT DETAILS & HQ */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl">
                    <h2 className="text-2xl font-bold text-white mb-6">Global Headquarters</h2>

                    <div className="space-y-6 text-sm text-gray-300">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-lg shadow-sm">
                          📍
                        </div>
                        <div>
                          <p className="font-semibold text-white">HS GLOBAL SG PTE LTD</p>
                          <p className="mt-1 text-gray-400">20 COLLYER QUAY, #09-01, SINGAPORE – 049319</p>
                          <p className="mt-1 text-xs text-cyan-400 font-mono">Singapore Headquarters (Near Raffles Place MRT)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-lg shadow-sm">
                          ✉️
                        </div>
                        <div>
                          <p className="font-semibold text-white">Sales & Enterprise Inquiries</p>
                          <a href="mailto:sales@hsglobalai.com" className="mt-1 block text-cyan-400 hover:underline">
                            sales@hsglobalai.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-lg shadow-sm">
                          🕒
                        </div>
                        <div>
                          <p className="font-semibold text-white">Operating Hours</p>
                          <p className="mt-1 text-gray-400">Monday – Saturday: 9:30 AM – 6:30 PM (IST)</p>
                          <p className="mt-1 text-xs text-gray-500">Sunday / Holiday by appointment</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-lg shadow-sm">
                          🌐
                        </div>
                        <div>
                          <p className="font-semibold text-white">Official Portal</p>
                          <p className="mt-1 text-gray-400">www.hsglobalai.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QUICK SUBPAGE TRIGGER CARD TO DOWNLOAD CENTER */}
                  <button
                    onClick={() => setActiveTab("downloads")}
                    className="w-full text-left group block rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 to-black p-6 backdrop-blur-md transition-all hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📥</span>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            Download Center Subpage
                          </h3>
                          <p className="text-xs text-gray-300">Access English & Chinese data sheets, brochures & QR codes</p>
                        </div>
                      </div>
                      <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6 backdrop-blur-md">
                      <span className="text-2xl">⚡</span>
                      <h3 className="mt-3 text-lg font-semibold text-white">24h Response</h3>
                      <p className="mt-1 text-xs text-gray-400">Rapid response from our AI engineers.</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6 backdrop-blur-md">
                      <span className="text-2xl">🔒</span>
                      <h3 className="mt-3 text-lg font-semibold text-white">Air-Gapped NDA</h3>
                      <p className="mt-1 text-xs text-gray-400">Strict enterprise data confidentiality.</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: ENTERPRISE CONTACT FORM */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl border border-white/15 bg-neutral-950/90 p-8 backdrop-blur-xl md:p-10 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-2">Book a Demo / Submit Inquiry</h2>
                    <p className="text-sm text-gray-400 mb-8">
                      Fill out your requirements to schedule a live demonstration or receive pricing details for DIHUAVA.
                    </p>

                    {submitted ? (
                      <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-8 text-center">
                        <span className="text-5xl animate-bounce inline-block mb-2">🎉</span>
                        <h3 className="text-2xl font-bold text-white">Inquiry Submitted!</h3>
                        <p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
                          Thank you for contacting HS Global AI Singapore. One of our enterprise specialists will reach out to you within 24 business hours.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-6 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-8 py-3 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Your Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Business Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@enterprise.com"
                              className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Phone Number *
                            </label>
                            <div className="flex rounded-xl border border-white/15 bg-black/60 overflow-hidden focus-within:border-cyan-400">
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
                          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-400 px-6 py-4 text-sm font-bold text-white shadow-xl transition-all hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25"
                        >
                          Submit Inquiry & Request Live Demo
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EMBEDDED GOOGLE MAPS SECTION: SINGAPORE HQ */}
          <section className="relative overflow-hidden bg-black px-6 py-20 border-t border-white/10">
            <div className="relative mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Interactive Location Map
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Visit Our Singapore Headquarters
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Located at HS GLOBAL SG PTE LTD, 20 COLLYER QUAY, #09-01, SINGAPORE – 049319.
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=HS+GLOBAL+SG+PTE+LTD,+20+COLLYER+QUAY,+#09-01,+SINGAPORE+-+049319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 text-xs font-bold text-cyan-300 backdrop-blur-md transition-all hover:bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.2)] shrink-0"
                >
                  <span>Get Directions on Google Maps</span>
                  <span>↗</span>
                </a>
              </div>

              {/* GOOGLE MAPS IFRAME CONTAINER */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 shadow-2xl">
                <iframe
                  title="HS GLOBAL SG PTE LTD Singapore Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.81926219468!2d103.85040997576572!3d1.2835154617833075!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190875b1c5cd%3A0x6331a690e9d67568!2s20%20Collyer%20Quay%2C%20Singapore%20049319!5e0!3m2!1sen!2ssg!4v1710000000000!5m2!1sen!2ssg"
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
                      <h4 className="text-sm font-bold text-white tracking-wide">HS GLOBAL SG PTE LTD</h4>
                      <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[9px] font-bold text-red-400 border border-red-500/40">
                        HQ PIN
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-gray-300 mt-0.5">
                      20 COLLYER QUAY, #09-01, SINGAPORE – 049319
                    </p>
                  </div>
                </div>

                {/* OVERLAY ADDRESS BADGE */}
                <div className="absolute bottom-6 left-6 max-w-sm rounded-2xl border border-white/20 bg-black/85 p-6 backdrop-blur-xl shadow-2xl hidden sm:block">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                    <h4 className="text-sm font-bold text-white">HS GLOBAL SG PTE LTD</h4>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-gray-300">
                    20 COLLYER QUAY, #09-01, SINGAPORE – 049319
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-cyan-400 border-t border-white/10 pt-3">
                    <span>Raffles Place MRT (Exit B)</span>
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
                  Data Sheets & Price List
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

            {/* SECTION 4: CONTACT DETAILS EXECUTIVE & SALES QR CODES */}
            <div className="pt-8 border-t border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Contact Details
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Direct WeChat & WhatsApp QR codes for executive leadership and sales directors.
                </p>
              </div>

              {/* EXECUTIVE PAIR 1: SUBBARAO MOTUPALLI & KRANTHI KUMAR BUDDHA */}
              <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto mb-16">
                {/* SUBBARAO MOTUPALLI (CEO) */}
                <div className="rounded-3xl border border-white/15 bg-neutral-950/90 p-8 text-center backdrop-blur-xl shadow-2xl">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-cyan-300 mb-6">
                    SUBBARAO MOTUPALLI (CEO)
                  </h3>

                  <div className="grid gap-6 sm:grid-cols-2 justify-items-center">
                    {/* WECHAT */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-emerald-500/50 bg-white p-2 shadow-xl">
                        <img
                          src="/images/subbarao-wechat-qr.png"
                          alt="Subbarao Motupalli CEO WeChat QR Code"
                          width={160}
                          height={160}
                          className="rounded-lg object-contain w-full h-full"
                        />
                      </div>
                      <span className="mt-3 font-mono text-xs font-bold italic tracking-widest text-emerald-400 uppercase">
                        WECHAT
                      </span>
                    </div>

                    {/* WHATSAPP */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-black bg-white p-2 shadow-xl">
                        <img
                          src="/images/subbarao-whatsapp-qr.png"
                          alt="Subbarao Motupalli CEO WhatsApp QR Code"
                          width={160}
                          height={160}
                          className="rounded-lg object-contain w-full h-full"
                        />
                      </div>
                      <span className="mt-3 font-mono text-xs font-bold italic tracking-widest text-gray-300 uppercase">
                        WHATSAPP
                      </span>
                    </div>
                  </div>
                </div>

                {/* KRANTHI KUMAR BUDDHA (CTO) */}
                <div className="rounded-3xl border border-white/15 bg-neutral-950/90 p-8 text-center backdrop-blur-xl shadow-2xl">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-cyan-300 mb-6">
                    KRANTHI KUMAR BUDDHA (CTO)
                  </h3>

                  <div className="grid gap-6 sm:grid-cols-2 justify-items-center">
                    {/* WECHAT */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-emerald-500/50 bg-white p-2 shadow-xl">
                        <img
                          src="/images/kranthi-wechat-qr.png"
                          alt="Kranthi Kumar Buddha CTO WeChat QR Code"
                          width={160}
                          height={160}
                          className="rounded-lg object-contain w-full h-full"
                        />
                      </div>
                      <span className="mt-3 font-mono text-xs font-bold italic tracking-widest text-emerald-400 uppercase">
                        WECHAT
                      </span>
                    </div>

                    {/* WHATSAPP */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-black bg-white p-2 shadow-xl">
                        <img
                          src="/images/kranthi-whatsapp-qr.png"
                          alt="Kranthi Kumar Buddha CTO WhatsApp QR Code"
                          width={160}
                          height={160}
                          className="rounded-lg object-contain w-full h-full"
                        />
                      </div>
                      <span className="mt-3 font-mono text-xs font-bold italic tracking-widest text-gray-300 uppercase">
                        WHATSAPP
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SALES TEAM PAIR 2: HARVEY & CATHERINE */}
              <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
                {/* HARVEY (Overseas Sales Director) */}
                <div className="rounded-3xl border border-white/15 bg-neutral-950/90 p-8 text-center backdrop-blur-xl shadow-2xl">
                  <h3 className="text-lg font-bold tracking-wide text-cyan-300 mb-6">
                    Harvey (Overseas Sales Director)
                  </h3>

                  <div className="grid gap-6 sm:grid-cols-2 justify-items-center">
                    {/* WHATSAPP */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-black bg-white p-2 shadow-xl">
                        <img
                          src="/images/harvey-whatsapp-qr.png"
                          alt="Harvey Overseas Sales Director WhatsApp QR Code"
                          width={160}
                          height={160}
                          className="rounded-lg object-contain w-full h-full"
                        />
                      </div>
                      <span className="mt-3 font-mono text-xs font-bold italic tracking-widest text-gray-300 uppercase">
                        WHATSAPP
                      </span>
                    </div>

                    {/* WECHAT */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-cyan-500/50 bg-white p-2 shadow-xl">
                        <img
                          src="/images/harvey-wechat-qr.png"
                          alt="Harvey Overseas Sales Director WeChat QR Code"
                          width={160}
                          height={160}
                          className="rounded-lg object-contain w-full h-full"
                        />
                      </div>
                      <span className="mt-3 font-mono text-xs font-bold italic tracking-widest text-cyan-400 uppercase">
                        WECHAT
                      </span>
                    </div>
                  </div>
                </div>

                {/* CATHERINE (Asia Sales Manager) */}
                <div className="rounded-3xl border border-white/15 bg-neutral-950/90 p-8 text-center backdrop-blur-xl shadow-2xl">
                  <h3 className="text-lg font-bold tracking-wide text-cyan-300 mb-6">
                    Catherine (Asia Sales Manager)
                  </h3>

                  <div className="flex flex-col items-center justify-center">
                    {/* WHATSAPP */}
                    <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-black bg-white p-2 shadow-xl">
                      <img
                        src="/images/catherine-whatsapp-qr.png"
                        alt="Catherine Asia Sales Manager WhatsApp QR Code"
                        width={160}
                        height={160}
                        className="rounded-lg object-contain w-full h-full"
                      />
                    </div>
                    <span className="mt-3 font-mono text-xs font-bold italic tracking-widest text-gray-300 uppercase">
                      WHATSAPP
                    </span>
                  </div>
                </div>
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
