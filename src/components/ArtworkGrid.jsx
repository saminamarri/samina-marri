import React, { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import { artworkCategories } from '../data/artworks';

export default function ArtworkGrid({ artworks, showFilters = true, limit = null }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredArtworks = artworks.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category.toUpperCase() === activeCategory.toUpperCase();
  });

  const displayedArtworks = limit ? filteredArtworks.slice(0, limit) : filteredArtworks;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {artworkCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-600/25'
                    : 'bg-white dark:bg-[#121324] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-purple-500/20 dark:border-purple-400/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid Container */}
      {displayedArtworks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-[#121324] rounded-2xl border border-purple-500/20 dark:border-purple-400/30 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
            No artworks found in this category.
          </p>
          <button
            onClick={() => setActiveCategory('ALL')}
            className="mt-4 px-6 py-2 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 underline font-bold"
          >
            View All Artworks
          </button>
        </div>
      )}
    </div>
  );
}
