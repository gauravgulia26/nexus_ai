'use client';

import React from 'react';
import { RESEARCH_WORK } from '@/data/portfolioData';
import { ExternalLink, BookOpen, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const ResearchPublication: React.FC = () => {
  return (
    <section
      id="research"
      aria-label="Research Publication"
      className="py-12 sm:py-20 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Section Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-[0.2em] font-semibold">
              RESEARCH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Research Publication
            </h2>
            <p className="text-sm text-[var(--text-secondary)] font-normal">
              Peer-reviewed machine learning paper published in IEEE Xplore.
            </p>
          </div>
        </MotionReveal>

        {/* Publication Card */}
        <MotionReveal delay={0.15} yOffset={25}>
          <article className="glass-panel-elevated rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-[var(--glass-border)] hover:border-[var(--glass-border-highlight)] transition-all">
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)] font-mono text-xs">
              <div className="flex items-center space-x-2">
                <span className="subtle-tag px-2.5 py-0.5 rounded-md text-[var(--signal-cyan)] font-semibold uppercase tracking-wider text-[11px]">
                  IEEE PEER-REVIEWED
                </span>
                <span className="text-[var(--text-muted)]">&bull;</span>
                <span className="text-[var(--text-secondary)] font-medium">{RESEARCH_WORK.venue}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-[var(--signal-emerald)] font-semibold text-xs tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>INDEXED IN IEEE XPLORE</span>
              </div>
            </div>

            {/* Title, Details, & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-3">
                <div>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-[var(--text-primary)] leading-snug tracking-tight font-normal">
                    {RESEARCH_WORK.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[var(--text-muted)]">
                    <span className="font-medium">{RESEARCH_WORK.authors}</span>
                    <span>&bull;</span>
                    <span className="text-[var(--accent-primary)] font-semibold">DOI: {RESEARCH_WORK.doi}</span>
                  </div>
                </div>

                {/* Abstract / Summary */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {RESEARCH_WORK.abstract}
                </p>

                {/* Key Outcomes */}
                <div className="space-y-1.5 pt-1">
                  {RESEARCH_WORK.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[var(--text-primary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--signal-cyan)] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link with Embossed Primary Button */}
                <div className="pt-2">
                  <a
                    href={RESEARCH_WORK.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="embossed-primary-button inline-flex items-center space-x-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg tracking-wide"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Paper on IEEE Xplore</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              {/* Metrics Grid with Embossed Inset Wells */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-2.5 font-mono">
                {RESEARCH_WORK.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 embossed-inset rounded-xl space-y-0.5">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{m.label}</div>
                    <div className="text-xs font-bold text-[var(--text-primary)] truncate">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies with Subtle Tags */}
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
              <span className="text-[var(--text-muted)] mr-2 font-semibold tracking-wider">METHODOLOGY &amp; STACK:</span>
              {RESEARCH_WORK.technologies.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md subtle-tag text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </MotionReveal>
      </div>
    </section>
  );
};
