import React from 'react';
import { Target, BookOpen, Rocket, CheckCircle2 } from 'lucide-react';

export default function Hero({ activeTab, setActiveTab }) {
  return (
    <div className="relative overflow-hidden bg-slate-900 border-b border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              SkillPath AI — Student Skill & Career Analyzer
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Create and manage your academic & technical profile, set target career roles, catalog your technical skills, 
              projects, and experience in preparation for automated skill gap analysis and readiness scoring.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Frontend React App Active
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                <Target className="w-3.5 h-3.5 text-indigo-400" />
                Profile & Skill Input Ready
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                <Rocket className="w-3.5 h-3.5 text-cyan-400" />
                Modular Architecture
              </span>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex gap-3">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'editor'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Edit Student Profile
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'preview'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              View Profile Summary
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
