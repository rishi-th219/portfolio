// Technical case studies and architecture code for Rishi Thakur

// Full Case Studies detailed metadata for modal popups
const caseStudiesData = {
  ecommerce: {
    badge: "DATA ENGINEERING & ANALYTICS",
    title: "End-to-End E-Commerce ELT & Customer Intelligence Platform",
    subtitle: "Built an automated data pipeline using dbt, Airflow, and PostgreSQL to model customer cohorts and RFM segments in Power BI.",
    clientType: "Engineering Project / E-Commerce Retail",
    timeline: "Architecture & Implementation",
    metrics: [
      { label: "Pipeline Runtime", value: "85% faster" },
      { label: "Frequency", value: "Daily Automated" },
      { label: "Data Quality", value: "40+ dbt Tests" },
      { label: "Segmentation", value: "6 RFM Tiers" }
    ],
    problem: "Raw transactional data was siloed across operational PostgreSQL tables, e-commerce exports, and marketing CSV files. Business reporting was manual, slow, and lacked consistent definitions, preventing clear visibility into customer cohort retention and lifetime value.",
    solution: "1. Containerized Apache Airflow in Docker to orchestrate scheduled daily data ingestion.\n2. Built modular dbt transformation layers (staging, intermediate, and marts) implementing a clean Kimball Star Schema (dim_customers, dim_products, fact_orders).\n3. Engineered customer RFM (Recency, Frequency, Monetary) quantiles and 12-month cohort retention matrices.\n4. Connected the data marts to Power BI with automated refresh and dynamic DAX measures.",
    stack: ["PostgreSQL", "dbt Core", "Apache Airflow", "Docker", "Power BI", "DAX", "Python"],
    githubUrl: "https://github.com/rishi-th219/ecommerce-elt-local",
    deliverables: [
      "Containerized Docker + Airflow DAG orchestration pipeline",
      "Production dbt models with 40+ schema & integrity tests",
      "Kimball Star Schema data mart tables in PostgreSQL",
      "Interactive Power BI executive dashboard with cohort drill-downs"
    ]
  },

  telco5g: {
    badge: "PREDICTIVE ML & RESEARCH",
    title: "Proactive 5G mmWave Handover Prediction System",
    subtitle: "Built a generative Diffusion Model + Random Forest pipeline replacing reactive countdown timers with 97.64% failure prevention.",
    clientType: "M.Tech Thesis Research / Telecom Telemetry",
    timeline: "Academic R&D Project",
    metrics: [
      { label: "F1-Score", value: "97.64%" },
      { label: "Trajectories", value: "50 Paths" },
      { label: "Class Imbalance", value: "98:2 Ratio" },
      { label: "Inference", value: "Edge-Ready" }
    ],
    problem: "In 5G mmWave networks, physical obstacles cause sudden signal drops within milliseconds. Standard network protocols are reactive—they wait for degradation and rely on countdown timers (TTT), leading to frequent radio link failures.",
    solution: "1. Encoded historical signal telemetry using a GRU memory network to compress temporal fading trends.\n2. Conditioned a Denoising Diffusion Probabilistic Model (DDPM/DDIM) to forecast 50 distinct realistic future signal trajectories.\n3. Handled severe 98:2 real-world class imbalance using a hybrid SMOTE + Tomek Links pipeline.\n4. Implemented an explainable Random Forest policy engine that votes on simulated trajectories to trigger proactive handovers before connection drops.",
    stack: ["Python", "PyTorch", "Diffusion Models (DDPM)", "GRU", "Random Forest", "SMOTE+Tomek", "Pandas"],
    githubUrl: "https://github.com/rishi-th219/Proactive-Handover-Prediction-in-5G-using-Diffusion-Models",
    deliverables: [
      "End-to-end Python / PyTorch training and simulation pipeline",
      "Custom dual-masking loss implementation (cell & time-point)",
      "Technical research paper and performance validation benchmarks"
    ]
  },

  textnlp: {
    badge: "NLP & APPLIED MACHINE LEARNING",
    title: "High-Precision AI vs. Human Text Detection Engine",
    subtitle: "Built hybrid Deep Learning (Bi-LSTM + Transformer + 1D-CNN) and BERT + XGBoost pipelines achieving 99% precision.",
    clientType: "Natural Language Processing R&D",
    timeline: "Applied ML Project",
    metrics: [
      { label: "Precision", value: "99.0%" },
      { label: "Recall", value: "98.0%" },
      { label: "F1-Score", value: "98.5%" },
      { label: "Vocabulary", value: "20,000 Words" }
    ],
    problem: "With the proliferation of LLM-generated text, detection tools often suffer from high False Positive rates—falsely penalizing human writers while missing subtle repetitive robotic phrasing.",
    solution: "1. Lightweight Baseline: Extracted dense 768-dimensional contextual embeddings from pre-trained BERT [CLS] tokens paired with XGBoost for low-latency scoring.\n2. Deep Learning Hybrid: Built an architecture combining trainable word embeddings, Bidirectional LSTM (analyzing sentence flow), Multi-Head Attention Transformer Blocks (global coherence), and a 1D-CNN (automated n-gram scanning for robotic syntax).\n3. Incorporated Early Stopping, Dropout (0.5), and ReduceLROnPlateau scheduling to ensure robust generalization.",
    stack: ["Python", "TensorFlow / Keras", "BERT", "XGBoost", "Bi-LSTM", "Transformers", "1D-CNN"],
    githubUrl: "",
    deliverables: [
      "Data preprocessing, normalization, and tokenization modules",
      "Dual model training scripts with cross-validation",
      "Performance evaluation report with confusion matrix & ROC curves"
    ]
  }
};

