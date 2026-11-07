import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';
import { soundEffects } from '../utils/soundEffects';

export default function PhotoGallery() {
  const { gallery } = siteContent;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => {
    soundEffects.playDiyaChime(1);
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction) => {
    if (!selectedPhoto) return;
    const currentIndex = gallery.photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % gallery.photos.length
        : (currentIndex - 1 + gallery.photos.length) % gallery.photos.length;
    soundEffects.playDiyaChime(nextIndex);
    setSelectedPhoto(gallery.photos[nextIndex]);
  };

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center relative z-10 max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <Camera className="w-3.5 h-3.5 text-amber-400" />
          <span>{gallery.tag}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-gradient tracking-tight mb-3"
        >
          {gallery.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base text-amber-100/70 font-light"
        >
          {gallery.subtitle}
        </motion.p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 relative z-10">
        {gallery.photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
            onClick={() => openLightbox(photo)}
            className={`cursor-pointer transition-all duration-300 group ${photo.rotation || ''}`}
          >
            {/* Polaroid Frame */}
            <div className="bg-[#fffdfa] text-neutral-900 rounded-xl p-4 pb-6 shadow-xl border border-amber-200/60 hover:shadow-gold-glow flex flex-col justify-between h-full relative">
              {/* Decorative Washi Tape at Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/70 backdrop-blur-sm border border-amber-300/60 shadow-sm rotate-1 z-10" />

              {/* Photo Image with Hover Zoom Overlay */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-purple-950/20 mb-4 border border-neutral-200">
                <img
                  src={photo.url}
                  alt={photo.title || 'Diwali Memory'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <ZoomIn className="w-5 h-5 text-amber-300" />
                  </div>
                </div>

                {/* Date tag in corner */}
                {photo.date && (
                  <span className="absolute bottom-2 right-2 text-[10px] font-medium tracking-wider px-2 py-0.5 rounded bg-black/60 text-amber-200 backdrop-blur-sm">
                    {photo.date}
                  </span>
                )}
              </div>

              {/* Polaroid Handwritten Caption */}
              <div className="text-center px-1">
                <h4 className="font-serif font-bold text-neutral-800 text-base mb-1">
                  {photo.title}
                </h4>
                <p className="font-handwriting text-lg sm:text-xl text-neutral-700 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Helpful Beginner-Friendly Customization Note */}
      <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-center text-xs sm:text-sm text-amber-200/80 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          <strong>Personal Photo Guide:</strong> To display real photos of Namrata & family, place them into <code className="text-amber-300 bg-purple-950/60 px-1.5 py-0.5 rounded border border-amber-400/30">public/images/</code> and update the links in <code className="text-amber-300 bg-purple-950/60 px-1.5 py-0.5 rounded border border-amber-400/30">src/data/content.js</code>!
        </span>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('prev');
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
              title="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('next');
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
              title="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full bg-[#fffdfa] rounded-2xl p-4 sm:p-6 text-neutral-900 shadow-2xl relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-black/10 mb-4">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain bg-neutral-950"
                />
              </div>

              <div className="text-center pt-2">
                <h3 className="text-xl font-serif font-bold text-neutral-900">
                  {selectedPhoto.title}
                </h3>
                <p className="font-handwriting text-2xl text-rose-800 mt-1">
                  {selectedPhoto.caption}
                </p>
                {selectedPhoto.date && (
                  <p className="text-xs text-neutral-500 mt-1">
                    {selectedPhoto.date}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

