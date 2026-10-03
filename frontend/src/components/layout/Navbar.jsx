import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, LayoutDashboard } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar({ onNavigateDashboard }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Career Tracks', href: '#career-tracks' }
  ];

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold text-white tracking-tight">SkillPath</span>
                <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Student Skill & Career Analyzer</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onNavigateDashboard}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Student Profile Analyzer</span>
            </Button>
            
            <Button
              variant="primary"
              size="sm"
              onClick={onNavigateDashboard}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateDashboard();
              }}
              className="w-full"
            >
              Student Profile Analyzer
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateDashboard();
              }}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
