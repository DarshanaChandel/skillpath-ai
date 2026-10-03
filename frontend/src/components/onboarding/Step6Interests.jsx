import React, { useState } from 'react';
import { Heart, Plus, X } from 'lucide-react';

const SUGGESTED_INTERESTS = [
  'Full-Stack Web Development', 'Machine Learning', 'Data Science',
  'Cloud Computing', 'Open Source', 'System Design', 'Cybersecurity',
  'Mobile App Development', 'DevOps', 'UI/UX Design', 'Blockchain',
  'Computer Vision', 'Natural Language Processing', 'API Design',
  'Competitive Programming', 'Game Development', 'IoT & Embedded Systems'
];

export default function Step6Interests({ formData, updateField }) {
  const [customInput, setCustomInput] = useState('');

  const toggleInterest = (interest) => {
    const current = formData.interests || [];
    if (current.includes(interest)) {
      updateField('interests', current.filter(i => i !== interest));
    } else {
      updateField('interests', [...current, interest]);
    }
  };

  const addCustom = () => {
    const val = customInput.trim();
    if (!val) return;
    const current = formData.interests || [];
    if (!current.includes(val)) {
      updateField('interests', [...current, val]);
    }
    setCustomInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addCustom(); }
  };

  const interests = formData.interests || [];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
          <Heart className="w-6 h-6 text-rose-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Interests & Focus Areas</h2>
          <p className="text-sm text-slate-400 mt-1">
            Select or add the technology areas you are most passionate about. This helps personalize your learning roadmap.
          </p>
        </div>
      </div>

      {/* Suggested interests chips */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Suggested Areas</h3>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_INTERESTS.map(interest => {
            const selected = interests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  selected
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                {selected && '✓ '}{interest}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom interest input */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Add Custom Interest</h3>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type a custom interest and press Enter or Add…"
            value={customInput}
            onChange={e => setCustomInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/60 transition-all"
          />
          <button
            type="button"
            onClick={addCustom}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl flex items-center gap-2 border border-slate-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
      </div>

      {/* Selected interests summary */}
      {interests.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Your Interests ({interests.length} selected)
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
              <span
                key={interest}
                className="flex items-center gap-1.5 bg-indigo-950/50 border border-indigo-500/30 text-indigo-200 px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {interest}
                <button
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className="text-indigo-400 hover:text-rose-400 transition-colors"
                  aria-label={`Remove ${interest}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="border border-dashed border-slate-800 rounded-2xl py-8 text-center text-sm text-slate-500">
          No interests selected yet. Pick from the suggestions or add your own.
        </div>
      )}
    </div>
  );
}
