'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-slate-900/40">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 origin-left shadow-[0_0_12px_rgba(0,240,255,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
