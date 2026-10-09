import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Maximize2, Quote } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Lightbox from '../components/Lightbox';
import { artworks } from '../data/artworks';

export default function ArtworkDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentIndex = artworks.findIndex((item) => item.id === id);

  if (currentIndex === -1) {
    return (
      <div className="pt-36 pb-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-slate-900 dark:text-white mb-4">Artwork Not Found</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">The requested artwork piece could not be located in the gallery.</p>
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Gallery
        </Link>
      </div>
    );
  }

  const artwork = artworks[currentIndex];
  const prevArtwork = artworks[(currentIndex - 1 + artworks.length) % artworks.length];
  const nextArtwork = artworks[(currentIndex + 1) % artworks.length];

  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Navigation Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/20 dark:border-purple-400/20 pb-6">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO GALLERY</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(`/gallery/${prevArtwork.id}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#121324] text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-purple-600 border border-purple-500/20 dark:border-purple-400/30 transition-all font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS</span>
            </button>
            <button
              onClick={() => navigate(`/gallery/${nextArtwork.id}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#121324] text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-purple-600 border border-purple-500/20 dark:border-purple-400/30 transition-all font-semibold"
            >
              <span>NEXT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Artwork Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Metadata & Statement */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div>
              <span className="px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full border border-purple-500/20 inline-block mb-3">
                {artwork.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white mb-2 font-bold">
                {artwork.title}
              </h1>
              <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono font-semibold">
                CREATED IN {artwork.year}
              </p>
            </div>

            {/* Metadata Table */}
            <div className="bg-white dark:bg-[#121324] p-6 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 space-y-4 text-xs shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/10 dark:border-purple-400/20">
                <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">MEDIUM</span>
                <span className="text-slate-900 dark:text-white font-semibold">{artwork.medium}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/10 dark:border-purple-400/20">
                <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">DIMENSIONS</span>
                <span className="text-slate-900 dark:text-white font-mono">{artwork.dimensions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">ARTIST</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">SAMINA MARRI</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.25em] text-slate-900 dark:text-white font-bold">
                ARTWORK OVERVIEW
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {artwork.description}
              </p>
            </div>

            {/* Artist Statement Box */}
            {artwork.statement && (
              <div className="bg-white dark:bg-[#121324] p-6 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 relative overflow-hidden shadow-xl">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold block mb-1">
                      ARTIST STATEMENT ON THIS PIECE
                    </span>
                    <p className="font-serif italic text-sm text-slate-800 dark:text-slate-200">
                      "{artwork.statement}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Image with Lightbox Trigger */}
          <div className="lg:col-span-7 relative group order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 dark:border-purple-400/30 shadow-2xl bg-slate-100 dark:bg-[#0D0D0F]">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/paintings/painting-01.svg';
                }}
              />

              {/* Lightbox Expand Button Overlay */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 dark:bg-[#09090D]/80 backdrop-blur-md text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 border border-purple-500/20 transition-all opacity-90 hover:opacity-100 shadow-xl"
                aria-label="Expand Artwork Lightbox"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxOpen}
          image={artwork.image}
          title={`${artwork.title} (${artwork.medium}, ${artwork.year})`}
          onClose={() => setLightboxOpen(false)}
        />
      </div>
    </PageTransition>
  );
}
