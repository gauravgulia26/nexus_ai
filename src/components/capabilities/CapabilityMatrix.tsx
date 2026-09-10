'use client';

import React, { useState } from 'react';
import { SKILL_DOMAINS } from '@/data/portfolioData';
import { Cpu, Eye, GitBranch, Bot, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const CapabilityMatrix: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState(SKILL_DOMAINS[0].id);
  const activeDomain = SKILL_DOMAINS.find((d) => d.id === selectedDomainId) || SKILL_DOMAINS[0];

  const domainIcons: Record<string, React.ElementType> = {
    'ml-core': Cpu,
    'cv-biometrics': Eye,
    'mlops-infra': GitBranch,
    'agentic-ai': Bot,
    'vector-data': Database,
    'developer-tooling': Terminal,
  };

  return (
    <section id="capabilities" aria-label="Engineered Capabilities & Production Tooling" className="py-12 sm:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Section Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-wider font-semibold">
              CAPABILITIES // DOMAIN ARCHITECTURE
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Production Capabilities & Core Tooling
            </h2>
          </div>
        </MotionReveal>

        {/* 6 Domain Switcher Strip */}
        <MotionReveal delay={0.15} yOffset={25}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono text-xs">
            {SKILL_DOMAINS.map((domain) => {
              const Icon = domainIcons[domain.id] || Cpu;
              const isSelected = domain.id === selectedDomainId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomainId(domain.id)}
                  className={`p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-white shadow-md'
                      : 'glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1 text-[10px] opacity-80">
                    <span>{domain.code}</span>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-bold text-xs truncate">
                    {domain.title.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </MotionReveal>

        {/* Active Domain Frosted Card */}
        <MotionReveal delay={0.2} yOffset={25}>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <div className="font-mono text-xs text-[var(--accent-primary)] font-semibold uppercase">
                  {activeDomain.code} {'//'} DOMAIN PROFILE
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  {activeDomain.title}
                </h3>
              </div>
              
              <div className="font-mono text-xs text-[var(--signal-emerald)] flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>PRODUCTION TESTED</span>
              </div>
            </div>

            {/* Minimal Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeDomain.engineeringCapabilities.map((cap, i) => (
                <div
                  key={i}
                  className="p-4 glass-panel-subtle rounded-xl space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="font-bold text-sm text-[var(--text-primary)]">
                      {cap.name}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {cap.context}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[var(--border-subtle)] font-mono text-[10px] text-[var(--accent-primary)] flex items-center space-x-1">
                    <span>PROOF:</span>
                    <span className="font-semibold text-[var(--text-primary)] truncate">{cap.evidence}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Production Stack Badges */}
            <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 font-mono text-xs">
              <span className="text-[var(--text-muted)] text-[11px] mr-2">STACK:</span>
              {activeDomain.productionStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md glass-panel-subtle text-[var(--text-primary)] font-medium text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
