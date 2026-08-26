'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Server,
  Layers,
  ArrowDown,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';

interface ArchitectureNode {
  id: string;
  name: string;
  category: string;
  color: string;
  badge: string;
  summary: string;
  coreTech: string[];
  capabilities: string[];
  deliverables: string[];
}

const ARCHITECTURE_PILLARS: ArchitectureNode[] = [
  {
    id: 'ml-systems',
    name: '01 // ML SYSTEMS & FORENSICS',
    category: 'Computer Vision & Biometrics',
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-300',
    badge: 'CV & STATISTICAL ML',
    summary:
      'High-throughput face verification, image quality assessment, morphing detection, and weighted ensemble classification.',
    coreTech: ['FaceNet512', 'RetinaFace', 'OpenCV', 'PSNR/SSIM/LBP', 'Scikit-Learn', 'VectorDB (HNSW)'],
    capabilities: [
      'Weighted ensemble inference optimized via ROC threshold calibration',
      'Sub-second nearest-neighbor face retrieval across 1M+ embeddings',
      'Multiprocessing and dtype downcasting for 35% lower inference latency',
    ],
    deliverables: [
      'Production verification pipelines for SSC, HSSC, NHA',
      'Forensic text similarity & duplicate identity engine (25% faster)',
    ],
  },
  {
    id: 'genai-agents',
    name: '02 // GENAI & AGENTIC WORKFLOWS',
    category: 'Autonomous Multi-Agent & RAG',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-300',
    badge: 'LANGGRAPH & LLMOPS',
    summary:
      'Stateful multi-agent systems, zero-hallucination citation scorecards, and enterprise SOP retrieval copilots.',
    coreTech: ['LangGraph', 'LangChain', 'LangSmith', 'Groq LPU', 'Pydantic v2', 'Vector RAG'],
    capabilities: [
      '5-Persona autonomous graph (Lead, Researcher, Synthesizer, Writer, Reviewer)',
      'Granular token, latency, and cost tracing on Groq LPUs with LangSmith',
      'Self-correcting revision loops guaranteeing 0% broken links & citation density',
    ],
    deliverables: [
      'Aurelius autonomous technical research system',
      'EY CIP conversational investigation copilot with SOP retrieval',
    ],
  },
  {
    id: 'mlops-platform',
    name: '03 // MLOPS & INFRASTRUCTURE',
    category: 'Reproducibility & Orchestration',
    color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/40 text-indigo-300',
    badge: 'ORCHESTRATION & SERVING',
    summary:
      'End-to-end reproducible training pipelines, artifact versioning, and containerized REST microservices.',
    coreTech: ['Apache Airflow', 'DVC', 'MLflow', 'Docker', 'FastAPI', 'UV & Pytest'],
    capabilities: [
      'Automated DAG orchestration with artifact-driven communication',
      'Dataset and model lineage tracking with DVC and remote MLflow registries',
      'Modular package architecture with Dependency Injection and Factory Pattern',
    ],
    deliverables: [
      'Public Docker container images and FastAPI OpenAPI documentation',
      'Logpunch published PyPI developer tooling',
    ],
  },
];

export const SystemArchitectureSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('genai-agents');

  const activePillar = ARCHITECTURE_PILLARS.find((p) => p.id === selectedPillar) || ARCHITECTURE_PILLARS[0];

  return (
    <SectionReveal id="architecture" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 // SYSTEM ARCHITECTURE</span>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              $ system.render_architecture_topology()
            </span>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive Engineering Blueprint</span>
          </div>
        </motion.div>

        {/* High-Level Blueprint Diagram */}
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 space-y-8 relative overflow-hidden">
          {/* Top Engine Anchor */}
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/80 via-slate-900 to-indigo-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold shadow-[0_0_20px_rgba(0,240,255,0.15)] flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>NEXUS AI // PRODUCTION CORE</span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-lg">
              Unified engineering philosophy: robust modeling, autonomous agentic loops, and reproducible MLOps pipelines.
            </p>
          </div>

          {/* 3 Core Architecture Pillars (Clickable selector) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ARCHITECTURE_PILLARS.map((pillar) => {
              const isSelected = selectedPillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`p-5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? `bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.18)] scale-[1.02]`
                      : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
                        {pillar.name}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-slate-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="text-base font-bold text-white font-sans">
                      {pillar.category}
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 font-sans leading-relaxed">
                      {pillar.summary}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                      <span>{isSelected ? '● ACTIVE INSPECTION' : '○ CLICK TO INSPECT'}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center -my-2">
            <div className="p-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 flex items-center gap-1 text-[11px] font-mono px-3">
              <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>FLOWS INTO DEPLOYMENT &amp; MODEL SERVING</span>
            </div>
          </div>

          {/* Active Pillar Deep-Dive Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-xl bg-[#080c16] border border-cyan-500/30 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    LAYER SPECIFICATION // {activePillar.name}
                  </span>
                  <h3 className="text-lg font-bold text-white font-sans mt-0.5">
                    {activePillar.category}
                  </h3>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-md self-start sm:self-auto">
                  PRODUCTION TESTED
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Capabilities */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>KEY ARCHITECTURAL HIGHLIGHTS:</span>
                  </div>
                  <ul className="space-y-2 font-sans">
                    {activePillar.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Technologies & Deliverables */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-2">INTEGRATED STACK:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {activePillar.coreTech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-cyan-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">PROVEN IN PRODUCTION:</div>
                    {activePillar.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-300 font-sans flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Unified Serving Footer Tier */}
          <div className="p-4 rounded-xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-semibold">PRODUCTION SERVING LAYER:</span>
              <span className="text-slate-300 hidden sm:inline">
                FastAPI REST API • Docker Multi-Stage • Streamlit Reasoning UI • Linux
              </span>
            </div>
            <span className="text-cyan-400 font-bold bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/20">
              LOW-LATENCY SERVING
            </span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
