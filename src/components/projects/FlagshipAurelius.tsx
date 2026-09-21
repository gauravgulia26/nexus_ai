'use client';

import React from 'react';
import { AURELIUS_CASE_STUDY } from '@/data/portfolioData';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/common/BrandIcons';
import { MotionReveal } from '@/components/common/MotionReveal';

export const FlagshipAurelius: React.FC = () => {
  return (
    <MotionReveal delay={0.2} yOffset={30}>
      <article
        id="case-study-aurelius"
        className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg"
      >
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)] font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-md bg-[var(--signal-cyan-tint)] text-[var(--signal-cyan)] font-semibold uppercase">
              FLAGSHIP 03 // AGENTIC AI & LLMOPS
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="text-[var(--text-secondary)]">{AURELIUS_CASE_STUDY.period}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[var(--signal-emerald)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
            <span>LIVE AGENTIC CLUSTER</span>
          </div>
        </div>

        {/* Title, 1-Line Description & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-3">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                {AURELIUS_CASE_STUDY.title}
              </h3>
              <p className="text-sm font-medium text-[var(--signal-cyan)] pt-0.5">
                {AURELIUS_CASE_STUDY.tagline}
              </p>
            </div>

            {/* 1-Line Description */}
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {AURELIUS_CASE_STUDY.summary}
            </p>

            {/* 1-2 Technical Highlights */}
            <div className="space-y-1.5 pt-1">
              {AURELIUS_CASE_STUDY.engineeringHighlights.map((hl, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[var(--text-primary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--signal-cyan)] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Direct Links */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
              <a
                href={AURELIUS_CASE_STUDY.links.find((l) => l.type === 'github')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 glass-panel-subtle hover:border-[var(--signal-cyan)] rounded-lg text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <a
                href={AURELIUS_CASE_STUDY.links.find((l) => l.type === 'demo')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Streamlit UI</span>
              </a>
            </div>
          </div>

          {/* Key Metrics Chips */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 font-mono">
            {AURELIUS_CASE_STUDY.metrics.map((m, idx) => (
              <div key={idx} className="p-3 glass-panel-subtle rounded-xl space-y-0.5">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">{m.label}</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-5 Key Technologies */}
        <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
          <span className="text-[var(--text-muted)] mr-2 font-medium">CORE TECH:</span>
          {AURELIUS_CASE_STUDY.technologies.map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-md glass-panel-subtle text-[var(--text-secondary)]">
              {t}
            </span>
          ))}
        </div>
      </article>
    </MotionReveal>
  );
};
