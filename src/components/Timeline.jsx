import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Clock } from 'lucide-react';

export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-purple-500/20 dark:border-purple-400/30 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
      {items.map((item, idx) => (
        <div key={item.id || item.stage || idx} className="relative group">
          {/* Dot node */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#09090D] border-2 border-purple-600 dark:border-purple-400 group-hover:scale-125 group-hover:bg-purple-600 dark:group-hover:bg-purple-400 transition-all duration-300 shadow-md shadow-purple-500/30" />

          {/* Item Content Card */}
          <div className="bg-white dark:bg-[#121324] p-6 md:p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 hover:border-purple-500 transition-all duration-300 shadow-lg dark:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold bg-purple-500/10 dark:bg-purple-400/10 px-3 py-1 rounded-full border border-purple-500/20 dark:border-purple-400/20">
                {item.stage || item.status || 'EDUCATION'}
              </span>
              {item.period && (
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  {item.period}
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-1 font-bold">
              {item.degree || item.title}
            </h3>
            
            <p className="text-xs uppercase tracking-wider text-purple-700 dark:text-purple-300 font-semibold mb-3">
              {item.institution || item.subtitle}
            </p>

            {item.cgpa && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono rounded-md border border-purple-500/20 mb-3 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CGPA: {item.cgpa}</span>
              </div>
            )}

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {item.details || item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
