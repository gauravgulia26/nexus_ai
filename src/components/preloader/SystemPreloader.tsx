'use client';

import React, { useEffect, useState } from 'react';

interface SystemPreloaderProps {
  onComplete: () => void;
}

export const SystemPreloader: React.FC<SystemPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Fast, subtle, and fluid progress ramp (~600ms total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic easing ramp
        const step = prev < 50 ? 18 : prev < 85 ? 14 : 8;
        return Math.min(100, prev + step);
      });
    }, 60);

    const timer = setTimeout(() => {
      setProgress(100);
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        onComplete();
      }, 350);
      return () => clearTimeout(fadeTimer);
    }, 620);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-canvas)]/90 backdrop-blur-2xl transition-opacity duration-350 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Centered Minimal Frosted Glass Card */}
      <div className="w-full max-w-xs mx-4 p-6 rounded-2xl glass-panel-elevated border border-[var(--glass-border)] shadow-xl text-center space-y-4">
        {/* Minimal Monogram & Status Dot */}
        <div className="flex justify-center items-center">
          <div className="relative w-10 h-10 rounded-xl glass-panel-subtle flex items-center justify-center border border-[var(--glass-border)] shadow-xs">
            <span className="font-display font-extrabold text-sm text-[var(--accent-primary)]">
              GG
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--signal-emerald)] animate-pulse" />
          </div>
        </div>

        {/* Identity & Subtitle */}
        <div className="space-y-0.5">
          <h1 className="font-display font-bold text-base text-[var(--text-primary)] tracking-tight">
            Gourav Gulia
          </h1>
          <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
            Machine Learning Engineer
          </p>
        </div>

        {/* Subtle Hairline Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="h-1 w-full bg-[var(--border-subtle)] rounded-full overflow-hidden embossed-inset relative">
            <div
              className="h-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--signal-cyan)] to-[var(--signal-emerald)] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center font-mono text-[10px] text-[var(--text-muted)] px-0.5">
            <span className="flex items-center space-x-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--signal-emerald)]" />
              <span>{progress === 100 ? 'Ready' : 'Loading'}</span>
            </span>
            <span className="font-medium text-[var(--text-primary)]">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
