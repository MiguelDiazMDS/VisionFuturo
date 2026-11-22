# Revisión del proyecto: liberalización profunda, Estado mínimo e IA agéntica

**Noviembre de 2026.** Revisión de todo el repositorio (documentos, modelo, web y estrategia) contra cinco principios fijados por el promotor: liberalización profunda del trabajo, reducción sistemática del Estado, función pública limitada a seguridad y justicia, competencia real en lo privado e incorporación agresiva de sistemas agénticos de IA.

Dos convenciones. Las cifras proceden de los documentos del proyecto salvo las marcadas "(no verificado)", que son de memoria y hay que contrastar. Y los documentos de `docs/01-investigacion/` no se tocan en ninguna propuesta: son hallazgos, no política. Donde un hallazgo contradice una propuesta de esta revisión, se dice en el apartado de riesgos.

---

## 0. Veredicto

El proyecto actual es un programa de **reforma del Estado**, no de **reducción del Estado**. Mejora reglas, composición y gestión, y deja el perímetro público casi intacto: en el escenario central el gasto público pasa del 45,5 % del PIB al 44,2 % en 2040. Para los cinco principios, eso es un programa de mantenimiento.

Tres hechos ordenan toda la revisión:

1. **"Tamaño del Estado" son dos cosas distintas.** El Estado como productor (3,07 millones de efectivos) y el Estado como financiador (45,5 % del PIB de gasto). Privatizar la provisión reduce mucho lo primero y casi nada lo segundo. De los 45,5 puntos de gasto, 26 son pensiones (13,0), sanidad (6,6), educación (4,2) e intereses (2,4). Seguridad, defensa y justicia rondan 3-4 puntos (no verificado). Quien quiera bajar el gasto tiene que decidir sobre financiación, no solo sobre provisión.
2. **La IA no aparece en el proyecto.** Hay una frase sobre "actuación administrativa automatizada" en el bloque 6 y nada más. Es la mayor omisión frente al principio 5 y la palanca que más cambia la aritmética de la plantilla pública.
3. **El despido libre por la vía limpia está cerrado hasta 2035.** El Convenio 158 de la OIT solo puede denunciarse en una ventana de un año cada diez; la actual se cierra el 23 de noviembre de 2026 y la siguiente se abre en 2035 (no verificado; requiere dictamen). Con las Cortes disueltas, no hay forma de llegar. La liberalización del despido tiene que diseñarse por otra vía (propuesta L1).

---

## 1. Diagnóstico: qué es estatista, rígido o poco competitivo

