# Versión maximalista · 1. Trabajo

**Noviembre de 2026.** Parámetros: [00-parametros-de-diseno.md](00-parametros-de-diseno.md), que manda en caso de discrepancia; lo que no está ahí se marca "(propuesta de desarrollo)". Origen: propuestas L1-L6 y C1-C5 de la [revisión](../04-revision/01-revision-liberalizadora-ia.md). Versión contrastada: [bloque 2](../02-bloques/02-mercado-laboral-y-salarios.md). Para el impacto cuantitativo, véase el escenario E del modelo ([`modelo/RESULTADOS.md`](../../modelo/RESULTADOS.md)).

---

## 1. Qué cambia frente a la versión contrastada

| Versión contrastada (bloque 2) | Versión maximalista |
|---|---|
| Mochila del 1,5 % con causa y tutela judicial; objetivo a 15 días más mochila; improcedente a 33 días | Contrato único con extinción libre: preaviso de un mes, comunicación escrita, indemnización legal cero. Mochila del 1,53 % |
| El juez controla la causa del despido | El juez solo controla discriminación y derechos fundamentales (nulidad con readmisión) |
| Sin reforma constitucional; se respeta el Convenio 158 | Reforma del art. 35 por el art. 167; causa formal hasta 2035 y supresión tras denunciar el Convenio 158 |
| Suelo sectorial; descuelgue con arbitraje; ultraactividad de 24 meses con arbitraje | Convenio de empresa prevalente en todo; sectorial solo para afiliados; ultraactividad de 12 meses; pacto individual por encima de 1,5 veces el mediano |
| SMI en una banda del 55-60 % del mediano, fijado por comisión | SMI congelado en nominal hasta el 50 % del mediano provincial; tarifa de entrada para menores de 25 años |
| *Bonus-malus*, complemento salarial (L7), seguro salarial para mayores de 50 (L5) | Se suprimen los tres |
| Rebaja focalizada de cotizaciones y un punto general si hay financiación | Rebaja general de 5 puntos de cotización empresarial (2030-2034), condicionada a ahorro certificado |
| Políticas activas reforzadas por el SEPE y las comunidades como puerta previa al cambio del despido | Colocación y formación por operadores privados y agénticos pagados por inserción a 12 meses; el SEPE solo paga prestaciones |
| Puertas: L1 no entra sin políticas activas operativas y brecha de producción ≥ 0 | Sin puertas-veto; solo los dos frenos automáticos del archivo de parámetros |

---

## 2. Diseño

**T1. Contrato único de extinción libre.**
- *Norma:* art. 35 CE, reformado por el art. 167 en 2028; Estatuto de los Trabajadores (ET), arts. 15, 49-56; Ley Reguladora de la Jurisdicción Social (LRJS). Redacción propuesta para el art. 35.1 *in fine*: "La ley regulará la extinción del contrato de trabajo y garantizará la tutela frente a la discriminación y la vulneración de derechos fundamentales" (propuesta de desarrollo).
- *Parámetros:* contrato único e indefinido para todo contrato nuevo desde 2029. Extinción con preaviso de un mes y comunicación escrita. Indemnización legal cero. Entre 2029 y 2035 la comunicación expresa una causa formal ("decisión organizativa"), sin control de razonabilidad. Tras la denuncia del Convenio 158, la causa se suprime.
- *Lo que sigue igual:* el procedimiento de despido colectivo de la Directiva 98/59/CE (consulta y notificación) y la sucesión de empresa (Directiva 2001/23/CE).
- *En la práctica:* Lucía, 29 años, entra en 2030 en una empresa logística con el salario mediano (24.497 € en 2024, según el bloque 2). Si la empresa prescinde de ella en 2034, recibe una carta con un mes de preaviso, sin indemnización ni juicio sobre la causa. Si sospecha que la razón es su embarazo, demanda por nulidad: aportados indicios, la empresa debe probar que no discriminó (regla de la LRJS que se conserva); si pierde, la readmite.

