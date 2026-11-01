// Rishi Thakur — Executive Portfolio Interactivity Engine
// Data Analyst | Business Intelligence | SQL & Analytics Engineering

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupProjectFilters();
  setupCaseStudyModals();
  setupResumeModal();
  setupArchitectureExplorer();
  setupMobileMenu();
  setupBackToTop();
  setupContactForm();
});

// 1. Theme Toggle Engine (Dark / Light Mode)
function setupThemeToggle() {
  const toggleBtns = [
    document.getElementById("themeToggleBtn"),
    document.getElementById("themeToggleBtnMobileTop"),
    document.getElementById("themeToggleBtnMobile")
  ].filter(Boolean);

  const getSavedTheme = () => {
    const saved = localStorage.getItem("rishi-portfolio-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("rishi-portfolio-theme", theme);
  };

  // Initialize theme
  applyTheme(getSavedTheme());

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  });
}

// 2. Project Category Filter Engine
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const categories = (card.dataset.category || "").split(" ");
        if (filter === "all" || categories.includes(filter)) {
          card.classList.remove("hidden");
          card.classList.add("flex");
        } else {
          card.classList.add("hidden");
          card.classList.remove("flex");
        }
      });
    });
  });
}

// 3. Technical Case Study Modal Engine
function setupCaseStudyModals() {
  const modal = document.getElementById("caseStudyModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const triggerBtns = document.querySelectorAll(".view-case-study-btn");

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const studyKey = btn.dataset.study;
      const data = typeof caseStudiesData !== "undefined" ? caseStudiesData[studyKey] : null;
      if (!data) return;

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

      // Render Structured Solution Points
      const solutionEl = document.getElementById("modalSolution");
      if (solutionEl) {
        solutionEl.innerHTML = "";
        const points = (data.solution || "").split(/\n(?=\d+\.\s)/g);
        points.forEach(point => {
          const cleanPoint = point.trim();
          if (!cleanPoint) return;
          const p = document.createElement("p");
          p.className = "text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal";
          p.textContent = cleanPoint;
          solutionEl.appendChild(p);
        });
      }

      // Render Pipeline Steps Flow
      const pipelineWrapper = document.getElementById("modalPipelineWrapper");
      const pipelineEl = document.getElementById("modalPipeline");
      if (pipelineWrapper && pipelineEl) {
        if (data.pipeline) {
          pipelineWrapper.classList.remove("hidden");
          const steps = data.pipeline.split("→").map(s => s.trim());
          pipelineEl.innerHTML = steps.map((step, idx) => `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200">
              <span class="text-sky-600 dark:text-sky-400 font-semibold">${idx + 1}.</span> ${step}
            </span>
            ${idx < steps.length - 1 ? '<span class="text-slate-400 dark:text-slate-600 font-mono text-xs select-none">→</span>' : ''}
          `).join(" ");
        } else {
          pipelineWrapper.classList.add("hidden");
        }
      }

      // Render Stack Pills
      const stackEl = document.getElementById("modalStack");
      if (stackEl && data.stack) {
        stackEl.innerHTML = data.stack.map(tech => `
          <span class="tech-pill">${tech}</span>
        `).join("");
      }

      // Render Deliverables List
      const delivEl = document.getElementById("modalDeliverables");
      if (delivEl && data.deliverables) {
        delivEl.innerHTML = data.deliverables.map(deliv => `
          <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal">
            <span class="text-sky-600 dark:text-sky-400 font-mono select-none font-semibold">✓</span>
            <span>${deliv}</span>
          </li>
        `).join("");
      }

      // GitHub Code Link
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
    });
  });

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}

