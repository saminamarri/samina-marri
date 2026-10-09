import React, { useState } from 'react';
import { Award, CheckCircle2, Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

export default function CertificateCard({ title, organization, category, description, image }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-[#121324] p-6 md:p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 hover:border-purple-500 transition-all duration-300 shadow-lg dark:shadow-xl flex flex-col justify-between group">
      <div>
        {image && (
          <div className="relative mb-6 rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-[#09090D] border border-purple-500/10">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 dark:bg-[#09090D]/80 text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors shadow-md"
              aria-label="View Ceremony Photo"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 font-bold bg-purple-500/10 dark:bg-purple-400/10 px-3 py-1 rounded-full border border-purple-500/20 dark:border-purple-400/20">
            {category}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#09090D] border border-purple-500/20 dark:border-purple-400/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
            <Award className="w-4 h-4" />
          </div>
        </div>

        <h3 className="font-serif text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2 font-bold">
          {title}
        </h3>

        <p className="text-xs uppercase tracking-wider text-purple-700 dark:text-purple-300 font-semibold mb-3">
          {organization}
        </p>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-4">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-purple-500/10 dark:border-purple-400/20 flex items-center justify-between text-[11px] text-purple-600 dark:text-purple-400 font-medium">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Verified Credential / Recognition
        </span>
      </div>

      {image && (
        <Lightbox
          isOpen={lightboxOpen}
          image={image}
          title={`${title} — ${organization}`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