**T2. Cuenta individual portable (mochila).**
- *Norma:* ley del fondo, estatal (ya comprometido en el PRTR).
- *Parámetros:* aportación empresarial del 1,53 % del salario bruto, portable.
- *Desarrollo:* subcuenta separada dentro del vehículo de la cuenta de pensión (véase [03-pensiones.md](03-pensiones.md)), rescatable al perder el empleo, para movilidad geográfica o para formación; lo no usado se suma a la jubilación. Comisión máxima del 0,3 %, como en la versión contrastada (propuesta de desarrollo).
- *En la práctica:* con el salario mediano, Lucía acumula unos 375 € al año, el equivalente a unos 5,6 días de salario. Tras cuatro años tiene en torno a 1.500 € más rendimientos. Con el régimen actual de despido objetivo (20 días por año) habría cobrado unos 5.400 €; con el improcedente (33 días), unos 8.900 € (estimación propia con las cifras del proyecto).

**T3. Conversión voluntaria de los contratos vigentes.**
- *Parámetros:* los contratos vigentes se convierten de forma voluntaria.
- *Desarrollo:* quien no convierte conserva su régimen. Quien convierte cobra una prima pactada, y la indemnización devengada hasta ese día se congela como derecho exigible si la empresa extingue después (propuesta de desarrollo).

**T4. Negociación colectiva centrada en la empresa.**
- *Norma:* ET, Título III (arts. 82-92). Cabe por ley ordinaria: el art. 37 CE garantiza la fuerza vinculante de los convenios, no su eficacia general.
- *Parámetros:* el convenio de empresa prevalece en todas las materias; el sectorial obliga solo a los afiliados a las organizaciones firmantes, salvo adhesión; ultraactividad de 12 meses; pacto individual válido por encima de 1,5 veces el salario mediano.
- *En la práctica:* una cadena de restauración no afiliada a la patronal firmante y sin convenio propio fija salarios por contrato, con el SMI como único suelo.

**T5. Salario mínimo como red.**
- *Norma:* ET, art. 27.
- *Parámetros:* congelación nominal del SMI (1.221 € en 14 pagas en 2026, RD 126/2026) hasta que equivalga al 50 % del salario mediano de cada provincia; después, indexación a ese nivel. Tarifa de entrada para menores de 25 años.
- *Desarrollo:* tarifa de entrada del 80 % del SMI provincial durante los dos primeros años de vida laboral (propuesta de desarrollo).

**T6. Rebaja general de la cotización empresarial.**
- *Norma:* Ley General de la Seguridad Social (LGSS) y orden de cotización.
- *Parámetros:* −5 puntos, uno al año entre 2030 y 2034, cada uno condicionado a ahorro certificado por la AIReF. Coste: 0,3-0,4 puntos de PIB por punto (central 0,35), es decir, 1,75 puntos de PIB al año a régimen (1,5-2,0).
- *En la práctica:* con el salario mediano, cada punto equivale a unos 245 € al año por trabajador; los cinco, a unos 1.225 €. Cuánto llega al salario depende del poder de negociación en cada mercado.

**T7. Colocación y formación por resultado.**
- *Norma:* Ley 3/2023 de Empleo; ejecución autonómica sustituida por contratos estatales o autonómicos con operadores (propuesta de desarrollo).
- *Parámetros:* operadores privados y agénticos pagados por inserción a 12 meses. El SEPE solo paga prestaciones.
- *En la práctica:* Andrés, 54 años, pierde su empleo en 2031. La prestación se reconoce el mismo día (§4) y se le asigna por sorteo un operador de colocación, que puede cambiar a los seis meses (propuesta de desarrollo). El operador cobra solo si Andrés sigue empleado 12 meses después, y cobra más por él que por un parado joven con estudios, porque su probabilidad de reempleo es menor.

**T8. Lo que se suprime.** El *bonus-malus*, el complemento salarial, el seguro salarial para mayores de 50 y el suelo sectorial. Quedan el ingreso mínimo vital y la prestación por desempleo.

