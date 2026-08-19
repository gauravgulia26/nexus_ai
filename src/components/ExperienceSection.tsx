'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Award, GraduationCap } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '@/data/resume';
import { SectionReveal } from '@/components/SectionReveal';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionReveal id="experience" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // EXPERIENCE</span>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              $ git log --oneline --graph --author=&quot;Gourav Gulia&quot;
            </span>
          </div>

          <div className="font-mono text-xs text-slate-400 hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            ENGINEERING_TIMELINE
          </div>
        </motion.div>

        {/* Vertical Engineering Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#07090e] border-2 border-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-300 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-cyan-500/30 transition-all">
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{exp.summary}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Impact Metrics Badges */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-4">
                    {exp.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex flex-col font-mono"
                      >
                        <span className="text-[10px] text-slate-400 uppercase">
                          {metric.label}
                        </span>
                        <span className="text-sm font-bold text-cyan-300">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Responsibilities & Achievements */}
                <div className="pt-2 space-y-3">
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>KEY_CONTRIBUTIONS:</span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-cyan-400 font-mono text-xs select-none mt-0.5">▹</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500 mr-2">STACK:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-slate-900/80 border border-white/10 text-slate-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education Timeline Node */}
          <motion.div
            initial={{ opacity: 0, x: -25, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#07090e] border-2 border-indigo-500 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-300 transition-transform shadow-[0_0_12px_rgba(99,102,241,0.4)]">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
            </div>

            {/* Education Card */}
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-indigo-500/30 transition-all space-y-6">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC_BACKGROUND</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/70 border border-white/5 space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                        <div className="text-xs text-indigo-300 font-medium">{edu.institution}</div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {edu.period}
                      </span>
                    </div>
                    {edu.details && (
                      <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                        {edu.details[0]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
};
