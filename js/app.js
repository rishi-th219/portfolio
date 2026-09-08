// Core Portfolio Application Logic

let mainChartInstance = null;
let secondaryChartInstance = null;
let currentDashboardType = 'ecommerce';

document.addEventListener('DOMContentLoaded', () => {
  initLiveCharts(currentDashboardType);
  setupDashboardTabs();
  setupProjectFilters();
  setupCaseStudyModals();
  setupScopeEstimator();
  setupMobileMenu();
  setupContactForm();
});

// 1. Live Interactive BI Dashboard Engine
function initLiveCharts(type) {
  const data = dashboardData[type];
  if (!data) return;

  // Update KPI Cards
  updateKpiElements(data.kpis);

  // Destroy previous instances if existing
  if (mainChartInstance) mainChartInstance.destroy();
  if (secondaryChartInstance) secondaryChartInstance.destroy();

  // Chart defaults for sleek dark mode
  Chart.defaults.color = '#94a3b8';
  Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";

  // Main Trend Chart
  const mainCtx = document.getElementById('liveTrendChart');
  if (mainCtx) {
    mainChartInstance = new Chart(mainCtx.getContext('2d'), {
      type: 'line',
      data: {
        labels: data.chart.labels,
        datasets: data.chart.datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              usePointStyle: true,
              color: '#cbd5e1'
            }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            titleColor: '#f8fafc',
            bodyColor: '#38bdf8',
            borderColor: 'rgba(56, 189, 248, 0.2)',
            borderWidth: 1,
            padding: 12
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#64748b'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#64748b'
            }
          },
          y1: {
            type: 'linear',
            display: type === 'healthcare',
            position: 'right',
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: '#f59e0b'
            }
          }
        }
      }
    });
  }

  // Secondary Breakdown Chart
  const secCtx = document.getElementById('liveSecondaryChart');
  if (secCtx) {
    const secConfig = data.secondaryChart;
    secondaryChartInstance = new Chart(secCtx.getContext('2d'), {
      type: secConfig.type,
      data: {
        labels: secConfig.labels,
        datasets: [{
          data: secConfig.data,
          backgroundColor: secConfig.colors,
          borderWidth: 0,
          borderRadius: secConfig.type === 'bar' ? 4 : 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: secConfig.type === 'bar' ? 'none' : 'bottom',
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              color: '#94a3b8',
              font: { size: 11 }
            }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 10
          }
        },
        scales: secConfig.type === 'bar' ? {
          x: {
            grid: { display: false },
            ticks: { color: '#64748b', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#64748b' }
          }
        } : {}
      }
    });
  }
}

function updateKpiElements(kpis) {
  const kpiMap = [
    { valId: 'kpi-rev-val', growthId: 'kpi-rev-growth', key: 'revenue', growthKey: 'revenueGrowth' },
    { valId: 'kpi-ord-val', growthId: 'kpi-ord-growth', key: 'orders', growthKey: 'ordersGrowth' },
    { valId: 'kpi-aov-val', growthId: 'kpi-aov-growth', key: 'aov', growthKey: 'aovGrowth' },
    { valId: 'kpi-ret-val', growthId: 'kpi-ret-growth', key: 'retention', growthKey: 'retentionGrowth' }
  ];

  kpiMap.forEach(item => {
    const vEl = document.getElementById(item.valId);
    const gEl = document.getElementById(item.growthId);
    if (vEl) {
      vEl.textContent = kpis[item.key];
      // Subtle pulse effect
      vEl.classList.add('scale-105');
      setTimeout(() => vEl.classList.remove('scale-105'), 200);
    }
    if (gEl) gEl.textContent = kpis[item.growthKey];
  });
}

// 2. Tab Navigation for the Interactive Showcase
function setupDashboardTabs() {
  const tabButtons = document.querySelectorAll('.demo-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active', 'bg-sky-500', 'text-slate-950');
        b.classList.add('bg-slate-800/80', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-sky-500', 'text-slate-950');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300');

      currentDashboardType = btn.dataset.target;
      initLiveCharts(currentDashboardType);
    });
  });
}

// 3. Project Filter Buttons
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-sky-400', 'text-slate-950');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-sky-400', 'text-slate-950');
      btn.classList.remove('bg-slate-800', 'text-slate-300');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });
}

