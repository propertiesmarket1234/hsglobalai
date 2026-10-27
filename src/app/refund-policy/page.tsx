import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReceiptText } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund policy for DIHUAVA avatar credit packs purchased from HS GLOBAL SG PTE LTD: pricing, 30-day credit expiry, automatic credit returns and refunds of unused packs.",
  alternates: { canonical: "https://www.hsglobalai.com/refund-policy" },
  openGraph: {
    title: "Refund Policy | HS Global AI",
    description:
      "Refund policy for DIHUAVA avatar credit packs: 30-day expiry, automatic credit returns and refunds of unused packs.",
    url: "https://www.hsglobalai.com/refund-policy",
    siteName: "HS Global AI",
    type: "website",
  },
};

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. What this policy covers",
    body: [
      "This policy applies to avatar credit packs bought online in the DIHUAVA admin portal from HS GLOBAL SG PTE LTD (\"we\", \"us\"). Hardware, software licences and services bought under a separate quotation or agreement follow the refund terms of that agreement.",
    ],
  },
  {
    title: "2. Credit packs and pricing",
    body: [
      "Credits are sold in two packs: 100 credits for US$20 and 300 credits for US$50. Prices are in US dollars and include applicable taxes. Payment is a one-time card or wallet payment processed by our payment provider, Airwallex; there is no subscription and no automatic renewal.",
      "Generating one AI avatar, or regenerating an avatar, uses 100 credits. Credits belong to your organisation's account, have no cash value and cannot be transferred or exchanged for money except as described in this policy.",
    ],
  },
  {
    title: "3. Credit expiry",
    body: [
      "Each pack expires 30 days after the date it was purchased. Credits are used from the pack that expires first. Credits that are not used before their pack expires are forfeited and cannot be refunded or restored. We send reminder emails 7 days and 1 day before a pack expires.",
    ],
  },
  {
    title: "4. Failed generations",
    body: [
      "If an avatar generation fails on our side, the 100 credits are returned automatically to the pack they came from, with that pack's original expiry date. No request is needed. If that pack has already expired when the credits are returned, the returned credits expire with it.",
    ],
  },
  {
    title: "5. Refunds of unused packs",
    body: [
      "A pack from which no credits have been used can be refunded in full to the original payment method, provided the pack has not expired. Once any credits from a pack have been used, that pack is not refundable. Expired packs are not refundable.",
      "To request a refund, email info@hsglobalai.com from the account's registered email with your organisation name, the purchase date and the payment receipt. Approved refunds are issued to the original payment method; the refunded pack's credits are removed from your account. Card refunds usually appear within 5 to 10 business days, depending on your bank.",
    ],
  },
  {
    title: "6. Payment disputes",
    body: [
      "If a payment is disputed with your card issuer, the credits from that payment are suspended while the dispute is open. If the dispute is resolved in our favour, the credits are restored; if it is resolved in your favour, they are removed. Please contact us first so we can resolve any problem quickly.",
    ],
  },
  {
    title: "7. Contact",
    body: [
      "HS GLOBAL SG PTE LTD, 60 Paya Lebar Road, #07-54, Paya Lebar Square, Singapore 409051. Email: info@hsglobalai.com. This policy forms part of our Terms & Conditions and is governed by the laws of the Republic of Singapore.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      <Header />

      <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--lp-ink-2)] mb-6">
            <ReceiptText className="h-3.5 w-3.5 text-[var(--lp-accent)]" />
            <span>Official Legal Policy</span>
          </div>

          <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[54px]">
            Refund Policy
          </h1>
          <p className="mt-4 text-xs text-[var(--lp-muted)] font-mono">
            Effective Date: October 2026 | HS GLOBAL SG PTE LTD
          </p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-[var(--lp-ink-2)] border-t border-[var(--lp-line)] pt-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-[var(--lp-ink)]">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