| Dónde | Qué dice hoy | Por qué contradice los principios |
|---|---|---|
| Principio 1 del documento integrado (§2.1) | "Composición y eficiencia antes que tamaño" | Renuncia expresa a reducir el Estado. Es el supuesto de diseño que hay que invertir |
| Bloque 2, medida L1 | Mochila del 1,5 % con causa del despido y tutela judicial mantenidas; improcedente a 33 días | Abarata poco y deja intacta la incertidumbre judicial, que es el coste real del despido |
| Bloque 2, contrapesos | Salario mínimo al 55-60 % del mediano, suelo sectorial, bonus-malus de cotización | Tres rigideces nuevas o reforzadas. El bonus-malus penaliza precisamente la rotación que un mercado flexible necesita |
| Bloque 2 y estrategia, "puertas" | La reforma laboral espera a que el paro baje del 10 % y a que el SEPE funcione | Subordina la reforma a que mejore lo que la reforma debe mejorar. En el propio modelo la puerta no se cumple en 2029 |
| Bloque 5 | Reparto mantenido; pilar complementario del 3 % + 3 %; "sin capitalización sustitutiva" | La pensión sigue siendo un pasivo estatal del 13 % del PIB. El ahorro privado es un adorno |
| Bloque 6, función pública | Estatuto para todos los funcionarios actuales; contrato laboral solo para el nuevo ingreso sin autoridad; "sin despidos" | La plantilla se reduce solo por reposición lenta. No hay objetivo de tamaño |
| Bloque 6, servicios | "Elección en sanidad y educación con financiación pública", test de privatización de cuatro preguntas, redes públicas | El productor público sigue siendo la opción por defecto y lo privado tiene que superar un examen. Debe ser al revés |
| Bloque 6, gasto | Ancla de saldo estructural, reserva de ingresos de 0,3-0,6 puntos | Si el ajuste no llega, se suben impuestos. No hay techo al tamaño del gasto |
| Bloques 1-4, compensaciones | 1,2-1,9 puntos de PIB en el pico; fondo territorial, rescate de licencias, complemento salarial | Gasto nuevo para comprar reformas. Parte es inevitable; el conjunto es excesivo |
| Bloque 3 | "Capital humano e I+D protegidos de la consolidación", +0,25-0,45 puntos | Gasto público adicional blindado dentro de un programa de reducción |
| Bloque 1 | Vivienda asequible por concesión pública, pago estatal por vivienda terminada | El Estado como promotor y como pagador de incentivos |
| Modelo (`modelo/escenarios.py`) | Cuatro escenarios; ninguno representa despido libre, privatización de provisión ni IA | El modelo no puede evaluar los principios. El escenario D es solo "lo mismo, más rápido" |
| Web | Titular "Reformar cuesta antes de rendir"; sección "Lo que falta" | Comunica cautela. No hay métrica de tamaño del Estado ni de automatización |

Lo que sí está alineado y se conserva: edificabilidad por derecho y declaración responsable (bloque 1), rampas en lugar de umbrales y unidad de mercado (bloque 3), apertura de servicios protegidos y deflactación del IRPF (bloque 4), caducidad de subvenciones y revisión de todo el gasto (bloque 6), agencia de selección independiente (bloque 6).

---

## 2. Propuestas de cambio

Cada propuesta indica qué se cambia, por qué, sus riesgos con mitigación y el impacto esperado. Los impactos son órdenes de magnitud; ninguno sale todavía del modelo (§3).

### 2.1 Mercado de trabajo

**L1. Extinción libre con indemnización tasada cero y mochila plena.**
- *Qué se cambia:* Estatuto de los Trabajadores, arts. 49-56. Para todo contrato nuevo, la empresa extingue con preaviso de un mes y comunicación escrita del motivo, sin indemnización: la sustituye una aportación mensual del 1,53 % del salario a la cuenta individual del trabajador (modelo austriaco completo). El juez solo revisa discriminación y vulneración de derechos fundamentales, con nulidad y readmisión. Los contratos vigentes pueden convertirse de forma voluntaria con una prima.
- *Por qué:* elimina la dualidad de raíz (un solo régimen de salida) y, sobre todo, el riesgo judicial. Hoy el coste esperado del despido no son los 20 o 33 días, sino no saber cuál de los dos se pagará.
- *Riesgos:* (a) Jurídico: la STC 22/1981 lee en el art. 35 de la Constitución un derecho a no ser despedido sin justa causa, y el Convenio 158 y el art. 24 de la Carta Social Europea exigen causa. La denuncia del Convenio no es posible antes de 2035 (no verificado). *Mitigación sin diluir:* mantener formalmente la causa ("decisión organizativa comunicada por escrito") y suprimir el control judicial de su razonabilidad y la indemnización, que son las dos cosas que la ley sí puede fijar. Dictamen previo del Consejo de Estado. (b) Empírico: la evidencia del proyecto sobre el efecto en productividad es mixta, y el modelo no sabe representar esta medida. (c) Paro a corto plazo: abaratar el despido con holgura cíclica destruye empleo antes de crearlo.
- *Impacto:* fin de la litigiosidad por despido (salvo nulidad). Efecto en paro estructural incierto; el rango del proyecto para la reforma moderada es de 2-3 puntos menos a largo plazo.

