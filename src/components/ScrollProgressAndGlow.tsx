"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressAndGlow() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-[#FF5A1F] origin-left pointer-events-none"
    />
  );
}
