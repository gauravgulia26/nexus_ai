'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Zap, Radio, CheckCircle2 } from 'lucide-react';

interface BootLoaderProps {
  onComplete: () => void;
}

const SECTION_BOOT_STEPS = [
  { name: 'ABOUT SYSTEM CORE', desc: 'Loading profile, domain telemetry & architecture specs' },
  { name: 'EXPERIENCE TIMELINE', desc: 'Mounting EY & Netmax engineering history' },
  { name: 'FEATURED PROJECTS', desc: 'Compiling MLOps & LangGraph Agentic pipelines' },
  { name: 'RESEARCH & PUBLICATIONS', desc: 'Validating peer-reviewed healthcare ML models' },
  { name: 'SKILLS MATRIX', desc: 'Synchronizing neural capabilities & frameworks' },
  { name: 'CONTACT UPLINK', desc: 'Establishing secure communication endpoints' },
];

export const TerminalBootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if already booted in this session
    const hasBooted = typeof window !== 'undefined' && sessionStorage.getItem('skynet_booted');
    if (hasBooted) {
      onComplete();
      return;
    }

    // Step progression (ensures total runtime is at least 1.5 seconds)
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < SECTION_BOOT_STEPS.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 220);

    // Smooth percentage progress counter
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setIsFinished(true);
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('skynet_booted', 'true');
            }
            setTimeout(onComplete, 400);
          }, 350);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 12 + 10), 100);
      });
    }, 130);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFinished(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('skynet_booted', 'true');
        }
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('skynet_booted', 'true');
    }
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(12px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070b] p-4 sm:p-6"
        >
          <div className="w-full max-w-2xl glass-panel-elevated rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.2)] relative">
            {/* Scanline Effect */}
            <div className="scanline-effect" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#080c16] border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-bold text-slate-200 flex items-center gap-1.5 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  SKYNET_INITIALIZER // v5.19
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> LIVE_BOOT
                </span>
                <button
                  onClick={handleSkip}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-slate-200 transition-colors text-[10px] cursor-pointer"
                >
                  ESC
                </button>
              </div>
            </div>

            {/* Main Terminal Loader Body */}
            <div className="p-6 font-mono space-y-4 bg-[#060910]/95 min-h-[320px] flex flex-col justify-between">
              {/* Prominent Skynet Header */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide font-sans">
                    Skynet is Loading...
                  </h2>
                </div>
                <p className="text-xs text-slate-400">
                  Booting autonomous machine learning subsystem &amp; command nodes
                </p>
              </div>

              {/* Sequential Section Boot Logs */}
              <div className="space-y-2 py-2">
                {SECTION_BOOT_STEPS.slice(0, currentStep).map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10, y: 4 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between text-xs sm:text-[13px] bg-slate-900/60 px-3 py-1.5 rounded-lg border border-white/5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-cyan-400 font-bold">0{idx + 1}.</span>
                      <span className="text-slate-200 font-semibold">{step.name}</span>
                      <span className="text-slate-500 text-[11px] hidden sm:inline">• {step.desc}</span>
                    </div>
                    <span className="text-emerald-400 text-[11px] font-bold flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3 h-3" /> OK
                    </span>
                  </motion.div>
                ))}

                {currentStep < SECTION_BOOT_STEPS.length && (
                  <div className="flex items-center gap-2 text-xs text-cyan-300 pl-2">
                    <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-blink" />
                    <span>Loading next subsystem...</span>
                  </div>
                )}
              </div>

              {/* Progress Bar & Hardening Status */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    SYSTEM MATRIX READY
                  </span>
                  <span className="font-bold text-cyan-300">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.6)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
