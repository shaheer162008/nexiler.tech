"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react"; // Using generic icon to replace specific social icons that might be missing
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black font-[family-name:var(--font-geist-sans)] z-10 border-t border-white/5 overflow-hidden">
      
      {/* Subtle top glow matching Next.js dark themes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-8 lg:col-span-1">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block group">
                <span className="text-2xl font-extrabold tracking-tighter text-white font-[family-name:var(--font-geist-sans)] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-emerald-400 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                    <span className="w-full h-full bg-black rounded-md flex items-center justify-center text-sm">N</span>
                  </div>
                  Nexiler
                </span>
              </Link>
              <p className="mt-6 text-sm text-foreground font-medium font-[family-name:var(--font-geist-mono)] leading-relaxed max-w-xs">
                Empowering businesses with intelligent automation, stunning websites, and relentless performance.
              </p>
            </motion.div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-[family-name:var(--font-geist-mono)]">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Our Work', 'Contact', 'Blog'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-[family-name:var(--font-geist-mono)]">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'AI Automation', 'Mobile Apps', 'Branding', 'SEO & Marketing'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-[family-name:var(--font-geist-mono)]">Legal</h3>
            <ul className="space-y-4 mb-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1">
                  <Link2 className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground font-medium font-[family-name:var(--font-geist-mono)]">
            &copy; {new Date().getFullYear()} Nexiler. All rights reserved.
          </p>
          <p className="text-sm text-foreground font-medium font-[family-name:var(--font-geist-mono)] flex items-center gap-1">
            Developed By Team Nexiler
          </p>
        </div>
      </div>
    </footer>
  );
}