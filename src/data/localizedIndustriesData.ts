import { IndustryDetail, industriesData } from "./industriesData";

export interface LocalizedUIStrings {
  home: string;
  industries: string;
  requestDemo: string;
  downloadPdf: string;
  targetEnvironment: string;
  targetEnvValue: string;
  coreAiArch: string;
  coreAiArchValue: string;
  statusReady: string;
  languages29: string;
  tailoredCapabilitiesBadge: string;
  tailoredCapabilitiesTitle: string;
  tailoredCapabilitiesDesc: string;
  useCasesBadge: string;
  useCasesTitle: string;
  useCasesDesc: string;
  keyAdvantage: string;
  enterpriseSpecsBadge: string;
  enterpriseSpecsTitle: string;
  faqTitleSuffix: string;
  faqDesc: string;
  exploreOtherBadge: string;
  exploreOtherTitle: string;
  viewAllIndustries: string;
}

export const localizedUI: Record<string, LocalizedUIStrings> = {
  en: {
    home: "Home",
    industries: "Industries",
    requestDemo: "Request {title} Demo →",
    downloadPdf: "Download Solution Brief (PDF)",
    targetEnvironment: "Target Environment",
    targetEnvValue: "Physical Locations, Retail Stores, VIP Lounges & Public Enclosures",
    coreAiArch: "Core AI Architecture",
    coreAiArchValue: "100% Offline GPU Inference & Local Document Intelligence RAG",
    statusReady: "STATUS: READY TO DEPLOY",
    languages29: "29+ LANGUAGES",
    tailoredCapabilitiesBadge: "Tailored Capabilities",
    tailoredCapabilitiesTitle: "Engineered specifically for {title}.",
    tailoredCapabilitiesDesc: "Our digital human platform integrates with existing enterprise systems to automate operations while preserving data privacy.",
    useCasesBadge: "DEPLOYMENT USE CASES",
    useCasesTitle: "Real-world {title} applications.",
    useCasesDesc: "Explore how our AI Hologram Box and DIHUAVA Digital Human AI platform are deployed across core operational workflows in {title}.",
    keyAdvantage: "Key Advantage:",
    enterpriseSpecsBadge: "Enterprise Specs",
    enterpriseSpecsTitle: "Technical Architecture & Standards",
    faqTitleSuffix: "FAQ",
    faqDesc: "Factual answers regarding AI Digital Human capabilities, deployment options, and operational boundaries.",
    exploreOtherBadge: "Explore Other Industries",
    exploreOtherTitle: "AI solutions for every sector",
    viewAllIndustries: "View All Industries →",
  },
  zh: {
    home: "首页",
    industries: "行业解决方案",
    requestDemo: "预约 {title} 演示 →",
    downloadPdf: "下载方案白皮书 (PDF)",
    targetEnvironment: "适用部署环境",
    targetEnvValue: "实体门店、零售大厅、VIP贵宾室及公共展厅",
    coreAiArch: "核心 AI 架构",
    coreAiArchValue: "100% 离线 GPU 推理及本地文档智能 RAG",
    statusReady: "状态：随时可部署",
    languages29: "29+ 语言支持",
    tailoredCapabilitiesBadge: "定制化核心功能",
    tailoredCapabilitiesTitle: "专为 {title} 量身打造。",
    tailoredCapabilitiesDesc: "我们的数字人平台无缝集成企业现有系统，在保护数据隐私的同时实现自动化高效运营。",
    useCasesBadge: "真实部署应用场景",
    useCasesTitle: "{title} 领域真实应用。",
    useCasesDesc: "了解我们的 AI 全息舱及 DIHUAVA 数字人平台如何赋能 {title} 的核心业务流程。",
    keyAdvantage: "核心优势：",
    enterpriseSpecsBadge: "企业级规格",
    enterpriseSpecsTitle: "技术架构与标准",
    faqTitleSuffix: "常见问题",
    faqDesc: "关于 AI 数字人功能、部署方式及技术边界的客观解答。",
    exploreOtherBadge: "探索其他行业",
    exploreOtherTitle: "覆盖各行各业的 AI 解决方案",
    viewAllIndustries: "查看所有行业 →",
  },
  ru: {
    home: "Главная",
    industries: "Отрасли",
    requestDemo: "Запросить демо {title} →",
    downloadPdf: "Скачать презентацию (PDF)",
    targetEnvironment: "Целевое окружение",
    targetEnvValue: "Физические филиалы, розничные магазины, VIP-залы и публичные зоны",
    coreAiArch: "Архитектура ИИ",
    coreAiArchValue: "100% автономный GPU-инференс и локальный RAG",
    statusReady: "СТАТУС: ГОТОВО К РАЗВЕРТЫВАНИЮ",
    languages29: "29+ ЯЗЫКОВ",
    tailoredCapabilitiesBadge: "Специализированные возможности",
    tailoredCapabilitiesTitle: "Разработано специально для {title}.",
    tailoredCapabilitiesDesc: "Наша платформа цифровых аватаров интегрируется с инфраструктурой предприятия, обеспечивая приватность данных.",
    useCasesBadge: "СЦЕНАРИИ ВНЕДРЕНИЯ",
    useCasesTitle: "Применение в сфере {title}.",
    useCasesDesc: "Узнайте, как голографические кубы и платформа DIHUAVA AI применяются в ключевых процессах {title}.",
    keyAdvantage: "Ключевое преимущество:",
    enterpriseSpecsBadge: "Корпоративные стандарты",
    enterpriseSpecsTitle: "Техническая архитектура и спецификации",
    faqTitleSuffix: "Часто задаваемые вопросы",
    faqDesc: "Ответы о возможностях AI цифровых аватаров, вариантах развертывания и стандартах безопасности.",
    exploreOtherBadge: "Другие отрасли",
    exploreOtherTitle: "Решения ИИ для всех секторов",
    viewAllIndustries: "Все отрасли →",
  },
  es: {
    home: "Inicio",
    industries: "Sectores",
    requestDemo: "Solicitar demo de {title} →",
    downloadPdf: "Descargar informe de solución (PDF)",
    targetEnvironment: "Entorno de despliegue",
    targetEnvValue: "Ubicaciones físicas, tiendas, salas VIP y espacios públicos",
    coreAiArch: "Arquitectura IA",
    coreAiArchValue: "Inferencia GPU 100% offline y RAG de documentos local",
    statusReady: "ESTADO: LISTO PARA DESPLEGAR",
    languages29: "29+ IDIOMAS",
    tailoredCapabilitiesBadge: "Capacidades adaptadas",
    tailoredCapabilitiesTitle: "Diseñado específicamente para {title}.",
    tailoredCapabilitiesDesc: "Nuestra plataforma de humanos digitales se integra con los sistemas empresariales garantizando la privacidad de los datos.",
    useCasesBadge: "CASOS DE USO",
    useCasesTitle: "Aplicaciones reales en {title}.",
    useCasesDesc: "Descubra cómo nuestras cajas holográficas 3D y la plataforma DIHUAVA AI transforman los flujos operativos en {title}.",
    keyAdvantage: "Ventaja clave:",
    enterpriseSpecsBadge: "Especificaciones empresariales",
    enterpriseSpecsTitle: "Arquitectura técnica y estándares",
    faqTitleSuffix: "Preguntas frecuentes",
    faqDesc: "Respuestas precisas sobre capacidades, opciones de despliegue y límites operativos.",
    exploreOtherBadge: "Explorar otros sectores",
    exploreOtherTitle: "Soluciones de IA para cada industria",
    viewAllIndustries: "Ver todos los sectores →",
  },
  fr: {
    home: "Accueil",
    industries: "Secteurs d'activité",
    requestDemo: "Demander une démo {title} →",
    downloadPdf: "Télécharger la fiche solution (PDF)",
    targetEnvironment: "Environnement de déploiement",
    targetEnvValue: "Espaces physiques, boutiques, salons VIP et espaces publics",
    coreAiArch: "Architecture IA",
    coreAiArchValue: "Inférence GPU 100% hors ligne & RAG documentaire local",
    statusReady: "STATUT : PRÊT À DÉPLOYER",
    languages29: "29+ LANGUES",
    tailoredCapabilitiesBadge: "Fonctionnalités sur mesure",
    tailoredCapabilitiesTitle: "Conçu spécifiquement pour {title}.",
    tailoredCapabilitiesDesc: "Notre plateforme d'humains virtuels s'intègre aux systèmes d'entreprise existants tout en préservant la confidentialité des données.",
    useCasesBadge: "CAS D'USAGE",
    useCasesTitle: "Applications concrètes pour {title}.",
    useCasesDesc: "Découvrez comment nos boîtiers holographiques 3D et la plateforme DIHUAVA AI sont déployés dans le secteur {title}.",
    keyAdvantage: "Avantage clé :",
    enterpriseSpecsBadge: "Spécifications d'entreprise",
    enterpriseSpecsTitle: "Architecture technique et normes",
    faqTitleSuffix: "Foire aux questions",
    faqDesc: "Réponses factuelles concernant les capacités, les modes de déploiement et les limites opérationnelles.",
    exploreOtherBadge: "Explorer d'autres secteurs",
    exploreOtherTitle: "Solutions IA pour tous les secteurs",
    viewAllIndustries: "Voir tous les secteurs →",
  },
};

