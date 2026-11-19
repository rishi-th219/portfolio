// Rishi Thakur — Analytics Engineer & Data Storyteller Portfolio
// Interactivity & Motion Engine (landing-page-design & web-design-guidelines compliant)

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupScrollReveals();
  setupTaglineReveal();
  setupMobileMenu();
  setupCaseStudyModals();
  setupResumeModal();
  setupResumeTrackSelector();
  setupPrivacyModal();
  setupArchitectureWorkbench();
  setupStackFilter();
  setupBackToTop();
  setupContactForm();
  setupLocalTimeClock();
  setupCopyEmail();
  setupCopyCodeButtons();
});

// -----------------------------------------------------------------------------
// 1. Theme Toggle Engine (Dark / Light Mode)
// -----------------------------------------------------------------------------
function setupThemeToggle() {
  const toggleBtns = [
    document.getElementById("themeToggleBtn"),
    document.getElementById("themeToggleBtnMobileTop")
  ].filter(Boolean);

  const getSavedTheme = () => {
    const saved = localStorage.getItem("rishi-portfolio-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const themeColorMeta = document.getElementById("themeColorMeta");
  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      if (themeColorMeta) themeColorMeta.setAttribute("content", "#000000");
    } else {
      document.documentElement.classList.remove("dark");
      if (themeColorMeta) themeColorMeta.setAttribute("content", "#f8fafc");
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

// -----------------------------------------------------------------------------
// 2. Scroll Reveals Engine (landing-page-design B7)
// -----------------------------------------------------------------------------
function setupScrollReveals() {
  const reveals = document.querySelectorAll(".reveal-on-scroll");
  if (!reveals.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target); // Reveal once only per B7
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("is-revealed"));
  }
}

// -----------------------------------------------------------------------------
// 3. Mandatory Tagline Word-by-Word Scroll Reveal (landing-page-design B11)
// -----------------------------------------------------------------------------
function setupTaglineReveal() {
  const words = document.querySelectorAll(".tagline-word");
  const container = document.getElementById("taglineReveal");
  if (!words.length || !container) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    words.forEach(w => w.classList.add("is-revealed"));
    return;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          words.forEach((word, idx) => {
            setTimeout(() => {
              word.classList.add("is-revealed");
            }, idx * 75);
          });
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.4
    });

    observer.observe(container);
  } else {
    words.forEach(w => w.classList.add("is-revealed"));
  }
}

// -----------------------------------------------------------------------------
// 4. Full-Height Mobile Navigation Panel (landing-page-design B7)
// -----------------------------------------------------------------------------
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const overlay = document.getElementById("mobileNavOverlay");
  const closeBtn = document.getElementById("mobileNavCloseBtn");
  const links = document.querySelectorAll(".mobile-nav-link-item a, a.mobile-nav-link-item");
  const iconOpen = document.getElementById("mobileMenuIconOpen");
  const iconClose = document.getElementById("mobileMenuIconClose");

  if (!menuBtn || !overlay) return;

  const openMenu = () => {
    overlay.classList.remove("hidden");
    if (iconOpen) iconOpen.classList.add("hidden");
    if (iconClose) iconClose.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    overlay.classList.add("hidden");
    if (iconOpen) iconOpen.classList.remove("hidden");
    if (iconClose) iconClose.classList.add("hidden");
    document.body.style.overflow = "";
  };

  menuBtn.addEventListener("click", () => {
    if (overlay.classList.contains("hidden")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  links.forEach(l => {
    l.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
      closeMenu();
    }
  });
}

// -----------------------------------------------------------------------------
// 5. Technical Case Study Modal Engine
// -----------------------------------------------------------------------------
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
            ${idx < steps.length - 1 ? '<i class="ph ph-arrow-right text-muted-foreground text-xs select-none"></i>' : ''}
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
            <i class="ph ph-check text-primary font-bold text-sm mt-0.5"></i>
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
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}

// -----------------------------------------------------------------------------
// 6. Curated ATS Resume Modal Engine (Zero-Fabrication & Zero Phone Numbers)
// -----------------------------------------------------------------------------
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
            <span>Bengaluru, India</span>
            <span>•</span>
            <a href="mailto:rishi_th219@proton.me" class="text-primary hover:underline">rishi_th219@proton.me</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/rishi-thakur-b665a4298/" target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline flex items-center gap-1">LinkedIn <i class="ph ph-arrow-up-right"></i></a>
            <span>•</span>
            <a href="https://github.com/rishi-th219" target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline flex items-center gap-1">GitHub <i class="ph ph-arrow-up-right"></i></a>
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
                  <i class="ph ph-dot text-primary text-base select-none"></i>
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
                      <i class="ph ph-dot text-primary text-base select-none"></i>
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
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}

