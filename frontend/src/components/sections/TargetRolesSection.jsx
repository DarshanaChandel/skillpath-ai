import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { POPULAR_CAREER_TRACKS } from '../../data/landingData';
import { TrendingUp, Briefcase } from 'lucide-react';

export default function TargetRolesSection({ onSelectRole }) {
  return (
    <section id="career-tracks" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" size="md">Industry Benchmark Library</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Target Career Benchmarks
          </h2>
          <p className="text-base text-slate-300">
            Compare your profile against standardized industry benchmarks curated for high-demand software engineering paths.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_CAREER_TRACKS.map((track, idx) => (
            <Card key={idx} className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                
                <div className="flex items-center justify-between">
                  <Badge variant={track.badgeColor} size="xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {track.demand}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">{track.avgSalary}</span>
                </div>

                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                  {track.title}
                </h3>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Core Target Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {track.keySkills.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800/80 font-medium"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <button
                  onClick={onSelectRole}
                  className="w-full py-2 bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-300 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  Analyze Profile Against {track.title} →
                </button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
