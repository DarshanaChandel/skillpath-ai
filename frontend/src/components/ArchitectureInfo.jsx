import React from 'react';
import { Layers, Server, Database, Brain, ArrowRight, CheckCircle2, Circle } from 'lucide-react';

export default function ArchitectureInfo() {
  const components = [
    {
      title: "1. React Frontend",
      tech: "React, Vite, Tailwind CSS, JavaScript",
      status: "Active (Milestone 1)",
      statusColor: "emerald",
      icon: Layers,
      description: "Provides responsive student profile creation, technical skill level entry, project cataloging, and interactive profile views."
    },
    {
      title: "2. Node.js + Express Backend",
      tech: "Node.js, Express.js, REST APIs",
      status: "Initialized Structure",
      statusColor: "indigo",
      icon: Server,
      description: "Will handle RESTful API routes, authentication, input validation, DB operations, and proxying requests to the ML service."
    },
    {
      title: "3. MongoDB Database",
      tech: "MongoDB, Mongoose ORM",
      status: "Pending (Future Milestone)",
      statusColor: "slate",
      icon: Database,
      description: "Will store persistent student profiles, skill taxonomies, target career benchmark vectors, and historical readiness scores."
    },
    {
      title: "4. Python ML Service",
      tech: "Python, FastAPI, Scikit-learn, Pandas, NumPy",
      status: "Pending (Future Milestone)",
      statusColor: "slate",
      icon: Brain,
      description: "Will execute ML algorithms to vectorize skill levels, compute career readiness scores, identify skill gaps, and recommend target learning paths."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            SkillPath AI — Architecture Roadmap & Design
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Modular multi-tier architecture separating User Interface, Backend REST API, Database persistence, and Machine Learning microservice.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            System Data Flow Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Box 1 */}
            <div className="bg-indigo-950/60 border border-indigo-500/50 p-4 rounded-xl text-center shadow-lg shadow-indigo-500/10">
              <span className="text-xs font-bold text-indigo-300 block">Frontend Tier</span>
              <span className="text-sm font-semibold text-white block mt-1">React + Vite</span>
              <span className="text-[10px] text-emerald-400 font-medium block mt-2">✔ Active (Milestone 1)</span>
            </div>

            <div className="hidden md:flex justify-center text-slate-600">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>

            {/* Box 2 */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <span className="text-xs font-bold text-indigo-400 block">Backend Tier</span>
              <span className="text-sm font-semibold text-white block mt-1">Node.js + Express</span>
              <span className="text-[10px] text-slate-400 font-medium block mt-2">Next Milestone</span>
            </div>

            <div className="hidden md:flex justify-center text-slate-600">
              <ArrowRight className="w-6 h-6" />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mt-4">
            
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>

            {/* Box 3 */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <span className="text-xs font-bold text-cyan-400 block">Database Tier</span>
              <span className="text-sm font-semibold text-white block mt-1">MongoDB</span>
              <span className="text-[10px] text-slate-400 font-medium block mt-2">Future Milestone</span>
            </div>

            <div className="hidden md:flex justify-center text-slate-600">
              <ArrowRight className="w-6 h-6" />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mt-4">
            
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>

            {/* Box 4 */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <span className="text-xs font-bold text-purple-400 block">ML Service Tier</span>
              <span className="text-sm font-semibold text-white block mt-1">FastAPI + Scikit-Learn</span>
              <span className="text-[10px] text-slate-400 font-medium block mt-2">Future Milestone</span>
            </div>

          </div>

        </div>

        {/* Detailed Module Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div key={idx} className="bg-slate-950/70 border border-slate-800 p-5 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <h3 className="font-semibold text-white text-base">{comp.title}</h3>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                    comp.status.includes('Active')
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {comp.status}
                  </span>
                </div>
                <p className="text-xs font-mono text-indigo-300">{comp.tech}</p>
                <p className="text-xs text-slate-400">{comp.description}</p>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
