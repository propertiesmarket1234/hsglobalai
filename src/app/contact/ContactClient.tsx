"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Download,
  MapPin,
  Building2,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  FileText,
  ShieldCheck,
  Copy,
  Check,
  Navigation,
} from "lucide-react";

export interface SheetItem {
  title: string;
  filename: string;
  lang?: string;
}

const dataSheetsAndPriceList: SheetItem[] = [
  { title: "86 Inch HOLOGRAM BOX DATA SHEET", filename: "86_Inch_Hologram_Box_Data_Sheet.pdf" },
  { title: "Hologram Box With Software Specification Sheet", filename: "Hologram_Box_Software_Data_Sheet.pdf" },
  { title: "Hologram Box Product Comparison Sheet", filename: "Hologram_Box_Product_Comparison_Sheet.pdf" },
  { title: "OEM License Specification Sheet", filename: "OEM_License_Data_Sheet_ZH.pdf", lang: "Chinese" },
  { title: "86 Inch SPATIAL DISPLAY Data Sheet", filename: "86_Inch_Spatial_Display_Data_Sheet.pdf" },
  { title: "DIHUAVA Product Brochure 2026 JUN", filename: "Dihuava_Product_Brochure_2026_JUN.pdf" },
  { title: "AI Digital Human Software Guide", filename: "AI_Digital_Human_Software_Intro_2026_JUN_Bilingual.pdf", lang: "Bilingual" },
  { title: "Spatial Display Engineering Sheet", filename: "Spatial_Display_Data_Sheet_ZH.pdf", lang: "Chinese" },
  { title: "HS International Business Profile", filename: "HS_International_Business_Card.pdf" },
];

const dihuavaBrochures: SheetItem[] = [
  { title: "DIHUAVA Platform Brochure", filename: "Dihuava_Brochure_Overview.pdf" },
  { title: "DIHUAVA Digital Human Avatar Brochure", filename: "Dihuava_Digital_Human_Avatar_Product_Brochure.pdf" },
];

const dihuavaTemplates: SheetItem[] = [
  { title: "Template For Commercial Partners", filename: "Dihuava_Template_For_Traders.pdf" },
  { title: "Enterprise Inquiry Template", filename: "Dihuava_General_Inquiry_Templates.pdf" },
  { title: "Hardware OEM Partner Template", filename: "Dihuava_Template_For_Hardware_Manufacturers.pdf" },
  { title: "System Integrator Deployment Template", filename: "Dihuava_Template_For_System_Integrators.pdf" },
];

export interface CountryCodeItem {
  code: string;
  country: string;
  iso: string;
}

const countryCodes: CountryCodeItem[] = [
  { code: "+65", country: "Singapore", iso: "SG" },
  { code: "+91", country: "India", iso: "IN" },
  { code: "+86", country: "China", iso: "CN" },
  { code: "+1", country: "United States / Canada", iso: "US" },
  { code: "+44", country: "United Kingdom", iso: "GB" },
  { code: "+971", country: "United Arab Emirates", iso: "AE" },
  { code: "+61", country: "Australia", iso: "AU" },
  { code: "+49", country: "Germany", iso: "DE" },
  { code: "+33", country: "France", iso: "FR" },
  { code: "+81", country: "Japan", iso: "JP" },
  { code: "+82", country: "South Korea", iso: "KR" },
];

export interface FacilityLocation {
  id: "singapore" | "india" | "china";
  country: string;
  city: string;
  label: string;
  shortTab: string;
  badge: string;
  companyName: string;
  rating?: string;
  category?: string;
  plusCode?: string;
  address: string;
  fullPostalAddress?: string;
  landmarkTransit: string;
  email?: string;
  phone?: string;
  hours?: string;
  facilitiesNote?: string;
  mapsSearchUrl: string;
  mapsEmbedUrl: string;
}

