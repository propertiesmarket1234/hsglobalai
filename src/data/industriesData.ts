export interface IndustryDetail {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  description: string;
  heroOverview: string;
  accentColor: string;
  accentGlow: string;
  metrics: { label: string; value: string }[];
  capabilities: { title: string; description: string; icon: string }[];
  useCases: { title: string; category: string; description: string; highlight: string }[];
  techSpecs: { label: string; value: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const industriesData: Record<string, IndustryDetail> = {
  banking: {
    slug: "banking",
    number: "01",
    title: "Banking & Financial Services",
    subtitle: "3D Holographic AI Bankers & Concierge Assistants",
    icon: "🏦",
    badge: "AIR-GAPPED BANKING AI",
    description:
      "Transform branch experiences with 3D hologram AI bankers for customer onboarding, loan explanations, queue handling, account inquiries, and multilingual financial advisory – delivering secure, interactive banking journeys.",
    heroOverview:
      "Deploy 100% offline, air-gapped digital human avatars in bank VIP lounges, wealth management centers, and retail branches. Avatars execute instant account inquiries, loan application guidance, compliance disclosure reviews, and multilingual client service while keeping customer financial records air-gapped locally on on-premise hardware.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "On-Device Processing", value: "100%" },
      { label: "Branch Engagement Lift", value: "3.2x" },
      { label: "Queue Wait Time Reduction", value: "40%" },
      { label: "Supported Languages", value: "29" },
    ],
    capabilities: [
      {
        title: "100% Air-Gapped Security",
        description:
          "All speech recognition, avatar animation, and document RAG run strictly on local GPU hardware with zero data transmitted to public cloud servers.",
        icon: "🔒",
      },
      {
        title: "On-Device Banking RAG",
        description:
          "Ingest confidential credit policy PDFs, loan rates, and compliance terms locally for instant, accurate customer answers.",
        icon: "📄",
      },
      {
        title: "Multilingual Financial Advisory",
        description:
          "Automatic real-time language detection supporting 29 spoken languages and regional dialects with natural pitch modulation.",
        icon: "🌐",
      },
      {
        title: "Interactive Queue Concierge",
        description:
          "Greet visiting branch clients, print queue tickets, verify appointment details, and direct customers to relevant service counters.",
        icon: "🎫",
      },
    ],
    useCases: [
      {
        title: "AI Banking Receptionist",
        category: "Branch Reception",
        description:
          "Greet branch visitors, manage customer check-ins, issue queue tickets, and guide visitors to appropriate bank departments or wealth management desks.",
        highlight: "Autonomous Front-Desk Reception",
      },
      {
        title: "Private Wealth Management Assistant",
        category: "VIP Advisory",
        description:
          "Provide high-net-worth clients with exclusive 3D holographic advisors explaining investment portfolios, market trends, and private banking terms.",
        highlight: "1:1 Scale Hologram Display",
      },
      {
        title: "Loan & Mortgage Assistant",
        category: "Credit Advisory",
        description:
          "Interactively break down complex mortgage disclosures, interest rates, repayment schedules, and loan eligibility requirements in simple spoken terms.",
        highlight: "Instant Credit & Loan Breakdown",
      },
      {
        title: "Banking Product Advisor",
        category: "Product Discovery",
        description:
          "Present interactive product cards for credit cards, savings accounts, and investment plans with spoken descriptions in real time.",
        highlight: "Interactive Banking Catalog",
      },
      {
        title: "Branch Queue & Customer Guidance",
        category: "Queue Automation",
        description:
          "Reduce lobby congestion with autonomous hologram concierges greeting visitors, scanning QR check-ins, and routing clients to service counters.",
        highlight: "40% Faster Check-In",
      },
      {
        title: "Multilingual Banking Assistant",
        category: "Global Services",
        description:
          "Serve international and expatriate clients across 29 global languages with real-time on-device speech translation and localized financial terms.",
        highlight: "29 Global Languages On-Device",
      },
    ],
    techSpecs: [
      { label: "Data Processing", value: "100% Air-Gapped On-Device GPU Processing" },
      { label: "Security Compliance", value: "ISO 27001 & Bank Security Architecture Compliant" },
      { label: "Hardware Support", value: "65\", 75\", 86\" 3D Hologram Enclosures & Interactive Kiosks" },
      { label: "Document Ingestion", value: "Real-Time Local PDF / DOCX RAG Neural Vector Engine" },
    ],
    metaTitle: "AI Digital Humans & Holograms for Banking & Financial Services | HS Global AI",
    metaDescription:
      "Deploy 100% air-gapped, offline AI digital humans and 3D hologram bankers for VIP wealth lounges, retail branch concierges, and multilingual financial advisory.",
  },

  retail: {
    slug: "retail",
    number: "02",
    title: "Retail & Advertising",
    subtitle: "Holographic Brand Ambassadors & Virtual Fitting",
    icon: "🛍️",
    badge: "IMMERSIVE RETAIL TECH",
    description:
      "Engage shoppers with holographic brand ambassadors, smart product explainers, Virtual Try-On mirrors, and interactive promotional displays designed to boost in-store footfall and checkout conversion rates.",
    heroOverview:
      "Transform static storefront displays and luxury retail floors into interactive 3D shopping experiences. Holographic brand avatars greet shoppers, demonstrate high-end watches, jewellery, apparel, and electronics, answer specs in 29 languages, and feature instant Virtual Try-On.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "Sales Conversion Lift", value: "2.8x" },
      { label: "Shopper Dwell Time Increase", value: "+65%" },
      { label: "In-Store Engagement", value: "3x" },
      { label: "Cloud Dependence", value: "0%" },
    ],
    capabilities: [
      {
        title: "Real-Time Virtual Fitting & Try-On",
        description:
          "Enable customers to instantly visualize apparel, eyewear, and luxury jewellery digitally overlaying their reflection in real time.",
        icon: "✨",
      },
      {
        title: "3D Holographic Product Catalog",
        description:
          "Showcase intricate 3D volumetric models of luxury items with optical depth and 360-degree rotation.",
        icon: "💎",
      },
      {
        title: "AI Sales Recommendations",
        description:
          "Suggest complementary products and highlight promotional offers based on customer queries and product interest.",
        icon: "📈",
      },
      {
        title: "Multilingual Storefront Concierge",
        description:
          "Greet international tourists in their native language and guide them directly to desired department floors.",
        icon: "🌍",
      },
    ],
    useCases: [
      {
        title: "Storefront Hologram Ambassador",
        category: "24/7 Advertising",
        description:
          "Captivate street footfall with eye-catching 3D hologram avatars presenting featured seasonal collections even after store hours.",
        highlight: "24/7 Autonomous Engagement",
      },
      {
        title: "Interactive Smart Mirror & Virtual Fitting",
        category: "Virtual Fitting",
        description:
          "Allow customers to try on outfits virtually without changing rooms, accelerating purchase decisions with instant overlay rendering.",
        highlight: "Instant Fitting Overlay",
      },
      {
        title: "Product Launch & Event Activations",
        category: "Event Marketing",
        description:
          "Deploy custom AI brand ambassadors trained on brand heritage to deliver unforgettable product walkthroughs.",
        highlight: "Interactive Brand Storytelling",
      },
      {
        title: "AI Retail Sales Advisor",
        category: "In-Store Sales",
        description:
          "Recommend complementary products, highlight promotional discounts, and guide shoppers through spec sheets in spoken language.",
        highlight: "Smart Catalog AI",
      },
      {
        title: "Multilingual Mall Concierge",
        category: "Mall Guidance",
        description:
          "Greet international tourists in 29 global languages, provide store location maps, and assist with mall directory navigation.",
        highlight: "29 Spoken Languages",
      },
      {
        title: "Selfie With Brand Avatar Kiosk",
        category: "Social Engagement",
        description:
          "Allow shoppers to pose for a composite photo beside the brand avatar and download it instantly via 24-hour QR phone sharing.",
        highlight: "Instant Photo & QR Share",
      },
    ],
    techSpecs: [
      { label: "Display Technology", value: "High-Transmittance 4K Volumetric Holographic Glass" },
      { label: "Sensors & Cameras", value: "4K Depth Camera + Proximity Sensor + Touch Surface" },
      { label: "Try-On Engine", value: "Real-Time Neural Mesh Fitting & Apparel Warping AI" },
      { label: "Content Delivery", value: "Offline High-Fidelity 3D Asset Render Pipeline" },
    ],
    metaTitle: "AI Digital Humans & Holograms for Retail & Advertising | HS Global AI",
    metaDescription:
      "Transform retail stores with 3D hologram brand ambassadors, virtual try-on smart mirrors, and interactive product display kiosks.",
  },

  corporate: {
    slug: "corporate",
    number: "03",
    title: "Corporate Services & HR",
    subtitle: "Digital Receptionists & HR AI Assistants",
    icon: "🏢",
    badge: "ENTERPRISE AI CONCIERGE",
    description:
      "Enhance front-desk operations with digital receptionists, visitor management holograms, employee onboarding guides, and enterprise-grade AI assistants for HR, IT, and internal corporate communications.",
    heroOverview:
      "Elevate executive lobbies, headquarters, and workplace facilities with AI digital human receptionists. Automate visitor check-in, issue visitor badges, guide employees through HR policies via on-device PDF RAG, and streamline workplace operations.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "Reception Workload Automated", value: "85%" },
      { label: "Operational Uptime", value: "99.9%" },
      { label: "Visitor Check-In Speed", value: "< 1s" },
      { label: "On-Device Processing", value: "100%" },
    ],
    capabilities: [
      {
        title: "Autonomous Front-Desk Reception",
        description:
          "Greet corporate visitors, scan QR invitation codes, print guest badges, and automatically notify host employees via SMS/Slack.",
        icon: "👋",
      },
      {
        title: "On-Device HR & Policy RAG",
        description:
          "Answer employee queries regarding healthcare benefits, leave policies, and travel expenses directly from corporate handbooks.",
        icon: "📋",
      },
      {
        title: "Workplace Wayfinding & Meeting Rooms",
        description:
          "Provide interactive floor maps and guide guests to assigned conference rooms and executive suites.",
        icon: "🗺️",
      },
      {
        title: "Multilingual Corporate Directory",
        description:
          "Connect global office visitors with regional department heads across 29 languages.",
        icon: "🌐",
      },
    ],
    useCases: [
      {
        title: "Holographic Front-Desk Receptionist",
        category: "Front-Desk AI",
        description:
          "Project a sleek 3D hologram receptionist in main corporate lobbies to greet VIP guests and streamline visitor registration.",
        highlight: "Autonomous Reception AI",
      },
      {
        title: "Visitor Check-In & Badge Printing Kiosk",
        category: "Visitor Security",
        description:
          "Scan visitor QR invitations, capture guest check-in logs, and automatically notify host employees via Slack/SMS.",
        highlight: "Instant QR Check-In & Badge Issue",
      },
      {
        title: "On-Device HR & Policy Assistant",
        category: "Internal Operations",
        description:
          "Provide 24/7 confidential employee policy answers, IT troubleshooting steps, and benefit queries directly from internal handbooks.",
        highlight: "Private On-Device PDF RAG",
      },
      {
        title: "Executive Lobby VIP Concierge",
        category: "Executive Services",
        description:
          "Greet C-suite executives and VIP corporate visitors with customized greetings, agenda summaries, and suite directions.",
        highlight: "VIP Lobby Concierge",
      },
      {
        title: "New Hire Onboarding & Campus Guide",
        category: "Employee Training",
        description:
          "Walk new employees through company culture, safety protocols, and workplace facilities via an interactive 3D digital human.",
        highlight: "Interactive New-Hire Onboarding",
      },
      {
        title: "Multilingual Corporate Directory",
        category: "Global Directory",
        description:
          "Assist international clients and visiting partners across 29 languages with real-time employee directory lookups.",
        highlight: "29 Spoken Languages",
      },
    ],
    techSpecs: [
      { label: "Workplace Integration", value: "Slack, MS Teams, Outlook Calendar & Badge Printer Sync" },
      { label: "Deployment Options", value: "Life-Size 3D Hologram Enclosure or Slim Lobby Kiosk" },
      { label: "Security Standard", value: "Enterprise Air-Gapped Storage & Local Vector Index" },
      { label: "Operating Mode", value: "24/7 Continuous Reception & Wayfinding Operation" },
    ],
    metaTitle: "AI Digital Human Receptionists for Corporate Services & HR | HS Global AI",
    metaDescription:
      "Automate corporate front-desk reception, visitor management check-in, and employee HR policy assistance with 3D hologram AI receptionists.",
  },

  healthcare: {
    slug: "healthcare",
    number: "04",
    title: "Healthcare & Telemedicine",
    subtitle: "Compassionate Patient Triage & Hospital Navigation AI",
    icon: "🏥",
    badge: "HIPAA-COMPLIANT ON-DEVICE AI",
    description:
      "Deploy hologram healthcare assistants for patient guidance, appointment scheduling, hospital navigation, triage symptom check, and tele-consultation support with a compassionate, human-like interface.",
    heroOverview:
      "Support patients and visitors in hospitals, clinics, and medical centers with empathetic digital human assistants. Provide instant hospital wayfinding, symptom intake triage, appointment scheduling, and multilingual care instructions without compromising patient health data privacy.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "Patient Data Privacy", value: "100%" },
      { label: "Desk Waiting Time Reduction", value: "50%" },
      { label: "Multilingual Patient Support", value: "29" },
      { label: "System Availability", value: "24/7" },
    ],
    capabilities: [
      {
        title: "HIPAA-Ready Air-Gapped Security",
        description:
          "Ensure complete patient health data privacy by processing all speech, medical documents, and interactions on local physical hardware.",
        icon: "🛡️",
      },
      {
        title: "Empathetic Patient Symptom Triage",
        description:
          "Collect initial patient symptoms in a warm, comforting tone to assist nursing staff with preliminary routing.",
        icon: "🩺",
      },
      {
        title: "Hospital & Department Wayfinding",
        description:
          "Guide patients and families through complex medical centers, labs, radiology units, and pharmacy desks.",
        icon: "📍",
      },
      {
        title: "Pre & Post-Op Care Explainer",
        description:
          "Walk patients through medical preparation guidelines and discharge care instructions in clear, understandable language.",
        icon: "📝",
      },
    ],
    useCases: [
      {
        title: "Hospital Main Entrance Navigational Docent",
        category: "Patient Experience",
        description:
          "Assist arriving patients with clinic department directions, doctor room lookups, and registration guidance.",
        highlight: "Multilingual Floor Navigation",
      },
      {
        title: "Patient Symptom Intake & Triage AI",
        category: "Clinical Intake",
        description:
          "Collect preliminary patient symptoms in a warm, empathetic tone to assist nursing staff with initial triage routing.",
        highlight: "Empathetic Intake Triage",
      },
      {
        title: "Outpatient Clinic Queue Concierge",
        category: "Registration",
        description:
          "Manage outpatient registration queues, check appointment schedules, and reduce waiting room congestion.",
        highlight: "50% Wait Time Reduction",
      },
      {
        title: "Pre & Post-Op Care Explainer",
        category: "Patient Care",
        description:
          "Walk patients through surgical prep guidelines and post-discharge care instructions in simple, comforting spoken words.",
        highlight: "Clear Care Explainer",
      },
      {
        title: "Pharmacy & Medication Schedule Assistant",
        category: "Pharmacy Guidance",
        description:
          "Explain medication dosages, dietary rules, and prescription refills to patients across 29 languages.",
        highlight: "Clear Multilingual Guidance",
      },
      {
        title: "Multilingual Patient Care Assistant",
        category: "Global Health",
        description:
          "Support international medical tourists and non-native patients with 29 spoken languages and HIPAA-friendly local AI.",
        highlight: "100% HIPAA-Friendly Privacy",
      },
    ],
    techSpecs: [
      { label: "Data Protection", value: "100% Local On-Device AI Inference (HIPAA & GDPR Compliant)" },
      { label: "Voice Synthesis", value: "Empathetic Neural Voice Engine with Calming Tone Control" },
      { label: "Hardware Enclosure", value: "Antimicrobial Glass Touch Surface & HD Camera Sensors" },
      { label: "Integration", value: "Local Hospital Information System (HIS) API Bridge" },
    ],
    metaTitle: "AI Digital Humans for Healthcare & Hospital Navigation | HS Global AI",
    metaDescription:
      "Enhance hospital patient care, intake triage, and department navigation with 100% offline, air-gapped AI digital human healthcare assistants.",
  },

  tourism: {
    slug: "tourism",
    number: "05",
    title: "Tourism & Exhibitions",
    subtitle: "Multilingual Hologram Tour Guides & Exhibition Docents",
    icon: "🏛️",
    badge: "CULTURAL & EXHIBITION AI",
    description:
      "Deliver unforgettable visitor experiences using 3D hologram tour guides, multilingual information kiosks, exhibition storytelling avatars, and interactive museum docents powered by digital humans.",
    heroOverview:
      "Delight visitors at museums, heritage sites, national landmarks, and international expos with interactive 3D hologram tour guides. Avatars speak 29 global languages, recite historical archives via local RAG, and bring cultural exhibits to life.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "Visitor Engagement Lift", value: "4x" },
      { label: "Spoken Global Languages", value: "29" },
      { label: "Exhibit Satisfaction", value: "95%" },
      { label: "Operating Hours", value: "24/7" },
    ],
    capabilities: [
      {
        title: "3D Holographic Historic Avatars",
        description:
          "Recreate historical figures, cultural icons, or virtual docents standing inside 1:1 scale optical hologram boxes.",
        icon: "👑",
      },
      {
        title: "Multilingual Exhibition Storyteller",
        description:
          "Instantly adapt speech and storytelling to the visitor's native language with natural voice modulation and regional accents.",
        icon: "🗣️",
      },
      {
        title: "Historical Archive RAG Engine",
        description:
          "Ingest museum catalogs, historical research papers, and exhibition audio guides for deep, interactive Q&A.",
        icon: "📚",
      },
      {
        title: "Tourist Wayfinding & Sightseeing Guide",
        description:
          "Provide city recommendations, ticketing information, transport directions, and event itineraries.",
        icon: "🗺️",
      },
    ],
    useCases: [
      {
        title: "3D Holographic Museum Docent",
        category: "Museum Docent",
        description:
          "Project 3D historical figures who interact with museum visitors, answer questions about artifacts, and tell origin stories.",
        highlight: "Life-Size 3D Holographic Presence",
      },
      {
        title: "Historical Archive Storyteller Avatar",
        category: "Heritage AI",
        description:
          "Recite historical research papers, artifact backgrounds, and cultural folklore with custom historical voice cloning.",
        highlight: "Historical Archive PDF RAG",
      },
      {
        title: "International Expo Pavilion Guide",
        category: "Exhibition AI",
        description:
          "Welcome global trade show attendees with multilingual digital human hosts explaining nation innovations and exhibits.",
        highlight: "29 Global Languages",
      },
      {
        title: "City Visitor Information Center Kiosk",
        category: "Tourism Concierge",
        description:
          "Deliver 24/7 tourist assistance for sightseeing routes, hotel recommendations, and cultural event ticketing.",
        highlight: "24/7 Autonomous Tourist Concierge",
      },
      {
        title: "Selfie With Cultural Avatar Station",
        category: "Visitor Souvenir",
        description:
          "Allow visitors to take a photo alongside historical figures or cultural avatars and receive instant QR download links.",
        highlight: "Sub-Second Photo Souvenir",
      },
      {
        title: "Multilingual Sightseeing Concierge",
        category: "Wayfinding",
        description:
          "Guide international tourists through city maps, bus schedules, and landmark tickets in their native language.",
        highlight: "Multilingual City Navigation",
      },
    ],
    techSpecs: [
      { label: "Optics Technology", value: "High-Transmittance 3D Holographic Display Glass" },
      { label: "Speech Engine", value: "29 Multilingual Speech Synthesis with Accent Adaptation" },
      { label: "Asset Pipeline", value: "Volumetric 3D Avatar Rendering & Lip-Sync Animation Engine" },
      { label: "Environment Rating", value: "High Ambient Light & Noise Resistant Commercial Hardware" },
    ],
    metaTitle: "3D Hologram Tour Guides & Museum Docents | HS Global AI",
    metaDescription:
      "Engage museum and exhibition visitors with 3D hologram tour guides, multilingual storytelling docents, and interactive heritage kiosks.",
  },

  education: {
    slug: "education",
    number: "06",
    title: "Education & Training",
    subtitle: "Interactive 3D Hologram Tutors & Virtual Lecturers",
    icon: "🎓",
    badge: "NEXT-GEN EDTECH AI",
    description:
      "Deliver immersive learning experiences using AI Digital Human tutors, campus guides, virtual science lab assistants, and 3D hologram instructors for schools, universities, and corporate academies.",
    heroOverview:
      "Revolutionize learning at universities, K-12 schools, and corporate academies with 3D hologram lecturers and AI tutors. Students interact naturally with digital human instructors for STEM concepts, language learning, virtual lab walkthroughs, and personalized tutoring.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "Student Engagement Lift", value: "3.5x" },
      { label: "Positive Learning Feedback", value: "92%" },
      { label: "Study Assistance Hours", value: "24/7" },
      { label: "Languages Supported", value: "29" },
    ],
    capabilities: [
      {
        title: "Interactive 3D AI Lecturers",
        description:
          "Deliver engaging lectures on complex STEM topics with 3D visual aids rendered inside volumetric hologram enclosures.",
        icon: "🔬",
      },
      {
        title: "Multilingual Language Practice",
        description:
          "Provide students with infinite conversational practice in English, Spanish, Mandarin, Arabic, and 26+ other languages.",
        icon: "💬",
      },
      {
        title: "Virtual Science & Safety Lab Guide",
        description:
          "Guide students step-by-step through laboratory procedures, chemical safety checks, and experiment walkthroughs.",
        icon: "🧪",
      },
      {
        title: "Campus Admissions & Directory AI",
        description:
          "Assist prospective students and parents with campus orientation, course registrations, and admissions criteria.",
        icon: "🏫",
      },
    ],
    useCases: [
      {
        title: "3D Hologram STEM AI Tutor",
        category: "3D EdTech",
        description:
          "Bring historical scientists and complex 3D physics models to life for interactive STEM classroom walkthroughs.",
        highlight: "3D STEM Hologram Tutor",
      },
      {
        title: "University Campus Student Center Docent",
        category: "Campus Assistance",
        description:
          "Provide 24/7 student guidance on lecture schedules, campus building maps, financial aid, and library resources.",
        highlight: "24/7 Campus Directory AI",
      },
      {
        title: "Virtual Science Lab Safety Guide",
        category: "Lab Instruction",
        description:
          "Guide engineering and chemistry students step-by-step through laboratory procedures and safety protocols.",
        highlight: "Step-by-Step Lab Safety AI",
      },
      {
        title: "Multilingual Language Practice Avatar",
        category: "Language Learning",
        description:
          "Offer students unlimited conversational speech practice across 29 languages with instant feedback on pronunciation.",
        highlight: "29 Language Speech Practice",
      },
      {
        title: "Corporate Academy Skills Training Kiosk",
        category: "Workforce Training",
        description:
          "Train retail, aviation, and industrial staff with interactive scenario roleplay and instant compliance testing.",
        highlight: "Interactive Roleplay Simulations",
      },
      {
        title: "Student Admissions & Orientation Guide",
        category: "Admissions AI",
        description:
          "Assist prospective students and parents with campus orientation, tuition fees, program requirements, and housing maps.",
        highlight: "Automated Admissions Guidance",
      },
    ],
    techSpecs: [
      { label: "Learning Engine", value: "Local PDF RAG on Textbooks & Educational Curriculums" },
      { label: "Interaction Mode", value: "Real-Time Natural Voice Dialogue + Touch Glass Visuals" },
      { label: "Language Practice", value: "Accent-Aware Multilingual Conversational AI" },
      { label: "LMS Integration", value: "Compatible with Canvas, Moodle, and Blackboard APIs" },
    ],
    metaTitle: "3D Hologram AI Tutors & Lecturers for Education | HS Global AI",
    metaDescription:
      "Transform education with 3D hologram AI tutors, virtual science lab docents, campus orientation assistants, and multilingual learning avatars.",
  },
};
