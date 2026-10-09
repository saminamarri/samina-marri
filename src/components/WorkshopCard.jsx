import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export default function WorkshopCard({ title, organization, type, location, year, description }) {
  return (
    <div className="bg-white dark:bg-[#121324] p-6 md:p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 hover:border-purple-500 transition-all duration-300 shadow-lg dark:shadow-xl group">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 font-bold bg-purple-500/10 dark:bg-purple-400/10 px-3 py-1 rounded-full border border-purple-500/20 dark:border-purple-400/20 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
          {type}
        </span>
        {year && (
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            {year}
          </span>
        )}
      </div>

      <h3 className="font-serif text-2xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2 font-bold">
        {title}
      </h3>

      <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300 mb-4 font-light">
        <span className="font-semibold text-slate-800 dark:text-slate-200">{organization}</span>
        {location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-purple-600 dark:text-purple-400" />
            {location}
          </span>
        )}
      </div>

      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}
