# 🚀 WINDOWS MIGRATION & AGY TAKEOVER HANDOVER GUIDE
**Complete System Runbook, Architecture Specifications & Agent Instructions**  
**Candidate:** Rishi Thakur  
**Target Migration:** Fedora Linux &rarr; Windows 11 (x86_64)  
**Agentic AI Assistant:** Google Antigravity (AGY)  
**Workspace Root:** `C:\Users\<username>\Desktop\Jobhunt\` (formerly `/home/rishi21/Desktop/Jobhunt/`)  
**Date:** October 2026  

---

## 1. Executive Summary & Takeover Objective

This document is the **single source of truth** for resuming development, resume tailoring, portfolio maintenance, and job application automation after migrating from **Fedora Linux** to **Windows 11** and reinstalling **Antigravity (AGY)**.

When AGY is launched inside the workspace on Windows:
1. It must immediately read this handover document (`WINDOWS_MIGRATION_HANDOVER.md` or `portfolio/HANDOVER.md`).
2. It must verify the installed toolchains (Git, Python 3.11+, Node.js, LibreOffice, Playwright).
3. It must adhere strictly to the candidate's ground-truth profile, ATS formatting rules, and AI tooling requirements.
4. It must maintain 100% operational continuity across all 4 workspace projects.

---

## 2. Full Workspace Project Inventory & Git Remotes

The entire workspace consists of 4 primary components:

| Project | Location | Remote URL / Branch | Critical Assets / Role |
| :--- | :--- | :--- | :--- |
| **`portfolio`** | `Jobhunt/portfolio/` | `https://github.com/rishi-th219/portfolio.git` (`main`) | • Live portfolio website hosted on GitHub Pages: `https://rishi-th219.github.io/portfolio/`<br>• Interactive Chart.js skill radar & GitHub activity calendar<br>• Public downloadable resume assets (`assets/`)<br>• **Primary tailoring hub** (`tailoring/`) containing 9+ role-tailored resumes and generator scripts |
| **`Bot` (`career-ops-bot`)** | `Jobhunt/Bot/` | `https://github.com/rishi-th219/career-ops-bot.git` (`main`) | • Automated multi-platform job scraper & application bot (Playwright Chromium)<br>• Opportunity tracker (`opportunities.xlsx`, `opportunities.csv`)<br>• Candidate profile matcher (`config/profile.yml`, `config_loader.py`)<br>• Skills folder (`.agents/skills/career-ops/`) |
| **`Projects/ecommerce-elt-local`** | `Jobhunt/Projects/ecommerce-elt-local/` | `https://github.com/rishi-th219/ecommerce-elt-local.git` (`main`) | • Production-grade containerized ELT warehouse (MSSQL 2025, Postgres 16, dbt, Airflow, Metabase)<br>• 213 automated dbt tests<br>• Master interview study guide (`PROJECT_STUDY_GUIDE.md`)<br>• Local configs: `.env`, `dbt/profiles.yml` |
| **`MatchAnnotator`** | `Jobhunt/MatchAnnotator/` | *Local Only* | • Football data analytics interview handbooks and masterclass docs (`.docx`, `.md`, `.pdf`) |

---

## 3. Candidate Ground Truth Profile (Strict Facts)

> [!CAUTION]
> **Zero Fabrication Policy:** All resume bullet points, cover letters, and portfolio descriptions must be strictly grounded in the following facts. **Never invent employers, job titles, degrees, or certifications.**

### Contact Information
- **Full Name:** Rishi Thakur
- **Email:** `rishi_th219@proton.me` (Professional) / `rishiithakur219@gmail.com`
- **Phone:** `+91 8109830219`
- **Location:** Bengaluru, Karnataka, India
- **GitHub:** `https://github.com/rishi-th219`
- **LinkedIn:** `https://linkedin.com/in/rishi-thakur-b665a4298`
- **Portfolio Website:** `https://rishi-th219.github.io/portfolio/`

### Academic Background
- **Master of Technology (M.Tech) in Computer Science & Engineering**  
  *International Institute of Information Technology (IIIT), Naya Raipur*  
  *CGPA:* 7.90 | *Duration:* 08/2024 – 07/2026
