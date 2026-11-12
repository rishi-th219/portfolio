// Verified Technical Case Studies & Data Architectures for Rishi Thakur
// Grounded directly in official enterprise experience and academic research

const caseStudiesData = {
  healthbi: {
    badge: "SQL ENGINEERING & BUSINESS INTELLIGENCE",
    title: "Statewide Healthcare Attendance & Performance Analytics",
    subtitle: "Architected an executive Power BI dashboard suite across statewide public healthcare facilities with automated SQL/ETL biometric-to-payroll identity resolution and Advanced Excel operational auditing.",
    clientType: "CHiPS • Dept. of Health & Family Welfare, Govt. of Chhattisgarh",
    timeline: "06/2025 – 03/2026",
    pipeline: "AEBAS Biometrics → Automated SQL Identity Resolution → State Treasury Payroll → Kimball Star Schema → Advanced Excel Auditing → Power BI DAX → Executive Policy Decision",
    metrics: [
      { label: "Districts Monitored", value: "Statewide Public Health" },
      { label: "Drill-Down Depth", value: "Hierarchical Model" },
      { label: "Risk Tiers", value: "Risk-Tiered Compliance Model" },
      { label: "Dashboard Scope", value: "Executive Suite" }
    ],
    problem: "Statewide healthcare facilities (community health centers, district hospitals, and administrative directorates) faced severe attendance tracking gaps and doctor service bond non-compliance. Biometric attendance (AEBAS) records were disconnected from State Treasury payroll files and NIC e-Hospital OPD systems, making it impossible for the Department Secretary to verify actual field presence, assess clinical coverage, or detect financial leakage.",
    solution: "1. Automated SQL Identity Resolution: Engineered complex SQL pipelines (multi-way joins, CTEs, string normalization, and window functions) bridging AEBAS biometric IDs with State Treasury payroll records, resolving discrepancies for bonded doctors.\n2. Cross-Department Schema Reconciliation: Integrated multi-source data across MariaDB, State Treasury, and National NextGen e-Hospital OPD systems, collaborating with NIC engineers to reconcile heterogeneous schemas into a unified reporting layer.\n3. Advanced Excel Operational Auditing: Developed multi-tab analytical Excel workbooks powered by Power Query (M), dynamic arrays (XLOOKUP, INDEX/MATCH), and Power Pivot data models to cross-validate district-level biometric logs with Treasury payroll files, enabling rapid ad-hoc scenario modeling and executive exception tracking.\n4. Star Schema Modeling & DAX: Designed a performant Kimball Star Schema in MariaDB connecting to Power BI, with custom DAX measures for attendance rates, rolling operational work hours, and missed login rates across a hierarchical drill-down (District → Facility → Designation → Employee).\n5. Multi-Tier Compliance Risk Model: Uncovered systemic compliance gaps by categorizing personnel into Non-Joiners, Formal-Only Registrants, and Attendance Defaulters, providing immediate visibility into salary disbursement vs. physical attendance.",
    stack: ["Advanced SQL", "MariaDB", "OracleDB", "Advanced Excel", "Power Query (M)", "Power Pivot", "Power BI", "DAX", "Kimball Star Schema", "Data Validation"],
    githubUrl: "",
    deliverables: [
      "Executive interactive Power BI dashboard suite with hierarchical drill-down",
      "Automated SQL/ETL identity resolution pipeline reconciling biometric IDs with payroll records",
      "Multi-tab Advanced Excel auditing workbooks (Power Query, Dynamic Arrays, Power Pivot) cross-validating payroll vs attendance",
      "Performant Kimball Star Schema data model with custom DAX time-intelligence measures",
      "multi-tier compliance risk model and weekly executive exception summaries for the Department Secretary",
      "Cross-department schema reconciliation specs with NIC engineers for NextGen e-Hospital OPD data",
      "Comprehensive UAT validation protocols and operational data integrity controls"
    ]
  },

  supply_chain: {
    badge: "SQL INVENTORY & SCENARIO ANALYTICS",
    title: "Essential Drug Inventory & Supply Chain Analytics",
    subtitle: "Executed multi-dimensional ABC, VED, and SDE inventory matrix modeling in OracleDB, Advanced Excel, and Oracle Analytics Cloud to prevent critical hospital stockouts across statewide clinical departments.",
    clientType: "CHiPS • Dept. of Health & Family Welfare, Govt. of Chhattisgarh",
    timeline: "06/2025 – 03/2026",
    pipeline: "Essential Drug Catalogs → Oracle SQL Aggregations → ABC / VED / SDE Matrix → Advanced Excel Scenario Models → Oracle Analytics Cloud (OAC) → Procurement Allocation",
    metrics: [
      { label: "Departments", value: "Clinical Sub-Directorates" },
      { label: "Framework", value: "ABC / VED / SDE Matrix" },
      { label: "Database Engine", value: "OracleDB" },
      { label: "BI Platform", value: "Oracle Analytics Cloud" }
    ],
    problem: "Procurement teams across clinical directorates struggled to balance pharmaceutical expenditure with life-saving medication availability. Without structured inventory categorization, high-cost non-critical drugs consumed disproportionate budget while essential life-saving drugs experienced localized hospital stockouts.",
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
    subtitle: "M.Tech Thesis at IIIT Naya Raipur: Built a GRU-conditioned Denoising Diffusion Probabilistic Model (DDPM/DDIM) achieving high-precision predictive performance on connection failure prediction.",
    clientType: "IIIT Naya Raipur • M.Tech CSE Thesis",
    timeline: "08/2024 – Present (Ongoing Thesis)",
    pipeline: "Radio Telemetry → GRU Temporal Encoder → DDPM / DDIM Trajectory Generation → SMOTE+Tomek Balancing → Random Forest Policy → Proactive Handover",
    metrics: [
      { label: "F1-Score", value: "High-Precision" },
      { label: "Class Imbalance", value: "Severe Telemetry Imbalance" },
      { label: "Trajectories", value: "Multi-Path Forecasts" },
      { label: "Framework", value: "PyTorch + DDPM" }
    ],
    problem: "In 5G millimeter-wave (mmWave) networks, line-of-sight signal paths are vulnerable to sudden physical blockages (buildings, foliage, human mobility) causing rapid signal degradation within milliseconds. Standard network protocols rely on reactive countdown timers (Time-To-Trigger / TTT), resulting in frequent Radio Link Failures (RLF) and severe throughput drops.",
    solution: "1. Spatiotemporal Feature Modeling: Processed high-dimensional radio telemetry sequences using a Gated Recurrent Unit (GRU) encoder to extract temporal fading patterns.\n2. Generative Trajectory Diffusion: Conditioned a Denoising Diffusion Probabilistic Model (DDPM with accelerated DDIM sampling) on historical signals to generate multiple plausible future signal degradation trajectories.\n3. Extreme Class Imbalance Remediation: Handled the severe normal-to-failure telemetry ratio using an integrated SMOTE + Tomek Links sampling strategy.\n4. Predictive Policy Classifier: Designed an explainable Random Forest ensemble that evaluates forecasted diffusion trajectories to initiate proactive handovers prior to connection collapse, reaching high-precision predictive accuracy.",
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
    subtitle: "Benchmarked dense BERT + XGBoost embeddings against a hybrid Bi-LSTM/CNN/Transformer architecture on massive text corpora, achieving high precision and recall.",
    clientType: "Applied Machine Learning & NLP",
    timeline: "Applied NLP Project",
    pipeline: "Raw Text Corpus → Tokenization & Cleansing → BERT [CLS] Dense Embeddings ∥ Bi-LSTM + Transformer + CNN → XGBoost Classifier → High-Precision Detection",
    metrics: [
      { label: "Precision", value: "High-Precision" },
      { label: "Recall", value: "High-Recall" },
      { label: "F1-Score", value: "High-F1" },
      { label: "Embedding Dim", value: "Dense Contextual BERT" }
    ],
    problem: "The rapid adoption of generative Large Language Models has made detecting synthetic text crucial for academic integrity and content authenticity. Existing commercial detectors suffer from unacceptable False Positive rates—falsely penalizing human writers while failing to capture nuanced structural patterns.",
    solution: "1. Pre-trained Contextual Baseline: Extracted dense contextual sentence embeddings from pre-trained BERT [CLS] representations, paired with an optimized XGBoost gradient-boosted classifier for low-latency inference.\n2. Deep Learning Hybrid Engine: Designed a multi-stage neural architecture incorporating custom word embeddings, Bidirectional LSTM (sequential syntactic flow), Multi-Head Self-Attention Transformer blocks (global semantic coherence), and 1D-Convolutional layers (local n-gram anomaly detection).\n3. Regularization & Optimization: Applied spatial dropout (0.5), early stopping, and ReduceLROnPlateau learning rate decay to eliminate overfitting and ensure cross-domain generalization.",
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
      { label: "Active ATS Discovery", value: "Enterprise ATS Platforms" },
      { label: "Discovery Channels", value: "Multi-Channel Ingestion Engines" },
      { label: "Spreadsheet Engine", value: "Pure Python Stdlib (Zero-Dep OpenXML)" },
      { label: "Resume Routing", value: "Role-Matched Dynamic Selection" }
    ],
    problem: "Navigating tech job searches manually is plagued by high friction: commercial job boards are flooded with stale or closed postings that waste hours, applicant tracking systems (Greenhouse, Lever, Ashby, SmartRecruiters) require redundant data re-entry across complex Single-Page Apps (SPAs) with custom non-standard dropdowns, and traditional job scrapers fail to dynamically match specialized resumes (SQL Developer, Power BI, Business Analyst, Data Analyst) to specific role requirements.",
    solution: "1. Multi-Channel Ingestion Engine: Built a unified discovery suite combining direct, zero-token REST API scanners for Greenhouse, Lever, Ashby, SmartRecruiters, Jobicy, and Remotive, paired with Crawl4AI headless stealth crawlers for complex SPAs (Naukri, Instahyre) and startup scrapers for Hacker News and Y Combinator directories.\n2. Multi-Tier Link Liveness & Expiry Cleaner: Engineered an automated verification daemon that checks direct ATS board APIs first, then falls back to fast HTTP header checks and regex body inspection across comprehensive expiration patterns (e.g., 'job is no longer available', 'applications closed', 'position filled'). Automatically archives dead postings to ensure 100% active pipeline fidelity.\n3. Dependency-Free OpenXML Spreadsheet Engine: Developed a pure Python standard library spreadsheet compiler using zipfile and raw OpenXML generation (opportunities_manager.py) that builds, styles, and indexes opportunities.xlsx and opportunities.csv with custom typography, column widths, and hyperlinks without third-party dependencies.\n4. Dynamic Role-Matched Resume Selector: Engineered a keyword pattern-matching router that analyzes incoming job titles and automatically attaches the corresponding ATS-optimized PDF resume (SQL Developer, Power BI Developer, Business Analyst, or Data Analyst) directly from the verified resume archive.\n5. Headless Playwright Auto-Apply Bot: Automated application submission via Playwright with stealth anti-bot evasion arguments, automatically populating core fields, resolving custom React-select comboboxes, answering screening questions, uploading resumes, and archiving visual proof screenshots in output/confirmations/.\n6. Intelligent Form Autofill & Tailoring Assistant: Created a 1-click headed browser assistant that scrapes live JD text directly from the active posting DOM, dynamically drafts tailored answers to open-ended screening questions grounded in candidate narrative facts, and leaves the browser open for human-in-the-loop review.\n7. Daemon Scheduling & Tracking: Automated the entire discovery-clean-apply cycle with Linux cron scheduling (install_cron.sh), logging every run to status-log.tsv and updating applications.md for end-to-end recruitment pipeline analytics.",
    stack: ["Python", "Playwright", "Crawl4AI", "OpenXML (Pure Python)", "REST APIs", "Regex Engine", "BeautifulSoup", "Bash / Cron", "Git"],
    githubUrl: "https://github.com/rishi-th219/career-ops-bot",
    deliverables: [
      "Master pipeline orchestrator (job_pipeline.py) supporting individual tools or 100% autonomous execution",
      "Direct ATS API and remote tech ingestion modules scanning direct enterprise employer endpoints",
      "Concurrent link liveness auditor (clean_expired_jobs.py) with automated dead-link archiving",
      "Pure-Python OpenXML spreadsheet engine (opportunities_manager.py) generating styled .xlsx workbooks",
      "Headless Playwright auto-apply runner (auto_apply_bot.py) with anti-bot evasion and visual screenshot audit trails",
      "Intelligent browser autofill assistant (autofill_assistant.py) with dynamic JD text extraction and response drafting",
      "Linux cron daemon automation (install_cron.sh) and Markdown/TSV application tracking ledger"
    ]
  }
};

