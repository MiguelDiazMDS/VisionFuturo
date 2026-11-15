# España Dinámica 2040

Proyecto de investigación y diseño estratégico sobre cómo un programa coherente de consolidación fiscal, competencia, reforma laboral, reforma de la función pública y oferta de vivienda podría abordar seis problemas estructurales de España: vivienda, salarios reales, productividad, poder adquisitivo, pensiones y demografía.

El proyecto parte de un marco liberalizador (reducción del Estado, desregulación y dinamismo privado) y lo somete a contraste con un diagnóstico cuantificado, la evidencia internacional y una crítica adversarial. El resultado conserva el propósito del marco (más competencia, menos barreras, más oferta de vivienda, reglas fiscales, fin de la dualidad laboral y mérito en lo público) y lo modera en tres puntos: sustituye el despido libre por la eliminación de la brecha entre contratos, el déficit cero por un ancla estructural gradual, y el traspaso de sectores al privado por la competencia regulada sobre redes públicas.

Un modelo de escenarios cuantifica el programa hasta 2040. En el escenario central, el PIB per cápita supera al inercial en torno a un 7 % (rango del 2 % al 11 %), el paro baja al 7 % y la deuda al 84 % del PIB. El déficit queda en el 2 %, sin llegar al equilibrio, el efecto sobre el precio de la vivienda a escala nacional es pequeño y las ganancias no aparecen hasta después de 2031. Son escenarios condicionados a supuestos explícitos, no previsiones.

## Documento principal

**[ESPANA_DINAMICA_2040.md](ESPANA_DINAMICA_2040.md)**: documento integrado, con resumen ejecutivo, diagnóstico, principios, los seis bloques, aritmética fiscal, secuencia 2027-2040, escenario 2040, riesgos y límites.

## Documentos de detalle

| Documento | Contenido |
|---|---|
| [Marco conceptual base](docs/00-base/marco-conceptual-base.md) | El encargo de partida |
| [01 · Diagnóstico estructural](docs/01-investigacion/01-diagnostico-estructural.md) | Línea base cuantificada de los seis problemas, mapa causal e indicadores de partida |
| [02 · Evidencia internacional](docs/01-investigacion/02-evidencia-internacional.md) | Qué funcionó, en qué condiciones y a qué coste en reformas comparables |
| [03 · Crítica y riesgos](docs/01-investigacion/03-critica-y-riesgos.md) | Crítica adversarial del marco y doce condiciones que el diseño debe cumplir |
| [Bloque 1 · Vivienda y suelo](docs/02-bloques/01-vivienda-y-suelo.md) | Edificabilidad, licencias, alquiler, parque asequible y crédito |
| [Bloque 2 · Mercado laboral y salarios](docs/02-bloques/02-mercado-laboral-y-salarios.md) | Fondo individual de despido, cotización según rotación, políticas activas y cuña fiscal |
| [Bloque 3 · Productividad y dinamismo empresarial](docs/02-bloques/03-productividad-y-dinamismo-empresarial.md) | Umbrales de tamaño, unidad de mercado, competencia, capital humano e I+D |
| [Bloque 4 · Poder adquisitivo y precios](docs/02-bloques/04-poder-adquisitivo-y-precios.md) | Competencia en servicios, energía, deflactación del IRPF y cotizaciones |
| [Bloque 5 · Pensiones y demografía](docs/02-bloques/05-pensiones-y-demografia.md) | Reforma paramétrica y nocional, pilar complementario, familia e inmigración |
| [Bloque 6 · Función pública y gasto](docs/02-bloques/06-funcion-publica-y-gasto.md) | Regla de gasto, revisión del gasto, cuadro de fuentes y usos y empleo público |
| [Economía política y secuencia](docs/03-estrategia/01-economia-politica-y-secuencia.md) | Actores y vetos, incentivos, fases, puertas de decisión y trayectorias políticas |
| [Resultados del modelo](modelo/RESULTADOS.md) | Supuestos, resultados por escenario, terapia de choque, sensibilidad y límites |
| [Tablas del modelo](modelo/resultados/tablas.md) | Tablas generadas por el código |
| [Instrucciones del modelo](modelo/README.md) | Estructura del código y cómo modificarlo |

## Estructura del repositorio

| Ruta | Contenido |
|---|---|
| `ESPANA_DINAMICA_2040.md` | Documento final integrado |
| `docs/00-base/` | Marco conceptual de partida |
| `docs/01-investigacion/` | Diagnóstico estructural, evidencia internacional y crítica del marco |
| `docs/02-bloques/` | Seis bloques de propuestas |
| `docs/03-estrategia/` | Economía política, incentivos y secuencia de implementación |
| `modelo/` | Modelo cuantitativo de escenarios: código, resultados y gráficos |
| `web/` | Web interactiva: escenarios, seis bloques y estrategia ([en línea](https://espana-dinamica-2040.vercel.app)) |

## Plan de trabajo

| Fase | Trabajo | Estado |
|---|---|---|
| 1 | Diagnóstico estructural · Evidencia internacional · Crítica del marco base | Completada |
| 2 | Bloques de propuestas · Modelo de escenarios · Economía política y secuencia | Completada |
| 3 | Síntesis: marco general, escenario 2040, riesgos y respuestas, documento integrado | Completada |

El trabajo pendiente está en la sección 8 del documento integrado. Lo principal es cerrar la aritmética fiscal en un único cuadro, hacer la auditoría jurídica por medida y verificar en fuente primaria las cifras marcadas como no verificadas.

## Cómo ejecutar el modelo

```bash
python3 -m pip install numpy pandas matplotlib   # solo si faltan
python3 modelo/escenarios.py
```

Requiere Python 3.9 o posterior. El script es determinista, tarda unos segundos y escribe en `modelo/resultados/` las series anuales de los cuatro escenarios (`escenario_A.csv` a `escenario_D.csv`), el resumen, la sensibilidad, las tablas en Markdown y nueve gráficos. Sin `matplotlib` calcula todo y omite los gráficos. Todos los supuestos están en `modelo/escenarios.py`. `modelo/RESULTADOS.md` está escrito a mano a partir de las tablas, de modo que hay que revisarlo si se cambia un parámetro; lo mismo vale para las cifras del documento integrado.

## Nota metodológica

El proyecto parte de un marco normativo determinado (reducción del Estado y dinamismo privado) y lo somete a contraste: cada cifra debe llevar fuente, cada mecanismo su evidencia a favor y en contra, y las proyecciones se presentan como escenarios condicionados a supuestos explícitos, no como predicciones.

Las cifras marcadas "(no verificado)" no se pudieron contrastar en fuente primaria y las marcadas "(estimación propia)" son cálculos a partir de cifras publicadas. Buena parte de la literatura académica se cita de memoria como orden de magnitud. Las metas de los bloques son aspiraciones de diseño y no siempre coinciden con los resultados del modelo. El documento integrado usa el modelo como referencia cuantitativa y enumera las discrepancias en su sección 6.5.