**L2. Convenio de empresa por encima de todo y fin de la eficacia general automática.**
- *Qué se cambia:* Título III del Estatuto. El convenio de empresa prevalece en todas las materias; el sectorial solo obliga a las empresas y trabajadores afiliados a los firmantes, salvo adhesión expresa; fin de la ultraactividad a los 12 meses; pacto individual válido por encima de 1,5 veces el salario mediano.
- *Por qué:* los salarios se fijan donde está la información sobre productividad. Elimina el suelo sectorial que el bloque 2 conserva.
- *Riesgos:* el art. 37 de la Constitución garantiza la fuerza vinculante de los convenios, no su extensión a terceros, así que la eficacia limitada cabe por ley ordinaria. Riesgo de caída salarial donde el empleador tiene poder de mercado: se mitiga con L4 y con la nulidad de los pactos de no competencia, que se conserva.
- *Impacto:* más dispersión salarial entre empresas y territorios, y más empleo en las provincias de baja productividad.

**L3. Rebaja de cinco puntos de cotización empresarial, financiada con perímetro.**
- *Qué se cambia:* LGSS. Sustituye la rebaja focalizada, el complemento salarial y el bonus-malus del bloque 2 por una rebaja general.
- *Por qué:* el coste de contratar en España es sobre todo cuña fiscal (41,4 %).
- *Riesgos:* cuesta entre 1,5 y 2 puntos de PIB (a 0,3-0,4 puntos por punto de cotización, cifras del proyecto). Solo es posible si las propuestas P y A liberan antes ese importe. *Mitigación:* escalonarla y condicionarla a ahorro certificado por la AIReF, no a ahorro proyectado.
- *Impacto:* cuña en torno al 37 %, la meta que el proyecto actual fija y el modelo no alcanza.

**L4. Salario mínimo como red, no como política salarial.**
- *Qué se cambia:* art. 27 del Estatuto. Congelación nominal hasta que equivalga al 50 % del salario mediano de cada provincia, y después indexación a ese nivel. Tarifa de entrada para menores de 25 años.
- *Por qué:* el salario mínimo estatal único (RD 126/2026) expulsa empleo formal en las provincias pobres.
- *Riesgos:* el proyecto lo mantiene alto como contrapeso al poder de mercado del empleador, con evidencia a favor. *Mitigación:* el complemento de rentas bajas pasa por el IRPF (impuesto negativo), no por el coste laboral.
- *Impacto:* empleo formal de jóvenes y poco cualificados; magnitud no estimada en el proyecto.

**L5. Colocación y formación íntegramente privadas, con pago por resultado.**
- *Qué se cambia:* Ley de Empleo. El SEPE deja de orientar y formar; conserva solo el pago de prestaciones, que se automatiza (A4). La colocación se contrata a operadores privados y agénticos que cobran por inserción sostenida a 12 meses, con tarifa mayor para parados difíciles.
- *Por qué:* sustituye la precondición "primero arreglar el SEPE", que retrasa toda la reforma, por un mercado que puede montarse en meses.
- *Riesgos:* selección de los parados fáciles. *Mitigación:* tarifas más altas por perfil difícil, como en el sistema australiano de pago por resultados (no verificado), y asignación aleatoria de carteras.
- *Impacto:* suprime la puerta "red de transición" como veto. Unos 0,3 puntos de PIB de políticas activas pasan de producción pública a contrato por resultado.

**L6. Las puertas dejan de ser vetos.**
- *Qué se cambia:* §5.3 del documento integrado y la sección de puertas de la web. Las ocho condiciones pasan a ser indicadores publicados. Se conservan dos frenos automáticos: la cláusula cíclica de la regla de gasto y la prima de riesgo por encima de 200 puntos básicos.
- *Por qué:* un programa con ocho vetos internos no se ejecuta en una legislatura.
- *Riesgos:* son los que el modelo ya cuantifica para el escenario de choque: paro del 11,8 % en 2029 (13,6 % con supuestos adversos) y tres años de estancamiento de la renta per cápita, y el modelo es benévolo con ese escenario. Este coste no tiene mitigación completa; se acepta o no se acepta.

