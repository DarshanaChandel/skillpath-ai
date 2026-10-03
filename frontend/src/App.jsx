import React, { useState, useEffect } from 'react';
import LandingPage    from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import Header         from './components/Header';
import Hero           from './components/Hero';
import ProfileForm    from './components/ProfileForm';
import ProfilePreview from './components/ProfilePreview';
import ArchitectureInfo from './components/ArchitectureInfo';
import { fetchStudentProfile, saveStudentProfile } from './services/api';
import { INITIAL_STUDENT_PROFILE } from './constants/initialProfile';
import { ArrowLeft } from 'lucide-react';

// View constants
const VIEWS = {
  LANDING:    'landing',
  ONBOARDING: 'onboarding',
  DASHBOARD:  'dashboard'
};

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.LANDING);
  const [dashboardTab, setDashboardTab] = useState('editor');
  const [profile, setProfile]     = useState(INITIAL_STUDENT_PROFILE);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchStudentProfile();
        setProfile(data);
      } catch (err) {
        console.error('Error loading profile:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSaveProfile = async (updatedData) => {
    setProfile(updatedData);
    await saveStudentProfile(updatedData);
  };

  const navigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-slate-400">Loading SkillPath AI…</p>
        </div>
      </div>
    );
  }

  // ── Landing Page ──────────────────────────────────────────────────────────
  if (currentView === VIEWS.LANDING) {
    return (
      <LandingPage
        onNavigateDashboard={() => navigate(VIEWS.ONBOARDING)}
      />
    );
  }

  // ── Onboarding Flow ───────────────────────────────────────────────────────
  if (currentView === VIEWS.ONBOARDING) {
    return (
      <OnboardingPage
        onComplete={() => navigate(VIEWS.DASHBOARD)}
      />
    );
  }

  // ── Profile Dashboard (Milestone 1 legacy view) ───────────────────────────
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Header activeTab={dashboardTab} setActiveTab={setDashboardTab} />

      {/* Breadcrumb bar */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(VIEWS.LANDING)}
            className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </button>
          <span className="text-slate-500 hidden sm:inline">SkillPath AI · Profile Dashboard</span>
        </div>
      </div>

      <main className="pb-16">
        <Hero activeTab={dashboardTab} setActiveTab={setDashboardTab} />
        {dashboardTab === 'editor'       && <ProfileForm profile={profile} onSave={handleSaveProfile} />}
        {dashboardTab === 'preview'      && <ProfilePreview profile={profile} onEditClick={() => setDashboardTab('editor')} />}
        {dashboardTab === 'architecture' && <ArchitectureInfo />}
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
        SkillPath AI · Student Skill &amp; Career Analyzer
      </footer>
    </div>
  );
}
