import React from 'react';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { useOnboardingForm } from '../hooks/useOnboardingForm';
import ProgressBar from '../components/onboarding/ProgressBar';
import Step1BasicInfo    from '../components/onboarding/Step1BasicInfo';
import Step2CareerGoal   from '../components/onboarding/Step2CareerGoal';
import Step3Skills       from '../components/onboarding/Step3Skills';
import Step4Projects     from '../components/onboarding/Step4Projects';
import Step5Experience   from '../components/onboarding/Step5Experience';
import Step6Interests    from '../components/onboarding/Step6Interests';
import Step7Review       from '../components/onboarding/Step7Review';
import SuccessScreen     from '../components/onboarding/SuccessScreen';

const STEP_META = [
  { label: 'Basic Info',    subtitle: 'Tell us who you are.' },
  { label: 'Career Goal',   subtitle: 'Where do you want to go?' },
  { label: 'Skills',        subtitle: 'What can you already do?' },
  { label: 'Projects',      subtitle: 'Show what you have built.' },
  { label: 'Experience',    subtitle: 'Internships, hackathons & more.' },
  { label: 'Interests',     subtitle: 'What excites you most?' },
  { label: 'Review',        subtitle: 'Confirm before submitting.' }
];

export default function OnboardingPage({ onComplete }) {
  const {
    currentStep, totalSteps,
    formData, errors, completed,
    updateField, addItem, removeItem,
    goNext, goPrev, goToStep, submitForm
  } = useOnboardingForm();

  // After completion — show success screen
  if (completed) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <OnboardingNav onBack={null} />
        <SuccessScreen formData={formData} onGoToDashboard={onComplete} />
      </div>
    );
  }

  const meta = STEP_META[currentStep - 1];
  const isLastStep = currentStep === totalSteps;

  const sharedProps = { formData, errors, updateField, addItem, removeItem };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Top nav bar */}
      <OnboardingNav onBack={onComplete} />

      {/* Progress */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        onGoToStep={goToStep}
      />

      {/* Step header */}
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
          Step {currentStep} of {totalSteps}
        </p>
        <h1 className="text-3xl font-black text-white">{meta.label}</h1>
        <p className="text-sm text-slate-400 mt-1">{meta.subtitle}</p>
      </div>

      {/* Step content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8">
          {currentStep === 1 && <Step1BasicInfo  {...sharedProps} />}
          {currentStep === 2 && <Step2CareerGoal {...sharedProps} />}
          {currentStep === 3 && <Step3Skills     {...sharedProps} />}
          {currentStep === 4 && <Step4Projects   {...sharedProps} />}
          {currentStep === 5 && <Step5Experience {...sharedProps} />}
          {currentStep === 6 && <Step6Interests  {...sharedProps} />}
          {currentStep === 7 && (
            <Step7Review
              formData={formData}
              onEdit={goToStep}
              onSubmit={submitForm}
            />
          )}
        </div>

        {/* Navigation buttons (hide on step 7 — it has its own submit CTA) */}
        {currentStep < 7 && (
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={goPrev}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            <span className="text-xs text-slate-500 hidden sm:block">
              {currentStep === 5 || currentStep === 6 ? 'This step is optional — you can skip it.' : ''}
            </span>

            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all active:scale-[0.98]"
            >
              {currentStep === 6 ? 'Review Profile' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Back button on step 7 */}
        {currentStep === 7 && (
          <div className="mt-6">
            <button
              type="button"
              onClick={goPrev}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Interests
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-4 text-center text-xs text-slate-600">
        SkillPath AI · Student Onboarding · Data is stored locally — no backend connected yet.
      </footer>
    </div>
  );
}

// ── Minimal nav bar for onboarding ──────────────────────────────────────────
function OnboardingNav({ onBack }) {
  return (
    <nav className="bg-slate-900/90 backdrop-blur border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-white tracking-tight">SkillPath <span className="text-indigo-400">AI</span></span>
      </div>

      {onBack && (
        <button
          onClick={onBack}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </button>
      )}
    </nav>
  );
}
