import os
import sys
import subprocess
import json
import re
from PIL import Image

BASE_CSS = """
    @page {
        size: letter portrait;
        margin: 0.32in 0.46in 0.30in 0.46in;
    }
    * { box-sizing: border-box; }
    body {
        font-family: "Liberation Serif", "Times New Roman", Times, serif;
        font-size: 9.1pt;
        line-height: 1.25;
        color: #000000;
        margin: 0; padding: 0;
    }
    a, a:link, a:visited, a:hover, a:active {
        color: #000000 !important;
        text-decoration: none !important;
    }
    .header { text-align: center; margin-bottom: 2px; }
    h1 {
        font-size: 17.5pt; font-weight: bold; color: #000000;
        margin: 0 0 1px 0; letter-spacing: 0.5px; text-transform: uppercase;
    }
    .role-title {
        font-size: 10.0pt; font-weight: bold; letter-spacing: 0.8px;
        text-transform: uppercase; color: #000000; margin: 1px 0 2px 0;
    }
    .contact { font-size: 8.6pt; color: #000000; line-height: 1.20; }
    .section-title {
        font-size: 10.0pt; font-weight: bold; color: #000000;
        text-transform: uppercase; letter-spacing: 0.5px;
        border-bottom: 1px solid #000000;
        padding-bottom: 1px; margin-top: 5.5px; margin-bottom: 2.2px;
    }
    .summary-text {
        text-align: justify; font-size: 9.1pt;
        line-height: 1.25; margin: 0 0 2px 0;
    }
    .skills-p {
        margin: 1.2px 0;
        padding-left: 14px;
        text-indent: -14px;
        font-size: 9.1pt;
        line-height: 1.25;
        text-align: justify;
    }
    .skills-p strong { font-weight: bold; color: #000000; }

    /* Single-Column Experience Block (Zero Tables) */
    .exp-item {
        margin-top: 3px;
        margin-bottom: 1.5px;
    }
    .exp-line1 {
        font-size: 9.1pt;
        line-height: 1.20;
    }
    .exp-line2 {
        font-size: 8.8pt;
        font-style: italic;
        line-height: 1.20;
    }

    /* Single-Column Project Block (Zero Tables) */
    .proj-block {
        margin-top: 3.5px;
        margin-bottom: 1.5px;
    }
    .proj-title-line {
        font-size: 9.1pt;
        font-weight: bold;
        line-height: 1.20;
    }
    .proj-tech-line {
        font-size: 8.6pt;
        font-style: italic;
        line-height: 1.18;
    }

    /* Single-Column Bullet Item */
    .bullet-item {
        margin-top: 0;
        margin-bottom: 1.8px;
        padding-left: 14px;
        text-indent: -14px;
        text-align: justify;
        font-size: 9.1pt;
        line-height: 1.25;
    }
    .bullet-item strong {
        font-weight: bold;
        color: #000000;
    }

    /* Single-Column Education Block (Zero Tables) */
    .edu-block {
        margin-top: 2px;
        margin-bottom: 1.5px;
    }
    .edu-item {
        font-size: 8.9pt;
        line-height: 1.22;
    }
"""

