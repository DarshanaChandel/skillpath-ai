import React from 'react';
import { ClipboardList, User, Briefcase, Code, FolderGit2, Award, Heart, CheckCircle2, Edit3 } from 'lucide-react';
import { CAREER_ROLES } from '../../constants/onboardingData';

const proficiencyColor = {
  beginner:     'bg-slate-800 text-slate-300 border-slate-700',
  intermediate: 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40',
  advanced:     'bg-cyan-600/30 text-cyan-300 border-cyan-500/40'
};

function Section({ icon: Icon, title, color = 'indigo', children, onEdit, stepNum }) {
  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-${color}-500/10 border border-${color}-500/30 flex items-center justify-center`}>
            <Icon className={`w-4 h-4 text-${color}-400`} />
          </div>
          <h3 className="font-bold text-white text-sm">{title}</h3>
        </div>
        <button
          type="button"
          onClick={() => onEdit(stepNum)}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-300 transition-colors font-medium"
        >
          <Edit3 className="w-3.5 h-3.5" /> Edit
        </button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default function Step7Review({ formData, onEdit, onSubmit }) {
  const targetRole = CAREER_ROLES.find(r => r.id === formData.targetRole);

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
          <ClipboardList className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Review Your Profile</h2>
          <p className="text-sm text-slate-400 mt-1">
            Review everything before submitting. Click <strong className="text-slate-200">Edit</strong> on any section to go back and change it.
          </p>
        </div>
      </div>

      {/* ── Step 1: Basic Info ── */}
      <Section icon={User} title="Basic Information" color="indigo" onEdit={onEdit} stepNum={1}>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          {[
            { label: 'Full Name',      value: formData.fullName },
            { label: 'College',        value: formData.college },
            { label: 'Degree',         value: formData.degree },
            { label: 'Branch',         value: formData.branch },
            { label: 'Year of Study',  value: formData.yearOfStudy }
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</dt>
              <dd className="mt-0.5 text-slate-200 font-medium">{value || <span className="text-slate-600 italic">Not provided</span>}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Step 2: Career Goal ── */}
      <Section icon={Briefcase} title="Target Career Goal" color="cyan" onEdit={onEdit} stepNum={2}>
        {targetRole ? (
          <div className="flex items-center gap-3">
            <span className="text-3xl">{targetRole.icon}</span>
            <div>
              <p className="font-bold text-white text-base">{targetRole.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{targetRole.description}</p>
            </div>
          </div>
        ) : (
          <p className="text-slate-500 italic text-sm">No role selected.</p>
        )}
      </Section>

      {/* ── Step 3: Skills ── */}
      <Section icon={Code} title={`Technical Skills (${formData.skills.length})`} color="purple" onEdit={onEdit} stepNum={3}>
        {formData.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((sk, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border capitalize ${proficiencyColor[sk.proficiency]}`}>
                {sk.name}
                <span className="ml-1.5 opacity-60">· {sk.proficiency}</span>
              </span>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic text-sm">No skills added.</p>
        )}
      </Section>

      {/* ── Step 4: Projects ── */}
      <Section icon={FolderGit2} title={`Projects (${formData.projects.length})`} color="emerald" onEdit={onEdit} stepNum={4}>
        {formData.projects.length > 0 ? (
          <div className="space-y-4">
            {formData.projects.map((proj, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-sm">{proj.name}</span>
                  <span className="text-[10px] font-bold capitalize px-2 py-0.5 rounded border bg-slate-900 text-slate-400 border-slate-700">{proj.level}</span>
                </div>
                <p className="text-xs text-slate-400">{proj.description}</p>
                <div className="flex flex-wrap gap-1">
                  {proj.technologies.split(',').map(t => t.trim()).filter(Boolean).map((tech, ti) => (
                    <span key={ti} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">{tech}</span>
                  ))}
                </div>
                {i < formData.projects.length - 1 && <hr className="border-slate-800/60 mt-3" />}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic text-sm">No projects added.</p>
        )}
      </Section>

      {/* ── Step 5: Experience ── */}
      <Section icon={Award} title={`Experience (${formData.experiences.length})`} color="amber" onEdit={onEdit} stepNum={5}>
        {formData.experiences.length > 0 ? (
          <div className="space-y-4">
            {formData.experiences.map((exp, i) => (
              <div key={i} className="space-y-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="font-semibold text-white text-sm">{exp.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded">{exp.type}</span>
                </div>
                {exp.organization && <p className="text-xs text-indigo-400">{exp.organization}{exp.duration ? ` · ${exp.duration}` : ''}</p>}
                {exp.description && <p className="text-xs text-slate-400">{exp.description}</p>}
                {i < formData.experiences.length - 1 && <hr className="border-slate-800/60 mt-3" />}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic text-sm">No experience added.</p>
        )}
      </Section>

      {/* ── Step 6: Interests ── */}
      <Section icon={Heart} title="Interests & Focus Areas" color="rose" onEdit={onEdit} stepNum={6}>
        {formData.interests.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {formData.interests.map((interest, i) => (
              <span key={i} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-full text-xs font-medium">
                {interest}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic text-sm">No interests selected.</p>
        )}
      </Section>

      {/* Submit CTA */}
      <div className="bg-gradient-to-r from-indigo-950/60 to-cyan-950/40 border border-indigo-500/30 rounded-2xl p-6 text-center space-y-4">
        <CheckCircle2 className="w-10 h-10 text-indigo-400 mx-auto" />
        <div>
          <h3 className="text-lg font-bold text-white">Profile looks great!</h3>
          <p className="text-sm text-slate-400 mt-1">
            Submit your profile to complete onboarding. Your data will be logged to the console (backend integration coming in the next milestone).
          </p>
        </div>
        <button
          type="button"
          onClick={onSubmit}
          className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-base rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
        >
          Submit Profile →
        </button>
      </div>

    </div>
  );
}
