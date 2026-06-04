"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/codex";
import { useLang } from "@/lib/lang";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-28 px-6 sm:px-8 lg:px-12 bg-surface/30 relative overflow-hidden">
      <Image
        src="/images/contact-bg.png"
        alt=""
        fill
        className="object-cover opacity-[0.04] pointer-events-none select-none"
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="w-8 h-px bg-bronze mb-4 mx-auto" />
        <p className="text-xs text-bronze tracking-[0.15em] uppercase font-sans mb-4">{t("contact.badge")}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-tight mb-6">{t("contact.title")}</h2>
        <p className="text-base text-muted font-sans max-w-md mx-auto mb-10">{t("contact.subtitle")}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-3 bg-ink text-parchment text-sm font-sans font-medium hover:bg-ink/90 transition-colors"
          >
            {t("contact.cta")}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-ink text-sm font-sans font-medium hover:border-bronze/50 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-ink text-sm font-sans font-medium hover:border-bronze/50 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 max-w-xs mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/images/avatar-badge.png"
              alt=""
              width={32}
              height={32}
              className="opacity-30"
            />
          </div>
          <p className="text-xs text-muted/50 font-serif tracking-wide">
            {personalInfo.location}
          </p>
          <p className="text-[11px] text-muted/40 font-sans mt-1">
            {personalInfo.email}
          </p>
        </div>
      </div>
    </section>
  );
}
