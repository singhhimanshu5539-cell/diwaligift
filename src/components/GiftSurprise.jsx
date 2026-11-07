import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Sparkles, RefreshCcw } from 'lucide-react';
import { siteContent } from '../data/content';
import { soundEffects } from '../utils/soundEffects';
import { triggerGiftSurpriseExplosion } from '../utils/confetti';

export default function GiftSurprise() {
  const { surprise } = siteContent;
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenGift = () => {
    if (!isOpened) {
      soundEffects.playGiftUnwrapSound();
      triggerGiftSurpriseExplosion();
      setIsOpened(true);
    }
  };

  const handleResetGift = (e) => {
    e.stopPropagation();
    setIsOpened(false);
  };

  return (
    <section id="surprise" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-600/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center relative z-10 max-w-xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>{surprise.tag}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-gradient tracking-tight mb-3"
        >
          {surprise.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base text-amber-100/70 font-light"
        >
          {surprise.subtitle}
        </motion.p>
      </div>

      {/* Interactive Gift Box Container */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            {!isOpened ? (
              /* Closed Animated Gift Box View */
              <motion.div
                key="gift-box-closed"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.15, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={handleOpenGift}
                className="cursor-pointer group flex flex-col items-center justify-center p-8 sm:p-12 glass-card rounded-3xl border-2 border-amber-400/40 hover:border-amber-400 hover:shadow-gold-glow transition-all"
              >
                {/* 3D-Look Diwali Gift Box */}
                <motion.div
                  whileHover={{ rotate: [0, -4, 4, -2, 2, 0] }}
                  transition={{ duration: 0.6 }}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center"
                >
                  {/* Subtle Box Shadow */}
                  <div className="absolute -bottom-4 w-36 h-8 bg-black/50 rounded-full blur-md" />

                  {/* Main Box Cube */}
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-700 to-rose-900 border-2 border-amber-300 shadow-2xl relative overflow-hidden flex items-center justify-center">
                    {/* Vertical Gold Ribbon */}
                    <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 shadow-md" />

                    {/* Horizontal Gold Ribbon */}
                    <div className="absolute left-0 right-0 h-8 bg-gradient-to-b from-yellow-300 via-amber-200 to-yellow-400 shadow-md" />

                    {/* Sparkle badge in center */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-amber-600 border border-amber-200 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-amber-200 animate-spin-slow" />
                    </div>
                  </div>

                  {/* Ribbon Bow on Top */}
                  <div className="absolute -top-4 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-amber-500 shadow-md transform -rotate-45" />
                    <div className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-amber-500 shadow-md transform rotate-45 -ml-3" />
                  </div>
                </motion.div>

                {/* Call To Action */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-purple-950 text-sm sm:text-base gold-shimmer-btn shadow-gold-glow"
                >
                  <Gift className="w-4 h-4 text-purple-950" />
                  <span>{surprise.boxPrompt}</span>
                </motion.div>
              </motion.div>
            ) : (
              /* Opened Surprise Message Scroll View */
              <motion.div
                key="gift-box-opened"
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#2a1145] to-[#140624] border-2 border-amber-400 shadow-gold-glow-lg text-center overflow-hidden"
              >
                {/* Floating Hearts in Corner */}
                <Heart className="absolute top-4 left-4 w-6 h-6 text-rose-500/30 animate-pulse" />
                <Sparkles className="absolute top-4 right-4 w-6 h-6 text-amber-400/40 animate-spin-slow" />

                {/* Celebration Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 p-0.5 shadow-lg mb-6 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#1b082e] flex items-center justify-center">
                    <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
                  </div>
                </div>

                {/* Revealed Title */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient mb-4">
                  {surprise.revealedTitle}
                </h3>

                {/* The Revealed Message */}
                <div className="p-6 sm:p-8 rounded-2xl bg-amber-400/10 border border-amber-300/30 mb-6">
                  <p className="text-lg sm:text-xl md:text-2xl font-serif text-amber-100 font-normal leading-relaxed">
                    “{surprise.message}”
                  </p>
                </div>

                {/* Closing signature */}
                <p className="text-sm font-handwriting text-rose-300 text-base sm:text-lg mb-6">
                  {surprise.closingNote}
                </p>

                {/* Re-wrap button */}
                <button
                  onClick={handleResetGift}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-amber-300/70 hover:text-amber-200 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-amber-400/20"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>Wrap box again</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
