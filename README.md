# 🪔 A Diwali Surprise – From Himanshu to Namrata & Her Family ❤️

> A luxurious, heartfelt, and magical personal Diwali greeting website crafted with love, warmth, and respect.

---

## ✨ Features & Sections

1. **Magical Welcome Screen**: Deep midnight purple night scene, glowing layered diyas, floating golden embers, and an interactive *"Open Your Surprise ✨"* curtain unveil button.
2. **Grand Diwali Greeting**: *"Happy Diwali, Namrata & Family! 🪔"* featuring 4 festive blessing pillars for Happiness & Peace, Good Health & Prosperity, Success & New Opportunities, and Love & Cherished Memories.
3. **Special Family Wishes**: Dedicated family sanctuary card featuring the traditional Diwali blessings and the prayer: *"May every diya in your home bring happiness, every prayer bring peace, and every new day bring new reasons to smile. Wishing Namrata and her entire family a very Happy Diwali!"*
4. **A Special Message For Namrata**: Romantic and emotional 3D interactive wax-sealed envelope. Click to unseal and read the heartfelt handwritten letter on parchment with a rose petals shower and floating hearts.
5. **Polaroid-Style Photo Gallery**: Vintage Polaroid photo frames with festive washi tape, tilted angles, handwritten captions, and an interactive full-screen Lightbox zoom.
6. **Diwali Magic Experience**: 5 interactive clickable Diyas on an ornate Rangoli platform. Light all 5 to trigger celebratory fireworks! Also includes Rangoli pattern switcher and on-demand fireworks barrage.
7. **A Little Surprise For You**: 3D animated golden gift box that wobbles on hover and pops open with celebratory confetti to reveal a hidden heartfelt note.
8. **Festive Music Player**: Floating audio dock with play/pause, volume control, and animated audio visualizer waves. Supports custom local MP3s with a graceful Web Audio API Tanpura & Sitar raga synthesizer fallback.
9. **Final Greeting & Replay**: Starry Diwali night scene with glowing diyas, final warm wishes, and a replay button to re-experience the surprise anytime.

---

## 🚀 1. How to Run the Project Locally

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

1. Open your terminal and navigate to the project directory:
   ```bash
   cd /Users/himanshuchauhan/.gemini/antigravity/scratch/diwali-surprise-namrata
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🖼️ 2. How to Replace Namrata's Photos

1. Choose your favorite photos of Namrata, festive moments, or family celebrations (JPEG, PNG, or WebP).
2. Copy your image files into the folder:
   ```
   public/images/
   ```
   *(For example: `namrata-diwali-1.jpg`, `family-celebration.jpg`, etc.)*

3. Open `src/data/content.js` and locate the `gallery` section:
   ```javascript
   gallery: {
     photos: [
       {
         id: 1,
         url: "/images/namrata-diwali-1.jpg", // <-- your photo path here
         title: "Golden Glow",
         caption: "May your smile shine brighter than a thousand festive diyas ✨",
         date: "Diwali 2026",
       },
       // customize other photos as desired...
     ]
   }
   ```
4. Save the file. The website updates automatically in real time!

---

## ✍️ 3. How to Edit Messages & Text

All website text, headings, letters, and greetings are conveniently located in **one single central file**:
👉 `src/data/content.js`

You can edit:
- **Welcome Screen text**: Under `welcome.heading`, `welcome.subtitle`, etc.
- **Family Wishes**: Under `family.message`
- **Namrata's Romantic Letter**: Under `letter.paragraphs`, `letter.salutation`, `letter.closing`, and `letter.signature`
- **Gift Box Hidden Message**: Under `surprise.message`
- **Closing Greeting**: Under `final.mainMessage` and `final.signature`

---

## 🎵 4. How to Add Your Music

1. Choose your favorite Diwali song, romantic acoustic tune, or instrumental flute/sitar track (in `.mp3` format).
2. Save your audio file inside:
   ```
   public/audio/festive-melody.mp3
   ```
3. If you want to use a different filename (e.g. `song.mp3`), open `src/data/content.js` and update:
   ```javascript
   music: {
     title: "Your Song Title",
     artist: "Artist Name",
     audioSrc: "/audio/song.mp3",
   }
   ```
> **Note:** If no custom audio file is provided, the website automatically plays an authentic ambient Indian raga drone using the Web Audio API, so there is always soothing festive audio!

---

## ☁️ 5. How to Upload to GitHub & Deploy to Vercel

### Step A: Push to GitHub

1. Go to [GitHub.com](https://github.com/) and create a new repository named `diwali-surprise-namrata` (you can make it **Private** if you want it to remain a personal surprise until you share the link with Namrata!).
2. In your terminal, run:
   ```bash
   cd /Users/himanshuchauhan/.gemini/antigravity/scratch/diwali-surprise-namrata
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/diwali-surprise-namrata.git
   git branch -M main
   git push -u origin main
   ```

### Step B: Deploy on Vercel (100% Free & Fast)

1. Go to [Vercel](https://vercel.com/) and log in (or sign up with your GitHub account).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository: `diwali-surprise-namrata`.
4. Vercel will automatically detect **Vite** and configure the build command (`npm run build`) and output directory (`dist`).
5. Click **"Deploy"**.
6. Within 30 seconds, Vercel will give you a live HTTPS link (such as `https://diwali-surprise-namrata.vercel.app`) that you can send to Namrata on WhatsApp or share on Diwali! 🪔❤️

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & CSS Keyframes
- **Celebrations**: Canvas-Confetti
- **Icons**: Lucide React
- **Audio**: HTML5 Audio + Web Audio API Procedural Synthesizer
- **Typography**: Playfair Display, Cinzel Decorative, Great Vibes & Dancing Script

---

*Made with love by Himanshu for Namrata & Her Family.* ✨

