import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import WatermarkedImage from './WatermarkedImage';

export default function Lightbox({ isOpen, image, title, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0B0B0C]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fade-in"
    >
      {/* Controls */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 p-3 rounded-full bg-[#141417] text-[#F7F5F0] hover:text-purple-400 border border-white/10 hover:border-purple-400 transition-all z-50 shadow-2xl"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
      >
        <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <WatermarkedImage
            src={image}
            alt={title}
            imgClassName="max-h-[80vh] w-auto object-contain rounded-lg"
          />
        </div>
        {title && (
          <p className="mt-4 font-serif text-lg text-[#F7F5F0] tracking-wide text-center">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