### 2.2 Perímetro del Estado

**P1. Regla de perímetro: lista positiva.**
- *Qué se cambia:* ley orgánica. El Estado produce directamente solo seguridad, defensa, justicia, relaciones exteriores, recaudación y regulación de la competencia. Las tres últimas no están en el principio 3, pero son funciones de autoridad sin las cuales las dos primeras y el mercado no funcionan; conviene decirlo en lugar de descubrirlo después. Todo lo demás se presume de provisión privada, y es el productor público quien tiene que justificar su continuidad cada cinco años. Se invierte así el test de privatización del bloque 6.
- *Impacto:* el núcleo emplea a una fracción menor de los 3,07 millones de efectivos; sanidad y educación son más de la mitad (no verificado). El resto cambia de empleador, no desaparece.

**P2. Sanidad: el Estado asegura, no produce ("Muface para todos").**
- *Qué se cambia:* Ley General de Sanidad y leyes autonómicas. Cada ciudadano recibe una cápita ajustada por riesgo y elige aseguradora o proveedor integrado. Los hospitales y centros públicos se transforman en fundaciones, sociedades de profesionales o concesiones, y compiten por pacientes. El precedente doméstico es el mutualismo de los funcionarios, que ya eligen aseguradora privada con financiación pública (unos 1,5 millones de personas, no verificado).
- *Riesgos:* selección de riesgos y primas insuficientes (la crisis de Muface de 2024-2025 fue de infrafinanciación, no verificado). *Mitigación:* ajuste por riesgo con datos clínicos, aseguramiento obligatorio y admisión no selectiva, como en los Países Bajos. El gasto público sanitario no baja por este cambio; baja la plantilla pública.
- *Impacto:* varios cientos de miles de efectivos salen del perímetro público. Ganancia de eficiencia incierta: la evidencia del proyecto sobre externalización habla de ahorros modestos.

**P3. Educación: cheque universal y centros autónomos.**
- *Qué se cambia:* LOE y leyes autonómicas. Financiación por alumno portátil a cualquier centro acreditado. Los centros públicos pasan a ser entidades autónomas (cooperativas de docentes, fundaciones) con libertad de contratación y proyecto. Evaluación externa obligatoria con resultados publicados por centro.
- *Riesgos:* la experiencia sueca que recoge el proyecto es mixta (inflación de notas, segregación). *Mitigación:* exámenes externos corregidos fuera del centro, sin copago ni selección académica. El art. 27 de la Constitución ya ampara la financiación pública de centros privados.

**P4. Pensiones: del reparto a la cuenta individual, con el coste a la vista.**
- *Qué se cambia:* bloque 5. Cuentas nocionales para todos los menores de 50 años, no solo los nacidos desde 1985. El pilar de capitalización sube del 6 % al 10 % del salario, de los cuales 4 puntos se desvían de la cotización actual. El Estado garantiza únicamente una pensión mínima.
- *Riesgos:* es la propuesta más cara de la revisión. Desviar 4 puntos de cotización cuesta entre 1,2 y 1,6 puntos de PIB al año durante décadas (misma regla de 0,3-0,4 por punto), porque las pensiones actuales hay que seguir pagándolas. Además, el art. 41 de la Constitución exige un "régimen público" de Seguridad Social. *Mitigación:* financiar la transición con ventas de activos (P5) y con el freno de revalorización ya adoptado; desvío gradual, un punto cada dos años.
- *Impacto:* a 2040 el gasto en pensiones apenas cambia; el pasivo implícito del Estado cae para las cohortes jóvenes. Es una reforma para 2050, no para 2040.

