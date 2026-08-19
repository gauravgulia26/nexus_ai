'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, CheckCircle2, FileText, Activity } from 'lucide-react';
import { RESEARCH_PUBLICATIONS } from '@/data/resume';
import { SectionReveal } from '@/components/SectionReveal';

export const ResearchSection: React.FC = () => {
  return (
    <SectionReveal id="research" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 bg-indigo-950/40 border border-indigo-500/30 px-3 py-1 rounded-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>04 // RESEARCH &amp; PUBLICATIONS</span>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              $ publications --inspect --domain healthcare_ml
            </span>
          </div>

          <div className="font-mono text-xs text-indigo-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md hidden md:flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>PEER-REVIEWED PUBLICATION</span>
          </div>
        </motion.div>

        {/* Research Publication Cards */}
        <div className="space-y-8">
          {RESEARCH_PUBLICATIONS.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel-elevated rounded-2xl p-6 sm:p-10 border border-white/15 relative overflow-hidden group hover:border-indigo-500/40 transition-all"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Metadata Header */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-semibold">
                      {pub.venue}
                    </span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-400">{pub.authors}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
                    {pub.title}
                  </h3>

                  {/* Abstract */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-indigo-300 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>ABSTRACT &amp; METHODOLOGICAL FRAMEWORK:</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-white/5">
                      {pub.abstract}
                    </p>
                  </div>

                  {/* Key Contributions & Methodology */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>KEY RESEARCH FINDINGS:</span>
                    </div>
                    <ul className="space-y-2">
                      {pub.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="text-indigo-400 font-mono select-none mt-0.5">▹</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-500 mr-2">CORE METHODOLOGIES:</span>
                    {pub.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-indigo-300 font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Research Metrics & Clinical Impact */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-5 rounded-xl bg-slate-900/80 border border-white/10 font-mono text-xs space-y-3.5">
                    <div className="text-indigo-400 font-semibold border-b border-white/10 pb-2 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span>EXPERIMENTAL_RESULTS</span>
                    </div>

                    <div className="space-y-3">
                      {pub.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex justify-between items-center py-1 border-b border-white/5">
                          <span className="text-slate-500 text-[11px]">{m.label}</span>
                          <span className="text-cyan-300 font-bold text-sm">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification Note */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900/80 border border-indigo-500/20 text-xs font-mono space-y-1.5">
                    <div className="text-indigo-300 font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-indigo-400" />
                      STATISTICAL RIGOR
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      Comparative model evaluation with ROC-AUC validation, statistical feature selection, and weighted classification ensembles.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};
