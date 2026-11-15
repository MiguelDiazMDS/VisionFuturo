# Versión maximalista · 2. Sanidad y educación

**Noviembre de 2026.** Parámetros: [00-parametros-de-diseno.md](00-parametros-de-diseno.md), que manda en caso de discrepancia; lo que no está ahí se marca "(propuesta de desarrollo)". Origen: propuestas P2, P3 y C1-C5 de la [revisión](../04-revision/01-revision-liberalizadora-ia.md). Versión contrastada: medida P9 del [bloque 6](../02-bloques/06-funcion-publica-y-gasto.md). Para el impacto cuantitativo, véase el escenario E del modelo ([`modelo/RESULTADOS.md`](../../modelo/RESULTADOS.md)).

---

## 1. Qué cambia frente a la versión contrastada

| Versión contrastada | Versión maximalista |
|---|---|
| Sistema Nacional de Salud financiado con impuestos; libre elección de médico y hospital dentro del SNS | Seguro sanitario obligatorio con paquete básico fijado por ley, aseguradoras en competencia, admisión obligatoria, prima comunitaria y compensación de riesgos |
| Gasto público sanitario en torno al 6,6 % del PIB, al alza por el envejecimiento | Retirada de 0,2 puntos de PIB al año entre 2029 y 2038 frente a la senda sin reforma. En el modelo queda en el 5,5 % en 2040, frente al 7,3 % de la versión contrastada |
| Sin copagos nuevos | Copago del 10 % del coste, con tope anual del 2 % de la renta del hogar; exentas las rentas bajas |
| Gestión directa por defecto; contratos privados con indicadores públicos | Todos los centros públicos pasan a entidades privadas o autónomas entre 2029 y 2033 |
| Financiación ponderada por alumno en pública y concertada; prohibición efectiva de copagos | Cheque por alumno portátil a cualquier centro acreditado, íntegro de 3 a 16 años |
| Bachillerato, FP y universidad financiados como hoy | Cheque parcial en bachillerato y FP; préstamos contingentes a la renta en la universidad |
| Gasto público educativo en torno al 4,2 % del PIB | Cerca del 3,4 %: −0,1 puntos al año entre 2029 y 2036 |
| Centros autorizados por requisitos de medios | Acreditación por resultados; régimen de pruebas permanente para formatos nuevos |

---

## 2. Diseño

### Sanidad

**S1. Seguro obligatorio universal.**
- *Norma:* art. 43 CE, reformado por el art. 167 en 2028. Redacción propuesta: "Los poderes públicos garantizarán el aseguramiento sanitario obligatorio y universal; la ley fijará sus prestaciones básicas y su financiación, y la provisión podrá ser pública o privada" (propuesta de desarrollo). Ley 14/1986 General de Sanidad, Ley 16/2003 de cohesión y leyes autonómicas de salud.
- *Parámetros:* paquete básico por ley; aseguradoras y proveedores en competencia; admisión obligatoria (ninguna aseguradora puede rechazar a nadie); prima comunitaria (la misma prima para todos los asegurados de un mismo producto, sin variar por edad ni por salud); compensación de riesgos entre aseguradoras (un fondo transfiere dinero de las que tienen asegurados más sanos a las que tienen asegurados más enfermos).
- *Desarrollo:* el paquete básico parte de la cartera común del SNS y se revisa cada dos años con criterio de coste-efectividad publicado. La salud pública (vigilancia, vacunación, emergencias) sigue financiada por el Estado como función de seguridad (propuestas de desarrollo).

**S2. Subsidio a la prima.**
- *Parámetros:* decreciente con la renta; íntegro para las rentas bajas y los menores de 18 años. La escala se calibra para cumplir el objetivo de gasto **[SUP: pendiente de microdatos]**.
- *Desarrollo:* se paga a la aseguradora elegida, según la renta del IRPF del año anterior (propuesta de desarrollo).