**P5. Vender o liquidar todo lo comercial.**
- *Qué se cambia:* inventario y calendario de salida del sector público empresarial e instrumental estatal, autonómico y local: participaciones industriales, operadores de transporte, servicios postales, medios de comunicación, hostelería, banca pública de promoción. Las redes con monopolio natural se venden con base regulatoria de activos y límites legales al endeudamiento y al dividendo.
- *Riesgos:* el proyecto documenta los fracasos británicos (agua, ferrocarril). *Mitigación:* el regulador se refuerza antes de la venta, que es lo único del principio "regulador antes que privatización" que se conserva. Las ventas reducen deuda, no déficit estructural.

**P6. Regla de gasto real cero.**
- *Qué se cambia:* LO 2/2012. El gasto primario no crece en términos reales hasta alcanzar un objetivo de gasto sobre PIB fijado por ley. Se elimina la reserva de ingresos del bloque 6.
- *Por qué:* es una regla de tamaño, no de saldo. Con un crecimiento real del 1,8 %, el gasto primario (43 % del PIB) baja unos 0,75 puntos al año.
- *Riesgos:* como las pensiones suben por demografía, el resto del gasto tiene que caer en términos reales cada año. *Mitigación:* la cláusula cíclica se mantiene. El objetivo numérico debe salir del modelo (§3), no de esta revisión.

**P7. Subvenciones a empresas: cero por defecto.**
- *Qué se cambia:* Ley 38/2003. Toda línea caduca a los dos años (no a los cinco) y solo sobrevive con evaluación positiva publicada. Se suprimen el fondo de pagos a comunidades, el pago por vivienda terminada y la concesión pública de vivienda asequible; se mantiene lo que no cuesta dinero (edificabilidad, licencias).
- *Impacto:* 0,15-0,3 puntos de PIB según el cuadro del proyecto, más 0,2-0,3 del fondo territorial.

### 2.3 Función pública residual

**F1. Estatuto solo para el núcleo.**
- *Qué se cambia:* TREBEP. La condición de funcionario queda para jueces, fiscales, policía, fuerzas armadas, inspección, diplomacia y regulación. Todo el nuevo ingreso restante es laboral con el régimen general de L1. A los funcionarios actuales de fuera del núcleo se les ofrece conversión voluntaria con prima, y la tasa de reposición en gestión administrativa es cero.
- *Riesgos:* el art. 103.3 de la Constitución y la STC 99/1987 hacen del régimen funcionarial la regla general; el riesgo de inconstitucionalidad es alto y lo razonable es plantear la reforma del art. 103 por la vía del art. 167 (tres quintos). Riesgo de clientelismo: el proyecto documenta que la inamovilidad nació contra el cesante. *Mitigación:* la agencia independiente de selección y despido entra en vigor antes, y se conserva el veto a los ceses en los doce meses siguientes a un cambio de gobierno.

**F2. Agencias con contrato de resultados.**
- *Qué se cambia:* Ley 40/2015. Cada órgano del núcleo firma un contrato plurianual con indicadores (tiempo de resolución judicial, tasa de esclarecimiento, coste por expediente) y recibe presupuesto por resultado. Directivos con mandato de cuatro años, retribución variable y cese por incumplimiento. Bandas salariales de mercado: menos personas, mejor pagadas.

**F3. La justicia crece mientras el resto mengua.**
- *Qué se cambia:* presupuesto. Un Estado reducido a seguridad y justicia tiene que ser excelente en ambas, y un mercado con despido libre, proveedores privados y agentes automáticos descansa sobre contratos que se hacen cumplir deprisa. Se propone duplicar la inversión en justicia con cargo al ahorro del resto y fijar por ley plazos máximos de resolución.
- *Por qué:* es la condición de credibilidad de todo lo demás.

### 2.4 Competencia y mejora continua

