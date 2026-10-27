# AGY HANDOVER BRIEFING: RESUME TAILORING & JOB HUNT ECOSYSTEM

> **Document Type:** Project Handover & System Specifications  
> **Candidate:** Rishi Thakur  
> **Migration Target:** Fedora Linux &rarr; Windows 11  
> **Active Agent:** Antigravity (AGY)  
> **Target Resume Directory:** `.../Jobhunt/portfolio/tailoring/`  

---

## 1. Executive Summary & Purpose

This handover document provides a complete, self-contained operational guide for **Antigravity (AGY)** after reinstalling on Windows. It specifies all candidate facts, directory structures, installed skills, non-negotiable ATS/Naukri360 formatting rules, AI tooling requirements, automation bot integrations, and exact workflows for tailoring and compiling resumes.

When AGY initializes in this project on Windows, **it must strictly follow this guide** to maintain 100% continuity without regressing on formatting, ATS compliance, or candidate facts.

---

## 2. Workspace & Directory Architecture

On Windows, the project repository is located at:
```text
<WORKSPACE_ROOT>\Desktop\Jobhunt\
├── AGY_HANDOVER.md                                # This handover document
├── Bot\                                           # Playwright automation bot
│   ├── auto_apply_bot.py                          # Automated form filler & resume uploader
│   ├── config_loader.py                           # Profile loader & role regex matcher
│   └── ...
└── portfolio\                                     # Portfolio & resume repository
    ├── index.html                                 # Portfolio website
    ├── assets\                                    # Public PDF mirrors (used for web downloads)
    └── tailoring\                                 # PRIMARY RESUME WORKSPACE (ALL RESUMES GO HERE)
        ├── AGY_HANDOVER.md                        # Duplicate copy for local reference
        ├── internship_exp                         # Raw source notes: CHiPS internship
        ├── pROJECTS.txt                           # Raw source notes: 5G & NLP thesis projects
        ├── generate_all_ai_tailored_resumes.py   # Master cross-platform Python generator
        ├── Rishi_Thakur_ML_Engineer_Resume.pdf
        ├── Rishi_Thakur_Data_Analyst_Resume.pdf
        ├── Rishi_Thakur_Business_Analyst_SQL.pdf
        ├── Rishi_Thakur_PowerBI_Data_Analyst.pdf
        ├── Rishi_Thakur_SQL_Developer_Resume.pdf
        ├── Rishi_Thakur_Data_Science_Resume.pdf
        ├── Rishi_Thakur_PwC_Tech_Consulting.pdf
        ├── Rishi_Thakur_Tech_Bus_Engagement.pdf
        ├── Rishi_Thakur_United_Airlines_Data_Scientist.pdf
        └── Rishi_Thakur_Supply_Chain_Analyst_Resume.pdf
```

> [!IMPORTANT]
> **Active Resume Storage Rule:**  
> All newly tailored resumes (`.pdf`, `.docx`, `.md`) **MUST** be written directly into `.../Jobhunt/portfolio/tailoring/`. If a resume is intended for the public portfolio website, a duplicate copy should be placed in `.../Jobhunt/portfolio/assets/`.

---

## 3. Candidate Ground Truth Profile

All generated content must be strictly grounded in the candidate's actual qualifications. **Never fabricate facts, companies, or degrees.**

### Contact Information
- **Full Name:** Rishi Thakur
- **Location:** Bengaluru, India
- **Phone:** `+91 8109830219`
- **Email:** `rishi_th219@proton.me`
- **Portfolio:** `https://rishi-th219.github.io/portfolio/`
- **LinkedIn:** `https://linkedin.com/in/rishi-thakur-b665a4298`
- **GitHub:** `https://github.com/rishi-th219`

### Academic Background
- **Master of Technology (M.Tech) in Computer Science & Engineering**  
  *International Institute of Information Technology (IIIT), Naya Raipur*  
  *CGPA:* 7.90 | *Duration:* 08/2024 – 07/2026
- **Bachelor of Technology (B.Tech) in Computer Science**  
  *Amity University Chhattisgarh*  
  *CGPA:* 7.71 | *Duration:* 08/2019 – 06/2023
- **GATE Qualification:** Qualified GATE Computer Science & Information Technology (CS), 2024
- **Language Proficiency:** IELTS Academic Band Score: 7.5

