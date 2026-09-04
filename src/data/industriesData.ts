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
  infoDepth?: {
    what: string;
    why: string;
    how: string;
    where: string;
    who: string;
    limitations: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
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
      { label: "Supported Languages", value: "29+" },
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
          "Automatic real-time language detection supporting 29+ Global Languages and regional dialects with natural pitch modulation.",
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
          "Serve international and expatriate clients across 29+ global languages with real-time on-device speech translation and localized financial terms.",
        highlight: "29+ Global Languages On-Device",
      },
    ],
    techSpecs: [
      { label: "Data Processing", value: "100% Air-Gapped On-Device GPU Processing" },
      { label: "Security Compliance", value: "ISO 27001 & Bank Security Architecture Compliant" },
      { label: "Hardware Support", value: "65\", 75\", 86\" 3D Hologram Enclosures & Interactive Kiosks" },
      { label: "Document Processing", value: "Real-Time Local PDF / DOCX RAG Neural Vector Engine" },
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
      "Transform static storefront displays and luxury retail floors into interactive 3D shopping experiences. Holographic brand avatars greet shoppers, demonstrate high-end watches, jewellery, apparel, and electronics, answer specs in 29+ Global Languages, and feature instant Virtual Try-On.",
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
          "Greet international tourists in 29+ Global Languages, provide store location maps, and assist with mall directory navigation.",
        highlight: "29+ Global Languages",
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
          "Connect global office visitors with regional department heads across 29+ Global Languages.",
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
          "Assist international clients and visiting partners across 29+ Global Languages with real-time employee directory lookups.",
        highlight: "29+ Global Languages",
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
    subtitle: "Compassionate Patient Intake & Hospital Navigation AI",
    icon: "🏥",
    badge: "100% OFFLINE PATIENT PRIVACY AI",
    description:
      "Deploy AI Digital Humans on 3D Hologram Boxes or Spatial Displays for patient reception, hospital wayfinding, appointment guidance, patient intake support, and pre/post-op care explanations with 100% patient data privacy.",
    heroOverview:
      "Support patients, families, and visitors across hospitals, clinics, and medical centers with empathetic digital human assistants. Provide instant hospital wayfinding, patient intake and triage support, appointment scheduling, and multilingual care instructions. Powered by DIHUAVA, all interactions run 100% offline on-device by default, preserving patient health data privacy with zero cloud data leakage.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "Patient Data Privacy", value: "100%" },
      { label: "Spoken Global Languages", value: "29+" },
      { label: "Specialized Indian Languages", value: "7" },
      { label: "System Availability", value: "24/7" },
    ],
    capabilities: [
      {
        title: "100% Patient Data Privacy & Air-Gapped Security",
        description:
          "Ensure complete patient health data privacy by processing all speech, documents, and interactions strictly on local physical hardware with zero cloud data leakage.",
        icon: "🛡️",
      },
      {
        title: "Patient Intake & Triage Support",
        description:
          "Collect preliminary patient intake details in a comforting, empathetic tone to assist nursing staff with initial administrative routing and service desk direction.",
        icon: "🩺",
      },
      {
        title: "Hospital & Department Navigation",
        description:
          "Guide patients and families floor-by-floor through complex medical centers, outpatient clinics, radiology units, and pharmacy desks.",
        icon: "📍",
      },
      {
        title: "Pre & Post-Op Care Explainer",
        description:
          "Walk patients through surgical preparation guidelines, discharge care instructions, and administrative procedures in clear, comforting spoken words.",
        icon: "📝",
      },
    ],
    useCases: [
      {
        title: "Hospital Reception & Patient Guidance",
        category: "Patient Experience",
        description:
          "Assist arriving patients with clinic department directions, doctor room lookups, and registration guidance.",
        highlight: "Friendly Reception Assistance",
      },
      {
        title: "Hospital & Department Navigation",
        category: "Wayfinding",
        description:
          "Guide patients and visitors floor-by-floor through complex medical facilities, diagnostic labs, radiology suites, and pharmacy desks.",
        highlight: "Multilingual Floor Navigation",
      },
      {
        title: "Appointment & Service Information",
        category: "Scheduling Support",
        description:
          "Help patients check appointment schedules, confirm clinic desk locations, and view estimated wait times.",
        highlight: "Instant Schedule Lookups",
      },
      {
        title: "Patient Education & Care Instructions",
        category: "Health Education",
        description:
          "Explain pre-procedure guidelines, surgical prep steps, and post-discharge recovery instructions in clear, accessible spoken language.",
        highlight: "Clear Care Explanations",
      },
      {
        title: "Healthcare Administrative Information Assistance",
        category: "Admin Guidance",
        description:
          "Answer routine administrative queries regarding visiting hours, parking rules, insurance desk locations, and hospital amenities.",
        highlight: "24/7 Information Availability",
      },
      {
        title: "Document-Based Information Assistance",
        category: "Local Document RAG",
        description:
          "Search local hospital information sheets, care pamphlets, and clinic policy documents via on-device RAG without cloud dependencies.",
        highlight: "100% On-Device Document RAG",
      },
      {
        title: "Multilingual Patient Interaction",
        category: "Global Health",
        description:
          "Communicate fluently across 29+ Global Languages and 7 Specialized Indian Languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati).",
        highlight: "29+ Global & 7 Indian Languages",
      },
      {
        title: "Healthcare Staff & Visitor Support",
        category: "Staff Support",
        description:
          "Handle high-frequency receptionist inquiries and visitor registration, reducing administrative workload for nursing and front-desk personnel.",
        highlight: "Reduces Staff Workload",
      },
    ],
    techSpecs: [
      { label: "Data Protection & Privacy", value: "100% Local On-Device AI Inference (Zero Cloud Data Transmitted; HIPAA & GDPR Compliant)" },
      { label: "System Architecture", value: "DIHUAVA runs 100% offline on-device by default, with optional cloud-management configurations available" },
      { label: "Multilingual Support", value: "29+ Global Languages & 7 Specialized Indian Languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati)" },
      { label: "Physical Hardware Enclosure", value: "Life-Size 3D Hologram Box Enclosure or Ultra-Slim 6 cm Spatial Display Kiosk" },
      { label: "Operational Boundaries", value: "Provides administrative, navigational, and informational support only; does not provide medical diagnoses or clinical decisions" },
    ],
    metaTitle: "AI Digital Humans for Healthcare & Hospital Navigation | HS Global AI",
    metaDescription:
      "Enhance hospital patient guidance, intake triage support, and department navigation with 100% offline, air-gapped AI digital human healthcare assistants.",
    infoDepth: {
      what: "An AI Digital Human in healthcare is an interactive, lifelike avatar rendered on 3D Hologram Boxes or Spatial Displays to assist patients, families, and visitors in physical healthcare environments.",
      why: "Healthcare facilities deploy AI Digital Humans to streamline front-desk operations, reduce patient waiting anxiety, overcome language barriers, and allow healthcare staff to focus on direct patient care.",
      how: "The AI avatar uses natural voice speech recognition, local document intelligence (RAG), and intuitive 3D spatial visuals to guide visitors, answer administrative questions, and explain care guidelines.",
      where: "Ideal deployment locations include hospital reception lobbies, outpatient waiting rooms, radiology suite entryways, emergency intake waiting areas, pharmacy counters, and clinic desks.",
      who: "Designed for hospitals, outpatient medical centers, specialty clinics, rehabilitation facilities, and healthcare networks seeking touchless, private, and accessible patient guidance.",
      limitations: "Operational Boundary Notice: DIHUAVA Digital Humans provide informational, administrative, and wayfinding assistance only. They do NOT replace healthcare professionals, perform medical diagnoses, prescribe treatment, or make emergency medical triage decisions.",
    },
    faqs: [
      {
        question: "What can an AI Digital Human do in a healthcare environment?",
        answer: "An AI Digital Human assists with patient reception, hospital wayfinding, appointment checking, care education pamphlets, administrative Q&A, and document-based assistance. It helps patients navigate the facility and access information easily.",
      },
      {
        question: "Can DIHUAVA operate offline in hospital environments?",
        answer: "Yes. DIHUAVA runs 100% offline on-device by default, with optional cloud-management configurations available. This ensures zero data leakage and protects patient health data privacy.",
      },
      {
        question: "How does offline AI support patient privacy?",
        answer: "All voice recognition, document retrieval, and avatar animation execute entirely on local physical GPU hardware inside the healthcare facility without transmitting any voice recordings, personal queries, or document data to external cloud servers.",
      },
      {
        question: "Can the AI Digital Human support multiple languages?",
        answer: "Yes. It supports 29+ Global Languages and 7 Specialized Indian Languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati), enabling clear communication with diverse patient and visitor populations.",
      },
      {
        question: "Can it help with patient navigation across complex hospital buildings?",
        answer: "Yes. It provides interactive, multi-floor wayfinding directions to clinical departments, diagnostic laboratories, radiology suites, inpatient wards, and pharmacy counters.",
      },
      {
        question: "Can it assist with patient intake or triage?",
        answer: "It provides Patient Intake & Triage Support by collecting initial administrative details and directing visitors to the appropriate reception desk or department. It does NOT make clinical triage decisions or medical diagnoses.",
      },
      {
        question: "Does an AI Digital Human replace healthcare professionals?",
        answer: "No. It acts as an administrative and navigational assistant to support hospital staff, reducing waiting room congestion and allowing nurses and doctors to concentrate on direct medical care.",
      },
    ],
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
      "Delight visitors at museums, heritage sites, national landmarks, and international expos with interactive 3D hologram tour guides. Avatars speak 29+ global languages, recite historical archives via local RAG, and bring cultural exhibits to life.",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
    metrics: [
      { label: "Visitor Engagement Lift", value: "4x" },
      { label: "Spoken Global Languages", value: "29+" },
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
        highlight: "29+ Global Languages",
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
      { label: "Speech Engine", value: "29+ Multilingual Speech Synthesis with Accent Adaptation" },
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
      { label: "Languages Supported", value: "29+" },
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
          "Provide students with infinite conversational practice across 29+ Global Languages with natural voice modulation.",
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
          "Offer students unlimited conversational speech practice across 29+ Global Languages with instant feedback on pronunciation.",
        highlight: "29+ Global Languages Speech Practice",
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
