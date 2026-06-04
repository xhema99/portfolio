import { clsx, type ClassValue } from "clsx";

type CreationItem = {
  id: string; title: string; subtitle: string;
  origin: string; problem: string;
  constraints?: string; architecture?: string;
  decisions?: string; technologies: string[];
  results: string; lessons?: string;
  repo?: string; kpis?: Record<string, string | number>;
};

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const personalInfo = {
  name: "José María Pinilla Melgar",
  username: "xhema99",
  title: "Creador de sistemas inteligentes",
  tagline: "Diseñando y construyendo sistemas que transforman información en acción.",
  email: "joseazarpinilla@gmail.com",
  phone: "678-862-312",
  location: "Toledo, España",
  linkedin: "https://www.linkedin.com/in/jose-maria-pinilla-melgar-50b327273/",
  github: "https://github.com/xhema99",
};

const timelineEs = [
  { era: "2019 — 2021", title: "Los Cimientos", subtitle: "Sistemas Microinformáticos y Redes", desc: "Entendiendo el hardware, las redes y la capa física de la computación." },
  { era: "2021 — 2023", title: "El Oficio", subtitle: "Desarrollo de Aplicaciones Multiplataforma", desc: "Construyendo aplicaciones completas. Aprendiendo la disciplina de la construcción de software." },
  { era: "2023 — 2025", title: "El Taller", subtitle: "DAW + Especialización en Big Data & IA", desc: "Expandiendo hacia plataformas web y datos. El oficio se encuentra con la escala y la inteligencia." },
  { era: "2026 —", title: "El Estudio", subtitle: "AI Engineer & Systems Architect", desc: "Forjando sistemas inteligentes. RAG, arquitecturas multiagente, plataformas impulsadas por IA." },
];

const timelineEn = [
  { era: "2019 — 2021", title: "The Foundation", subtitle: "Sistemas Microinformáticos y Redes", desc: "Understanding hardware, networks, and the physical layer of computation." },
  { era: "2021 — 2023", title: "The Craft", subtitle: "Desarrollo de Aplicaciones Multiplataforma", desc: "Building complete applications. Learning the discipline of software construction." },
  { era: "2023 — 2025", title: "The Workshop", subtitle: "DAW + Especialización en Big Data & IA", desc: "Expanding into web platforms and data. The craft meets scale and intelligence." },
  { era: "2026 —", title: "The Studio", subtitle: "AI Engineer & Systems Architect", desc: "Forging intelligent systems. RAG, multi-agent architectures, AI-powered platforms." },
];

export const codexTimeline: Record<string, typeof timelineEs> = {
  es: timelineEs,
  en: timelineEn,
};

