'use client';

import React from 'react';
import { PHILOSOPHY_PILLARS } from '@/data/portfolioData';
import { MotionReveal } from '@/components/common/MotionReveal';

export const EngineeringManifesto: React.FC = () => {
  return (
    <section id="philosophy" aria-label="Engineering Philosophy & Technical Standards" className="py-12 sm:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-wider font-semibold">
              PHILOSOPHY // FIRST PRINCIPLES
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Architectural Invariants
            </h2>
          </div>
        </MotionReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <MotionReveal key={pillar.index} delay={0.15 + idx * 0.05} yOffset={25}>
              <div className="p-6 glass-panel rounded-2xl space-y-3 flex flex-col justify-between h-full shadow-md">
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                    <span className="text-[var(--accent-primary)] font-bold">PILLAR {pillar.index}</span>
                    <span className="uppercase text-[10px]">CORE INVARIANT</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {pillar.principle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {pillar.statement}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] p-2.5 glass-panel-subtle rounded-lg font-mono text-[11px] text-[var(--signal-amber)]">
                  <code>{pillar.invariant}</code>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
