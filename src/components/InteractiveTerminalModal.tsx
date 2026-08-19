'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CornerDownLeft, Sparkles, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, RESEARCH_PUBLICATIONS, SKILL_CATEGORIES } from '@/data/resume';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'system.init()',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-semibold">
            Nexus Ai // AI/ML &amp; MLOps Command Console v5.19
          </p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-cyan-300">&apos;help&apos;</span> to list available commands, or click any suggestion below.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let response: React.ReactNode = null;

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      response = (
        <div className="space-y-1.5 text-xs">
          <div className="text-cyan-400 font-semibold mb-1">AVAILABLE COMMANDS:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
            <div><span className="text-cyan-300 font-bold">whoami</span> - Profile overview &amp; titles</div>
            <div><span className="text-cyan-300 font-bold">about</span> - Engineering focus &amp; background</div>
            <div><span className="text-cyan-300 font-bold">projects</span> - Production projects &amp; systems</div>
            <div><span className="text-cyan-300 font-bold">research</span> - Peer-reviewed publications</div>
            <div><span className="text-cyan-300 font-bold">skills</span> - Skill matrix &amp; proficiencies</div>
            <div><span className="text-cyan-300 font-bold">exp</span> - Experience at EY &amp; Netmax</div>
            <div><span className="text-cyan-300 font-bold">metrics</span> - Production performance metrics</div>
            <div><span className="text-cyan-300 font-bold">contact</span> - Contact &amp; network channels</div>
            <div><span className="text-cyan-300 font-bold">download</span> - Download Gourav&apos;s Resume</div>
            <div><span className="text-cyan-300 font-bold">clear</span> - Clear terminal window</div>
            <div><span className="text-cyan-300 font-bold">exit</span> - Close terminal console</div>
          </div>
        </div>
      );
    } else if (lower === 'whoami') {
      response = (
        <div className="space-y-1 text-xs text-slate-300">
          <p><span className="text-slate-500">NAME:</span> <span className="text-white font-bold">{PERSONAL_INFO.name}</span></p>
          <p><span className="text-slate-500">ROLE:</span> <span className="text-cyan-300">{PERSONAL_INFO.title}</span></p>
          <p><span className="text-slate-500">DOMAINS:</span> {PERSONAL_INFO.roles.join(' • ')}</p>
          <p><span className="text-slate-500">LOCATION:</span> {PERSONAL_INFO.location}</p>
          <p className="text-slate-400 mt-1">{PERSONAL_INFO.tagline}</p>
        </div>
      );
    } else if (lower === 'about') {
      response = (
        <div className="text-xs text-slate-300 space-y-1">
          <p className="text-cyan-400 font-semibold">ENGINEERING SUMMARY:</p>
          <p>{PERSONAL_INFO.summary}</p>
        </div>
      );
    } else if (lower === 'research' || lower === 'publications' || lower === 'paper') {
      response = (
        <div className="space-y-2 text-xs">
          <div className="text-indigo-400 font-semibold">RESEARCH &amp; PUBLICATIONS:</div>
          {RESEARCH_PUBLICATIONS.map((pub, idx) => (
            <div key={idx} className="bg-white/5 p-2.5 rounded space-y-1">
              <div className="text-white font-bold">{pub.title}</div>
              <div className="text-indigo-300 text-[11px]">{pub.venue} • {pub.authors}</div>
              <p className="text-slate-300 text-[11px]">{pub.abstract}</p>
              <div className="text-cyan-300 text-[10px]">
                METRICS: {pub.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (lower === 'skills') {
      response = (
        <div className="space-y-2 text-xs">
          <div className="text-cyan-400 font-semibold">TECHNICAL SKILLS MATRIX:</div>
          <div className="space-y-2">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-white/5 p-2 rounded">
                <div className="text-cyan-300 font-bold text-[11px]">[{cat.name}]</div>
                <div className="text-slate-300 mt-0.5">
                  {cat.skills.map((s) => `${s.name} (${s.level}%)`).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'projects') {
      response = (
        <div className="space-y-2 text-xs">
          <div className="text-cyan-400 font-semibold">PRODUCTION &amp; FEATURED PROJECTS:</div>
          {PROJECTS.map((p, idx) => (
            <div key={idx} className="bg-white/5 p-2 rounded space-y-0.5">
              <div className="flex justify-between">
                <span className="text-white font-bold">{p.title}</span>
                <span className="text-cyan-400 text-[10px]">{p.status}</span>
              </div>
              <p className="text-slate-400 text-[11px]">{p.problem}</p>
              <p className="text-indigo-300 text-[10px]">STACK: {p.technologies.join(' • ')}</p>
            </div>
          ))}
        </div>
      );
    } else if (lower === 'exp' || lower === 'experience') {
      response = (
        <div className="space-y-2 text-xs">
          <div className="text-cyan-400 font-semibold">PROFESSIONAL EXPERIENCE:</div>
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="bg-white/5 p-2 rounded space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-white">{exp.role} @ {exp.company}</span>
                <span className="text-slate-400">{exp.period}</span>
              </div>
              <p className="text-slate-300 text-[11px]">{exp.summary}</p>
              {exp.metrics && (
                <div className="flex gap-2 pt-1 text-[10px] text-cyan-300">
                  {exp.metrics.map((m, mIdx) => (
                    <span key={mIdx} className="bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      {m.label}: {m.value}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    } else if (lower === 'metrics') {
      response = (
        <div className="space-y-2 text-xs">
          <div className="text-cyan-400 font-semibold">PRODUCTION IMPACT METRICS:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PERSONAL_INFO.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-900 p-2 rounded border border-white/5">
                <div className="text-slate-500 text-[10px]">{m.label}</div>
                <div className="text-cyan-300 font-bold text-sm">{m.value}</div>
                <div className="text-slate-400 text-[10px]">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'contact') {
      response = (
        <div className="space-y-1 text-xs text-slate-300">
          <p><span className="text-slate-500">EMAIL:</span> <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline">{PERSONAL_INFO.email}</a></p>
          <p><span className="text-slate-500">LINKEDIN:</span> <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.linkedin}</a></p>
          <p><span className="text-slate-500">GITHUB:</span> <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.github}</a></p>
          <p><span className="text-slate-500">PHONE:</span> {PERSONAL_INFO.phone}</p>
        </div>
      );
    } else if (lower === 'download' || lower === 'cv' || lower === 'resume') {
      if (typeof window !== 'undefined') {
        const link = document.createElement('a');
        link.href = PERSONAL_INFO.resumeFile;
        link.download = 'Gourav_Gulia_Resume.pdf';
        link.click();
      }
      response = (
        <div className="text-xs text-emerald-400">
          ✓ Resume download initiated: Gourav_Gulia_Resume.pdf
        </div>
      );
    } else if (lower === 'exit' || lower === 'quit') {
      onClose();
      return;
    } else if (lower.startsWith('sudo')) {
      response = (
        <div className="text-xs text-amber-400">
          [sudo] User &apos;visitor&apos; granted root engineering access. Hire Gourav Gulia for maximum production output!
        </div>
      );
    } else {
      response = (
        <div className="text-xs text-red-400">
          Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for a list of commands.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: response }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-3xl h-[600px] max-h-[85vh] glass-panel-elevated rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden z-10 font-mono"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0e1a] border-b border-white/10 text-xs text-slate-400 select-none">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-bold text-slate-200 flex items-center gap-1.5 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  engineer@nexus-ai:~ (bash)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500 hidden sm:inline">Press ESC to exit</span>
                <button
                  onClick={onClose}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-4 py-2 bg-[#080c16] border-b border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
              <span className="text-slate-500 mr-1">TRY:</span>
              {['help', 'whoami', 'skills', 'projects', 'research', 'exp', 'metrics', 'contact', 'download'].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer"
                  >
                    {cmd}
                  </button>
                )
              )}
            </div>

            {/* Terminal Logs & Output */}
            <div ref={scrollRef} className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#070a12]/90">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-cyan-400 font-semibold">engineer@nexus-ai:~$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
            </div>

            {/* Input Prompt Box */}
            <div className="p-3 bg-[#0a0e1a] border-t border-white/10 flex items-center gap-2">
              <span className="text-cyan-400 text-xs font-bold pl-2 select-none">
                engineer@nexus-ai:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'projects', 'research', 'skills')..."
                className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono placeholder:text-slate-600 focus:ring-0"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="p-1.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 cursor-pointer"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
