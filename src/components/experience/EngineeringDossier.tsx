'use client';

import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, CheckCircle2, MapPin } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const EngineeringDossier: React.FC = () => {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const currentExp = EXPERIENCES[activeExpIndex];

  return (
    <section id="experience" aria-label="Professional Track Record & Education" className="py-12 sm:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Section Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-wider font-semibold">
              TRACK RECORD // ENTERPRISE IMPACT
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Engineering Experience & Systems Shipped
            </h2>
          </div>
        </MotionReveal>

        {/* Asymmetric Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Organization Switcher Tabs (4 cols) */}
          <MotionReveal delay={0.15} yOffset={25} className="lg:col-span-4 space-y-3">
            <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
              ORGANIZATIONS
            </div>

            {EXPERIENCES.map((exp, idx) => {
              const isActive = idx === activeExpIndex;
              return (
                <button
                  key={exp.company}
                  onClick={() => setActiveExpIndex(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    isActive
                      ? 'glass-panel border-[var(--accent-primary)] shadow-md'
                      : 'glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] pb-1">
                    <span>{exp.period}</span>
                    <span className="uppercase">{exp.type}</span>
                  </div>
                  <div className="font-display font-bold text-base text-[var(--text-primary)]">
                    {exp.company}
                  </div>
                  <div className="text-xs text-[var(--accent-primary)] font-medium truncate pt-0.5">
                    {exp.role}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] pt-1 flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}

            {/* Academic Credential Card */}
            <div className="p-4 glass-panel rounded-xl space-y-3 pt-4 shadow-sm">
              <div className="font-mono text-xs font-semibold text-[var(--text-primary)] flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>ACADEMIC FOUNDATIONS</span>
              </div>

              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-0.5 border-b border-[var(--border-subtle)] last:border-0 pb-2 last:pb-0">
                  <div className="font-semibold text-[var(--text-primary)]">{edu.degree}</div>
                  <div className="text-[var(--accent-primary)] font-mono text-[11px]">{edu.institution}</div>
                  <div className="text-[var(--text-muted)] text-[10px]">{edu.period} &bull; {edu.location}</div>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Active Experience Narrative (8 cols) */}
          <MotionReveal delay={0.2} yOffset={25} className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
            
            {/* Header */}
            <div className="space-y-1.5 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[var(--accent-primary)]">
                <span className="font-bold">{currentExp.company.toUpperCase()}</span>
                <span className="text-[var(--text-muted)]">{currentExp.period}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {currentExp.role}
              </h3>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                {currentExp.headline}
              </p>
            </div>

            {/* Systems Shipped (Proof) */}
            <div className="space-y-2.5">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                Core Systems Engineered:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                {currentExp.systemsShipped.map((sys, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 glass-panel-subtle rounded-xl space-y-1"
                  >
                    <div className="font-bold text-xs text-[var(--text-primary)]">
                      {sys.system}
                    </div>
                    <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                      {sys.impact}
                    </p>
                    <div className="pt-1 flex flex-wrap gap-1 text-[10px] text-[var(--accent-primary)]">
                      {sys.stack.map((st, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded glass-panel">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-2 pt-1">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                Key Contributions:
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                {currentExp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
              <span className="text-[var(--text-muted)] mr-2">TECH:</span>
              {currentExp.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md glass-panel-subtle text-[var(--text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
