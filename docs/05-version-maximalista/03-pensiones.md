# Versión maximalista · 3. Pensiones

**Noviembre de 2026.** Parámetros: [00-parametros-de-diseno.md](00-parametros-de-diseno.md), que manda en caso de discrepancia; lo que no está ahí se marca "(propuesta de desarrollo)". Origen: propuesta P4 de la [revisión](../04-revision/01-revision-liberalizadora-ia.md). Versión contrastada: [bloque 5](../02-bloques/05-pensiones-y-demografia.md). Para el impacto cuantitativo, véase el escenario E del modelo ([`modelo/RESULTADOS.md`](../../modelo/RESULTADOS.md)).

---

## 1. Qué cambia frente a la versión contrastada

| Versión contrastada (bloque 5) | Versión maximalista |
|---|---|
| Cuentas nocionales desde 2030 para los nacidos a partir de 1985 | Cuentas nocionales desde 2029 para todos los menores de 50 años |
| Reparto puro: "sin capitalización ni doble pago" | 4 puntos de cotización se desvían a cuentas individuales de capitalización: uno en 2029, 2031, 2033 y 2035 |
| Pilar complementario de inscripción automática del 3 % + 3 %, adicional | El mismo pilar más los 4 puntos desviados: la cuenta recibe el 10 % del salario |
| Coste de transición nulo | 0,3-0,4 puntos de PIB por punto desviado (central 0,35): 1,4 puntos al año a régimen, durante décadas |
| La Seguridad Social garantiza la pensión contributiva calculada con sus reglas | La garantía pública es solo la pensión mínima |
| Requiere Pacto de Toledo con mayoría amplia | Requiere reforma del art. 41 CE por el art. 167 |
| Se mantienen: edad ligada a la esperanza de vida, cómputo de toda la carrera, freno de revalorización | Igual |

---

## 2. Diseño

**PE1. Reforma del art. 41 CE.**
- *Norma:* art. 41 CE, por el art. 167 en 2028. Hoy obliga a mantener "un régimen público de Seguridad Social". Redacción propuesta: "Los poderes públicos garantizarán a todos los ciudadanos una pensión mínima suficiente y un sistema de previsión obligatorio, que podrá combinar cuentas públicas y cuentas individuales de gestión privada" (propuesta de desarrollo). El art. 50 (pensiones "adecuadas y periódicamente actualizadas") no se reforma, porque el archivo de parámetros no lo incluye.
- *Leyes:* Ley General de la Seguridad Social (LGSS), arts. 205, 209 y 211; Ley 12/2022 de planes de pensiones de empleo; ley nueva de cuentas individuales.

**PE2. Cuentas nocionales para los menores de 50.**
- *Parámetros:* para todos los menores de 50 años desde 2029, es decir, los nacidos a partir de 1980.
- *Cómo funciona:* una cuenta nocional (o de contribución definida no financiera) es una cuenta virtual: la cotización no se invierte, paga las pensiones de hoy, pero se anota a nombre del cotizante y se revaloriza con un rendimiento ficticio. Al jubilarse, el saldo se divide por la esperanza de vida de su cohorte.
- *Desarrollo:* rendimiento igual al crecimiento de la masa salarial cotizada y conversión pro rata de los derechos ya devengados, como en la versión contrastada (propuesta de desarrollo).

**PE3. Capitalización con 4 puntos desviados.**
- *Parámetros:* 4 puntos de la cotización actual se desvían a una cuenta individual de capitalización, un punto en 2029, 2031, 2033 y 2035. Con el 3 % + 3 % del pilar complementario, la cuenta recibe el 10 % del salario.
- *Desarrollo:*
  - El desvío se aplica a quienes están en el sistema nocional (PE2) y a todos los nuevos cotizantes (propuesta de desarrollo). Lo que no se desvía sigue yendo a la cuenta nocional.
  - El pilar del 3 % + 3 % conserva la inscripción automática con posibilidad de salida de la versión contrastada, con reinscripción cada tres años; los 4 puntos desviados son obligatorios (propuesta de desarrollo). Quien sale recibe el 4 % más la mochila laboral.
  - La mochila laboral del 1,53 % (véase [01-trabajo.md](01-trabajo.md)) es una subcuenta del mismo vehículo, rescatable al perder el empleo.
