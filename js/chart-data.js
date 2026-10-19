// Verified Technical Case Studies & Data Architectures for Rishi Thakur
// Grounded directly in official enterprise experience and academic research

const caseStudiesData = {
  healthbi: {
    badge: "SQL ENGINEERING & BUSINESS INTELLIGENCE",
    title: "Statewide Healthcare Attendance & Performance Analytics",
    subtitle: "Architected an executive 6-page Power BI dashboard suite across 33 districts and 1,000+ facilities with automated SQL/ETL biometric-to-payroll identity resolution and Advanced Excel operational auditing.",
    clientType: "CHiPS • Dept. of Health & Family Welfare, Govt. of Chhattisgarh",
    timeline: "06/2025 – 03/2026",
    pipeline: "AEBAS Biometrics → Automated SQL Identity Resolution → State Treasury Payroll → Kimball Star Schema → Advanced Excel Auditing → Power BI DAX → Executive Policy Decision",
    metrics: [
      { label: "Districts Monitored", value: "33 Districts" },
      { label: "Drill-Down Depth", value: "4-Tier Hierarchy" },
      { label: "Risk Tiers", value: "3-Tier Compliance Model" },
      { label: "Dashboard Scope", value: "6 Executive Pages" }
    ],
    problem: "Statewide healthcare facilities (1,000+ health centers, hospitals, and administrative offices across 33 districts) faced severe attendance tracking gaps and doctor service bond non-compliance. Biometric attendance (AEBAS) records were disconnected from State Treasury payroll files and NIC e-Hospital OPD systems, making it impossible for the Department Secretary to verify actual field presence, assess clinical coverage, or detect financial leakage.",
    solution: "1. Automated SQL Identity Resolution: Engineered complex SQL pipelines (multi-way joins, CTEs, string normalization, and window functions) bridging AEBAS biometric IDs with State Treasury payroll records, resolving discrepancies for bonded doctors.\n2. Cross-Department Schema Reconciliation: Integrated multi-source data across MariaDB, State Treasury, and National NextGen e-Hospital OPD systems, collaborating with NIC engineers to reconcile heterogeneous schemas into a unified reporting layer.\n3. Advanced Excel Operational Auditing: Developed multi-tab analytical Excel workbooks powered by Power Query (M), dynamic arrays (XLOOKUP, INDEX/MATCH), and Power Pivot data models to cross-validate district-level biometric logs with Treasury payroll files, enabling rapid ad-hoc scenario modeling and executive exception tracking.\n4. Star Schema Modeling & DAX: Designed a performant Kimball Star Schema in MariaDB connecting to Power BI, with custom DAX measures for attendance rates, rolling 30-day work hours, and missed login rates across a 4-tier hierarchy (District → Facility → Designation → Employee).\n5. 3-Tier Defaulter Risk Model: Uncovered systemic compliance gaps by categorizing personnel into Non-Joiners, Formal-Only Registrants, and Attendance Defaulters, providing immediate visibility into salary disbursement vs. physical attendance.",
    stack: ["Advanced SQL", "MariaDB", "OracleDB", "Advanced Excel", "Power Query (M)", "Power Pivot", "Power BI", "DAX", "Kimball Star Schema", "Data Validation"],
    githubUrl: "",
    deliverables: [
      "Executive 6-page interactive Power BI dashboard suite with 4-tier drill-down hierarchy",
      "Automated SQL/ETL identity resolution pipeline reconciling biometric IDs with payroll records",
      "Multi-tab Advanced Excel auditing workbooks (Power Query, Dynamic Arrays, Power Pivot) cross-validating payroll vs attendance",
      "Performant Kimball Star Schema data model with custom DAX time-intelligence measures",
      "3-tier defaulter risk model and weekly executive exception summaries for the Department Secretary",
      "Cross-department schema reconciliation specs with NIC engineers for NextGen e-Hospital OPD data",
      "Comprehensive UAT validation protocols and operational data integrity controls"
    ]
  },

  supply_chain: {
    badge: "SQL INVENTORY & SCENARIO ANALYTICS",
    title: "Essential Drug Inventory & Supply Chain Analytics",
    subtitle: "Executed multi-dimensional ABC, VED, and SDE inventory matrix modeling in OracleDB, Advanced Excel, and Oracle Analytics Cloud to prevent critical hospital stockouts across 5 sub-departments.",
    clientType: "CHiPS • Dept. of Health & Family Welfare, Govt. of Chhattisgarh",
    timeline: "06/2025 – 03/2026",
    pipeline: "Essential Drug Catalogs → Oracle SQL Aggregations → ABC / VED / SDE Matrix → Advanced Excel Scenario Models → Oracle Analytics Cloud (OAC) → Procurement Allocation",
    metrics: [
      { label: "Departments", value: "5 Sub-Departments" },
      { label: "Framework", value: "ABC / VED / SDE Matrix" },
      { label: "Database Engine", value: "OracleDB" },
      { label: "BI Platform", value: "Oracle Analytics Cloud" }
    ],
    problem: "Procurement teams across 5 healthcare sub-departments struggled to balance pharmaceutical expenditure with life-saving medication availability. Without structured inventory categorization, high-cost non-critical drugs consumed disproportionate budget while essential life-saving drugs experienced localized hospital stockouts.",
    solution: "1. SQL Data Aggregation: Wrote advanced Oracle SQL queries aggregating multi-year batch consumption, lead times, safety stocks, and reorder triggers across regional medical warehouses.\n2. Multi-Dimensional Categorization: Implemented composite ABC (annual consumption value), VED (Vital, Essential, Desirable criticality), and SDE (Scarce, Difficult, Easy procurement availability) categorization frameworks on statewide drug catalogs.\n3. Advanced Excel Scenario Modeling: Constructed dynamic Excel financial and operational workbooks featuring sensitivity tables, Pivot Tables, and automated reorder threshold models to evaluate lead-time variability and procurement buffer stocks.\n4. Oracle Analytics Cloud (OAC) Dashboards: Built interactive executive scorecards visualizing stock levels, consumption velocity, and procurement lead times with automated color-coded risk alerts.\n5. Decision Support: Delivered actionable procurement recommendations enabling leadership to optimize buffer stock allocations and negotiate consolidated vendor orders.",
    stack: ["OracleDB", "Advanced SQL", "Advanced Excel (Scenario Modeling)", "Power Query", "Oracle Analytics Cloud (OAC)", "ABC/VED/SDE Analysis", "Data Modeling"],
    githubUrl: "",
    deliverables: [
      "Composite ABC/VED/SDE inventory classification matrix for statewide drug catalogs",
      "Dynamic Excel scenario modeling workbooks with sensitivity tables and automated stockout alerts",
      "Optimized SQL aggregation scripts for warehouse lead times and consumption velocity",
      "Interactive Oracle Analytics Cloud (OAC) dashboard suite with automated procurement alerts",
      "Executive procurement advisory report presented to health department administrators"
    ]
  },

  telco5g: {
    badge: "PREDICTIVE ML & RESEARCH",
    title: "Proactive 5G mmWave Handover Prediction via Diffusion Models",
    subtitle: "M.Tech Thesis at IIIT Naya Raipur: Built a GRU-conditioned Denoising Diffusion Probabilistic Model (DDPM/DDIM) achieving a 97.64% F1-score on connection failure prediction.",
    clientType: "IIIT Naya Raipur • M.Tech CSE Thesis",
    timeline: "08/2024 – Present (Ongoing Thesis)",
    pipeline: "Radio Telemetry → GRU Temporal Encoder → DDPM / DDIM Trajectory Generation → SMOTE+Tomek Balancing → Random Forest Policy → Proactive Handover",
    metrics: [
      { label: "F1-Score", value: "97.64%" },
      { label: "Class Imbalance", value: "98:2 Ratio" },
      { label: "Trajectories", value: "50 Paths" },
      { label: "Framework", value: "PyTorch + DDPM" }
    ],
    problem: "In 5G millimeter-wave (mmWave) networks, line-of-sight signal paths are vulnerable to sudden physical blockages (buildings, foliage, human mobility) causing rapid signal degradation within milliseconds. Standard network protocols rely on reactive countdown timers (Time-To-Trigger / TTT), resulting in frequent Radio Link Failures (RLF) and severe throughput drops.",
    solution: "1. Spatiotemporal Feature Modeling: Processed high-dimensional radio telemetry sequences using a Gated Recurrent Unit (GRU) encoder to extract temporal fading patterns.\n2. Generative Trajectory Diffusion: Conditioned a Denoising Diffusion Probabilistic Model (DDPM with accelerated DDIM sampling) on historical signals to generate 50 plausible future signal degradation trajectories.\n3. Extreme Class Imbalance Remediation: Handled the severe 98:2 normal-to-failure telemetry ratio using an integrated SMOTE + Tomek Links sampling strategy.\n4. Predictive Policy Classifier: Designed an explainable Random Forest ensemble that evaluates forecasted diffusion trajectories to initiate proactive handovers prior to connection collapse, reaching 97.64% F1-score.",
    stack: ["Python", "PyTorch", "Diffusion Models (DDPM/DDIM)", "GRU", "Random Forest", "SMOTE + Tomek", "Scikit-Learn", "NumPy", "Pandas"],
    githubUrl: "https://github.com/rishi-th219/Proactive-Handover-Prediction-in-5G-using-Diffusion-Models",
    deliverables: [
      "Complete PyTorch simulation and diffusion training framework",
      "Custom dual-masking loss implementation (cell & time-point spatial masking)",
      "Formal academic thesis documentation and comparative benchmark reports",
      "Ablation studies proving superiority over traditional reactive LSTM and ARIMA baselines"
    ]
  },

  textnlp: {
    badge: "NLP & APPLIED MACHINE LEARNING",
    title: "Dual-Engine AI vs. Human Text Classification Pipeline",
    subtitle: "Benchmarked dense BERT + XGBoost embeddings against a hybrid Bi-LSTM/CNN/Transformer architecture on massive text corpora, achieving 99% Precision and 98% Recall.",
    clientType: "Applied Machine Learning & NLP",
    timeline: "Applied NLP Project",
    pipeline: "Raw Text Corpus → Tokenization & Cleansing → BERT [CLS] 768-D Embeddings ∥ Bi-LSTM + Transformer + CNN → XGBoost Classifier → High-Precision Detection",
    metrics: [
      { label: "Precision", value: "99.0%" },
      { label: "Recall", value: "98.0%" },
      { label: "F1-Score", value: "98.5%" },
      { label: "Embedding Dim", value: "768-D (BERT)" }
    ],
    problem: "The rapid adoption of generative Large Language Models has made detecting synthetic text crucial for academic integrity and content authenticity. Existing commercial detectors suffer from unacceptable False Positive rates—falsely penalizing human writers while failing to capture nuanced structural patterns.",
    solution: "1. Pre-trained Contextual Baseline: Extracted 768-dimensional contextual sentence embeddings from pre-trained BERT [CLS] representations, paired with an optimized XGBoost gradient-boosted classifier for low-latency inference.\n2. Deep Learning Hybrid Engine: Designed a multi-stage neural architecture incorporating custom word embeddings, Bidirectional LSTM (sequential syntactic flow), Multi-Head Self-Attention Transformer blocks (global semantic coherence), and 1D-Convolutional layers (local n-gram anomaly detection).\n3. Regularization & Optimization: Applied spatial dropout (0.5), early stopping, and ReduceLROnPlateau learning rate decay to eliminate overfitting and ensure cross-domain generalization.",
    stack: ["Python", "TensorFlow / Keras", "BERT", "XGBoost", "Bi-LSTM", "Transformers", "1D-CNN", "Scikit-Learn"],
    githubUrl: "",
    deliverables: [
      "Modular text preprocessing, tokenization, and vectorization pipelines",
      "End-to-end training and inference scripts with stratified cross-validation",
      "Comparative performance report including ROC-AUC curves and confusion matrices"
    ]
  },

  career_ops_bot: {
    badge: "AUTOMATION PIPELINES & ATS ENGINEERING",
    title: "Career-Ops: Autonomous Job Acquisition & ATS Auto-Apply Pipeline",
    subtitle: "Zero-manual-intervention Python pipeline: multi-channel ATS/API discovery, automated link liveness auditing, dependency-free OpenXML spreadsheet generation, and headless Playwright auto-submission with role-matched resume selection.",
    clientType: "Personal Engineering Project • Open Source (career-ops-bot)",
    timeline: "2026",
    pipeline: "Direct ATS & Remote APIs ∥ Crawl4AI Web Scrapers → Multi-Tier Liveness & Expiry Cleaner → Dependency-Free OpenXML ETL → Role-Matched Resume Selector → Headless Playwright Auto-Apply → Screenshot Audit Trail",
    metrics: [
      { label: "Active ATS Discovery", value: "55+ Sources" },
      { label: "Discovery Channels", value: "5 Ingestion Engines" },
      { label: "Spreadsheet Engine", value: "Pure Python Stdlib (Zero-Dep OpenXML)" },
      { label: "Resume Routing", value: "4-Track Dynamic Matching" }
    ],
    problem: "Navigating tech job searches manually is plagued by high friction: commercial job boards are flooded with stale or closed postings that waste hours, applicant tracking systems (Greenhouse, Lever, Ashby, SmartRecruiters) require redundant data re-entry across complex Single-Page Apps (SPAs) with custom non-standard dropdowns, and traditional job scrapers fail to dynamically match specialized resumes (SQL Developer, Power BI, Business Analyst, Data Analyst) to specific role requirements.",
    solution: "1. Multi-Channel Ingestion Engine: Built a unified discovery suite combining direct, zero-token REST API scanners for Greenhouse, Lever, Ashby, SmartRecruiters, Jobicy, and Remotive, paired with Crawl4AI headless stealth crawlers for complex SPAs (Naukri, Instahyre) and startup scrapers for Hacker News and Y Combinator directories.\n2. Multi-Tier Link Liveness & Expiry Cleaner: Engineered an automated verification daemon that checks direct ATS board APIs first, then falls back to fast HTTP header checks and regex body inspection across 20+ expiration patterns (e.g., 'job is no longer available', 'applications closed', 'position filled'). Automatically archives dead postings to ensure 100% active pipeline fidelity.\n3. Dependency-Free OpenXML Spreadsheet Engine: Developed a pure Python standard library spreadsheet compiler using zipfile and raw OpenXML generation (opportunities_manager.py) that builds, styles, and indexes opportunities.xlsx and opportunities.csv with custom typography, column widths, and hyperlinks without third-party dependencies.\n4. Dynamic Role-Matched Resume Selector: Engineered a keyword pattern-matching router that analyzes incoming job titles and automatically attaches the corresponding ATS-optimized PDF resume (SQL Developer, Power BI Developer, Business Analyst, or Data Analyst) directly from the tailoring archive.\n5. Headless Playwright Auto-Apply Bot: Automated application submission via Playwright with stealth anti-bot evasion arguments, automatically populating core fields, resolving custom React-select comboboxes, answering screening questions, uploading resumes, and archiving visual proof screenshots in output/confirmations/.\n6. Intelligent Form Autofill & Tailoring Assistant: Created a 1-click headed browser assistant that scrapes live JD text directly from the active posting DOM, dynamically drafts tailored answers to open-ended screening questions grounded in candidate narrative facts, and leaves the browser open for human-in-the-loop review.\n7. Daemon Scheduling & Tracking: Automated the entire discovery-clean-apply cycle with Linux cron scheduling (install_cron.sh), logging every run to status-log.tsv and updating applications.md for end-to-end recruitment pipeline analytics.",
    stack: ["Python", "Playwright", "Crawl4AI", "OpenXML (Pure Python)", "REST APIs", "Regex Engine", "BeautifulSoup", "Bash / Cron", "Git"],
    githubUrl: "https://github.com/rishi-th219/career-ops-bot",
    deliverables: [
      "Master pipeline orchestrator (job_pipeline.py) supporting individual tools or 100% autonomous execution",
      "Direct ATS API and remote tech ingestion modules scanning 55+ active employer endpoints",
      "Concurrent link liveness auditor (clean_expired_jobs.py) with automated dead-link archiving",
      "Pure-Python OpenXML spreadsheet engine (opportunities_manager.py) generating styled .xlsx workbooks",
      "Headless Playwright auto-apply runner (auto_apply_bot.py) with anti-bot evasion and visual screenshot audit trails",
      "Intelligent browser autofill assistant (autofill_assistant.py) with dynamic JD text extraction and response drafting",
      "Linux cron daemon automation (install_cron.sh) and Markdown/TSV application tracking ledger"
    ]
  }
};

