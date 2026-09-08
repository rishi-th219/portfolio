// Sample interactive datasets for portfolio live dashboard showcase
const dashboardData = {
  ecommerce: {
    kpis: {
      revenue: "$284,500",
      revenueGrowth: "+18.4% MoM",
      orders: "3,842",
      ordersGrowth: "+14.2% MoM",
      aov: "$74.05",
      aovGrowth: "+3.8% MoM",
      retention: "36.2%",
      retentionGrowth: "+5.1% MoM"
    },
    chart: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Actual Revenue ($K)",
          data: [145, 162, 180, 175, 198, 215, 230, 242, 260, 275, 290, 310],
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56, 189, 248, 0.15)",
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: "#38bdf8",
          pointRadius: 4
        },
        {
          label: "Target Revenue ($K)",
          data: [140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305],
          borderColor: "#64748b",
          borderDash: [5, 5],
          borderWidth: 2,
          fill: false,
          tension: 0.2,
          pointRadius: 0
        }
      ]
    },
    secondaryChart: {
      type: "bar",
      labels: ["New Visitors", "Added to Cart", "Checkout Started", "Purchased", "Repeat Customers"],
      data: [120000, 28500, 9400, 3842, 1390],
      colors: ["#334155", "#475569", "#0284c7", "#38bdf8", "#10b981"]
    }
  },
  healthcare: {
    kpis: {
      revenue: "33 Districts",
      revenueGrowth: "100% Statewide",
      orders: "94.8%",
      ordersGrowth: "+12.4% vs Baseline",
      aov: "52,400",
      aovGrowth: "+19.0% Volume",
      retention: "3 Defaulter",
      retentionGrowth: "Zero Leakage Goal"
    },
    chart: {
      labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8", "Wk 9", "Wk 10"],
      datasets: [
        {
          label: "Attendance Compliance Rate (%)",
          data: [68, 71, 74, 79, 82, 86, 89, 91, 93, 95],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.15)",
          fill: true,
          tension: 0.35,
          borderWidth: 3,
          pointBackgroundColor: "#10b981",
          pointRadius: 4
        },
        {
          label: "Discrepancy Flags Resolved",
          data: [340, 295, 240, 190, 160, 120, 90, 65, 42, 28],
          borderColor: "#f59e0b",
          borderDash: [4, 4],
          borderWidth: 2,
          fill: false,
          tension: 0.3,
          pointRadius: 0,
          yAxisID: "y1"
        }
      ]
    },
    secondaryChart: {
      type: "doughnut",
      labels: ["Primary Health (PHC)", "Community Health (CHC)", "District Hospital (DH)", "Civil Hospital", "Medical College"],
      data: [42, 26, 16, 10, 6],
      colors: ["#0284c7", "#38bdf8", "#10b981", "#6366f1", "#f59e0b"]
    }
  },
  inventory: {
    kpis: {
      revenue: "$1.4M",
      revenueGrowth: "Annual Spend Managed",
      orders: "98.2%",
      ordersGrowth: "+6.5% Vital Availability",
      aov: "14 Days",
      aovGrowth: "-22% Lead Time",
      retention: "$140K",
      retentionGrowth: "Stockout Waste Saved"
    },
    chart: {
      labels: ["Category A (Top 70% Value)", "Category B (20% Value)", "Category C (10% Value)"],
      datasets: [
        {
          label: "Inventory Value ($K)",
          data: [980, 280, 140],
          backgroundColor: ["#38bdf8", "#6366f1", "#64748b"],
          borderRadius: 6
        }
      ]
    },
    secondaryChart: {
      type: "pie",
      labels: ["Vital (V) - Zero Tolerance", "Essential (E) - High Priority", "Desirable (D) - Standard"],
      data: [48, 37, 15],
      colors: ["#ef4444", "#f59e0b", "#10b981"]
    }
  }
};

