# 📊 Rishi Thakur — Senior Data & BI Analyst Portfolio

Executive, high-performance portfolio featuring **Production Case Studies**, an **Interactive System Architecture Visualizer**, **7 Pre-Compiled ATS-Optimized Tailored Resumes**, and **GEO/LLM Ingestion (`llms.txt`)**.

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

## 🌟 Key Highlights

1. **Production Case Studies with In-Depth Technical Modals**:
   - **Statewide Healthcare Attendance & Performance BI (CHiPS)**: 33 districts, 1,000+ facilities, automated MariaDB SQL identity resolution linking AEBAS attendance records to State Treasury payroll files, and an executive 6-page Power BI dashboard suite with a 4-tier drill-down hierarchy.
   - **Essential Drug Multi-Criteria ABC/VED/SDE Matrix (CHiPS)**: Multi-dimensional inventory matrix in OracleDB and Advanced Excel preventing stockouts across 5 healthcare departments.
   - **Proactive 5G mmWave Handover Prediction via Diffusion Models**: M.Tech CSE thesis at IIIT Naya Raipur achieving a 97.64% F1-score on connection failure prediction using PyTorch and DDPM/DDIM reverse diffusion.
   - **Career-Ops Autonomous Job Acquisition Engine**: 55+ direct ATS API scanners, concurrent liveness cleaner, pure Python standard library OpenXML compiler, and stealth Playwright bot.

2. **Interactive System Architecture Explorer**:
   - Tabbed visual pipeline explorer detailing the multi-stage operational dataflow (Ingestion → Normalization & Cleaning → Kimball Star Schema Warehouse → DAX Measures → Executive Decision Support).

3. **7 Pre-Compiled ATS-Optimized Tailored Resumes**:
   - **Pre-compiled and verified offline**: Resumes are served directly from `assets/`.
   - 7 specialized tracks with direct PDF download (↓), in-tab preview (↗), and interactive in-browser ATS modal (👁):
     1. **Data Analyst** (`Rishi_Thakur_Data_Analyst_Resume.pdf`)
     2. **Business Analyst** (`Rishi_Thakur_Business_Analyst_Resume.pdf`)
     3. **SQL Developer** (`Rishi_Thakur_SQL_Developer_Resume.pdf`)
     4. **Power BI Developer** (`Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf`)
     5. **Data Scientist** (`Rishi_Thakur_Data_Science_Resume.pdf`)
     6. **Machine Learning Engineer** (`Rishi_Thakur_ML_Engineer_Resume.pdf`)
     7. **MIS Analyst** (`Rishi_Thakur_MIS_Analyst_Resume.pdf`)
   - Executive **Master Resume** download action bar for general recruiter reviews.

4. **Generative Engine Optimization (GEO) & LLM Ingestion**:
   - [`llms.txt`](llms.txt) and [`llms-full.txt`](llms-full.txt) at the root for instant, clean ingestion by AI search engines (Perplexity, ChatGPT Search, Claude, Gemini).
   - Rich JSON-LD schema markup (`Person`, `alumniOf`, `knowsAbout`) in HTML `<head>`.

5. **Editorial Minimalist Tech Aesthetics**:
   - Editorial minimalist dark/light design tokens (Neutral Deep Obsidian & Precision Cyan) with localStorage persistence.
   - Clean, accessible typography (Plus Jakarta Sans + IBM Plex Mono).

---

## 🛠️ Tech Stack

- **Markup & Styling**: HTML5, Tailwind CSS, Google Fonts (Plus Jakarta Sans + IBM Plex Mono)
- **Architecture**: Zero-build pure static architecture (instant CDN delivery via GitHub Pages)
- **Design Tokens**: Obsidian Black (`#080a0d`), Surface Slate (`#0f141c`), Precision Cyan (`#0284c7` / `#38bdf8`), Emerald (`#10b981`)
- **Asset Sync Tool**: `sync_tailored_resumes.py` (mirrors compiled PDFs to `assets/`)

---

## 📁 File Structure

```text
portfolio/
├── index.html                  # Executive portfolio application (Projects, Architectures, Capabilities, Resumes)
├── progress report.md          # Persistent engineering progress & handover documentation
├── llms.txt                    # Standardized markdown summary for AI agents and crawlers
├── llms-full.txt               # Exhaustive technical knowledge base for LLM search engines
├── sync_tailored_resumes.py    # Python helper script to sync PDFs to assets/
├── css/
│   └── styles.css              # Editorial minimalist tokens, modal backdrops, responsive grid
├── js/
│   ├── app.js                  # UI controllers (Modals, theme toggle, project filters, architecture explorer)
│   └── chart-data.js           # Verified case studies, architecture pipelines, and ATS resume content
├── assets/                     # Public PDF mirrors for all 7 tailored tracks + Master Resume
├── HANDOVER.md                 # Migration runbook & ground truth profile specifications
├── FREELANCE_PLAYBOOK.md       # Strategy guide for consulting and freelance engagements
└── README.md                   # Public repository documentation
```
