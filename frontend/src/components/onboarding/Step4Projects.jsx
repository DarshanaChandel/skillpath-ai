import React, { useState } from 'react';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';
import { PROJECT_LEVELS } from '../../constants/onboardingData';

const EMPTY_PROJECT = { name: '', description: '', technologies: '', level: '' };

function FieldError({ msg }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-rose-400 font-medium">{msg}</p>;
}

export default function Step4Projects({ formData, errors, addItem, removeItem }) {
  const [draft, setDraft]           = useState(EMPTY_PROJECT);
  const [draftErrors, setDraftErrors] = useState({});

  const handleAdd = () => {
    const e = {};
    if (!draft.name.trim())         e.name = 'Project name is required.';
    if (!draft.description.trim())  e.description = 'Description is required.';
    if (!draft.technologies.trim()) e.technologies = 'Technologies used is required.';
    if (!draft.level)               e.level = 'Please select a project level.';
    if (Object.keys(e).length) { setDraftErrors(e); return; }

    addItem('projects', { ...draft, id: Date.now() });
    setDraft(EMPTY_PROJECT);
    setDraftErrors({});
  };

  const inputClass = (field) =>
    `w-full bg-slate-900 border rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
      draftErrors[field]
        ? 'border-rose-500/60 focus:ring-rose-500/30'
        : 'border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500/60'
    }`;

  const update = (field, val) => {
    setDraft(d => ({ ...d, [field]: val }));
    setDraftErrors(e => ({ ...e, [field]: undefined }));
  };

  const levelColors = {
    beginner:     'border-slate-700 bg-slate-800 text-slate-300',
    intermediate: 'border-indigo-500 bg-indigo-600 text-white shadow-md shadow-indigo-600/20',
    advanced:     'border-cyan-500 bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
  };

  return (
    <div className="space-y-8">
      {/* Step heading */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <FolderGit2 className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          <p className="text-sm text-slate-400 mt-1">
            Add the key software projects you have built. These demonstrate your practical experience.
          </p>
        </div>
      </div>

      {/* Add project panel */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-5">
        <h3 className="text-sm font-semibold text-slate-300">Add a Project</h3>

        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Name <span className="text-rose-400">*</span></label>
          <input type="text" placeholder="e.g. E-commerce Dashboard, ML Prediction API…"
            value={draft.name} onChange={e => update('name', e.target.value)}
            className={inputClass('name')} />
          <FieldError msg={draftErrors.name} />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Description <span className="text-rose-400">*</span></label>
          <textarea rows={3} placeholder="Briefly describe what the project does and your contribution…"
            value={draft.description} onChange={e => update('description', e.target.value)}
            className={inputClass('description')} />
          <FieldError msg={draftErrors.description} />
        </div>

        {/* Technologies */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies Used <span className="text-rose-400">*</span></label>
          <input type="text" placeholder="e.g. React, Node.js, MongoDB, Python, Scikit-learn…"
            value={draft.technologies} onChange={e => update('technologies', e.target.value)}
            className={inputClass('technologies')} />
          <p className="mt-1 text-[11px] text-slate-500">Separate multiple technologies with commas.</p>
          <FieldError msg={draftErrors.technologies} />
        </div>

        {/* Project Level */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Project Level <span className="text-rose-400">*</span></label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PROJECT_LEVELS.map(pl => (
              <button key={pl.value} type="button"
                onClick={() => update('level', pl.value)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  draft.level === pl.value
                    ? levelColors[pl.value]
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="font-bold text-sm">{pl.label}</div>
                <div className="text-[11px] opacity-70 mt-0.5 leading-relaxed">{pl.description}</div>
              </button>
            ))}
          </div>
          <FieldError msg={draftErrors.level} />
        </div>

        <button type="button" onClick={handleAdd}
          className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {/* Projects list */}
      {formData.projects.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Added Projects ({formData.projects.length})</h3>
          {formData.projects.map((proj, idx) => (
            <div key={proj.id} className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 flex gap-4">
              <div className="flex-1 space-y-1.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-white text-base">{proj.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border capitalize ${
                    proj.level === 'advanced' ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' :
                    proj.level === 'intermediate' ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>{proj.level}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.split(',').map(t => t.trim()).filter(Boolean).map((tech, ti) => (
                    <span key={ti} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">{tech}</span>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => removeItem('projects', idx)}
                className="text-slate-600 hover:text-rose-400 transition-colors shrink-0 mt-1" aria-label="Remove project">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-slate-800 rounded-2xl py-10 text-center text-sm text-slate-500">
          No projects added yet. Add your first project above.
        </div>
      )}

      {errors.projects && <p className="text-xs text-rose-400 font-medium">{errors.projects}</p>}
    </div>
  );
}
