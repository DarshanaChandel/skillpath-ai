import React from 'react';
import { CAREER_ROLES } from '../../constants/onboardingData';
import { CheckCircle2, Sparkles, Code, FolderGit2, Award, Heart, LayoutDashboard } from 'lucide-react';

export default function SuccessScreen({ formData, onGoToDashboard }) {
  const targetRole = CAREER_ROLES.find(r => r.id === formData.targetRole);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-8">

      {/* Animated success icon */}
      <div className="relative mx-auto w-24 h-24">
        <div className="w-24 h-24 rounded-full bg-indigo-600/20 border-2 border-indigo-500/50 flex items-center justify-center mx-auto animate-pulse">
          <CheckCircle2 className="w-12 h-12 text-indigo-400" />
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Profile Created! 🎉
        </h1>
        <p className="text-base text-slate-300">
          Welcome to SkillPath AI, <span className="font-bold text-white">{formData.fullName || 'Student'}</span>!
          Your profile has been recorded. Your career readiness analysis pipeline is ready.
        </p>
      </div>

      {/* Profile summary card */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-left space-y-5">

        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xl font-black">
            {formData.fullName ? formData.fullName.charAt(0).toUpperCase() : 'S'}
          </div>
          <div>
            <p className="font-bold text-white text-lg">{formData.fullName}</p>
            <p className="text-xs text-slate-400">{formData.degree} · {formData.yearOfStudy}</p>
            <p className="text-xs text-slate-500">{formData.college}</p>
          </div>
        </div>

        {targetRole && (
          <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-2xl">{targetRole.icon}</span>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Target Role</p>
              <p className="font-bold text-indigo-300">{targetRole.label}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Code, label: 'Skills',      value: formData.skills.length,      color: 'text-purple-400' },
            { icon: FolderGit2, label: 'Projects', value: formData.projects.length, color: 'text-emerald-400' },
            { icon: Award, label: 'Experiences', value: formData.experiences.length, color: 'text-amber-400' },
            { icon: Heart, label: 'Interests',   value: formData.interests.length,   color: 'text-rose-400' }
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
              <Icon className={`w-5 h-5 mx-auto mb-1 ${color}`} />
              <p className="text-xl font-black text-white">{value}</p>
              <p className="text-[10px] text-slate-400 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's next */}
      <div className="bg-indigo-950/40 border border-indigo-500/25 rounded-2xl p-5 text-left space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-indigo-300">What's Coming Next</h3>
        </div>
        <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
          <li className="flex gap-2"><span className="text-indigo-400 font-bold">→</span> Node.js/Express backend will persist your profile to MongoDB.</li>
          <li className="flex gap-2"><span className="text-indigo-400 font-bold">→</span> Python ML Service will compute your career readiness score.</li>
          <li className="flex gap-2"><span className="text-indigo-400 font-bold">→</span> Skill gap detection will pinpoint missing technologies.</li>
          <li className="flex gap-2"><span className="text-indigo-400 font-bold">→</span> Personalized learning path and project suggestions will be generated.</li>
        </ul>
      </div>

      <button
        onClick={onGoToDashboard}
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-base rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 mx-auto transition-all active:scale-95"
      >
        <LayoutDashboard className="w-5 h-5" />
        Go to Profile Dashboard
      </button>

    </div>
  );
}
