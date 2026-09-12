"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

import {
  Camera,
  Sparkles,
  ShoppingBag,
  Zap,
  Globe,
  ShieldCheck,
  Cpu,
  User,
  BookOpen,
  Brain,
} from "lucide-react";

// CORE PLATFORM SUBSYSTEMS
const coreModules = [
  {
    id: "selfie-engine",
    title: "Selfie With Avatar",
    subtitle: "Instant On-Device Photo Compositing",
    description:
      "Visitors tap Selfie on the display to capture a photo standing beside the AI Avatar. Features deterministic real-time face-scale matching, 6 creative filters (Realistic, Original, B&W, Vivid, Warm, Cool), and optional QR phone sharing with 24-hour auto-expiring links.",
    icon: Camera,
    badge: "Interactive Photo Experience",
    featureUrl: "/products/ai-digital-human/avatar-customization",
    highlights: [
      "Real-time local compositing",
      "Scale & height face alignment matching",
      "6 instant photographic filters",
      "24-Hour auto-expiring QR share links",
    ],
  },
  {
    id: "live-character",
    title: "Live Character Experience",
    subtitle: "Real-Time Cartoon Face Mode",
    description:
      "A real-time camera-driven cartoon rendering mode where a visitor's live facial expressions (smiles, blinks, head turns) deform a stylized character skin directly onto their face in real time with ultra-low latency.",
    icon: Sparkles,
    badge: "Real-Time Face Tracking",
    featureUrl: "/products/ai-digital-human/avatar-customization",
    highlights: [
      "Real-time camera face tracking",
      "Live expression & blink deformation",
      "No-code character library expansion",
      "High-engagement exhibition draw",
    ],
  },
  {
    id: "product-catalog",
    title: "AI Product Catalog",
    subtitle: "CSV-Driven Recommendation Engine",
    description:
      "Converts product catalog CSVs into an intelligent spoken recommendation system. Displays interactive product cards, price filtering, and automatic audio-visual synchronization so the avatar only discusses products currently on screen.",
    icon: ShoppingBag,
    badge: "Smart Recommendation",
    featureUrl: "/products/ai-digital-human/ai-product-catalog",
    highlights: [
      "Structured 9-column catalog schema",
      "Audio-visual sync with screen cards",
      "Automatic search vocabulary AI",
      "Multilingual catalog translation",
    ],
  },
  {
    id: "offline-rag",
    title: "Enterprise Knowledge RAG",
    subtitle: "On-Device PDF RAG with Reranking",
    description:
      "Ingest custom corporate PDFs, CSVs, TXT, and Markdown files directly onto the local device. An on-device relevance reranker scores passages before generating grounded responses with zero data leaving your premises.",
    icon: Zap,
    badge: "100% Offline RAG",
    featureUrl: "/products/ai-digital-human/document-intelligence",
    highlights: [
      "Local PDF, CSV, TXT & Markdown RAG",
      "On-device relevance reranking",
      "Zero cloud data transmission",
      "Diagnostic retrieval verification",
    ],
  },
  {
    id: "multilingual-voice",
    title: "Multilingual Engine & Voice Cloning",
    subtitle: "29+ Global Languages & Brand Voice Matching",
    description:
      "Full on-device speech recognition, voice synthesis, and translation across 29+ global languages, including regional accents and automatic per-persona voice cloning.",
    icon: Globe,
    badge: "29+ Global Languages",
    featureUrl: "/products/ai-digital-human/multilingual-support",
    highlights: [
      "100% local speech recognition & TTS",
      "Real-time 29+ global languages engine",
      "Automatic per-persona voice cloning",
      "Localized currency & number speech",
    ],
  },
  {
    id: "brain-clone",
    title: "Brain Clone",
    subtitle: "Source-Grounded Personal Knowledge Engine",
    description:
      "Turn a person's recorded talks and teachings into a source-grounded digital human that answers from what they actually said.",
    icon: Brain,
    badge: "IN DEVELOPMENT",
    featureUrl: "/products/ai-digital-human",
    highlights: [
      "Answers from recorded words with source passages on demand",
      "Processing runs on customer-owned hardware",
      "Rights approval required before setup",
      "Does not invent answers when unrecorded",
    ],
  },
  {
    id: "airgap-privacy",
    title: "Enterprise Air-Gap Privacy",
    subtitle: "100% On-Device Data Security",
    description:
      "Engineered for highly regulated enterprise environments (banking, defense, healthcare). All voice computations, LLM dialogues, document searches, and photo compositing occur locally on physical edge hardware.",
    icon: ShieldCheck,
    badge: "Air-Gap Compliance",
    featureUrl: "/products/ai-digital-human/persona-management",
    highlights: [
      "100% local hardware processing",
      "GDPR, PDPA & HIPAA-friendly",
      "Zero voice data transmission",
      "Cryptographic device licensing",
    ],
  },
];

// ARCHITECTURAL PILLARS (8 CORE TECHNOLOGIES)
const archPillars = [
  {
    title: "AI Engine Subsystems",
    desc: "Local Conversational LLM, Automatic Speech Recognition (ASR), Machine Translation, and Semantic Reasoning running 100% on-device.",
    icon: Cpu,
  },
  {
    title: "Digital Avatar Renderer",
    desc: "3D facial mesh rendering, real-time lip synchronization, micro-expressions, posture control, and persona identity management.",
    icon: User,
  },
  {
    title: "29+ Multilingual Speech Engine",
    desc: "Real-time speech recognition & synthesis across 29+ global languages and 7+ Indian languages with instant auto-switch.",
    icon: Globe,
  },
  {
    title: "Knowledge & Catalog RAG Engine",
    desc: "Air-gapped local vector indexer with cross-encoder reranking, multi-column CSV catalog import, and auto vocabulary generation.",
    icon: BookOpen,
  },
  {
    title: "Low-Latency Edge Pipeline",
    desc: "High-speed local stream architecture delivering end-to-end conversational response times with Low Latency for fluid dialogue.",
    icon: Zap,
  },
  {
    title: "Computer Vision & Face Tracking",
    desc: "HD wide-angle camera face tracking, eye-gaze direction sensing, visitor posture tracking, and presence detection array.",
    icon: Camera,
  },
  {
    title: "100% Offline Air-Gapped Security",
    desc: "Zero cloud internet dependency, enterprise privacy compliance, encrypted local vector storage, and physical edge workstation hosting.",
    icon: ShieldCheck,
  },
  {
    title: "Spatial & Hologram Display Controller",
    desc: "Synchronized output drivers for 3D Hologram Boxes, volumetric optical spatial displays, touch kiosks, and multi-screen arrays.",
    icon: Sparkles,
  },
];

// HOW DIHUAVA WORKS STEPS
const howItWorksSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "Voice input, documents, product catalogs, and visitor questions are processed locally.",
    badge: "Local Data Input",
  },
  {
    step: "02",
    title: "Think",
    desc: "The local AI engine retrieves relevant knowledge and generates a grounded response.",
    badge: "On-Device AI",
  },
  {
    step: "03",
    title: "Respond",
    desc: "The digital human responds using natural speech, facial expressions, and personalized behavior.",
    badge: "Neural Expression",
  },
  {
    step: "04",
    title: "Interact",
    desc: "Connect the AI digital human to hologram boxes, kiosks, spatial displays, and other physical environments.",
    badge: "Hardware Sync",
  },
];

// VOICE SYNTHESIS ENGINE
const voiceCapabilities = [
  {
    name: "Expressive Neural Voice Engine",
    speed: "Expressive Synthesis",
    desc: "Optimized for natural speech with expressive audible reactions like laughter, warmth, and fluid conversational cadence.",
  },
  {
    name: "Regional Accent & Dialect Adaptation",
    speed: "Localized Speech",
    desc: "Specialized neural models for global and regional accents with localized currency, numbering, and regional speech rhythm.",
  },
  {
    name: "29+ Global Languages Engine",
    speed: "29+ Global Languages",
    desc: "Covers English, Mandarin, Hindi, Spanish, Arabic, French, German, Japanese, Korean, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, Russian, and major international languages.",
  },
];

// PERSONA TYPES
const personaProfiles = [
  {
    title: "Retail Sales Ambassador",
    desc: "Proactive product recommendations, cross-selling, promotional announcements, and interactive Virtual Try-On assistance.",
    icon: "🛍️",
  },
  {
    title: "Healthcare Patient Assistant",
    desc: "Empathetic hospital wayfinding, symptom intake triage, appointment scheduling, and multilingual discharge instructions.",
    icon: "🏥",
  },
  {
    title: "Corporate Receptionist",
    desc: "Visitor check-in, guest badge issuance, host notifications, workplace wayfinding, and employee HR policy Q&A.",
    icon: "🏢",
  },
  {
    title: "Custom Brand Avatar",
    desc: "Custom 3D character mesh, corporate wardrobe, custom voice cloning reference, and branded interaction style.",
    icon: "⭐",
  },
];

// CUSTOM AI PERSONA FEATURES
const customPersonaFeatures = [
  {
    title: "Appearance",
    desc: "Create a digital human aligned with your brand identity.",
  },
  {
    title: "Voice",
    desc: "Use multilingual voices or a customized corporate voice.",
  },
  {
    title: "Personality",
    desc: "Configure communication style, tone and behavior.",
  },
  {
    title: "Brand Identity",
    desc: "Apply your organization's visual identity and interaction style.",
  },
];

// COMPARISON MATRIX
const comparisonTable = [
  { feature: "AI Processing", dihuava: "Local / On-Device", cloud: "Cloud-Based" },
  { feature: "Internet Dependency", dihuava: "Designed for Offline Operation", cloud: "Typically Requires Connectivity" },
  { feature: "Voice Processing", dihuava: "Local Processing", cloud: "May Use Remote Processing" },
  { feature: "Languages", dihuava: "29+ Local Languages", cloud: "Depends on Provider" },
  { feature: "Selfie Experience", dihuava: "Local Compositing", cloud: "Cloud-Dependent Workflows" },
  { feature: "Live Character", dihuava: "Real-Time Face Tracking", cloud: "Depends on Implementation" },
  { feature: "Data Architecture", dihuava: "Edge / Air-Gapped Deployment", cloud: "Cloud Infrastructure" },
];

// PRODUCT SPECS
const productSpecs = [
  { label: "Core AI Architecture", value: "Fully local on-device voice & conversation platform" },
  { label: "Supported Languages", value: "29+ Global Languages" },
  { label: "Speech & Voice Engine", value: "Speech recognition, synthesis & voice cloning" },
  { label: "Document RAG", value: "PDF, TXT, CSV & Markdown" },
  { label: "Product Catalog", value: "Product recommendation & screen synchronization" },
  { label: "Photo & Character", value: "Selfie With Avatar + Live Character" },
];

// FREQUENTLY ASKED QUESTIONS
const faqs = [
  {
    q: "Does DIHUAVA require internet connectivity?",
    a: "No. DIHUAVA runs 100% offline on-device by default, with optional cloud-management configurations available. The full 29-language voice pipeline, document RAG, product catalog, Selfie compositing, and Live Character rendering run completely offline on local hardware.",
  },
  {
    q: "How many languages are supported on-device?",
    a: "29+ global languages fully local, including English, Mandarin, Hindi, Spanish, Arabic, French, German, Japanese, Korean, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, and major international languages.",
  },
  {
    q: "Is visitor voice or conversation data transmitted to the cloud?",
    a: "Zero voice or conversation data is sent to external servers. All AI processing occurs locally on physical edge hardware, ensuring complete compliance with GDPR, PDPA, and HIPAA privacy standards.",
  },
  {
    q: "Can we clone our own corporate brand voice?",
    a: "Yes. Custom persona packages can include short reference audio recordings. The platform clones the persona's voice automatically across English and multilingual synthesis tiers with no manual voice-training step.",
  },
  {
    q: "What is Selfie With Avatar?",
    a: "Selfie With Avatar allows visitors to tap Selfie on screen and instantly capture a photo standing next to the avatar. Real-time compositing matches face size and vertical height, applies creative filters, and generates a 24-hour QR share link.",
  },
  {
    q: "What is Live Character Experience?",
    a: "Live Character Experience is a real-time cartoon face mode. The camera tracks visitor facial movements (smiles, blinks, head turns) and warps a stylized character skin directly onto their face with ultra-low latency.",
  },
];

