'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Cpu, Bot, GitBranch, Database, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const CapabilityMatrix: React.FC = () => {
  const categoryIcons: Record<string, React.ElementType> = {
    'ml-core': Cpu,
    'genai-nlp': Bot,
    'mlops-prod': GitBranch,
    'data-infra': Database,
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-12 sm:py-20 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Section Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-[0.2em] font-semibold">
              SKILLS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Technical Skills
            </h2>
            <p className="text-sm text-[var(--text-secondary)] font-normal">
              Core technologies and frameworks used across production environments.
            </p>
          </div>
        </MotionReveal>

        {/* 4 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || Cpu;
            return (
              <MotionReveal key={cat.id} delay={0.15 + idx * 0.05} yOffset={25}>
                <div className="p-6 glass-panel-elevated rounded-2xl space-y-4 shadow-lg flex flex-col justify-between h-full border border-[var(--glass-border)] hover:border-[var(--glass-border-highlight)] transition-all">
                  <div className="space-y-3">
                    {/* Card Header */}
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                      <div className="flex items-center space-x-2.5">
                        <div className="p-2 rounded-lg glass-panel-subtle text-[var(--accent-primary)]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-tight">
                            {cat.title}
                          </h3>
                          <div className="text-xs text-[var(--text-muted)] font-normal">
                            {cat.description}
                          </div>
                        </div>
                      </div>
                      <span className="subtle-tag px-2 py-0.5 rounded font-mono text-[10px] text-[var(--signal-emerald)] flex items-center space-x-1 font-semibold tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>VERIFIED</span>
                      </span>
                    </div>

                    {/* Scannable Tech Badges with Restrained Subtle Tag Styling */}
                    <div className="pt-1 flex flex-wrap gap-1.5 font-mono text-xs">
                      {cat.skills.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md subtle-tag text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bar in Embossed Inset Wells */}
                  <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5 text-xs">
                    {cat.highlights.map((cap, i) => (
                      <div key={i} className="px-2.5 py-1.5 rounded-lg embossed-inset flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-[var(--text-primary)]">{cap.name}</span>
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">{cap.evidence}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
