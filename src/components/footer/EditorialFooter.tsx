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
            <span>MACHINE LEARNING ENGINEER</span>
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
            <div className="text-[var(--text-primary)] font-medium pb-1">OVERVIEW</div>
            <div>Production-grade Machine Learning, MLOps pipelines, and Generative AI systems.</div>
          </div>
          <div>
            <div className="text-[var(--text-primary)] font-medium pb-1">EXPERIENCE</div>
            <div>Forensic AI and biometrics at EY for public sector clients. M.Sc. Data Science.</div>
          </div>
          <div>
            <div className="text-[var(--text-primary)] font-medium pb-1">HIGHLIGHTS</div>
            <div>Fast similarity search across large databases, low-latency APIs, and automated pipelines.</div>
          </div>
          <div>
            <div className="text-[var(--text-primary)] font-medium pb-1">PUBLICATIONS</div>
            <div>Open source on GitHub, containerized on Docker Hub, published on PyPI &amp; IEEE Xplore.</div>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] text-[10px]">
          <div>&copy; {new Date().getFullYear()} Gourav Gulia. All rights reserved.</div>
          <div>Delhi-NCR, India &bull; Machine Learning Engineer</div>
        </div>
      </div>
    </footer>
  );
};
