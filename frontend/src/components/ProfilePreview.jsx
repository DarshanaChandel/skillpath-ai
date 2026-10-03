import React from 'react';
import { TARGET_CAREER_ROLES } from '../constants/targetRoles';
import { User, GraduationCap, Briefcase, Code, FolderGit2, Sparkles, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function ProfilePreview({ profile, onEditClick }) {
  const targetRole = TARGET_CAREER_ROLES.find((r) => r.id === profile.targetRole) || TARGET_CAREER_ROLES[0];

  // Calculate simple matched skills vs target role core skills for visual preview
  const studentSkillNames = (profile.skills || []).map((s) => s.name.toLowerCase());
  const matchedCoreSkills = targetRole.coreSkills.filter((cs) =>
    studentSkillNames.some((sk) => sk.includes(cs.toLowerCase().split(' ')[0]))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Profile Summary Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-indigo-500/30">
              {profile.fullName ? profile.fullName.charAt(0).toUpperCase() : 'S'}
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-white">{profile.fullName || 'Student Profile'}</h1>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full font-medium">
                  {profile.graduationYear ? `Class of ${profile.graduationYear}` : 'Student'}
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1">{profile.degree || 'Degree Program'}</p>
              <p className="text-xs text-slate-400">{profile.university || 'University / Institution'}</p>
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-center">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Career Goal</span>
            <span className="text-base font-bold text-indigo-400 mt-0.5">{targetRole.title}</span>
            <span className="text-xs text-slate-400 mt-1">{targetRole.category}</span>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Academic & Core Skills */}
        <div className="space-y-6">
          
          {/* Academic Info Card */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-sm border-b border-slate-800 pb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Details</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1 border-b border-slate-800/50">
                <span className="text-slate-400">Email:</span>
                <span className="text-slate-200 font-medium">{profile.email || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/50">
                <span className="text-slate-400">Current GPA:</span>
                <span className="text-slate-200 font-medium">{profile.currentGPA || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Graduation:</span>
                <span className="text-slate-200 font-medium">{profile.graduationYear || 'N/A'}</span>
              </div>
            </div>
            {profile.bio && (
              <p className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                "{profile.bio}"
              </p>
            )}
          </div>

          {/* Target Role Core Skill Requirement Preview */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-sm border-b border-slate-800 pb-3">
              <Briefcase className="w-4 h-4" />
              <span>Target Role Benchmarks ({targetRole.title})</span>
            </div>
            <p className="text-xs text-slate-400">
              Essential skills expected for this role:
            </p>
            <div className="flex flex-wrap gap-2">
              {targetRole.coreSkills.map((skill, idx) => {
                const isPresent = matchedCoreSkills.includes(skill);
                return (
                  <span
                    key={idx}
                    className={`text-xs px-2.5 py-1 rounded-lg border font-medium flex items-center space-x-1.5 ${
                      isPresent
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    {isPresent ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Clock className="w-3 h-3 text-slate-500" />
                    )}
                    <span>{skill}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Machine Learning Pipeline Notice Card */}
          <div className="bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-2 text-indigo-300 font-semibold text-sm">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>ML Analysis Integration Pipeline</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In future milestones, your profile vector will be processed by the <strong>Python FastAPI ML Service</strong> 
              using Scikit-learn to compute exact career readiness scores, detect missing skill gaps, and suggest customized project roadmaps.
            </p>
            <div className="text-[11px] text-indigo-400 font-mono bg-indigo-950/80 p-2.5 rounded-lg border border-indigo-500/20">
              Target Pipeline: React UI → Express Backend → MongoDB → FastAPI ML Model
            </div>
          </div>

        </div>

        {/* Right Column - Skills, Projects, Experience */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Technical Skills Catalog */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-sm">
                <Code className="w-4 h-4" />
                <span>Technical Skills Catalog ({profile.skills?.length || 0})</span>
              </div>
              <button
                onClick={onEditClick}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                + Add / Edit Skills
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.skills && profile.skills.length > 0 ? (
                profile.skills.map((s) => (
                  <div key={s.id} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-indigo-400 uppercase font-semibold tracking-wider">
                        {s.category || 'General'}
                      </span>
                      <h4 className="text-sm font-semibold text-white">{s.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-indigo-400">Level {s.level}/5</span>
                      <div className="w-16 bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                        <div
                          className="bg-indigo-500 h-full rounded-full"
                          style={{ width: `${(s.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 col-span-2 py-4 text-center">No skills added yet.</p>
              )}
            </div>
          </div>

          {/* Projects Portfolio */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-sm">
                <FolderGit2 className="w-4 h-4" />
                <span>Projects Portfolio ({profile.projects?.length || 0})</span>
              </div>
              <button
                onClick={onEditClick}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                + Add Projects
              </button>
            </div>

            <div className="space-y-4">
              {profile.projects && profile.projects.length > 0 ? (
                profile.projects.map((proj) => (
                  <div key={proj.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-white">{proj.title}</h4>
                      <span className="text-xs text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20 font-mono">
                        {proj.techStack}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">{proj.description}</p>
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="inline-block text-xs text-indigo-400 hover:underline">
                        GitHub Repository →
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 py-4 text-center">No projects added yet.</p>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
