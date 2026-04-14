"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="relative w-full py-20 sm:py-32 bg-background font-[family-name:var(--font-geist-sans)] z-10 border-t border-border/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text / Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md"
            >
              <MessageSquare className="w-4 h-4 text-foreground" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-[family-name:var(--font-geist-mono)]">
                Get In Touch
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6">
              Let's craft your <span className="text-foreground">success story.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium font-[family-name:var(--font-geist-mono)] leading-relaxed mb-10 max-w-lg">
              Whether you have a question, a project idea, or just want to say hi, we're here to help you navigate the digital landscape.
            </p>

            <div className="space-y-6 w-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-white/10">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium font-[family-name:var(--font-geist-mono)]">Email Us</p>
                  <p className="text-lg font-semibold text-foreground">hello@nexiler.tech</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-white/10">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium font-[family-name:var(--font-geist-mono)]">Call Us</p>
                  <p className="text-lg font-semibold text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-white/10">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium font-[family-name:var(--font-geist-mono)]">Visit Us</p>
                  <p className="text-lg font-semibold text-foreground">123 Innovation Drive, Tech City</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative"
          >
            {/* Soft decorative glow */}
            <div className="absolute -inset-4 bg-muted/20 blur-3xl opacity-50 rounded-[3rem]" />
            
            <div className="relative bg-card/60 border border-white/10 rounded-[3rem] p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">First Name</label>
                    <Input placeholder="John" className="h-12 rounded-full bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="h-12 rounded-full bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12 rounded-full bg-background/50 border-white/10 focus-visible:ring-foreground" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">How can we help?</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="min-h-[120px] rounded-[2rem] bg-background/50 border-white/10 focus-visible:ring-foreground resize-none p-6"
                  />
                </div>

                <Button className="w-full h-14 rounded-full font-bold text-base bg-foreground hover:bg-foreground/90 text-background transition-all group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}