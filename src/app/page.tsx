import Hero from "@/components/Hero";
import TheCodex from "@/components/TheCodex";
import Creations from "@/components/Creations";
import Philosophy from "@/components/Philosophy";
import Tools from "@/components/Tools";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TheCodex />
      <Creations />
      <Philosophy />
      <Tools />
      <Journey />
      <Contact />
    </main>
  );
}
