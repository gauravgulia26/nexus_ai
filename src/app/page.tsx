'use client';

import React, { useState } from 'react';
import { SystemPreloader } from '@/components/preloader/SystemPreloader';
import { NeuralFieldCanvas } from '@/components/background/NeuralFieldCanvas';
import { EditorialNav } from '@/components/navigation/EditorialNav';
import { ArchitecturalHero } from '@/components/hero/ArchitecturalHero';
import { SystemTelemetryBar } from '@/components/telemetry/SystemTelemetryBar';
import { EngineeringDossier } from '@/components/experience/EngineeringDossier';
import { FeaturedProjects } from '@/components/projects/FeaturedProjects';
import { ResearchPublication } from '@/components/research/ResearchPublication';
import { CapabilityMatrix } from '@/components/capabilities/CapabilityMatrix';
import { EngineeringManifesto } from '@/components/philosophy/EngineeringManifesto';
import { ArchitecturalContact } from '@/components/contact/ArchitecturalContact';
import { EditorialFooter } from '@/components/footer/EditorialFooter';
import { SectionScrollRail } from '@/components/navigation/SectionScrollRail';
import { SectionDivider } from '@/components/common/MotionReveal';

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-tint)] selection:text-[var(--accent-primary)]">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent-primary)] focus:text-white focus:font-mono focus:text-xs focus:rounded focus:ring-2 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Preloader Sequence */}
      {isBooting && <SystemPreloader onComplete={() => setIsBooting(false)} />}

      {/* Dynamic Background Canvas */}
      <NeuralFieldCanvas />

      {/* Desktop Section Tracking Rail */}
      <SectionScrollRail />

      {/* Main Experience Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <EditorialNav />

        <main id="main-content" className="flex-grow">
          {/* Section 01: Hero Experience (Immediate Positioning) */}
          <ArchitecturalHero />

          {/* Telemetry Highlights */}
          <SystemTelemetryBar />

          <SectionDivider />

          {/* Section 02: Work Experience (Establish Credibility First) */}
          <EngineeringDossier />

          <SectionDivider />

          {/* Section 03: Featured Projects (Consolidated Projects including CIP & Logpunch) */}
          <FeaturedProjects />

          <SectionDivider />

          {/* Section 04: Dedicated Research Publication Section */}
          <ResearchPublication />

          <SectionDivider />

          {/* Section 05: Technical Skills (4-Category Clean Stack) */}
          <CapabilityMatrix />

          <SectionDivider />

          {/* Section 06: Engineering Principles (Practical Standards) */}
          <EngineeringManifesto />

          <SectionDivider />

          {/* Section 07: Contact Gateway */}
          <ArchitecturalContact />
        </main>

        {/* Footer */}
        <EditorialFooter />
      </div>
    </div>
  );
}
