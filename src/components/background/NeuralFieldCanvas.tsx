'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

type SectionType = 'hero' | 'experience' | 'projects' | 'research' | 'skills' | 'principles' | 'contact';

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  cluster: number;
  orbitAngle: number;
  orbitRadius: number;
  orbitSpeed: number;
}

interface DataPacket {
  x: number;
  y: number;
  dir: 'h' | 'v';
  speed: number;
  length: number;
}

export const NeuralFieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionType>('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      const sections: SectionType[] = ['hero', 'experience', 'projects', 'research', 'skills', 'principles', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const nodeCount = isMobile ? 30 : 60;

    // Initialize constellation nodes
    const nodes: NodePoint[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.35),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.35),
        radius: Math.random() * 1.5 + 1.2,
        cluster: i % 4,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 120 + 40,
        orbitSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    // Initialize data pipeline packets for experience mode
    const packets: DataPacket[] = [];
    for (let i = 0; i < 18; i++) {
      packets.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dir: Math.random() > 0.5 ? 'h' : 'v',
        speed: Math.random() * 1.8 + 1.2,
        length: Math.random() * 24 + 16,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const isDark = theme === 'dark';
    let time = 0;

    // Color definitions
    const primaryAccentRgb = isDark ? '59, 130, 246' : '26, 86, 219';
    const emeraldAccentRgb = isDark ? '16, 185, 129' : '5, 150, 105';
    const amberAccentRgb = isDark ? '245, 158, 11' : '217, 119, 6';
    const cyanAccentRgb = isDark ? '34, 211, 238' : '2, 132, 199';
    const baseNodeColor = isDark ? 'rgba(148, 163, 184, 0.45)' : 'rgba(71, 85, 105, 0.38)';

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Section-specific background rendering
      switch (activeSection) {
        // ==========================================
        // 1. HERO: Latent Vector Constellation
        // ==========================================
        case 'hero': {
          // Subtle coordinate grid dots
          const spacing = 100;
          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(15, 18, 22, 0.03)';
          for (let x = spacing; x < width; x += spacing) {
            for (let y = spacing; y < height; y += spacing) {
              ctx.fillRect(x - 1, y - 1, 2, 2);
            }
          }

          // Node physics & constellation links
          const maxDist = isMobile ? 110 : 150;
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (!prefersReducedMotion) {
              node.x += node.vx;
              node.y += node.vy;
              if (node.x < 0 || node.x > width) node.vx *= -1;
              if (node.y < 0 || node.y > height) node.vy *= -1;

              const dxM = mouseX - node.x;
              const dyM = mouseY - node.y;
              const dM = Math.sqrt(dxM * dxM + dyM * dyM);
              if (dM < 160 && dM > 0) {
                const f = (160 - dM) / 160;
                node.x -= (dxM / dM) * f * 0.7;
                node.y -= (dyM / dM) * f * 0.7;
              }
            }

            for (let j = i + 1; j < nodes.length; j++) {
              const other = nodes[j];
              const dx = other.x - node.x;
              const dy = other.y - node.y;
              const d = Math.sqrt(dx * dx + dy * dy);
              if (d < maxDist) {
                const opacity = (1 - d / maxDist) * (isDark ? 0.3 : 0.22);
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(${primaryAccentRgb}, ${opacity})`;
                ctx.lineWidth = 0.85;
                ctx.stroke();
              }
            }

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = node.cluster === 0 ? `rgba(${amberAccentRgb}, 0.8)` : baseNodeColor;
            ctx.fill();
          }
          break;
        }

        // ==========================================
        // 2. EXPERIENCE: Enterprise Pipeline Flowlines
        // ==========================================
        case 'experience': {
          const stepY = isMobile ? 90 : 110;
          const stepX = isMobile ? 120 : 160;

          // Static pipeline bus lines
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 18, 22, 0.05)';
          ctx.lineWidth = 1;
          for (let y = stepY; y < height; y += stepY) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }
          for (let x = stepX; x < width; x += stepX) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
          }

          // Luminous data flow packets moving along tracks
          if (!prefersReducedMotion) {
            packets.forEach((p) => {
              if (p.dir === 'h') {
                p.x += p.speed;
                if (p.x > width + p.length) {
                  p.x = -p.length;
                  p.y = Math.floor(Math.random() * (height / stepY)) * stepY;
                }
                const grad = ctx.createLinearGradient(p.x - p.length, p.y, p.x, p.y);
                grad.addColorStop(0, `rgba(${emeraldAccentRgb}, 0)`);
                grad.addColorStop(1, `rgba(${emeraldAccentRgb}, ${isDark ? 0.65 : 0.45})`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(p.x - p.length, p.y);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
              } else {
                p.y += p.speed;
                if (p.y > height + p.length) {
                  p.y = -p.length;
                  p.x = Math.floor(Math.random() * (width / stepX)) * stepX;
                }
                const grad = ctx.createLinearGradient(p.x, p.y - p.length, p.x, p.y);
                grad.addColorStop(0, `rgba(${primaryAccentRgb}, 0)`);
                grad.addColorStop(1, `rgba(${primaryAccentRgb}, ${isDark ? 0.65 : 0.45})`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y - p.length);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
              }
            });
          }
          break;
        }

        // ==========================================
        // 3. PROJECTS: Multi-Agent Telemetry Matrix
        // ==========================================
        case 'projects': {
          const cols = isMobile ? 6 : 12;
          const rows = isMobile ? 8 : 10;
          const cellW = width / cols;
          const cellH = height / rows;

          const sweepRadius = ((time * 70) % Math.max(width, height)) * 1.2;

          for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
              const px = c * cellW + cellW * 0.5;
              const py = r * cellH + cellH * 0.5;
              const dx = px - width * 0.5;
              const dy = py - height * 0.5;
              const distFromCenter = Math.sqrt(dx * dx + dy * dy);

              // Wave interaction
              const waveDiff = Math.abs(distFromCenter - sweepRadius);
              const highlight = waveDiff < 80 ? (1 - waveDiff / 80) : 0;

              // Grid node crosshair
              const size = highlight > 0 ? 3.5 : 2;
              ctx.fillStyle = highlight > 0
                ? `rgba(${cyanAccentRgb}, ${isDark ? 0.75 : 0.55})`
                : isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 18, 22, 0.04)';
              ctx.fillRect(px - size / 2, py - size / 2, size, size);

              if (highlight > 0.4 && c % 2 === 0) {
                ctx.strokeStyle = `rgba(${primaryAccentRgb}, ${highlight * 0.3})`;
                ctx.lineWidth = 0.7;
                ctx.strokeRect(px - 14, py - 14, 28, 28);
              }
            }
          }
          break;
        }

        // ==========================================
        // 4. RESEARCH: Harmonic Spectral Waveform
        // ==========================================
        case 'research': {
          const waveCount = 4;
          const midY = height * 0.5;

          for (let w = 0; w < waveCount; w++) {
            const freq = 0.0022 + w * 0.0008;
            const amp = (isMobile ? 35 : 65) + w * 15;
            const phase = time * (0.8 + w * 0.3) + w * 1.5;

            ctx.beginPath();
            for (let x = 0; x <= width; x += 12) {
              const y = midY + Math.sin(x * freq + phase) * amp * Math.cos((x / width - 0.5) * 3);
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            const alpha = (0.28 - w * 0.05) * (isDark ? 1 : 0.75);
            ctx.strokeStyle = w % 2 === 0
              ? `rgba(${cyanAccentRgb}, ${alpha})`
              : `rgba(${primaryAccentRgb}, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }

          // Subtle mathematical reference lines
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 18, 22, 0.04)';
          ctx.beginPath();
          ctx.moveTo(0, midY);
          ctx.lineTo(width, midY);
          ctx.stroke();
          break;
        }

        // ==========================================
        // 5. SKILLS: Latent Space Cluster Manifolds
        // ==========================================
        case 'skills': {
          const centroids = [
            { x: width * 0.25, y: height * 0.3, label: 'ML-CORE', color: primaryAccentRgb },
            { x: width * 0.75, y: height * 0.3, label: 'GENAI', color: cyanAccentRgb },
            { x: width * 0.25, y: height * 0.7, label: 'MLOPS', color: amberAccentRgb },
            { x: width * 0.75, y: height * 0.7, label: 'INFRA', color: emeraldAccentRgb },
          ];

          // Draw orbital centroids & radial halos
          centroids.forEach((c) => {
            const radGrad = ctx.createRadialGradient(c.x, c.y, 4, c.x, c.y, 140);
            radGrad.addColorStop(0, `rgba(${c.color}, ${isDark ? 0.14 : 0.09})`);
            radGrad.addColorStop(1, `rgba(${c.color}, 0)`);
            ctx.fillStyle = radGrad;
            ctx.beginPath();
            ctx.arc(c.x, c.y, 140, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(c.x, c.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${c.color}, 0.8)`;
            ctx.fill();
          });

          // Orbiting particles around centroids
          nodes.slice(0, 40).forEach((node, i) => {
            const centroid = centroids[node.cluster];
            node.orbitAngle += node.orbitSpeed;
            node.x = centroid.x + Math.cos(node.orbitAngle) * node.orbitRadius;
            node.y = centroid.y + Math.sin(node.orbitAngle) * (node.orbitRadius * 0.65);

            ctx.beginPath();
            ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${centroid.color}, ${isDark ? 0.6 : 0.45})`;
            ctx.fill();

            // Inter-node cluster lines
            if (i % 2 === 0) {
              ctx.beginPath();
              ctx.moveTo(centroid.x, centroid.y);
              ctx.lineTo(node.x, node.y);
              ctx.strokeStyle = `rgba(${centroid.color}, ${isDark ? 0.08 : 0.05})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          });
          break;
        }

        // ==========================================
        // 6. PRINCIPLES: Minimalist Drafting Matrix
        // ==========================================
        case 'principles': {
          const gridStep = isMobile ? 80 : 120;
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 18, 22, 0.035)';
          ctx.lineWidth = 0.75;

          for (let x = gridStep; x < width; x += gridStep) {
            for (let y = gridStep; y < height; y += gridStep) {
              // Minimalist blueprint crosshairs
              const arm = 6;
              ctx.beginPath();
              ctx.moveTo(x - arm, y);
              ctx.lineTo(x + arm, y);
              ctx.moveTo(x, y - arm);
              ctx.lineTo(x, y + arm);
              ctx.stroke();
            }
          }

          // Rotating central reticle
          const cx = width * 0.5;
          const cy = height * 0.5;
          const reticleRadius = isMobile ? 120 : 180;
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(time * 0.1);
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 18, 22, 0.06)';
          ctx.setLineDash([4, 12]);
          ctx.beginPath();
          ctx.arc(0, 0, reticleRadius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          break;
        }

        // ==========================================
        // 7. CONTACT: Converging Radial Focal Aura
        // ==========================================
        case 'contact': {
          const cx = width * 0.5;
          const cy = height * 0.55;
          const maxR = Math.max(width, height) * 0.65;
          const ringCount = isMobile ? 4 : 7;

          for (let r = 1; r <= ringCount; r++) {
            const baseRadius = (r / ringCount) * maxR;
            const currentRadius = (baseRadius - (time * 20) % (maxR / ringCount) + maxR) % maxR;
            const alpha = (1 - currentRadius / maxR) * (isDark ? 0.18 : 0.12);

            ctx.beginPath();
            ctx.arc(cx, cy, currentRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${primaryAccentRgb}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Central focal beacon
          const beaconGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 220);
          beaconGrad.addColorStop(0, `rgba(${primaryAccentRgb}, ${isDark ? 0.16 : 0.1})`);
          beaconGrad.addColorStop(1, `rgba(${primaryAccentRgb}, 0)`);
          ctx.fillStyle = beaconGrad;
          ctx.beginPath();
          ctx.arc(cx, cy, 220, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [theme, activeSection]);

  // Ambient aura position and color based on activeSection
  const auraStyles: Record<SectionType, { top: string; left: string; color: string; size: string }> = {
    hero: { top: '15%', left: '75%', color: 'var(--accent-tint)', size: '600px' },
    experience: { top: '35%', left: '15%', color: 'var(--signal-emerald-tint)', size: '550px' },
    projects: { top: '45%', left: '70%', color: 'var(--signal-cyan-tint)', size: '650px' },
    research: { top: '55%', left: '25%', color: 'var(--accent-tint)', size: '500px' },
    skills: { top: '65%', left: '75%', color: 'var(--signal-amber-tint)', size: '600px' },
    principles: { top: '75%', left: '30%', color: 'var(--accent-tint)', size: '500px' },
    contact: { top: '85%', left: '50%', color: 'var(--accent-tint)', size: '700px' },
  };

  const currentAura = auraStyles[activeSection] || auraStyles.hero;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Ambient Color Orb that transitions smoothly with active section */}
      <div
        className="absolute rounded-full blur-3xl opacity-60 transition-all duration-1000 ease-out"
        style={{
          top: currentAura.top,
          left: currentAura.left,
          width: currentAura.size,
          height: currentAura.size,
          transform: 'translate(-50%, -50%)',
          backgroundColor: currentAura.color,
        }}
      />

      {/* Dynamic Section-Reactive Procedural Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-85 transition-opacity duration-700"
      />
    </div>
  );
};
