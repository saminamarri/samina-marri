import React, { useState } from 'react';
import { Award, Trophy, Star, CheckCircle2, Maximize2, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import Lightbox from '../components/Lightbox';
import { certificatesData } from '../data/certificates';

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const achievements = [
    {
      id: "achieve-01",
      title: "National Recognition & Award Ceremony",
      organization: "Government & National Youth Council Recognition",
      category: "National Honor",
      year: "2024",
      description: "Awarded national certificate of recognition from government dignitaries for outstanding artistic excellence, youth leadership, and creative contribution to the arts.",
      image: "/images/certificates/award-ceremony-1.png",
      featured: true
    },
    {
      id: "achieve-02",
      title: "PNCA & BUITEMS Fine Arts Award",
      organization: "Pakistan National Council of the Arts (PNCA)",
      category: "Fine Arts Competition",
      year: "2023",
      description: "Honored at BUITEMS Fine Arts presentation for exceptional studio artwork, composition, and fine arts excellence.",
      image: "/images/certificates/award-ceremony-2.jpg",
      featured: true
    },
    {
      id: "achieve-03",
      title: "Graphic Designing & Digital Art Certification",
      organization: "IT Saylani Welfare International",
      category: "Digital Design",
      year: "2024",
      description: "Completed professional mastery in Adobe Illustrator vector art, branding typography, and digital visual communication.",
      image: null,
      featured: false
    },
    {
      id: "achieve-04",
      title: "Agentic AI & Creative Technology Mastery",
      organization: "IT Saylani Welfare International",
      category: "Creative Technology",
      year: "2024",
      description: "Recognized for mastering autonomous AI agents, prompt craftsmanship, and cutting-edge creative automation workflows.",
      image: null,
      featured: false
    },
    {
      id: "achieve-05",
      title: "Scout Youth Council Leadership Award",
      organization: "Pakistan National Council",
      category: "Leadership & Community",
      year: "2022",
      description: "Awarded youth council leadership certificate for active participation and civic engagement.",
      image: null,
      featured: false
    },
    {
      id: "achieve-06",
      title: "NED-HARD Balochistan Recognition",
      organization: "NED-HARD Balochistan",
      category: "Professional Distinction",
      year: "2023",
      description: "Distinguished recognition for creative artistic practice and community visual art initiatives.",
      image: null,
      featured: false
    }
  ];

  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Header Section */}
        <SectionHeading
          label="HONORS & DISTINCTIONS"
          title="ACHIEVEMENTS & RECOGNITION"
          subtitle="A showcase of national awards, fine art competition honors, leadership recognitions, and professional credentials."
          centered={true}
        />

        {/* Featured National Honors Showcase with Award Photos */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xs uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold">
              FEATURED NATIONAL HONORS
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.filter(a => a.featured).map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#121324] rounded-3xl p-8 border border-purple-500/30 dark:border-purple-400/30 shadow-2xl space-y-6 relative overflow-hidden group"
              >
                {item.image && (
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-[#09090D] border border-purple-500/20 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50" />
                    
                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="absolute bottom-4 right-4 p-3 rounded-full bg-white/90 dark:bg-[#09090D]/80 backdrop-blur-md text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 border border-purple-500/20 shadow-xl transition-all"
                      aria-label="Enlarge Award Ceremony Photo"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-semibold text-purple-700 dark:text-purple-300">
                    {item.organization}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-purple-500/10 dark:border-purple-400/20 flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Official Verified National Honor</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certificates & Recognitions List */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xs uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold">
              PROFESSIONAL CERTIFICATIONS &amp; CREDENTIALS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#121324] p-6 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 shadow-lg dark:shadow-xl flex flex-col justify-between group hover:border-purple-500 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                      {item.category}
                    </span>
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>

                  <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs uppercase tracking-wider text-purple-700 dark:text-purple-300 font-semibold mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-500/10 dark:border-purple-400/20 flex items-center gap-2 text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal for Award Photos */}
        {selectedImage && (
          <Lightbox
            isOpen={true}
            image={selectedImage}
            title="National Award & Recognition Ceremony — Samina Marri"
            onClose={() => setSelectedImage(null)}
          />
        )}

      </div>
    </PageTransition>
  );
}
