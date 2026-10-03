import React from 'react';

export default function Badge({ 
  children, 
  variant = 'indigo', 
  size = 'sm', 
  className = '' 
}) {
  const variants = {
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    slate: "bg-slate-800 text-slate-300 border-slate-700"
  };

  const sizes = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm"
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-md border tracking-wide ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
