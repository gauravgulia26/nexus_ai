'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Code2,
  Layers,
  Workflow,
  X,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  Package,
} from 'lucide-react';
import { PROJECTS } from '@/data/resume';
import { ProjectItem } from '@/types';
import { SectionReveal } from '@/components/SectionReveal';

// Custom SVG Icons for GitHub
const GithubSmall: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const CATEGORIES = [
  { id: 'all', label: 'ALL_SYSTEMS' },
  { id: 'mlops', label: 'MLOPS_&_PIPELINES' },
  { id: 'genai', label: 'GENAI_&_RAG' },
  { id: 'cv', label: 'COMPUTER_VISION' },
  { id: 'library', label: 'LIBRARIES_&_TOOLS' },
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <SectionReveal id="projects" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 // FEATURED PROJECTS</span>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              $ projects --production --inspect
            </span>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.15)] font-semibold'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:text-slate-200 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Minimal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 group relative overflow-hidden transition-all"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Status & Period Header */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 font-medium">
                    {project.status}
                  </span>
                  <span className="text-slate-500">{project.period}</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono mt-1">{project.subtitle}</p>
                </div>

                {/* Metrics Summary Grid */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 font-mono text-[11px]"
                      >
                        <div className="text-slate-400 text-[10px] uppercase">{metric.label}</div>
                        <div className="text-cyan-300 font-bold mt-0.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Technologies preview */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-slate-900/80 border border-white/10 text-slate-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono text-[11px]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Action Links (for burnout) & Details Trigger */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {project.links?.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 text-[11px] font-mono transition-all"
                    >
                      {link.type === 'github' && <GithubSmall className="w-3 h-3" />}
                      {link.type === 'docker' && <Package className="w-3 h-3 text-cyan-400" />}
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer ml-auto"
                >
                  <span>INSPECT DETAILS</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Separate Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Dedicated Glass Architecture Blueprint Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-panel-elevated rounded-2xl border border-cyan-500/30 shadow-2xl p-6 sm:p-8 space-y-6 z-10 font-mono"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-cyan-400 mb-1">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{selectedProject.status}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{selectedProject.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-sans">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm text-indigo-300 font-mono mt-0.5">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Problem Statement & Architecture */}
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-cyan-400 mb-1.5 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>PROBLEM &amp; OBJECTIVE:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-xl border border-white/5">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs text-indigo-400 mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>ENGINEERING ARCHITECTURE &amp; APPROACH:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-xl border border-white/5">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  {/* Technical Contributions */}
                  <div>
                    <div className="text-xs text-emerald-400 mb-2 flex items-center gap-1.5">
                      <Workflow className="w-3.5 h-3.5" />
                      <span>KEY CONTRIBUTIONS:</span>
                    </div>
                    <ul className="space-y-2 font-sans">
                      {selectedProject.contributions.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="text-cyan-400 font-mono select-none mt-0.5">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measurable Outcomes */}
                  {selectedProject.outcomes && (
                    <div>
                      <div className="text-xs text-amber-400 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>OUTCOMES &amp; IMPACT:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans">
                        {selectedProject.outcomes.map((outcome, oIdx) => (
                          <div
                            key={oIdx}
                            className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="pt-2">
                    <div className="text-xs text-slate-400 mb-2">COMPLETE TECH STACK:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-cyan-300 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Clickable Links Inside Modal (only for burnout) */}
                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-xs text-cyan-400 mb-2.5">LIVE ARTIFACTS &amp; REPOSITORIES:</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs transition-colors cursor-pointer"
                  >
                    CLOSE_VIEW
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  );
};
