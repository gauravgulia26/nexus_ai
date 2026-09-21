'use client';

import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION_DATA, PERSONAL_DATA } from '@/data/portfolioData';
import { GraduationCap, CheckCircle2, MapPin, Sparkles, Building2 } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const EngineeringDossier: React.FC = () => {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const currentExp = EXPERIENCES[activeExpIndex];

  return (
    <section
      id="experience"
      aria-label="Work Experience & Education"
      className="py-12 sm:py-20 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Section Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-[0.2em] font-semibold">
              EXPERIENCE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Work Experience
            </h2>
            <p className="text-sm text-[var(--text-secondary)] font-normal">
              Professional history building enterprise ML systems and data pipelines.
            </p>
          </div>
        </MotionReveal>

        {/* 3-4 Line Professional Summary */}
        <MotionReveal delay={0.15} yOffset={20}>
          <div className="glass-panel-elevated rounded-2xl p-5 sm:p-6 space-y-2 border-l-4 border-l-[var(--accent-primary)] shadow-md">
            <div className="font-mono text-xs text-[var(--accent-primary)] font-semibold uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Summary</span>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
              {PERSONAL_DATA.summary}
            </p>
          </div>
        </MotionReveal>

        {/* Asymmetric Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Company Switcher Tabs & Education (4 cols) */}
          <MotionReveal delay={0.2} yOffset={25} className="lg:col-span-4 space-y-3">
            <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-widest font-medium">
              Companies
            </div>

            {EXPERIENCES.map((exp, idx) => {
              const isActive = idx === activeExpIndex;
              return (
                <button
                  key={exp.company}
                  onClick={() => setActiveExpIndex(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    isActive
                      ? 'embossed-button border-[var(--accent-primary)] shadow-md ring-1 ring-[var(--accent-primary)]/40'
                      : 'glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--glass-border-highlight)]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] pb-1">
                    <span className="font-medium tracking-wide">{exp.period}</span>
                    <span className="uppercase tracking-wider font-semibold">{exp.type}</span>
                  </div>
                  <div className="font-display font-bold text-base text-[var(--text-primary)] flex items-center space-x-1.5">
                    <Building2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="text-xs text-[var(--accent-primary)] font-semibold tracking-wide truncate pt-0.5 font-mono">
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
            <div className="p-4 glass-panel rounded-xl space-y-3 pt-4 shadow-sm border border-[var(--glass-border)]">
              <div className="font-mono text-xs font-semibold text-[var(--text-primary)] flex items-center space-x-2 border-b border-[var(--border-subtle)] pb-2">
                <GraduationCap className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Education</span>
              </div>

              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="text-xs space-y-0.5 border-b border-[var(--border-subtle)] last:border-0 pb-2 last:pb-0"
                >
                  <div className="font-semibold text-[var(--text-primary)] font-display">{edu.degree}</div>
                  <div className="text-[var(--accent-primary)] font-mono text-[11px] font-medium">{edu.institution}</div>
                  <div className="text-[var(--text-muted)] text-[10px] font-mono">
                    {edu.period} &bull; {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Active Experience Narrative (8 cols) */}
          <MotionReveal
            delay={0.25}
            yOffset={25}
            className="lg:col-span-8 glass-panel-elevated rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg border border-[var(--glass-border)]"
          >
            {/* Role Header */}
            <div className="space-y-1.5 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[var(--accent-primary)]">
                <span className="font-bold tracking-wide">{currentExp.company}</span>
                <span className="text-[var(--text-muted)] tracking-wider">{currentExp.period}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {currentExp.role}
              </h3>
              <p className="text-sm font-medium text-[var(--text-secondary)] italic">
                {currentExp.headline}
              </p>
            </div>

            {/* Key Contributions & High-Impact Bullets */}
            <div className="space-y-3">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                Key Accomplishments:
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                {currentExp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics Chips with Embossed Inset Wells */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 font-mono">
              {currentExp.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 embossed-inset rounded-lg space-y-0.5">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{m.label}</div>
                  <div className="text-xs font-bold text-[var(--text-primary)] truncate">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Tech Tags with Restrained Subtle Tag Styling */}
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
              <span className="text-[var(--text-muted)] mr-2 font-semibold tracking-wider">STACK:</span>
              {currentExp.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md subtle-tag text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium"
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