// Full Case Studies detailed metadata for modal popups
const caseStudiesData = {
  ecommerce: {
    badge: "E-COMMERCE & MODERN DATA STACK",
    title: "End-to-End E-Commerce ELT & Customer Intelligence Platform",
    subtitle: "Built automated dbt + Airflow pipelines modeling RFM segmentation, cohort retention, and executive KPI reporting in Power BI.",
    clientType: "DTC Brand / E-Commerce Retailer",
    timeline: "3 Weeks",
    metrics: [
      { label: "Pipeline Runtime", value: "85% faster" },
      { label: "Reporting Frequency", value: "Daily Automated" },
      { label: "Data Quality Pass Rate", value: "100% Tested" },
      { label: "Customer Segments", value: "6 RFM Tiers" }
    ],
    problem: "The client operated a growing DTC e-commerce store with transaction logs spread across PostgreSQL, Shopify exports, and marketing CSVs. Executive reporting required 10+ hours of manual Excel wrangling each Monday, data definitions differed between departments, and leadership lacked visibility into customer cohort retention and high-value customer churn.",
    solution: "Architected a scalable, production-grade ELT data pipeline: \n1. Containerized Apache Airflow orchestrating scheduled daily extraction and loading.\n2. Built modular dbt transformations modeling raw tables into clean Star-Schema marts (dim_customers, dim_products, fact_orders).\n3. Engineered customer RFM (Recency, Frequency, Monetary) segmentation and 12-month cohort retention matrices.\n4. Delivered an interactive Power BI Executive Cockpit with automated refresh, drill-downs, and automated margin alerting.",
    stack: ["PostgreSQL", "dbt Core", "Apache Airflow", "Docker", "Power BI", "DAX", "Python"],
    githubUrl: "https://github.com/rishi-th219/ecommerce-elt-local",
    deliverables: [
      "Containerized Docker + Airflow orchestration pipeline",
      "Production dbt models with 40+ schema & integrity tests",
      "Executive Power BI dashboard (.pbix + published service)",
      "Comprehensive data dictionary & client video handover"
    ]
  },
  healthcare: {
    badge: "GOVERNMENT HEALTHCARE & WORKFORCE BI",
    title: "Statewide Healthcare Workforce & Attendance Intelligence",
    subtitle: "Consolidated unlinked biometrics, payroll, and facility records across 33 districts and 1,000+ public health facilities.",
    clientType: "State Dept of Health / Public Sector Agency",
    timeline: "Long-term engagement",
    metrics: [
      { label: "Coverage", value: "33 Districts" },
      { label: "Data Reconciliation", value: "No Shared Key" },
      { label: "Hierarchy Levels", value: "6 Tiers (PHC to DH)" },
      { label: "Audit Accuracy", value: "100% Traceable" }
    ],
    problem: "The Directorate of Health Services tracked thousands of medical officers, specialists, and contractual staff across primary health centers (PHC), community hospitals (CHC), and district hospitals (DH). Two disconnected systems—biometric attendance (AEBAS) and state treasury payroll—lacked a unified unique key. Administrators had no way to verify doctor postings, resulting in attendance leakage and ghost rosters.",
    solution: "1. Developed an identity-resolution ETL layer linking Aadhaar attendance IDs to Treasury employee codes using multi-attribute fuzzy matching and programmatic rules.\n2. Categorized non-compliant records into 3 actionable defaulter buckets (never joined, joined on paper only, or registered but irregular).\n3. Constructed a 6-page interactive Power BI reporting suite with executive state-level cards drilling down into district, facility, designation, and individual staff drill-through.\n4. Integrated e-Hospital outpatient volumes to cross-examine doctor roster compliance against patient consultations.",
    stack: ["MariaDB", "Power BI", "DAX", "Power Query M", "Advanced SQL", "ETL Identity Resolution"],
    githubUrl: "",
    deliverables: [
      "Multi-system ETL matching logic with data validation checks",
      "6-page executive-to-operational drilldown dashboard suite",
      "Automated defaulter classification and treasury reconciliation reports",
      "Departmental briefing decks for executive leadership"
    ]
  },
  inventory: {
    badge: "SUPPLY CHAIN & INVENTORY OPTIMIZATION",
    title: "Pharmaceutical Supply Chain Multi-Criteria Inventory Analytics",
    subtitle: "Applied ABC-VED-SDE analysis to optimize critical medicine procurement and reduce out-of-stock risk across public hospitals.",
    clientType: "Healthcare Logistics & Procurement Corporation",
    timeline: "2 Weeks",
    metrics: [
      { label: "Procurement Cycle", value: "-22% Days" },
      { label: "Vital Drug Availability", value: "98.2%" },
      { label: "Dead Stock Identified", value: "$140K+" },
      { label: "SKUs Classified", value: "1,200+ Drugs" }
    ],
    problem: "Hospital procurement was prone to frequent emergency orders and stockouts of life-saving medicines, while substantial capital remained tied up in low-demand, non-critical pharmaceuticals. Managers used blunt single-variable metrics that treated vital cardiovascular drugs the same as routine over-the-counter consumables.",
    solution: "1. Built a multi-criteria inventory optimization model in Oracle DB combining ABC analysis (annual financial spend), VED analysis (clinical criticality: Vital, Essential, Desirable), and SDE analysis (procurement lead-time difficulty).\n2. Built an automated matrix in Oracle Analytics Cloud classifying drugs into 9 strategic management quadrants (e.g., AV = high cost + vital; CV = low cost + vital).\n3. Automated reorder point buffers and safety stock alerts to eliminate stockout hazards for high-risk life-saving inventory.",
    stack: ["Oracle Database", "Oracle Analytics Cloud", "SQL Window Functions", "Inventory Modeling", "Excel Advanced"],
    githubUrl: "",
    deliverables: [
      "Automated SQL calculation scripts for ABC/VED/SDE matrix",
      "Interactive inventory control cockpit with reorder point triggers",
      "Procurement bottleneck root-cause analysis report"
    ]
  },
  telco5g: {
    badge: "PREDICTIVE ANALYTICS & MACHINE LEARNING",
    title: "Proactive 5G mmWave Handover Prediction System",
    subtitle: "Built a diffusion model + Random Forest pipeline replacing reactive connection timers with 97.6% failure prevention.",
    clientType: "Telecom R&D / Network Optimization",
    timeline: "Research & Development",
    metrics: [
      { label: "F1-Score", value: "97.64%" },
      { label: "Trajectories Simulated", value: "50 Paths" },
      { label: "Imbalance Handled", value: "98:2 Ratio" },
      { label: "Latency Target", value: "Real-Time Edge" }
    ],
    problem: "Physical blockages in mmWave 5G networks cause sudden 30 dB signal crashes within milliseconds. Standard network protocol triggers are reactive and rely on countdown timers, leading to high radio link failures (RLFs) and dropped video or telemetry feeds.",
    solution: "Engineered a proactive predictive decision system: a GRU temporal encoder compresses signal fading history; a Denoising Diffusion Probabilistic Model (DDPM/DDIM) forecasts 50 realistic potential future signal trajectories; an explainable Random Forest policy engine calculates probability of failure to trigger proactive handovers before the connection drops.",
    stack: ["Python", "PyTorch", "Diffusion Models (DDPM)", "GRU", "Random Forest", "SMOTE+Tomek", "Pandas"],
    githubUrl: "https://github.com/rishi-th219/Proactive-Handover-Prediction-in-5G-using-Diffusion-Models",
    deliverables: [
      "End-to-end ML training & simulation pipeline",
      "Edge-deployable inference benchmark with dual-masking loss",
      "Technical paper & comprehensive performance validation charts"
    ]
  }
};
