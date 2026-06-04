"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/codex";
import { useLang } from "@/lib/lang";

const items = [
  { key: "nav.codex", href: "#codex" },
  { key: "nav.creations", href: "#creations" },
  { key: "nav.philosophy", href: "#philosophy" },
  { key: "nav.tools", href: "#tools" },
  { key: "nav.contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-parchment/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="JMP"
            width={48}
            height={48}
            className="rounded-sm"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] text-muted hover:text-ink transition-colors tracking-[0.12em] uppercase font-sans font-medium relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(item.key)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