### Professional Experience
- **Company:** Chhattisgarh Infotech Promotion Society (CHiPS)
- **Posting:** Dept. of Health & Family Welfare, Govt. Of Chhattisgarh | Raipur, India
- **Duration:** 06/2025 – 03/2026 (or ongoing / recent)
- **Domain:** Statewide Health Operations & Public Sector Technology
- **Core Real-World Initiatives Grounded in `internship_exp`:**
  1. *AEBAS Biometric Attendance & State Treasury Payroll Integration:* Built automated SQL/ETL pipelines joining biometric punch logs across 33 districts with State Treasury payroll codes, achieving 100% data fidelity and resolving employee identity mismatches across MariaDB and OracleDB.
  2. *3-Tier Defaulter Risk Model:* Classified bonded medical officers into 3 non-compliance categories (did not report, joined formally but missing facility registration, active but severe attendance deficit) to prevent public fund leakage.
  3. *Next-Gen e-Hospital Data Consolidation:* Harmonized disparate, modular backend databases from National Informatics Centre (NIC) into a centralized reporting mart.
  4. *Enterprise Power BI Suite:* Designed a 6-page interactive dashboard with 4-tier drill-down hierarchy (**District &rarr; Facility &rarr; Designation &rarr; Individual**) with complex DAX measures.

### Flagship Technical Projects (from `pROJECTS.txt`)
1. **Proactive 5G Handover Prediction (Diffusion Models)** — *M.Tech Thesis*:
   - Replaced legacy reactive 5G handover protocols (Time-to-Trigger bottleneck) with an AI decision engine.
   - Combines a **GRU memory network** (encoding 3D drive-test spatio-temporal telemetry: RSRP, RSRQ, CINR) with a **Diffusion Model (DDPM/DDIM)** simulating 50 realistic look-forward signal paths.
   - Handled extreme **98%/2% class imbalance** using **SMOTE + Tomek Links** and a custom dual-masking loss.
   - Deployed a two-stage **Random Forest** policy engine achieving a **97.64% F1-score** in predicting link drops before radio failure occurs.
2. **AI vs. Human Text Classification Pipeline**:
   - Engineered dual NLP classification architectures extracting 768-dimensional dense contextual embeddings from pre-trained **BERT** paired with an **XGBoost** classifier.
   - Benchmarked against deep neural baselines (Bi-LSTM, 1D-CNN, Multi-Head Attention Transformers).
   - Applied NFKD normalization, stratified 80/20 sampling, dropout (0.5), and dynamic learning rate decay, attaining **99% Precision** and **98% Recall** in detecting synthetic LLM-generated text.

---

## 4. The 6 Custom Antigravity Skills

On Windows, AGY reads skills from:
- User-level: `%USERPROFILE%\.agents\skills\<skill_name>\SKILL.md` or `%USERPROFILE%\.gemini\antigravity\skills\<skill_name>\SKILL.md`
- Workspace-level: `<WORKSPACE_ROOT>\.gemini\skills\<skill_name>\SKILL.md`

### Summary of the 6 Skills:
1. **`resume-ats-optimizer`**: Evaluates parsing compatibility, checks keyword match score against job descriptions, identifies layout breaking elements, and guides keyword density.
2. **`resume-formatter`**: Enforces single-page, single-column, ATS-safe typography, proper margin sizing, and clean visual hierarchy.
3. **`resume-quantifier`**: Transforms qualitative statements into metric-driven achievements using numbers, percentages, volume, and time metrics.
4. **`resume-section-builder`**: Generates targeted sections (Professional Summary, Technical Skills, Experience, Projects, Education, Certifications) structured for specific job levels.
5. **`resume-tailor`**: Analyzes specific target job descriptions (JDs) and systematically reorders, aligns, and adjusts keywords while preserving absolute truthfulness.
6. **`tailored-resume-generator`**: Orchestrates end-to-end resume generation from a provided job description.

> [!TIP]
> **Windows Setup Tip:** Place the folder `.agents/skills` or `.gemini/skills` directly in your `%USERPROFILE%` or inside `Jobhunt/.gemini/skills/` so AGY discovers them automatically regardless of platform.

---

## 5. Non-Negotiable Resume Rules & ATS Standards

Every resume generated by AGY **MUST** satisfy the following strict criteria:

### A. Physical Page Constraint: Strictly 1 Page
- **Page Count:** Exactly **1 page** (`Pages: 1` in `pdfinfo`). Under no circumstances may a resume spill onto page 2.
- **Page Margins:** Top: `0.32in`, Bottom: `0.30in`, Left: `0.46in`, Right: `0.46in`.
- **Target Page Fill:** ~90% to 95% vertical fill. No awkward bottom whitespace, and zero overflow.

