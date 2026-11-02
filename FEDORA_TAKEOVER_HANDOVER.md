# 🚀 FEDORA LINUX TAKEOVER & SYSTEM CONTINUITY HANDOVER
**Comprehensive System Runbook, Ground-Truth Specifications & Agent Instructions**  
**Candidate:** Rishi Thakur  
**Target Migration:** Windows 11 &rarr; Fedora Linux (x86_64)  
**Agentic AI Assistant:** Google Antigravity (AGY)  
**Workspace Root:** `~/Desktop/Jobhunt/` (formerly `C:\Users\Rishi\Desktop\Jobhunt\`)  
**Date:** November 2026  

---

## 1. Executive Summary & Takeover Protocol

This handover document is the **Single Source of Truth** for resuming all engineering work, resume tailoring, portfolio maintenance, and automated job applications after migrating from **Windows 11** to **Fedora Linux** and reinstalling **Antigravity (AGY)**.

When AGY initializes on Fedora Linux:
1. **Read This Document First:** AGY must immediately inspect this runbook (`FEDORA_TAKEOVER_HANDOVER.md` or `portfolio/FEDORA_TAKEOVER_HANDOVER.md`).
2. **Verify Toolchains:** Ensure Git, Python 3.11+, LibreOffice Headless, and Poppler utilities (`pdftotext`, `pdfinfo`) are installed and functional.
3. **Preserve Ground Truth:** Strictly adhere to candidate facts, verified educational credentials, and non-negotiable ATS resume formatting rules.
4. **Maintain Portfolio Standards:** Strictly preserve the **NewTemplate** pitch-black & teal design system, zero visible sensitive project metrics, and zero phone numbers.

---

## 2. Workspace Map & Git Repositories

On Fedora Linux, the projects are organized under `~/Desktop/`:

```text
/home/<user>/Desktop/
├── tailoring/                                    # PRIMARY RESUME WORKSPACE (Private / Git-Ignored)
│   ├── generate_all_ai_tailored_resumes.py       # Master cross-platform LibreOffice compiler
│   ├── build_all_6_resumes.py                    # 6-track rapid compiler
│   ├── internship_exp                            # Raw candidate ground truth: CHiPS experience
│   ├── pROJECTS.txt                              # Raw candidate ground truth: 5G & NLP projects
│   └── Rishi_Thakur_*.pdf                        # Master compiled ATS-optimized PDFs
│
└── Jobhunt/                                      # PRIMARY REPOSITORY HUB
    ├── FEDORA_TAKEOVER_HANDOVER.md               # This master takeover runbook
    ├── backup-for-fedora.ps1                     # Windows pre-migration backup script
    ├── restore_on_fedora.sh                      # Fedora automated restore script
    ├── setup_fedora_environment.sh               # Fedora 1-click dependency installer
    │
    ├── .gemini/                                  # Antigravity Workspace Customizations
    │   └── skills/                               # 6 ATS Resume Skills + DB/BI Skills
    │
    ├── portfolio/                                # LIVE PORTFOLIO REPOSITORY
    │   ├── Remote: https://github.com/rishi-th219/portfolio.git (branch: main)
    │   ├── Live URL: https://rishi-th219.github.io/portfolio/
    │   ├── index.html                            # 6-page NewTemplate pitch-black & teal portfolio
    │   ├── css/styles.css                        # Design tokens & signature components
    │   ├── js/chart-data.js                      # Case studies & ATS resume data store
    │   ├── js/app.js                             # Interactive modal and theme engine
    │   └── assets/                               # Public mirrored resume PDFs (for web downloads)
    │
    ├── Bot/                                      # CAREER-OPS AUTONOMOUS BOT
    │   ├── Remote: https://github.com/rishi-th219/autojobhunt.git (branch: main)
    │   ├── auto_apply_bot.py                     # Multi-platform job scraper & application runner
    │   ├── opportunities.xlsx                    # Opportunity database & application tracker
    │   └── config/profile.yml                    # Candidate matching criteria
    │
    └── Projects/ecommerce-elt-local/             # PRODUCTION ELT DATA WAREHOUSE
        ├── Remote: https://github.com/rishi-th219/ecommerce-elt-local.git (branch: main)
        ├── MSSQL 2025 & Postgres 16              # Dual-warehouse containerized stack
        ├── dbt/                                  # 14 dbt models, 213 automated tests
        ├── .env & dbt/profiles.yml               # Local connection credentials
        └── PROJECT_STUDY_GUIDE.md                # System study guide & interview runbook
```

---

## 3. Candidate Ground Truth Profile (Strict Facts)

> [!CAUTION]
> **Zero Fabrication Policy:** All generated resumes, cover letters, and portfolio content must be 100% grounded in the verified facts below. **Never invent employers, dates, job titles, or degrees.**

### Contact Information
* **Full Name:** Rishi Thakur
* **Email:** `rishithakur528@gmail.com` (Portfolio public) / `rishi_th219@proton.me` (Applications)
* **Location:** Raipur, Chhattisgarh, India / Bengaluru, Karnataka, India
* **GitHub:** `https://github.com/rishi-th219`
* **LinkedIn:** `https://www.linkedin.com/in/rishi-thakur-dev/`
* **Portfolio Website:** `https://rishi-th219.github.io/portfolio/`

### Academic Background
* **Master of Technology (M.Tech) in Computer Science & Engineering**  
  *International Institute of Information Technology (IIIT), Naya Raipur*  
  *CGPA:* **7.90** | *Duration:* 08/2024 – 07/2026
* **Bachelor of Technology (B.Tech) in Computer Science & Engineering**  
  *Amity University Chhattisgarh*  
  *CGPA:* **7.71** | *Duration:* 08/2019 – 06/2023 (or 2020–2024)
* **GATE CS Qualification:** Qualified GATE Computer Science & Information Technology (CS), 2024
* **Language Certification:** IELTS Academic Band Score: **7.5** (CEFR C1 Proficient User)

### Professional Experience
* **Role:** Data Analyst / BI Developer Intern
* **Organization:** Chhattisgarh Infotech Promotion Society (CHiPS)
* **Deployment:** Dept. of Health & Family Welfare, Govt. of Chhattisgarh | Raipur, India
* **Duration:** 06/2025 – 03/2026
* **Core Real-World Initiatives (from `internship_exp`):**
  1. *AEBAS Biometric Attendance & State Treasury Payroll Integration:* Automated SQL/ETL pipelines joining biometric punch logs across 33 districts with State Treasury payroll records, resolving identity mismatches across MariaDB and OracleDB.
  2. *3-Tier Defaulter Risk Model:* Categorized bonded medical officers into 3 risk tiers (did not report, joined formally but missing facility registration, active with severe attendance deficit) to prevent public fund leakage.
  3. *Kimball Star Schema Data Mart:* Architected dimensional models with normalized dimension tables and high-throughput fact tables for state-level monitoring.
  4. *Enterprise Power BI Dashboard Suite:* Built executive dashboards with multi-tier drill-down hierarchies (**District &rarr; Facility &rarr; Designation &rarr; Individual**) and custom DAX measures for attendance rates and compliance tracking.

### Flagship Technical Projects (from `pROJECTS.txt`)
1. **Proactive 5G mmWave Handover Prediction (Diffusion Models)** — *M.Tech Thesis*:
   * Replaced reactive handover protocols with a predictive AI decision engine.
   * Combines GRU spatial-temporal trajectory modeling with Tabular Diffusion (DDPM/DDIM) on DeepMIMO datasets.
   * Addressed extreme 98%/2% class imbalance using SMOTE + Tomek Links and dual-masking loss.
   * Deployed a Random Forest policy engine achieving a 97.64% F1-score in predicting link drops before radio failure.
2. **AI vs. Human Text Classification Pipeline**:
   * Engineered NLP classification pipelines extracting 768-dimensional dense contextual embeddings from pre-trained BERT paired with an XGBoost classifier.
   * Benchmarked against deep neural baselines (Bi-LSTM, 1D-CNN, Multi-Head Attention).
   * Attained 99% Precision and 98% Recall in detecting synthetic LLM-generated text.
3. **Essential Drug Inventory ABC/VED/SDE Matrix**:
   * Multi-criteria inventory matrix optimizing procurement cycles and eliminating pharmacy stockout risks.
4. **Career-Ops Autonomous Job Acquisition Engine**:
   * Headless Playwright scrapers, semantic embedding skill-gap scoring, and automated tracking.

---

## 4. Antigravity Custom Skills & Locations

On Fedora Linux, AGY discovers custom skills from:
* **Global user level:** `~/.gemini/antigravity/skills/<skill_name>/SKILL.md` or `~/.agents/skills/<skill_name>/SKILL.md`
* **Workspace level:** `~/Desktop/Jobhunt/.gemini/skills/<skill_name>/SKILL.md`

### The 6 Core Resume Skills:
1. **`resume-ats-optimizer`**: Parses keywords, validates ATS compliance, and scores alignment against target job descriptions.
2. **`resume-formatter`**: Enforces strict single-page, single-column, 100% black-and-white typography and margin safety.
3. **`resume-quantifier`**: Transforms qualitative statements into metric-driven achievements without falsifying ground truth.
4. **`resume-section-builder`**: Constructs standardized sections (Summary, Technical Skills, Experience, Projects, Education).
5. **`resume-tailor`**: Reorders bullet points and aligns technical keywords to match specific job descriptions.
6. **`tailored-resume-generator`**: Orchestrates end-to-end resume generation from a raw JD.

### Additional Engineering Skills:
* **`powerbi-modeling`**: DAX measures, Kimball star schema modeling, RLS, and performance optimization guides.
* **`sql-optimization`**: Execution plan analysis, window functions, CTEs, and index strategies.
* **`firecrawl` suite**: Comprehensive web scraping, research, and documentation extraction skills.

---

## 5. Non-Negotiable Standards & Guardrails

### A. Resume ATS Standards (Naukri360 & Global Enterprise Parsers)
* **Strictly 1 Page:** `Pages == 1` in `pdfinfo`. Never spill onto page 2.
* **Strictly Single-Column:** Zero tables (`<table>`, `<tr>`, `<td>`), zero floating divs, zero sidebars.
* **100% Black & White:** Background pure white (`#ffffff`), text pure black (`#000000`). No photos, badges, or color accents.
* **Word Count Calibration:** Strictly **250 to 500 words** (optimal sweet spot: **485 to 499 words**).
* **Zero Lone Bullets:** `pdftotext` must show zero isolated bullets (`Lone: 0`).
* **Formatting Rules:**
  * The word **`spatio-temporal`** MUST be hyphenated.
  * Capitalize formally: **`Govt. of Chhattisgarh`**.
  * Phrase limit: `"in computer science & engineering"` must appear **at most once** across the entire resume.
  * Bolding: Bold key metrics and technologies covering **10% to 15%** of the text.
* **Mandatory Role-Tailored AI Tooling:**
  Every resume must include modern AI tools in Technical Skills:
  * *Data Analyst / Power BI:* Google Antigravity, Claude Code (AI-Assisted EDA & DAX Generation), Star Schema, Multi-Source ETL.
  * *ML / Data Science:* Google Antigravity, Claude Code, Diffusion Models, Transformers, Scikit-learn, PyTorch.
  * *SQL Developer:* Google Antigravity, Claude Code (AI-Driven Query Tuning & Schema Generation), PostgreSQL, Star Schema.

### B. Portfolio Presentation Standards (User Mandates)
* **Theme:** **NewTemplate** pitch deep black (`#09090b`), pure crisp white (`#f8fafc`), and vibrant glowing teal (`#14b8a6`).
* **Visual Rhythm:** Snug vertical padding (`py-10 md:py-14`), no empty void spaces.
* **Data Sensitivity:** **Zero sensitive project metrics** (no confidential district counts, facility counts, or operational percentages).
* **Privacy:** **Zero phone numbers** and **zero visible `llms.txt`** links on the UI.
* **Single Resume:** Display exclusively the main **Data Analyst** resume card with working ATS Modal Preview, PDF Download, and Open Tab.
* **Case Study Modals:** Ensure all 4 case study modal triggers (`healthbi`, `supply_chain`, `telco5g`, `career_ops_bot`) remain 100% interactive.

---

## 6. Step-by-Step Fedora Migration Runbook

### Phase 1: Before Wiping Windows 11
1. Open PowerShell and run the pre-migration backup script:
   ```powershell
   cd C:\Users\Rishi\Desktop\Jobhunt
   powershell -ExecutionPolicy Bypass -File backup-for-fedora.ps1
   ```
2. Confirm the archive is generated on your Desktop:
   * `jobhunt_fedora_migration_<timestamp>.tar.gz` (~30 MB)
   * `jobhunt_fedora_migration_<timestamp>.tar.gz.sha256`
3. **Copy BOTH files to an external USB flash drive or Cloud Storage (ProtonDrive / Google Drive).**

### Phase 2: Fresh Fedora Linux Installation
1. Install Fedora Workstation (Fedora 40 or 41).
2. Boot into Fedora, complete initial setup, and open a terminal.

### Phase 3: Restoration on Fedora
1. Copy the `.tar.gz` and `.sha256` files from your USB to your Fedora home directory (`~/Downloads/` or `~/`).
2. Clone or download the restore scripts:
   ```bash
   mkdir -p ~/Desktop/Jobhunt
   cd ~/Desktop/Jobhunt
   git clone https://github.com/rishi-th219/portfolio.git
   cp portfolio/restore_on_fedora.sh portfolio/setup_fedora_environment.sh .
   chmod +x restore_on_fedora.sh setup_fedora_environment.sh
   ```
3. Run the environment installer:
   ```bash
   ./setup_fedora_environment.sh
   ```
4. Run the restoration script with your backup archive:
   ```bash
   ./restore_on_fedora.sh ~/jobhunt_fedora_migration_*.tar.gz
   ```

### Phase 4: Verification Checklist on Fedora
Run the following quick sanity checks in terminal:
```bash
# 1. Verify LibreOffice headless PDF compilation:
libreoffice --version
soffice --headless --convert-to pdf:writer_pdf_Export --outdir /tmp ~/Desktop/tailoring/internship_exp 2>/dev/null && echo "LibreOffice OK"

# 2. Verify Poppler pdftotext:
pdftotext -v

# 3. Verify Python tailoring packages:
python3 -c "import playwright, pymupdf, pypdf, PIL; print('Python libraries OK')"

# 4. Verify portfolio build:
cd ~/Desktop/Jobhunt/portfolio
python3 -c "
with open('index.html') as f:
    text = f.read()
print('NewTemplate verified:', 'newtemplate-tag' in text and 'teal-bullet' in text)
"

# 5. Verify Git status of all repos:
cd ~/Desktop/Jobhunt/portfolio && git status
cd ~/Desktop/Jobhunt/Bot && git status
cd ~/Desktop/Jobhunt/Projects/ecommerce-elt-local && git status
```

---

## 7. How Antigravity Resumes Work on Fedora

When Antigravity opens the `Jobhunt` or `portfolio` workspace on Fedora:
1. **Resume Tailoring Requests:**
   * AGY reads the target JD provided by the user.
   * AGY activates `tailored-resume-generator` and checks `internship_exp` and `pROJECTS.txt` in `~/Desktop/tailoring/`.
   * AGY generates the HTML template adhering to the 485–499 word count target and compiles it via:
     ```bash
     soffice --headless --convert-to pdf:writer_pdf_Export input.html --outdir ~/Desktop/tailoring/
     ```
   * AGY verifies `Pages == 1` via `pdfinfo` and `Lone == 0` via `pdftotext`.
2. **Portfolio Updates:**
   * AGY modifies `index.html` or `css/styles.css` adhering to NewTemplate pitch-black & teal tokens.
   * AGY commits and pushes to `origin/main` on GitHub.
3. **Application Bot Automation:**
   * AGY runs `python3 auto_apply_bot.py` inside `~/Desktop/Jobhunt/Bot/`.

---

*Handover authored and verified by Google Antigravity (AGY) for Rishi Thakur.*