// Robust alias mappings for case study modal identifiers
caseStudiesData.drugmatrix = caseStudiesData.supply_chain;
caseStudiesData.career_ops = caseStudiesData.career_ops_bot;

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
      "<strong>Analytics & Programming: </strong>Python (Pandas, NumPy, Scikit-learn), Inventory Analysis (ABC/VED/SDE), Metric & Dimension Definition, Root Cause Analysis, Trend & Variance Analysis, UAT Protocols, Technical Documentation",
      "<strong>Systems & Troubleshooting: </strong>Fedora Linux (daily driver, shell scripting, CLI automation), Windows 11 (enterprise OS troubleshooting, diagnostics, PowerShell), Git & GitHub"
    ],
    "exp_role": "Data Analyst & BI Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Statewide BI Dashboard Architecture: </strong>Architected an executive statewide Power BI attendance dashboard across statewide public health facilities, structuring hierarchical top-down drill-downs (District \u2192 Facility \u2192 Designation \u2192 Employee) with custom DAX measures tracking avg. work hours, attendance %, and missed logins.",
      "<strong>Advanced Excel Auditing & Operational Analysis: </strong>Developed multi-tab analytical Excel workbooks powered by Power Query, dynamic arrays (XLOOKUP, INDEX/MATCH), and Power Pivot data models to cross-validate district-level biometric logs with Treasury payroll files, enabling rapid ad-hoc scenario modeling and executive exception tracking.",
      "<strong>Automated SQL/ETL Identity Resolution: </strong>Engineered an automated SQL/ETL pipeline mapping AEBAS biometric attendance IDs to State Treasury payroll records, closing a critical cross-departmental tracking gap and categorizing bonded doctors into actionable compliance tiers.",
      "<strong>Cross-Department Schema Reconciliation: </strong>Integrated multi-source data across MariaDB, State Treasury, and National NextGen e-Hospital OPD systems, collaborating with NIC engineers to reconcile heterogeneous modular schemas into a unified reporting layer.",
      "<strong>Supply Chain & Inventory Analytics: </strong>Conducted ABC, VED, and SDE inventory categorization analysis on essential drug catalogs in OracleDB, deploying interactive dashboards to Oracle Analytics Cloud (OAC) to guide statewide procurement decisions across statewide clinical departments."
    ],
    "projects": [
      {
        "name": "Proactive 5G Handover Prediction (Diffusion Models)",
        "tools": "Python, PyTorch, GRU, DDPM, Scikit-learn",
        "tag": "M.Tech Thesis \u2014 Predictive Analytics",
        "bullets": [
          "Developed a GRU-conditioned diffusion model (DDPM/DDIM) to forecast radio signal degradation from multivariate spatiotemporal telemetry; addressed severe class imbalance via <strong>SMOTE + Tomek Links</strong> and attained a <strong>high-precision F1-score</strong> on failure classification."
        ]
      },
      {
        "name": "AI vs. Human Text Classification Pipeline",
        "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers",
        "tag": "Applied Machine Learning & NLP",
        "bullets": [
          "Designed and benchmarked dual NLP pipelines (BERT + XGBoost and hybrid Bi-LSTM/CNN/Transformer architecture) on large corpora, optimizing decision boundaries to achieve <strong>high-precision</strong> and <strong>high-recall</strong> benchmarks."
        ]
      }
    ],
    "certs": [
      "<strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>",
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Machine Learning (NPTEL)</strong>"
    ],
    "pdf": "assets/Rishi_Thakur_Data_Analyst_Resume.pdf",
    "docx": "assets/Rishi_Thakur_Data_Analyst_Resume.pdf",
    "md": "llms.txt"
  },
  "business_analyst": {
    "track": "TRACK 02",
    "badge": "STRATEGIC & OPS",
    "role": "Business Analyst",
    "title": "Business Analyst | SQL Developer & Analytics Engineering",
    "summary": "Business Analyst and SQL Developer with expertise in business problem decomposition, advanced relational database querying, Advanced Excel scenario modeling, and executive leadership alignment. Proven track record partnering directly with the Department Secretary to deconstruct complex statewide operational bottlenecks into structured, data-driven initiatives across statewide public health facilities. Experienced in authoring advanced SQL workflows (CTEs, window functions, schema reconciliation), building dynamic financial/operational models in Excel, and deploying interactive Power BI dashboards that drive data-backed policy decisions.",
    "skills": [
      "<strong>Business & Strategy Analytics: </strong>Business Problem Decomposition, Risk & Defaulter Segmentation, Root Cause Analysis, Hypothesis Testing, Metric & KPI Definition, Operational Strategy, Impact Measurement, Executive Decision Support",
      "<strong>Advanced Excel & Financial Modeling: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Complex Nested Formulas, Pivot Tables, Power Pivot, Power Query ETL, What-If Scenario Analysis, Sensitivity Matrices, Financial Modeling, VBA & Macros), Executive Dashboards",
      "<strong>Databases & Querying: </strong>Advanced SQL (Complex Multi-Table Joins, CTEs, Window Functions, Subqueries, Aggregations), MySQL, MariaDB, OracleDB, T-SQL, Query Optimization, Relational Database Design",
      "<strong>Data Modeling & BI: </strong>Schema Reconciliation across Heterogeneous Sources, Identity Resolution, Multi-Source ETL Pipelines, Dimensional Modeling (Star Schema), Microsoft Power BI (DAX, Drill-downs), Oracle Analytics Cloud (OAC), UAT Protocols"
    ],
    "exp_role": "Business Analyst & SQL Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Problem Decomposition & Leadership Alignment: </strong>Partnered directly with the Department Secretary to deconstruct complex statewide attendance and doctor service bond compliance issues across statewide public health facilities into progressive, data-driven initiatives with defined metrics.",
      "<strong>Risk & Defaulter Segmentation: </strong>Uncovered systemic compliance gaps by conceptualizing a multi-tier compliance risk model for bonded personnel (Non-Joiners, Formal-Only Registrants, and Attendance Defaulters), mapping State Treasury payroll data to track financial leakage.",
      "<strong>Operational Financial Modeling & Excel Analytics: </strong>Built executive scenario modeling workbooks in Advanced Excel combining Power Query ETL and dynamic sensitivity matrices to evaluate payroll discrepancies and bonded doctor compliance rates across statewide public health facilities.",
      "<strong>Advanced SQL Querying & Identity Resolution: </strong>Authored complex SQL pipelines (multi-way joins, CTEs, window functions) bridging AEBAS biometric attendance IDs with State Treasury payroll records, resolving name and designation discrepancies for bonded doctors.",
      "<strong>Executive Dashboards & Decision Support: </strong>Architected an executive Power BI dashboard with top-down drill-downs (District \u2192 Facility \u2192 Designation \u2192 Individual) tracking core KPIs, enabling leadership to enforce data-backed policy actions across statewide clinical departments."
    ],
    "projects": [
      {
        "name": "Proactive Risk Prediction & AI Decision Engine",
        "tools": "Python, PyTorch, Scikit-learn",
        "tag": "Predictive Risk Analytics",
        "bullets": [
          "Engineered an automated proactive decision framework replacing reactive delay-based protocols to predict high-impact system failures before occurrence using multivariate temporal telemetry, attaining a <strong>high-precision F1-score</strong> and handling severe class imbalance via <strong>SMOTE + Tomek Links</strong>."
        ]
      },
      {
        "name": "Anomalous Content & Text Classification System",
        "tools": "Python, BERT, XGBoost",
        "tag": "Applied Analytics",
        "bullets": [
          "Built and benchmarked dual classification pipelines (BERT + XGBoost and Deep Hybrid Neural Networks) to isolate synthetic and anomalous patterns across large corpora, optimizing decision thresholds to achieve <strong>high precision and recall</strong>."
        ]
      }
    ],
    "certs": [
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>"
    ],
    "pdf": "assets/Rishi_Thakur_Business_Analyst_Resume.pdf",
    "docx": "assets/Rishi_Thakur_Business_Analyst_Resume.pdf",
    "md": "llms.txt"
  },
  "sql_developer": {
    "track": "TRACK 03",
    "badge": "DATABASE ENGINEERING",
    "role": "SQL Developer",
    "title": "SQL Developer | Database Engineering & Analytics",
    "summary": "High-performing SQL Developer and Database Specialist experienced in relational database design, complex analytical querying, and enterprise data reconciliation across state-scale architectures. Proven background engineering high-throughput SQL pipelines (multi-table joins, recursive CTEs, window functions, execution plan optimization) across MariaDB, OracleDB, and MySQL for statewide healthcare facilities at CHiPS. Skilled in dimensional Star Schema architecture, multi-source ETL identity resolution, and Advanced Excel data auditing to deliver verified, high-integrity analytical data layers.",
    "skills": [
      "<strong>Databases & Querying: </strong>Advanced SQL (T-SQL, MySQL, MariaDB, OracleDB, PostgreSQL) \u2014 Complex Multi-Table Joins, Recursive CTEs, Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG), Subqueries, Aggregations, Execution Plan Tuning, Indexing Strategies, Stored Procedures & Triggers",
      "<strong>Data Modeling & ETL: </strong>Dimensional Modeling (Kimball Star Schema, Fact & Dimension Tables, SCD Types), Multi-Source ETL Pipelines, Identity Resolution Algorithms, Heterogeneous Schema Reconciliation, Data Integrity Controls, Data Cleansing",
      "<strong>Advanced Excel & BI: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Nested Logic, Pivot Tables, Power Pivot Data Modeling, Power Query M-code, Scenario Modeling, VBA & Macros), Microsoft Power BI (DAX Measures, Time Intelligence), Oracle Analytics Cloud (OAC)",
      "<strong>Programming & Quality: </strong>Python (Pandas, NumPy, Scikit-learn), Automated Data Validation Pipelines, UAT Testing Protocols, Relational Schema DDL/DML Design, Git, Technical Documentation & Audit Trails"
    ],
    "exp_role": "SQL Developer & Data Analyst Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Automated SQL/ETL Identity Resolution: </strong>Engineered an automated SQL/ETL pipeline utilizing complex multi-table CTEs, string normalization, and window functions to bridge disparate AEBAS biometric attendance IDs with State Treasury payroll records, resolving cross-departmental tracking gaps and categorizing doctors into compliance tiers.",
      "<strong>Heterogeneous Schema Reconciliation: </strong>Collaborated directly with National Informatics Centre (NIC) database engineers to reconcile disparate relational schemas across MariaDB attendance engines, State Treasury databases, and National NextGen e-Hospital OPD systems into a unified dimensional data mart.",
      "<strong>Dimensional Modeling & Performance Tuning: </strong>Designed and maintained performant Kimball Star Schema fact and dimension tables; optimized long-running analytical queries through indexed staging views and CTE refactoring, reducing data extraction latencies for executive BI reporting.",
      "<strong>Supply Chain & Inventory SQL Workflows: </strong>Authored advanced Oracle SQL queries aggregating multi-year batch consumption, lead times, safety stocks, and reorder triggers on essential drug catalogs in OracleDB; performed multi-dimensional ABC, VED, and SDE matrix classification deployed across statewide clinical departments.",
      "<strong>Advanced Excel Data Auditing & Validation: </strong>Built automated Excel auditing workbooks leveraging Power Query, dynamic array formulas, and Pivot Tables to cross-verify SQL database extracts against field submissions, ensuring 100% data fidelity for executive review by the Department Secretary."
    ],
    "projects": [
      {
        "name": "Proactive Risk Prediction & Decision Engine",
        "tools": "Python, PyTorch, Scikit-learn",
        "tag": "M.Tech Thesis \u2014 Predictive ML",
        "bullets": [
          "Engineered an automated proactive decision framework replacing reactive delay-based protocols using multivariate temporal telemetry; handled severe class imbalance via <strong>SMOTE + Tomek Links</strong> and attained a <strong>high-precision F1-score</strong> on failure classification."
        ]
      },
      {
        "name": "Anomalous Content & Text Classification System",
        "tools": "Python, BERT, XGBoost, Transformers",
        "tag": "Applied Machine Learning & NLP",
        "bullets": [
          "Built and benchmarked dual classification pipelines (BERT + XGBoost and Deep Hybrid Neural Networks) to isolate synthetic and anomalous patterns across large corpora, optimizing decision thresholds to achieve <strong>high precision and recall</strong>."
        ]
      }
    ],
    "certs": [
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>",
      "<strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Machine Learning (NPTEL)</strong>"
    ],
    "pdf": "assets/Rishi_Thakur_SQL_Developer_Resume.pdf",
    "docx": "assets/Rishi_Thakur_SQL_Developer_Resume.pdf",
    "md": "llms.txt"
  },
  "powerbi_developer": {
    "track": "TRACK 04",
    "badge": "BI ARCHITECTURE",
    "role": "Power BI Developer",
    "title": "Data Analyst | Power BI Developer & Business Intelligence",
    "summary": "Results-oriented Data Analyst and Power BI Developer experienced in designing end-to-end business intelligence solutions, dimensional data models, Advanced Excel analytical workbooks, and automated SQL/ETL pipelines. Proven track record architecting enterprise-scale interactive Power BI dashboards across statewide public health facilities, establishing multi-level DAX-powered drill-down hierarchies, and reconciling multi-source datasets across MariaDB, State Treasury, and OracleDB. Skilled in conducting inventory analytics (ABC/VED/SDE), developing complex DAX measures, and delivering actionable visual insights.",
    "skills": [
      "<strong>BI & Data Visualization: </strong>Microsoft Power BI, DAX (Calculated Columns, Measures, Time Intelligence, Compliance Ratios), Power Query (M Language ETL), Oracle Analytics Cloud (OAC), Dynamic KPI Scorecards, Row-Level Security, Interactive Drill-Throughs",
      "<strong>Advanced Excel & Modeling: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Nested Logic, Pivot Tables, Power Pivot Data Modeling, Scenario Modeling, VBA/Macros), Executive Reporting",
      "<strong>Databases & Querying: </strong>Advanced SQL (Complex Multi-Table Joins, CTEs, Window Functions, Subqueries, Aggregations), MySQL, MariaDB, OracleDB, T-SQL, Query Optimization, Relational Database Design",
      "<strong>Data Modeling & Analytics: </strong>Dimensional Modeling (Kimball Star Schema), Schema Reconciliation across Heterogeneous Sources, Identity Resolution, Multi-Source ETL Pipelines, Inventory Analysis (ABC/VED/SDE), Data Integrity Controls, UAT Protocols"
    ],
    "exp_role": "Data Analyst & BI Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Enterprise Power BI Dashboard Architecture: </strong>Architected an executive statewide Power BI attendance dashboard across statewide public health facilities with hierarchical top-down drill-downs (District \u2192 Facility \u2192 Designation \u2192 Employee), custom DAX measures, and dynamic KPI cards tracking avg. work hours, attendance %, and missed logins.",
      "<strong>Advanced DAX & Star Schema Modeling: </strong>Engineered a performant Star Schema data model with custom DAX time-intelligence and compliance-ratio measures, optimizing data refreshes and interactive filtering across large MariaDB employee datasets with full drill-through capability.",
      "<strong>Multi-Source SQL/ETL Pipeline: </strong>Developed automated SQL identity-resolution workflows mapping AEBAS biometric attendance IDs to State Treasury payroll codes, closing a critical cross-departmental tracking gap and categorizing bonded doctors into actionable compliance tiers.",
      "<strong>Supply Chain & Inventory Analytics: </strong>Conducted ABC, VED, and SDE inventory categorization analysis on essential drug catalogs in OracleDB, deploying interactive dashboards to Oracle Analytics Cloud (OAC) to guide statewide procurement decisions across statewide clinical departments.",
      "<strong>Advanced Excel Auditing & Reconciliation: </strong>Created multi-source Excel validation models with Power Query and Power Pivot to verify database extract parity, eliminating discrepancies before publishing to Power BI Service."
    ],
    "projects": [
      {
        "name": "Proactive 5G Handover Prediction (Diffusion Models)",
        "tools": "Python, PyTorch, GRU, DDPM, Scikit-learn",
        "tag": "M.Tech Thesis \u2014 Predictive Analytics",
        "bullets": [
          "Developed a GRU-conditioned diffusion model (DDPM/DDIM) to forecast radio signal degradation from multivariate spatiotemporal telemetry; addressed severe class imbalance via <strong>SMOTE + Tomek Links</strong> and attained a <strong>high-precision F1-score</strong> on failure classification."
        ]
      },
      {
        "name": "AI vs. Human Text Classification Pipeline",
        "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers",
        "tag": "Applied Machine Learning & NLP",
        "bullets": [
          "Designed and benchmarked dual NLP pipelines (BERT + XGBoost and hybrid Bi-LSTM/CNN/Transformer architecture) on large corpora, optimizing decision boundaries to achieve <strong>high-precision</strong> and <strong>high-recall</strong> benchmarks."
        ]
      }
    ],
    "certs": [
      "<strong>Microsoft Power BI Desktop for Business Intelligence (Udemy)</strong>  |  <strong>Qualified GATE (CS), 2024</strong>",
      "<strong>SQL for Beginners & Database Design (Udemy)</strong>  |  <strong>IELTS Academic: 7.5 Band Score</strong>",
      "<strong>Python for Data Science, AI & Development (Coursera)</strong>  |  <strong>Machine Learning (NPTEL)</strong>"
    ],
    "pdf": "assets/Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf",
    "docx": "assets/Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf",
    "md": "llms.txt"
  },
  "data_science": {
    "track": "TRACK 05",
    "badge": "STATISTICAL & PREDICTIVE",
    "role": "Data Scientist",
    "title": "Data Scientist | Statistical Inference & Predictive Analytics",
    "summary": "Data Scientist with a strong quantitative foundation (M.Tech CSE, GATE CS qualified) and expertise in exploratory data analysis (EDA), statistical inference, machine learning, and predictive modeling. Proven track record handling severe class imbalances via SMOTE + Tomek Links and deploying predictive regression and classification pipelines. Adept at translating operational bottlenecks into rigorous statistical models and executive dashboards.",
    "skills": [
      "<strong>Machine Learning & Statistics: </strong>Machine Learning (Random Forest, XGBoost, KMeans, Logistic Regression), Feature Engineering, Resampling (SMOTE + Tomek Links), Hypothesis Testing, R², RMSE, F1-Score",
      "<strong>Deep Learning, GenAI & AI Tools: </strong>Claude Code, Google Antigravity, Diffusion Models (DDPM/DDIM), Transformers, BERT Embeddings, PyTorch, TensorFlow, Scikit-learn",
      "<strong>Programming & Data Systems: </strong>Python (Pandas, NumPy, Scikit-learn), Advanced SQL (Joins, CTEs, Window Functions), MySQL, MariaDB, OracleDB, Microsoft Power BI (DAX), Linux/Bash, Git"
    ],
    "exp_role": "Data Science & Analytics Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Statewide Exploratory Data Analysis: </strong>Conducted exploratory data analysis (EDA) across statewide public health facilities on healthcare attendance records, addressing schema anomalies and duplicate designations.",
      "<strong>Automated SQL/ETL Feature Pipeline: </strong>Engineered an automated SQL/ETL feature pipeline mapping AEBAS biometric IDs to State Treasury payroll codes, establishing cross-departmental ground-truth records.",
      "<strong>Multi-Tier Risk Classification Model: </strong>Formulated a multi-tier risk classification model tracking bonded medical personnel across facilities, pinpointing critical compliance gaps.",
      "<strong>Cross-Source Data Reconciliation: </strong>Reconciled disparate database schemas across MariaDB, State Treasury, and e-Hospital systems with 100% data fidelity.",
      "<strong>Executive Power BI Dashboard: </strong>Architected an executive Power BI dashboard featuring hierarchical drill-downs (District → Facility → Designation → Individual) to present KPIs to leadership."
    ],
    "projects": [
      {
        "name": "Proactive 5G Handover Prediction (Diffusion Models)",
        "tools": "Python, PyTorch, GRU, DDPM/DDIM, Scikit-learn, Random Forest, SMOTE, Tomek Links",
        "tag": "M.Tech Thesis — Predictive Modeling & Telemetry",
        "bullets": [
          "Architected a predictive engine pairing a <strong>GRU encoder</strong> with a <strong>Diffusion Model (DDPM/DDIM)</strong> simulating multiple trajectory paths to forecast signal degradation from multivariate spatiotemporal telemetry.",
          "Resolved extreme <strong>telemetry class imbalance</strong> using a hybrid <strong>SMOTE + Tomek Links</strong> pipeline, implementing an ensemble Random Forest classifier to attain a <strong>high-precision F1-score</strong>."
        ]
      },
      {
        "name": "AI vs. Human Text Classification Pipeline",
        "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers, 1D-CNN, TensorFlow, Scikit-learn",
        "tag": "Applied NLP & Deep Learning",
        "bullets": [
          "Engineered dual NLP classification architectures: extracted dense contextual sentence embeddings from pre-trained <strong>BERT</strong> paired with <strong>XGBoost</strong>, and constructed a deep hybrid Bi-LSTM/Transformer network.",
          "Applied stratified cross-validation sampling, text normalization (NFKD), dropout (0.5), and dynamic learning rate decay, achieving <strong>high-precision</strong> and <strong>high-recall</strong> benchmarks in synthetic LLM classification."
        ]
      }
    ],
    "certs": [
      "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
      "<strong>Python for Data Science & AI</strong> (Coursera)",
      "<strong>Celonis Process Mining Foundations</strong> (Credly)",
      "<strong>Microsoft Power BI for Business Intelligence</strong> (Udemy)",
      "<strong>SQL for Beginners & Database Design</strong> (Udemy)",
      "<strong>IELTS Academic:</strong> 7.5 Band Score"
    ],
    "pdf": "assets/Rishi_Thakur_Data_Science_Resume.pdf",
    "docx": "assets/Rishi_Thakur_Data_Science_Resume.pdf",
    "md": "llms.txt"
  },
  "ml_engineer": {
    "track": "TRACK 06",
    "badge": "DEEP LEARNING & RESEARCH",
    "role": "Machine Learning Engineer",
    "title": "Machine Learning Engineer | Deep Learning & Generative Models",
    "summary": "Machine Learning Engineer with an advanced Computer Science foundation (M.Tech CSE, GATE CS qualified) and hands-on expertise building end-to-end deep learning, NLP, and predictive systems. Experienced developing generative diffusion models (DDPM/DDIM), recurrent sequence encoders (GRU, Bi-LSTM), and transformer classifiers (BERT + XGBoost). Specialized in handling severe class imbalance (SMOTE + Tomek Links), custom loss formulation, and low-latency inference.",
    "skills": [
      "<strong>Deep Learning & Architectures: </strong>Diffusion Models (DDPM, DDIM), Recurrent Networks (GRU, Bi-LSTM), Transformers, Multi-Head Attention, BERT Embeddings, 1D-CNN, Random Forest, XGBoost",
      "<strong>GenAI, LLMs & AI Tools: </strong>Claude Code, Google Antigravity, Prompt Engineering, Agentic Workflows, Hugging Face, PyTorch, TensorFlow, Scikit-learn, SMOTE + Tomek Links, Custom Loss Formulation",
      "<strong>Data Engineering & SQL: </strong>Advanced SQL (CTEs, Window Functions, Joins), MySQL, MariaDB, Relational Schema Modeling, Python (NumPy, Pandas), Linux/Bash, Git/GitHub"
    ],
    "exp_role": "Machine Learning & Data Analyst Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Automated SQL/ETL Pipelines: </strong>Architected an automated SQL/ETL pipeline integrating biometric punch logs (AEBAS) with State Treasury payroll records across statewide public health facilities.",
      "<strong>Predictive Risk Modeling: </strong>Engineered a multi-tier risk model classifying compliance behaviors among bonded personnel, resolving identity discrepancies across databases.",
      "<strong>Preprocessing & Outlier Remediation: </strong>Conducted data preprocessing, outlier removal, and categorical normalization across disparate database architectures (MariaDB, OracleDB, e-Hospital APIs).",
      "<strong>Feature Engineering with NIC: </strong>Partnered with National Informatics Centre (NIC) engineers to construct unified feature tables, maintaining 100% data integrity.",
      "<strong>Interactive Power BI Delivery: </strong>Deployed an interactive Power BI dashboard with hierarchical drill-downs to visualize predictions and utilization metrics."
    ],
    "projects": [
      {
        "name": "Proactive 5G Handover Prediction (Diffusion Models)",
        "tools": "Python, PyTorch, GRU, DDPM/DDIM, Scikit-learn, Random Forest, SMOTE, Tomek Links",
        "tag": "M.Tech Thesis — Deep Generative Modeling & Telemetry",
        "bullets": [
          "Architected a predictive decision engine pairing a <strong>GRU encoder</strong> with a <strong>Diffusion Model (DDPM/DDIM)</strong> simulating multiple trajectory paths to forecast signal drops from spatiotemporal telemetry.",
          "Resolved severe <strong>telemetry class imbalance</strong> via <strong>SMOTE + Tomek Links</strong>, training a Random Forest policy with custom loss to attain a <strong>high-precision F1-score</strong>."
        ]
      },
      {
        "name": "AI vs. Human Text Classification Pipeline",
        "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers, 1D-CNN, TensorFlow, Scikit-learn",
        "tag": "Applied NLP & Deep Learning",
        "bullets": [
          "Constructed dual NLP classification pipelines extracting dense contextual sentence embeddings from pre-trained <strong>BERT</strong> with <strong>XGBoost</strong>, benchmarked against a deep Bi-LSTM/Transformer/1D-CNN network.",
          "Applied stratified cross-validation sampling, text normalization (NFKD), dropout (0.5), and dynamic learning rate decay, achieving <strong>high-precision</strong> and <strong>high-recall</strong> benchmarks in synthetic LLM text detection."
        ]
      }
    ],
    "certs": [
      "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
      "<strong>Python for Data Science, AI & Development</strong> (Coursera)",
      "<strong>SQL for Beginners & Database Design</strong> (Udemy)",
      "<strong>Celonis Foundations</strong> & <strong>Process Management Foundations</strong> (Credly)",
      "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
      "<strong>IELTS Academic:</strong> 7.5 Band Score"
    ],
    "pdf": "assets/Rishi_Thakur_ML_Engineer_Resume.pdf",
    "docx": "assets/Rishi_Thakur_ML_Engineer_Resume.pdf",
    "md": "llms.txt"
  },
  "mis_analyst": {
    "track": "TRACK 07",
    "badge": "OPERATIONAL & AUDITING",
    "role": "MIS Analyst",
    "title": "MIS Analyst | Management Reporting & Operational Automation",
    "summary": "Detail-oriented MIS Analyst experienced in developing automated reporting systems, multi-source data reconciliation pipelines, and enterprise BI dashboards. Proven background resolving operational discrepancies across state-scale public databases, linking biometric attendance logs with State Treasury payroll records, and building recurring MIS reports across statewide public health facilities. Backed by M.Tech CSE, GATE CS qualification, Advanced Excel, SQL, and Power BI.",
    "skills": [
      "<strong>Advanced Excel & MIS Reporting: </strong>Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Pivot Tables, Power Pivot, Power Query, What-If Analysis, Conditional Formatting, Data Validation, Automated Templates, Periodic MIS)",
      "<strong>Databases, Extraction & SQL: </strong>Advanced SQL (MySQL, MariaDB, OracleDB, T-SQL) — Joins, CTEs, Window Functions, Relational Modeling, Data Cleansing, Schema Reconciliation",
      "<strong>BI, AI Tools & Modeling: </strong>Microsoft Power BI (DAX), Claude Code, Google Antigravity (AI-Assisted Formula Generation), Dimensional Star Schema, Celonis Process Mining, Python"
    ],
    "exp_role": "MIS & Data Analyst Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
      "<strong>Automated Statewide MIS Workflows: </strong>Automated statewide recurring MIS reporting workflows across statewide public health facilities, consolidating attendance and payroll records into structured management reporting packages.",
      "<strong>SQL/ETL Reconciliation Pipeline: </strong>Engineered an automated SQL/ETL reconciliation pipeline mapping AEBAS biometric punch IDs to State Treasury payroll records, closing a critical audit gap with 100% data fidelity.",
      "<strong>Multi-Tier Compliance Risk Model: </strong>Formulated a multi-tier compliance risk model in Excel and SQL classifying non-compliant bonded personnel, enabling leadership to initiate targeted recoveries.",
      "<strong>Multi-Source Schema Consolidation: </strong>Reconciled disparate backend database schemas across MariaDB, State Treasury, and National Next-Gen e-Hospital systems, harmonizing staff IDs and OPD operational logs.",
      "<strong>Executive Reporting Suite: </strong>Designed an executive Power BI reporting suite with hierarchical drill-downs (District → Facility → Designation → Individual) tracking core KPIs."
    ],
    "projects": [
      {
        "name": "Proactive Risk Prediction & AI Decision Engine",
        "tools": "Python, PyTorch, Scikit-learn, Random Forest, SMOTE, Tomek Links, Excel",
        "tag": "Predictive Analytics & Telemetry",
        "bullets": [
          "Built an automated predictive decision model forecasting signal degradation from multivariate spatiotemporal telemetry, addressing severe class imbalance via SMOTE + Tomek Links.",
          "Integrated an ensemble Random Forest policy evaluating multiple diffusion trajectories, achieving high-precision predictive performance to proactively prevent operational bottlenecks."
        ]
      },
      {
        "name": "Career-Ops Autonomous Job Acquisition Bot",
        "tools": "Python, Playwright, OpenXML, REST APIs, Regex Engine",
        "tag": "Automation & ETL Pipeline",
        "bullets": [
          "Constructed a pure-Python OpenXML spreadsheet engine (zero pip dependencies) and link liveness auditor scanning direct enterprise ATS endpoints to automate data ingestion and application tracking."
        ]
      }
    ],
    "certs": [
      "<strong>Advanced Excel for Data Analytics</strong> (Udemy)",
      "<strong>SQL for Beginners & Database Design</strong> (Udemy)",
      "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
      "<strong>Python for Data Science, AI & Development</strong> (Coursera)",
      "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
      "<strong>IELTS Academic:</strong> 7.5 Band Score"
    ],
    "pdf": "assets/Rishi_Thakur_MIS_Analyst_Resume.pdf",
    "docx": "assets/Rishi_Thakur_MIS_Analyst_Resume.pdf",
    "md": "llms.txt"
  }
};


