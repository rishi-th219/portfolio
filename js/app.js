// Rishi Thakur — Editorial Analytics Portfolio
// Nav scroll frosted state, custom dot cursor, mobile drawer, reveals,
// Case Study modal, ATS Resume modal, In-Browser SQL Sandbox modal, & Contact form.

document.addEventListener("DOMContentLoaded", () => {
  setupNavScroll();
  setupCustomCursor();
  setupMobileDrawer();
  setupScrollReveals();
  setupCaseStudyModal();
  setupResumeModal();
  setupSqlModal();
  setupContactModal();
  setupPrivacyModal();
  setupCopyEmail();
  setupLocalTimeClock();
});

// -----------------------------------------------------------------------------
// 1. Frosted Navigation Bar & Footer Blur Overlay Handling
// -----------------------------------------------------------------------------
function setupNavScroll() {
  const nav = document.getElementById("siteNav");
  const blurOverlay = document.getElementById("blurOverlay");
  const footer = document.getElementById("siteFooter");
  if (!nav) return;

  const updateScrollState = () => {
    const scrolled = window.scrollY > 24;
    nav.classList.toggle("is-scrolled", scrolled);

    if (blurOverlay && footer) {
      const footerTop = footer.getBoundingClientRect().top;
      blurOverlay.style.opacity = footerTop < window.innerHeight - 40 ? "0" : "1";
    }
  };

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();
}

// -----------------------------------------------------------------------------
// 2. Custom Fine-Pointer Dot Cursor
// -----------------------------------------------------------------------------
function setupCustomCursor() {
  const cursor = document.getElementById("customCursor");
  if (!cursor) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.body.classList.add("has-custom-cursor");

  let mouseX = -100;
  let mouseY = -100;
  let rafId = null;

  const render = () => {
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    rafId = null;
  };

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const target = e.target;
    const isInteractive = !!(target && target.closest("a, button, input, textarea, [role='button']"));
    const isDark = !!(target && target.closest("footer, #mobileDrawer"));

    cursor.classList.toggle("is-hover", isInteractive);
    cursor.classList.toggle("is-dark-surface", isDark);

    if (!rafId) {
      rafId = requestAnimationFrame(render);
    }
  }, { passive: true });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
  });
}

// -----------------------------------------------------------------------------
// 3. Full-Screen #171717 Mobile Drawer
// -----------------------------------------------------------------------------
function setupMobileDrawer() {
  const openBtn = document.getElementById("mobileMenuOpenBtn");
  const closeBtn = document.getElementById("mobileMenuCloseBtn");
  const drawer = document.getElementById("mobileDrawer");
  if (!openBtn || !drawer) return;

  const links = drawer.querySelectorAll(".mobile-drawer-link");

  const open = () => {
    drawer.classList.add("is-open");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  };

  const close = () => {
    drawer.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    openBtn.focus();
  };

  openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  links.forEach(l => l.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      close();
    }
  });
}

