# Modelo de escenarios 2026-2040 · España Dinámica 2040

Modelo anual, determinista y transparente para comprobar la aritmética del programa de reformas. No es un modelo de previsión ni de equilibrio general: es una contabilidad encadenada cuyos supuestos están todos en un único archivo.

## Ejecución

```bash
python3 -m pip install numpy pandas matplotlib   # solo si faltan
python3 modelo/escenarios.py
```

Requisitos: Python 3.9 o posterior, `numpy`, `pandas` y `matplotlib` (probado con Python 3.11, pandas 2.x y matplotlib 3.x). Sin `matplotlib` el script calcula todo y omite los gráficos. No hay aleatoriedad ni descarga de datos: dos ejecuciones dan el mismo resultado. Tarda unos segundos.

## Qué produce

Todo se escribe en `modelo/resultados/` y se sobrescribe en cada ejecución.

| Archivo | Contenido |
|---|---|
| `escenario_A.csv` … `escenario_D.csv` | Serie anual 2026-2040 de cada escenario (unas 45 variables) |
| `resumen_2030_2035_2040.csv` | Los tres años de referencia, todos los escenarios |
| `sensibilidad.csv` | Resultados en 2040 al mover un parámetro cada vez (escenarios A, B y D) |
| `tablas.md` | Tablas en Markdown que alimentan `RESULTADOS.md` |
| `01_pib_per_capita.png` … `09_sensibilidad.png` | Nueve gráficos |

`RESULTADOS.md` (en esta carpeta) interpreta los resultados. Está escrito a mano a partir de `tablas.md`: si se cambia un parámetro hay que revisar sus cifras.

## Escenarios

| Clave | Escenario | Qué cambia |
|---|---|---|
| A | Inercial | Sin reformas ni ajuste discrecional |
| B | España Dinámica (central) | Ajuste gradual del gasto, reformas escalonadas, efectos centrales de la literatura |
| C | Efectos bajos | Las mismas políticas que B con efectos al 30 % |
| D | Terapia de choque | Las mismas reformas, todas en 2027, con un ajuste de 3,6 puntos de PIB en tres años |

## Estructura del código

`escenarios.py` tiene siete bloques, en este orden:

1. `P0`: parámetros estructurales. Cada uno lleva su etiqueta de procedencia: `[DIAG n]` (indicador n del diagnóstico), `[LIT]` (literatura, citada de memoria como orden de magnitud), `[SUP]` (supuesto del proyecto), `[CAL]` (calibrado) y `[NV]` (dato de origen no verificado).
2. `ESCENARIOS`: políticas (calendario de recortes, pensiones, cuña, vivienda) y tamaño de los efectos de cada reforma.
3. Funciones auxiliares: perfil logístico de entrada de las reformas y demografía.
4. `simular()`: el bucle anual, con seis pasos (oferta, pensiones, demanda, fiscal, salarios y vivienda).
5. `sensibilidad()`: lista `SENSIBILIDAD` de parámetros y rangos.
6. Gráficos.
7. Tablas y comprobaciones frente a AIReF y el Ageing Report.

## Cómo modificarlo

- **Cambiar un supuesto:** editar el valor en `P0` y volver a ejecutar.
- **Añadir un escenario:** copiar una entrada de `ESCENARIOS` con `copy.deepcopy`, cambiar lo necesario y añadir su color en `COLORES` y su estilo en `ESTILOS`. Las tablas de `tablas()` están escritas para las claves A-D.
- **Añadir un parámetro a la sensibilidad:** añadir una tupla a `SENSIBILIDAD` (`"P"` para un parámetro de `P0`, `"E"` para uno del escenario).
- **Usarlo desde otro script:**

```python
import copy, sys
sys.path.insert(0, "modelo")
import escenarios as m

P = copy.deepcopy(m.P0)
P["multiplicador"] = 1.2
df = m.simular(m.ESCENARIOS["D"], P)   # DataFrame indexado por año
print(df[["tasa_paro", "deuda_pib"]])
```

## Avisos

- Las cifras marcadas `[LIT]` son órdenes de magnitud citados de memoria. Hay que cotejarlas con la fuente antes de publicarlas.
- Varios datos de partida heredan la marca "(no verificado)" del diagnóstico (gasto público total de 2025, déficit estructural, estructura por edades de la proyección del INE).
- El escenario inercial se calibra cerca de las proyecciones oficiales, no para reproducirlas: `comprobaciones()` imprime la comparación en cada ejecución.
