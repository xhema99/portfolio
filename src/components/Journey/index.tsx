"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { codexTimeline } from "@/lib/codex";
import { useLang } from "@/lib/lang";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  const timeline = codexTimeline[lang];

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("section-visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="journey" ref={ref} className="section-hidden py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="w-8 h-px bg-bronze mb-4" />
          <p className="text-xs text-bronze tracking-[0.15em] uppercase font-sans mb-3">{t("journey.badge")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-tight">
            {t("journey.title1")}
            <br />
            <span className="italic text-bronze">{t("journey.title2")}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-0.5 md:-translate-x-0.5" />

          {timeline.map((entry, i) => (
            <div key={i} className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-parchment border-2 border-bronze -translate-x-1.5 z-10" />

              <div className="flex-1 md:w-1/2 pl-10 md:pl-0 md:px-8">
                <div className="border border-border p-5 hover:border-bronze/30 transition-colors bg-parchment">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-bronze">{entry.era}</span>
                  </div>
                  <h3 className="text-lg font-serif text-ink">{entry.title}</h3>
                  <p className="text-xs text-muted font-sans mt-0.5">{entry.subtitle}</p>
                  <p className="text-sm text-muted/70 font-sans mt-2">{entry.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
