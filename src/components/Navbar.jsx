import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Heart } from 'lucide-react';
import DiyaComponent from './DiyaComponent';
import { soundEffects } from '../utils/soundEffects';
import { triggerGrandFireworks } from '../utils/confetti';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Greetings', href: '#greetings' },
    { label: 'Family', href: '#family' },
    { label: 'Namrata’s Letter 💌', href: '#letter' },
    { label: 'Memories 📸', href: '#gallery' },
    { label: 'Magic ✨', href: '#magic' },
    { label: 'Surprise 🎁', href: '#surprise' },
  ];

  const handleFireworks = () => {
    soundEffects.playFireworkSound();
    triggerGrandFireworks();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-full glass-card border border-amber-400/30 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg backdrop-blur-xl">
        {/* Brand / Title with glowing mini diya */}
        <a
          href="#"
          className="flex items-center gap-2 group select-none text-left"
        >
          <DiyaComponent size="sm" isLit={true} className="scale-75 -my-2" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base text-gold-gradient tracking-tight">
              Diwali Surprise
            </span>
            <span className="text-[10px] text-rose-300 font-handwriting -mt-1 hidden xs:block">
              For Namrata & Family ❤️
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-amber-100/80 hover:text-amber-300 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Fireworks Trigger & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleFireworks}
            className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 transition-transform active:scale-95 cursor-pointer text-xs font-medium flex items-center gap-1.5"
            title="Burst Fireworks in Sky!"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Fireworks 🎆</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-amber-200 hover:text-white lg:hidden cursor-pointer"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-card border border-amber-400/30 p-4 shadow-2xl backdrop-blur-2xl"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-amber-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