- *En la práctica:* Carlos tiene 35 años en 2029 y gana el salario mediano (24.497 € en 2024, según el bloque 2). Desde 2035, con los cuatro puntos y el 3 % + 3 %, su cuenta recibe unos 2.450 € al año, más unos 375 € de la mochila. El resto de su cotización por jubilación se anota en su cuenta nocional. A los 67 años, o a la edad que fije la regla de esperanza de vida, cobra dos pensiones: la nocional, que paga la Seguridad Social, y la de su cuenta, que paga una aseguradora o su gestora.

**PE4. Pensión mínima como única garantía.**
- *Parámetros:* la garantía pública es solo la pensión mínima.
- *Desarrollo:* si la suma de la pensión nocional y la renta de la cuenta queda por debajo de la mínima, el Estado completa la diferencia con impuestos. La mínima se indexa siempre al IPC, como en la versión contrastada (P5) (propuesta de desarrollo).

**PE5. Cobro de la cuenta.**
- *Desarrollo:* al jubilarse, la parte del saldo necesaria para asegurar, junto con la pensión nocional, una renta igual a la mínima se convierte obligatoriamente en renta vitalicia; el resto puede cobrarse como renta vitalicia, retirada programada o capital (propuesta de desarrollo). Así el complemento a mínimos no paga el riesgo de quien gasta pronto su saldo.

**PE6. Lo que se mantiene.**
- Edad legal ligada a la esperanza de vida (P1 del bloque 5).
- Cómputo de toda la carrera para quienes siguen en el sistema actual (P2).
- Freno de revalorización: las pensiones por encima de 1,5 veces la mínima, incluidas las causadas, se revalorizan con el IPC − 0,5 puntos en 2028-2037, sin recorte nominal.
- *En la práctica:* Pilar, 70 años, cobra una pensión por encima de 1,5 veces la mínima. Pierde un 0,5 % real al año hasta 2037, en torno a un 5 % acumulado. Su vecino, con la mínima, se revaloriza con el IPC. Ninguno de los dos entra en el sistema de cuentas.

---

## 3. Competencia y mejora continua

**Entrada.** Cualquier gestora autorizada por la Dirección General de Seguros y Fondos de Pensiones, española o de otro Estado de la UE (reconocimiento mutuo, C3), puede ofrecer cuentas. Las aseguradoras ofrecen rentas vitalicias en el mismo mercado.

**Opción por defecto.** Quien no elige va a un fondo por defecto de ciclo de vida (más renta variable de joven, más renta fija al acercarse la jubilación), adjudicado por licitación cada cinco años a al menos dos gestoras, con comisión total máxima del 0,3 %, la misma que la versión contrastada (propuesta de desarrollo).

**Menú acotado.** Fuera del fondo por defecto, cada gestora ofrece como máximo cinco perfiles certificados (propuesta de desarrollo). Es la lección del fondo de capitalización sueco: la elección entre cientos de fondos y algún fraude de gestoras [E §1.3].

**Resultados publicados.** Por API y con formato común (C2): comisión total, rentabilidad neta a 1, 5 y 10 años frente a un índice de referencia, volatilidad, coste de la renta vitalicia por edad y tiempo de traspaso.

**Pago por resultado.** El cambio de gestora es gratuito una vez al año. En el fondo por defecto, la comisión baja un tramo si la rentabilidad neta queda por debajo del índice de referencia tres años seguidos, y la gestora pierde la adjudicación en la siguiente licitación si queda en el cuartil inferior (propuesta de desarrollo).

**Quiebra sin rescate.** Los activos de las cuentas son patrimonio separado, custodiado por un depositario distinto de la gestora. Si la gestora quiebra, las cuentas pasan a otra sin pérdida por la insolvencia. Las pérdidas por inversión son del titular: el Estado no las compensa. Si quiebra una aseguradora de rentas vitalicias, se aplica el régimen de administración especial de C4.

**Libertad para probar.** Se admiten en régimen de pruebas productos de desacumulación nuevos (rentas vitalicias variables, fondos colectivos de aportación definida que comparten el riesgo de longevidad), con información estandarizada y comparación pública frente a la renta vitalicia clásica (propuesta de desarrollo).

---

## 4. Dónde entra la IA agéntica

