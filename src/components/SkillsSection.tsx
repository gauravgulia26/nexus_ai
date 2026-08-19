'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Sparkles, Workflow, Layers, Database, Code2, ShieldAlert, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/resume';
import { SectionReveal } from '@/components/SectionReveal';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <SectionReveal id="skills" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>05 // SKILLS MATRIX</span>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              $ system.get_capabilities --matrix --verified
            </span>
          </div>

          {/* Disclaimer badge */}
          <div className="font-mono text-[11px] text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Relative Proficiency &amp; Specialization Matrix</span>
          </div>
        </motion.div>

        {/* Main Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category Tabs (Left) */}
          <div className="lg:col-span-4 space-y-2">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.code}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border font-mono text-xs flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                      : 'bg-slate-900/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold">
                      <span className={isActive ? 'text-cyan-400' : 'text-slate-500'}>
                        [{cat.code}]
                      </span>
                      <span>{cat.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 font-sans">
                      {cat.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skill Progress Bars & Details (Right) */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCategoryIndex}
              initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.35 }}
              className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6"
            >
              {/* Category Info Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    {SKILL_CATEGORIES[activeCategoryIndex].name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {SKILL_CATEGORIES[activeCategoryIndex].description}
                  </p>
                </div>
                <div className="font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded">
                  SKILLS_LOADED: {SKILL_CATEGORIES[activeCategoryIndex].skills.length}
                </div>
              </div>

              {/* Progress Bars List */}
              <div className="space-y-5">
                {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => {
                  const totalBlocks = 20;
                  const filledBlocks = Math.round((skill.level / 100) * totalBlocks);
                  const emptyBlocks = totalBlocks - filledBlocks;
                  const asciiBar = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);

                  return (
                    <div key={sIdx} className="space-y-1.5 group">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-200 font-medium flex items-center gap-2">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          )}
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-3 text-slate-400">
                          <span className="hidden sm:inline text-slate-600 text-[10px]">
                            [{asciiBar}]
                          </span>
                          <span className="text-cyan-400 font-bold w-9 text-right">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Smooth Progress Bar */}
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.05, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Terminal Legend / Note */}
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>* Self-assessed technical depth &amp; production familiarity</span>
                <span className="text-emerald-400">STATUS: INITIALIZED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
