'use client';

import React, { useState } from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { ArrowDownRight, Mail, Check, FileText, ShieldCheck, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/BrandIcons';
import { MotionReveal } from '@/components/common/MotionReveal';

export const ArchitecturalHero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      aria-label="Overview & Positioning"
      className="relative pt-6 sm:pt-14 pb-12 sm:pb-20 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-12">
        {/* Top Status Strip */}
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
              <span>MLOPS &bull; VECTOR SEARCH &bull; GENAI SYSTEMS</span>
            </div>
          </div>
        </MotionReveal>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative (7 cols) */}
          <MotionReveal delay={0.1} yOffset={25} className="lg:col-span-7 space-y-6">
            {/* Tag & Name */}
            <div className="space-y-4 sm:space-y-5">
              <div className="font-mono text-xs tracking-[0.2em] text-[var(--signal-amber)] uppercase font-semibold pb-0.5">
                MACHINE LEARNING ENGINEER
              </div>
              <h1 className="font-serif italic text-6xl sm:text-8xl lg:text-9xl tracking-tight text-[var(--text-primary)] leading-[0.92] font-semibold">
                Gourav <br />
                <span className="text-[var(--text-muted)] font-medium">Gulia</span>
              </h1>
            </div>

            {/* Concise Positioning Statement */}
            <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
              Machine Learning Engineer building{' '}
              <strong className="text-[var(--text-primary)] font-semibold">
                production-grade ML, GenAI, and data systems
              </strong>
              .
            </p>

            {/* Core Focus Badges with Restrained Luxury Styling */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {['Production MLOps', 'Biometric Vector Search', 'GenAI & LangGraph', 'Low-Latency Inference'].map(
                (spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md subtle-tag text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium tracking-tight text-[11px]"
                  >
                    {spec}
                  </span>
                )
              )}
            </div>

            {/* Primary Action Buttons with Subtle Tactile Feedback */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="embossed-primary-button inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm tracking-wide"
              >
                <span>Work Experience</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="embossed-button inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg text-[var(--text-primary)] text-xs sm:text-sm font-medium"
              >
                <span>Featured Projects</span>
              </a>

              <a
                href={PERSONAL_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="embossed-button inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg text-[var(--text-primary)] text-xs sm:text-sm font-medium"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Resume (PDF)</span>
              </a>

              <div className="flex items-center space-x-1 glass-panel-subtle p-1 rounded-lg">
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopy}
                  aria-label="Copy direct email address"
                  className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  title={copiedEmail ? 'Copied!' : 'Copy email'}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[var(--signal-emerald)]" />
                  ) : (
                    <Mail className="w-4 h-4 text-[var(--text-muted)]" />
                  )}
                </button>
              </div>
            </div>
          </MotionReveal>

          {/* Right Highlights Card (Multi-Stop Gradient Glass Panel) */}
          <MotionReveal delay={0.2} yOffset={25} className="lg:col-span-5 glass-panel-elevated rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl border border-[var(--glass-border)]">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] font-mono text-xs">
              <div className="font-semibold text-[var(--text-primary)] flex items-center space-x-2">
                <Briefcase className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Professional Highlights</span>
              </div>
              <span className="embossed-badge px-2 py-0.5 rounded text-[10px] text-[var(--signal-emerald)] font-semibold">EY &bull; PUBLIC SECTOR</span>
            </div>

            {/* Highlight Items with Embossed Inset Wells */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 embossed-inset rounded-xl space-y-1">
                <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                  <span>EY (Ernst &amp; Young)</span>
                  <span className="text-[var(--accent-primary)] font-bold">Sr. Analyst</span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] font-sans">
                  Built production face verification and forensic ML pipelines for government clients (SSC, HSSC, NHA).
                </div>
              </div>

              <div className="p-3 embossed-inset rounded-xl space-y-1">
                <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                  <span>Vector Search at Scale</span>
                  <span className="text-[var(--signal-emerald)] font-bold">1M+ 512D Vectors</span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] font-sans">
                  Sub-second similarity search using HNSW approximate nearest neighbor indexing in VectorDB.
                </div>
              </div>

              <div className="p-3 embossed-inset rounded-xl space-y-1">
                <div className="flex justify-between text-[var(--text-primary)] font-semibold">
                  <span>MLOps &amp; Serving</span>
                  <span className="text-[var(--signal-amber)] font-bold">P99 &lt; 45ms</span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] font-sans">
                  FastAPI microservices, multiprocessing batch workers, Airflow orchestration, and DVC data versioning.
                </div>
              </div>
            </div>

            {/* Bottom Proof */}
            <div className="pt-2 border-t border-[var(--border-subtle)] font-mono text-[10px] text-[var(--text-muted)] flex items-center justify-between">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--signal-emerald)]" />
                <span>Reproducible &bull; DVC &amp; MLflow</span>
              </span>
              <span className="text-[var(--text-primary)] font-semibold">Delhi-NCR, India</span>
            </div>
          </MotionReveal>
        </div>

        {/* Minimal Metrics Strip with Embossed Tactile Surface */}
        <MotionReveal delay={0.25} yOffset={20}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            {PERSONAL_DATA.coreMetrics.map((m, i) => (
              <div key={i} className="p-3.5 glass-panel-elevated rounded-xl space-y-1 shadow-sm border border-[var(--glass-border)] hover:border-[var(--accent-primary)]/50 transition-all">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{m.label}</div>
                <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] truncate">{m.value}</div>
                <div className="text-[11px] text-[var(--text-secondary)] font-sans truncate">{m.detail}</div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