### B. Layout & Styling: Strictly Single-Column & 100% Black & White
- **Zero Tables:** **DO NOT** use `<table>`, `<tr>`, or `<td>` anywhere in resumes. Tables break modern ATS parsers and multi-page heuristics.
- **Single-Column Only:** No side-by-side split columns, no text boxes, no floating divs.
- **100% Black & White:** All text and dividing lines must be pure black (`#000000`). Background must be pure white (`#FFFFFF`). No colored text, icons, badges, or photo boxes.
- **Font:** Professional serif or clean sans-serif: `Liberation Serif`, `Times New Roman`, or `Calibri`. Body text: `9.1pt` (line-height: `1.25`).

### C. Zero Lone Bullets (`Lone: 0`)
- When parsed by `pdftotext`, no line should contain solely a stray bullet point (`•`).
- Handled in HTML/CSS using `padding-left: 14px; text-indent: -14px;` with non-breaking bullet entities (`&bull;&nbsp;`).

### D. Naukri360 & Indian Job Market ATS Rules
1. **Target Word Count:** Strictly **250 to 500 words** per resume.
   - *Optimal sweet spot:* **485 to 499 words** (ensures high keyword density, 90–95% page fill, and 100% pass on Naukri360).
2. **Spelling Standard:** The word **`spatio-temporal`** MUST have a hyphen (do not write `spatiotemporal`).
3. **Capitalization:** Write **`Govt. Of Chhattisgarh`** with formal title capitalization in experience headers.
4. **Phrase Repetition:** The exact phrase `"in computer science & engineering"` must appear **at most once** across the entire resume.
   - Use `M.Tech in Computer Science & Engineering` for the M.Tech entry.
   - Write `B.Tech in Computer Science` for the B.Tech entry.
   - Write `M.Tech CSE, GATE CS qualified` in the summary.
5. **Key Text Bolding:** Enclose core metrics, KPIs, and key technologies in `<strong>` tags (e.g., **33 districts**, **97.64% F1-score**, **99% Precision**, **Power BI**, **SQL/ETL**) covering approximately **10% to 15%** of total word count.

---

## 6. Mandatory AI Tooling Requirement

In **EVERY** resume generated, the **Technical Skills** section must prominently feature modern AI tooling, specifically tailored to the target role:

| Target Role | Tailored AI Category & Skillset |
| :--- | :--- |
| **Machine Learning Engineer** | **GenAI, LLMs & AI Tools:** Claude Code, Google Antigravity, Prompt Engineering, Agentic Workflows, Hugging Face, PyTorch, TensorFlow, Scikit-learn, SMOTE + Tomek Links |
| **Data Scientist** | **GenAI, Deep Learning & AI Tools:** Claude Code, Google Antigravity, Prompt Engineering, Agentic Workflows, Diffusion Models (DDPM/DDIM), Transformers, BERT Embeddings |
| **Data Analyst** | **AI Tools & Data Modeling:** Claude Code, Google Antigravity (AI-Assisted EDA & Code Generation), Dimensional Star Schema, Multi-Source ETL, Schema Reconciliation |
| **Power BI Data Analyst** | **AI Tools & Data Modeling:** Claude Code, Google Antigravity (AI-Assisted DAX & M Code Generation), Multi-Source ETL, Schema Reconciliation, Inventory Analytics |
| **SQL Developer** | **AI Tools, ETL & Modeling:** Claude Code, Google Antigravity (AI-Driven Query Tuning & Schema Generation), Star Schema, Schema Reconciliation, Python (SQLAlchemy) |
| **Business Analyst (SQL & BI)**| **BI, AI Tools & Modeling:** Claude Code, Google Antigravity (AI-Assisted Requirements Decomposition), Microsoft Power BI, Advanced Excel, Star Schema |
| **Technology Consulting (PwC)** | **BI, AI Tools & Prototyping:** Claude Code, Google Antigravity (AI-Assisted Prototyping), Microsoft Power BI, Advanced Excel, Python, Client Presentations |
| **Tech Business Engagement**| **AI, Agents & Automation:** AI-Driven Automation, Agentic Frameworks (Claude Code, Google Antigravity), Prompt Engineering, Automated Extraction & Transformation |
| **United Airlines Data Scientist**| **GenAI, Agentic Systems & NLP:** Agentic AI (Claude Code, Google Antigravity, Prompt Engineering), NLP (BERT Embeddings, Transformers, Bi-LSTM, 1D-CNN) |
| **Supply Chain Analyst** | **AI-Assisted Analytics:** Claude Code, Google Antigravity (AI-Driven Forecasting & Inventory Modeling), Celonis Process Mining, Advanced Excel, Power BI |

