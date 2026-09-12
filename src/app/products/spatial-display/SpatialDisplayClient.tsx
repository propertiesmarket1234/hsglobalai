"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Maximize,
  Eye,
  Target,
  Zap,
  ShoppingBag,
  Building2,
  Stethoscope,
  GraduationCap,
  Castle,
  HelpCircle,
  CheckCircle2,
  Monitor,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const spatialFeatures = [
  {
    title: "Ultra-Slim 6 cm Profile & 4K Ultra HD",
    description:
      "Engineered with an ultra-thin 6 cm depth profile featuring a high-precision 4K Ultra HD touch screen panel for true volumetric spatial depth.",
    icon: Maximize,
    badge: "6 cm Ultra-Slim 4K",
  },
  {
    title: "Volumetric 3D Visuals",
    description:
      "Advanced lenticular light-field spatial optics enabling natural 3D depth perception without requiring specialized wearables or headsets.",
    icon: Eye,
    badge: "3D Spatial Optics",
  },
  {
    title: "Real-Time Optical Eye Tracking",
    description:
      "High-speed precision camera sensors continuously track viewer eye position, dynamically rendering perspective shifts for crisp, stereoscopic 3D clarity from any angle.",
    icon: Target,
    badge: "Eye Tracking AI",
  },
  {
    title: "DIHUAVA AI Integration",
    description:
      "Seamlessly connects with the DIHUAVA platform to deliver interactive AI Digital Humans, conversational experiences, and 3D content in true spatial depth.",
    icon: Zap,
    badge: "Interactive Avatars",
  },
];

const definitionPoints = [
  {
    title: "Immersive Visual Display",
    description:
      "Delivers realistic 3D volumetric visual depth perception directly to viewer eyes without requiring specialized glasses or AR/VR headsets.",
    icon: Eye,
  },
  {
    title: "3D & Spatial Presentation",
    description:
      "Presents products, architectural models, and graphics with true spatial depth, turning 2D visual media into engaging stereoscopic assets.",
    icon: Layers,
  },
  {
    title: "Interactive Experience",
    description:
      "Combines a responsive multi-touch glass panel with real-time optical eye-tracking sensors to adapt perspective as viewers move.",
    icon: Target,
  },
  {
    title: "AI Digital Human Integration",
    description:
      "Serves as an immersive physical stage for DIHUAVA AI Digital Human avatars to converse with visitors in real-time.",
    icon: Zap,
  },
  {
    title: "Enterprise & Visitor Engagement",
    description:
      "Engineered for high-traffic physical customer environments to transform passive signage into active engagement touchpoints.",
    icon: Building2,
  },
];

const spatialIndustries = [
  {
    title: "Retail & Shopping",
    category: "Commercial Showcase",
    description:
      "Interactive product visualization, guided shopping experiences, and 3D luxury product demonstrations.",
    link: "/industries/retail",
    icon: ShoppingBag,
  },
  {
    title: "Corporate & Enterprise",
    category: "Lobby & Reception",
    description:
      "Interactive reception desks, building directory assistance, executive presentations, and visitor onboarding.",
    link: "/industries/corporate",
    icon: Building2,
  },
  {
    title: "Healthcare & Clinics",
    category: "Patient Guidance",
    description:
      "Patient information assistance, hospital department wayfinding, and interactive medical education.",
    link: "/industries/healthcare",
    icon: Stethoscope,
  },
  {
    title: "Education & Training",
    category: "Interactive Learning",
    description:
      "STEM learning demonstrations, complex 3D model exploration, and immersive training environments.",
    link: "/industries/education",
    icon: GraduationCap,
  },
  {
    title: "Hospitality & Tourism",
    category: "Visitor Services",
    description:
      "Hotel concierge assistance, regional destination exploration, and interactive cultural storytelling.",
    link: "/industries/tourism",
    icon: Castle,
  },
  {
    title: "Museums & Public Spaces",
    category: "Exhibition Docent",
    description:
      "Interactive exhibit storytelling, public information kiosks, and high-impact visitor engagement.",
    link: "/industries/tourism",
    icon: HelpCircle,
  },
];

const businessValues = [
  {
    title: "Attract Foot Traffic & Visitor Attention",
    description:
      "Captures visual attention in busy retail stores, trade shows, and lobbies using glasses-free 3D spatial visual impact.",
    icon: Sparkles,
  },
  {
    title: "Present Complex Products Visually",
    description:
      "Showcases intricate 3D product designs, internal component breakdowns, and architectural layouts in volumetric detail.",
    icon: Layers,
  },
  {
    title: "Explain Information Interactively",
    description:
      "Replaces static display screens with touch-responsive and voice-guided conversational information delivery.",
    icon: Zap,
  },
  {
    title: "Elevate Visitor Engagement",
    description:
      "Creates memorable physical interactions that increase visitor dwell time and strengthen brand confidence.",
    icon: CheckCircle2,
  },
  {
    title: "Connect AI Digital Humans to Physical Spaces",
    description:
      "Provides a physical volumetric stage for DIHUAVA AI Digital Humans to greet visitors, answer questions, and guide customers.",
    icon: Monitor,
  },
];

const comparisonData = [
  {
    feature: "Visual Depth & Presentation",
    conventional: "Flat 2D image output; single focal plane view",
    spatial: "Volumetric 3D spatial depth perception without specialized glasses",
  },
  {
    feature: "Viewer Interaction",
    conventional: "Passive viewing or basic 2D touch menu navigation",
    spatial: "Multi-touch glass surface paired with real-time optical eye-tracking perspective shifts",
  },
  {
    feature: "AI Avatar Integration",
    conventional: "Standard 2D flat video avatar overlay",
    spatial: "Immersive 3D visual stage rendering for lifelike DIHUAVA AI Digital Humans",
  },
  {
    feature: "Deployment Environments",
    conventional: "Standard digital signage, broadcast screens, and basic video loops",
    spatial: "High-impact retail showcases, corporate lobbies, healthcare guidance, and exhibition centers",
  },
  {
    feature: "Perspective Adaptation",
    conventional: "Static viewing angle; visual perspective distorts off-center",
    spatial: "Dynamic eye-tracking sensor adjusts 3D perspective to match viewer position",
  },
];

