'use client';

import React, { useState } from 'react';
import { AURELIUS_CASE_STUDY } from '@/data/portfolioData';
import { ExternalLink, Network } from 'lucide-react';
import { GithubIcon } from '@/components/common/BrandIcons';
import { MotionReveal } from '@/components/common/MotionReveal';

export const FlagshipAurelius: React.FC = () => {
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    { name: 'Lead Orchestrator', role: 'Query Decomposition', desc: 'Deconstructs inquiries into atomic dependency paths and manages state.' },
    { name: 'Evidence Researcher', role: 'Parallel Scraping', desc: 'Executes concurrent multi-source web queries with sanitization fallbacks.' },
    { name: 'Synthesizer', role: 'Citation Cross-Check', desc: 'Triangulates evidence across citations to eliminate ungrounded claims.' },
    { name: 'Technical Writer', role: 'Dossier Formulation', desc: 'Drafts structured technical reports with verified inline citations.' },
    { name: 'Adversarial Reviewer', role: 'Hallucination Gate', desc: 'Evaluates citation scorecards; triggers self-correction if quality drops.' },
  ];

  return (
    <MotionReveal delay={0.2} yOffset={30}>
      <article
        id="case-study-aurelius"
        className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg"
      >
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-md bg-[var(--signal-amber-tint)] text-[var(--signal-amber)] font-semibold uppercase">
              FLAGSHIP 03 // AGENTIC AI & LLMOPS
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="text-[var(--text-secondary)]">{AURELIUS_CASE_STUDY.period}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[var(--signal-emerald)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
            <span>LIVE AGENTIC SYSTEM</span>
          </div>
        </div>

        {/* Title & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {AURELIUS_CASE_STUDY.title}
            </h3>
            <p className="text-sm font-medium text-[var(--signal-amber)]">
              {AURELIUS_CASE_STUDY.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Autonomous multi-agent research cluster orchestrated via LangGraph. Coordinates 5 specialized personas with LangSmith distributed tracing, Groq LPU latency tracking, and a strict zero-hallucination guarantee.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
              <a
                href={AURELIUS_CASE_STUDY.links.find((l) => l.type === 'github')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 glass-panel-subtle hover:border-[var(--signal-amber)] rounded-lg text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <a
                href={AURELIUS_CASE_STUDY.links.find((l) => l.type === 'demo')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-[var(--signal-amber)] hover:opacity-90 text-white rounded-lg transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Streamlit UI</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 font-mono">
            {AURELIUS_CASE_STUDY.metrics.map((m, idx) => (
              <div key={idx} className="p-3 glass-panel-subtle rounded-xl space-y-0.5">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">{m.label}</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Persona Stateful Graph Explorer */}
        <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-[var(--text-primary)] font-semibold flex items-center space-x-1.5">
              <Network className="w-3.5 h-3.5 text-[var(--signal-amber)]" />
              <span>THE 5-PERSONA LANGGRAPH TOPOLOGY</span>
            </span>
            <span className="text-[var(--text-muted)] text-[11px]">
              LANGSMITH TRACED
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
            {personas.map((p, idx) => {
              const isSelected = idx === activePersona;
              return (
                <button
                  key={p.name}
                  onClick={() => setActivePersona(idx)}
                  className={`p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-[var(--signal-amber-tint)] border border-[var(--signal-amber)] text-[var(--text-primary)] shadow-md'
                      : 'glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="text-[10px] text-[var(--text-muted)]">NODE 0{idx + 1}</div>
                  <div className="font-bold text-xs truncate">{p.name}</div>
                  <div className="text-[10px] text-[var(--text-muted)] truncate">{p.role}</div>
                </button>
              );
            })}
          </div>

          <div className="glass-panel-subtle rounded-xl p-4 space-y-1 animate-in fade-in duration-150">
            <div className="font-mono text-xs text-[var(--signal-amber)] font-semibold">
              NODE 0{activePersona + 1}: {personas[activePersona].name.toUpperCase()}
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {personas[activePersona].desc}
            </p>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 font-mono text-[10px]">
          {AURELIUS_CASE_STUDY.technologies.map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-md glass-panel-subtle text-[var(--text-secondary)]">
              {t}
            </span>
          ))}
        </div>
      </article>
    </MotionReveal>
  );
};
