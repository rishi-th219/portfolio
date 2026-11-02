// Rishi Thakur — Executive Portfolio Interactivity Engine
// Data Analyst | Business Intelligence | SQL & Analytics Engineering
// Designed with Logsfolio / Modern Shadcn UI Patterns

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupProjectFilters();
  setupCaseStudyModals();
  setupResumeModal();
  setupResumeTrackSelector();
  setupMobileMenu();
  setupBackToTop();
  setupContactForm();
  setupTaglineReveal();
  setupLocalTimeClock();
  setupArchitectureWorkbench();
  setupStackFilter();
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
        } else {
          card.classList.add("hidden");
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
          p.className = "text-sm text-foreground/90 leading-relaxed font-normal";
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
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border text-xs font-mono text-foreground">
              <span class="text-primary font-semibold">${idx + 1}.</span> ${step}
            </span>
            ${idx < steps.length - 1 ? '<span class="text-muted-foreground font-mono text-xs select-none">→</span>' : ''}
          `).join(" ");
        } else {
          pipelineWrapper.classList.add("hidden");
        }
      }

      // Render Stack Pills
      const stackEl = document.getElementById("modalStack");
      if (stackEl && data.stack) {
        stackEl.innerHTML = data.stack.map(tech => `
          <span class="badge-pill">${tech}</span>
        `).join("");
      }

      // Render Deliverables List
      const delivEl = document.getElementById("modalDeliverables");
      if (delivEl && data.deliverables) {
        delivEl.innerHTML = data.deliverables.map(deliv => `
          <li class="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 font-normal">
            <span class="text-primary font-mono select-none font-semibold">✓</span>
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

// 4. Curated 7-Track ATS Resume Modal Engine (ai-design-skills & Zero-Fabrication)
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

    // Update active tab buttons with design tokens
    tabBtns.forEach(t => {
      if (t.dataset.resumeTab === trackKey) {
        t.className = "resume-tab-btn px-2.5 py-1 rounded-md text-xs font-mono transition-all border bg-primary text-primary-foreground border-primary shadow-sm cursor-pointer";
      } else {
        t.className = "resume-tab-btn px-2.5 py-1 rounded-md text-xs font-mono transition-all border bg-secondary text-muted-foreground border-border hover:text-foreground cursor-pointer";
      }
    });

    if (modalTitle) modalTitle.textContent = `${r.title || r.role} — ATS Resume`;
    if (pdfDownloadBtn) {
      pdfDownloadBtn.href = r.pdf;
      pdfDownloadBtn.download = r.pdf.split("/").pop();
    }

    // Render formatted single-column ATS content (strictly 0 phone numbers!)
    modalBody.innerHTML = `
      <div class="space-y-6 max-w-3xl mx-auto text-left">
        <!-- Header -->
        <div class="text-center pb-4 border-b border-border">
          <h2 class="text-2xl font-bold text-foreground tracking-tight">Rishi Thakur</h2>
          <div class="text-xs font-mono text-muted-foreground mt-1 flex flex-wrap items-center justify-center gap-2">
            <span>Raipur / Bengaluru, India</span>
            <span>•</span>
            <a href="mailto:rishithakur528@gmail.com" class="text-primary hover:underline">rishithakur528@gmail.com</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/rishi-thakur-dev/" target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">LinkedIn ↗</a>
            <span>•</span>
            <a href="https://github.com/rishi-th219" target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">GitHub ↗</a>
          </div>
        </div>

        <!-- Professional Summary -->
        <div class="space-y-2">
          <h3 class="text-xs font-mono uppercase tracking-wider text-primary font-bold border-b border-border pb-1">Professional Summary</h3>
          <p class="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">${r.summary || ""}</p>
        </div>

        <!-- Technical Skills -->
        <div class="space-y-2">
          <h3 class="text-xs font-mono uppercase tracking-wider text-primary font-bold border-b border-border pb-1">Technical Skills</h3>
          <div class="space-y-1.5 text-xs">
            ${Array.isArray(r.skills) ? r.skills.map(s => `
              <div class="py-1 border-b border-border/50 text-foreground/90 leading-relaxed">${s}</div>
            `).join("") : ""}
          </div>
        </div>

        <!-- Professional Experience -->
        <div class="space-y-4">
          <h3 class="text-xs font-mono uppercase tracking-wider text-primary font-bold border-b border-border pb-1">Professional Experience</h3>
          <div class="space-y-2 text-left">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span class="font-bold text-foreground text-sm">${r.exp_role || "Data Analyst & BI Developer Intern"}</span>
              </div>
              <span class="text-xs font-mono text-muted-foreground">06/2025 – 03/2026</span>
            </div>
            <ul class="space-y-1.5 pl-3">
              ${Array.isArray(r.exp_bullets) ? r.exp_bullets.map(b => `
                <li class="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 font-normal leading-relaxed">
                  <span class="text-primary font-mono select-none">•</span>
                  <span>${b}</span>
                </li>
              `).join("") : ""}
            </ul>
          </div>
        </div>

        <!-- Flagship Technical Projects -->
        ${Array.isArray(r.projects) && r.projects.length ? `
          <div class="space-y-4">
            <h3 class="text-xs font-mono uppercase tracking-wider text-primary font-bold border-b border-border pb-1">Key Technical Projects</h3>
            ${r.projects.map(p => `
              <div class="space-y-1.5 text-left">
                <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span class="font-bold text-foreground text-sm">${p.name}</span>
                    <span class="text-xs font-mono text-muted-foreground ml-1">(${p.tools})</span>
                  </div>
                  <span class="text-xs font-mono text-primary">${p.tag || ""}</span>
                </div>
                <ul class="space-y-1 pl-3">
                  ${Array.isArray(p.bullets) ? p.bullets.map(pb => `
                    <li class="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 font-normal leading-relaxed">
                      <span class="text-primary font-mono select-none">•</span>
                      <span>${pb}</span>
                    </li>
                  `).join("") : ""}
                </ul>
              </div>
            `).join("")}
          </div>
        ` : ""}

        <!-- Education -->
        <div class="space-y-3">
          <h3 class="text-xs font-mono uppercase tracking-wider text-primary font-bold border-b border-border pb-1">Education & Verified Credentials</h3>
          <div class="space-y-2 text-xs">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span class="font-bold text-foreground">M.Tech in Computer Science & Engineering</span>
                <span class="text-muted-foreground ml-1">(IIIT Naya Raipur)</span>
              </div>
              <div class="font-mono text-muted-foreground">
                <span class="text-foreground font-semibold">CGPA: 7.90</span> • <span>2024 – 2026</span>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span class="font-bold text-foreground">B.Tech in Computer Science & Engineering</span>
                <span class="text-muted-foreground ml-1">(Amity University Chhattisgarh)</span>
              </div>
              <div class="font-mono text-muted-foreground">
                <span class="text-foreground font-semibold">CGPA: 7.71</span> • <span>2020 – 2024</span>
              </div>
            </div>
            <div class="pt-1 text-muted-foreground">
              <span class="font-semibold text-foreground">Accreditations: </span>GATE CS 2024 Qualified • IELTS Academic Band 7.5 (CEFR C1)
            </div>
          </div>
        </div>

        <!-- Certifications -->
        ${Array.isArray(r.certs) && r.certs.length ? `
          <div class="space-y-2">
            <h3 class="text-xs font-mono uppercase tracking-wider text-primary font-bold border-b border-border pb-1">Certifications</h3>
            <div class="text-xs text-muted-foreground space-y-1">
              ${r.certs.map(c => `<div>• ${c}</div>`).join("")}
            </div>
          </div>
        ` : ""}
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

// 4b. Interactive Resume Track Selector Dropdown
function setupResumeTrackSelector() {
  const select = document.getElementById("resumeTrackSelect");
  if (!select || typeof resumesData === "undefined") return;

  const titleEl = document.getElementById("trackTitle");
  const descEl = document.getElementById("trackDesc");
  const viewAtsBtn = document.getElementById("trackViewAtsBtn");
  const pdfBtn = document.getElementById("trackPdfBtn");
  const tabBtn = document.getElementById("trackTabBtn");

  select.addEventListener("change", () => {
    const key = select.value;
    const r = resumesData[key];
    if (!r) return;

    if (titleEl) titleEl.textContent = `${r.role} Resume`;
    if (descEl) descEl.textContent = r.summary || "";
    if (viewAtsBtn) viewAtsBtn.dataset.resume = key;
    if (pdfBtn) {
      pdfBtn.href = r.pdf;
      pdfBtn.download = r.pdf.split("/").pop();
    }
    if (tabBtn) tabBtn.href = r.pdf;
  });
}

// 5. Mobile Menu Drawer
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

// 6. Back-To-Top Button
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

// 7. Contact Form Handler
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("contactFormStatus");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName")?.value || "";
    const email = document.getElementById("senderEmail")?.value || "";
    const message = document.getElementById("senderMessage")?.value || "";

    const mailtoLink = `mailto:rishithakur528@gmail.com?cc=rishi_th219@proton.me&subject=${encodeURIComponent("Portfolio Inquiry from " + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
    window.location.href = mailtoLink;

    if (statusMsg) {
      statusMsg.textContent = "Opening your email client to send message to rishithakur528@gmail.com...";
      statusMsg.classList.remove("hidden");
      setTimeout(() => statusMsg.classList.add("hidden"), 5000);
    }
  });
}