// Verified Full-Text Tailored Resume Suite Data
const resumesData = {
  "data_analyst": {
    "track": "TRACK 01",
    "badge": "PRIMARY FOCUS",
    "role": "Data Analyst",
    "title": "Data Analyst | Business Intelligence & Analytics Engineering",
    "summary": "Results-oriented Data Analyst experienced in developing automated data pipelines, dimensional data models, Advanced Excel analytical workbooks, and enterprise Power BI dashboards from end to end. Proven background resolving multi-source data discrepancies across state-scale public healthcare databases, authoring SQL/ETL identity-resolution workflows, and translating complex operational KPIs into high-impact analytical tools that drive executive decision-making. Backed by M.Tech (CSE), GATE (CS) qualification, and advanced proficiency in SQL, Power BI, Advanced Excel (Power Query, Pivot Tables, Scenario Modeling), and Python.",
    "skills": [
      "<strong>Advanced Excel & BI: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Complex Nested Formulas, Pivot Tables, Power Pivot, Data Modeling, Power Query / M ETL, What-If Scenario Analysis, VBA / Macros, Executive KPI Dashboards, Conditional Formatting), Microsoft Power BI, DAX (Measures, Time Intelligence), Oracle Analytics Cloud (OAC), KPI Scorecards",
      "<strong>Databases & Querying: </strong>Advanced SQL (T-SQL, MySQL, MariaDB, OracleDB) \u2014 Complex Multi-Table Joins, CTEs, Window Functions (ROW_NUMBER, RANK, LEAD/LAG), Subqueries, Aggregations, Relational Database Design, Query Execution Plan Tuning",
      "<strong>Data Modeling & ETL: </strong>Dimensional Modeling (Kimball Star Schema), Multi-Source ETL Pipelines, Identity Resolution Algorithms, Heterogeneous Schema Reconciliation, Data Validation & Cleansing, Data Integrity Controls",
      "<strong>Analytics & Programming: </strong>Python (Pandas, NumPy, Scikit-learn), Inventory Analysis (ABC/VED/SDE), Metric & Dimension Definition, Root Cause Analysis, Trend & Variance Analysis, UAT Protocols, Technical Documentation"
    ],
    "exp_role": "Data Analyst & BI Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Statewide BI Dashboard Architecture: </strong>Architected an executive 6-page statewide Power BI attendance dashboard across 33 districts, structuring 4-tier top-down drill-downs (District \u2192 Facility \u2192 Designation \u2192 Employee) with custom DAX measures tracking avg. work hours, attendance %, and missed logins.",
      "<strong>Advanced Excel Auditing & Operational Analysis: </strong>Developed multi-tab analytical Excel workbooks powered by Power Query, dynamic arrays (XLOOKUP, INDEX/MATCH), and Power Pivot data models to cross-validate district-level biometric logs with Treasury payroll files, enabling rapid ad-hoc scenario modeling and executive exception tracking.",
      "<strong>Automated SQL/ETL Identity Resolution: </strong>Engineered an automated SQL/ETL pipeline mapping AEBAS biometric attendance IDs to State Treasury payroll records, closing a critical cross-departmental tracking gap and categorizing bonded doctors into 3 actionable compliance tiers.",
      "<strong>Cross-Department Schema Reconciliation: </strong>Integrated multi-source data across MariaDB, State Treasury, and National NextGen e-Hospital OPD systems, collaborating with NIC engineers to reconcile heterogeneous modular schemas into a unified reporting layer.",
      "<strong>Supply Chain & Inventory Analytics: </strong>Conducted ABC, VED, and SDE inventory categorization analysis on essential drug catalogs in OracleDB, deploying interactive dashboards to Oracle Analytics Cloud (OAC) to guide statewide procurement decisions across 5 sub-departments."
    ],
    "projects": [
      {
        "name": "Proactive 5G Handover Prediction (Diffusion Models)",
        "tools": "Python, PyTorch, GRU, DDPM, Scikit-learn",
        "tag": "M.Tech Thesis \u2014 Predictive Analytics",
        "bullets": [
          "Developed a GRU-conditioned diffusion model (DDPM/DDIM) to forecast radio signal degradation from multivariate spatiotemporal telemetry; addressed 98:2 class imbalance via <strong>SMOTE + Tomek Links</strong> and attained a <strong>97.64% F1-score</strong> on failure classification."
        ]
      },
      {
        "name": "AI vs. Human Text Classification Pipeline",
        "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers",
        "tag": "Applied Machine Learning & NLP",
        "bullets": [
          "Designed and benchmarked dual NLP pipelines (BERT + XGBoost and hybrid Bi-LSTM/CNN/Transformer architecture) on large corpora, optimizing decision boundaries to achieve <strong>99% Precision</strong> and <strong>98% Recall</strong>."
        ]
      }
    ],
    "certs": [
      "<strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>",
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Machine Learning (NPTEL)</strong>"
    ],
    "pdf": "tailoring/Rishi_Thakur_Data_Analyst_Resume.pdf",
    "docx": "tailoring/Rishi_Thakur_Data_Analyst_Resume.docx",
    "md": "tailoring/Rishi_Thakur_Data_Analyst_Resume.md"
  },
  "business_analyst": {
    "track": "TRACK 02",
    "badge": "STRATEGIC & OPS",
    "role": "Business Analyst",
    "title": "Business Analyst | SQL Developer & Analytics Engineering",
    "summary": "Business Analyst and SQL Developer with expertise in business problem decomposition, advanced relational database querying, Advanced Excel scenario modeling, and executive leadership alignment. Proven track record partnering directly with the Department Secretary to deconstruct complex statewide operational bottlenecks into 3 structured, data-driven initiatives across 33 districts. Experienced in authoring advanced SQL workflows (CTEs, window functions, schema reconciliation), building dynamic financial/operational models in Excel, and deploying interactive Power BI dashboards that drive data-backed policy decisions.",
    "skills": [
      "<strong>Business & Strategy Analytics: </strong>Business Problem Decomposition, Risk & Defaulter Segmentation, Root Cause Analysis, Hypothesis Testing, Metric & KPI Definition, Operational Strategy, Impact Measurement, Executive Decision Support",
      "<strong>Advanced Excel & Financial Modeling: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Complex Nested Formulas, Pivot Tables, Power Pivot, Power Query ETL, What-If Scenario Analysis, Sensitivity Matrices, Financial Modeling, VBA & Macros), Executive Dashboards",
      "<strong>Databases & Querying: </strong>Advanced SQL (Complex Multi-Table Joins, CTEs, Window Functions, Subqueries, Aggregations), MySQL, MariaDB, OracleDB, T-SQL, Query Optimization, Relational Database Design",
      "<strong>Data Modeling & BI: </strong>Schema Reconciliation across Heterogeneous Sources, Identity Resolution, Multi-Source ETL Pipelines, Dimensional Modeling (Star Schema), Microsoft Power BI (DAX, Drill-downs), Oracle Analytics Cloud (OAC), UAT Protocols"
    ],
    "exp_role": "Business Analyst & SQL Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Problem Decomposition & Leadership Alignment: </strong>Partnered directly with the Department Secretary to deconstruct complex statewide attendance and doctor service bond compliance issues across 33 districts into 3 progressive, data-driven initiatives with defined metrics.",
      "<strong>Risk & Defaulter Segmentation: </strong>Uncovered systemic compliance gaps by conceptualizing a 3-tier defaulter risk model for bonded personnel (Non-Joiners, Formal-Only Registrants, and Attendance Defaulters), mapping State Treasury payroll data to track financial leakage.",
      "<strong>Operational Financial Modeling & Excel Analytics: </strong>Built executive scenario modeling workbooks in Advanced Excel combining Power Query ETL and dynamic sensitivity matrices to evaluate payroll discrepancies and bonded doctor compliance rates across 33 districts.",
      "<strong>Advanced SQL Querying & Identity Resolution: </strong>Authored complex SQL pipelines (multi-way joins, CTEs, window functions) bridging AEBAS biometric attendance IDs with State Treasury payroll records, resolving name and designation discrepancies for bonded doctors.",
      "<strong>Executive Dashboards & Decision Support: </strong>Architected an executive 6-page Power BI dashboard with top-down drill-downs (District \u2192 Facility \u2192 Designation \u2192 Individual) tracking core KPIs, enabling leadership to enforce data-backed policy actions across 5 sub-departments."
    ],
    "projects": [
      {
        "name": "Proactive Risk Prediction & AI Decision Engine",
        "tools": "Python, PyTorch, Scikit-learn",
        "tag": "Predictive Risk Analytics",
        "bullets": [
          "Engineered an automated proactive decision framework replacing reactive delay-based protocols to predict high-impact system failures before occurrence using multivariate temporal telemetry, attaining a <strong>97.64% F1-score</strong> and handling 98:2 class imbalance via <strong>SMOTE + Tomek Links</strong>."
        ]
      },
      {
        "name": "Anomalous Content & Text Classification System",
        "tools": "Python, BERT, XGBoost",
        "tag": "Applied Analytics",
        "bullets": [
          "Built and benchmarked dual classification pipelines (BERT + XGBoost and Deep Hybrid Neural Networks) to isolate synthetic and anomalous patterns across large corpora, optimizing decision thresholds to achieve <strong>99% Precision</strong> and <strong>98% Recall</strong>."
        ]
      }
    ],
    "certs": [
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>"
    ],
    "pdf": "tailoring/Rishi_Thakur_Business_Analyst_Resume.pdf",
    "docx": "tailoring/Rishi_Thakur_Business_Analyst_Resume.docx",
    "md": "tailoring/Rishi_Thakur_Business_Analyst_Resume.md"
  },
  "sql_developer": {
    "track": "TRACK 03",
    "badge": "DATABASE ENGINEERING",
    "role": "SQL Developer",
    "title": "SQL Developer | Database Engineering & Analytics",
    "summary": "High-performing SQL Developer and Database Specialist experienced in relational database design, complex analytical querying, and enterprise data reconciliation across state-scale architectures. Proven background engineering high-throughput SQL pipelines (multi-table joins, recursive CTEs, window functions, execution plan optimization) across MariaDB, OracleDB, and MySQL for 33 districts and 1,000+ facilities at CHiPS. Skilled in dimensional Star Schema architecture, multi-source ETL identity resolution, and Advanced Excel data auditing to deliver verified, high-integrity analytical data layers.",
    "skills": [
      "<strong>Databases & Querying: </strong>Advanced SQL (T-SQL, MySQL, MariaDB, OracleDB, PostgreSQL) \u2014 Complex Multi-Table Joins, Recursive CTEs, Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG), Subqueries, Aggregations, Execution Plan Tuning, Indexing Strategies, Stored Procedures & Triggers",
      "<strong>Data Modeling & ETL: </strong>Dimensional Modeling (Kimball Star Schema, Fact & Dimension Tables, SCD Types), Multi-Source ETL Pipelines, Identity Resolution Algorithms, Heterogeneous Schema Reconciliation, Data Integrity Controls, Data Cleansing",
      "<strong>Advanced Excel & BI: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Nested Logic, Pivot Tables, Power Pivot Data Modeling, Power Query M-code, Scenario Modeling, VBA & Macros), Microsoft Power BI (DAX Measures, Time Intelligence), Oracle Analytics Cloud (OAC)",
      "<strong>Programming & Quality: </strong>Python (Pandas, NumPy, Scikit-learn), Automated Data Validation Pipelines, UAT Testing Protocols, Relational Schema DDL/DML Design, Git, Technical Documentation & Audit Trails"
    ],
    "exp_role": "SQL Developer & Data Analyst Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Automated SQL/ETL Identity Resolution: </strong>Engineered an automated SQL/ETL pipeline utilizing complex multi-table CTEs, string normalization, and window functions to bridge disparate AEBAS biometric attendance IDs with State Treasury payroll records, resolving cross-departmental tracking gaps and categorizing doctors into 3 compliance tiers.",
      "<strong>Heterogeneous Schema Reconciliation: </strong>Collaborated directly with National Informatics Centre (NIC) database engineers to reconcile disparate relational schemas across MariaDB attendance engines, State Treasury databases, and National NextGen e-Hospital OPD systems into a unified dimensional data mart.",
      "<strong>Dimensional Modeling & Performance Tuning: </strong>Designed and maintained performant Kimball Star Schema fact and dimension tables; optimized long-running analytical queries through indexed staging views and CTE refactoring, reducing data extraction latencies for executive BI reporting.",
      "<strong>Supply Chain & Inventory SQL Workflows: </strong>Authored advanced Oracle SQL queries aggregating multi-year batch consumption, lead times, safety stocks, and reorder triggers on essential drug catalogs in OracleDB; performed multi-dimensional ABC, VED, and SDE matrix classification deployed across 5 sub-departments.",
      "<strong>Advanced Excel Data Auditing & Validation: </strong>Built automated Excel auditing workbooks leveraging Power Query, dynamic array formulas, and Pivot Tables to cross-verify SQL database extracts against field submissions, ensuring 100% data fidelity for executive review by the Department Secretary."
    ],
    "projects": [
      {
        "name": "Proactive Risk Prediction & Decision Engine",
        "tools": "Python, PyTorch, Scikit-learn",
        "tag": "M.Tech Thesis \u2014 Predictive ML",
        "bullets": [
          "Engineered an automated proactive decision framework replacing reactive delay-based protocols using multivariate temporal telemetry; handled 98:2 class imbalance via <strong>SMOTE + Tomek Links</strong> and attained a <strong>97.64% F1-score</strong> on failure classification."
        ]
      },
      {
        "name": "Anomalous Content & Text Classification System",
        "tools": "Python, BERT, XGBoost, Transformers",
        "tag": "Applied Machine Learning & NLP",
        "bullets": [
          "Built and benchmarked dual classification pipelines (BERT + XGBoost and Deep Hybrid Neural Networks) to isolate synthetic and anomalous patterns across large corpora, optimizing decision thresholds to achieve <strong>99% Precision</strong> and <strong>98% Recall</strong>."
        ]
      }
    ],
    "certs": [
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>",
      "<strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Machine Learning (NPTEL)</strong>"
    ],
    "pdf": "tailoring/Rishi_Thakur_SQL_Developer_Resume.pdf",
    "docx": "tailoring/Rishi_Thakur_SQL_Developer_Resume.docx",
    "md": "tailoring/Rishi_Thakur_SQL_Developer_Resume.md"
  },
  "powerbi_developer": {
    "track": "TRACK 04",
    "badge": "BI ARCHITECTURE",
    "role": "Power BI Developer",
    "title": "Data Analyst | Power BI Developer & Business Intelligence",
    "summary": "Results-oriented Data Analyst and Power BI Developer experienced in designing end-to-end business intelligence solutions, dimensional data models, Advanced Excel analytical workbooks, and automated SQL/ETL pipelines. Proven track record architecting enterprise-scale interactive Power BI dashboards across 33 districts, establishing multi-level DAX-powered drill-down hierarchies, and reconciling multi-source datasets across MariaDB, State Treasury, and OracleDB. Skilled in conducting inventory analytics (ABC/VED/SDE), developing complex DAX measures, and delivering actionable visual insights.",
    "skills": [
      "<strong>BI & Data Visualization: </strong>Microsoft Power BI, DAX (Calculated Columns, Measures, Time Intelligence, Compliance Ratios), Power Query (M Language ETL), Oracle Analytics Cloud (OAC), Dynamic KPI Scorecards, Row-Level Security, Interactive Drill-Throughs",
      "<strong>Advanced Excel & Modeling: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Nested Logic, Pivot Tables, Power Pivot Data Modeling, Scenario Modeling, VBA/Macros), Executive Reporting",
      "<strong>Databases & Querying: </strong>Advanced SQL (Complex Multi-Table Joins, CTEs, Window Functions, Subqueries, Aggregations), MySQL, MariaDB, OracleDB, T-SQL, Query Optimization, Relational Database Design",
      "<strong>Data Modeling & Analytics: </strong>Dimensional Modeling (Kimball Star Schema), Schema Reconciliation across Heterogeneous Sources, Identity Resolution, Multi-Source ETL Pipelines, Inventory Analysis (ABC/VED/SDE), Data Integrity Controls, UAT Protocols"
    ],
    "exp_role": "Data Analyst & BI Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Enterprise Power BI Dashboard Architecture: </strong>Architected an executive 6-page statewide Power BI attendance dashboard across 33 districts with 4-tier top-down drill-downs (District \u2192 Facility \u2192 Designation \u2192 Employee), custom DAX measures, and dynamic KPI cards tracking avg. work hours, attendance %, and missed logins.",
      "<strong>Advanced DAX & Star Schema Modeling: </strong>Engineered a performant Star Schema data model with custom DAX time-intelligence and compliance-ratio measures, optimizing data refreshes and interactive filtering across large MariaDB employee datasets with full drill-through capability.",
      "<strong>Multi-Source SQL/ETL Pipeline: </strong>Developed automated SQL identity-resolution workflows mapping AEBAS biometric attendance IDs to State Treasury payroll codes, closing a critical cross-departmental tracking gap and categorizing bonded doctors into 3 actionable compliance tiers.",
      "<strong>Supply Chain & Inventory Analytics: </strong>Conducted ABC, VED, and SDE inventory categorization analysis on essential drug catalogs in OracleDB, deploying interactive dashboards to Oracle Analytics Cloud (OAC) to guide statewide procurement decisions across 5 sub-departments.",
      "<strong>Advanced Excel Auditing & Reconciliation: </strong>Created multi-source Excel validation models with Power Query and Power Pivot to verify database extract parity, eliminating discrepancies before publishing to Power BI Service."
    ],
    "projects": [
      {
        "name": "Proactive 5G Handover Prediction (Diffusion Models)",
        "tools": "Python, PyTorch, GRU, DDPM, Scikit-learn",
        "tag": "M.Tech Thesis \u2014 Predictive Analytics",
        "bullets": [
          "Developed a GRU-conditioned diffusion model (DDPM/DDIM) to forecast radio signal degradation from multivariate spatiotemporal telemetry; addressed 98:2 class imbalance via <strong>SMOTE + Tomek Links</strong> and attained a <strong>97.64% F1-score</strong> on failure classification."
        ]
      },
      {
        "name": "AI vs. Human Text Classification Pipeline",
        "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers",
        "tag": "Applied Machine Learning & NLP",
        "bullets": [
          "Designed and benchmarked dual NLP pipelines (BERT + XGBoost and hybrid Bi-LSTM/CNN/Transformer architecture) on large corpora, optimizing decision boundaries to achieve <strong>99% Precision</strong> and <strong>98% Recall</strong>."
        ]
      }
    ],
    "certs": [
      "<strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>",
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Machine Learning (NPTEL)</strong>"
    ],
    "pdf": "tailoring/Rishi_Thakur_PowerBI_Developer_Resume.pdf",
    "docx": "tailoring/Rishi_Thakur_PowerBI_Developer_Resume.docx",
    "md": "tailoring/Rishi_Thakur_PowerBI_Developer_Resume.md"
  }
};