- **Bachelor of Technology (B.Tech) in Computer Science**  
  *Amity University Chhattisgarh*  
  *CGPA:* 7.71 | *Duration:* 08/2019 – 06/2023
- **GATE CS Qualification:** Qualified GATE Computer Science & Information Technology (CS), 2024
- **Language Certification:** IELTS Academic Band Score: 7.5

### Professional Experience
- **Role:** Data Analyst / BI Developer (Internship)
- **Organization:** Chhattisgarh Infotech Promotion Society (CHiPS)
- **Deployment:** Dept. of Health & Family Welfare, Govt. Of Chhattisgarh | Raipur, India
- **Duration:** 06/2025 – 03/2026 (or ongoing / recent)
- **Core Real-World Initiatives (from `internship_exp`):**
  1. *AEBAS Biometric Attendance & State Treasury Payroll Integration:* Built automated SQL/ETL pipelines joining biometric punch logs across 33 districts with State Treasury payroll codes, achieving 100% data fidelity and resolving employee identity mismatches across MariaDB and OracleDB.
  2. *3-Tier Defaulter Risk Classification:* Designed rule-based and predictive models segmenting bonded medical officers into 3 non-compliance categories (did not report, joined formally but missing facility registration, active but severe attendance deficit) to prevent public fund leakage.
  3. *Next-Gen e-Hospital Data Consolidation:* Harmonized disparate, modular backend databases from the National Informatics Centre (NIC) into a centralized analytics reporting mart.
  4. *Enterprise Power BI Dashboard Suite:* Architected a 6-page production dashboard with a 4-tier drill-down hierarchy (**District &rarr; Facility &rarr; Designation &rarr; Individual**) featuring complex DAX measures (time intelligence, attendance trends, active compliance rates).

### Flagship Technical Projects (from `pROJECTS.txt`)
1. **Proactive 5G Handover Prediction (Diffusion Models)** — *M.Tech Thesis*:
   - Replaced legacy reactive 5G handover protocols (Time-to-Trigger bottleneck) with an AI decision engine.
   - Combines a **GRU memory network** (encoding 3D drive-test spatio-temporal telemetry: RSRP, RSRQ, CINR) with a **Diffusion Model (DDPM/DDIM)** simulating 50 look-forward signal trajectories.
   - Resolved **98%/2% class imbalance** using **SMOTE + Tomek Links** and a custom dual-masking loss.
   - Deployed a two-stage **Random Forest** policy engine achieving a **97.64% F1-score** in predicting link drops before radio failure occurs.
2. **AI vs. Human Text Classification Pipeline**:
   - Engineered dual NLP classification architectures extracting 768-dimensional dense contextual embeddings from pre-trained **BERT** paired with an **XGBoost** classifier.
   - Benchmarked against deep neural baselines (Bi-LSTM, 1D-CNN, Multi-Head Attention Transformers).
   - Applied NFKD normalization, stratified 80/20 sampling, dropout (0.5), and dynamic learning rate decay, attaining **99% Precision** and **98% Recall** in detecting synthetic LLM-generated text.

---

## 4. Pre-Migration Backup Archive (Fedora State)

Before wiping Fedora, an automated backup script was executed:
- **Script:** `/home/rishi21/Desktop/Jobhunt/backup-for-windows.sh`
- **Archive File:** `jobhunt_windows_backup_20261027_175605.tar.gz` (approx. 134 MB)
- **Checksum:** `jobhunt_windows_backup_20261027_175605.tar.gz.sha256`
- **Location:** Stored in `/home/rishi21/Desktop/Jobhunt/portfolio/` and user home directory.
- **Contents:** The entire `Jobhunt` workspace (portfolio, Bot, MatchAnnotator, Projects, `.gemini/skills`, `.gitconfig`), excluding `.venv`, `node_modules`, `__pycache__`, and `.cache`.

> [!IMPORTANT]
> **Action Required Before OS Wipe:**  
> Copy **BOTH** `jobhunt_windows_backup_20261027_175605.tar.gz` and its `.sha256` file to an external USB drive or cloud storage (Google Drive / ProtonDrive).

---

## 5. Windows 11 Fresh Installation & Setup Runbook

After cleanly installing Windows 11, execute the following steps in order.

