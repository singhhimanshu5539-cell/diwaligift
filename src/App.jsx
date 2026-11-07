import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import GrandGreeting from './components/GrandGreeting';
import FamilyWishes from './components/FamilyWishes';
import NamrataLetter from './components/NamrataLetter';
import PhotoGallery from './components/PhotoGallery';
import DiwaliMagic from './components/DiwaliMagic';
import GiftSurprise from './components/GiftSurprise';
import FinalGreeting from './components/FinalGreeting';
import MusicPlayer from './components/MusicPlayer';
import BackgroundCanvas from './components/BackgroundCanvas';

export default function App() {
  const [hasOpenedSurprise, setHasOpenedSurprise] = useState(false);
  const [autoStartAudio, setAutoStartAudio] = useState(false);

  const handleOpenSurprise = () => {
    setHasOpenedSurprise(true);
    setAutoStartAudio(true);
  };

  const handleReplaySurprise = () => {
    setHasOpenedSurprise(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#070312] text-amber-50 selection:bg-amber-500 selection:text-purple-950">
      {/* 1. Magical Welcome Screen Curtain (Full screen overlay) */}
      <WelcomeScreen
        isOpen={hasOpenedSurprise}
        onOpen={handleOpenSurprise}
      />

      {/* Interactive Background Particle & Embers Canvas */}
      <BackgroundCanvas />

      {/* Ambient Radial Color Gradients Across the Page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-900/25 via-amber-600/10 to-transparent blur-3xl" />
        <div className="absolute top-[35%] left-0 w-[450px] h-[650px] bg-rose-900/15 blur-3xl" />
        <div className="absolute top-[65%] right-0 w-[500px] h-[700px] bg-amber-600/15 blur-3xl" />
      </div>

      {/* Main Website Content (Visible after opening) */}
      <div className="relative z-10">
        {/* Floating Luxury Navbar */}
        <Navbar />

        <main className="pt-24 space-y-12 sm:space-y-20">
          {/* Section 2: Grand Diwali Greeting */}
          <GrandGreeting />

          {/* Section 3: Special Family Wishes */}
          <FamilyWishes />

          {/* Section 4: A Special Message For Namrata (Romantic Envelope Letter) */}
          <NamrataLetter />

          {/* Section 5: Beautiful Photo Gallery (Polaroid style) */}
          <PhotoGallery />

          {/* Section 6: Diwali Magic Experience (Clickable Diyas, Rangoli, Fireworks) */}
          <DiwaliMagic />

          {/* Section 7: A Little Surprise For You (Animated 3D Gift Box) */}
          <GiftSurprise />

          {/* Section 9: Final Greeting Screen */}
          <FinalGreeting onReplay={handleReplaySurprise} />
        </main>

        {/* Section 8: Music Experience Player (Floating dock) */}
        <MusicPlayer autoStartSignal={autoStartAudio} />
      </div>
    </div>
  );
}
