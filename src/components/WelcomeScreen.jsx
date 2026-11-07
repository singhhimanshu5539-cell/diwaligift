import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import DiyaComponent from './DiyaComponent';
import { siteContent } from '../data/content';
import { soundEffects } from '../utils/soundEffects';
import { triggerGrandFireworks } from '../utils/confetti';

export default function WelcomeScreen({ isOpen, onOpen }) {
  const { welcome } = siteContent;

  const handleOpenClick = () => {
    soundEffects.playGiftUnwrapSound();
    triggerGrandFireworks();
    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="welcome-curtain"
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: 'blur(12px)',
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#070312] px-4 select-none"
        >
          {/* Deep Royal Purple & Midnight Glow Backdrop */}
          <div className="absolute inset-0 bg-radial-vignette pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-tr from-purple-900/30 via-amber-600/15 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
          </div>

          {/* Hanging Marigold Garlands & Fairy Lights Top Banner */}
          <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none opacity-80">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ duration: 1, delay: i * 0.08 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-[1.5px] bg-gradient-to-b from-amber-600/80 to-amber-400"
                  style={{ height: `${20 + (i % 3) * 18}px` }}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full shadow-lg ${
                    i % 2 === 0
                      ? 'bg-amber-400 shadow-amber-400/80'
                      : 'bg-rose-500 shadow-rose-500/80'
                  } animate-pulse`}
                  style={{ animationDuration: `${2 + (i % 3)}s` }}
                />
              </motion.div>
            ))}
          </div>

          {/* Center Welcome Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center justify-center p-6 md:p-12 rounded-3xl glass-card border border-amber-500/30 shadow-2xl shadow-purple-950/80"
          >
            {/* Festive Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-medium tracking-widest uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              <span>{welcome.badge}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            </motion.div>

            {/* Glowing Golden Diya */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
              className="my-3"
            >
              <DiyaComponent size="lg" isLit={true} />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-gradient tracking-tight mt-4 mb-2 drop-shadow"
            >
              {welcome.heading}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-xl sm:text-2xl md:text-3xl font-handwriting text-rose-300 flex items-center justify-center gap-2 mb-4"
            >
              <span>{welcome.subtitle}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm md:text-base text-amber-100/70 max-w-md mx-auto mb-8 font-light leading-relaxed"
            >
              {welcome.description}
            </motion.p>

            {/* Magical Interactive Open Button */}
            <motion.button
              onClick={handleOpenClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.15 }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-purple-950 text-base md:text-lg tracking-wide gold-shimmer-btn shadow-gold-glow cursor-pointer transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-purple-950 group-hover:rotate-45 transition-transform" />
              <span>{welcome.buttonText}</span>
              <Heart className="w-5 h-5 text-rose-700 fill-rose-700 animate-pulse" />
            </motion.button>

            {/* Hint */}
            <p className="mt-4 text-xs text-amber-300/40 tracking-wider">
              {welcome.hintText}
            </p>
          </motion.div>

          {/* Bottom Floating Diyas */}
          <div className="absolute bottom-6 left-6 hidden sm:block opacity-75">
            <DiyaComponent size="sm" isLit={true} />
          </div>
          <div className="absolute bottom-6 right-6 hidden sm:block opacity-75">
            <DiyaComponent size="sm" isLit={true} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

