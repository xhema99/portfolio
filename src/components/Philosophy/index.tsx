"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { philosophy } from "@/lib/codex";
import { useLang } from "@/lib/lang";

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  const items = philosophy[lang];

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("section-visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={ref} className="section-hidden py-28 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <Image
        src="/images/philosophy-bg.png"
        alt=""
        fill
        className="object-cover opacity-[0.04] pointer-events-none select-none"
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="w-8 h-px bg-bronze mb-4" />
          <p className="text-xs text-bronze tracking-[0.15em] uppercase font-sans mb-3">{t("philosophy.badge")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-tight">
            {t("philosophy.title1")}
            <br />
            <span className="italic text-bronze">{t("philosophy.title2")}</span>
          </h2>
        </div>

        <div className="space-y-0">
          {items.map((p, i) => (
            <div key={i} className="py-6 border-t border-border last:border-b">
              <div className="flex gap-6">
                <span className="text-xs text-bronze font-mono w-8 shrink-0 pt-0.5">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-serif text-ink mb-2">{p.principle}</h3>
                  <p className="text-sm text-muted/70 font-sans leading-relaxed max-w-xl">{p.evidence}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
