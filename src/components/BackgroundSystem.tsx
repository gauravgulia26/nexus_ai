'use client';

import React from 'react';

export const BackgroundSystem: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Base Dark Deep Base */}
      <div className="absolute inset-0 bg-[#05070b]" />

      {/* 2. Layered Luminous Orbital Glow Spheres */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-cyan-500/7 rounded-full blur-[160px] animate-pulse-subtle" />
      <div
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-indigo-600/6 rounded-full blur-[170px] animate-pulse-subtle"
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className="absolute top-2/3 -left-32 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] animate-pulse-subtle"
        style={{ animationDelay: '4.5s' }}
      />

      {/* 3. Subtle Clean Grid & Dots (Atmospheric only, non-distracting) */}
      <div className="absolute inset-0 terminal-grid opacity-25" />
      <div className="absolute inset-0 terminal-dots opacity-15" />

      {/* 4. Minimalist Ambient Structural Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-08" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <line x1="15%" y1="20%" x2="45%" y2="35%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="45%" y1="35%" x2="80%" y2="25%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="25%" y1="65%" x2="65%" y2="55%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="65%" y1="55%" x2="85%" y2="75%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />

        <circle cx="15%" cy="20%" r="2" fill="#00f0ff" />
        <circle cx="45%" cy="35%" r="2.5" fill="#818cf8" />
        <circle cx="80%" cy="25%" r="2" fill="#10b981" />
        <circle cx="25%" cy="65%" r="2" fill="#00f0ff" />
        <circle cx="65%" cy="55%" r="2.5" fill="#818cf8" />
        <circle cx="85%" cy="75%" r="2" fill="#10b981" />
      </svg>

      {/* 5. Top Atmospheric Accent Horizon Beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </div>
  );
};
