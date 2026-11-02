# ==============================================================================
# backup-for-fedora.ps1
#
# Pre-migration backup script for Rishi Thakur's Jobhunt workspace.
# Prepares a complete migration archive of all private, non-git, and configuration
# assets BEFORE switching from Windows 11 to Fedora Linux.
# ==============================================================================

[CmdletBinding()]
param (
    [string]$Destination = "$HOME\Desktop"
)

$ErrorActionPreference = "Stop"

$Timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$ArchiveName = "jobhunt_fedora_migration_$Timestamp.tar.gz"
$ArchivePath = Join-Path $Destination $ArchiveName
$ChecksumPath = "$ArchivePath.sha256"

$StageDir = Join-Path $env:TEMP "jobhunt_migration_stage_$Timestamp"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " Starting Pre-Migration Backup (Windows 11 -> Fedora Linux)" -ForegroundColor Green
Write-Host " Time:        $(Get-Date)" -ForegroundColor DarkGray
Write-Host " Destination: $ArchivePath" -ForegroundColor DarkGray
Write-Host " Staging Dir: $StageDir" -ForegroundColor DarkGray
Write-Host "=================================================================" -ForegroundColor Cyan

# Ensure clean staging area
if (Test-Path $StageDir) { Remove-Item -Recurse -Force $StageDir }
New-Item -ItemType Directory -Path $StageDir -Force | Out-Null

try {
    Write-Host "[1/4] Staging private tailoring directory..." -ForegroundColor Yellow
    $TailoringSrc = "C:\Users\Rishi\Desktop\tailoring"
    if (Test-Path $TailoringSrc) {
        $TailoringDst = Join-Path $StageDir "tailoring"
        Copy-Item -Path $TailoringSrc -Destination $TailoringDst -Recurse -Force -Exclude "__pycache__", "*.pyc"
        Write-Host "  -> tailoring folder staged successfully" -ForegroundColor Green
    } else {
        Write-Host "  ! Warning: $TailoringSrc not found!" -ForegroundColor Red
    }

    Write-Host "[2/4] Staging custom Antigravity skills and configs..." -ForegroundColor Yellow
    $SkillsSrc = "C:\Users\Rishi\Desktop\Jobhunt\.gemini"
    if (Test-Path $SkillsSrc) {
        $SkillsDst = Join-Path $StageDir ".gemini"
        Copy-Item -Path $SkillsSrc -Destination $SkillsDst -Recurse -Force -Exclude "__pycache__", "*.pyc"
        Write-Host "  -> .gemini/skills staged successfully" -ForegroundColor Green
    }

    Write-Host "[3/4] Staging uncommitted project configs and local databases..." -ForegroundColor Yellow
    # Bot opportunity database and profile
    $BotStage = Join-Path $StageDir "Bot_state"
    New-Item -ItemType Directory -Path $BotStage -Force | Out-Null
    if (Test-Path "C:\Users\Rishi\Desktop\Jobhunt\Bot\opportunities.xlsx") {
        Copy-Item "C:\Users\Rishi\Desktop\Jobhunt\Bot\opportunities.xlsx" $BotStage -Force
        Write-Host "  -> Bot opportunities.xlsx staged" -ForegroundColor Green
    }
    if (Test-Path "C:\Users\Rishi\Desktop\Jobhunt\Bot\config\profile.yml") {
        Copy-Item "C:\Users\Rishi\Desktop\Jobhunt\Bot\config\profile.yml" $BotStage -Force
        Write-Host "  -> Bot profile.yml staged" -ForegroundColor Green
    }

    # ecommerce-elt-local configs
    $EltStage = Join-Path $StageDir "ecommerce_elt_configs"
    New-Item -ItemType Directory -Path $EltStage -Force | Out-Null
    if (Test-Path "C:\Users\Rishi\Desktop\Jobhunt\Projects\ecommerce-elt-local\.env") {
        Copy-Item "C:\Users\Rishi\Desktop\Jobhunt\Projects\ecommerce-elt-local\.env" $EltStage -Force
        Write-Host "  -> ecommerce-elt-local .env staged" -ForegroundColor Green
    }
    if (Test-Path "C:\Users\Rishi\Desktop\Jobhunt\Projects\ecommerce-elt-local\dbt\profiles.yml") {
        Copy-Item "C:\Users\Rishi\Desktop\Jobhunt\Projects\ecommerce-elt-local\dbt\profiles.yml" $EltStage -Force
        Write-Host "  -> dbt profiles.yml staged" -ForegroundColor Green
    }

    Write-Host "[4/4] Creating tar.gz archive and computing SHA-256 checksum..." -ForegroundColor Yellow
    
    # Use bsdtar (built into Windows 10/11)
    Push-Location $StageDir
    try {
        tar -czvf $ArchivePath *
    } finally {
        Pop-Location
    }

    # Compute SHA-256
    $Hash = (Get-FileHash -Path $ArchivePath -Algorithm SHA256).Hash
    "$Hash  $ArchiveName" | Out-File -FilePath $ChecksumPath -Encoding utf8

    $Size = (Get-Item $ArchivePath).Length / 1MB
    Write-Host "=================================================================" -ForegroundColor Cyan
    Write-Host " BACKUP COMPLETE!" -ForegroundColor Green
    Write-Host " Archive:   $ArchivePath ($([Math]::Round($Size, 2)) MB)" -ForegroundColor White
    Write-Host " Checksum:  $ChecksumPath" -ForegroundColor White
    Write-Host " SHA-256:   $Hash" -ForegroundColor DarkGray
    Write-Host "=================================================================" -ForegroundColor Cyan
    Write-Host "CRITICAL NEXT STEP:" -ForegroundColor Red
    Write-Host "   Copy BOTH files to an external USB drive or Cloud Storage (ProtonDrive / Google Drive):" -ForegroundColor Yellow
    Write-Host "     1. $ArchivePath" -ForegroundColor White
    Write-Host "     2. $ChecksumPath" -ForegroundColor White
    Write-Host ""
} finally {
    if (Test-Path $StageDir) {
        Remove-Item -Recurse -Force $StageDir -ErrorAction SilentlyContinue
    }
}
