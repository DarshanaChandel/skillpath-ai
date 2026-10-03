import React, { useState } from 'react';
import { Briefcase, Plus, Trash2, ChevronDown } from 'lucide-react';
import { EXPERIENCE_TYPES } from '../../constants/onboardingData';

const EMPTY_EXP = { type: '', title: '', organization: '', duration: '', description: '' };

export default function Step5Experience({ formData, addItem, removeItem }) {
  const [draft, setDraft]           = useState(EMPTY_EXP);
  const [draftErrors, setDraftErrors] = useState({});

  const update = (field, val) => {
    setDraft(d => ({ ...d, [field]: val }));
    setDraftErrors(e => ({ ...e, [field]: undefined }));
  };

  const handleAdd = () => {
    const e = {};
    if (!draft.type)          e.type = 'Experience type required.';
    if (!draft.title.trim())  e.title = 'Title is required.';
    if (Object.keys(e).length) { setDraftErrors(e); return; }
    addItem('experiences', { ...draft, id: Date.now() });
    setDraft(EMPTY_EXP);
    setDraftErrors({});
  };

  const inputClass = (field) =>
    `w-full bg-slate-900 border rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
      draftErrors[field]
        ? 'border-rose-500/60 focus:ring-rose-500/30'
        : 'border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500/60'
    }`;

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
          <Briefcase className="w-6 h-6 text-amber-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Experience</h2>
          <p className="text-sm text-slate-400 mt-1">
            Add internships, hackathons, leadership roles, certifications, and any other relevant experience.
          </p>
        </div>
      </div>

      {/* Add experience panel */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-5">
        <h3 className="text-sm font-semibold text-slate-300">Add an Experience</h3>

        {/* Type + Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Type <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <select
                value={draft.type}
                onChange={e => update('type', e.target.value)}
                className={`appearance-none ${inputClass('type')}`}
              >
                <option value="">Select type…</option>
                {EXPERIENCE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
            {draftErrors.type && <p className="mt-1 text-xs text-rose-400">{draftErrors.type}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Title / Role <span className="text-rose-400">*</span>
            </label>
            <input type="text" placeholder="e.g. Frontend Developer Intern"
              value={draft.title} onChange={e => update('title', e.target.value)}
              className={inputClass('title')} />
            {draftErrors.title && <p className="mt-1 text-xs text-rose-400">{draftErrors.title}</p>}
          </div>
        </div>

        {/* Organization + Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Organization / Event
            </label>
            <input type="text" placeholder="e.g. TechNova Solutions, Smart India Hackathon"
              value={draft.organization} onChange={e => update('organization', e.target.value)}
              className={inputClass('organization')} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Duration / Year
            </label>
            <input type="text" placeholder="e.g. Jun 2025 – Aug 2025"
              value={draft.duration} onChange={e => update('duration', e.target.value)}
              className={inputClass('duration')} />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Key Highlights / Responsibilities
          </label>
          <textarea rows={2} placeholder="Briefly describe key contributions, learnings, or achievements…"
            value={draft.description} onChange={e => update('description', e.target.value)}
            className={inputClass('description')} />
        </div>

        <button type="button" onClick={handleAdd}
          className="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Add Experience
        </button>
      </div>

      {/* Experience list */}
      {formData.experiences.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Added ({formData.experiences.length})
          </h3>
          {formData.experiences.map((exp, idx) => (
            <div key={exp.id} className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 flex gap-4">
              <div className="flex-1 space-y-1.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="font-bold text-white text-sm">{exp.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded">{exp.type}</span>
                </div>
                {exp.organization && (
                  <p className="text-xs text-indigo-400 font-medium">
                    {exp.organization}{exp.duration ? ` · ${exp.duration}` : ''}
                  </p>
                )}
                {exp.description && <p className="text-xs text-slate-400 leading-relaxed">{exp.description}</p>}
              </div>
              <button type="button" onClick={() => removeItem('experiences', idx)}
                className="text-slate-600 hover:text-rose-400 transition-colors shrink-0 mt-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-slate-800 rounded-2xl py-10 text-center text-sm text-slate-500">
          No experience added yet. This step is optional but highly recommended.
        </div>
      )}
    </div>
  );
}
