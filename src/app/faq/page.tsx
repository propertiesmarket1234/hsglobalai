import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | HS Global AI",
  description:
    "Find answers to common questions about DIHUAVA AI Digital Humans, 3D Hologram Box specs, on-device hardware requirements, data privacy, and integration.",
  alternates: {
    canonical: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Digital Human AI Assistant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A Digital Human AI Assistant is a lifelike AI avatar capable of natural conversation, facial expressions, gestures, and multilingual voice interaction. It can represent your brand, answer customer queries, guide users, and operate continuously 24/7 without human intervention.",
      },
    },
    {
      "@type": "Question",
      "name": "How does the AI Hologram display system work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Our hologram display system uses high-clarity optical projection hardware combined with DIHUAVA AI software to present 3D digital humans and interactive content inside a physical hologram box. The system supports real-time voice interaction, visual gestures, and industry-specific workflows.",
      },
    },
    {
      "@type": "Question",
      "name": "Which industries benefit most from HS Global AI solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Our solutions are custom-built for Banking & Financial Services, Retail & Advertising, Corporate Offices, Healthcare & Telemedicine, Education & Training, Tourism & Exhibitions, and Enterprise Automation.",
      },
    },
    {
      "@type": "Question",
      "name": "How does HS Global AI reduce operational costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "By automating front-desk reception, customer onboarding, product demonstrations, and routine information delivery, HS Global AI significantly reduces staffing requirements, eliminates queue times, and ensures consistent 24/7 service quality.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we customize the avatar's appearance, attire, and voice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Absolutely. Digital humans can be fully customized in facial appearance, corporate attire/uniform with company logo, voice tone, speaking speed, language capabilities, and behavioral personality to match your brand identity.",
      },
    },
    {
      "@type": "Question",
      "name": "Can the AI be trained on our internal company documents and catalogs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. The AI incorporates a local RAG (Retrieval-Augmented Generation) document intelligence engine trained on your PDFs, manuals, FAQs, product catalogs, and corporate workflows to provide 100% accurate, brand-safe responses.",
      },
    },
    {
      "@type": "Question",
      "name": "How easily can we update avatar knowledge base and content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Content and AI knowledge bases can be updated anytime through our central DIHUAVA dashboard without disrupting active operations. Updates push remotely across all deployed devices in real time.",
      },
    },
    {
      "@type": "Question",
      "name": "How secure is the platform and customer interaction data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Security is enterprise-grade. We implement role-based access controls, encrypted data storage, and strict privacy guidelines. Deployments can be configured 100% on-device (air-gapped) or cloud-managed depending on your compliance requirements.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the system require continuous internet connectivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No. While internet connectivity enables remote updates and cloud analytics, our DIHUAVA engine supports 100% offline / on-device AI processing for high-security, air-gapped environments.",
      },
    },
    {
      "@type": "Question",
      "name": "What hardware components are included with deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Standard deployments include the 3D Hologram Box display unit, edge AI GPU processing hardware, directional microphones, speakers, optical cameras, and optional touch interfaces.",
      },
    },
    {
      "@type": "Question",
      "name": "How many languages and dialects are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "HS Global AI supports 29+ global languages (including English, Spanish, Mandarin, Arabic, Japanese, French, German, and Hindi), custom voice cloning, and over 100 regional accents with automatic language detection.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the platform support face recognition and gesture detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Optional computer vision modules support visitor presence detection, facial recognition for personalized greetings, gesture control, and proximity-based interaction.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we track interaction metrics and analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. The platform includes real-time dashboards for monitoring conversation topics, visitor engagement duration, peak usage hours, and system health status across all deployed kiosks.",
      },
    },
    {
      "@type": "Question",
      "name": "Can HS Global AI integrate with our existing CRM or databases?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Our platform offers RESTful APIs and pre-built connectors to integrate with enterprise CRMs, ERPs, ticketing tools, and appointment booking databases.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we manage multiple hologram units across different locations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. DIHUAVA features centralized multi-location management, allowing administrators to control, update, and monitor hundreds of hologram units across global branches from one dashboard.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does a standard deployment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Standard deployments can be completed in 2 to 4 weeks, including avatar customization, knowledge base setup, and hardware installation. Phased enterprise rollouts are tailored to project scope.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we run a pilot deployment before full rollout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes! We offer proof-of-concept (POC) and pilot programs so businesses can validate customer engagement and operational performance prior to enterprise-wide rollout.",
      },
    },
    {
      "@type": "Question",
      "name": "What technical support and maintenance do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We provide 24/7 technical support, remote system diagnostics, regular AI model retraining, hardware maintenance, and continuous software upgrades.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.hsglobalai.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://www.hsglobalai.com/faq",
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FaqClient />
    </>
  );
}