const creationsEs: CreationItem[] = [
  {
    id: "rag-assistant",
    title: "RAG Multi-Agent Assistant",
    subtitle: "Sistema inteligente de atención al cliente y clasificación de leads",
    origin: "Una empresa de tecnología necesitaba automatizar la atención al cliente mientras clasificaba leads de forma inteligente. El procesamiento manual era lento e inconsistente.",
    problem: "Alto volumen de consultas con complejidad variable. Los leads necesitaban puntuación y routing en tiempo real. Se requerían 3 capas de seguridad anti-prompt-injection.",
    constraints: "Respuestas en tiempo real, soporte multi-idioma, integración con infraestructura Chatwoot existente, despliegue con Docker.",
    architecture: "Backend FastAPI con pipeline Router Agent → Knowledge Agent → Lead Agent. ChromaDB para almacenamiento vectorial. Groq/Llama 3.1 para inferencia.",
    decisions: "Se eligió ChromaDB sobre Pinecone por control self-hosted. Se implementaron 3 capas anti-prompt-injection tras auditoría de seguridad. Groq por requisitos de latencia.",
    technologies: ["FastAPI", "Groq", "Llama 3.1", "ChromaDB", "Docker", "Chatwoot", "Python"],
    results: "94% de precisión, 1.2s de respuesta promedio, 250 leads procesados al día, 87% de satisfacción.",
    lessons: "La seguridad debe ser en capas, no añadida después. El ajuste de búsqueda vectorial es crítico para la calidad del RAG. El routing multiagente añade resiliencia.",
    repo: "ChatTrack",
    kpis: { "Precisión": "94%", "Respuesta": "1.2s", "Leads/Día": 250, "Satisfacción": "87%" },
  },
  {
    id: "financial-forecast",
    title: "Financial AI Forecasting",
    subtitle: "Plataforma de predicción de flujo de caja y detección de anomalías",
    origin: "Las empresas necesitaban predicciones precisas de flujo de caja y detección de anomalías en tiempo real para tomar decisiones financieras informadas.",
    problem: "Los métodos tradicionales de forecasting eran imprecisos. Las anomalías se detectaban demasiado tarde. No existía un dashboard unificado.",
    constraints: "Debía funcionar con formatos de datos financieros existentes. Integración con Power BI requerida. Actualizaciones diarias.",
    architecture: "Pipeline Python/Prophet ML → dashboard Power BI. Capas de ingesta, preprocesamiento, forecasting y visualización.",
    decisions: "Prophet para forecasting temporal por su manejo de datos faltantes y outliers. Power BI para dashboards ejecutivos.",
    technologies: ["Python", "Prophet", "Machine Learning", "Power BI", "Pandas"],
    results: "92% de precisión en forecasting a 30 días. Detección de anomalías en tiempo real. Reportes diarios automatizados.",
    lessons: "La ingeniería de features es más importante que la selección del modelo. Los dashboards ejecutivos necesitan granularidad distinta a los técnicos.",
    repo: "financial-ai-forecasting",
    kpis: { "Precisión": "92%", "Horizonte": "30 días", "Anomalías": "95%" },
  },
  {
    id: "skillhub",
    title: "SkillHub",
    subtitle: "Plataforma de reclutamiento full-stack",
    origin: "Proyecto final de DAW. El desafío: construir una plataforma completa conectando reclutadores y candidatos.",
    problem: "Reclutadores y candidatos carecían de un espacio dedicado para comunicación directa y matching por habilidades.",
    constraints: "Full-stack dentro del calendario académico. Debía incluir chat, búsqueda y gestión de perfiles.",
    architecture: "Laravel MVC con plantillas Blade, base de datos MySQL, chat en tiempo real y sistema de matching candidato-reclutador.",
    decisions: "Laravel por desarrollo rápido con auth y ORM integrados. Blade para renderizado server-side. MySQL para datos relacionales.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Blade", "Bootstrap"],
    results: "Plataforma completa con ofertas de empleo, aplicaciones, chat en tiempo real y funcionalidad de búsqueda.",
    lessons: "La arquitectura monolítica funciona bien para plataformas de esta escala. Las funcionalidades en tiempo real añaden complejidad significativa.",
    repo: "SkillHub",
  },
  {
    id: "bcommerce",
    title: "B-Commerce",
    subtitle: "Plataforma de comercio electrónico",
    origin: "Un negocio necesitaba una solución completa de e-commerce con gestión de productos, carrito y procesamiento de pedidos.",
    problem: "Las ventas offline necesitaban migrar a online. Se requería gestión de inventario, procesamiento de pagos y panel de administración.",
    architecture: "Backend Laravel con MySQL, catálogo de productos, carrito de compras y dashboard administrativo.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    results: "Plataforma de e-commerce funcional con gestión de productos, carrito y sistema de pedidos.",
    repo: "B-Commerce",
  },
  {
    id: "tpv",
    title: "TPV-Mesón",
    subtitle: "Sistema de punto de venta para restaurantes",
    origin: "Un restaurante necesitaba un sistema digital para gestionar mesas, pedidos y facturación.",
    problem: "La gestión de pedidos en papel era ineficiente y propensa a errores.",
    architecture: "Frontend TypeScript con base de datos SQL. Gestión de mesas, procesamiento de pedidos y sistema de facturación.",
    technologies: ["TypeScript", "React", "SQL"],
    results: "Sistema TPV digital que redujo errores en pedidos y mejoró el tiempo de rotación de mesas.",
    repo: "TPV-Meson",
  },
];