export default function DihuavaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
  const hp = dict.home.platform;
  const brainCloneData = (hp.capabilities as any)?.brainClone;

  const localizedModules = coreModules.map((module) => {
    if (module.id === "brain-clone" && brainCloneData) {
      const highlightsList: string[] = brainCloneData.highlights
        ? brainCloneData.highlights.map((h: any) => (typeof h === "string" ? h : h.detail))
        : module.highlights;
      return {
        ...module,
        title: (brainCloneData.title as string) || module.title,
        subtitle: (brainCloneData.subtitle as string) || module.subtitle,
        description: (brainCloneData.description as string) || module.description,
        badge: (brainCloneData.stat as string) || module.badge,
        highlights: highlightsList,
      };
    }
    if (currentLocale === "zh") {
      const zhMap: Record<string, any> = {
        "selfie-engine": {
          title: "与数字人合影 (Selfie With Avatar)",
          subtitle: "端侧实时照片合成引擎",
          description: "观众点击屏幕上的'合影'，即可与AI数字人并排拍照。具备确定性实时面部比例匹配、6种滤镜以及24小时自动过期的QR分享链接。",
          badge: "交互式拍照体验",
          highlights: ["实时本地图像合成", "面部尺寸与身高对齐", "6款相片滤镜", "24小时自动过期二维码"],
        },
        "live-character": {
          title: "实时卡通角色体验",
          subtitle: "实时摄像头驱动卡通变脸模式",
          description: "基于摄像头的实时卡通渲染模式，观众的微表情（微笑、眨眼、摇头）实时驱动卡通皮肤，超低延迟。",
          badge: "实时面部追踪",
          highlights: ["摄像头实时面部追踪", "实时表情与眨眼变形", "零代码角色库扩展", "展会现场高吸引力"],
        },
        "product-catalog": {
          title: "AI 产品目录",
          subtitle: "CSV 驱动智能推荐引擎",
          description: "将产品目录 CSV 转化为智能语音推荐系统。展示画中画产品卡片与音视频同步，数字人仅讲解当前屏幕展示的商品。",
          badge: "智能推荐引擎",
          highlights: ["结构化 9 列目录 schema", "屏幕卡片音视频同步", "自动搜索词汇 AI", "多语言目录翻译"],
        },
        "offline-rag": {
          title: "企业知识库 RAG",
          subtitle: "端侧 PDF RAG 与重排序引擎",
          description: "将企业 PDF、CSV、TXT 和 Markdown 文件直接导入本地设备。端侧相关性重排序器在生成回答前进行评分，数据完全不出本地。",
          badge: "100% 离线 RAG",
          highlights: ["本地 PDF, CSV, TXT & Markdown RAG", "端侧相关性重排序", "零云端数据传输", "诊断级检索验证"],
        },
        "multilingual-voice": {
          title: "多语言引擎与声音克隆",
          subtitle: "29+ 全球语言与品牌声音匹配",
          description: "100% 本地语音识别、语音合成与翻译，覆盖 29+ 全球语言，包含区域口音与角色声音克隆。",
          badge: "29+ 全球语言",
          highlights: ["100% 本地语音识别与 TTS", "实时 29+ 全球语言引擎", "自动角色声音克隆", "本地化货币与数字朗读"],
        },
        "airgap-privacy": {
          title: "企业级物理隔离隐私",
          subtitle: "100% 端侧数据安全",
          description: "专为高监管企业环境（金融、国防、医疗）设计。所有语音计算、LLM 对话、文档检索与照片合成均在本地硬件完成。",
          badge: "物理隔离合规",
          highlights: ["100% 本地硬件处理", "符合 GDPR, PDPA & HIPAA", "零语音数据传输", "设备加密授权"],
        },
      };
      if (zhMap[module.id]) return { ...module, ...zhMap[module.id] };
    } else if (currentLocale === "ru") {
      const ruMap: Record<string, any> = {
        "selfie-engine": {
          title: "Селфи с аватаром (Selfie With Avatar)",
          subtitle: "Локальный фотокомпозитинг на устройстве",
          description: "Посетители нажимают 'Селфи', чтобы сфотографироваться рядом с AI-аватором. Точное масштабирование лица, 6 фильтров и мгновенный QR-код с автоудалением через 24 часа.",
          badge: "Интерактивное фото",
          highlights: ["Локальный композитинг кадров", "Масштабирование по высоте и лицу", "6 фотофильтров", "QR-код с автоудалением (24 ч)"],
        },
        "live-character": {
          title: "Режим мультперсонажа",
          subtitle: "Анимация персонажа по мимике в реальном времени",
          description: "Режим рендеринга мультяшной кожи, управляемый камерой. Мимика посетителя (улыбка, моргание, повороты) передается на 3D-персонажа с ультранизкой задержкой.",
          badge: "Трекинг лица в реальном времени",
          highlights: ["Трекинг лица через камеру", "Анимация улыбок и моргания", "Расширение библиотеки без кода", "Высокая вовлеченность на стенде"],
        },
        "product-catalog": {
          title: "AI Каталог товаров",
          subtitle: "Рекомендации товаров из CSV-таблицы",
          description: "Превращает CSV-каталог в интеллектуальную голосовую систему продаж. Отображает карточки товаров 'картинка-в-картинке' и синхронизирует речь с экраном.",
          badge: "Умные рекомендации",
          highlights: ["9-колоночный формат CSV", "Синхронизация карточек с речью", "Автопоиск по ключевым словам", "Мультиязычный каталог"],
        },
        "offline-rag": {
          title: "Корпоративная база знаний RAG",
          subtitle: "Локальный RAG по PDF с ранжированием",
          description: "Загрузка документов PDF, CSV, TXT и Markdown непосредственно на устройство. Локальный модуль ранжирования обеспечивает точные ответы без выхода в сеть.",
          badge: "100% Офлайн RAG",
          highlights: ["Локальный RAG (PDF, CSV, TXT, MD)", "Ранжирование контекста на устройстве", "Нулевая передача данных в облако", "Проверка источника ответа"],
        },
        "multilingual-voice": {
          title: "Многоязычный модуль и клонирование голоса",
          subtitle: "29+ языков мира и синтез тона бренда",
          description: "Локальное распознавание и синтез речи на 29+ языках мира с поддержкой региональных акцентов и автоматического клонирования голоса.",
          badge: "29+ Языков мира",
          highlights: ["100% Локальные STT и TTS", "Реальное время (29+ языков)", "Клонирование голоса персонажа", "Локализованные валюты и числа"],
        },
        "airgap-privacy": {
          title: "Полная изоляция данных (Air-Gap)",
          subtitle: "100% Безопасность на устройстве",
          description: "Создано для банков, госструктур и медицины. Все процессы речи, LLM-диалоги, поиск в документах и фото вычисляются строго локально.",
          badge: "Соответствие Air-Gap",
          highlights: ["100% Локальная обработка на GPU", "Совместимость с GDPR, PDPA, HIPAA", "Нулевая передача голоса", "Криптографическое лицензирование"],
        },
      };
      if (ruMap[module.id]) return { ...module, ...ruMap[module.id] };
    } else if (currentLocale === "es") {
      const esMap: Record<string, any> = {
        "selfie-engine": {
          title: "Selfie con el Avatar (Selfie With Avatar)",
          subtitle: "Composición fotográfica instantánea en el dispositivo",
          description: "Los visitantes tocan 'Selfie' para tomarse una foto junto al avatar de IA. Coincidencia facial en tiempo real, 6 filtros y enlace QR con caducidad en 24 horas.",
          badge: "Experiencia fotográfica interactiva",
          highlights: ["Composición local en tiempo real", "Alineación de escala y rostro", "6 filtros fotográficos", "Enlace QR caducable en 24 horas"],
        },
        "live-character": {
          title: "Modo Personaje Animado",
          subtitle: "Modo de cara caricaturizada impulsado por cámara",
          description: "Modo de renderizado que deforma una piel de personaje estilizada sobre el rostro del visitante en tiempo real mediante seguimiento de cámara.",
          badge: "Seguimiento facial en tiempo real",
          highlights: ["Seguimiento facial con cámara", "Deformación de expresiones y parpadeo", "Biblioteca de personajes sin código", "Gran atracción en exposiciones"],
        },
        "product-catalog": {
          title: "Catálogo de Productos con IA",
          subtitle: "Motor de recomendación mediante archivos CSV",
          description: "Convierte su catálogo CSV en un sistema de recomendación hablado. Muestra tarjetas picture-in-picture y sincronización de voz con la pantalla.",
          badge: "Recomendador inteligente",
          highlights: ["Esquema CSV de 9 columnas", "Sincronización de audio y tarjetas", "IA de búsqueda automática de términos", "Traducción de catálogos"],
        },
        "offline-rag": {
          title: "Base de Conocimiento RAG",
          subtitle: "RAG sobre PDF local con reordenamiento",
          description: "Cargue PDF, CSV, TXT y Markdown directamente en el dispositivo local. Un reordenador de relevancia local evalúa pasajes sin salir a internet.",
          badge: "100% RAG sin conexión",
          highlights: ["RAG local para PDF, CSV, TXT y MD", "Reordenamiento de relevancia local", "Cero transmisión a la nube", "Verificación de respuestas"],
        },
        "multilingual-voice": {
          title: "Motor Multilingüe y Clonación de Voz",
          subtitle: "29+ idiomas globales y clonación de tono de marca",
          description: "Reconocimiento y síntesis de voz 100% local en 29+ idiomas globales, incluidos acentos regionales y clonación automática de voz por personaje.",
          badge: "29+ Idiomas globales",
          highlights: ["STT y TTS 100% locales", "Motor en tiempo real para 29+ idiomas", "Clonación de voz por personaje", "Monedas y números localizados"],
        },
        "airgap-privacy": {
          title: "Privacidad y Seguridad Local (Air-Gap)",
          subtitle: "Seguridad de datos 100% en el dispositivo",
          description: "Diseñado para banca, defensa y salud. Todo el procesamiento de voz, LLM, RAG y fotografía se ejecuta localmente en hardware físico.",
          badge: "Cumplimiento Air-Gap",
          highlights: ["Procesamiento 100% en hardware local", "Compatible con GDPR, PDPA y HIPAA", "Cero transmisión de voz", "Licencia criptográfica de dispositivo"],
        },
      };
      if (esMap[module.id]) return { ...module, ...esMap[module.id] };
    } else if (currentLocale === "fr") {
      const frMap: Record<string, any> = {
        "selfie-engine": {
          title: "Selfie avec l'Avatar (Selfie With Avatar)",
          subtitle: "Composition photo instantanée sur appareil",
          description: "Les visiteurs touchent 'Selfie' sur l'écran pour prendre une photo à côté de l'avatar IA. Correspondance faciale en temps réel, 6 filtres et lien QR expirant en 24 heures.",
          badge: "Expérience photo interactive",
          highlights: ["Composition locale en temps réel", "Alignement de taille et de visage", "6 filtres photographiques", "Lien QR expirant en 24 heures"],
        },
        "live-character": {
          title: "Mode Personnage Animé",
          subtitle: "Mode visage cartoon piloté par caméra en temps réel",
          description: "Un mode de rendu cartoon où les expressions faciales du visiteur en direct déforment un skin de personnage directement sur son visage en temps réel à très faible latence.",
          badge: "Suivi facial en temps réel",
          highlights: ["Suivi facial par caméra en temps réel", "Déformation d'expressions et clignements", "Bibliothèque de personnages sans code", "Attraction forte lors d'expositions"],
        },
        "product-catalog": {
          title: "Catalogue de Produits IA",
          subtitle: "Moteur de recommandation piloté par CSV",
          description: "Convertit les catalogues CSV en un système de recommandation vocal intelligent. Affiche des cartes interactives et une synchronisation audio-visuelle.",
          badge: "Recommandation intelligente",
          highlights: ["Schéma CSV à 9 colonnes", "Synchro audio-visuelle avec cartes", "IA de recherche automatique", "Traduction de catalogue multilingue"],
        },
        "offline-rag": {
          title: "Base de Connaissances Enterprise RAG",
          subtitle: "RAG PDF sur appareil avec réordonnancement",
          description: "Incorporez des fichiers PDF, CSV, TXT et Markdown directement sur l'appareil local. Un réordonnanceur de pertinence évalue les passages sans sortie vers le cloud.",
          badge: "100% RAG hors ligne",
          highlights: ["RAG local PDF, CSV, TXT et Markdown", "Réordonnancement de pertinence local", "Zéro transmission de données cloud", "Vérification diagnostique de recherche"],
        },
        "multilingual-voice": {
          title: "Moteur Multilingue & Clonage Vocal",
          subtitle: "Plus de 29 langues mondiales & correspondance de voix",
          description: "Reconnaissance vocale, synthèse et traduction 100% locales dans plus de 29 langues mondiales, avec accents régionaux et clonage vocal automatique.",
          badge: "29+ Langues mondiales",
          highlights: ["Reconnaissance vocale & TTS 100% locaux", "Moteur en temps réel pour 29+ langues", "Clonage vocal automatique par persona", "Discours monétaire et numérique localisé"],
        },
        "airgap-privacy": {
          title: "Confidentialité Air-Gap Entreprise",
          subtitle: "Sécurité des données 100% sur appareil",
          description: "Conçu pour les environnements réglementés (banque, défense, santé). Tous les calculs vocaux, dialogues LLM, recherches PDF et photos restent locaux.",
          badge: "Conformité Air-Gap",
          highlights: ["Traitement 100% sur matériel local", "Compatible GDPR, PDPA & HIPAA", "Zéro transmission de données vocales", "Licence chiffrée sur appareil"],
        },
      };
      if (frMap[module.id]) return { ...module, ...frMap[module.id] };
    }
    return module;
  });

  const localizedArchPillars = archPillars.map((pillar, idx) => {
    if (currentLocale === "zh") {
      const zhPillars = [
        { title: "AI 引擎子系统", desc: "端侧对话 LLM、自动语音识别 (ASR)、机器翻译与语义推理 100% 在本地运行。" },
        { title: "数字人渲染器", desc: "3D 面部网格渲染、实时唇形同步、微表情、姿态控制与角色身份管理。" },
        { title: "29+ 多语言语音引擎", desc: "覆盖 29+ 全球语言与 7+ 印地语种的实时语音识别与合成，支持即时无缝切换。" },
        { title: "知识库与目录 RAG 引擎", desc: "物理隔离本地向量索引器，具备交叉编码器重排序、多列 CSV 目录导入与词汇自动生成。" },
        { title: "低延迟边缘流水线", desc: "高速本地流式架构，提供低延迟的端到端对话响应，确保对话自然流畅。" },
        { title: "计算机视觉与面部追踪", desc: "高清广角摄像头面部追踪、视线方向感知、访客姿态追踪与人员存在感应。" },
        { title: "100% 端侧物理隔离安全", desc: "零云端网络依赖、企业隐私合规、加密本地向量存储与物理边缘工作站部署。" },
        { title: "空间与全息显示控制器", desc: "针对 3D 全息舱、体积光学空间显示器、触摸终端及多屏阵列的同步输出驱动程序。" },
      ];
      return { ...pillar, ...zhPillars[idx] };
    }
    if (currentLocale === "ru") {
      const ruPillars = [
        { title: "Подсистемы AI-движка", desc: "Локальный диалоговый LLM, распознавание речи (ASR), машинный перевод и семантика 100% на устройстве." },
        { title: "Рендерер цифрового аватара", desc: "Рендеринг 3D-сетки лица, синхронизация губ в реальном времени, микроэкспрессия и управление персонажами." },
        { title: "Речевой движок 29+ языков", desc: "Распознавание и синтез речи в реальном времени на 29+ языках мира с мгновенным автопереключением." },
        { title: "Движок RAG и каталога", desc: "Изолированный векторный индексатор с переранжированием, импортом CSV-каталогов и автогенерацией словаря." },
        { title: "Локальный конвейер низкой задержки", desc: "Высокоскоростная локальная архитектура потоковой передачи, обеспечивающая ультранизкую задержку." },
        { title: "Компьютерное зрение и трекинг", desc: "Трекинг лица через HD-камеру, определение направления взгляда, отслеживание позы и датчики присутствия." },
        { title: "100% Изолированная безопасность Air-Gap", desc: "Нулевая зависимость от облака, корпоративная конфиденциальность, зашифрованное векторное хранилище." },
        { title: "Контроллер 3D и голограмм", desc: "Синхронизированные драйверы для 3D Hologram Box, объемных оптических дисплеев и сенсорных киосков." },
      ];
      return { ...pillar, ...ruPillars[idx] };
    }
    if (currentLocale === "es") {
      const esPillars = [
        { title: "Subsistemas de motor de IA", desc: "LLM conversacional local, reconocimiento de voz (ASR), traducción automática y razonamiento semántico 100% en el dispositivo." },
        { title: "Renderizador de Avatar Digital", desc: "Renderizado de malla facial 3D, sincronización labial en tiempo real, microexpresiones, control de postura y gestión de personas." },
        { title: "Motor de voz multilingüe 29+", desc: "Reconocimiento y síntesis de voz en tiempo real en 29+ idiomas globales con cambio automático instantáneo." },
        { title: "Motor RAG de conocimiento y catálogo", desc: "Indexador vectorial local con reordenamiento cross-encoder, importación CSV multicolumna y generación de vocabulario." },
        { title: "Canal de borde de baja latencia", desc: "Arquitectura de transmisión local de alta velocidad que ofrece tiempos de respuesta conversacionales con baja latencia." },
        { title: "Visión por computadora y seguimiento facial", desc: "Seguimiento facial con cámara HD gran angular, detección de mirada, seguimiento de postura y matriz de presencia." },
        { title: "Seguridad local 100% Air-Gap", desc: "Cero dependencia de internet en la nube, cumplimiento de privacidad empresarial y almacenamiento vectorial cifrado." },
        { title: "Controlador de pantallas espaciales y hologramas", desc: "Controladores de salida sincronizados para 3D Hologram Boxes, pantallas espaciales ópticas y quioscos táctiles." },
      ];
      return { ...pillar, ...esPillars[idx] };
    }
    if (currentLocale === "fr") {
      const frPillars = [
        { title: "Sous-systèmes du moteur IA", desc: "LLM conversationnel local, reconnaissance vocale (ASR), traduction automatique et raisonnement sémantique 100% sur l'appareil." },
        { title: "Rendu d'Avatar Numérique", desc: "Rendu de maillage facial 3D, synchronisation labiale en temps réel, micro-expressions, contrôle de posture et gestion des identités." },
        { title: "Moteur vocal multilingue 29+", desc: "Reconnaissance et synthèse vocale en temps réel dans plus de 29 langues mondiales avec basculement automatique instantané." },
        { title: "Moteur RAG de connaissances et catalogue", desc: "Indexeur vectoriel local isolé avec réordonnancement cross-encoder, importation CSV multicolonne et génération de vocabulaire." },
        { title: "Pipeline local à faible latence", desc: "Architecture de flux local à haute vitesse offrant des temps de réponse conversationnels à faible latence." },
        { title: "Vision par ordinateur et suivi facial", desc: "Suivi facial par caméra HD grand angle, détection du regard, suivi de posture et détection de présence." },
        { title: "Sécurité 100% hors ligne Air-Gap", desc: "Zéro dépendance au cloud, conformité à la confidentialité d'entreprise et stockage vectoriel chiffré." },
        { title: "Contrôleur d'affichage spatial & hologramme", desc: "Pilotes de sortie synchronisés pour 3D Hologram Boxes, affichages spatiaux optiques volumétriques et bornes tactiles." },
      ];
      return { ...pillar, ...frPillars[idx] };
    }
    return pillar;
  });

  const localizedHowItWorks = howItWorksSteps.map((item, idx) => {
    if (currentLocale === "zh") {
      const zhSteps = [
        { title: "理解", desc: "语音输入、文档、产品目录和访客提问均在本地处理。", badge: "本地数据输入" },
        { title: "思考", desc: "本地 AI 引擎检索相关知识库并生成精准答复。", badge: "端侧 AI 引擎" },
        { title: "响应", desc: "数字人运用自然语音、面部表情与个性化行为做出回应。", badge: "神经网络表情" },
        { title: "交互", desc: "将 AI 数字人无缝连接至全息舱、终端、空间显示器及其他物理场景。", badge: "硬件同步驱动" },
      ];
      return { ...item, ...zhSteps[idx] };
    }
    if (currentLocale === "ru") {
      const ruSteps = [
        { title: "Понимание", desc: "Голосовой ввод, документы, каталоги товаров и вопросы посетителей обрабатываются локально.", badge: "Локальный ввод данных" },
        { title: "Анализ", desc: "Локальный AI-движок извлекает релевантные знания и формирует точный ответ.", badge: "AI на устройстве" },
        { title: "Ответ", desc: "Цифровой аватар отвечает с использованием естественной речи, мимики и индивидуального поведения.", badge: "Нейросетевая мимика" },
        { title: "Взаимодействие", desc: "Подключайте цифрового аватара к голографическим боксам, киоскам, 3D-дисплеям и объектам.", badge: "Аппаратная синхронизация" },
      ];
      return { ...item, ...ruSteps[idx] };
    }
    if (currentLocale === "es") {
      const esSteps = [
        { title: "Comprender", desc: "La entrada de voz, los documentos, los catálogos y las preguntas de los visitantes se procesan localmente.", badge: "Entrada de datos local" },
        { title: "Pensar", desc: "El motor de IA local recupera el conocimiento relevante y genera una respuesta fundamentada.", badge: "IA en el dispositivo" },
        { title: "Responder", desc: "El humano digital responde utilizando habla natural, expresiones faciales y comportamiento personalizado.", badge: "Expresión neuronal" },
        { title: "Interactuar", desc: "Conecte el humano digital de IA a cajas holográficas, quioscos, pantallas espaciales y otros entornos físicos.", badge: "Sincronización de hardware" },
      ];
      return { ...item, ...esSteps[idx] };
    }
    if (currentLocale === "fr") {
      const frSteps = [
        { title: "Comprendre", desc: "L'entrée vocale, les documents, les catalogues de produits et les questions des visiteurs sont traités localement.", badge: "Entrée de données locale" },
        { title: "Penser", desc: "Le moteur d'IA local extrait les connaissances pertinentes et génère une réponse fondée.", badge: "IA sur appareil" },
        { title: "Répondre", desc: "L'humain numérique répond avec une parole naturelle, des expressions faciales et un comportement personnalisé.", badge: "Expression neuronale" },
        { title: "Interagir", desc: "Connectez l'humain numérique IA aux boîtes holographiques, bornes, affichages spatiaux et autres environnements physiques.", badge: "Synchronisation matérielle" },
      ];
      return { ...item, ...frSteps[idx] };
    }
    return item;
  });

  const localizedVoiceCaps = voiceCapabilities.map((tier, idx) => {
    if (currentLocale === "zh") {
      const zhTiers = [
        { name: "表现力神经网络语音引擎", speed: "表现力合成", desc: "针对自然语音优化，具备笑声、亲和力与流畅对话节奏等表情化音效。" },
        { name: "区域口音与方言适配", speed: "本地化口音", desc: "针对全球与区域口音的专用神经网络模型，支持本地化货币、数字读法与语调节奏。" },
        { name: "29+ 全球语言引擎", speed: "29+ 全球语言", desc: "涵盖英语、中文、印地语、西班牙语、阿拉伯语、法语、德语、日语、韩语、俄语及全球主要国际语言。" },
      ];
      return { ...tier, ...zhTiers[idx] };
    }
    if (currentLocale === "ru") {
      const ruTiers = [
        { name: "Нейросетевой движок выразительной речи", speed: "Выразительный синтез", desc: "Оптимизировано для естественной речи с выражением эмоций (смех, теплота, беглость)." },
        { name: "Адаптация региональных акцентов", speed: "Локализованная речь", desc: "Специализированные модели для акцентов с локализацией валют, чисел и ритма речи." },
        { name: "Движок 29+ языков мира", speed: "29+ Языков мира", desc: "Включает английский, китайский, хинди, испанский, арабский, французский, немецкий, русский и другие мировые языки." },
      ];
      return { ...tier, ...ruTiers[idx] };
    }
    if (currentLocale === "es") {
      const esTiers = [
        { name: "Motor de voz neuronal expresiva", speed: "Síntesis expresiva", desc: "Optimizado para habla natural con reacciones audibles expresivas como risa, calidez y ritmo conversacional fluido." },
        { name: "Adaptación de acentos regionales", speed: "Habla localizada", desc: "Modelos neuronales especializados para acentos globales y regionales con monedas y números localizados." },
        { name: "Motor de 29+ idiomas globales", speed: "29+ Idiomas globales", desc: "Cubre inglés, mandarín, hindi, español, árabe, francés, alemán, japonés, coreano, ruso y los principales idiomas internacionales." },
      ];
      return { ...tier, ...esTiers[idx] };
    }
    if (currentLocale === "fr") {
      const frTiers = [
        { name: "Moteur vocal neuronal expressif", speed: "Synthèse expressive", desc: "Optimisé pour un discours naturel avec des réactions audibles expressives comme le rire, la chaleur et la fluidité." },
        { name: "Adaptation des accents régionaux", speed: "Parole localisée", desc: "Modèles neuronaux spécialisés pour les accents globaux et régionaux avec prononciation localisée de las monnaies et des nombres." },
        { name: "Moteur de 29+ langues mondiales", speed: "29+ Langues mondiales", desc: "Couvre l'anglais, le mandarin, l'hindi, l'espagnol, l'arabe, le français, l'allemand, le japonais, le coréen, le russe et les principales langues internationales." },
      ];
      return { ...tier, ...frTiers[idx] };
    }
    return tier;
  });

  const localizedPersonaProfiles = personaProfiles.map((p, idx) => {
    if (currentLocale === "zh") {
      const zhPersonas = [
        { title: "零售销售大使", desc: "主动产品推荐、交叉销售、促销播报以及虚拟试穿辅助。" },
        { title: "医疗导诊助手", desc: "充满关怀的医院分诊与导航、症状初筛、预约登记及多语言出院指引。" },
        { title: "企业前台接待", desc: "访客登记签到、通行证发放、员工通知、楼宇导航及 HR 政策解答。" },
        { title: "定制品牌数字人", desc: "定制 3D 角色网格、专属服装、声音克隆基准及品牌化交互风格。" },
      ];
      return { ...p, ...zhPersonas[idx] };
    }
    if (currentLocale === "ru") {
      const ruPersonas = [
        { title: "Амбассадор розничных продаж", desc: "Проактивные рекомендации товаров, кросс-продажи и виртуальная примерка Virtual Try-On." },
        { title: "Медицинский ассистент", desc: "Эмпатичная навигация по больнице, триаж симптомов, запись на прием и инструкции." },
        { title: "Корпоративный ресепшионист", desc: "Регистрация посетителей, выдача пропусков, уведомление сотрудников и ответы на вопросы HR." },
        { title: "Брендированный аватар", desc: "Индивидуальная 3D-модель, корпоративный гардероб, клонирование голоса и стиль бренда." },
      ];
      return { ...p, ...ruPersonas[idx] };
    }
    if (currentLocale === "es") {
      const esPersonas = [
        { title: "Embajador de ventas minoristas", desc: "Recomendaciones proactivas de productos, venta cruzada y asistencia interactiva de Virtual Try-On." },
        { title: "Asistente de atención médica", desc: "Orientación empática en hospitales, triaje de síntomas, programación de citas e instrucciones multilingües." },
        { title: "Recepcionista corporativo", desc: "Registro de visitantes, emisión de credenciales, notificaciones y respuestas a preguntas de RRHH." },
        { title: "Avatar de marca personalizado", desc: "Malla 3D personalizada, vestuario corporativo, referencia de clonación de voz y estilo de marca." },
      ];
      return { ...p, ...esPersonas[idx] };
    }
    if (currentLocale === "fr") {
      const frPersonas = [
        { title: "Ambassadeur des ventes au détail", desc: "Recommandations proactives de produits, ventes croisées et assistance interactive de Virtual Try-On." },
        { title: "Assistant de santé pour patients", desc: "Orientation hospitalière empathique, tri des symptômes, prise de rendez-vous et instructions multilingues." },
        { title: "Réceptionniste d'entreprise", desc: "Enregistrement des visiteurs, émission de badges, notifications et réponses aux questions RH." },
        { title: "Avatar de marque personnalisé", desc: "Maillage 3D personnalisé, garde-robe d'entreprise, référence de clonage vocal et style de marque." },
      ];
      return { ...p, ...frPersonas[idx] };
    }
    return p;
  });

  const localizedCustomPersonaFeatures = customPersonaFeatures.map((feature, i) => {
    if (currentLocale === "zh") {
      const zhFeatures = [
        { title: "外形外观", desc: "打造与您的品牌形象高度契合的数字人。" },
        { title: "语音声音", desc: "使用多语言语音或定制企业专属声音。" },
        { title: "性格风格", desc: "配置沟通风格、语调与行为习惯。" },
        { title: "品牌标识", desc: "融入您企业的视觉标识与交互规范。" },
      ];
      return { ...feature, ...zhFeatures[i] };
    }
    if (currentLocale === "ru") {
      const ruFeatures = [
        { title: "Внешний вид", desc: "Создайте цифрового аватара в соответствии с айдентикой бренда." },
        { title: "Голос", desc: "Используйте многоязычные голоса или фирменный голос." },
        { title: "Характер", desc: "Настройте стиль общения, тон и поведение." },
        { title: "Бренд", desc: "Примените визуальный стиль и правила взаимодействия." },
      ];
      return { ...feature, ...ruFeatures[i] };
    }
    if (currentLocale === "es") {
      const esFeatures = [
        { title: "Apariencia", desc: "Cree un humano digital alineado con su identidad de marca." },
        { title: "Voz", desc: "Utilice voces multilingües o una voz corporativa personalizada." },
        { title: "Personalidad", desc: "Configure el estilo de comunicación, el tono y el comportamiento." },
        { title: "Identidad de marca", desc: "Aplique la identidad visual y el estilo de interacción de su empresa." },
      ];
      return { ...feature, ...esFeatures[i] };
    }
    if (currentLocale === "fr") {
      const frFeatures = [
        { title: "Apparence", desc: "Créez un humain numérique aligné avec votre identité de marque." },
        { title: "Voix", desc: "Utilisez des voix multilingues ou une voix d'entreprise personnalisée." },
        { title: "Personnalité", desc: "Configurez le style de communication, le ton et le comportement." },
        { title: "Identité de marque", desc: "Appliquez l'identité visuelle et le style d'interaction de votre entreprise." },
      ];
      return { ...feature, ...frFeatures[i] };
    }
    return feature;
  });

  const localizedComparisonTable = comparisonTable.map((row, idx) => {
    if (currentLocale === "zh") {
      const zhRows = [
        { feature: "AI 处理", dihuava: "端侧本地处理", cloud: "基于云端" },
        { feature: "网络依赖", dihuava: "专为离线运行设计", cloud: "通常依赖网络连接" },
        { feature: "语音处理", dihuava: "端侧本地处理", cloud: "依赖远程服务器处理" },
        { feature: "语言支持", dihuava: "29+ 端侧本地语言", cloud: "取决于服务商" },
        { feature: "合影体验", dihuava: "端侧本地照片合成", cloud: "依赖云端处理流程" },
        { feature: "卡通角色模式", dihuava: "实时面部追踪", cloud: "取决于具体实现方式" },
        { feature: "数据架构", dihuava: "边缘 / 物理隔离部署", cloud: "云端基础架构" },
      ];
      return { ...row, ...zhRows[idx] };
    }
    if (currentLocale === "ru") {
      const ruRows = [
        { feature: "Обработка AI", dihuava: "Локально / На устройстве", cloud: "Облачная обработка" },
        { feature: "Зависимость от сети", dihuava: "Создано для работы офлайн", cloud: "Требует постоянного подключения" },
        { feature: "Обработка речи", dihuava: "Локальная обработка", cloud: "Использует удаленные серверы" },
        { feature: "Языки", dihuava: "29+ Локальных языков", cloud: "Зависит от провайдера" },
        { feature: "Селфи", dihuava: "Локальный композитинг", cloud: "Облачные процессы" },
        { feature: "Мультперсонаж", dihuava: "Трекинг лица в реальном времени", cloud: "Зависит от реализации" },
        { feature: "Архитектура данных", dihuava: "Edge / Изолированное развертывание", cloud: "Облачная инфраструктура" },
      ];
      return { ...row, ...ruRows[idx] };
    }
    if (currentLocale === "es") {
      const esRows = [
        { feature: "Procesamiento de IA", dihuava: "Local / En dispositivo", cloud: "Basado en la nube" },
        { feature: "Dependencia de internet", dihuava: "Diseñado para funcionamiento sin conexión", cloud: "Requiere conectividad constante" },
        { feature: "Procesamiento de voz", dihuava: "Procesamiento local", cloud: "Puede usar procesamiento remoto" },
        { feature: "Idiomas", dihuava: "29+ Idiomas locales", cloud: "Depende del proveedor" },
        { feature: "Experiencia Selfie", dihuava: "Composición local", cloud: "Flujos dependientes de la nube" },
        { feature: "Personaje animado", dihuava: "Seguimiento facial en tiempo real", cloud: "Depende de la implementación" },
        { feature: "Arquitectura de datos", dihuava: "Despliegue local / Air-Gap", cloud: "Infraestructura en la nube" },
      ];
      return { ...row, ...esRows[idx] };
    }
    if (currentLocale === "fr") {
      const frRows = [
        { feature: "Traitement IA", dihuava: "Local / Sur appareil", cloud: "Basé sur le cloud" },
        { feature: "Dépendance internet", dihuava: "Conçu pour le fonctionnement hors ligne", cloud: "Nécessite généralement une connexion" },
        { feature: "Traitement vocal", dihuava: "Traitement local", cloud: "Peut utiliser un traitement distant" },
        { feature: "Langues", dihuava: "29+ Langues locales", cloud: "Dépend du fournisseur" },
        { feature: "Expérience Selfie", dihuava: "Composition locale", cloud: "Flux dépendants du cloud" },
        { feature: "Personnage animé", dihuava: "Suivi facial en temps réel", cloud: "Dépend de l'implémentation" },
        { feature: "Architecture de données", dihuava: "Déploiement local / Air-Gap", cloud: "Infrastructure cloud" },
      ];
      return { ...row, ...frRows[idx] };
    }
    return row;
  });

  const localizedProductSpecs = productSpecs.map((spec, i) => {
    if (currentLocale === "zh") {
      const zhSpecs = [
        { label: "核心 AI 架构", value: "完全本地端侧语音与对话平台" },
        { label: "支持语言", value: "29+ 全球语言" },
        { label: "语音与声音引擎", value: "语音识别、语音合成与声音克隆" },
        { label: "文档知识库 RAG", value: "PDF, TXT, CSV & Markdown" },
        { label: "产品目录系统", value: "商品推荐与屏幕同步讲解" },
        { label: "拍照与角色互动", value: "与数字人合影 + 实时卡通角色" },
      ];
      return { ...spec, ...zhSpecs[i] };
    }
    if (currentLocale === "ru") {
      const ruSpecs = [
        { label: "Базовая AI-архитектура", value: "Полностью локальная платформа речи и диалога" },
        { label: "Поддерживаемые языки", value: "29+ Языков мира" },
        { label: "Речевой движок", value: "Распознавание речи, синтез и клонирование голоса" },
        { label: "Локальный RAG", value: "PDF, TXT, CSV и Markdown" },
        { label: "Каталог товаров", value: "Рекомендации товаров и синхронизация с экраном" },
        { label: "Фото и персонаж", value: "Селфи с аватаром + Режим мультперсонажа" },
      ];
      return { ...spec, ...ruSpecs[i] };
    }
    if (currentLocale === "es") {
      const esSpecs = [
        { label: "Arquitectura de IA principal", value: "Plataforma de voz y conversación 100% local" },
        { label: "Idiomas soportados", value: "29+ Idiomas globales" },
        { label: "Motor de voz", value: "Reconocimiento, síntesis y clonación de voz" },
        { label: "RAG de documentos", value: "PDF, TXT, CSV y Markdown" },
        { label: "Catálogo de productos", value: "Recomendación de productos y sincronización con pantalla" },
        { label: "Foto y personaje", value: "Selfie con el Avatar + Personaje Animado" },
      ];
      return { ...spec, ...esSpecs[i] };
    }
    if (currentLocale === "fr") {
      const frSpecs = [
        { label: "Architecture IA principale", value: "Plateforme vocale et conversationnelle 100% locale sur appareil" },
        { label: "Langues prises en charge", value: "29+ Langues mondiales" },
        { label: "Moteur vocal", value: "Reconnaissance vocale, synthèse et clonage vocal" },
        { label: "RAG documentaire", value: "PDF, TXT, CSV et Markdown" },
        { label: "Catalogue de produits", value: "Recommandation de produits et synchronisation d'écran" },
        { label: "Photo et personnage", value: "Selfie avec l'Avatar + Personnage Animé" },
      ];
      return { ...spec, ...frSpecs[i] };
    }
    return spec;
  });

  const localizedFaqs = faqs.map((faq, idx) => {
    if (currentLocale === "zh") {
      const zhFaqs = [
        {
          q: "DIHUAVA 需要互联网连接吗？",
          a: "不需要。DIHUAVA 默认 100% 在端侧本地离线运行，同时提供可选的云端管理配置。完整的 29 种语言语音流水线、文档 RAG、产品目录、合影拍照与实时卡通渲染均完全在本地硬件上运行。",
        },
        {
          q: "端侧支持多少种语言？",
          a: "支持 29+ 种全球语言完全本地运行，包括英语、中文、印地语、西班牙语、阿拉伯语、法语、德语、日语、韩语、俄语等主要国际语言。",
        },
        {
          q: "访客的语音或对话数据会被传输到云端吗？",
          a: "零语音或对话数据传输至外部服务器。所有 AI 计算均在物理边缘硬件上本地完成，完全符合 GDPR、PDPA 及 HIPAA 隐私标准。",
        },
        {
          q: "我们可以克隆自己品牌的专属声音吗？",
          a: "可以。定制角色包可包含简短的参考音频录音。平台会自动在英文及多语言合成层克隆角色声音，无需人工训练步骤。",
        },
        {
          q: "什么是'与数字人合影 (Selfie With Avatar)'？",
          a: "访客可在屏幕上点击'合影'，立即与数字人并排拍照。端侧合成引擎可实时匹配面部尺寸与身高，应用相片滤镜，并生成 24 小时有效的二维码分享链接。",
        },
        {
          q: "什么是'实时卡通角色体验 (Live Character Experience)'？",
          a: "实时卡通角色体验是一种摄像头驱动的卡通变脸模式。摄像头精准追踪访客的面部动作（微笑、眨眼、转头），以超低延迟将卡通造型实时叠加到访客面部。",
        },
      ];
      return { ...faq, ...zhFaqs[idx] };
    }
    if (currentLocale === "ru") {
      const ruFaqs = [
        {
          q: "Требует ли DIHUAVA подключение к интернету?",
          a: "Нет. DIHUAVA по умолчанию работает 100% офлайн на устройстве. Весь речевой конвейер на 29 языках, RAG, каталог товаров и обработка фото выполняются локально.",
        },
        {
          q: "Сколько языков поддерживается локально?",
          a: "29+ языков мира полностью локально, включая английский, китайский, хинди, испанский, арабский, французский, немецкий, русский и другие международные языки.",
        },
        {
          q: "Передаются ли голосовые данные в облако?",
          a: "Нулевая передача голосовых данных на внешние серверы. Вся обработка происходит локально, обеспечивая полное соответствие стандартам GDPR, PDPA и HIPAA.",
        },
        {
          q: "Можно ли клонировать фирменный голос компании?",
          a: "Да. Вы можете загрузить короткие аудиозаписи, и платформа автоматически клонирует голос для использования в синтезе речи.",
        },
        {
          q: "Что такое 'Селфи с аватаром (Selfie With Avatar)'?",
          a: "Функция позволяет сделать фото рядом с цифровым аватаром. Система автоматически подгоняет размер лица, применяет фильтры и создает QR-код на 24 часа.",
        },
        {
          q: "Что такое 'Режим мультперсонажа (Live Character)'?",
          a: "Режим реального времени, в котором камера отслеживает движения лица посетителя (улыбка, моргание, повороты) и с ультранизкой задержкой накладывает маску персонажа.",
        },
      ];
      return { ...faq, ...ruFaqs[idx] };
    }
    if (currentLocale === "es") {
      const esFaqs = [
        {
          q: "¿DIHUAVA requiere conectividad a internet?",
          a: "No. DIHUAVA se ejecuta 100% sin conexión en el dispositivo por defecto. Todo el flujo de voz de 29 idiomas, RAG, catálogo y fotos se procesan en hardware local.",
        },
        {
          q: "¿Cuántos idiomas son compatibles en el dispositivo?",
          a: "29+ idiomas globales totalmente locales, incluidos inglés, mandarín, hindi, español, árabe, francés, alemán, japonés, coreano, ruso y otros idiomas internacionales.",
        },
        {
          q: "¿Se transmiten los datos de voz del visitante a la nube?",
          a: "Cero datos de voz o conversación se envían a servidores externos. Todo el procesamiento de IA ocurre localmente, garantizando el cumplimiento de GDPR, PDPA y HIPAA.",
        },
        {
          q: "¿Podemos clonar nuestra propia voz corporativa de marca?",
          a: "Sí. Los paquetes de avatar personalizados pueden incluir breves grabaciones de audio. La plataforma clona automáticamente la voz de la marca.",
        },
        {
          q: "¿Qué es 'Selfie con el Avatar'?",
          a: "Permite a los visitantes tocar Selfie en pantalla y tomarse una foto al instante junto al avatar. El motor ajusta el tamaño facial, aplica filtros y genera un código QR válido por 24 horas.",
        },
        {
          q: "¿Qué es 'Modo Personaje Animado'?",
          a: "Es un modo de cara animada en tiempo real. La cámara sigue los movimientos faciales del visitante (sonrisas, parpadeos, giros) y aplica la piel del personaje con ultra baja latencia.",
        },
      ];
      return { ...faq, ...esFaqs[idx] };
    }
    if (currentLocale === "fr") {
      const frFaqs = [
        {
          q: "DIHUAVA nécessite-t-il une connexion internet ?",
          a: "Non. DIHUAVA fonctionne 100% hors ligne sur l'appareil par défaut. Tout le traitement vocal en 29 langues, le RAG documentaire, le catalogue de produits et la composition photo s'exécutent localement.",
        },
        {
          q: "Combien de langues sont prises en charge sur l'appareil ?",
          a: "Plus de 29 langues mondiales totalement locales, dont l'anglais, le mandarin, l'hindi, l'espagnol, l'arabe, le français, l'alemand, le japonais, le coréen, le russe et les principales langues internationales.",
        },
        {
          q: "Les données vocales des visiteurs sont-elles transmises au cloud ?",
          a: "Zéro donnée vocale ou de conversation n'est envoyée vers des serveurs externes. Tout le traitement IA s'effectue localement, garantissant la conformité GDPR, PDPA et HIPAA.",
        },
        {
          q: "Pouvons-nous cloner notre propre voix de marque ?",
          a: "Oui. Les packages de persona personnalisés peuvent inclure de court enregistrements audio. La plateforme clone automatiquement la voix du persona sans étape manuelle.",
        },
        {
          q: "Qu'est-ce que 'Selfie avec l'Avatar' ?",
          a: "Permet aux visiteurs de toucher Selfie à l'écran et de prendre une photo à côté de l'avatar. Le moteur ajuste la taille du visage, applique des filtres et génère un lien QR de 24h.",
        },
        {
          q: "Qu'est-ce que le 'Mode Personnage Animé' ?",
          a: "Un mode visage cartoon en temps réel. La caméra suit les mouvements du visage du visiteur (sourires, clignements, mouvements de tête) et applique le skin avec une latence ultra-faible.",
        },
      ];
      return { ...faq, ...frFaqs[idx] };
    }
    return faq;
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[850px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href={lPath("/products")} className="hover:text-cyan-400 transition-colors">
              {currentLocale === "zh" ? "产品" : currentLocale === "ru" ? "Продукты" : currentLocale === "es" ? "Productos" : currentLocale === "fr" ? "Produits" : "Products"}
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">
              {currentLocale === "zh" ? "DIHUAVA 平台" : currentLocale === "ru" ? "Платформа DIHUAVA" : currentLocale === "es" ? "Plataforma DIHUAVA" : currentLocale === "fr" ? "Plateforme DIHUAVA" : "DIHUAVA Platform"}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  {currentLocale === "zh" ? "旗舰级端侧 AI 平台" : currentLocale === "ru" ? "Флагманская локальная AI-платформа" : currentLocale === "es" ? "Plataforma insignia de IA local" : currentLocale === "fr" ? "Plateforme d'IA locale phare" : "Flagship Local AI Platform"}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                {currentLocale === "zh" ? (
                  <>专为 <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">真实场景客户交互</span> 打造的 AI 数字人</>
                ) : currentLocale === "ru" ? (
                  <>Цифровые аватары AI для <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">реального взаимодействия с клиентами.</span></>
                ) : currentLocale === "es" ? (
                  <>Digital Humans de IA creados para la <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">interacción con clientes en el mundo real.</span></>
                ) : currentLocale === "fr" ? (
                  <>Humains numériques IA conçus pour <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">l'interaction client dans le monde réel.</span></>
                ) : (
                  <>AI Digital Humans Built for <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">Real-World Customer Interaction.</span></>
                )}
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                {currentLocale === "zh" ? (
                  <>DIHUAVA 是企业级 AI 数字人软件平台，赋能实时交互数字人自然沟通、理解企业知识库、支持多语言，并可在交互式终端、<Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI 全息舱</Link>及 <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D 空间显示器</Link>上完全端侧本地运行。</>
                ) : currentLocale === "ru" ? (
                  <>DIHUAVA — это корпоративная программная платформа AI Digital Human для интерактивных цифровых аватаров, которые естественно общаются, понимают вашу бизнес-базу знаний, говорят на многих языках и работают локально на интерактивных киосках, <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Box</Link> и <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Display</Link>.</>
                ) : currentLocale === "es" ? (
                  <>DIHUAVA es una plataforma de software empresarial de AI Digital Human que impulsa humanos digitales interactivos que se comunican con naturalidad, comprenden su conocimiento empresarial, hablan múltiples idiomas y se ejecutan localmente en quioscos interactivos, <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Boxes</Link> y <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Displays</Link>.</>
                ) : currentLocale === "fr" ? (
                  <>DIHUAVA est une plateforme logicielle entreprise d'AI Digital Human alimentant des humains numériques interactifs qui communiquent naturellement, comprennent vos connaissances d'entreprise, parlent plusieurs langues et s'exécutent localement sur des bornes interactives, des <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Boxes</Link> et des <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Displays</Link>.</>
                ) : (
                  <>DIHUAVA is an enterprise AI Digital Human software platform powering interactive digital humans that communicate naturally, understand your business knowledge, speak multiple languages, and run locally across interactive kiosks, <Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">AI Hologram Boxes</Link>, and <Link href={lPath("/products/spatial-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">3D Spatial Displays</Link>.</>
                )}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={lPath("/contact")}
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  {currentLocale === "zh" ? "预约 DIHUAVA 演示 →" : currentLocale === "ru" ? "Запросить демо DIHUAVA →" : currentLocale === "es" ? "Solicitar demo de DIHUAVA →" : currentLocale === "fr" ? "Demander une démo DIHUAVA →" : "Request DIHUAVA Demo →"}
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  {currentLocale === "zh" ? "下载技术文档 (PDF)" : currentLocale === "ru" ? "Скачать документацию (PDF)" : currentLocale === "es" ? "Descargar documentación (PDF)" : currentLocale === "fr" ? "Télécharger la documentation (PDF)" : "Download Documentation (PDF)"}
                </Link>
              </div>

              {/* Quick Feature Badges */}
              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🔒 100% 端侧物理隔离" : currentLocale === "ru" ? "🔒 100% Офлайн Air-Gap" : currentLocale === "es" ? "🔒 100% Local Air-Gap" : currentLocale === "fr" ? "🔒 100% Hors ligne Air-Gap" : "🔒 100% Offline Air-Gapped"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🌐 29+ 全球语言支持" : currentLocale === "ru" ? "🌐 29+ Языков мира" : currentLocale === "es" ? "🌐 29+ Idiomas globales" : currentLocale === "fr" ? "🌐 29+ Langues mondiales" : "🌐 29+ Global Languages"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "📸 与数字人合影" : currentLocale === "ru" ? "📸 Селфи с аватаром" : currentLocale === "es" ? "📸 Selfie con el Avatar" : currentLocale === "fr" ? "📸 Selfie avec l'Avatar" : "📸 Selfie With Avatar"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🎭 实时卡通变脸" : currentLocale === "ru" ? "🎭 Режим мультперсонажа" : currentLocale === "es" ? "🎭 Modo Personaje Animado" : currentLocale === "fr" ? "🎭 Mode Personnage Animé" : "🎭 Live Cartoon Mode"}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
                  {currentLocale === "zh" ? "🧠 脑分身 (开发中)" : currentLocale === "ru" ? "🧠 Brain Clone (В разработке)" : currentLocale === "es" ? "🧠 Clon de Cerebro (En dev)" : currentLocale === "fr" ? "🧠 Clone de Cerveau (En dév)" : "🧠 Brain Clone (In Dev)"}
                </span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-neutral-950/80 p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src="/products/digital-humans/digital-human-dashboard.jpg"
                    alt="DIHUAVA AI Digital Human Platform Dashboard"
                    fill
                    priority
                    className="object-contain w-full h-full bg-neutral-950"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* System Overlay Status */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/80 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400">● DIHUAVA ENTERPRISE AI ENGINE</span>
                      <span className="text-emerald-400">
                        {currentLocale === "zh" ? "状态：100% 本地运行" : currentLocale === "ru" ? "СТАТУС: 100% ЛОКАЛЬНО" : currentLocale === "es" ? "ESTADO: 100% LOCAL" : currentLocale === "fr" ? "STATUT : 100% LOCAL" : "STATUS: 100% LOCAL"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-300">
                      {currentLocale === "zh" ? "端侧语音、声音克隆、PDF RAG 与照片合成已激活" : currentLocale === "ru" ? "Локальная речь, клонирование голоса, PDF RAG и фотокомпозитинг активны" : currentLocale === "es" ? "Voz en dispositivo, clonación de voz, RAG de PDF y composición fotográfica activados" : currentLocale === "fr" ? "Vocal sur appareil, clonage vocal, RAG PDF et composition photo actifs" : "On-Device Speech, Voice Cloning, PDF RAG & Photo Compositing Active"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS COUNTER BAR */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-12 border-b border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">29+</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">
                {currentLocale === "zh" ? "全球语言" : currentLocale === "ru" ? "Языков мира" : currentLocale === "es" ? "Idiomas globales" : currentLocale === "fr" ? "Langues mondiales" : "Global Languages"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-center backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">100%</p>
              <p className="mt-1 text-xs text-gray-300 font-mono uppercase tracking-wider">
                {currentLocale === "zh" ? "端侧本地处理" : currentLocale === "ru" ? "Локальная обработка" : currentLocale === "es" ? "Procesamiento en dispositivo" : currentLocale === "fr" ? "Traitement sur appareil" : "On-Device Processing"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL LAYERS SECTION */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "系统架构" : currentLocale === "ru" ? "Архитектура системы" : currentLocale === "es" ? "Arquitectura del sistema" : currentLocale === "fr" ? "Architecture système" : "System Architecture"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "驱动 Dihuava 的八大核心技术" : currentLocale === "ru" ? "Восемь ключевых технологий DIHUAVA" : currentLocale === "es" ? "Ocho tecnologías clave que impulsan Dihuava" : currentLocale === "fr" ? "Huit technologies clés alimentant Dihuava" : "Eight Core Technologies Powering Dihuava"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "Dihuava 采用集成的本地优先架构，对话 AI、渲染、多语言语音、视觉与硬件交互在物理边缘工作站上高效协同。" : currentLocale === "ru" ? "DIHUAVA работает по интегративной локальной модели, где разговорный AI, рендеринг, многоязычная речь, зрение и аппаратное взаимодействие функционируют локально." : currentLocale === "es" ? "Dihuava opera mediante un modelo integrado local donde la IA conversacional, el renderizado, el habla multilingüe, la visión y la interacción de hardware funcionan localmente." : currentLocale === "fr" ? "Dihuava fonctionne via un modèle intégré axé sur le local où l'IA conversationnelle, le rendu, la parole multilingue, la vision et l'interaction matérielle fonctionnent harmonieusement sur des stations de travail physiques." : "Dihuava operates via an integrated local-first model where conversational AI, rendering, multilingual speech, vision, and hardware interaction function harmoniously on physical edge workstations."}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {localizedArchPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] mb-6">
                    <pillar.icon className="w-7 h-7 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-gray-300">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
                  PILLAR {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DIHUAVA WORKS SECTION */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "简单 4 步流程" : currentLocale === "ru" ? "Простой 4-шаговый процесс" : currentLocale === "es" ? "Proceso simple de 4 pasos" : currentLocale === "fr" ? "Processus simple en 4 étapes" : "Simple 4-Step Process"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "Dihuava 工作原理" : currentLocale === "ru" ? "Как работает DIHUAVA" : currentLocale === "es" ? "Cómo funciona Dihuava" : currentLocale === "fr" ? "Comment fonctionne Dihuava" : "How Dihuava Works"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "无缝的端到端边缘流水线，无需云端依赖即可提供拟人化交互。" : currentLocale === "ru" ? "Сквозной локальный конвейер, обеспечивающий естественноподобное взаимодействие без зависимости от облака." : currentLocale === "es" ? "Un flujo continuo de extremo a extremo que impulsa interacciones humanas sin dependencia de la nube." : currentLocale === "fr" ? "Un pipeline d'extrémité à extrémité fluide alimentant des interactions humaines sans dépendance au cloud." : "A seamless end-to-end edge pipeline powering human-like interactions without cloud dependencies."}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {localizedHowItWorks.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-xl">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-300">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>{item.badge}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PLATFORM SUBSYSTEMS GRID (7 MODULES) */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "核心平台子系统" : currentLocale === "ru" ? "Ключевые подсистемы платформы" : currentLocale === "es" ? "Subsistemas principales de la plataforma" : currentLocale === "fr" ? "Sous-systèmes principaux de la plateforme" : "Core Platform Subsystems"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "7 大智能模块。1 套集成端侧 AI。" : currentLocale === "ru" ? "7 Интеллектуальных модулей. 1 Локальный AI." : currentLocale === "es" ? "7 módulos inteligentes. 1 IA local integrada." : currentLocale === "fr" ? "7 modules intelligents. 1 IA locale intégrée." : "7 Intelligent Modules. 1 Integrated Local AI."}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "数字人理解、沟通、推荐与交互所需的一切功能，均在端侧边缘本地运行。" : currentLocale === "ru" ? "Все, что нужно цифровому аватару для понимания, общения и рекомендаций — локально на устройстве." : currentLocale === "es" ? "Todo lo que su humano digital necesita para comprender, comunicarse, recomendar e interactuar, ejecutándose localmente en el dispositivo." : currentLocale === "fr" ? "Tout ce dont votre humain numérique a besoin pour comprendre, communiquer, recommander et interagir — s'exécutant localement sur l'appareil." : "Everything your digital human needs to understand, communicate, recommend, and interact — running locally on the edge."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {localizedModules.map((module) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <module.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-300 font-mono">
                      {module.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {module.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-cyan-400">
                    {module.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {module.description}
                  </p>
                </div>

                <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
                  {module.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-cyan-400">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {module.featureUrl && (
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={lPath(module.featureUrl)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:underline font-mono"
                    >
                      <span>{currentLocale === "zh" ? "查看深度规格" : currentLocale === "ru" ? "Подробные характеристики" : currentLocale === "es" ? "Ver especificaciones detalladas" : currentLocale === "fr" ? "Voir les spécifications détaillées" : "View Deep Dive Specs"}</span>
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT 1: INTERACTIVE VISITOR EXPERIENCES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "次世代访客互动体验" : currentLocale === "ru" ? "Интерактив нового поколения" : currentLocale === "es" ? "Compromiso de visitantes de última generación" : currentLocale === "fr" ? "Engagement visiteur de nouvelle génération" : "Next-Gen Visitor Engagement"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "与数字人合影与实时变脸体验" : currentLocale === "ru" ? "Селфи и режим мультперсонажа" : currentLocale === "es" ? "Experiencias de Selfie y Personaje Animado" : currentLocale === "fr" ? "Expériences Selfie & Personnage Animé" : "Selfie & Live Character Experiences"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "突破传统语音对话，通过端侧即时合影拍照与实时面部卡通变脸提升线下场景吸引力。" : currentLocale === "ru" ? "Повышайте вовлеченность гостей на площадке благодаря мгновенным селфи и трекингу лица." : currentLocale === "es" ? "Eleve el compromiso en su espacio físico con fotografía instantánea en el dispositivo y deformación facial animada en tiempo real." : currentLocale === "fr" ? "Élevez l'engagement dans vos locaux au-delà de la parole avec la photographie instantanée sur appareil et la déformation cartoon en temps réel." : "Elevate physical venue engagement beyond speech with instant on-device photography and real-time facial cartoon warping."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Selfie Feature Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <Camera className="w-7 h-7 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {currentLocale === "zh" ? "端侧照片合成" : currentLocale === "ru" ? "ЛОКАЛЬНЫЙ КОМПОЗИТИНГ" : currentLocale === "es" ? "COMPOSICIÓN EN DISPOSITIVO" : currentLocale === "fr" ? "COMPOSITION SUR APPAREIL" : "ON-DEVICE COMPOSITING"}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {currentLocale === "zh" ? "与数字人合影" : currentLocale === "ru" ? "Селфи с аватаром" : currentLocale === "es" ? "Selfie con el Avatar" : currentLocale === "fr" ? "Selfie avec l'Avatar" : "Selfie With Avatar"}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  {currentLocale === "zh" ? (
                    <>访客在终端上点击 <strong className="text-white">合影</strong>，即可与 AI 数字人并排拍照。系统在不到一秒（约 300–400ms）内进行确定性端侧面部缩放与身高对齐，生成逼真的合影照片。</>
                  ) : currentLocale === "ru" ? (
                    <>Посетители нажимают <strong className="text-white">Селфи</strong> на киоске, чтобы сфотографироваться рядом с AI-аватором. Менее чем за секунду (~300–400 мс) система выполняет локальное масштабирование лица для создания фото.</>
                  ) : currentLocale === "es" ? (
                    <>Los visitantes tocan <strong className="text-white">Selfie</strong> en el quiosco para posar junto al avatar de IA. En menos de un segundo (~300–400 ms), el sistema realiza la coincidencia de escala facial en el dispositivo para producir una foto realista.</>
                  ) : currentLocale === "fr" ? (
                    <>Les visiteurs touchent <strong className="text-white">Selfie</strong> sur la borne pour poser à côté de l'avatar IA. En moins d'une seconde (~300–400 ms), le système effectue la mise à l'échelle faciale sur l'appareil pour produire une photo réaliste.</>
                  ) : (
                    <>Visitors tap <strong className="text-white">Selfie</strong> on the kiosk to pose beside the AI avatar. In under a second (~300–400ms), the system performs deterministic on-device face scaling and height matching to produce a realistic composite photo.</>
                  )}
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "即时相片滤镜：" : currentLocale === "ru" ? "Мгновенные фотофильтры:" : currentLocale === "es" ? "Filtros fotográficos instantáneos:" : currentLocale === "fr" ? "Filtres photographiques instantanés :" : "Instant Photographic Filters:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "写实（默认）、原图、黑白、鲜艳、暖色与冷色。" : currentLocale === "ru" ? "Реалистичный (по умолчанию), Оригинал, Ч/Б, Яркий, Теплый и Холодный." : currentLocale === "es" ? "Realista (predeterminado), Original, Blanco y negro, Vívido, Cálido y Frío." : currentLocale === "fr" ? "Réaliste (par défaut), Original, Noir & blanc, Éclatant, Chaud et Froid." : "Realistic (default), Original, Black & White, Vivid, Warm, and Cool."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "二维码手机分享：" : currentLocale === "ru" ? "QR-код для скачивания на телефон:" : currentLocale === "es" ? "Compartir por código QR:" : currentLocale === "fr" ? "Partage par code QR :" : "QR Code Phone Sharing:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "访客扫描屏幕上的二维码下载照片。分享链接在 24 小时内自动过期，保护隐私安全。" : currentLocale === "ru" ? "Посетители сканируют QR-код на экране для скачивания фото. Ссылки автоматически удаляются через 24 часа." : currentLocale === "es" ? "Los visitantes escanean un código QR para descargar su foto. Los enlaces caducan automáticamente en 24 horas." : currentLocale === "fr" ? "Les visiteurs scannent un code QR sur l'écran pour télécharger leur photo. Les liens expirent automatiquement après 24 heures." : "Visitors scan an on-screen QR code to download their photo. Links automatically expire in 24 hours, keeping data private."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>{currentLocale === "zh" ? "端侧极速处理" : currentLocale === "ru" ? "БЫСТРАЯ ОБРАБОТКА НА УСТРОЙСТВЕ" : currentLocale === "es" ? "PROCESAMIENTO RÁPIDO EN DISPOSITIVO" : currentLocale === "fr" ? "TRAITEMENT RAPIDE SUR APPAREIL" : "FAST ON-DEVICE PROCESSING"}</span>
                <span className="text-emerald-400">{currentLocale === "zh" ? "24小时自动删除" : currentLocale === "ru" ? "АВТОУДАЛЕНИЕ ЧЕРЕЗ 24 Ч" : currentLocale === "es" ? "ELIMINACIÓN AUTOMÁTICA EN 24 HORAS" : currentLocale === "fr" ? "SUPPRESSION AUTOMATIQUE 24H" : "24-HR AUTO DELETE"}</span>
              </div>
            </div>

            {/* Live Character Feature Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <Sparkles className="w-7 h-7 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {currentLocale === "zh" ? "实时面部追踪" : currentLocale === "ru" ? "ТРЕКИНГ ЛИЦА В РЕАЛЬНОМ ВРЕМЕНИ" : currentLocale === "es" ? "SEGUIMIENTO FACIAL EN TIEMPO REAL" : currentLocale === "fr" ? "SUIVI FACIAL EN TEMPS RÉEL" : "REAL-TIME FACE TRACKING"}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {currentLocale === "zh" ? "实时卡通角色体验" : currentLocale === "ru" ? "Режим мультперсонажа" : currentLocale === "es" ? "Modo Personaje Animado" : currentLocale === "fr" ? "Expérience Personnage Animé" : "Live Character Experience"}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  {currentLocale === "zh" ? (
                    <>基于摄像头的实时卡通渲染模式，精准追踪访客面部特征，以<strong className="text-white">超低延迟</strong>将卡通造型叠加到实时画面中。</>
                  ) : currentLocale === "ru" ? (
                    <>Режим рендеринга мультяшного персонажа в реальном времени, когда камера отслеживает лицо посетителя с <strong className="text-white">ультранизкой задержкой</strong>.</>
                  ) : currentLocale === "es" ? (
                    <>Un modo de renderizado de personajes en tiempo real donde la cámara sigue el rostro del visitante con <strong className="text-white">ultra baja latencia</strong>.</>
                  ) : currentLocale === "fr" ? (
                    <>Un mode de rendu de personnage en temps réel où la caméra suit le visage du visiteur avec une <strong className="text-white">latence ultra-faible</strong>.</>
                  ) : (
                    <>A real-time cartoon/character rendering mode where the camera tracks a visitor's face and warps a stylized character design directly onto their live reflection at <strong className="text-white">ultra-low latency</strong>.</>
                  )}
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "动态表情形变：" : currentLocale === "ru" ? "Динамическая мимика:" : currentLocale === "es" ? "Deformación dinámica de expresiones:" : currentLocale === "fr" ? "Déformation dynamique des expressions :" : "Dynamic Expression Deformation:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "当访客微笑、眨眼或转头时，卡通皮肤完全同步延伸与变动。" : currentLocale === "ru" ? "При улыбке, моргании или повороте головы персонаж мгновенно повторяет движения." : currentLocale === "es" ? "Cuando el visitante sonríe, parpadea o gira la cabeza, la piel del personaje animado se mueve en perfecta sincronía." : currentLocale === "fr" ? "Lorsque le visiteur sourit, cligne des yeux ou tourne la tête, la peau du personnage animé bouge en parfaite synchronisation." : "As the visitor smiles, blinks, or turns their head, the cartoon character skin stretches and moves in perfect sync."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs">
                    <span className="font-semibold text-cyan-300">
                      {currentLocale === "zh" ? "零代码角色库：" : currentLocale === "ru" ? "Библиотека персонажей без кода:" : currentLocale === "es" ? "Biblioteca de personajes sin código:" : currentLocale === "fr" ? "Bibliothèque de personnages sans code :" : "No-Code Character Library:"}
                    </span>
                    <p className="mt-1 text-gray-400">
                      {currentLocale === "zh" ? "只需将新的角色头部资源放入库文件夹中，即可无需修改代码快速拓展角色。" : currentLocale === "ru" ? "Просто добавьте файлы персонажей в папку библиотеки без необходимости пересборки кода." : currentLocale === "es" ? "Añada nuevos recursos de personajes a la carpeta de la biblioteca para ampliar las opciones sin actualizar código." : currentLocale === "fr" ? "Déposez de nouveaux éléments de personnages dans le dossier pour élargir les choix sans mise à jour de code." : "Drop new character head assets into the library folder to instantly expand choices without software code updates."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>{currentLocale === "zh" ? "低延迟" : currentLocale === "ru" ? "НИЗКАЯ ЗАДЕРЖКА" : currentLocale === "es" ? "BAJA LATENCIA" : currentLocale === "fr" ? "FAIBLE LATENCE" : "LOW-LATENCY"}</span>
                <span className="text-emerald-400">{currentLocale === "zh" ? "实时面部网格" : currentLocale === "ru" ? "СЕТКА ЛИЦА В РЕАЛЬНОМ ВРЕМЕНИ" : currentLocale === "es" ? "MALLA FACIAL EN VIVO" : currentLocale === "fr" ? "MAILLAGE FACIAL EN DIRECT" : "LIVE FACE MESH"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT 2: TIERED VOICE SYNTHESIS & MULTILINGUAL */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "语音架构" : currentLocale === "ru" ? "Архитектура речи" : currentLocale === "es" ? "Arquitectura de voz" : currentLocale === "fr" ? "Architecture vocale" : "Voice Architecture"}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {currentLocale === "zh" ? "覆盖 29+ 语言的自然语音交互" : currentLocale === "ru" ? "Естественная речь на 29+ языках" : currentLocale === "es" ? "Voz natural en 29+ idiomas" : currentLocale === "fr" ? "Voix naturelle dans plus de 29 langues" : "Natural Voice Across 29+ Languages"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {currentLocale === "zh" ? "DIHUAVA 提供自然、多语言的语音交互，具备端侧语音处理、区域语言支持与可定制的语音体验。" : currentLocale === "ru" ? "DIHUAVA обеспечивает естественное многоязычное голосовое взаимодействие с локальной обработкой речи." : currentLocale === "es" ? "DIHUAVA ofrece una interacción de voz multilingüe y natural con procesamiento de voz local y soporte de idiomas regionales." : currentLocale === "fr" ? "DIHUAVA offre une interaction vocale multilingue et naturelle avec traitement local de la parole et gestion des langues régionales." : "DIHUAVA delivers natural, multilingual voice interaction with local speech processing, regional language support, and customizable voice experiences."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {localizedVoiceCaps.map((tier, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl hover:border-cyan-400/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 font-mono mb-4">
                    {tier.speed}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                  <p className="text-sm leading-6 text-gray-300">{tier.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
                  FEATURE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONA MANAGEMENT & ACOUSTIC PROFILES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Persona Types */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
                {currentLocale === "zh" ? "角色管理" : currentLocale === "ru" ? "Управление персонажами" : currentLocale === "es" ? "Gestión de personas" : currentLocale === "fr" ? "Gestion des personas" : "Persona Management"}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {currentLocale === "zh" ? "为各行业定制 AI 数字人" : currentLocale === "ru" ? "Персонализированные AI-аватары для отраслей" : currentLocale === "es" ? "Digital Humans de IA personalizados para cada industria" : currentLocale === "fr" ? "Humains numériques IA personnalisés pour chaque industrie" : "Custom AI Digital Humans for Every Industry"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">
                {currentLocale === "zh" ? "企业可根据行业需求配置数字人的个性、沟通风格、语音行为、微表情姿态及品牌标识。" : currentLocale === "ru" ? "Предприятия настраивают цифровых аватаров с учетом отраслевой специфики, стиля общения и бренда." : currentLocale === "es" ? "Las organizaciones configuran humanos digitales con personalidades específicas, estilos de comunicación y marca corporativa." : currentLocale === "fr" ? "Les organisations configurent des humains numériques avec des personnalités, styles de communication et marque d'entreprise." : "Organizations configure digital humans with industry-specific personalities, communication styles, voice behavior, micro-gestures, and corporate branding."}
              </p>

              <div className="mt-8 space-y-4">
                {localizedPersonaProfiles.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-neutral-950 p-4 backdrop-blur-md"
                  >
                    <span className="text-2xl mt-0.5">{p.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-white">{p.title}</h4>
                      <p className="mt-1 text-xs leading-5 text-gray-400">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Custom AI Persona */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-cyan-500/30 bg-neutral-950 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {currentLocale === "zh" ? "专属定制体验" : currentLocale === "ru" ? "ИНДИВИДУАЛЬНАЯ НАСТРОЙКА" : currentLocale === "es" ? "EXPERIENCIA A MEDIDA" : currentLocale === "fr" ? "EXPÉRIENCE SUR MESURE" : "TAILORED EXPERIENCE"}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {currentLocale === "zh" ? "定制 AI 角色" : currentLocale === "ru" ? "Кастомный AI-аватар" : currentLocale === "es" ? "Persona de IA personalizada" : currentLocale === "fr" ? "Persona IA personnalisé" : "Custom AI Persona"}
                </h3>

                <div className="mt-6 space-y-4">
                  {localizedCustomPersonaFeatures.map((feature, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <h4 className="text-sm font-semibold text-cyan-300 font-mono">{feature.title}</h4>
                      <p className="mt-1 text-xs text-gray-400">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP INNOVATION: VIRTUAL TRY-ON */}
      <section className="relative overflow-hidden bg-black px-6 py-20 border-b border-white/10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-neutral-950 to-black p-8 md:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 font-mono mb-4">
                {currentLocale === "zh" ? "🔬 研发路线图规划中" : currentLocale === "ru" ? "🔬 В АКТИВНОЙ РАЗРАБОТКЕ" : currentLocale === "es" ? "🔬 EN HOJA DE RUTA DE DESARROLLO" : currentLocale === "fr" ? "🔬 SUR LA FEUILLE DE ROUTE DE DÉVELOPPEMENT" : "🔬 IN ACTIVE DEVELOPMENT ROADMAP"}
              </div>
              <h3 className="text-3xl font-bold text-white">
                {currentLocale === "zh" ? "Virtual Try-On (虚拟试穿功能)" : currentLocale === "ru" ? "Virtual Try-On (Виртуальная примерка)" : currentLocale === "es" ? "Virtual Try-On (Prueba virtual de ropa)" : currentLocale === "fr" ? "Virtual Try-On (Essayage virtuel)" : "Virtual Try-On (Garment Fitting)"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300 max-w-2xl">
                {currentLocale === "zh" ? "正在研发的实时服装渲染功能，可让顾客在镜前实时预览服装、时尚及奢侈配饰的拟真试穿效果。" : currentLocale === "ru" ? "Активное направление R&D для отображения одежды и аксессуаров на зеркале в реальном времени." : currentLocale === "es" ? "Línea de I+D activa que evalúa el renderizado de prendas en tiempo real para visualizar ropa y accesorios en tiempo real." : currentLocale === "fr" ? "Projet R&D actif évaluant le rendu de vêtements en temps réel pour permettre aux clients de visualiser les vêtements et accessoires en temps réel." : "An active R&D workstream evaluating real-time garment rendering to allow shoppers to visualize retail apparel, fashion, and luxury accessories digitally overlaid on their reflection in real time."}
              </p>
            </div>
            <Link
              href={lPath("/contact")}
              className="shrink-0 rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold text-black hover:bg-cyan-400 transition-colors uppercase tracking-wider"
            >
              {currentLocale === "zh" ? "咨询路线图 →" : currentLocale === "ru" ? "Запросить планы →" : currentLocale === "es" ? "Consultar plan →" : currentLocale === "fr" ? "Consulter la feuille de route →" : "Inquire Roadmap →"}
            </Link>
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES: DIHUAVA VS CLOUD AI */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "为什么选择 DIHUAVA" : currentLocale === "ru" ? "Почему DIHUAVA" : currentLocale === "es" ? "Por qué DIHUAVA" : currentLocale === "fr" ? "Pourquoi DIHUAVA" : "Why DIHUAVA"}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {currentLocale === "zh" ? "为什么企业选择 DIHUAVA" : currentLocale === "ru" ? "Почему компании выбирают DIHUAVA" : currentLocale === "es" ? "Por qué las empresas eligen DIHUAVA" : currentLocale === "fr" ? "Pourquoi les entreprises choisissent DIHUAVA" : "Why Businesses Choose DIHUAVA"}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-neutral-950/90 shadow-2xl backdrop-blur-xl">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-cyan-950/60 font-mono text-xs uppercase text-cyan-300 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">{currentLocale === "zh" ? "功能特性" : currentLocale === "ru" ? "Функционал" : currentLocale === "es" ? "Característica" : currentLocale === "fr" ? "Fonctionnalité" : "Feature"}</th>
                  <th className="px-6 py-4 text-cyan-400">{currentLocale === "zh" ? "DIHUAVA 本地平台" : currentLocale === "ru" ? "Локальная платформа DIHUAVA" : currentLocale === "es" ? "Plataforma local DIHUAVA" : currentLocale === "fr" ? "Plateforme locale DIHUAVA" : "DIHUAVA Local Platform"}</th>
                  <th className="px-6 py-4 text-gray-400">{currentLocale === "zh" ? "传统云端架构" : currentLocale === "ru" ? "Типичная облачная архитектура" : currentLocale === "es" ? "Arquitectura en la nube típica" : currentLocale === "fr" ? "Architecture cloud typique" : "Typical Cloud Architecture"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-sans">
                {localizedComparisonTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-4 font-semibold text-cyan-300">{row.dihuava}</td>
                    <td className="px-6 py-4 text-gray-400">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TECHNICAL & PRODUCT SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "平台技术规格" : currentLocale === "ru" ? "Технические характеристики" : currentLocale === "es" ? "Especificaciones de la plataforma" : currentLocale === "fr" ? "Spécifications de la plateforme" : "Platform Specifications"}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {currentLocale === "zh" ? "DIHUAVA 企业级产品规格" : currentLocale === "ru" ? "Характеристики DIHUAVA Enterprise" : currentLocale === "es" ? "Especificaciones de DIHUAVA Enterprise" : currentLocale === "fr" ? "Spécifications produit DIHUAVA Enterprise" : "DIHUAVA Enterprise Product Specs"}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/80 backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {localizedProductSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-2 px-6 py-4.5 sm:grid-cols-3 sm:gap-4 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-cyan-300 font-mono">
                    {spec.label}
                  </span>
                  <span className="text-sm text-gray-300 sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {currentLocale === "zh" ? "常见解答" : currentLocale === "ru" ? "Ответы на вопросы" : currentLocale === "es" ? "Preguntas frecuentes" : currentLocale === "fr" ? "Questions fréquentes" : "Product Insights"}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              {currentLocale === "zh" ? "常见问题解答" : currentLocale === "ru" ? "Часто задаваемые вопросы" : currentLocale === "es" ? "Preguntas frecuentes" : currentLocale === "fr" ? "Foire aux questions" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="space-y-4">
            {localizedFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-cyan-400 font-mono text-lg ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm leading-7 text-gray-300 border-t border-white/10 mt-2 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SINGLE CALL TO ACTION SECTION */}
      <CTA
        badgeText={
          currentLocale === "zh"
            ? "构建未来 AI 交互"
            : currentLocale === "ru"
            ? "Создавайте будущее с AI"
            : currentLocale === "es"
            ? "Construya el futuro con IA"
            : currentLocale === "fr"
            ? "Construisez l'avenir avec l'IA"
            : "Build the Future with AI"
        }
        title={
          currentLocale === "zh"
            ? "准备好部署您的"
            : currentLocale === "ru"
            ? "Готовы развернуть вашего"
            : currentLocale === "es"
            ? "¿Listo para desplegar su"
            : currentLocale === "fr"
            ? "Prêt à déployer votre"
            : "Ready to Deploy Your"
        }
        highlightTitle={
          currentLocale === "zh"
            ? "AI 数字人了吗？"
            : currentLocale === "ru"
            ? "AI-аватара?"
            : currentLocale === "es"
            ? "IA Digital Human?"
            : currentLocale === "fr"
            ? "IA Digital Human ?"
            : "AI Digital Human?"
        }
        description={
          currentLocale === "zh"
            ? "为您的零售门店、企业前台、医疗机构或公共场所带来 29+ 多语言、私密且互动的 AI 体验。"
            : currentLocale === "ru"
            ? "Внедрите многоязычные, защищенные и интерактивные AI-аватары в ваш бизнес, ритейл или медицинский центр."
            : currentLocale === "es"
            ? "Lleve experiencias de IA multilingües, privadas e interactivas a su espacio comercial, empresa, centro de salud o espacio público."
            : currentLocale === "fr"
            ? "Apportez des expériences IA multilingues, privées et interactives à votre espace de vente, entreprise, établissement de santé ou lieu public."
            : "Bring 29+ multilingual, private, and interactive AI experiences to your retail space, corporate environment, healthcare facility, or public venue."
        }
        primaryButtonText={
          currentLocale === "zh"
            ? "预约演示"
            : currentLocale === "ru"
            ? "Забронировать демо"
            : currentLocale === "es"
            ? "Reservar una demo"
            : currentLocale === "fr"
            ? "Réserver une démo"
            : "Book a Demo"
        }
        primaryButtonHref="/contact"
        secondaryButtonText={
          currentLocale === "zh"
            ? "下载产品规格书"
            : currentLocale === "ru"
            ? "Скачать спецификацию"
            : currentLocale === "es"
            ? "Descargar ficha del producto"
            : currentLocale === "fr"
            ? "Télécharger la fiche produit"
            : "Download Product Datasheet"
        }
        secondaryButtonHref="/contact/download-center"
      />
      <Footer />
    </main>
  );
}
