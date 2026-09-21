'use client';

import React from 'react';
import { Cpu, ShieldCheck, Database, Layers, Terminal } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

const TELEMETRY_NODES = [
  { icon: Database, label: 'Vector Search', value: 'HNSW Graph' },
  { icon: ShieldCheck, label: 'Thresholding', value: 'ROC Calibrated' },
  { icon: Cpu, label: 'Inference SLA', value: 'P99 < 45ms' },
  { icon: Layers, label: 'Lineage', value: 'DVC & MLflow' },
  { icon: Terminal, label: 'Published Tool', value: 'PyPI: logpunch' },
];

export const SystemTelemetryBar: React.FC = () => {
  return (
    <aside
      aria-label="Technical Highlights Bar"
      className="w-full border-y border-[var(--border-subtle)] glass-panel-subtle font-mono text-xs overflow-x-auto py-2.5"
    >
      <MotionReveal delay={0.1} yOffset={10}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6 whitespace-nowrap min-w-max">
          <div className="flex items-center space-x-2 text-[var(--signal-amber)] font-semibold text-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--signal-amber)] animate-pulse" />
            <span>HIGHLIGHTS:</span>
          </div>

          <div className="flex items-center space-x-4 text-[var(--text-secondary)]">
            {TELEMETRY_NODES.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={i} className="flex items-center space-x-2 px-2.5 py-1 rounded-md embossed-inset">
                  <Icon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span className="text-[var(--text-muted)] text-[10px]">{node.label}:</span>
                  <span className="font-semibold text-[var(--text-primary)] text-[11px]">{node.value}</span>
                </div>
              );
            })}
          </div>

          <div className="text-[11px] text-[var(--text-muted)] font-serif italic">
            Haryana / Delhi-NCR, India
          </div>
        </div>
      </MotionReveal>
    </aside>
  );
};
