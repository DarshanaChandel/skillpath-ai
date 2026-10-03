import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TargetRolesSection from '../components/sections/TargetRolesSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';

export default function LandingPage({ onNavigateDashboard }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar onNavigateDashboard={onNavigateDashboard} />
      
      <main>
        <HeroSection onStartClick={onNavigateDashboard} />
        <FeaturesSection />
        <HowItWorksSection />
        <TargetRolesSection onSelectRole={onNavigateDashboard} />
        <CTASection onStartClick={onNavigateDashboard} />
      </main>

      <Footer onNavigateDashboard={onNavigateDashboard} />
    </div>
  );
}
