"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function PrivacyClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const pPage = (dict as any).privacyPage || {};
  const sec = pPage.sections || {};

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[750px] rounded-full bg-cyan-600/10 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-6">
            {pPage.badge || "Official Compliance Document"}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {pPage.title || "Privacy Policy"}
          </h1>
          <p className="mt-4 text-sm text-gray-400 font-mono">
            {pPage.lastUpdated || "Last Updated: January 2026 | HS GLOBAL SG PTE LTD"}
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-gray-300 border-t border-white/10 pt-10">
            <div>
              <h2 className="text-2xl font-bold text-white">{sec.introTitle || "1. Introduction & On-Device Privacy Commitment"}</h2>
              <p className="mt-3">
                {sec.introContent || 'HS GLOBAL SG PTE LTD ("HS Global AI", "we", "our", "us") is dedicated to protecting user privacy and ensuring transparent handling of personal data. Our DIHUAVA Digital Human AI platform is engineered with an "On-Device / Air-Gapped" processing model. All AI model computations, speech recognition, RAG document intelligence, and 3D visual rendering occur locally on physical edge hardware without transmitting sensitive conversation data to external cloud servers.'}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{sec.collectTitle || "2. What Information We Collect"}</h2>
              <p className="mt-3">
                {sec.collectIntro || "We collect personal information that you voluntarily provide to us when you register for demo requests, request platform documentation, or contact sales:"}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside">
                <li><strong className="text-white">{sec.collectPersonalLabel || "Personal & Contact Identifiers:"}</strong> {sec.collectPersonalText || "Names, corporate email addresses, phone numbers, job titles, and company names."}</li>
                <li><strong className="text-white">{sec.collectTechnicalLabel || "Website Usage & Technical Data:"}</strong> {sec.collectTechnicalText || "IP addresses, browser types, device identifiers, and page navigation metrics via security cookies."}</li>
                <li><strong className="text-white">{sec.collectAvatarLabel || "Enterprise Avatar Configurations:"}</strong> {sec.collectAvatarText || "Custom domain knowledge documents (PDFs/manuals) uploaded to local DIHUAVA instances."}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{sec.useTitle || "3. How We Use and Process Information"}</h2>
              <p className="mt-3">
                {sec.useIntro || "We process your information to deliver, maintain, and optimize our Digital Human AI solutions:"}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside">
                {(sec.useItems || [
                  "To facilitate enterprise demo bookings and hardware deployment consultation.",
                  "To deliver custom AI avatar personality models and offline document RAG indexing.",
                  "To send administrative notifications, technical updates, and security alerts.",
                  "To comply with legal obligations, fraud prevention, and system health monitoring.",
                ]).map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{sec.zeroRetentionTitle || "4. Zero Data Retention on Edge Avatars"}</h2>
              <p className="mt-3">
                {sec.zeroRetentionContent || "DIHUAVA local kiosk hardware does not record or retain facial biometrics or voice audio recordings of public users unless explicitly configured by enterprise clients under strict local data retention and privacy compliance mandates."}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{sec.rightsTitle || "5. Your Data Protection Rights"}</h2>
              <p className="mt-3">
                {sec.rightsIntro || "Depending on your location (including Singapore PDPA, EU GDPR, and US State Privacy Laws), you hold specific rights regarding your personal data:"}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-xl border border-white/10 bg-neutral-950 p-4">
                  <span className="font-semibold text-cyan-300">{sec.rightsAccessLabel || "Right to Access & Know:"}</span>
                  <p className="mt-1 text-gray-400 text-xs">{sec.rightsAccessDesc || "Request details on what personal data we process and hold."}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-950 p-4">
                  <span className="font-semibold text-cyan-300">{sec.rightsRectifyLabel || "Right to Correct & Rectify:"}</span>
                  <p className="mt-1 text-gray-400 text-xs">{sec.rightsRectifyDesc || "Correct inaccuracies or complete incomplete personal records."}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-950 p-4">
                  <span className="font-semibold text-cyan-300">{sec.rightsDeleteLabel || "Right to Delete & Erase:"}</span>
                  <p className="mt-1 text-gray-400 text-xs">{sec.rightsDeleteDesc || "Request deletion of personal data collected from our servers."}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-950 p-4">
                  <span className="font-semibold text-cyan-300">{sec.rightsOptOutLabel || "Right to Opt-Out:"}</span>
                  <p className="mt-1 text-gray-400 text-xs">{sec.rightsOptOutDesc || "Opt out of targeted communications or automated profiling."}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{sec.exerciseTitle || "6. How to Exercise Your Privacy Rights"}</h2>
              <p className="mt-3">
                {sec.exerciseIntro || "To exercise any of your data protection rights or submit a Data Subject Access Request (DSAR), please contact our Data Protection Officer:"}
              </p>
              <div className="mt-4 rounded-2xl border border-white/15 bg-neutral-950 p-6 text-sm">
                <p className="font-semibold text-white">{sec.dpoTitle || "Data Protection Office — HS GLOBAL SG PTE LTD"}</p>
                <p className="text-gray-400">{sec.address || "20 Collyer Quay, #09-01, Singapore 049319"}</p>
                <p className="mt-2 text-cyan-400">{sec.emailLabel || "Email: sales@hsglobalai.com"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
