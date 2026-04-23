"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 1, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const projects = [
  {
    title: "AI Automation Hub",
    category: "Enterprise Software",
    description: "An intelligent operating system that automates complex business workflows using local LLMs.",
    image: "https://cdn.prod.website-files.com/64e0e8864ada8a57fabcf99a/6841529bbcd26e768c96419f_ai4-p-1080.png",
    colSpan: "md:col-span-2 md:row-span-2",
    tags: ["React", "Python", "OpenAI"],
  },
  {
    title: "Neon FinTech",
    category: "Financial Dashboard",
    description: "Real-time analytics and predictive forecasting for modern banking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    colSpan: "md:col-span-1 md:row-span-1",
    tags: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    title: "Onyx E-Commerce",
    category: "Headless Storefront",
    description: "A lightning-fast, high-converting shopping experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    colSpan: "md:col-span-1 md:row-span-1",
    tags: ["Shopify", "Framer Motion"],
  },
  {
    title: "Aura CRM",
    category: "SaaS Application",
    description: "Customer relationship management redefined for the AI era.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2340&auto=format&fit=crop",
    colSpan: "md:col-span-2 md:row-span-1",
    tags: ["Vue", "Node.js", "PostgreSQL"],
  },
  {
    title: "Studio Pulse",
    category: "Creative Campaigns",
    description: "A cinematic brand launch experience with high-converting landing pages and motion-led storytelling.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop",
    colSpan: "md:col-span-1 md:row-span-1",
    tags: ["Design", "Motion", "Branding"],
  },
  {
    title: "Northstar Analytics",
    category: "Data Platform",
    description: "An executive analytics dashboard for teams who need clarity, forecasting, and performance tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    colSpan: "md:col-span-1 md:row-span-1",
    tags: ["Analytics", "Dashboards", "AI"],
  },
  {
    title: "View More",
    category: "",
    description: "",
    image: "",
    colSpan: "md:col-span-1 md:row-span-1",
    tags: [],
    isViewMore: true
  }
];

export default function OurWork({ hideViewMore }: { hideViewMore?: boolean }) {
  const displayProjects = hideViewMore ? projects.filter(p => !p.isViewMore) : projects;

  return (
    <section id="work" className="relative isolate w-full bg-transparent pt-20 sm:pt-32 pb-10 sm:pb-16 font-sans z-10">

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 font-sans">
          <div className="max-w-2xl text-left flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md lg:mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
                Premium Portfolio
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Crafting Digital Masterpieces
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium text-balance font-mono">
              Explore our carefully curated selection of visionary projects. We don&apos;t just build software; we engineer exceptional experiences.
            </p>
          </div>
        </div>

        {/* Premium Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(320px,1fr)] sm:auto-rows-[minmax(400px,1fr)] gap-6 lg:gap-8"
        >
          {displayProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card isolate ${project.colSpan}`}
            >
              {project.isViewMore ? (
                <Link href="/our-work" className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center cursor-pointer transition-colors duration-300 hover:bg-white/5">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-white/5">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tighter text-white">View More</h3>
                  <p className="text-muted-foreground mt-2 text-sm font-mono">See all our projects</p>
                </Link>
              ) : (
                <>
                  {/* Cinematic Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:via-black/50" />
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 z-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-8 md:p-10 pointer-events-none">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold text-white tracking-wide font-sans shadow-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto cursor-pointer shadow-2xl hover:bg-white/30 hover:scale-110 active:scale-95">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="transform translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                      <span className="text-primary font-bold tracking-widest uppercase text-xs font-sans block mb-2 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                        {project.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white mb-2 shadow-black drop-shadow-xl">
                        {project.title}
                      </h3>
                      <p className="font-mono">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}