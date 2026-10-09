import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ArtworkGrid from '../components/ArtworkGrid';
import PageTransition from '../components/PageTransition';
import { artworks } from '../data/artworks';

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <SectionHeading
          label="GALLERY ARCHIVE"
          title="THE GALLERY"
          subtitle="A curated collection of paintings, sketches, prints, sculptures, and visual works by Samina Marri."
          centered={true}
        />

        {/* Artwork Grid with Category Filter Pills */}
        <ArtworkGrid artworks={artworks} showFilters={true} />
      </div>
    </PageTransition>
  );
}
