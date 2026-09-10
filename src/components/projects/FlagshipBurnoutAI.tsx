'use client';

import React, { useState } from 'react';
import { BURNOUT_AI_CASE_STUDY } from '@/data/portfolioData';
import { ExternalLink, Container, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/common/BrandIcons';
import { MotionReveal } from '@/components/common/MotionReveal';

export const FlagshipBurnoutAI: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = BURNOUT_AI_CASE_STUDY.architectureStages[activeStageIndex];

  return (
    <MotionReveal delay={0.1} yOffset={30}>
      <article
        id="case-study-burnout"
        className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg"
      >
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-md bg-[var(--accent-tint)] text-[var(--accent-primary)] font-semibold uppercase">
              FLAGSHIP 01 // MLOPS
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="text-[var(--text-secondary)]">{BURNOUT_AI_CASE_STUDY.period}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[var(--signal-emerald)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
            <span>DEPLOYED ON DOCKER HUB</span>
          </div>
        </div>

        {/* Title & Core Impact Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {BURNOUT_AI_CASE_STUDY.title}
            </h3>
            <p className="text-sm font-medium text-[var(--accent-primary)]">
              {BURNOUT_AI_CASE_STUDY.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Complete artifact-driven production pipeline: from automated data validation to containerized FastAPI serving, governed by deterministic DVC data hashes and MLflow experiment tracking.
            </p>

            {/* Direct Deployment Links */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
              <a
                href={BURNOUT_AI_CASE_STUDY.links.find((l) => l.type === 'github')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 glass-panel-subtle hover:border-[var(--accent-primary)] rounded-lg text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span>GitHub</span>
              </a>
              <a
                href={BURNOUT_AI_CASE_STUDY.links.find((l) => l.type === 'demo')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Streamlit App</span>
              </a>
              <a
                href={BURNOUT_AI_CASE_STUDY.links.find((l) => l.type === 'docker')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 glass-panel-subtle hover:border-[var(--accent-primary)] rounded-lg text-[var(--text-primary)] transition-colors"
              >
                <Container className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Docker Hub</span>
              </a>
              <a
                href={BURNOUT_AI_CASE_STUDY.links.find((l) => l.type === 'api')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 glass-panel-subtle hover:border-[var(--accent-primary)] rounded-lg text-[var(--text-primary)] transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[var(--signal-emerald)]" />
                <span>FastAPI Docs</span>
              </a>
            </div>
          </div>

          {/* Key Metrics Chips */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 font-mono">
            {BURNOUT_AI_CASE_STUDY.metrics.map((m, idx) => (
              <div key={idx} className="p-3 glass-panel-subtle rounded-xl space-y-0.5">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">{m.label}</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 9-Stage Pipeline Timeline */}
        <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-[var(--text-primary)] font-semibold flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>THE 9-STAGE PRODUCTION LIFECYCLE</span>
            </span>
            <span className="text-[var(--text-muted)] text-[11px]">
              CLICK STAGE TO INSPECT INVARIANTS
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5 font-mono text-xs">
            {BURNOUT_AI_CASE_STUDY.architectureStages.map((st, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={st.stage}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-2 rounded-lg text-left transition-all ${
                    isActive
                      ? 'bg-[var(--accent-primary)] text-white shadow-md'
                      : 'glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="text-[10px] opacity-75">{st.stage}</div>
                  <div className="font-semibold text-[11px] truncate">{st.step}</div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail */}
          <div className="glass-panel-subtle rounded-xl p-4 space-y-2 animate-in fade-in duration-150">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <span className="text-[var(--accent-primary)] font-semibold">
                STAGE {currentStage.stage}: {currentStage.step} ({currentStage.tech})
              </span>
              <span className="text-[var(--signal-amber)] font-medium text-[11px]">
                CONTRACT: {currentStage.contract}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {currentStage.detail}
            </p>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 font-mono text-[10px]">
          {BURNOUT_AI_CASE_STUDY.technologies.map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-md glass-panel-subtle text-[var(--text-secondary)]">
              {t}
            </span>
          ))}
        </div>
      </article>
    </MotionReveal>
  );
};
