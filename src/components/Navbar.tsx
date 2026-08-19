'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Download, Menu, X, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/resume';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

interface NavbarProps {
  onOpenTerminal: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'research', label: 'RESEARCH', href: '#research' },
  { id: 'skills', label: 'SKILLS', href: '#skills' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'research', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Title with Command Center description */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer shrink-0"
            aria-label="Nexus Ai Home"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)]">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  Nexus Ai
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="font-mono text-[10px] text-slate-400 tracking-wide hidden sm:inline">
                Command Center of Gourav Gulia
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Unnumbered & Clean Spacing) */}
          <nav className="hidden lg:flex items-center gap-1.5 glass-panel px-3.5 py-1.5 rounded-full border border-white/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1 text-xs font-mono tracking-wider transition-all rounded-full ${
                    isActive
                      ? 'text-cyan-300 font-semibold bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Quick Action Tools */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 font-mono text-xs transition-all hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] cursor-pointer"
              title="Launch Interactive Terminal (Press ~ or click)"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden md:inline">CLI_MODE</span>
            </button>

            <a
              href="https://github.com/gauravgulia26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 font-mono text-xs transition-all hover:text-white hover:border-cyan-500/40 cursor-pointer"
              title="Visit GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>GITHUB</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeFile}
              download="Gourav_Gulia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs transition-all hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://github.com/gauravgulia26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 sm:hidden"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 glass-panel-elevated rounded-xl border border-white/15 space-y-2">
            <div className="pb-2 border-b border-white/10 text-xs font-mono text-cyan-400">
              Nexus Ai // Command Center of Gourav Gulia
            </div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-mono tracking-wider ${
                  activeSection === item.id
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href="https://github.com/gauravgulia26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
              >
                <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                GITHUB
              </a>
              <a
                href={PERSONAL_INFO.resumeFile}
                download="Gourav_Gulia_Resume.pdf"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300"
              >
                <Download className="w-3.5 h-3.5" />
                RESUME
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