**S3. Copago.**
- *Parámetros:* 10 % del coste de cada acto, con tope anual del 2 % de la renta del hogar; exentas las rentas bajas **[SUP]**.
- *En la práctica:* Marta y Jorge, con dos hijos y 40.000 € de renta, pagan la prima de los dos adultos menos la parte subvencionada; la de los hijos es gratuita. Cuando a Jorge le operan de una hernia, pagan el 10 % de la tarifa del acto, y en ningún caso más de 800 € en el año (2 % de 40.000 €). Rosa, jubilada con 14.000 € de renta, paga como máximo 280 € al año en copagos si su renta no la sitúa en la exención; si está exenta, cero.

**S4. Traspaso de la provisión.**
- *Parámetros:* todos los centros públicos pasan a entidades privadas o autónomas entre 2029 y 2033, un 20 % al año. El personal cambia de empleador.
- *Desarrollo:* cada hospital o área elige forma jurídica (fundación, sociedad de profesionales, cooperativa o venta), y la autoridad de competencia impide que un grupo controle más del 40 % de las camas de una provincia (propuesta de desarrollo).

### Educación

**E1. Cheque escolar universal.**
- *Norma:* Ley Orgánica 2/2006 de Educación (LOE) y leyes autonómicas. No se reforma el art. 27 CE, que exigiría el procedimiento del art. 168 y que ya admite la financiación pública de centros privados.
- *Parámetros:* cheque por alumno portátil a cualquier centro acreditado; íntegro de 3 a 16 años.
- *Desarrollo:* como el art. 27.4 CE exige que la enseñanza básica sea gratuita, el centro que acepta el cheque no cobra por la enseñanza de 6 a 16 años y, si tiene más solicitudes que plazas, admite por sorteo. El cheque se pondera al alza por alumno desfavorecido dentro del mismo objetivo de gasto (propuestas de desarrollo, tomadas de las mitigaciones de la propia revisión y de la crítica [R §4.3]).
- *En la práctica:* la hija de Marta y Jorge, de 12 años, se cambia a una microescuela acreditada de 60 alumnos y se lleva el cheque. La familia no paga nada.

**E2. Retirada parcial en las etapas no obligatorias.**
- *Parámetros:* en bachillerato y FP el cheque cubre una parte; en la universidad, la subvención directa se sustituye por préstamos contingentes a la renta (préstamos que solo se devuelven cuando la renta del titular supera un umbral, mediante una retención proporcional).
- *Desarrollo:* la parte cubierta crece para las rentas bajas; el préstamo lo recauda la Agencia Tributaria y se condona a los 30 años (propuestas de desarrollo).
- *En la práctica:* el hijo mayor, de 18 años, estudia ingeniería. Hoy paga una matrícula pública subvencionada; desde 2029 la universidad cobra el coste completo y él lo financia con un préstamo que devolverá cuando su renta supere el umbral.

**E3. Conversión de los centros públicos.**
- *Parámetros:* centros públicos convertidos en entidades autónomas o privadas entre 2029 y 2033.
- *Desarrollo:* forma por defecto: cooperativa de docentes o fundación, con libertad de contratación y proyecto (propuesta de desarrollo).

---

## 3. Competencia y mejora continua

**Entrada: acreditación por resultados, no por medios.** Hoy un centro se autoriza por lo que tiene (metros, ratios, equipamiento); aquí se acredita por lo que consigue, en tres fases (propuesta de desarrollo):
1. *Entrada:* declaración responsable, seguro de responsabilidad, y unos mínimos de seguridad no medibles después (seguridad del paciente, protección de menores, titulación habilitante de quien ejerce). Nada más.
2. *Acreditación provisional (dos años en educación, uno en sanidad):* el centro opera, cobra y publica resultados.
3. *Acreditación plena:* se obtiene si los resultados ajustados no están en el decil inferior; se revisa cada año.

**Régimen de pruebas permanente.** Cualquier formato nuevo opera bajo un protocolo con tres condiciones: consentimiento informado, medición desde el primer día con los indicadores comunes y grupo de comparación (aleatorio cuando sea posible). El protocolo se registra, no se autoriza: la autoridad tiene 30 días para oponerse por riesgo para la seguridad (propuesta de desarrollo). Precedentes españoles: el entorno de pruebas financiero (Ley 7/2020) y el de IA (no verificado). Los resultados se publican aunque sean negativos.

**Formatos que se admiten desde 2029.**

