"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[750px] rounded-full bg-cyan-600/10 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-6">
            Official Legal Agreement
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-gray-400 font-mono">
            Effective Date: January 2026 | HS Global AI Pte. Ltd.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-gray-300 border-t border-white/10 pt-10">
            <div>
              <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
              <p className="mt-3">
                By accessing or using the website hsglobalai.com, licensing the DIHUAVA Digital Human software platform, or purchasing 3D Hologram Box display hardware provided by HS Global AI Pte. Ltd. ("Company", "We", "Us"), you represent that you are at least 18 years of age and agree to be legally bound by these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">2. Intellectual Property Rights & Custom Avatar Ownership</h2>
              <p className="mt-3">
                All proprietary software, 3D character rendering engines, neural speech models, trade secrets, logos, and platform code comprising DIHUAVA remain the sole property of HS Global AI. Clients retain full ownership of proprietary brand knowledge bases, logos, custom avatar characters, and uploaded corporate media.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">3. Ethical AI & Acceptable Use Policy</h2>
              <p className="mt-3">
                Users and corporate licensees agree to deploy Digital Human AI solutions responsibly. The platform must NOT be used for:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside">
                <li>Generating unauthorized deepfakes or impersonating living individuals without consent.</li>
                <li>Transmitting unlawful, defamatory, deceptive, or hate speech communications.</li>
                <li>Attempting to reverse-engineer, decompile, or extract local AI model weights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">4. Hardware Warranty & "AS IS" Software Disclaimer</h2>
              <p className="mt-3">
                Hologram Box hardware and kiosk units sold directly by HS Global AI come with a 12-month manufacturer hardware warranty. Software services are provided on an "AS IS" and "AS AVAILABLE" basis. HS Global AI disclaims all implied warranties of merchantability or fitness for a specific purpose to the maximum extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by applicable law, in no event shall HS Global AI or its suppliers be liable for special, incidental, indirect, or consequential damages (including loss of profits, business interruption, or data loss) arising out of the use or inability to use the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">6. Governing Law & Dispute Resolution</h2>
              <p className="mt-3">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Singapore. In the event of any concern or dispute, parties agree to first attempt informal resolution by contacting our legal department.
              </p>
              <div className="mt-4 rounded-2xl border border-white/15 bg-neutral-950 p-6 text-sm">
                <p className="font-semibold text-white">Legal Department — HS Global AI Pte. Ltd.</p>
                <p className="text-gray-400">20 Collyer Quay, #09-01, Singapore 049319</p>
                <p className="mt-2 text-cyan-400">Email: info@hsglobalai.com / sales@hsglobalai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
