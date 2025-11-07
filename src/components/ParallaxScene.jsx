import { useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Subtle parallax background with rising sun and mountains for a Japanese vibe
export default function ParallaxScene() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Transform values for parallax layers
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const farY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Pre-generate random petals positions to keep layout stable
  const petals = useMemo(() => {
    return new Array(24).fill(0).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 6,
      size: 8 + Math.random() * 10,
      rotate: (Math.random() - 0.5) * 40,
    }));
  }, []);

  useEffect(() => {
    // nothing here for now - layout-only component
  }, []);

  return (
    <section ref={ref} className="relative h-[220vh] w-full overflow-hidden">
      {/* Gradient background sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-indigo-800 to-slate-900" />

      {/* Far mountains */}
      <motion.div style={{ y: farY }} className="absolute bottom-[35%] left-0 right-0 h-64">
        <div className="mx-auto max-w-6xl h-full flex gap-6 opacity-50">
          <div className="flex-1 bg-gradient-to-t from-indigo-900 to-indigo-800 rounded-[30%] blur-2xl" />
          <div className="flex-1 bg-gradient-to-t from-slate-900 to-indigo-800 rounded-[30%] blur-2xl" />
          <div className="flex-1 bg-gradient-to-t from-indigo-900 to-indigo-700 rounded-[30%] blur-2xl" />
        </div>
      </motion.div>

      {/* Rising sun */}
      <motion.div style={{ y: sunY }} className="absolute -top-24 left-1/2 -translate-x-1/2">
        <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-b from-rose-400 to-rose-600 blur-md opacity-70" />
      </motion.div>

      {/* Near hills */}
      <motion.div style={{ y: nearY }} className="absolute bottom-[25%] left-0 right-0 h-48">
        <div className="mx-auto max-w-6xl h-full flex gap-6 opacity-80">
          <div className="flex-1 bg-gradient-to-t from-slate-900 to-indigo-900 rounded-[40%] blur-md" />
          <div className="flex-1 bg-gradient-to-t from-slate-900 to-indigo-900 rounded-[40%] blur-md" />
          <div className="flex-1 bg-gradient-to-t from-slate-900 to-indigo-900 rounded-[40%] blur-md" />
        </div>
      </motion.div>

      {/* Petals falling across the scene */}
      {petals.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -40, rotate: 0, opacity: 0 }}
          animate={{ y: ['-10%', '120%'], x: [0, 30, -20, 10], rotate: [0, p.rotate, -p.rotate], opacity: [0, 1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{ left: `${p.left}%` }}
          className="pointer-events-none absolute top-0 text-rose-300"
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2c1.4 3 2.2 4.7 4.2 6.7S22 12.6 22 14.8c0 2.7-2.4 5.2-5 5.2-2.2 0-3.9-1.2-5-2.8-1.1 1.6-2.8 2.8-5 2.8-2.6 0-5-2.5-5-5.2C2 12.6 5.8 11 7.8 8.7 9.8 6.7 10.6 5 12 2z" />
          </svg>
        </motion.span>
      ))}
    </section>
  );
}