| Proceso | Nivel inicial | Nivel objetivo | Regla de asimetría |
|---|---|---|---|
| Reconocimiento de la pensión de jubilación y del complemento a mínimos (primera oleada, prestaciones regladas) | Decide lo favorable | Decide todo con muestreo | Reconocer es automático; denegar o calcular a la baja lo revisa una persona si el interesado lo pide |
| Cálculo del saldo nocional y de la conversión de derechos devengados | Decide todo con muestreo | — | Norma como código; el cotizante puede pedir revisión humana de su saldo |
| Gestión de la cuenta (reequilibrio, ciclo de vida) | Decide todo con muestreo | — | Dentro del mandato elegido; cambiar de perfil lo decide el titular |
| Asesoramiento sobre gestora, perfil y forma de cobro | Asiste | Propone | Nunca decide por el titular |
| Tarificación de rentas vitalicias | Propone | Decide todo con muestreo | Sistema de alto riesgo según el Reglamento (UE) 2024/1689 (seguros de vida); la oferta se explica y la reclamación la revisa una persona |
| Detección de lagunas de cotización y avisos | Decide lo favorable | — | Solo informa |

El agente del ciudadano (A7 de la revisión) compara gestoras con los datos publicados y ejecuta el traspaso con mandato digital. La regla para subir de nivel es la del archivo de parámetros: tasa de error medida frente al proceso humano.

---

## 5. Transición 2027-2036

| Año | Qué ocurre | Coste del desvío (puntos de PIB, central) |
|---|---|---|
| 2027 | Ley de cuentas individuales; registro de la reforma del art. 41; primera oleada agéntica en prestaciones | — |
| 2028 | Reforma constitucional. Empieza el freno de revalorización y el pilar complementario al 1 % + 1 % (calendario de la versión contrastada). Empiezan las ventas de activos: 0,3 puntos al año hasta 2035, para deuda | — |
| 2029 | Cuentas nocionales para los menores de 50; conversión de derechos devengados; primer punto desviado; mochila laboral | 0,35 |
| 2030 | Licitación del fondo por defecto en pleno funcionamiento | 0,35 |
| 2031 | Segundo punto | 0,70 |
| 2033 | Tercer punto | 1,05 |
| 2034 | El pilar complementario llega al 3 % + 3 % | 1,05 |
| 2035 | Cuarto punto: la cuenta recibe el 10 % del salario | 1,40 |
| 2036 | Primera revisión de gestoras y del fondo por defecto | 1,40 |

**Derechos vigentes.** Las pensiones causadas se pagan con sus reglas, con el freno descrito y sin recorte nominal. Los mayores de 50 en 2029 siguen en el sistema actual con las reformas paramétricas. Los menores de 50 conservan lo devengado como saldo inicial de su cuenta nocional. Las reglas de Clases Pasivas siguen las de la versión contrastada.

---

## 6. Quién gana y quién pierde

| Grupo | Cuántos | Efecto |
|---|---|---|
| Pensionistas con pensión ≤ 1,5 veces la mínima | ≈5-6 millones (no verificado) | Sin pérdida: IPC garantizado |
| Pensionistas por encima de ese umbral | ≈4-5 millones (no verificado) | En torno a −5 % real acumulado en 2028-2037; sin recorte nominal |
| Mayores de 50 en 2029 | — | Siguen en reparto con edad ligada a la esperanza de vida y cómputo de toda la carrera; pagan, como contribuyentes, la transición |
| Menores de 50 en 2029 | ≈12-14 millones de cotizantes nacidos desde 1985, más las cohortes de 1980-1984 | Ganan propiedad y portabilidad del ahorro; pierden la garantía de una pensión contributiva calculada por el Estado y asumen el riesgo de mercado y de longevidad |
| Trabajadores con carreras cortas o irregulares, sobre todo mujeres | — | Acumulan poco y dependen del complemento a mínimos |
| Contribuyentes | Todos | Pagan el doble pago: 1,4 puntos de PIB al año a régimen (1,2-1,6), unos 24.000 M€ con un punto de PIB de unos 17.000 M€ (estimación propia), durante décadas |
| Gestoras y aseguradoras | — | Ganan un flujo del 10 % del salario de casi todos los asalariados jóvenes |

**Pagos que pasan del Estado a los hogares.** Para los menores de 50, una parte de la pensión deja de ser una obligación del Estado y pasa a depender del saldo acumulado por cada hogar y de los mercados. El Estado solo responde de la mínima. A la vez, durante la transición el Estado paga más, no menos: sigue pagando todas las pensiones en curso con 4 puntos menos de cotización. A ese coste se suma el de la rebaja de cotizaciones empresariales del documento de trabajo (1,75 puntos a régimen): entre ambos, unos 3,15 puntos de PIB menos de ingresos de la Seguridad Social desde 2035.

---

## 7. Riesgos y lo que dice la evidencia del proyecto

