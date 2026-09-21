'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionItem {
  id: string;
  num: string;
  name: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'hero', num: '00', name: 'Overview' },
  { id: 'experience', num: '01', name: 'Experience' },
  { id: 'projects', num: '02', name: 'Projects' },
  { id: 'research', num: '03', name: 'Research' },
  { id: 'skills', num: '04', name: 'Skills' },
  { id: 'principles', num: '05', name: 'Principles' },
  { id: 'contact', num: '06', name: 'Contact' },
];

export const SectionScrollRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section Navigation Rail"
      className="hidden xl:flex fixed right-4 2xl:right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end space-y-3.5 select-none"
    >
      <div className="p-2 rounded-2xl glass-panel-subtle flex flex-col items-end space-y-2.5 shadow-md border border-[var(--glass-border)]">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-end group cursor-pointer"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => scrollToSection(sec.id)}
            >
              {/* Flyout Label on Hover or when Active */}
              <AnimatePresence>
                {(isHovered || (isActive && !hoveredSection)) && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: -8 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute right-full mr-1 whitespace-nowrap pointer-events-none"
                  >
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider transition-colors ${
                        isActive
                          ? 'embossed-badge text-[var(--accent-primary)] font-semibold'
                          : 'glass-panel-subtle text-[var(--text-muted)]'
                      }`}
                    >
                      <span className="opacity-60 mr-1.5">{sec.num}</span>
                      <span>{sec.name}</span>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Indicator Dot / Pill */}
              <button
                type="button"
                aria-label={`Scroll to ${sec.name}`}
                className="p-1 focus-visible:outline-hidden"
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-2 h-5 bg-[var(--accent-primary)] shadow-sm'
                      : 'w-2 h-2 bg-[var(--text-muted)] opacity-35 group-hover:opacity-80 group-hover:scale-125'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
