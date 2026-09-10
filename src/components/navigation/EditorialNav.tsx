'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { Sun, Moon, Terminal, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface EditorialNavProps {
  onOpenCommandPalette: () => void;
}

const NAV_LINKS = [
  { label: 'Work', href: '#flagships' },
  { label: 'Systems', href: '#technical-systems' },
  { label: 'Stack', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const EditorialNav: React.FC<EditorialNavProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['flagships', 'technical-systems', 'capabilities', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 pt-3 pb-2 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`max-w-7xl mx-auto rounded-xl transition-all duration-300 px-4 sm:px-6 h-14 flex items-center justify-between ${
          isScrolled
            ? 'glass-panel shadow-lg'
            : 'bg-transparent border border-transparent'
        }`}
      >
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

        {/* Center Links (Desktop Glass Capsule) */}
        <div className="hidden md:flex items-center space-x-1 glass-panel-subtle px-2 py-1 rounded-lg">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-surface)]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center space-x-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette (Cmd + K)"
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="hidden sm:inline text-[10px] opacity-80">⌘K</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-md glass-panel-subtle text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--signal-amber)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent-primary)]" />
            )}
          </button>

          {/* Direct Resume Link */}
          <a
            href={PERSONAL_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)] transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-md glass-panel-subtle text-[var(--text-primary)]"
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
              <span>Resume PDF</span>
            </a>
            <span className="font-mono text-[10px] text-[var(--text-muted)]">DELHI-NCR</span>
          </div>
        </div>
      )}
    </header>
  );
};
