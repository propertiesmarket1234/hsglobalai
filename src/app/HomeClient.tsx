"use client";

import Header from "@/components/Header";
import ParallaxBackgroundLayer from "@/components/ParallaxBackgroundLayer";
import DigitalHumanHero from "@/components/DigitalHumanHero";
import EnterpriseQuestionSimulator from "@/components/EnterpriseQuestionSimulator";
import Industries from "@/components/Industries";
import EnterpriseSecurityCommand from "@/components/EnterpriseSecurityCommand";
import ChatbotVsAvatar from "@/components/ChatbotVsAvatar";
import Products from "@/components/Products";
import LatestInsights from "@/components/LatestInsights";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomeClient() {
  return (
    <main className="relative min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white overflow-x-clip">
      {/* 0. MULTI-DEPTH PARALLAX BACKGROUND ACCENT LAYER */}
      <ParallaxBackgroundLayer />

      {/* 1. FLOATING CAPSULE NAVIGATION HEADER */}
      <Header />

      {/* Band 1: Asymmetric Split Hero + Live Avatar Stage */}
      <DigitalHumanHero />

      {/* Band 2: Visual-First Product Ecosystem Showcase */}
      <Products />

      {/* Band 3: Enterprise Conversational Question Simulator */}
      <EnterpriseQuestionSimulator />

      {/* Band 4: 6-Industry Visual Deployments Bento */}
      <Industries />

      {/* Band 5: Interactive Visual On-Device Air-Gap Architecture Diagram */}
      <EnterpriseSecurityCommand />

      {/* Band 6: Compact Comparison Matrix (Embodied Digital Humans vs Alternatives) */}
      <ChatbotVsAvatar />

      {/* Band 7: Featured Blog Insights + Live Exhibition Showcase */}
      <LatestInsights />

      {/* Band 8: Categorized FAQ (All Items Preserved in DOM) + Conversion CTA */}
      <FAQ />
      <CTA />

      {/* 11. MINIMALIST EDITORIAL FOOTER */}
      <Footer />
    </main>
  );
}
