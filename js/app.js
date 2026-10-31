// Portfolio Interactivity Engine for Rishi Thakur
// Data Analyst | Business Intelligence | SQL & Analytics Engineering

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupProjectFilters();
  setupCaseStudyModals();
  setupResumeModal();
  setupMobileMenu();
  setupContactForm();
  setupBackToTop();
  setupArchitectureExplorer();
  setupAiChatAssistant();
});

// 1. Project Category Filter Engine
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

// 2. Case Study Modal Engine
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

      // Render Solution as formatted structured points
      const solutionEl = document.getElementById("modalSolution");
      if (solutionEl) {
        solutionEl.innerHTML = "";
        const points = (data.solution || "").split(/\n(?=\d+\.\s)/g);
        points.forEach(point => {
          const cleanPoint = point.trim();
          if (!cleanPoint) return;
          const p = document.createElement("p");
          p.className = "text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal";
          p.textContent = cleanPoint;
          solutionEl.appendChild(p);
        });
      }

      // Render Pipeline Flow
      const pipelineWrapper = document.getElementById("modalPipelineWrapper");
      const pipelineEl = document.getElementById("modalPipeline");
      if (pipelineWrapper && pipelineEl) {
        if (data.pipeline) {
          pipelineWrapper.classList.remove("hidden");
          const steps = data.pipeline.split("→").map(s => s.trim());
          pipelineEl.innerHTML = steps.map((step, idx) => `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 text-xs font-mono text-neutral-800 dark:text-neutral-200">
              <span class="text-sky-600 dark:text-sky-400 font-semibold">${idx + 1}.</span> ${step}
            </span>
            ${idx < steps.length - 1 ? '<span class="text-neutral-400 dark:text-neutral-600 font-mono text-xs select-none">→</span>' : ''}
          `).join(" ");
        } else {
          pipelineWrapper.classList.add("hidden");
        }
      }

      // Metrics container
      const metricsContainer = document.getElementById("modalMetrics");
      if (metricsContainer) {
        metricsContainer.innerHTML = "";
        (data.metrics || []).forEach(m => {
          const div = document.createElement("div");
          div.className = "p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-center";
          div.innerHTML = `
            <div class="text-[11px] text-neutral-500 dark:text-neutral-400 font-normal uppercase tracking-wider font-mono">${m.label}</div>
            <div class="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 font-mono mt-0.5">${m.value}</div>
          `;
          metricsContainer.appendChild(div);
        });
      }

      // Tech Stack
      const stackContainer = document.getElementById("modalStack");
      if (stackContainer) {
        stackContainer.innerHTML = "";
        (data.stack || []).forEach(tech => {
          const span = document.createElement("span");
          span.className = "tech-pill text-xs";
          span.textContent = tech;
          stackContainer.appendChild(span);
        });
      }

      // Deliverables
      const delivContainer = document.getElementById("modalDeliverables");
      if (delivContainer) {
        delivContainer.innerHTML = "";
        (data.deliverables || []).forEach(d => {
          const li = document.createElement("li");
          li.className = "flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300 font-normal";
          li.innerHTML = `
            <span class="text-sky-600 dark:text-sky-400 mt-0.5 select-none font-mono">→</span>
            <span>${d}</span>
          `;
          delivContainer.appendChild(li);
        });
      }

      // GitHub Code Link
      const githubLinkEl = document.getElementById("modalGithubLink");
      if (githubLinkEl) {
        if (data.githubUrl) {
          githubLinkEl.href = data.githubUrl;
          githubLinkEl.classList.remove("hidden");
          githubLinkEl.classList.add("inline-flex");
        } else {
          githubLinkEl.classList.add("hidden");
          githubLinkEl.classList.remove("inline-flex");
        }
      }

      // Show Modal
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
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// 3. Mobile Navigation Menu
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // Close when tapping outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });
}

// 4. Contact Form & Clipboard Copy
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const feedbackEl = document.getElementById("contactFeedback");
  const targetEmail = "rishi_th219@proton.me";

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(targetEmail).then(() => {
        const originalContent = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <div class="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400">
            <span>✓</span>
            <span>Copied: ${targetEmail}</span>
          </div>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalContent;
        }, 2200);
      }).catch(() => {
        // Fallback prompt
        prompt("Copy email address:", targetEmail);
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName")?.value || "";
      const email = document.getElementById("contactEmail")?.value || "";
      const role = document.getElementById("contactRole")?.value || "General Inquiry";
      const message = document.getElementById("contactMessage")?.value || "";

      const subject = encodeURIComponent(`[Portfolio Contact - ${role}] from ${name}`);
      const body = encodeURIComponent(`Hi Rishi,\n\n${message}\n\nBest regards,\n${name}\n${email}`);

      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      if (feedbackEl) {
        feedbackEl.classList.remove("hidden");
        feedbackEl.innerHTML = `
          <div class="p-3.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm flex items-center gap-3">
            <span class="font-mono text-sky-600 dark:text-sky-400">→</span>
            <div>Opening your email client... You can also email directly to <span class="font-mono text-neutral-900 dark:text-neutral-100 font-medium">${targetEmail}</span>.</div>
          </div>
        `;
      }
    });
  }
}

