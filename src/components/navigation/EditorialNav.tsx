'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Approach', href: '#principles' },
  { label: 'Contact', href: '#contact' },
];

export const EditorialNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['experience', 'projects', 'research', 'skills', 'principles', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 pt-3 pb-2 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`relative overflow-hidden max-w-7xl mx-auto rounded-xl transition-all duration-300 px-4 sm:px-6 h-14 flex items-center justify-between ${
          isScrolled
            ? 'glass-panel shadow-lg border border-[var(--glass-border)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Scroll Progress Bar at Bottom of Navbar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-primary)] via-[var(--signal-cyan)] to-[var(--signal-emerald)] origin-left pointer-events-none"
          style={{ scaleX }}
        />

        {/* Brand Identity */}
        <a
          href="#"
          className="flex items-center space-x-2.5 group focus-visible:outline-hidden"
        >
          <span className="w-2.5 h-2.5 rounded-xs bg-[var(--accent-primary)] group-hover:scale-110 transition-transform shadow-xs" />
          <div className="flex items-center space-x-2">
            <span className="font-display font-bold tracking-tight text-sm text-[var(--text-primary)]">
              {PERSONAL_DATA.name}
            </span>
            <span className="hidden sm:inline font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
              / ML ENGINEER
            </span>
          </div>
        </a>

        {/* Center Links (Desktop Glass Capsule with Fluid Transition) */}
        <div className="hidden md:flex items-center space-x-1 glass-panel-subtle px-2 py-1 rounded-lg">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 rounded-md text-xs font-medium transition-colors z-10 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavSection"
                    className="absolute inset-0 rounded-md bg-[var(--accent-primary)] shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center space-x-2">
          {/* Direct Resume Link with Embossed Styling */}
          <a
            href={PERSONAL_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="embossed-primary-button inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="embossed-button md:hidden p-2 rounded-md text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-panel-elevated p-4 rounded-xl space-y-2 animate-in fade-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--glass-surface)] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <a
              href={PERSONAL_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-medium text-[var(--accent-primary)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
            <span className="font-mono text-[10px] text-[var(--text-muted)]">Delhi-NCR</span>
          </div>
        </div>
      )}
    </header>
  );
};