**T9. Contrapesos de competencia.** Se conserva la medida L9 del bloque 2: nulidad de los pactos de no competencia por debajo de 1,5 veces el mediano, pactos de no captación como infracción muy grave y test de mercado de trabajo local en las concentraciones (propuesta de desarrollo; la revisión dice que se conservan).

---

## 3. Competencia y mejora continua

**Entrada.** Cualquier entidad opera en colocación o formación con declaración responsable y seguro de responsabilidad (C1), sin concurso ni cupo. Los gestores de la mochila necesitan la autorización ordinaria de gestora.

**Resultados publicados.** Cada operador publica por API (C2) la inserción a 6 y 12 meses ajustada por perfil, el salario y la jornada del empleo obtenido y el retorno al paro en 24 meses. Los gestores de la mochila publican comisión total y rentabilidad neta a 1, 5 y 10 años.

**Pago por resultado.** La tarifa crece con la dificultad estimada del perfil (edad, duración del paro, cualificación). Para evitar el descreme se combinan tres reglas: asignación aleatoria de carteras en la primera fase, tarifa ponderada y prohibición de rechazar a un parado asignado (propuesta de desarrollo, a partir de L5).

**Fallo y salida.** El decil inferior en inserción ajustada pierde la cartera en el ciclo siguiente. Si un operador quiebra, sus parados se reasignan por sorteo en 15 días y no hay rescate: el régimen de administración especial de C4 se reserva a servicios esenciales, y la colocación no lo es. Si quiebra un gestor de mochilas, los saldos son patrimonio separado y pasan a otro gestor sin pérdida por la insolvencia; las pérdidas por inversión son del titular.

**Libertad para probar.** Los operadores combinan orientación humana y agéntica en cualquier proporción y pueden cobrar a la empresa por intermediación, nunca al parado. El convenio de empresa y el pacto individual permiten ensayar fórmulas salariales y de jornada sin autorización. La autoridad publica cada año la comparación de modelos.

---

## 4. Dónde entra la IA agéntica

El archivo de parámetros fija dos reglas que aquí se aplican así:
- **Regla de asimetría:** lo favorable al ciudadano se resuelve de forma automática; lo desfavorable admite revisión por una persona.
- **Niveles de autonomía:** asiste, propone, decide lo favorable, decide todo con muestreo. Se sube de nivel por tasa de error medida frente al proceso humano.

| Proceso | Agente | Nivel inicial | Nivel objetivo | Regla de asimetría |
|---|---|---|---|---|
| Reconocimiento de la prestación por desempleo (primera oleada, 2027-2028) | Proveedor del Estado agéntico; datos de afiliación y de la comunicación de extinción | Decide lo favorable | Decide todo con muestreo | La denegación o la reducción la revisa una persona si el interesado lo pide |
| Perfilado estadístico del parado | Autoridad de evaluación | Propone | Decide todo con muestreo | El perfil determina la tarifa, no derechos; el parado puede pedir revisión |
| Emparejamiento de vacantes y candidatos | Operadores de colocación | Asiste | Propone | Ninguna decisión vinculante para el trabajador |
| Selección y extinción decididas por las empresas con herramientas de IA | Empresas | — | — | Sistemas de alto riesgo según el Reglamento (UE) 2024/1689 (anexo III): obligación de supervisión humana y de explicación al afectado |

La prestación se publica como especificación ejecutable con casos de prueba (normas como código). La comunicación de extinción llega por API y dispara el pago desde el primer día.

---

## 5. Transición 2027-2036

