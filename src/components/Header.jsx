import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative z-10 flex flex-col items-center text-center pt-20 pb-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Samurai Neko
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 max-w-xl text-base sm:text-lg text-white/80"
      >
        A Japanese-style anime cat descends like a samurai while cherry blossoms fall.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, repeatType: 'reverse' }}
        className="mt-10 text-white/70"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10">
          Scroll to see the jump
        </span>
      </motion.div>
    </header>
  );
}
