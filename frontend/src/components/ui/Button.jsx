import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  type = 'button',
  onClick,
  ...props 
}) {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 active:scale-[0.98]",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/80 hover:border-slate-600 active:scale-[0.98]",
    outline: "bg-transparent border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800/60 hover:border-slate-500 active:scale-[0.98]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/40"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