| Formato | Qué es | Qué se mide para saber si funciona |
|---|---|---|
| Atención primaria agéntica | Un agente atiende la primera consulta, pide pruebas protocolizadas y deriva al médico, que supervisa a más pacientes | Hospitalizaciones evitables, control de crónicos, tiempo hasta la atención, errores de derivación en muestra ciega |
| Telemedicina | Consulta, seguimiento y monitorización a distancia | Reingresos, visitas a urgencias, adherencia al tratamiento |
| Microescuelas | Centros de 15 a 150 alumnos, con espacios y horarios flexibles | Valor añadido en las pruebas externas, abandono, idoneidad por edad |
| Enseñanza en línea | Escolaridad total o parcial a distancia, con presencialidad mínima | Valor añadido, finalización, competencias sociales |
| Itinerarios acelerados | Avance por competencia demostrada, no por edad | Resultados en la prueba externa del nivel superior; abandono posterior |
| Tutoría agéntica | Tutor de IA individual, supervisado por un docente | Valor añadido frente a grupo de comparación; tiempo de docente por alumno |

**Resultados publicados.** Todo proveedor publica por API (C2):
- *Sanidad:* mortalidad y complicaciones ajustadas por riesgo, reingresos a 30 días, tiempos de espera por proceso, hospitalizaciones evitables, satisfacción. Las aseguradoras publican prima, tasa de reclamaciones, rechazos de autorización, cambio de asegurados y gasto por asegurado ajustado.
- *Educación:* valor añadido en pruebas externas censales (cuánto progresa el alumno respecto a lo esperado por su punto de partida), corregidas fuera del centro; abandono; inserción de la FP; composición social del alumnado.

**Pago por resultado.** La aseguradora cobra la prima y la compensación de riesgos; paga a los proveedores con contratos libres, pero el fondo de compensación añade un pago por calidad ligado a hospitalizaciones evitables y control de crónicos (propuesta de desarrollo). En educación, una parte del cheque (propuesta de desarrollo: el 5 %) se paga al final del curso según el valor añadido.

**Fallo y quiebra sin rescate.** El decil inferior pierde la acreditación en el ciclo siguiente. Si un hospital, una aseguradora o una red escolar quiebra, entra en el régimen de administración especial de C4: el servicio continúa, se sustituye al gestor y los accionistas y acreedores asumen las pérdidas. Los asegurados de una aseguradora quebrada se reparten entre las demás con la misma prima durante un año, y los alumnos de un centro cerrado tienen plaza garantizada en los centros de la zona, que deben admitirlos con su cheque (propuesta de desarrollo). El Estado no aporta capital.

---

## 4. Dónde entra la IA agéntica

| Proceso | Nivel inicial | Nivel objetivo | Regla de asimetría |
|---|---|---|---|
| Triaje en atención primaria y urgencias | Asiste | Propone | Sistema de alto riesgo según el Reglamento (UE) 2024/1689 y producto sanitario; la decisión clínica la firma un profesional |
| Renovación de tratamientos crónicos estables | Propone | Decide lo favorable | Renovar es automático; no renovar lo revisa un médico |
| Autorizaciones de la aseguradora | Decide lo favorable | Decide todo con muestreo | La denegación la revisa una persona en 72 horas y es recurrible ante la autoridad (propuesta de desarrollo) |
| Cálculo de la compensación de riesgos entre aseguradoras | Decide todo con muestreo | — | Norma como código; el algoritmo y sus casos de prueba son públicos |
| Cálculo del subsidio a la prima y del cheque | Decide lo favorable | Decide todo con muestreo | La reducción la revisa una persona |
| Tutoría | Asiste | Propone itinerarios | No decide nada vinculante |
| Corrección de pruebas externas | Propone | Decide todo con muestreo | Toda nota que impide titular o promocionar puede revisarla un docente |

Los niveles suben por tasa de error frente al proceso humano en muestra ciega y bajan automáticamente si empeora; evalúa la autoridad independiente, no el proveedor. Como el proyecto no tiene evidencia sobre atención primaria ni tutoría agénticas, entran por el régimen de pruebas y no como modelo por defecto.

---

## 5. Transición 2027-2036

