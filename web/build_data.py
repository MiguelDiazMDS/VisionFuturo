"""Genera web/data/modelo.js a partir de los CSV del modelo de escenarios.

Uso: python3 web/build_data.py   (desde la raíz del repositorio)
"""
import csv, json, pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent
CAMPOS = {
    "pib_pc_indice": "pib",
    "tasa_paro": "paro",
    "deuda_pib": "deuda",
    "saldo_publico_pib": "saldo",
    "gasto_pensiones_pib": "pensiones",
    "salario_neto_real_indice": "salario",
    "deficit_vivienda_miles": "vivienda",
    "productividad_hora_indice": "productividad",
}
datos = {}
for esc in "ABCD":
    filas = list(csv.DictReader(open(RAIZ / f"modelo/resultados/escenario_{esc}.csv", encoding="utf-8")))
    serie = {"anios": [int(f["año"]) for f in filas]}
    for col, clave in CAMPOS.items():
        serie[clave] = [round(float(f[col]), 2) for f in filas]
    datos[esc] = serie
salida = RAIZ / "web/data/modelo.js"
salida.write_text(
    "// Generado por web/build_data.py a partir de modelo/resultados. No editar a mano.\n"
    "window.MODELO = " + json.dumps(datos, ensure_ascii=False) + ";\n",
    encoding="utf-8",
)
print("Escrito", salida)
