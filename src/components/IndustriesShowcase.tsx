"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark,
  ShoppingBag,
  Building2,
  Stethoscope,
  Castle,
  GraduationCap,
} from "lucide-react";

const industries = [
  {
    number: "01",
    slug: "banking",
    title: "Banking & Financial Services",
    subtitle: "Branch AI Bankers & Concierge",
    description:
      "Transform branch experiences with 3D hologram AI bankers for customer onboarding, loan explanations, queue handling, account inquiries, and multilingual financial advisory – delivering secure, interactive banking journeys.",
    useCase: "Holographic Branch Banker & Queue Assistant",
    features: [
      "AI Customer Onboarding",
      "Multilingual Financial Advisory",
      "Account & Loan Explanations",
      "Interactive Queue Handling",
    ],
    icon: Landmark,
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "02",
    slug: "retail",
    title: "Retail & Advertising",
    subtitle: "Holographic Brand Ambassadors",
    description:
      "Engage shoppers with holographic brand ambassadors, smart product explainers, Virtual Try-On mirrors, and interactive promotional displays designed to boost in-store footfall and checkout conversion rates.",
    useCase: "3D Holographic Shopping Guide & Smart Mirror",
    features: [
      "Virtual Try-On",
      "Interactive Product Discovery",
      "AI Sales Ambassador",
      "Smart Promotional Displays",
    ],
    icon: ShoppingBag,
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "03",
    slug: "corporate",
    title: "Corporate Services",
    subtitle: "Digital Receptionists & HR AI",
    description:
      "Enhance front-desk operations with digital receptionists, visitor management holograms, employee onboarding guides, and enterprise-grade AI assistants for HR, IT, and internal corporate communications.",
    useCase: "Holographic Front-Desk Receptionist",
    features: [
      "Digital Reception",
      "Visitor Check-In & Badge Issue",
      "Employee HR Support",
      "Corporate Directory",
    ],
    icon: Building2,
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "04",
    slug: "healthcare",
    title: "Healthcare & Telemedicine",
    subtitle: "Patient Triage & Navigation AI",
    description:
      "Deploy hologram healthcare assistants for patient guidance, appointment scheduling, hospital navigation, triage symptom check, and tele-consultation support with a compassionate, human-like interface.",
    useCase: "Hospital Navigation & Patient Intake AI",
    features: [
      "Patient Guidance & Triage",
      "Hospital Navigation",
      "Appointment Booking",
      "Multilingual Care Support",
    ],
    icon: Stethoscope,
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "05",
    slug: "tourism",
    title: "Tourism & Exhibitions",
    subtitle: "Hologram Tour Guides & Storytellers",
    description:
      "Deliver unforgettable visitor experiences using 3D hologram tour guides, multilingual information kiosks, exhibition storytelling avatars, and interactive museum docents powered by digital humans.",
    useCase: "Multilingual Holographic Museum Docent",
    features: [
      "Holographic Tour Guides",
      "Multilingual Exhibition Kiosks",
      "Interactive Storytelling",
      "Wayfinding & Sightseeing",
    ],
    icon: Castle,
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "06",
    slug: "education",
    title: "Education & Training",
    subtitle: "3D Hologram Tutors & Instructors",
    description:
      "Deliver immersive learning experiences using AI Digital Human tutors, campus guides, virtual science lab assistants, and 3D hologram instructors for schools, universities, and corporate academies.",
    useCase: "Interactive 3D AI Tutor & Campus Docent",
    features: [
      "3D AI Tutors & Lecturers",
      "Interactive Learning Labs",
      "Campus Orientation",
      "Multilingual Education",
    ],
    icon: GraduationCap,
    accentColor: "from-cyan-500/20 via-sky-500/5 to-transparent",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
];

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export default function IndustriesShowcase() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const localizedContent: Record<string, {
    deploymentLabel: string;
    explorePrefix: string;
    exploreSuffix: string;
    items: Array<{
      title: string;
      subtitle: string;
      description: string;
      useCase: string;
      features: string[];
    }>;
  }> = {
    zh: {
      deploymentLabel: "💡 部署场景：",
      explorePrefix: "探索 ",
      exploreSuffix: " 解决方案",
      items: [
        {
          title: "金融与银行服务",
          subtitle: "网点 AI 银行家与数字前台",
          description: "通过 3D 全息 AI 银行家重塑银行网点体验，提供开户导办、贷款政策讲解、排队分流、账户查询与多语言理理财咨询，打造安全且引人入胜的智能金融服务。",
          useCase: "全息网点 AI 银行家与智能排队助手",
          features: ["AI 开户智能引导", "多语言理财咨询", "账户与贷款政策讲解", "交互式排队分流管理"],
        },
        {
          title: "零售与智慧广告",
          subtitle: "全息品牌大使与虚拟试衣",
          description: "利用全息品牌大使、智能商品解说员、Virtual Try-On 虚拟试衣镜和交互式促销大屏吸引顾客，显著提升门店客流与结算转化率。",
          useCase: "3D 全息购物导购与智能试衣镜",
          features: ["Virtual Try-On 虚拟试衣", "交互式商品探索", "AI 销售推荐大使", "智能大屏促销展示"],
        },
        {
          title: "企业行政与前台服务",
          subtitle: "数字接待员与 HR AI 助手",
          description: "通过数字接待员、全息访客管理系统、员工入职培训指引以及面向 HR、IT 和内部沟通的企业级 AI 助手升级前台行政服务。",
          useCase: "全息前台数字接待员与访客终端",
          features: ["数字前台接待服务", "访客签到与胸牌发放", "员工 HR 政策解答", "企业人员与部门导览"],
        },
        {
          title: "医疗健康与远程医疗",
          subtitle: "患者分诊与院内导航 AI",
          description: "部署全息医疗助手，提供患者挂号就诊指引、预约挂号、院内科室导航、初步分诊症状询问以及具备人文关怀的远程问诊辅助。",
          useCase: "医院导航与患者前置预检分诊 AI",
          features: ["患者分诊与科室指引", "医院内部路线导航", "自助预约挂号服务", "多语言医疗关怀支持"],
        },
        {
          title: "文旅景区与展览展馆",
          subtitle: "全息导游与文化讲解员",
          description: "利用 3D 全息导游、多语言咨询终端、展会文化讲解数字人与博物馆交互讲解员，为游客打造令人难忘的沉浸式文化体验。",
          useCase: "多语言全息博物馆讲解员与文化导览",
          features: ["3D 全息导游讲解", "多语言展馆资讯终端", "沉浸式交互故事讲解", "景区路线指引与景点介绍"],
        },
        {
          title: "教育教学与职业培训",
          subtitle: "3D 全息导师与虚拟助教",
          description: "通过 AI 数字人导师、校园导览员、虚拟科学实验室助教与 3D 全息讲师，为学校、大学和企业培训学院提供沉浸式教学体验。",
          useCase: "交互式 3D AI 导师与校园全息导览员",
          features: ["3D AI 导师与虚拟讲师", "交互式科学实验教学", "校园迎新与环境导览", "多语言国际化教育"],
        },
      ],
    },
    ru: {
      deploymentLabel: "💡 Применение:",
      explorePrefix: "Изучить решения: ",
      exploreSuffix: "",
      items: [
        {
          title: "Банковские и финансовые услуги",
          subtitle: "ИИ-Банкиры и Цифровые Консьержи",
          description: "Трансформируйте работу отделений банками с 3D-голографическими ИИ-банкирами для оформления клиентов, консультаций по кредитам, управления очередью и финансового консалтинга на 29+ языках.",
          useCase: "Голографический ИИ-Банкир и Помощник Очереди",
          features: ["ИИ-Оформление клиентов", "Мультиязычный финансовый консалтинг", "Разъяснение счетов и кредитов", "Управление интерактивной очередью"],
        },
        {
          title: "Ритейл и Реклама",
          subtitle: "Голографические Амбассадоры Бренда",
          description: "Привлекайте покупателей голографическими амбассадорами бренда, интеллектуальными гидами по товарам, зеркалами Virtual Try-On и интерактивными рекламными экранами.",
          useCase: "3D Голографический Гид по Покупкам и Smart-Зеркало",
          features: ["Virtual Try-On (Виртуальная примерка)", "Интерактивный поиск товаров", "ИИ-Амбассадор продаж", "Интеллектуальные промо-экраны"],
        },
        {
          title: "Корпоративные Услуги",
          subtitle: "Цифровые Рецепционисты и ИИ-HR",
          description: "Улучшайте работу стойки регистрации с цифровыми рецепционистами, голографическими системами учета гостей, гидами по адаптации сотрудников и ИИ-помощниками для HR и IT.",
          useCase: "Голографический Рецепционист Стойки Регистрации",
          features: ["Цифровая регистрация", "Регистрация гостей и выдача пропусков", "HR-поддержка сотрудников", "Корпоративный справочник"],
        },
        {
          title: "Здравоохранение и Телемедицина",
          subtitle: "ИИ-Сортировка Пациентов и Навигация",
          description: "Внедряйте голографических медицинских ассистентов для маршрутизации пациентов, записи на прием, навигации по больнице и предварительной сортировки.",
          useCase: "ИИ-Навигация по Больнице и Прием Пациентов",
          features: ["Направление пациентов и сортировка", "Навигация по корпусам", "Запись на прием", "Мультиязычная поддержка"],
        },
        {
          title: "Туризм и Выставки",
          subtitle: "Голографические Гиды и Сказители",
          description: "Создавайте незабываемый опыт для туристов с 3D-голографическими гидами, мультиязычными инфокиосками и интерактивными аватарами-экскурсоводами.",
          useCase: "Мультиязычный Голографический Экскурсовод Музея",
          features: ["Голографические гиды", "Мультиязычные выставки-киоски", "Интерактивные истории", "Маршруты и достопримечательности"],
        },
        {
          title: "Образование и Обучение",
          subtitle: "3D-Голографические Тьюторы",
          description: "Обеспечивайте иммерсивное обучение с помощью ИИ-тьюторов, виртуальных лабораторных ассистентов и 3D-голографических преподавателей для вузов и корпоративных академий.",
          useCase: "Интерактивный 3D ИИ-Тьютор и Гид по Кампусу",
          features: ["3D ИИ-Преподаватели и Лекторы", "Интерактивные лаборатории", "Ориентация по кампусу", "Мультиязычное обучение"],
        },
      ],
    },
    es: {
      deploymentLabel: "💡 Despliegue:",
      explorePrefix: "Explorar soluciones de ",
      exploreSuffix: "",
      items: [
        {
          title: "Banca y servicios financieros",
          subtitle: "Banqueros con IA y Conserjería",
          description: "Transforme las sucursales con banqueros IA holográficos 3D para la incorporación de clientes, explicación de préstamos, gestión de colas, consultas de cuentas y asesoramiento financiero multilingüe.",
          useCase: "Banquero holográfico y asistente de colas",
          features: ["Incorporación de clientes con IA", "Asesoramiento financiero multilingüe", "Explicación de cuentas y préstamos", "Gestión interactiva de colas"],
        },
        {
          title: "Comercio minorista y publicidad",
          subtitle: "Embajadores de marca holográficos",
          description: "Capte compradores con embajadores holográficos de marca, explicadores inteligentes de productos, espejos Virtual Try-On y pantallas promocionales interactivas.",
          useCase: "Guía de compras holográfico 3D y espejo inteligente",
          features: ["Virtual Try-On", "Descubrimiento interactivo de productos", "Embajador de ventas con IA", "Pantallas promocionales inteligentes"],
        },
        {
          title: "Servicios corporativos",
          subtitle: "Recepcionistas digitales e IA de RRHH",
          description: "Mejore las operaciones de recepción con recepcionistas digitales, hologramas de gestión de visitantes, guías de incorporación de empleados y asistentes de IA para RRHH y TI.",
          useCase: "Recepcionista de holograma para recepción",
          features: ["Recepción digital", "Registro de visitantes y emisión de pases", "Soporte de RRHH para empleados", "Directorio corporativo"],
        },
        {
          title: "Salud y telemedicina",
          subtitle: "Triage de pacientes y navegación con IA",
          description: "Despliegue asistentes de atención médica holográficos para orientación al paciente, programación de citas, navegación hospitalaria, evaluación de síntomas y soporte de teleconsulta.",
          useCase: "Navegación hospitalaria y admisión con IA",
          features: ["Orientación y triage de pacientes", "Navegación hospitalaria", "Reserva de citas", "Soporte asistencial multilingüe"],
        },
        {
          title: "Turismo y exposiciones",
          subtitle: "Guías turísticos holográficos",
          description: "Ofrezca experiencias inolvidables a los visitantes utilizando guías turísticos holográficos 3D, quioscos de información multilingües y avatares interactivos.",
          useCase: "Guía holográfico de museo multilingüe",
          features: ["Guías turísticos holográficos", "Quioscos de exposición multilingües", "Narración interactiva", "Orientación y turismo"],
        },
        {
          title: "Educación y formación",
          subtitle: "Tutores holográficos 3D",
          description: "Ofrezca experiencias de aprendizaje inmersivas utilizando tutores Humanos Digitales con IA, guías de campus, asistentes de laboratorios virtuales e instructores holográficos 3D.",
          useCase: "Tutor interactivo 3D con IA y guía de campus",
          features: ["Tutores y profesores 3D con IA", "Laboratorios de aprendizaje interactivo", "Orientación en el campus", "Educación multilingüe"],
        },
      ],
    },
    fr: {
      deploymentLabel: "💡 Déploiement :",
      explorePrefix: "Explorer les solutions ",
      exploreSuffix: "",
      items: [
        {
          title: "Banques & Services Financiers",
          subtitle: "Banquiers IA & Conciergerie en Agence",
          description: "Transformez l'expérience en agence avec des banquiers IA holographiques 3D pour l'accueil des clients, l'explication des prêts, la gestion des files d'attente et le conseil financier multilingue.",
          useCase: "Banquier holographique et assistant de file d'attente",
          features: ["Accueil client par IA", "Conseil financier multilingue", "Explications comptes et prêts", "Gestion interactive des files d'attente"],
        },
        {
          title: "Vente au Détail & Publicité",
          subtitle: "Ambassadeurs de Marque Holographiques",
          description: "Captivez les acheteurs avec des ambassadeurs holographiques de marque, des démonstrateurs de produits intelligents, des miroirs Virtual Try-On et des affichages promotionnels interactifs.",
          useCase: "Guide d'achat holographique 3D & miroir intelligent",
          features: ["Virtual Try-On", "Découverte interactive de produits", "Ambassadeur de vente IA", "Affichages promotionnels intelligents"],
        },
        {
          title: "Services aux Entreprises",
          subtitle: "Réceptionnistes Numériques & IA RH",
          description: "Améliorez les opérations d'accueil avec des réceptionnistes numériques, des hologrammes de gestion des visiteurs, des guides d'intégration et des assistants IA pour les RH et l'IT.",
          useCase: "Réceptionniste holographique à l'accueil",
          features: ["Réception numérique", "Enregistrement des visiteurs & badges", "Support RH pour les employés", "Annuaire d'entreprise"],
        },
        {
          title: "Santé & Télémédecine",
          subtitle: "Triage des Patients & Orientation IA",
          description: "Déployez des assistants médicaux holographiques pour la guidance des patients, la prise de rendez-vous, la navigation hospitalière, le pré-triage et le support de téléconsultation.",
          useCase: "Navigation hospitalière & admission IA",
          features: ["Guidance et triage des patients", "Navigation hospitalière", "Réservation de rendez-vous", "Support de soins multilingue"],
        },
        {
          title: "Tourisme & Expositions",
          subtitle: "Guides Holographiques & Conteurs",
          description: "Proposez des expériences inoubliables grâce à des guides touristiques holographiques 3D, des bornes d'information multilingues et des avatars conteurs.",
          useCase: "Guide holographique de musée multilingue",
          features: ["Guides touristiques holographiques", "Bornes d'exposition multilingues", "Récits interactifs", "Orientation et visites"],
        },
        {
          title: "Éducation & Formation",
          subtitle: "Tuteurs Holographiques 3D",
          description: "Proposez des expériences d'apprentissage immersives avec des tuteurs Humains Virtuels IA, des guides de campus, des assistants de laboratoire virtuel et des instructeurs holographiques 3D.",
          useCase: "Tuteur interactif 3D IA & guide de campus",
          features: ["Tuteurs et enseignants 3D IA", "Laboratoires d'apprentissage interactifs", "Orientation sur le campus", "Éducation multilingue"],
        },
      ],
    },
    en: {
      deploymentLabel: "💡 Deployment:",
      explorePrefix: "Explore ",
      exploreSuffix: " Solutions",
      items: [
        {
          title: "Banking & Financial Services",
          subtitle: "Branch AI Bankers & Concierge",
          description: "Transform branch experiences with 3D hologram AI bankers for customer onboarding, loan explanations, queue handling, account inquiries, and multilingual financial advisory – delivering secure, interactive banking journeys.",
          useCase: "Holographic Branch Banker & Queue Assistant",
          features: ["AI Customer Onboarding", "Multilingual Financial Advisory", "Account & Loan Explanations", "Interactive Queue Handling"],
        },
        {
          title: "Retail & Advertising",
          subtitle: "Holographic Brand Ambassadors",
          description: "Engage shoppers with holographic brand ambassadors, smart product explainers, Virtual Try-On mirrors, and interactive promotional displays designed to boost in-store footfall and checkout conversion rates.",
          useCase: "3D Holographic Shopping Guide & Smart Mirror",
          features: ["Virtual Try-On", "Interactive Product Discovery", "AI Sales Ambassador", "Smart Promotional Displays"],
        },
        {
          title: "Corporate Services",
          subtitle: "Digital Receptionists & HR AI",
          description: "Enhance front-desk operations with digital receptionists, visitor management holograms, employee onboarding guides, and enterprise-grade AI assistants for HR, IT, and internal corporate communications.",
          useCase: "Holographic Front-Desk Receptionist",
          features: ["Digital Reception", "Visitor Check-In & Badge Issue", "Employee HR Support", "Corporate Directory"],
        },
        {
          title: "Healthcare & Telemedicine",
          subtitle: "Patient Triage & Navigation AI",
          description: "Deploy hologram healthcare assistants for patient guidance, appointment scheduling, hospital navigation, triage symptom check, and tele-consultation support with a compassionate, human-like interface.",
          useCase: "Hospital Navigation & Patient Intake AI",
          features: ["Patient Guidance & Triage", "Hospital Navigation", "Appointment Booking", "Multilingual Care Support"],
        },
        {
          title: "Tourism & Exhibitions",
          subtitle: "Hologram Tour Guides & Storytellers",
          description: "Deliver unforgettable visitor experiences using 3D hologram tour guides, multilingual information kiosks, exhibition storytelling avatars, and interactive museum docents powered by digital humans.",
          useCase: "Multilingual Holographic Museum Docent",
          features: ["Holographic Tour Guides", "Multilingual Exhibition Kiosks", "Interactive Storytelling", "Wayfinding & Sightseeing"],
        },
        {
          title: "Education & Training",
          subtitle: "3D Hologram Tutors & Instructors",
          description: "Deliver immersive learning experiences using AI Digital Human tutors, campus guides, virtual science lab assistants, and 3D hologram instructors for schools, universities, and corporate academies.",
          useCase: "Interactive 3D AI Tutor & Campus Docent",
          features: ["3D AI Tutors & Lecturers", "Interactive Learning Labs", "Campus Orientation", "Multilingual Education"],
        },
      ],
    },
  };

  const t = localizedContent[currentLocale] || localizedContent.en;

  const localizedIndustries = industries.map((ind, idx) => {
    const locItem = t.items[idx];
    return {
      ...ind,
      title: locItem ? locItem.title : ind.title,
      subtitle: locItem ? locItem.subtitle : ind.subtitle,
      description: locItem ? locItem.description : ind.description,
      useCase: locItem ? locItem.useCase : ind.useCase,
      features: locItem ? locItem.features : ind.features,
    };
  });

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="relative mx-auto max-w-7xl divide-y divide-white/10">
        {localizedIndustries.map((industry) => (
          <div key={industry.number} className="py-20 first:pt-0 last:pb-0 overflow-hidden">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* LEFT HEADER & ICON */}
              <motion.div
                initial={{ opacity: 0, x: -90 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-semibold tracking-wider text-cyan-400">
                    {industry.number}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-gray-400 backdrop-blur-sm">
                    {industry.subtitle}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
                    <industry.icon className="w-7 h-7 text-cyan-300" strokeWidth={1.75} />
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {industry.title}
                  </h2>
                </div>
              </motion.div>

              {/* RIGHT DESCRIPTION & FEATURES */}
              <motion.div
                initial={{ opacity: 0, x: 90 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                  {/* Subtle background glow */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${industry.accentColor} opacity-30`}
                  />

                  {/* Primary Use Case Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                    <span>{t.deploymentLabel}</span>
                    <span>{industry.useCase}</span>
                  </div>

                  <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {industry.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={lPath(`/industries/${industry.slug}`)}
                      className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors hover:text-cyan-400"
                    >
                      <span>{t.explorePrefix}{industry.title}{t.exploreSuffix}</span>
                      <span className="transition-transform group-hover:translate-x-1 text-lg">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}