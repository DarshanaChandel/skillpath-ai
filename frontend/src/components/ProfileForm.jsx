import React, { useState } from 'react';
import { TARGET_CAREER_ROLES, PROFICIENCY_LEVELS } from '../constants/targetRoles';
import { Plus, Trash2, Save, User, GraduationCap, Briefcase, Code, FolderGit2, Heart, CheckCircle } from 'lucide-react';

export default function ProfileForm({ profile, onSave }) {
  const [formData, setFormData] = useState({ ...profile });
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState('academic');

  // Input Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Skill Handlers
  const [newSkill, setNewSkill] = useState({ name: '', level: 3, category: 'Technical' });

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name.trim()) return;
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { ...newSkill, id: Date.now() }]
    }));
    setNewSkill({ name: '', level: 3, category: 'Technical' });
  };

  const handleRemoveSkill = (skillId) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== skillId)
    }));
  };

  const handleSkillLevelChange = (skillId, level) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === skillId ? { ...s, level: Number(level) } : s))
    }));
  };

  // Project Handlers
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: ''
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...newProject, id: Date.now() }]
    }));
    setNewProject({ title: '', description: '', techStack: '', githubUrl: '', liveUrl: '' });
  };

  const handleRemoveProject = (projectId) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== projectId)
    }));
  };

  // Experience Handlers
  const [newExp, setNewExp] = useState({ role: '', organization: '', duration: '', description: '' });

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (!newExp.role.trim()) return;
    setFormData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, { ...newExp, id: Date.now() }]
    }));
    setNewExp({ role: '', organization: '', duration: '', description: '' });
  };

  const handleRemoveExperience = (expId) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== expId)
    }));
  };

  // Save Form
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  const selectedRole = TARGET_CAREER_ROLES.find((r) => r.id === formData.targetRole) || TARGET_CAREER_ROLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Toast Notification */}
      {saveSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-900/40 border border-emerald-500/50 text-emerald-200 flex items-center justify-between animate-fade-in">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="font-medium text-sm">Student profile changes saved successfully!</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section Navigation Pills */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          {[
            { id: 'academic', label: 'Academic & Personal', icon: GraduationCap },
            { id: 'targetRole', label: 'Target Career Role', icon: Briefcase },
            { id: 'skills', label: 'Technical Skills', icon: Code },
            { id: 'projects', label: 'Projects', icon: FolderGit2 },
            { id: 'experiences', label: 'Experience & Interests', icon: Heart }
          ].map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveSection(sec.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-slate-800 text-indigo-400 border border-indigo-500/40'
                    : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. ACADEMIC & PERSONAL DETAILS */}
        {activeSection === 'academic' && (
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-6">
            <div className="flex items-center space-x-3 text-indigo-400 border-b border-slate-800 pb-3">
              <User className="w-5 h-5" />
              <h2 className="text-lg font-semibold text-white">Academic & Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@university.edu"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  University / College
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="e.g. State University of Technology"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Degree & Major
                </label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="e.g. B.S. Computer Science"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Graduation Year
                </label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  placeholder="e.g. 2026"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Current GPA / Score
                </label>
                <input
                  type="text"
                  name="currentGPA"
                  value={formData.currentGPA}
                  onChange={handleChange}
                  placeholder="e.g. 3.8 / 4.0"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Bio / Summary
              </label>
              <textarea
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                placeholder="Brief summary of your academic background and technical aspirations..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        )}

        {/* 2. TARGET CAREER ROLE SELECTION */}
        {activeSection === 'targetRole' && (
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-6">
            <div className="flex items-center space-x-3 text-indigo-400 border-b border-slate-800 pb-3">
              <Briefcase className="w-5 h-5" />
              <div>
                <h2 className="text-lg font-semibold text-white">Target Career Goal</h2>
                <p className="text-xs text-slate-400">Select the target industry role you are aiming for.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TARGET_CAREER_ROLES.map((role) => {
                const isSelected = formData.targetRole === role.id;
                return (
                  <div
                    key={role.id}
                    onClick={() => setFormData((prev) => ({ ...prev, targetRole: role.id }))}
                    className={`cursor-pointer rounded-xl p-4 border transition-all ${
                      isSelected
                        ? 'bg-indigo-950/40 border-indigo-500 shadow-md shadow-indigo-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                          {role.category}
                        </span>
                        <h3 className="mt-2 text-base font-bold text-white">{role.title}</h3>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-slate-700'
                      }`}>
                        {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">{role.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {role.coreSkills.map((sk, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. TECHNICAL SKILLS CATALOG */}
        {activeSection === 'skills' && (
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-3 text-indigo-400">
                <Code className="w-5 h-5" />
                <div>
                  <h2 className="text-lg font-semibold text-white">Technical Skills & Proficiency</h2>
                  <p className="text-xs text-slate-400">Catalog your current technical competencies and rating (1-5).</p>
                </div>
              </div>
            </div>

            {/* Add Skill Form */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label className="block text-xs font-semibold text-slate-400 mb-1">Skill Name</label>
                <input
                  type="text"
                  placeholder="e.g. React.js, Python, PostgreSQL, Docker"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-48">
                <label className="block text-xs font-semibold text-slate-400 mb-1">Category</label>
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                >
                  <option value="Languages">Languages</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Databases">Databases</option>
                  <option value="ML/AI">ML / AI</option>
                  <option value="Cloud/DevOps">Cloud / DevOps</option>
                  <option value="Tools">Tools & Testing</option>
                </select>
              </div>

              <div className="w-full md:w-64">
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Proficiency (Level {newSkill.level})
                </label>
                <select
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: Number(e.target.value) })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                >
                  {PROFICIENCY_LEVELS.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.value} - {p.label.split(' ')[0]}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleAddSkill}
                type="button"
                className="w-full md:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" /> Add Skill
              </button>
            </div>

            {/* Existing Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {formData.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        {skill.category || 'Technical'}
                      </span>
                      <h4 className="mt-1 font-semibold text-white text-sm">{skill.name}</h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                      <span>Proficiency</span>
                      <span className="font-semibold text-indigo-300">Level {skill.level}/5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={skill.level}
                      onChange={(e) => handleSkillLevelChange(skill.id, e.target.value)}
                      className="w-full accent-indigo-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PROJECTS */}
        {activeSection === 'projects' && (
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-6">
            <div className="flex items-center space-x-3 text-indigo-400 border-b border-slate-800 pb-3">
              <FolderGit2 className="w-5 h-5" />
              <div>
                <h2 className="text-lg font-semibold text-white">Student Projects</h2>
                <p className="text-xs text-slate-400">Add key software projects you have built or contributed to.</p>
              </div>
            </div>

            {/* Add Project Form */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Technologies Used (e.g. React, Node.js, MongoDB)"
                  value={newProject.techStack}
                  onChange={(e) => setNewProject({ ...newProject, techStack: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <textarea
                placeholder="Project Description & key features..."
                rows={2}
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="url"
                  placeholder="GitHub Repository URL"
                  value={newProject.githubUrl}
                  onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="url"
                  placeholder="Live Demo URL (Optional)"
                  value={newProject.liveUrl}
                  onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                onClick={handleAddProject}
                type="button"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>

            {/* List of Projects */}
            <div className="space-y-4">
              {formData.projects.map((project) => (
                <div key={project.id} className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-base">{project.title}</h4>
                      <p className="text-xs text-indigo-400 mt-0.5">{project.techStack}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveProject(project.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">{project.description}</p>
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-3 flex gap-3 text-xs">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                          View Code on GitHub →
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                          Live Application →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. EXPERIENCES & INTERESTS */}
        {activeSection === 'experiences' && (
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-6">
            <div className="flex items-center space-x-3 text-indigo-400 border-b border-slate-800 pb-3">
              <Heart className="w-5 h-5" />
              <div>
                <h2 className="text-lg font-semibold text-white">Experience & Special Interests</h2>
                <p className="text-xs text-slate-400">Internships, research experience, and focus areas.</p>
              </div>
            </div>

            {/* Add Experience */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Role / Position (e.g. Intern)"
                  value={newExp.role}
                  onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Organization / Company"
                  value={newExp.organization}
                  onChange={(e) => setNewExp({ ...newExp, organization: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Duration (e.g. Jun 2025 - Aug 2025)"
                  value={newExp.duration}
                  onChange={(e) => setNewExp({ ...newExp, duration: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Key responsibilities and achievements..."
                rows={2}
                value={newExp.description}
                onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
              />

              <button
                onClick={handleAddExperience}
                type="button"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" /> Add Experience
              </button>
            </div>

            {/* List of Experiences */}
            <div className="space-y-4">
              {formData.experiences.map((exp) => (
                <div key={exp.id} className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-sm">{exp.role}</h4>
                      <p className="text-xs text-indigo-400">{exp.organization} • {exp.duration}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(exp.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global Form Action Button */}
        <div className="flex items-center justify-end space-x-4 pt-4 border-t border-slate-800">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold rounded-xl text-sm flex items-center space-x-2 shadow-lg shadow-indigo-600/25 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile Data</span>
          </button>
        </div>

      </form>
    </div>
  );
}
