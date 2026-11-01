#!/usr/bin/env python3
"""
Sync Tailored Resumes Engine
Continuously scans C:\\Users\\Rishi\\Desktop\\tailoring\\ for newly created
or updated tailored PDF resumes and synchronizes them into portfolio/assets/.

Enforces strict isolation: source generation internals stay in tailoring/,
while compiled public PDFs are served reliably through assets/.
"""

import os
import shutil
import sys
import hashlib

DESKTOP_TAILORING_DIR = r"C:\Users\Rishi\Desktop\tailoring"
PORTFOLIO_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.join(PORTFOLIO_DIR, "assets")

def file_hash(filepath):
    """Compute MD5 hash to detect actual file modifications."""
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        while chunk := f.read(65536):
            hasher.update(chunk)
    return hasher.hexdigest()

def scan_and_sync():
    print("=" * 65)
    print("RESUME SYNC ENGINE: Scanning C:\\Users\\Rishi\\Desktop\\tailoring")
    print("=" * 65)

    if not os.path.exists(DESKTOP_TAILORING_DIR):
        print(f"[!] Error: Source directory {DESKTOP_TAILORING_DIR} does not exist.")
        sys.exit(1)

    os.makedirs(ASSETS_DIR, exist_ok=True)

    # Find all PDFs in source directory
    source_pdfs = [f for f in os.listdir(DESKTOP_TAILORING_DIR) if f.endswith(".pdf")]
    if not source_pdfs:
        print(f"[!] Warning: No PDF resumes found in {DESKTOP_TAILORING_DIR}.")
        return []

    print(f"[*] Found {len(source_pdfs)} tailored PDF resumes in source folder:")

    synced_files = []
    new_files = []
    updated_files = []
    unchanged_files = []

    for f in source_pdfs:
        src_path = os.path.join(DESKTOP_TAILORING_DIR, f)
        dst_path = os.path.join(ASSETS_DIR, f)
        size_kb = os.path.getsize(src_path) / 1024.0

        if not os.path.exists(dst_path):
            shutil.copy2(src_path, dst_path)
            new_files.append(f)
            print(f"  [+] NEW RESUME ADDED: {f} ({size_kb:.1f} KB)")
        else:
            # Check if updated
            if file_hash(src_path) != file_hash(dst_path):
                shutil.copy2(src_path, dst_path)
                updated_files.append(f)
                print(f"  [*] RESUME UPDATED:    {f} ({size_kb:.1f} KB)")
            else:
                unchanged_files.append(f)
                print(f"  [=] Up-to-date:        {f} ({size_kb:.1f} KB)")
        synced_files.append(f)

    # Standard aliases
    pbi_src = os.path.join(ASSETS_DIR, "Rishi_Thakur_PowerBI_Data_Analyst_Resume.pdf")
    if os.path.exists(pbi_src):
        shutil.copy2(pbi_src, os.path.join(ASSETS_DIR, "Rishi_Thakur_PowerBI_Developer_Resume.pdf"))

    default_src = os.path.join(ASSETS_DIR, "Rishi_Thakur_Data_Analyst_Resume.pdf")
    if os.path.exists(default_src):
        shutil.copy2(default_src, os.path.join(ASSETS_DIR, "Rishi_Thakur_Resume.pdf"))

    print("-" * 65)
    print(f"Summary: {len(new_files)} new, {len(updated_files)} updated, {len(unchanged_files)} verified unchanged.")
    print("[OK] All tailored resumes in C:\\Users\\Rishi\\Desktop\\tailoring\\ are synced to portfolio/assets/.")
    print("=" * 65)
    return synced_files

if __name__ == "__main__":
    scan_and_sync()
