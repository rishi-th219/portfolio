// Portfolio Interactivity Engine for Rishi Thakur
// Data Analyst | Business Intelligence | SQL & Analytics Engineering

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupProjectFilters();
  setupCaseStudyModals();
  setupMobileMenu();
  setupContactForm();
  setupBackToTop();
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
