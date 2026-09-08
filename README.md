# 📊 Rishi Thakur — Senior Data & BI Analyst Portfolio

A high-converting, interactive portfolio website engineered specifically for freelancing and client acquisition. Unlike typical data science portfolios that show static screenshots, this portfolio includes **live interactive BI dashboards**, a **freelance scope & rate estimator**, and deep-dive case studies covering **Power BI, SQL, dbt, Apache Airflow, and Machine Learning**.

---

## 🚀 Quick Start (Local Preview)

Run a local web server in this directory:

```bash
# Using Python
python3 -m http.server 3000

# OR using Node / npx
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌟 Key Features

1. **Live Interactive BI Dashboard Engine**:
   - Prospects can interact with real-time KPI metrics, line graphs, and category breakdowns across 3 domains:
     - 🛒 **E-Commerce & Cohort Retention** (GMV, AOV, Funnel)
     - 🏥 **Healthcare & Workforce Capacity** (33 Districts, Attendance compliance)
     - 📦 **Inventory & Supply Chain Analytics** (Multi-criteria ABC/VED matrix)
   - Powered by Chart.js with responsive dark-mode aesthetics.

2. **Client-Centric Freelance Offerings**:
   - Executive & KPI BI Dashboards (Power BI, DAX, Tableau, Looker Studio)
   - Automated SQL & Modern ELT Pipelines (PostgreSQL, dbt Core, Apache Airflow)
   - Customer Retention & E-Commerce Analytics (RFM Segmentation, Cohort LTV)
   - Inventory & Supply Chain Optimization (ABC/VED/SDE)
   - Messy Excel to Automated BI Migration
   - Query Tuning & Database Performance Audits

3. **In-Depth Case Studies with Interactive Modals**:
   - *Case Study 1*: Modern E-Commerce ELT & Retention Engine (Airflow + dbt + Postgres + Power BI)
   - *Case Study 2*: Statewide Healthcare Workforce Intelligence (33 Districts, Identity Resolution)
   - *Case Study 3*: Pharmaceutical Supply Chain Multi-Criteria ABC/VED Optimization
   - *Case Study 4*: Proactive 5G mmWave Handover Predictive System (97.64% F1-score)

4. **Interactive Freelance Project Estimator**:
   - Lets prospects select project type, number of data sources, and timeline urgency.
   - Calculates estimated budget and delivery timeline on the fly.
   - "Request This Exact Scope" button auto-populates the inquiry form.

5. **Direct Lead Capture & Contact**:
   - One-click copy email button.
   - Direct mailto link generator with auto-formatted project specifications.
   - Direct links to LinkedIn, GitHub, and Upwork.

---

## 🌐 1-Click Free Deployment Guide

### Option 1: GitHub Pages (Recommended — 100% Free)
1. Initialize git and push to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Freelance Data Analyst Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
3. Your portfolio is live at `https://YOUR_USERNAME.github.io/portfolio/`!

### Option 2: Vercel (Instant Deploy)
1. Install Vercel CLI: `npm i -g vercel` (or link your GitHub repo on [vercel.com](https://vercel.com)).
2. Run:
   ```bash
   vercel
   ```
3. Follow the 10-second prompt to deploy live with HTTPS and custom domain support.

---

## 🛠️ Tech Stack

- **Markup & Styling**: HTML5, Tailwind CSS (via CDN), Google Fonts (Inter + JetBrains Mono)
- **Visuals & Charts**: Chart.js (Responsive Canvas API)
- **Architecture**: Zero-build static architecture (blazingly fast, zero dependency lock-in, hostable anywhere)
- **Design Tokens**: Deep Slate (#070a13), Electric Cyan (#38bdf8), Indigo (#6366f1), Emerald (#10b981)

---

## 📁 File Structure

```text
portfolio/
├── index.html           # Main high-conversion portfolio page
├── css/
│   └── styles.css       # Custom glassmorphic styling, ambient glow, animations
├── js/
│   ├── app.js           # Core UI logic, chart rendering, modals, estimator
│   └── chart-data.js    # Interactive chart datasets and case study details
├── assets/              # Optional folder for profile headshot, screenshots, resume PDF
├── README.md            # Project documentation & deployment guide
└── FREELANCE_PLAYBOOK.md # Actionable step-by-step strategy to land your first 3 paying clients
```