---

## 7. Auto-Apply Bot Integration (`Jobhunt/Bot/`)

The automation bot in `Desktop/Jobhunt/Bot/` automatically matches job postings to the tailored resumes.

### Track Matching Logic in `config_loader.py`:
- `SupplyChain`: Matches `supply chain`, `inventory`, `logistics`, `pfep`, `demand planning` &rarr; `*Supply_Chain_Analyst_Resume.pdf`
- `AIML`: Matches `machine learning`, `data scientist`, `deep learning`, `nlp`, `llm`, `genai` &rarr; `*ML_Engineer_Resume.pdf` or `*Data_Science_Resume.pdf`
- `PowerBI`: Matches `power bi`, `tableau`, `bi developer`, `dashboard`, `reporting` &rarr; `*PowerBI_Data_Analyst.pdf`
- `SQL`: Matches `sql`, `database`, `data engineer`, `etl`, `postgres`, `oracle`, `mariadb` &rarr; `*SQL_Developer_Resume.pdf`
- `BA`: Matches `business analyst`, `strategy`, `consultant`, `risk analyst`, `process analyst` &rarr; `*Business_Analyst_SQL.pdf`
- `DA`: Matches `data analyst`, `analytics`, `data` &rarr; `*Data_Analyst_Resume.pdf`

---

## 8. Windows Setup & Toolchain Guide

When setting up on Windows 11:

### 1. Python Environment
Install Python 3.10+ and install necessary utilities:
```powershell
pip install pillow pypdf pymupdf playwright
```

### 2. LibreOffice (for Headless PDF Compilation)
Install LibreOffice for Windows (default path: `C:\Program Files\LibreOffice\program\soffice.exe`).
- Ensure `soffice.exe` is added to your Windows `PATH`, or referenced directly in scripts.
- When invoking LibreOffice headless on Windows, pass an isolated user profile:
  ```powershell
  soffice.exe -env:UserInstallation=file:///C:/Users/<username>/AppData/Local/Temp/libo_profile --headless --convert-to pdf:writer_pdf_Export input.html --outdir output_dir
  ```

### 3. Master Generator Script
The master script is located at:
`.../Desktop/Jobhunt/portfolio/tailoring/generate_all_ai_tailored_resumes.py`
Running it executes HTML generation, runs headless LibreOffice, and exports all 9 core resumes to `portfolio/tailoring/`.

---

## 9. Standard Operating Procedure for Tailoring a New Resume

Whenever the user provides a new job description:
1. **Analyze JD Keywords:** Extract required skills, programming languages, databases, and domain buzzwords.
2. **Review Candidate Master Profile:** Select relevant achievements from `internship_exp` and `pROJECTS.txt`.
3. **Construct the 6 Core Sections:**
   - **Header:** Standard contact line with portfolio and GitHub links.
   - **Professional Summary:** 3–4 lines targeted at the JD title, highlighting M.Tech CSE, GATE CS, and relevant tools.
   - **Technical Skills:** 3 categorized lines, with one category dedicated to role-tailored AI tools including **Claude Code** and **Google Antigravity**.
   - **Work Experience:** 5 quantifiable bullets focusing on real CHiPS achievements with bolded metrics (~10–15% bolding).
   - **Key Projects:** 2 project blocks (5G Handover Diffusion & NLP Text Classification) with tailored action verbs.
   - **Education & Certifications:** Exactly one mention of `in computer science & engineering`.
4. **Calibrate Word Count:** Target **485–499 words** (strictly within 250–500).
5. **Compile to PDF:** Run headless LibreOffice using single-column CSS (zero tables).
6. **Verify Standards:**
   - `Pages == 1`
   - `Lone Bullets == 0`
   - `Word Count >= 250 and <= 500`
   - `spatio-temporal` hyphenated
   - `Govt. Of Chhattisgarh` capitalized
7. **Save Output:** Save directly to `.../Jobhunt/portfolio/tailoring/<New_Resume_Name>.pdf`.

---

*Handover document authored and certified by Antigravity (AGY).*
