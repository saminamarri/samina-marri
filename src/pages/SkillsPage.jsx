import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import PageTransition from '../components/PageTransition';
import { skillsCategories, creativeJourneyTimeline } from '../data/skills';
import { Palette, Layout, Code2, Cpu, CheckCircle2 } from 'lucide-react';

const categoryIcons = {
  "FINE ARTS": Palette,
  "DIGITAL DESIGN": Layout,
  "WEB & APPLICATION DEVELOPMENT": Code2,
  "CREATIVE TECHNOLOGY": Cpu
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Creative Skills Breakdown */}
        <div>
          <SectionHeading
            label="TECHNICAL & STUDIO CAPABILITIES"
            title="CREATIVE SKILLS"
            subtitle="Spanning traditional studio fine arts, digital graphic design, web & application development, and agentic AI technology."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillsCategories.map((group) => {
              const IconComp = categoryIcons[group.category] || Palette;
              return (
                <div
                  key={group.category}
                  className="bg-white dark:bg-[#121324] p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 shadow-lg dark:shadow-xl flex flex-col justify-between hover:border-purple-500 transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#09090D] border border-purple-500/20 dark:border-purple-400/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                          {group.skills.length} SPECIALIZATIONS
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 font-light">
                      {group.subtitle}
                    </p>

                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="bg-slate-50 dark:bg-[#09090D] p-4 rounded-xl border border-purple-500/10 dark:border-purple-400/20 hover:border-purple-500/30 transition-all"
                        >
                          <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white mb-1">
                            <span>{skill.name}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Creative Journey Timeline */}
        <div className="max-w-4xl mx-auto pt-10">
          <SectionHeading
            label="EVOLUTION ROADMAP"
            title="MY CREATIVE JOURNEY"
            subtitle="The progression of visual artistic practice and technological capabilities over time."
            centered={true}
          />
          <Timeline items={creativeJourneyTimeline} />
        </div>

      </div>
    </PageTransition>
  );
}