const spatialSpecs = [
  { label: "Available Sizes", value: '55-inch, 65-inch, 75-inch, 86-inch' },
  { label: "Profile Thickness", value: "Ultra-Slim 6 cm Body Thickness" },
  { label: "Display & Touch Panel", value: "Spatial Display Touch Screen with 4K Ultra HD Resolution" },
  { label: "3D Display Technology", value: "Light-Field Spatial Optical Panel" },
  { label: "Optical Tracking Sensor", value: "High-Speed Real-Time Optical Eye & Motion Camera" },
  { label: "AI Software Compatibility", value: "DIHUAVA AI Platform (Runs 100% offline on-device by default)" },
  { label: "3D Asset Compatibility", value: "DIHUAVA 3D Avatars, OBJ/FBX 3D Models, Real-Time Unity/Unreal Engine" },
  { label: "Documentation", value: "Spatial Display Data Sheet, Product Specifications PDF" },
];

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function SpatialDisplayClient() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const sPage = (dict as any).spatialPage || {};
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const localizedContent: Record<string, {
    breadcrumbProducts: string;
    breadcrumbCurrent: string;
    heroInlineDesc1: string;
    heroInlineDesc2: string;
    heroInlineDesc3: string;
    heroInlineDesc4: string;
    heroHologramLinkText: string;
    ctaPrimaryBtn: string;
    ctaSecondaryBtn: string;
    heroPillProfile: string;
    heroOverlayThickness: string;
    heroOverlayCaption: string;
    hardwareHighlightBadge: string;
    hardwareHighlightTitle1: string;
    hardwareHighlightTitle2: string;
    hardwareHighlightDesc: string;
    cardProfileLabel: string;
    cardProfileVal: string;
    cardSizesLabel: string;
    cardSizesVal: string;
    cardPanelLabel: string;
    cardPanelVal: string;
    defSectionBadge: string;
    defSectionTitle: string;
    defSectionDesc: string;
    defPoints: Array<{ title: string; description: string }>;
    partnershipBadge: string;
    partnershipTitlePrefix: string;
    partnershipTitleHighlight: string;
    partnershipDesc1: string;
    canonicalArchBadge: string;
    canonicalArchQuote: string;
    partnershipDesc2: string;
    learnDihuavaLink: string;
    sysArchCardTitle: string;
    physLayerBadge: string;
    physLayerName: string;
    physBullets: string[];
    intelLayerBadge: string;
    intelLayerName: string;
    intelBullets: string[];
    techOverviewBadge: string;
    techOverviewHeading: string;
    features: Array<{ title: string; description: string; badge: string }>;
    targetDeploymentsBadge: string;
    targetDeploymentsTitle: string;
    targetDeploymentsSubtitle: string;
    industries: Array<{ title: string; category: string; description: string }>;
    exploreIndustryBtn: string;
    valueSectionBadge: string;
    valueSectionTitle: string;
    valueSectionSubtitle: string;
    businessValues: Array<{ title: string; description: string }>;
    compSectionBadge: string;
    compSectionTitle: string;
    compSectionSubtitle: string;
    tableHeaderCategory: string;
    tableHeaderConventional: string;
    tableHeaderSpatial: string;
    comparisonRows: Array<{ feature: string; conventional: string; spatial: string }>;
    specsSectionBadge: string;
    specsSectionTitle: string;
    ctaTitle: string;
    ctaHighlight: string;
    ctaDesc: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
  }> = {
    zh: {
      breadcrumbProducts: "产品中心",
      breadcrumbCurrent: "3D裸眼空间显示屏",
      heroInlineDesc1: "，拥有超薄 ",
      heroInlineDesc2: " 机身厚度与 ",
      heroInlineDesc3: " 触控面板，提供 ",
      heroInlineDesc4: " 显示尺寸。同时可了解我们真人等比例的 ",
      heroHologramLinkText: "AI 3D全息显示柜产品",
      ctaPrimaryBtn: "预约裸眼空间屏演示 →",
      ctaSecondaryBtn: "下载空间显示屏白皮书 (PDF)",
      heroPillProfile: "6 cm 机身厚度 • 55\"–86\"",
      heroOverlayThickness: "● 6 CM 机身厚度",
      heroOverlayCaption: "具备 4K Ultra HD 体积视觉感知的 Spatial Display 空间显示触控屏",
      hardwareHighlightBadge: "★ 确认硬件技术规格",
      hardwareHighlightTitle1: "Spatial Display 空间显示触控屏",
      hardwareHighlightTitle2: "搭载 ",
      hardwareHighlightDesc: "采用 6 cm 超薄机身设计，支持高灵敏多点触控与超高清 4K Ultra HD 分辨率，覆盖 55 英寸、65 英寸、75 英寸和 86 英寸全系显示尺寸。",
      cardProfileLabel: "机身轮廓",
      cardProfileVal: "6 cm 厚度",
      cardSizesLabel: "可选尺寸",
      cardSizesVal: "55\", 65\", 75\", 86\"",
      cardPanelLabel: "交互面板",
      cardPanelVal: "4K 触控屏",
      defSectionBadge: "产品定义",
      defSectionTitle: "什么是 Spatial Display 裸眼空间显示屏？",
      defSectionDesc: "Spatial Display 是一种沉浸式硬件显示平台，专为在物理实体空间中呈现立体 3D 视觉并承载交互式 AI 数字人而设计，无需佩戴任何特殊头显设备。",
      defPoints: [
        { title: "沉浸式视觉显示", description: "无需佩戴特殊眼镜或 AR/VR 头显，直接为观众双眼呈现逼真的 3D 体积视觉深度感。" },
        { title: "3D与空间立体呈现", description: "以真实的空间深度展示产品、建筑模型和图形，将传统 2D 视觉媒体转变为引人入胜的立体资产。" },
        { title: "实时交互体验", description: "结合响应迅速的多点触控玻璃面板与实时光学人眼追踪传感器，随观众移动动态调整视觉视角。" },
        { title: "AI 数字人深度融合", description: "作为 DIHUAVA AI 数字人阿凡达的沉浸式物理舞台，与现场访客进行实时智能对话。" },
        { title: "企业与访客交互增强", description: "专为高流量物理商业环境打造，将被动显示屏转变为主动互动式触控服务节点。" },
      ],
      partnershipBadge: "硬件与软件生态融合",
      partnershipTitlePrefix: "将 Spatial Display 空间显示屏与 ",
      partnershipTitleHighlight: "DIHUAVA AI 数字人深度结合",
      partnershipDesc1: "Spatial Display 作为 DIHUAVA AI 数字人的物理沉浸式视觉载体。Spatial Display 提供 6 cm 厚度 4K 光场显示面板与光学传感器，而 DIHUAVA 则作为 AI 软件智慧大脑，驱动实时语音识别、数字人动作渲染与本地文档 RAG。",
      canonicalArchBadge: "标准 AI 架构规范",
      canonicalArchQuote: "“DIHUAVA 默认 100% 离线在端侧设备运行，同时提供可选的云端管理配置模式。”",
      partnershipDesc2: "Spatial Display 本身为高性能 3D 显示硬件，而非独立的 AI 软件系统。当与 DIHUAVA 配合使用时，它能提供立体物理舞台，使交互式 AI 数字人与访客实时流畅对话。",
      learnDihuavaLink: "了解更多关于 DIHUAVA AI 平台的信息",
      sysArchCardTitle: "系统架构分工",
      physLayerBadge: "物理层 (硬件)",
      physLayerName: "Spatial Display",
      physBullets: ["• 6 cm 超薄机身厚度", "• 55\", 65\", 75\", 86\" 4K 触控面板", "• 光场空间光学器件", "• 实时人眼追踪传感器"],
      intelLayerBadge: "智能层 (软件)",
      intelLayerName: "DIHUAVA 平台",
      intelBullets: ["• AI 数字人阿凡达", "• 端侧语音识别与本地 RAG", "• 29+ 全球多语言支持", "• 100% 离线 GPU 计算"],
      techOverviewBadge: "技术概览",
      techOverviewHeading: "面向现实商业空间的下一代空间视觉技术。",
      features: [
        { title: "6 cm 超薄机身与 4K Ultra HD", description: "采用 6 cm 极窄机身设计，配备高精度 4K Ultra HD 触控玻璃面板，呈现真实的体积空间深度感。", badge: "6 cm 超薄 4K" },
        { title: "体积 3D 裸眼视觉", description: "先进的透镜光场空间光学技术，无需佩戴任何穿戴设备或头显即可实现自然 3D 深度感知。", badge: "3D 空间光学" },
        { title: "实时光学人眼追踪", description: "高速精准摄像头传感器持续追踪观看者的眼睛位置，根据角度实时渲染视差变换，保持高清晰度立体 3D。", badge: "人眼追踪 AI" },
        { title: "DIHUAVA AI 深度集成", description: "无缝连接 DIHUAVA 平台，以真实空间深度呈现交互式 AI 数字人、对话式交互体验与 3D 内容。", badge: "交互式数字人" },
      ],
      targetDeploymentsBadge: "目标部署场景",
      targetDeploymentsTitle: "Spatial Display 商业行业应用",
      targetDeploymentsSubtitle: "探索裸眼 3D 空间显示屏与 AI 数字人如何提升商业客户环境体验。",
      industries: [
        { title: "零售与商业购物", category: "商业展示", description: "交互式产品可视化、导购购物体验以及 3D 奢侈品展示。" },
        { title: "企业大楼与接待", category: "大堂前台", description: "交互式接待前台、楼层导览服务、高管演示与访客迎宾。" },
        { title: "医疗与诊所门诊", category: "患者导诊", description: "患者信息咨询、医院科室导航以及交互式医学科普展示。" },
        { title: "教育与培训研讨", category: "交互式学习", description: "STEM 教学演示、复杂 3D 模型探索以及沉浸式培训环境。" },
        { title: "酒店与文旅景区", category: "访客服务", description: "酒店礼宾服务、区域景点介绍以及交互式文化历史讲解。" },
        { title: "博物馆与公共展馆", category: "展厅讲解", description: "交互式展品讲解、公共信息查询终端与高吸引力访客互动。" },
      ],
      exploreIndustryBtn: "探索行业解决方案",
      valueSectionBadge: "商业价值",
      valueSectionTitle: "Spatial Display 解决哪些商业痛点？",
      valueSectionSubtitle: "通过高视觉冲击力的 3D 呈现与交互式数字人集成，解决实体客户环境中的关键挑战。",
      businessValues: [
        { title: "吸引客流与访客注意力", description: "利用无须佩戴眼镜的 3D 空间视觉冲击力，在繁忙的零售店、展会和大堂中迅速吸引视觉关注。" },
        { title: "直观展示复杂产品结构", description: "以立体体积细节展示精密的 3D 产品设计、内部组件拆解图与建筑结构布局。" },
        { title: "交互式讲解复杂信息", description: "用支持触控与语音引导的对话式信息交付替代静态平面显示屏。" },
        { title: "提升访客参与度与停留时长", description: "打造令人难忘的物理空间互动体验，增加访客停留时间并强化品牌信任。" },
        { title: "将 AI 数字人引入实体空间", description: "为 DIHUAVA AI 数字人提供物理空间舞台，迎接访客、解答疑问并引导客户。" },
      ],
      compSectionBadge: "技术对比",
      compSectionTitle: "Spatial Display vs. 传统显示屏",
      compSectionSubtitle: "基于视觉深度、交互光学及 AI 数字人兼容性的客观对比。",
      tableHeaderCategory: "功能类别",
      tableHeaderConventional: "传统平面显示屏",
      tableHeaderSpatial: "Spatial Display 裸眼空间屏",
      comparisonRows: [
        { feature: "视觉深度与呈现", conventional: "平面 2D 图像输出；单一焦平面视角", spatial: "无需佩戴特殊眼镜的立体 3D 空间深度感知" },
        { feature: "观众交互模式", conventional: "被动观看或基础 2D 触控菜单导航", spatial: "多点触控玻璃表面结合实时光学人眼追踪视差调整" },
        { feature: "AI 数字人集成", conventional: "标准 2D 平面视频数字人覆盖层", spatial: "为 DIHUAVA AI 数字人提供沉浸式 3D 物理舞台渲染" },
        { feature: "部署应用环境", conventional: "标准数字标牌、播控屏幕与基础视频循环", spatial: "高冲击力零售展柜、企业大堂、医疗导诊与展馆中心" },
        { feature: "视角动态适应", conventional: "静态视角；偏离中心时视觉透视扭曲", spatial: "动态人眼追踪传感器根据观众位置实时调整 3D 视差" },
      ],
      specsSectionBadge: "技术参数",
      specsSectionTitle: "Spatial Display 详细规格参数",
      ctaTitle: "将 3D 裸眼空间显示屏",
      ctaHighlight: "引入您的商业客户环境",
      ctaDesc: "体验专为零售展柜、企业大堂、展览展厅、交互终端与 3D 数字人演示打造的光场体积显示硬件。",
      ctaPrimaryText: "预约演示",
      ctaSecondaryText: "下载技术白皮书 (PDF)",
    },
    ru: {
      breadcrumbProducts: "Продукты",
      breadcrumbCurrent: "Spatial Display (3D Дисплей)",
      heroInlineDesc1: " с ультратонким корпусом ",
      heroInlineDesc2: " толщиной и сенсорным экраном ",
      heroInlineDesc3: ", доступный в размерах ",
      heroInlineDesc4: ". Также ознакомьтесь с голографическими кубами ",
      heroHologramLinkText: "AI Hologram Box в полный рост",
      ctaPrimaryBtn: "Запросить демо Spatial Display →",
      ctaSecondaryBtn: "Скачать спецификацию (PDF)",
      heroPillProfile: "Корпус 6 см • 55\"–86\"",
      heroOverlayThickness: "● ТОЛЩИНА 6 СМ",
      heroOverlayCaption: "Сенсорный экран Spatial Display с 4K Ultra HD объемным восприятием глубины",
      hardwareHighlightBadge: "★ ПОДТВЕРЖДЕННЫЕ ХАРАКТЕРИСТИКИ ОБОРУДОВАНИЯ",
      hardwareHighlightTitle1: "Сенсорный экран Spatial Display",
      hardwareHighlightTitle2: "С технологией ",
      hardwareHighlightDesc: "Ультратонкий корпус толщиной 6 см, чувствительная мультитач-поверхность и разрешение 4K Ultra HD в размерах 55\", 65\", 75\" и 86\".",
      cardProfileLabel: "Профиль корпуса",
      cardProfileVal: "Глубина 6 см",
      cardSizesLabel: "Доступные размеры",
      cardSizesVal: "55\", 65\", 75\", 86\"",
      cardPanelLabel: "Интерактивная панель",
      cardPanelVal: "4K Сенсорный экран",
      defSectionBadge: "Определение продукта",
      defSectionTitle: "Что такое Spatial Display?",
      defSectionDesc: "Spatial Display — это иммерсивная аппаратная платформа для отображения стереоскопической 3D-графики и работы интерактивных ИИ Цифровых Людей без использования специальных очков или гарнитур.",
      defPoints: [
        { title: "Иммерсивный 3D-дисплей", description: "Обеспечивает реалистичное объемное 3D-восприятие глубины без очков и гарнитур AR/VR." },
        { title: "3D и пространственная презентация", description: "Демонстрирует товары, архитектурные модели и графику с реальной пространственной глубиной." },
        { title: "Интерактивное взаимодействие", description: "Сочетает мультитач-стекло с оптическим отслеживанием взгляда для динамической смены перспективы." },
        { title: "Интеграция с AI Цифровыми Людьми", description: "Служит физической витриной для интерактивных аватаров DIHUAVA AI, ведущих диалог в реальном времени." },
        { title: "Вовлечение клиентов и гостей", description: "Превращает пассивные вывески в активные интерактивные точки взаимодействия в коммерческих пространствах." },
      ],
      partnershipBadge: "Партнерство оборудования и ПО",
      partnershipTitlePrefix: "Интеграция Spatial Display с ",
      partnershipTitleHighlight: "DIHUAVA AI Цифровыми Людьми",
      partnershipDesc1: "Spatial Display выступает физической визуальной средой для аватаров DIHUAVA AI. Оборудование обеспечивает 4K световое поле и оптические сенсоры, а DIHUAVA — интеллектуальный слой ИИ (распознавание речи, анимация, локальный RAG).",
      canonicalArchBadge: "Архитектура ИИ",
      canonicalArchQuote: "«DIHUAVA по умолчанию работает 100% офлайн на устройстве, с возможностью облачного управления.»",
      partnershipDesc2: "Spatial Display — это 3D-оборудование высокого класса, а не автономная ИИ-система. В сочетании с DIHUAVA оно формирует объемную сцену для реального общения аватаров с клиентами.",
      learnDihuavaLink: "Узнать больше о платформе DIHUAVA AI",
      sysArchCardTitle: "Разделение архитектуры системы",
      physLayerBadge: "Физический уровень (Оборудование)",
      physLayerName: "Spatial Display",
      physBullets: ["• Ультратонкий корпус 6 см", "• Сенсорные 4K панели 55\", 65\", 75\", 86\"", "• Оптика светового поля", "• Сенсоры трекинга глаз"],
      intelLayerBadge: "Интеллектуальный уровень (ПО)",
      intelLayerName: "Платформа DIHUAVA",
      intelBullets: ["• AI Цифровые Люди", "• Офлайн речь и локальный RAG", "• 29+ мировых языков", "• 100% офлайн обработка GPU"],
      techOverviewBadge: "Обзор технологий",
      techOverviewHeading: "Объемные визуальные эффекты нового поколения для бизнеса.",
      features: [
        { title: "Ультратонкий корпус 6 см и 4K Ultra HD", description: "Корпус толщиной всего 6 см с высокоточным сенсорным экраном 4K Ultra HD для объемного восприятия.", badge: "6 см Ультратонкий 4K" },
        { title: "Объемная 3D-визуализация", description: "Светопольная оптика для естественного восприятия 3D-глубины без очков и гарнитур.", badge: "3D Оптика" },
        { title: "Отслеживание взгляда в реальном времени", description: "Камеры отслеживают положение глаз зрителя, адаптируя перспективу для четкого 3D с любого угла.", badge: "AI Трекинг глаз" },
        { title: "Интеграция с DIHUAVA AI", description: "Подключается к платформе DIHUAVA для демонстрации интерактивных ИИ-аватаров и 3D-контента.", badge: "Интерактивные аватары" },
      ],
      targetDeploymentsBadge: "Сферы применения",
      targetDeploymentsTitle: "Spatial Display в коммерческих секторах",
      targetDeploymentsSubtitle: "Узнайте, как 3D-дисплеи без очков и ИИ Цифровые Люди повышают эффективные продажи и обслуживание.",
      industries: [
        { title: "Ритейл и Торговля", category: "Коммерческая витрина", description: "Интерактивная визуализация товаров, цифровые консультанты и 3D-демонстрация премиум-продукции." },
        { title: "Офисы и Корпорации", category: "Зона рецепции", description: "Интерактивные стойки регистрации, навигация по зданию и визитки с аватарами." },
        { title: "Здравоохранение", category: "Навигация пациентов", description: "Помощь пациентам, навигация по больнице и интерактивные медицинские консультации." },
        { title: "Образование и Обучение", category: "Интерактивное обучение", description: "Демонстрация 3D-моделей, сложные наглядные пособия и иммерсивная обученность." },
        { title: "Отели и Туризм", category: "Сервис гостей", description: "Цифровой консьерж, экскурсии по региону и интерактивные гиды." },
        { title: "Музеи и Выставки", category: "Экскурсовод", description: "Интерактивные истории экспонатов, информационные киоски и высокий уровень вовлечения." },
      ],
      exploreIndustryBtn: "Изучить отраслевое решение",
      valueSectionBadge: "Ценность для бизнеса",
      valueSectionTitle: "Какие задачи бизнеса решает Spatial Display?",
      valueSectionSubtitle: "Решайте ключевые задачи в коммерческих пространствах с помощью 3D-визуализации и ИИ-аватаров.",
      businessValues: [
        { title: "Привлечение внимания посетителей", description: "Захватывает внимание в магазинах, на выставках и в холлах благодаря 3D-эффекту без очков." },
        { title: "Наглядная демонстрация сложных продуктов", description: "Показывает 3D-детали, внутренние компоненты и архитектурные макеты в деталях." },
        { title: "Интерактивная подача информации", description: "Заменяет статические экраны интерактивным сенсорным и голосовым диалогом." },
        { title: "Увеличение времени взаимодействия", description: "Создает запоминающийся опыт, увеличивая время контакта клиента с брендом." },
        { title: "Внедрение ИИ Цифровых Людей", description: "Предоставляет физическую сцену для аватаров DIHUAVA AI, встречающих и консультирующих гостей." },
      ],
      compSectionBadge: "Сравнение технологий",
      compSectionTitle: "Spatial Display в сравнении с обычными экранами",
      compSectionSubtitle: "Сравнение по критериям глубины визуализации, интерактивности и совместимости с ИИ-аватарами.",
      tableHeaderCategory: "Категория",
      tableHeaderConventional: "Обычный 2D Дисплей",
      tableHeaderSpatial: "Spatial Display 3D",
      comparisonRows: [
        { feature: "Глубина визуализации", conventional: "Плоское 2D-изображение; одна плоскость фокусировки", spatial: "Объемная 3D-глубина без специальных очков" },
        { feature: "Взаимодействие зрителя", conventional: "Пассивный просмотр или базовое 2D-меню", spatial: "Мультитач-стекло и отслеживание взгляда в реальном времени" },
        { feature: "Интеграция ИИ-аватаров", conventional: "Плоское 2D-видео поверх экрана", spatial: "Иммерсивная 3D-сцена для аватаров DIHUAVA AI" },
        { feature: "Сфера применения", conventional: "Стандартный Digital Signage и видеокруги", spatial: "Премиальный ритейл, корпоративные холлы и выставки" },
        { feature: "Адаптация перспективы", conventional: "Статический угол; искажение при взгляде сбоку", spatial: "Динамическая подстройка 3D-перспективы под положение глаз" },
      ],
      specsSectionBadge: "Технические параметры",
      specsSectionTitle: "Технические характеристики Spatial Display",
      ctaTitle: "Внедрите 3D Spatial Display",
      ctaHighlight: "В ваше коммерческое пространство",
      ctaDesc: "Испытайте светопольные 3D-дисплеи для ритейла, корпоративных холлов, выставок и презентаций ИИ-аватаров.",
      ctaPrimaryText: "Запросить демо",
      ctaSecondaryText: "Скачать спецификацию (PDF)",
    },
    es: {
      breadcrumbProducts: "Productos",
      breadcrumbCurrent: "Spatial Display (Pantalla 3D)",
      heroInlineDesc1: " con un perfil ultradelgado de ",
      heroInlineDesc2: " de grosor y panel táctil ",
      heroInlineDesc3: ", disponible en tamaños de ",
      heroInlineDesc4: ". También explore nuestras cabinas holográficas ",
      heroHologramLinkText: "AI Hologram Box a tamaño real",
      ctaPrimaryBtn: "Reservar demo de Spatial Display →",
      ctaSecondaryBtn: "Descargar ficha técnica (PDF)",
      heroPillProfile: "Perfil 6 cm • 55\"–86\"",
      heroOverlayThickness: "● GROSOR DE 6 CM",
      heroOverlayCaption: "Pantalla táctil Spatial Display con percepción de profundidad volumétrica 4K Ultra HD",
      hardwareHighlightBadge: "★ ESPECIFICACIONES DE HARDWARE CONFIRMADAS",
      hardwareHighlightTitle1: "Pantalla táctil Spatial Display",
      hardwareHighlightTitle2: "Con resolución ",
      hardwareHighlightDesc: "Diseñada con un cuerpo ultradelgado de 6 cm de grosor, superficie de cristal multitáctil y resolución 4K Ultra HD en tamaños de 55\", 65\", 75\" y 86\".",
      cardProfileLabel: "Perfil del cuerpo",
      cardProfileVal: "6 cm de grosor",
      cardSizesLabel: "Tamaños disponibles",
      cardSizesVal: "55\", 65\", 75\", 86\"",
      cardPanelLabel: "Panel interactivo",
      cardPanelVal: "Pantalla táctil 4K",
      defSectionBadge: "Definición del producto",
      defSectionTitle: "¿Qué es Spatial Display?",
      defSectionDesc: "Spatial Display es una plataforma de pantalla inmersiva diseñada para presentar imágenes 3D estereoscópicas y albergar Humanos Digitales con IA interactivos sin necesidad de gafas especiales.",
      defPoints: [
        { title: "Pantalla visual inmersiva", description: "Ofrece una percepción realista de profundidad visual 3D directamente a los ojos del espectador sin gafas o cascos AR/VR." },
        { title: "Presentación 3D y espacial", description: "Muestra productos, modelos arquitectónicos y gráficos con profundidad espacial real, convirtiendo medios 2D en activos estereoscópicos." },
        { title: "Experiencia interactiva", description: "Combina un panel táctil de cristal receptivo con sensores de seguimiento ocular en tiempo real para adaptar la perspectiva al movimiento." },
        { title: "Integración de Humanos Digitales con IA", description: "Sirve como un escenario físico inmersivo para que los avatares de DIHUAVA AI conversen con los visitantes en tiempo real." },
        { title: "Compromiso empresarial y del visitante", description: "Diseñado para entornos comerciales de alto tráfico con el fin de transformar la señalización pasiva en puntos de interacción activos." },
      ],
      partnershipBadge: "Integración de Hardware y Software",
      partnershipTitlePrefix: "Integrando Spatial Display con ",
      partnershipTitleHighlight: "Humanos Digitales con IA de DIHUAVA",
      partnershipDesc1: "Spatial Display sirve como el entorno visual inmersivo físico para los Humanos Digitales de DIHUAVA AI. Mientras Spatial Display aporta el panel óptico 4K de 6 cm y sensores, DIHUAVA actúa como el motor de inteligencia de IA (reconocimiento de voz, animación y RAG local).",
      canonicalArchBadge: "Arquitectura canónica de IA",
      canonicalArchQuote: "«DIHUAVA funciona 100% sin conexión en el dispositivo de forma predeterminada, con configuraciones de gestión en la nube opcionales.»",
      partnershipDesc2: "Spatial Display es un hardware de visualización 3D de alto rendimiento. Al combinarse con DIHUAVA, proporciona un escenario volumétrico físico donde los avatares de IA interactúan con fluidez en tiempo real.",
      learnDihuavaLink: "Más información sobre la plataforma DIHUAVA AI",
      sysArchCardTitle: "División de la arquitectura del sistema",
      physLayerBadge: "Capa Física (Hardware)",
      physLayerName: "Spatial Display",
      physBullets: ["• Cuerpo ultradelgado de 6 cm", "• Paneles táctiles 4K de 55\", 65\", 75\", 86\"", "• Óptica espacial de campo de luz", "• Sensores de seguimiento ocular en tiempo real"],
      intelLayerBadge: "Capa de Inteligencia (Software)",
      intelLayerName: "Plataforma DIHUAVA",
      intelBullets: ["• Avatares Humanos Digitales con IA", "• Reconocimiento de voz local y RAG", "• 29+ idiomas globales", "• Procesamiento 100% sin conexión en GPU"],
      techOverviewBadge: "Visión general de la tecnología",
      techOverviewHeading: "Visuales espaciales de próxima generación para espacios comerciales.",
      features: [
        { title: "Perfil ultradelgado de 6 cm y 4K Ultra HD", description: "Diseñado con un grosor de solo 6 cm y un panel táctil 4K Ultra HD para una profundidad espacial volumétrica real.", badge: "6 cm Ultradelgado 4K" },
        { title: "Visuales 3D volumétricos", description: "Óptica espacial de campo de luz para una percepción de profundidad 3D natural sin necesidad de gafas.", badge: "Óptica espacial 3D" },
        { title: "Seguimiento ocular óptico en tiempo real", description: "Sensores de cámara de alta velocidad rastrean la mirada para ajustar la perspectiva y mantener una nitidez 3D impecable.", badge: "IA de seguimiento ocular" },
        { title: "Integración con DIHUAVA AI", description: "Se conecta sin problemas con la plataforma DIHUAVA para ofrecer avatares interactivos y contenido 3D en profundidad real.", badge: "Avatares interactivos" },
      ],
      targetDeploymentsBadge: "Despliegues objetivo",
      targetDeploymentsTitle: "Spatial Display en sectores comerciales",
      targetDeploymentsSubtitle: "Descubra cómo las pantallas 3D sin gafas y los Humanos Digitales con IA mejoran la experiencia del cliente.",
      industries: [
        { title: "Comercio minorista", category: "Expositor comercial", description: "Visualización interactiva de productos, compras guiadas y demostraciones 3D de lujo." },
        { title: "Empresas y Corporaciones", category: "Recepción y vestíbulo", description: "Mostradores de recepción interactivos, directorio del edificio y presentaciones ejecutivas." },
        { title: "Salud y Clínicas", category: "Orientación al paciente", description: "Asistencia de información al paciente, orientación en hospitales y educación médica." },
        { title: "Educación y Formación", category: "Aprendizaje interactivo", description: "Demostraciones STEM, exploración de modelos 3D complejos y entornos de capacitación." },
        { title: "Hostelería y Turismo", category: "Servicios al visitante", description: "Asistencia de conserjería, exploración de destinos regionales e historias culturales." },
        { title: "Museos y Espacios Públicos", category: "Guía de exposiciones", description: "Narración de exposiciones, quioscos de información pública y alta participación." },
      ],
      exploreIndustryBtn: "Explorar solución industrial",
      valueSectionBadge: "Valor comercial",
      valueSectionTitle: "¿Qué problemas comerciales resuelve Spatial Display?",
      valueSectionSubtitle: "Aborde los desafíos clave en espacios físicos con una potente presentación visual 3D e integración de avatares.",
      businessValues: [
        { title: "Atraer tráfico y atención", description: "Capte la atención visual en tiendas, ferias y vestíbulos con un gran impacto 3D sin gafas." },
        { title: "Presentar productos complejos visualmente", description: "Muestre diseños 3D detallados, desglose de componentes internos y maquetas arquitectónicas." },
        { title: "Explicar información de forma interactiva", description: "Sustituya pantallas estáticas por una entrega de información conversacional táctil y por voz." },
        { title: "Aumentar el compromiso del visitante", description: "Cree interacciones memorables que aumenten el tiempo de permanencia del cliente." },
        { title: "Conectar Humanos Digitales con IA a espacios físicos", description: "Proporcione un escenario físico para que los avatares de DIHUAVA AI orienten a los clientes." },
      ],
      compSectionBadge: "Comparativa tecnológica",
      compSectionTitle: "Spatial Display frente a pantallas convencionales",
      compSectionSubtitle: "Comparativa objetiva basada en profundidad visual, óptica interactiva y compatibilidad con IA.",
      tableHeaderCategory: "Categoría",
      tableHeaderConventional: "Pantalla 2D convencional",
      tableHeaderSpatial: "Spatial Display 3D",
      comparisonRows: [
        { feature: "Profundidad visual", conventional: "Salida de imagen 2D plana; plano focal único", spatial: "Profundidad 3D espacial volumétrica sin gafas" },
        { feature: "Interacción del espectador", conventional: "Visualización pasiva o menú táctil 2D básico", spatial: "Cristal multitáctil con ajuste de perspectiva por seguimiento ocular" },
        { feature: "Integración de avatares IA", conventional: "Superposición de vídeo 2D plano", spatial: "Escenario 3D inmersivo para avatares de DIHUAVA AI" },
        { feature: "Entornos de despliegue", conventional: "Señalisación digital estándar y bucles de vídeo", spatial: "Tiendas exclusivas, vestíbulos corporativos y centros de exposición" },
        { feature: "Adaptación de perspectiva", conventional: "Ángulo estático; distorsión al mirar desde un lateral", spatial: "Ajuste dinámico de la perspectiva 3D según la posición del espectador" },
      ],
      specsSectionBadge: "Especificaciones técnicas",
      specsSectionTitle: "Especificaciones de Spatial Display",
      ctaTitle: "Lleve pantallas 3D Spatial Display",
      ctaHighlight: "A su entorno comercial",
      ctaDesc: "Experimente pantallas ópticas volumétricas para expositores, vestíbulos corporativos, ferias y presentaciones de avatares 3D.",
      ctaPrimaryText: "Solicitar una demo",
      ctaSecondaryText: "Descargar ficha técnica (PDF)",
    },
    fr: {
      breadcrumbProducts: "Produits",
      breadcrumbCurrent: "Spatial Display (Écran Spatial 3D)",
      heroInlineDesc1: " doté d'un profil ultra-fin de ",
      heroInlineDesc2: " d'épaisseur et d'un panneau tactile ",
      heroInlineDesc3: ", disponible en tailles de ",
      heroInlineDesc4: ". Découvrez également nos vitrines holographiques ",
      heroHologramLinkText: "AI Hologram Box à taille réelle",
      ctaPrimaryBtn: "Réserver une démo Spatial Display →",
      ctaSecondaryBtn: "Télécharger la fiche technique (PDF)",
      heroPillProfile: "Profil 6 cm • 55\"–86\"",
      heroOverlayThickness: "● ÉPAISSEUR DE 6 CM",
      heroOverlayCaption: "Écran tactile Spatial Display avec perception de la profondeur volumétrique 4K Ultra HD",
      hardwareHighlightBadge: "★ SPÉCIFICATIONS MATÉRIELLES CONFIRMÉES",
      hardwareHighlightTitle1: "Écran tactile Spatial Display",
      hardwareHighlightTitle2: "Avec technologie ",
      hardwareHighlightDesc: "Conçu avec un boîtier ultra-fin de 6 cm d'épaisseur, une surface tactile en verre et une résolution 4K Ultra HD disponible en 55\", 65\", 75\" et 86\".",
      cardProfileLabel: "Profil du boîtier",
      cardProfileVal: "6 cm d'épaisseur",
      cardSizesLabel: "Tailles disponibles",
      cardSizesVal: "55\", 65\", 75\", 86\"",
      cardPanelLabel: "Panneau interactif",
      cardPanelVal: "Écran tactile 4K",
      defSectionBadge: "Définition du produit",
      defSectionTitle: "Qu'est-ce que Spatial Display ?",
      defSectionDesc: "Spatial Display est une plateforme d'affichage immersif conçue pour présenter des visuels 3D stéréoscopiques et accueillir des Humains Virtuels IA interactifs sans lunettes spéciales.",
      defPoints: [
        { title: "Affichage visuel immersif", description: "Offre une perception de la profondeur 3D volumétrique réaliste sans lunettes spéciales ni casques AR/VR." },
        { title: "Présentation 3D & spatiale", description: "Présente des produits, modèles architecturaux et graphiques avec une profondeur spatiale réelle, transformant les médias 2D en assets stéréoscopiques." },
        { title: "Expérience interactive", description: "Combine un panneau tactile réactif avec des capteurs de suivi oculaire en temps réel pour adapter la perspective au déplacement." },
        { title: "Intégration d'Humains Virtuels IA", description: "Sert de scène physique immersive pour permettre aux avatars de DIHUAVA AI de converser avec les visiteurs en temps réel." },
        { title: "Engagement des visiteurs & entreprises", description: "Conçu pour les espaces commerciaux à fort trafic afin de transformer l'affichage passif en points d'interaction actifs." },
      ],
      partnershipBadge: "Partenariat Matériel & Logiciel",
      partnershipTitlePrefix: "Intégration de Spatial Display avec les ",
      partnershipTitleHighlight: "Humains Virtuels IA DIHUAVA",
      partnershipDesc1: "Spatial Display sert d'environnement visuel physique pour les Humains Virtuels IA DIHUAVA. Tandis que le matériel fournit le panneau 4K de 6 cm et les capteurs optiques, DIHUAVA constitue la couche d'intelligence IA (reconnaissance vocale, animation d'avatar et RAG local).",
      canonicalArchBadge: "Architecture IA canonique",
      canonicalArchQuote: "« DIHUAVA fonctionne 100% hors ligne sur l'appareil par défaut, avec des options de gestion cloud facultatives. »",
      partnershipDesc2: "Spatial Display est un matériel d'affichage 3D haute performance. Associé à DIHUAVA, il offre une scène volumétrique physique où les avatars IA interagissent en temps réel.",
      learnDihuavaLink: "En savoir plus sur la plateforme DIHUAVA AI",
      sysArchCardTitle: "Division de l'architecture système",
      physLayerBadge: "Couche Physique (Matériel)",
      physLayerName: "Spatial Display",
      physBullets: ["• Boîtier ultra-fin de 6 cm d'épaisseur", "• Panneaux tactiles 4K de 55\", 65\", 75\", 86\"", "• Optique spatiale à champ lumineux", "• Capteurs de suivi oculaire en temps réel"],
      intelLayerBadge: "Couche d'Intelligence (Logiciel)",
      intelLayerName: "Plateforme DIHUAVA",
      intelBullets: ["• Avatars d'Humains Virtuels IA", "• Reconnaissance vocale locale & RAG", "• 29+ langues mondiales", "• Traitement 100% hors ligne sur GPU"],
      techOverviewBadge: "Aperçu technologique",
      techOverviewHeading: "Visuels spatiaux de nouvelle génération pour les espaces physiques.",
      features: [
        { title: "Profil ultra-fin de 6 cm et 4K Ultra HD", description: "Conçu avec une épaisseur de seulement 6 cm et un panneau tactile 4K Ultra HD pour une profondeur spatiale réelle.", badge: "6 cm Ultra-fin 4K" },
        { title: "Visuels 3D volumétriques", description: "Optique spatiale à champ lumineux pour une perception de la profondeur 3D naturelle sans lunettes.", badge: "Optique spatiale 3D" },
        { title: "Suivi oculaire optique en temps réel", description: "Des capteurs caméra haute vitesse suivent le regard pour ajuster la perspective et maintenir une clarté 3D nette.", badge: "IA de suivi oculaire" },
        { title: "Intégration DIHUAVA AI", description: "Se connecte parfaitement à la plateforme DIHUAVA pour proposer des avatars interactifs et du contenu 3D immersif.", badge: "Avatars interactifs" },
      ],
      targetDeploymentsBadge: "Déploiements cibles",
      targetDeploymentsTitle: "Spatial Display dans les secteurs commerciaux",
      targetDeploymentsSubtitle: "Découvrez comment les écrans 3D sans lunettes et les Humains Virtuels IA enrichissent les espaces clients.",
      industries: [
        { title: "Commerce & Vente au détail", category: "Vitrine commerciale", description: "Visualisation interactive de produits, achats guidés et démonstrations 3D de produits de luxe." },
        { title: "Entreprises & Bureaux", category: "Réception & Accueil", description: "Bureaux d'accueil interactifs, orientation dans le bâtiment et présentations exécutives." },
        { title: "Santé & Cliniques", category: "Orientation des patients", description: "Assistance d'information aux patients, guidage dans l'hôpital et éducation médicale." },
        { title: "Éducation & Formation", category: "Apprentissage interactif", description: "Démonstrations STEM, exploration de modèles 3D complexes et environnements de formation." },
        { title: "Hôtellerie & Tourisme", category: "Services aux visiteurs", description: "Assistance de conciergerie, découverte de destinations régionales et récits culturels." },
        { title: "Musées & Espaces Publics", category: "Guide d'exposition", description: "Récits d'expositions interactifs, bornes d'information publiques et fort engagement." },
      ],
      exploreIndustryBtn: "Explorer la solution sectorielle",
      valueSectionBadge: "Valeur commerciale",
      valueSectionTitle: "Quels problèmes commerciaux Spatial Display résout-il ?",
      valueSectionSubtitle: "Relevez les défis clés des espaces clients physiques grâce à une présentation 3D à fort impact.",
      businessValues: [
        { title: "Attirer du flux et l'attention", description: "Captez l'attention dans les magasins, salons et halls grâce à un impact visuel 3D sans lunettes." },
        { title: "Présenter des produits complexes", description: "Présentez des conceptions 3D détaillées, des vues éclatées de composants et des maquettes." },
        { title: "Expliquer l'information de manière interactive", description: "Remplacez l'affichage statique par une diffusion d'informations conversationnelle et tactile." },
        { title: "Augmenter l'engagement des visiteurs", description: "Créez des interactions physiques mémorables qui augmentent le temps de présence." },
        { title: "Connecter des Humains Virtuels IA", description: "Offrez une scène physique pour que les avatars DIHUAVA AI accueillent et guident les clients." },
      ],
      compSectionBadge: "Comparatif technologique",
      compSectionTitle: "Spatial Display par rapport aux écrans classiques",
      compSectionSubtitle: "Un comparatif factuel basé sur la profondeur visuelle, l'optique interactive et l'IA.",
      tableHeaderCategory: "Catégorie",
      tableHeaderConventional: "Écran 2D classique",
      tableHeaderSpatial: "Spatial Display 3D",
      comparisonRows: [
        { feature: "Profondeur visuelle", conventional: "Sortie d'image 2D plate; plan focal unique", spatial: "Profondeur 3D volumétrique sans lunettes" },
        { feature: "Interaction avec le visiteur", conventional: "Lecture passive ou menu tactile 2D basique", spatial: "Verre multi-touch et ajustement de perspective par suivi oculaire" },
        { feature: "Intégration d'avatars IA", conventional: "Superposition vidéo 2D plate classique", spatial: "Scène 3D immersive pour les avatars DIHUAVA AI" },
        { feature: "Environnements de déploiement", conventional: "Affichage dynamique standard et boucles vidéo", spatial: "Vitrines de vente haut de gamme, halls d'entreprise et musées" },
        { feature: "Adaptation de la perspective", conventional: "Angle statique; déformation visuelle de côté", spatial: "Ajustement dynamique de la perspective 3D selon la position du regard" },
      ],
      specsSectionBadge: "Spécifications techniques",
      specsSectionTitle: "Spécifications de Spatial Display",
      ctaTitle: "Intégrez des écrans 3D Spatial Display",
      ctaHighlight: "Dans votre espace commercial",
      ctaDesc: "Découvrez des écrans volumétriques à champ lumineux conçus pour les vitrines, halls d'entreprise et démonstrations 3D.",
      ctaPrimaryText: "Réserver une démo",
      ctaSecondaryText: "Télécharger la fiche technique (PDF)",
    },
    en: {
      breadcrumbProducts: "Products",
      breadcrumbCurrent: "Spatial Display",
      heroInlineDesc1: " Featuring an ultra-slim ",
      heroInlineDesc2: " body thickness and ",
      heroInlineDesc3: " 4K Ultra HD touch screen panel, available in ",
      heroInlineDesc4: " display sizes. Also explore our life-size ",
      heroHologramLinkText: "AI Hologram Box enclosures",
      ctaPrimaryBtn: "Book Spatial Display Demo →",
      ctaSecondaryBtn: "Download Spatial Datasheet (PDF)",
      heroPillProfile: "6 cm Profile • 55\"–86\"",
      heroOverlayThickness: "● 6 CM THICKNESS",
      heroOverlayCaption: "Spatial Display Touch Screen with 4K Ultra HD volumetric depth perception",
      hardwareHighlightBadge: "★ Confirmed Hardware Specifications",
      hardwareHighlightTitle1: "Spatial Display Touch Screen",
      hardwareHighlightTitle2: "With ",
      hardwareHighlightDesc: "Featuring an ultra-thin 6 cm body thickness, responsive multi-touch interactive glass surface, and ultra-crisp 4K Ultra HD resolution across 55\", 65\", 75\", and 86\" screen sizes.",
      cardProfileLabel: "Body Profile",
      cardProfileVal: "6 cm Depth",
      cardSizesLabel: "Available Sizes",
      cardSizesVal: "55\", 65\", 75\", 86\"",
      cardPanelLabel: "Interactive Panel",
      cardPanelVal: "4K Touch Screen",
      defSectionBadge: "Product Definition",
      defSectionTitle: "What is Spatial Display?",
      defSectionDesc: "Spatial Display is an immersive hardware display platform engineered to present stereoscopic 3D visuals and host interactive AI Digital Humans directly in physical spaces without specialized headsets.",
      defPoints: [
        { title: "Immersive Visual Display", description: "Delivers realistic 3D volumetric visual depth perception directly to viewer eyes without requiring specialized glasses or AR/VR headsets." },
        { title: "3D & Spatial Presentation", description: "Presents products, architectural models, and graphics with true spatial depth, turning 2D visual media into engaging stereoscopic assets." },
        { title: "Interactive Experience", description: "Combines a responsive multi-touch glass panel with real-time optical eye-tracking sensors to adapt perspective as viewers move." },
        { title: "AI Digital Human Integration", description: "Serves as an immersive physical stage for DIHUAVA AI Digital Human avatars to converse with visitors in real-time." },
        { title: "Enterprise & Visitor Engagement", description: "Engineered for high-traffic physical customer environments to transform passive signage into active engagement touchpoints." },
      ],
      partnershipBadge: "Hardware & Software Partnership",
      partnershipTitlePrefix: "Integrating Spatial Display with ",
      partnershipTitleHighlight: "DIHUAVA AI Digital Humans",
      partnershipDesc1: "Spatial Display serves as the physical immersive visual environment for DIHUAVA AI Digital Humans. While Spatial Display provides the 6 cm 4K light-field display panel and optical sensors, DIHUAVA acts as the AI software intelligence layer powering speech recognition, avatar animation, and local document RAG.",
      canonicalArchBadge: "Canonical AI Architecture",
      canonicalArchQuote: "\"DIHUAVA runs 100% offline on-device by default, with optional cloud-management configurations available.\"",
      partnershipDesc2: "Spatial Display itself is high-performance 3D display hardware, not an AI system. When paired with DIHUAVA, it provides a physical volumetric stage where interactive AI avatars interact with visitors smoothly in real-time.",
      learnDihuavaLink: "Learn more about DIHUAVA AI Platform",
      sysArchCardTitle: "System Architecture Division",
      physLayerBadge: "Physical Layer (Hardware)",
      physLayerName: "Spatial Display",
      physBullets: ["• 6 cm Ultra-Slim Body Thickness", "• 55\", 65\", 75\", 86\" 4K Touch Panels", "• Light-Field Spatial Optics", "• Real-Time Eye Tracking Sensors"],
      intelLayerBadge: "Intelligence Layer (Software)",
      intelLayerName: "DIHUAVA Platform",
      intelBullets: ["• AI Digital Human Avatars", "• On-Device Speech & Local RAG", "• 29+ Global Languages", "• 100% Offline GPU Processing"],
      techOverviewBadge: "Technology Overview",
      techOverviewHeading: "Next-generation spatial visuals for real-world spaces.",
      features: [
        { title: "Ultra-Slim 6 cm Profile & 4K Ultra HD", description: "Engineered with an ultra-thin 6 cm depth profile featuring a high-precision 4K Ultra HD touch screen panel for true volumetric spatial depth.", badge: "6 cm Ultra-Slim 4K" },
        { title: "Volumetric 3D Visuals", description: "Advanced lenticular light-field spatial optics enabling natural 3D depth perception without requiring specialized wearables or headsets.", badge: "3D Spatial Optics" },
        { title: "Real-Time Optical Eye Tracking", description: "High-speed precision camera sensors continuously track viewer eye position, dynamically rendering perspective shifts for crisp, stereoscopic 3D clarity from any angle.", badge: "Eye Tracking AI" },
        { title: "DIHUAVA AI Integration", description: "Seamlessly connects with the DIHUAVA platform to deliver interactive AI Digital Humans, conversational experiences, and 3D content in true spatial depth.", badge: "Interactive Avatars" },
      ],
      targetDeploymentsBadge: "Target Deployments",
      targetDeploymentsTitle: "Spatial Display Across Commercial Sectors",
      targetDeploymentsSubtitle: "Discover how naked-eye 3D spatial displays and AI Digital Humans enhance customer environments.",
      industries: [
        { title: "Retail & Shopping", category: "Commercial Showcase", description: "Interactive product visualization, guided shopping experiences, and 3D luxury product demonstrations." },
        { title: "Corporate & Enterprise", category: "Lobby & Reception", description: "Interactive reception desks, building directory assistance, executive presentations, and visitor onboarding." },
        { title: "Healthcare & Clinics", category: "Patient Guidance", description: "Patient information assistance, hospital department wayfinding, and interactive medical education." },
        { title: "Education & Training", category: "Interactive Learning", description: "STEM learning demonstrations, complex 3D model exploration, and immersive training environments." },
        { title: "Hospitality & Tourism", category: "Visitor Services", description: "Hotel concierge assistance, regional destination exploration, and interactive cultural storytelling." },
        { title: "Museums & Public Spaces", category: "Exhibition Docent", description: "Interactive exhibit storytelling, public information kiosks, and high-impact visitor engagement." },
      ],
      exploreIndustryBtn: "Explore Industry Solution",
      valueSectionBadge: "Commercial Intent & Value",
      valueSectionTitle: "What Business Problems Does Spatial Display Solve?",
      valueSectionSubtitle: "Address key physical customer environment challenges with high-impact 3D visual presentation and interactive avatar integration.",
      businessValues: [
        { title: "Attract Foot Traffic & Visitor Attention", description: "Captures visual attention in busy retail stores, trade shows, and lobbies using glasses-free 3D spatial visual impact." },
        { title: "Present Complex Products Visually", description: "Showcases intricate 3D product designs, internal component breakdowns, and architectural layouts in volumetric detail." },
        { title: "Explain Information Interactively", description: "Replaces static display screens with touch-responsive and voice-guided conversational information delivery." },
        { title: "Elevate Visitor Engagement", description: "Creates memorable physical interactions that increase visitor dwell time and strengthen brand confidence." },
        { title: "Connect AI Digital Humans to Physical Spaces", description: "Provides a physical volumetric stage for DIHUAVA AI Digital Humans to greet visitors, answer questions, and guide customers." },
      ],
      compSectionBadge: "Technology Comparison",
      compSectionTitle: "Spatial Display vs. Conventional Display",
      compSectionSubtitle: "A factual category-based comparison highlighting visual depth, interactive optics, and AI Digital Human compatibility.",
      tableHeaderCategory: "Feature Category",
      tableHeaderConventional: "Conventional Display",
      tableHeaderSpatial: "Spatial Display",
      comparisonRows: [
        { feature: "Visual Depth & Presentation", conventional: "Flat 2D image output; single focal plane view", spatial: "Volumetric 3D spatial depth perception without specialized glasses" },
        { feature: "Viewer Interaction", conventional: "Passive viewing or basic 2D touch menu navigation", spatial: "Multi-touch glass surface paired with real-time optical eye-tracking perspective shifts" },
        { feature: "AI Avatar Integration", conventional: "Standard 2D flat video avatar overlay", spatial: "Immersive 3D visual stage rendering for lifelike DIHUAVA AI Digital Humans" },
        { feature: "Deployment Environments", conventional: "Standard digital signage, broadcast screens, and basic video loops", spatial: "High-impact retail showcases, corporate lobbies, healthcare guidance, and exhibition centers" },
        { feature: "Perspective Adaptation", conventional: "Static viewing angle; visual perspective distorts off-center", spatial: "Dynamic eye-tracking sensor adjusts 3D perspective to match viewer position" },
      ],
      specsSectionBadge: "Technical Specifications",
      specsSectionTitle: "Spatial Display Specifications",
      ctaTitle: "Bring 3D Spatial Displays",
      ctaHighlight: "To Your Customer Environment",
      ctaDesc: "Experience volumetric light-field displays for retail showcases, corporate lobbies, exhibitions, interactive kiosks, and 3D digital human presentations.",
      ctaPrimaryText: "Book a Demo",
      ctaSecondaryText: "Download Datasheets (PDF)",
    },
  };

  const t = localizedContent[currentLocale] || localizedContent.en;

  const localizedSpecs = sPage.specs || spatialSpecs;
  const localizedDefPoints = t.defPoints;
  const localizedFeatures = t.features.map((feat, idx) => ({
    ...spatialFeatures[idx],
    title: feat.title,
    description: feat.description,
    badge: feat.badge,
  }));
  const localizedIndustries = t.industries.map((ind, idx) => ({
    ...spatialIndustries[idx],
    title: ind.title,
    category: ind.category,
    description: ind.description,
  }));
  const localizedBusinessValues = t.businessValues.map((val, idx) => ({
    ...businessValues[idx],
    title: val.title,
    description: val.description,
  }));
  const localizedComparison = t.comparisonRows;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-600/10 to-transparent blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
            <Link href={lPath("/products")} className="hover:text-cyan-400 transition-colors">
              {t.breadcrumbProducts}
            </Link>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">{t.breadcrumbCurrent}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  {sPage.heroBadge || "Naked-Eye 3D AI Display"}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                {sPage.heroTitle || "Spatial Display "}{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  {sPage.heroTitleHighlight || "(3D Volumetric)"}
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg max-w-2xl">
                {sPage.heroDescription || "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments."}{t.heroInlineDesc1}<strong>6 cm body thickness</strong>{t.heroInlineDesc2}<strong>4K Ultra HD touch screen panel</strong>{t.heroInlineDesc3}<strong>55&quot;, 65&quot;, 75&quot;, and 86&quot;</strong>{t.heroInlineDesc4}<Link href={lPath("/products/holographic-display")} className="text-cyan-400 hover:text-cyan-300 underline font-semibold">{t.heroHologramLinkText}</Link>.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={lPath("/contact")}
                  className="rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  {sPage.ctaPrimary ? `${sPage.ctaPrimary} →` : t.ctaPrimaryBtn}
                </Link>
                <Link
                  href={lPath("/contact/download-center")}
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-white"
                >
                  {sPage.ctaSecondary || t.ctaSecondaryBtn}
                </Link>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] overflow-hidden rounded-3xl border border-cyan-500/35 bg-neutral-950/90 p-3.5 backdrop-blur-xl shadow-[0_0_60px_rgba(6,182,212,0.25)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-sky-500/5 to-transparent pointer-events-none" />

                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl">
                  <Image
                    src="/products/spatial-display/spatial-display.png"
                    alt="AI Spatial Display Volumetric Screen Showcase"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-contain bg-neutral-950"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                    </span>
                    <span className="text-[11px] font-mono font-medium tracking-wider text-cyan-300 uppercase">
                      {t.heroPillProfile}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/15 bg-black/80 p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-semibold">{t.heroOverlayThickness}</span>
                      <span className="text-amber-400 font-bold">4K ULTRA HD</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-gray-300">
                      {t.heroOverlayCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY HARDWARE HIGHLIGHT SECTION */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-20 border-b border-cyan-500/30">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[700px] rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-amber-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">
              {t.hardwareHighlightBadge}
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-8 my-4">
            <div className="flex-1 max-w-[120px] sm:max-w-[220px] h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 shadow-[0_0_12px_#06b6d4]" />

            <h2 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.6)] font-mono">
              6 cm
            </h2>

            <div className="flex-1 max-w-[120px] sm:max-w-[220px] h-[3px] bg-gradient-to-l from-transparent via-cyan-400 to-indigo-500 shadow-[0_0_12px_#06b6d4]" />
          </div>

          <h3 className="mt-6 text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white leading-tight">
            {t.hardwareHighlightTitle1}
            <br />
            <span className="text-gray-200">{t.hardwareHighlightTitle2}</span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
              4K Ultra HD
            </span>
          </h3>

          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-8 text-gray-300">
            {t.hardwareHighlightDesc}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/40 px-6 py-3.5 backdrop-blur-md">
              <p className="text-xs font-mono text-purple-300 uppercase">{t.cardProfileLabel}</p>
              <p className="text-xl font-bold text-white mt-0.5">{t.cardProfileVal}</p>
            </div>
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/40 px-6 py-3.5 backdrop-blur-md">
              <p className="text-xs font-mono text-cyan-300 uppercase">{t.cardSizesLabel}</p>
              <p className="text-xl font-bold text-white mt-0.5">{t.cardSizesVal}</p>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/40 px-6 py-3.5 backdrop-blur-md">
              <p className="text-xs font-mono text-amber-300 uppercase">{t.cardPanelLabel}</p>
              <p className="text-xl font-bold text-amber-400 mt-0.5">{t.cardPanelVal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DEFINITION SECTION — WHAT IS SPATIAL DISPLAY? */}
      <section className="relative overflow-hidden bg-black px-6 py-24 border-b border-white/10">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              {t.defSectionBadge}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {t.defSectionTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              {t.defSectionDesc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedDefPoints.map((pt, idx) => {
              const IconComp = definitionPoints[idx].icon;
              return (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <IconComp className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{pt.title}</h3>
                  <p className="text-sm leading-7 text-gray-300">{pt.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIHUAVA AI INTEGRATION SECTION */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 border-b border-cyan-500/30">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-cyan-600/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Box */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/80 px-4 py-1.5 backdrop-blur-md mb-6">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase font-mono">
                  {t.partnershipBadge}
                </span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                {t.partnershipTitlePrefix}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                  {t.partnershipTitleHighlight}
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                {t.partnershipDesc1}
              </p>

              <div className="mt-6 rounded-2xl border border-cyan-500/40 bg-cyan-950/60 p-5 backdrop-blur-md">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                  {t.canonicalArchBadge}
                </span>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {t.canonicalArchQuote}
                </p>
              </div>

              <p className="mt-6 text-sm text-gray-400 leading-relaxed">
                {t.partnershipDesc2}
              </p>

              <div className="mt-8">
                <Link
                  href={lPath("/products/ai-digital-human")}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 underline"
                >
                  <span>{t.learnDihuavaLink}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-black/80 p-8 backdrop-blur-xl shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 font-mono">
                  {t.sysArchCardTitle}
                </h3>

                <div className="space-y-6">
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/30 p-5">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      {t.physLayerBadge}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">{t.physLayerName}</h4>
                    <ul className="mt-2 text-xs text-gray-300 space-y-1.5 font-mono">
                      {t.physBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/30 bg-sky-950/30 p-5">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                      {t.intelLayerBadge}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">{t.intelLayerName}</h4>
                    <ul className="mt-2 text-xs text-gray-300 space-y-1.5 font-mono">
                      {t.intelBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPATIAL FEATURES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {sPage.featuresTitle || t.techOverviewBadge}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.techOverviewHeading}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {localizedFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <feature.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPATIAL DISPLAY INDUSTRY APPLICATIONS */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              {t.targetDeploymentsBadge}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {t.targetDeploymentsTitle}
            </h2>
            <p className="mt-4 text-base text-gray-300">
              {t.targetDeploymentsSubtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedIndustries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group flex flex-col justify-between rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        <IndIcon className="w-6 h-6" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-300 backdrop-blur-sm">
                        {ind.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {ind.title}
                    </h3>

                    <p className="text-xs leading-6 text-gray-300 mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={lPath(ind.link)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors uppercase tracking-wider"
                    >
                      <span>{t.exploreIndustryBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS PROBLEM / VALUE SECTION */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              {t.valueSectionBadge}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {t.valueSectionTitle}
            </h2>
            <p className="mt-4 text-base text-gray-300">
              {t.valueSectionSubtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedBusinessValues.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl border border-cyan-500/20 bg-neutral-950/80 p-8 backdrop-blur-xl shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 mb-5">
                    <ValIcon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm leading-7 text-gray-300">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPATIAL DISPLAY VS CONVENTIONAL DISPLAY COMPARISON TABLE */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 font-mono uppercase">
              {t.compSectionBadge}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {t.compSectionTitle}
            </h2>
            <p className="mt-4 text-base text-gray-300">
              {t.compSectionSubtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-black/80 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-12 bg-cyan-950/80 px-6 py-4 border-b border-cyan-500/30 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
              <div className="col-span-4 sm:col-span-3">{t.tableHeaderCategory}</div>
              <div className="col-span-4 sm:col-span-4 text-gray-400">{t.tableHeaderConventional}</div>
              <div className="col-span-4 sm:col-span-5 text-cyan-300">{t.tableHeaderSpatial}</div>
            </div>

            <div className="divide-y divide-white/10">
              {localizedComparison.map((row, idx) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 px-6 py-5 text-sm ${
                    idx % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <div className="col-span-12 sm:col-span-3 font-semibold text-white font-mono mb-2 sm:mb-0">
                    {row.feature}
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-gray-400 pr-4 mb-2 sm:mb-0">
                    {row.conventional}
                  </div>
                  <div className="col-span-12 sm:col-span-5 font-semibold text-cyan-200">
                    {row.spatial}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {sPage.specsTitle || t.specsSectionBadge}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.specsSectionTitle}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-neutral-950/90 shadow-2xl backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {localizedSpecs.map((spec: any, i: number) => (
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

      <CTA
        title={t.ctaTitle}
        highlightTitle={t.ctaHighlight}
        description={t.ctaDesc}
        primaryButtonText={t.ctaPrimaryText}
        secondaryButtonText={t.ctaSecondaryText}
        secondaryButtonHref={lPath("/contact/download-center")}
      />
      <Footer />
    </main>
  );
}
