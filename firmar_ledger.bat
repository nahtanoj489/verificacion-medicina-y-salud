@echo off
setlocal ENABLEDELAYEDEXPANSION
REM === Firmar ledger.json con OpenSSL (Windows) ===
REM Requisitos: tener OpenSSL disponible. La forma más fácil es instalar Git for Windows y usar el terminal de 'Git Bash' o que openssl.exe esté en PATH.
set KEY=ledger-private.enc.pem
set LEDGER=ledger.json
if not exist %LEDGER% (
  echo No se encontró %LEDGER% en esta carpeta.
  exit /b 1
)

if not exist %KEY% (
  echo No se encontró %KEY% en esta carpeta.
  exit /b 1
)

echo ► Se firmará %LEDGER% con %KEY% (OpenSSL pedirá su frase de cifrado).
openssl dgst -sha256 -sign "%KEY%" -out ledger.sig.bin "%LEDGER%"
if errorlevel 1 (
  echo Error al firmar. Verifique que OpenSSL este instalado y la frase sea correcta.
  exit /b 1
)
openssl base64 -A -in ledger.sig.bin -out ledger.sig
if errorlevel 1 (
  echo Error al convertir a Base64.
  del /q ledger.sig.bin 2>nul
  exit /b 1
)
del /q ledger.sig.bin 2>nul

echo ✔ Firma generada: ledger.sig
pause
