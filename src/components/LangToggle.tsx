"use client";

import { useLang } from "@/lib/lang";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 text-xs font-mono bg-parchment border border-border text-ink hover:border-bronze/50 transition-colors"
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