- **C1. Autorización por declaración más seguro.** Toda licencia de actividad se sustituye por declaración responsable, seguro de responsabilidad obligatorio y auditoría posterior por entidades privadas acreditadas que compiten entre sí. Se extiende a todos los sectores lo que el bloque 1 propone para la obra.
- **C2. Resultados publicados por proveedor.** Hospitales, colegios, operadores de colocación y aseguradoras publican por API indicadores homogéneos (resultados clínicos ajustados, valor añadido educativo, inserción a 12 meses). El pago depende del resultado y el decil inferior pierde el contrato o la acreditación en el siguiente ciclo.
- **C3. Reconocimiento mutuo automático.** Lo autorizado en una comunidad autónoma o en otro Estado de la UE vale en toda España sin trámite. Sustituye a los pagos a comunidades del bloque 3.
- **C4. Quiebra sin rescate.** Régimen de administración especial para proveedores de servicios esenciales: continuidad del servicio, sustitución del gestor y pérdidas para accionistas y acreedores. Sin él, la privatización de P2 y P5 acaba en rescates, que es la lección británica.
- **C5. Neutralidad competitiva.** Cualquier proveedor público residual compite sin subvención cruzada, con contabilidad separada y auditada.

### 2.5 Sistemas agénticos de IA

**A1. Arquitectura: el Estado como plataforma de cuatro capas.**

| Capa | Contenido | Quién la opera |
|---|---|---|
| Datos | Registros base únicos (personas, empresas, inmuebles, obligaciones), consultables por API con consentimiento y traza. Principio de "solo una vez" obligatorio | Estado (núcleo) |
| Reglas | Cada procedimiento publicado como especificación ejecutable con su banco de pruebas ("normas como código") | Estado (núcleo) |
| Agentes | Orquestador por expediente y agentes especializados con herramientas (consulta de registros, cálculo, notificación, pago) y memoria de expediente | Proveedores privados en competencia |
| Evaluación | Evaluaciones continuas, auditoría por muestreo, registro inmutable de decisiones, recurso | Autoridad independiente |

El Estado conserva los datos, las reglas y la evaluación, y compra la ejecución.

**A2. Normas como código.** Ninguna norma con trámite se publica sin su especificación ejecutable y sus casos de prueba, igual que hoy lleva memoria económica. Las normas vigentes se traducen por orden de volumen de expedientes. Efecto secundario deliberado: una norma que no puede especificarse es una norma discrecional, y queda señalada.

**A3. Regla de asimetría.** La resolución favorable al ciudadano es automática e inmediata. La desfavorable (denegación, sanción, liquidación al alza) la propone el agente y la revisa una persona si el interesado lo pide. Es el único lugar donde la intervención humana es estrictamente necesaria, y coincide con lo que exigen el art. 22 del RGPD y el Reglamento europeo de IA para los sistemas de alto riesgo. El art. 41 de la Ley 40/2015 ya permite la actuación administrativa automatizada.

**A4. Sustitución por oleadas, con criterio explícito.** Entra antes lo reglado, masivo y con datos estructurados.

| Oleada | Plazo | Procedimientos |
|---|---|---|
| 1 | 0-18 meses | Prestaciones regladas (desempleo, ingreso mínimo, becas), devoluciones tributarias, registros, licencias de actividad y de obra menor, atención al ciudadano |
| 2 | 18-36 meses | Contratación pública (pliegos y valoración reglada), inspección dirigida por riesgo, tramitación judicial (reparto, señalamientos, borradores de resoluciones de trámite; nunca sentencias), gestión de personal |
| 3 | 36-60 meses | Gestión tributaria completa, control continuo del gasto, planeamiento urbanístico legible por máquina con licencia instantánea |

**A5. Autonomía por evaluación, no por calendario.** Cada agente tiene cuatro niveles: asiste, propone, decide lo favorable, decide todo con muestreo. Sube de nivel cuando su tasa de error en muestra ciega es inferior a la del proceso humano que sustituye, y baja automáticamente si empeora. Las evaluaciones son públicas. Este diseño aprovecha la mejora de los modelos sin apostar a ella: si la tecnología avanza despacio, los agentes se quedan en niveles bajos y el sistema sigue funcionando.

