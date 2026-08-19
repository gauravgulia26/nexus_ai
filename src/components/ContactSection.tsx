'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Send,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/resume';
import { SectionReveal } from '@/components/SectionReveal';

// Custom Crisp Vector Brand Icons
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionReveal id="contact" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // CONTACT</span>
          </div>
          <span className="font-mono text-xs text-slate-500 hidden sm:inline">
            $ connect --target gaurav.gulia --open_channel
          </span>
        </motion.div>

        {/* Minimal Terminal Contact Console */}
        <div className="glass-panel-elevated rounded-2xl border border-white/10 p-6 sm:p-10 max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Initialize Communication Channel
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Open to specialized AI/ML Engineering roles, MLOps leadership, production agentic architectures, and high-impact machine learning initiatives.
            </p>
          </div>

          {/* Terminal Links Grid */}
          <div className="space-y-3 font-mono text-xs sm:text-sm">
            {/* Email Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/10 gap-3 group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">PROTOCOL: SMTP</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-slate-200 hover:text-cyan-300 font-medium transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>COMPOSE</span>
                </a>
              </div>
            </div>

            {/* LinkedIn & GitHub Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">NETWORK</div>
                    <div className="text-slate-200 group-hover:text-cyan-300 font-medium">
                      linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">CODE REPOSITORIES</div>
                    <div className="text-slate-200 group-hover:text-cyan-300 font-medium">
                      github.com/{PERSONAL_INFO.githubHandle}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Location & Direct Line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">BASE LOCATION</div>
                  <div className="text-slate-300">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">DIRECT LINE</div>
                  <div className="text-slate-300 font-mono">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Terminal Command Reference */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 gap-2">
            <span>TERMINAL: READY FOR INCOMING SIGNALS</span>
            <span className="text-cyan-400">ENCRYPTION: TLS 1.3 // ACTIVE</span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
