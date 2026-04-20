"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/mdi-github";
import { LinkedinIcon } from "@/components/icons/mdi-linkedin";
import { FacebookIcon } from "@/components/icons/mdi-facebook";
import { InstagramIcon } from "@/components/icons/mdi-instagram";
import { EmailIcon as Mail } from "@/components/icons/mdi-email";
import { companyConfig } from "../../company.config"; // Using generic icon to replace specific social icons that might be missing
import Link from "next/link";
import Image from "next/image";

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
                <Image 
                  src={companyConfig.logo} 
                  alt={companyConfig.name} 
                  width={140} 
                  height={40} 
                  className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity" 
                />
              </Link>
              <p className="mt-6 text-sm text-foreground font-medium font-[family-name:var(--font-geist-mono)] leading-relaxed max-w-xs">
                Empowering businesses with intelligent automation, stunning websites, and relentless performance.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{companyConfig.address}</p>
                <p className="text-sm font-medium text-muted-foreground">{companyConfig.phone}</p>
                <p className="text-sm font-medium text-muted-foreground">{companyConfig.email}</p>
              </div>
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

            <div className="flex gap-4 pt-4 mt-auto">
              {companyConfig.socials.linkedin && (
                <a href={companyConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 text-white transition-all hover:scale-110 shadow-sm shrink-0">
                  <LinkedinIcon size={20} />
                </a>
              )}
              {companyConfig.socials.github && (
                <a href={companyConfig.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 text-white transition-all hover:scale-110 shadow-sm shrink-0">
                  <GithubIcon size={20} />
                </a>
              )}
              {companyConfig.socials.facebook && (
                <a href={companyConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 text-white transition-all hover:scale-110 shadow-sm shrink-0">
                  <FacebookIcon size={20} />
                </a>
              )}
              {companyConfig.socials.instagram && (
                <a href={companyConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 text-white transition-all hover:scale-110 shadow-sm shrink-0">
                  <InstagramIcon size={20} />
                </a>
              )}
              {companyConfig.socials.email && (
                <a href={companyConfig.socials.email} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 text-white transition-all hover:scale-110 shadow-sm shrink-0">
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground font-medium font-[family-name:var(--font-geist-mono)]">
            &copy; {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-foreground font-medium font-[family-name:var(--font-geist-mono)] flex items-center gap-1">
            Developed By Team {companyConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}