// -----------------------------------------------------------------------------
// 4. Scroll Reveals (IntersectionObserver)
// -----------------------------------------------------------------------------
function setupScrollReveals() {
  const els = document.querySelectorAll(".reveal-on-scroll");
  if (!els.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  els.forEach(el => observer.observe(el));
}

// -----------------------------------------------------------------------------
// 5. Case Study Detail Modal
// -----------------------------------------------------------------------------
function setupCaseStudyModal() {
  const modal = document.getElementById("caseStudyModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const triggers = document.querySelectorAll(".view-case-study-btn");
  if (!modal) return;

  let lastFocus = null;

  triggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.study;
      const data = typeof caseStudiesData !== "undefined" ? caseStudiesData[key] : null;
      if (!data) return;

      lastFocus = document.activeElement;

      const setEl = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text || "";
      };

      setEl("modalBadge", data.badge);
      setEl("modalTitle", data.title);
      setEl("modalSubtitle", data.subtitle);
      setEl("modalClient", data.clientType);
      setEl("modalTimeline", data.timeline);
      setEl("modalProblem", data.problem);

      const solutionEl = document.getElementById("modalSolution");
      if (solutionEl) {
        solutionEl.innerHTML = "";
        (data.solution || "").split(/\n(?=\d+\.\s)/g).forEach(pt => {
          const clean = pt.trim();
          if (!clean) return;
          const p = document.createElement("p");
          p.className = "text-xs sm:text-sm text-[#111111] leading-relaxed";
          p.textContent = clean;
          solutionEl.appendChild(p);
        });
      }

      const pipelineWrap = document.getElementById("modalPipelineWrapper");
      const pipelineEl = document.getElementById("modalPipeline");
      if (pipelineWrap && pipelineEl) {
        if (data.pipeline) {
          pipelineWrap.classList.remove("hidden");
          const steps = data.pipeline.split("→").map(s => s.trim());
          pipelineEl.innerHTML = steps.map((step, i) => `
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-black/10 text-xs text-[#111111]">
              <span class="text-[#006b58] font-medium">${i + 1}.</span> ${step}
            </span>
            ${i < steps.length - 1 ? '<span class="text-[#5a5a5a]" aria-hidden="true">→</span>' : ""}
          `).join(" ");
        } else {
          pipelineWrap.classList.add("hidden");
        }
      }

      const stackEl = document.getElementById("modalStack");
      if (stackEl && data.stack) {
        stackEl.innerHTML = data.stack.map(t => `
          <span class="px-2.5 py-1 rounded-full bg-[#f5f5f5] border border-black/10 text-xs text-[#111111]">${t}</span>
        `).join("");
      }

      const delivEl = document.getElementById("modalDeliverables");
      if (delivEl && data.deliverables) {
        delivEl.innerHTML = data.deliverables.map(d => `
          <li class="flex items-start gap-2 text-xs sm:text-sm text-[#111111]">
            <i class="ph ph-check text-[#006b58] text-sm mt-0.5"></i>
            <span>${d}</span>
          </li>
        `).join("");
      }

      const gitLink = document.getElementById("modalGithubLink");
      if (gitLink) {
        if (data.githubUrl) {
          gitLink.href = data.githubUrl;
          gitLink.classList.remove("hidden");
        } else {
          gitLink.classList.add("hidden");
        }
      }

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    });
  });

  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
  });
}

