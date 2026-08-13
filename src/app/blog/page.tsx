"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion, AnimatePresence } from "framer-motion";

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  snippet: string;
  author: string;
  featured?: boolean;
  bannerImage: string;
  bannerBg: string;
  accentColor: string;
  icon: string;
  tags: string[];
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "AI Business Automation: Streamlining Operations for Efficiency",
    category: "Business Automation",
    date: "May 13, 2026",
    readTime: "8 min read",
    snippet:
      "How companies are leveraging local AI digital human avatars to automate workflow bottlenecks, streamline customer onboarding, and achieve 100% data privacy without cloud latency.",
    author: "HS Global AI Enterprise Team",
    featured: true,
    bannerImage: "/images/blog/blog_banner_automation.png",
    bannerBg: "from-cyan-950 via-blue-950/80 to-black",
    accentColor: "cyan",
    icon: "🤖",
    tags: ["Automation", "Enterprise AI", "DIHUAVA", "On-Device"],
    content: `Artificial intelligence has evolved far beyond basic text chatbots and automated phone trees. Today's leading enterprises are deploying embodied, 3D Digital Human Avatars capable of executing complex business workflows, greeting physical visitors, processing document lookups, and qualifying high-value sales leads in real time.

## The Shift from Legacy Chatbots to Embodied Digital Humans

Traditional customer support channels—such as website pop-up widgets or IVR phone menus—suffer from high drop-off rates due to static text, artificial latency, and a complete lack of human touch. Embodied digital humans bridge this gap by combining visual emotion, natural neural speech, and domain-specific Large Language Models (LLMs).

When deployed on physical hardware like the **DIHUAVA Hologram Box** or spatial kiosks, digital human avatars create an immediate visual draw while operating autonomously 24 hours a day, 7 days a week.

---

## Key Operational Bottlenecks Solved by DIHUAVA AI

### 1. Zero Cloud Dependency & Sub-3000ms Latency
By running AI inference models 100% locally on edge GPU hardware, enterprises eliminate cloud round-trip latency. Customer inquiries receive sub-second voice and gesture responses, replicating natural human conversation.

### 2. Instant Knowledge Base RAG Integration
Instead of training staff on hundreds of policy documents, the avatar connects directly to local PDF RAG (Retrieval-Augmented Generation) systems. It retrieves precise policy answers, product specifications, or compliance guidelines in under 50 milliseconds.

### 3. Automated Intake and Lead Capture
Avatars can automatically register visitors, collect inquiry details, issue digital tickets, and push leads directly to corporate CRMs without requiring manual administrative entry.

---

## Architectural Comparison: Cloud Automation vs. On-Device Edge AI

| Dimension | Cloud-Hosted AI Automation | HS Global On-Device AI (DIHUAVA) |
| :--- | :--- | :--- |
| **Response Latency** | 400ms – 2,500ms+ (Variable) | < 3000ms (Real-Time Sub-Second) |
| **Data Privacy** | Streams data to public third-party APIs | 100% Air-Gapped Local Storage |
| **Internet Dependency** | Total outage during network drop | Uninterrupted offline execution |
| **Operating Cost** | Scaled API token costs per query | Fixed hardware ownership model |

---

## Real-World Enterprise ROI & Impact

Organizations adopting DIHUAVA for business automation report a **35% reduction in front-desk handling costs** alongside a **3x increase in customer engagement depth**. By automating repetitive inquiries, human staff are empowered to focus on complex, high-margin customer advisory tasks.`,
  },
  {
    id: "2",
    title: "Edge AI vs. Cloud AI: Choosing the Right Infrastructure for Your Business",
    category: "Enterprise Infrastructure",
    date: "May 25, 2026",
    readTime: "10 min read",
    snippet:
      "An executive architectural guide comparing latency, security, bandwidth consumption, and total cost of ownership between cloud-hosted AI APIs and local Edge AI processing.",
    author: "HS Global AI Infrastructure Team",
    featured: false,
    bannerImage: "/images/blog/blog_banner_edge_ai.png",
    bannerBg: "from-cyan-950 via-sky-950/80 to-black",
    accentColor: "cyan",
    icon: "⚡",
    tags: ["Edge AI", "Cloud AI", "Infrastructure", "GPU Computing"],
    content: `Choosing between Cloud AI and Edge AI is one of the most consequential architectural decisions for modern technology leadership. While Cloud AI offered the earliest path to testing large language models, enterprise deployment in physical locations reveals critical flaws: high latency, massive bandwidth costs, and severe data privacy risks.

## The Executive Dilemma: Speed, Cost, and Data Privacy

As AI transitions from online text prompts to real-time physical interactions (like 3D Hologram kiosks and voice-activated digital receptionists), network stability becomes a bottleneck.

### 1. The Latency Problem
A natural spoken dialogue requires voice input, speech-to-text (STT), LLM reasoning, text-to-speech (TTS), and natural facial expressions via speech animation to complete within 300 milliseconds. Over cloud connections, ping times and API queueing often push latency beyond 2 seconds, creating uncomfortable awkward pauses for users. Edge AI processes speech and rendering directly on local GPU chips, achieving instantaneous sub-3000ms fluidity.

### 2. Air-Gapped Data Sovereignty
Regulated industries—such as banking, defense, healthcare, and government facilities—are legally restricted from uploading raw customer audio, biometric scans, or confidential internal documents to external cloud endpoints. Edge AI keeps 100% of data contained within local physical hardware.

---

## Infrastructure Breakdown

1. **Bandwidth Savings:** Local model execution eliminates continuous high-resolution video and audio streaming back and forth across WAN networks.
2. **Deterministic Reliability:** Edge AI continues to function seamlessly during internet outages, regional ISP failures, or server downtime.
3. **Predictable Cost Scale:** Cloud AI API pricing scales linearly with usage volume, leading to unpredictable monthly bills. Edge AI operates on a fixed one-time hardware investment.

---

## Executive Recommendation Matrix

Deploy **Edge AI** when your application demands sub-second real-time voice, strict data compliance, offline reliability, or physical kiosk deployment. Utilize **Cloud AI** only for non-time-sensitive batch data processing or public web indexing.`,
  },
  {
    id: "3",
    title: "AI for Business: Enhancing Customer Engagement and Support",
    category: "Customer Experience",
    date: "May 05, 2026",
    readTime: "7 min read",
    snippet:
      "How interactive 3D digital humans provide human-like customer engagement, personalized product recommendations, and instant query resolution in physical spaces.",
    author: "HS Global AI Customer Experience Team",
    featured: false,
    bannerImage: "/images/blog/blog_banner_customer_support.png",
    bannerBg: "from-cyan-950 via-sky-950/80 to-black",
    accentColor: "cyan",
    icon: "💬",
    tags: ["Customer Support", "Digital Humans", "UX", "Holograms"],
    content: `Customer support in physical environments—such as hotel lobbies, bank branches, healthcare clinics, and shopping centers—is undergoing a profound visual transformation. 

## Why Visual AI Avatars Drive 3x Higher Customer Engagement

Humans are biologically wired for face-to-face visual communication. Static touchscreens and mobile apps lack emotional resonance, leading to low visitor interest. Digital Human Avatars combine real-time facial expressions, eye contact, and natural body language to create instant visual attraction.

### 1. Natural Neural Conversation
Powered by multi-modal AI models, DIHUAVA avatars listen attentively, detect visual speaker presence, and reply using warm, lifelike neural voices tailored to match brand personality.

### 2. Instant Document & Policy Lookups
When customers ask detailed technical or operational questions—such as loan criteria, store refund policies, or event schedules—the avatar performs sub-second local RAG search across indexed enterprise PDFs and displays clear visual summaries alongside verbal explanations.

### 3. Multi-Touchpoint Omnichannel Deployment
Whether placed in an entry-way 3D Hologram Box, an interactive touch kiosk, or an executive reception display, digital human avatars present a unified, highly professional brand presence.`,
  },
  {
    id: "4",
    title: "AI Product Catalogue: The Future of Smart Selling & Interactive Displays",
    category: "Smart Retail",
    date: "April 28, 2026",
    readTime: "9 min read",
    snippet:
      "Transforming static retail displays into interactive digital product showcases driven by 3D holographic avatars that recommend products in real-time.",
    author: "HS Global AI Retail Division",
    featured: false,
    bannerImage: "/images/blog/blog_banner_product_catalogue.png",
    bannerBg: "from-cyan-950 via-sky-950/80 to-black",
    accentColor: "cyan",
    icon: "🛍️",
    tags: ["Smart Retail", "Holographic", "Interactive", "Sales AI"],
    content: `In modern retail, physical store visitors expect the same speed, personalization, and instant product information they enjoy when shopping online. Static posters, paper brochures, and traditional digital signage fail to capture modern consumer attention.

## Reimagining In-Store Physical Displays

The **DIHUAVA AI Product Catalogue** turns physical space into a spatial interactive sales floor. By placing a 3D Hologram Box or Spatial Display at store entrances, retailers create an immersive showcase where customers interact directly with digital product models and avatar shopping guides.

### Key Innovations in Smart Product Displays:

1. **Interactive 3D Spatial Rendering:** Customers can view products in high-definition 3D, inspect angles, and see color variations rendered in real-time.
2. **Intelligent Cross-Selling & Recommendations:** As the visitor discusses their preferences with the digital human avatar, the underlying recommendation engine suggests complementary items and highlights current promotions.
3. **Multi-Language Customer Conversions:** International shoppers can converse with the avatar in their native language, removing sales barriers and increasing average basket value.

---

## Implementation Results for Retail Chains

Deploying interactive AI product catalogues has been measured to increase **in-store customer dwell time by 45%** and boost **in-kiosk conversion rates by 2.8x** compared to standard touchscreens.`,
  },
  {
    id: "5",
    title: "Multilingual AI: Breaking Language Barriers in Global Business",
    category: "Voice AI",
    date: "April 21, 2026",
    readTime: "7 min read",
    snippet:
      "Serving international customers with 23+ real-time spoken languages and automatic accent recognition using neural speech synthesis on edge hardware.",
    author: "HS Global AI Voice Engineering",
    featured: false,
    bannerImage: "/images/blog/blog_banner_multilingual.png",
    bannerBg: "from-blue-950 via-cyan-950/80 to-black",
    accentColor: "blue",
    icon: "🌐",
    tags: ["Multilingual", "Voice AI", "Global Business", "Localization"],
    content: `Global commerce, international travel, and multicultural urban hubs require businesses to serve visitors in dozens of different languages. Hiring bilingual staff for every shift and language dialect is economically impractical.

## How Neural Multilingual AI Solves Language Friction

HS Global AI’s speech architecture incorporates real-time Language Identification (LID), Neural Speech-to-Text (STT), and Text-to-Speech (TTS) models optimized to run locally on edge hardware.

### Core Capabilities:

- **Automatic Accent & Language Detection:** The avatar listens to the customer’s opening sentence, automatically detects their language and accent, and seamlessly responds in kind.
- **23+ Supported Global Languages:** Covers major languages including English, Mandarin, Spanish, Arabic, Japanese, Korean, French, German, and regional dialects.
- **Cultural Formalities & Tone Customization:** Avatars adjust phrasing, honorifics, and vocal warmth to match cultural expectations in each region.

---

## Real-World Applications

Multilingual avatars are deployed in **international airport information desks, luxury hotel lobbies, museum docent tours, and government service centers**, providing instant multilingual assistance with zero wait time.`,
  },
  {
    id: "6",
    title: "How AI in Retail is Transforming Customer Experience with Digital Human Avatars",
    category: "Smart Retail",
    date: "April 08, 2026",
    readTime: "8 min read",
    snippet:
      "In-store digital docents and hologram kiosks are doubling foot-traffic conversion rates and revolutionizing customer assistance in physical shopping centers.",
    author: "HS Global AI Retail Division",
    featured: false,
    bannerImage: "/images/blog/blog_banner_retail.png",
    bannerBg: "from-rose-950 via-pink-950/80 to-black",
    accentColor: "rose",
    icon: "🏬",
    tags: ["Retail Transformation", "Avatars", "Foot Traffic", "Kiosks"],
    content: `## Introduction

The retail industry is undergoing a major technological transformation with the adoption of **AI in retail**. Businesses are now using AI-powered solutions to enhance customer engagement, improve sales, and deliver personalized in-store experiences.

One of the most impactful innovations leading this change is the use of digital human avatars as intelligent sales assistants.

---

## Challenges in Retail Today

Retail businesses face several critical operational challenges:

- **High customer expectations** for immediate assistance and product information
- **Limited staff availability** during peak shopping hours
- **Language barriers** when serving international tourists and diverse shoppers
- **Inconsistent customer experience** across different store locations

This is where **retail automation powered by AI** plays a crucial role.

---

## What is AI in Retail?

**AI in retail** refers to the use of artificial intelligence to automate processes, analyze customer behavior, and improve physical and digital shopping experiences.

With solutions like **AI sales assistants and Hologram Kiosks**, retailers can interact with customers in real time and provide personalized recommendations.

---

## Role of Digital Human Avatars in Retail

Digital human avatars act as customer engagement AI tools that:

- **Greet customers** at store entrances and high-traffic aisles
- **Answer product queries** regarding specs, warranties, and store policies
- **Recommend products** based on customer preferences and context
- **Display product visuals** in high-definition 3D spatial graphics
- **Assist in purchase decisions** and guide shoppers through promotions

---

## Traditional Touchscreen vs AI Digital Human Sales Assistant

| Feature | Traditional Touchscreen Poster | AI Digital Human Assistant |
| :--- | :--- | :--- |
| **Interaction** | Manual touch tapping | Voice + Visual gestures |
| **Engagement** | Static & passive | High interactive attraction |
| **Personalization** | Generic fixed catalog | Adaptive AI recommendations |
| **Multilingual** | Limited language options | 23+ spoken languages in real time |

---

## Smart Retail Technology in Action

Modern smart retail technology combines multiple advanced systems:

1. **AI recommendation engines** to analyze shopper intent
2. **Voice interaction** for hands-free natural conversation
3. **Visual displays** (Hologram Boxes, spatial glass, smart kiosks)
4. **Product catalog integration** connected directly to store inventory

This creates a seamless, interactive, and memorable shopping experience.

---

## Real-World Use Cases

### Shopping Malls
Interactive guides, store directory wayfinding, and promotional engagement.

### Retail Stores
AI-powered product recommendations, inventory checking, and queue relief.

### Jewelry & Luxury Outlets
Personalized product suggestions, 3D spatial displays, and VIP customer greeting.

---

## Benefits of AI in Retail
- **Improved customer engagement:** Captures 3x higher visitor attention.
- **Increased sales conversions:** Guides shoppers smoothly to checkout.
- **Reduced manpower dependency:** Automates routine informational inquiries.
- **Multilingual support:** Serves diverse international shoppers effortlessly.
- **Consistent brand experience:** Delivers uniform messaging across all store branches.

---

## Conclusion
AI in retail is redefining how businesses interact with customers. With technologies like digital human avatars, retailers can deliver smarter, faster, and significantly more engaging customer experiences.

---

## Transform Your Retail Experience

Ready to bring AI digital human avatars to your retail stores or shopping centers?

[Contact HS Global AI today to book a demo](/contact)`,
  },
  {
    id: "7",
    title: "Why 100% Offline AI is the Future of Enterprise Technology",
    category: "Security & Privacy",
    date: "April 08, 2026",
    readTime: "9 min read",
    snippet:
      "Exploring how strict privacy regulations, corporate compliance mandates, and air-gapped security policies are driving enterprise adoption of on-device AI.",
    author: "HS Global AI Cybersecurity Team",
    featured: false,
    bannerImage: "/images/blog/blog_banner_offline_security.png",
    bannerBg: "from-slate-900 via-zinc-950 to-black",
    accentColor: "slate",
    icon: "🔒",
    tags: ["Air-Gapped", "Security", "Privacy", "Compliance"],
    content: `## Introduction

As businesses increasingly adopt artificial intelligence across physical and digital customer touchpoints, concerns around AI data privacy, security compliance, and system reliability are becoming critical. This is where offline AI is emerging as a game-changing enterprise solution.

Unlike traditional cloud-based AI systems that transmit sensitive audio, video, and customer text across external public networks, offline AI processes data directly on local edge hardware—offering total data control, sub-second latency, and enhanced air-gapped security.

---

## What is Offline AI?

Offline AI, also known as on-device AI or edge AI, refers to AI systems that operate entirely without relying on cloud servers.

Instead of sending data to external servers, all processing happens locally on the device. This makes it a true form of **private AI**, where sensitive data never leaves the physical system.

---

## Cloud AI vs Offline AI

| Feature | Cloud AI | Offline AI |
| :--- | :--- | :--- |
| **Data Processing** | Remote servers | Local device |
| **Privacy & Security** | Lower (transmitted over public WAN) | High (100% air-gapped local storage) |
| **Latency** | Dependent on internet (300ms–2s+) | Very low (< 3000ms real-time) |
| **Reliability** | Internet dependent | Always available 24/7 |
| **Operating Cost** | Scaled recurring API fees | Fixed hardware ownership model |

Offline AI delivers complete data sovereignty while eliminating latency bottlenecks and cloud API downtime.

---

## Why Enterprises Prefer Offline AI

Businesses today face severe regulatory, security, and operational challenges that make cloud AI problematic:

### Enhanced Data Privacy
Sensitive business data and customer records stay strictly within the organization's perimeter.

### Faster Performance
No internet delay means real-time, sub-second natural responses for voice and avatars.

### No Dependency on Internet
Works continuously even in low or zero connectivity physical environments.

### Secure Air-Gapped AI Systems
Eliminates risks of data breaches, man-in-the-middle attacks, and external network intrusions.

---

## How Offline AI Works

Offline AI combines several sophisticated local technologies into a unified processing stack:

- **Local AI models (LLM):** Quantized enterprise neural models running directly on GPU memory.
- **Speech recognition (ASR):** Converts voice to text locally in milliseconds.
- **Text-to-speech (TTS):** Synthesizes natural human-like voice audio on-device.
- **On-device processing engines:** Drives real-time avatar facial expressions via speech and visual gestures.

Platforms like **DIHUAVA by HS Global AI** operate fully on-device, ensuring that all AI interactions happen securely without cloud dependency.

---

## Real-World Enterprise Use Cases

### Banking
Secure customer interaction and loan guidance without exposing sensitive account data.

### Healthcare
Patient guidance and intake where patient health data remains private and HIPAA compliant.

### Corporate
Internal communication, HR assistance, and headquarters reception without data leakage.

### Retail
Reliable customer service, 3D product guidance, and promotional engagement even during network downtime.

---

## Key Benefits of Offline AI
- **Improved security and compliance** (GDPR, HIPAA, SOC 2).
- **Reduced operational and legal risks** associated with external data leaks.
- **Faster AI response times** for seamless human-like interactions.
- **Better overall user experience** with zero lagging or connectivity drops.
- **Full control over data** and proprietary organizational knowledge bases.

---

## Conclusion
Offline AI is not just a temporary trend—it is the foundational future of enterprise technology. Businesses that prioritize privacy, speed, and reliability are increasingly moving towards on-device AI solutions.

---

## Upgrade to 100% Offline AI

Want to secure your customer interactions and upgrade your enterprise to air-gapped on-device AI?

[Contact HS Global AI today to book a demo and explore our 100% offline AI solutions](/contact)`,
  },
  {
    id: "8",
    title: "What is a Digital Human Avatar? How AI Avatars Are Transforming Business",
    category: "Digital Humans",
    date: "April 07, 2026",
    readTime: "11 min read",
    snippet:
      "A complete technical guide to digital human technology, neural rendering, multi-modal LLMs, 3D spatial displays, and enterprise deployment.",
    author: "HS Global AI Team",
    featured: false,
    bannerImage: "/images/blog/blog_banner_digital_human.png",
    bannerBg: "from-indigo-950 via-purple-950/80 to-black",
    accentColor: "cyan",
    icon: "👤",
    tags: ["Digital Humans", "AI Basics", "Enterprise Guide", "3D Rendering"],
    content: `## Introduction

In today’s fast-evolving digital world, businesses are constantly looking for smarter ways to improve AI customer interaction and engagement, reduce operational costs, and improve user experience. One of the most exciting innovations leading this transformation is the digital human avatar.

From retail stores to corporate offices and hospitals, AI-powered avatars are changing how businesses interact with customers—bringing a more human-like, intelligent, and immersive experience.

---

## What is a Digital Human Avatar?

A digital human avatar is an advanced form of virtual assistant AI that delivers real-time, human-like interaction. Unlike traditional chatbots, these avatars can:

### Key Capabilities:
- Speak naturally using human-like voices
- Understand user queries through voice or text
- Respond intelligently using AI
- Display emotions and expressions (in advanced systems)

These avatars are typically deployed on interactive displays such as kiosks, holographic screens, and smart panels, enabling real-time conversations with users.

---

## Digital Human Avatar vs Chatbot

| Feature | Chatbot | Digital Human Avatar |
| :--- | :--- | :--- |
| **Interaction** | Text-based | Voice + Visual |
| **Experience** | Basic | Human-like |
| **Engagement** | Low | High |
| **Use Cases** | Support queries | Sales, engagement, guidance |

Digital human avatars offer a much richer and more engaging experience compared to traditional chatbots.

---

## Why Digital Human Avatars Matter for Businesses

Businesses today face several critical operational challenges:
- Increasing customer expectations
- High manpower costs
- Need for 24/7 availability
- Multilingual customer base

### Solutions Provided by Avatars:

#### 24/7 Customer Interaction
No breaks, no downtime—always available.

#### Cost Efficiency
Reduces dependency on large support teams.

#### Consistent Communication
Delivers accurate and uniform responses every time.

#### Multilingual Support
Engages customers in multiple languages effortlessly.

---

## How Digital Human Avatars Work

| Technology | Function |
| :--- | :--- |
| **Speech Recognition (ASR)** | Converts voice to text |
| **AI Language Model** | Understands & generates responses |
| **Text-to-Speech (TTS)** | Converts text into natural voice |
| **Visual Engine** | Displays avatar on screen |

### Advanced Capability
Platforms like **Dihuava by HS Global AI** offer:
- 100% on-device processing
- Zero cloud dependency
- High data privacy
- Faster response times

---

## Real-World Use Cases

### Retail & Shopping Malls
- Product recommendations
- Customer assistance
- Promotional engagement

### Healthcare
- Patient guidance
- Appointment support
- Multilingual communication

### Corporate Offices
- Visitor management
- HR assistance
- Reception automation

### Events & Exhibitions
- Interactive brand ambassador
- Product demonstrations
- Crowd engagement

---

## Key Benefits of Digital Human Avatars
- Enhanced customer engagement
- Increased sales conversions
- Reduced operational costs
- Improved brand image
- Scalable business solution
- Powered by advanced digital assistant technology for accurate and intelligent responses

---

## The Future of Business Interaction
As AI continues to evolve, digital human avatars will become a standard part of business environments. Companies that adopt this technology early will gain a strong competitive advantage in customer experience and operational efficiency.

---

## Conclusion
A digital human avatar is more than just a virtual assistant—it is a powerful business tool that combines AI, voice, and visual interaction to transform customer engagement.

If your business is looking to improve customer experience, reduce costs, and stay ahead of the competition, now is the time to explore this technology.

---

## Get Started with AI Avatars

Want to see how a digital human avatar can work for your business?

[Contact HS Global AI today to book a demo and explore our AI-powered hologram and avatar solutions](/contact)`,
  },
];

