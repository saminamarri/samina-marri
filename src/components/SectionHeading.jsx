import React from 'react';

export default function SectionHeading({ label, title, subtitle, centered = false }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'}`}>
      {label && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-slate-900 dark:text-white font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent w-24 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
