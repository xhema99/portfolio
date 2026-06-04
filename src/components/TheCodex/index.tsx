"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { codexTimeline } from "@/lib/codex";
import { useLang } from "@/lib/lang";

export default function TheCodex() {
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  const timeline = codexTimeline[lang];

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("section-visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="codex" ref={ref} className="section-hidden py-28 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <Image
        src="/images/codex-bg.png"
        alt=""
        fill
        className="object-cover opacity-[0.04] pointer-events-none select-none"
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="w-8 h-px bg-bronze mb-4" />
          <p className="text-xs text-bronze tracking-[0.15em] uppercase font-sans mb-3">{t("codex.badge")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-tight">
            {t("codex.title1")}
            <br />
            <span className="italic text-bronze">{t("codex.title2")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <p className="text-base text-muted leading-relaxed font-sans">{t("codex.p1")}</p>
          <p className="text-base text-muted leading-relaxed font-sans">{t("codex.p2")}</p>
        </div>

        <div className="border-t border-border">
          {timeline.map((entry, i) => (
            <div key={i} className="group flex gap-6 py-6 border-b border-border last:border-b-0">
              <span className="text-xs text-bronze font-mono w-24 shrink-0 pt-0.5">{entry.era}</span>
              <div>
                <h3 className="text-lg font-serif text-ink group-hover:text-bronze transition-colors">{entry.title}</h3>
                <p className="text-xs text-muted font-sans mt-0.5">{entry.subtitle}</p>
                <p className="text-sm text-muted/70 font-sans mt-2 max-w-xl">{entry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
