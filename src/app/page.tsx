import Hero from "@/components/hero";
import Features from "@/components/features";
import AboutUs from "@/components/about-us";

export default function Home() {
  return (
    <main className="flex flex-col bg-background relative max-w-[100vw] overflow-x-hidden">
      <Hero />
      <Features />
      <AboutUs />
    </main>
  );
}
