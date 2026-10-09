import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Palette, 
  Brush, 
  Layout, 
  Sparkles, 
  Code2, 
  Mail,
  Award,
  GraduationCap
} from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Hero() {
  const floatingPills = [
    { label: "Coding", icon: Code2, position: "-top-2 -left-4 sm:-left-8" },
    { label: "Agentic AI", icon: Sparkles, position: "top-1/3 -right-4 sm:-right-8" },
    { label: "Graphic Design", icon: Layout, position: "bottom-1/4 -left-4 sm:-left-8" },
    { label: "Fine Art", icon: Brush, position: "-bottom-2 right-1/4" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden canvas-texture">
      {/* Ambient Glow Orbits */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 dark:bg-purple-600/25 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/15 dark:bg-blue-600/25 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center z-10">
        
        {/* LEFT COLUMN: GREETING, HEADING & INTRO (Matching Reference Layout) */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 space-y-6 text-left">
          
          {/* Top Category Label Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-gradient-to-r from-purple-500 to-blue-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-purple-600 dark:text-purple-400">
              FINE ARTIST • WEB DEVELOPER • CREATIVE TECH
            </span>
          </motion.div>

          {/* Large Main Heading with Hand Waving Emoji 👋 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans tracking-tight font-extrabold leading-[1.08] text-slate-900 dark:text-white"
          >
            Hi<span className="inline-block animate-bounce mx-1 text-4xl sm:text-6xl">👋</span>, It's <br />
            <span className="purple-blue-gradient-text font-serif">Samina Marri</span>
          </motion.h1>

          {/* Short Professional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl"
          >
            Visual artist, web &amp; application developer, graphic designer, and creative technology practitioner dedicated to merging fine arts with modern digital innovation.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-purple-600/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-800 dark:text-slate-100 bg-white dark:bg-[#16192E] hover:bg-slate-100 dark:hover:bg-[#1E2238] border border-purple-500/30 dark:border-purple-400/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md"
            >
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Contact Us</span>
            </Link>
          </motion.div>

          {/* Stats Counter Row (Similar to reference layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 border-t border-purple-500/15 dark:border-purple-400/20 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white block font-serif">
                3.55 <span className="text-purple-600 dark:text-purple-400 text-sm">CGPA</span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                BFA Graduate (SBKWU)
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white block font-serif">
                100+
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Artworks &amp; Projects
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white block font-serif">
                National
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Award Recognition
              </span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: SAMINA MARRI'S PORTRAIT WITH FLOATING SKILL PILLS (Coding, Agentic AI, Graphic Design, Fine Art) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none my-4 sm:my-6">
            
            {/* Soft Ambient Glow Accent behind portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-purple-500/30 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

            {/* Seamless Floating Portrait Image (No Box Frame) */}
            <div className="relative rounded-3xl overflow-hidden drop-shadow-2xl">
              <img
                src="/images/artist/samina-marri.png"
                alt="Samina Marri - Fine Artist & Developer"
                className="w-full h-auto max-h-[580px] object-cover object-top rounded-3xl filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 hover:scale-[1.02]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/paintings/painting-01.svg';
                }}
              />
            </div>

            {/* FLOATING PILLS (Coding, Agentic AI, Graphic Design, Fine Art) */}
            {floatingPills.map(({ label, icon: Icon, position }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.12 }}
                className={`absolute ${position} z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 dark:bg-[#16192E]/95 backdrop-blur-md border border-purple-500/30 dark:border-purple-400/30 shadow-xl text-xs font-bold text-slate-800 dark:text-slate-100 animate-float`}
                style={{ animationDelay: `${index * 1.4}s` }}
              >
                <div className="w-5 h-5 rounded-full bg-purple-500/15 dark:bg-purple-400/20 flex items-center justify-center text-purple-600 dark:text-purple-300">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="whitespace-nowrap">{label}</span>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
