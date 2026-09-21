'use client';

import React from 'react';
import { INSPECTOR_CV_CASE_STUDY } from '@/data/portfolioData';
import { CheckCircle2, Shield } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const FlagshipInspectorCV: React.FC = () => {
  return (
    <MotionReveal delay={0.25} yOffset={30}>
      <article
        id="case-study-inspector"
        className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg"
      >
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)] font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-md bg-[var(--signal-emerald-tint)] text-[var(--signal-emerald)] font-semibold uppercase">
              FLAGSHIP 04 // COMPUTER VISION & BIOMETRICS
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="text-[var(--text-secondary)]">{INSPECTOR_CV_CASE_STUDY.period}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[var(--signal-emerald)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--signal-emerald)]" />
            <span>DEPLOYED AT EY (INTERNAL .WHL)</span>
          </div>
        </div>

        {/* Title, 1-Line Description & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-3">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                {INSPECTOR_CV_CASE_STUDY.title}
              </h3>
              <p className="text-sm font-medium text-[var(--signal-emerald)] pt-0.5">
                {INSPECTOR_CV_CASE_STUDY.tagline}
              </p>
            </div>

            {/* 1-Line Description */}
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {INSPECTOR_CV_CASE_STUDY.summary}
            </p>

            {/* 1-2 Technical Highlights */}
            <div className="space-y-1.5 pt-1">
              {INSPECTOR_CV_CASE_STUDY.engineeringHighlights.map((hl, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[var(--text-primary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--signal-emerald)] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Direct Links */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
              <a
                href="#experience"
                className="flex items-center space-x-1.5 px-3 py-1.5 glass-panel-subtle hover:border-[var(--signal-emerald)] rounded-lg text-[var(--text-primary)] transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-[var(--signal-emerald)]" />
                <span>View EY Role Details</span>
              </a>
            </div>
          </div>

          {/* Key Metrics Chips */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 font-mono">
            {INSPECTOR_CV_CASE_STUDY.metrics.map((m, idx) => (
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
          {INSPECTOR_CV_CASE_STUDY.technologies.map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-md glass-panel-subtle text-[var(--text-secondary)]">
              {t}
            </span>
          ))}
        </div>
      </article>
    </MotionReveal>
  );
};
