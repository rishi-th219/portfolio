# Rishi Thakur — Analytics Engineer & Data Storyteller Portfolio

Executive Analytics Cockpit portfolio featuring a **CHiPS Split-Screen Interactive Workbench**, an **In-Browser SQL Sandbox**, **Engineering Case Studies**, and **Curated ATS-Optimized Tailored Resumes**.

Hosted live on GitHub Pages: **[https://rishi-th219.github.io/portfolio/](https://rishi-th219.github.io/portfolio/)**

---

## Quick Start (Local Preview)

Run a local web server in this directory:

```bash
python -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Highlights

1. **Analytics Cockpit Mode Switcher (`#overview`, `#workbench`, `#sandbox`, `#projects`, `#resume`, `#contact`)**:
   - Multi-view workspace with URL hash routing and seamless dark/light theme persistence.
   - Mission Control telemetry strip featuring verified academic rigor (**M.Tech CSE, IIIT Naya Raipur 7.90 CGPA**, **GATE CS 2024**, **IELTS 7.5 C1**) and active upskilling toward **AWS Cloud Practitioner** & **AWS Data Engineer Associate (DEA-C01)**.

2. **CHiPS Split-Screen Interactive Workbench (`#workbench`)**:
   - Reconciled statewide biometric attendance (AEBAS) against State Treasury payroll databases across public healthcare institutions, implementing a centralized **Kimball Star Schema** (`Fact_Attendance_Daily`), deterministic SQL CTE resolution, and a **3-tier attendance compliance risk model**.
   - Interactive chapter steppers dynamically drive the live Architecture Canvas, copyable SQL CTEs, Star Schema diagram, and DAX Risk Monitor.

3. **In-Browser Client-Side SQL Sandbox (`#sandbox`)**:
   - Executable SQL console supporting `SELECT`, column projection, `WHERE ... LIKE / =`, `ORDER BY`, `LIMIT`, `COUNT(*)`, `SHOW TABLES`, and 1-click CSV export over verified capability, architecture, credential, and project datasets.

4. **Engineering Project Laboratory (`#projects`) & Curated ATS Resumes (`#resume`)**:
   - **Proactive 5G mmWave Handover Prediction** ([repo](https://github.com/rishi-th219/Proactive-Handover-Prediction-in-5G-using-Diffusion-Models)): M.Tech thesis pairing GRU temporal encoders with DDPM/DDIM diffusion models in PyTorch.
   - **Local ELT Data Warehouse** ([repo](https://github.com/rishi-th219/ecommerce-elt-local)): Containerized dual-warehouse ELT pipeline with Apache Airflow, dbt-core Kimball SCD2 modeling, PostgreSQL 16, MSSQL 2025, and Metabase.
   - **Hospital Medicine Inventory Optimization**: Multi-criteria ABC/VED/SDE matrix in OracleDB and Advanced Excel eliminating critical drug stockouts.
   - **AutoJobHunt Recruitment Pipeline** ([repo](https://github.com/rishi-th219/autojobhunt)): Async ATS API discovery, liveness auditing, and pure-Python OpenXML tracking.
   - Interactive ATS resume preview modal and sanitized PDF downloads served from `assets/`.

5. **Midnight Analytics Slate Design System**:
   - Dark-first Midnight Analytics Slate palette (`#080c14` base, `#0e1422` cards, `#3b82f6` primary blue, `#0ea5e9` cyan accent) paired with Editorial Light mode, `Geist` + `Geist Mono` typography, and Phosphor icons.

---

## Tech Stack

- **Markup & Styling**: HTML5, Tailwind CSS Play CDN, `css/styles.css` (`@layer components` + HSL design tokens), Google Fonts (`Geist` + `Geist Mono`)
- **Interactivity**: Modular vanilla JS (`js/app.js`, `js/chart-data.js`) — zero build step, instant delivery via GitHub Pages

---

## File Structure

```text
portfolio/
├── index.html                  # Analytics Cockpit application
├── 404.html                    # Branded fallback route
├── css/
│   └── styles.css              # Design tokens, cockpit layout, print stylesheet
├── js/
│   ├── app.js                  # Cockpit router, SQL parser, workbench, modals
│   └── chart-data.js           # Verified case studies, architectures, ATS resumes
├── assets/                     # Public sanitized PDFs and OpenGraph social card
├── llms.txt                    # Concise LLM/GEO summary
├── llms-full.txt               # Detailed technical knowledge base
└── README.md                   # Repository overview
```
