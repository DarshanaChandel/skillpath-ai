import React from 'react';
import Badge from '../ui/Badge';
import { HOW_IT_WORKS_STEPS } from '../../data/landingData';
import { ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald" size="md">Simple 4-Step Process</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How SkillPath AI Works
          </h2>
          <p className="text-base text-slate-300">
            A structured workflow designed for computer science students to transform raw skills into industry-aligned career readiness.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-indigo-500/40 group-hover:text-indigo-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center text-[11px] text-slate-500 font-mono">
                  <span>Phase {idx + 1} Pipeline</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
