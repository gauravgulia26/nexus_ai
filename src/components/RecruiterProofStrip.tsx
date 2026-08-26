'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Workflow, Award } from 'lucide-react';

const PROOF_POINTS = [
  {
    icon: ShieldCheck,
    metric: '1.5+ Years',
    title: 'Enterprise AI/ML',
    detail: 'Forensic analytics @ EY & Netmax',
    tag: 'EXPERIENCE',
  },
  {
    icon: Bot,
    metric: '5-Agent',
    title: 'Autonomous Graph',
    detail: 'LangGraph & LangSmith evaluation',
    tag: 'AGENTIC AI',
  },
  {
    icon: Workflow,
    metric: 'Production',
    title: 'MLOps Pipelines',
    detail: 'Airflow, DVC, MLflow & FastAPI serving',
    tag: 'INFRASTRUCTURE',
  },
  {
    icon: Award,
    metric: 'IEEE Published',
    title: 'Research Publication',
    detail: 'Peer-reviewed ensemble healthcare ML',
    tag: 'CREDIBILITY',
  },
];

export const RecruiterProofStrip: React.FC = () => {
  return (
    <section className="relative z-10 -mt-4 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {PROOF_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-white/10 hover:border-cyan-500/40 relative overflow-hidden group transition-all"
              >
                {/* Accent glow on top hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold text-cyan-400/90 tracking-wider">
                      [{item.tag}]
                    </span>
                    <div className="text-2xl font-bold font-sans text-white tracking-tight">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-slate-200 font-sans">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans leading-snug pt-0.5">
                      {item.detail}
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