// 5. Theme Toggle Functionality (Light / Dark Mode)
function setupThemeToggle() {
  const toggleBtns = [
    document.getElementById("themeToggleBtn"),
    document.getElementById("themeToggleBtnMobile"),
    document.getElementById("themeToggleBtnMobileTop")
  ].filter(Boolean);

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      applyTheme(!isCurrentlyDark);
    });
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches);
    }
  });
}

// 6. Smooth Scroll back to top
function setupBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
      backToTopBtn.classList.add("opacity-100");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none");
      backToTopBtn.classList.remove("opacity-100");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 7. Interactive Resume Modal Engine
function setupResumeModal() {
  const modal = document.getElementById("resumeModal");
  const closeBtn = document.getElementById("resumeModalCloseBtn");
  const triggerBtns = document.querySelectorAll(".view-resume-btn");
  const tabBtns = document.querySelectorAll(".resume-tab-btn");

  if (!modal) return;

  const renderResume = (key) => {
    const data = typeof resumesData !== "undefined" ? resumesData[key] : null;
    if (!data) return;

    // Update active tab styling
    tabBtns.forEach(btn => {
      const isMatch = btn.dataset.resumeTab === key;
      if (isMatch) {
        btn.className = "resume-tab-btn px-2.5 py-1 rounded text-xs font-mono transition-colors border bg-slate-900 text-white border-slate-900 dark:bg-slate-100 dark:text-slate-950 dark:border-slate-100 font-semibold";
      } else {
        btn.className = "resume-tab-btn px-2.5 py-1 rounded text-xs font-mono transition-colors border bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/80 hover:text-slate-900 dark:hover:text-white";
      }
    });

    // Update header
    const setEl = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text || "";
    };
    setEl("resumeModalBadge", `${data.track} • ${data.badge}`);
    setEl("resumeModalRole", data.role);
    setEl("resumeModalTitle", data.title);

    const dlBtn = document.getElementById("resumeModalDownloadBtn");
    if (dlBtn) {
      dlBtn.href = data.pdf;
      dlBtn.download = data.pdf.split("/").pop();
    }
    const rawBtn = document.getElementById("resumeModalRawBtn");
    if (rawBtn) rawBtn.href = data.pdf;

    const mdBtn = document.getElementById("resumeModalMdBtn");
    if (mdBtn) mdBtn.href = data.md;

    // Render body
    const bodyEl = document.getElementById("resumeModalBody");
    if (bodyEl) {
      bodyEl.innerHTML = `
        <!-- Professional Summary -->
        <div class="space-y-2">
          <div class="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center justify-between">
            <span>Professional Summary</span>
            <span class="text-[11px] font-mono text-slate-400 font-normal">Executive Overview</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">${data.summary}</p>
        </div>

        <!-- Technical Skills -->
        <div class="space-y-2">
          <div class="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
            Technical Skills
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            ${data.skills.map(sk => `<li class="flex items-start gap-2"><span class="text-sky-600 dark:text-sky-400 font-mono select-none mt-0.5">•</span><span>${sk}</span></li>`).join("")}
          </ul>
        </div>

        <!-- Professional Experience -->
        <div class="space-y-3">
          <div class="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center justify-between">
            <span>Professional Experience</span>
            <span class="text-[11px] font-mono text-slate-400 font-normal">CHiPS (Govt. of Chhattisgarh)</span>
          </div>
          <div class="space-y-1">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">
              <span>${data.exp_role}</span>
              <span class="text-xs font-mono font-normal text-slate-500">06/2025 – 03/2026</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-500 italic">
              <span>Dept. of Health & Family Welfare, Govt. of Chhattisgarh</span>
              <span>Raipur, India</span>
            </div>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
            ${data.exp_bullets.map(b => `<li class="flex items-start gap-2"><span class="text-sky-600 dark:text-sky-400 font-mono select-none mt-0.5">•</span><span>${b}</span></li>`).join("")}
          </ul>
        </div>

        <!-- Key Projects -->
        <div class="space-y-3">
          <div class="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
            Key Projects
          </div>
          <div class="space-y-3">
            ${data.projects.map(proj => `
              <div class="space-y-1.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <span class="font-semibold text-slate-950 dark:text-white">${proj.name}</span>
                    <span class="text-slate-400"> | </span>
                    <span class="italic text-slate-600 dark:text-slate-400 font-mono text-xs">${proj.tools}</span>
                  </div>
                  <span class="text-[11px] font-mono font-medium text-sky-600 dark:text-sky-400">${proj.tag}</span>
                </div>
                <ul class="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  ${proj.bullets.map(b => `<li class="flex items-start gap-2"><span class="text-slate-400 select-none">•</span><span>${b}</span></li>`).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Education & Certifications -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div class="space-y-2">
            <div class="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </div>
            <div class="space-y-2 text-xs">
              <div>
                <div class="font-semibold text-slate-950 dark:text-white">M.Tech in Computer Science & Engineering</div>
                <div class="text-slate-600 dark:text-slate-400">IIIT Naya Raipur <span class="font-semibold text-slate-800 dark:text-slate-200">(CGPA: 7.90)</span></div>
                <div class="text-slate-400 font-mono">08/2024 – 07/2026</div>
              </div>
              <div class="pt-1">
                <div class="font-semibold text-slate-950 dark:text-white">B.Tech in Computer Science & Engineering</div>
                <div class="text-slate-600 dark:text-slate-400">Amity University Chhattisgarh <span class="font-semibold text-slate-800 dark:text-slate-200">(CGPA: 7.71)</span></div>
                <div class="text-slate-400 font-mono">08/2019 – 06/2023</div>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <div class="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Certifications & Qualifications
            </div>
            <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              ${data.certs.map(c => `<li class="flex items-start gap-2"><span class="text-emerald-600 dark:text-emerald-400 font-mono">✓</span><span>${c}</span></li>`).join("")}
            </ul>
          </div>
        </div>
      `;
    }
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.resume || "data_analyst";
      renderResume(key);
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    });
  });

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabKey = btn.dataset.resumeTab;
      if (tabKey) renderResume(tabKey);
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
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// 8. Interactive Architecture Pipeline Explorer (Inspired by santifer/cv-santiago)
function setupArchitectureExplorer() {
  const tabs = document.querySelectorAll(".arch-tab-btn");
  const container = document.getElementById("architectureExplorerContent");
  if (!container || typeof architecturesData === "undefined") return;

  const renderArch = (key) => {
    const data = architecturesData[key];
    if (!data) return;

    tabs.forEach(t => {
      if (t.dataset.arch === key) {
        t.className = "arch-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-sm";
      } else {
        t.className = "arch-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
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
          ${data.steps.map((st, i) => `
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

// 9. Interactive AI Persona Chat Twin (Inspired by santifer/cv-santiago "Ask Santi")
function setupAiChatAssistant() {
  const modal = document.getElementById("aiChatModal");
  const openBtns = [
    document.getElementById("openAiChatBtn"),
    document.getElementById("heroOpenAiChatBtn"),
    document.getElementById("navOpenAiChatBtn"),
    document.getElementById("mobileOpenAiChatBtn")
  ].filter(Boolean);
  const closeBtn = document.getElementById("aiChatCloseBtn");
  const form = document.getElementById("aiChatForm");
  const input = document.getElementById("aiChatInput");
  const messagesBox = document.getElementById("aiChatMessages");
  const chipBtns = document.querySelectorAll(".ai-prompt-chip");
  const clearBtn = document.getElementById("aiChatClearBtn");

  if (!modal || !messagesBox) return;

  const openChat = (initialQuery = null) => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    if (input) {
      setTimeout(() => input.focus(), 150);
      if (initialQuery) {
        input.value = initialQuery;
        handleSubmit();
      }
    }
  };

  const closeChat = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  };

  openBtns.forEach(b => b.addEventListener("click", () => openChat()));
  if (closeBtn) closeBtn.addEventListener("click", closeChat);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeChat();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeChat();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      messagesBox.innerHTML = `
        <div class="flex items-start gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs font-mono shrink-0 select-none font-bold">
            RT
          </div>
          <div class="chat-bubble-bot p-3.5 sm:p-4 max-w-[88%] sm:max-w-[80%] text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-2">
            <p class="leading-relaxed">
              Hi! I'm <strong>Rishi Thakur's AI Twin</strong>, inspired by interactive AI portfolios like Santiago's.
              I have zero-hallucination ground truth access to Rishi's actual background, M.Tech thesis, CHiPS enterprise experience, and 7 tailored resume tracks.
            </p>
            <p class="text-slate-500 text-xs">
              Tap any prompt below or type your question:
            </p>
          </div>
        </div>
      `;
    });
  }

  const appendMessage = (sender, content) => {
    const msgDiv = document.createElement("div");
    msgDiv.className = `flex ${sender === "user" ? "justify-end" : "justify-start"} items-start gap-2.5`;

    if (sender === "user") {
      msgDiv.innerHTML = `
        <div class="chat-bubble-user p-3 sm:p-3.5 max-w-[85%] sm:max-w-[75%] text-xs sm:text-sm text-slate-800 dark:text-slate-200">
          ${escapeHtml(content)}
        </div>
      `;
    } else {
      msgDiv.innerHTML = `
        <div class="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs font-mono shrink-0 select-none font-bold">
          RT
        </div>
        <div class="chat-bubble-bot p-3.5 sm:p-4 max-w-[88%] sm:max-w-[80%] text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-2">
          <div class="prose-content leading-relaxed">${formatMarkdown(content)}</div>
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Rishi AI Twin • Verified Ground Truth</span>
            <button type="button" class="copy-chat-btn hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer">Copy</button>
          </div>
        </div>
      `;
      const copyBtn = msgDiv.querySelector(".copy-chat-btn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(content);
          copyBtn.textContent = "Copied!";
          setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
        });
      }
    }

    messagesBox.appendChild(msgDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  };

  const showTypingIndicator = () => {
    const ind = document.createElement("div");
    ind.id = "aiTypingIndicator";
    ind.className = "flex justify-start items-center gap-2 text-xs font-mono text-slate-400 pl-9 py-2";
    ind.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="ml-1 text-[11px]">Rishi AI is formulating response...</span>
    `;
    messagesBox.appendChild(ind);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  };

  const removeTypingIndicator = () => {
    const ind = document.getElementById("aiTypingIndicator");
    if (ind) ind.remove();
  };

  const getKnowledgeResponse = (query) => {
    const q = query.toLowerCase().trim();
    if (typeof aiKnowledgeBase === "undefined") {
      return "Hi! I am Rishi's AI Twin. I can answer questions about Rishi's enterprise experience at CHiPS, his 5G mmWave diffusion thesis, his SQL & Power BI architectures, or help you choose the right tailored resume.";
    }

    let bestMatch = null;
    let maxHits = 0;

    for (const item of aiKnowledgeBase) {
      let hits = 0;
      for (const kw of item.keywords) {
        if (q.includes(kw)) hits++;
      }
      if (hits > maxHits) {
        maxHits = hits;
        bestMatch = item.response;
      }
    }

    if (bestMatch && maxHits > 0) {
      return bestMatch;
    }

    return "Thank you for asking! I am Rishi Thakur's verified AI persona. Rishi is an **M.Tech CSE graduate from IIIT Naya Raipur (GATE CS Qualified, IELTS 7.5)** with enterprise experience at **CHiPS (Dept. of Health, Govt. of Chhattisgarh)** across 33 districts.\n\nHe specializes in **Advanced SQL, MariaDB, OracleDB, Advanced Excel, Kimball Star Schema, and Power BI DAX**.\n\nYou can ask me specific questions like:\n• *'Tell me about your CHiPS / Health Department work across 33 districts'*\n• *'How does your 5G mmWave diffusion model work?'*\n• *'What is your SQL & Power BI stack?'*\n• *'Which tailored resume should I download?'*\n\nOr feel free to email Rishi directly at **[rishi_th219@proton.me](mailto:rishi_th219@proton.me)** or call **[+91 8109830219](tel:+918109830219)**!";
  };

  const handleSubmit = () => {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    appendMessage("user", text);
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const ans = getKnowledgeResponse(text);
      appendMessage("bot", ans);
    }, 450);
  };

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSubmit();
    });
  }

  chipBtns.forEach(c => {
    c.addEventListener("click", () => {
      const prompt = c.dataset.prompt;
      if (prompt) {
        openChat(prompt);
      }
    });
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function formatMarkdown(text) {
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 hover:underline font-medium">$1</a>')
    .replace(/\n• (.*?)(?=\n|$)/g, '<li class="flex items-start gap-1.5 pt-0.5"><span class="text-sky-600 dark:text-sky-400 font-mono">•</span><span>$1</span></li>')
    .replace(/\n\n/g, '<br><br>');
  return formatted;
}


