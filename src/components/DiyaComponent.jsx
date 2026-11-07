import React from 'react';

export default function DiyaComponent({
  size = 'md',
  isLit = true,
  onClick,
  label = '',
  className = '',
  interactive = false,
}) {
  const sizeMap = {
    sm: { width: 44, height: 38 },
    md: { width: 72, height: 62 },
    lg: { width: 110, height: 96 },
    xl: { width: 160, height: 140 },
  };

  const { width, height } = sizeMap[size] || sizeMap.md;

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center transition-transform select-none ${
        interactive ? 'cursor-pointer hover:scale-110 active:scale-95' : ''
      } ${className}`}
      title={interactive ? (isLit ? 'Diya is glowing ✨' : 'Click to light this diya 🪔') : undefined}
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient Warm Diya Glow when lit */}
        {isLit && (
          <div
            className="absolute -top-3 w-16 h-16 rounded-full bg-amber-400/30 blur-xl pointer-events-none transition-opacity duration-700"
            style={{ width: width * 1.2, height: height * 1.2 }}
          />
        )}

        <svg
          width={width}
          height={height}
          viewBox="0 0 100 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            {/* Clay Diya Gradient */}
            <linearGradient id="clayDiyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="45%" stop-color="#d97706" />
              <stop offset="90%" stop-color="#92400e" />
              <stop offset="100%" stop-color="#451a03" />
            </linearGradient>

            {/* Inner Oil Basin Gradient */}
            <radialGradient id="oilBasin" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stop-color="#78350f" />
              <stop offset="80%" stop-color="#451a03" />
              <stop offset="100%" stop-color="#1c1917" />
            </radialGradient>

            {/* Flame Glow Radial */}
            <radialGradient id="flameInnerGlow" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="30%" stop-color="#fef08a" />
              <stop offset="70%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#dc2626" />
            </radialGradient>
          </defs>

          {/* Shadow beneath diya */}
          <ellipse cx="50" cy="78" rx="42" ry="7" fill="#000000" opacity="0.45" />

          {/* Diya Clay Base Shell */}
          <path
            d="M 10 50 C 15 76 85 76 90 50 C 70 65 30 65 10 50 Z"
            fill="url(#clayDiyaGrad)"
            stroke="#fef08a"
            strokeWidth="1.2"
          />

          {/* Diya Rim Oval */}
          <ellipse cx="50" cy="50" rx="40" ry="12" fill="url(#clayDiyaGrad)" stroke="#fbbf24" strokeWidth="1" />

          {/* Oil Well / Basin */}
          <ellipse cx="50" cy="51" rx="34" ry="9" fill="url(#oilBasin)" />

          {/* Gold Decorative Dots on Rim */}
          <g fill="#fef08a" opacity="0.9">
            <circle cx="20" cy="51" r="1.5" />
            <circle cx="32" cy="55" r="1.5" />
            <circle cx="50" cy="57" r="1.8" />
            <circle cx="68" cy="55" r="1.5" />
            <circle cx="80" cy="51" r="1.5" />
          </g>

          {/* Diya Wick Point */}
          <path d="M 48 50 C 49 42 51 42 52 50 Z" fill="#18181b" />

          {/* The Auspicious Flame */}
          {isLit ? (
            <g className="animate-diya-flame origin-bottom">
              {/* Outer Amber Flare */}
              <path
                d="M 50 8 C 36 26 38 46 50 49 C 62 46 64 26 50 8 Z"
                fill="#ea580c"
                opacity="0.8"
              />
              {/* Vibrant Gold Middle Flame */}
              <path
                d="M 50 14 C 40 28 41 44 50 47 C 59 44 60 28 50 14 Z"
                fill="#fbbf24"
              />
              {/* Pure Radiant White Core */}
              <path
                d="M 50 22 C 45 32 46 42 50 45 C 54 42 55 32 50 22 Z"
                fill="#ffffff"
              />
            </g>
          ) : (
            /* Unlit Wick with smoke hint */
            <g opacity="0.5">
              <path d="M 49 48 C 50 40 51 40 52 48 Z" fill="#52525b" />
              <circle cx="50.5" cy="40" r="1.5" fill="#71717a" opacity="0.6" />
            </g>
          )}
        </svg>
      </div>

      {label && (
        <span
          className={`mt-2 text-xs font-medium tracking-wide transition-colors ${
            isLit ? 'text-amber-300 font-semibold drop-shadow' : 'text-amber-100/50'
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