export const FACILITY_LOCATIONS: FacilityLocation[] = [
  {
    id: "singapore",
    country: "Singapore",
    city: "Singapore",
    label: "Singapore Global Headquarters",
    shortTab: "Singapore HQ",
    badge: "GLOBAL HEADQUARTERS",
    companyName: "HS GLOBAL SG PTE LTD",
    address: "60 Paya Lebar Road, #07-54, Paya Lebar Square, Singapore 409051",
    fullPostalAddress: "60 Paya Lebar Road, #07-54, Paya Lebar Square, Singapore 409051",
    landmarkTransit: "Direct internal lift access via Paya Lebar MRT (East-West EW8 / Circle Line CC9)",
    email: "sales@hsglobalai.com",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM (SGT)",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=60+Paya+Lebar+Road,+%2307-54,+Paya+Lebar+Square,+Singapore+409051",
    mapsEmbedUrl: "https://maps.google.com/maps?q=60+Paya+Lebar+Road,+%2307-54,+Paya+Lebar+Square,+Singapore+409051&t=&z=17&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "india",
    country: "India",
    city: "Vijayawada",
    label: "India Engineering Center",
    shortTab: "India",
    badge: "INDIA ENGINEERING CENTER",
    companyName: "HS GLOBAL SG PTE LTD(INDIA)",
    rating: "5.0 ★★★★★ (3 Google Reviews)",
    category: "Software company",
    plusCode: "GMHC+QC Kanuru, Andhra Pradesh",
    address: "Vijayawada, Andhra Pradesh, India",
    fullPostalAddress: "49-4-1, 17/3E, Prasanth Colony, 1st line, Gunadala, Kanuru, Andhra Pradesh 520004",
    landmarkTransit: "Kanuru / Gunadala Innovation Corridor · Plus Code: GMHC+QC",
    phone: "+91 84649 77333",
    hours: "Mon–Sat: 9:30 AM – 6:30 PM (IST)",
    mapsSearchUrl: "https://www.google.com/maps/place/HS+GLOBAL+SG+PTE+LTD(INDIA)/@16.5294115,80.6710744,17z/data=!4m6!3m5!1s0x3a35e5b4fd9dfb2d:0xa85104746b554b94!8m2!3d16.5294115!4d80.6710744!16s%2Fg%2F11x82y6fb3",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.267!2d80.6710744!3d16.5294115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5b4fd9dfb2d%3A0xa85104746b554b94!2sHS%20GLOBAL%20SG%20PTE%20LTD(INDIA)!5e0!3m2!1sen!2sin!4v1729148000000!5m2!1sen!2sin",
  },
  {
    id: "china",
    country: "China",
    city: "Shenzhen",
    label: "China Hardware Lab",
    shortTab: "China",
    badge: "CHINA HARDWARE LAB",
    companyName: "HS GLOBAL AI CHINA",
    address: "Bao'an District, Shenzhen, China",
    fullPostalAddress: "Bao'an District, Shenzhen, Guangdong, China",
    landmarkTransit: "Shenzhen Bao'an International Tech & Display Manufacturing Corridor",
    facilitiesNote: "Optical Precision & Holographic Display Manufacturing Facility",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Bao'an+District,+Shenzhen,+China",
    mapsEmbedUrl: "https://maps.google.com/maps?q=Bao'an+District,+Shenzhen,+China&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
];

export default function ContactClient({
  defaultTab = "contact",
}: {
  defaultTab?: "contact" | "downloads";
} = {}) {
  const [activeTab, setActiveTab] = useState<"contact" | "downloads">(defaultTab);
  const [activeLocationMap, setActiveLocationMap] = useState<"singapore" | "india" | "china">("singapore");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+65");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [downloadingTitle, setDownloadingTitle] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const activeFacility = FACILITY_LOCATIONS.find((f) => f.id === activeLocationMap) || FACILITY_LOCATIONS[0];

  const handleSelectAndScrollLocation = (locId: "singapore" | "india" | "china") => {
    setActiveLocationMap(locId);
    const element = document.getElementById("facility-locations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyAddress = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    industry: "Retail",
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
      setFormData((prev) => ({
        ...prev,
        message: `I would like to request the official technical specification document: "${item.title}". Please send the datasheet to my work email.`,
      }));
      setActiveTab("contact");
      setDownloadingTitle(null);
      const formElement = document.getElementById("inquiry-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      {/* HERO SECTION: SWIPECRAFT STYLE */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-20 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--lp-ink-2)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
              </span>
              {cPage.heroBadge || "Enterprise Engagement & Engineering Pilots"}
            </span>

            <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px] lg:text-[64px]">
              Start your digital human journey with{" "}
              <span className="text-[var(--lp-muted)]">
                HS Global AI.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.65] text-[var(--lp-ink-2)] sm:text-[18px]">
              {cPage.heroDescription || "Connect with our solution engineers in Singapore Global HQ, India, or China to schedule an on-premise pilot, download technical datasheets, or discuss enterprise fleet pricing."}
            </p>

            {/* TAB SELECTOR BUTTONS */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] p-1.5 shadow-xs">
              <button
                onClick={() => setActiveTab("contact")}
                className={`relative inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer ${
                  activeTab === "contact"
                    ? "text-[var(--lp-ink)]"
                    : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                }`}
              >
                {activeTab === "contact" && (
                  <motion.span
                    layoutId="contactTabIndicator"
                    className="absolute inset-0 rounded-full bg-[var(--lp-tile)] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                  <span>Contact &amp; Architecture Pilot</span>
                </span>
              </button>

              <button
                onClick={() => setActiveTab("downloads")}
                className={`relative inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer ${
                  activeTab === "downloads"
                    ? "text-[var(--lp-ink)]"
                    : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                }`}
              >
                {activeTab === "downloads" && (
                  <motion.span
                    layoutId="contactTabIndicator"
                    className="absolute inset-0 rounded-full bg-[var(--lp-tile)] shadow-xs"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                  <span>Download Spec Sheets (PDF)</span>
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAB CONTENT 1: CONTACT FORM & GLOBAL LOCATIONS */}
      {activeTab === "contact" && (
        <>
          <section className="relative px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)]">
            <div className="mx-auto max-w-[1200px]">
              <div className="grid gap-12 lg:grid-cols-12">
                {/* LEFT COLUMN: GLOBAL HEADQUARTERS & REGIONAL OFFICES */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
                      Global Engineering Presence
                    </span>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--lp-ink)] sm:text-3xl">
                      {cPage.officesTitle || "Our Global Headquarters"}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                      {cPage.officesDescription || "HS Global AI serves clients globally with headquarters in Singapore, engineering development in India, and hardware R&D in China."}
                    </p>
                  </div>

                  {/* SINGAPORE HEADQUARTERS CARD */}
                  <div
                    className={`rounded-[28px] border bg-[var(--lp-card)] p-7 shadow-[var(--lp-shadow-card)] transition-all ${
                      activeLocationMap === "singapore" ? "border-[var(--lp-accent)] ring-1 ring-[var(--lp-accent)]" : "border-[var(--lp-line)] hover:border-[var(--lp-line-strong)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,90,31,0.08)] px-3 py-1 text-xs font-bold text-[var(--lp-accent-ink)]">
                        <Building2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                        GLOBAL HEADQUARTERS
                      </span>
                      <span className="text-xs font-medium text-[var(--lp-muted)]">SINGAPORE</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[var(--lp-ink)]">HS GLOBAL SG PTE LTD</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=60+Paya+Lebar+Road,+%2307-54,+Paya+Lebar+Square,+Singapore+409051"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-xs leading-5 text-[var(--lp-ink-2)] hover:text-[var(--lp-accent)] transition-colors group/addr"
                    >
                      <span className="underline decoration-dotted underline-offset-2">60 Paya Lebar Road, #07-54, Paya Lebar Square, Singapore 409051</span>
                      <ArrowUpRight className="inline-block h-3 w-3 ml-1 opacity-70 group-hover/addr:opacity-100" />
                    </a>

                    <div className="mt-4 space-y-2 border-t border-[var(--lp-line)] pt-3.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[var(--lp-muted)]">Official Email:</span>
                        <a href="mailto:sales@hsglobalai.com" className="font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)]">
                          sales@hsglobalai.com
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[var(--lp-muted)]">Website:</span>
                        <span className="font-semibold text-[var(--lp-ink)]">hsglobalai.com</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[var(--lp-line)] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleSelectAndScrollLocation("singapore")}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lp-accent)] hover:text-[var(--lp-accent-ink)] transition-colors cursor-pointer"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        <span>View On Map ↓</span>
                      </button>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=60+Paya+Lebar+Road,+%2307-54,+Paya+Lebar+Square,+Singapore+409051"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[var(--lp-muted)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        <span>Directions</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* INDIA OFFICE CARD */}
                  <div
                    className={`rounded-[28px] border bg-[var(--lp-card)] p-7 shadow-[var(--lp-shadow-card)] transition-all ${
                      activeLocationMap === "india" ? "border-[var(--lp-accent)] ring-1 ring-[var(--lp-accent)]" : "border-[var(--lp-line)] hover:border-[var(--lp-line-strong)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--lp-tile)] px-3 py-1 text-xs font-bold text-[var(--lp-ink)]">
                        <Building2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                        INDIA ENGINEERING CENTER
                      </span>
                      <span className="text-xs font-medium text-[var(--lp-muted)]">ANDHRA PRADESH</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[var(--lp-ink)]">HS GLOBAL SG PTE LTD(INDIA)</h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-[var(--lp-muted)]">
                      <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
                        ★ 5.0 (3)
                      </span>
                      <span>•</span>
                      <span>Software company</span>
                    </div>

                    <a
                      href="https://www.google.com/maps/place/HS+GLOBAL+SG+PTE+LTD(INDIA)/@16.5294115,80.6710744,17z/data=!4m6!3m5!1s0x3a35e5b4fd9dfb2d:0xa85104746b554b94!8m2!3d16.5294115!4d80.6710744!16s%2Fg%2F11x82y6fb3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-xs leading-5 text-[var(--lp-ink-2)] hover:text-[var(--lp-accent)] transition-colors group/addr"
                    >
                      <span className="underline decoration-dotted underline-offset-2">Vijayawada, Andhra Pradesh, India</span>
                      <ArrowUpRight className="inline-block h-3 w-3 ml-1 opacity-70 group-hover/addr:opacity-100" />
                    </a>

                    <div className="mt-4 space-y-2 border-t border-[var(--lp-line)] pt-3.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[var(--lp-muted)]">Support Line:</span>
                        <a href="tel:+918464977333" className="font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)]">
                          +91 84649 77333
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[var(--lp-muted)]">Office Hours:</span>
                        <span className="text-[var(--lp-ink)]">Mon–Sat: 9:30 AM – 6:30 PM (IST)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[var(--lp-muted)]">Plus Code:</span>
                        <span className="text-[var(--lp-ink)]">GMHC+QC Kanuru</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[var(--lp-line)] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleSelectAndScrollLocation("india")}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lp-accent)] hover:text-[var(--lp-accent-ink)] transition-colors cursor-pointer"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        <span>View On Map ↓</span>
                      </button>
                      <a
                        href="https://www.google.com/maps/place/HS+GLOBAL+SG+PTE+LTD(INDIA)/@16.5294115,80.6710744,17z/data=!4m6!3m5!1s0x3a35e5b4fd9dfb2d:0xa85104746b554b94!8m2!3d16.5294115!4d80.6710744!16s%2Fg%2F11x82y6fb3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[var(--lp-muted)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        <span>Directions</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* CHINA OFFICE CARD */}
                  <div
                    className={`rounded-[28px] border bg-[var(--lp-card)] p-7 shadow-[var(--lp-shadow-card)] transition-all ${
                      activeLocationMap === "china" ? "border-[var(--lp-accent)] ring-1 ring-[var(--lp-accent)]" : "border-[var(--lp-line)] hover:border-[var(--lp-line-strong)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--lp-tile)] px-3 py-1 text-xs font-bold text-[var(--lp-ink)]">
                        <Building2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                        CHINA HARDWARE LAB
                      </span>
                      <span className="text-xs font-medium text-[var(--lp-muted)]">SHENZHEN</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[var(--lp-ink)]">HS GLOBAL AI CHINA</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Bao'an+District,+Shenzhen,+China"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-xs leading-5 text-[var(--lp-ink-2)] hover:text-[var(--lp-accent)] transition-colors group/addr"
                    >
                      <span className="underline decoration-dotted underline-offset-2">Bao&apos;an District, Shenzhen, China</span>
                      <ArrowUpRight className="inline-block h-3 w-3 ml-1 opacity-70 group-hover/addr:opacity-100" />
                    </a>

                    <div className="mt-4 border-t border-[var(--lp-line)] pt-3.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[var(--lp-muted)]">Facilities:</span>
                        <span className="text-[var(--lp-ink)]">Optical &amp; Volumetric Display Assembly</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[var(--lp-line)] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleSelectAndScrollLocation("china")}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--lp-accent)] hover:text-[var(--lp-accent-ink)] transition-colors cursor-pointer"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        <span>View On Map ↓</span>
                      </button>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Bao'an+District,+Shenzhen,+China"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[var(--lp-muted)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        <span>Directions</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: ENTERPRISE CONTACT & DEMO REQUEST FORM */}
                <div className="lg:col-span-7">
                  <div id="inquiry-form" className="rounded-[32px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 sm:p-10 shadow-[var(--lp-shadow-card)]">
                    <div className="mb-8">
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
                        Direct Architecture Pilot
                      </span>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--lp-ink)] sm:text-3xl">
                        Schedule a Consultation
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--lp-ink-2)]">
                        Tell us about your physical space, domain, or digital human requirements. Our solutions team responds within 24 hours.
                      </p>
                    </div>

                    {submitted ? (
                      <div className="rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-8 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(22,163,74,0.1)] text-[#16a34a]">
                          <CheckCircle2 className="h-7 w-7" />
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-[var(--lp-ink)]">
                          Inquiry Received
                        </h3>
                        <p className="mt-2 text-sm text-[var(--lp-ink-2)]">
                          Thank you for contacting HS Global AI. An enterprise deployment specialist will reach out shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-[var(--lp-ink)] uppercase tracking-wider mb-1.5">
                              First Name *
                            </label>
                            <input
                              required
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              placeholder="Elena"
                              className="w-full rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-4 py-3 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] focus:border-[var(--lp-accent)] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[var(--lp-ink)] uppercase tracking-wider mb-1.5">
                              Last Name *
                            </label>
                            <input
                              required
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              placeholder="Vance"
                              className="w-full rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-4 py-3 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] focus:border-[var(--lp-accent)] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-[var(--lp-ink)] uppercase tracking-wider mb-1.5">
                              Corporate Email *
                            </label>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="elena@enterprise.com"
                              className="w-full rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-4 py-3 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] focus:border-[var(--lp-accent)] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[var(--lp-ink)] uppercase tracking-wider mb-1.5">
                              Company / Organization *
                            </label>
                            <input
                              required
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Global Luxury Retail Group"
                              className="w-full rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-4 py-3 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] focus:border-[var(--lp-accent)] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[var(--lp-ink)] uppercase tracking-wider mb-1.5">
                            Phone Number
                          </label>
                          <div className="flex gap-2">
                            <select
                              value={selectedCountryCode}
                              onChange={(e) => setSelectedCountryCode(e.target.value)}
                              className="rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-3 text-sm text-[var(--lp-ink)] focus:border-[var(--lp-accent)] focus:outline-none"
                            >
                              {countryCodes.map((c) => (
                                <option key={c.country} value={c.code}>
                                  {c.iso} ({c.code})
                                </option>
                              ))}
                            </select>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="84649 77333"
                              className="flex-1 rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-4 py-3 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] focus:border-[var(--lp-accent)] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[var(--lp-ink)] uppercase tracking-wider mb-1.5">
                            Target Industry / Domain
                          </label>
                          <select
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            className="w-full rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-4 py-3 text-sm text-[var(--lp-ink)] focus:border-[var(--lp-accent)] focus:outline-none"
                          >
                            <option value="Retail">Retail &amp; Luxury Stores</option>
                            <option value="Healthcare">Hospitals &amp; Healthcare Clinics</option>
                            <option value="Defence">Defence &amp; High-Security Facilities</option>
                            <option value="Events">Events, Expos &amp; Museums</option>
                            <option value="Banking">Banking &amp; Financial Services</option>
                            <option value="Corporate">Corporate Lobbies &amp; Headquarters</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[var(--lp-ink)] uppercase tracking-wider mb-1.5">
                            Project Objectives &amp; Requirements *
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Describe your target deployment setting (e.g. 5 retail stores, 86'' hologram box in reception, air-gapped requirement)..."
                            className="w-full rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] px-4 py-3 text-sm text-[var(--lp-ink)] placeholder-[var(--lp-muted)] focus:border-[var(--lp-accent)] focus:outline-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Submitting Pilot Request...</span>
                          ) : (
                            <>
                              <span>Submit Enterprise Pilot Request</span>
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INTERACTIVE LOCATION MAPS SECTION */}
          <section id="facility-locations" className="px-4 py-16 sm:px-6 md:py-24 bg-[var(--lp-tile)] border-t border-[var(--lp-line)]">
            <div className="mx-auto max-w-[1200px]">
              {/* SECTION HEADER */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
                    Global Facility Locations
                  </span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--lp-ink)] sm:text-3xl">
                    {activeFacility.label}
                  </h2>
                </div>

                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <div className="inline-flex rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] p-1 shadow-2xs">
                    {FACILITY_LOCATIONS.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setActiveLocationMap(f.id)}
                        className={`inline-flex h-8 items-center justify-center rounded-full px-4 text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer ${
                          activeLocationMap === f.id
                            ? "bg-[var(--lp-ink)] text-white shadow-xs"
                            : "text-[var(--lp-muted)] hover:text-[var(--lp-ink)]"
                        }`}
                      >
                        {f.shortTab}
                      </button>
                    ))}
                  </div>

                  <a
                    href={activeFacility.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-4 text-xs font-semibold text-[var(--lp-ink)] hover:bg-[var(--lp-tile)] shadow-2xs transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* INTEGRATED MAP & EXACT COMPANY LOCATION CARD GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* MAP IFRAME CONTAINER */}
                <div className="lg:col-span-7 xl:col-span-8 relative overflow-hidden rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-[var(--lp-shadow-card)] min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]">
                  {/* FLOATING TOP-LEFT LOCATION BADGE OVER MAP */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
                    <div className="flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-white/95 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-[var(--lp-accent)] animate-pulse" />
                      <span className="text-xs font-bold text-[var(--lp-ink)]">
                        {activeFacility.companyName}
                      </span>
                    </div>
                  </div>

                  {/* FLOATING TOP-RIGHT OPEN IN MAPS BUTTON */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <a
                      href={activeFacility.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-white/95 px-3 py-1.5 text-xs font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] hover:border-[var(--lp-accent)] shadow-sm backdrop-blur-md transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                      <span>Open Exact Pin</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>

                  <iframe
                    key={activeFacility.id}
                    title={`${activeFacility.companyName} Exact Location Map`}
                    src={activeFacility.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]"
                  />
                </div>

                {/* EXACT COMPANY LOCATION DETAIL CARD */}
                <div className="lg:col-span-5 xl:col-span-4 rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 sm:p-7 shadow-[var(--lp-shadow-card)] flex flex-col justify-between">
                  <div>
                    {/* BADGE & CITY */}
                    <div className="flex items-center justify-between pb-4 border-b border-[var(--lp-line)]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,90,31,0.08)] px-3 py-1 text-xs font-bold text-[var(--lp-accent-ink)]">
                        <Building2 className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                        {activeFacility.badge}
                      </span>
                      <span className="text-xs font-bold text-[var(--lp-muted)] uppercase">
                        {activeFacility.city}
                      </span>
                    </div>

                    {/* COMPANY TITLE */}
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--lp-ink)]">
                      {activeFacility.companyName}
                    </h3>
                    {activeFacility.rating && (
                      <div className="mt-1.5 flex items-center gap-2 text-xs text-[var(--lp-muted)]">
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
                          {activeFacility.rating}
                        </span>
                        {activeFacility.category && (
                          <>
                            <span>•</span>
                            <span className="font-medium">{activeFacility.category}</span>
                          </>
                        )}
                      </div>
                    )}

                    {/* EXACT PHYSICAL ADDRESS BOX */}
                    <div className="mt-4 p-4 rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)]">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="h-4 w-4 text-[var(--lp-accent)] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--lp-muted)] block">
                            Exact Company Address
                          </span>
                          <p className="mt-1 text-sm font-semibold text-[var(--lp-ink)] leading-snug">
                            {activeFacility.address}
                          </p>
                        </div>
                      </div>

                      {/* TRANSIT / LANDMARK DETAIL */}
                      <div className="mt-3.5 pt-3 border-t border-[var(--lp-line)] flex items-start gap-2 text-xs text-[var(--lp-ink-2)]">
                        <Navigation className="h-3.5 w-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{activeFacility.landmarkTransit}</span>
                      </div>
                    </div>

                    {/* FACILITY METRICS / CONTACT */}
                    <div className="mt-5 space-y-2.5 text-xs">
                      {activeFacility.plusCode && (
                        <div className="flex items-center justify-between py-1.5 border-b border-[var(--lp-line)]">
                          <span className="text-[var(--lp-muted)] font-medium">Google Plus Code:</span>
                          <span className="text-[var(--lp-ink)] font-semibold">{activeFacility.plusCode}</span>
                        </div>
                      )}
                      {activeFacility.email && (
                        <div className="flex items-center justify-between py-1.5 border-b border-[var(--lp-line)]">
                          <span className="text-[var(--lp-muted)] font-medium">Direct Inquiries:</span>
                          <a
                            href={`mailto:${activeFacility.email}`}
                            className="font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors"
                          >
                            {activeFacility.email}
                          </a>
                        </div>
                      )}
                      {activeFacility.phone && (
                        <div className="flex items-center justify-between py-1.5 border-b border-[var(--lp-line)]">
                          <span className="text-[var(--lp-muted)] font-medium">Phone Desk:</span>
                          <a
                            href={`tel:${activeFacility.phone}`}
                            className="font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors"
                          >
                            {activeFacility.phone}
                          </a>
                        </div>
                      )}
                      {activeFacility.hours && (
                        <div className="flex items-center justify-between py-1.5 border-b border-[var(--lp-line)]">
                          <span className="text-[var(--lp-muted)] font-medium">Visiting Hours:</span>
                          <span className="text-[var(--lp-ink)] font-semibold">{activeFacility.hours}</span>
                        </div>
                      )}
                      {activeFacility.facilitiesNote && (
                        <div className="flex items-center justify-between py-1.5 border-b border-[var(--lp-line)]">
                          <span className="text-[var(--lp-muted)] font-medium">Lab Capability:</span>
                          <span className="text-[var(--lp-ink)] font-semibold">{activeFacility.facilitiesNote}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BOTTOM ACTION BUTTONS */}
                  <div className="mt-6 pt-5 border-t border-[var(--lp-line)] space-y-2.5">
                    <a
                      href={activeFacility.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full h-11 rounded-full bg-[var(--lp-ink)] text-white text-xs font-semibold hover:bg-[#2A2A2F] transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                    >
                      <MapPin className="h-4 w-4 text-[var(--lp-accent)]" />
                      <span>Open Exact Location in Google Maps</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyAddress(activeFacility.fullPostalAddress || activeFacility.address)}
                      className="flex items-center justify-center gap-2 w-full h-9 rounded-full border border-[var(--lp-line)] bg-white text-xs font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile)] transition-all active:scale-[0.98] cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Address Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-[var(--lp-muted)]" />
                          <span>Copy Full Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* TAB CONTENT 2: DOWNLOAD CENTER */}
      {activeTab === "downloads" && (
        <section className="px-4 py-20 sm:px-6 md:py-28 bg-[var(--lp-bg)]">
          <div className="mx-auto max-w-[1200px] space-y-16">
            <div>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,90,31,0.08)] px-3.5 py-1 text-xs font-semibold text-[var(--lp-accent-ink)]">
                  <FileText className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                  Engineering Datasheets &amp; Technical Specifications
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--lp-ink)]">
                  Official Hardware &amp; Platform Literature
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {dataSheetsAndPriceList.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 shadow-[var(--lp-shadow-card)]"
                  >
                    <div>
                      {item.lang && (
                        <span className="rounded-full bg-[var(--lp-tile)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--lp-muted)] mb-2 inline-block">
                          {item.lang} Edition
                        </span>
                      )}
                      <h3 className="text-base font-semibold text-[var(--lp-ink)] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--lp-muted)]">
                        {item.filename}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDownload(item)}
                      disabled={downloadingTitle === item.title}
                      className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-5 text-xs font-semibold text-[var(--lp-ink)] hover:bg-[var(--lp-tile-2)] transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                      <Download className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                      <span>{downloadingTitle === item.title ? "Downloading..." : "Download PDF"}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--lp-tile)] px-3.5 py-1 text-xs font-semibold text-[var(--lp-ink)]">
                  <Download className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                  DIHUAVA Brochures &amp; Partner Templates
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--lp-ink)]">
                  Commercial &amp; Integration Kits
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[...dihuavaBrochures, ...dihuavaTemplates].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 shadow-[var(--lp-shadow-card)]"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-[var(--lp-ink)] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--lp-muted)]">
                        {item.filename}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDownload(item)}
                      disabled={downloadingTitle === item.title}
                      className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-5 text-xs font-semibold text-[var(--lp-ink)] hover:bg-[var(--lp-tile-2)] transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                      <Download className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
                      <span>{downloadingTitle === item.title ? "Downloading..." : "Download PDF"}</span>
                    </button>
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
