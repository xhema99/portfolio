import type { Metadata } from "next";
import { Cormorant, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ArchivistWrapper from "@/components/Archivist/wrapper";
import { LangProvider } from "@/lib/lang";
import LangToggle from "@/components/LangToggle";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "José María Pinilla Melgar | El Codex — Creando Sistemas Inteligentes",
  description: "Portfolio de José María Pinilla Melgar. Creador de sistemas inteligentes. RAG, ingeniería de datos y desarrollo full-stack.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "José María Pinilla Melgar | El Codex",
    description: "Creando sistemas inteligentes. Precisión de ingeniería con resolución creativa de problemas.",
    type: "website",
    locale: "es_ES",
    url: "https://pinillaproject.es",
    siteName: "El Codex",
    images: [{ url: "/Imagen-OG.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "José María Pinilla Melgar | El Codex",
    description: "Creando sistemas inteligentes. Precisión de ingeniería con resolución creativa de problemas.",
    images: ["/Imagen-OG.png"],
  },
  robots: "index, follow",
  keywords: ["Ingeniero IA", "Sistemas RAG", "Big Data", "Desarrollador Full Stack", "Sistemas Inteligentes", "Toledo"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased">
        <LangProvider>
          <Nav />
          <LangToggle />
          {children}
          <ArchivistWrapper />
        </LangProvider>
      </body>
    </html>
  );
}
