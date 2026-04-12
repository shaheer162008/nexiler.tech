import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import AboutUs from "@/components/about-us";
import OurWork from "@/components/our-work";

export default function Home() {
  return (
    <main className="flex flex-col bg-background relative max-w-[100vw] overflow-x-hidden">
      <Hero />
      <Services />
      <Features />
      <AboutUs />
      <OurWork />
    </main>
  );
}
