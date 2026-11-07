import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coins, TrendingUp, Heart, Flame } from 'lucide-react';
import DiyaComponent from './DiyaComponent';
import { siteContent } from '../data/content';

const iconMap = {
  Sparkles: Sparkles,
  Coins: Coins,
  TrendingUp: TrendingUp,
  Heart: Heart,
};

export default function GrandGreeting() {
  const { greeting } = siteContent;

  return (
    <section id="greetings" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Rangoli Pattern Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-amber-500/5 to-purple-600/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center relative z-10 max-w-3xl mx-auto mb-16">
        {/* Festive Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>{greeting.tag}</span>
        </motion.div>

        {/* Grand Diya Display */}
        <div className="flex justify-center mb-6">
          <DiyaComponent size="md" isLit={true} />
        </div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold-gradient tracking-tight mb-4 drop-shadow-md"
        >
          {greeting.title}
        </motion.h2>

        {/* Festive Subtitle Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-amber-100/80 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {greeting.quote}
        </motion.p>
      </div>

      {/* 4 Pillars of Festive Blessings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {greeting.blessings.map((blessing, index) => {
          const Icon = iconMap[blessing.icon] || Sparkles;
          return (
            <motion.div
              key={blessing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${blessing.glowColor} opacity-10 group-hover:opacity-25 blur-2xl transition-opacity duration-500`}
              />

              <div>
                {/* Icon Circle */}
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-900/40 border border-amber-400/30 flex items-center justify-center p-3 mb-5 shadow-inner group-hover:border-amber-400/60 transition-colors">
                  <Icon className="w-6 h-6 text-amber-300 group-hover:scale-110 transition-transform" />
                </div>

                {/* Blessing Title */}
                <h3 className="text-xl font-serif font-semibold text-amber-100 group-hover:text-amber-300 transition-colors mb-3">
                  {blessing.title}
                </h3>

                {/* Blessing Description */}
                <p className="text-sm text-amber-100/70 leading-relaxed">
                  {blessing.description}
                </p>
              </div>

              {/* Decorative Corner Flake */}
              <div className="mt-6 pt-4 border-t border-amber-500/10 flex items-center justify-between text-xs text-amber-400/60 font-medium">
                <span>Shubh Deepavali</span>
                <span>✨</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