// -----------------------------------------------------------------------------
// 6. ATS Resumes Studio Modal
// -----------------------------------------------------------------------------
function setupResumeModal() {
  const modal = document.getElementById("resumeModal");
  const closeBtn = document.getElementById("resumeModalCloseBtn");
  const triggers = document.querySelectorAll(".view-resume-btn");
  const tabs = document.querySelectorAll(".resume-tab-btn");
  const titleEl = document.getElementById("resumeModalTitle");
  const bodyEl = document.getElementById("resumeModalBody");
  const pdfBtn = document.getElementById("resumeModalPdfBtn");
  if (!modal || !bodyEl) return;

  let lastFocus = null;

  const renderTrack = (key) => {
    if (typeof resumesData === "undefined" || !resumesData[key]) return;
    const r = resumesData[key];

    tabs.forEach(t => {
      const active = t.dataset.resumeTab === key;
      t.className = active
        ? "resume-tab-btn px-3 py-1 rounded-full text-xs font-medium bg-[#111111] text-white"
        : "resume-tab-btn px-3 py-1 rounded-full text-xs font-medium bg-[#f5f5f5] text-[#5a5a5a] hover:text-[#111111]";
    });

    if (titleEl) titleEl.textContent = `${r.title || r.role} — ATS Resume`;
    if (pdfBtn) {
      pdfBtn.href = r.pdf;
      pdfBtn.download = r.pdf.split("/").pop();
    }

    bodyEl.innerHTML = `
      <div class="space-y-6 max-w-3xl mx-auto text-left">
        <div class="text-center pb-4 border-b border-black/10">
          <h2 class="text-2xl font-semibold text-[#111111] tracking-tight">Rishi Thakur</h2>
          <div class="text-xs font-mono-code text-[#5a5a5a] mt-1 flex flex-wrap items-center justify-center gap-2">
            <span>Bengaluru, India</span>
            <span>•</span>
            <a href="mailto:rishi_th219@proton.me" class="text-[#006b58] hover:underline">rishi_th219@proton.me</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/rishi-thakur-b665a4298/" target="_blank" rel="noopener noreferrer" class="hover:text-[#006b58] underline">LinkedIn ↗</a>
            <span>•</span>
            <a href="https://github.com/rishi-th219" target="_blank" rel="noopener noreferrer" class="hover:text-[#006b58] underline">GitHub ↗</a>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-xs font-mono-code uppercase tracking-wider text-[#006b58] font-medium border-b border-black/10 pb-1">Professional Summary</h3>
          <p class="text-xs sm:text-sm text-[#111111] leading-relaxed">${r.summary || ""}</p>
        </div>

        <div class="space-y-2">
          <h3 class="text-xs font-mono-code uppercase tracking-wider text-[#006b58] font-medium border-b border-black/10 pb-1">Technical Skills</h3>
          <div class="space-y-1.5 text-xs">
            ${Array.isArray(r.skills) ? r.skills.map(s => `<div class="py-1 border-b border-black/5 text-[#111111] leading-relaxed">${s}</div>`).join("") : ""}
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-xs font-mono-code uppercase tracking-wider text-[#006b58] font-medium border-b border-black/10 pb-1">Professional Experience</h3>
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span class="font-medium text-[#111111] text-sm">${r.exp_role || "Data Analyst & BI Developer Intern"}</span>
            <span class="text-xs font-mono-code text-[#5a5a5a]">06/2025 – 03/2026</span>
          </div>
          <ul class="space-y-1.5 pl-1">
            ${Array.isArray(r.exp_bullets) ? r.exp_bullets.map(b => `
              <li class="flex items-start gap-2 text-xs sm:text-sm text-[#111111] leading-relaxed">
                <i class="ph ph-dot text-[#006b58] text-base select-none"></i>
                <span>${b}</span>
              </li>
            `).join("") : ""}
          </ul>
        </div>

        ${Array.isArray(r.projects) && r.projects.length ? `
          <div class="space-y-3">
            <h3 class="text-xs font-mono-code uppercase tracking-wider text-[#006b58] font-medium border-b border-black/10 pb-1">Key Technical Projects</h3>
            ${r.projects.map(p => `
              <div class="space-y-1">
                <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span class="font-medium text-[#111111] text-sm">${p.name}</span>
                    <span class="text-xs font-mono-code text-[#5a5a5a] ml-1">(${p.tools})</span>
                  </div>
                  <span class="text-xs font-mono-code text-[#006b58]">${p.tag || ""}</span>
                </div>
                <ul class="space-y-1 pl-1">
                  ${Array.isArray(p.bullets) ? p.bullets.map(pb => `
                    <li class="flex items-start gap-2 text-xs sm:text-sm text-[#111111] leading-relaxed">
                      <i class="ph ph-dot text-[#006b58] text-base select-none"></i>
                      <span>${pb}</span>
                    </li>
                  `).join("") : ""}
                </ul>
              </div>
            `).join("")}
          </div>
        ` : ""}

        <div class="space-y-2.5">
          <h3 class="text-xs font-mono-code uppercase tracking-wider text-[#006b58] font-medium border-b border-black/10 pb-1">Education &amp; Credentials</h3>
          <div class="space-y-2 text-xs">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span><strong class="text-[#111111]">M.Tech in Computer Science &amp; Engineering</strong> (IIIT Naya Raipur)</span>
              <span class="font-mono-code text-[#5a5a5a]"><strong class="text-[#111111]">CGPA: 7.90</strong> • 2024–2026</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span><strong class="text-[#111111]">B.Tech in Computer Science &amp; Engineering</strong> (Amity University Chhattisgarh)</span>
              <span class="font-mono-code text-[#5a5a5a]"><strong class="text-[#111111]">CGPA: 7.71</strong> • 2019–2023</span>
            </div>
            <div class="pt-1 text-[#5a5a5a]">
              <strong class="text-[#111111]">Accreditations:</strong> GATE CS 2024 Qualified • IELTS Academic Band 7.5 (C1) • Upskilling: AWS Cloud &amp; Data Engineer Associate
            </div>
          </div>
        </div>
      </div>
    `;
  };

  triggers.forEach(btn => {
    btn.addEventListener("click", () => {
      lastFocus = document.activeElement;
      renderTrack(btn.dataset.resume || "data_analyst");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    });
  });

  tabs.forEach(tab => {
    tab.addEventListener("click", () => renderTrack(tab.dataset.resumeTab));
  });

  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
  });
}

