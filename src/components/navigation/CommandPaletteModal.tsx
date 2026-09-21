'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { Search, ExternalLink, ArrowRight, Sun, Moon, Copy, Check, FileText, Code2, Layers, Cpu, Compass, BookOpen } from 'lucide-react';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Projects' | 'Actions' | 'External';
  title: string;
  detail: string;
  icon: React.ElementType;
  action: () => void;
}

const CommandPaletteInner: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const executeAction = useCallback(
    (action: () => void) => {
      action();
      onClose();
    },
    [onClose]
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commands: CommandItem[] = [
    {
      id: 'analytica',
      category: 'Projects',
      title: 'Analytica: Multi-Agent AI Data Analysis',
      detail: 'LangGraph, Sandboxed Python, Pydantic & Streamlit',
      icon: Code2,
      action: () => {
        const el = document.getElementById('project-analytica');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'burnout-ai',
      category: 'Projects',
      title: 'BurnoutAI: End-to-End MLOps Pipeline',
      detail: 'DVC, MLflow, FastAPI, Scikit-Learn & Docker',
      icon: Layers,
      action: () => {
        const el = document.getElementById('project-burnout-prediction');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'aurelius-ai',
      category: 'Projects',
      title: 'Aurelius: Multi-Agent Research System',
      detail: '5-Persona LangGraph DAG & LangSmith Tracing',
      icon: Code2,
      action: () => {
        const el = document.getElementById('project-aurelius');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'inspector-cv',
      category: 'Projects',
      title: 'Inspector: Biometrics & Vector Search',
      detail: 'RetinaFace, FaceNet512, HNSW VectorDB & Forensics',
      icon: Cpu,
      action: () => {
        const el = document.getElementById('project-inspector-library');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'cip-platform',
      category: 'Projects',
      title: 'Candidate Intelligence Platform (CIP)',
      detail: 'Ensemble Risk Model & LangGraph RAG Copilot at EY',
      icon: Layers,
      action: () => {
        const el = document.getElementById('project-cip-platform');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'logpunch',
      category: 'Projects',
      title: 'Logpunch: Logging Library on PyPI',
      detail: 'pip install logpunch - Published Python Package',
      icon: Code2,
      action: () => {
        const el = document.getElementById('project-logpunch-pypi');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-experience',
      category: 'Navigation',
      title: 'Work Experience',
      detail: 'Ernst & Young (EY), Netmax & Education',
      icon: Compass,
      action: () => {
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Featured Projects',
      detail: 'Analytica, BurnoutAI, Aurelius, Inspector, CIP, Logpunch',
      icon: Layers,
      action: () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-research',
      category: 'Navigation',
      title: 'Research Publication',
      detail: 'IEEE Peer-Reviewed Paper on Ensemble Learning',
      icon: BookOpen,
      action: () => {
        const el = document.getElementById('research');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      title: 'Technical Skills',
      detail: 'Machine Learning, GenAI, MLOps, Data & Cloud',
      icon: Layers,
      action: () => {
        const el = document.getElementById('skills');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-principles',
      category: 'Navigation',
      title: 'Engineering Principles',
      detail: 'First-principles math, reproducible MLOps, production SLAs',
      icon: Compass,
      action: () => {
        const el = document.getElementById('principles');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'toggle-theme',
      category: 'Actions',
      title: `Toggle Theme (Currently ${theme.toUpperCase()})`,
      detail: 'Switch between Technical Vellum and Obsidian Dark',
      icon: theme === 'dark' ? Sun : Moon,
      action: toggleTheme,
    },
    {
      id: 'copy-email',
      category: 'Actions',
      title: copied ? 'Email Copied to Clipboard!' : 'Copy Direct Email',
      detail: PERSONAL_DATA.email,
      icon: copied ? Check : Copy,
      action: handleCopyEmail,
    },
    {
      id: 'download-resume',
      category: 'Actions',
      title: 'Download Resume (PDF)',
      detail: 'Gourav_AiML_Resume.pdf',
      icon: FileText,
      action: () => {
        window.open(PERSONAL_DATA.resumeUrl, '_blank');
      },
    },
    {
      id: 'github',
      category: 'External',
      title: 'GitHub Profile',
      detail: 'github.com/gauravgulia26',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_DATA.github, '_blank');
      },
    },
    {
      id: 'linkedin',
      category: 'External',
      title: 'LinkedIn Profile',
      detail: 'linkedin.com/in/gauravgulia26',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_DATA.linkedin, '_blank');
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.detail.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          executeAction(filteredCommands[selectedIndex].action);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredCommands, executeAction, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="System Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border-default)]">
          <Search className="w-4 h-4 text-[var(--text-muted)] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search project..."
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden"
          />
          <span className="ml-2 px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)] border border-[var(--border-subtle)] rounded">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[var(--border-subtle)]">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center font-mono text-xs text-[var(--text-muted)]">
              NO MATCHING COMMANDS FOUND
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => executeAction(cmd.action)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-left transition-colors ${
                    isSelected
                      ? 'bg-[var(--accent-tint)] text-[var(--accent-primary)]'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <div
                      className={`p-1.5 rounded ${
                        isSelected
                          ? 'bg-[var(--accent-primary)] text-white'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-medium tracking-tight truncate">{cmd.title}</div>
                      <div className="text-[11px] text-[var(--text-muted)] truncate">{cmd.detail}</div>
                    </div>
                  </div>
                  <div className="flex items-center ml-2 shrink-0">
                    <span className="font-mono text-[10px] uppercase text-[var(--text-muted)] mr-2">
                      {cmd.category}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)] font-mono text-[10px] text-[var(--text-muted)]">
          <span>NAVIGATION: [↑↓] SELECT &bull; [ENTER] EXECUTE</span>
          <span>QUICK ACTIONS</span>
        </div>
      </div>
    </div>
  );
};

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return <CommandPaletteInner onClose={onClose} />;
};
