'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundSystem: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Base Dark Deep Base */}
      <div className="absolute inset-0 bg-[#05070b]" />

      {/* 2. Layered Luminous Orbital Glow Spheres */}
      <div className="absolute -top-32 left-1/5 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-subtle" />
      <div
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse-subtle"
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className="absolute top-2/3 -left-32 w-[700px] h-[700px] bg-emerald-500/8 rounded-full blur-[170px] animate-pulse-subtle"
        style={{ animationDelay: '4.5s' }}
      />
      <div
        className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-cyan-600/8 rounded-full blur-[150px] animate-pulse-subtle"
        style={{ animationDelay: '1.5s' }}
      />

      {/* 3. Terminal Grid & Isometric Lines */}
      <div className="absolute inset-0 terminal-grid opacity-75" />
      <div className="absolute inset-0 terminal-dots opacity-35" />

      {/* 4. Subtle Ambient Neural Geometric Nodes & Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Ambient Structural Mesh Lines */}
        <line x1="10%" y1="15%" x2="40%" y2="35%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="40%" y1="35%" x2="85%" y2="20%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="20%" y1="70%" x2="60%" y2="55%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="60%" y1="55%" x2="90%" y2="80%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />

        {/* Glowing Neural Points */}
        <circle cx="10%" cy="15%" r="3" fill="#00f0ff" className="animate-pulse" />
        <circle cx="40%" cy="35%" r="4" fill="#818cf8" className="animate-pulse" />
        <circle cx="85%" cy="20%" r="3.5" fill="#10b981" className="animate-pulse" />
        <circle cx="20%" cy="70%" r="3" fill="#00f0ff" className="animate-pulse" />
        <circle cx="60%" cy="55%" r="4.5" fill="#818cf8" className="animate-pulse" />
        <circle cx="90%" cy="80%" r="3" fill="#10b981" className="animate-pulse" />
      </svg>

      {/* 5. Top Atmospheric Accent Horizon Beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </div>
  );
};
