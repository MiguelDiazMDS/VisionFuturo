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
| `escenario_A.csv` … `escenario_E.csv` | Serie anual 2026-2040 de cada escenario (56 variables; las 11 últimas se añadieron con E) |
| `resumen_2030_2035_2040.csv` | Los tres años de referencia, todos los escenarios |
| `sensibilidad.csv` | Resultados en 2040 al mover un parámetro cada vez (escenarios A, B, D y E), más la sensibilidad propia de E |
| `tablas.md` | Tablas en Markdown que alimentan `RESULTADOS.md`, incluida la comparación "B frente a E" |
| `01_pib_per_capita.png` … `12_efectivos_y_cuentas.png` | Doce gráficos. Del 01 al 08, el 10 y el 11 llevan los cinco escenarios; el 09 es la sensibilidad de B; el 12 compara B y E |

`RESULTADOS.md` (en esta carpeta) interpreta los resultados. Está escrito a mano a partir de `tablas.md`: si se cambia un parámetro hay que revisar sus cifras.

## Escenarios

| Clave | Escenario | Qué cambia |
|---|---|---|
| A | Inercial | Sin reformas ni ajuste discrecional |
| B | España Dinámica (central) | Ajuste gradual del gasto, reformas escalonadas, efectos centrales de la literatura |
| C | Efectos bajos | Las mismas políticas que B con efectos al 30 % |
| D | Terapia de choque | Las mismas reformas, todas en 2027, con un ajuste de 3,6 puntos de PIB en tres años |
| E | Maximalista | Las reformas de B más despido libre en 2029, −5 puntos de cotización empresarial, retirada parcial de la financiación pública de sanidad y educación, 4 puntos de cotización a cuentas individuales, recorte de 3,0 puntos del resto, ventas de activos, reposición cero en gestión y traspaso del personal sanitario y docente |

Los parámetros de E proceden de `docs/05-version-maximalista/00-parametros-de-diseno.md` (etiqueta `[DEC]`); lo que no está en ese archivo es un supuesto y lleva `[SUP]`.

### Variables añadidas con E

Están en los cinco CSV, al final. En A-D valen cero o son constantes, y las columnas anteriores no cambian.

| Variable | Qué mide |
|---|---|
| `pagos_privados_obligatorios_pib` | Primas, copagos y matrículas que sustituyen a la financiación pública retirada, netas de la ganancia de eficiencia (5 %; rango 0-15 %) |
| `gasto_publico_mas_pagos_pib` | Gasto público total más esos pagos |
| `renta_neta_tras_pagos_indice` | Salario neto después de restar los pagos obligatorios que recaen en hogares asalariados (75 % `[SUP]`, rango 47-100 %) |
| `cotizaciones_desviadas_pib`, `saldo_cuentas_individuales_pib` | Flujo anual y saldo acumulado de las cuentas individuales de pensión (rentabilidad real del 2 % `[SUP]`). No incluye el pilar complementario del 3 % + 3 % ni la mochila, que el modelo no representa en ningún escenario |
| `ventas_activos_pib` | Ventas del año; amortizan deuda sin pasar por el saldo |
| `efectivos_publicos_miles` | Efectivos públicos. Constante en A-D por convención: el modelo no tiene una senda de plantilla para esos escenarios |
| `efectivos_traspasados_miles` | Personal sanitario y docente que cambia de empleador (acumulado). No ahorra gasto |
| `efectivos_no_repuestos_miles`, `ahorro_no_reposicion_pib` | Jubilaciones de gestión administrativa no cubiertas (acumulado) y su valor. El ahorro es informativo: hasta 2034 forma parte del recorte de 3,0 puntos del resto y no se suma a él; después no se cuenta salvo en la sensibilidad |
| `prima_riesgo_extra_pp` | Prima de riesgo no lineal. Cero salvo que se active `prima_no_lineal` |

### Datos de plantilla