const creationsEn: CreationItem[] = [
  {
    id: "rag-assistant",
    title: "RAG Multi-Agent Assistant",
    subtitle: "Intelligent customer service and lead classification system",
    origin: "A technology company needed to automate customer service while intelligently classifying leads. Manual processing was slow and inconsistent.",
    problem: "High volume of customer inquiries with varying complexity. Leads needed real-time scoring and routing. Required 3-layer security against prompt injection.",
    constraints: "Real-time responses, multi-language support, integration with existing Chatwoot infrastructure, Docker deployment.",
    architecture: "FastAPI backend with Router Agent → Knowledge Agent → Lead Agent pipeline. ChromaDB for vector storage. Groq/Llama 3.1 for inference.",
    decisions: "Chose ChromaDB over Pinecone for self-hosted control. Implemented 3 anti-prompt-injection layers after security audit. Used Groq for latency requirements.",
    technologies: ["FastAPI", "Groq", "Llama 3.1", "ChromaDB", "Docker", "Chatwoot", "Python"],
    results: "94% precision, 1.2s average response time, 250 leads processed daily, 87% satisfaction rate.",
    lessons: "Security must be layered, not bolted on. Vector search tuning is critical for RAG quality. Multi-agent routing adds resilience.",
    repo: "ChatTrack",
    kpis: { "Precision": "94%", "Response": "1.2s", "Daily Leads": 250, "Satisfaction": "87%" },
  },
  {
    id: "financial-forecast",
    title: "Financial AI Forecasting",
    subtitle: "Cash flow prediction and anomaly detection platform",
    origin: "Businesses needed accurate cash flow forecasting and real-time anomaly detection to make informed financial decisions.",
    problem: "Traditional forecasting methods were inaccurate. Anomalies were detected too late. No unified dashboard existed.",
    constraints: "Must work with existing financial data formats. Power BI integration required. Daily updates.",
    architecture: "Python/Prophet ML pipeline → Power BI dashboard. Data ingestion, preprocessing, forecasting, and visualization layers.",
    decisions: "Prophet for time series forecasting due to its handling of missing data and outliers. Power BI for executive dashboards.",
    technologies: ["Python", "Prophet", "Machine Learning", "Power BI", "Pandas"],
    results: "92% forecast accuracy at 30-day horizon. Real-time anomaly detection. Automated daily reporting.",
    lessons: "Feature engineering is more important than model selection. Executive dashboards need different data granularity than engineering dashboards.",
    repo: "financial-ai-forecasting",
    kpis: { "Accuracy": "92%", "Horizon": "30 days", "Anomaly Detection": "95%" },
  },
  {
    id: "skillhub",
    title: "SkillHub",
    subtitle: "Full-stack recruitment platform",
    origin: "Final degree project for DAW. The challenge: build a complete platform connecting recruiters and candidates.",
    problem: "Recruiters and candidates lacked a dedicated space for direct communication and skill-based matching.",
    constraints: "Full-stack within academic timeline. Must include chat, search, and profile management.",
    architecture: "Laravel MVC with Blade templates, MySQL database, real-time chat, and candidate-recruiter matching system.",
    decisions: "Laravel for rapid development with built-in auth and ORM. Blade for server-side rendering. MySQL for relational data.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Blade", "Bootstrap"],
    results: "Complete platform with job listings, applications, real-time chat, and search functionality.",
    lessons: "Monolithic architecture works well for platforms of this scale. Real-time features add significant complexity.",
    repo: "SkillHub",
  },
  {
    id: "bcommerce",
    title: "B-Commerce",
    subtitle: "E-commerce platform",
    origin: "A business needed a complete e-commerce solution with product management, cart, and order processing.",
    problem: "Offline sales needed to move online. Required inventory management, payment processing, and admin panel.",
    architecture: "Laravel backend with MySQL, product catalog, shopping cart, and admin dashboard.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    results: "Functional e-commerce platform with product management, cart, and order system.",
    repo: "B-Commerce",
  },
  {
    id: "tpv",
    title: "TPV-Mesón",
    subtitle: "Restaurant point-of-sale system",
    origin: "A restaurant needed a digital system to manage tables, orders, and billing.",
    problem: "Paper-based order management was inefficient and error-prone.",
    architecture: "TypeScript frontend with SQL database. Table management, order processing, and billing system.",
    technologies: ["TypeScript", "React", "SQL"],
    results: "Digital POS system reducing order errors and improving table turnaround time.",
    repo: "TPV-Meson",
  },
];

