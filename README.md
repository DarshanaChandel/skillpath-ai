# SkillPath AI — Student Skill & Career Analyzer

**SkillPath AI** is a production-quality full-stack web application designed to help students analyze their academic and technical skills against target career role benchmarks, identify critical skill gaps, calculate career readiness, and recommend targeted learning paths and projects.

---

## 🏗️ System Architecture

```
React Frontend (Vite + Tailwind CSS)
          ↓
Node.js + Express Backend (REST API)
          ↓
  MongoDB Database
          ↓
Python ML Service (FastAPI + Scikit-Learn)
```

---

## 📁 Repository Structure

```text
skillpath-ai/
├── frontend/             # React + Vite client application
│   ├── src/
│   │   ├── components/   # Modular React components (Header, Hero, ProfileForm, ProfilePreview, ArchitectureInfo)
│   │   ├── constants/    # Career benchmarks & proficiency levels
│   │   ├── services/     # Decoupled API service abstraction
│   │   ├── App.jsx
│   │   └── index.css     # Tailwind CSS styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/              # Node.js + Express backend service (Initialized)
│   ├── package.json
│   └── README.md
├── ml-service/           # Python FastAPI ML service (Initialized)
│   └── README.md
└── README.md
```

---

## 🚀 Current Milestone (Milestone 1: Project & Frontend Setup)

### Completed Features:
1. **Separated Folder Structure**: Established distinct `frontend/`, `backend/`, and `ml-service/` subdirectories.
2. **React + Vite Frontend**: Built a responsive, modular React user interface powered by Tailwind CSS.
3. **Student Profile Management**:
   - **Academic & Personal Info**: Degree, university, GPA, graduation year, bio.
   - **Target Career Goal Selection**: Interactive role benchmarks (Full Stack Engineer, Frontend, Backend, ML Engineer, Data Scientist, DevOps).
   - **Technical Skill Catalog**: Dynamic skill entry with proficiency levels (1 to 5).
   - **Projects Portfolio**: Title, tech stack, description, live & repository links.
   - **Experience & Focus Areas**: Internship timeline and interest tags.
4. **Profile Preview & Architecture Visualizer**: Live structured summary view and interactive tier diagram explaining future pipeline integration.
5. **Decoupled API Layer**: `src/services/api.js` provides persistent state management locally while exposing clean async interfaces ready for the Node.js/Express backend API.

---

## 💻 Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

Building for production:
```bash
cd frontend
npm run build
```
