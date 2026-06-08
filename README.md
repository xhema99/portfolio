# 🏰 El Codex — Portfolio Medieval

Portfolio personal de **José María Pinilla Melgar** (@xhema99). Un codex digital que documenta el viaje desde el hardware hasta los sistemas inteligentes, con estética de taller artesano medieval.

![Next.js](https://img.shields.io/badge/Next.js-16.2-000?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![Groq](https://img.shields.io/badge/Groq-Llama_3.3-10B981)

---

## 📜 Secciones

| #  | Sección      | Descripción |
|----|-------------|-------------|
| I  | **El Codex**   | De servidores y cables a sistemas inteligentes — la evolución |
| II | **Creaciones** | Proyectos con métricas reales: ChatTrack, Financial AI Forecasting, SkillHub, B-Commerce, TPV-Mesón |
| III| **Filosofía**  | 5 principios que guían el trabajo de ingeniería |
| IV | **Herramientas** | Materiales, herramientas, técnicas e infraestructura del taller |
| V  | **Trayectoria** | Timeline desde 2019 hasta hoy |
| VI | **Contacto**   | CTA para colaborar |

## 🧠 El Archivero

Chatbot inteligente con Groq + Llama 3.3 70B que responde preguntas sobre experiencia, proyectos y habilidades. Incluye:

- Sistema anti-prompt-injection en 3 capas (cliente + servidor + system prompt hardening)
- Modo bilingüe ES/EN
- Contexto completo del portfolio con métricas reales de proyectos
- Referencias a experiencia laboral verificable

## 🛠 Stack

- **Framework**: Next.js 16.2 (App Router)
- **UI**: React 19 + Tailwind CSS v4 + Framer Motion
- **Tipado**: TypeScript
- **Fuentes**: Cormorant (serif), Inter (sans), JetBrains Mono (mono)
- **Backend**: API Route `/api/chat` → Groq Cloud
- **i18n**: Provider casero con contexto React (ES/EN)
- **Despliegue**: Vercel + Hostalia DNS

## 🚀 Desarrollo

```bash
npm install
npm run dev
```

Variables de entorno (`.env.local`):

| Variable | Descripción |
|----------|-------------|
| `GROQ_API_KEY` | API key de Groq Cloud |

## 🏗 Estructura

```
src/
├── app/
│   ├── api/chat/route.ts    # API de Groq
│   ├── globals.css          # Tema medieval + animaciones
│   ├── layout.tsx           # Layout global + metadata
│   └── page.tsx             # Página principal
├── components/
│   ├── Archivist/           # Chatbot flotante
│   ├── Contact/
│   ├── Creations/           # Galería de proyectos
│   ├── Hero/                # Presentación
│   ├── Journey/             # Timeline
│   ├── LangToggle.tsx       # Switch ES/EN
│   ├── Nav/                 # Navegación sticky
│   ├── Philosophy/          # Principios
│   ├── TheCodex/            # Historia
│   └── Tools/               # Tecnologías
├── data/                    # Contenido
└── lib/
    ├── codex.ts             # Datos + utilidades
    └── lang.tsx             # i18n context
```

## 🎨 Tema

Paleta inspirada en pergamino y taller artesano:

| Token      | Color  | Uso |
|------------|--------|-----|
| parchment  | #F5F1E8 | Fondo |
| surface    | #ECE5D8 | Superficies |
| ink        | #1E1E1E | Texto |
| bronze     | #8C6239 | Acentos |
| gold       | #B08D57 | Detalles |
| forest     | #40513B | Secundario |
| steel      | #5A646E | Neutro |
| muted      | #666666 | Texto secundario |

## 📦 Proyectos destacados

- **ChatTrack** — RAG Multi-Agent Assistant (94% precisión, 1.2s respuesta, 3 capas anti-inyección)
- **Financial AI Forecasting** — Predicción de cash flow con Prophet (92% accuracy a 30 días)
- **Optimización de Reparto** — ML en AWS SageMaker
- **SkillHub** — Plataforma de reclutamiento full-stack
- **B-Commerce** — E-commerce
- **TPV-Mesón** — POS para restaurantes