// Interactive Architecture Pipeline Data (Inspired by santifer/cv-santiago)
// Robust alias mappings
caseStudiesData.drugmatrix = caseStudiesData.supply_chain;
caseStudiesData.career_ops = caseStudiesData.career_ops_bot;
resumesData.data_scientist = resumesData.data_science;
resumesData.powerbi_data_analyst = resumesData.powerbi_developer;

const architecturesData = {
  health_bi: {
    title: "Statewide Healthcare Biometric-to-Payroll Intelligence",
    badge: "SQL ETL × KIMBALL STAR SCHEMA × POWER BI DAX",
    description: "End-to-end data pipeline resolving employee identity mismatches between biometric AEBAS machines and State Treasury payroll databases across statewide public healthcare facilities.",
    steps: [
      {
        num: "01",
        label: "Ingestion",
        title: "Disparate Source Extraction",
        tech: "MariaDB & OracleDB",
        detail: "Ingested daily biometric punch timestamps from statewide healthcare facilities alongside State Treasury payroll registry codes and NIC NextGen e-Hospital OPD logs."
      },
      {
        num: "02",
        label: "Cleansing",
        title: "Deterministic SQL Identity Resolution",
        tech: "CTEs, String Normalization, Joins",
        detail: "Authored multi-table SQL reconciliation pipelines bridging AEBAS biometric IDs with Treasury employee codes, resolving name variations and transliterations with 100% data fidelity."
      },
      {
        num: "03",
        label: "Modeling",
        title: "Kimball Star Schema Data Mart",
        tech: "Facts, Dims, SCD Type 2",
        detail: "Structured a dimensional data mart with central attendance/payroll fact tables linked to District, Facility, Cadre/Designation, and Date dimensions."
      },
      {
        num: "04",
        label: "Auditing",
        title: "Multi-Tier Defaulter Risk Engine",
        tech: "Advanced Excel Power Query & SQL",
        detail: "Classified bonded medical officers into non-compliance categories (Non-Reporting, Formal Only, Severe Absenteeism) to arrest public fund leakage."
      },
      {
        num: "05",
        label: "Delivery",
        title: "Executive Power BI Suite",
        tech: "DAX Time Intelligence & Hierarchical Drilldowns",
        detail: "Delivered interactive dashboards enabling the Health Department Secretary to drill down from District → Facility → Designation → Individual employee."
      }
    ]
  },
  telco_5g: {
    title: "Proactive 5G mmWave Handover Prediction via Diffusion Models",
    badge: "M.TECH THESIS × PYTORCH × GRU × DDPM/DDIM",
    description: "Replaces reactive 5G Time-to-Trigger countdowns with an AI trajectory forecast engine, preventing radio link failure in high-frequency mmWave communications.",
    steps: [
      {
        num: "01",
        label: "Telemetry",
        title: "3D Spatiotemporal Telemetry",
        tech: "PyTorch & NumPy",
        detail: "Ingested continuous high-dimensional RF telemetry sequences (RSRP, RSRQ, CINR) representing physical line-of-sight blockage and mobility."
      },
      {
        num: "02",
        label: "Encoding",
        title: "GRU Spatiotemporal Encoder",
        tech: "Recurrent Sequence Modeling",
        detail: "Gated Recurrent Unit (GRU) compresses multivariate past signal variations into dense temporal latent embeddings."
      },
      {
        num: "03",
        label: "Diffusion",
        title: "Generative Trajectory Simulation",
        tech: "DDPM / DDIM (Multi-Path Trajectories)",
        detail: "Conditioned diffusion model simulates multiple plausible future signal degradation trajectories under sudden obstacle blockages."
      },
      {
        num: "04",
        label: "Resampling",
        title: "Extreme Imbalance Remediation",
        tech: "SMOTE + Tomek Links (Severe Telemetry Imbalance)",
        detail: "Eliminated the severe failure-event class imbalance using synthetic minority over-sampling paired with Tomek link boundary cleanup."
      },
      {
        num: "05",
        label: "Policy",
        title: "Random Forest Decision Engine",
        tech: "Ensemble Policy (High-Precision F1-Score)",
        detail: "Evaluates diffusion trajectories to initiate proactive handovers milliseconds before radio failure occurs."
      }
    ]
  },
  career_ops: {
    title: "Career-Ops: Autonomous Multi-Channel Job Acquisition",
    badge: "PLAYWRIGHT × OPENXML PURE PYTHON × REST APIS",
    description: "Zero-dependency recruitment pipeline combining direct ATS scanning, concurrent link liveness auditing, and headless Playwright auto-submission.",
    steps: [
      {
        num: "01",
        label: "Discovery",
        title: "Direct ATS & Remote APIs",
        tech: "Greenhouse, Lever, Ashby, SmartRecruiters",
        detail: "Direct, zero-token REST API scanners bypass commercial board bloat to capture raw employer postings in real time."
      },
      {
        num: "02",
        label: "Auditing",
        title: "Concurrent Liveness & Expiry Cleaner",
        tech: "HTTP Header + Expiration Regex Verification",
        detail: "Filters out closed or ghost postings by verifying API status, fast HTTP headers, and DOM body regex patterns."
      },
      {
        num: "03",
        label: "ETL",
        title: "Dependency-Free OpenXML Engine",
        tech: "Pure Python Stdlib (zipfile + XML)",
        detail: "Compiles opportunities.xlsx and opportunities.csv with custom styles, typography, and links without third-party libraries."
      },
      {
        num: "04",
        label: "Matching",
        title: "Role-Matched Resume Selector",
        tech: "Keyword Pattern Matching",
        detail: "Routes job title requirements to the exact tailored resume (Data Analyst, SQL Developer, Power BI, Business Analyst)."
      },
      {
        num: "05",
        label: "Execution",
        title: "Headless Playwright Auto-Apply",
        tech: "Stealth Headless Chromium + Audit Trail",
        detail: "Submits applications with anti-bot evasion, handles comboboxes, uploads resumes, and captures screenshot proof."
      }
    ]
  },
  supply_chain: {
    title: "Statewide Essential Drug Inventory Multi-Criteria Matrix",
    badge: "ORACLE SQL × ADVANCED EXCEL × ABC/VED/SDE",
    description: "Multi-dimensional inventory categorization model in OracleDB and Advanced Excel preventing critical medicine stockouts across clinical directorates.",
    steps: [
      {
        num: "01",
        label: "Catalog",
        title: "Statewide Pharmaceutical Catalogs",
        tech: "OracleDB Relational Warehouse",
        detail: "Extracted multi-year batch consumption, safety stock thresholds, and warehouse lead times across regional medical depots."
      },
      {
        num: "02",
        label: "Aggregation",
        title: "SQL Consumption Velocity Queries",
        tech: "Window Functions & Grouping Sets",
        detail: "Aggregated monthly consumption velocity, procurement lead time variance, and minimum reorder triggers."
      },
      {
        num: "03",
        label: "Matrix",
        title: "Composite ABC / VED / SDE Classification",
        tech: "Multi-Criteria Matrix Logic",
        detail: "Combined annual monetary value (ABC), clinical criticality (Vital, Essential, Desirable), and supply difficulty (Scarce, Difficult, Easy)."
      },
      {
        num: "04",
        label: "Modeling",
        title: "Advanced Excel Scenario Models",
        tech: "Power Query, Dynamic Arrays, Sensitivity",
        detail: "Built dynamic sensitivity models evaluating lead-time variability and buffer stock costs for procurement heads."
      },
      {
        num: "05",
        label: "Alerts",
        title: "Oracle Analytics Cloud (OAC) Dashboards",
        tech: "Executive KPI Alerts & Thresholds",
        detail: "Visualized stockouts, buffer allocations, and vendor lead times with automated color-coded risk alerts."
      }
    ]
  }
};


