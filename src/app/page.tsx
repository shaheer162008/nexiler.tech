import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import AboutUs from "@/components/about-us";
import OurWork from "@/components/our-work";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-background relative max-w-[100vw] overflow-x-hidden">
      <Hero />
      <Services />
      <Features />
      <AboutUs />
      <OurWork />
      <Testimonials />
      <Pricing />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
