"""Comprueba que los enlaces relativos de los Markdown y las rutas de la web existen.

Uso: python3 tests/comprobar_enlaces.py   (desde la raíz del repositorio)
"""
import pathlib
import re
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
IGNORAR = {".git", "node_modules", "__pycache__"}
ENLACE = re.compile(r"!?\[[^\]]*\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")

errores = []
revisados = 0
for md in sorted(RAIZ.rglob("*.md")):
    if IGNORAR & set(md.relative_to(RAIZ).parts):
        continue
    texto = md.read_text(encoding="utf-8")
    # Los bloques de código no contienen enlaces reales.
    texto = re.sub(r"```.*?```", "", texto, flags=re.S)
    for destino in ENLACE.findall(texto):
        if re.match(r"^(https?:|mailto:|#)", destino):
            continue
        ruta = destino.split("#", 1)[0]
        if not ruta:
            continue
        revisados += 1
        if not (md.parent / ruta).exists():
            errores.append(f"{md.relative_to(RAIZ)}: enlace roto a {destino}")

# Rutas de documentos citadas por la web.
contenido = (RAIZ / "web/data/contenido.js").read_text(encoding="utf-8")
for ruta in re.findall(r'doc:\s*"([^"]+)"', contenido):
    revisados += 1
    if not (RAIZ / ruta).exists():
        errores.append(f"web/data/contenido.js: documento inexistente {ruta}")

if errores:
    print("\n".join(errores))
    sys.exit(f"{len(errores)} enlaces rotos de {revisados} revisados.")
print(f"{revisados} enlaces revisados, todos correctos.")
