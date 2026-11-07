import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Music, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';
import { soundEffects } from '../utils/soundEffects';

export default function MusicPlayer({ autoStartSignal }) {
  const { music } = siteContent;
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [useSynthFallback, setUseSynthFallback] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-start gently when user clicks "Open Your Surprise" on WelcomeScreen
  useEffect(() => {
    if (autoStartSignal && !hasInteracted) {
      setHasInteracted(true);
      startPlayback();
    }
  }, [autoStartSignal]);

  const startPlayback = () => {
    const audio = audioRef.current;
    if (audio && !useSynthFallback) {
      audio.volume = volume;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Fallback to ambient Web Audio synth raga
          setUseSynthFallback(true);
          soundEffects.startAmbientDrone();
          setIsPlaying(true);
        });
    } else {
      soundEffects.startAmbientDrone();
      setIsPlaying(true);
    }
  };

  const stopPlayback = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    soundEffects.stopAmbientDrone();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    const audio = audioRef.current;
    if (audio) {
      audio.muted = nextMuted;
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  return (
    <>
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src={music.audioSrc}
        loop
        preload="metadata"
        onError={() => {
          setUseSynthFallback(true);
        }}
      />

      {/* Floating Festive Music Controller Dock (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-5 left-5 z-40"
      >
        <div className="glass-card rounded-full p-2 pr-4 border border-amber-400/40 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
          {/* Main Play / Pause Circle Button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-purple-950 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            title={isPlaying ? 'Pause Festive Music' : 'Play Festive Music'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          {/* Music Visualizer Bars */}
          <div className="flex items-center gap-1 h-5 px-1">
            {[0.8, 1.4, 0.9, 1.6, 1.1].map((scale, i) => (
              <div
                key={i}
                className={`w-1 rounded-full bg-amber-400 transition-all ${
                  isPlaying ? 'animate-pulse' : 'h-1.5 opacity-40'
                }`}
                style={{
                  height: isPlaying ? `${Math.max(6, 18 * (i % 2 === 0 ? 0.7 : 1))}px` : '4px',
                  animationDuration: `${0.6 * scale}s`,
                }}
              />
            ))}
          </div>

          {/* Track Name */}
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-serif font-bold text-amber-200 truncate max-w-[140px]">
              {music.title}
            </span>
            <span className="text-[10px] text-amber-300/60 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              <span>{isPlaying ? 'Playing Festive Beats' : 'Paused • Tap to Play'}</span>
            </span>
          </div>

          {/* Mute / Volume Button */}
          <button
            onClick={toggleMute}
            className="text-amber-300/70 hover:text-amber-200 transition-colors p-1 cursor-pointer"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>
    </>
  );
}
