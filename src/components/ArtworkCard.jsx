import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import WatermarkedImage from './WatermarkedImage';

export default function ArtworkCard({ artwork }) {
  const { id, title, category, medium, year, image } = artwork;

  return (
    <Link
      to={`/gallery/${id}`}
      className="group relative block bg-white dark:bg-[#121324] rounded-2xl overflow-hidden border border-purple-500/20 dark:border-purple-400/30 hover:border-purple-500 transition-all duration-500 shadow-lg dark:shadow-xl"
    >
      {/* Artwork Image Container with Watermark */}
      <div className="aspect-[4/5] overflow-hidden relative bg-slate-100 dark:bg-[#0D0D0F]">
        <WatermarkedImage
          src={image}
          alt={title}
          className="w-full h-full"
          imgClassName="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 z-10 pointer-events-none" />
        
        {/* Category & Availability Tags Top Left */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 items-start">
          <span className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-white/90 dark:bg-[#09090D]/90 text-purple-600 dark:text-purple-300 backdrop-blur-md rounded-full border border-purple-500/20 dark:border-purple-400/20 shadow-sm">
            {category}
          </span>
          <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold bg-emerald-500/90 text-white backdrop-blur-md rounded-full shadow-sm">
            Available
          </span>
        </div>

        {/* Action Icon Top Right */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content Info Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-purple-300 transition-colors mb-1 font-bold">
            {title}
          </h3>
          <div className="flex items-center justify-between text-xs text-slate-300 font-light pt-1 border-t border-white/20">
            <span>{medium}</span>
            <span className="font-mono font-semibold text-purple-300">{year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