// -----------------------------------------------------------------------------
// 7. Interactive Client-Side SQL Sandbox Modal
// -----------------------------------------------------------------------------
function setupSqlModal() {
  const modal = document.getElementById("sqlModal");
  const closeBtn = document.getElementById("sqlModalCloseBtn");
  const openBtns = [
    document.getElementById("openSqlSandboxTopBtn"),
    document.getElementById("openSqlSandboxMidBtn"),
    document.getElementById("openSqlSandboxSvcBtn"),
    document.getElementById("openSqlSandboxProcBtn")
  ].filter(Boolean);

  const sqlInput = document.getElementById("sqlQueryInput");
  const runBtn = document.getElementById("sqlRunBtn");
  const csvBtn = document.getElementById("sqlCsvBtn");
  const presetBtns = document.querySelectorAll(".sql-preset-btn");
  const statusEl = document.getElementById("sqlExecStatus");
  const outputEl = document.getElementById("sqlOutputTable");
  if (!modal || !sqlInput || !runBtn || !outputEl) return;

  let lastFocus = null;
  let lastResultRows = [];

  const dataset = {
    technical_capabilities: [
      { domain: "SQL & Modeling", primary_tools: "PostgreSQL, MySQL, MariaDB, OracleDB", architectural_focus: "Kimball Star Schema, CTEs, Window Functions", status: "Production" },
      { domain: "Business Intelligence", primary_tools: "Power BI Desktop, DAX, Power Query", architectural_focus: "Multi-level Drilldowns, Executive Cockpits", status: "Production" },
      { domain: "Data Pipelines (ELT)", primary_tools: "Python 3.11+, Pandas, Airflow, dbt-core", architectural_focus: "Multi-source Extraction, SCD2 Modeling", status: "Production" },
      { domain: "Cloud Data Engineering", primary_tools: "AWS (S3, Athena, Glue, Redshift)", architectural_focus: "Cloud Lakehouse, CLF-C02 & DEA-C01 Target", status: "Active Upskilling" },
      { domain: "Systems & Diagnostics", primary_tools: "Fedora Linux, Windows 11", architectural_focus: "Bash Automation, PowerShell Diagnostics", status: "Daily OS" }
    ],
    chips_architecture: [
      { stage: "01. Ingestion", data_sources: "AEBAS Biometrics + Treasury Payroll", method: "Automated Daily Extraction", storage: "MariaDB Staging" },
      { stage: "02. Resolution", data_sources: "Orphaned Staff & Facility Codes", method: "Deterministic Key Matching & CTEs", storage: "Cleaned Dimensions" },
      { stage: "03. Modeling", data_sources: "Statewide Attendance Records", method: "Central Fact_Attendance_Daily", storage: "Star Schema Warehouse" },
      { stage: "04. Governance", data_sources: "Consecutive Absence Telemetry", method: "3-Tier DAX Risk Stratification", storage: "Executive Power BI" }
    ],
    academic_credentials: [
      { qualification: "M.Tech CSE", institution: "IIIT Naya Raipur", score_cgpa: "7.90 CGPA", period: "2024–2026", focus: "Diffusion Models & Applied ML" },
      { qualification: "B.Tech CSE", institution: "Amity University CG", score_cgpa: "7.71 CGPA", period: "2019–2023", focus: "DBMS, Algorithms & Data Structures" },
      { qualification: "GATE CS 2024", institution: "National Benchmark", score_cgpa: "Qualified", period: "2024", focus: "Computer Science & IT" },
      { qualification: "IELTS Academic", institution: "IDP Education", score_cgpa: "Band 7.5 (C1)", period: "2024", focus: "Proficient English User" },
      { qualification: "AWS Accreditations", institution: "Amazon Web Services", score_cgpa: "Active Upskilling", period: "2026", focus: "Cloud Practitioner & DEA-C01" }
    ],
    featured_projects: [
      { project_name: "CHiPS Attendance & Payroll", domain: "Govt. Healthcare Intelligence", core_stack: "SQL, Star Schema, Power BI, DAX", impact: "Eliminated Ghost Shifts & Salary Leakage" },
      { project_name: "E-Commerce Local ELT", domain: "Analytics Engineering", core_stack: "dbt-core, Airflow, PostgreSQL, Kimball SCD2", impact: "Automated Schema Tests & Cohort Marts" },
      { project_name: "5G mmWave Handover AI", domain: "Telecommunications & ML", core_stack: "PyTorch, GRU, DDPM Diffusion", impact: "Proactive Cell Switching Before Signal Drop" },
      { project_name: "Hospital Medicine Matrix", domain: "Pharmaceutical Logistics", core_stack: "OracleDB, Advanced Excel, ABC/VED", impact: "Zero Stockouts of Life-Saving Drugs" },
      { project_name: "AutoJobHunt Pipeline", domain: "Recruitment Automation", core_stack: "Async Python, Playwright, OpenXML", impact: "Automated ATS Scraping & Tracking" }
    ]
  };

  const escapeHtml = (s) => String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const renderTable = (rows) => {
    lastResultRows = rows || [];
    if (csvBtn) {
      csvBtn.disabled = !lastResultRows.length;
      csvBtn.classList.toggle("opacity-40", !lastResultRows.length);
    }
    if (!rows || !rows.length) {
      outputEl.innerHTML = `<p class="p-4 text-xs font-mono-code text-[#5a5a5a]">0 rows returned.</p>`;
      return;
    }
    const headers = Object.keys(rows[0]);
    let html = `<div class="overflow-x-auto"><table class="sql-result-table"><thead><tr>`;
    headers.forEach(h => { html += `<th>${escapeHtml(h.replace(/_/g, " "))}</th>`; });
    html += `</tr></thead><tbody>`;
    rows.forEach(row => {
      html += `<tr>`;
      headers.forEach(h => { html += `<td>${escapeHtml(row[h])}</td>`; });
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    outputEl.innerHTML = html;
  };

  const resolveTable = (name) => {
    const clean = (name || "").toLowerCase().replace(/[`"';]/g, "");
    if (dataset[clean]) return clean;
    if (["skills", "capabilities", "tech_stack"].includes(clean)) return "technical_capabilities";
    if (["chips", "architecture", "chips_pipeline"].includes(clean)) return "chips_architecture";
    if (["credentials", "education", "certifications"].includes(clean)) return "academic_credentials";
    if (["projects"].includes(clean)) return "featured_projects";
    return null;
  };

  const executeSql = () => {
    const rawInput = sqlInput.value.trim().replace(/;+\s*$/, "");
    const lower = rawInput.toLowerCase();
    const t0 = performance.now();

    if (lower === "show tables" || lower === "\\dt") {
      const metaRows = Object.entries(dataset).map(([tbl, r]) => ({
        table_name: tbl,
        row_count: r.length,
        columns: Object.keys(r[0]).join(", ")
      }));
      const ms = (performance.now() - t0 + 0.02).toFixed(2);
      renderTable(metaRows);
      if (statusEl) statusEl.innerHTML = `<span class="text-[#006b58] font-medium">Query OK</span> · ${metaRows.length} tables (${ms}ms)`;
      return;
    }

    const match = rawInput.match(/^select\s+([\s\S]+?)\s+from\s+([a-zA-Z0-9_`"]+)(?:\s+([\s\S]+))?$/i);
    if (!match) {
      const ms = (performance.now() - t0 + 0.02).toFixed(2);
      renderTable([]);
      outputEl.innerHTML = `<p class="p-4 text-xs font-mono-code text-rose-700">Syntax Error: Expected SELECT &lt;cols&gt; FROM &lt;table&gt; [WHERE ...] [ORDER BY ...] [LIMIT n] or SHOW TABLES.</p>`;
      if (statusEl) statusEl.textContent = `Syntax Error · ${ms}ms`;
      return;
    }

    const colsRaw = match[1].trim();
    const tableKey = resolveTable(match[2]);
    const tail = (match[3] || "").trim();

    if (!tableKey || !dataset[tableKey]) {
      const ms = (performance.now() - t0 + 0.02).toFixed(2);
      renderTable([]);
      outputEl.innerHTML = `<p class="p-4 text-xs font-mono-code text-rose-700">Relation "${escapeHtml(match[2])}" not found. Try: technical_capabilities, chips_architecture, academic_credentials, featured_projects.</p>`;
      if (statusEl) statusEl.textContent = `Relation Error · ${ms}ms`;
      return;
    }

    let rows = dataset[tableKey].map(r => ({ ...r }));

    const whereMatch = tail.match(/\bwhere\s+([a-zA-Z0-9_]+)\s+(=|like)\s+['"]([^'"]*)['"]/i);
    if (whereMatch) {
      const [, wCol, op, val] = whereMatch;
      const colLower = wCol.toLowerCase();
      rows = rows.filter(row => {
        const k = Object.keys(row).find(x => x.toLowerCase() === colLower);
        if (!k) return false;
        const cell = String(row[k]).toLowerCase();
        const needle = val.toLowerCase();
        if (op.toLowerCase() === "like") {
          const rx = "^" + needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/%/g, ".*").replace(/_/g, ".") + "$";
          return new RegExp(rx, "i").test(cell);
        }
        return cell === needle;
      });
    }

    const orderMatch = tail.match(/\border\s+by\s+([a-zA-Z0-9_]+)(?:\s+(asc|desc))?/i);
    if (orderMatch) {
      const [, oCol, dir] = orderMatch;
      const colLower = oCol.toLowerCase();
      const desc = (dir || "asc").toLowerCase() === "desc";
      rows.sort((a, b) => {
        const k = Object.keys(a).find(x => x.toLowerCase() === colLower);
        if (!k) return 0;
        return desc ? String(b[k]).localeCompare(String(a[k])) : String(a[k]).localeCompare(String(b[k]));
      });
    }

    if (/^count\(\s*\*\s*\)(?:\s+as\s+([a-zA-Z0-9_]+))?$/i.test(colsRaw)) {
      const aliasMatch = colsRaw.match(/\bas\s+([a-zA-Z0-9_]+)$/i);
      const alias = aliasMatch ? aliasMatch[1] : "total_rows";
      rows = [{ [alias]: rows.length }];
    } else if (colsRaw !== "*") {
      const req = colsRaw.split(",").map(c => c.trim().toLowerCase()).filter(Boolean);
      const keys = Object.keys(dataset[tableKey][0]);
      const valid = req.map(rc => keys.find(k => k.toLowerCase() === rc)).filter(Boolean);
      if (!valid.length) {
        renderTable([]);
        outputEl.innerHTML = `<p class="p-4 text-xs font-mono-code text-rose-700">Column(s) not found. Available: ${escapeHtml(keys.join(", "))}</p>`;
        return;
      }
      rows = rows.map(r => {
        const p = {};
        valid.forEach(c => { p[c] = r[c]; });
        return p;
      });
    }

    const limitMatch = tail.match(/\blimit\s+(\d+)/i);
    if (limitMatch) {
      const n = parseInt(limitMatch[1], 10);
      if (!isNaN(n) && n >= 0) rows = rows.slice(0, n);
    }

    const ms = (performance.now() - t0 + 0.02).toFixed(2);
    renderTable(rows);
    if (statusEl) statusEl.innerHTML = `<span class="text-[#006b58] font-medium">Query OK</span> · ${rows.length} row${rows.length === 1 ? "" : "s"} (${ms}ms)`;
  };

  const open = () => {
    lastFocus = document.activeElement;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    executeSql();
    sqlInput.focus();
  };

  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  openBtns.forEach(b => b.addEventListener("click", open));
  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
  });

  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.query) {
        sqlInput.value = btn.dataset.query;
        executeSql();
      }
    });
  });

  runBtn.addEventListener("click", executeSql);
  sqlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeSql();
    }
  });

  if (csvBtn) {
    csvBtn.addEventListener("click", () => {
      if (!lastResultRows.length) return;
      const headers = Object.keys(lastResultRows[0]);
      const lines = [
        headers.join(","),
        ...lastResultRows.map(r => headers.map(h => `"${String(r[h]).replace(/"/g, '""')}"`).join(","))
      ];
      const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "rishi_thakur_query_result.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
}

// -----------------------------------------------------------------------------
// 8. Contact Note Modal & Form Validation
// -----------------------------------------------------------------------------
function setupContactModal() {
  const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openContactModalBtn");
  const closeBtn = document.getElementById("contactModalCloseBtn");
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("contactFormStatus");
  if (!modal || !openBtn || !form) return;

  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    const nameInput = document.getElementById("senderName");
    if (nameInput) nameInput.focus();
  };

  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("senderName")?.value || "").trim();
    const email = (document.getElementById("senderEmail")?.value || "").trim();
    const msg = (document.getElementById("senderMessage")?.value || "").trim();

    if (!name || !email || !msg) {
      if (statusEl) {
        statusEl.textContent = "Please fill in your name, email, and message.";
        statusEl.className = "text-xs text-center text-rose-700 block";
      }
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (statusEl) {
        statusEl.textContent = "Please enter a valid email address.";
        statusEl.className = "text-xs text-center text-rose-700 block";
      }
      return;
    }

    const mailto = `mailto:rishi_th219@proton.me?subject=${encodeURIComponent("Portfolio Inquiry from " + name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${msg}`)}`;
    window.location.href = mailto;

    if (statusEl) {
      statusEl.textContent = "Opening your email client to send message to rishi_th219@proton.me.";
      statusEl.className = "text-xs text-center text-[#006b58] block";
    }
  });
}

// -----------------------------------------------------------------------------
// 9. Privacy Notice Modal
// -----------------------------------------------------------------------------
function setupPrivacyModal() {
  const modal = document.getElementById("privacyModal");
  const trigger = document.getElementById("privacyModalTrigger");
  const closeBtn = document.getElementById("privacyModalCloseBtn");
  if (!modal || !trigger) return;

  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  };

  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  trigger.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
  });
}

// -----------------------------------------------------------------------------
// 10. Copy Email & IST Clock
// -----------------------------------------------------------------------------
function setupCopyEmail() {
  const btn = document.getElementById("copyEmailBtn");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const email = "rishi_th219@proton.me";
    try {
      await navigator.clipboard.writeText(email);
      const orig = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(() => { btn.textContent = orig; }, 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

function setupLocalTimeClock() {
  const el = document.getElementById("localTimeClock");
  if (!el) return;
  const tick = () => {
    try {
      el.textContent = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }) + " IST";
    } catch {
      el.textContent = "IST";
    }
  };
  tick();
  setInterval(tick, 30000);
}
