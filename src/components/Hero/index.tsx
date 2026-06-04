"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/codex";
import { useLang } from "@/lib/lang";

const specialties = [
  { label: "AI Systems", desc: "RAG · LLMs · Multi-Agent" },
  { label: "Data Engineering", desc: "ETL · ML · Forecasting" },
  { label: "Full-Stack", desc: "Frontend · Backend · Cloud" },
  { label: "Automation", desc: "Pipelines · Deployment · IA" },
];

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-8 lg:px-12 overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover opacity-[0.07] pointer-events-none select-none"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-parchment pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full pt-24 lg:pt-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/avatar-profile.png"
                alt={personalInfo.name}
                width={64}
                height={64}
                className="rounded-full border-2 border-bronze/30"
              />
              <div>
                <span className="w-8 h-px bg-bronze mb-2 block" />
                <span className="text-xs text-bronze tracking-[0.15em] uppercase font-sans font-medium">{t("hero.badge")}</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-ink leading-[1.05] mb-6">
              {t("hero.title1")}
              <br />
              <span className="italic text-bronze">{t("hero.title2")}</span>
              <br />
              {t("hero.title3")}
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg font-sans mb-10">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#creations"
                className="px-6 py-3 bg-ink text-parchment text-sm font-sans font-medium hover:bg-ink/80 transition-colors"
              >
                {t("hero.cta1")}
              </a>
              <a
                href="#codex"
                className="px-6 py-3 border border-border text-ink text-sm font-sans font-medium hover:border-bronze/60 hover:text-bronze transition-colors"
              >
                {t("hero.cta2")}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-xs text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-bronze" />
                Sistemas RAG
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-bronze" />
                Ing. de Datos
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-bronze" />
                Full-Stack
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-bronze" />
                Automatización
              </span>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2 pt-8">
            <div className="border-l border-border/50 pl-8 space-y-8">
              {specialties.map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-serif text-ink font-medium mb-1">{s.label}</p>
                  <p className="text-xs text-muted/60 font-sans tracking-wide">{s.desc}</p>
                </div>
              ))}
              <div className="pt-4 border-t border-border/30">
                <p className="text-[10px] text-bronze font-mono tracking-widest uppercase">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/40">
          <span className="text-[10px] font-mono tracking-widest uppercase">{lang === "en" ? "Scroll" : "Desplázate"}</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