**A6. Mercado de agentes.** Contratos de 12 a 18 meses por procedimiento, pago por expediente resuelto y por calidad medida, portabilidad total. Las especificaciones, las instrucciones y las evaluaciones son propiedad pública; el proveedor aporta el modelo y la operación. Al menos dos proveedores por procedimiento crítico. Sin esto, se sustituye un monopolio público por uno privado.

**A7. El agente del ciudadano.** Todo trámite es accesible por API con la misma prioridad que la ventanilla. Gestorías, bancos y aplicaciones actúan con mandato digital del interesado. La relación con la Administración pasa a ser de máquina a máquina y la ventanilla desaparece por desuso.

**A8. Dividendo de plantilla comprometido.** La reposición cero en gestión administrativa (F1) se apoya en la ola de jubilaciones que el diagnóstico ya recoge: España es, tras Italia, el país de la OCDE más afectado en la próxima década. Cada 100.000 efectivos no repuestos equivalen a unos 0,3 puntos de PIB (orden de magnitud con una masa salarial pública del 11 % del PIB, no verificado). El ahorro entra en el techo de gasto solo cuando la AIReF lo certifica.

**A9. Riesgos propios de la IA y mitigación.**
- *Errores a escala:* un fallo de regla afecta a millones de expedientes. Mitigación: despliegue gradual, muestreo, reversión automática y seguro de responsabilidad del proveedor.
- *Dependencia de dos o tres proveedores de modelos:* mitigación en A6 y despliegue en infraestructura bajo jurisdicción europea para datos sensibles.
- *Seguridad:* la capa de datos es el activo más valioso del país. Se queda en el núcleo estatal.
- *Legitimidad:* derecho a explicación y a revisión humana en lo desfavorable (A3). Recortarlo sería ilegal y, además, contraproducente.

---

## 3. Cambios en los artefactos del repositorio

| Artefacto | Cambio |
|---|---|
| `ESPANA_DINAMICA_2040.md`, §2.1 | Reescribir los diez principios: tamaño como objetivo, lista positiva, provisión privada por defecto, automatización por defecto |
| `docs/02-bloques/02` | Sustituir L1, la negociación colectiva, el salario mínimo y el bonus-malus por L1-L5 de esta revisión |
| `docs/02-bloques/05` | Añadir P4 con su coste de transición explícito |
| `docs/02-bloques/06` | Reescritura completa: P1-P7 y F1-F3 |
| Bloque nuevo `07-estado-agentico.md` | A1-A9 |
| `docs/03-estrategia` | Rehacer la secuencia sin puertas-veto (L6) y recalcular coaliciones: el programa pierde apoyos frente al actual |
| `modelo/escenarios.py` | Escenario E con variables nuevas: efectivos públicos, gasto por financiación y por provisión, desvío de cotizaciones a capitalización, canal de IA con valor base cero y rango amplio, y prima de riesgo no lineal para dejar de tratar el choque con benevolencia |
| `web/` | Quinto escenario; indicadores de gasto sobre PIB, efectivos públicos y porcentaje de expedientes automatizados; séptimo bloque |
| `tests/` y CI | Ampliar la prueba de humo a cinco escenarios y siete bloques |
| `docs/01-investigacion/` | Sin cambios. Siguen siendo el contraste |

---

## 4. Versión aspiracional: 2030-2031

Condicionada a que los agentes superen sus evaluaciones y a que se mantenga la disciplina de perímetro.

**El ciudadano no tramita.** Pide una prestación, una licencia o una devolución desde la aplicación de su banco o de su gestoría, cuyo agente habla con el de la Administración. Lo favorable se resuelve en minutos. Lo desfavorable llega como propuesta motivada, con un botón para pedir revisión por una persona.