### Step 5.1: Install Package Manager & Core Tools
Open an administrative PowerShell prompt:
```powershell
# Using winget (built into modern Windows 11)
winget install --id Git.Git -e --source winget
winget install --id Python.Python.3.12 -e --source winget
winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id TheDocumentFoundation.LibreOffice -e --source winget
```

### Step 5.2: Configure Git Attribution (CRITICAL FOR GITHUB GRAPH)
> [!WARNING]
> If your Git email does not match your GitHub noreply address, your commits will show as anonymous (`author: null`) and will NOT appear on your GitHub contribution graph!

In PowerShell or Git Bash:
```bash
git config --global user.name "Rishi Thakur"
git config --global user.email "160097149+rishi-th219@users.noreply.github.com"
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

### Step 5.3: Set Up Workspace Directory & Restore Archive
Create your workspace directory and extract the archive:
```powershell
# Navigate to Desktop
cd $HOME\Desktop

# Extract tarball (Windows 11 tar natively supports .tar.gz)
tar -xzvf "D:\jobhunt_windows_backup_20261027_175605.tar.gz" -C .

# Verify directory structure
cd $HOME\Desktop\Jobhunt
ls
```

### Step 5.4: Set Up Python Virtual Environment & Dependencies
In PowerShell:
```powershell
cd $HOME\Desktop\Jobhunt

# Create virtual environment
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# Upgrade pip
python -m pip install --upgrade pip

# Install core tools
pip install playwright pypdf pymupdf pillow pyyaml pandas openpyxl requests beautifulsoup4

# Install Playwright browser binaries
playwright install chromium
```

### Step 5.5: Configure LibreOffice CLI (`soffice.exe`)
LibreOffice installs by default at `C:\Program Files\LibreOffice\program\soffice.exe`.
Add it to your User PATH in Windows:
1. Press `Win + R`, type `sysdm.cpl`, press Enter.
2. Go to **Advanced** &rarr; **Environment Variables**.
3. Under **User variables**, select `Path` &rarr; **Edit** &rarr; **New**.
4. Add: `C:\Program Files\LibreOffice\program`.
5. Click **OK**.

Verify in a new PowerShell window:
```powershell
soffice --version
# Should output: LibreOffice 24.x.x or 25.x.x
```

### Step 5.6: Install Antigravity (AGY)
Install and authenticate Antigravity according to official instructions:
- Launch Antigravity IDE / CLI on Windows.
- Open the workspace root: `C:\Users\<username>\Desktop\Jobhunt`.

---

## 6. Antigravity (AGY) Custom Skills Configuration

AGY on Windows automatically discovers custom skills located in:
1. Workspace root: `<WORKSPACE_ROOT>\.gemini\skills\<skill_name>\SKILL.md` or `<WORKSPACE_ROOT>\.agents\skills\<skill_name>\SKILL.md`
2. User profile: `%USERPROFILE%\.agents\skills\<skill_name>\SKILL.md` or `%USERPROFILE%\.gemini\antigravity\skills\<skill_name>\SKILL.md`

All skills have been pre-packaged and preserved in:
- `Jobhunt/.gemini/skills/`
- `Jobhunt/portfolio/tailoring/skills_backup/`

### The 10 Primary Custom Skills:
1. **`career-ops`** (`Bot/.agents/skills/career-ops/`): Automated job pipeline, scraping, opportunity deduplication, and application tracking.
2. **`resume-ats-optimizer`**: Analyzes keyword match score, ATS parseability, and fixes breaking layout elements.
3. **`resume-formatter`**: Enforces strict single-column, 100% black & white, table-free CSS, and margin controls.
4. **`resume-quantifier`**: Transforms bullets into metric-driven impact statements (percentages, volumes, timeframes).
5. **`resume-section-builder`**: Constructs role-specific sections with strict typography hierarchy.
6. **`resume-tailor`**: Ingests job descriptions (JDs) and aligns candidate facts without fabricating details.
7. **`tailored-resume-generator`**: Orchestrates HTML creation, LibreOffice headless PDF compilation, and word count verification.
8. **`sql-optimization`**: Production SQL tuning patterns for Postgres, MariaDB, and MSSQL.
9. **`powerbi-modeling`**: DAX patterns, Star Schema design, and time intelligence best practices.
10. **`data-analysis`**: Automated exploratory data analysis, outlier detection, and statistical testing.

To make skills globally available to all AGY sessions on Windows:
```powershell
# Copy skills to user profile
New-Item -ItemType Directory -Force -Path "$HOME\.agents\skills"
Copy-Item -Recurse -Force "$HOME\Desktop\Jobhunt\.gemini\skills\*" "$HOME\.agents\skills\"
```

---

## 7. Resume Tailoring Engine & Non-Negotiable ATS Rules

Whenever AGY generates or edits resumes, it **MUST** enforce the following rules:

### Physical Constraints & Layout
- **Page Count:** **STRICTLY 1 PAGE** (`Pages: 1` in `pdfinfo` or PyMuPDF). No overflow onto page 2.
- **Single-Column Only:** **Zero tables** (`<table>`, `<tr>`, `<td>`), zero split columns, zero floating frames. Tables break modern ATS parsers.
- **100% Black & White:** All text and borders must be pure `#000000`. Background pure `#FFFFFF`. No colored badges, icons, or photo placeholders.
- **Margins:** Top: `0.32in`, Bottom: `0.30in`, Left: `0.46in`, Right: `0.46in`.
- **Typography:** Professional serif (`Liberation Serif` or `Times New Roman`) or clean sans-serif (`Calibri`). Body: `9.1pt` with `line-height: 1.25`.
- **Zero Lone Bullets (`Lone: 0`):** Use CSS `padding-left: 14px; text-indent: -14px;` with `&bull;&nbsp;` to prevent stray bullet lines.

