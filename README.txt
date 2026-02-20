
# Verificador de incapacidades — GitHub Pages

Este paquete contiene todo lo necesario para publicar el verificador y firmar su `ledger.json`.

## Contenido
- verify.html — Verificador que **valida firma ECDSA P-256/SHA-256** de `ledger.json` y luego compara `code` + `hash`.
- ledger.json — Libro público con entradas (trae un **ejemplo**).
- ledger.sig — Firma Base64 (DER) del `ledger.json`.
- ledger-public.pem — **Clave pública** (publicar con el verificador).
- ledger-private.enc.pem — **Clave privada cifrada** (NO publicar; uso local para firmar).
- certificado_incapacidad_corporativo_fijo.html — Certificado con QR **online** al verificador (ajuste la URL final a su usuario).
- firmar_ledger.bat / firmar_ledger.sh — Scripts 1‑clic para firmar el `ledger.json` (OpenSSL pedirá su **frase**).

## Publicar en GitHub Pages (una vez)
1. Cree un repositorio llamado `verificador`.
2. Suba a la **raíz** del repo: `verify.html`, `ledger.json`, `ledger.sig`, `ledger-public.pem`.
3. Settings → Pages → Source: *Deploy from branch* → `main` → folder `/root`.
4. Su verificador quedará en: `https://USUARIO.github.io/verificador/verify.html`.

## Firmar cada vez que modifique el libro
- Windows: doble clic en `firmar_ledger.bat`.
- macOS / Linux: `./firmar_ledger.sh`.
Abrirá prompt de OpenSSL para su **frase**; generará `ledger.sig` nuevo. Publique `ledger.json` y `ledger.sig`.

## Flujo habitual
1) Genere certificado (obtiene `code` y `hash`).2) Agregue la entrada al `ledger.json` (en el arreglo `items`).3) Ejecute el script de firmado (renueva `ledger.sig`).4) Publique `ledger.json` y `ledger.sig` en GitHub.

