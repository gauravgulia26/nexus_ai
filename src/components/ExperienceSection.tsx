'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { EDUCATION } from '@/data/resume';
import { SectionReveal } from '@/components/SectionReveal';

const EXPERIENCES_TIMELINE = [
  {
    company: 'EY (Ernst & Young)',
    role: 'Sr. Analyst · AI Systems & Forensic Analytics',
    period: 'Jun 2025 – Jun 2026',
    location: 'Gurugram, India',
    type: 'Full-time Enterprise',
    summary:
      'Engineered enterprise biometric forensics, low-latency inference pipelines, and automated MLOps infrastructure for large-scale government clients (SSC, HSSC, NHA).',
    metrics: [
      { label: 'Latency Cut', value: '35% Faster', desc: 'Multiprocessing & Dtype' },
      { label: 'False Positives', value: '11% Reduction', desc: 'ROC Thresholding' },
      { label: 'Forensic Matching', value: '25% Speedup', desc: 'Jaro & TF-IDF' },
      { label: 'Memory Footprint', value: '22% Lower', desc: 'Optimized Arrays' },
    ],
    tracks: [
      {
        num: '01',
        title: 'Biometric Verification & Image Quality Forensics',
        desc: 'Deployed production face verification, image quality (PSNR, SSIM, LBP), and morphing detection pipelines using FaceNet512 & RetinaFace for SSC, HSSC, and NHA across challenging multimodal images.',
        tech: ['FaceNet512', 'RetinaFace', 'OpenCV', 'PSNR/SSIM/LBP'],
      },
      {
        num: '02',
        title: 'Low-Latency Inference Optimization',
        desc: 'Engineered multiprocessing acceleration, hyperparameter tuning, and memory-efficient dtype downcasting, cutting production model inference latency by ~35% and memory utilization by 22%.',
        tech: ['Multiprocessing', 'Python 3.12', 'NumPy', 'Dtype Tuning'],
      },
      {
        num: '03',
        title: 'Modular MLOps Orchestration & Serving',
        desc: 'Re-architected legacy ML solutions into modular API-driven frameworks using FastAPI, Apache Airflow workflow DAGs, and MLflow experiment tracking for scalable reproducibility.',
        tech: ['FastAPI', 'Apache Airflow', 'MLflow', 'Docker'],
      },
      {
        num: '04',
        title: 'Text Similarity & Impersonation Detection Engine',
        desc: 'Built an in-house forensic system using Jaro-Winkler similarity, phonetic matching, and TF-IDF vectorization, improving duplicate identity detection efficiency by ~25%.',
        tech: ['TF-IDF', 'Jaro-Winkler', 'Phonetic NLP', 'VectorDB'],
      },
      {
        num: '05',
        title: 'Weighted Ensemble Inference & ROC Calibration',
        desc: 'Designed weighted ensemble inference optimized through A/B Testing, LCB/UCB strategies, and ROC-based threshold calibration, reducing false positives by nearly 11%.',
        tech: ['Ensemble Learning', 'ROC Tuning', 'A/B Testing', 'Scikit-Learn'],
      },
    ],
  },
  {
    company: 'Netmax',
    role: 'Jr. Data Scientist',
    period: 'Oct 2024 – Feb 2025',
    location: 'Chandigarh, India',
    type: 'Full-time',
    summary:
      'Engineered automated data preprocessing pipelines and integrated experiment tracking and data versioning into ML workflows.',
    metrics: [
      { label: 'Data Drift Cut', value: '20% Noise Reduction', desc: 'DVC & MLflow' },
    ],
    tracks: [
      {
        num: '01',
        title: 'Automated Preprocessing & Experiment Tracking',
        desc: 'Built a modular data preprocessing pipeline leveraging MLflow, DVC, and Pandas, reducing data drift and noise by 20% and boosting downstream model accuracy across production workflows.',
        tech: ['MLflow', 'DVC', 'Pandas', 'Scikit-Learn'],
      },
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <SectionReveal id="experience" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // EXPERIENCE TIMELINE</span>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              $ git log --oneline --graph --author=&quot;Gourav Gulia&quot;
            </span>
          </div>

          {/* Chronological Span Indicator */}
          <div className="font-mono text-xs text-slate-300 bg-slate-900/90 border border-white/10 px-3.5 py-1 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>2024 &mdash; 2026 // ENGINEERING HISTORY</span>
          </div>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-10">
          {EXPERIENCES_TIMELINE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel-elevated rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 hover:border-cyan-500/30 transition-all space-y-8 relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              {/* Role & Company Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/40">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-sans font-semibold text-slate-200">
                    {exp.role}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-3xl leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400 shrink-0">
                  <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/10 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/10 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Defensible Impact Metrics */}
              {exp.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                  {exp.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-white/5 space-y-1"
                    >
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">{m.label}</div>
                      <div className="text-base font-bold text-cyan-300">{m.value}</div>
                      <div className="text-[10px] text-slate-500 font-sans">{m.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Engineering Tracks Breakdown */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>PRODUCTION ENGINEERING TRACKS:</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.tracks.map((track, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2 hover:border-cyan-500/20 transition-all font-sans"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {track.num}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {track.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-white">
                        {track.title}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {track.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Academic Background Timeline Node */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6"
          >
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION // DATA SCIENCE &amp; APPLIED COMPUTING</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                      <div className="text-xs text-indigo-300 font-medium">{edu.institution}</div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                      {edu.details[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
};
