/**
 * THE SPATIAL WELL · 3D THREE.JS ENGINE
 * Candidate: Rishi Thakur · Analytics Engineering
 * Architecture: Scroll-driven 3D cylinder well with narrowing curved screen rings,
 * Web Audio synthesizer (room tone, ratchet, wind), bottom Prussian-blue light pool,
 * lone observer figure, zoetrope projector, speed-streak lens, and finale ascent.
 */

(function () {
  'use strict';

  // ============================================================================
  // 1. SYNTHESIZED WEB AUDIO ENGINE (ZERO EXTERNAL ASSETS)
  // ============================================================================
  class WellSoundEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
      this.roomGain = null;
      this.roomOsc1 = null;
      this.roomOsc2 = null;
      this.windFilter = null;
      this.windGain = null;
      this.lastRatchet = 0;
      this.hasInit = false;
    }

    init(soundEnabled = true) {
      if (this.hasInit) return;
      this.hasInit = true;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.ctx = new AudioContext();

      if (!soundEnabled) {
        this.isMuted = true;
        return;
      }

      try {
        const now = this.ctx.currentTime;

        // 1. Room Tone Drone (Deep binaural hum at 55Hz & 110.5Hz)
        this.roomGain = this.ctx.createGain();
        this.roomGain.gain.setValueAtTime(0.08, now);
        this.roomGain.connect(this.ctx.destination);

        this.roomOsc1 = this.ctx.createOscillator();
        this.roomOsc1.type = 'sine';
        this.roomOsc1.frequency.setValueAtTime(55.0, now);
        this.roomOsc1.connect(this.roomGain);
        this.roomOsc1.start();

        this.roomOsc2 = this.ctx.createOscillator();
        this.roomOsc2.type = 'triangle';
        this.roomOsc2.frequency.setValueAtTime(110.5, now);
        const lowpass = this.ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.setValueAtTime(180, now);
        this.roomOsc2.connect(lowpass);
        lowpass.connect(this.roomGain);
        this.roomOsc2.start();

        // 2. Wind Synthesizer (White noise through modulated bandpass filter)
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        this.windFilter = this.ctx.createBiquadFilter();
        this.windFilter.type = 'bandpass';
        this.windFilter.frequency.setValueAtTime(280, now);
        this.windFilter.Q.setValueAtTime(2.2, now);

        this.windGain = this.ctx.createGain();
        this.windGain.gain.setValueAtTime(0.015, now);

        whiteNoise.connect(this.windFilter);
        this.windFilter.connect(this.windGain);
        this.windGain.connect(this.ctx.destination);
        whiteNoise.start();
      } catch (e) {
        console.warn('Web Audio synthesis initialisation notice:', e);
      }
    }

    playRatchet(velocity) {
      if (!this.ctx || this.isMuted) return;
      const now = this.ctx.currentTime;
      const speed = Math.abs(velocity);
      if (speed < 0.05) return;

      const minInterval = Math.max(0.04, 0.25 - speed * 0.1);
      if (now - this.lastRatchet < minInterval) return;
      this.lastRatchet = now;

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        const freq = 600 + Math.random() * 250 + Math.min(speed * 400, 1000);
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.03);

        const vol = Math.min(0.07, 0.02 + speed * 0.04);
        gain.gain.setValueAtTime(vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.035);
      } catch (e) {}
    }

    updateDynamics(velocity) {
      if (!this.ctx || this.isMuted || !this.windFilter) return;
      const speed = Math.min(Math.abs(velocity), 4.0);
      const targetFreq = 260 + speed * 420;
      const targetVol = 0.015 + speed * 0.035;
      const now = this.ctx.currentTime;
      this.windFilter.frequency.setTargetAtTime(targetFreq, now, 0.08);
      this.windGain.gain.setTargetAtTime(targetVol, now, 0.08);
    }

    toggleMute() {
      if (!this.ctx) {
        this.init(true);
        return true;
      }
      this.isMuted = !this.isMuted;
      if (this.isMuted) {
        if (this.ctx.state === 'running') this.ctx.suspend();
      } else {
        if (this.ctx.state === 'suspended') this.ctx.resume();
      }
      return !this.isMuted;
    }
  }

  // ============================================================================
  // 2. GROUND-TRUTH STUDIO PROJECTS & ANALYTICAL WORKBENCHES (NINE SCREENS)
  // ============================================================================
  const STUDIO_PROJECTS = [
    {
      id: "chips_intelligence",
      ringIndex: 0,
      ringSlot: 0,
      tag: "Production Flagship · CHiPS",
      title: "Healthcare Attendance & Payroll Intelligence",
      subtitle: "Statewide Biometric Reconciliation · Kimball Star Schema",
      codeSnippet: `WITH ReconciledAttendance AS (\n  SELECT a.emp_code, a.shift_date, p.payroll_status,\n         ROW_NUMBER() OVER(PARTITION BY a.emp_code ORDER BY a.shift_date DESC) as rank\n  FROM Fact_Attendance_Daily a\n  INNER JOIN Dim_Payroll p ON a.emp_code = p.treasury_code\n)\nSELECT emp_code, COUNT(*) as verified_shifts\nFROM ReconciledAttendance WHERE payroll_status = 'CLEARED'\nGROUP BY emp_code;`,
      problem: "Reconciled statewide biometric attendance (AEBAS) against State Treasury payroll codes to eliminate ghost shifts and salary disbursal leakage across public health institutions.",
      solution: "Automated extraction into MariaDB staging via SQL CTEs, architected a centralized Kimball Star Schema around Fact_Attendance_Daily, and formulated an executive 3-tier attendance risk model.",
      impact: "Eliminated operational blind spots for state executive leadership with zero reporting gaps."
    },
    {
      id: "diffusion_handover",
      ringIndex: 0,
      ringSlot: 1,
      tag: "M.Tech Thesis · IIIT Naya Raipur",
      title: "5G mmWave Handover Prediction via Diffusion Models",
      subtitle: "PyTorch DDPM + GRU · Telecom Telemetry",
      codeSnippet: `class DiffusionHandoverPredictor(nn.Module):\n    def __init__(self, in_features=16, hidden=128):\n        super().__init__()\n        self.gru = nn.GRU(in_features, hidden, batch_first=True)\n        self.denoiser = ConditionalUnet(hidden)\n    def forward(self, x_noisy, t, condition_seq):\n        _, h_n = self.gru(condition_seq)\n        return self.denoiser(x_noisy, t, h_n.squeeze(0))`,
      problem: "mmWave frequencies suffer severe line-of-sight blockage and abrupt signal collapse. Standard handovers react too late after connection failure.",
      solution: "Engineered deep generative diffusion models (DDPM) conditioned on sequential GRU telemetry to predict link degradation frames in advance under heavy class imbalance.",
      impact: "Proactive base-station handovers executed before mmWave connection drops occurred."
    },
    {
      id: "ecommerce_elt",
      ringIndex: 0,
      ringSlot: 2,
      tag: "Data Warehouse · Local Stack",
      title: "Production-Grade Local ELT Data Warehouse",
      subtitle: "dbt-core · Apache Airflow · PostgreSQL · Metabase",
      codeSnippet: `{{ config(materialized='incremental', unique_key='order_id') }}\nSELECT \n    o.order_id, o.customer_id, o.order_timestamp,\n    sum(i.unit_price * i.quantity) as gross_revenue,\n    current_timestamp as dbt_updated_at\nFROM {{ ref('stg_ecommerce_orders') }} o\nJOIN {{ ref('stg_ecommerce_items') }} i ON o.order_id = i.order_id\n{% if is_incremental() %}\n  WHERE o.order_timestamp > (SELECT max(order_timestamp) FROM {{ this }})\n{% endif %}\nGROUP BY 1, 2, 3`,
      problem: "Demonstrating enterprise data warehousing practices without enterprise cloud billing or external hosting lock-in.",
      solution: "Orchestrated Dockerized PostgreSQL, dbt-core incremental models, Kimball SCD2 dimensional snapshots, and Airflow DAG telemetry.",
      impact: "Sub-minute automated pipeline runs with automated SQL unit assertions and schema tests."
    },
    {
      id: "medicine_matrix",
      ringIndex: 1,
      ringSlot: 0,
      tag: "Healthcare Supply Chain",
      title: "Hospital Medicine Matrix & Stockout Prevention",
      subtitle: "Pharmaceutical Inventory Logistics · OracleDB",
      codeSnippet: `SELECT \n    m.medicine_id, m.chemical_name, m.annual_consumption_cost,\n    CASE \n        WHEN m.cumulative_cost_share <= 0.70 THEN 'Category A (Vital)'\n        WHEN m.cumulative_cost_share <= 0.90 THEN 'Category B (Essential)'\n        ELSE 'Category C (Desirable)'\n    END AS abc_classification\nFROM RankedPharmaceuticals m\nWHERE stock_on_hand <= (m.daily_burn_rate * m.supplier_lead_time_days);`,
      problem: "Inpatient facilities faced critical medicine stockouts and supply-chain supply friction during emergency admissions.",
      solution: "Applied dual-axis ABC/VED inventory stratification in OracleDB, calculating safety thresholds for life-saving pharmaceuticals.",
      impact: "Maintained zero stockouts for all Class-A life-critical drugs across regional wards."
    },
    {
      id: "career_ops_bot",
      ringIndex: 1,
      ringSlot: 1,
      tag: "Automation · Machine Learning",
      title: "Career-Ops Recruitment Telemetry Engine",
      subtitle: "Async Python · Vector Embeddings · OpenXML",
      codeSnippet: `async def monitor_greenhouse_feed(board_url, role_keywords):\n    async with aiohttp.ClientSession() as session:\n        async with session.get(board_url) as resp:\n            jobs = await resp.json()\n            return [\n                j for j in jobs['jobs']\n                if any(k.lower() in j['title'].lower() for k in role_keywords)\n            ]`,
      problem: "High application volume across disparate ATS endpoints (Greenhouse, Lever, Ashby) led to untracked submissions and response blindspots.",
      solution: "Developed an asynchronous multi-threaded pipeline monitoring ATS API feeds, calculating semantic resume embedding alignment.",
      impact: "Monitored 500+ postings with zero manual copy-paste overhead."
    },
    {
      id: "treasury_reconciliation",
      ringIndex: 1,
      ringSlot: 2,
      tag: "Govt. Financial Engineering",
      title: "State Treasury Payroll Reconciliation Engine",
      subtitle: "SQL CTEs · Deterministic String Matching",
      codeSnippet: `WITH RawTreasury AS (\n  SELECT UPPER(TRIM(treasury_emp_id)) as clean_id, department, salary_disbursed\n  FROM Treasury_Ledger_2025\n),\nBiometricPunches AS (\n  SELECT UPPER(TRIM(staff_id)) as clean_id, count(distinct punch_date) as days_present\n  FROM AEBAS_Logs_2025\n  GROUP BY 1\n)\nSELECT r.clean_id, r.salary_disbursed, COALESCE(b.days_present, 0) as physical_days\nFROM RawTreasury r\nLEFT JOIN BiometricPunches b ON r.clean_id = b.clean_id\nWHERE b.days_present IS NULL OR b.days_present = 0;`,
      problem: "Discrepancies between legacy health facility records and state treasury codes resulted in unauthorized salary disbursals.",
      solution: "Built multi-stage SQL CTE pipelines combining deterministic key matching and regex normalization across 33 districts.",
      impact: "Identified ghost shifts and recovered unverified salary allocations for state health audit."
    },
    {
      id: "defaulter_risk_model",
      ringIndex: 2,
      ringSlot: 0,
      tag: "BI Governance · Risk Analytics",
      title: "Statewide Public Health Defaulter Risk Model",
      subtitle: "Advanced DAX · 3-Tier Risk Engine",
      codeSnippet: `DefaulterRiskScore = \nVAR ConsecutiveAbsences = \n    CALCULATE(\n        [CountConsecutiveUnexcusedDays],\n        FILTER(Fact_Attendance_Daily, Fact_Attendance_Daily[Status] = "ABSENT")\n    )\nRETURN\n    SWITCH(\n        TRUE(),\n        ConsecutiveAbsences >= 5, "Tier 1: Critical Non-Compliance",\n        ConsecutiveAbsences >= 3, "Tier 2: High Risk Defaulter",\n        "Tier 3: Standard Variance"\n    )`,
      problem: "Identifying recurring medical absenteeism across district hospitals required manual physical inspection sheets.",
      solution: "Engineered a 3-tier risk stratification engine in DAX evaluating rolling consecutive absences and roster compliance.",
      impact: "Automated executive risk alerts sent to State Health Directorate each morning."
    },
    {
      id: "aws_lakehouse",
      ringIndex: 2,
      ringSlot: 1,
      tag: "Cloud Engineering · Active Upskilling",
      title: "Cloud Lakehouse Architecture on AWS",
      subtitle: "Target: CLF-C02 & DEA-C01 · S3, Athena, Glue",
      codeSnippet: `CREATE EXTERNAL TABLE IF NOT EXISTS public_health_lakehouse.fact_attendance (\n  emp_code string,\n  shift_date date,\n  facility_id string,\n  punch_in timestamp,\n  punch_out timestamp\n)\nPARTITIONED BY (district_code string, year string, month string)\nSTORED AS PARQUET\nLOCATION 's3://rishi-analytics-lakehouse/curated/fact_attendance/'\nTBLPROPERTIES ('parquet.compression'='SNAPPY');`,
      problem: "Bridging on-premise Star Schemas into modern serverless cloud data lakehouses.",
      solution: "Designing S3 columnar Parquet partitioning, AWS Glue crawler schemas, and Athena federated SQL query acceleration.",
      impact: "Targeting AWS Certified Cloud Practitioner & AWS Data Engineer Associate (DEA-C01)."
    },
    {
      id: "system_diagnostics",
      ringIndex: 2,
      ringSlot: 2,
      tag: "OS Kernel & Telemetry",
      title: "Fedora Linux & Windows Diagnostics Core",
      subtitle: "Bash Automation · Enterprise Diagnostics",
      codeSnippet: `#!/usr/bin/env bash\n# Autonomous Pipeline Diagnostics & Telemetry\necho "[+] Inspecting Database Sockets & Memory Pressure..."\nss -tulpn | grep -E ':(5432|3306)' || echo "[-] Database daemon not listening!"\nfree -h | awk '/Mem:/ {print "[*] RAM Usage: " $3 "/" $2}'\nsystemctl --failed --type=service`,
      problem: "Ensuring zero-downtime development and execution environments across hybrid Linux and Windows OS.",
      solution: "Automated daily diagnostic routines monitoring systemd daemon status, memory pressure, and socket bindings.",
      impact: "100% daily driver reliability and instantaneous system bottleneck diagnosis."
    }
  ];

  // ============================================================================
  // 3. THREE.JS SPATIAL WELL APPLICATION
  // ============================================================================
  class SpatialWellApp {
    constructor() {
      this.container = document.body;
      this.canvas = document.getElementById('webgl-canvas');
      this.soundEngine = new WellSoundEngine();

      // Viewport & Three.js primitives
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      // Well Geometry Nodes
      this.wellGroup = null;
      this.rings = [];
      this.screenMeshes = [];
      this.zoetropeGroup = null;
      this.figureMesh = null;
      this.prussianLight = null;
      this.pinnacleRingMesh = null;

      // Scroll physics state
      this.scrollY = 0;
      this.targetScrollY = 0;
      this.scrollVelocity = 0;
      this.maxScrollDepth = 5000;
      this.isInspecting = false;
      this.inspectedScreen = null;
      this.isFinale = false;

      // HUD elements
      this.hudDepth = document.getElementById('hud-depth');
      this.hudRing = document.getElementById('hud-ring');
      this.hudSpeed = document.getElementById('hud-speed');
      this.lensEffect = document.getElementById('lens-effect');
      this.scrollHint = document.getElementById('scroll-hint');

      // Bindings
      this.onResize = this.onResize.bind(this);
      this.onWheel = this.onWheel.bind(this);
      this.onTouchStart = this.onTouchStart.bind(this);
      this.onTouchMove = this.onTouchMove.bind(this);
      this.onPointerDown = this.onPointerDown.bind(this);
      this.animate = this.animate.bind(this);

      this.touchStartY = 0;
      this.clock = new THREE.Clock();
    }

    init() {
      this.setupThreeScene();
      this.setupWellEnvironment();
      this.setupCurvedScreens();
      this.setupBottomArena();
      this.setupEventListeners();
      this.setupAudioGate();
      this.setupHUD();

      // Begin animation loop
      requestAnimationFrame(this.animate);
    }

    setupThreeScene() {
      // Scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x050404);
      this.scene.fog = new THREE.FogExp2(0x050404, 0.016);

      // Camera
      const aspect = window.innerWidth / window.innerHeight;
      this.camera = new THREE.PerspectiveCamera(65, aspect, 0.1, 1000);
      this.camera.position.set(0, 0, 0);

      // Renderer
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        powerPreference: "high-performance"
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;

      // Ambient Lighting
      const ambient = new THREE.AmbientLight(0x0e1422, 1.2);
      this.scene.add(ambient);

      // Master Well Group
      this.wellGroup = new THREE.Group();
      this.scene.add(this.wellGroup);
    }

    setupWellEnvironment() {
      // 1. Tapering Well Tunnel Wireframe Grid
      const wellHeight = 140;
      const wellRadiusTop = 18;
      const wellRadiusBottom = 5;

      const tunnelGeo = new THREE.CylinderGeometry(
        wellRadiusTop,
        wellRadiusBottom,
        wellHeight,
        32,
        28,
        true
      );
      const tunnelMat = new THREE.MeshBasicMaterial({
        color: 0x0a1628,
        wireframe: true,
        transparent: true,
        opacity: 0.18
      });
      const tunnelMesh = new THREE.Mesh(tunnelGeo, tunnelMat);
      tunnelMesh.position.y = -wellHeight / 2;
      this.wellGroup.add(tunnelMesh);

      // 2. Descending Concentric Neon Rings along the Well Axis
      const ringCount = 18;
      for (let i = 0; i < ringCount; i++) {
        const progress = i / (ringCount - 1);
        const y = -progress * wellHeight;
        const radius = wellRadiusTop - progress * (wellRadiusTop - wellRadiusBottom);

        const circleGeo = new THREE.BufferGeometry();
        const points = [];
        const segs = 64;
        for (let s = 0; s <= segs; s++) {
          const theta = (s / segs) * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(theta) * radius, y, Math.sin(theta) * radius));
        }
        circleGeo.setFromPoints(points);

        const circleMat = new THREE.LineBasicMaterial({
          color: progress > 0.8 ? 0x003153 : (progress > 0.4 ? 0x3b82f6 : 0x0ea5e9),
          transparent: true,
          opacity: 0.22 + progress * 0.25
        });
        const line = new THREE.Line(circleGeo, circleMat);
        this.wellGroup.add(line);
      }

      // 3. Pinnacle Ring of Light (for the Finale)
      const pinnacleGeo = new THREE.TorusGeometry(8, 0.4, 16, 100);
      const pinnacleMat = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.0
      });
      this.pinnacleRingMesh = new THREE.Mesh(pinnacleGeo, pinnacleMat);
      this.pinnacleRingMesh.rotation.x = Math.PI / 2;
      this.pinnacleRingMesh.position.y = 8;
      this.wellGroup.add(this.pinnacleRingMesh);
    }

    createScreenTexture(project) {
      const c = document.createElement('canvas');
      c.width = 768;
      c.height = 1366;
      const ctx = c.getContext('2d');

      // Base cybernetic panel background
      const grad = ctx.createLinearGradient(0, 0, 0, c.height);
      grad.addColorStop(0, '#090e18');
      grad.addColorStop(0.5, '#05070c');
      grad.addColorStop(1, '#080d16');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, c.width, c.height);

      // Border glow
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, c.width - 20, c.height - 20);

      // Header Tag
      ctx.fillStyle = '#0ea5e9';
      ctx.font = '600 24px "JetBrains Mono", monospace';
      ctx.fillText(project.tag.toUpperCase(), 40, 70);

      // Title in Bodoni Serif
      ctx.fillStyle = '#f2ede4';
      ctx.font = '600 46px "Bodoni Moda", serif';
      this.wrapCanvasText(ctx, project.title, 40, 140, c.width - 80, 56);

      // Subtitle
      ctx.fillStyle = '#94a3b8';
      ctx.font = '400 24px "Jost", sans-serif';
      ctx.fillText(project.subtitle, 40, 270);

      // Decorative divider
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, 305);
      ctx.lineTo(c.width - 40, 305);
      ctx.stroke();

      // Schematic Code Box
      ctx.fillStyle = '#030508';
      ctx.fillRect(40, 330, c.width - 80, 500);
      ctx.strokeStyle = 'rgba(242, 237, 228, 0.15)';
      ctx.strokeRect(40, 330, c.width - 80, 500);

      ctx.fillStyle = '#3b82f6';
      ctx.font = '600 18px "JetBrains Mono", monospace';
      ctx.fillText("ARCHITECTURE SPECIFICATION / CORE CODE:", 60, 370);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '400 18px "JetBrains Mono", monospace';
      const lines = project.codeSnippet.split('\n');
      lines.slice(0, 14).forEach((line, i) => {
        ctx.fillText(line, 60, 410 + i * 28);
      });

      // Operational Problem Box
      ctx.fillStyle = '#38bdf8';
      ctx.font = '600 22px "Jost", sans-serif';
      ctx.fillText("THE CHALLENGE:", 40, 880);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '400 22px "Jost", sans-serif';
      this.wrapCanvasText(ctx, project.problem, 40, 920, c.width - 80, 32);

      // Impact Metric Box
      ctx.fillStyle = 'rgba(0, 49, 83, 0.4)';
      ctx.fillRect(40, 1070, c.width - 80, 140);
      ctx.strokeStyle = '#0ea5e9';
      ctx.strokeRect(40, 1070, c.width - 80, 140);

      ctx.fillStyle = '#0ea5e9';
      ctx.font = '600 20px "JetBrains Mono", monospace';
      ctx.fillText("VERIFIED ENTERPRISE IMPACT", 60, 1115);

      ctx.fillStyle = '#f2ede4';
      ctx.font = '600 24px "Jost", sans-serif';
      this.wrapCanvasText(ctx, project.impact, 60, 1155, c.width - 120, 32);

      // Bottom Status bar
      ctx.fillStyle = '#64748b';
      ctx.font = '400 18px "JetBrains Mono", monospace';
      ctx.fillText("STATUS: VERIFIED ON PORTFOLIO · CLICK TO UNROLL", 40, 1300);

      const texture = new THREE.CanvasTexture(c);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      return texture;
    }

    wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y);
    }

    setupCurvedScreens() {
      // 3 Rings descending down the well, narrowing with depth:
      // Ring 0: Depth Y = -18, Radius = 13.5 (Slow rotation)
      // Ring 1: Depth Y = -48, Radius = 9.8  (Medium rotation)
      // Ring 2: Depth Y = -78, Radius = 6.8  (Fast rotation)
      const ringConfigs = [
        { y: -18, radius: 13.5, height: 7.5, speedMultiplier: 1.0 },
        { y: -48, radius: 9.8,  height: 6.2, speedMultiplier: 1.8 },
        { y: -78, radius: 6.8,  height: 5.0, speedMultiplier: 3.2 }
      ];

      ringConfigs.forEach((config, ringIdx) => {
        const ringGroup = new THREE.Group();
        ringGroup.position.y = config.y;
        ringGroup.userData = {
          speedMultiplier: config.speedMultiplier,
          baseRotation: 0,
          currentRotation: 0
        };

        // 3 screens per ring (120 degrees apart)
        for (let s = 0; s < 3; s++) {
          const project = STUDIO_PROJECTS.find(p => p.ringIndex === ringIdx && p.ringSlot === s);
          if (!project) continue;

          const arcLength = Math.PI * 0.44; // curved screen angle
          const thetaStart = s * ((Math.PI * 2) / 3) - arcLength / 2;

          // Curved screen mesh using open-ended CylinderGeometry
          const screenGeo = new THREE.CylinderGeometry(
            config.radius,
            config.radius,
            config.height,
            32,
            1,
            true,
            thetaStart,
            arcLength
          );

          const texture = this.createScreenTexture(project);
          const screenMat = new THREE.MeshStandardMaterial({
            map: texture,
            side: THREE.DoubleSide,
            roughness: 0.25,
            metalness: 0.1,
            emissive: new THREE.Color(0x0e182a),
            emissiveIntensity: 0.4
          });

          const screenMesh = new THREE.Mesh(screenGeo, screenMat);
          screenMesh.userData = {
            project: project,
            texture: texture,
            ringIndex: ringIdx,
            slot: s,
            originalRadius: config.radius,
            originalY: config.y,
            originalThetaStart: thetaStart
          };

          ringGroup.add(screenMesh);
          this.screenMeshes.push(screenMesh);
        }

        this.rings.push(ringGroup);
        this.wellGroup.add(ringGroup);
      });
    }

    setupBottomArena() {
      // Bottom depth: Y = -105 to -125
      const bottomY = -108;

      // 1. Dark Circular Arena Floor
      const floorGeo = new THREE.CircleGeometry(7.5, 48);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x040609,
        roughness: 0.4,
        metalness: 0.8
      });
      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      floorMesh.rotation.x = -Math.PI / 2;
      floorMesh.position.y = bottomY;
      this.wellGroup.add(floorMesh);

      // 2. Pool of Prussian-Blue Light (#003153)
      const lightPoolGeo = new THREE.RingGeometry(0.1, 4.2, 48);
      const lightPoolMat = new THREE.MeshBasicMaterial({
        color: 0x003153,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65
      });
      const lightPool = new THREE.Mesh(lightPoolGeo, lightPoolMat);
      lightPool.rotation.x = -Math.PI / 2;
      lightPool.position.y = bottomY + 0.05;
      this.wellGroup.add(lightPool);

      // Prussian-Blue Spotlight shining directly down on the lone figure
      this.prussianLight = new THREE.SpotLight(0x00416a, 8, 35, Math.PI / 4, 0.5, 1.2);
      this.prussianLight.position.set(0, bottomY + 18, 0);
      this.prussianLight.target = floorMesh;
      this.wellGroup.add(this.prussianLight);

      // 3. The Lone 3D Observer Figure (Stylized obsidian silhouette)
      const figureGroup = new THREE.Group();
      figureGroup.position.set(0, bottomY, 0);

      const figureMat = new THREE.MeshStandardMaterial({
        color: 0x060911,
        roughness: 0.3,
        metalness: 0.9,
        emissive: new THREE.Color(0x00223d),
        emissiveIntensity: 0.3
      });

      // Head
      const headGeo = new THREE.SphereGeometry(0.32, 16, 16);
      const head = new THREE.Mesh(headGeo, figureMat);
      head.position.y = 2.45;
      figureGroup.add(head);

      // Torso
      const torsoGeo = new THREE.BoxGeometry(0.65, 1.1, 0.4);
      const torso = new THREE.Mesh(torsoGeo, figureMat);
      torso.position.y = 1.7;
      figureGroup.add(torso);

      // Legs
      const legGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 12);
      const leftLeg = new THREE.Mesh(legGeo, figureMat);
      leftLeg.position.set(-0.2, 0.6, 0);
      const rightLeg = new THREE.Mesh(legGeo, figureMat);
      rightLeg.position.set(0.2, 0.6, 0);
      figureGroup.add(leftLeg);
      figureGroup.add(rightLeg);

      this.figureMesh = figureGroup;
      this.figureHead = head;
      this.wellGroup.add(figureGroup);

      // 4. The Zoetrope Slotted Mechanism
      // One big curved screen cranks through the sites, opening slit by slit
      this.zoetropeGroup = new THREE.Group();
      this.zoetropeGroup.position.y = bottomY + 2.5;

      const zoetropeRadius = 5.2;
      const slitCount = 24;
      const slitGeo = new THREE.BoxGeometry(0.15, 4.2, 0.08);
      const slitMat = new THREE.MeshStandardMaterial({
        color: 0x030508,
        metalness: 0.9,
        roughness: 0.2
      });

      for (let sl = 0; sl < slitCount; sl++) {
        const theta = (sl / slitCount) * Math.PI * 2;
        const slit = new THREE.Mesh(slitGeo, slitMat);
        slit.position.set(Math.cos(theta) * zoetropeRadius, 0, Math.sin(theta) * zoetropeRadius);
        slit.rotation.y = -theta;
        this.zoetropeGroup.add(slit);
      }

      // Inside Screen cylinder that cranks through the projects
      const zoeScreenGeo = new THREE.CylinderGeometry(
        zoetropeRadius - 0.2,
        zoetropeRadius - 0.2,
        3.8,
        32,
        1,
        true
      );
      const zoeTexture = this.createScreenTexture(STUDIO_PROJECTS[0]);
      const zoeMat = new THREE.MeshBasicMaterial({
        map: zoeTexture,
        side: THREE.BackSide
      });
      const zoeScreen = new THREE.Mesh(zoeScreenGeo, zoeMat);
      this.zoetropeGroup.add(zoeScreen);
      this.zoeScreenMesh = zoeScreen;

      this.wellGroup.add(this.zoetropeGroup);
    }

    setupEventListeners() {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('wheel', this.onWheel, { passive: false });
      window.addEventListener('touchstart', this.onTouchStart, { passive: true });
      window.addEventListener('touchmove', this.onTouchMove, { passive: false });
      window.addEventListener('pointerdown', this.onPointerDown);

      // Keyboard navigation
      window.addEventListener('keydown', (e) => {
        if (this.isInspecting) {
          if (e.key === 'Escape') this.closeInspector();
          return;
        }
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          this.targetScrollY += 400;
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          this.targetScrollY -= 400;
        }
      });

      // Inspector Close buttons
      const btnClose = document.getElementById('btn-close-inspect');
      const btnBack = document.getElementById('btn-inspect-back');
      if (btnClose) btnClose.addEventListener('click', () => this.closeInspector());
      if (btnBack) btnBack.addEventListener('click', () => this.closeInspector());

      // Audio Toggle Button
      const audioToggle = document.getElementById('hud-audio-toggle');
      const audioIcon = document.getElementById('hud-audio-icon');
      if (audioToggle) {
        audioToggle.addEventListener('click', () => {
          const isLive = this.soundEngine.toggleMute();
          if (audioIcon) {
            audioIcon.className = isLive ? 'ph ph-speaker-high' : 'ph ph-speaker-slash';
          }
        });
      }

      // Finale Replay
      const btnReplay = document.getElementById('btn-replay-well');
      if (btnReplay) {
        btnReplay.addEventListener('click', () => {
          gsap.to(this, {
            targetScrollY: 0,
            duration: 2.5,
            ease: "power3.inOut",
            onComplete: () => {
              this.isFinale = false;
              const finaleEl = document.getElementById('finale-overlay');
              if (finaleEl) finaleEl.style.opacity = '0';
            }
          });
        });
      }
    }

    setupAudioGate() {
      const gate = document.getElementById('audio-gate');
      const btnSound = document.getElementById('btn-enter-sound');
      const btnQuiet = document.getElementById('btn-enter-quiet');

      const enter = (sound) => {
        this.soundEngine.init(sound);
        if (gate) {
          gate.style.opacity = '0';
          setTimeout(() => { gate.style.display = 'none'; }, 800);
        }
      };

      if (btnSound) btnSound.addEventListener('click', () => enter(true));
      if (btnQuiet) btnQuiet.addEventListener('click', () => enter(false));
    }

    setupHUD() {
      // Periodic subtle telemetry update
      setInterval(() => {
        if (!this.hudSpeed) return;
        const currentSpeed = (Math.abs(this.scrollVelocity) * 12.4).toFixed(1);
        this.hudSpeed.textContent = `${currentSpeed} km/s`;
      }, 120);
    }

    onWheel(e) {
      if (this.isInspecting) return;
      e.preventDefault();
      this.targetScrollY += e.deltaY * 0.9;
      this.targetScrollY = Math.max(0, Math.min(this.targetScrollY, this.maxScrollDepth + 600));
    }

    onTouchStart(e) {
      if (this.isInspecting) return;
      if (e.touches.length > 0) {
        this.touchStartY = e.touches[0].clientY;
      }
    }

    onTouchMove(e) {
      if (this.isInspecting) return;
      if (e.touches.length > 0) {
        const delta = this.touchStartY - e.touches[0].clientY;
        this.touchStartY = e.touches[0].clientY;
        this.targetScrollY += delta * 2.2;
        this.targetScrollY = Math.max(0, Math.min(this.targetScrollY, this.maxScrollDepth + 600));
        e.preventDefault();
      }
    }

    onPointerDown(e) {
      if (this.isInspecting) return;
      // Raycast against screens
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);

      const intersects = this.raycaster.intersectObjects(this.screenMeshes, false);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        this.openInspector(hit);
      }
    }

    openInspector(screenMesh) {
      this.isInspecting = true;
      this.inspectedScreen = screenMesh;
      const project = screenMesh.userData.project;

      // Populate Drawer
      document.getElementById('inspect-tag').textContent = project.tag;
      document.getElementById('inspect-title').textContent = project.title;
      document.getElementById('inspect-subtitle').textContent = project.subtitle;
      document.getElementById('inspect-code').textContent = project.codeSnippet;
      document.getElementById('inspect-problem').textContent = project.problem;
      document.getElementById('inspect-solution').textContent = project.solution;
      document.getElementById('inspect-impact').textContent = project.impact;

      const inspector = document.getElementById('screen-inspector');
      if (inspector) inspector.classList.add('active');

      // Unroll Sound click
      this.soundEngine.playRatchet(1.5);
    }

    closeInspector() {
      this.isInspecting = false;
      this.inspectedScreen = null;
      const inspector = document.getElementById('screen-inspector');
      if (inspector) inspector.classList.remove('active');
      this.soundEngine.playRatchet(0.8);
    }

    onResize() {
      if (!this.camera || !this.renderer) return;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
      requestAnimationFrame(this.animate);

      const delta = this.clock.getDelta();

      // Smooth scroll lerp
      const prevScrollY = this.scrollY;
      this.scrollY += (this.targetScrollY - this.scrollY) * 0.085;
      this.scrollVelocity = this.scrollY - prevScrollY;

      // Sound dynamics
      this.soundEngine.updateDynamics(this.scrollVelocity);
      if (Math.abs(this.scrollVelocity) > 0.8) {
        this.soundEngine.playRatchet(this.scrollVelocity);
      }

      // Hide scroll hint once user starts scrolling
      if (this.scrollY > 150 && this.scrollHint) {
        this.scrollHint.style.opacity = '0';
      }

      // Map scroll progress (0 to 1) down the well
      const progress = Math.min(1.0, this.scrollY / this.maxScrollDepth);
      const wellDescent = progress * 105; // 0 down to -105m

      // Camera position
      if (this.scrollY <= this.maxScrollDepth) {
        // Descending into the well
        this.camera.position.y = -wellDescent;
        this.camera.position.x = Math.sin(this.scrollY * 0.001) * 1.5;
        this.camera.position.z = Math.cos(this.scrollY * 0.001) * 1.5;
        this.camera.rotation.y = this.scrollY * 0.0006;
        this.camera.rotation.x = Math.sin(this.scrollY * 0.0008) * 0.12;

        if (this.pinnacleRingMesh) {
          this.pinnacleRingMesh.material.opacity = 0.0;
        }
        if (this.isFinale) {
          this.isFinale = false;
          const finaleEl = document.getElementById('finale-overlay');
          if (finaleEl) finaleEl.style.opacity = '0';
        }
      } else {
        // Finale Ascent: Camera rapidly pulls up until well is a ring of light!
        const finaleProgress = (this.scrollY - this.maxScrollDepth) / 600;
        const ascentY = THREE.MathUtils.lerp(-105, 18, finaleProgress);
        this.camera.position.set(0, ascentY, 0);
        this.camera.lookAt(0, -60, 0);

        if (this.pinnacleRingMesh) {
          this.pinnacleRingMesh.material.opacity = Math.min(1.0, finaleProgress * 1.8);
        }

        if (!this.isFinale && finaleProgress > 0.4) {
          this.isFinale = true;
          const finaleEl = document.getElementById('finale-overlay');
          if (finaleEl) finaleEl.style.opacity = '1';
        }
      }

      // Rotate each ring according to depth multiplier and scroll speed
      this.rings.forEach((ring) => {
        const speed = ring.userData.speedMultiplier;
        ring.rotation.y += delta * 0.12 * speed + this.scrollVelocity * 0.002 * speed;
      });

      // Scroll recording playback: animate textures top-to-bottom
      this.screenMeshes.forEach((mesh) => {
        if (mesh.userData && mesh.userData.texture) {
          // Playback offset driven by scroll velocity & idle drift
          mesh.userData.texture.offset.y += delta * 0.015 + this.scrollVelocity * 0.0004;
        }
      });

      // Zoetrope mechanism rotation at the bottom
      if (this.zoetropeGroup) {
        this.zoetropeGroup.rotation.y += delta * 0.4 + this.scrollVelocity * 0.003;
      }

      // Lone Figure Head Tracking:
      // Turns to watch whichever screen you look at or hover near
      if (this.figureMesh && this.figureHead) {
        const closestScreen = this.findClosestScreenToCamera();
        if (closestScreen) {
          const targetWorldPos = new THREE.Vector3();
          closestScreen.getWorldPosition(targetWorldPos);
          this.figureMesh.lookAt(targetWorldPos.x, this.figureMesh.position.y, targetWorldPos.z);
        }
      }

      // HUD Depth & Ring updates
      if (this.hudDepth) {
        this.hudDepth.textContent = `Depth: ${Math.round(wellDescent)}m`;
      }
      if (this.hudRing) {
        if (wellDescent < 30) this.hudRing.textContent = `Ring 1: Surface`;
        else if (wellDescent < 60) this.hudRing.textContent = `Ring 2: Middle`;
        else if (wellDescent < 95) this.hudRing.textContent = `Ring 3: Abyss`;
        else this.hudRing.textContent = `Floor: Prussian Blue`;
      }

      // Speed-streak radial lens distortion:
      if (this.lensEffect) {
        const streakIntensity = Math.min(1.0, Math.abs(this.scrollVelocity) * 0.08);
        this.lensEffect.style.opacity = (0.3 + streakIntensity * 0.7).toString();
      }

      // Render
      this.renderer.render(this.scene, this.camera);
    }

    findClosestScreenToCamera() {
      let minDist = Infinity;
      let closest = null;
      const camPos = this.camera.position;

      for (let i = 0; i < this.screenMeshes.length; i++) {
        const mesh = this.screenMeshes[i];
        const worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        const dist = camPos.distanceTo(worldPos);
        if (dist < minDist) {
          minDist = dist;
          closest = mesh;
        }
      }
      return closest;
    }
  }

  // ============================================================================
  // 4. BOOTSTRAP ON LOAD
  // ============================================================================
  window.addEventListener('DOMContentLoaded', () => {
    const app = new SpatialWellApp();
    app.init();
  });

})();