// 8. Tagline Reveal Engine (ai-design-skills B11)
function setupTaglineReveal() {
  const words = document.querySelectorAll(".tagline-word");
  if (!words.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    words.forEach(w => w.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        words.forEach((word, idx) => {
          setTimeout(() => {
            word.classList.add("is-revealed");
          }, idx * 60);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.25 });

  const section = document.getElementById("tagline-reveal");
  if (section) observer.observe(section);
}

// 9. Live Local Time Clock (Poulo.site Inspiration)
function setupLocalTimeClock() {
  const clockEl = document.getElementById("localTimeClock");
  if (!clockEl) return;

  const updateClock = () => {
    const now = new Date();
    try {
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      clockEl.textContent = `${timeStr} IST`;
    } catch {
      clockEl.textContent = `${now.toTimeString().split(" ")[0]} IST`;
    }
  };

  updateClock();
  setInterval(updateClock, 1000);
}

// 10. Interactive Architecture Workbench (Poulo.site Inspiration)
function setupArchitectureWorkbench() {
  const tabBtns = document.querySelectorAll(".workbench-tab-btn");
  const panels = document.querySelectorAll(".workbench-panel");

  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach(panel => {
        if (panel.dataset.panel === targetTab) {
          panel.classList.remove("hidden");
          panel.classList.add("block");
        } else {
          panel.classList.add("hidden");
          panel.classList.remove("block");
        }
      });
    });
  });
}

// 11. Interactive Stack Filter (Poulo.site Inspiration)
function setupStackFilter() {
  const filterBtns = document.querySelectorAll(".stack-filter-btn");
  const techPills = document.querySelectorAll(".stack-pill");

  if (!filterBtns.length || !techPills.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.stackCategory;

      filterBtns.forEach(b => {
        b.classList.remove("bg-primary", "text-primary-foreground", "border-primary", "shadow-sm");
        b.classList.add("bg-secondary", "text-muted-foreground", "border-border");
      });
      btn.classList.remove("bg-secondary", "text-muted-foreground", "border-border");
      btn.classList.add("bg-primary", "text-primary-foreground", "border-primary", "shadow-sm");

      techPills.forEach(pill => {
        const cat = pill.dataset.category || "";
        if (filter === "all" || cat.includes(filter)) {
          pill.classList.remove("opacity-25", "scale-95");
          pill.classList.add("opacity-100", "scale-100");
        } else {
          pill.classList.add("opacity-25", "scale-95");
          pill.classList.remove("opacity-100", "scale-100");
        }
      });
    });
  });
}