### Naukri360 & Indian Job Market Rules
1. **Word Count:** Strictly **250 to 500 words** (sweet spot: **485 to 499 words**).
2. **Spelling Standard:** The word **`spatio-temporal`** MUST have a hyphen (never `spatiotemporal`).
3. **Capitalization:** Write **`Govt. Of Chhattisgarh`** with formal title casing.
4. **Phrase Repetition Limit:** The exact phrase `"in computer science & engineering"` must appear **at most once** across the entire document.
   - M.Tech line: `M.Tech in Computer Science & Engineering`
   - B.Tech line: `B.Tech in Computer Science`
   - Summary: `M.Tech CSE, GATE CS qualified`
5. **Key Metric Bolding:** Bold all critical metrics and KPIs (**33 districts**, **97.64% F1-score**, **99% Precision**, **Power BI**, **SQL/ETL**) covering **10% to 15%** of the total word count.

### Mandatory Role-Tailored AI Tooling Line
In **EVERY** resume, the **Technical Skills** section must contain a prominent AI tooling entry:

| Target Track | Required AI Skills Line |
| :--- | :--- |
| **SQL Developer** | **AI Tools, ETL & Modeling:** Claude Code, Google Antigravity (AI-Driven Query Tuning & Schema Generation), Star Schema, Schema Reconciliation, Python (SQLAlchemy) |
| **Data Analyst** | **AI Tools & Data Modeling:** Claude Code, Google Antigravity (AI-Assisted EDA & Code Generation), Dimensional Star Schema, Multi-Source ETL, Schema Reconciliation |
| **Business Analyst (SQL & BI)** | **BI, AI Tools & Modeling:** Claude Code, Google Antigravity (AI-Assisted Requirements Decomposition), Microsoft Power BI, Advanced Excel, Star Schema |
| **Power BI Developer** | **AI Tools & Data Modeling:** Claude Code, Google Antigravity (AI-Assisted DAX & M Code Generation), Multi-Source ETL, Schema Reconciliation, Inventory Analytics |
| **ML / AI Engineer** | **GenAI, LLMs & AI Tools:** Claude Code, Google Antigravity, Prompt Engineering, Agentic Workflows, Hugging Face, PyTorch, TensorFlow, Scikit-learn, SMOTE + Tomek Links |
| **Data Scientist** | **GenAI, Deep Learning & AI Tools:** Claude Code, Google Antigravity, Prompt Engineering, Agentic Workflows, Diffusion Models (DDPM/DDIM), Transformers, BERT Embeddings |
| **Supply Chain Analyst** | **AI-Assisted Analytics:** Claude Code, Google Antigravity (AI-Driven Forecasting & Inventory Modeling), Celonis Process Mining, Advanced Excel, Power BI |

