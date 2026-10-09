import zipfile
import xml.sax.saxutils as saxutils
import os
import subprocess

def escape(text):
    return saxutils.escape(text)

def make_run(text="", bold=False, italic=False, size=18, font="Calibri", color="000000", underline=False, is_tab=False):
    if is_tab:
        return '<w:r><w:tab/></w:r>'
    
    rpr_parts = []
    if font:
        rpr_parts.append(f'<w:rFonts w:ascii="{font}" w:hAnsi="{font}" w:cs="{font}"/>')
    if bold:
        rpr_parts.append('<w:b/><w:bCs/>')
    if italic:
        rpr_parts.append('<w:i/><w:iCs/>')
    if size:
        rpr_parts.append(f'<w:sz w:val="{size}"/><w:szCs w:val="{size}"/>')
    if color:
        rpr_parts.append(f'<w:color w:val="{color}"/>')
    if underline:
        rpr_parts.append('<w:u w:val="single"/>')
    
    rpr = f"<w:rPr>{''.join(rpr_parts)}</w:rPr>" if rpr_parts else ""
    t = f'<w:t xml:space="preserve">{escape(text)}</w:t>'
    return f'<w:r>{rpr}{t}</w:r>'

def make_p(runs, align="left", space_before=0, space_after=30, line_spacing=230, border_bottom=False, tabs=None, bullet=False, small_caps=False):
    ppr_parts = []
    if align != "left":
        ppr_parts.append(f'<w:jc w:val="{align}"/>')
    
    ppr_parts.append(f'<w:spacing w:before="{space_before}" w:after="{space_after}" w:line="{line_spacing}" w:lineRule="auto"/>')
    
    if border_bottom:
        ppr_parts.append('<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="000000"/></w:pBdr>')
        
    if tabs:
        tab_tags = ''.join([f'<w:tab w:val="{t.get("val", "right")}" w:pos="{t["pos"]}"/>' for t in tabs])
        ppr_parts.append(f'<w:tabs>{tab_tags}</w:tabs>')
        
    if bullet:
        ppr_parts.append('<w:ind w:left="320" w:hanging="180"/>')
        
    rpr_p = ""
    if small_caps:
        rpr_p = "<w:rPr><w:smallCaps/></w:rPr>"
        
    ppr = f"<w:pPr>{''.join(ppr_parts)}{rpr_p}</w:pPr>"
    return f"<w:p>{ppr}{''.join(runs)}</w:p>"

def section_heading(title):
    runs = [make_run(title, bold=True, size=21, font="Calibri")]
    return make_p(runs, align="left", space_before=70, space_after=25, line_spacing=230, border_bottom=True, small_caps=True)

def parse_formatted_text(parts, base_size=18, base_font="Calibri", base_italic=False):
    runs = []
    for item in parts:
        if isinstance(item, str):
            runs.append(make_run(item, bold=False, italic=base_italic, size=base_size, font=base_font))
        elif len(item) == 2:
            text, bold = item
            runs.append(make_run(text, bold=bold, italic=base_italic, size=base_size, font=base_font))
        elif len(item) == 3:
            text, bold, italic = item
            runs.append(make_run(text, bold=bold, italic=italic, size=base_size, font=base_font))
    return runs

def bullet_p(parts, base_size=18):
    runs = [make_run("•  ", bold=False, size=base_size, font="Calibri")]
    runs.extend(parse_formatted_text(parts, base_size=base_size))
    return make_p(runs, align="left", space_before=0, space_after=20, line_spacing=220, bullet=True)