| Año | Qué ocurre |
|---|---|
| 2027 | Ley de convenio de empresa prevalente, eficacia limitada del sectorial y ultraactividad de 12 meses. Congelación nominal del SMI (propuesta de desarrollo: el calendario no la fecha; cabe por ley ordinaria). Ley de colocación por resultado y primeras carteras (propuesta de desarrollo). Primera oleada agéntica: prestaciones. Registro de la iniciativa de reforma constitucional |
| 2028 | Reforma de los arts. 35, 41, 43 y 103.3 por el art. 167 y, si se pide, referéndum. El SEPE deja de orientar y formar |
| 2029 | Contrato único y mochila para todo contrato nuevo. Se abre la conversión voluntaria de contratos vigentes. Tarifa de entrada para menores de 25 años |
| 2030-2034 | Un punto menos de cotización empresarial cada año, si la AIReF certifica el ahorro |
| 2031 | Primera evaluación pública de operadores; el decil inferior pierde cartera |
| 2035 | Se registra la denuncia del Convenio 158 en la ventana 2035-2036 (no verificado) |
| 2036 | Supresión de la causa formal cuando la denuncia surta efecto; la OIT fija ese efecto un año después del registro (no verificado), lo que puede llevarlo a 2036-2037 |

**Contratos y derechos vigentes.** Los asalariados actuales conservan su régimen de despido mientras no conviertan. Los convenios sectoriales vigentes se aplican hasta su vencimiento más 12 meses de ultraactividad; después obligan solo a los afiliados. Los pleitos iniciados antes de 2029 siguen la norma anterior.

---

## 6. Quién gana y quién pierde

| Grupo | Efecto | Cifras del proyecto |
|---|---|---|
| Parados, sobre todo jóvenes | Ganan acceso: contratar deja de ser una apuesta judicial y el coste laboral baja | 2,59 millones de parados; paro juvenil ≈23-24 % |
| Empresas | Ganan: sin incertidumbre judicial, sin indemnización y con hasta 5 puntos menos de cotización | 1,4 millones de empresas con asalariados |
| Trabajadores nuevos despedidos tras años de antigüedad | Pierden: la mochila (≈5,6 días por año) sustituye a 20 o 33 días por año | Véase el ejemplo de T2 |
| Mayores de 50 poco cualificados | Pierden: desaparece el seguro salarial y su salario de *insider* queda sin protección | Riesgo calificado de severidad alta en la crítica [R §2.4] |
| Trabajadores de salario bajo en provincias de salario mediano alto | Pierden poder adquisitivo mientras el SMI está congelado y la inflación lo erosiona | Pierden también el complemento salarial de hasta 1.500-2.500 € al año previsto en la versión contrastada |
| Trabajadores de provincias de baja productividad | Más empleo formal, menos salario relativo | No estimado |
| Sindicatos y patronales sectoriales | Pierden la eficacia general | — |
| Contribuyentes | Financian la rebaja de cotizaciones | 1,75 puntos de PIB al año a régimen (1,5-2,0) |

**Pagos que pasan a los hogares.** La indemnización por despido que paga la empresa desaparece; queda la aportación del 1,53 %, propiedad del trabajador. El complemento salarial y el seguro salarial que la versión contrastada pagaba con impuestos no existen: esa renta la pierde el hogar. La formación deja de ser un servicio público gratuito y se paga con la mochila propia o la financia el operador que cobra por inserción.

---

## 7. Riesgos y lo que dice la evidencia del proyecto

**R1. El despido libre no eleva por sí solo la productividad.** La crítica califica la evidencia de "disputada" [R §2.2]: la protección reduce la productividad en sectores de mucha rotación (Bassanini, Nunziata y Venn, 2009), pero la protección frente al despido injustificado favorece la innovación (Acharya, Baghai y Subramanian, 2014) y el nivel óptimo de protección es positivo (Belot, Boone y van Ours, 2007). La tabla de síntesis de la evidencia internacional atribuye al abaratamiento del despido un efecto positivo pequeño en contratación indefinida, más despidos y dualidad persistente [E §8]. La reforma de 2021 redujo la temporalidad restringiendo, no liberalizando [E §2.5].
- *Mitigación:* no se promete productividad; se elimina la brecha entre contratos, que sí la daña (Dolado, Ortigueira y Stucchi, 2016).
- *Alerta:* transiciones de empleo a empleo frente a empleo a paro; antigüedad media; productividad total de los factores sectorial frente a un contrafactual.

