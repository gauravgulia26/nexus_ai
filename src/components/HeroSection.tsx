'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/resume';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Career-Oriented Positioning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300 mb-8 backdrop-blur-md"
        >
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR AI/ML OPPORTUNITIES
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-300 font-medium hidden sm:inline">
            SPECIALIZATION: ML SYSTEMS · MLOPS · GENAI
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="text-slate-400 hidden md:inline">
            DELHI-NCR, INDIA
          </span>
        </motion.div>

        {/* Main Hero Grid: 60% Left Focus, 40% Right Evidence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Identity & Positioning (60% weight) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Name Headline & Specialization */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
                {PERSONAL_INFO.name}
              </h1>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 font-sans">
                  AI/ML Engineer
                </div>
                <div className="text-sm sm:text-base font-mono text-slate-400 font-medium">
                  Production ML Systems • MLOps • GenAI
                </div>
              </div>
            </div>

            {/* Authoritative Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-sans">
              I design and deploy production-grade ML systems, agentic RAG pipelines, and computer vision applications.
            </p>

            {/* 3 High-Impact Pillars (Crisp, zero visual noise) */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {['Production ML', 'MLOps', 'Agentic AI'].map((domain, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.08)]"
                >
                  {domain}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects (Primary) & Download Resume (Prominent) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.55)] cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeFile}
                download={PERSONAL_INFO.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 hover:text-white border border-cyan-500/40 font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="https://github.com/gauravgulia26"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/15 font-sans text-xs sm:text-sm font-medium transition-all flex items-center gap-2 hover:border-cyan-500/40 hover:text-white cursor-pointer"
                title="Visit GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-sans text-xs sm:text-sm font-medium transition-all flex items-center gap-2 hover:text-white cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Simplified Supporting System Profile (40% weight) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-elevated rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group">
              {/* Scanline Effect */}
              <div className="scanline-effect" />

              {/* Console Window Header */}
              <div
                onClick={onOpenTerminal}
                className="px-4 py-2.5 bg-[#080c16] border-b border-white/10 flex items-center justify-between font-mono text-xs text-slate-400 cursor-pointer hover:bg-slate-900/80 transition-colors"
                title="Click to launch interactive terminal"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300 font-semibold text-[11px] flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    system_profile.sh
                  </span>
                </div>
                <span className="text-[10px] text-cyan-400 hover:underline">RUN CLI &gt;_</span>
              </div>

              {/* Console Body Content: 3-4 High Value Signals Only */}
              <div className="p-5 sm:p-6 font-mono text-xs space-y-4 bg-[#060910]/95">
                <div className="text-slate-500 text-[11px] pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>$ sysctl --inspect --profile</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    VERIFIED
                  </span>
                </div>

                {/* Signal 1: ROLE */}
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">ROLE</div>
                  <div className="text-white text-sm font-bold font-sans mt-0.5">
                    AI / ML ENGINEER
                  </div>
                </div>

                {/* Signal 2: SPECIALIZATION */}
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">SPECIALIZATION</div>
                  <div className="text-cyan-300 font-semibold text-xs mt-0.5">
                    Production ML · Agentic AI · MLOps
                  </div>
                </div>

                {/* Signal 3: PRIMARY STACK */}
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">PRIMARY STACK</div>
                  <div className="text-slate-200 text-xs mt-1 leading-relaxed">
                    Python · LangGraph · MLflow · Airflow · FastAPI · Docker
                  </div>
                </div>

                {/* Signal 4: CURRENT STATUS & CLI TRIGGER */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN TO AI/ML ROLES
                  </div>
                  <button
                    onClick={onOpenTerminal}
                    className="text-cyan-400 hover:text-cyan-300 text-[11px] font-mono hover:underline cursor-pointer"
                  >
                    Open CLI &gt;_
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
