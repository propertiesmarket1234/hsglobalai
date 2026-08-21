"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressAndGlow() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable mouse cursor glow tracking on desktop screens with fine pointer
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* GLOBAL SCROLL PROGRESS INDICATOR BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-300 shadow-[0_0_12px_#06b6d4] origin-left pointer-events-none"
      />

      {/* AMBIENT CURSOR GLOW LIGHT (DESKTOP) */}
      {isDesktop && (
        <motion.div
          animate={{
            x: cursorPos.x - 200,
            y: cursorPos.y - 200,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.2,
          }}
          className="pointer-events-none fixed top-0 left-0 z-30 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] transition-opacity duration-500 hidden lg:block"
        />
      )}
    </>
  );
}
