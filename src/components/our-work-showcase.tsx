"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Automation Hub",
    category: "Enterprise Software",
    number: "01",
    description:
      "An intelligent operating system that automates complex business workflows using local LLMs. We built a full-stack pipeline from model hosting to real-time task orchestration—saving our client 200+ hours per month.",
    image:
      "https://cdn.prod.website-files.com/64e0e8864ada8a57fabcf99a/6841529bbcd26e768c96419f_ai4-p-1080.png",
    tags: ["React", "Python", "OpenAI", "FastAPI"],
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    title: "Neon FinTech",
    category: "Financial Dashboard",
    number: "02",
    description:
      "Real-time analytics and predictive forecasting for modern banking. A bespoke dashboard featuring live market feeds, AI-driven insights, and Stripe-powered subscription management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "Stripe", "Chart.js"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Onyx E-Commerce",
    category: "Headless Storefront",
    number: "03",
    description:
      "A lightning-fast, high-converting shopping experience powered by a headless architecture. Sub-second page loads, dynamic product filtering, and seamless checkout flows that boosted conversion by 40%.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Shopify", "Hydrogen", "Framer Motion"],
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Aura CRM",
    category: "SaaS Application",
    number: "04",
    description:
      "Customer relationship management redefined for the AI era. Smart lead scoring, automated follow-ups, and a pipeline view that gives sales teams complete clarity on every deal.",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2340&auto=format&fit=crop",
    tags: ["Vue", "Node.js", "PostgreSQL", "Redis"],
    color: "from-violet-500/20 to-purple-500/10",
  },
  {
    title: "Studio Pulse",
    category: "Creative Campaigns",
    number: "05",
    description:
      "A cinematic brand launch experience with high-converting landing pages and motion-led storytelling. We combined video production, 3D assets, and interaction design into a single campaign platform.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop",
    tags: ["Design", "Motion", "Branding", "After Effects"],
    color: "from-rose-500/20 to-pink-500/10",
  },
  {
    title: "Northstar Analytics",
    category: "Data Platform",
    number: "06",
    description:
      "An executive analytics dashboard for teams who need clarity, forecasting, and performance tracking. Custom-built visualizations and AI-powered anomaly detection for enterprise-grade decision making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    tags: ["Analytics", "Dashboards", "AI", "D3.js"],
    color: "from-sky-500/20 to-indigo-500/10",
  },
];

/* ─── Single project card with parallax image ─── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-6 lg:gap-10 items-stretch`}
      >
        {/* ── Image Side ── */}
        <div className="relative w-full lg:w-[58%] aspect-[16/10] lg:aspect-auto lg:min-h-[480px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 bg-card/60">
          {/* Colored ambient glow behind image */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 z-0`}
          />
          <motion.div
            className="absolute inset-0 z-[1]"
            style={{ y: imageY }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </motion.div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Project number watermark */}
          <span className="absolute bottom-4 right-5 sm:bottom-6 sm:right-7 z-[3] text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white/[0.06] tracking-tighter select-none pointer-events-none leading-none">
            {project.number}
          </span>

          {/* Hover arrow */}
          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-[3] w-11 h-11 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer hover:bg-white/25 hover:scale-110 active:scale-95 shadow-2xl">
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* ── Content Side ── */}
        <div className="w-full lg:w-[42%] flex flex-col justify-center py-2 lg:py-8">
          {/* Category + Number */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white/10 font-sans">
              {project.number}
            </span>
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 font-sans">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white mb-4 sm:mb-5 leading-[1.1]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground font-mono leading-relaxed mb-6 sm:mb-8 max-w-lg">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 text-xs font-semibold text-white/70 tracking-wide font-sans transition-colors hover:bg-white/10 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <motion.a
            href="#"
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors group/link w-fit"
          >
            View Case Study
            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Showcase Component ─── */
export default function OurWorkShowcase() {
  return (
    <section className="relative isolate w-full bg-transparent pt-8 sm:pt-16 pb-16 sm:pb-24 font-sans z-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 sm:mb-24 flex flex-col items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5 sm:mb-6 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
              Case Studies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground mb-5 sm:mb-6 leading-[1.05]"
          >
            Projects That Define
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Our Standard
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground/90 font-mono max-w-2xl leading-relaxed"
          >
            Each project is a testament to our commitment to excellence. We
            don&apos;t just build — we craft digital experiences that move the
            needle.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} index={index} />

              {/* Divider between projects (not after last) */}
              {index < projects.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2,
                  }}
                  className="mt-16 sm:mt-20 lg:mt-28 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
