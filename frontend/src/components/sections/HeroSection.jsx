import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Target, BarChart3, ChevronRight, Code } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { LANDING_HERO } from '../../data/landingData';

export default function HeroSection({ onStartClick }) {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center">
              <Badge variant="indigo" size="md">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-indigo-400 animate-pulse" />
                {LANDING_HERO.badge}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Understand your skills. <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200">
                Discover your gaps.
              </span> <br />
              Build your career.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {LANDING_HERO.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onStartClick}
                className="w-full sm:w-auto"
              >
                <span>{LANDING_HERO.primaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <span>{LANDING_HERO.secondaryCta}</span>
                </Button>
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {LANDING_HERO.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
                  <span className="text-xl sm:text-2xl font-black text-white block">{stat.value}</span>
                  <span className="text-xs text-slate-400 block mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Futuristic Live Mockup Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-indigo-950/60 relative overflow-hidden backdrop-blur-xl">
              
              {/* Header inside mockup */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold text-sm">
                    AR
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Alex Rivera</h3>
                    <p className="text-[11px] text-slate-400">Target Role: Full Stack Engineer</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Analyzed
                </span>
              </div>

              {/* Score Dial / Bar */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950/50 p-4 rounded-2xl border border-indigo-500/20 mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-300">Career Readiness Score</span>
                  <span className="text-2xl font-black text-indigo-400">84%</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 h-full w-[84%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  High readiness for Junior Full Stack roles. 2 critical skill gaps identified.
                </p>
              </div>

              {/* Skill Gap Cards */}
              <div className="space-y-3 mb-5">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Skill Gap Analysis</div>
                
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-200 font-medium">React & Node.js</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% Match</span>
                </div>

                <div className="bg-slate-900/90 p-3 rounded-xl border border-amber-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-200 font-medium">Docker Containerization</span>
                  </div>
                  <span className="text-amber-400 font-bold">Skill Gap</span>
                </div>
              </div>

              {/* Action Preview */}
              <button
                onClick={onStartClick}
                className="w-full py-3 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/20"
              >
                <span>Analyze Your Own Skill Vector</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
