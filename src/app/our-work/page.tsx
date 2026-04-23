import Hero from "@/components/hero";
import OurWorkShowcase from "@/components/our-work-showcase";
import CTA from "@/components/cta";
import { ServicesFaq } from "@/components/services/faq";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";

export default function OurWorkPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title="Real Projects.
Real Results. No Fluff." 
        description="Browse our work across web design, automation, brand growth, and AI — every project built to deliver measurable outcomes."
        announcementBanner={{ text: "View featured case studies", linkText: "", linkHref: "#" }}
      />
      <GridBackground className="-mt-24 sm:-mt-28">
        <OurWorkShowcase />
        <ServicesFaq
          badge="Project FAQ"
          heading="Questions About Our Work"
          description="A quick look at how we build, present, and scale projects for brands that want more than a template solution."
          faqs={[
            {
              question: "How many projects do you show at once?",
              answer: "We currently show 6 featured projects in the main grid, with a View More tile reserved for the next batch of case studies.",
            },
            {
              question: "What kind of work do you include here?",
              answer: "We highlight websites, dashboards, AI automations, creative campaigns, and product experiences that reflect the kind of results Nexiler delivers.",
            },
            {
              question: "Can you build a similar case study layout for my brand?",
              answer: "Yes. The layout and visual language can be adapted to match your brand while keeping the same polished storytelling structure.",
            },
          ]}
        />
        <CTA />
        <Footer />
      </GridBackground>
    </main>
  );
}