| Año | Sanidad | Educación |
|---|---|---|
| 2027 | Ley de bases del seguro; registro de la reforma del art. 43; diseño de la compensación de riesgos con los datos clínicos de Muface y del SNS | Pruebas externas censales en 4.º de primaria y 2.º de ESO; publicación del primer valor añadido por centro |
| 2028 | Reforma constitucional; primera licitación de la compensación de riesgos | Ley del cheque; registro de formatos en pruebas |
| 2029 | Entra el seguro obligatorio; elección de aseguradora (asignación por defecto a quien no elija); primer 20 % de centros traspasado; gasto −0,2 puntos | Entra el cheque; primer 20 % de centros convertidos; préstamos para los nuevos universitarios; gasto −0,1 puntos |
| 2030-2033 | Un 20 % de centros más cada año; gasto −0,2 puntos al año | Un 20 % de centros más cada año; gasto −0,1 puntos al año |
| 2034-2036 | Primeras pérdidas de acreditación; gasto sigue bajando hasta 2038 | Gasto alcanza cerca del 3,4 % en 2036 |

**Contratos, personal y derechos vigentes.** El personal pasa al nuevo empleador con sus condiciones (Directiva 2001/23/CE de sucesión de empresa), sin despidos colectivos. Quien quiera conservar el estatuto queda como funcionario "a extinguir" en comisión de servicios o se convierte con prima (propuesta de desarrollo, coherente con la regla de plantilla). Los conciertos educativos se convierten en cheque. Los pacientes en tratamiento conservan médico y hospital el primer año, y los universitarios matriculados antes de 2029 terminan con el régimen actual.

---

## 6. Quién gana y quién pierde

**Pagos que pasan del Estado a los hogares.** Según la regla del archivo de parámetros, lo que el Estado deja de financiar pasa a primas y copagos de los hogares, menos la ganancia de eficiencia (central 5 %, rango 0-15 %):
- *Sanidad:* 2,0 puntos de PIB menos de gasto público en 2038; pagos privados obligatorios de 1,9 puntos (1,7-2,0).
- *Educación:* 0,8 puntos menos en 2036; pagos privados de 0,76 puntos (0,68-0,8).
- *Total:* unos 2,7 puntos de PIB al año a régimen, unos 46.000 M€ con un punto de PIB de unos 17.000 M€ (estimación propia).

| Grupo | Efecto |
|---|---|
| Rentas bajas y menores de 18 años | Prima íntegramente subvencionada, exención del copago y cheque íntegro de 3 a 16 años. No pagan más; ganan elección |
| Rentas medias y altas | Pagan prima menos subsidio, copagos hasta el 2 % de su renta, bachillerato y FP en parte, y universidad con préstamo. Son quienes financian los 2,7 puntos |
| Enfermos crónicos de renta media | Llegan al tope del 2 % todos los años |
| Familias con universitarios | Pasan de matrícula subvencionada a deuda contingente |
| Personal sanitario y docente | Cambia de empleador; salarios fijados por centro, con más dispersión. Sanidad y educación son más de la mitad de los 3,07 millones de efectivos públicos (no verificado) |
| Aseguradoras, grupos hospitalarios, concertados, tecnológicas | Ganan un mercado regulado grande |
| Zonas rurales | Riesgo de que los proveedores se retiren donde no es rentable [R §7.2] |

---

## 7. Riesgos y lo que dice la evidencia del proyecto