export const localizedIndustriesData: Record<string, Record<string, IndustryDetail>> = {
  zh: {
    banking: {
      ...industriesData.banking,
      title: "金融与银行服务",
      subtitle: "3D 全息 AI 银行家与高级客户服务助手",
      badge: "100% 物理隔离银行级 AI",
      description:
        "利用 3D 全息 AI 银行家重塑网点体验，高效办理开户咨询、贷款讲解、排队分流、账户查询及多语言理财顾问，打造安全互动的数字金融体验。",
      heroOverview:
        "在银行 VIP 贵宾室、财富管理中心及零售网点部署 100% 离线、物理隔离的数字人分身。数字人可在本地芯片上完成即时账户查询、贷款申请指导、合规条款告知及多语言客户服务，严防数据泄露。",
      metrics: [
        { label: "本地设备计算处理", value: "100%" },
        { label: "网点客户互动提升", value: "3.2倍" },
        { label: "排队等候时间缩短", value: "40%" },
        { label: "支持全球语言", value: "29+" },
      ],
      capabilities: [
        {
          title: "100% 物理隔离安全保障",
          description:
            "所有语音识别、数字人动画渲染及文档 RAG 检索均在本地 GPU 硬件上严格运行，零数据上传至公有云。",
          icon: "🔒",
        },
        {
          title: "本地银行业务文档 RAG",
          description:
            "在本地即时解析保密信贷政策 PDF、利率表及合规条款，提供准确无误的客户咨询解答。",
          icon: "📄",
        },
        {
          title: "多语言金融理财顾问",
          description:
            "支持 29+ 种全球语言及方言的实时自动识别与自然语音交互，具备专业金融语调。",
          icon: "🌐",
        },
        {
          title: "智能排队分流大堂经理",
          description:
            "亲切迎接入店客户、打印排队号码牌、核对预约信息并精准引导至对应业务窗口。",
          icon: "🎫",
        },
      ],
      useCases: [
        {
          title: "AI 银行接待大堂经理",
          category: "网点接待",
          description: "迎接入店访客，管理客户签到，发放排队号码牌，并将客户引导至相关窗口或理财专区。",
          highlight: "自主前台接待服务",
        },
        {
          title: "私人财富管理助手",
          category: "VIP 理财顾问",
          description: "为高净值客户提供专属 1:1 比例 3D 全息顾问，讲解投资组合、市场趋势及私人银行条款。",
          highlight: "1:1 等身全息显示",
        },
        {
          title: "贷款与房屋抵押顾问",
          category: "信贷咨询",
          description: "以生动的语音交互拆解复杂的房贷细则、利率计算、还款计划及贷款资质要求。",
          highlight: "信贷与贷款拆解",
        },
        {
          title: "金融产品推荐官",
          category: "产品展示",
          description: "实时展示信用卡、储蓄方案及投资计划的互动卡片与语音讲解。",
          highlight: "互动金融产品目录",
        },
        {
          title: "网点排队与客户引导",
          category: "排队自动化",
          description: "通过全息迎宾助手接待访客、扫描 QR 码签到并引导客户至服务窗口，缓解大厅拥堵。",
          highlight: "签到速度提升 40%",
        },
        {
          title: "多语言外币与跨境服务",
          category: "全球化服务",
          description: "以 29+ 种全球语言为国际客户及外籍人士提供本地化的金融术语解答与服务。",
          highlight: "本地运行 29+ 语言",
        },
      ],
      techSpecs: [
        { label: "数据处理模式", value: "100% 本地 GPU 芯片离线物理隔离运行" },
        { label: "安全合规认证", value: "符合 ISO 27001 及银行级网络安全架构" },
        { label: "硬件设备规格", value: "65吋, 75吋, 86吋 3D 全息舱及互动立式终端" },
        { label: "文档解析能力", value: "实时本地 PDF / DOCX RAG 向量检索引擎" },
      ],
      metaTitle: "金融与银行服务 AI 数字人与全息解决方案 | HS Global AI",
      metaDescription: "部署 100% 物理隔离离线 AI 数字人及 3D 全息银行家，赋能 VIP 财富中心、零售网点迎宾及多语言金融咨询。",
    },

    retail: {
      ...industriesData.retail,
      title: "零售与广告营销",
      subtitle: "全息品牌形象大使与虚拟试衣试戴",
      badge: "沉浸式零售科技",
      description:
        "通过全息品牌形象大使、智能产品讲解员、Virtual Try-On 试衣镜及互动营销大屏吸引顾客，显著提升店内客流与结账转化率。",
      heroOverview:
        "将传统橱窗和奢侈品展厅升级为互动式 3D 购物体验。全息数字人形象大使亲切迎宾，展示名表、珠宝、服装及电子产品，用 29+ 种语言解答规格，并提供实时虚拟试衣体验。",
      metrics: [
        { label: "销售转化率提升", value: "2.8倍" },
        { label: "顾客驻足时间增加", value: "+65%" },
        { label: "店内互动率", value: "3倍" },
        { label: "云端依赖度", value: "0%" },
      ],
      capabilities: [
        {
          title: "实时虚拟试衣与试戴",
          description: "让顾客即时通过数字叠加呈现方式试穿服装、试戴眼镜及奢侈珠宝。",
          icon: "✨",
        },
        {
          title: "3D 全息产品目录展示",
          description: "以光学立体深度与 360 度旋转视觉展示高奢精品的精细 3D 模型。",
          icon: "💎",
        },
        {
          title: "AI 智能交叉销售推荐",
          description: "根据顾客咨询与产品偏好，智能推荐搭配商品并呈献实时促销优惠。",
          icon: "📈",
        },
        {
          title: "多语言门店迎宾导购",
          description: "使用国际游客母语亲切迎宾，并精准引导顾客前往目标楼层与展位。",
          icon: "🌍",
        },
      ],
      useCases: [
        {
          title: "临街橱窗全息形象大使",
          category: "24/7 全天候广告",
          description: "在非营业时间依然通过瞩目的 3D 全息数字人展示当季新款，吸引街头客流。",
          highlight: "24小时无人值守互动",
        },
        {
          title: "试衣间互动试衣镜",
          category: "Virtual Try-On 试衣",
          description: "无需频繁更换衣服，通过秒级渲染网格技术即时预览服装上身效果。",
          highlight: "秒级实时试衣覆盖",
        },
        {
          title: "新品发布与品牌路演展位",
          category: "活动营销",
          description: "部署定制化的品牌 AI 形象大使，讲述品牌历史并带来令人难忘的产品讲解。",
          highlight: "互动式品牌故事讲述",
        },
        {
          title: "AI 零售导购顾问",
          category: "店内销售",
          description: "推荐搭配产品，展示优惠折扣，并用自然语音详尽拆解产品参数。",
          highlight: "智能产品目录 AI",
        },
        {
          title: "商场多语言导览服务",
          category: "商场导览",
          description: "使用 29+ 种全球语言接待国际游客，提供商铺地图与导览帮助。",
          highlight: "支持 29+ 语言",
        },
        {
          title: "品牌数字人合影拍照终端",
          category: "社媒裂变",
          description: "允许顾客与品牌数字人合影，并通过二维码手机扫码即时下载保存分享。",
          highlight: "扫码极速下载分享",
        },
      ],
      techSpecs: [
        { label: "显示技术", value: "高透光率 4K 空间立体全息玻璃" },
        { label: "传感器与摄像头", value: "4K 深度摄像头 + 距离传感器 + 触摸感应层" },
        { label: "试衣算法引擎", value: "实时神经网络网格匹配与衣物贴合变形 AI" },
        { label: "内容渲染流水线", value: "离线高保真 3D 渲染管线" },
      ],
      metaTitle: "零售与广告营销 AI 数字人及全息解决方案 | HS Global AI",
      metaDescription: "部署 3D 全息品牌形象大使、Virtual Try-On 虚拟试衣镜及互动式展厅终端，全面重塑零售体验。",
    },

    corporate: {
      ...industriesData.corporate,
      title: "企业服务与人力资源",
      subtitle: "数字人前台接待与 HR 智能助手",
      badge: "企业级 AI 前台礼宾",
      description:
        "通过数字人接待员、访客管理全息舱、员工入职导览以及 HR/IT 本地知识库助手提升行政与企业前台效率。",
      heroOverview:
        "在集团总部大厅及办公区域部署 AI 数字人接待员。实现访客自助签到、自动打印访客贴纸、通过本地 PDF RAG 解答员工 HR 制度，大幅提升行政效率。",
      metrics: [
        { label: "前台重复工作替代率", value: "85%" },
        { label: "系统稳定运行时间", value: "99.9%" },
        { label: "访客签到处理速度", value: "< 1秒" },
        { label: "本地计算处理", value: "100%" },
      ],
      capabilities: [
        {
          title: "无人化智能前台接待",
          description: "迎接入境访客、扫描邀请二维码、打印访客证并自动发送 Slack/短信通知接待员工。",
          icon: "👋",
        },
        {
          title: "本地 HR 制度文档 RAG",
          description: "基于企业员工手册，精准解答医疗福利、休假制度及差旅报销等问题。",
          icon: "📋",
        },
        {
          title: "办公园区导航与会议室指引",
          description: "提供立体地图导航，指引嘉宾前往指定会议室与高管办公室。",
          icon: "🗺️",
        },
        {
          title: "多语言企业通讯录查阅",
          description: "使用 29+ 种全球语言协助全球分公司访客快速对接各部门负责人。",
          icon: "🌐",
        },
      ],
      useCases: [
        {
          title: "全息前台接待员",
          category: "前台 AI",
          description: "在集团大堂投射立体 3D 全息接待员，接待贵宾并优化访客登记流程。",
          highlight: "自主接待 AI 助手",
        },
        {
          title: "访客签到与胸卡打印终端",
          category: "安全门禁",
          description: "扫描二维码邀请函，记录访客日志，并自动通知内部接待员工。",
          highlight: "秒级 QR 签到与打印",
        },
        {
          title: "本地 HR 与行政制度助手",
          category: "内部运营",
          description: "7x24 小时保密解答员工福利政策、IT 排障步骤与规章制度。",
          highlight: "私密本地 PDF RAG",
        },
        {
          title: "高管大厅 VIP 礼宾助手",
          category: "高管服务",
          description: "以定制化欢迎词迎接入住贵宾，提供日程摘要与专属接待指引。",
          highlight: "VIP 大堂礼宾",
        },
        {
          title: "新员工入职与园区导览",
          category: "员工培训",
          description: "通过互动 3D 数字人带新员工了解企业文化、安全规范及办公设施。",
          highlight: "互动式入职培训",
        },
        {
          title: "多语言企业通讯录查询",
          category: "全球通讯录",
          description: "用 29+ 种语言协助海外来访客户与跨国团队高效对接。",
          highlight: "支持 29+ 全球语言",
        },
      ],
      techSpecs: [
        { label: "企业系统对接", value: "支持 Slack, MS Teams, Outlook 及打印机联动" },
        { label: "外观形态选择", value: "等身 3D 全息舱或超薄大厅立式终端" },
        { label: "安全标准", value: "企业级物理隔离存储与本地向量索引" },
        { label: "运行模式", value: "7x24 小时连续稳定运行" },
      ],
      metaTitle: "企业服务与 HR 智能数字人前台 | HS Global AI",
      metaDescription: "通过 3D 全息 AI 前台接待员自动化办公大堂接待、访客登记与 HR 政策解答。",
    },

    healthcare: {
      ...industriesData.healthcare,
      title: "医疗健康与远程医疗",
      subtitle: "温情导诊分诊与医院导航 AI 助手",
      badge: "100% 离线保护患者隐私",
      description:
        "在 3D 全息舱或 Spatial Display 上部署 AI 数字人，提供患者导诊、医院导航、预约指导、初步分诊辅助及术前术后注意事项说明，100% 保护患者隐私。",
      heroOverview:
        "在医院大厅、诊所及医疗中心为患者和家属提供富有同理心的数字人助手。提供即时医院导航、预检分诊辅助、预约查询及多语言就医说明。基于 DIHUAVA 平台，所有交互默认 100% 离线运行，严防健康数据泄露。",
      metrics: [
        { label: "患者隐私保护", value: "100%" },
        { label: "支持全球语言", value: "29+" },
        { label: "特色方言支持", value: "7种" },
        { label: "系统可用性", value: "24/7" },
      ],
      capabilities: [
        {
          title: "100% 患者隐私与物理隔离",
          description: "语音识别、文档解析及交互全过程严格在本地硬件运行，零云端数据传输。",
          icon: "🛡️",
        },
        {
          title: "预检分诊与行政引导",
          description: "以亲切同理的语调收集基本分诊信息，协助护士台进行初步科室分流。",
          icon: "🩺",
        },
        {
          title: "院内科室路线导航",
          description: "按楼层指引患者及家属前往复杂门诊楼、检验科、影像中心及药房窗口。",
          icon: "📍",
        },
        {
          title: "术前准备与术后康复说明",
          description: "用清晰易懂的语音向患者讲解手术注意规程、出院医嘱及行政办手续步骤。",
          icon: "📝",
        },
      ],
      useCases: [
        {
          title: "医院门诊接待与导诊",
          category: "就医体验",
          description: "协助到院患者查询科室分布、专家出诊信息及挂号登记指导。",
          highlight: "亲切导诊服务",
        },
        {
          title: "院内路线与科室导航",
          category: "路线指引",
          description: "按楼层指引患者与家属前往化验室、放射科、住院部及取药窗口。",
          highlight: "多语言楼层导航",
        },
        {
          title: "预约与诊室信息查询",
          category: "预约服务",
          description: "帮助患者确认预约时段、核对诊室位置及查看预计候诊时间。",
          highlight: "即时预约查询",
        },
        {
          title: "患者宣教与医嘱说明",
          category: "健康宣教",
          description: "以温和语音讲解术前禁食要求、检查准备步骤及出院注意事项。",
          highlight: "清晰医嘱讲解",
        },
        {
          title: "医疗行政与探视咨询",
          category: "行政咨询",
          description: "解答探视时间、停车收费、医保结算窗口及院内便民设施等日常问题。",
          highlight: "7x24 咨询服务",
        },
        {
          title: "本地医疗宣教手册 RAG 检索",
          category: "本地文档 RAG",
          description: "通过本地 RAG 快速检索院内科普手册与就医指南，无需连接外网。",
          highlight: "100% 本地文档 RAG",
        },
        {
          title: "多语言就医无障碍沟通",
          category: "无障碍医疗",
          description: "流畅使用 29+ 种全球语言及方言与多元化患者群体沟通。",
          highlight: "支持 29+ 语言",
        },
        {
          title: "医护前台减负助手",
          category: "医护减负",
          description: "分担高频咨询与登记工作，让导诊护士专注于急救与临床照顾。",
          highlight: "有效减轻导诊压力",
        },
      ],
      techSpecs: [
        { label: "数据安全与隐私保护", value: "100% 本地离线推理（符合 HIPAA / GDPR 隐私规范）" },
        { label: "系统架构说明", value: "默认 100% 离线运行，可选云端管理模块" },
        { label: "语言支持范围", value: "29+ 全球语言及多地区方言" },
        { label: "硬件终端形态", value: "1:1 比例 3D 全息舱或 6 cm 超薄 Spatial Display" },
        { label: "业务边界声明", value: "仅提供导诊及行政信息指引，不提供医疗诊断与临床决策" },
      ],
      metaTitle: "医疗健康与医院导诊 AI 数字人解决方案 | HS Global AI",
      metaDescription: "部署 100% 离线物理隔离的 AI 数字人医疗助手，优化导诊分诊、院内导航及患者隐私保护。",
    },

    tourism: {
      ...industriesData.tourism,
      title: "文旅文博与展会展览",
      subtitle: "多语言全息导游与博物馆讲解员",
      badge: "文旅文化 AI 导览",
      description:
        "通过 3D 全息导游、多语言咨询终端、展品讲解数字人及互动博物馆讲解员打造令人难忘的参观体验。",
      heroOverview:
        "在博物馆、遗迹景区、展览馆及世博展厅部署 3D 全息导游。数字人支持 29+ 种语言，借助本地 RAG 讲述历史典故，让文化遗产焕发活力。",
      metrics: [
        { label: "游客互动体验提升", value: "4倍" },
        { label: "支持全球语言", value: "29+" },
        { label: "展览满意度", value: "95%" },
        { label: "运行服务时间", value: "24/7" },
      ],
      capabilities: [
        {
          title: "3D 全息历史人物复原",
          description: "在 1:1 比例全息舱内逼真还原历史名人、文化符号或虚拟导览员。",
          icon: "👑",
        },
        {
          title: "多语言文化讲解员",
          description: "根据游客母语自动切换语言，呈现自然生动的语音与地方口音。",
          icon: "🗣️",
        },
        {
          title: "历史文献 RAG 检索",
          description: "导入博物馆馆藏目录、历史文献及语音讲解词，支持深度问答。",
          icon: "📚",
        },
        {
          title: "景区路线与旅游指引",
          description: "提供城市旅游推荐、门票预订说明、交通指引及活动日程。",
          icon: "🗺️",
        },
      ],
      useCases: [
        {
          title: "3D 全息博物馆讲解员",
          category: "文博讲解",
          description: "投射立体历史人物与游客互动，解答文物来源并讲述历史传奇故事。",
          highlight: "等身 3D 全息呈现",
        },
        {
          title: "历史档案故事讲授数字人",
          category: "非遗文化",
          description: "以定制复古音色生动吟诵古籍文献、文物背景与民间传说。",
          highlight: "历史文献 PDF RAG",
        },
        {
          title: "国际展会国家馆导览员",
          category: "会展服务",
          description: "以多语言接待全球参展嘉宾，详细讲解展馆亮点与科技成果。",
          highlight: "支持 29+ 语言",
        },
        {
          title: "城市游客中心 24H 咨询终端",
          category: "旅游服务",
          description: "全天候提供游览路线规划、酒店推荐及文化演出门票帮助。",
          highlight: "24/7 全天候旅游助手",
        },
        {
          title: "与历史人物全息合影终端",
          category: "游客纪念",
          description: "支持游客与历史人物全息影像合影，并通过扫码即时下载留念。",
          highlight: "秒级合成扫码下载",
        },
        {
          title: "多语言观光导览指引",
          category: "路线导航",
          description: "用游客母语讲解城市地图、公交线路及景点购票指南。",
          highlight: "多语言城市导览",
        },
      ],
      techSpecs: [
        { label: "光学透视技术", value: "高透光率立体全息成像玻璃" },
        { label: "语音合成引擎", value: "29+ 全球语言合成与口音自适应" },
        { label: "数字人动画管线", value: "立体 3D 渲染与实时口型同步" },
        { label: "环境适应能力", value: "抗强光、防高噪音工业级硬件" },
      ],
      metaTitle: "文旅文博 3D 全息导游与博物馆数字人 | HS Global AI",
      metaDescription: "部署 3D 全息导游、多语言互动讲解员及文旅问答终端，提升博物馆与展览体验。",
    },

    education: {
      ...industriesData.education,
      title: "教育科研与职业培训",
      subtitle: "3D 全息 AI 教师与虚拟实验助手",
      badge: "下一代教育科技 AI",
      description:
        "为学校、高校及企业培训中心提供沉浸式学习体验，部署 3D 全息讲师、校园导览员及虚拟实验室助手。",
      heroOverview:
        "在高校、中小学及企业大学重塑教学体验。学生可与 3D 全息教师自然交互，探讨 STEM 科学概念、练习外语、开展虚拟实验步序学习。",
      metrics: [
        { label: "学生课堂专注度提升", value: "3.5倍" },
        { label: "教学反馈满意度", value: "92%" },
        { label: "学习辅导可用时间", value: "24/7" },
        { label: "支持语言种类", value: "29+" },
      ],
      capabilities: [
        {
          title: "3D 全息立体 AI 讲师",
          description: "在全息舱内配合 3D 科学模型呈现生动立体的 STEM 科学课程。",
          icon: "🔬",
        },
        {
          title: "多语言外语口语对练",
          description: "提供 29+ 种语言的无尽口语对话练习，配备自然发音纠正。",
          icon: "💬",
        },
        {
          title: "虚拟实验室安全操作助手",
          description: "一步步指引学生完成化学实验规程、安全检查与设备操作。",
          icon: "🧪",
        },
        {
          title: "校园招生与导航助手",
          description: "协助新生及家长了解学校概况、专业设置、入学标准及校园路线。",
          icon: "🏫",
        },
      ],
      useCases: [
        {
          title: "3D 全息 STEM 科学导师",
          category: "3D 智慧教育",
          description: "将历史伟大科学家与复杂的 3D 物理化学模型生动呈现在课堂上。",
          highlight: "3D STEM 全息导师",
        },
        {
          title: "高校办事大厅数字人导览",
          category: "校园服务",
          description: "24 小时解答课程表、图书馆资源、奖学金申请及校园地图。",
          highlight: "24/7 校园办事助手",
        },
        {
          title: "虚拟实验室安全指导员",
          category: "实验教学",
          description: "引导工程与化学系学生严格按照安全规范完成实验步骤。",
          highlight: "实验安全分步指导",
        },
        {
          title: "多语言外语口语练习伙伴",
          category: "语言教学",
          description: "提供 29+ 语言的实时对话练习，即时反馈发音与语法纠正。",
          highlight: "支持 29+ 语言口语对练",
        },
        {
          title: "企业培训技能实操终端",
          category: "职业培训",
          description: "在零售、航空及工矿企业中开展模拟情景演练与合规测试。",
          highlight: "情景模拟实操演练",
        },
        {
          title: "招生咨询与新生入学导览",
          category: "招生服务",
          description: "解答报考条件、学费标准、专业方向及宿舍分布。",
          highlight: "智能招生咨询助手",
        },
      ],
      techSpecs: [
        { label: "知识库引擎", value: "基于教材与课程大纲的本地 PDF RAG 检索" },
        { label: "交互体验", value: "自然语音对话 + 触摸屏视觉互动" },
        { label: "语言训练", value: "自适应口音多语言口语对话 AI" },
        { label: "LMS 系统兼容", value: "支持对接 Canvas, Moodle, Blackboard 等平台" },
      ],
      metaTitle: "3D 全息 AI 教师与教育数字人 | HS Global AI",
      metaDescription: "通过 3D 全息 AI 导师、虚拟实验助手、校园招生导览及多语言教学数字人革新教育体验。",
    },
  },

  ru: {
    banking: {
      ...industriesData.banking,
      title: "Банки и финансовые услуги",
      subtitle: "3D-голографические ИИ-банкиры и ассистенты",
      badge: "АВТОНОМНЫЙ ИИ ДЛЯ БАНКОВ",
      description:
        "Трансформируйте обслуживание в отделениях с помощью 3D-голографических ИИ-банкиров для консультаций, объяснения условий кредитования и многоязычной поддержки.",
      heroOverview:
        "Разворачивайте 100% автономные аватары в VIP-залах банков и отделениях. Аватары мгновенно отвечают на запросы по счетам и кредитам, сохраняя финансовые данные локально.",
      metrics: [
        { label: "Локальная обработка", value: "100%" },
        { label: "Рост вовлеченности", value: "3.2x" },
        { label: "Сокращение очередей", value: "40%" },
        { label: "Поддержка языков", value: "29+" },
      ],
      capabilities: [
        {
          title: "100% Автономная безопасность",
          description: "Распознавание речи, рендеринг аватара и локальный RAG работают строго на локальном GPU.",
          icon: "🔒",
        },
        {
          title: "Локальный RAG по банковским документам",
          description: "Мгновенные ответы по условиям кредитования и регламентам из локальных PDF-файлов.",
          icon: "📄",
        },
        {
          title: "Многоязычные финансовые консультации",
          description: "Распознавание и поддержка 29+ языков в реальном времени с естественнои интонацией.",
          icon: "🌐",
        },
        {
          title: "Интерактивный консьерж очередей",
          description: "Приветствует клиентов, выдает талоны очереди и направляет к нужным окнам.",
          icon: "🎫",
        },
      ],
      useCases: [
        {
          title: "ИИ-Администратор отделения",
          category: "Прием клиентов",
          description: "Приветствие посетителей, выдача талонов очереди и маршрутизация клиентов.",
          highlight: "Автономный администратор",
        },
        {
          title: "Консультант Private Banking",
          category: "VIP-обслуживание",
          description: "Объяснение инвестиционных портфелей для VIP-клиентов в формате 3D-голограммы 1:1.",
          highlight: "Голограмма в натуральную величину",
        },
        {
          title: "Ассистент по кредитам и ипотеке",
          category: "Кредитование",
          description: "Наглядное разъяснение ипотечных ставок, графиков платежей и требований к заемщикам.",
          highlight: "Разбор кредитных программ",
        },
        {
          title: "Презентер банковских продуктов",
          category: "Каталог продуктов",
          description: "Интерактивные карточки кредитных карт, вкладов и инвестиционных планов.",
          highlight: "Интерактивный каталог",
        },
        {
          title: "Управление очередью в отделении",
          category: "Оптимизация очередей",
          description: "Сканирование QR-кодов и распределение потока клиентов в зале.",
          highlight: "Ускорение регистрации на 40%",
        },
        {
          title: "Многоязычный банковский ассистент",
          category: "Международный сервис",
          description: "Обслуживание иностранных клиентов на 29+ языках с локальной терминологией.",
          highlight: "29+ языков локально",
        },
      ],
      techSpecs: [
        { label: "Обработка данных", value: "100% Автономная работа на локальном GPU" },
        { label: "Стандарты безопасности", value: "Соответствие ISO 27001 и банковским стандартам" },
        { label: "Форм-факторы оборудования", value: "3D-Голографические кубы 65\", 75\", 86\" и киоски" },
        { label: "Обработка документов", value: "Локальный векторный движок RAG для PDF / DOCX" },
      ],
      metaTitle: "ИИ Цифровые Аватары и Голограммы для Банков | HS Global AI",
      metaDescription: "Автономные ИИ цифровые аватары и 3D-голографические банкиры для VIP-залов и отделений банков.",
    },

    retail: {
      ...industriesData.retail,
      title: "Ритейл и реклама",
      subtitle: "Голографические амбассадоры бренда и виртуальная примерка",
      badge: "ИННОВАЦИОННЫЙ РИТЕЙЛ",
      description:
        "Привлекайте покупателей голографическими амбассадорами бренда, виртуальной примеркой Virtual Try-On и интерактивными дисплеями.",
      heroOverview:
        "Превратите витрины и торговые залы в интерактивное 3D-пространство. Голографические аватары демонстрируют товары, отвечают на вопросы на 29+ языках и поддерживают примерку.",
      metrics: [
        { label: "Рост конверсии продаж", value: "2.8x" },
        { label: "Увеличение времени контакта", value: "+65%" },
        { label: "Вовлеченность в магазине", value: "3x" },
        { label: "Зависимость от облака", value: "0%" },
      ],
      capabilities: [
        {
          title: "Виртуальная примерка Virtual Try-On",
          description: "Мгновенная цифровое наложение одежды, очков и ювелирных украшений в реальном времени.",
          icon: "✨",
        },
        {
          title: "3D-Голографический каталог",
          description: "Демонстрация объемных 3D-моделей премиальных товаров с вращением на 360 градусов.",
          icon: "💎",
        },
        {
          title: "ИИ-Рекомендации товаров",
          description: "Персонализированные рекомендации сопутствующих товаров и специальных предложений.",
          icon: "📈",
        },
        {
          title: "Многоязычный консьерж витрины",
          description: "Приветствие иностранных туристов на их родном языке и навигация по торговому центру.",
          icon: "🌍",
        },
      ],
      useCases: [
        {
          title: "Голографический амбассадор витрины",
          category: "Круглосуточная реклама",
          description: "Привлечение внимания прохожих 3D-голограммой даже во внерабочее время.",
          highlight: "Автономная работа 24/7",
        },
        {
          title: "Умное зеркало и примерка",
          category: "Virtual Try-On",
          description: "Примерка нарядов без посещения примерочной кабины благодаря быстрому рендерингу.",
          highlight: "Мгновенная наложение одежды",
        },
        {
          title: "Презентации новых продуктов",
          category: "Ивент-маркетинг",
          description: "Интерактивный рассказ об истории бренда и параметрах новинок.",
          highlight: "Интерактивный сторителлинг",
        },
        {
          title: "ИИ-Консультант по продажам",
          category: "Продажи в зале",
          description: "Рекомендация аксессуаров и подробное описание характеристик голосом.",
          highlight: "Умный ИИ-Каталог",
        },
        {
          title: "Навигация в торговом центре",
          category: "Консьерж ТРЦ",
          description: "Помощь туристам на 29+ языках с картой магазинов и схемой проезда.",
          highlight: "29+ языков",
        },
        {
          title: "Фотозоны с аватаром бренда",
          category: "Социальный маркетинг",
          description: "Создание совместных фото с аватаром и мгновенная загрузка через QR-код.",
          highlight: "Быстрое скачивание по QR",
        },
      ],
      techSpecs: [
        { label: "Технология дисплея", value: "4K Голографическое стекло высокой прозрачности" },
        { label: "Датчики и камеры", value: "4K Камера глубины + Датчик присутствия" },
        { label: "Движок примерки", value: "Нейросетевая примерка одежды Virtual Try-On" },
        { label: "Рендеринг", value: "Локальный пайплайн 3D-рендеринга высокой четкости" },
      ],
      metaTitle: "ИИ Цифровые Аватары для Ритейла и Рекламы | HS Global AI",
      metaDescription: "3D-Голографические амбассадоры, виртуальная примерка и интерактивные стойки для ритейла.",
    },

    corporate: {
      ...industriesData.corporate,
      title: "Корпоративные сервисы и HR",
      subtitle: "Цифровые администраторы и ИИ-помощники HR",
      badge: "КОРПОРАТИВНЫЙ ИИ-КОНСЬЕРЖ",
      description:
        "Автоматизация рецепции, управление посетителями, адаптация сотрудников и поддержка HR с помощью ИИ-аватаров.",
      heroOverview:
        "Оснастите главные холлы офисов цифровыми администраторами. Автоматизируйте регистрацию гостей, печать пропусков и ответы на вопросы по регламентам через RAG.",
      metrics: [
        { label: "Автоматизация рецепции", value: "85%" },
        { label: "Время бесперебойной работы", value: "99.9%" },
        { label: "Скорость регистрации", value: "< 1 сек" },
        { label: "Локальная обработка", value: "100%" },
      ],
      capabilities: [
        {
          title: "Автономный администратор",
          description: "Встреча гостей, сканирование QR-приглашений, печать бейджей и уведомление сотрудников.",
          icon: "👋",
        },
        {
          title: "Локальный RAG по регламентам HR",
          description: "Ответы на вопросы о льготах, отпусках и больничных из корпоративных регламентов.",
          icon: "📋",
        },
        {
          title: "Навигация по офису и переговорным",
          description: "Интерактивные карты этажей и сопровождение гостей до нужных кабинетов.",
          icon: "🗺️",
        },
        {
          title: "Многоязычный справочник",
          description: "Соединение иностранных гостей с руководителями отделов на 29+ языках.",
          icon: "🌐",
        },
      ],
      useCases: [
        {
          title: "Голографический администратор",
          category: "ИИ на рецепции",
          description: "Проекция 3D-голограммы на рецепции для встречи VIP-гостей и регистрации.",
          highlight: "Автономный ИИ-администратор",
        },
        {
          title: "Киоск регистрации и печати пропусков",
          category: "Безопасность",
          description: "Сканирование QR-кода, фиксация визита и отправка уведомлений в Slack/SMS.",
          highlight: "Мгновенный QR-чек-ин",
        },
        {
          title: "HR-Ассистент по внутренним документам",
          category: "Внутренние сервисы",
          description: "Круглосуточные ответы по корпоративной политике и IT-поддержке.",
          highlight: "Конфиденциальный PDF RAG",
        },
        {
          title: "VIP-Консьерж в представительском холле",
          category: "VIP-Сервис",
          description: "Персональное приветствие топ-менеджеров и ключевых партнеров.",
          highlight: "VIP-Консьерж",
        },
        {
          title: "Обучение и онбординг новичков",
          category: "Обучение",
          description: "Знакомство новых сотрудников с культурой компании и правилами безопасности.",
          highlight: "Интерактивный онбординг",
        },
        {
          title: "Международный корпоративный справочник",
          category: "Глобальный справочник",
          description: "Помощь зарубежным коллегам в поиске контактов на 29+ языках.",
          highlight: "Поддержка 29+ языков",
        },
      ],
      techSpecs: [
        { label: "Корпоративная интеграция", value: "Интеграция со Slack, MS Teams, Outlook и принтерами" },
        { label: "Конструкция", value: "3D-Голографический куб во весь рост или тонкая стойка" },
        { label: "Безопасность", value: "Автономное хранение данных и локальные векторы" },
        { label: "Режим работы", value: "Непрерывный режим 24/7" },
      ],
      metaTitle: "Цифровые Администраторы и HR ИИ-Ассистенты | HS Global AI",
      metaDescription: "Автоматизация рецепции, регистрации посетителей и HR-поддержки с помощью 3D-голограмм.",
    },

    healthcare: {
      ...industriesData.healthcare,
      title: "Здравоохранение и телемедицина",
      subtitle: "Навигация в клиниках и информационная поддержка пациентов",
      badge: "100% ЗАЩИТА ДАННЫХ ПАЦИЕНТОВ",
      description:
        "Разворачивайте цифровых аватаров для навигации по больнице, помощи в регистратуре и пояснения памятек по лечению со 100% приватностью данных.",
      heroOverview:
        "Помогайте пациентам и посетителям в медицинских центрах. Мгновенная навигация, помощь в маршрутизации и многоязычные инструкции. Работает 100% оффлайн по умолчанию.",
      metrics: [
        { label: "Приватность данных", value: "100%" },
        { label: "Мировые языки", value: "29+" },
        { label: "Специальные языки", value: "7" },
        { label: "Доступность", value: "24/7" },
      ],
      capabilities: [
        {
          title: "100% Конфиденциальность данных",
          description: "Все разговоры и документы обрабатываются локально без передачи в облако.",
          icon: "🛡️",
        },
        {
          title: "Первичная информационная маршрутизация",
          description: "Сбор первичной информации и помощь медперсоналу в направлении пациентов.",
          icon: "🩺",
        },
        {
          title: "Навигация по корпусам клиники",
          description: "Пошаговый маршрут к диагностическим кабинетам, лабораториям и аптеке.",
          icon: "📍",
        },
        {
          title: "Пояснение памятек по уходу",
          description: "Доходчивое объяснение правил подготовки к исследованиям и выписки.",
          icon: "📝",
        },
      ],
      useCases: [
        {
          title: "Рецепция клиники и навигация",
          category: "Сервис для пациентов",
          description: "Помощь прибывшим пациентам в поиске нужных кабинетов и врачей.",
          highlight: "Заботливая навигация",
        },
        {
          title: "Маршрутизация по этажам",
          category: "Навигация",
          description: "Маршруты к лабораториям, процедурным и отделению лучевой диагностики.",
          highlight: "Многоязычная навигация",
        },
        {
          title: "Проверка записи на прием",
          category: "Поддержка записи",
          description: "Уточнение времени приема и номера кабинета специалиста.",
          highlight: "Быстрый поиск записи",
        },
        {
          title: "Разъяснение медицинских инструкций",
          category: "Обучение",
          description: "Подробные пояснения по подготовке к анализам и процедурам.",
          highlight: "Понятные инструкции",
        },
        {
          title: "Справочная информация клиники",
          category: "Справка",
          description: "Ответы о часах посещения, правилах парковки и расположении аптек.",
          highlight: "Справка 24/7",
        },
        {
          title: "Локальный RAG по медицинским памфлетам",
          category: "Локальный RAG",
          description: "Поиск информации в утвержденных брошюрах клиники без интернета.",
          highlight: "100% Оффлайн RAG",
        },
        {
          title: "Многоязычное общение с пациентами",
          category: "Международный сервис",
          description: "Свободное общение на 29+ языках с иностранными пациентами.",
          highlight: "29+ языков",
        },
        {
          title: "Снижение нагрузки на медперсонал",
          category: "Поддержка персонала",
          description: "Принятие на себя рутинных вопросов на рецепции для освобождения медсестер.",
          highlight: "Снижение нагрузки",
        },
      ],
      techSpecs: [
        { label: "Защита данных", value: "100% Локальный ИИ (Соответствие HIPAA и GDPR)" },
        { label: "Архитектура", value: "100% Автономная работа по умолчанию" },
        { label: "Языки", value: "29+ Мировых языков" },
        { label: "Форм-фактор", value: "3D-Голографический куб или тонкая стойка 6 см" },
        { label: "Ограничения", value: "Только справочные функции; не ставит диагнозов и не лечит" },
      ],
      metaTitle: "ИИ Цифровые Аватары для Больниц и Навигации | HS Global AI",
      metaDescription: "Автономные ИИ-ассистенты для навигации в больницах и помощи пациентам.",
    },

    tourism: {
      ...industriesData.tourism,
      title: "Туризм и выставки",
      subtitle: "Голографические гиды и экскурсоводы для музеев",
      badge: "КУЛЬТУРНЫЙ ИИ-ГИД",
      description:
        "Запоминающиеся экскурсии с 3D-голографическими гидами, экспозиционными гидами и интерактивными стендами.",
      heroOverview:
        "Удивляйте посетителей музеев и выставок 3D-голографическими гидами. Аватары говорят на 29+ языках и рассказывают историю экспонатов.",
      metrics: [
        { label: "Рост вовлеченности", value: "4x" },
        { label: "Поддержка языков", value: "29+" },
        { label: "Удовлетворенность", value: "95%" },
        { label: "Часы работы", value: "24/7" },
      ],
      capabilities: [
        {
          title: "3D-Голограммы исторических личностей",
          description: "Воссоздание исторический персонажей в 3D-голографических кубах 1:1.",
          icon: "👑",
        },
        {
          title: "Многоязычный экскурсовод",
          description: "Адаптация речи к родному языку посетителя с естественным произношением.",
          icon: "🗣️",
        },
        {
          title: "RAG по архивным материалам",
          description: "Загрузка каталогов и научных статей для детальных ответов на вопросы.",
          icon: "📚",
        },
        {
          title: "Туристическая навигация",
          description: "Рекомендации по городу, покупка билетов и транспортные маршруты.",
          icon: "🗺️",
        },
      ],
      useCases: [
        {
          title: "3D-Голографический экскурсовод музея",
          category: "Музейный гид",
          description: "Общение с посетителями от лица исторических персонажей.",
          highlight: "Объемный 3D-эффект",
        },
        {
          title: "Рассказчик историй по архивам",
          category: "Культурное наследие",
          description: "Озвучивание исторических фактов на основе архивов через PDF RAG.",
          highlight: "Локальный PDF RAG",
        },
        {
          title: "Гид стенда на международных выставках",
          category: "Выставки",
          description: "Встреча гостей экспозиций и презентация достижений на разных языках.",
          highlight: "29+ языков",
        },
        {
          title: "Информационный туристический киоск",
          category: "Туристический консьерж",
          description: "Круглосуточная помощь туристам в выборе экскурсий и маршрутов.",
          highlight: "Консьерж 24/7",
        },
        {
          title: "Селфи с голографическим персонажем",
          category: "Сувенир",
          description: "Создание совместного фото с аватаром и скачивание по QR-коду.",
          highlight: "Мгновенное фото по QR",
        },
        {
          title: "Многоязычный городской гид",
          category: "Навигация",
          description: "Помощь туристам в поиске достопримечательностей на их языке.",
          highlight: "Городской гид",
        },
      ],
      techSpecs: [
        { label: "Оптические технологии", value: "3D-Голографическое стекло с высокой прозрачностью" },
        { label: "Речевой движок", value: "Синтез речи на 29+ языках с интонациями" },
        { label: "Анимация", value: "Объемный рендеринг 3D-аватара и синхронизация губ" },
        { label: "Устойчивость", value: "Оборудование защищено от внешнего освещения и шума" },
      ],
      metaTitle: "3D-Голографические Гиды и Музейные Экскурсоводы | HS Global AI",
      metaDescription: "3D-Голографические гиды и многоязычные экскурсоводы для музеев и выставок.",
    },

    education: {
      ...industriesData.education,
      title: "Образование и тренинги",
      subtitle: "Интерактивные 3D-преподаватели и ассистенты лабораторий",
      badge: "EDTECH ИИ НОВОГО ПОКОЛЕНИЯ",
      description:
        "Интерактивное обучение с ИИ-преподавателями, кампусными гидами и ассистентами виртуальных лабораторий.",
      heroOverview:
        "Революция в обучении для вузов и школ. Студенты взаимодействуют с 3D-преподавателями по STEM-дисциплинам и языкам.",
      metrics: [
        { label: "Рост вовлеченности", value: "3.5x" },
        { label: "Положительные отзывы", value: "92%" },
        { label: "Часы поддержки", value: "24/7" },
        { label: "Поддержка языков", value: "29+" },
      ],
      capabilities: [
        {
          title: "Интерактивные 3D-Лекторы",
          description: "Наглядные лекции по STEM-предметам с 3D-моделями в голографических кубах.",
          icon: "🔬",
        },
        {
          title: "Языковая практика",
          description: "Разговорная практика на 29+ языках с коррекцией произношения.",
          icon: "💬",
        },
        {
          title: "Помощник в виртуальной лаборатории",
          description: "Инструктаж по лабораторным работам и технике безопасности.",
          icon: "🧪",
        },
        {
          title: "Приемная комиссия и навигатор",
          description: "Помощь абитуриентам по вопросам поступления и картам кампуса.",
          icon: "🏫",
        },
      ],
      useCases: [
        {
          title: "3D-Преподаватель STEM-предметов",
          category: "3D EdTech",
          description: "Визуализация физических и химических моделей прямо на уроке.",
          highlight: "3D-Преподаватель STEM",
        },
        {
          title: "Информационный стенд кампуса",
          category: "Навигация в ВУЗе",
          description: "Информация о расписании лекций, библиотеке и корпусах университета.",
          highlight: "Справочник кампуса 24/7",
        },
        {
          title: "Инструктор по безопасности в лаборатории",
          category: "Обучение в лаб",
          description: "Пошаговое сопровождение студентов при проведении опытов.",
          highlight: "Пошаговый инструктаж",
        },
        {
          title: "Разговорный тренажер иностранных языков",
          category: "Изучение языков",
          description: "Практика устной речи на 29+ языках с мгновенным обратным ответом.",
          highlight: "29+ языков практики",
        },
        {
          title: "Тренинг навыков для сотрудников",
          category: "Корпоративное обучение",
          description: "Симуляция сценариев общения с клиентами и тестирование знаний.",
          highlight: "Симуляторы сценариев",
        },
        {
          title: "Консультант приемной комиссии",
          category: "Абитуриентам",
          description: "Ответы о направлениях подготовки, стоимости обучения и проходных баллах.",
          highlight: "Помощь абитуриентам",
        },
      ],
      techSpecs: [
        { label: "Движок знаний", value: "Локальный RAG по учебникам и методическим пособиям" },
        { label: "Интерактивность", value: "Речевой диалог + управление на сенсорном экране" },
        { label: "Языковой тренинг", value: "Многоязычный ИИ с учетом акцентов" },
        { label: "LMS Интеграция", value: "Совместимость с Canvas, Moodle и Blackboard" },
      ],
      metaTitle: "3D-Голографические ИИ-Преподаватели | HS Global AI",
      metaDescription: "3D-Голографические преподаватели, ассистенты лабораторий и языковые аватары.",
    },
  },

  es: {
    banking: {
      ...industriesData.banking,
      title: "Banca y Servicios Financieros",
      subtitle: "Banqueros Holográficos 3D y Asistentes Virtuales",
      badge: "IA BANCARIA 100% AISLADA",
      description:
        "Transforme las sucursales bancarias con banqueros holográficos 3D para la incorporación de clientes, explicación de préstamos y asesoramiento financiero multilingüe.",
      heroOverview:
        "Despliegue avatares digitales 100% offline en salas VIP y sucursales. Los avatares responden a consultas de cuentas y solicitudes de crédito protegiendo los datos confidenciales.",
      metrics: [
        { label: "Procesamiento local", value: "100%" },
        { label: "Aumento de interacción", value: "3.2x" },
        { label: "Reducción de colas", value: "40%" },
        { label: "Idiomas soportados", value: "29+" },
      ],
      capabilities: [
        {
          title: "Seguridad 100% Aislada",
          description: "Reconocimiento de voz, renderizado y RAG ejecutados estrictamente en hardware GPU local.",
          icon: "🔒",
        },
        {
          title: "RAG Documental Bancario Local",
          description: "Respuestas precisas sobre políticas de crédito y normativas desde PDFs locales.",
          icon: "📄",
        },
        {
          title: "Asesoramiento Financiero Multilingüe",
          description: "Detección de idioma en tiempo real en más de 29 idiomas con entonación natural.",
          icon: "🌐",
        },
        {
          title: "Conserje de Colas Interactivo",
          description: "Recibe a los clientes, emite tickets de turno y orienta hacia la ventanilla adecuada.",
          icon: "🎫",
        },
      ],
      useCases: [
        {
          title: "Recepcionista Bancario con IA",
          category: "Recepción de Sucursal",
          description: "Recepción de visitantes, gestión de turnos y orientación a ventanillas.",
          highlight: "Recepción Autónoma",
        },
        {
          title: "Asesor de Banca Privada",
          category: "Asesoría VIP",
          description: "Explicación de portafolios de inversión en hologramas 3D a escala 1:1.",
          highlight: "Visualización Holográfica 1:1",
        },
        {
          title: "Asistente de Préstamos e Hipotecas",
          category: "Créditos",
          description: "Desglose claro de tasas de interés, plazos y requisitos para créditos.",
          highlight: "Desglose de Créditos",
        },
        {
          title: "Presentador de Productos Financieros",
          category: "Catálogo",
          description: "Tarjetas interactivas de tarjetas de crédito, cuentas de ahorro y fondos.",
          highlight: "Catálogo Interactivo",
        },
        {
          title: "Gestión de Colas en Sucursal",
          category: "Automatización",
          description: "Saludador holográfico que escanea QR y distribuye el flujo de clientes.",
          highlight: "Check-in 40% más rápido",
        },
        {
          title: "Asistente Bancario Multilingüe",
          category: "Servicio Global",
          description: "Atención a clientes internacionales en más de 29 idiomas.",
          highlight: "29+ Idiomas en local",
        },
      ],
      techSpecs: [
        { label: "Procesamiento de datos", value: "100% Procesamiento GPU offline en dispositivo local" },
        { label: "Cumplimiento de seguridad", value: "Conforme a ISO 27001 y arquitectura bancaria" },
        { label: "Hardware", value: "Cajas holográficas 3D de 65\", 75\", 86\" y quioscos" },
        { label: "Documentos", value: "Motor RAG vectorial local para archivos PDF / DOCX" },
      ],
      metaTitle: "IA y Hologramas para Banca y Servicios Financieros | HS Global AI",
      metaDescription: "Despliegue humanos digitales e IA holográfica 3D para banca privada y sucursales.",
    },

    retail: {
      ...industriesData.retail,
      title: "Retail y Publicidad",
      subtitle: "Embajadores de Marca Holográficos y Probador Virtual",
      badge: "TECNOLOGÍA RETAIL INMERSIVA",
      description:
        "Atraiga a los compradores con embajadores de marca holográficos, probadores virtuales y pantallas interactivas.",
      heroOverview:
        "Transforme escaparates y tiendas de lujo en experiencias 3D. Avatares holográficos presentan productos, responden dudas en 29+ idiomas y ofrecen Virtual Try-On.",
      metrics: [
        { label: "Aumento de conversión", value: "2.8x" },
        { label: "Tiempo de permanencia", value: "+65%" },
        { label: "Interacción en tienda", value: "3x" },
        { label: "Dependencia de nube", value: "0%" },
      ],
      capabilities: [
        {
          title: "Probador Virtual Real-Time",
          description: "Visualización instantánea de ropa, gafas y joyería digitalmente sobre el cliente.",
          icon: "✨",
        },
        {
          title: "Catálogo Holográfico 3D",
          description: "Modelos 3D volumétricos con profundidad óptica y rotación de 360 grados.",
          icon: "💎",
        },
        {
          title: "Recomendaciones de Venta IA",
          description: "Sugerencias de productos complementarios basadas en las consultas del cliente.",
          icon: "📈",
        },
        {
          title: "Conserje Multilingüe",
          description: "Bienvenida a turistas en su idioma nativo y orientación en el establecimiento.",
          icon: "🌍",
        },
      ],
      useCases: [
        {
          title: "Embajador Holográfico de Escaparate",
          category: "Publicidad 24/7",
          description: "Muestre las colecciones de temporada incluso fuera del horario comercial.",
          highlight: "Atracción 24/7 Autónoma",
        },
        {
          title: "Espejo Inteligente Virtual Try-On",
          category: "Probador Virtual",
          description: "Pruebe ropa sin necesidad de vestidores gracias al renderizado instantáneo.",
          highlight: "Prueba de Ropa Instantánea",
        },
        {
          title: "Lanzamientos de Producto",
          category: "Eventos",
          description: "Avatares de marca personalizados para presentar historias e innovaciones.",
          highlight: "Storytelling Interactivo",
        },
        {
          title: "Asesor de Ventas IA",
          category: "Ventas en Tienda",
          description: "Recomiende combinaciones y detalle especificaciones técnicas mediante voz.",
          highlight: "Catálogo Inteligente",
        },
        {
          title: "Conserje Multilingüe de Centro Comercial",
          category: "Orientación",
          description: "Guíe a turistas internacionales en 29+ idiomas con planos y directorios.",
          highlight: "29+ Idiomas",
        },
        {
          title: "Quiosco Foto con Avatar",
          category: "Engagement Social",
          description: "Fotografía con el avatar de la marca y descarga mediante código QR.",
          highlight: "Descarga QR Instantánea",
        },
      ],
      techSpecs: [
        { label: "Tecnología de pantalla", value: "Cristal holográfico 4K de alta transmitancia" },
        { label: "Sensores", value: "Cámara de profundidad 4K + Sensor de presencia" },
        { label: "Motor de prueba", value: "IA de ajuste de malla de prendas en tiempo real" },
        { label: "Renderizado", value: "Pipeline de render 3D offline de alta fidelidad" },
      ],
      metaTitle: "Humano Digital IA para Retail y Publicidad | HS Global AI",
      metaDescription: "Embajadores de marca holográficos 3D y probadores virtuales para tiendas físicas.",
    },

    corporate: {
      ...industriesData.corporate,
      title: "Servicios Corporativos y RRHH",
      subtitle: "Recepcionistas Digitales y Asistentes IA de RRHH",
      badge: "CONSERJE IA CORPORATIVO",
      description:
        "Optimice la recepción, gestión de visitas, incorporación de empleados y soporte de RRHH con avatares IA.",
      heroOverview:
        "Mejore los vestíbulos corporativos con recepcionistas digitales. Automatice la recepción de visitas, impresión de pases y resolución de dudas de RRHH vía RAG local.",
      metrics: [
        { label: "Automatización de recepción", value: "85%" },
        { label: "Tiempo de actividad", value: "99.9%" },
        { label: "Velocidad de registro", value: "< 1s" },
        { label: "Procesamiento local", value: "100%" },
      ],
      capabilities: [
        {
          title: "Recepción Autónoma",
          description: "Salude a los visitantes, escanee códigos QR, imprima pases y notifique al anfitrión.",
          icon: "👋",
        },
        {
          title: "RAG Local de Políticas de RRHH",
          description: "Respuestas sobre beneficios, vacaciones y gastos desde los manuales corporativos.",
          icon: "📋",
        },
        {
          title: "Orientación en Edificio y Salas",
          description: "Mapas interactivos de pisos e indicaciones hacia salas de reuniones.",
          icon: "🗺️",
        },
        {
          title: "Directorio Corporativo Multilingüe",
          description: "Conecte a visitantes con ejecutivos de departamento en más de 29 idiomas.",
          icon: "🌐",
        },
      ],
      useCases: [
        {
          title: "Recepcionista Holográfico",
          category: "IA en Recepción",
          description: "Proyección de recepcionista 3D para saludar a visitas VIP y agilizar el registro.",
          highlight: "Recepción Autónoma",
        },
        {
          title: "Quiosco de Registro e Impresión de Pases",
          category: "Seguridad",
          description: "Escanear invitaciones QR, registrar visitas y notificar vía Slack/SMS.",
          highlight: "Registro QR e Impresión",
        },
        {
          title: "Asistente Local de Políticas de RRHH",
          category: "Operaciones",
          description: "Respuestas 24/7 sobre convenios, beneficios y soporte informático.",
          highlight: "RAG Privado de PDF",
        },
        {
          title: "Conserje VIP en Hall Ejecutivo",
          category: "Servicios VIP",
          description: "Bienvenida personalizada para directivos y clientes clave.",
          highlight: "Conserje VIP",
        },
        {
          title: "Onboarding de Nuevos Empleados",
          category: "Capacitación",
          description: "Guía interactiva sobre la cultura de la empresa y normas de seguridad.",
          highlight: "Onboarding Interactivo",
        },
        {
          title: "Directorio Empresarial Multilingüe",
          category: "Directorio",
          description: "Asistencia a socios internacionales en 29+ idiomas.",
          highlight: "29+ Idiomas Soporte",
        },
      ],
      techSpecs: [
        { label: "Integraciones", value: "Integración con Slack, MS Teams, Outlook e Impresoras" },
        { label: "Opciones de diseño", value: "Caja holográfica 3D a tamaño real o quiosco estilizado" },
        { label: "Seguridad", value: "Almacenamiento privado local e índice vectorial offline" },
        { label: "Funcionamiento", value: "Operación continuada 24/7" },
      ],
      metaTitle: "Recepcionistas Digitales IA para RRHH y Empresas | HS Global AI",
      metaDescription: "Automatice la recepción corporativa y las consultas de RRHH con hologramas 3D.",
    },

    healthcare: {
      ...industriesData.healthcare,
      title: "Salud y Telemedicina",
      subtitle: "Orientación al Paciente y Navegación Hospitalaria",
      badge: "100% PRIVACIDAD DE DATOS SALUD",
      description:
        "Despliegue humanos digitales IA para recepción de pacientes, orientación en salas, citas e información con 100% de privacidad.",
      heroOverview:
        "Apoye a pacientes y familias en centros médicos con asistentes empáticos. Orientación en hospital, triaje administrativo e instrucciones multilingües 100% offline.",
      metrics: [
        { label: "Privacidad de datos", value: "100%" },
        { label: "Idiomas globales", value: "29+" },
        { label: "Idiomas regionales", value: "7" },
        { label: "Disponibilidad", value: "24/7" },
      ],
      capabilities: [
        {
          title: "100% Privacidad y Seguridad Aislada",
          description: "Procesamiento de voz y documentos exclusivamente en hardware local sin nube.",
          icon: "🛡️",
        },
        {
          title: "Soporte de Recepción y Triaje",
          description: "Recopilación de datos administrativos iniciales para orientar la atención.",
          icon: "🩺",
        },
        {
          title: "Navegación por Departamentos",
          description: "Guía paso a paso por pisos, laboratorios, radiología y farmacias.",
          icon: "📍",
        },
        {
          title: "Explicación de Cuidados Pre y Post Op",
          description: "Indicaciones sobre preparación para cirugías e instrucciones de alta en voz clara.",
          icon: "📝",
        },
      ],
      useCases: [
        {
          title: "Recepción Hospitalaria y Guía",
          category: "Experiencia Paciente",
          description: "Ayuda a pacientes con ubicación de departamentos y consultas de médicos.",
          highlight: "Recepción Empática",
        },
        {
          title: "Navegación por Instalaciones",
          category: "Orientación",
          description: "Indicaciones paso a paso a salas de análisis, rayos X y mostradores.",
          highlight: "Navegación Multilingüe",
        },
        {
          title: "Información de Citas y Turnos",
          category: "Gestión de Citas",
          description: "Verificación de horarios de citas y consulta de tiempos de espera.",
          highlight: "Consulta de Horarios",
        },
        {
          title: "Educación al Paciente e Instrucciones",
          category: "Educación Médica",
          description: "Explicación de pautas de preparación y recuperación postoperatoria.",
          highlight: "Explicaciones Claras",
        },
        {
          title: "Información Administrativa General",
          category: "Información",
          description: "Respuestas sobre horarios de visita, estacionamiento y trámites.",
          highlight: "Disponibilidad 24/7",
        },
        {
          title: "RAG Local de Folletos Informativos",
          category: "RAG Documental",
          description: "Búsqueda en folletos de salud y guías de hospital sin conexión a internet.",
          highlight: "RAG 100% Local",
        },
        {
          title: "Atención Multilingüe a Pacientes",
          category: "Salud Global",
          description: "Comunicación fluida en más de 29 idiomas globales.",
          highlight: "29+ Idiomas",
        },
        {
          title: "Apoyo al Personal Sanitario",
          category: "Soporte al Personal",
          description: "Reducción de la carga administrativa en mostradores de recepción.",
          highlight: "Reduce Carga de Trabajo",
        },
      ],
      techSpecs: [
        { label: "Protección de datos", value: "Procesamiento 100% local (Conforme a HIPAA y GDPR)" },
        { label: "Arquitectura", value: "Funcionamiento 100% offline por defecto" },
        { label: "Idiomas", value: "29+ Idiomas globales" },
        { label: "Hardware", value: "Caja holográfica 3D a tamaño real o pantalla spatial 6 cm" },
        { label: "Límites", value: "Solo asistencia informativa y de orientación; no emite diagnósticos" },
      ],
      metaTitle: "Humano Digital IA para Hospitales y Navegación | HS Global AI",
      metaDescription: "Humano digital 100% offline para recepción de pacientes y orientación en hospitales.",
    },

    tourism: {
      ...industriesData.tourism,
      title: "Turismo y Exposiciones",
      subtitle: "Guías Holográficos Multilingües y Docentes de Museo",
      badge: "IA CULTURAL Y EXPOSICIONES",
      description:
        "Experiencias inolvidables con guías holográficos 3D, puntos de información multilingües y docentes virtuales.",
      heroOverview:
        "Deleite a los visitantes de museos y exposiciones con guías holográficos 3D. Hablan más de 29 idiomas y narran la historia a través de RAG local.",
      metrics: [
        { label: "Interacción de visitantes", value: "4x" },
        { label: "Idiomas soportados", value: "29+" },
        { label: "Satisfacción en visitas", value: "95%" },
        { label: "Horas de servicio", value: "24/7" },
      ],
      capabilities: [
        {
          title: "Avatares Históricos 3D",
          description: "Recreación de figuras históricas dentro de cajas holográficas a escala 1:1.",
          icon: "👑",
        },
        {
          title: "Narrador de Exposiciones Multilingüe",
          description: "Adaptación del discurso al idioma nativo del visitante con voz natural.",
          icon: "🗣️",
        },
        {
          title: "Motor RAG de Archivos Históricos",
          description: "Procesamiento de catálogos y documentos para preguntas y respuestas profundas.",
          icon: "📚",
        },
        {
          title: "Guía Turístico y de Orientación",
          description: "Recomendaciones de la ciudad, venta de entradas y transporte.",
          icon: "🗺️",
        },
      ],
      useCases: [
        {
          title: "Docente de Museo Holográfico 3D",
          category: "Docente de Museo",
          description: "Personajes históricos 3D que interactúan con los visitantes del museo.",
          highlight: "Presencia 3D Real",
        },
        {
          title: "Narrador de Archivos Históricos",
          category: "Patrimonio",
          description: "Relato de documentos y leyendas históricas mediante PDF RAG.",
          highlight: "PDF RAG Histórico",
        },
        {
          title: "Guía en Pabellones de Exposiciones",
          category: "Ferias",
          description: "Bienvenida a asistentes internacionales explicando pabellones.",
          highlight: "29+ Idiomas",
        },
        {
          title: "Quiosco 24/7 de Centro de Visitantes",
          category: "Conserje Turístico",
          description: "Asistencia turística 24/7 sobre rutas y venta de entradas.",
          highlight: "Conserje 24/7",
        },
        {
          title: "Foto Recuerdo con Avatar Cultural",
          category: "Recuerdo",
          description: "Fotografía con figuras históricas y descarga con código QR.",
          highlight: "Descarga de Foto por QR",
        },
        {
          title: "Guía Multilingüe de la Ciudad",
          category: "Navegación",
          description: "Orientación en planos de ciudad e itinerarios en idioma nativo.",
          highlight: "Navegación Multilingüe",
        },
      ],
      techSpecs: [
        { label: "Óptica", value: "Cristal holográfico 3D de alta transmitancia" },
        { label: "Síntesis de voz", value: "Síntesis de voz en 29+ idiomas con acentos" },
        { label: "Animación", value: "Renderizado 3D volumétrico y sincronización labial" },
        { label: "Resistencia", value: "Hardware comercial resistente a luz ambiental y ruido" },
      ],
      metaTitle: "Guías Holográficos 3D y Docentes de Museos | HS Global AI",
      metaDescription: "Guías holográficos 3D y docentes multilingües para museos y centros culturales.",
    },

    education: {
      ...industriesData.education,
      title: "Educación y Formación",
      subtitle: "Tutores Holográficos 3D y Profesores Virtuales",
      badge: "EDTECH IA DE ÚLTIMA GENERACIÓN",
      description:
        "Experiencias de aprendizaje inmersivas con profesores holográficos 3D, guías de campus y asistentes de laboratorio.",
      heroOverview:
        "Revolucione el aprendizaje en universidades y colegios. Los estudiantes interactúan con profesores holográficos para materias STEM e idiomas.",
      metrics: [
        { label: "Aumento de atención", value: "3.5x" },
        { label: "Feedback positivo", value: "92%" },
        { label: "Horas de asistencia", value: "24/7" },
        { label: "Idiomas soportados", value: "29+" },
      ],
      capabilities: [
        {
          title: "Profesores 3D Holográficos",
          description: "Clases sobre materias STEM con modelos 3D dentro de cajas holográficas.",
          icon: "🔬",
        },
        {
          title: "Práctica de Idiomas Multilingüe",
          description: "Práctica conversacional en más de 29 idiomas con corrección de pronunciación.",
          icon: "💬",
        },
        {
          title: "Guía de Seguridad en Laboratorio",
          description: "Instrucciones paso a paso sobre seguridad y procedimientos de laboratorio.",
          icon: "🧪",
        },
        {
          title: "Orientación de Admisiones y Campus",
          description: "Información a estudiantes y padres sobre planes de estudio y mapa de campus.",
          icon: "🏫",
        },
      ],
      useCases: [
        {
          title: "Tutor STEM Holográfico 3D",
          category: "EdTech 3D",
          description: "Recreación de científicos históricos y modelos físicos en 3D.",
          highlight: "Tutor STEM 3D",
        },
        {
          title: "Docente en Centro de Estudiantes",
          category: "Campus",
          description: "Información 24/7 sobre horarios, biblioteca y mapa universitario.",
          highlight: "Directorio 24/7",
        },
        {
          title: "Guía de Seguridad en Laboratorio",
          category: "Instrucción Lab",
          description: "Indicaciones paso a paso para prácticas de laboratorio de química y física.",
          highlight: "Seguridad Lab Paso a Paso",
        },
        {
          title: "Avatar para Práctica de Idiomas",
          category: "Idiomas",
          description: "Conversación fluida en 29+ idiomas con respuesta inmediata.",
          highlight: "Práctica en 29+ Idiomas",
        },
        {
          title: "Quiosco de Formación Corporativa",
          category: "Capacitación",
          description: "Simulación de situaciones laborales y evaluación de competencias.",
          highlight: "Simulaciones de Rol",
        },
        {
          title: "Guía de Admisiones y Orientación",
          category: "Admisiones",
          description: "Resolución de dudas sobre matrículas, requisitos y alojamiento.",
          highlight: "Guía de Admisiones",
        },
      ],
      techSpecs: [
        { label: "Motor de conocimiento", value: "RAG en PDF local sobre libros de texto y planes" },
        { label: "Interacción", value: "Diálogo de voz natural + Pantalla táctil" },
        { label: "Entrenamiento de idiomas", value: "IA de idiomas con adaptación de acentos" },
        { label: "Integración LMS", value: "Compatible con Canvas, Moodle y Blackboard" },
      ],
      metaTitle: "Tutores Holográficos 3D e IA para Educación | HS Global AI",
      metaDescription: "Tutores holográficos 3D, guías de laboratorio y avatares multilingües para educación.",
    },
  },

  fr: {
    banking: {
      ...industriesData.banking,
      title: "Banque et Services Financiers",
      subtitle: "Banquiers Holographiques 3D et Assistants Virtuels",
      badge: "IA BANCAIRE 100% ISOLÉE",
      description:
        "Transformez les agences bancaires grâce à des banquiers holographiques 3D pour l'accueil des clients, la présentation des prêts et le conseil multilingue.",
      heroOverview:
        "Déployez des avatars numériques 100% hors ligne dans les espaces VIP et agences. Les avatars répondent aux demandes de compte tout en préservant le secret bancaire.",
      metrics: [
        { label: "Traitement local", value: "100%" },
        { label: "Hausses d'interaction", value: "3.2x" },
        { label: "Réduction des files", value: "40%" },
        { label: "Langues prises en charge", value: "29+" },
      ],
      capabilities: [
        {
          title: "Sécurité 100% Isolée",
          description: "Reconnaissance vocale et RAG exécutés exclusivement sur GPU local sans cloud.",
          icon: "🔒",
        },
        {
          title: "RAG Documentaire Bancaire Local",
          description: "Réponses précises sur les contrats de prêt et règles depuis des PDF locaux.",
          icon: "📄",
        },
        {
          title: "Conseil Financier Multilingue",
          description: "Détection automatique de la langue parmi plus de 29 langues en temps réel.",
          icon: "🌐",
        },
        {
          title: "Concierge de File d'Attente Interactif",
          description: "Accueille les clients, délivre des tickets et oriente vers le bon guichet.",
          icon: "🎫",
        },
      ],
      useCases: [
        {
          title: "Réceptionniste Bancaire IA",
          category: "Accueil en Agence",
          description: "Accueil des visiteurs, gestion de la file et orientation vers les conseillers.",
          highlight: "Réception Autonome",
        },
        {
          title: "Conseiller Banque Privée",
          category: "Conseil VIP",
          description: "Présentation des portefeuilles d'investissement en hologramme 3D échelle 1:1.",
          highlight: "Hologramme Échelle 1:1",
        },
        {
          title: "Assistant Crédit & Immobilière",
          category: "Crédit",
          description: "Explication claire des taux d'intérêt, conditions et échéanciers de remboursement.",
          highlight: "Explication des Crédits",
        },
        {
          title: "Présentateur de Produits Financiers",
          category: "Catalogue",
          description: "Fiches interactives pour cartes bancaires, comptes d'épargne et placements.",
          highlight: "Catalogue Interactif",
        },
        {
          title: "Gestion des Files en Agence",
          category: "Gestion de File",
          description: "Accueil holographique scannant les QR codes et orientant le flux de clients.",
          highlight: "Check-in 40% plus rapide",
        },
        {
          title: "Assistant Bancaire Multilingue",
          category: "Service International",
          description: "Accueil des clients internationaux dans plus de 29 langues sur matériel local.",
          highlight: "29+ Langues en local",
        },
      ],
      techSpecs: [
        { label: "Traitement des données", value: "Traitement 100% hors ligne sur GPU local" },
        { label: "Conformité sécurité", value: "Conforme ISO 27001 et normes bancaires" },
        { label: "Matériel", value: "Boîtiers holographiques 3D 65\", 75\", 86\" et bornes" },
        { label: "Traitement documents", value: "Moteur RAG vectoriel local pour fichiers PDF / DOCX" },
      ],
      metaTitle: "IA et Hologrammes pour la Banque et les Services Financiers | HS Global AI",
      metaDescription: "Déployez des humains virtuels et banquiers holographiques 3D pour agences et salons VIP.",
    },

    retail: {
      ...industriesData.retail,
      title: "Commerce & Publicité",
      subtitle: "Ambassadeurs de Marque Holographiques & Essayage Virtuel",
      badge: "TECHNOLOGIE RETAIL IMMERSIVE",
      description:
        "Captez l'attention des acheteurs avec des ambassadeurs holographiques, l'essayage virtuel Virtual Try-On et des vitrines interactives.",
      heroOverview:
        "Transformez les vitrines et magasins en expériences 3D. Des avatars holographiques présentent vos produits, répondent en 29+ langues et intègrent l'essayage virtuel.",
      metrics: [
        { label: "Hausse de conversion", value: "2.8x" },
        { label: "Temps d'attention", value: "+65%" },
        { label: "Engagement en magasin", value: "3x" },
        { label: "Dépendance au cloud", value: "0%" },
      ],
      capabilities: [
        {
          title: "Essayage Virtuel Real-Time",
          description: "Superposition numérique instantanée de vêtements, lunettes et bijoux en temps réel.",
          icon: "✨",
        },
        {
          title: "Catalogue Holographique 3D",
          description: "Modèles 3D volumétriques avec profondeur optique et rotation à 360 degrés.",
          icon: "💎",
        },
        {
          title: "Recommandations Vente IA",
          description: "Suggestions de produits complémentaires basées sur les demandes du client.",
          icon: "📈",
        },
        {
          title: "Concierge Multilingue",
          description: "Accueil des touristes dans leur langue maternelle et orientation dans le magasin.",
          icon: "🌍",
        },
      ],
      useCases: [
        {
          title: "Ambassadeur Holographique de Vitrine",
          category: "Publicité 24/7",
          description: "Présentation des nouvelles collections en 3D holographique même après la fermeture.",
          highlight: "Engagement 24/7 Autonome",
        },
        {
          title: "Miroir Intelligent & Essayage Virtuel",
          category: "Virtual Try-On",
          description: "Essayez des tenues sans cabine d'essayage grâce au rendu instantané.",
          highlight: "Superposition Instantanée",
        },
        {
          title: "Lancements de Produits",
          category: "Événementiel",
          description: "Avatars personnalisés formés pour raconter l'histoire et les détails des produits.",
          highlight: "Storytelling Interactif",
        },
        {
          title: "Conseiller de Vente IA",
          category: "Vente en Magasin",
          description: "Recommandation d'articles assortis et détails des caractéristiques à la voix.",
          highlight: "Catalogue Intelligent",
        },
        {
          title: "Concierge Multilingue de Centre Commercial",
          category: "Orientation",
          description: "Orientation des visiteurs en 29+ langues avec cartes et plan des boutiques.",
          highlight: "29+ Langues",
        },
        {
          title: "Borne Photo avec Avatar",
          category: "Engagement Social",
          description: "Posez avec l'avatar de la marque et téléchargez la photo par QR code.",
          highlight: "Téléchargement QR Instantané",
        },
      ],
      techSpecs: [
        { label: "Technologie d'affichage", value: "Verre holographique 4K à haute transparence" },
        { label: "Capteurs", value: "Caméra de profondeur 4K + Détecteur de présence" },
        { label: "Moteur d'essayage", value: "IA d'essayage et déformation de vêtements en temps réel" },
        { label: "Rendu", value: "Pipeline de rendu 3D haute fidélité hors ligne" },
      ],
      metaTitle: "Humains Virtuels IA pour le Retail et la Publicité | HS Global AI",
      metaDescription: "Ambassadeurs holographiques 3D et miroirs d'essayage virtuel pour magasins.",
    },

    corporate: {
      ...industriesData.corporate,
      title: "Services Corporatifs et RH",
      subtitle: "Réceptionnistes Virtuels et Assistants RH IA",
      badge: "CONCIERGE IA D'ENTREPRISE",
      description:
        "Modernisez l'accueil, la gestion des visiteurs, l'intégration des employés et le support RH avec des avatars IA.",
      heroOverview:
        "Sublimez vos halls d'accueil avec des réceptionnistes virtuels. Automatisez l'enregistrement des visiteurs, l'impression des badges et le support RH via RAG local.",
      metrics: [
        { label: "Automatisation accueil", value: "85%" },
        { label: "Taux de disponibilité", value: "99.9%" },
        { label: "Vitesse d'enregistrement", value: "< 1s" },
        { label: "Traitement local", value: "100%" },
      ],
      capabilities: [
        {
          title: "Réception Autonome",
          description: "Accueil des visiteurs, scan des QR codes, impression des badges et alerte de l'hôte.",
          icon: "👋",
        },
        {
          title: "RAG Local des Politiques RH",
          description: "Réponses aux questions sur les congés, mutuelle et notes de frais depuis les guides RH.",
          icon: "📋",
        },
        {
          title: "Orientation dans le Bâtiment",
          description: "Cartes interactives des étages et guidage vers les salles de réunion.",
          icon: "🗺️",
        },
        {
          title: "Annuaire Corporatif Multilingue",
          description: "Mise en relation des visiteurs internationaux avec les responsables en 29+ langues.",
          icon: "🌐",
        },
      ],
      useCases: [
        {
          title: "Réceptionniste Holographique",
          category: "IA d'Accueil",
          description: "Projection d'un réceptionniste 3D pour accueillir les visiteurs VIP.",
          highlight: "Accueil Autonome",
        },
        {
          title: "Borne d'Enregistrement et Badges",
          category: "Sécurité",
          description: "Scannez les invitations QR, enregistrez les visiteurs et alerte par Slack/SMS.",
          highlight: "Check-in QR & Badge",
        },
        {
          title: "Assistant Local des Politiques RH",
          category: "Support Interne",
          description: "Réponses 24/7 sur les avantages sociaux et le support informatique.",
          highlight: "RAG Privé sur PDF",
        },
        {
          title: "Concierge VIP de Hall Exécutif",
          category: "Services VIP",
          description: "Accueils personnalisés pour les dirigeants et clients stratégiques.",
          highlight: "Concierge VIP",
        },
        {
          title: "Intégration des Nouveaux Collaborateurs",
          category: "Formation",
          description: "Présentation de la culture d'entreprise et des consignes de sécurité.",
          highlight: "Onboarding Interactif",
        },
        {
          title: "Annuaire d'Entreprise Multilingue",
          category: "Annuaire Global",
          description: "Assistance aux équipes et partenaires internationaux en 29+ langues.",
          highlight: "Support 29+ Langues",
        },
      ],
      techSpecs: [
        { label: "Intégrations", value: "Synchronisation Slack, MS Teams, Outlook et imprimantes" },
        { label: "Format matériel", value: "Boîtier holographique 3D taille réelle ou borne design" },
        { label: "Sécurité", value: "Stockage local privé et indexation vectorielle hors ligne" },
        { label: "Fonctionnement", value: "Service continu 24h/24 et 7j/7" },
      ],
      metaTitle: "Réceptionnistes Virtuels IA pour Entreprises et RH | HS Global AI",
      metaDescription: "Automatisez l'accueil en entreprise et les réponses RH avec des hologrammes 3D.",
    },

    healthcare: {
      ...industriesData.healthcare,
      title: "Santé et Télémédecine",
      subtitle: "Orientation des Patients et Guidance Hospitalière",
      badge: "100% CONFIDENTIALITÉ DES DONNÉES SÉCURITÉ",
      description:
        "Déployez des humains virtuels IA pour l'accueil des patients, l'orientation dans l'hôpital et l'explication des consignes avec 100% de confidentialité.",
      heroOverview:
        "Accompagnez les patients et visiteurs dans les établissements de santé. Guidance immédiate, aide au triage administratif et consignes multilingues 100% hors ligne.",
      metrics: [
        { label: "Confidentialité données", value: "100%" },
        { label: "Langues mondiales", value: "29+" },
        { label: "Langues régionales", value: "7" },
        { label: "Disponibilité", value: "24/7" },
      ],
      capabilities: [
        {
          title: "100% Confidentialité & Sécurité Hors Ligne",
          description: "Traitement de la voix et des documents exclusivement sur matériel local.",
          icon: "🛡️",
        },
        {
          title: "Support d'Accueil et Triage Administratif",
          description: "Recueil des informations administratives pour orienter les patients.",
          icon: "🩺",
        },
        {
          title: "Navigation par Service Hospitalier",
          description: "Guidage étape par étape vers les laboratoires, la radiologie et la pharmacie.",
          icon: "📍",
        },
        {
          title: "Explication des Soins Pré et Post Op",
          description: "Consignes de préparation chirurgicale et explications de sortie à la voix.",
          icon: "📝",
        },
      ],
      useCases: [
        {
          title: "Accueil Hospitalier et Guidance",
          category: "Expérience Patient",
          description: "Aide aux patients pour trouver les services et les bureaux des médecins.",
          highlight: "Accueil Bienveillant",
        },
        {
          title: "Guidance dans l'Établissement",
          category: "Orientation",
          description: "Itinéraires par étage vers les laboratoires, la radiologie et l'accueil.",
          highlight: "Guidance Multilingue",
        },
        {
          title: "Consultation des Rendez-vous",
          category: "Gestion Rendez-vous",
          description: "Vérification des horaires et confirmation des lieux de rendez-vous.",
          highlight: "Vérification Immédiate",
        },
        {
          title: "Éducation du Patient & Consignes",
          category: "Éducation Santé",
          description: "Explication claire des consignes de préparation et de récupération.",
          highlight: "Explications Claires",
        },
        {
          title: "Renseignements Administratifs",
          category: "Information",
          description: "Réponses sur les heures de visite, le parking et les démarches.",
          highlight: "Disponible 24/7",
        },
        {
          title: "RAG Local sur Brochures de Santé",
          category: "RAG Documentaire",
          description: "Recherche dans les guides d'information de l'hôpital sans connexion cloud.",
          highlight: "RAG 100% Local",
        },
        {
          title: "Échanges Multilingues avec les Patients",
          category: "Santé Globale",
          description: "Communication fluide dans plus de 29 langues mondiales.",
          highlight: "29+ Langues",
        },
        {
          title: "Soutien au Personnel Soignant",
          category: "Soutien Équipe",
          description: "Réduction des demandes fréquentes à l'accueil pour libérer les soignants.",
          highlight: "Allege la Charge de Travail",
        },
      ],
      techSpecs: [
        { label: "Protection des données", value: "Traitement 100% local (Conforme HIPAA et RGPD)" },
        { label: "Architecture", value: "Fonctionnement 100% hors ligne par défaut" },
        { label: "Langues", value: "29+ Langues mondiales" },
        { label: "Matériel", value: "Boîtier holographique 3D taille réelle ou borne spatial 6 cm" },
        { label: "Limites", value: "Soutien informatif et d'orientation uniquement ; aucun diagnostic médical" },
      ],
      metaTitle: "Humains Virtuels IA pour Hopitaux et Navigation | HS Global AI",
      metaDescription: "Humains virtuels 100% hors ligne pour l'orientation et l'accueil des patients à l'hôpital.",
    },

    tourism: {
      ...industriesData.tourism,
      title: "Tourisme et Expositions",
      subtitle: "Guides Holographiques Multilingues & Guides de Musée",
      badge: "IA CULTURE ET EXPOSITION",
      description:
        "Des visites inoubliables grâce à des guides holographiques 3D, bornes d'information et guides virtuels.",
      heroOverview:
        "Émerveillez les visiteurs des musées et expositions avec des guides holographiques 3D. Ils parlent 29+ langues et racontent l'histoire via RAG local.",
      metrics: [
        { label: "Hausse d'engagement", value: "4x" },
        { label: "Langues prises en charge", value: "29+" },
        { label: "Satisfaction visites", value: "95%" },
        { label: "Horaires de service", value: "24/7" },
      ],
      capabilities: [
        {
          title: "Avatars Historiques 3D",
          description: "Reconstitution de personnages historiques dans des boîtiers holographiques 1:1.",
          icon: "👑",
        },
        {
          title: "Conteur d'Expositions Multilingue",
          description: "Adaptation du récit à la langue du visiteur avec une intonation naturelle.",
          icon: "🗣️",
        },
        {
          title: "Moteur RAG d'Archives Historiques",
          description: "Intégration de catalogues et documents de recherche pour des réponses détaillées.",
          icon: "📚",
        },
        {
          title: "Guide Touristique et Orientations",
          description: "Recommandations sur la ville, billetterie et transports.",
          icon: "🗺️",
        },
      ],
      useCases: [
        {
          title: "Guide de Musée Holographique 3D",
          category: "Guide de Musée",
          description: "Personnages historiques 3D interagissant avec les visiteurs du musée.",
          highlight: "Présence 3D Taille Réelle",
        },
        {
          title: "Conteur d'Archives Historiques",
          category: "Patrimoine",
          description: "Récits de documents historiques et de légendes via PDF RAG.",
          highlight: "PDF RAG Historique",
        },
        {
          title: "Guide de Pavillon d'Exposition",
          category: "Salons",
          description: "Accueil des visiteurs internationaux et présentation des innovations.",
          highlight: "29+ Langues",
        },
        {
          title: "Borne 24/7 d'Office de Tourisme",
          category: "Concierge Touristique",
          description: "Assistance touristique 24/7 pour les circuits et événements.",
          highlight: "Concierge 24/7",
        },
        {
          title: "Photo Souvenir avec Avatar",
          category: "Souvenir",
          description: "Photo avec un personnage historique et téléchargement par QR code.",
          highlight: "Téléchargement Photo QR",
        },
        {
          title: "Guide Touristique Multilingue",
          category: "Navigation",
          description: "Orientation dans la ville et billetterie dans la langue du visiteur.",
          highlight: "Navigation Multilingue",
        },
      ],
      techSpecs: [
        { label: "Optique", value: "Verre holographique 3D à haute transparence" },
        { label: "Synthèse vocale", value: "Synthèse vocale dans 29+ langues avec accents" },
        { label: "Animation", value: "Rendu 3D volumétrique et synchronisation labiale" },
        { label: "Résistance", value: "Matériel commercial résistant à la lumière et au bruit" },
      ],
      metaTitle: "Guides Holographiques 3D et Guides de Musée | HS Global AI",
      metaDescription: "Guides holographiques 3D et médiateurs multilingues pour musées et expositions.",
    },

    education: {
      ...industriesData.education,
      title: "Éducation et Formation",
      subtitle: "Tuteurs Holographiques 3D et Professeurs Virtuels",
      badge: "EDTECH IA DE NOUVELLE GÉNÉRATION",
      description:
        "Des expériences d'apprentissage immersives avec des enseignants holographiques 3D et assistants de laboratoire.",
      heroOverview:
        "Révolutionnez l'enseignement dans les universités et écoles. Les étudiants interagissent avec des enseignants holographiques 3D.",
      metrics: [
        { label: "Hausse d'attention", value: "3.5x" },
        { label: "Retours positifs", value: "92%" },
        { label: "Disponibilité", value: "24/7" },
        { label: "Langues prises en charge", value: "29+" },
      ],
      capabilities: [
        {
          title: "Enseignants 3D Holographiques",
          description: "Cours interactifs sur les matières STEM avec visuels 3D volumétriques.",
          icon: "🔬",
        },
        {
          title: "Pratique des Langues Multilingue",
          description: "Pratique conversationnelle dans plus de 29 langues avec retours sur la prononciation.",
          icon: "💬",
        },
        {
          title: "Guide de Sécurité en Laboratoire",
          description: "Instructions étape par étape pour les travaux pratiques et la sécurité.",
          icon: "🧪",
        },
        {
          title: "Orientation Admissions et Campus",
          description: "Renseignements pour futurs étudiants et parents sur les cursus et le campus.",
          icon: "🏫",
        },
      ],
      useCases: [
        {
          title: "Tuteur STEM Holographique 3D",
          category: "EdTech 3D",
          description: "Visualisation 3D de concepts physiques et scientifiques en classe.",
          highlight: "Tuteur STEM 3D",
        },
        {
          title: "Guide Virtuel de Centre Étudiant",
          category: "Campus",
          description: "Renseignements 24/7 sur les emplois du temps, la bibliothèque et le campus.",
          highlight: "Annuaire Campus 24/7",
        },
        {
          title: "Guide de Sécurité en Laboratoire",
          category: "Instruction Lab",
          description: "Accompagnement étape par étape lors des manipulations en chimie et physique.",
          highlight: "Guidance Sécurité Lab",
        },
        {
          title: "Avatar pour l'Apprentissage des Langues",
          category: "Apprentissage Langues",
          description: "Pratique orale dans 29+ langues avec retour immédiat.",
          highlight: "Pratique en 29+ Langues",
        },
        {
          title: "Borne de Formation en Entreprise",
          category: "Formation Pro",
          description: "Mises en situation et jeux de rôle pour le personnel en entreprise.",
          highlight: "Simulations de Rôle",
        },
        {
          title: "Guide d'Admissions et Orientation",
          category: "Admissions",
          description: "Renseignements sur les frais de scolarité, critères et logements.",
          highlight: "Orientation Admissions",
        },
      ],
      techSpecs: [
        { label: "Moteur de connaissances", value: "RAG local sur PDF de manuels et programmes" },
        { label: "Mode d'interaction", value: "Dialogue vocal naturel + Écran tactile" },
        { label: "Entraînement linguistique", value: "IA conversationnelle adaptée aux accents" },
        { label: "Intégration LMS", value: "Compatible avec Canvas, Moodle et Blackboard" },
      ],
      metaTitle: "Tuteurs Holographiques 3D et Enseignants IA | HS Global AI",
      metaDescription: "Tuteurs holographiques 3D, guides de laboratoire et avatars multilingues pour l'enseignement.",
    },
  },
};

export function getLocalizedIndustryData(slug: string, lang: string = "en"): IndustryDetail {
  if (lang === "en" || !localizedIndustriesData[lang] || !localizedIndustriesData[lang][slug]) {
    return industriesData[slug];
  }
  return localizedIndustriesData[lang][slug];
}

export function getLocalizedUIStrings(lang: string = "en"): LocalizedUIStrings {
  return localizedUI[lang] || localizedUI.en;
}