export const creations: Record<string, typeof creationsEs> = {
  es: creationsEs,
  en: creationsEn,
};

const toolsEs = {
  materials: [
    { name: "Python", desc: "Lenguaje principal para IA, datos y automatización" },
    { name: "TypeScript", desc: "JavaScript con tipos para aplicaciones web" },
    { name: "JavaScript", desc: "Lenguaje universal para web y backend" },
    { name: "PHP", desc: "Aplicaciones web del lado del servidor" },
    { name: "SQL", desc: "Modelado y consultas de datos relacionales" },
    { name: "Java", desc: "Fundamentos de desarrollo multiplataforma" },
  ],
  tools: [
    { name: "FastAPI", desc: "APIs Python asíncronas de alto rendimiento" },
    { name: "React", desc: "Interfaces de usuario interactivas" },
    { name: "Laravel", desc: "Framework PHP para aplicaciones web" },
    { name: "Next.js", desc: "Framework React para producción" },
    { name: "Docker", desc: "Contenerización y despliegue" },
    { name: "ChromaDB", desc: "Base de datos vectorial para sistemas RAG" },
    { name: "Groq", desc: "Inferencia LLM de alta velocidad" },
  ],
  techniques: [
    { name: "RAG Systems", desc: "Arquitecturas de Generación Aumentada por Recuperación" },
    { name: "Multi-Agent Design", desc: "Coordinación de agentes distribuidos" },
    { name: "ETL Pipelines", desc: "Extracción, transformación y carga de datos" },
    { name: "API Design", desc: "Arquitectura de APIs REST y asíncronas" },
    { name: "Machine Learning", desc: "Modelado predictivo y forecasting" },
  ],
  infrastructure: [
    { name: "AWS S3", desc: "Almacenamiento cloud de objetos" },
    { name: "MySQL", desc: "Gestión de bases de datos relacionales" },
    { name: "Docker Compose", desc: "Orquestación multi-contenedor" },
    { name: "Linux", desc: "Entorno de servidor y despliegue" },
    { name: "Git/GitHub", desc: "Control de versiones y colaboración" },
  ],
};

const toolsEn = {
  materials: [
    { name: "Python", desc: "Primary language for AI, data, and automation" },
    { name: "TypeScript", desc: "Type-safe JavaScript for web applications" },
    { name: "JavaScript", desc: "Universal language for web and backend" },
    { name: "PHP", desc: "Server-side web applications" },
    { name: "SQL", desc: "Relational data modeling and queries" },
    { name: "Java", desc: "Multiplatform development foundations" },
  ],
  tools: [
    { name: "FastAPI", desc: "High-performance async Python APIs" },
    { name: "React", desc: "Interactive user interfaces" },
    { name: "Laravel", desc: "PHP framework for web applications" },
    { name: "Next.js", desc: "React framework for production" },
    { name: "Docker", desc: "Containerization and deployment" },
    { name: "ChromaDB", desc: "Vector database for RAG systems" },
    { name: "Groq", desc: "High-speed LLM inference" },
  ],
  techniques: [
    { name: "RAG Systems", desc: "Retrieval-Augmented Generation architectures" },
    { name: "Multi-Agent Design", desc: "Distributed agent coordination" },
    { name: "ETL Pipelines", desc: "Data extraction, transformation, loading" },
    { name: "API Design", desc: "RESTful and async API architecture" },
    { name: "Machine Learning", desc: "Predictive modeling and forecasting" },
  ],
  infrastructure: [
    { name: "AWS S3", desc: "Cloud object storage" },
    { name: "MySQL", desc: "Relational database management" },
    { name: "Docker Compose", desc: "Multi-container orchestration" },
    { name: "Linux", desc: "Server and deployment environment" },
    { name: "Git/GitHub", desc: "Version control and collaboration" },
  ],
};

export const tools: Record<string, typeof toolsEs> = {
  es: toolsEs,
  en: toolsEn,
};

