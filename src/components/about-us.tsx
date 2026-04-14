"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function AboutUs() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black text-white px-8 py-16 md:px-16 font-[family-name:var(--font-geist-sans)] z-0">
      
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 relative z-10">
        {/* LEFT: Text */}
        <div 
          className="relative mx-auto flex h-[40rem] w-full max-w-[60rem] items-center justify-center overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/5 isolate bg-black"
          style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none">
              {/* Inner card hovering above the gradient */}
              <Card className="w-[340px] z-10 rounded-[2rem] border border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl pointer-events-auto">
            <CardContent className="p-6 font-[family-name:var(--font-geist-mono)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">System Boot</span>
                </div>
                <span className="text-xs font-extrabold text-sky-400">92%</span>        
              </div>

              {/* Progress bar */}
              <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10 relative">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-[pulse_2s_ease-in-out_infinite]" />
              </div>

              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Loading intelligent workflows & compiling next-generation components...
              </p>
              <p className="text-xs text-white/80 font-semibold mt-3 animate-pulse">
                Your digital ecosystem is almost ready.
              </p>
            </CardContent>
          </Card>
             </div>
          </BackgroundGradientAnimation>
        </div>

        {/* RIGHT: Text Content */}
        <motion.div 
          className="space-y-6 flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 backdrop-blur-md mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white font-[family-name:var(--font-geist-mono)]">
              Who We Are
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-balance text-white mb-4 font-[family-name:var(--font-geist-sans)]">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Nexiler</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-pretty text-foreground max-w-2xl leading-relaxed font-[family-name:var(--font-geist-mono)]">
            We build beautiful, modern interfaces with our comprehensive toolset. No setup, no configuration needed. Focus on your business while we handle the rest.
          </p>
          <Button variant="link" className="px-0 pt-4 text-white text-base sm:text-lg tracking-tight font-semibold hover:text-white/80 transition-colors group">
            Meet the team <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}