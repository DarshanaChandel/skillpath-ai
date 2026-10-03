import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ONBOARDING_STEPS } from '../../constants/onboardingData';

export default function ProgressBar({ currentStep, totalSteps, onGoToStep }) {
  const percent = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 border-b border-slate-800/80 bg-slate-950/60">
      <div className="max-w-4xl mx-auto space-y-4">

        {/* Label row */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>
            Step <span className="text-white font-bold">{currentStep}</span> of{' '}
            <span className="text-white font-bold">{totalSteps}</span>
          </span>
          <span>{percent}% complete</span>
        </div>

        {/* Segmented step dots + connector line */}
        <div className="relative flex items-center justify-between">
          {/* background connector line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-800 z-0" />
          {/* filled progress line */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 z-0 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />

          {ONBOARDING_STEPS.map((step) => {
            const isDone    = step.id < currentStep;
            const isActive  = step.id === currentStep;
            const isFuture  = step.id > currentStep;
            const clickable = step.id < currentStep;

            return (
              <button
                key={step.id}
                type="button"
                disabled={!clickable}
                onClick={() => clickable && onGoToStep(step.id)}
                className={`relative z-10 flex flex-col items-center gap-1 group focus:outline-none ${
                  clickable ? 'cursor-pointer' : 'cursor-default'
                }`}
                aria-label={`Go to step ${step.id}: ${step.label}`}
              >
                {/* Circle */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                    isDone
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : isActive
                      ? 'bg-slate-900 border-indigo-400 text-indigo-300 shadow-lg shadow-indigo-500/30 scale-110'
                      : 'bg-slate-900 border-slate-700 text-slate-500'
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>

                {/* Label — hidden on xs */}
                <span
                  className={`hidden sm:block text-[10px] font-semibold whitespace-nowrap transition-colors ${
                    isActive ? 'text-indigo-300' : isDone ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
