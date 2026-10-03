import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

export default function CTASection({ onStartClick }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-cyan-900/20 to-indigo-900/30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-indigo-950/80 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Ready to Accelerate Your Career?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Start Analyzing Your Skill Profile Today
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create your student profile in under 2 minutes, catalog your skills and projects, 
          and discover your exact path to career readiness.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={onStartClick}
          >
            <span>Create Student Profile</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            100% Free for Students
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            No Credit Card Required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Instant Skill Gap Detection
          </span>
        </div>

      </div>
    </section>
  );
}