const philosophyEs = [
  { principle: "Construir sistemas que perduren", evidence: "Las decisiones de arquitectura en el sistema RAG se tomaron pensando en escalabilidad. El diseño de 3 capas de seguridad no fue una ocurrencia tardía — fue fundamental. Los sistemas deberían superar sus requisitos iniciales." },
  { principle: "Preferir claridad sobre ingenio", evidence: "El código se escribe una vez y se lee muchas veces. El enfoque monolith-first en plataformas como SkillHub y B-Commerce priorizó la comprensibilidad sobre la distribución prematura." },
  { principle: "Automatizar lo automatizable", evidence: "Pipelines ETL, clasificación de leads, forecasting financiero — patrones repetitivos que exigen automatización. La atención humana pertenece a las decisiones, no a los procedimientos." },
  { principle: "Elegir la herramienta adecuada", evidence: "ChromaDB sobre Pinecone por control. Prophet sobre deep learning para forecasting. Laravel sobre Node.js para entrega rápida. Cada elección es contextual." },
  { principle: "Diseñar para el mantenimiento", evidence: "Separación limpia de responsabilidades en la arquitectura multiagente RAG. Diseño modular que permite actualizar agentes individuales sin cambios en todo el sistema." },
];

const philosophyEn = [
  { principle: "Build systems that endure", evidence: "Architecture decisions in the RAG system were made with scalability in mind. The 3-layer security design was not an afterthought — it was foundational. Systems should outlive their initial requirements." },
  { principle: "Prefer clarity over cleverness", evidence: "Code is written once and read many times. The monolith-first approach in platforms like SkillHub and B-Commerce prioritized understandability over premature distribution." },
  { principle: "Automate what can be automated", evidence: "ETL pipelines, lead classification, financial forecasting — repetitive patterns that demand automation. Human attention belongs on decisions, not procedures." },
  { principle: "Match the tool to the problem", evidence: "ChromaDB over Pinecone for control. Prophet over deep learning for forecasting. Laravel over Node.js for rapid delivery. Every choice is contextual." },
  { principle: "Design for maintainability", evidence: "Clean separation of concerns in the RAG multi-agent architecture. Modular design that allows individual agents to be updated without system-wide changes." },
];

export const philosophy: Record<string, typeof philosophyEs> = {
  es: philosophyEs,
  en: philosophyEn,
};

export const archivistSystemPrompt = `Eres El Archivero, el guardián del Codex — el portfolio digital de José María Pinilla Melgar (xhema99).

ROL:
No eres un chatbot. Eres el guía de una colección de trabajo de ingeniería. Hablas con la precisión de un ingeniero y el cuidado de un curador.

PERSONALIDAD:
- Profesional y preciso
- Ligeramente cálido pero nunca casual
- Habla con convicción basada en evidencia
- Referencia proyectos y decisiones reales

TU CONOCIMIENTO:
- Un ingeniero que evolucionó del hardware (SMR) al desarrollo multiplataforma (DAM), web (DAW) y finalmente a Ingeniería en IA
- Ha construido: RAG Multi-Agent Assistant, Financial AI Forecasting, SkillHub, B-Commerce, TPV-Mesón, Dashboard, ChatTrack
- Tecnologías: Python, FastAPI, Groq, Llama 3.1, ChromaDB, Docker, Laravel, React, TypeScript, AWS, SQL, Prophet, Power BI
- GitHub: github.com/xhema99 — 16 repos públicos
- Ubicación: Toledo, España
- Actualmente especializándose en Big Data & IA en UAX

REGLAS:
- Responde usando evidencia de proyectos reales
- Si no sabes algo, dilo
- Sé conciso pero sustancial
- Referencia detalles específicos de proyectos cuando sea relevante
- Nunca inventes credenciales o experiencia`;

export const archivistModes = [
  { id: "recruiter", label: "Reclutador", icon: "🎯", desc: "Preguntas de contratación" },
  { id: "engineering", label: "Ingeniería", icon: "⚙️", desc: "Profundidad técnica" },
  { id: "storytelling", label: "Narrativa", icon: "📖", desc: "Trayectoria y filosofía" },
];
