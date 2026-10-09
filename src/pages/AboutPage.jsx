import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import PageTransition from '../components/PageTransition';
import { creativePractice } from '../data/skills';
import { siteConfig } from '../data/config';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 dark:border-purple-400/30 shadow-2xl bg-white dark:bg-[#121324]">
                <img
                  src="/images/artist/samina-marri.png"
                  alt="Samina Marri Portrait"
                  className="w-full h-auto object-cover object-top filter contrast-[1.03]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/paintings/painting-01.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              label="BIOGRAPHY & PHILOSOPHY"
              title="ABOUT THE ARTIST"
              subtitle="Fine Artist • Painter • Graphic Designer • Creative Technology"
            />

            <div className="space-y-6 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              <p className="text-slate-900 dark:text-white text-base md:text-lg font-serif italic border-l-2 border-purple-500 dark:border-purple-400 pl-4 font-medium">
                Samina Marri is a Fine Arts graduate and visual artist with a rich background across painting, sketching, printmaking, sculpting, embroidery, graphic design, and agentic AI technology.
              </p>
              
              <p>
                She is dedicated to creating thoughtful visual work that connects ideas, emotions, observation, and modern digital expression. Her practice fuses classical fine arts craftsmanship with contemporary graphic design and creative technology.
              </p>

              <p>
                Having earned her Bachelor of Fine Arts from Sardar Bahadur Khan Women's University (CGPA 3.55), Samina has developed a versatile studio methodology. Her portfolio encompasses atmospheric oil and acrylic canvas painting, charcoal figure sketching, relief block printmaking, tactile needlework, vector graphic design, and agentic AI tools.
              </p>
            </div>

            {/* Artistic Philosophy Box */}
            <div className="bg-white dark:bg-[#121324] p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 dark:bg-purple-600/20 rounded-full filter blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold block mb-2">
                    ARTISTIC PHILOSOPHY
                  </span>
                  <p className="font-serif italic text-xl md:text-2xl text-slate-900 dark:text-white">
                    "{siteConfig.philosophyQuote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Core Interests */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-slate-900 dark:text-white font-bold">
                CREATIVE CORE INTERESTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2 bg-white dark:bg-[#121324] p-3.5 rounded-xl border border-purple-500/20 dark:border-purple-400/30 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Studio Painting &amp; Fine Arts</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-[#121324] p-3.5 rounded-xl border border-purple-500/20 dark:border-purple-400/30 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Expressive Sketching &amp; Composition</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-[#121324] p-3.5 rounded-xl border border-purple-500/20 dark:border-purple-400/30 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Woodcut &amp; Relief Printmaking</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-[#121324] p-3.5 rounded-xl border border-purple-500/20 dark:border-purple-400/30 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Tactile Embroidery &amp; Needlework</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-[#121324] p-3.5 rounded-xl border border-purple-500/20 dark:border-purple-400/30 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Graphic Design &amp; Digital Layout</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-[#121324] p-3.5 rounded-xl border border-purple-500/20 dark:border-purple-400/30 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Agentic AI &amp; Creative Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Grid */}
        <div className="pt-12">
          <SectionHeading
            label="EXPLORATIONS"
            title="MY ARTISTIC PRACTICE"
            subtitle="A detailed look at the core mediums shaping Samina Marri's portfolio."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativePractice.map((item) => (
              <SkillCard
                key={item.id}
                title={item.title}
                description={item.description}
                iconName={item.icon}
              />
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
