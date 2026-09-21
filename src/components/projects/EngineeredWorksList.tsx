'use client';

import React from 'react';
import { OTHER_PROJECTS, RESEARCH_WORK } from '@/data/portfolioData';
import { ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const EngineeredWorksList: React.FC = () => {
  return (
    <div className="space-y-6 pt-4">
      <MotionReveal delay={0.1} yOffset={20}>
        <div className="border-b border-[var(--border-subtle)] pb-3">
          <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-wider font-semibold">
            ADDITIONAL SYSTEMS & PEER-REVIEWED SCIENCE
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Specialized Engineering & Research
          </h3>
        </div>
      </MotionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* CIP Platform */}
        <MotionReveal delay={0.15} yOffset={25}>
          <div className="glass-panel rounded-xl p-5 space-y-3.5 flex flex-col justify-between h-full shadow-md">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                <span className="px-1.5 py-0.5 rounded bg-[var(--accent-tint)] text-[var(--accent-primary)] font-semibold">
                  SYSTEM // 01
                </span>
                <span>{OTHER_PROJECTS[0].period}</span>
              </div>
              <h4 className="font-display text-base font-bold text-[var(--text-primary)]">
                {OTHER_PROJECTS[0].title}
              </h4>
              <div className="font-mono text-xs text-[var(--accent-primary)] font-medium">
                {OTHER_PROJECTS[0].category}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {OTHER_PROJECTS[0].summary}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                {OTHER_PROJECTS[0].technologies.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 rounded glass-panel-subtle text-[var(--text-secondary)]">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#experience"
                className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-[var(--accent-primary)] hover:underline shrink-0"
              >
                <span>EY Role</span>
                <ShieldCheck className="w-3 h-3" />
              </a>
            </div>
          </div>
        </MotionReveal>

        {/* Logpunch PyPI Package */}
        <MotionReveal delay={0.2} yOffset={25}>
          <div className="glass-panel rounded-xl p-5 space-y-3.5 flex flex-col justify-between h-full shadow-md">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                <span className="px-1.5 py-0.5 rounded bg-[var(--signal-emerald-tint)] text-[var(--signal-emerald)] font-semibold">
                  OPEN SOURCE // 02
                </span>
                <span className="text-[var(--signal-emerald)] font-semibold">PYPI PUBLISHED</span>
              </div>
              <h4 className="font-display text-base font-bold text-[var(--text-primary)]">
                {OTHER_PROJECTS[1].title}
              </h4>
              <div className="font-mono text-xs text-[var(--signal-emerald)] font-semibold">
                pip install logpunch
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {OTHER_PROJECTS[1].summary}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                {OTHER_PROJECTS[1].technologies.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 rounded glass-panel-subtle text-[var(--text-secondary)]">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={OTHER_PROJECTS[1].links?.[0]?.url || 'https://pypi.org/project/logpunch/'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-[var(--signal-emerald)] hover:underline shrink-0"
              >
                <span>PyPI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </MotionReveal>

        {/* IEEE Peer-Reviewed Publication */}
        <MotionReveal delay={0.25} yOffset={25}>
          <div className="glass-panel rounded-xl p-5 space-y-3.5 flex flex-col justify-between h-full shadow-md">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                <span className="px-1.5 py-0.5 rounded bg-[var(--signal-cyan-tint)] text-[var(--signal-cyan)] font-semibold">
                  RESEARCH // 03
                </span>
                <span>IEEE XPLORE</span>
              </div>
              <h4 className="font-display text-base font-bold text-[var(--text-primary)]">
                {RESEARCH_WORK.title}
              </h4>
              <div className="font-mono text-xs text-[var(--signal-cyan)] font-medium truncate">
                DOI: {RESEARCH_WORK.doi}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {RESEARCH_WORK.abstract}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono text-[10px] text-[var(--text-muted)]">Up to 95% Accuracy</span>
              <a
                href={RESEARCH_WORK.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-[var(--accent-primary)] hover:underline"
              >
                <span>View IEEE</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
};
