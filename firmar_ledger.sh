#!/usr/bin/env bash
set -euo pipefail
# === Firmar ledger.json con OpenSSL (macOS / Linux) ===
# Requisitos: openssl en PATH
KEY="ledger-private.enc.pem"
LEDGER="ledger.json"

if [ ! -f "$LEDGER" ]; then
  echo "No se encontró $LEDGER en esta carpeta" >&2
  exit 1
fi
if [ ! -f "$KEY" ]; then
  echo "No se encontró $KEY en esta carpeta" >&2
  exit 1
fi

echo "► Se firmará $LEDGER con $KEY (OpenSSL pedirá su frase de cifrado)."
openssl dgst -sha256 -sign "$KEY" -out ledger.sig.bin "$LEDGER"
openssl base64 -A -in ledger.sig.bin -out ledger.sig
rm -f ledger.sig.bin

echo "✔ Firma generada: ledger.sig"
