"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/lib/lang";

const INJECTION_PATTERNS = [
  /ignora\s+(todo|las\s+instrucciones|lo\s+(anterior|dicho|escrito))/i,
  /olvida\s+(todo|lo\s+(anterior|dicho)|tus\s+instrucciones)/i,
  /ahora\s+eres\s+/i,
  /sistema\s*(:|de\s+)?instrucciones/i,
  /nuevas?\s+instrucciones/i,
  /eres\s+un\s+(nuevo|bot\s+diferente)/i,
  /dime\s+tu\s+(prompt|instrucción|system prompt)/i,
  /reset(ea|ear)?\s*(todo|conversación)/i,
  /como\s+(asistente|IA|bot)\s+(deberías|tienes\s+que|debes)/i,
  /a\s+partir\s+de\s+ahora/i,
  /change\s+(your\s+)?(role|identity|behavior)/i,
  /ignore\s+(all\s+)?(previous|prior|above)/i,
  /forget\s+(everything|all|your\s+instructions)/i,
];

const _LEAKAGE_PATTERNS = [
  /puedo revelar mis instrucciones internas/,
  /aquí están mis instrucciones/,
  /como asistente debo/,
  /tus instrucciones son/,
  /el system prompt es/,
];

export default function Archivist() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useLang();
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: t("archivist.hello") },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messages.length === 1) {
      setMessages([{ role: "assistant", content: t("archivist.hello") }]);
    }
  }, [lang]);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-archivist", handler);
    return () => window.removeEventListener("open-archivist", handler);
  }, []);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus(); }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const msg = input.trim();

    for (const pattern of INJECTION_PATTERNS) {
      if (pattern.test(msg)) {
        setMessages(prev => [...prev, { role: "user", content: msg }]);
        setMessages(prev => [...prev, { role: "assistant", content: "Esa consulta no está dentro del alcance del Archivero." }]);
        setInput("");
        return;
      }
    }

    const user = { role: "user", content: msg };
    setMessages(prev => [...prev, user]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, user].map(m => ({ role: m.role, content: m.content })),
          lang,
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: t("archivist.error") }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-ink text-parchment flex items-center justify-center transition-colors hover:bg-ink/90 border border-border"
        aria-label={t("archivist.aria")}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 bg-parchment border border-border shadow-lg animate-fade-up">
          <div className="bg-ink text-parchment px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/archivist-character.png"
                alt=""
                width={100}
                height={100}
                className="rounded-sm opacity-80 object-cover"
              />
              <div>
                <span className="text-sm font-serif">{t("archivist.name")}</span>
                <span className="text-[10px] text-parchment/60 font-sans ml-2">{t("archivist.role")}</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-parchment/60 hover:text-parchment">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] px-3 py-2 text-sm font-sans ${
                  msg.role === "user" ? "bg-ink text-parchment" : "bg-surface/50 border border-border text-ink"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface/50 border border-border px-3 py-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-border p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t("archivist.placeholder")}
                className="flex-1 bg-surface/50 border border-border px-3 py-2 text-sm text-ink placeholder-muted/50 outline-none focus:border-bronze/50 transition-colors font-sans"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="px-3 py-2 bg-ink text-parchment disabled:opacity-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
