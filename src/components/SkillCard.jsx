import React from 'react';
import { Palette, PenTool, Layers, Box, Scissors, Layout, Sparkles, Cpu, Award } from 'lucide-react';

const iconMap = {
  Palette,
  PenTool,
  Layers,
  Box,
  Needle: Scissors,
  Scissors,
  Layout,
  Sparkles,
  Cpu,
  Award
};

export default function SkillCard({ title, description, iconName }) {
  const IconComponent = iconMap[iconName] || Palette;

  return (
    <div className="group bg-white dark:bg-[#121324] p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 hover:border-purple-500 transition-all duration-500 hover:-translate-y-1 shadow-lg dark:shadow-xl relative overflow-hidden">
      {/* Subtle Background Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 dark:bg-purple-600/15 rounded-full filter blur-2xl group-hover:bg-purple-600/20 transition-all" />
      
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#09090D] border border-purple-500/20 dark:border-purple-400/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-all duration-300 mb-6 shadow-sm">
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Card Content */}
      <h3 className="font-serif text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-3 font-bold tracking-wide">
        {title}
      </h3>
      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
        {description}
      </p>

      {/* Accent Bottom Bar */}
      <div className="mt-6 h-[2px] w-12 bg-slate-200 dark:bg-slate-700 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500" />
    </div>
  );
}
