import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { LANDING_FEATURES } from '../../data/landingData';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="cyan" size="md">Core Platform Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Comprehensive Career Intelligence Features
          </h2>
          <p className="text-base text-slate-300">
            From skill vector evaluation to personalized project suggestions, SkillPath AI provides 
            every tool needed to bridge the gap between academic education and industry expectations.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANDING_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} className="flex flex-col justify-between space-y-4 group">
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="slate" size="xs">{feature.badge}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-indigo-400">{feature.highlight}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
