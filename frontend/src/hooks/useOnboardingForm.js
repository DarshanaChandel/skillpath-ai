import { useState, useCallback } from 'react';
import { EMPTY_ONBOARDING_FORM, ONBOARDING_STEPS } from '../constants/onboardingData';

const TOTAL_STEPS = ONBOARDING_STEPS.length;

/**
 * useOnboardingForm
 * Central hook managing all multi-step form state, navigation, and validation.
 * Keeping all state logic here keeps step components clean and focused on UI only.
 */
export function useOnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(EMPTY_ONBOARDING_FORM);
  const [errors, setErrors] = useState({});
  const [completed, setCompleted] = useState(false);

  // ── Field update ─────────────────────────────────────────────────────────
  const updateField = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // clear error for that field on change
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  // ── Array helpers (skills / projects / experiences / interests) ──────────
  const addItem = useCallback((field, item) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], item] }));
  }, []);

  const removeItem = useCallback((field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  }, []);

  const updateItem = useCallback((field, index, updatedItem) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? updatedItem : item))
    }));
  }, []);

  // ── Validation per step ──────────────────────────────────────────────────
  const validateStep = useCallback((step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim())  newErrors.fullName = 'Full name is required.';
      if (!formData.college.trim())   newErrors.college = 'College name is required.';
      if (!formData.degree)           newErrors.degree = 'Please select your degree.';
      if (!formData.branch.trim())    newErrors.branch = 'Branch / specialization is required.';
      if (!formData.yearOfStudy)      newErrors.yearOfStudy = 'Please select your year of study.';
    }

    if (step === 2) {
      if (!formData.targetRole) newErrors.targetRole = 'Please select a target career role.';
    }

    if (step === 3) {
      if (formData.skills.length === 0)
        newErrors.skills = 'Please add at least one technical skill.';
    }

    if (step === 4) {
      if (formData.projects.length === 0)
        newErrors.projects = 'Please add at least one project.';
    }

    // Steps 5, 6, 7 are optional / review — no hard validation
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // ── Navigation ───────────────────────────────────────────────────────────
  const goNext = useCallback(() => {
    if (!validateStep(currentStep)) return;
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, validateStep]);

  const goPrev = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(s => s - 1);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const goToStep = useCallback((step) => {
    // Only allow jump to visited steps
    if (step < currentStep) {
      setCurrentStep(step);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  // ── Final submission ──────────────────────────────────────────────────────
  const submitForm = useCallback(() => {
    console.group('📋 SkillPath AI — Onboarding Profile Submitted');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Student Profile:', formData);
    console.log('Basic Information:', {
      fullName: formData.fullName,
      college: formData.college,
      degree: formData.degree,
      branch: formData.branch,
      yearOfStudy: formData.yearOfStudy
    });
    console.log('Target Career Role:', formData.targetRole);
    console.log('Technical Skills:', formData.skills);
    console.log('Projects:', formData.projects);
    console.log('Experiences:', formData.experiences);
    console.log('Interests:', formData.interests);
    console.groupEnd();

    setCompleted(true);
  }, [formData]);

  return {
    currentStep,
    totalSteps: TOTAL_STEPS,
    formData,
    errors,
    completed,
    updateField,
    addItem,
    removeItem,
    updateItem,
    goNext,
    goPrev,
    goToStep,
    submitForm
  };
}
