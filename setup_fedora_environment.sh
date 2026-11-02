#!/usr/bin/env bash
# ==============================================================================
# setup_fedora_environment.sh
#
# Complete environment installer for Rishi Thakur's Jobhunt & Antigravity stack
# on Fedora Linux (Fedora 40 / 41).
#
# Installs:
#   1. System packages via DNF (LibreOffice headless, poppler, build tools, fonts)
#   2. Python 3 stack & tailoring packages (playwright, pymupdf, pypdf, pillow)
#   3. Playwright browser binaries
#   4. Podman / Docker container tooling
#   5. Git configuration
# ==============================================================================

set -euo pipefail

echo "================================================================="
echo " 🛠️ Setting up Fedora Linux Environment for Antigravity & Jobhunt"
echo " Time: $(date)"
echo " OS:   Fedora Linux"
echo "================================================================="

echo ""
echo "[1/5] Updating DNF and installing system utilities..."
sudo dnf install -y \
    git \
    curl \
    wget \
    tar \
    jq \
    tree \
    poppler-utils \
    libreoffice-headless \
    libreoffice-writer \
    dejavu-sans-fonts \
    liberation-serif-fonts \
    google-noto-sans-fonts \
    python3 \
    python3-devel \
    python3-pip \
    gcc \
    gcc-c++ \
    make

echo ""
echo "[2/5] Installing Python libraries for resume tailoring and automation..."
pip install --user --upgrade pip
pip install --user \
    pillow \
    pypdf \
    pymupdf \
    playwright \
    openpyxl \
    pandas \
    requests \
    beautifulsoup4 \
    lxml

echo ""
echo "[3/5] Installing Playwright Chromium browser binary..."
python3 -m playwright install chromium

echo ""
echo "[4/5] Installing Podman & Docker emulation (for ecommerce-elt-local)..."
sudo dnf install -y podman podman-compose podman-docker
systemctl --user enable --now podman.socket || true

echo ""
echo "[5/5] Configuring Git identity..."
git config --global user.name "Rishi Thakur"
git config --global user.email "160097149+rishi-th219@users.noreply.github.com"
git config --global init.defaultBranch main

echo ""
echo "================================================================="
echo " 🎉 FEDORA ENVIRONMENT SETUP COMPLETE!"
echo " Test commands:"
echo "   libreoffice --version"
echo "   pdftotext -v"
echo "   python3 -c 'import playwright, pymupdf; print(\"Python stack OK\")'"
echo "================================================================="