### Master Resume Generator Script
The master generator is located at:
`Jobhunt/portfolio/tailoring/generate_all_ai_tailored_resumes.py` (and `Jobhunt/portfolio/generate_tailored_resumes.py`).
Both scripts are cross-platform compatible and automatically discover LibreOffice on Windows (`C:\Program Files\LibreOffice\program\soffice.exe`) as well as Linux.

To recompile all tailored resumes:
```powershell
cd $HOME\Desktop\Jobhunt\portfolio\tailoring
python generate_all_ai_tailored_resumes.py
```

---

## 8. Career-Ops Automation Bot (`Bot/`) Operational Guide

The Career-Ops bot (`Jobhunt/Bot/`) automates job hunting workflows.

### Project Architecture:
```text
Bot/
├── auto_apply_bot.py       # Playwright browser runner
├── config_loader.py        # Maps job keywords to tailored resumes
├── extract_opportunities.py # Scrapes opportunities from web portals
├── run_fast_pipeline.py    # Master pipeline runner
├── opportunities.xlsx      # Master spreadsheet of tracked applications
├── opportunities.csv       # Flat CSV tracker
└── config/
    └── profile.yml         # Candidate metadata & answers to standard application questions
```

### Resume Routing Rules (`config_loader.py`):
- `SupplyChain` &rarr; `*Supply_Chain_Analyst_Resume.pdf`
- `AIML` &rarr; `*ML_Engineer_Resume.pdf` or `*Data_Science_Resume.pdf`
- `PowerBI` &rarr; `*PowerBI_Developer_Resume.pdf` / `*PowerBI_Data_Analyst.pdf`
- `SQL` &rarr; `*SQL_Developer_Resume.pdf`
- `BA` &rarr; `*Business_Analyst_Resume.pdf` / `*Business_Analyst_SQL.pdf`
- `DA` (Default) &rarr; `*Data_Analyst_Resume.pdf`

### Running the Bot on Windows:
```powershell
cd $HOME\Desktop\Jobhunt\Bot
..\.venv\Scripts\Activate.ps1
python run_fast_pipeline.py
```

---

## 9. Portfolio Website Maintenance (`portfolio/`)

The portfolio website is live at `https://rishi-th219.github.io/portfolio/`.

### Structure:
- `index.html`: Single-page responsive portfolio with Dark/Light theme, interactive skills radar (Chart.js), project showcase, and dynamic GitHub contribution calendar.
- `assets/`: Contains public PDF mirrors downloadable by recruiters.
- `tailoring/`: Private working folder containing source drafts, notes, and generated PDFs.

### Testing Locally on Windows:
```powershell
cd $HOME\Desktop\Jobhunt\portfolio
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Deploying Updates:
```powershell
git add .
git commit -m "Update portfolio assets and content"
git push origin main
# GitHub Pages deploys automatically within 60 seconds
```

---

## 10. Post-Migration Verification Checklist for AGY

When AGY takes over on Windows, run this quick diagnostic check:

```powershell
# 1. Verify Git attribution
git config user.email
# Expected: 160097149+rishi-th219@users.noreply.github.com

# 2. Verify LibreOffice headless conversion
soffice --headless --version

# 3. Verify Python environment
python -c "import playwright, pypdf, fitz, PIL; print('Python packages OK!')"

# 4. Test resume generation (1-page compliance)
cd $HOME\Desktop\Jobhunt\portfolio\tailoring
python generate_all_ai_tailored_resumes.py

# 5. Check Git remotes
git remote -v
```

---

## 11. Initial Takeover Prompt for AGY on Windows

When opening Antigravity for the first time on Windows, paste this exact prompt into the chat:

```text
Hello AGY! I have migrated my workstation from Fedora to Windows 11.
Please read WINDOWS_MIGRATION_HANDOVER.md and portfolio/HANDOVER.md to take over the project.
Run the post-migration verification steps (check Git user/email attribution, LibreOffice soffice availability, Python packages, and resume generation). Confirm you are fully aligned with my candidate profile, ATS constraints, and project inventory.
```

---
*Authored with precision by Antigravity (AGY) for Rishi Thakur. Zero-data-loss guaranteed.*
