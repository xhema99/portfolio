"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { creations } from "@/lib/codex";
import { useLang } from "@/lib/lang";

const mockups: Record<string, string> = {
  "rag-assistant": "/images/chatbot-trak.png",
  "financial-forecast": "/images/financial-forecast.png",
  "skillhub": "/images/skillhub.png",
  "bcommerce": "/images/bcommerce.png",
  "tpv": "/images/tpv-meson.png",
};

export default function Creations() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string | null>(null);
  const { t, lang } = useLang();
  const items = creations[lang];

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("section-visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="creations" ref={ref} className="section-hidden py-28 px-6 sm:px-8 lg:px-12 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="w-8 h-px bg-bronze mb-4" />
          <p className="text-xs text-bronze tracking-[0.15em] uppercase font-sans mb-3">{t("creations.badge")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-tight">{t("creations.title")}</h2>
          <p className="text-base text-muted font-sans mt-4 max-w-lg">{t("creations.subtitle")}</p>
        </div>

        <div className="space-y-3">
          {items.map((c) => {
            const mockup = mockups[c.id];
            return (
              <div key={c.id} className="border border-border hover:border-bronze/30 transition-colors cursor-pointer bg-parchment"
                onClick={() => setOpen(open === c.id ? null : c.id)}>
                <div className="p-5 sm:p-6 flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-serif text-ink">{c.title}</h3>
                      {c.kpis && <span className="text-[10px] font-sans text-bronze uppercase tracking-wider border border-bronze/30 px-2 py-0.5">{t("creations.featured")}</span>}
                    </div>
                    <p className="text-sm text-muted/60 font-sans">{c.subtitle}</p>
                  </div>
                  <span className="text-muted text-lg mt-1">{open === c.id ? "−" : "+"}</span>
                </div>

                {open === c.id && (
                  <div className="px-5 sm:px-6 pb-6 border-t border-border pt-5 space-y-5 animate-fade-up">
                    {mockup && (
                      <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-border">
                        <Image
                          src={mockup}
                          alt={c.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {c.origin && <p className="text-sm text-muted leading-relaxed font-sans">{c.origin}</p>}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-surface/50 p-4">
                        <p className="text-[10px] text-bronze font-sans uppercase tracking-wider mb-1">{t("creations.problem")}</p>
                        <p className="text-sm text-muted font-sans">{c.problem}</p>
                      </div>
                      {c.constraints && (
                      <div className="bg-surface/50 p-4">
                        <p className="text-[10px] text-bronze font-sans uppercase tracking-wider mb-1">{t("creations.constraints")}</p>
                        <p className="text-sm text-muted font-sans">{c.constraints}</p>
                      </div>
                      )}
                    </div>

                    {c.architecture && (
                      <div>
                        <p className="text-[10px] text-bronze font-sans uppercase tracking-wider mb-1">{t("creations.architecture")}</p>
                        <p className="text-sm text-muted font-sans">{c.architecture}</p>
                      </div>
                    )}

                    {c.decisions && (
                    <div>
                      <p className="text-[10px] text-bronze font-sans uppercase tracking-wider mb-1">{t("creations.decisions")}</p>
                      <p className="text-sm text-muted font-sans">{c.decisions}</p>
                    </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {c.technologies.map(t => (
                        <span key={t} className="text-[10px] font-mono text-muted px-2 py-0.5 border border-border rounded-sm">{t}</span>
                      ))}
                    </div>

                    <div>
                      <p className="text-[10px] text-bronze font-sans uppercase tracking-wider mb-1">{t("creations.results")}</p>
                      <p className="text-sm text-muted font-sans">{c.results}</p>
                    </div>

                    {c.kpis && (
                      <div className="flex flex-wrap gap-6">
                        {Object.entries(c.kpis).map(([k, v]) => (
                          <div key={k}>
                            <p className="text-lg font-serif text-ink">{v}</p>
                            <p className="text-[10px] text-muted/60 font-sans uppercase tracking-wider">{k}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {c.lessons && (
                    <div>
                      <p className="text-[10px] text-bronze font-sans uppercase tracking-wider mb-1">{t("creations.lessons")}</p>
                      <p className="text-sm text-muted font-sans italic">{c.lessons}</p>
                    </div>
                    )}

                    {c.repo && (
                      <a href={`https://github.com/xhema99/${c.repo}`} target="_blank" rel="noopener noreferrer"
                        className="inline-block text-xs text-bronze hover:text-ink transition-colors font-sans">
                        {t("creations.repo")} →
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
