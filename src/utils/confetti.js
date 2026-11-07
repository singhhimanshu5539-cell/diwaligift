import confetti from 'canvas-confetti';

// Grand Festive Fireworks Barrage
export const triggerGrandFireworks = () => {
  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;

  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 80,
    zIndex: 9999,
  };

  const festiveColors = ['#fbbf24', '#f59e0b', '#d97706', '#e11d48', '#9333ea', '#38bdf8', '#ffffff'];

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Blast from left
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: festiveColors,
    });
    // Blast from right
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: festiveColors,
    });
  }, 250);
};

// Golden Sparkle Shower for Diya lighting
export const triggerGoldenSparkles = (x = 0.5, y = 0.5) => {
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { x, y },
    colors: ['#fef08a', '#fbbf24', '#f59e0b', '#d97706', '#ffffff'],
    shapes: ['star', 'circle'],
    ticks: 120,
    gravity: 0.8,
    scalar: 1.1,
    zIndex: 9999,
  });
};

// Romantic Rose Petals & Golden Hearts Shower for Namrata's Letter
export const triggerRosePetalsShower = () => {
  const end = Date.now() + 2500;
  const colors = ['#f43f5e', '#be123c', '#fb7185', '#fda4af', '#fbbf24'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.3 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.2,
      gravity: 0.6,
      zIndex: 9999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.3 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.2,
      gravity: 0.6,
      zIndex: 9999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

// Gift Box Celebration Explosion
export const triggerGiftSurpriseExplosion = () => {
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#fbbf24', '#f59e0b', '#ec4899', '#f43f5e', '#8b5cf6', '#10b981'],
    ticks: 200,
    scalar: 1.2,
    zIndex: 9999,
  });
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

