import { INITIAL_STUDENT_PROFILE } from '../constants/initialProfile';

const STORAGE_KEY = 'skillpath_student_profile';

/**
 * SkillPath AI API Service Interface
 * Currently operates in Standalone Frontend Mode.
 * Prepared for seamless integration with Node.js/Express Backend & FastAPI ML Service.
 */

// Toggle this flag when Node.js Express backend is running in future milestones
export const API_CONFIG = {
  USE_BACKEND: false,
  BACKEND_BASE_URL: 'http://localhost:5000/api',
  ML_SERVICE_BASE_URL: 'http://localhost:8000/api'
};

/**
 * Fetch Student Profile from storage or Backend API
 */
export async function fetchStudentProfile() {
  if (API_CONFIG.USE_BACKEND) {
    try {
      const response = await fetch(`${API_CONFIG.BACKEND_BASE_URL}/profile`);
      if (!response.ok) throw new Error('Failed to fetch profile from backend');
      return await response.json();
    } catch (error) {
      console.warn('Backend unavailable, falling back to local state:', error);
    }
  }

  // Standalone mode: load from LocalStorage or return initial seed
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error parsing stored profile:', e);
    }
  }

  // Save initial seed to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STUDENT_PROFILE));
  return INITIAL_STUDENT_PROFILE;
}

/**
 * Save / Update Student Profile
 */
export async function saveStudentProfile(profileData) {
  if (API_CONFIG.USE_BACKEND) {
    try {
      const response = await fetch(`${API_CONFIG.BACKEND_BASE_URL}/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData)
      });
      if (!response.ok) throw new Error('Failed to save profile to backend');
      return await response.json();
    } catch (error) {
      console.warn('Backend save failed, saving to local storage:', error);
    }
  }

  // LocalStorage persistence for Milestone 1
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData));
  return { success: true, data: profileData, message: "Profile saved locally!" };
}
