'use client';

import React from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const EditorialFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] font-mono text-xs text-[var(--text-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-xs bg-[var(--accent-primary)]" />
            <span className="font-semibold text-[var(--text-primary)]">
              {PERSONAL_DATA.name.toUpperCase()}
            </span>
            <span>{'//'}</span>
            <span>AI & ML ENGINEERING ARCHITECTURE</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center space-x-1 px-3 py-1 rounded bg-[var(--bg-subtle)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[11px]">
          <div>
            <div className="text-[var(--text-primary)] font-medium pb-1">SPECIFICATION</div>
            <div>Built with Next.js 16, React 19 & Tailwind CSS v4. Zero layout templates.</div>
          </div>
          <div>
            <div className="text-[var(--text-primary)] font-medium pb-1">ACCESSIBILITY</div>
            <div>WCAG AAA contrast calibrated &bull; Prefers-reduced-motion verified.</div>
          </div>
          <div>
            <div className="text-[var(--text-primary)] font-medium pb-1">REPRESENTATION</div>
            <div>512D Euclidean Metric Space &bull; HNSW Approximate Nearest Neighbors.</div>
          </div>
          <div>
            <div className="text-[var(--text-primary)] font-medium pb-1">VERIFICATION</div>
            <div>Deterministic DVC Hashes &bull; MLflow Lineage &bull; PyPI Logpunch.</div>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] text-[10px]">
          <div>&copy; {new Date().getFullYear()} Gourav Gulia. All engineering rights reserved.</div>
          <div>HASH: 0x519B_PROD &bull; KERNEL_LATENCY: OPTIMIZED</div>
        </div>
      </div>
    </footer>
  );
};
