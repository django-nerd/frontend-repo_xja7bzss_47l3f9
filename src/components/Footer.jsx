import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 py-16 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-white/70"
      >
        Crafted with anime vibes • Cherry blossoms and samurai spirit
      </motion.p>
    </footer>
  );
}
