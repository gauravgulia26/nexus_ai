'use client';

import React from 'react';
import { ALL_PROJECTS } from '@/data/portfolioData';
import { ExternalLink, Container, Terminal, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/common/BrandIcons';
import { MotionReveal } from '@/components/common/MotionReveal';

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-12 sm:py-20 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Section Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
            <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-[0.2em] font-semibold">
              PROJECTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Featured Projects
            </h2>
            <p className="text-sm text-[var(--text-secondary)] font-normal">
              Production systems, multi-agent architectures, and developer tooling.
            </p>
          </div>
        </MotionReveal>

        {/* Project Cards List */}
        <div className="space-y-6">
          {ALL_PROJECTS.map((project, idx) => (
            <MotionReveal key={project.id} delay={0.1 + idx * 0.05} yOffset={25}>
              <article
                id={`project-${project.id}`}
                className="glass-panel-elevated rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg border border-[var(--glass-border)] hover:border-[var(--glass-border-highlight)] transition-all"
              >
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)] font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="subtle-tag px-2.5 py-0.5 rounded-md text-[var(--accent-primary)] font-semibold uppercase text-[11px] tracking-wide">
                      {project.badge}
                    </span>
                    <span className="text-[var(--text-muted)]">&bull;</span>
                    <span className="text-[var(--text-secondary)] tracking-wider font-mono">{project.period}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[var(--signal-emerald)] font-semibold text-[11px] tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
                    <span>{project.status.toUpperCase()}</span>
                  </div>
                </div>

                {/* Title, 1-Line Description & Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-[var(--accent-primary)] pt-0.5 tracking-tight font-sans">
                        {project.tagline}
                      </p>
                    </div>

                    {/* 1-Line Description */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Technical Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {project.engineeringHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[var(--text-primary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Direct Links with Tactile Embossed Buttons */}
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
                      {project.links.map((link, i) => {
                        if (link.type === 'github') {
                          return (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="embossed-primary-button flex items-center space-x-1.5 px-3 py-1.5 rounded-lg"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span>{link.label}</span>
                            </a>
                          );
                        }
                        if (link.type === 'demo') {
                          return (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="embossed-button flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[var(--text-primary)]"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                              <span>{link.label}</span>
                            </a>
                          );
                        }
                        if (link.type === 'docker') {
                          return (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="embossed-button flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[var(--text-primary)]"
                            >
                              <Container className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                              <span>{link.label}</span>
                            </a>
                          );
                        }
                        if (link.type === 'api') {
                          return (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="embossed-button flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[var(--text-primary)]"
                            >
                              <Terminal className="w-3.5 h-3.5 text-[var(--signal-emerald)]" />
                              <span>{link.label}</span>
                            </a>
                          );
                        }
                        return (
                          <a
                            key={i}
                            href={link.url}
                            className="embossed-button flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[var(--text-primary)]"
                          >
                            <Shield className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-70" />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Key Metrics in Tactile Embossed Inset Wells */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 font-mono">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-3 embossed-inset rounded-xl space-y-0.5">
                        <div className="text-[10px] text-[var(--text-muted)] uppercase">{m.label}</div>
                        <div className="text-xs font-bold text-[var(--text-primary)] truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Technologies with Subtle Tag Styling */}
                <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                  <span className="text-[var(--text-muted)] mr-2 font-semibold tracking-wider">TECH:</span>
                  {project.technologies.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md subtle-tag text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
