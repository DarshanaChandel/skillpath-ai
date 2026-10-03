import React from 'react';

export default function Card({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowingBorder = false 
}) {
  return (
    <div
      className={`bg-slate-900/80 backdrop-blur border rounded-2xl p-6 transition-all duration-300 ${
        glowingBorder 
          ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/10' 
          : 'border-slate-800/80'
      } ${
        hoverEffect 
          ? 'hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-950/40 hover:-translate-y-1' 
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
