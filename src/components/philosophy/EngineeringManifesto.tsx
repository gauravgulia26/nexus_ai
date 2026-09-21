'use client';

import React from 'react';
import { ENGINEERING_PRINCIPLES } from '@/data/portfolioData';
import { MotionReveal } from '@/components/common/MotionReveal';
import { CheckCircle2 } from 'lucide-react';

export const EngineeringManifesto: React.FC = () => {
  return (
    <section
      id="principles"
      aria-label="Engineering Principles"
      className="py-12 sm:py-20 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-[0.2em] font-semibold">
              APPROACH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Engineering Principles
            </h2>
            <p className="text-sm text-[var(--text-secondary)] font-normal">
              Practical engineering standards applied to production machine learning systems.
            </p>
          </div>
        </MotionReveal>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ENGINEERING_PRINCIPLES.map((pillar, idx) => (
            <MotionReveal key={pillar.index} delay={0.15 + idx * 0.05} yOffset={25}>
              <div className="p-6 glass-panel-elevated rounded-2xl space-y-3 flex flex-col justify-between h-full shadow-lg border border-[var(--glass-border)] hover:border-[var(--glass-border-highlight)] transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                    <span className="subtle-tag px-2.5 py-0.5 rounded text-[var(--accent-primary)] font-bold tracking-wider text-[11px]">
                      PRINCIPLE {pillar.index}
                    </span>
                    <span className="subtle-tag px-2 py-0.5 rounded text-[10px] flex items-center space-x-1 text-[var(--signal-emerald)] font-semibold tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>APPLIED IN PRODUCTION</span>
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {pillar.statement}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span className="font-medium">Evidence:</span>
                  <span className="embossed-inset px-2.5 py-0.5 rounded text-[11px] text-[var(--text-primary)] font-medium truncate">
                    {pillar.evidence}
                  </span>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