// 4. Curated 7-Track ATS Resume Modal Engine
function setupResumeModal() {
  const modal = document.getElementById("resumeModal");
  const closeBtn = document.getElementById("resumeModalCloseBtn");
  const triggerBtns = document.querySelectorAll(".view-resume-btn");
  const tabBtns = document.querySelectorAll(".resume-tab-btn");
  const modalTitle = document.getElementById("resumeModalTitle");
  const modalBody = document.getElementById("resumeModalBody");
  const pdfDownloadBtn = document.getElementById("resumeModalPdfBtn");

  if (!modal || !modalBody) return;

  const renderResumeTrack = (trackKey) => {
    if (typeof resumesData === "undefined" || !resumesData[trackKey]) return;
    const r = resumesData[trackKey];

    // Update active tab buttons
    tabBtns.forEach(t => {
      if (t.dataset.resumeTab === trackKey) {
        t.className = "resume-tab-btn px-2.5 py-1 rounded text-xs font-mono transition-colors border bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 border-slate-900 dark:border-slate-100 shadow-sm cursor-pointer";
      } else {
        t.className = "resume-tab-btn px-2.5 py-1 rounded text-xs font-mono transition-colors border bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400 cursor-pointer";
      }
    });

    if (modalTitle) modalTitle.textContent = `${r.title} — ATS Resume`;
    if (pdfDownloadBtn) {
      pdfDownloadBtn.href = r.pdf;
      pdfDownloadBtn.download = r.pdf.split("/").pop();
    }

    // Render formatted ATS content
    modalBody.innerHTML = `
      <div class="space-y-6 max-w-3xl mx-auto">
        <!-- Header -->
        <div class="text-center pb-4 border-b border-slate-200 dark:border-slate-800">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">${r.header.name}</h2>
          <div class="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1 flex flex-wrap items-center justify-center gap-2">
            <span>${r.header.location}</span>
            <span>•</span>
            <a href="mailto:${r.header.email}" class="text-sky-600 dark:text-sky-400 hover:underline">${r.header.email}</a>
            <span>•</span>
            <span>${r.header.phone}</span>
          </div>
          <div class="text-xs font-mono text-slate-500 mt-1 flex items-center justify-center gap-2">
            <a href="${r.header.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:underline">LinkedIn ↗</a>
            <span>•</span>
            <a href="${r.header.github}" target="_blank" rel="noopener noreferrer" class="hover:underline">GitHub ↗</a>
          </div>
        </div>

        <!-- Professional Summary -->
        <div class="space-y-2">
          <h3 class="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">Professional Summary</h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">${r.summary}</p>
        </div>

        <!-- Technical Skills -->
        <div class="space-y-2">
          <h3 class="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">Technical Skills</h3>
          <div class="grid grid-cols-1 gap-1 text-xs">
            ${Object.entries(r.skills).map(([cat, skills]) => `
              <div class="flex flex-col sm:flex-row sm:items-start gap-1 py-1 border-b border-slate-100 dark:border-slate-800/40">
                <span class="font-mono text-slate-900 dark:text-slate-100 font-medium sm:w-44 shrink-0">${cat}:</span>
                <span class="text-slate-600 dark:text-slate-400">${skills}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Experience -->
        <div class="space-y-4">
          <h3 class="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">Professional Experience</h3>
          ${r.experience.map(exp => `
            <div class="space-y-2 text-left">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span class="font-bold text-slate-900 dark:text-white text-sm">${exp.role}</span>
                  <span class="text-xs font-mono text-sky-600 dark:text-sky-400 ml-1">@ ${exp.company}</span>
                </div>
                <span class="text-xs font-mono text-slate-500">${exp.timeline}</span>
              </div>
              <ul class="space-y-1.5 pl-3">
                ${exp.bullets.map(b => `
                  <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                    <span class="text-slate-400 dark:text-slate-600 font-mono select-none">•</span>
                    <span>${b}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          `).join("")}
        </div>

        <!-- Education -->
        <div class="space-y-3">
          <h3 class="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">Education</h3>
          <div class="space-y-2 text-xs">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span class="font-bold text-slate-900 dark:text-slate-100">${r.education.mtech.degree}</span>
                <span class="text-slate-500 ml-1">(${r.education.mtech.institute})</span>
              </div>
              <div class="font-mono text-slate-500">
                <span>${r.education.mtech.score}</span> • <span>${r.education.mtech.timeline}</span>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span class="font-bold text-slate-900 dark:text-slate-100">${r.education.btech.degree}</span>
                <span class="text-slate-500 ml-1">(${r.education.btech.institute})</span>
              </div>
              <div class="font-mono text-slate-500">
                <span>${r.education.btech.score}</span> • <span>${r.education.btech.timeline}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="space-y-2">
          <h3 class="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">Certifications & Qualifications</h3>
          <div class="text-xs text-slate-600 dark:text-slate-400 space-y-1">
            ${r.certifications.map(c => `<div>• ${c}</div>`).join("")}
          </div>
        </div>
      </div>
    `;
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const track = btn.dataset.resume || "data_analyst";
      renderResumeTrack(track);
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    });
  });

  tabBtns.forEach(tab => {
    tab.addEventListener("click", () => {
      renderResumeTrack(tab.dataset.resumeTab);
    });
  });

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}

// 5. System Architecture Explorer Engine
function setupArchitectureExplorer() {
  const container = document.getElementById("archContentContainer");
  const tabs = document.querySelectorAll(".arch-tab-btn");

  if (!container || !tabs.length || typeof architectureData === "undefined") return;

  const renderArch = (key) => {
    const data = architectureData[key];
    if (!data) return;

    tabs.forEach(t => {
      if (t.dataset.arch === key) {
        t.className = "arch-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-sm cursor-pointer";
      } else {
        t.className = "arch-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer";
      }
    });

    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span class="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold tracking-wider uppercase">${data.badge}</span>
            <h4 class="text-base sm:text-lg font-semibold text-slate-950 dark:text-white mt-0.5">${data.title}</h4>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 max-w-md font-normal leading-relaxed">${data.description}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-2">
          ${data.steps.map((st) => `
            <div class="arch-node p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2 relative group">
              <div>
                <div class="flex items-center justify-between text-xs font-mono">
                  <span class="text-sky-600 dark:text-sky-400 font-bold">${st.num}</span>
                  <span class="text-[10px] uppercase tracking-wider text-slate-400">${st.label}</span>
                </div>
                <h5 class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">${st.title}</h5>
                <div class="text-[11px] font-mono text-slate-500 mt-0.5 italic">${st.tech}</div>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal pt-1">${st.detail}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  };

  tabs.forEach(t => {
    t.addEventListener("click", () => renderArch(t.dataset.arch));
  });

  // Initial render
  renderArch("health_bi");
}

// 6. Mobile Menu Drawer
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !menu) return;

  const toggle = () => {
    menu.classList.toggle("hidden");
  };

  menuBtn.addEventListener("click", toggle);
  links.forEach(l => l.addEventListener("click", () => menu.classList.add("hidden")));
}

// 7. Back-To-Top Button
function setupBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.remove("hidden");
      btn.classList.add("flex");
    } else {
      btn.classList.add("hidden");
      btn.classList.remove("flex");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 8. Contact Form Handler
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("contactFormStatus");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName")?.value || "";
    const email = document.getElementById("senderEmail")?.value || "";
    const message = document.getElementById("senderMessage")?.value || "";

    const mailtoLink = `mailto:rishi_th219@proton.me?subject=${encodeURIComponent("Portfolio Inquiry from " + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
    window.location.href = mailtoLink;

    if (statusMsg) {
      statusMsg.textContent = "Opening your email client to send message to rishi_th219@proton.me...";
      statusMsg.classList.remove("hidden");
      setTimeout(() => statusMsg.classList.add("hidden"), 5000);
    }
  });
}
