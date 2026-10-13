"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ParallaxBackgroundLayer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 28, stiffness: 140 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 140 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* SOFT SUBTLE AMBIENT WARM GLOWS (NON-DISTRACTING, PRODUCTION GRADE) */}
      <div className="absolute -top-32 right-[8%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.025)_0%,rgba(255,90,31,0)_70%)] blur-3xl" />
      <div className="absolute top-[40%] -left-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(17,17,19,0.015)_0%,rgba(17,17,19,0)_70%)] blur-3xl" />

      {/* SWIPECRAFT AMBIENT CURSOR SPOTLIGHT */}
      {mounted && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full hidden lg:block opacity-60"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(255,90,31,0.035) 0%, rgba(255,90,31,0.01) 35%, transparent 70%)",
            willChange: "transform",
          }}
        />
      )}
    </div>
  );
}