**R1. El doble pago.** La crítica lo califica de severidad alta y evidencia sólida [R §6.1]: una generación paga las pensiones vigentes y ahorra para la suya. Chile soportó costes de varios puntos de PIB durante décadas (magnitud no verificada), y Polonia y Hungría revirtieron sus segundos pilares cuando el coste chocó con las reglas fiscales. Barr y Diamond (2008) y Orszag y Stiglitz (2001) muestran que la capitalización no mejora por sí misma la sostenibilidad.
- *Mitigación:* desvío gradual, freno de revalorización y ventas de activos. Ninguna lo cubre: las ventas (0,3 puntos al año hasta 2035) se destinan a deuda y terminan antes de que el coste llegue a su máximo. El coste se financia con la regla de gasto real cero o con deuda.
- *Alerta:* déficit contributivo de la Seguridad Social; deuda pública atribuible a la transición; prima de riesgo (freno automático a los 200 puntos básicos durante tres meses).

**R2. Pensiones insuficientes (Chile).** Con una cotización del 10 % y mercado laboral informal, la tasa de sustitución mediana autofinanciada fue del 20-34 % (12 % para las mujeres y 33 % para los hombres según la Superintendencia), y Chile tardó 27 años en añadir un pilar solidario [E §3.2]. España tiene lagunas laborales y paro alto.
- *Mitigación:* la cuenta no sustituye todo el reparto: se suma a la pensión nocional. La pensión mínima existe desde el primer día, y la renta vitalicia obligatoria hasta la mínima impide agotar el saldo.
- *Alerta:* tasa de sustitución proyectada por cohorte y sexo; densidad de cotización; proporción de nuevas pensiones con complemento a mínimos.

**R3. Elección excesiva, comisiones y fraude.** La parte capitalizada sueca tuvo problemas de elección entre cientos de fondos y algún fraude de gestoras [E §1.3]; Chile tuvo comisiones altas y poca competencia al principio [E §3.2].
- *Mitigación:* fondo por defecto licitado con comisión máxima; menú acotado; patrimonio separado.
- *Alerta:* comisión media ponderada; cuota del fondo por defecto; concentración de gestoras.

**R4. Salidas del pilar complementario y mochilas que no llegan a la jubilación.** El *auto-enrolment* británico elevó la participación del 55 % al 88-90 %, pero en las microempresas ronda el 55 % [E §7.1]. En Austria la mayoría rescata la mochila al cambiar de empleo (no verificado) [E §2.3].
- *Mitigación:* reinscripción cada tres años; los 4 puntos desviados no admiten salida.
- *Alerta:* tasa de salida por tamaño de empresa; saldo medio de la mochila a los 50 años.

**R5. Ajustes abruptos.** El freno sueco recortó pensiones de golpe en 2010 y obligó a compensar con rebajas fiscales [E §1.3].
- *Mitigación:* el freno español tiene techo de 0,5 puntos, nunca recorta en nominal y excluye las pensiones bajas.
- *Alerta:* activaciones del freno; renta relativa de los mayores.

**R6. Constitución y reversibilidad.** La reforma del art. 41 exige tres quintos que el proyecto no encuentra (192-207 escaños frente a 210). El art. 50 no se reforma y la doctrina constitucional protege las pensiones causadas [R §6.2]. La reforma de 2013 se desmontó en 2021-2023, y unos nueve millones y medio de pensionistas (no verificado) votan más que nadie.
- *Mitigación:* las pensiones causadas no se tocan salvo el freno; la cuenta individual es propiedad del titular, lo que la hace difícil de revertir una vez acumulada.
- *Alerta:* cuestiones de inconstitucionalidad; programas de la oposición; encuestas por edad.

---

## 8. Qué queda sin resolver

- **La financiación del doble pago.** El archivo de parámetros acepta el coste pero no lo financia de forma específica; depende de que la regla de gasto se cumpla durante décadas.
- **El 10 % del salario.** Solo es seguro si el 3 % + 3 % es obligatorio. Con salida libre, la cuenta recibe el 4 % para quien sale. El promotor debe decidir.
- **El coste real por punto.** La regla de 0,35 puntos de PIB por punto vale para toda la base de cotización; si el desvío se limita a los menores de 50, el coste empieza siendo menor y crece con el relevo de cohortes. El escenario E debe aclararlo.
- **La garantía "solo la mínima" frente a la pensión nocional.** La pensión nocional la sigue pagando la Seguridad Social; el archivo no dice si es una garantía pública o un pasivo ajustable sin suelo.
- **El riesgo de reversión a la polaca o a la húngara** si el coste choca con el marco fiscal europeo.
