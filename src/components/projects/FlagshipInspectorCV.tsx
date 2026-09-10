'use client';

import React, { useState } from 'react';
import { INSPECTOR_CV_CASE_STUDY } from '@/data/portfolioData';
import { Eye, Shield, Cpu, Binary, ScanFace, Database, Sparkles } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const FlagshipInspectorCV: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(3);

  const stages = [
    { id: '01', title: 'Ingest', desc: 'Batch frame reading', icon: ScanFace, detail: 'In-flight parallel batch ingestion across candidate photos and demographic audit logs.' },
    { id: '02', title: 'Quality Gate', desc: 'PSNR & SSIM blur check', icon: Shield, detail: 'Rejection of blurred webcam captures (<28dB PSNR) and Local Binary Pattern morphing detection.' },
    { id: '03', title: 'Landmarks', desc: 'RetinaFace 5-pt align', icon: Eye, detail: 'Spatial affine transformation standardizing facial rotation and tilt to canonical coordinates.' },
    { id: '04', title: '512D Embed', desc: 'FaceNet512 deep metric', icon: Binary, detail: 'L2-normalized 512D Euclidean projection where distance measures identity divergence.' },
    { id: '05', title: 'HNSW Graph', desc: 'VectorDB O(log N)', icon: Database, detail: 'Hierarchical Navigable Small World search in Milvus/FAISS delivering sub-second queries over 1M+ vectors.' },
    { id: '06', title: 'Fusion', desc: 'Jaro & ROC threshold', icon: Sparkles, detail: 'Multimodal fusion combining cosine distance with phonetic name matching calibrated to <0.2% FAR.' },
    { id: '07', title: 'Wheel SDK', desc: 'Modular .whl package', icon: Cpu, detail: 'Enterprise-wide reusable Python package with Dependency Injection for automated audit pipelines.' },
  ];

  return (
    <MotionReveal delay={0.15} yOffset={30}>
      <article
        id="case-study-inspector"
        className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg"
      >
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-md bg-[var(--signal-cyan-tint)] text-[var(--signal-cyan)] font-semibold uppercase">
              FLAGSHIP 02 // COMPUTER VISION
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="text-[var(--text-secondary)]">{INSPECTOR_CV_CASE_STUDY.period}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[var(--signal-cyan)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--signal-cyan)]" />
            <span>DEPLOYED AT EY (INTERNAL .WHL)</span>
          </div>
        </div>

        {/* Title & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {INSPECTOR_CV_CASE_STUDY.title}
            </h3>
            <p className="text-sm font-medium text-[var(--signal-cyan)]">
              {INSPECTOR_CV_CASE_STUDY.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              In-house biometric search engine developed at Ernst & Young for government examinations. Solves multi-million candidate fraud detection through 512D deep embeddings and HNSW graph indexing.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 font-mono">
            {INSPECTOR_CV_CASE_STUDY.metrics.map((m, idx) => (
              <div key={idx} className="p-3 glass-panel-subtle rounded-xl space-y-0.5">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">{m.label}</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Stage Horizontal Pipeline */}
        <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-[var(--text-primary)] font-semibold flex items-center space-x-1.5">
              <ScanFace className="w-3.5 h-3.5 text-[var(--signal-cyan)]" />
              <span>THE 7-STAGE BIOMETRIC PIPELINE</span>
            </span>
            <span className="text-[var(--text-muted)] text-[11px]">
              SUB-SECOND LOGARITHMIC RETRIEVAL
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 font-mono text-xs">
            {stages.map((st, idx) => {
              const Icon = st.icon;
              const isSelected = idx === selectedStep;
              return (
                <button
                  key={st.id}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-[var(--signal-cyan-tint)] border border-[var(--signal-cyan)] text-[var(--text-primary)] shadow-md'
                      : 'glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1 text-[10px] text-[var(--text-muted)]">
                    <span>{st.id}</span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[var(--signal-cyan)]' : 'opacity-60'}`} />
                  </div>
                  <div className="font-bold text-xs truncate">{st.title}</div>
                  <div className="text-[10px] text-[var(--text-muted)] truncate">{st.desc}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail */}
          <div className="glass-panel-subtle rounded-xl p-4 space-y-2 animate-in fade-in duration-150">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <span className="text-[var(--signal-cyan)] font-semibold">
                STAGE {stages[selectedStep].id}: {stages[selectedStep].title.toUpperCase()}
              </span>
              <span className="text-[var(--text-muted)] text-[11px]">
                SEARCH EFFICIENCY: O(log N)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {stages[selectedStep].detail}
            </p>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 font-mono text-[10px]">
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