// Ground-Truth Knowledge Base for "Ask Rishi AI" (Santiago CV-inspired interactive chat assistant)
const aiKnowledgeBase = [
  {
    keywords: ["chips", "health", "attendance", "biometric", "aebas", "treasury", "payroll", "district", "doctor", "secretar"],
    response: "At **CHiPS (Chhattisgarh Infotech Promotion Society)** deployed with the **Dept. of Health & Family Welfare, Govt. of Chhattisgarh** (06/2025–03/2026), Rishi led the statewide attendance and payroll intelligence initiative across **statewide healthcare facilities**:\n\n• **Automated SQL/ETL Identity Resolution:** Built complex SQL pipelines bridging AEBAS biometric punch IDs with State Treasury payroll records, resolving naming and transliteration mismatches with **100% data fidelity**.\n• **Multi-Tier Compliance Risk Model:** Conceptualized a risk classification model segmenting bonded medical officers into *Non-Reporting*, *Formal-Only Registrants*, and *Severe Absenteeism*, stopping salary leakage.\n• **Executive Power BI Suite:** Designed a performant Kimball Star Schema and DAX measures featuring a **hierarchical drill-down** (*District → Facility → Designation → Individual*).\n• **Executive Impact:** Delivered weekly audit workbooks and ad-hoc scenario models in **Advanced Excel** directly to the Health Department Secretary."
  },
  {
    keywords: ["5g", "thesis", "diffusion", "mmwave", "handover", "iiit", "naya raipur", "ddpm", "ddim", "gru", "telemetry"],
    response: "For his **M.Tech Thesis at IIIT Naya Raipur**, Rishi developed **Proactive 5G mmWave Handover Prediction via Diffusion Models**:\n\n• **The Bottleneck:** Standard 5G networks rely on reactive countdown timers (Time-To-Trigger), causing sudden Radio Link Failures (RLF) when mmWave line-of-sight signals are blocked.\n• **The AI Architecture:** Combined a **GRU sequence encoder** (capturing spatio-temporal telemetry: RSRP, RSRQ, CINR) with a **Denoising Diffusion Probabilistic Model (DDPM/DDIM)** simulating look-forward signal degradation paths.\n• **Imbalance & Result:** Remedied severe **severe class imbalance** using **SMOTE + Tomek Links**, training a Random Forest policy engine that achieved a **high-precision F1-score** in predicting drops before radio failure occurs."
  },
  {
    keywords: ["career", "bot", "auto", "playwright", "crawler", "job", "ats", "apply", "openxml"],
    response: "Rishi built **Career-Ops (`career-ops-bot`)**, an open-source autonomous recruitment and application pipeline:\n\n• **Direct ATS REST APIs:** Scans Greenhouse, Lever, Ashby, and SmartRecruiters endpoints directly, bypassing noisy commercial job boards.\n• **Link Liveness Auditor:** Concurrently checks direct APIs, HTTP headers, and comprehensive expiration regex patterns to eliminate ghost postings.\n• **Pure-Python OpenXML Engine:** Generates styled `.xlsx` workbooks using only Python's standard library (`zipfile` + raw OpenXML) with **zero pip dependencies**.\n• **Headless Playwright Auto-Apply:** Automatically handles complex React dropdowns, maps screening answers from candidate ground truth, and archives screenshot audit trails."
  },
  {
    keywords: ["stack", "sql", "database", "mariadb", "oracle", "power bi", "dax", "tool", "skill", "excel"],
    response: "Rishi's verified technical competencies include:\n\n• **Advanced SQL & Databases:** MySQL, MariaDB, OracleDB, PostgreSQL, T-SQL. Expert in complex multi-table joins, recursive CTEs, window functions (ROW_NUMBER, DENSE_RANK, LEAD/LAG), and execution plan tuning.\n• **Business Intelligence:** Microsoft Power BI (advanced DAX, time intelligence, dynamic ratios, drill-through), Oracle Analytics Cloud (OAC), and Kimball Star Schema dimensional modeling.\n• **Advanced Excel:** XLOOKUP, INDEX/MATCH, Dynamic Arrays, Power Query (M ETL), Power Pivot, What-If Scenario Modeling, and Sensitivity Matrices.\n• **Data Science & ML:** Python (Pandas, NumPy, Scikit-learn, PyTorch), Diffusion Models, GRU, BERT, SMOTE + Tomek Links, and Linux/Bash."
  },
  {
    keywords: ["resume", "download", "tailor", "cv", "pdf", "track"],
    response: "Rishi maintains **7 specialized tailored resumes**, each curated through a rigorous multi-skill pipeline (strict quantification, zero fabrication, 100% ATS score):\n\n1. 📊 [**Data Analyst Resume**](assets/Rishi_Thakur_Data_Analyst_Resume.pdf) — BI, SQL, Advanced Excel & Analytics\n2. 💼 [**Business Analyst Resume**](assets/Rishi_Thakur_Business_Analyst_Resume.pdf) — Strategy, Problem Decomposition & Risk Modeling\n3. 🗄️ [**SQL Developer Resume**](assets/Rishi_Thakur_SQL_Developer_Resume.pdf) — Query Optimization, Identity Resolution & Schemas\n4. 📈 [**Power BI Data Analyst Resume**](assets/Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf) — Statewide 6-Page Suite & DAX\n5. 🔬 [**Data Scientist Resume**](assets/Rishi_Thakur_Data_Science_Resume.pdf) — Statistical Modeling & Predictive Analytics\n6. 🤖 [**ML Engineer Resume**](assets/Rishi_Thakur_ML_Engineer_Resume.pdf) — Diffusion Models, PyTorch & Deep Learning\n7. 📑 [**MIS Analyst Resume**](assets/Rishi_Thakur_MIS_Analyst_Resume.pdf) — Management Reporting & Power Query Reconciliation\n\nYou can also click 'Tailored Resumes' in the navigation bar to preview or download any of them."
  },
  {
    keywords: ["education", "degree", "mtech", "btech", "college", "university", "gate", "ielts", "gpa", "cgpa"],
    response: "Rishi's academic credentials:\n\n• **M.Tech in Computer Science & Engineering:** International Institute of Information Technology (IIIT), Naya Raipur (08/2024–07/2026, **CGPA: 7.90**).\n• **B.Tech in Computer Science:** Amity University Chhattisgarh (08/2019–06/2023, **CGPA: 7.71**).\n• **GATE CS 2024:** Qualified national Graduate Aptitude Test in Engineering in Computer Science & Information Technology.\n• **IELTS Academic:** **7.5 Overall Band Score** (CEFR Level C1 — Proficient English User)."
  },
  {
    keywords: ["location", "relocat", "remote", "hybrid", "bengaluru", "bangalore", "available", "joining", "notice", "hire", "work"],
    response: "Rishi is currently based in **Bengaluru, Karnataka, India**.\n\n• **Availability:** Available for immediate full-time roles or high-impact consulting engagements.\n• **Work Modes:** Open to **On-site in Bengaluru**, **Hybrid**, or **100% Remote**.\n• **Relocation:** Open to relocation for outstanding engineering opportunities.\n• **Roles Target:** Data Analyst, Senior Business Analyst, SQL Developer, BI Architect, and Machine Learning Engineer."
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "interview", "call", "linkedin", "github"],
    response: "You can reach Rishi directly via:\n\n• **Email:** [rishi_th219@proton.me](mailto:rishi_th219@proton.me)\n• **LinkedIn:** [linkedin.com/in/rishi-thakur-b665a4298](https://www.linkedin.com/in/rishi-thakur-b665a4298/)\n• **GitHub:** [github.com/rishi-th219](https://github.com/rishi-th219)\n\nFeel free to send a message using the Contact section below for a direct discovery call."
  }
];