def build_resume_xml(config):
    paragraphs = []
    
    # 1. Header
    paragraphs.append(make_p([make_run("RISHI THAKUR", bold=True, size=36, font="Calibri")], align="center", space_before=0, space_after=15))
    paragraphs.append(make_p([make_run(config["title_line"], bold=True, size=20, font="Calibri", color="222222")], align="center", space_before=0, space_after=15))
    
    contact_parts = [
        ("Bengaluru, India  •  +91 8109830219  •  ", False),
        ("rishi_th219@proton.me", False),
        ("  •  ", False),
        ("linkedin.com/in/rishi-thakur-b665a4298", False),
        ("  •  ", False),
        ("github.com/rishi-th219", False)
    ]
    paragraphs.append(make_p(parse_formatted_text(contact_parts, base_size=16), align="center", space_before=0, space_after=40))
    
    # 2. Professional Summary
    paragraphs.append(section_heading("PROFESSIONAL SUMMARY"))
    paragraphs.append(make_p([make_run(config["summary"], size=18, font="Calibri")], align="left", space_before=10, space_after=35, line_spacing=220))
    
    # 3. Technical Skills
    paragraphs.append(section_heading("TECHNICAL SKILLS"))
    for sk in config["skills"]:
        paragraphs.append(bullet_p(sk, base_size=17.5))
        
    # 4. Professional Experience
    paragraphs.append(section_heading("PROFESSIONAL EXPERIENCE"))
    exp_h1 = [
        make_run(config["exp_role"], bold=True, size=19, font="Calibri"),
        make_run("", is_tab=True),
        make_run("06/2025 – 03/2026", bold=True, size=18, font="Calibri")
    ]
    paragraphs.append(make_p(exp_h1, align="left", space_before=30, space_after=5, tabs=[{"val": "right", "pos": 10800}]))
    
    exp_h2 = [
        make_run("Dept. of Health & Family Welfare, Govt. of Chhattisgarh", italic=True, size=18, font="Calibri"),
        make_run("", is_tab=True),
        make_run("Raipur, India", italic=True, size=18, font="Calibri")
    ]
    paragraphs.append(make_p(exp_h2, align="left", space_before=0, space_after=12, tabs=[{"val": "right", "pos": 10800}]))
    
    for b in config["exp_bullets"]:
        paragraphs.append(bullet_p(b, base_size=17.5))
        
    # 5. Key Projects
    paragraphs.append(section_heading("KEY PROJECTS"))
    for proj in config["projects"]:
        p_header_runs = [
            make_run(proj["name"], bold=True, size=19, font="Calibri"),
            make_run(" | ", False, size=18, font="Calibri"),
            make_run(proj["tools"], italic=True, size=17.5, font="Calibri"),
            make_run("", is_tab=True),
            make_run(proj["tag"], bold=True, size=17.5, font="Calibri")
        ]
        paragraphs.append(make_p(p_header_runs, align="left", space_before=25, space_after=10, tabs=[{"val": "right", "pos": 10800}]))
        for b in proj["bullets"]:
            paragraphs.append(bullet_p(b, base_size=17.5))
            
    # 6. Education
    paragraphs.append(section_heading("EDUCATION"))
    edu_1 = [
        make_run("M.Tech in Computer Science & Engineering", bold=True, size=19, font="Calibri"),
        make_run(" | IIIT Naya Raipur (", False, size=18, font="Calibri"),
        make_run("CGPA: 7.90", bold=True, size=18, font="Calibri"),
        make_run(")", False, size=18, font="Calibri"),
        make_run("", is_tab=True),
        make_run("08/2024 – 07/2026", bold=True, size=18, font="Calibri")
    ]
    paragraphs.append(make_p(edu_1, align="left", space_before=25, space_after=10, tabs=[{"val": "right", "pos": 10800}]))
    
    edu_2 = [
        make_run("B.Tech in Computer Science & Engineering", bold=True, size=19, font="Calibri"),
        make_run(" | Amity University Chhattisgarh (", False, size=18, font="Calibri"),
        make_run("CGPA: 7.71", bold=True, size=18, font="Calibri"),
        make_run(")", False, size=18, font="Calibri"),
        make_run("", is_tab=True),
        make_run("08/2019 – 06/2023", bold=True, size=18, font="Calibri")
    ]
    paragraphs.append(make_p(edu_2, align="left", space_before=0, space_after=25, tabs=[{"val": "right", "pos": 10800}]))
    
    # 7. Certifications
    paragraphs.append(section_heading("CERTIFICATIONS & KEY QUALIFICATIONS"))
    for c in config["certs"]:
        paragraphs.append(bullet_p(c, base_size=17.5))
        
    # Combine into document.xml
    body_content = "".join(paragraphs)
    sect_pr = (
        '<w:sectPr>'
        '<w:pgSz w:w="12240" w:h="15840"/>'
        '<w:pgMar w:top="600" w:right="600" w:bottom="600" w:left="600" w:header="500" w:footer="500" w:gutter="0"/>'
        '<w:cols w:space="720"/>'
        '<w:docGrid w:linePitch="360"/>'
        '</w:sectPr>'
    )
    
    doc_xml = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
        f'<w:body>{body_content}{sect_pr}</w:body>'
        '</w:document>'
    )
    
    return doc_xml

