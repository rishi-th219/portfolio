# 📊 Rishi Thakur — Senior Data & BI Analyst Portfolio
> High-performance, production-grade portfolio inspired by [`santifer/cv-santiago`](https://github.com/santifer/cv-santiago) featuring an **Interactive AI Twin ("Ask Rishi AI")**, **System Architecture Visualizer**, **7 Offline Multi-Skill Tailored Resumes**, and **GEO/LLM Ingestion (`llms.txt`)**.

Hosted live on GitHub Pages: **[https://rishi-th219.github.io/portfolio/](https://rishi-th219.github.io/portfolio/)**

---

## 🚀 Quick Start (Local Preview)

Run a local web server in this directory:

```bash
# Using Python
python -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌟 Key Features (Inspired by `cv-santiago`)

1. **Interactive AI Persona Chat Twin ("Ask Rishi AI")**:
   - First-person interactive conversational assistant grounded in verified facts with **zero AI hallucinations**.
   - Recruiters and engineering leaders can ask direct questions or use 1-click suggested prompts covering:
     - 🏥 33-district healthcare biometric & payroll SQL reconciliation at CHiPS
     - 📡 5G mmWave diffusion model M.Tech thesis (97.64% F1-score)
     - 🛠️ Advanced SQL, MariaDB, OracleDB, Power BI DAX & Advanced Excel stack
     - 🤖 Career-Ops autonomous job hunting bot
     - 📄 Role-specific tailored resume guidance
     - 💼 Availability & relocation (Bengaluru / Hybrid / Remote)
   - Features real-time typing animation, copy answer button, and preset chips.

2. **System Architecture & Data Pipeline Explorer**:
   - Interactive, tabbed pipeline visualizer breaking down multi-stage telemetry, dataflow, algorithms, and SQL transformations across 4 flagship systems:
     - *Statewide Healthcare Attendance & Payroll Intelligence* (AEBAS → SQL Identity Resolution → Kimball Star Schema → Power BI Suite)
     - *Proactive 5G mmWave Handover Prediction* (RF Telemetry → GRU Encoder → DDPM/DDIM 50 Trajectories → SMOTE+Tomek → Random Forest)
     - *Career-Ops Autonomous Job Acquisition* (55+ Direct ATS APIs → Concurrent Liveness Cleaner → Pure Python OpenXML → Headless Playwright)
     - *Essential Drug Multi-Criteria ABC/VED/SDE Matrix* (Oracle SQL Aggregations → Multi-Criteria Matrix → Excel Scenarios → OAC Alerts)

3. **7 ATS-Optimized Tailored Resumes**:
   - **No runtime generation on the site**: Resumes are pre-compiled and served directly from `assets/`.
   - 7 specialized tracks with direct PDF download (↓), in-tab preview (↗), and interactive in-browser modal (👁):
     1. **Data Analyst** (`Rishi_Thakur_Data_Analyst_Resume.pdf`)
     2. **Business Analyst** (`Rishi_Thakur_Business_Analyst_Resume.pdf`)
     3. **SQL Developer** (`Rishi_Thakur_SQL_Developer_Resume.pdf`)
     4. **Power BI Data Analyst** (`Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf`)
     5. **Data Scientist** (`Rishi_Thakur_Data_Science_Resume.pdf`)
     6. **Machine Learning Engineer** (`Rishi_Thakur_ML_Engineer_Resume.pdf`)
     7. **MIS Analyst** (`Rishi_Thakur_MIS_Analyst_Resume.pdf`)

4. **Generative Engine Optimization (GEO) & LLM Ingestion**:
   - [`llms.txt`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/llms.txt) and [`llms-full.txt`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/llms-full.txt) at the root for instant, clean ingestion by LLMs and AI search engines (Perplexity, ChatGPT Search, Claude, Gemini, Antigravity).
   - Rich JSON-LD schema markup (`Person`, `ProfilePage`, `KnowsAbout`) in HTML `<head>`.

5. **Live System Telemetry & Command Center Aesthetics**:
   - Editorial minimalist dark/light design tokens (Neutral Deep Obsidian & Precision Cyan).
   - Live system status badge: `● ONLINE • Immediate Joiner • Zero-Fabrication Verified`.

---

## 🛠️ Tech Stack

- **Markup & Styling**: HTML5, Tailwind CSS, Google Fonts (Plus Jakarta Sans + IBM Plex Mono)
- **Architecture**: Zero-build pure static architecture (instant CDN delivery, hostable on any static provider)
- **Design Tokens**: Obsidian Black (`#080a0d`), Technical Slate (`#0f141c`), Precision Cyan (`#38bdf8`), Emerald (`#10b981`)
- **Asset Sync Tool**: `sync_tailored_resumes.py` (mirrors compiled PDFs to `assets/`)

---

## 📁 File Structure

```text
portfolio/
├── index.html                  # Main portfolio application with AI Chat & Architecture visualizer
├── llms.txt                    # Standardized markdown summary for AI agents and crawlers
├── llms-full.txt               # Exhaustive technical knowledge base for LLM search engines
├── sync_tailored_resumes.py    # Python helper script to sync PDFs to assets/
├── css/
│   └── styles.css              # Editorial glassmorphic styling, chat terminal tokens, animations
├── js/
│   ├── app.js                  # UI engine, AI twin chat handler, architecture explorer, modals
│   └── chart-data.js           # Verified case studies, architecture pipelines, knowledge base
├── assets/                     # Public PDF mirrors for all 7 tailored tracks
├── HANDOVER.md                 # Migration runbook & ground truth profile specifications
├── FREELANCE_PLAYBOOK.md        # Client acquisition & freelance consulting strategy
└── README.md                   # Repository documentation
```
