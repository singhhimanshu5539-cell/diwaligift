import React from 'react';
import { motion } from 'framer-motion';
import { Home, Heart, Sparkles, Sun } from 'lucide-react';
import DiyaComponent from './DiyaComponent';
import { siteContent } from '../data/content';

export default function FamilyWishes() {
  const { family } = siteContent;

  return (
    <section id="family" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 rounded-full bg-gradient-to-r from-purple-900/20 via-amber-600/10 to-rose-900/20 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 glass-card rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-amber-500/30 shadow-2xl overflow-hidden"
      >
        {/* Festive Marigold Garland Header Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-400 to-rose-600" />

        {/* Small Flanking Traditional Rangoli Motifs */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <DiyaComponent size="sm" isLit={true} />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-semibold tracking-widest uppercase">
            <Home className="w-3.5 h-3.5 text-rose-400" />
            <span>{family.tag}</span>
          </div>
          <DiyaComponent size="sm" isLit={true} />
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-gradient mb-3">
            {family.title}
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-light">
            {family.subtitle}
          </p>
        </div>

        {/* The Heartfelt Main Family Blessing Card */}
        <div className="relative my-8 p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-purple-950/60 to-purple-900/40 border border-amber-400/40 text-center shadow-inner">
          <span className="text-4xl sm:text-5xl font-serif text-amber-400/40 block leading-none mb-2">
            “
          </span>
          <blockquote className="text-lg sm:text-2xl md:text-3xl font-serif text-amber-50 font-normal leading-relaxed max-w-4xl mx-auto drop-shadow">
            {family.message}
          </blockquote>
          <span className="text-4xl sm:text-5xl font-serif text-amber-400/40 block leading-none mt-4">
            ”
          </span>
        </div>

        {/* 3 Family Blessing Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {family.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              className="p-5 rounded-xl bg-purple-900/30 border border-amber-500/15 text-center hover:border-amber-400/40 transition-colors"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-3">
                {idx === 0 ? <Sun className="w-5 h-5" /> : idx === 1 ? <Heart className="w-5 h-5 text-rose-400" /> : <Sparkles className="w-5 h-5" />}
              </div>
              <h3 className="font-serif font-semibold text-lg text-amber-200 mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/60 leading-relaxed">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
