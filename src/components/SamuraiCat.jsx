import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A stylized samurai cat silhouette that "jumps down" as user scrolls
export default function SamuraiCat() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Cat starts above the viewport and lands near the middle as you scroll
  const catY = useTransform(scrollYProgress, [0, 1], ['-35vh', '45vh']);
  const catScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.15]);
  const shadowScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.35]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      {/* Samurai cat */}
      <motion.div style={{ y: catY, scale: catScale }} className="sticky top-24 flex justify-center">
        <div className="relative">
          {/* Halo */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-rose-400/20 via-fuchsia-400/10 to-indigo-400/20 rounded-full blur-2xl" />
          {/* Katana */}
          <div className="absolute -left-10 -top-6 rotate-12 w-40 h-2 bg-gradient-to-r from-slate-200 to-slate-400 rounded-full shadow-md" />
          {/* Cat silhouette */}
          <svg width="200" height="200" viewBox="0 0 200 200" className="relative drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
            <path d="M40 65c-8-25 10-36 20-38 6 5 10 13 12 20 7-8 18-16 30-18 5-1 21 1 30 13 6-8 12-14 19-17 11 3 21 16 12 37 20 14 28 42 20 64-10 26-37 45-78 45S37 152 27 126c-8-22 0-50 13-61z" fill="#111827" />
            {/* Eyes */}
            <circle cx="85" cy="105" r="6" fill="#fbbf24" />
            <circle cx="120" cy="105" r="6" fill="#fbbf24" />
            {/* Armor accents */}
            <path d="M55 130h90c-6 18-26 30-45 30s-39-12-45-30z" fill="#1f2937" />
            <path d="M70 140h60c-4 10-18 18-30 18s-26-8-30-18z" fill="#374151" />
          </svg>
        </div>
      </motion.div>

      {/* Landing shadow */}
      <motion.div
        style={{ scale: shadowScale, opacity: shadowOpacity }}
        className="sticky top-[70vh] flex justify-center"
      >
        <div className="w-40 h-6 bg-black/50 rounded-full blur-xl" />
      </motion.div>
    </div>
  );
}