// 4. Case Study Modal Engine
function setupCaseStudyModals() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const triggerBtns = document.querySelectorAll('.view-case-study-btn');

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const studyKey = btn.dataset.study;
      const data = caseStudiesData[studyKey];
      if (!data) return;

      document.getElementById('modalBadge').textContent = data.badge;
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalSubtitle').textContent = data.subtitle;
      document.getElementById('modalClient').textContent = data.clientType;
      document.getElementById('modalTimeline').textContent = data.timeline;
      document.getElementById('modalProblem').textContent = data.problem;
      document.getElementById('modalSolution').textContent = data.solution;

      // Metrics container
      const metricsContainer = document.getElementById('modalMetrics');
      metricsContainer.innerHTML = '';
      data.metrics.forEach(m => {
        const div = document.createElement('div');
        div.className = 'p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-center';
        div.innerHTML = `
          <div class="text-xs text-slate-400 font-medium uppercase">${m.label}</div>
          <div class="text-xl font-bold text-sky-400 font-mono mt-1">${m.value}</div>
        `;
        metricsContainer.appendChild(div);
      });

      // Tech Stack
      const stackContainer = document.getElementById('modalStack');
      stackContainer.innerHTML = '';
      data.stack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-pill text-xs';
        span.textContent = tech;
        stackContainer.appendChild(span);
      });

      // Deliverables
      const delivContainer = document.getElementById('modalDeliverables');
      delivContainer.innerHTML = '';
      data.deliverables.forEach(d => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2 text-sm text-slate-300';
        li.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${d}</span>
        `;
        delivContainer.appendChild(li);
      });

      // Show Modal
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// 5. Interactive Freelance Project Scope & Rate Estimator
function setupScopeEstimator() {
  const projectTypeSelect = document.getElementById('calcProjectType');
  const sourceCountSelect = document.getElementById('calcSourceCount');
  const speedSelect = document.getElementById('calcSpeed');

  const budgetDisplay = document.getElementById('calcEstimatedBudget');
  const timelineDisplay = document.getElementById('calcEstimatedTimeline');
  const applyScopeBtn = document.getElementById('applyScopeBtn');

  if (!projectTypeSelect || !sourceCountSelect || !speedSelect) return;

  function calculateEstimate() {
    const baseRates = {
      dashboard: { min: 350, max: 700, days: "4 - 7 Business Days", title: "Interactive Business Dashboard" },
      elt: { min: 650, max: 1200, days: "7 - 12 Business Days", title: "Automated SQL / ELT Data Pipeline" },
      fullstack: { min: 1100, max: 2200, days: "14 - 20 Business Days", title: "Complete Data Stack (ETL + Marts + Power BI)" },
      audit: { min: 200, max: 400, days: "2 - 3 Business Days", title: "Data Model & Query Optimization Audit" }
    };

    const typeKey = projectTypeSelect.value;
    const selected = baseRates[typeKey] || baseRates.dashboard;

    let sourceMultiplier = 1;
    if (sourceCountSelect.value === '2-3') sourceMultiplier = 1.35;
    if (sourceCountSelect.value === '4+') sourceMultiplier = 1.75;

    let speedMultiplier = 1;
    let timelineText = selected.days;
    if (speedSelect.value === 'rush') {
      speedMultiplier = 1.3;
      timelineText = "Priority Rush (3 - 5 Days)";
    }

    const minPrice = Math.round((selected.min * sourceMultiplier * speedMultiplier) / 25) * 25;
    const maxPrice = Math.round((selected.max * sourceMultiplier * speedMultiplier) / 25) * 25;

    budgetDisplay.textContent = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`;
    timelineDisplay.textContent = timelineText;
  }

  projectTypeSelect.addEventListener('change', calculateEstimate);
  sourceCountSelect.addEventListener('change', calculateEstimate);
  speedSelect.addEventListener('change', calculateEstimate);

  // Initial calculation
  calculateEstimate();

  if (applyScopeBtn) {
    applyScopeBtn.addEventListener('click', () => {
      const typeText = projectTypeSelect.options[projectTypeSelect.selectedIndex].text;
      const sources = sourceCountSelect.value;
      const budgetText = budgetDisplay.textContent;
      const timeline = timelineDisplay.textContent;

      const messageInput = document.getElementById('contactMessage');
      if (messageInput) {
        messageInput.value = `Hi Rishi,\n\nI'm interested in discussing a project for:\n- Project Type: ${typeText}\n- Data Sources: ${sources}\n- Estimated Scope: ${budgetText} (${timeline})\n\nLooking forward to hearing from you!`;
      }

      // Smooth scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// 6. Mobile Hamburger Menu
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// 7. Contact Form submission handler
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const feedbackEl = document.getElementById('contactFeedback');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.dataset.email || "rishithakur21@example.com";
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-emerald-400 font-medium">Copied to Clipboard!</span>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2500);
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || '';
      const email = document.getElementById('contactEmail')?.value || '';
      const message = document.getElementById('contactMessage')?.value || '';

      const subject = encodeURIComponent(`Freelance Project Inquiry from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);

      // Open mailto link with pre-filled details
      window.location.href = `mailto:rishithakur21@gmail.com?subject=${subject}&body=${body}`;

      if (feedbackEl) {
        feedbackEl.classList.remove('hidden');
        feedbackEl.innerHTML = `
          <div class="p-4 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm flex items-center gap-3">
            <svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>Opening your email client... If it doesn't open automatically, email Rishi directly at <strong>rishithakur21@gmail.com</strong>!</div>
          </div>
        `;
      }
    });
  }
}
