import React from 'react';
import { Sparkles, Globe, Share2, Code2, Heart } from 'lucide-react';

export default function Footer({ onNavigateDashboard }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Brand & Tagline */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">SkillPath AI</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Understand your skills. Discover your gaps. Build your career.
          </p>
          <p className="text-[11px] text-slate-500">
            Empowering Computer Science & Engineering students with AI-driven skill readiness benchmarks.
          </p>
        </div>

        {/* Col 2: Platform Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#features" className="hover:text-white transition-colors">Skill Assessment</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Career Readiness Scoring</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Skill Gap Detection</a></li>
            <li><button onClick={onNavigateDashboard} className="hover:text-indigo-400 text-left transition-colors">Student Profile Analyzer</button></li>
          </ul>
        </div>

        {/* Col 3: Target Roles */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Career Tracks</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#career-tracks" className="hover:text-white transition-colors">Full Stack Engineer</a></li>
            <li><a href="#career-tracks" className="hover:text-white transition-colors">Machine Learning Engineer</a></li>
            <li><a href="#career-tracks" className="hover:text-white transition-colors">Data Scientist</a></li>
            <li><a href="#career-tracks" className="hover:text-white transition-colors">Frontend & Backend Engineer</a></li>
          </ul>
        </div>

        {/* Col 4: Architecture */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">System Architecture</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Designed with separated tiers: React Frontend, Node/Express Backend, MongoDB storage, and Python FastAPI ML service.
          </p>
          <div className="flex items-center space-x-3 text-slate-400 pt-2">
            <a href="#" className="hover:text-indigo-400 transition-colors" title="Global Network"><Globe className="w-4 h-4" /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors" title="Share"><Share2 className="w-4 h-4" /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors" title="Code Repository"><Code2 className="w-4 h-4" /></a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} SkillPath AI. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 flex items-center gap-1">
          Built for production quality software engineering
        </p>
      </div>
    </footer>
  );
}
