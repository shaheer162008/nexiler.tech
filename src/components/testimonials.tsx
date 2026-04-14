"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Chief Marketing Officer",
    company: "Lumina Tech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    quote: "Nexiler didn't just build us a website; they transformed our entire digital ecosystem. The workflow automations have saved our team hundreds of hours a month.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder & CEO",
    company: "Velocity Startups",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
    quote: "The premium feel and incredible performance of our new platform have directly led to a 40% increase in conversions. Their attention to detail is truly unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Aurelius",
    role: "Director of Operations",
    company: "Nexus Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    quote: "Integrating Nexiler's AI automation tools was the best decision we made this year. It's seamless, flawlessly designed, and incredibly intuitive.",
    rating: 5,
  }
];

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
  hidden: { opacity: 0, y: 30 },
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate w-full bg-background pt-10 sm:pt-16 pb-20 sm:pb-32 overflow-hidden font-[family-name:var(--font-geist-sans)] z-10">
      
      {/* Background Atmospheric Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu blur-3xl pointer-events-none"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: 'linear-gradient(to top right, oklch(0.488 0.243 264.376 / 0.15), oklch(0.646 0.222 41.116 / 0.15))'
          }}
          className="relative right-[calc(50%-15rem)] w-[60rem] aspect-[1155/678] translate-x-1/2 opacity-40"
        />
      </div>

      <div className="mx-auto px-6 md:px-12 max-w-[85rem] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md"
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-[family-name:var(--font-geist-mono)]">
              Client Stories
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-4 leading-tight"
          >
            Trusted by the <br className="hidden sm:block"/>
            <span className="text-foreground">Best in the Business</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-muted-foreground/80 max-w-2xl font-[family-name:var(--font-geist-mono)] leading-relaxed"
          >
            Don't just take our word for it. Hear from the leaders who have revolutionized their operations with Nexiler.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col p-8 sm:p-10 rounded-[2.5rem] bg-card border border-white/5 isolate overflow-hidden transition-all duration-500 hover:border-primary/30 shadow-2xl"
            >
              {/* Glassmorphic overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 -z-10 transform -scale-x-100 group-hover:-rotate-12 transition-transform duration-500" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 drop-shadow-sm" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg sm:text-xl font-medium text-foreground mb-8 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
              
              {/* Author Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-[family-name:var(--font-geist-mono)] font-medium">
                    {testimonial.role}, <span className="text-primary/90">{testimonial.company}</span>
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