| Dato | Valor | Fuente | Estado |
|---|---|---|---|
| Efectivos totales | 3.071.725 | EPSAP, enero de 2026 (nota de Función Pública) | Verificado en el diagnóstico (§7.2) |
| Instituciones sanitarias | 722.629 | EPSAP, enero de 2026 | No verificado: tomado de fuentes secundarias que resumen la EPSAP |
| Docencia no universitaria | 707.723 | EPSAP, enero de 2026 | No verificado, ídem |
| Parte de la plantilla en gestión administrativa | 16 % (rango 10-22 %) | Supuesto: la EPSAP no publica esa categoría | `[SUP]` |
| Jubilación anual en gestión administrativa | 4 % de la plantilla inicial (rango 3-5,5 %) | Supuesto anclado en el estudio de envejecimiento de la AGE de 2025 (49,5 % en diez años), visto solo en prensa | `[SUP]` |
| Coste por 100.000 efectivos | 0,3 puntos de PIB | Revisión (§A8), orden de magnitud | No verificado |

El PDF oficial de la EPSAP no se pudo abrir desde el entorno de trabajo (`digital.gob.es` no era accesible). Hay que cotejar las dos cifras sectoriales con las tablas del boletín antes de publicarlas. El traspaso no incluye al personal de las universidades, cuya cifra no se obtuvo.

### Prima de riesgo no lineal

Opción desactivada por defecto (`P0["prima_no_lineal"] = 0`), para no alterar A-D. Activada, añade al tipo de las nuevas emisiones

`prima extra (pp) = deuda(t−1)/100 × [0,10 × max(0, déficit(t−1) − 3)² + 0,10 × max(0, −brecha(t) − 1,5)²]`,

con un tope de 5 puntos, y resta 0,3 pp de brecha al año siguiente por cada 100 pb. La forma (convexa en el déficit y en la profundidad de la recesión) y los coeficientes son un supuesto ilustrativo, no una estimación. Se usa en la sensibilidad de A, B, D y E.

## Estructura del código

`escenarios.py` tiene siete bloques, en este orden:

1. `P0`: parámetros estructurales. Cada uno lleva su etiqueta de procedencia: `[DIAG n]` (indicador n del diagnóstico), `[LIT]` (literatura, citada de memoria como orden de magnitud), `[SUP]` (supuesto del proyecto), `[CAL]` (calibrado), `[NV]` (dato de origen no verificado) y `[DEC]` (decisión del promotor o parámetro del archivo de diseño de la versión maximalista).
2. `ESCENARIOS`: políticas (calendario de recortes, pensiones, cuña, vivienda) y tamaño de los efectos de cada reforma. `DEFECTOS_ESC` da el valor neutro de los canales que solo usa E.
3. Funciones auxiliares: perfil logístico de entrada de las reformas y demografía.
4. `simular()`: el bucle anual, con siete pasos (oferta, pensiones, empleo público, demanda, fiscal, salarios y vivienda).
5. `sensibilidad()`: listas `SENSIBILIDAD` (general) y `SENSIBILIDAD_E` (propia de E) de parámetros y rangos.
6. Gráficos.
7. Tablas y comprobaciones frente a AIReF y el Ageing Report.

## Cómo modificarlo

- **Cambiar un supuesto:** editar el valor en `P0` y volver a ejecutar.
- **Añadir un escenario:** copiar una entrada de `ESCENARIOS` con `copy.deepcopy`, cambiar lo necesario y añadir su color en `COLORES` y su estilo en `ESTILOS`. Las tablas de `tablas()` están escritas para las claves A-E.
- **Añadir un canal nuevo sin mover los escenarios existentes:** darle un valor neutro en `P0` o en `DEFECTOS_ESC` y añadir sus columnas al final del diccionario de salida de `simular()`. La CI compara los CSV con los subidos.
- **Añadir un parámetro a la sensibilidad:** añadir una tupla a `SENSIBILIDAD` o a `SENSIBILIDAD_E` (`"P"` para un parámetro de `P0`, `"E"` para uno del escenario, `"R"` para un campo de una reforma).
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
- El escenario E supone aprobada la reforma constitucional de 2028 y no aplica los dos frenos automáticos del diseño (cláusula cíclica de la regla de gasto y prima de riesgo por encima de 200 pb). `tablas.md` indica en qué años se activaría la cláusula cíclica.
- `web/build_data.py` solo lee los escenarios A-D. Las columnas añadidas y el escenario E no llegan a la web hasta que ese script se amplíe.