DATA = {
    "Rishi_Thakur_ML_Engineer_Resume.pdf": {
        "role_title": "MACHINE LEARNING ENGINEER",
        "summary": "Machine Learning Engineer with an advanced Computer Science foundation (M.Tech CSE, GATE CS qualified) and hands-on expertise building end-to-end deep learning, NLP, and predictive systems. Experienced developing generative diffusion models (DDPM/DDIM), recurrent sequence encoders (GRU, Bi-LSTM), and transformer classifiers (BERT + XGBoost). Specialized in handling severe class imbalance (SMOTE + Tomek Links), custom loss formulation, and low-latency inference.",
        "skills": [
            ("Deep Learning & Architectures", "Diffusion Models (DDPM, DDIM), Recurrent Networks (GRU, Bi-LSTM), Transformers, Multi-Head Attention, BERT Embeddings, 1D-CNN, Random Forest, XGBoost"),
            ("GenAI, LLMs & AI Tools", "Claude Code, Google Antigravity, Prompt Engineering, Agentic Workflows, Hugging Face, PyTorch, TensorFlow, Scikit-learn, SMOTE + Tomek Links, Custom Loss Formulation"),
            ("Data Engineering & SQL", "Advanced SQL (CTEs, Window Functions, Joins), MySQL, MariaDB, Relational Schema Modeling, Python (NumPy, Pandas), Linux/Bash, Git/GitHub, Docker Basics")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Machine Learning & Data Analyst Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Architected an automated <strong>SQL/ETL pipeline</strong> integrating biometric punch logs (AEBAS) with State Treasury payroll records across <strong>33 districts</strong>.",
            "Engineered a <strong>3-tier risk model</strong> classifying compliance behaviors among bonded personnel, resolving identity discrepancies across databases.",
            "Conducted data preprocessing, outlier removal, and categorical normalization across disparate database architectures (MariaDB, OracleDB, e-Hospital APIs).",
            "Partnered with National Informatics Centre (NIC) engineers to construct unified feature tables, maintaining <strong>100% data integrity</strong>.",
            "Deployed an interactive <strong>Power BI dashboard</strong> with <strong>4-tier drill-down hierarchies</strong> to visualize predictions and utilization metrics."
        ],
        "proj1_title": "Proactive 5G Handover Prediction (Diffusion Models)",
        "proj1_type": "M.Tech Thesis — Deep Generative Modeling & Telemetry",
        "proj1_tech": "Python, PyTorch, GRU, DDPM/DDIM, Scikit-learn, Random Forest, SMOTE, Tomek Links",
        "proj1_bullets": [
            "Architected a predictive decision engine pairing a <strong>GRU encoder</strong> with a <strong>Diffusion Model (DDPM/DDIM)</strong> simulating 50 paths to forecast signal drops from <strong>spatio-temporal</strong> telemetry.",
            "Resolved severe <strong>98%/2% class imbalance</strong> via <strong>SMOTE + Tomek Links</strong>, training a Random Forest policy with custom loss to attain a <strong>97.64% F1-score</strong>."
        ],
        "proj2_title": "AI vs. Human Text Classification Pipeline",
        "proj2_type": "Applied NLP & Deep Learning",
        "proj2_tech": "Python, BERT, XGBoost, Bi-LSTM, Transformers, 1D-CNN, TensorFlow, Scikit-learn",
        "proj2_bullets": [
            "Constructed dual NLP classification pipelines extracting 768-dim dense embeddings from pre-trained <strong>BERT</strong> with <strong>XGBoost</strong>, benchmarked against a deep Bi-LSTM/Transformer/1D-CNN network.",
            "Applied stratified sampling (80/20), text normalization (NFKD), dropout (0.5), and dynamic learning rate decay, achieving <strong>99% Precision</strong> and <strong>98% Recall</strong> in synthetic LLM text detection."
        ],
        "certs": [
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_Data_Analyst_Resume.pdf": {
        "role_title": "DATA ANALYST",
        "summary": "Results-oriented Data Analyst experienced in developing automated data pipelines, dimensional models, and enterprise Power BI dashboards from end to end. Proven background resolving multi-source data discrepancies across state-scale public databases, authoring SQL/ETL workflows, and translating complex operational KPIs into high-impact analytical tools for executive decisions. Strong quantitative foundation backed by M.Tech (CSE) and GATE CS qualification.",
        "skills": [
            ("Analytics & Advanced SQL", "Advanced SQL (MySQL, MariaDB, OracleDB, T-SQL) — Complex Joins, CTEs, Window Functions; Python (Pandas, NumPy, Scikit-learn), Exploratory Data Analysis (EDA)"),
            ("BI & Data Visualization", "Microsoft Power BI (DAX, Power Query), Advanced Excel (Pivot Tables, XLOOKUP, Modeling), Oracle Analytics Cloud (OAC), Celonis Process Mining, KPI Dashboards"),
            ("AI Tools & Data Modeling", "Claude Code, Google Antigravity (AI-Assisted EDA & Code Generation), Dimensional Star Schema, Multi-Source ETL, Schema Reconciliation, Identity Resolution")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Data Analyst Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Architected an executive 6-page statewide <strong>Power BI dashboard</strong> across <strong>33 districts</strong>, structuring <strong>4-tier drill-down hierarchies</strong> (District → Facility → Designation → Individual) with dynamic DAX.",
            "Engineered an automated <strong>SQL/ETL pipeline</strong> mapping AEBAS biometric attendance IDs to State Treasury payroll records, closing a tracking gap with <strong>100% data fidelity</strong>.",
            "Formulated a <strong>3-tier defaulter risk model</strong> tracking bonded personnel across facilities, enabling leadership to initiate targeted recoveries.",
            "Reconciled disparate backend database schemas across MariaDB, State Treasury, and National Next-Gen e-Hospital systems, harmonizing staff IDs and OPD records.",
            "Collaborated directly with Department Leadership and NIC teams, conducting exploratory data analysis (EDA) and cleansing across <strong>5 sub-departments</strong>."
        ],
        "proj1_title": "Proactive 5G Handover Prediction (Diffusion Models)",
        "proj1_type": "M.Tech Thesis — Predictive Analytics & Telemetry",
        "proj1_tech": "Python, PyTorch, GRU, DDPM, Scikit-learn, Random Forest, SMOTE, Tomek Links",
        "proj1_bullets": [
            "Developed a GRU diffusion model (DDPM/DDIM) forecasting signal degradation from multivariate <strong>spatio-temporal</strong> telemetry, addressing <strong>98%/2% class imbalance</strong> via <strong>SMOTE + Tomek Links</strong>.",
            "Integrated an ensemble <strong>Random Forest policy</strong> evaluating 50 diffusion trajectories, achieving a <strong>97.64% F1-score</strong> in proactive failure prediction."
        ],
        "proj2_title": "AI vs. Human Text Classification Pipeline",
        "proj2_type": "Applied NLP & Analytics",
        "proj2_tech": "Python, BERT, XGBoost, Bi-LSTM, Transformers, 1D-CNN, Scikit-learn",
        "proj2_bullets": [
            "Engineered dual NLP architectures: extracted 768-dim <strong>BERT embeddings</strong> paired with <strong>XGBoost</strong>, and constructed a deep hybrid Bi-LSTM/1D-CNN/Transformer pipeline.",
            "Applied early stopping and dynamic learning rate decay, achieving <strong>99% Precision</strong> and <strong>98% Recall</strong> in classifying synthetic LLM text against human corpora."
        ],
        "certs": [
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_Business_Analyst_SQL.pdf": {
        "role_title": "BUSINESS ANALYST | SQL & BI",
        "summary": "Business Analyst and SQL Developer with expertise in business problem decomposition, advanced relational database querying, and executive leadership alignment. Proven track record partnering directly with Department Leadership to deconstruct complex statewide operational bottlenecks into 3 structured, data-driven initiatives across 33 districts. Experienced authoring advanced SQL workflows, designing 3-tier risk models, and deploying executive Power BI dashboards.",
        "skills": [
            ("Business & Strategy Analytics", "Business Problem Decomposition, Risk & Defaulter Segmentation, Process Mining (Celonis), Root Cause Analysis, KPI Definition, Operational Strategy"),
            ("Databases & Advanced SQL", "Advanced SQL (Multi-Table Joins, CTEs, Window Functions, Subqueries), MySQL, MariaDB, OracleDB, Query Optimization, Relational Database Design"),
            ("BI, AI Tools & Modeling", "Microsoft Power BI (DAX, Power Query), Advanced Excel, Claude Code, Google Antigravity (AI-Assisted Requirements Decomposition), Star Schema, Python")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Business Analyst & SQL Developer Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Partnered directly with the Department Secretary to deconstruct complex statewide attendance and compliance bottlenecks across <strong>33 districts</strong> into <strong>3 structured initiatives</strong>.",
            "Uncovered compliance gaps by conceptualizing a <strong>3-tier defaulter risk model</strong> for bonded personnel, mapping State Treasury payroll data to track financial leakage.",
            "Authored performant <strong>SQL data pipelines</strong> (multi-way joins, CTEs, window functions) bridging biometric IDs with State Treasury records, resolving discrepancies with <strong>100% data fidelity</strong>.",
            "Coordinated with National Informatics Centre (NIC) engineers to reconcile disparate schemas across MariaDB, State Treasury, and National Next-Gen e-Hospital systems.",
            "Architected an executive 6-page <strong>Power BI dashboard</strong> with <strong>4-tier drill-down hierarchies</strong> (District → Facility → Designation → Individual) tracking core KPIs."
        ],
        "proj1_title": "Proactive Risk Prediction & AI Decision Engine",
        "proj1_type": "Predictive Risk Analytics",
        "proj1_tech": "Python, PyTorch, Scikit-learn, Random Forest, SMOTE, Tomek Links",
        "proj1_bullets": [
            "Built an automated predictive decision model forecasting signal degradation from multivariate <strong>spatio-temporal</strong> telemetry, addressing <strong>98%/2% class imbalance</strong> via <strong>SMOTE + Tomek Links</strong>.",
            "Designed a two-stage classification engine with custom loss objectives, attaining a <strong>97.64% F1-score</strong> to proactively prevent service failures and process bottlenecks."
        ],
        "proj2_title": "Anomalous Content & Text Classification System",
        "proj2_type": "Applied Analytics",
        "proj2_tech": "Python, BERT, XGBoost, Bi-LSTM, Transformers",
        "proj2_bullets": [
            "Architected dual text classification workflows evaluating <strong>BERT + XGBoost</strong> versus hybrid Bi-LSTM/Transformer models across high-volume document sets for verification.",
            "Tuned decision boundaries to achieve <strong>99% Precision</strong> and <strong>98% Recall</strong>, delivering rigorous quantitative benchmarks for automated operational audits."
        ],
        "certs": [
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_PowerBI_Data_Analyst.pdf": {
        "role_title": "POWER BI DATA ANALYST",
        "summary": "Results-oriented Data Analyst and Power BI Developer experienced in designing end-to-end BI solutions, dimensional models, and SQL/ETL pipelines. Proven track record architecting enterprise Power BI dashboards across 33 districts, establishing DAX drill-down hierarchies, and reconciling multi-source datasets across MariaDB and OracleDB. Skilled in inventory analytics (ABC/VED/SDE) and reporting.",
        "skills": [
            ("Business Intelligence & Reporting", "Microsoft Power BI (Desktop & Service), DAX (Time Intelligence, Iterators, CALCULATE), Power Query, Executive Dashboards, Drill-Through, KPI Cards, Row-Level Security (RLS)"),
            ("Database & SQL Development", "Advanced SQL (Complex Joins, Window Functions, CTEs, Subqueries), MySQL, MariaDB, OracleDB, Star/Snowflake Schemas, Query Optimization, View Creation"),
            ("AI Tools & Data Modeling", "Claude Code, Google Antigravity (AI-Assisted DAX & M Code Generation), Schema Reconciliation, Multi-Source ETL, Inventory Analytics (ABC/VED/SDE), Python, Excel")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Data Analyst & Power BI Developer Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Designed and deployed an enterprise 6-page <strong>Power BI dashboard</strong> tracking attendance metrics across <strong>33 districts</strong>, establishing a <strong>4-tier drill-down hierarchy</strong> (District → Facility → Designation → Individual).",
            "Authored complex <strong>DAX measures</strong> (Time-Intelligence, CALCULATE, Dynamic Filtering) computing key KPIs including average working hours, staff counts, and absenteeism rates.",
            "Engineered robust <strong>SQL/ETL pipelines</strong> in MariaDB to clean and transform raw biometric attendance punch records, eliminating duplicate designations and naming discrepancies.",
            "Developed an automated pipeline linking biometric IDs to State Treasury payroll codes, uncovering compliance leakage across bonded medical officers.",
            "Integrated multi-departmental data streams (AEBAS biometric logs, State Treasury payroll, Next-Gen e-Hospital records) into a dimensional model with <strong>100% data fidelity</strong>."
        ],
        "proj1_title": "Proactive Risk Prediction & AI Decision Engine",
        "proj1_type": "Predictive Analytics & Telemetry",
        "proj1_tech": "Python, PyTorch, Scikit-learn, Random Forest, SMOTE, Power BI",
        "proj1_bullets": [
            "Built a predictive forecasting pipeline analyzing multivariate <strong>spatio-temporal</strong> telemetry data, addressing severe <strong>98%/2% class imbalance</strong> via <strong>SMOTE + Tomek Links</strong>.",
            "Trained an ensemble <strong>Random Forest classifier</strong> on 50 simulated diffusion paths, achieving a <strong>97.64% F1-score</strong> in predicting connection failures and presenting insights."
        ],
        "proj2_title": "AI vs. Human Text Classification Pipeline",
        "proj2_type": "Applied NLP & Analytics",
        "proj2_tech": "Python, BERT, XGBoost, Transformers, Power BI Dashboards",
        "proj2_bullets": [
            "Engineered dual NLP evaluation pipelines extracting 768-dim <strong>BERT contextual embeddings</strong> paired with <strong>XGBoost</strong> and deep neural network baselines.",
            "Attained <strong>99% Precision</strong> and <strong>98% Recall</strong> on synthetic text detection; compiled comprehensive model performance metrics and confusion matrices into interactive analytical reports."
        ],
        "certs": [
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_SQL_Developer_Resume.pdf": {
        "role_title": "SQL DEVELOPER",
        "summary": "High-performing SQL Developer and Database Specialist experienced in relational database design, query optimization, and enterprise data reconciliation across state-scale infrastructure. Proven track record engineering complex SQL pipelines (multi-table joins, CTEs, window functions, execution plan tuning) across MariaDB, OracleDB, and MySQL for 33 districts. Proficient in Kimball Star Schema modeling, query latency reduction, and multi-source ETL workflows.",
        "skills": [
            ("Database Engines & Systems", "MySQL, MariaDB, OracleDB, PostgreSQL, SQL Server (T-SQL), Database Architecture, Relational Schema Design, Normalization (1NF–3NF, BCNF), Indexing (B-Tree)"),
            ("Advanced SQL & Optimization", "Complex Multi-Table Joins, CTEs, Window Functions (ROW_NUMBER, DENSE_RANK, LEAD/LAG), Subqueries, Stored Procedures, Views, Execution Plan Tuning"),
            ("AI Tools, ETL & Modeling", "Claude Code, Google Antigravity (AI-Driven Query Tuning & Schema Generation), Star Schema, Schema Reconciliation, Multi-Source ETL, Python (SQLAlchemy), Power BI")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "SQL Developer & Data Analyst Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Engineered complex <strong>SQL scripts</strong> (multi-table joins, CTEs, window functions) across <strong>33 districts</strong> to clean and structure high-volume raw biometric attendance logs in MariaDB.",
            "Designed and implemented an automated <strong>SQL identity-resolution pipeline</strong> bridging AEBAS biometric IDs with State Treasury payroll records, maintaining <strong>100% data integrity</strong>.",
            "Developed an analytical data mart utilizing <strong>Kimball Star Schema principles</strong>, consolidating attendance, doctor service bond registries, and OPD logs from National Next-Gen e-Hospital systems.",
            "Optimized query execution plans by introducing targeted B-Tree indexes and refactoring subqueries into indexed temporary tables, significantly reducing query latency across large tables.",
            "Standardized naming conventions, eliminated duplicate job designation records, and enforced referential integrity rules across heterogeneous production database environments."
        ],
        "proj1_title": "Proactive Risk Prediction & AI Decision Engine",
        "proj1_type": "Database & Machine Learning Pipeline",
        "proj1_tech": "Python, PyTorch, SQL, Scikit-learn, Random Forest, SMOTE",
        "proj1_bullets": [
            "Constructed end-to-end data pipelines to ingest, clean, and preprocess multivariate <strong>spatio-temporal</strong> telemetry datasets, resolving severe <strong>98%/2% class imbalance</strong> via <strong>SMOTE + Tomek Links</strong>.",
            "Implemented data feature stores and evaluated 50 trajectory simulations against physical thresholds, achieving a <strong>97.64% F1-score</strong> with an optimized Random Forest policy engine."
        ],
        "proj2_title": "AI vs. Human Text Classification Pipeline",
        "proj2_type": "Data Pipeline & Applied NLP",
        "proj2_tech": "Python, SQL, BERT, XGBoost, Transformers, Scikit-learn",
        "proj2_bullets": [
            "Constructed end-to-end data pipelines for text classification, preprocessing large-scale corpora and generating 768-dim <strong>BERT contextual embeddings</strong> for <strong>XGBoost</strong> modeling.",
            "Benchmarked against a deep Bi-LSTM/Transformer architecture, achieving <strong>99% Precision</strong> and <strong>98% Recall</strong> with optimized inference latency."
        ],
        "certs": [
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_Data_Science_Resume.pdf": {
        "role_title": "DATA SCIENTIST",
        "summary": "Data Scientist with a strong quantitative foundation (M.Tech CSE, GATE CS qualified) and hands-on expertise in EDA, statistical inference, machine learning, and business impact modeling. Proven track record handling severe class imbalances via SMOTE and deploying predictive regression and classification pipelines. Adept at translating operational problems into rigorous mathematical models.",
        "skills": [
            ("Machine Learning & Statistics", "Machine Learning (Random Forest, XGBoost, KMeans, Regression), Feature Engineering, Resampling (SMOTE + Tomek Links), Hypothesis Testing, R², RMSE, F1-Score"),
            ("GenAI, Deep Learning & AI Tools", "Claude Code, Google Antigravity, Prompt Engineering, Agentic Workflows, Diffusion Models (DDPM/DDIM), Transformers, BERT Embeddings, PyTorch, TensorFlow"),
            ("Programming & Data Systems", "Python (Pandas, NumPy, Scikit-learn), Advanced SQL (Joins, CTEs, Window Functions), MySQL, MariaDB, OracleDB, Microsoft Power BI (DAX), Linux/Bash, Git")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Data Science & Analytics Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Conducted exploratory data analysis (EDA) across <strong>33 districts</strong> on healthcare attendance records, addressing schema anomalies and duplicate designations.",
            "Engineered an automated <strong>SQL/ETL feature pipeline</strong> mapping AEBAS biometric IDs to State Treasury payroll codes, establishing cross-departmental ground-truth records.",
            "Formulated a <strong>3-tier statistical risk classification model</strong> tracking bonded medical personnel across facilities, pinpointing critical compliance gaps.",
            "Reconciled disparate database schemas across MariaDB, State Treasury, and e-Hospital systems with <strong>100% data fidelity</strong>.",
            "Architected an executive 6-page <strong>Power BI dashboard</strong> featuring <strong>4-tier drill-down hierarchies</strong> (District → Facility → Designation → Individual) to present KPIs to leadership."
        ],
        "proj1_title": "Proactive 5G Handover Prediction (Diffusion Models)",
        "proj1_type": "M.Tech Thesis — Predictive Modeling & Telemetry",
        "proj1_tech": "Python, PyTorch, GRU, DDPM/DDIM, Scikit-learn, Random Forest, SMOTE, Tomek Links",
        "proj1_bullets": [
            "Architected a predictive decision engine pairing a <strong>GRU encoder</strong> with a <strong>Diffusion Model (DDPM/DDIM)</strong> simulating 50 paths to forecast signal degradation from multivariate <strong>spatio-temporal</strong> telemetry.",
            "Resolved extreme <strong>98%/2% class imbalance</strong> using a hybrid <strong>SMOTE + Tomek Links</strong> pipeline, implementing a two-stage Random Forest classifier to attain a <strong>97.64% F1-score</strong>."
        ],
        "proj2_title": "AI vs. Human Text Classification Pipeline",
        "proj2_type": "Applied NLP & Deep Learning",
        "proj2_tech": "Python, BERT, XGBoost, Bi-LSTM, Transformers, 1D-CNN, TensorFlow, Scikit-learn",
        "proj2_bullets": [
            "Engineered dual NLP classification architectures: extracted 768-dim dense contextual embeddings from pre-trained <strong>BERT</strong> paired with <strong>XGBoost</strong>, and constructed a deep hybrid Bi-LSTM/Transformer network.",
            "Applied stratified sampling (80/20), text normalization (NFKD), dropout (0.5), and dynamic learning rate decay, achieving <strong>99% Precision</strong> and <strong>98% Recall</strong> in synthetic LLM classification."
        ],
        "certs": [
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_PwC_Tech_Consulting.pdf": {
        "role_title": "TECHNOLOGY CONSULTING INTERN | DATA & ANALYTICS",
        "summary": "Analytical Computer Science postgraduate (M.Tech CSE, GATE CS qualified, IELTS 7.5 Band) with proven experience delivering client-focused data and technology solutions. Demonstrated success partnering with leadership to decompose operational bottlenecks into structured frameworks. Skilled in advanced SQL, relational modeling, Celonis Process Mining, Power BI, and Python in agile consulting.",
        "skills": [
            ("Consulting Methodologies & Analytics", "Business Problem Decomposition, Process Mining (Celonis), Root Cause Analysis, Defaulter Risk Modeling, Requirement Gathering, Client Advisory"),
            ("Data & Database Technologies", "Advanced SQL (Multi-Table Joins, CTEs, Window Functions), MySQL, MariaDB, OracleDB, Dimensional Modeling (Star Schema), Schema Reconciliation, Multi-Source ETL Workflows"),
            ("BI, AI Tools & Prototyping", "Microsoft Power BI (DAX, Power Query), Advanced Excel, Claude Code, Google Antigravity (AI-Assisted Prototyping), Python (Pandas, Scikit-learn), Client Presentations")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Technology Consulting Intern — Data & Analytics",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Partnered directly with Department Secretary and leadership to deconstruct statewide operational bottlenecks across <strong>33 districts</strong> into <strong>3 structured initiatives</strong>.",
            "Conducted diagnostic research and process mapping across government departments, designing a <strong>3-tier defaulter risk model</strong> tracking financial leakage and compliance.",
            "Engineered automated <strong>SQL/ETL data pipelines</strong> (CTEs, window functions) bridging biometric logs with State Treasury payroll records, resolving multi-source schema discrepancies.",
            "Collaborated with National Informatics Centre (NIC) data engineers to reconcile disparate, modular backend database schemas into a unified analytical reporting repository.",
            "Architected an executive 6-page interactive <strong>Power BI reporting suite</strong> featuring <strong>4-tier drill-down hierarchies</strong> (District → Facility → Designation → Individual) for stakeholders."
        ],
        "proj1_title": "Proactive Risk Prediction & AI Decision Engine",
        "proj1_type": "Predictive Analytics & Process Optimization",
        "proj1_tech": "Python, PyTorch, Scikit-learn, Random Forest, SMOTE, Process Modeling",
        "proj1_bullets": [
            "Architected an automated predictive decision model forecasting service failures from complex multivariate <strong>spatio-temporal</strong> telemetry, replacing reactive bottlenecks with proactive automated workflows.",
            "Tackled severe <strong>98%/2% class imbalance</strong> via <strong>SMOTE + Tomek Links</strong> and integrated a two-stage Random Forest classifier with custom loss, attaining a <strong>97.64% F1-score</strong>."
        ],
        "proj2_title": "AI vs. Human Content Classification System",
        "proj2_type": "Applied Analytics & NLP",
        "proj2_tech": "Python, BERT, XGBoost, Transformers, Scikit-learn",
        "proj2_bullets": [
            "Engineered dual NLP evaluation pipelines evaluating <strong>BERT contextual embeddings</strong> paired with <strong>XGBoost</strong> against deep neural network architectures for automated verification.",
            "Achieved <strong>99% Precision</strong> and <strong>98% Recall</strong> on synthetic content detection; compiled findings and performance benchmarks into clear stakeholder presentations."
        ],
        "certs": [
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_Tech_Bus_Engagement.pdf": {
        "role_title": "TECH BUSINESS ENGAGEMENT ANALYST | SUPPLY CHAIN & IT",
        "summary": "Proactive Computer Science postgraduate (M.Tech CSE, GATE CS qualified) with hands-on experience in business engagement, supply chain analytics, process mapping, and automation. Proven track record deconstructing operational bottlenecks into structured data solutions. Skilled in executive Power BI dashboards, SQL pipelines, Celonis Process Mining, and deliverables tracking.",
        "skills": [
            ("Supply Chain & Process Analytics", "Supply Chain Analytics (ISCP Concepts, Demand/Supply Alignment, Inventory: ABC/VED/SDE), Process Mapping (Celonis), Gap Analysis, KPI Tracking"),
            ("AI, Agents & Automation", "AI-Driven Automation, Agentic Frameworks (Claude Code, Google Antigravity), Prompt Engineering, Automated Extraction & Transformation, Process Automation"),
            ("Data Analysis, SQL & Coordination", "Advanced SQL (Complex Joins, CTEs, Window Functions), MySQL, MariaDB, OracleDB, Microsoft Power BI (DAX, Power Query), Advanced Excel, Python, Cross-Functional Collaboration")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Technology Business Engagement & Analytics Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Partnered with senior leadership to deconstruct statewide operational bottlenecks across <strong>33 districts</strong> into <strong>3 structured initiatives</strong>.",
            "Conducted process mapping and data discovery across administrative and treasury systems, identifying operational gaps and formulating a <strong>3-tier risk tracking model</strong>.",
            "Authored performant <strong>SQL data pipelines</strong> (multi-table CTEs, window functions) bridging biometric attendance IDs with State Treasury payroll records, resolving discrepancies.",
            "Coordinated with National Informatics Centre (NIC) engineers and partner teams to track deliverables, reconcile disparate database schemas across MariaDB and OracleDB, ensuring consistency.",
            "Architected an executive 6-page <strong>Power BI reporting suite</strong> featuring <strong>4-tier drill-down hierarchies</strong> (District → Facility → Designation → Individual) and delivered status updates."
        ],
        "proj1_title": "Proactive Risk Prediction & AI Decision Engine",
        "proj1_type": "M.Tech Thesis — Predictive Modeling & Process Optimization",
        "proj1_tech": "Python, PyTorch, GRU, DDPM/DDIM, Scikit-learn, Random Forest, SMOTE",
        "proj1_bullets": [
            "Architected an end-to-end predictive decision engine forecasting service failures from complex multivariate <strong>spatio-temporal</strong> telemetry, replacing reactive manual bottlenecks with automated workflows.",
            "Resolved extreme <strong>98%/2% class imbalance</strong> via <strong>SMOTE + Tomek Links</strong> and integrated a two-stage Random Forest decision policy with custom loss, achieving a <strong>97.64% F1-score</strong>."
        ],
        "proj2_title": "AI vs. Human Content Classification System",
        "proj2_type": "Applied Analytics & NLP",
        "proj2_tech": "Python, BERT, XGBoost, Bi-LSTM, Transformers, Scikit-learn",
        "proj2_bullets": [
            "Conducted comparative analysis and built dual classification architectures evaluating pre-trained <strong>BERT contextual embeddings</strong> with <strong>XGBoost</strong> against a hybrid Bi-LSTM/Transformer network.",
            "Implemented rigorous validation protocols and hyperparameter optimization, attaining <strong>99% Precision</strong> and <strong>98% Recall</strong> for automated content evaluation."
        ],
        "certs": [
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    },

    "Rishi_Thakur_United_Airlines_Data_Scientist.pdf": {
        "role_title": "DATA SCIENTIST | AI & ADVANCED ANALYTICS",
        "summary": "Data Scientist (M.Tech CSE, GATE CS qualified) experienced in deploying machine learning algorithms, deep learning, and agentic AI systems. Proven track record building predictive models (Random Forest, XGBoost), diffusion pipelines (DDPM/DDIM), and NLP systems (BERT, Transformers). Skilled in AI-assisted prototyping, statistical inference, and large-scale SQL.",
        "skills": [
            ("Machine Learning & Statistics", "Machine Learning (Random Forest, XGBoost, KMeans, Regression), Probability & Statistics, Hypothesis Testing, Metrics (R², RMSE, ROC-AUC, F1-Score)"),
            ("GenAI, Agentic Systems & NLP", "Agentic AI (Claude Code, Google Antigravity, Prompt Engineering), NLP (BERT Embeddings, Transformers, Bi-LSTM, 1D-CNN), Text Normalization (NFKD)"),
            ("Deep Learning & Data Systems", "Diffusion Models (DDPM, DDIM), GRU, PyTorch, TensorFlow, Scikit-learn, Resampling (SMOTE + Tomek Links), SQL (CTEs, Window Functions), Power BI")
        ],
        "exp_company": "Chhattisgarh Infotech Promotion Society (CHiPS)",
        "exp_title": "Data Science & Advanced Analytics Intern",
        "exp_sub": "Dept. of Health & Family Welfare, Govt. Of Chhattisgarh",
        "exp_bullets": [
            "Collaborated with leadership across <strong>33 districts</strong> to analyze healthcare datasets, delivering models and recommendations.",
            "Engineered a <strong>3-tier behavioral risk model</strong> (KMeans) on high-volume biometric time-series data to detect attendance leakage, saving public expenditure.",
            "Authored performant <strong>SQL ETL pipelines</strong> (multi-table CTEs, window functions) bridging biometric punch logs with State Treasury records, resolving discrepancies with <strong>100% data fidelity</strong>.",
            "Conducted EDA and correlation assessments on multi-source datasets, partnering with NIC engineers to standardize disparate schemas.",
            "Architected an executive 6-page <strong>Power BI reporting suite</strong> with <strong>4-tier drill-down hierarchies</strong> (District → Facility → Designation → Individual) communicating insights to leadership."
        ],
        "proj1_title": "Proactive Risk Prediction & AI Decision Engine",
        "proj1_type": "M.Tech Thesis — Deep Generative Modeling & Telemetry",
        "proj1_tech": "Python, PyTorch, GRU, DDPM/DDIM, Scikit-learn, Random Forest, SMOTE, Tomek Links",
        "proj1_bullets": [
            "Architected a predictive engine pairing a <strong>GRU encoder</strong> with a <strong>Diffusion Model (DDPM/DDIM)</strong> to forecast signal drops from <strong>spatio-temporal</strong> telemetry.",
            "Resolved severe <strong>98%/2% class imbalance</strong> using a hybrid <strong>SMOTE + Tomek Links</strong> pipeline, training a two-stage Random Forest classifier to attain a <strong>97.64% F1-score</strong>."
        ],
        "proj2_title": "AI vs. Human Text Classification Pipeline",
        "proj2_type": "Applied NLP, LLM Evaluation & Deep Learning",
        "proj2_tech": "Python, BERT, XGBoost, Bi-LSTM, Transformers, 1D-CNN, TensorFlow, Scikit-learn",
        "proj2_bullets": [
            "Constructed dual NLP pipelines extracting 768-dim dense embeddings from pre-trained <strong>BERT</strong> with <strong>XGBoost</strong>, benchmarked against a deep Bi-LSTM/Transformer/1D-CNN network.",
            "Applied stratified sampling (80/20), text normalization (NFKD), dropout (0.5), and dynamic learning rate decay, achieving <strong>99% Precision</strong> and <strong>98% Recall</strong> in synthetic LLM text detection."
        ],
        "certs": [
            "<strong>Qualified GATE Computer Science (CS)</strong>, 2024",
            "<strong>Python for Data Science, AI &amp; Development</strong> (Coursera)",
            "<strong>Celonis Foundations</strong> &amp; <strong>Process Management Foundations</strong> (Credly)",
            "<strong>SQL for Beginners &amp; Database Design</strong> (Udemy)",
            "<strong>Microsoft Power BI Desktop for Business Intelligence</strong> (Udemy)",
            "<strong>IELTS Academic:</strong> 7.5 Band Score"
        ]
    }
}

def find_libreoffice():
    """Finds LibreOffice / soffice executable across Windows and Linux."""
    if os.name == 'nt':
        candidates = [
            r"C:\Program Files\LibreOffice\program\soffice.exe",
            r"C:\Program Files (x86)\LibreOffice\program\soffice.exe",
            "soffice.exe"
        ]
        for c in candidates:
            if os.path.exists(c):
                return c
        return "soffice"
    else:
        return "libreoffice"

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = script_dir
    build_dir = os.path.join(script_dir, ".build_cache")
    os.makedirs(build_dir, exist_ok=True)

    lo_bin = find_libreoffice()

    results = {}

    for filename, data in DATA.items():
        skills_html = ''.join([f'    <div class="skills-p">&bull;&nbsp; <strong>{cat}:</strong> {content}</div>\n' for cat, content in data['skills']])
        bullets_html = ''.join([f'    <div class="bullet-item">&bull;&nbsp; {b}</div>\n' for b in data['exp_bullets']])
        p1_bullets = ''.join([f'    <div class="bullet-item">&bull;&nbsp; {b}</div>\n' for b in data['proj1_bullets']])
        p2_bullets = ''.join([f'    <div class="bullet-item">&bull;&nbsp; {b}</div>\n' for b in data['proj2_bullets']])
        certs_html = ''.join([f'    <div class="bullet-item">&bull;&nbsp; {c}</div>\n' for c in data['certs']])

        html_content = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
{BASE_CSS}
</style>
</head>
<body>
    <div class="header">
        <h1>Rishi Thakur</h1>
        <div class="role-title">{data['role_title']}</div>
        <div class="contact">
            Bengaluru, India &bull; +91 8109830219 &bull; <a href="mailto:rishi_th219@proton.me">rishi_th219@proton.me</a> &bull; <a href="https://rishi-th219.github.io/portfolio/">rishi-th219.github.io/portfolio</a><br>
            <a href="https://linkedin.com/in/rishi-thakur-b665a4298">linkedin.com/in/rishi-thakur-b665a4298</a> &bull; <a href="https://github.com/rishi-th219">github.com/rishi-th219</a>
        </div>
    </div>

    <div class="section-title">Professional Summary</div>
    <div class="summary-text">
        {data['summary']}
    </div>

    <div class="section-title">Technical Skills</div>
{skills_html}
    <div class="section-title">Work Experience</div>
    <div class="exp-item">
        <div class="exp-line1"><strong>{data['exp_company']}</strong> | Raipur, India | 06/2025 – 03/2026</div>
        <div class="exp-line2">{data['exp_title']} &bull; {data['exp_sub']}</div>
    </div>
{bullets_html}
    <div class="section-title">Key Projects</div>
    <div class="proj-block">
        <div class="proj-title-line"><strong>{data['proj1_title']}</strong> &bull; <em>{data['proj1_type']}</em></div>
        <div class="proj-tech-line"><em>Technologies: {data['proj1_tech']}</em></div>
    </div>
{p1_bullets}
    <div class="proj-block">
        <div class="proj-title-line"><strong>{data['proj2_title']}</strong> &bull; <em>{data['proj2_type']}</em></div>
        <div class="proj-tech-line"><em>Technologies: {data['proj2_tech']}</em></div>
    </div>
{p2_bullets}
    <div class="section-title">Education</div>
    <div class="edu-block">
        <div class="edu-item"><strong>M.Tech in Computer Science &amp; Engineering</strong> | IIIT Naya Raipur (CGPA: 7.90) | 08/2024 – 07/2026</div>
        <div class="edu-item"><strong>B.Tech in Computer Science</strong> | Amity University Chhattisgarh (CGPA: 7.71) | 08/2019 – 06/2023</div>
    </div>

    <div class="section-title">Certifications &amp; Key Qualifications</div>
{certs_html}
</body>
</html>"""

        base_name = os.path.splitext(filename)[0]
        html_path = os.path.join(build_dir, f"{base_name}.html")
        pdf_tmp_path = os.path.join(build_dir, filename)
        target_pdf_path = os.path.join(output_dir, filename)

        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html_content)

        profile_dir = os.path.join(build_dir, "libo_profile")
        os.makedirs(profile_dir, exist_ok=True)

        cmd = [
            lo_bin,
            f"-env:UserInstallation=file:///{profile_dir.replace(os.sep, '/')}",
            "--headless",
            "--convert-to", "pdf:writer_pdf_Export",
            html_path,
            "--outdir", build_dir
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL)

        # Move to target output directory
        if os.path.exists(target_pdf_path):
            os.remove(target_pdf_path)
        os.replace(pdf_tmp_path, target_pdf_path)

        # Quick validation using python pypdf or external tools if available
        word_count = len(re.sub(r'<[^>]+>', ' ', html_content).split())
        results[filename] = {
            "path": target_pdf_path,
            "status": "GENERATED"
        }
        print(f"Generated: {filename}")

    print("\nAll 9 role-tailored resumes compiled successfully!")

if __name__ == "__main__":
    main()
