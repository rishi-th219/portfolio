# Rishi Thakur — Data Analyst, BI & Analytics Engineer Portfolio

Editorial portfolio featuring **Selected Work Case Studies**, a **Sticky Process Stack**, an **In-Browser SQL Sandbox Modal**, and **Curated ATS-Optimized Tailored Resumes**.

Hosted live on GitHub Pages: **[https://rishi-th219.github.io/portfolio/](https://rishi-th219.github.io/portfolio/)**

---

## Quick Start (Local Preview)

```bash
python -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Highlights

1. **Editorial Swiss Grid Design System (`#ffffff` / `#111111` / `#006b58` / `#171717`)**:
   - Clean `Inter` + `DM Serif Display` italic typography with frosted scroll header, custom fine-pointer dot cursor, bottom viewport blur fade, continuous capability & footer marquees, and a `#171717` full-screen mobile navigation drawer.
   - Sticky stacking process cards (`#process`) transitioning into an `#ededed` full-viewport finale reveal (`#contact`) above the dark `#171717` footer.

2. **Selected Work & Architectural Case Studies (`#work`)**:
   - **CHiPS Statewide Healthcare Attendance & Payroll Intelligence**: Reconciled biometric AEBAS attendance against State Treasury payroll databases via Kimball Star Schema modeling, SQL CTEs, and executive Power BI drill-down cockpits.
   - **Local ELT Data Warehouse (`ecommerce-elt-local`)**: Dual-warehouse pipeline (PostgreSQL 16 & MSSQL 2025) with Apache Airflow, dbt-core Kimball SCD2 modeling, and Metabase.
   - **Proactive 5G mmWave Handover Prediction**: M.Tech thesis pairing GRU temporal encoders with DDPM/DDIM diffusion models in PyTorch.
   - **Hospital Medicine Inventory Matrix**: Multi-criteria ABC/VED/SDE classification in OracleDB and Excel sensitivity modeling.
   - **AutoJobHunt (`autojobhunt`)** & **Dual-Engine AI Text Detection (`AI-Text-Detection`)**.

3. **Interactive Modals & Verified Credentials (`#services`, `#credentials`)**:
   - **In-Browser SQL Sandbox Modal**: Supports `SELECT`, column projection, `WHERE ... LIKE / =`, `ORDER BY`, `LIMIT`, `COUNT(*)`, `SHOW TABLES`, and CSV export.
   - **ATS Resumes Studio Modal**: Interactive resume preview across 7 specialized tracks plus direct sanitized PDF downloads from `assets/`.

---

## Tech Stack

- **Markup & Styling**: HTML5, Tailwind CSS Play CDN, `css/styles.css` (custom editorial tokens), Google Fonts (`Inter`, `DM Serif Display`, `JetBrains Mono`)
- **Interactivity**: Modular vanilla JS (`js/app.js`, `js/chart-data.js`) — zero build step, instant delivery via GitHub Pages

---

## File Structure

```text
portfolio/
├── index.html                  # Editorial portfolio application
├── 404.html                    # Branded fallback route
├── css/
│   └── styles.css              # Editorial tokens, sticky process cards, marquee, print styles
├── js/
│   ├── app.js                  # Scroll nav, custom cursor, SQL modal, case study & resume modals
│   └── chart-data.js           # Verified case studies, architectures, ATS resumes
├── assets/                     # Public sanitized PDFs and OpenGraph social card
├── llms.txt                    # Concise LLM/GEO summary
├── llms-full.txt               # Detailed technical knowledge base
└── README.md                   # Repository overview
```
