'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Mail, Download, Shield, Cpu, Activity, Database } from 'lucide-react';
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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-400 mb-8 backdrop-blur-md"
        >
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SYSTEM ONLINE
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 flex items-center gap-1">
            <Activity className="w-3 h-3" />
            OPEN TO SPECIALIZED AI/ML ROLES
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">
            NODE_LOC: {PERSONAL_INFO.region}
          </span>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Identity & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Terminal Command Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90">
              <span className="text-slate-500">$</span>
              <span>whoami --role &quot;AI/ML Engineer&quot;</span>
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-blink" />
            </div>

            {/* Name Headline & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-lg sm:text-2xl font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400">
                AI / ML ENGINEER • MLOps • Generative AI
              </div>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Building production-grade machine learning systems, high-scale biometrics, MLOps pipelines, and agentic RAG architectures.
            </p>

            {/* Technical Domains Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Production ML Systems',
                'LangGraph & RAG',
                'MLOps (Airflow & MLflow)',
                'Computer Vision & Biometrics',
                'FastAPI Serving',
                'VectorDB (HNSW)',
              ].map((domain, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:border-cyan-500/40 transition-colors"
                >
                  {domain}
                </span>
              ))}
            </div>

            {/* Call to Actions & GitHub Profile Redirect */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/gauravgulia26"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/15 font-mono text-xs sm:text-sm font-medium tracking-wider transition-all flex items-center gap-2 hover:border-cyan-500/40 hover:text-white cursor-pointer"
                title="Visit GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>GITHUB</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/15 font-mono text-xs sm:text-sm font-medium tracking-wider transition-all flex items-center gap-2 hover:border-cyan-500/40 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>CONNECT</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeFile}
                download="Gourav_Gulia_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-mono text-xs sm:text-sm transition-all flex items-center gap-2 hover:text-white cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>RESUME</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal Preview Box */}
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
              <div className="px-4 py-2.5 bg-[#080c16] border-b border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300 font-semibold text-[11px]">
                    system_telemetry.sh
                  </span>
                </div>
                <span className="text-[10px] text-cyan-400">RUNNING</span>
              </div>

              {/* Console Body Content */}
              <div className="p-5 font-mono text-xs space-y-3.5 bg-[#060910]/95">
                <div>
                  <div className="text-slate-500 text-[11px]">$ sysctl --inspect --profile</div>
                  <div className="text-slate-300 mt-1.5">
                    <span className="text-cyan-400 font-bold">&gt;</span> Engineer:{' '}
                    <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
                  </div>
                  <div className="text-slate-300 mt-1">
                    <span className="text-cyan-400 font-bold">&gt;</span> Focus:{' '}
                    <span className="text-cyan-300 font-semibold">AI/ML Engineering • MLOps • Generative AI</span>
                  </div>
                  
                  {/* Top 6 High-Impact Tech Stacks */}
                  <div className="mt-2.5">
                    <div className="text-slate-400 text-[11px] mb-1.5 flex items-center gap-1.5">
                      <span className="text-cyan-400 font-bold">&gt;</span>
                      <span className="text-slate-300 font-semibold">Abilities:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Python / FastAPI',
                        'LangGraph & RAG',
                        'Apache Airflow',
                        'MLflow & DVC',
                        'VectorDB (HNSW)',
                        'Docker & CI/CD',
                      ].map((stack, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-cyan-500/30 text-slate-200 text-[10px] sm:text-[11px] font-mono hover:border-cyan-400 transition-colors"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/10">
                  <div className="text-slate-500 text-[11px] mb-2">$ cat architecture_pillars.log</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-[10px]">VECTOR SEARCH</div>
                      <div className="text-cyan-400 font-bold text-xs sm:text-sm">HNSW Indexing</div>
                      <div className="text-slate-500 text-[9px]">Milvus / FAISS</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-[10px]">INFERENCE ENGINE</div>
                      <div className="text-emerald-400 font-bold text-xs sm:text-sm">FastAPI Serving</div>
                      <div className="text-slate-500 text-[9px]">Multiprocess / Dtype</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-[10px]">ORCHESTRATION</div>
                      <div className="text-indigo-400 font-bold text-xs sm:text-sm">Airflow &amp; DVC</div>
                      <div className="text-slate-500 text-[9px]">Reproducible Pipelines</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-[10px]">DEVELOPER TOOLS</div>
                      <div className="text-amber-400 font-bold text-xs sm:text-sm">PyPI Package</div>
                      <div className="text-slate-500 text-[9px]">Logpunch Author</div>
                    </div>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    STATUS: ALL NOMINAL
                  </span>
                  <span className="text-slate-500">M.Sc. Data Science</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
