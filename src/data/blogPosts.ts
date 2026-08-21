export interface BlogPost {
    id: string;
    slug: string;
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

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "ai-business-automation",
        title: "AI Business Automation: How Digital Humans Streamline Enterprise Operations",
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
        content: `AI business automation is transforming how enterprises handle customer interactions, information retrieval, visitor management, and repetitive operational tasks. Beyond traditional chatbots and automated phone systems, AI Digital Humans can provide natural voice-based assistance, answer questions from enterprise knowledge bases, guide visitors, and support lead qualification in real time.

## From Traditional Chatbots to AI Digital Humans

Traditional customer support channels—such as website pop-up widgets or IVR phone menus—suffer from high drop-off rates due to static text, artificial latency, and a complete lack of human touch. Embodied digital humans bridge this gap by combining visual emotion, natural neural speech, and domain-specific Large Language Models (LLMs).

When deployed on physical hardware like the **DIHUAVA Hologram Box** or spatial kiosks, digital human avatars create an immediate visual draw while operating autonomously 24 hours a day, 7 days a week.

---

## How DIHUAVA Automates Enterprise Operations

### 1. Offline AI & Low-Latency Responses

DIHUAVA can run AI inference locally on supported edge GPU hardware, reducing dependence on cloud connectivity and network round trips. This enables responsive voice-based interactions while allowing enterprises to deploy AI experiences in environments with limited or no internet connectivity.

### 2. Enterprise Knowledge Retrieval with RAG

Instead of relying on staff to manually search through hundreds of policy documents, the avatar can connect to approved enterprise knowledge sources using Retrieval-Augmented Generation (RAG). It can retrieve relevant information from documents such as policies, product specifications, manuals, and business guidelines to provide contextual answers.

### 3. Automated Intake & Lead Capture

AI Digital Humans can assist with visitor registration, collect inquiry details, issue digital tickets, and capture qualified lead information. Where supported by the deployment, this information can be integrated with corporate CRM or business systems, reducing manual administrative work.

---

## Architectural Comparison: Cloud Automation vs. On-Device Edge AI

| Dimension | Cloud-Based AI Automation | HS Global AI On-Device AI |
| :--- | :--- | :--- |
| **AI Processing** | Cloud infrastructure | Local/on-device processing |
| **Data Handling** | May require data transmission to external services | Designed for local processing |
| **Internet Dependency** | Typically depends on network connectivity | Can support offline operation |
| **Operating Model** | Usage/API-based costs may apply | Hardware-based deployment model |

---

## Business Use Cases for AI Automation

### Customer Assistance

AI Digital Humans can answer frequently asked questions and guide customers through products and services.

### Visitor Management

Digital Humans can greet visitors, provide directions, and assist with registration.

### Product Information

AI assistants can retrieve product information from approved enterprise catalogues and documents.

### Lead Qualification

Digital Humans can collect customer requirements and support initial lead qualification.

### Enterprise Knowledge Access

Employees and customers can interact with approved business documents through conversational AI.

---

## Real-World Enterprise ROI & Impact

AI business automation can help reduce repetitive front-desk workloads while allowing employees to focus on higher-value customer interactions and advisory tasks.

By automating repetitive inquiries, visitor assistance, knowledge retrieval, and lead capture, enterprises can improve operational efficiency while creating more consistent customer experiences.

---

## Conclusion

AI business automation is moving beyond traditional chatbots toward more interactive and intelligent digital experiences. AI Digital Humans can combine conversational AI, enterprise knowledge, voice interaction, and on-device processing to automate repetitive customer and operational tasks.

For enterprises looking to improve customer engagement while reducing repetitive workloads, solutions such as DIHUAVA provide a foundation for deploying AI Digital Humans across physical and digital environments.

---

Want to see how DIHUAVA can support your business? [Book a demo with HS Global AI](/contact)`,
    },
    {
        id: "2",
        slug: "edge-ai-vs-cloud-ai",
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
        slug: "ai-for-business",
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
        slug: "ai-product-catalogue",
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
        slug: "multilingual-ai",
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
        slug: "how-ai-in-retail",
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
        slug: "why-100-offline-ai",
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
        slug: "what-is-a-digital-human-avatar",
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
console.log(
    "ALL BLOG SLUGS:",
    blogPosts.map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
    }))
);