def save_docx(doc_xml, filename):
    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
  <Override PartName="/word/fontTable.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>'''

    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>'''

    doc_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable" Target="fontTable.xml"/>
</Relationships>'''

    core_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Rishi Thakur - Resume</dc:title>
  <dc:creator>Rishi Thakur</dc:creator>
  <cp:lastModifiedBy>Rishi Thakur</cp:lastModifiedBy>
</cp:coreProperties>'''

    app_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Microsoft Office Word</Application>
</Properties>'''

    settings_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:defaultTabStop w:val="720"/>
  <w:characterSpacingControl w:val="doNotCompress"/>
</w:settings>'''

    font_table_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:fontTable xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:font w:name="Calibri">
    <w:panose1 w:val="020F0502020204030204"/>
    <w:charset w:val="00"/>
    <w:family w:val="swiss"/>
    <w:pitch w:val="variable"/>
  </w:font>
</w:fontTable>'''

    styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
        <w:sz w:val="18"/>
        <w:szCs w:val="18"/>
        <w:color w:val="000000"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr>
        <w:spacing w:after="30" w:line="230" w:lineRule="auto"/>
      </w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
</w:styles>'''

    with zipfile.ZipFile(filename, 'w', zipfile.ZIP_DEFLATED) as zf:
        zf.writestr('[Content_Types].xml', content_types)
        zf.writestr('_rels/.rels', rels)
        zf.writestr('docProps/core.xml', core_xml)
        zf.writestr('docProps/app.xml', app_xml)
        zf.writestr('word/_rels/document.xml.rels', doc_rels)
        zf.writestr('word/settings.xml', settings_xml)
        zf.writestr('word/fontTable.xml', font_table_xml)
        zf.writestr('word/styles.xml', styles_xml)
        zf.writestr('word/document.xml', doc_xml)

# Config 1: SQL DEVELOPER RESUME
sql_dev_config = {
    "title_line": "SQL Developer | Database Engineering & Analytics",
    "summary": "High-performing SQL Developer and Database Specialist experienced in relational database design, complex analytical querying, and enterprise data reconciliation across state-scale architectures. Proven background engineering high-throughput SQL pipelines (multi-table joins, recursive CTEs, window functions, execution plan optimization) across MariaDB, OracleDB, and MySQL for 33 districts and 1,000+ facilities at CHiPS. Skilled in dimensional Star Schema architecture, multi-source ETL identity resolution, and Advanced Excel data auditing to deliver verified, high-integrity analytical data layers.",
    "skills": [
        [("Databases & Querying: ", True), ("Advanced SQL (T-SQL, MySQL, MariaDB, OracleDB, PostgreSQL) — Complex Multi-Table Joins, Recursive CTEs, Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG), Subqueries, Aggregations, Execution Plan Tuning, Indexing Strategies, Stored Procedures & Triggers", False)],
        [("Data Modeling & ETL: ", True), ("Dimensional Modeling (Kimball Star Schema, Fact & Dimension Tables, SCD Types), Multi-Source ETL Pipelines, Identity Resolution Algorithms, Heterogeneous Schema Reconciliation, Data Integrity Controls, Data Cleansing", False)],
        [("Advanced Excel & BI: ", True), ("Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Nested Logic, Pivot Tables, Power Pivot Data Modeling, Power Query M-code, Scenario Modeling, VBA & Macros), Microsoft Power BI (DAX Measures, Time Intelligence), Oracle Analytics Cloud (OAC)", False)],
        [("Programming & Quality: ", True), ("Python (Pandas, NumPy, Scikit-learn), Automated Data Validation Pipelines, UAT Testing Protocols, Relational Schema DDL/DML Design, Git, Technical Documentation & Audit Trails", False)]
    ],
    "exp_role": "SQL Developer & Data Analyst Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
        [("Automated SQL/ETL Identity Resolution: ", True), ("Engineered an automated SQL/ETL pipeline utilizing complex multi-table CTEs, string normalization, and window functions to bridge disparate AEBAS biometric attendance IDs with State Treasury payroll records, resolving cross-departmental tracking gaps and categorizing doctors into 3 compliance tiers.", False)],
        [("Heterogeneous Schema Reconciliation: ", True), ("Collaborated directly with National Informatics Centre (NIC) database engineers to reconcile disparate relational schemas across MariaDB attendance engines, State Treasury databases, and National NextGen e-Hospital OPD systems into a unified dimensional data mart.", False)],
        [("Dimensional Modeling & Performance Tuning: ", True), ("Designed and maintained performant Kimball Star Schema fact and dimension tables; optimized long-running analytical queries through indexed staging views and CTE refactoring, reducing data extraction latencies for executive BI reporting.", False)],
        [("Supply Chain & Inventory SQL Workflows: ", True), ("Authored advanced Oracle SQL queries aggregating multi-year batch consumption, lead times, safety stocks, and reorder triggers on essential drug catalogs in OracleDB; performed multi-dimensional ABC, VED, and SDE matrix classification deployed across 5 sub-departments.", False)],
        [("Advanced Excel Data Auditing & Validation: ", True), ("Built automated Excel auditing workbooks leveraging Power Query, dynamic array formulas, and Pivot Tables to cross-verify SQL database extracts against field submissions, ensuring 100% data fidelity for executive review by the Department Secretary.", False)]
    ],
    "projects": [
        {
            "name": "Proactive Risk Prediction & Decision Engine",
            "tools": "Python, PyTorch, Scikit-learn",
            "tag": "M.Tech Thesis — Predictive ML",
            "bullets": [
                [("Engineered an automated proactive decision framework replacing reactive delay-based protocols using multivariate temporal telemetry; handled 98:2 class imbalance via ", False), ("SMOTE + Tomek Links", True), (" and attained a ", False), ("97.64% F1-score", True), (" on failure classification.", False)]
            ]
        },
        {
            "name": "Anomalous Content & Text Classification System",
            "tools": "Python, BERT, XGBoost, Transformers",
            "tag": "Applied Machine Learning & NLP",
            "bullets": [
                [("Built and benchmarked dual classification pipelines (BERT + XGBoost and Deep Hybrid Neural Networks) to isolate synthetic and anomalous patterns across large corpora, optimizing decision thresholds to achieve ", False), ("99% Precision", True), (" and ", False), ("98% Recall", True), (".", False)]
            ]
        }
    ],
    "certs": [
        [("SQL for Beginners & Database Design (Udemy)", True), ("  |  ", False), ("Qualified GATE (CS), 2024", True)],
        [("Microsoft Power BI Desktop for Business Intelligence (Udemy)", True), ("  |  ", False), ("IELTS Academic: 7.5 Band Score", True)],
        [("Python for Data Science, AI & Development (Coursera)", True), ("  |  ", False), ("Machine Learning (NPTEL)", True)]
    ]
}

# Config 2: DATA ANALYST RESUME (WITH HEAVY EXCEL FOCUS)
data_analyst_config = {
    "title_line": "Data Analyst | Business Intelligence & Analytics Engineering",
    "summary": "Results-oriented Data Analyst experienced in developing automated data pipelines, dimensional data models, Advanced Excel analytical workbooks, and enterprise Power BI dashboards from end to end. Proven background resolving multi-source data discrepancies across state-scale public healthcare databases, authoring SQL/ETL identity-resolution workflows, and translating complex operational KPIs into high-impact analytical tools that drive executive decision-making. Backed by M.Tech (CSE), GATE (CS) qualification, and advanced proficiency in SQL, Power BI, Advanced Excel (Power Query, Pivot Tables, Scenario Modeling), and Python.",
    "skills": [
        [("Advanced Excel & BI: ", True), ("Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Complex Nested Formulas, Pivot Tables, Power Pivot, Data Modeling, Power Query / M ETL, What-If Scenario Analysis, VBA / Macros, Executive KPI Dashboards, Conditional Formatting), Microsoft Power BI, DAX (Measures, Time Intelligence), Oracle Analytics Cloud (OAC), KPI Scorecards", False)],
        [("Databases & Querying: ", True), ("Advanced SQL (T-SQL, MySQL, MariaDB, OracleDB) — Complex Multi-Table Joins, CTEs, Window Functions (ROW_NUMBER, RANK, LEAD/LAG), Subqueries, Aggregations, Relational Database Design, Query Execution Plan Tuning", False)],
        [("Data Modeling & ETL: ", True), ("Dimensional Modeling (Kimball Star Schema), Multi-Source ETL Pipelines, Identity Resolution Algorithms, Heterogeneous Schema Reconciliation, Data Validation & Cleansing, Data Integrity Controls", False)],
        [("Analytics & Programming: ", True), ("Python (Pandas, NumPy, Scikit-learn), Inventory Analysis (ABC/VED/SDE), Metric & Dimension Definition, Root Cause Analysis, Trend & Variance Analysis, UAT Protocols, Technical Documentation", False)]
    ],
    "exp_role": "Data Analyst & BI Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
        [("Statewide BI Dashboard Architecture: ", True), ("Architected an executive 6-page statewide Power BI attendance dashboard across 33 districts, structuring 4-tier top-down drill-downs (District → Facility → Designation → Employee) with custom DAX measures tracking avg. work hours, attendance %, and missed logins.", False)],
        [("Advanced Excel Auditing & Operational Analysis: ", True), ("Developed multi-tab analytical Excel workbooks powered by Power Query, dynamic arrays (XLOOKUP, INDEX/MATCH), and Power Pivot data models to cross-validate district-level biometric logs with Treasury payroll files, enabling rapid ad-hoc scenario modeling and executive exception tracking.", False)],
        [("Automated SQL/ETL Identity Resolution: ", True), ("Engineered an automated SQL/ETL pipeline mapping AEBAS biometric attendance IDs to State Treasury payroll records, closing a critical cross-departmental tracking gap and categorizing bonded doctors into 3 actionable compliance tiers.", False)],
        [("Cross-Department Schema Reconciliation: ", True), ("Integrated multi-source data across MariaDB, State Treasury, and National NextGen e-Hospital OPD systems, collaborating with NIC engineers to reconcile heterogeneous modular schemas into a unified reporting layer.", False)],
        [("Supply Chain & Inventory Analytics: ", True), ("Conducted ABC, VED, and SDE inventory categorization analysis on essential drug catalogs in OracleDB, deploying interactive dashboards to Oracle Analytics Cloud (OAC) to guide statewide procurement decisions across 5 sub-departments.", False)]
    ],
    "projects": [
        {
            "name": "Proactive 5G Handover Prediction (Diffusion Models)",
            "tools": "Python, PyTorch, GRU, DDPM, Scikit-learn",
            "tag": "M.Tech Thesis — Predictive Analytics",
            "bullets": [
                [("Developed a GRU-conditioned diffusion model (DDPM/DDIM) to forecast radio signal degradation from multivariate spatiotemporal telemetry; addressed 98:2 class imbalance via ", False), ("SMOTE + Tomek Links", True), (" and attained a ", False), ("97.64% F1-score", True), (" on failure classification.", False)]
            ]
        },
        {
            "name": "AI vs. Human Text Classification Pipeline",
            "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers",
            "tag": "Applied Machine Learning & NLP",
            "bullets": [
                [("Designed and benchmarked dual NLP pipelines (BERT + XGBoost and hybrid Bi-LSTM/CNN/Transformer architecture) on large corpora, optimizing decision boundaries to achieve ", False), ("99% Precision", True), (" and ", False), ("98% Recall", True), (".", False)]
            ]
        }
    ],
    "certs": [
        [("Microsoft Power BI Desktop for Business Intelligence (Udemy)", True), ("  |  ", False), ("Qualified GATE (CS), 2024", True)],
        [("SQL for Beginners & Database Design (Udemy)", True), ("  |  ", False), ("IELTS Academic: 7.5 Band Score", True)],
        [("Python for Data Science, AI & Development (Coursera)", True), ("  |  ", False), ("Machine Learning (NPTEL)", True)]
    ]
}

# Config 3: BUSINESS ANALYST RESUME (WITH HEAVY EXCEL FOCUS)
business_analyst_config = {
    "title_line": "Business Analyst | SQL Developer & Analytics Engineering",
    "summary": "Business Analyst and SQL Developer with expertise in business problem decomposition, advanced relational database querying, Advanced Excel scenario modeling, and executive leadership alignment. Proven track record partnering directly with the Department Secretary to deconstruct complex statewide operational bottlenecks into 3 structured, data-driven initiatives across 33 districts. Experienced in authoring advanced SQL workflows (CTEs, window functions, schema reconciliation), building dynamic financial/operational models in Excel, and deploying interactive Power BI dashboards that drive data-backed policy decisions.",
    "skills": [
        [("Business & Strategy Analytics: ", True), ("Business Problem Decomposition, Risk & Defaulter Segmentation, Root Cause Analysis, Hypothesis Testing, Metric & KPI Definition, Operational Strategy, Impact Measurement, Executive Decision Support", False)],
        [("Advanced Excel & Financial Modeling: ", True), ("Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Complex Nested Formulas, Pivot Tables, Power Pivot, Power Query ETL, What-If Scenario Analysis, Sensitivity Matrices, Financial Modeling, VBA & Macros), Executive Dashboards", False)],
        [("Databases & Querying: ", True), ("Advanced SQL (Complex Multi-Table Joins, CTEs, Window Functions, Subqueries, Aggregations), MySQL, MariaDB, OracleDB, T-SQL, Query Optimization, Relational Database Design", False)],
        [("Data Modeling & BI: ", True), ("Schema Reconciliation across Heterogeneous Sources, Identity Resolution, Multi-Source ETL Pipelines, Dimensional Modeling (Star Schema), Microsoft Power BI (DAX, Drill-downs), Oracle Analytics Cloud (OAC), UAT Protocols", False)]
    ],
    "exp_role": "Business Analyst & SQL Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
        [("Problem Decomposition & Leadership Alignment: ", True), ("Partnered directly with the Department Secretary to deconstruct complex statewide attendance and doctor service bond compliance issues across 33 districts into 3 progressive, data-driven initiatives with defined metrics.", False)],
        [("Risk & Defaulter Segmentation: ", True), ("Uncovered systemic compliance gaps by conceptualizing a 3-tier defaulter risk model for bonded personnel (Non-Joiners, Formal-Only Registrants, and Attendance Defaulters), mapping State Treasury payroll data to track financial leakage.", False)],
        [("Operational Financial Modeling & Excel Analytics: ", True), ("Built executive scenario modeling workbooks in Advanced Excel combining Power Query ETL and dynamic sensitivity matrices to evaluate payroll discrepancies and bonded doctor compliance rates across 33 districts.", False)],
        [("Advanced SQL Querying & Identity Resolution: ", True), ("Authored complex SQL pipelines (multi-way joins, CTEs, window functions) bridging AEBAS biometric attendance IDs with State Treasury payroll records, resolving name and designation discrepancies for bonded doctors.", False)],
        [("Executive Dashboards & Decision Support: ", True), ("Architected an executive 6-page Power BI dashboard with top-down drill-downs (District → Facility → Designation → Individual) tracking core KPIs, enabling leadership to enforce data-backed policy actions across 5 sub-departments.", False)]
    ],
    "projects": [
        {
            "name": "Proactive Risk Prediction & AI Decision Engine",
            "tools": "Python, PyTorch, Scikit-learn",
            "tag": "Predictive Risk Analytics",
            "bullets": [
                [("Engineered an automated proactive decision framework replacing reactive delay-based protocols to predict high-impact system failures before occurrence using multivariate temporal telemetry, attaining a ", False), ("97.64% F1-score", True), (" and handling 98:2 class imbalance via ", False), ("SMOTE + Tomek Links", True), (".", False)]
            ]
        },
        {
            "name": "Anomalous Content & Text Classification System",
            "tools": "Python, BERT, XGBoost",
            "tag": "Applied Analytics",
            "bullets": [
                [("Built and benchmarked dual classification pipelines (BERT + XGBoost and Deep Hybrid Neural Networks) to isolate synthetic and anomalous patterns across large corpora, optimizing decision thresholds to achieve ", False), ("99% Precision", True), (" and ", False), ("98% Recall", True), (".", False)]
            ]
        }
    ],
    "certs": [
        [("SQL for Beginners & Database Design (Udemy)", True), ("  |  ", False), ("Microsoft Power BI Desktop for Business Intelligence (Udemy)", True)],
        [("Python for Data Science, AI & Development (Coursera)", True), ("  |  ", False), ("Qualified GATE (CS), 2024", True), ("  |  ", False), ("IELTS Academic: 7.5 Band Score", True)]
    ]
}

# Config 4: POWER BI DEVELOPER RESUME
power_bi_config = {
    "title_line": "Data Analyst | Power BI Developer & Business Intelligence",
    "summary": "Results-oriented Data Analyst and Power BI Developer experienced in designing end-to-end business intelligence solutions, dimensional data models, Advanced Excel analytical workbooks, and automated SQL/ETL pipelines. Proven track record architecting enterprise-scale interactive Power BI dashboards across 33 districts, establishing multi-level DAX-powered drill-down hierarchies, and reconciling multi-source datasets across MariaDB, State Treasury, and OracleDB. Skilled in conducting inventory analytics (ABC/VED/SDE), developing complex DAX measures, and delivering actionable visual insights.",
    "skills": [
        [("BI & Data Visualization: ", True), ("Microsoft Power BI, DAX (Calculated Columns, Measures, Time Intelligence, Compliance Ratios), Power Query (M Language ETL), Oracle Analytics Cloud (OAC), Dynamic KPI Scorecards, Row-Level Security, Interactive Drill-Throughs", False)],
        [("Advanced Excel & Modeling: ", True), ("Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays, Nested Logic, Pivot Tables, Power Pivot Data Modeling, Scenario Modeling, VBA/Macros), Executive Reporting", False)],
        [("Databases & Querying: ", True), ("Advanced SQL (Complex Multi-Table Joins, CTEs, Window Functions, Subqueries, Aggregations), MySQL, MariaDB, OracleDB, T-SQL, Query Optimization, Relational Database Design", False)],
        [("Data Modeling & Analytics: ", True), ("Dimensional Modeling (Kimball Star Schema), Schema Reconciliation across Heterogeneous Sources, Identity Resolution, Multi-Source ETL Pipelines, Inventory Analysis (ABC/VED/SDE), Data Integrity Controls, UAT Protocols", False)]
    ],
    "exp_role": "Data Analyst & BI Developer Intern | Chhattisgarh Infotech Promotion Society (CHiPS)",
    "exp_bullets": [
        [("Enterprise Power BI Dashboard Architecture: ", True), ("Architected an executive 6-page statewide Power BI attendance dashboard across 33 districts with 4-tier top-down drill-downs (District → Facility → Designation → Employee), custom DAX measures, and dynamic KPI cards tracking avg. work hours, attendance %, and missed logins.", False)],
        [("Advanced DAX & Star Schema Modeling: ", True), ("Engineered a performant Star Schema data model with custom DAX time-intelligence and compliance-ratio measures, optimizing data refreshes and interactive filtering across large MariaDB employee datasets with full drill-through capability.", False)],
        [("Multi-Source SQL/ETL Pipeline: ", True), ("Developed automated SQL identity-resolution workflows mapping AEBAS biometric attendance IDs to State Treasury payroll codes, closing a critical cross-departmental tracking gap and categorizing bonded doctors into 3 actionable compliance tiers.", False)],
        [("Supply Chain & Inventory Analytics: ", True), ("Conducted ABC, VED, and SDE inventory categorization analysis on essential drug catalogs in OracleDB, deploying interactive dashboards to Oracle Analytics Cloud (OAC) to guide statewide procurement decisions across 5 sub-departments.", False)],
        [("Advanced Excel Auditing & Reconciliation: ", True), ("Created multi-source Excel validation models with Power Query and Power Pivot to verify database extract parity, eliminating discrepancies before publishing to Power BI Service.", False)]
    ],
    "projects": [
        {
            "name": "Proactive 5G Handover Prediction (Diffusion Models)",
            "tools": "Python, PyTorch, GRU, DDPM, Scikit-learn",
            "tag": "M.Tech Thesis — Predictive Analytics",
            "bullets": [
                [("Developed a GRU-conditioned diffusion model (DDPM/DDIM) to forecast radio signal degradation from multivariate spatiotemporal telemetry; addressed 98:2 class imbalance via ", False), ("SMOTE + Tomek Links", True), (" and attained a ", False), ("97.64% F1-score", True), (" on failure classification.", False)]
            ]
        },
        {
            "name": "AI vs. Human Text Classification Pipeline",
            "tools": "Python, BERT, XGBoost, Bi-LSTM, Transformers",
            "tag": "Applied Machine Learning & NLP",
            "bullets": [
                [("Designed and benchmarked dual NLP pipelines (BERT + XGBoost and hybrid Bi-LSTM/CNN/Transformer architecture) on large corpora, optimizing decision boundaries to achieve ", False), ("99% Precision", True), (" and ", False), ("98% Recall", True), (".", False)]
            ]
        }
    ],
    "certs": [
        [("Microsoft Power BI Desktop for Business Intelligence (Udemy)", True), ("  |  ", False), ("Qualified GATE (CS), 2024", True)],
        [("SQL for Beginners & Database Design (Udemy)", True), ("  |  ", False), ("IELTS Academic: 7.5 Band Score", True)],
        [("Python for Data Science, AI & Development (Coursera)", True), ("  |  ", False), ("Machine Learning (NPTEL)", True)]
    ]
}

def generate_all():
    targets = [
        ("Rishi_Thakur_SQL_Developer_Resume", sql_dev_config),
        ("Rishi_Thakur_Data_Analyst_Resume", data_analyst_config),
        ("Rishi_Thakur_Business_Analyst_Resume", business_analyst_config),
        ("Rishi_Thakur_PowerBI_Developer_Resume", power_bi_config)
    ]
    
    out_dirs = [
        "/home/rishi21/Desktop/Jobhunt/portfolio/tailoring",
        "/home/rishi21/Desktop/Jobhunt/portfolio/assets"
    ]
    
    lo_profile = "/home/rishi21/Desktop/Jobhunt/portfolio/.lo_profile"
    os.makedirs(lo_profile, exist_ok=True)
    
    for base_name, cfg in targets:
        xml = build_resume_xml(cfg)
        docx_path = f"/home/rishi21/Desktop/Jobhunt/portfolio/tailoring/{base_name}.docx"
        save_docx(xml, docx_path)
        print(f"Generated DOCX: {docx_path}")
        
        # Convert to PDF in tailoring directory
        cmd = [
            "libreoffice",
            f"-env:UserInstallation=file://{lo_profile}",
            "--headless",
            "--convert-to", "pdf",
            docx_path,
            "--outdir", "/home/rishi21/Desktop/Jobhunt/portfolio/tailoring"
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            print(f"Converted PDF: /home/rishi21/Desktop/Jobhunt/portfolio/tailoring/{base_name}.pdf")
            # Also copy to assets
            pdf_src = f"/home/rishi21/Desktop/Jobhunt/portfolio/tailoring/{base_name}.pdf"
            pdf_dst = f"/home/rishi21/Desktop/Jobhunt/portfolio/assets/{base_name}.pdf"
            with open(pdf_src, "rb") as f_in, open(pdf_dst, "wb") as f_out:
                f_out.write(f_in.read())
            print(f"Synced to assets: {pdf_dst}")
        else:
            print(f"Error converting {base_name}:", res.stderr)
            
    # Also create default Rishi_Thakur_Resume.pdf from SQL Developer
    src = "/home/rishi21/Desktop/Jobhunt/portfolio/assets/Rishi_Thakur_SQL_Developer_Resume.pdf"
    dst = "/home/rishi21/Desktop/Jobhunt/portfolio/assets/Rishi_Thakur_Resume.pdf"
    if os.path.exists(src):
        with open(src, "rb") as f_in, open(dst, "wb") as f_out:
            f_out.write(f_in.read())
        print("Updated default Rishi_Thakur_Resume.pdf from SQL Developer")

if __name__ == '__main__':
    generate_all()
