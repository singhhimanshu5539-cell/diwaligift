import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flame, RotateCcw } from 'lucide-react';
import DiyaComponent from './DiyaComponent';
import { siteContent } from '../data/content';
import { soundEffects } from '../utils/soundEffects';
import { triggerGrandFireworks } from '../utils/confetti';

export default function FinalGreeting({ onReplay }) {
  const { final } = siteContent;

  const handleCelebrate = () => {
    soundEffects.playFireworkSound();
    triggerGrandFireworks();
  };

  return (
    <footer id="closing" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-t border-amber-500/20 bg-gradient-to-b from-transparent via-[#140624]/60 to-[#07020e]">
      {/* Background Starry Radiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 rounded-full bg-gradient-to-t from-amber-600/10 via-purple-900/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Festive Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>{final.tag}</span>
        </motion.div>

        {/* Center Triad of Glowing Diyas */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="hidden sm:block">
            <DiyaComponent size="sm" isLit={true} />
          </div>
          <DiyaComponent size="lg" isLit={true} />
          <div className="hidden sm:block">
            <DiyaComponent size="sm" isLit={true} />
          </div>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-gradient tracking-tight mb-6"
        >
          {final.title}
        </motion.h2>

        {/* The Main Heartfelt Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto mb-10 p-6 sm:p-8 rounded-2xl glass-card border border-amber-400/30"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-100 font-normal leading-relaxed drop-shadow">
            “{final.mainMessage}”
          </p>
        </motion.div>

        {/* Closing Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-base sm:text-lg font-serif italic text-amber-200/80 mb-1">
            {final.closing}
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-rose-300 flex items-center justify-center gap-2">
            <span>{final.signature}</span>
          </p>
        </motion.div>

        {/* Festive Interactive Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCelebrate}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-purple-950 text-sm sm:text-base gold-shimmer-btn shadow-gold-glow cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-purple-950" />
            <span>Celebrate with Fireworks 🎆</span>
          </motion.button>

          {onReplay && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReplay}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-amber-200 text-sm sm:text-base bg-white/5 hover:bg-white/10 border border-amber-400/30 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Replay Surprise Screen ✨</span>
            </motion.button>
          )}
        </div>

        {/* Footer Bottom Note */}
        <div className="pt-8 border-t border-amber-500/10 text-center text-xs text-amber-300/50">
          <p className="flex items-center justify-center gap-1.5 mb-1">
            <span>{final.footerText}</span>
          </p>
          <p className="text-[11px] text-amber-400/40">
            May this Diwali bring infinite light, laughter, and lifelong prosperity.
          </p>
        </div>
      </div>
    </footer>
  );
}

