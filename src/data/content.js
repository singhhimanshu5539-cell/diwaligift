/**
 * =========================================================================
 * DIWALI SURPRISE WEBSITE - CENTRAL CONTENT CONFIGURATION
 * =========================================================================
 * 
 * Hi Himanshu! You can customize ANY text, message, photo, or setting in this file.
 * Changes you make here will automatically reflect throughout the website.
 */

export const siteContent = {
  // Website metadata
  meta: {
    title: "A Diwali Surprise – From Himanshu to Namrata & Her Family ❤️",
    senderName: "Himanshu",
    recipientName: "Namrata",
    familyName: "Namrata & Family",
  },

  // 1. Welcome Screen
  welcome: {
    badge: "✨ Shubh Deepavali 2026 ✨",
    heading: "A Little Diwali Surprise For You...",
    subtitle: "For Namrata & Her Beautiful Family ❤️",
    description: "Crafted with love, warmth, and heartfelt festive blessings just for you.",
    buttonText: "Open Your Surprise ✨",
    hintText: "Click above to unveil your magical experience",
  },

  // 2. Grand Diwali Greeting
  greeting: {
    tag: "SHUBH DEEPAVALI 2026",
    title: "Happy Diwali, Namrata & Family! 🪔",
    quote: "May this auspicious festival illuminate your path with boundless joy, peace, and eternal harmony.",
    blessings: [
      {
        id: "happiness",
        icon: "Sparkles",
        title: "Happiness & Peace",
        description: "May serene peace fill your hearts and homes, turning every simple moment into a joyful celebration of life.",
        glowColor: "from-amber-400 to-yellow-600",
      },
      {
        id: "prosperity",
        icon: "Coins",
        title: "Good Health & Prosperity",
        description: "Wishing you and your loved ones flourishing health, golden prosperity, and divine abundance in the year ahead.",
        glowColor: "from-yellow-400 to-orange-500",
      },
      {
        id: "success",
        icon: "TrendingUp",
        title: "Success & New Opportunities",
        description: "May every endeavor you undertake flourish with triumph, unlocking new horizons, wisdom, and fulfilling milestones.",
        glowColor: "from-orange-400 to-rose-500",
      },
      {
        id: "memories",
        icon: "Heart",
        title: "Love & Cherished Memories",
        description: "May your days be sprinkled with hearty laughter, warmth of loved ones, and countless unforgettable memories.",
        glowColor: "from-rose-400 to-purple-500",
      },
    ],
  },

  // 3. Special Family Wishes
  family: {
    tag: "FOR THE ENTIRE FAMILY",
    title: "Warm Wishes For Namrata's Family 🏡🪔",
    subtitle: "Because the sweetest festivities are celebrated surrounded by family warmth.",
    message: "May every diya in your home bring happiness, every prayer bring peace, and every new day bring new reasons to smile. Wishing Namrata and her entire family a very Happy Diwali!",
    pillars: [
      {
        title: "Ghar Ki Barkat",
        text: "May divine blessings shower your home with tranquility and boundless goodwill.",
      },
      {
        title: "Mithas & Hasi",
        text: "May your home always resonate with sweetness, joy, and laughter of togetherness.",
      },
      {
        title: "Sehat & Sukoon",
        text: "May every elder and member be blessed with vibrant health, calmness, and peace.",
      },
    ],
  },

  // 4. A Special Message For Namrata (The Romantic & Emotional Letter)
  letter: {
    tag: "A HEARTFELT NOTE",
    title: "A Special Message For Namrata",
    subtitle: "Some feelings are meant to be cherished forever...",
    envelopePrompt: "Click to unseal this handwritten letter 💌",
    salutation: "Dear Namrata,",
    paragraphs: [
      "Festivals become even more beautiful when we have special people in our lives. I genuinely wish that your life always shines with happiness, your smile never fades, and every dream of yours comes true.",
      "You hold a special place in my heart. I may not always find the perfect words to express my feelings, but my wishes for your happiness are always genuine.",
      "Keep smiling and keep shining. You deserve all the beautiful things in life.",
    ],
    closing: "With lots of warmth and affection,",
    signature: "Himanshu ❤️",
    date: "Diwali 2026",
  },

  // 5. Photo Gallery (Polaroid style with editable captions)
  // Instructions: To use your personal photos, place images in /public/images/
  // and update the 'url' below (e.g. '/images/namrata-1.jpg')
  gallery: {
    tag: "MOMENTS & LIGHT",
    title: "Festive Moments & Memories 📸",
    subtitle: "A keepsake of smiles, festive warmth, and glowing times.",
    photos: [
      {
        id: 1,
        url: "/images/diwali-lights.svg",
        title: "Golden Glow",
        caption: "May your smile shine brighter than a thousand festive diyas ✨",
        rotation: "-rotate-2",
        date: "Festive Vibes",
      },
      {
        id: 2,
        url: "/images/diwali-rangoli.svg",
        title: "Colors of Joy",
        caption: "Wishing your life is as vibrant and artistic as a royal rangoli 🌸",
        rotation: "rotate-3",
        date: "Rangoli Traditions",
      },
      {
        id: 3,
        url: "/images/diwali-sparklers.svg",
        title: "Sparkling Moments",
        caption: "Every celebration is brighter with your sparkling laughter 🎆",
        rotation: "-rotate-1",
        date: "Magical Sparks",
      },
      {
        id: 4,
        url: "/images/diwali-sweets.svg",
        title: "Sweet Celebrations",
        caption: "May sweetness and warmth always surround you and your family 🍬",
        rotation: "rotate-2",
        date: "Mithai Moments",
      },
    ],
  },

  // 6. Diwali Magic Interactive Experience
  magic: {
    tag: "INTERACTIVE EXPERIENCE",
    title: "Diwali Magic & Festivities ✨",
    subtitle: "Click each sacred Diya to light up its auspicious flame and ignite the night sky!",
    diyaCount: 5,
    diyaLabels: [
      "Diya of Joy",
      "Diya of Peace",
      "Diya of Love",
      "Diya of Hope",
      "Diya of Prosperity",
    ],
    fireworksButtonText: "Burst Festive Fireworks 🎆",
    sparklesButtonText: "Toggle Golden Stardust ✨",
  },

  // 7. A Little Surprise For You (Gift Box)
  surprise: {
    tag: "OPEN WITH A SMILE",
    title: "A Little Surprise For You 🎁",
    subtitle: "A small festive parcel waiting just for you. Tap the gift box to unwrap it!",
    boxPrompt: "Tap the box to open ✨",
    revealedTitle: "You Are Genuinely Special ❤️",
    message: "Just a little reminder that you are special, and I genuinely wish happiness and beautiful moments for you and your family. ❤️",
    closingNote: "— Always cheering for your brightest smile, Himanshu",
  },

  // 8. Music Experience
  music: {
    title: "Festive Ambient Raga & Sitar Melody",
    artist: "Diwali Celebration Strings",
    audioSrc: "/audio/festive-melody.mp3", // Local file in public/audio/
    note: "Tap anywhere or toggle the music icon to feel the festive melody 🎶",
  },

  // 9. Final Greeting Screen
  final: {
    tag: "SHUBH DEEPAVALI 2026",
    title: "May Your World Forever Shine 🪔",
    mainMessage: "May your home always shine with happiness and your heart always stay full of joy.",
    closing: "With Warm Wishes & Lots of Love,",
    signature: "From Himanshu ❤️",
    footerText: "Handcrafted with genuine affection for Namrata & Her Family • Diwali 2026",
  },
};

