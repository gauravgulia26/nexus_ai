'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, Sparkles, Workflow, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/resume';
import { SectionReveal } from '@/components/SectionReveal';

export const AboutSection: React.FC = () => {
  return (
    <SectionReveal id="about" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT</span>
          </div>
          <span className="font-mono text-xs text-slate-500 hidden sm:inline">
            $ load_profile --scope engineering_summary
          </span>
        </motion.div>

        {/* Core Glass Panel */}
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Core Statement & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                Engineering intelligent systems from raw data to scalable production pipelines.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                    <Workflow className="w-4 h-4" />
                    <span>MLOps &amp; Serving</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Automated orchestration with Apache Airflow, DVC data versioning, MLflow tracking, and Dockerized FastAPI endpoints.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                    <Sparkles className="w-4 h-4" />
                    <span>Generative AI &amp; RAG</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Agentic architectures with LangGraph, explainable forensic reasoning, and vector-backed document retrieval.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5 hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Biometric Forensics</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    High-accuracy face verification (FaceNet512, RetinaFace), morphing detection, and image quality assessment (PSNR/SSIM/LBP).
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs">
                    <Cpu className="w-4 h-4" />
                    <span>High-Performance Python</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Multiprocessing acceleration, memory-efficient dtype downcasting, modular Dependency Injection, and PyPI packaging.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Col: Recruiter Quick Scan Card (10-second scan) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-[#090d16]/95 border border-cyan-500/30 shadow-xl space-y-4 font-mono text-xs relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-wider text-[11px]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>RECRUITER QUICK SCAN</span>
                  </div>
                  <span className="text-[10px] font-sans font-semibold bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded-full">
                    10s READ
                  </span>
                </div>

                {/* Scannable Spec Items */}
                <div className="space-y-3 font-sans">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">ROLE</div>
                    <div className="text-white font-bold text-sm">AI / ML Engineer</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">SPECIALIZATION</div>
                    <div className="text-cyan-300 font-semibold text-xs">
                      Production ML · MLOps · Agentic GenAI · Computer Vision
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">EXPERIENCE</div>
                    <div className="text-slate-200 text-xs">
                      1.5+ Years (Enterprise Forensic AI @ EY, Data Science @ Netmax)
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">PRIMARY STACK</div>
                    <div className="text-slate-300 text-xs font-mono bg-slate-900/80 p-2 rounded-lg border border-white/5 mt-1 leading-relaxed">
                      Python • LangGraph • MLflow • Airflow • FastAPI • Docker • VectorDB
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1 border-t border-white/10">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">EDUCATION</div>
                      <div className="text-slate-200 text-xs font-medium">M.Sc. Data Science</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">LOCATION</div>
                      <div className="text-slate-200 text-xs font-medium">Delhi-NCR, India</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Resume CTA Banner */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 via-slate-900 to-indigo-950/30 border border-cyan-500/20 flex items-center justify-between font-sans text-xs"
              >
                <div>
                  <div className="text-white font-semibold">Interested in working together?</div>
                  <div className="text-slate-400 text-[11px] font-mono">Download CV or explore architecture</div>
                </div>
                <a
                  href="#projects"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-mono text-xs font-medium transition-all"
                >
                  <span>PROJECTS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