**Abrir un negocio es declarar y asegurarse.** No hay licencia previa. Un auditor privado acreditado visita después, y la póliza responde.

**El empleo se contrata y se extingue sin juez.** Hay un solo contrato. Quien pierde el trabajo se lleva su cuenta, cobra la prestación de forma automática y recibe ofertas de varios operadores de colocación que solo cobran si lo recolocan.

**Sanidad y educación se eligen.** Cada persona tiene una cápita y cada alumno un cheque. Los antiguos hospitales y colegios públicos son entidades autónomas que publican resultados y pueden cerrar.

**El Estado es pequeño y visible.** Jueces, fiscales, policías, militares, inspectores, diplomáticos y reguladores, mejor pagados y evaluados por resultados, más un equipo reducido que mantiene los registros, las reglas y las evaluaciones. La justicia resuelve en plazos fijados por ley. La gestión administrativa ha dejado de reponer plantilla desde 2027.

**El gasto baja por regla.** El gasto primario lleva cuatro años sin crecer en términos reales. Las pensiones ya causadas se pagan con el freno adoptado; las cohortes jóvenes acumulan en cuentas propias.

Lo que en 2031 todavía no ha ocurrido: el gasto total sigue por encima del 40 % del PIB, porque pensiones, sanidad y educación se siguen financiando con impuestos; la capitalización cuesta dinero en vez de ahorrarlo; y la tercera oleada de automatización depende de capacidades que hoy no están demostradas.

---

## 5. La cuenta que hay que aceptar

Los principios son del promotor. Los costes son los que el propio proyecto documenta.

1. **Transición.** Todo a la vez y sin puertas es el escenario de choque: paro cercano al 12 % en 2029 y hasta el 13,6 % con supuestos adversos, con un modelo que lo trata con benevolencia. El despido libre no está en ese escenario y añadiría destrucción de empleo a corto plazo.
2. **Evidencia.** Nueva Zelanda liberalizó casi todo y su productividad no convergió. Las privatizaciones de monopolios naturales sin regulador fuerte acabaron en rescate. El efecto del despido libre sobre la productividad es mixto. Ninguno de estos hallazgos impide el programa; los tres desaconsejan prometer resultados.
3. **Constitución.** L1 choca con la lectura vigente del art. 35; F1 con el 103.3; P4 con el 41. La vía honesta es una reforma constitucional por el art. 167, que exige tres quintos de ambas cámaras.
4. **Política.** La estrategia del proyecto estimaba que con mayoría estrecha sobrevive algo más de la mitad del programa moderado. Este programa suma perdedores (pensionistas, que son en torno a un tercio de los votos; 3 millones de empleados públicos; sindicatos; comunidades autónomas) y elimina compensaciones. Su probabilidad de supervivencia es menor, y no está estimada.
5. **Aritmética.** Privatizar la provisión no baja el gasto. La rebaja de cotizaciones (1,5-2 puntos) y la capitalización (1,2-1,6 puntos al año) lo suben antes de bajarlo. El programa solo cuadra si la regla de gasto real cero se cumple durante años, lo que implica recortes reales en todo lo que no sea pensiones.

---

## 6. Decisiones que necesita el promotor

1. **Financiación de sanidad y educación.** Tres niveles posibles: financiación pública íntegra con provisión privada (lo que propone esta revisión); aseguramiento obligatorio con copago; retirada parcial de la financiación. Solo el segundo y el tercero bajan el gasto de forma apreciable.
2. **Pensiones.** Aceptar o no el coste de transición de P4.
3. **Despido.** Vía legal con causa formal (L1) o reforma constitucional.
4. **Forma del entregable.** Sustituir el programa actual o mantenerlo como "versión contrastada" junto a una "versión maximalista" con su propio escenario en el modelo. Se recomienda lo segundo: permite comparar ambos con los mismos números.
