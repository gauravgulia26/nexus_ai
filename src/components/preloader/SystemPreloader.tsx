'use client';

import React, { useEffect, useState } from 'react';

interface SystemPreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'KERNEL: Initializing Nexus AI ML Runtime environment',
  'SYSTEM: Verifying hardware acceleration & tensor cores',
  'REGISTRY: Loading DVC data hashes & MLflow artifacts',
  'VECTORS: Initializing HNSW graph indices (512-dim metric space)',
  'PIPELINES: Checking FastAPI microservice endpoints & Airflow DAGs',
  'STATUS: Core telemetry verified. System ready.',
];

export const SystemPreloader: React.FC<SystemPreloaderProps> = ({ onComplete }) => {
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Fast, purposeful initialization (~750ms total)
    const interval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
      setProgress((prev) => Math.min(100, prev + 18));
    }, 110);

    const completeTimer = setTimeout(() => {
      setProgress(100);
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(fadeTimer);
    }, 750);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <aside
      aria-label="System Initializing"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 font-mono text-xs text-[var(--text-muted)]">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
          <span className="tracking-widest uppercase text-[var(--text-primary)] font-medium">
            GOURAV GULIA // ML SYSTEMS RUNTIME
          </span>
        </div>
        <div className="hidden sm:block">SYS_ID: GG-ML-PROD // V5.2</div>
      </div>

      {/* Center Initialization Telemetry */}
      <div className="max-w-2xl w-full mx-auto my-auto space-y-6">
        <div className="space-y-2">
          <div className="font-mono text-xs text-[var(--signal-amber)] tracking-wider">
            [BOOT_SEQUENCE_INITIALIZED]
          </div>
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Initializing Engineering Architecture
          </h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Loading mathematical models, biometric vector indexes, and reproducible pipeline DAGs.
          </p>
        </div>

        {/* Console Log Lines */}
        <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded p-4 font-mono text-xs space-y-1.5 shadow-sm">
          {BOOT_LOGS.slice(0, logIndex + 1).map((log, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-[var(--accent-primary)] font-bold">›</span>
              <span className={idx === logIndex ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-muted)]'}>
                {log}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Metric */}
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-xs text-[var(--text-muted)]">
            <span>PIPELINE_SYNCHRONIZATION</span>
            <span className="text-[var(--text-primary)] font-semibold">{progress}%</span>
          </div>
          <div className="h-1 w-full bg-[var(--border-subtle)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--accent-primary)] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 font-mono text-xs text-[var(--text-muted)]">
        <span>MEM: 512D_INDEX_READY</span>
        <span>LATENCY: ZERO_BLOCKING</span>
      </div>
    </aside>
  );
};
