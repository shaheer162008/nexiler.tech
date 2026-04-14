"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black text-white px-8 py-16 md:px-16 font-[family-name:var(--font-geist-sans)] z-0">
      
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 relative z-10">
        {/* LEFT: Text */}
        <div 
          className="relative mx-auto flex h-[40rem] w-full max-w-[60rem] items-center justify-center overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/5 isolate bg-black"
          style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
          
          {/* Rotating conic gradient glow - Extra Smooth & Contained */}
          <div className="absolute inset-[-50%] flex items-center justify-center pointer-events-none">
            <div className="h-[200%] w-[200%] blur-[120px] opacity-70 mix-blend-screen bg-[conic-gradient(from_0deg,oklch(0.646_0.222_41.116),theme(colors.purple.500),oklch(0.488_0.243_264.376),theme(colors.fuchsia.600),oklch(0.646_0.222_41.116))] animate-[spin_10s_linear_infinite]" />
          </div>

          {/* Inner card hovering above the gradient */}
          <Card className="w-[340px] z-10 rounded-[2rem] border border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl">
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-white">Nexiler</span>
                <span className="text-xs text-foreground">99 / 99</span>
              </div>

              {/* Progress bar */}
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-[linear-gradient(90deg,theme(colors.cyan.400),theme(colors.sky.400),theme(colors.emerald.400))]" />
              </div>

              <p className="text-xs text-foreground">
                Building solutions… please keep the workspace open until the process is complete.
              </p>

              <Button
                variant="secondary"
                className="mt-4 w-full rounded-full bg-zinc-800 text-foreground hover:bg-zinc-700 font-semibold"
              >
                Cancel
              </Button>
            </CardContent>
          </Card>
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