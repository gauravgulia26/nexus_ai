'use client';

import React, { useState, useEffect } from 'react';
import { SystemPreloader } from '@/components/preloader/SystemPreloader';
import { NeuralFieldCanvas } from '@/components/background/NeuralFieldCanvas';
import { EditorialNav } from '@/components/navigation/EditorialNav';
import { CommandPaletteModal } from '@/components/navigation/CommandPaletteModal';
import { ArchitecturalHero } from '@/components/hero/ArchitecturalHero';
import { SystemTelemetryBar } from '@/components/telemetry/SystemTelemetryBar';
import { FlagshipBurnoutAI } from '@/components/projects/FlagshipBurnoutAI';
import { FlagshipInspectorCV } from '@/components/projects/FlagshipInspectorCV';
import { FlagshipAurelius } from '@/components/projects/FlagshipAurelius';
import { EngineeredWorksList } from '@/components/projects/EngineeredWorksList';
import { TechnicalSystemsLab } from '@/components/visualizer/TechnicalSystemsLab';
import { CapabilityMatrix } from '@/components/capabilities/CapabilityMatrix';
import { EngineeringDossier } from '@/components/experience/EngineeringDossier';
import { EngineeringManifesto } from '@/components/philosophy/EngineeringManifesto';
import { ArchitecturalContact } from '@/components/contact/ArchitecturalContact';
import { EditorialFooter } from '@/components/footer/EditorialFooter';
import { MotionReveal } from '@/components/common/MotionReveal';

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global key listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-tint)] selection:text-[var(--accent-primary)]">
      
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent-primary)] focus:text-white focus:font-mono focus:text-xs focus:rounded focus:ring-2 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Engineering Preloader Boot Sequence */}
      {isBooting && <SystemPreloader onComplete={() => setIsBooting(false)} />}

      {/* Dynamic Neural Field Canvas */}
      <NeuralFieldCanvas />

      {/* Main Experience Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation */}
        <EditorialNav onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        <main id="main-content" className="flex-grow">
          
          {/* Section 01: Hero Experience */}
          <ArchitecturalHero />

          {/* Telemetry Strip */}
          <SystemTelemetryBar />

          {/* Section 02: Flagship Engineering Case Studies */}
          <section
            id="flagships"
            aria-label="Flagship Engineering Case Studies"
            className="py-12 sm:py-20 border-b border-[var(--border-subtle)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
              
              {/* Flagships Header */}
              <MotionReveal delay={0.1} yOffset={20}>
                <div className="border-b border-[var(--border-subtle)] pb-4 space-y-1">
                  <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-wider font-semibold">
                    FLAGSHIP SYSTEMS // PRODUCTION ARCHITECTURES
                  </div>
                  <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                    Architectural Case Studies
                  </h2>
                </div>
              </MotionReveal>

              {/* Case Study 1: BurnoutAI */}
              <FlagshipBurnoutAI />

              {/* Case Study 2: Inspector CV & Biometrics */}
              <FlagshipInspectorCV />

              {/* Case Study 3: Aurelius Multi-Agent LangGraph */}
              <FlagshipAurelius />

              {/* Specialized Systems & Research Publication */}
              <EngineeredWorksList />
            </div>
          </section>

          {/* Section 03: Technical Systems Lab */}
          <TechnicalSystemsLab />

          {/* Section 04: Capability Matrix */}
          <CapabilityMatrix />

          {/* Section 05: Engineering Dossier (Experience & Education) */}
          <EngineeringDossier />

          {/* Section 06: Engineering Philosophy */}
          <EngineeringManifesto />

          {/* Section 07: Contact Gateway */}
          <ArchitecturalContact />
        </main>

        {/* Footer */}
        <EditorialFooter />
      </div>

      {/* Command Palette Modal */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
