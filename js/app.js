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
        div.className = "p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-center";
        div.innerHTML = `
          <div class="text-[11px] text-neutral-500 dark:text-neutral-400 font-normal uppercase tracking-wider font-mono">${m.label}</div>
          <div class="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 font-mono mt-0.5">${m.value}</div>
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
        li.className = "flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300 font-normal";
        li.innerHTML = `
          <span class="text-neutral-400 dark:text-neutral-500 mt-0.5 select-none font-mono">→</span>
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
            <div class="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center font-mono text-xs">
              ✓
            </div>
            <div>
              <div class="text-xs text-neutral-500 dark:text-neutral-400">Email Address</div>
              <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100 font-mono">${targetEmail}</div>
            </div>
          </div>
          <span class="text-xs text-neutral-600 dark:text-neutral-400 font-mono">Copied</span>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2200);
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
          <div class="p-3.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm flex items-center gap-3">
            <span class="font-mono text-neutral-500">→</span>
            <div>Opening your email client... You can also email directly to <span class="font-mono text-neutral-900 dark:text-neutral-100">${targetEmail}</span>.</div>
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
