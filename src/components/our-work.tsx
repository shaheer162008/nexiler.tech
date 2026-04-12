"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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
    image: "https://images.unsplash.com/photo-1620712948343-0088b3f50348?q=80&w=2400&auto=format&fit=crop",
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
  }
];

export default function OurWork() {
  return (
    <section id="work" className="relative isolate w-full bg-background py-20 sm:py-32 overflow-hidden font-[family-name:var(--font-geist-sans)] z-10">
      
      {/* Background Atmospheric Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/3 -z-10 transform-gpu blur-3xl pointer-events-none"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: 'linear-gradient(to top right, oklch(0.646 0.222 41.116 / 0.15), oklch(0.488 0.243 264.376 / 0.15))'
          }}
          className="relative left-[calc(50%-15rem)] w-[50rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg]"
        />
      </div>

      <div className="mx-auto px-6 md:px-12 max-w-[85rem]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary font-[family-name:var(--font-geist-mono)]">Premium Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground mb-6 leading-[1.1]">
              Crafting Digital <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8A2BE2]">Masterpieces</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg md:text-xl font-medium text-muted-foreground/80 max-w-md font-[family-name:var(--font-geist-mono)] leading-relaxed">
              Explore our carefully curated selection of visionary projects. We don't just build software; we engineer exceptional experiences.
            </p>
          </motion.div>
        </div>

        {/* Premium Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(350px,_1fr)] gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card isolate ${project.colSpan}`}
            >
              {/* Cinematic Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:via-black/50" />
              
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 z-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-10 pointer-events-none">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold text-white tracking-wide font-[family-name:var(--font-geist-mono)] shadow-lg"
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
                  <span className="text-primary font-bold tracking-widest uppercase text-xs font-[family-name:var(--font-geist-mono)] block mb-2 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                    {project.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white mb-2 shadow-black drop-shadow-xl">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 font-medium font-[family-name:var(--font-geist-mono)] text-sm sm:text-base max-w-sm leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}