const categories = [
  "All",
  "Digital Humans",
  "Business Automation",
  "Enterprise Infrastructure",
  "Customer Experience",
  "Smart Retail",
  "Voice AI",
  "Security & Privacy",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const featuredPost = useMemo(() => blogPosts.find((p) => p.featured) || blogPosts[0], []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-cyan-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                HS Global AI Knowledge Hub & Insights
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              AI Insights &{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                Holographic Tech.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Explore in-depth articles, architectural guides, and research on Digital Human Avatars, On-Device AI models, Enterprise RAG, and 3D Holographic displays.
            </p>

            {/* LIVE SEARCH BAR */}
            <div className="mx-auto mt-10 max-w-xl">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400 text-lg">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, topic, or keyword..."
                  className="w-full rounded-2xl border border-white/20 bg-neutral-950/80 py-4 pl-12 pr-12 text-sm text-white placeholder-gray-400 backdrop-blur-xl transition-all focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-semibold text-gray-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST BANNER */}
      {!searchQuery && selectedCategory === "All" && (
        <section className="relative px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => setActivePost(featuredPost)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950 p-6 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* FEATURED BANNER IMAGE */}
                <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-white/10 relative h-64 sm:h-80 w-full bg-neutral-900">
                  <Image
                    src={featuredPost.bannerImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-bold text-black backdrop-blur-md shadow-lg">
                    ★ Featured Article
                  </span>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-300 border border-white/15">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs font-mono text-gray-400">{featuredPost.readTime}</span>
                      <span className="text-xs font-mono text-gray-500">• {featuredPost.date}</span>
                    </div>

                    <h2 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-300">
                      {featuredPost.snippet}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs font-medium text-gray-400">
                      By {featuredPost.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 group-hover:translate-x-2 transition-transform">
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CATEGORIES & ARTICLES GRID */}
      <section className="relative overflow-hidden bg-black px-6 pb-28 border-t border-white/10">
        <div className="relative mx-auto max-w-7xl pt-12">
          {/* CATEGORY NAV BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "border border-white/15 bg-neutral-950/70 text-gray-300 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ARTICLES GRID */}
          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-neutral-950/60 p-12 text-center">
              <span className="text-4xl">🔍</span>
              <h3 className="mt-4 text-xl font-bold text-white">No articles found</h3>
              <p className="mt-2 text-sm text-gray-400">
                Try adjusting your search query or category filter.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActivePost(post)}
                  className="group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]"
                >
                  {/* FULL BANNER IMAGE */}
                  <div className="relative h-52 w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                    <Image
                      src={post.bannerImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                    {/* Floating Category Badge */}
                    <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                      {post.category}
                    </span>

                    {/* Read Time */}
                    <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 font-mono text-[10px] text-gray-300 backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>

                  {/* CARD BODY */}
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-3 text-xs leading-6 text-gray-300 line-clamp-3">
                        {post.snippet}
                      </p>

                      {/* TAGS */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-400"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span className="font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FULL ARTICLE READER MODAL WITH HIGH SEO H1/H2/H3 STRUCTURE */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl rounded-3xl border border-cyan-500/40 bg-neutral-950 text-white shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner Header */}
              <div className="relative h-64 sm:h-80 w-full shrink-0 bg-neutral-900 border-b border-white/10">
                <Image
                  src={activePost.bannerImage}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 z-10 rounded-full border border-white/30 bg-black/60 p-2.5 text-gray-300 hover:text-white hover:border-white transition-colors backdrop-blur-md"
                >
                  ✕
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-bold text-black shadow-md">
                      {activePost.category}
                    </span>
                    <span className="text-xs font-mono text-gray-300 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      {activePost.date} • {activePost.readTime}
                    </span>
                  </div>

                  {/* SEO MAIN ARTICLE TITLE H1 */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                    {activePost.title}
                  </h1>
                </div>
              </div>

              {/* Scrollable Modal Content Body */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-6 text-sm leading-8 text-gray-200">
                <div className="flex items-center gap-3 text-xs text-cyan-400 font-semibold border-b border-white/10 pb-4">
                  <span>Author: {activePost.author}</span>
                  <span>•</span>
                  <span>HS Global AI Enterprise Hub</span>
                </div>

                {activePost.content.split("\n\n").map((paragraph, i) => {
                  // H2 Tag Formatting
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 border-l-4 border-cyan-400 pl-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  // H3 Tag Formatting
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-lg font-semibold text-cyan-300 mt-6 mb-2">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  // H4 Tag Formatting
                  if (paragraph.startsWith("#### ")) {
                    return (
                      <h4 key={i} className="text-base font-semibold text-gray-100 mt-4 mb-1">
                        {paragraph.replace("#### ", "")}
                      </h4>
                    );
                  }
                  // Horizontal Divider
                  if (paragraph.trim() === "---") {
                    return <hr key={i} className="my-6 border-white/10" />;
                  }
                  // Markdown Table Formatting
                  if (paragraph.startsWith("|")) {
                    const rows = paragraph.split("\n");
                    return (
                      <div key={i} className="my-6 overflow-x-auto rounded-xl border border-white/15 bg-black/60 p-4">
                        <table className="w-full text-left text-xs">
                          <tbody>
                            {rows.map((row, rIdx) => {
                              const cols = row.split("|").filter((c) => c.trim() !== "");
                              if (rIdx === 1) return null; // Separator row
                              return (
                                <tr key={rIdx} className={rIdx === 0 ? "border-b border-cyan-500/30 font-bold text-cyan-300 bg-cyan-500/10" : "border-b border-white/10 hover:bg-white/5"}>
                                  {cols.map((col, cIdx) => (
                                    <td key={cIdx} className="py-3 px-4">
                                      {col.replace(/\*\*/g, "").trim()}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  // Bullet Point List Parsing
                  if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
                    const lines = paragraph.split("\n");
                    return (
                      <ul key={i} className="my-4 space-y-2 pl-2">
                        {lines.map((line, lIdx) => {
                          if (line.startsWith("- ")) {
                            const cleanText = line.replace("- ", "");
                            return (
                              <li key={lIdx} className="flex items-start gap-2.5 text-gray-300">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                <span>{cleanText}</span>
                              </li>
                            );
                          }
                          return <p key={lIdx} className="text-gray-300 mb-2">{line}</p>;
                        })}
                      </ul>
                    );
                  }
                  // Links / Call to action buttons inside text
                  if (paragraph.includes("[") && paragraph.includes("](") && paragraph.includes(")")) {
                    const linkText = paragraph.substring(paragraph.indexOf("[") + 1, paragraph.indexOf("]"));
                    const linkHref = paragraph.substring(paragraph.indexOf("](") + 2, paragraph.indexOf(")"));
                    return (
                      <div key={i} className="my-8 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 to-black p-6 text-center shadow-lg">
                        <p className="text-base font-bold text-white mb-4">Ready to Transform Your Customer Engagement?</p>
                        <Link
                          href={linkHref}
                          onClick={() => setActivePost(null)}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-xs font-bold text-black shadow-lg transition-all hover:scale-105 hover:from-cyan-300 hover:to-blue-400"
                        >
                          {linkText} →
                        </Link>
                      </div>
                    );
                  }

                  return <p key={i} className="text-gray-300 leading-8">{paragraph}</p>;
                })}

                {/* Tags & Footer Close */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activePost.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActivePost(null)}
                    className="rounded-full bg-cyan-500 px-6 py-2.5 text-xs font-bold text-black transition-all hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTA />
      <Footer />
    </main>
  );
}
