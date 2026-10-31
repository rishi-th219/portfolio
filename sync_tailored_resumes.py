#!/usr/bin/env python3
"""
Sync Tailored Resumes Script
Synchronizes the verified, multi-skill tailored PDF resumes from
C:\\Users\\Rishi\\Desktop\\tailoring\\ into portfolio/assets/.

Note: Resumes are compiled via the dedicated multi-skill tailoring pipeline
and are NOT generated on the website itself.
"""

import os
import shutil
import sys

DESKTOP_TAILORING_DIR = r"C:\Users\Rishi\Desktop\tailoring"
PORTFOLIO_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.join(PORTFOLIO_DIR, "assets")

def sync():
    if not os.path.exists(DESKTOP_TAILORING_DIR):
        print(f"Error: Source directory {DESKTOP_TAILORING_DIR} does not exist.")
        sys.exit(1)

    os.makedirs(ASSETS_DIR, exist_ok=True)

    pdf_files = [f for f in os.listdir(DESKTOP_TAILORING_DIR) if f.endswith(".pdf")]
    if not pdf_files:
        print(f"No PDF files found in {DESKTOP_TAILORING_DIR}.")
        sys.exit(1)

    print(f"Found {len(pdf_files)} tailored PDF resumes in {DESKTOP_TAILORING_DIR}:")
    for f in pdf_files:
        src = os.path.join(DESKTOP_TAILORING_DIR, f)
        size_kb = os.path.getsize(src) / 1024.0
        print(f" - {f} ({size_kb:.1f} KB)")
        
        # Copy to assets/
        shutil.copy2(src, os.path.join(ASSETS_DIR, f))

    # Aliases
    pbi_src = os.path.join(ASSETS_DIR, "Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf")
    if os.path.exists(pbi_src):
        shutil.copy2(pbi_src, os.path.join(ASSETS_DIR, "Rishi_Thakur_PowerBI_Developer_Resume.pdf"))

    default_src = os.path.join(ASSETS_DIR, "Rishi_Thakur_Data_Analyst_Resume.pdf")
    if os.path.exists(default_src):
        shutil.copy2(default_src, os.path.join(ASSETS_DIR, "Rishi_Thakur_Resume.pdf"))

    print("\n[OK] All tailored resumes successfully synced to assets/!")

if __name__ == "__main__":
    sync()
