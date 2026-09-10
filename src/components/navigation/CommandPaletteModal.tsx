'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { Search, ExternalLink, ArrowRight, Sun, Moon, Copy, Check, FileText, Code2, Layers, Cpu, Compass } from 'lucide-react';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Case Studies' | 'Actions' | 'External';
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
      id: 'burnout-ai',
      category: 'Case Studies',
      title: 'BurnoutAI: Full-Lifecycle ML Pipeline',
      detail: 'DVC, MLflow, FastAPI, Scikit-Learn & Docker',
      icon: Layers,
      action: () => {
        const el = document.getElementById('case-study-burnout');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'inspector-cv',
      category: 'Case Studies',
      title: 'Inspector: Biometrics & Vector Search',
      detail: 'RetinaFace, FaceNet512, HNSW VectorDB & Forensics',
      icon: Cpu,
      action: () => {
        const el = document.getElementById('case-study-inspector');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'aurelius-ai',
      category: 'Case Studies',
      title: 'Aurelius: Multi-Agent Research System',
      detail: '5-Persona LangGraph DAG & LangSmith Tracing',
      icon: Code2,
      action: () => {
        const el = document.getElementById('case-study-aurelius');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'tech-visualizer',
      category: 'Navigation',
      title: 'Technical Systems Lab & Architecture Visualizer',
      detail: 'Interactive Vector Space, MLOps DAG & Biometric Verification',
      icon: Compass,
      action: () => {
        const el = document.getElementById('technical-systems');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'capabilities',
      category: 'Navigation',
      title: 'Capability Matrix & Domain Stacks',
      detail: 'ML Core, CV, MLOps, Agentic AI & Systems',
      icon: Layers,
      action: () => {
        const el = document.getElementById('capabilities');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'experience-dossier',
      category: 'Navigation',
      title: 'Engineering Experience Dossier',
      detail: 'Ernst & Young (EY), Netmax & IEEE Publication',
      icon: Layers,
      action: () => {
        const el = document.getElementById('experience');
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
      title: 'Download Technical Resume PDF',
      detail: 'Gourav_AiML_Resume.pdf',
      icon: FileText,
      action: () => {
        window.open(PERSONAL_DATA.resumeUrl, '_blank');
      },
    },
    {
      id: 'github',
      category: 'External',
      title: 'GitHub Repositories',
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
        className="w-full max-w-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
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
            placeholder="Type a command or jump to system (e.g. Burnout, Inspector, Resume)..."
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
              NO MATCHING COMMANDS FOUND IN REGISTRY
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

        {/* Palette Footer Microcopy */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)] font-mono text-[10px] text-[var(--text-muted)]">
          <span>NAVIGATION: [↑↓] SELECT &bull; [ENTER] EXECUTE</span>
          <span>SYS: REGISTRY_INDEXED</span>
        </div>
      </div>
    </div>
  );
};

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return <CommandPaletteInner onClose={onClose} />;
};
