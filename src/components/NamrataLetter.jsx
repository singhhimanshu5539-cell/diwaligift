import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, Sparkles, Flower2, Check } from 'lucide-react';
import { siteContent } from '../data/content';
import { soundEffects } from '../utils/soundEffects';
import { triggerRosePetalsShower } from '../utils/confetti';

export default function NamrataLetter() {
  const { letter } = siteContent;
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  const handleToggleEnvelope = () => {
    if (!isOpen) {
      soundEffects.playGiftUnwrapSound();
      triggerRosePetalsShower();
      setHasOpenedOnce(true);
    }
    setIsOpen(!isOpen);
  };

  const handleShowerMorePetals = (e) => {
    e.stopPropagation();
    soundEffects.playDiyaChime(2);
    triggerRosePetalsShower();
  };

  return (
    <section id="letter" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Warm Romantic Amber/Rose Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center relative z-10 max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
          <span>{letter.tag}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-rose-gold tracking-tight mb-3"
        >
          {letter.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base text-amber-100/70 font-light"
        >
          {letter.subtitle}
        </motion.p>
      </div>

      {/* Interactive Envelope Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Envelope Box */}
        <div className="w-full max-w-2xl">
          <motion.div
            layout
            onClick={handleToggleEnvelope}
            className={`cursor-pointer transition-all duration-500 rounded-3xl p-6 sm:p-8 relative ${
              isOpen
                ? 'bg-gradient-to-b from-[#1d0e2e] to-[#12061f] border-2 border-amber-400/60 shadow-gold-glow'
                : 'glass-card border-2 border-rose-400/40 hover:border-amber-400/70 hover:shadow-gold-glow group'
            }`}
          >
            {/* Top Interactive Prompt Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20 mb-6">
              <div className="flex items-center gap-2 text-rose-300 text-xs sm:text-sm font-medium">
                <Mail className="w-4 h-4 text-rose-400" />
                <span>{isOpen ? 'Handwritten Letter Unsealed' : letter.envelopePrompt}</span>
              </div>
              <div className="flex items-center gap-2">
                {isOpen && (
                  <button
                    onClick={handleShowerMorePetals}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-xs border border-rose-400/30 transition-all cursor-pointer"
                    title="Shower more rose petals"
                  >
                    <Flower2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Shower Petals 🌹</span>
                  </button>
                )}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {isOpen ? 'Tap to Fold' : 'Tap to Open'}
                </span>
              </div>
            </div>

            {/* Unopened Sealed View */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center relative"
              >
                {/* Envelope Graphic */}
                <div className="relative w-44 h-32 sm:w-56 sm:h-38 rounded-2xl bg-gradient-to-br from-amber-700/80 via-amber-800 to-rose-950 border border-amber-400/40 shadow-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  {/* Flap lines */}
                  <div className="absolute inset-0 border-t-2 border-amber-400/30 clip-path-triangle pointer-events-none" />
                  
                  {/* Glowing Wax Seal */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-amber-900 border-2 border-amber-300 shadow-lg flex flex-col items-center justify-center text-amber-200 group-hover:scale-110 transition-transform">
                    <Heart className="w-7 h-7 text-amber-200 fill-amber-200 animate-pulse" />
                    <span className="text-[9px] font-serif tracking-tighter uppercase font-bold text-amber-100">For You</span>
                  </div>
                </div>

                <p className="mt-6 text-base sm:text-lg font-serif text-amber-100 group-hover:text-amber-300 transition-colors">
                  A personal message for <span className="text-rose-300 font-semibold">{siteContent.meta.recipientName}</span>
                </p>
                <p className="text-xs text-amber-300/60 mt-1">
                  Click to break the wax seal & read with love ❤️
                </p>
              </motion.div>
            )}

            {/* Opened Letter View - Elegant Parchment Style */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="rounded-2xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#fffbf0] via-[#fff8e7] to-[#fef2d0] text-purple-950 shadow-2xl relative overflow-hidden border border-amber-300/60 select-text"
                >
                  {/* Vintage Gold Stamp in Corner */}
                  <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center p-2.5 rounded-lg border-2 border-dashed border-amber-800/40 bg-amber-100/50 text-amber-900 text-xs font-serif text-center">
                    <Sparkles className="w-4 h-4 text-amber-700 mb-0.5" />
                    <span className="text-[10px] tracking-wider uppercase font-bold">{letter.date || 'Diwali 2026'}</span>
                    <span className="text-[9px] text-amber-800/70">From Himanshu</span>
                  </div>

                  {/* Watermark Diya in Parchment Background */}
                  <div className="absolute bottom-4 right-6 opacity-5 pointer-events-none select-none">
                    <Heart className="w-64 h-64 text-rose-900" />
                  </div>

                  {/* Salutation */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-rose-900 mb-6 tracking-wide">
                    {letter.salutation}
                  </h3>

                  {/* Letter Paragraphs */}
                  <div className="space-y-4 font-serif text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed font-normal">
                    {letter.paragraphs.map((para, i) => (
                      <p key={i} className="first-letter:text-2xl first-letter:font-bold first-letter:text-rose-800">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Sign-off & Signature */}
                  <div className="mt-8 pt-6 border-t border-amber-900/15 flex flex-col items-end">
                    <p className="text-sm sm:text-base font-serif italic text-neutral-700">
                      {letter.closing}
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-rose-900 mt-1 flex items-center gap-1.5">
                      <span>{letter.signature}</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

