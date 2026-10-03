import React from 'react';
import { User } from 'lucide-react';
import { DEGREE_OPTIONS, STUDY_YEARS } from '../../constants/onboardingData';

function FieldError({ msg }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-xs text-rose-400 font-medium">{msg}</p>;
}

function Label({ children, required }) {
  return (
    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
      {children}
      {required && <span className="ml-1 text-rose-400">*</span>}
    </label>
  );
}

function Input({ error, ...props }) {
  return (
    <input
      {...props}
      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
        error
          ? 'border-rose-500/70 focus:ring-rose-500/30'
          : 'border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500/60'
      }`}
    />
  );
}

function Select({ error, children, ...props }) {
  return (
    <select
      {...props}
      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 transition-all appearance-none ${
        error
          ? 'border-rose-500/70 focus:ring-rose-500/30'
          : 'border-slate-800 focus:ring-indigo-500/40 focus:border-indigo-500/60'
      }`}
    >
      {children}
    </select>
  );
}

export default function Step1BasicInfo({ formData, errors, updateField }) {
  return (
    <div className="space-y-8">
      {/* Step heading */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
          <User className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Basic Information</h2>
          <p className="text-sm text-slate-400 mt-1">
            Tell us about yourself and your academic background.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <Label required>Full Name</Label>
          <Input
            type="text"
            placeholder="e.g. Darshana Vishnu"
            value={formData.fullName}
            onChange={e => updateField('fullName', e.target.value)}
            error={errors.fullName}
          />
          <FieldError msg={errors.fullName} />
        </div>

        {/* College */}
        <div>
          <Label required>College / University</Label>
          <Input
            type="text"
            placeholder="e.g. KJ Somaiya College of Engineering"
            value={formData.college}
            onChange={e => updateField('college', e.target.value)}
            error={errors.college}
          />
          <FieldError msg={errors.college} />
        </div>

        {/* Degree + Branch in a 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label required>Degree</Label>
            <Select
              value={formData.degree}
              onChange={e => updateField('degree', e.target.value)}
              error={errors.degree}
            >
              <option value="">Select degree…</option>
              {DEGREE_OPTIONS.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </Select>
            <FieldError msg={errors.degree} />
          </div>

          <div>
            <Label required>Branch / Specialization</Label>
            <Input
              type="text"
              placeholder="e.g. Computer Science and Engineering"
              value={formData.branch}
              onChange={e => updateField('branch', e.target.value)}
              error={errors.branch}
            />
            <FieldError msg={errors.branch} />
          </div>
        </div>

        {/* Year of study */}
        <div>
          <Label required>Year of Study</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STUDY_YEARS.map(yr => (
              <button
                key={yr}
                type="button"
                onClick={() => updateField('yearOfStudy', yr)}
                className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                  formData.yearOfStudy === yr
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
          <FieldError msg={errors.yearOfStudy} />
        </div>
      </div>
    </div>
  );
}
