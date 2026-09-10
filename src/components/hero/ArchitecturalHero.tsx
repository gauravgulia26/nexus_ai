'use client';

import React, { useState } from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { ArrowDownRight, Mail, Check, FileText, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/BrandIcons';
import { MotionReveal } from '@/components/common/MotionReveal';

export const ArchitecturalHero: React.FC = () => {
  const [activePerspective, setActivePerspective] = useState<'production' | 'foundations'>('production');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section aria-label="Engineering Identity & Overview" className="relative pt-6 sm:pt-14 pb-12 sm:pb-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-12">
        
        {/* Top Telemetry Strip */}
        <MotionReveal delay={0.05} yOffset={10}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
              <span className="text-[var(--text-primary)] font-medium tracking-wider">
                {PERSONAL_DATA.systemStatus}
              </span>
              <span>&bull;</span>
              <span>{PERSONAL_DATA.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span>MLOPS &bull; COMP_VIS &bull; AGENTIC_AI</span>
            </div>
          </div>
        </MotionReveal>

        {/* Asymmetric Monolithic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Hero Narrative (7 cols) */}
          <MotionReveal delay={0.1} yOffset={25} className="lg:col-span-7 space-y-6">
            
            {/* Monumental Headline */}
            <div className="space-y-2">
              <div className="font-mono text-xs tracking-widest text-[var(--signal-amber)] uppercase font-semibold">
                SYSTEM ARCHITECT // MACHINE LEARNING
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[0.98]">
                GOURAV <br />
                <span className="text-[var(--text-muted)]">GULIA</span>
              </h1>
            </div>

            {/* Razor-Sharp Minimalist Stance */}
            <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
              Designing production <strong className="text-[var(--text-primary)] font-semibold">MLOps pipelines</strong>, sub-second <strong className="text-[var(--text-primary)] font-semibold">biometric vector search</strong>, and stateful <strong className="text-[var(--text-primary)] font-semibold">multi-agent architectures</strong>.
            </p>

            {/* Minimal Domain Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {['Computer Vision Forensics', 'Airflow & DVC MLOps', 'HNSW VectorDB', 'LangGraph Multi-Agent'].map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md glass-panel-subtle text-[var(--text-secondary)]"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Direct Action Cluster */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#flagships"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-canvas)] font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                <span>Flagship Systems</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg glass-panel text-[var(--text-primary)] text-xs sm:text-sm font-medium hover:border-[var(--accent-primary)] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Resume PDF</span>
              </a>

              <div className="flex items-center space-x-1 glass-panel p-1 rounded-lg">
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-surface)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-surface)] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopy}
                  aria-label="Copy direct email address"
                  className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-surface)] transition-colors"
                  title={copiedEmail ? 'Copied!' : 'Copy email'}
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[var(--signal-emerald)]" /> : <Mail className="w-4 h-4 text-[var(--text-muted)]" />}
                </button>
              </div>
            </div>
          </MotionReveal>

          {/* Right Architectural Posture Card (Frosted Glass Panel) */}
          <MotionReveal delay={0.2} yOffset={25} className="lg:col-span-5 glass-panel rounded-xl p-5 sm:p-6 space-y-4">
            
            {/* Switcher Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div className="font-mono text-xs font-semibold text-[var(--text-primary)] flex items-center space-x-2">
                <Activity className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>ARCHITECTURAL POSTURE</span>
              </div>

              {/* Selector Tabs */}
              <div className="flex items-center p-0.5 glass-panel-subtle rounded-md font-mono text-[10px]">
                <button
                  onClick={() => setActivePerspective('production')}
                  className={`px-2 py-1 rounded transition-colors ${
                    activePerspective === 'production'
                      ? 'bg-[var(--accent-primary)] text-white font-semibold shadow-xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  PRODUCTION
                </button>
                <button
                  onClick={() => setActivePerspective('foundations')}
                  className={`px-2 py-1 rounded transition-colors ${
                    activePerspective === 'foundations'
                      ? 'bg-[var(--accent-primary)] text-white font-semibold shadow-xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  FOUNDATION
                </button>
              </div>
            </div>

            {/* Posture Nodes */}
            {activePerspective === 'production' ? (
              <div className="space-y-3 font-mono text-xs animate-in fade-in duration-200">
                <div className="p-3 glass-panel-subtle rounded-lg space-y-1">
                  <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                    <span>HNSW Vector Search</span>
                    <span className="text-[var(--accent-primary)]">&lt; 1.0s / 1M</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-sans">
                    Sub-second logarithmic similarity retrieval across 512D deep facial embeddings at EY.
                  </div>
                </div>

                <div className="p-3 glass-panel-subtle rounded-lg space-y-1">
                  <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                    <span>Pipeline Lineage</span>
                    <span className="text-[var(--signal-amber)]">DVC + MLflow</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-sans">
                    Deterministic data splitting, artifact lock hashes, and complete experiment traceability.
                  </div>
                </div>

                <div className="p-3 glass-panel-subtle rounded-lg space-y-1">
                  <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                    <span>Inference Serving</span>
                    <span className="text-[var(--signal-emerald)]">P99 &lt; 45ms</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-sans">
                    Asynchronous FastAPI microservices, multiprocessing batch workers, and Dockerized deployments.
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 font-mono text-xs animate-in fade-in duration-200">
                <div className="p-3 glass-panel-subtle rounded-lg space-y-1">
                  <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                    <span>Metric Space</span>
                    <span className="text-[var(--signal-cyan)]">512D Hypersphere</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-sans">
                    L2-normalized Euclidean embedding projections minimizing inter-class confusion.
                  </div>
                </div>

                <div className="p-3 glass-panel-subtle rounded-lg space-y-1">
                  <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                    <span>Threshold Calibration</span>
                    <span className="text-[var(--accent-primary)]">FAR &lt; 0.2%</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-sans">
                    ROC-AUC curve optimization and Lower Confidence Bound decision boundaries.
                  </div>
                </div>

                <div className="p-3 glass-panel-subtle rounded-lg space-y-1">
                  <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                    <span>Agent Consensus</span>
                    <span className="text-[var(--signal-amber)]">Directed Graph</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-sans">
                    Cyclic validation loops and citation scorecards eliminating LLM hallucination.
                  </div>
                </div>
              </div>
            )}

            {/* Invariant Footer */}
            <div className="pt-2 border-t border-[var(--border-subtle)] font-mono text-[10px] text-[var(--text-muted)] flex items-center justify-between">
              <span>INVARIANT: DETERMINISTIC_REPRODUCIBILITY</span>
              <span className="text-[var(--signal-emerald)] font-semibold">VERIFIED</span>
            </div>
          </MotionReveal>
        </div>

        {/* Minimalist Verified Metrics Strip */}
        <MotionReveal delay={0.25} yOffset={20}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            {PERSONAL_DATA.coreMetrics.slice(0, 4).map((m, i) => (
              <div key={i} className="p-3.5 glass-panel-subtle rounded-lg space-y-0.5">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{m.label}</div>
                <div className="text-sm sm:text-base font-bold text-[var(--text-primary)]">{m.value}</div>
                <div className="text-[11px] text-[var(--text-secondary)] font-sans truncate">{m.detail}</div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
