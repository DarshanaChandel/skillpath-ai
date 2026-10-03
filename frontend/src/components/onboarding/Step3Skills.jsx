import React, { useState } from 'react';
import { Code, Plus, Trash2, ChevronDown } from 'lucide-react';
import { SKILL_CATEGORIES, PROFICIENCY_LEVELS } from '../../constants/onboardingData';

const proficiencyStyle = {
  beginner:     'bg-slate-800 text-slate-300 border-slate-700',
  intermediate: 'bg-indigo-600/80 text-white border-indigo-500',
  advanced:     'bg-cyan-600/80 text-white border-cyan-500'
};

const EMPTY_SKILL = { name: '', category: '', proficiency: '' };

export default function Step3Skills({ formData, errors, addItem, removeItem }) {
  const [draft, setDraft]         = useState(EMPTY_SKILL);
  const [draftError, setDraftError] = useState({});

  const handleAdd = () => {
    const e = {};
    if (!draft.name.trim())  e.name = 'Skill name required.';
    if (!draft.category)     e.category = 'Category required.';
    if (!draft.proficiency)  e.proficiency = 'Proficiency required.';
    if (Object.keys(e).length) { setDraftError(e); return; }

    addItem('skills', { ...draft, id: Date.now() });
    setDraft(EMPTY_SKILL);
    setDraftError({});
  };

  return (
    <div className="space-y-8">
      {/* Step heading */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
          <Code className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          <p className="text-sm text-slate-400 mt-1">
            Add your technical skills and self-assess your proficiency for each one.
          </p>
        </div>
      </div>

      {/* Add skill form panel */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-5">
        <h3 className="text-sm font-semibold text-slate-300">Add a Skill</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Skill name */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Skill Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. React.js, Python, Docker…"
              value={draft.name}
              onChange={e => { setDraft(d => ({ ...d, name: e.target.value })); setDraftError(e => ({ ...e, name: undefined })); }}
              className={`w-full bg-slate-900 border rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
                draftError.name ? 'border-rose-500/60 focus:ring-rose-500/30' : 'border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500/60'
              }`}
            />
            {draftError.name && <p className="mt-1 text-xs text-rose-400">{draftError.name}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Category <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <select
                value={draft.category}
                onChange={e => { setDraft(d => ({ ...d, category: e.target.value })); setDraftError(e => ({ ...e, category: undefined })); }}
                className={`w-full appearance-none bg-slate-900 border rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 transition-all ${
                  draftError.category ? 'border-rose-500/60 focus:ring-rose-500/30' : 'border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500/60'
                }`}
              >
                <option value="">Select category…</option>
                {SKILL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
            {draftError.category && <p className="mt-1 text-xs text-rose-400">{draftError.category}</p>}
          </div>
        </div>

        {/* Proficiency */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Proficiency Level <span className="text-rose-400">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PROFICIENCY_LEVELS.map(p => (
              <button
                key={p.value}
                type="button"
                onClick={() => { setDraft(d => ({ ...d, proficiency: p.value })); setDraftError(e => ({ ...e, proficiency: undefined })); }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  draft.proficiency === p.value
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="font-bold text-sm">{p.label}</div>
                <div className="text-[11px] opacity-75 mt-0.5 leading-relaxed">{p.description}</div>
              </button>
            ))}
          </div>
          {draftError.proficiency && <p className="mt-2 text-xs text-rose-400">{draftError.proficiency}</p>}
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Skill
        </button>
      </div>

      {/* Skills added */}
      {formData.skills.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Added Skills ({formData.skills.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {formData.skills.map((sk, idx) => (
              <div
                key={sk.id}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-start justify-between gap-3"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="font-semibold text-white text-sm truncate">{sk.name}</div>
                  <div className="text-[11px] text-slate-400">{sk.category}</div>
                  <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-md border capitalize ${proficiencyStyle[sk.proficiency]}`}>
                    {sk.proficiency}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem('skills', idx)}
                  className="text-slate-600 hover:text-rose-400 transition-colors shrink-0 mt-0.5"
                  aria-label={`Remove ${sk.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border border-dashed border-slate-800 rounded-2xl py-10 text-center text-sm text-slate-500">
          No skills added yet. Use the form above to add your first skill.
        </div>
      )}

      {errors.skills && (
        <p className="text-xs text-rose-400 font-medium">{errors.skills}</p>
      )}
    </div>
  );
}