// -----------------------------------------------------------------------------
// 7. Interactive Resume Track Selector Dropdown
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// 8. Privacy Modal Engine (landing-page-design B10)
// -----------------------------------------------------------------------------
function setupPrivacyModal() {
  const modal = document.getElementById("privacyModal");
  const triggerBtn = document.getElementById("privacyModalTrigger");
  const closeBtn = document.getElementById("privacyModalCloseBtn");

  if (!modal || !triggerBtn) return;

  const open = (e) => {
    if (e) e.preventDefault();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  triggerBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
  });
}

// -----------------------------------------------------------------------------
// 9. Interactive Architecture Workbench (Poulo.site & Deep Linking)
// -----------------------------------------------------------------------------
function setupArchitectureWorkbench() {
  const tabBtns = document.querySelectorAll(".workbench-tab-btn");
  const panels = document.querySelectorAll(".workbench-panel");

  if (!tabBtns.length || !panels.length) return;

  const activateTab = (targetTab, updateHistory = true) => {
    let found = false;
    tabBtns.forEach(btn => {
      if (btn.dataset.tab === targetTab) {
        btn.classList.add("active");
        found = true;
      } else {
        btn.classList.remove("active");
      }
    });

    if (!found) return;

    panels.forEach(panel => {
      if (panel.dataset.panel === targetTab) {
        panel.classList.remove("hidden");
        panel.classList.add("block");
      } else {
        panel.classList.add("hidden");
        panel.classList.remove("block");
      }
    });

    if (updateHistory && window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `#tab-${targetTab}`);
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      activateTab(btn.dataset.tab, true);
    });
  });

  const currentHash = (window.location.hash || "").replace(/^#(?:tab-)?/, "");
  const validTabs = ["pipeline", "schema", "dax", "dashboard"];
  if (validTabs.includes(currentHash)) {
    activateTab(currentHash, false);
  }
}

// -----------------------------------------------------------------------------
// 10. Interactive Stack Filter
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// 11. Back-To-Top Button
// -----------------------------------------------------------------------------
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
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// -----------------------------------------------------------------------------
// 12. Direct Contact Form Handler (Client-side validation per B10)
// -----------------------------------------------------------------------------
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("contactFormStatus");
  const submitBtn = document.getElementById("contactSubmitBtn") || (form ? form.querySelector("button[type='submit']") : null);

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("senderName");
    const emailInput = document.getElementById("senderEmail");
    const messageInput = document.getElementById("senderMessage");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    // Client-side validation per B10
    if (!name || !email || !message) {
      if (statusMsg) {
        statusMsg.textContent = "Please fill in all fields before sending.";
        statusMsg.className = "text-xs font-mono text-center text-rose-500 block";
      }
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (statusMsg) {
        statusMsg.textContent = "Please enter a valid email address.";
        statusMsg.className = "text-xs font-mono text-center text-rose-500 block";
      }
      return;
    }

    if (submitBtn) {
      submitBtn.setAttribute("disabled", "true");
      submitBtn.classList.add("opacity-75");
    }

    const mailtoLink = `mailto:rishi_th219@proton.me?subject=${encodeURIComponent("Portfolio Inquiry from " + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
    window.location.href = mailtoLink;

    if (statusMsg) {
      statusMsg.textContent = "Opening your default email app to send message to rishi_th219@proton.me…";
      statusMsg.className = "text-xs font-mono text-center text-emerald-500 block";
      setTimeout(() => {
        statusMsg.classList.add("hidden");
        if (submitBtn) {
          submitBtn.removeAttribute("disabled");
          submitBtn.classList.remove("opacity-75");
        }
      }, 5000);
    }
  });
}

// -----------------------------------------------------------------------------
// 13. Live Local Time Clock (Bengaluru IST)
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// 14. Copy Email to Clipboard with Phosphor Micro-feedback
// -----------------------------------------------------------------------------
function setupCopyEmail() {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    const email = "rishi_th219@proton.me";
    try {
      await navigator.clipboard.writeText(email);
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = `<i class="ph ph-check text-emerald-500"></i><span>Copied to clipboard!</span>`;
      copyBtn.classList.add("border-emerald-500", "text-emerald-500");
      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.classList.remove("border-emerald-500", "text-emerald-500");
      }, 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

// -----------------------------------------------------------------------------
// 15. Copy Code Snippet (DAX / SQL) with Micro-feedback
// -----------------------------------------------------------------------------
function setupCopyCodeButtons() {
  const copyBtns = document.querySelectorAll(".copy-code-btn");
  if (!copyBtns.length) return;

  copyBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const codeText = targetEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(codeText);
        const originalText = btn.textContent;
        btn.textContent = "Copied! ✓";
        btn.classList.add("text-emerald-500", "font-bold", "border-emerald-500");
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("text-emerald-500", "font-bold", "border-emerald-500");
        }, 2000);
      } catch (err) {
        console.error("Clipboard copy failed:", err);
      }
    });
  });
}
