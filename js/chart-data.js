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
  }
};
