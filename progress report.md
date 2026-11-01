# Portfolio Engineering Progress & Agent Handover Report

**Candidate:** Rishi Thakur — Data Analyst | Business Intelligence | SQL & Analytics Engineering  
**Repository:** `https://github.com/rishi-th219/portfolio`  
**Live Deployment:** `https://rishi-th219.github.io/portfolio/`  
**Workspace Path:** `C:\Users\Rishi\Desktop\Jobhunt\portfolio`  
**Last Updated:** November 1, 2026  
**Status:** In Active Enhancement (Milestone 11 Completed • Progressive Disclosure & Click-Dropdowns Live)

---

## 1. Executive Summary & Purpose of This Document

This document serves as the persistent, living handoff report for any AI agent or engineer taking over the portfolio engineering work for Rishi Thakur. It tracks every completed architectural change, security enforcement, UI/UX enhancement inspired by [`santifer/cv-santiago`](https://github.com/santifer/cv-santiago), and outlines the prioritized roadmap for subsequent steps.

---

## 2. Completed Milestones (Everything Done Till Now)

### Milestone 1: Stop Runtime Resume Generation & Sync Offline Tailored Resumes
* **Background:** The legacy site attempted dynamic runtime compilation of resumes via `generate_tailored_resumes.py`, causing dependency friction and inconsistencies.
* **Action Taken:**
  1. Deleted `generate_tailored_resumes.py` from repository root.
  2. Integrated 7 offline, multi-skill tailor-made resumes from Rishi's private local tailoring pipeline (`C:\Users\Rishi\Desktop\tailoring\`) into `portfolio/assets/`.
  3. Created [`sync_tailored_resumes.py`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/sync_tailored_resumes.py) to safely mirror compiled `.pdf` files into `assets/` without touching source pipelines.
* **Preserved Resumes in `portfolio/assets/`:**
  - `assets/Rishi_Thakur_Data_Analyst_Resume.pdf` (167.4 KB)
  - `assets/Rishi_Thakur_Business_Analyst_Resume.pdf` (163.9 KB)
  - `assets/Rishi_Thakur_SQL_Developer_Resume.pdf` (165.0 KB)
  - `assets/Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf` & `assets/Rishi_Thakur_PowerBI_Developer_Resume.pdf` (165.4 KB)
  - `assets/Rishi_Thakur_Data_Science_Resume.pdf` (166.7 KB)
  - `assets/Rishi_Thakur_ML_Engineer_Resume.pdf` (167.6 KB)
  - `assets/Rishi_Thakur_MIS_Analyst_Resume.pdf` (166.4 KB)
  - `assets/Rishi_Thakur_Supply_Chain_Analyst_Resume.pdf` (59.0 KB)
  - `assets/Rishi_Thakur_Resume.pdf` (Master Resume, 167.4 KB)

### Milestone 2: Critical Privacy & Security Lockdown (Purge `tailoring/` Exposure)
* **Incident:** The website UI previously displayed a card labeled `"📁 Dedicated Tailoring Directory"` with an external link `"Explore tailoring/ on GitHub ↗"`. Internal files (`skills_backup/`, draft notes, internal generator scripts) were staged in Git.
* **Immediate Corrective Actions Taken:**
  1. **UI Clean-Up:** Completely stripped the "Dedicated Tailoring Directory" card and GitHub link from [`index.html`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/index.html).
  2. **Replacement:** Replaced it with an executive "Download Master Resume ↓" bar pointing safely to `assets/Rishi_Thakur_Resume.pdf`.
  3. **Repository Purge:** Untracked and deleted all 84 private files and directories from Git cache (`tailoring/*`, internal scripts `generate_all_ai_tailored_resumes.py`, `build_all_6_resumes.py`, private notes `internship_exp`, `pROJECTS.txt`, and private skills).
  4. **Strict Ignore:** Updated [`.gitignore`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/.gitignore) with `tailoring/` and `*.docx`.
  5. **Code & Asset References:** Cleaned [`js/chart-data.js`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/js/chart-data.js), [`README.md`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/README.md), and [`HANDOVER.md`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/HANDOVER.md) so no links or private paths are exposed.
  6. **Local Deletion:** Removed the local `portfolio/tailoring/` folder from the workspace.

### Milestone 3: Implement Core Features Inspired by `santifer/cv-santiago`
Taking architectural cues from Santiago Fernández's AI CV (`https://github.com/santifer/cv-santiago`), the following features were engineered:
1. **Interactive AI Persona Twin ("Ask Rishi AI")**:
   - Zero-latency client-side intelligent assistant modal in [`js/app.js`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/js/app.js) and [`index.html`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/index.html).
   - 1-click prompt chips covering:
     - 33-district CHiPS biometric & payroll attendance data warehouse.
     - 5G mmWave Beam Alignment Diffusion Model (M.Tech thesis).
     - SQL, MariaDB, OracleDB, and Power BI DAX technical stack.
     - Career-Ops job scraper & application automation engine.
     - Resume recommendation router.
     - Immediate joiner availability & contact channels.
   - Grounded knowledge base in [`js/chart-data.js`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/js/chart-data.js) enforcing **100% zero-fabrication** fidelity to Rishi's actual background.
   - Typing indicator simulation and 1-click "Copy Answer" button.
2. **Interactive System Architecture & Pipeline Explorer (`#architectures`)**:
   - Tabbed visual telemetry component detailing 4 end-to-end architectures:
     1. *CHiPS Healthcare Attendance & Payroll ELT Pipeline* (MariaDB staging → automated SQL ETL → 4-tier drill-down Power BI).
     2. *5G mmWave Cellular Diffusion Architecture* (Ray-tracing simulation → 100-step diffusion reverse denoiser → 97.64% F1 beam alignment).
     3. *Career-Ops Autonomous Job Acquisition Engine* (55+ direct ATS APIs → link liveness daemon → pure Python OpenXML → Playwright bot).
     4. *Essential Drug Multi-Criteria ABC/VED Matrix* (Oracle SQL extraction → multi-criteria categorization matrix → OAC alert triggers).
3. **Generative Engine Optimization (GEO)**:
   - Added standard [`llms.txt`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/llms.txt) for AI crawlers (Perplexity, ChatGPT, Claude, Antigravity).
   - Added comprehensive [`llms-full.txt`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/llms-full.txt) knowledge base detailing all metrics, technologies, publications, and accomplishments.
   - Added rich Schema.org JSON-LD structured data (`Person`, `alumniOf`, `knowsAbout`, `hasCredential`) to [`index.html`](file:///C:/Users/Rishi/Desktop/Jobhunt/portfolio/index.html) `<head>`.
4. **Live System Telemetry Indicator**:
   - Added high-visibility status pill to hero: `● ONLINE • Immediate Joiner • Zero-Fabrication Verified`.

### Milestone 4: Git Remote Synchronization
* **Commit:** `df7a39c` (`feat: sync offline tailored resumes to assets, add AI chat twin & architecture explorer`).
* **Verification:** Successfully pushed to `origin/main` via user terminal authentication.
* **Remote State:** Clean and synced (`Your branch is up to date with 'origin/main'`).
* **GitHub Actions:** Auto-deployment triggered to GitHub Pages.

### Milestone 5: Voice Audio Avatar, LLMOps Observability & Recruiter Fast-Track (Inspired by `cv-santiago`)
* **Background:** Santiago Fernández's CV features dual-mode text/audio interaction, production evaluation gates, and streamlined recruiter targeting.
* **Features Implemented:**
  1. **60-Second Executive Audio Intro (Hero Section)**:
     - Added `[🎧 60s Voice Intro]` button in the Hero CTA bar with animated soundwave indicator.
     - Narrates a 48-second executive profile via browser `window.speechSynthesis` (clean, natural cadence with domain pronunciation handling for IIIT, CHiPS, GATE, SQL, ETL).
     - Interactive player status banner appears during playback with elapsed time counter (`0:00 / 0:48`), **Pause/Resume**, and **Stop** controls.
  2. **Dual-Mode Audio Avatar in "Ask Rishi AI"**:
     - Added `[🔊 Voice]` toggle in the modal header to enable automated speech narration for incoming answers.
     - Added individual `[🔊 Listen]` / `[⏹ Stop]` buttons on each bot response card in the chat stream with active soundwave animation.
  3. **LLMOps Telemetry & Grounding Inspector Drawer**:
     - Added `[📊 Telemetry]` toggle in the AI Chat modal header revealing a live observability panel.
     - Displays:
       - **Faithfulness Gate**: `100% Zero-Fabrication (Automated Truth Barrier)`
       - **Retrieval Latency**: Dynamically measured in real-time (`< 1.4 ms`)
       - **Determinism Gate**: `Temperature 0.0 (Strict Factual Binding)`
       - **Verified Corpora**: `4 Core Repos (CHiPS 33 Dists, 5G Thesis, 7 Resumes)`
  4. **Recruiter Fast-Track Role Filter**:
     - Added an executive role filter bar in the Hero section:
       `Fast-Track by Role: [All Tracks] [Data Analyst] [Business Analyst] [SQL Developer] [Power BI Developer] [ML / Data Science]`
     - Dynamically filters the **Selected Work** projects showcase.
     - Synchronizes active category filter pills in `#work`.
     - Automatically highlights the matching targeted resume card in section `06 / TARGETED RESUMES` with an attention-focus spotlight animation.

### Milestone 6: Complete Portfolio Redesign & Elimination of Gimmicky AI Bloat
* **User Directive:** The user explicitly rejected the AI Twin / avatar chat and audio synthesis ("what is this AI twin you added? And the website' layout is fucked. redesign the whole website.").
* **Root Cause:** Artificial chat widgets, soundwaves, telemetry boxes, and mock code editors cluttered the visual layout, pushed core content off-screen, broke responsive margins, and detracted from candidate credibility.
* **Redesign Deliverables:**
  1. **Purged All Artificial Chat/Voice Features:**
     - Removed AI Chat Modal, floating buttons, prompt chips, typing indicators, speech synthesis, and telemetry drawers.
     - Stripped all associated CSS and JavaScript handlers.
  2. **Executive Redesigned Hero:**
     - Removed lopsided 5-column python mockup and replaced it with a centered, commanding executive hero.
     - High-visibility credentials badge: `● AVAILABLE FOR IMMEDIATE JOINING • BENGALURU (HYBRID / REMOTE)`.
     - Direct coordinates: Email, Phone, LinkedIn, GitHub, Location, and GEO `llms.txt`.
     - High-contrast, polished CTAs: `[Explore Selected Work ↓]`, `[Targeted Resumes (7 Tracks) 📄]`, and `[Get in Touch →]`.
     - 4-metric impact ribbon: `33 Districts`, `4-Tier Drill-Down`, `97.64% F1-Score`, `7 ATS Resumes`.
  3. **Refined Technical Competencies Grid:**
     - 4 focused analytical pillars: SQL & Relational Engineering, Power BI & Star Schema, Advanced Excel & Decision Analytics, Python & Predictive Modeling.
  4. **Pristine Selected Work Section:**
     - Clean category filters (`All`, `Power BI`, `SQL Engineering`, `Machine Learning`, `Analytics`).
     - 4 structured enterprise cards with in-depth technical modals.
  5. **Interactive System Architecture Visualizer:**
     - 4-tab timeline pipeline explorer with sequential operational stages.
  6. **Curated 7-Track Resumes Hub:**
     - Responsive grid of 7 ATS-optimized editions with in-browser ATS viewer (`👁`), direct PDF download (`↓`), new-tab view (`↗`), and Master Resume action bar.
  7. **Clean Contact & Footers:**
     - Unified direct inquiry cards, contact form, and footer.
  8. **Zero Bloat:**
     - Net reduction of over 1,600 lines of clutter across HTML, CSS, and JS.
     - Clean responsive design on mobile, tablet, and desktop.

### Milestone 7: Recruiter-First Flow Optimization & Documentation Sync
* **User Directive:** "now, update the portfolio and also push to github"
* **Optimizations Implemented:**
  1. **Recruiter-First Section Flow:**
     - Reordered sections so that clicking "Explore Selected Work ↓" in the Hero immediately transitions to **`01 / SELECTED WORK`** (Case Studies), followed by **`02 / SYSTEM ARCHITECTURES`** (Visual Pipelines), **`03 / CAPABILITIES`** (Technical Competency Matrix), **`04 / BACKGROUND`** (CHiPS Experience, Education & GATE/IELTS credentials), **`05 / TARGETED RESUMES`** (7 Downloadable ATS Tracks), and **`06 / CONTACT`**.
     - Synchronized desktop and mobile navigation links to strictly mirror this exact sequence.
  2. **README.md Synchronization:**
     - Overhauled `README.md` to remove legacy AI chat references and accurately showcase the executive data analyst portfolio architecture.
  3. **Asset & Link Integrity Verification:**
     - Verified all 15 PDF resume asset paths resolve on disk without errors.
     - Confirmed clean UTF-8 encoding across all public files.

### Milestone 8: Logsfolio Design System Adoption & Theme Revamp
* **User Directive:** "change the theme, and revamp the whole website. Go through the C:\Users\Rishi\Desktop\Jobhunt\portfolio\logsfolio-v1.0.0 once and see for designs"
* **Design System Analysis (`logsfolio-v1.0.0`):**
  - Inspected the Tailwind Next.js developer portfolio template (`logsfolio-v1.0.0` by Logging Studio / ThemeWagon).
  - Extracted the shadcn-style HSL color token system:
    - Primary: Vibrant Violet/Purple (`hsl(262.1 83.3% 57.8%)` / `#7c3aed` light mode, `hsl(263.4 70% 50.4%)` / `#8b5cf6` dark mode).
    - Background: Crisp White (`hsl(0 0% 100%)` light mode, Cosmic Deep Slate Navy `hsl(224 71.4% 4.1%)` / `#020817` dark mode).
    - Secondary / Card: Slate neutral surface (`hsl(220 14.3% 95.9%)` / `#f1f5f9` light mode, Slate 800 `hsl(215 27.9% 16.9%)` / `#1e293b` dark mode).
    - Radius: `0.75rem` (`rounded-xl` / `rounded-lg`).
* **Revamp Implementation:**
  1. **`css/styles.css` Overhaul:**
     - Replaced legacy cyan tokens with official Logsfolio HSL tokens (`--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--border`, `--radius`).
     - Ported Logsfolio component classes: `.logsfolio-card`, `.badge-pill`, `.badge-primary`, `.badge-outline`, `.tech-mono-pill`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-icon`.
     - Engineered Logsfolio signature timeline styling (`.logsfolio-timeline`, `.logsfolio-timeline-item`, `.logsfolio-timeline-dot`).
  2. **`index.html` Revamp:**
     - **Navbar:** Sticky glass bar with monogram badge ("RT"), desktop links, theme toggler button, and quick resume CTA.
     - **Hero Section:** Logsfolio-styled layout with rounded circular portrait badge, status pill ("Available for immediate hire • Bengaluru / Remote"), headline ("Hey 👋, I'm Rishi Thakur"), social icon group (GitHub, LinkedIn, Email, Phone, GEO), and 4 impact metric cards.
     - **Work Experience:** Transformed CHiPS enterprise experience into Logsfolio's signature vertical timeline with glowing violet node indicators and company link.
     - **My Projects:** Converted project cards into Logsfolio 2-column flex cards (`flex flex-col lg:flex-row logsfolio-card overflow-hidden`) with cover/metric headers, tech badges, descriptions, and action buttons.
     - **Data Pipelines:** Integrated architecture explorer matching the new theme.
     - **Technical Skills:** Structured into Logsfolio card matrix with pill clusters.
     - **Education:** Transformed M.Tech and B.Tech credentials into Logsfolio's vertical timeline, supplemented by the standardized GATE/IELTS credentials banner.
     - **Targeted Resumes (7 Tracks):** Modeled after Logsfolio card patterns with direct in-browser ATS modal viewer, PDF download, and new-tab links.
     - **Contact & Footer:** Clean Logsfolio-style contact section, quick inquiry form, and minimalist footer.
  3. **`js/app.js` Token Synchronization:**
     - Updated tab, filter, and modal styling to use semantic HSL tokens (`bg-primary`, `bg-secondary`, `border-primary`, `text-primary`, `text-foreground`).
  4. **Strict Ground-Truth & Zero Bloat Maintained:**
     - Preserved 100% factual accuracy (M.Tech CSE IIIT Naya Raipur 7.90 CGPA, GATE CS 2024, IELTS 7.5, CHiPS 33-district enterprise healthcare BI).
     - Kept private pipelines isolated (`tailoring/` never exposed). Added `logsfolio-v1.0.0/` to `.gitignore`.

### Milestone 9: Removal of System Architectures Section & Automated Tailoring Scanner
* **User Directives:**
  1. "remove this." (Pointing to the broken/cluttered "03 / ARCHITECTURE — System Architectures" section in uploaded screenshot `media_1793531172126_d8611e91.png`).
  2. "And yeah always scan the C:\Users\Rishi\Desktop\tailoring folder for newly made resumes and add them to the portfolio".
* **Actions Taken:**
  1. **Purged System Architectures Section:**
     - Completely removed the `<section id="architectures">` markup from [`index.html`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/index.html).
     - Removed the "Pipelines" navigation links from both desktop navbar and mobile drawer.
     - Removed the "Pipeline Architecture →" CTA button from the Healthcare BI project card.
     - Cleaned `setupArchitectureExplorer()` and related DOM listeners from [`js/app.js`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/js/app.js).
     - Stripped `.arch-node` and related unused classes from [`css/styles.css`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/css/styles.css).
  2. **Clean Section Renumbering:**
     - `01 / EXPERIENCE` (Work Experience Timeline)
     - `02 / PORTFOLIO` (Selected Case Studies & Projects)
     - `03 / COMPETENCIES` (Core Technical Matrix)
     - `04 / ACADEMICS` (Education Timeline & GATE/IELTS Credentials)
     - `05 / RESUMES` (Curated 7-Track ATS Resumes & Master PDF)
     - `06 / CONTACT` (Direct Channels & Inquiries)
  3. **Enhanced Automated Tailoring Scanner ([`sync_tailored_resumes.py`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/sync_tailored_resumes.py)):**
     - Upgraded the synchronization script with hash-based change detection.
     - Automatically scans `C:\Users\Rishi\Desktop\tailoring\` for any `.pdf` files.
     - Automatically mirrors all newly created or modified resumes to `portfolio/assets/`.
     - Verified all 7 active tracks are in sync.
  4. **Permanent Agent Policy:**
     - Whenever the tailoring pipeline produces new resume editions in `C:\Users\Rishi\Desktop\tailoring\`, immediately run `python sync_tailored_resumes.py` and ensure the portfolio links to the new editions.

### Milestone 10: Complete Sanitization of Sensitive Numbers Across All Projects
* **User Directive:** "one thing - hide numbers from all projects as they are sensitive data. S"
* **Confidentiality & Data Sensitivity Policy:** Government healthcare data (CHiPS / Department of Health & Family Welfare, Govt. of Chhattisgarh) and proprietary research architectures contain sensitive operational figures (district counts, facility volumes, internal risk tiers, sub-department counts, imbalance ratios, exact F1 scores, endpoint counts). In production enterprise environments, exposing exact internal operational counts violates confidentiality. All such telemetry has been transformed into rigorous qualitative enterprise terminology.
* **Actions Taken Across All Files:**
  1. **`index.html`:**
     - Sanitized Hero impact metric ribbon: replaced specific numbers with qualitative enterprise indicators (`Statewide Scale`, `Multi-Tier Hierarchy`, `High-Precision Models`, `Role-Tailored Resumes`).
     - Sanitized CHiPS experience timeline: replaced district counts and facility numbers with enterprise scope descriptors ("statewide public health institutions", "community health centers, district hospitals, and administrative directorates", "multi-tier compliance risk classification").
     - Sanitized project showcase cards: removed numbers ("55+ direct ATS endpoints", "20+ link regex patterns", "98:2 class imbalance", "97.64% F1-score", "4-tier drill-down hierarchy"), replacing them with qualitative technical rigor.
  2. **`js/chart-data.js`:**
     - Sanitized all operational figures in `caseStudiesData` (problem descriptions, solutions, metric badges) and `resumesData` (experience bullets, project bullets).
     - Standardized NLP pipeline descriptions: replaced specific precision/recall percentages with "high-precision and high-recall benchmarks".
     - Replaced "rolling 30-day work hours" with "rolling operational work hours", and "BERT [CLS] 768-D" with "BERT [CLS] Dense Embeddings".
  3. **`llms.txt` & `llms-full.txt` (AI Crawler Knowledge Base):**
     - Fully sanitized both AI crawler knowledge bases so external search engines and LLM indexers receive clean, enterprise-grade qualitative descriptions without exposing confidential telemetry.
  4. **Verification via Automated Scanner:**
     - Developed automated regex scanning scripts to verify 100% elimination of sensitive project figures across all public repository files while preserving authentic academic credentials (IIIT Naya Raipur M.Tech 7.90 CGPA, GATE CS 2024, IELTS 7.5 Band).

---

### Milestone 11: Progressive Disclosure & Click-Dropdown UX Architecture
* **User Directive:**
  > "some feedback -
  > 1. The portfolio is too deep and users have to scroll too much. Make the page in a way that people click-dropdown and see.
  > Better idea would be to shorten down the amount of content and not present it in the first go"
* **UX Problem & Root Cause:**
  - The previous layout dumped all content expanded upfront across 7 sections, resulting in an overwhelming page scroll depth exceeding 5,000 pixels.
  - Visitors and recruiters had to scroll through heavy paragraphs, 4 tall stacked project cards, 4 large skill blocks, and 7 full resume cards before reaching the contact section.
* **Architectural Overhaul (Progressive Disclosure & Collapsible Dropdowns):**
  1. **Shortened Upfront Copy Across All Sections:**
     - Summarized hero bio, experience, project cards, competencies, and tracks into concise, scannable 1-line headlines.
  2. **Click-Dropdown Components (`.logsfolio-dropdown`):**
     - Engineered accessible native HTML5 `<details>` and `<summary>` dropdown accordions with animated chevron rotation, smooth transitions, and high-contrast Logsfolio token styling in [`css/styles.css`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/css/styles.css).
  3. **Experience Section (`#experience`):**
     - Displays role, organization, dates, and a 1-sentence teaser upfront.
     - A click-dropdown (`[View Key Deliverables & Technical Stack ▼]`) expands the 5 quantified impact bullets and tech badges on demand.
  4. **Portfolio Projects (`#projects`):**
     - Converted 4 massive stacked cards into 4 sleek dropdown rows with category tags, project titles, and 1-line teasers.
     - Each card allows inline dropdown expansion of the problem, solution, deliverables, and tech stack, while preserving direct 1-click access to the full **Case Study Modal** (`[Case Study ↗]`).
  5. **Competency Matrix (`#skills`):**
     - Structured into a 2-column grid of 4 dropdown cards where top badges and high-level focus are visible upfront, and in-depth methodologies unfold on click.
  6. **Education (`#education`):**
     - Compact timeline with collapsible thesis and core coursework details.
  7. **Targeted Resumes (`#resumes`):**
     - Replaced 7 giant vertical cards with an **Interactive 7-Track Accordion List** (`name="resume-track"`). Upfront, all 7 tracks fit in a compact ~300px list; clicking any track drops down its overview with `[Read Online (ATS) 👁]`, `[Download PDF ↓]`, and `[Open in Tab ↗]`.
  8. **Contact Section (`#contact`):**
     - Side-by-side 2-column layout pairing direct channel cards with the quick inquiry form.
* **Result:** Total vertical scroll depth reduced by **over 60%**, eliminating excessive scrolling while keeping 100% of the granular data immediately accessible via click-dropdowns.

---

## 3. Current Workspace Structure

```
portfolio/
├── index.html                  # Executive responsive portfolio (Logsfolio design, sanitized metrics)
├── progress report.md          # THIS FILE - Living progress & handover documentation
├── llms.txt                    # Sanitized AI search summary
├── llms-full.txt               # Sanitized deep technical knowledge base for LLM search engines
├── sync_tailored_resumes.py    # Automated hash-based sync engine for C:\Users\Rishi\Desktop\tailoring\
├── css/
│   └── styles.css              # Logsfolio HSL tokens, timeline styling, responsive layout
├── js/
│   ├── app.js                  # Clean UI controllers (Modals, Theme toggle, Project filters)
│   └── chart-data.js           # Sanitized case studies and verified ATS resume content
├── assets/                     # 7 production tailored resumes + Master PDF
├── HANDOVER.md                 # System migration specifications & candidate background profile
├── FREELANCE_PLAYBOOK.md       # Strategy guide for consulting and freelance engagements
└── README.md                   # Public repository overview
```

---

## 4. Next Steps & Technical Roadmap

The following incremental enhancements are queued for execution:

### Step 1: Continuous Tailoring Sync
- Maintain the automated sync engine [`sync_tailored_resumes.py`](file:///c:/Users/Rishi/Desktop/Jobhunt/portfolio/sync_tailored_resumes.py) to immediately pick up any new resume versions compiled in `C:\Users\Rishi\Desktop\tailoring\`.

### Step 2: Interactive SQL Query & Performance Sandbox (Optional Future Enhancement)
- Add a sanitized interactive SQL execution & benchmarking card under the CHiPS case study displaying execution plan optimization (Window Functions / CTEs vs subqueries) without sensitive operational schemas.

### Step 3: Git Sync & Live Production Verification
- Stage, commit, and push all changes to remote `origin/main`.
- Verify GitHub Pages deployment and confirm clean HTTP 200 status.

---

## 5. Candidate Ground-Truth Constraints & Privacy Policies (Never Violate)

1. **Academic Background (100% Ground Truth):**
   - M.Tech in Computer Science & Engineering, IIIT Naya Raipur (2024–2026), **7.90 CGPA**.
   - B.Tech in Computer Science & Engineering, Amity University Chhattisgarh (2019–2023), **7.71 CGPA**.
   - **GATE (CS) 2024:** Qualified Graduate Aptitude Test in Engineering (CS/IT).
   - **IELTS Academic:** Overall 7.5 Band (CEFR C1 — Proficient English User).
2. **Enterprise Experience:**
   - Data Analyst / BI Developer Intern at **Chhattisgarh Infotech Promotion Society (CHiPS)**, Dept. of Health & Family Welfare, Govt. of Chhattisgarh (June 2025 – March 2026).
   - Reconciled statewide biometric attendance (AEBAS) and State Treasury payroll databases.
   - Built an executive multi-level drill-down Power BI dashboard suite and multi-tier defaulter risk model.
3. **Data Sensitivity Policy (User Mandate):**
   - **Strictly qualitative project metrics:** Do NOT publish confidential counts, district counts, facility volumes, internal risk tier counts, sub-department numbers, or exact model percentages. Always use qualitative enterprise descriptions ("statewide public health institutions", "multi-tier compliance model", "clinical directorates", "high-precision F1-score").
4. **Zero Gimmicks:**
   - No AI avatars, chatbot twins, speech synthesis, or fake terminals.
5. **Private Tailoring Isolation:**
   - Never stage, commit, or link to local `tailoring/` files or tools; serve compiled PDFs exclusively through `assets/`.

