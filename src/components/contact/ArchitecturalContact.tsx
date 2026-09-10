'use client';

import React, { useState } from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { Copy, Check, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/BrandIcons';
import { MotionReveal } from '@/components/common/MotionReveal';

export const ArchitecturalContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-label="Contact Gateway & Technical Discussion" className="py-12 sm:py-24 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <MotionReveal delay={0.1} yOffset={30}>
          <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
            {/* Header Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
              <div className="flex items-center space-x-2 text-[var(--signal-emerald)]">
                <span className="w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
                <span className="font-semibold">{PERSONAL_DATA.systemStatus}</span>
              </div>
              <div className="text-[var(--text-muted)]">
                LOCATION: {PERSONAL_DATA.location.toUpperCase()}
              </div>
            </div>

            {/* Monumental Headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-3">
                <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-wider font-semibold">
                  COMMUNICATION // COLLABORATION
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
                  Machine Learning Systems &bull; <br />
                  Production Engineering
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed">
                  Available for specialized roles in Machine Learning Systems, MLOps Infrastructure, and Computer Vision.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-2">
                <a
                  href={PERSONAL_DATA.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-medium text-sm transition-colors shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  VERIFIED 2026 // PRODUCTION RECORD
                </span>
              </div>
            </div>

            {/* Interactive Channels Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-[var(--border-subtle)] font-mono text-xs">
              
              {/* Direct Email */}
              <div className="p-4 glass-panel-subtle rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">EMAIL</div>
                  <div className="font-bold text-xs text-[var(--text-primary)] truncate pt-0.5">
                    {PERSONAL_DATA.email}
                  </div>
                </div>
                <div className="pt-2 flex items-center space-x-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-md glass-panel text-[var(--text-primary)] flex items-center space-x-1 hover:border-[var(--accent-primary)] transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-[var(--signal-emerald)]" /> : <Copy className="w-3 h-3 text-[var(--text-muted)]" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                  <a
                    href={`mailto:${PERSONAL_DATA.email}`}
                    className="px-2.5 py-1 rounded-md glass-panel text-[var(--accent-primary)] font-semibold"
                  >
                    OPEN
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="p-4 glass-panel-subtle rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">DIRECT PHONE</div>
                  <div className="font-bold text-xs text-[var(--text-primary)] truncate pt-0.5">
                    {PERSONAL_DATA.phone}
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={`tel:${PERSONAL_DATA.phone.replace(/\s+/g, '')}`}
                    className="inline-block px-2.5 py-1 rounded-md glass-panel text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                  >
                    CALL DIRECT
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="p-4 glass-panel-subtle rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">GITHUB</div>
                  <div className="font-bold text-xs text-[var(--text-primary)] truncate pt-0.5">
                    gauravgulia26
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={PERSONAL_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md glass-panel text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>VIEW REPOS</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-4 glass-panel-subtle rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">LINKEDIN</div>
                  <div className="font-bold text-xs text-[var(--text-primary)] truncate pt-0.5">
                    gauravgulia26
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={PERSONAL_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md glass-panel text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                  >
                    <LinkedinIcon className="w-3 h-3" />
                    <span>CONNECT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
