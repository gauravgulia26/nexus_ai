'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Mouse coords
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth brush glow physics
  const brushX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const brushY = useSpring(cursorY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.cursor-pointer') ||
          target.tagName === 'INPUT';
        setIsPointer(!!isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* 1. Subtle Background Brush Follower (Ambient Mouse Light) */}
      <motion.div
        style={{
          x: brushX,
          y: brushY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="pointer-events-none fixed top-0 left-0 z-0 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/8 to-emerald-500/6 blur-[100px] transition-opacity duration-300"
        animate={{ opacity: isVisible ? 0.85 : 0 }}
      />

      {/* 2. Terminal Blinking Block Cursor */}
      {isVisible && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '8px',
            translateY: '8px',
          }}
          className="pointer-events-none fixed top-0 left-0 z-50 flex items-center gap-1 font-mono text-[11px] select-none"
        >
          <div
            className={`w-2.5 h-4 transition-all duration-150 ${
              isPointer
                ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]'
                : 'bg-emerald-400/90 shadow-[0_0_8px_#10b981]'
            } animate-blink`}
          />
          {isPointer && (
            <span className="text-[10px] text-cyan-300 font-bold tracking-widest bg-black/80 px-1 py-0.5 rounded border border-cyan-500/30">
              CMD
            </span>
          )}
        </motion.div>
      )}
    </>
  );
};
