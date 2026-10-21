"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";
import { FileText } from "lucide-react";

export default function TermsClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const tPage = (dict as any).termsPage || {};
  const sec = tPage.sections || {};

  const baseUrl = "https://www.hsglobalai.com";
  const currentUrl = currentLocale === "en" ? `${baseUrl}/terms` : `${baseUrl}/${currentLocale}/terms`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: tPage.breadcrumbHome || "Home",
        item: currentLocale === "en" ? baseUrl : `${baseUrl}/${currentLocale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tPage.breadcrumbTerms || "Terms & Conditions",
        item: currentUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--lp-ink-2)] mb-6">
            <FileText className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
            <span>{tPage.badge || "Official Legal Agreement"}</span>
          </div>

          <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px]">
            {tPage.title || "Terms & Conditions"}
          </h1>
          <p className="mt-4 text-xs text-[var(--lp-muted)]">
            {tPage.effectiveDate || "Effective Date: January 2026 | HS GLOBAL SG PTE LTD"}
          </p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-[var(--lp-ink-2)] border-t border-[var(--lp-line)] pt-10">
            <div>
              <h2 className="text-xl font-bold text-[var(--lp-ink)]">{sec.section1Title || "1. Agreement to Terms"}</h2>
              <p className="mt-3">
                {sec.section1Content || 'By accessing or using the website hsglobalai.com, licensing the DIHUAVA Digital Human software platform, or purchasing 3D Hologram Box display hardware provided by HS GLOBAL SG PTE LTD ("Company", "We", "Us"), you represent that you are at least 18 years of age and agree to be legally bound by these Terms and Conditions.'}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--lp-ink)]">{sec.section2Title || "2. Intellectual Property Rights & Custom Avatar Ownership"}</h2>
              <p className="mt-3">
                {sec.section2Content || 'All proprietary software, 3D character rendering engines, neural speech models, trade secrets, logos, and platform code comprising DIHUAVA remain the sole property of HS Global AI. Clients retain full ownership of proprietary brand knowledge bases, logos, custom avatar characters, and uploaded corporate media.'}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--lp-ink)]">{sec.section3Title || "3. Ethical AI & Acceptable Use Policy"}</h2>
              <p className="mt-3">
                {sec.section3Intro || 'Users and corporate licensees agree to deploy Digital Human AI solutions responsibly. The platform must NOT be used for:'}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--lp-ink-2)] list-disc list-inside">
                {(sec.section3Items || [
                  "Generating unauthorized deepfakes or impersonating living individuals without consent.",
                  "Transmitting unlawful, defamatory, deceptive, or hate speech communications.",
                  "Attempting to reverse-engineer, decompile, or extract local AI model weights.",
                ]).map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--lp-ink)]">{sec.section4Title || '4. Hardware Warranty & "AS IS" Software Disclaimer'}</h2>
              <p className="mt-3">
                {sec.section4Content || 'Hologram Box hardware and kiosk units sold directly by HS Global AI come with a 12-month manufacturer hardware warranty. Software services are provided on an "AS IS" and "AS AVAILABLE" basis. HS Global AI disclaims all implied warranties of merchantability or fitness for a specific purpose to the maximum extent permitted by law.'}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--lp-ink)]">{sec.section5Title || "5. Limitation of Liability"}</h2>
              <p className="mt-3">
                {sec.section5Content || 'To the maximum extent permitted by applicable law, in no event shall HS Global AI or its suppliers be liable for special, incidental, indirect, or consequential damages (including loss of profits, business interruption, or data loss) arising out of the use or inability to use the platform.'}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--lp-ink)]">{sec.section6Title || "6. Governing Law & Dispute Resolution"}</h2>
              <p className="mt-3">
                {sec.section6Content || 'These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Singapore. In the event of any concern or dispute, parties agree to first attempt informal resolution by contacting our legal department.'}
              </p>
              <div className="mt-4 rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 text-sm shadow-xs">
                <p className="font-semibold text-[var(--lp-ink)]">{sec.legalDeptTitle || "Legal Department — HS GLOBAL SG PTE LTD"}</p>
                <p className="text-[var(--lp-ink-2)] mt-1">{sec.legalDeptAddress || "20 Collyer Quay, #09-01, Singapore 049319"}</p>
                <p className="mt-2 text-[var(--lp-accent)] font-medium">{sec.legalDeptEmail || "Email: info@hsglobalai.com / sales@hsglobalai.com"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
