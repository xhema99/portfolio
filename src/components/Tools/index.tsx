"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { tools } from "@/lib/codex";
import { useLang } from "@/lib/lang";

const categoryKeys = ["materials", "tools", "techniques", "infrastructure"] as const;

export default function Tools() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { t, lang } = useLang();
  const allTools = tools[lang];

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("section-visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const catKey = categoryKeys[active];
  const items = allTools[catKey];

  return (
    <section id="tools" ref={ref} className="section-hidden py-28 px-6 sm:px-8 lg:px-12 bg-surface/30 relative overflow-hidden">
      <Image
        src="/images/tools-bg.png"
        alt=""
        fill
        className="object-cover opacity-[0.04] pointer-events-none select-none"
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="w-8 h-px bg-bronze mb-4" />
          <p className="text-xs text-bronze tracking-[0.15em] uppercase font-sans mb-3">{t("tools.badge")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-tight">{t("tools.title")}</h2>
          <p className="text-base text-muted font-sans mt-4 max-w-lg">{t("tools.subtitle")}</p>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categoryKeys.map((k, i) => (
            <button
              key={k}
              onClick={() => setActive(i)}
              className={`shrink-0 px-4 py-2 text-xs font-sans tracking-wider uppercase transition-colors ${
                active === i ? "bg-ink text-parchment" : "bg-transparent text-muted border border-border hover:border-bronze/30"
              }`}
            >
              {t(`tools.cat.${k}`)}
            </button>
          ))}
        </div>

        <div className="animate-fade-up" key={catKey}>
          <p className="text-sm text-muted/70 font-sans mb-6">{t(`tools.desc.${catKey}`)}</p>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.name} className="flex items-start gap-4 py-3 border-b border-border last:border-b-0">
                <span className="text-sm font-mono text-ink w-28 shrink-0">{item.name}</span>
                <span className="text-sm text-muted font-sans">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
