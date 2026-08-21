"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "General & Overview",
    question: "What is a Digital Human AI Assistant?",
    answer:
      "A Digital Human AI Assistant is a lifelike AI avatar capable of natural conversation, facial expressions, gestures, and multilingual voice interaction. It can represent your brand, answer customer queries, guide users, and operate continuously 24/7 without human intervention.",
  },
  {
    category: "General & Overview",
    question: "How does the AI Hologram display system work?",
    answer:
      "Our hologram display system uses high-clarity optical projection hardware combined with DIHUAVA AI software to present 3D digital humans and interactive content inside a physical hologram box. The system supports real-time voice interaction, visual gestures, and industry-specific workflows.",
  },
  {
    category: "General & Overview",
    question: "Which industries benefit most from HS Global AI solutions?",
    answer:
      "Our solutions are custom-built for Banking & Financial Services, Retail & Advertising, Corporate Offices, Healthcare & Telemedicine, Education & Training, Tourism & Exhibitions, and Enterprise Automation.",
  },
  {
    category: "General & Overview",
    question: "How does HS Global AI reduce operational costs?",
    answer:
      "By automating front-desk reception, customer onboarding, product demonstrations, and routine information delivery, HS Global AI significantly reduces staffing requirements, eliminates queue times, and ensures consistent 24/7 service quality.",
  },
  {
    category: "Customization & AI Training",
    question: "Can we customize the avatar's appearance, attire, and voice?",
    answer:
      "Absolutely. Digital humans can be fully customized in facial appearance, corporate attire/uniform with company logo, voice tone, speaking speed, language capabilities, and behavioral personality to match your brand identity.",
  },
  {
    category: "Customization & AI Training",
    question: "Can the AI be trained on our internal company documents and catalogs?",
    answer:
      "Yes. The AI incorporates a local RAG (Retrieval-Augmented Generation) document intelligence engine trained on your PDFs, manuals, FAQs, product catalogs, and corporate workflows to provide 100% accurate, brand-safe responses.",
  },
  {
    category: "Customization & AI Training",
    question: "How easily can we update avatar knowledge base and content?",
    answer:
      "Content and AI knowledge bases can be updated anytime through our central DIHUAVA dashboard without disrupting active operations. Updates push remotely across all deployed devices in real time.",
  },
  {
    category: "Security & Deployment",
    question: "How secure is the platform and customer interaction data?",
    answer:
      "Security is enterprise-grade. We implement role-based access controls, encrypted data storage, and strict privacy guidelines. Deployments can be configured 100% on-device (air-gapped) or cloud-managed depending on your compliance requirements.",
  },
  {
    category: "Security & Deployment",
    question: "Does the system require continuous internet connectivity?",
    answer:
      "No. While internet connectivity enables remote updates and cloud analytics, our DIHUAVA engine supports 100% offline / on-device AI processing for high-security, air-gapped environments.",
  },
  {
    category: "Security & Deployment",
    question: "What hardware components are included with deployment?",
    answer:
      "Standard deployments include the 3D Hologram Box display unit, edge AI GPU processing hardware, directional microphones, speakers, optical cameras, and optional touch interfaces.",
  },
  {
    category: "Capabilities & Features",
    question: "How many languages and dialects are supported?",
    answer:
      "HS Global AI supports 30+ primary languages (including English, Spanish, Mandarin, Arabic, Japanese, French, German, and Hindi), custom voice cloning, and over 100 regional accents with automatic language detection.",
  },
  {
    category: "Capabilities & Features",
    question: "Does the platform support face recognition and gesture detection?",
    answer:
      "Yes. Optional computer vision modules support visitor presence detection, facial recognition for personalized greetings, gesture control, and proximity-based interaction.",
  },
  {
    category: "Capabilities & Features",
    question: "Can we track interaction metrics and analytics?",
    answer:
      "Yes. The platform includes real-time dashboards for monitoring conversation topics, visitor engagement duration, peak usage hours, and system health status across all deployed kiosks.",
  },
  {
    category: "Capabilities & Features",
    question: "Can HS Global AI integrate with our existing CRM or databases?",
    answer:
      "Yes. Our platform offers RESTful APIs and pre-built connectors to integrate with enterprise CRMs, ERPs, ticketing tools, and appointment booking databases.",
  },
  {
    category: "Deployment & Support",
    question: "Can we manage multiple hologram units across different locations?",
    answer:
      "Yes. DIHUAVA features centralized multi-location management, allowing administrators to control, update, and monitor hundreds of hologram units across global branches from one dashboard.",
  },
  {
    category: "Deployment & Support",
    question: "How long does a standard deployment take?",
    answer:
      "Standard deployments can be completed in 2 to 4 weeks, including avatar customization, knowledge base ingestion, and hardware setup. Phased enterprise rollouts are tailored to project scope.",
  },
  {
    category: "Deployment & Support",
    question: "Can we run a pilot deployment before full rollout?",
    answer:
      "Yes! We offer proof-of-concept (POC) and pilot programs so businesses can validate customer engagement and operational performance prior to enterprise-wide rollout.",
  },
  {
    category: "Deployment & Support",
    question: "What technical support and maintenance do you provide?",
    answer:
      "We provide 24/7 technical support, remote system diagnostics, regular AI model retraining, hardware maintenance, and continuous software upgrades.",
  },
];

const categories = [
  "All Questions",
  "General & Overview",
  "Customization & AI Training",
  "Security & Deployment",
  "Capabilities & Features",
  "Deployment & Support",
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    selectedCategory === "All Questions"
      ? faqData
      : faqData.filter((f) => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white border-t border-white/10">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-900/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Official Knowledge Center
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Everything you need to know about DIHUAVA Digital Humans, 3D Hologram Box hardware, security compliance, and enterprise rollouts.
          </p>
        </motion.div>

        {/* CATEGORY FILTER TABS */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-xs font-medium backdrop-blur-md transition-all ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "border border-white/15 bg-white/5 text-gray-300 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ACCORDION LIST */}
        <div className="mt-12 space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-500/40 bg-neutral-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1)]"
                    : "border-white/15 bg-neutral-950/60 hover:border-white/30"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left text-base font-semibold text-white sm:text-lg hover:text-cyan-300 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-cyan-400 text-cyan-400" : "text-gray-400"
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-sm leading-7 text-gray-300 sm:text-base border-t border-white/10 pt-4"
                  >
                    <p>{faq.answer}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-mono">
                      <span>CATEGORY // {faq.category.toUpperCase()}</span>
                      <span className="text-cyan-400">● DIHUAVA VERIFIED</span>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
