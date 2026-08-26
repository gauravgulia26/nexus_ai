'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Sparkles, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface BootLoaderProps {
  onComplete: () => void;
}

const BOOT_TELEMETRY = [
  'INITIALIZING_NEURAL_SUBSYSTEMS',
  'LOADING_PRODUCTION_ML_WEIGHTS',
  'SYNCHRONIZING_LANGGRAPH_AGENT_NODES',
  'VERIFYING_FACENET512_EMBEDDINGS',
  'CALIBRATING_MLOPS_PIPELINES',
  'READY_FOR_ENGAGEMENT',
];

export const TerminalBootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'booting' | 'welcome' | 'ready'>('booting');
  const [progress, setProgress] = useState(0);
  const [telemetryIndex, setTelemetryIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if previously loaded in session
    const hasBooted = typeof window !== 'undefined' && sessionStorage.getItem('nexus_booted');
    if (hasBooted) {
      onComplete();
      return;
    }

    // Telemetry ticker
    const tickerInterval = setInterval(() => {
      setTelemetryIndex((prev) => (prev + 1) % BOOT_TELEMETRY.length);
    }, 280);

    // Progress counter with phase triggers
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8 + 6);
        if (next >= 45 && prev < 45) {
          setPhase('welcome');
        }
        if (next >= 90 && prev < 90) {
          setPhase('ready');
        }
        if (next >= 100) {
          clearInterval(timer);
          clearInterval(tickerInterval);
          setTimeout(() => {
            setIsExiting(true);
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('nexus_booted', 'true');
            }
            setTimeout(onComplete, 600);
          }, 600);
          return 100;
        }
        return next;
      });
    }, 90);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        setIsExiting(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('nexus_booted', 'true');
        }
        setTimeout(onComplete, 200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      clearInterval(tickerInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nexus_booted', 'true');
    }
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(16px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070b] overflow-hidden select-none"
        >
          {/* 1. Background Cybernetic Grid & Radial Lights */}
          <div className="absolute inset-0 terminal-grid opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* 2. Scanning Laser Horizon Line */}
          <div className="scanline-effect" />

          {/* 3. Central Holographic Core Box */}
          <div className="relative w-full max-w-2xl mx-4 p-6 sm:p-10 glass-panel-elevated rounded-3xl border border-cyan-500/40 shadow-[0_0_80px_rgba(0,240,255,0.25)] flex flex-col items-center text-center space-y-8">
            {/* Top Status Bar */}
            <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>NEXUS AI // INITIALIZATION CORE</span>
              </div>
              <button
                onClick={handleSkip}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/10 text-[11px] transition-all cursor-pointer flex items-center gap-1"
              >
                <span>SKIP [ESC]</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Central Luminous Orbital Vortex Icon */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Outer Rotating Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              />

              {/* Reverse Inner Indigo Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border border-indigo-400/50 border-t-transparent border-b-transparent"
              />

              {/* Glowing Emerald Pulse Ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-4 rounded-full bg-cyan-500/10 border border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.4)]"
              />

              {/* Center Core Chip Icon */}
              <div className="relative z-10 p-4 rounded-2xl bg-[#070b14] border border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                {phase === 'ready' ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-400 animate-bounce" />
                ) : phase === 'welcome' ? (
                  <Sparkles className="w-7 h-7 text-cyan-300 animate-pulse" />
                ) : (
                  <Cpu className="w-7 h-7 text-cyan-400 animate-pulse" />
                )}
              </div>
            </div>

            {/* Dynamic Phase Typography */}
            <div className="space-y-3 max-w-lg min-h-[95px] flex flex-col justify-center">
              {phase === 'booting' && (
                <motion.div
                  key="booting"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-1.5"
                >
                  <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                    &gt; BOOT SEQUENCE RUNNING...
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
                    Initializing Command Center
                  </h2>
                  <p className="text-xs text-slate-400 font-sans">
                    Mounting production telemetry, biometric weights &amp; agentic graph
                  </p>
                </motion.div>
              )}

              {phase === 'welcome' && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1.5"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SYSTEM PROTOCOL ACCEPTED</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-emerald-300 font-sans tracking-tight drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                    WELCOME
                  </h1>
                  <div className="text-sm font-sans font-bold text-slate-200">
                    Gourav Gulia // <span className="text-cyan-300">AI/ML Engineer</span>
                  </div>
                </motion.div>
              )}

              {phase === 'ready' && (
                <motion.div
                  key="ready"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-1.5"
                >
                  <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ACCESS GRANTED // ALL SYSTEMS ONLINE
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                    Launching Command Interface...
                  </h2>
                </motion.div>
              )}
            </div>

            {/* Futuristic Soundwave / Equalizer Frequency Bars */}
            <div className="flex items-center justify-center gap-1 h-6">
              {[40, 75, 55, 95, 30, 85, 100, 60, 90, 45, 70, 100, 50, 80, 65, 35].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scaleY: [0.3, height / 100, 0.3],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 0.8 + (i % 5) * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.05,
                  }}
                  className="w-1 bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-full"
                  style={{ height: '24px' }}
                />
              ))}
            </div>

            {/* Progress Bar & Real-time Diagnostic Telemetry */}
            <div className="w-full space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[280px] sm:max-w-none">
                    $ {BOOT_TELEMETRY[telemetryIndex]}
                  </span>
                </span>
                <span className="text-cyan-300 font-bold text-sm">{progress}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-[1px] border border-white/15">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.7)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