**R2. Menos formación específica.** Con relaciones cortas nadie invierte en capital humano específico, como ya ocurrió con los temporales (Cabrales, Dolado y Mora, 2017) [R §2.3].
- *Mitigación:* mochila rescatable para formación; el operador pagado a 12 meses tiene incentivo a formar.
- *Alerta:* horas de formación por trabajador; gasto empresarial en formación.

**R3. Monopsonio.** Eliminar a la vez la protección frente al despido y la eficacia general de los convenios, y congelar el SMI, aumenta el poder de fijación salarial del empleador, sobre todo en mercados locales pequeños: una desviación típica más de concentración reduce los salarios un 2-3 % en cuatro países europeos (Bassanini et al., Fedea, 2022) [R §2.1]. La crítica califica la severidad de alta para el objetivo salarial.
- *Mitigación:* T9 (contrapesos de competencia) y la portabilidad de la mochila, que reduce el coste de cambiar de empleo.
- *Alerta:* participación salarial en el valor añadido bruto; brecha entre productividad y salario mediano por provincia; dispersión salarial entre empresas para puestos iguales.

**R4. Destrucción de empleo a corto plazo.** El escenario de choque del modelo, sin despido libre, ya da un paro del 11,8 % en 2029 (13,6 % con supuestos adversos); la revisión advierte de que el despido libre añadiría destrucción de empleo.
- *Mitigación:* solo afecta a contratos nuevos y conversiones voluntarias, de modo que el stock de empleo protegido se renueva poco a poco.
- *Alerta:* ratio de despidos sobre contrataciones; paro de larga duración por encima del 40 % del total; curva de Beveridge.

**R5. Constitución y tratados.** La STC 22/1981 lee en el art. 35 un derecho a no ser despedido sin justa causa; reformarlo exige tres quintos, que ninguna combinación afín alcanza según el proyecto (192-207 escaños frente a 210). El Convenio 158 prevalece sobre la ley mientras no se denuncie. Además, el art. 24 de la Carta Social Europea revisada y el art. 30 de la Carta de Derechos Fundamentales de la UE exigen protección frente al despido injustificado, y el Comité Europeo de Derechos Sociales declaró en 2024 que la indemnización española es insuficiente [R §8].
- *Mitigación:* causa formal y nulidad por derechos fundamentales hasta la denuncia; dictamen previo del Consejo de Estado.
- *Alerta:* cuestiones de inconstitucionalidad; reclamaciones ante el Comité Europeo de Derechos Sociales y la OIT; procedimientos de infracción.

**R6. Riesgo concentrado en los mayores poco cualificados.** La evidencia sobre sus pérdidas por desplazamiento es sólida [R §2.4], y el diseño suprime el seguro salarial.
- *Mitigación:* tarifa de colocación más alta para este perfil; la conversión voluntaria protege a quien ya tiene contrato.
- *Alerta:* paro de los mayores de 50; percentil 10 salarial; pobreza laboral.

---

## 8. Qué queda sin resolver

- **La mayoría de tres quintos.** Sin ella queda solo la causa formal por ley ordinaria, con alto riesgo de inconstitucionalidad.
- **La Carta Social Europea.** El archivo de parámetros solo prevé denunciar el Convenio 158; con el art. 24 de la Carta vigente, suprimir la causa deja un conflicto internacional abierto.
- **La fecha efectiva de la supresión de la causa**, que depende del plazo de efecto de la denuncia (no verificado).
- **La rebaja de cotizaciones condicionada.** Si la AIReF no certifica el ahorro, no hay rebaja; el calendario la da por hecha.
- **El efecto del SMI provincial congelado** sobre empleo y pobreza laboral, no estimado.
- **El efecto de la Directiva (UE) 2022/2041** de salarios mínimos adecuados sobre un SMI fijado al 50 % del mediano provincial (no verificado su alcance jurídico; la directiva no fija un nivel obligatorio).