**R1. Selección de riesgos e infrafinanciación: la crisis de Muface.** La crítica califica de alta la severidad de la selección adversa y del descreme en seguros sanitarios en competencia [R §4.3]. El precedente doméstico es Muface: la licitación del concierto 2025-2027 quedó desierta por primera vez en noviembre de 2024 con una subida de prima del 17 %; el Gobierno la elevó al 33,5 % y después a cerca del 41 % (valor del contrato de 4.808,5 M€ para tres años), y aun así DKV no volvió, con lo que unos 200.000 mutualistas tuvieron que cambiar de aseguradora ([Menorca.info](https://www.menorca.info/actualidad/nacional/2025/01/28/2314689/gobierno-mejora-nuevo-concierto-muface-ofrece-subida-del-prima.html); [Alimarket](https://www.alimarket.es/sanidad/noticia_amp/406487/segurcaixa-adeslas-y-asisa-se-adjudican-el-concierto-de-muface); [Vozpópuli](https://www.vozpopuli.com/economia/muface-la-huida-de-dkv-obliga-al-gobierno-a-reubicar-la-asistencia-sanitaria-de-200000-funcionarios.html)). Un precio fijado por el Estado por debajo del coste vacía el mercado.
- *Mitigación:* la prima la fija cada aseguradora en competencia, no el Estado; el Estado solo fija el subsidio. Compensación de riesgos con datos clínicos (diagnósticos y consumo farmacéutico), como en los Países Bajos [E §6.2]; el detalle del modelo holandés está sin verificar en el proyecto.
- *Alerta:* número de aseguradoras por provincia; tasa de rechazo de autorizaciones; diferencia entre siniestralidad y compensación por grupo de riesgo.

**R2. La competencia gestionada no ahorra gasto.** En los Países Bajos la sensibilidad al precio fue alta, pero el gasto no bajó frente a sus pares y cuatro aseguradoras dominan el mercado (no verificado); la evidencia es "incompleta y en algunos aspectos endeble" [E §6.2]. Los sistemas de mercado que funcionan no son más baratos que el SNS [R §4.3].
- *Mitigación:* el diseño no depende del ahorro: el gasto público baja porque se trasladan pagos a los hogares. La eficiencia central es solo del 5 %.
- *Alerta:* gasto sanitario total sobre PIB; gasto de bolsillo por decila; concentración (índice de Herfindahl) de aseguradoras.

**R3. El contrato lo es todo (Alzira).** El ahorro estimado del 24,6 % convivía con una cápita que pasó de 225 a 379 € y con falta de claridad contractual; la concesión revirtió en 2018 [E §6.3]. Cuando la calidad no es contratable, el proveedor privado recorta calidad (Hart, Shleifer y Vishny) [E §5.4].
- *Mitigación:* resultados clínicos publicados, pago por calidad, administración especial sin rescate.
- *Alerta:* calidad por centro; renegociaciones; apalancamiento.

**R4. Segregación e inflación de notas (Suecia).** El cheque sueco dio una mejora moderada a los diez años, por efecto de la competencia, junto con inflación de notas seria en la secundaria independiente, más segregación y quiebras como la de JB Education (no verificado) [E §6.1]. En Chile el cheque aumentó la estratificación sin mejorar los resultados medios [R §4.3], y España ya parte de una segregación alta ligada a la concertada (no verificado).
- *Mitigación:* pruebas externas corregidas fuera del centro, que son las que cuentan para la acreditación y el pago; sorteo y gratuidad de 6 a 16 años; cheque ponderado.
- *Alerta:* índice de segregación por municipio; diferencia entre nota interna y prueba externa por centro.

**R5. Copago y acceso.** El copago puede retrasar la atención de quien está justo por encima de la exención.
- *Mitigación:* tope del 2 % de la renta y exención de la atención preventiva (propuesta de desarrollo).
- *Alerta:* necesidad médica no atendida por coste (encuesta europea de condiciones de vida); urgencias evitables.

**R6. Constitución.** Reformar el art. 43 exige tres quintos, que el proyecto no encuentra. Sin ellos cabe la provisión privada con financiación pública, pero el seguro obligatorio con copago queda expuesto a recurso. El art. 27, que no se toca, obliga a la gratuidad de 6 a 16 años.
- *Alerta:* cuestiones de inconstitucionalidad; recursos de las comunidades.

---

## 8. Qué queda sin resolver

- **La escala del subsidio.** Sin microdatos de renta y gasto sanitario por edad, la retirada de 2,0 puntos es una cifra de política, no un resultado.
- **Las competencias autonómicas.** Sanidad y educación son de gestión autonómica; una comunidad de signo contrario puede retrasar el traspaso [R §8].
- **La compensación de riesgos** que exige el modelo holandés no existe en España; la de Muface se limita a tramos de edad (no verificado).
- **La oferta rural**: falta decidir si se financian obligaciones de servicio universal, que serían gasto público fuera del objetivo.
- **La evidencia sobre atención primaria y tutoría agénticas**, que el proyecto no tiene; el régimen de pruebas debe producirla.
