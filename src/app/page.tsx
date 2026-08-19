'use client';

import React, { useState, useEffect } from 'react';
import { BackgroundSystem } from '@/components/BackgroundSystem';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { TerminalBootLoader } from '@/components/TerminalBootLoader';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResearchSection } from '@/components/ResearchSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { InteractiveTerminalModal } from '@/components/InteractiveTerminalModal';

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global key listener for ~ (tilde/backquote) to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070b] text-[#e2e8f0] font-sans selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
      {/* 1. Scroll Progress Bar (Top Glowing Beam) */}
      <ScrollProgressBar />

      {/* 2. Interactive Ambient Mouse Light & Terminal Blinking Cursor */}
      <CustomCursor />

      {/* 3. Skynet Boot Loader Sequence */}
      {!booted && <TerminalBootLoader onComplete={() => setBooted(true)} />}

      {/* 4. Layered Ambient Neural Background System */}
      <BackgroundSystem />

      {/* 5. Main Portfolio Layout with Smooth Scroll Interactivity */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Glassmorphic Navigation Bar */}
        <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Core Content Stream */}
        <main className="flex-grow space-y-12 sm:space-y-16">
          <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <ContactSection />
        </main>

        {/* Terminal Status Footer */}
        <Footer />
      </div>

      {/* 6. Floating Interactive Command Center Terminal Console */}
      <InteractiveTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
