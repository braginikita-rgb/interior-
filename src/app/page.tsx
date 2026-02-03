import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <PortfolioPreview />
      <Process />
      <Contact />
    </>
  );
}
