"use client";

import Header from "@/components/Header";
import ParallaxBackgroundLayer from "@/components/ParallaxBackgroundLayer";
import DigitalHumanHero from "@/components/DigitalHumanHero";
import EnterpriseQuestionSimulator from "@/components/EnterpriseQuestionSimulator";
import Industries from "@/components/Industries";
import EnterpriseRoiCalculator from "@/components/EnterpriseRoiCalculator";
import EnterpriseSecurityCommand from "@/components/EnterpriseSecurityCommand";
import ChatbotVsAvatar from "@/components/ChatbotVsAvatar";
import Products from "@/components/Products";
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

      {/* 2. SWIPECRAFT-STYLE DOMAIN-FIRST DIGITAL HUMAN HERO */}
      <DigitalHumanHero />

      {/* 3. INTERACTIVE ENTERPRISE WORKFLOW & DOMAIN QUESTION SIMULATOR */}
      <EnterpriseQuestionSimulator />

      {/* 4. ASYMMETRIC BENTO GRID: DOMAIN SOLUTIONS (RETAIL, HEALTHCARE, DEFENCE, EVENTS) */}
      <Industries />

      {/* 5. INTERACTIVE ENTERPRISE ROI & COST-SAVINGS DRAG BAR CALCULATOR */}
      <EnterpriseRoiCalculator />

      {/* 6. INTERACTIVE AIR-GAPPED SECURITY & DATA PRIVACY COMMAND CENTER */}
      <EnterpriseSecurityCommand />

      {/* 7. COST CUTTING & ROI VALUE COMPARISON (CHATBOTS VS STAFFING VS DIGITAL HUMANS) */}
      <ChatbotVsAvatar />

      {/* 8. PHYSICAL HARDWARE & FORM FACTORS (HOLOGRAM BOXES, KIOSKS, SPATIAL DISPLAYS) */}
      <Products />

      {/* 9. ENTERPRISE DEPLOYMENT FAQ ACCORDION */}
      <FAQ />

      {/* 10. HIGH-CONVERSION ENTERPRISE PILOT CTA CALLOUT */}
      <CTA />

      {/* 11. MINIMALIST EDITORIAL FOOTER */}
      <Footer />
    </main>
  );
}
