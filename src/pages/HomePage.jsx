import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Palette, Quote, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ArtworkGrid from '../components/ArtworkGrid';
import SkillCard from '../components/SkillCard';
import Timeline from '../components/Timeline';
import WorkshopCard from '../components/WorkshopCard';
import PageTransition from '../components/PageTransition';
import { artworks } from '../data/artworks';
import { creativePractice, creativeJourneyTimeline } from '../data/skills';
import { exhibitionsData } from '../data/exhibitions';
import { siteConfig } from '../data/config';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="space-y-24 md:space-y-36 pb-12">
        {/* 1. Full-Screen Artist Hero */}
        <Hero />

        {/* 2. Selected Works */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              label="CURATED GALLERY"
              title="SELECTED WORKS"
              subtitle="A preview of fine art paintings, sketches, graphic design, and visual studies."
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors pb-2 border-b border-purple-500/30 self-start md:self-end"
            >
              <span>VIEW ALL ARTWORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <ArtworkGrid artworks={artworks} showFilters={false} limit={6} />
        </section>

        {/* 3. About the Artist Teaser */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-r from-white via-slate-50 to-white dark:from-[#121324] dark:via-[#16192E] dark:to-[#121324] rounded-3xl p-8 md:p-16 border border-purple-500/20 dark:border-purple-400/30 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Image Accent */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-purple-500/30 dark:border-purple-400/30 shadow-2xl">
                  <img
                    src="/images/artist/samina-marri.png"
                    alt="Samina Marri Artist Profile"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/paintings/painting-01.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold">
                  ABOUT THE ARTIST
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
                  Bridging Fine Arts, Graphic Design &amp; Creative Tech
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {siteConfig.introBio}
                </p>
                <div className="p-6 bg-slate-100/80 dark:bg-[#09090D]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 dark:border-purple-400/20 flex items-start gap-4 shadow-sm">
                  <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-serif italic text-lg text-slate-800 dark:text-slate-200">
                      "{siteConfig.philosophyQuote}"
                    </p>
                    <span className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold block mt-2">
                      — ARTISTIC PHILOSOPHY
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-purple-600/20"
                  >
                    <span>READ FULL BIOGRAPHY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Artistic Practice */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="CREATIVE DISCIPLINES"
            title="MY ARTISTIC PRACTICE"
            subtitle="Exploring fine arts, traditional canvas painting, graphic design, and agentic AI technology."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {creativePractice.map((practice) => (
              <SkillCard
                key={practice.id}
                title={practice.title}
                description={practice.description}
                iconName={practice.icon}
              />
            ))}
          </div>
        </section>

        {/* 5. Creative Journey */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="EVOLUTION & PROGRESSION"
            title="MY CREATIVE JOURNEY"
            subtitle="Tracing the visual roadmap from formal academic fine arts training to modern creative technology."
          />
          <div className="max-w-4xl mx-auto">
            <Timeline items={creativeJourneyTimeline} />
          </div>
        </section>

        {/* 6. Artist Statement */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-white dark:bg-[#121324] rounded-3xl p-10 md:p-16 border border-purple-500/20 dark:border-purple-400/30 shadow-2xl relative">
            <Sparkles className="w-10 h-10 text-purple-600 dark:text-purple-400 mx-auto mb-6 opacity-80" />
            <span className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 font-bold mb-4 block">
              ARTIST STATEMENT
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-slate-900 dark:text-white leading-relaxed max-w-3xl mx-auto font-normal">
              "Art is a continuous dialogue between inner observation, studio craftsmanship, and digital innovation. My work seeks to evoke emotion, structure visual form, and explore new horizons."
            </h2>
            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-6 font-mono font-medium">
              — SAMINA MARRI • FINE ARTIST &amp; CREATIVE TECH
            </p>
          </div>
        </section>

        {/* 7. Workshops & Highlights */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="KNOWLEDGE & ENGAGEMENT"
            title="WORKSHOPS & HIGHLIGHTS"
            subtitle="Engagements in studio masterclasses, calligraphy, fine arts, and creative technology."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exhibitionsData.map((item) => (
              <WorkshopCard
                key={item.id}
                title={item.title}
                organization={item.organization}
                type={item.type}
                location={item.location}
                year={item.year}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
