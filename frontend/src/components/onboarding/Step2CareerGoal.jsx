import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { CAREER_ROLES } from '../../constants/onboardingData';

const colorMap = {
  indigo:  { card: 'border-indigo-500 bg-indigo-950/30', badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
  blue:    { card: 'border-blue-500 bg-blue-950/30',     badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  cyan:    { card: 'border-cyan-500 bg-cyan-950/30',     badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  emerald: { card: 'border-emerald-500 bg-emerald-950/30', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  teal:    { card: 'border-teal-500 bg-teal-950/30',     badge: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
  purple:  { card: 'border-purple-500 bg-purple-950/30', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
  pink:    { card: 'border-pink-500 bg-pink-950/30',     badge: 'bg-pink-500/20 text-pink-300 border-pink-500/40' },
  rose:    { card: 'border-rose-500 bg-rose-950/30',     badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40' }
};

export default function Step2CareerGoal({ formData, errors, updateField }) {
  return (
    <div className="space-y-8">
      {/* Step heading */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
          <Briefcase className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Target Career Goal</h2>
          <p className="text-sm text-slate-400 mt-1">
            Select the industry role you are working toward. This drives your skill gap analysis.
          </p>
        </div>
      </div>

      {/* Role grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {CAREER_ROLES.map(role => {
          const selected = formData.targetRole === role.id;
          const colors   = colorMap[role.color] || colorMap.indigo;

          return (
            <button
              key={role.id}
              type="button"
              onClick={() => updateField('targetRole', role.id)}
              className={`relative text-left p-5 rounded-2xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 group ${
                selected
                  ? colors.card
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Selected badge */}
              {selected && (
                <span className="absolute top-3 right-3">
                  <CheckCircle2 className="w-5 h-5 text-white opacity-80" />
                </span>
              )}

              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{role.icon}</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                    selected ? colors.badge : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  {role.label}
                </span>
              </div>

              <h3 className={`text-base font-bold mb-1 transition-colors ${selected ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                {role.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{role.description}</p>
            </button>
          );
        })}
      </div>

      {errors.targetRole && (
        <p className="text-xs text-rose-400 font-medium">{errors.targetRole}</p>
      )}
    </div>
  );
}
