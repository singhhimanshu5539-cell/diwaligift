import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, RefreshCw } from 'lucide-react';
import DiyaComponent from './DiyaComponent';
import { siteContent } from '../data/content';
import { soundEffects } from '../utils/soundEffects';
import { triggerGrandFireworks, triggerGoldenSparkles } from '../utils/confetti';

export default function DiwaliMagic() {
  const { magic } = siteContent;

  // Initialize diyas with index 0 and 2 lit, so users immediately see they can interact
  const [litDiyas, setLitDiyas] = useState([true, false, true, false, false]);
  const [selectedRangoli, setSelectedRangoli] = useState('mandala');

  const litCount = litDiyas.filter(Boolean).length;
  const isAllLit = litCount === litDiyas.length;

  const toggleDiya = (index, event) => {
    const nextLit = [...litDiyas];
    const willBeLit = !nextLit[index];
    nextLit[index] = willBeLit;
    setLitDiyas(nextLit);

    if (willBeLit) {
      soundEffects.playDiyaChime(index);
      // Sparkle at click position
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      triggerGoldenSparkles(x, y);

      // Check if all became lit
      if (nextLit.filter(Boolean).length === nextLit.length) {
        setTimeout(() => {
          soundEffects.playFireworkSound();
          triggerGrandFireworks();
        }, 300);
      }
    }
  };

  const lightAllDiyas = () => {
    setLitDiyas([true, true, true, true, true]);
    soundEffects.playGiftUnwrapSound();
    triggerGrandFireworks();
  };

  const resetDiyas = () => {
    setLitDiyas([false, false, false, false, false]);
  };

  const handleBurstFireworks = () => {
    soundEffects.playFireworkSound();
    triggerGrandFireworks();
  };

  return (
    <section id="magic" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-600/15 to-rose-600/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center relative z-10 max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{magic.tag}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-gradient tracking-tight mb-3"
        >
          {magic.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base text-amber-100/70 font-light"
        >
          {magic.subtitle}
        </motion.p>
      </div>

      {/* Main Interactive Stage */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative z-10">
        {/* Status Indicator & Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-500/20 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
            <span className="text-sm font-serif font-semibold text-amber-200">
              Diyas Lit: {litCount} / 5
            </span>
            {isAllLit && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ✨ All Shining Bright!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={lightAllDiyas}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 transition-colors cursor-pointer"
            >
              Light All 🪔
            </button>
            <button
              onClick={resetDiyas}
              className="p-1.5 rounded-full text-amber-300/60 hover:text-amber-300 hover:bg-white/5 transition-colors cursor-pointer"
              title="Reset Diyas"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Five Sacred Clickable Diyas Row */}
        <div className="py-6 flex flex-wrap items-end justify-around gap-6 sm:gap-4 relative">
          {litDiyas.map((isLit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="flex flex-col items-center"
            >
              <div
                onClick={(e) => toggleDiya(index, e)}
                className={`p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isLit
                    ? 'bg-amber-400/10 shadow-diya-glow border border-amber-400/40'
                    : 'bg-purple-950/40 border border-amber-500/15 hover:border-amber-400/30'
                }`}
              >
                <DiyaComponent
                  size="md"
                  isLit={isLit}
                  interactive={true}
                  label={magic.diyaLabels[index]}
                />
              </div>
              <span className="mt-2 text-[11px] text-amber-200/50">
                {isLit ? 'Tap to blow out' : 'Tap to light ✨'}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Rangoli Visualizer Canvas / SVG Motif */}
        <div className="mt-10 pt-8 border-t border-amber-500/20 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-wider text-amber-300/70 font-medium">
              Rangoli Pattern:
            </span>
            {['mandala', 'lotus', 'star'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedRangoli(type)}
                className={`px-3 py-1 rounded-lg text-xs capitalize transition-colors cursor-pointer ${
                  selectedRangoli === type
                    ? 'bg-amber-400 text-purple-950 font-bold'
                    : 'bg-white/5 text-amber-200/70 hover:bg-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Decorative Rotating Rangoli Centerpiece */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center my-3">
            <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-amber-400/20" />
            
            {selectedRangoli === 'mandala' && (
              <img
                src="/images/diwali-rangoli.svg"
                alt="Rangoli Mandala"
                className="w-32 h-32 sm:w-36 sm:h-36 object-contain animate-spin-slow"
                style={{ animationDuration: '40s' }}
              />
            )}
            {selectedRangoli === 'lotus' && (
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-rose-500/40 via-amber-400/40 to-purple-600/40 border-2 border-amber-400/50 flex items-center justify-center p-4">
                <Flame className="w-16 h-16 text-amber-300 animate-pulse" />
              </div>
            )}
            {selectedRangoli === 'star' && (
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-500/40 via-yellow-400/40 to-orange-600/40 border-2 border-amber-400/50 flex items-center justify-center p-4">
                <Sparkles className="w-16 h-16 text-amber-300 animate-spin-slow" />
              </div>
            )}
          </div>
        </div>

        {/* Fireworks Barrage Trigger Button */}
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleBurstFireworks}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-purple-950 text-sm sm:text-base gold-shimmer-btn shadow-gold-glow cursor-pointer transition-all"
          >
            <Sparkles className="w-5 h-5 text-purple-950" />
            <span>{magic.fireworksButtonText}</span>
          </motion.button>
          <p className="mt-2 text-xs text-amber-300/50">
            Click anytime to fill the night sky with grand celebratory fireworks!
          </p>
        </div>
      </div>
    </section>
  );
}
