#!/usr/bin/env bash
# ==============================================================================
# restore_on_fedora.sh
#
# Post-migration restoration script for Rishi Thakur's Jobhunt & Antigravity stack.
# Run this on Fedora Linux after fresh installation to restore all private
# assets, custom Antigravity skills, tailoring tools, and uncommitted configs.
#
# Usage:
#   chmod +x restore_on_fedora.sh
#   ./restore_on_fedora.sh /path/to/jobhunt_fedora_migration_*.tar.gz
# ==============================================================================

set -euo pipefail

ARCHIVE="${1:-}"

if [ -z "$ARCHIVE" ] || [ ! -f "$ARCHIVE" ]; then
    echo "❌ Usage: $0 <path-to-jobhunt_fedora_migration_*.tar.gz>"
    echo "Example: $0 ~/Downloads/jobhunt_fedora_migration_20261102_190518.tar.gz"
    exit 1
fi

echo "================================================================="
echo " 🚀 Restoring Jobhunt & Antigravity Stack on Fedora Linux"
echo " Time:    $(date)"
echo " Archive: $ARCHIVE"
echo " Target:  $HOME/Desktop/Jobhunt"
echo "================================================================="

CHECKSUM="${ARCHIVE}.sha256"
if [ -f "$CHECKSUM" ]; then
    echo ""
    echo "[1/5] Verifying SHA-256 archive checksum..."
    EXPECTED_HASH=$(awk '{print $1}' "$CHECKSUM" | tr '[:upper:]' '[:lower:]')
    ACTUAL_HASH=$(sha256sum "$ARCHIVE" | awk '{print $1}' | tr '[:upper:]' '[:lower:]')
    if [ "$EXPECTED_HASH" = "$ACTUAL_HASH" ]; then
        echo "  ✓ Checksum verified successfully ($ACTUAL_HASH)"
    else
        echo "  ❌ Checksum mismatch!"
        echo "     Expected: $EXPECTED_HASH"
        echo "     Actual:   $ACTUAL_HASH"
        read -p "Proceed anyway? (y/N): " -r CONFIRM
        if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
else
    echo "  ! Note: .sha256 file not found alongside archive, skipping checksum verification."
fi

# Ensure target directories exist
mkdir -p "$HOME/Desktop/Jobhunt"
mkdir -p "$HOME/Desktop/tailoring"
mkdir -p "$HOME/.gemini/antigravity/skills"

STAGE_DIR="$(mktemp -d)"
cleanup() {
    rm -rf "$STAGE_DIR"
}
trap cleanup EXIT

echo ""
echo "[2/5] Unpacking migration archive into temporary staging area..."
tar -xzvf "$ARCHIVE" -C "$STAGE_DIR"

echo ""
echo "[3/5] Restoring private resume tailoring workspace..."
if [ -d "$STAGE_DIR/tailoring" ]; then
    cp -rf "$STAGE_DIR/tailoring/"* "$HOME/Desktop/tailoring/"
    echo "  ✓ Restored to ~/Desktop/tailoring/"
fi

echo ""
echo "[4/5] Restoring custom Antigravity skills & configurations..."
if [ -d "$STAGE_DIR/.gemini" ]; then
    cp -rf "$STAGE_DIR/.gemini" "$HOME/Desktop/Jobhunt/"
    # Also link or copy to global Antigravity location
    if [ -d "$STAGE_DIR/.gemini/skills" ]; then
        cp -rf "$STAGE_DIR/.gemini/skills/"* "$HOME/.gemini/antigravity/skills/"
        echo "  ✓ Installed skills into ~/.gemini/antigravity/skills/"
    fi
    echo "  ✓ Installed skills into ~/Desktop/Jobhunt/.gemini/"
fi

echo ""
echo "[5/5] Checking and cloning git repositories if needed..."

cd "$HOME/Desktop/Jobhunt"

# 1. Portfolio
if [ ! -d "portfolio/.git" ]; then
    echo "  -> Cloning portfolio repository..."
    git clone https://github.com/rishi-th219/portfolio.git
fi
# Mirror tailoring to portfolio/tailoring if desired
mkdir -p portfolio/tailoring
cp -rf "$HOME/Desktop/tailoring/"* portfolio/tailoring/ 2>/dev/null || true

# 2. Career-Ops Bot
if [ ! -d "Bot/.git" ]; then
    echo "  -> Cloning autojobhunt (Bot) repository..."
    git clone https://github.com/rishi-th219/autojobhunt.git Bot
fi
if [ -d "$STAGE_DIR/Bot_state" ]; then
    echo "  -> Restoring Bot state (opportunities.xlsx, profile.yml)..."
    cp -f "$STAGE_DIR/Bot_state/opportunities.xlsx" Bot/ 2>/dev/null || true
    mkdir -p Bot/config
    cp -f "$STAGE_DIR/Bot_state/profile.yml" Bot/config/ 2>/dev/null || true
fi

# 3. ecommerce-elt-local
mkdir -p Projects
if [ ! -d "Projects/ecommerce-elt-local/.git" ]; then
    echo "  -> Cloning ecommerce-elt-local repository..."
    git clone https://github.com/rishi-th219/ecommerce-elt-local.git Projects/ecommerce-elt-local
fi
if [ -d "$STAGE_DIR/ecommerce_elt_configs" ]; then
    echo "  -> Restoring ecommerce-elt-local configs (.env, dbt/profiles.yml)..."
    cp -f "$STAGE_DIR/ecommerce_elt_configs/.env" Projects/ecommerce-elt-local/ 2>/dev/null || true
    mkdir -p Projects/ecommerce-elt-local/dbt
    cp -f "$STAGE_DIR/ecommerce_elt_configs/profiles.yml" Projects/ecommerce-elt-local/dbt/ 2>/dev/null || true
fi

echo ""
echo "================================================================="
echo " 🎉 RESTORATION COMPLETE!"
echo " Workspace: ~/Desktop/Jobhunt/"
echo " Tailoring: ~/Desktop/tailoring/ and ~/Desktop/Jobhunt/portfolio/tailoring/"
echo " Skills:    ~/.gemini/antigravity/skills/ and ~/Desktop/Jobhunt/.gemini/skills/"
echo "================================================================="
echo ""
echo "👉 Next step: Run ./setup_fedora_environment.sh to install LibreOffice, Python, and system tools."
