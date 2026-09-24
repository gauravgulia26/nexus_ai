'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Network, GitBranch, ScanFace, Play, RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';
import { MotionReveal } from '@/components/common/MotionReveal';

export const TechnicalSystemsLab: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'vector-space' | 'mlops-dag' | 'biometric-gate'>('vector-space');

  // Vector Space State
  const [threshold, setThreshold] = useState<number>(0.68);
  const [queryCoord, setQueryCoord] = useState<{ x: number; y: number }>({ x: 220, y: 160 });
  const [activeCluster, setActiveCluster] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // MLOps DAG Simulation State
  const [dagStep, setDagStep] = useState<number>(5);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Vector Space Canvas Rendering
  useEffect(() => {
    if (activeTab !== 'vector-space') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    const height = (canvas.height = 300);

    const isDark = theme === 'dark';
    ctx.clearRect(0, 0, width, height);

    // Coordinate Grid lines
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 40; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 40; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Centroids (Clusters)
    const clusters = [
      { x: width * 0.32, y: height * 0.45, label: 'Cluster Alpha (Vectors)', color: isDark ? '#3B82F6' : '#1D4ED8' },
      { x: width * 0.72, y: height * 0.38, label: 'Cluster Beta (Vectors)', color: isDark ? '#10B981' : '#059669' },
      { x: width * 0.52, y: height * 0.78, label: 'Target Record', color: isDark ? '#EF4444' : '#DC2626' },
    ];

    // Draw cluster halos and items
    clusters.forEach((c) => {
      const radius = 80 * (1 - threshold * 0.5);
      ctx.beginPath();
      ctx.arc(c.x, c.y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = c.color;
      ctx.globalAlpha = 0.3;
      ctx.stroke();
      ctx.fillStyle = c.color;
      ctx.globalAlpha = 0.05;
      ctx.fill();
      ctx.globalAlpha = 1.0;

      // Centroid
      ctx.beginPath();
      ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();

      // Label
      ctx.font = '10px monospace';
      ctx.fillStyle = isDark ? '#94A3B8' : '#475569';
      ctx.fillText(c.label, c.x - 35, c.y - 10);
    });

    // Draw Query Point
    ctx.beginPath();
    ctx.arc(queryCoord.x, queryCoord.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? '#F59E0B' : '#D97706';
    ctx.fill();

    // Traversal Line
    const target = clusters[activeCluster];
    ctx.beginPath();
    ctx.moveTo(queryCoord.x, queryCoord.y);
    ctx.lineTo(target.x, target.y);
    ctx.strokeStyle = isDark ? '#F59E0B' : '#D97706';
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.font = '10px monospace';
    ctx.fillStyle = isDark ? '#F3F4F6' : '#111827';
    ctx.fillText('Probe q', queryCoord.x + 8, queryCoord.y - 6);
  }, [activeTab, theme, threshold, queryCoord, activeCluster]);

  const targetX = 190;
  const targetY = 150;
  const dx = queryCoord.x - targetX;
  const dy = queryCoord.y - targetY;
  const euclideanDist = Math.sqrt(dx * dx + dy * dy);
  const normalizedDistance = Math.min(1.0, euclideanDist / 240);
  const cosineSim = Math.max(0, 1 - normalizedDistance * 0.85);
  const isMatch = cosineSim >= threshold;

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setQueryCoord({ x, y });
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setDagStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setDagStep(step);
      if (step >= 5) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 400);
  };

  const dagNodes = [
    { name: 'Schema Gate', tool: 'Pydantic v2', latency: '4ms', hash: 'sha256:4a8b' },
    { name: 'Versioning', tool: 'DVC Remote', latency: '12ms', hash: 'dvc:99c1' },
    { name: 'Training', tool: 'XGBoost / Scikit', latency: '780ms', hash: 'mlflow:7f0e' },
    { name: 'Registry', tool: 'MLflow Tracking', latency: '18ms', hash: 'run:0391' },
    { name: 'Container', tool: 'Docker Multi-Stage', latency: '42ms', hash: 'sha:88b2' },
    { name: 'Serving', tool: 'FastAPI Rest', latency: '28ms', hash: 'api:v1.2' },
  ];

  return (
    <section id="technical-systems" aria-label="Technical Systems Depth & Visualizer" className="py-12 sm:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Section Header */}
        <MotionReveal delay={0.1} yOffset={20}>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
            <div>
              <div className="font-mono text-xs text-[var(--signal-amber)] uppercase tracking-wider font-semibold">
                SYSTEMS DEPTH // INTERACTIVE LAB
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Technical Systems & Mathematical Architecture
              </h2>
            </div>

            {/* Controls */}
            <div className="flex items-center p-1 glass-panel-subtle rounded-lg font-mono text-xs">
              <button
                onClick={() => setActiveTab('vector-space')}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 ${
                  activeTab === 'vector-space'
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Network className="w-3.5 h-3.5" />
                <span>Vector Space</span>
              </button>
              <button
                onClick={() => setActiveTab('mlops-dag')}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 ${
                  activeTab === 'mlops-dag'
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>MLOps DAG</span>
              </button>
              <button
                onClick={() => setActiveTab('biometric-gate')}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 ${
                  activeTab === 'biometric-gate'
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <ScanFace className="w-3.5 h-3.5" />
                <span>Biometrics</span>
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Tab 1: Vector Space */}
        {activeTab === 'vector-space' && (
          <MotionReveal delay={0.15} yOffset={25}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 glass-panel rounded-2xl p-5 space-y-3 shadow-lg">
                <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                  <span>VECTOR EMBEDDING SPACE (CLICK TO RELOCATE PROBE)</span>
                  <span className="text-[var(--accent-primary)] font-semibold">Fast Similarity Search</span>
                </div>

                <div className="relative border border-[var(--border-subtle)] rounded-xl glass-panel-subtle cursor-crosshair overflow-hidden">
                  <canvas ref={canvasRef} onClick={handleCanvasClick} className="w-full h-[280px] block" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs pt-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[var(--text-muted)] text-[11px]">Target:</span>
                    <button
                      onClick={() => setActiveCluster(0)}
                      className={`px-2 py-0.5 rounded ${activeCluster === 0 ? 'bg-[var(--accent-primary)] text-white' : 'glass-panel-subtle'}`}
                    >
                      Alpha
                    </button>
                    <button
                      onClick={() => setActiveCluster(1)}
                      className={`px-2 py-0.5 rounded ${activeCluster === 1 ? 'bg-[var(--signal-emerald)] text-white' : 'glass-panel-subtle'}`}
                    >
                      Beta
                    </button>
                    <button
                      onClick={() => setActiveCluster(2)}
                      className={`px-2 py-0.5 rounded ${activeCluster === 2 ? 'bg-red-500 text-white' : 'glass-panel-subtle'}`}
                    >
                      Anomaly
                    </button>
                  </div>
                  <span className="text-[var(--text-muted)] text-[11px]">EUCLIDEAN PROJECTION</span>
                </div>
              </div>

              {/* Threshold Controls */}
              <div className="lg:col-span-4 glass-panel rounded-2xl p-5 space-y-4 shadow-lg font-mono text-xs">
                <div className="font-semibold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 flex justify-between">
                  <span>METRIC DISTANCES</span>
                  <span className="text-[var(--signal-amber)]">CALIBRATED</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>Threshold (τ):</span>
                    <span className="font-bold text-[var(--text-primary)]">{threshold.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.4"
                    max="0.95"
                    step="0.01"
                    value={threshold}
                    onChange={(e) => setThreshold(parseFloat(e.target.value))}
                    aria-label="Decision Threshold Slider"
                    className="w-full accent-[var(--accent-primary)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[var(--text-muted)]">
                    <span>Relaxed</span>
                    <span>Strict (FAR &lt; 0.2%)</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                  <div className="p-2.5 glass-panel-subtle rounded-lg flex justify-between">
                    <span className="text-[var(--text-muted)]">Cosine Similarity:</span>
                    <span className="font-bold text-[var(--text-primary)]">{cosineSim.toFixed(4)}</span>
                  </div>
                  <div className="p-2.5 glass-panel-subtle rounded-lg flex justify-between">
                    <span className="text-[var(--text-muted)]">Euclidean Dist:</span>
                    <span className="font-bold text-[var(--text-primary)]">{normalizedDistance.toFixed(4)}</span>
                  </div>

                  <div
                    className={`p-3 rounded-xl flex items-center space-x-2 ${
                      isMatch
                        ? 'bg-[var(--signal-emerald-tint)] text-[var(--signal-emerald)] border border-[var(--signal-emerald)]'
                        : 'bg-red-500/10 text-red-500 border border-red-500/30'
                    }`}
                  >
                    {isMatch ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
                    <span className="font-bold text-xs uppercase">
                      {isMatch ? 'VERIFIED MATCH // FAR < 0.2%' : 'REJECTED // DISTANCE OUT OF BOUNDS'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        )}

        {/* Tab 2: MLOps DAG */}
        {activeTab === 'mlops-dag' && (
          <MotionReveal delay={0.15} yOffset={25}>
            <div className="glass-panel rounded-2xl p-6 space-y-6 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                <div className="font-mono text-xs">
                  <div className="font-bold text-[var(--text-primary)] uppercase">
                    Deterministic Directed Acyclic Graph (DAG) Trace
                  </div>
                  <div className="text-[var(--text-secondary)] text-[11px]">
                    Immutable DVC data hashes & reproducible MLflow tracking
                  </div>
                </div>

                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-mono text-xs bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white disabled:opacity-50 transition-colors shadow-xs"
                >
                  {isSimulating ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isSimulating ? 'SIMULATING...' : 'TRIGGER TRACE'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 font-mono text-xs">
                {dagNodes.map((node, idx) => {
                  const isCompleted = idx <= dagStep;
                  return (
                    <div
                      key={node.name}
                      className={`p-3 rounded-xl border transition-all ${
                        isCompleted
                          ? 'glass-panel text-[var(--text-primary)] shadow-xs'
                          : 'glass-panel-subtle opacity-40'
                      }`}
                    >
                      <div className="flex justify-between text-[10px] text-[var(--text-muted)] pb-1">
                        <span>NODE 0{idx + 1}</span>
                        <span className="text-[var(--accent-primary)] font-semibold">{node.latency}</span>
                      </div>
                      <div className="font-bold text-xs">{node.name}</div>
                      <div className="text-[10px] text-[var(--text-secondary)]">{node.tool}</div>
                      <div className="mt-1.5 pt-1 border-t border-[var(--border-subtle)] text-[10px] text-[var(--signal-amber)] truncate">
                        {node.hash}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionReveal>
        )}

        {/* Tab 3: Biometrics Gate */}
        {activeTab === 'biometric-gate' && (
          <MotionReveal delay={0.15} yOffset={25}>
            <div className="glass-panel rounded-2xl p-6 space-y-4 shadow-lg">
              <div className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase border-b border-[var(--border-subtle)] pb-2">
                Pre-Neural Image Quality Gates & Morphing Filter
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 glass-panel-subtle rounded-xl space-y-1.5">
                  <div className="text-[var(--signal-cyan)] font-bold">01. Quality Gate</div>
                  <p className="text-xs text-[var(--text-secondary)] font-sans">
                    Image quality evaluation ensuring sharp, clear captures prior to inference.
                  </p>
                </div>

                <div className="p-4 glass-panel-subtle rounded-xl space-y-1.5">
                  <div className="text-[var(--signal-amber)] font-bold">02. Integrity Check</div>
                  <p className="text-xs text-[var(--text-secondary)] font-sans">
                    Artifact analysis uncovering interpolation inconsistencies and image tampering.
                  </p>
                </div>

                <div className="p-4 glass-panel-subtle rounded-xl space-y-1.5">
                  <div className="text-[var(--signal-emerald)] font-bold">03. Landmark Alignment</div>
                  <p className="text-xs text-[var(--text-secondary)] font-sans">
                    Geometric facial landmark alignment normalizing rotation, pitch, and scale.
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>
        )}
      </div>
    </section>
  );
};
