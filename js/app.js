// Portfolio Logic for Rishi Thakur - Data Analyst & Aspiring Data Engineer

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupProjectFilters();
  setupCaseStudyModals();
  setupMobileMenu();
  setupContactForm();
});

// 4. Project Filter Buttons
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === "all" || card.dataset.category.includes(filter)) {
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

// 5. Case Study Modal Engine
function setupCaseStudyModals() {
  const modal = document.getElementById("caseStudyModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const triggerBtns = document.querySelectorAll(".view-case-study-btn");

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const studyKey = btn.dataset.study;
      const data = caseStudiesData[studyKey];
      if (!data) return;

      document.getElementById("modalBadge").textContent = data.badge;
      document.getElementById("modalTitle").textContent = data.title;
      document.getElementById("modalSubtitle").textContent = data.subtitle;
      document.getElementById("modalClient").textContent = data.clientType;
      document.getElementById("modalTimeline").textContent = data.timeline;
      document.getElementById("modalProblem").textContent = data.problem;
      document.getElementById("modalSolution").textContent = data.solution;

      // Metrics container
      const metricsContainer = document.getElementById("modalMetrics");
      metricsContainer.innerHTML = "";
      data.metrics.forEach(m => {
        const div = document.createElement("div");
        div.className = "p-3 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl text-center";
        div.innerHTML = `
          <div class="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase font-mono">${m.label}</div>
          <div class="text-lg font-bold text-sky-600 dark:text-sky-400 font-mono mt-0.5">${m.value}</div>
        `;
        metricsContainer.appendChild(div);
      });

      // Tech Stack
      const stackContainer = document.getElementById("modalStack");
      stackContainer.innerHTML = "";
      data.stack.forEach(tech => {
        const span = document.createElement("span");
        span.className = "tech-pill text-xs";
        span.textContent = tech;
        stackContainer.appendChild(span);
      });

      // Deliverables
      const delivContainer = document.getElementById("modalDeliverables");
      delivContainer.innerHTML = "";
      data.deliverables.forEach(d => {
        const li = document.createElement("li");
        li.className = "flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300";
        li.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${d}</span>
        `;
        delivContainer.appendChild(li);
      });

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

// 6. Mobile Hamburger Menu
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
}

// 7. Contact Form & Clipboard Copy
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const feedbackEl = document.getElementById("contactFeedback");

  const targetEmail = "rishi_th219@proton.me";

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(targetEmail).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono">
              ✓
            </div>
            <div>
              <div class="text-xs text-slate-400">Email Address</div>
              <div class="text-sm font-semibold text-emerald-400 font-mono">${targetEmail}</div>
            </div>
          </div>
          <span class="text-xs text-emerald-400 font-mono">Copied!</span>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2500);
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName")?.value || "";
      const email = document.getElementById("contactEmail")?.value || "";
      const message = document.getElementById("contactMessage")?.value || "";

      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})

Message:
${message}`);

      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      if (feedbackEl) {
        feedbackEl.classList.remove("hidden");
        feedbackEl.innerHTML = `
          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 rounded-xl text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-3">
            <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>Opening your email client... You can also email directly at <strong>${targetEmail}</strong>.</div>
          </div>
        `;
      }
    });
  }
}

// Theme Toggle Functionality (Light / Dark Mode)
function setupThemeToggle() {
  const toggleBtns = [
    document.getElementById("themeToggleBtn"),
    document.getElementById("themeToggleBtnMobile")
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
