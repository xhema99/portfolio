"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "es" | "en";

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.codex": { es: "El Codex", en: "The Codex" },
  "nav.creations": { es: "Creaciones", en: "Creations" },
  "nav.philosophy": { es: "Filosofía", en: "Philosophy" },
  "nav.tools": { es: "Herramientas", en: "Tools" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.badge": { es: "El Codex", en: "The Codex" },
  "hero.title1": { es: "Creando", en: "Crafting" },
  "hero.title2": { es: "Sistemas", en: "Intelligent" },
  "hero.title3": { es: "Inteligentes", en: "Systems" },
  "hero.subtitle": { es: "Documentando el arte de construir sistemas que transforman información en acción — desde arquitecturas RAG hasta plataformas full-stack.", en: "Documenting the craft of building systems that transform information into action — from RAG architectures to full-stack platforms." },
  "hero.cta1": { es: "Explorar creaciones", en: "Explore creations" },
  "hero.cta2": { es: "Leer el Codex", en: "Read the Codex" },
  "hero.tag4": { es: "✦ Automatización", en: "✦ Automation" },

  // TheCodex
  "codex.badge": { es: "I · El Codex", en: "I · The Codex" },
  "codex.title1": { es: "Del hardware a los", en: "From hardware to" },
  "codex.title2": { es: "sistemas inteligentes", en: "intelligent systems" },
  "codex.p1": { es: "Todo artesano comienza con materias primas. Las mías fueron servidores, cables y protocolos de red — la capa física de la tecnología. Desde ahí, el camino me llevó a través de aplicaciones, bases de datos y la web, cada capa sumando profundidad.", en: "Every craftsman begins with raw materials. Mine were servers, cables, and network protocols — the physical layer of technology. From there, the path led through applications, databases, and the web, each layer adding depth." },
  "codex.p2": { es: "Hoy construyo sistemas inteligentes. Los principios siguen siendo los mismos: entender los materiales, elegir las herramientas correctas y crear con precisión. La diferencia es que ahora los sistemas pueden aprender, adaptarse y decidir.", en: "Today, I build intelligent systems. The principles remain the same: understand the materials, choose the right tools, and craft with precision. The difference is that now the systems can learn, adapt, and decide." },

  // Creations
  "creations.badge": { es: "II · Creaciones Seleccionadas", en: "II · Selected Creations" },
  "creations.title": { es: "Artefactos forjados", en: "Forged artifacts" },
  "creations.subtitle": { es: "Cada proyecto es la respuesta a un desafío real. Construido con intención. Diseñado para perdurar.", en: "Each project represents a response to a real challenge. Built with intention. Designed to endure." },
  "creations.featured": { es: "Destacado", en: "Featured" },
  "creations.problem": { es: "El Problema", en: "The Problem" },
  "creations.constraints": { es: "Restricciones", en: "Constraints" },
  "creations.architecture": { es: "Arquitectura", en: "Architecture" },
  "creations.decisions": { es: "Decisiones Clave", en: "Key Decisions" },
  "creations.results": { es: "Resultados", en: "Results" },
  "creations.lessons": { es: "Lecciones", en: "Lessons" },
  "creations.repo": { es: "Ver repositorio", en: "View repository" },

  // Philosophy
  "philosophy.badge": { es: "III · Filosofía de Ingeniería", en: "III · Engineering Philosophy" },
  "philosophy.title1": { es: "Principios que", en: "Principles that" },
  "philosophy.title2": { es: "guían el trabajo", en: "guide the work" },

  // Tools
  "tools.badge": { es: "IV · Herramientas y Materiales", en: "IV · Tools & Materials" },
  "tools.title": { es: "El taller", en: "The workshop" },
  "tools.subtitle": { es: "Todo artesano necesita las herramientas adecuadas. Estos son los instrumentos que uso.", en: "Every craftsman needs the right tools. These are the instruments I reach for." },
  "tools.cat.materials": { es: "Materiales", en: "Materials" },
  "tools.cat.tools": { es: "Herramientas", en: "Tools" },
  "tools.cat.techniques": { es: "Técnicas", en: "Techniques" },
  "tools.cat.infrastructure": { es: "Infraestructura", en: "Infrastructure" },
  "tools.desc.materials": { es: "Los fundamentos con los que construyo", en: "The foundations I build with" },
  "tools.desc.tools": { es: "Los instrumentos del oficio", en: "The instruments of the craft" },
  "tools.desc.techniques": { es: "Métodos y enfoques", en: "Methods and approaches" },
  "tools.desc.infrastructure": { es: "Donde viven los sistemas", en: "Where systems live" },

  // Journey
  "journey.badge": { es: "V · Trayectoria", en: "V · Journey" },
  "journey.title1": { es: "El camino de un", en: "The path of a" },
  "journey.title2": { es: "artesano", en: "craftsman" },

  // Contact
  "contact.badge": { es: "VI · Contacto", en: "VI · Contact" },
  "contact.title": { es: "Construyamos algo", en: "Let's build something" },
  "contact.subtitle": { es: "Si tenés un desafío que necesita una solución inteligente, me gustaría escucharlo.", en: "If you have a challenge that needs an intelligent solution, I'd like to hear about it." },
  "contact.cta": { es: "Enviar mensaje", en: "Send a message" },

  // Archivist
  "archivist.hello": { es: "Soy El Archivero, guardián del Codex. ¿Cómo puedo ayudarte a entender el trabajo dentro de estas páginas?", en: "I am The Archivist, keeper of the Codex. How may I help you understand the work within these pages?" },
  "archivist.name": { es: "El Archivero", en: "The Archivist" },
  "archivist.role": { es: "guardián del Codex", en: "keeper of the Codex" },
  "archivist.placeholder": { es: "Pregunta al Archivero...", en: "Ask the Archivist..." },
  "archivist.error": { es: "El Codex está momentáneamente en silencio. Intenta de nuevo.", en: "The Codex is momentarily silent. Please try again." },
  "archivist.aria": { es: "Abrir El Archivero", en: "Open The Archivist" },

  // Lang toggle
  "lang.switch": { es: "EN", en: "ES" },
};

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
