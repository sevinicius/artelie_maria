# Script para fazer deploy no GitHub
# Execute este script após criar o repositório no GitHub

Write-Host "=== Deploy para GitHub Pages ===" -ForegroundColor Cyan
Write-Host ""

# Solicitar o nome de usuário do GitHub
$username = Read-Host "Digite seu nome de usuário do GitHub"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Erro: Nome de usuário não pode estar vazio!" -ForegroundColor Red
    exit 1
}

# Verificar se já existe um remote origin
$remoteExists = git remote get-url origin 2>$null

if ($remoteExists) {
    Write-Host "Remote 'origin' já existe: $remoteExists" -ForegroundColor Yellow
    $overwrite = Read-Host "Deseja substituir? (s/n)"
    if ($overwrite -eq "s" -or $overwrite -eq "S") {
        git remote remove origin
    } else {
        Write-Host "Operação cancelada." -ForegroundColor Yellow
        exit 0
    }
}

# Adicionar remote
$repoUrl = "https://github.com/$username/atelie-maria-clara.git"
Write-Host "Adicionando remote: $repoUrl" -ForegroundColor Green
git remote add origin $repoUrl

# Fazer push
Write-Host ""
Write-Host "Fazendo push para o GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== Sucesso! ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Agora você precisa:" -ForegroundColor Cyan
    Write-Host "1. Acessar: https://github.com/$username/atelie-maria-clara/settings/pages" -ForegroundColor Yellow
    Write-Host "2. Selecionar branch 'main' em Source" -ForegroundColor Yellow
    Write-Host "3. Clicar em Save" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Seu site estará disponível em:" -ForegroundColor Cyan
    Write-Host "https://$username.github.io/atelie-maria-clara/" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "=== Erro ao fazer push ===" -ForegroundColor Red
    Write-Host "Verifique se:" -ForegroundColor Yellow
    Write-Host "1. O repositório foi criado no GitHub" -ForegroundColor Yellow
    Write-Host "2. Você está autenticado no GitHub" -ForegroundColor Yellow
    Write-Host "3. O nome do repositório está correto" -ForegroundColor Yellow
}

