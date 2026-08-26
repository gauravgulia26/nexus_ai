'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  id,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const sectorTag = id ? id.toUpperCase() : 'TELEMETRY';

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.99 }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 } : {}}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative group ${className}`}
    >
      {/* ========================================================================= */}
      {/* ROBOT HUD / CYBERNETIC SENSOR VIEWPORT OVERLAYS */}
      {/* ========================================================================= */}

      {/* 1. Laser Optical Pixel Scan Sweep Beam */}
      {isInView && (
        <motion.div
          initial={{ top: '0%', opacity: 0.8 }}
          animate={{ top: '100%', opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: delay + 0.1 }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(0,240,255,0.7)] pointer-events-none z-20"
        />
      )}

      {/* 2. Transient Pixel Dither Grid Flash */}
      {isInView && (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: delay + 0.1 }}
          className="absolute inset-0 terminal-dots pointer-events-none z-10"
        />
      )}

      {/* 3. Robot HUD Corner Target Reticles (Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
      <div className="absolute -inset-2 sm:-inset-4 pointer-events-none select-none z-10 overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity">
        {/* Top-Left Bracket */}
        <motion.div
          initial={{ opacity: 0, x: -10, y: -10 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.15 }}
          className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80 shadow-[0_0_8px_rgba(0,240,255,0.4)]"
        />

        {/* Top-Right Bracket with Robot Telemetry HUD Badge */}
        <motion.div
          initial={{ opacity: 0, x: 10, y: -10 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.15 }}
          className="absolute top-0 right-0 flex items-center gap-2"
        >
          <span className="hidden md:inline font-mono text-[9px] text-cyan-400/80 tracking-widest bg-[#05070b]/90 border border-cyan-500/30 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(0,240,255,0.15)]">
            {`[+] SENSOR_LOCK: ${sectorTag} | 60FPS`}
          </span>
          <div className="w-4 h-4 border-t-2 border-r-2 border-cyan-400/80 shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
        </motion.div>

        {/* Bottom-Left Bracket */}
        <motion.div
          initial={{ opacity: 0, x: -10, y: 10 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/80 shadow-[0_0_8px_rgba(0,240,255,0.4)]"
        />

        {/* Bottom-Right Bracket with Coordinates Indicator */}
        <motion.div
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          className="absolute bottom-0 right-0 flex items-center gap-2"
        >
          <span className="hidden md:inline font-mono text-[9px] text-slate-500 tracking-wider">
            {`[ 1080P | AI_GRID ]`}
          </span>
          <div className="w-4 h-4 border-b-2 border-r-2 border-cyan-400/80 shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
        </motion.div>

        {/* Side Crosshair Ticks */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-cyan-400/50 font-mono text-[10px] hidden lg:block select-none">
          +
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-cyan-400/50 font-mono text-[10px] hidden lg:block select-none">
          +
        </div>
      </div>

      {/* Actual Section Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};
