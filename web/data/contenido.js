// Contenido condensado de ESPANA_DINAMICA_2040.md (secciones 3 y 5).
// Las marcas "(no verificado)" y "(estimación propia)" se conservan del documento.

window.BLOQUES = [
  {
    id: "vivienda",
    corto: "Vivienda y suelo",
    nombre: "Vivienda y suelo",
    color: "#C98E1F",
    doc: "docs/02-bloques/01-vivienda-y-suelo.md",
    resumen: "Más viviendas donde ya hay ciudad y transporte, licencias en semanas y crédito vigilado para no repetir 1998.",
    objetivo: "Elevar la oferta donde se concentra la demanda. Las metas se fijan en viviendas y plazos, no en precios, porque los precios dependen también de los tipos de interés y de la inmigración.",
    indicadores: [
      ["Déficit acumulado de vivienda", "≈750.000", "0-300.000", "480.000"],
      ["Plazo de autorización de obra nueva", "8-12 meses", "≤2 meses", null],
      ["Inquilinos con sobreesfuerzo", "32,5 %", "19-25 %", null],
      ["Alquiler social y asequible", "≈2,5 % del parque", "6-8 %", null],
      ["Precio sobre renta (seguimiento)", "7,98 años", "6,5-7,5", "8,3"]
    ],
    medidas: [
      ["Edificabilidad por derecho en la ciudad consolidada", "Una o dos plantas más, división de viviendas y cambio de uso sin licencia discrecional, y sin mínimos de aparcamiento junto al transporte.", "Nulo; cesión del 10-15 % del aprovechamiento adicional", "Auckland: unas 21.800 viviendas adicionales en cinco años"],
      ["Licencia por declaración responsable", "Con entidad colaboradora y silencio positivo. Requiere modificar el texto refundido de la Ley de Suelo.", "Neutro; unos 12.800 € menos por vivienda (EY)", "Madrid, sin evaluación causal"],
      ["Seguridad jurídica del planeamiento", "Que un defecto formal no anule en cascada un plan entero; plazos tasados de gestión.", "Nulo", "Recomendación de la CNMC"],
      ["Retirada gradual de los topes de alquiler", "Solo en contratos nuevos y solo donde las terminaciones lleven dos años creciendo. Desahucio en 4-6 meses con red social pública.", "150-400 M€ al año (estimación propia)", "San Francisco, Berlín, Cataluña: evidencia mixta"],
      ["Alquiler asequible por concesión sobre suelo público", "Sin garantía de rentabilidad para el concesionario.", "200-500 M€ al año (estimación propia)", "Viena, Singapur, Plan Vive"],
      ["Pago estatal al municipio por vivienda terminada", "El ayuntamiento que construye cobra; el que no, no.", "600-1.200 M€ al año (estimación propia)", "New Homes Bonus, de efectos modestos (no verificado)"],
      ["Reglas macroprudenciales preanunciadas", "Límites al crédito hipotecario que el Banco de España activa si el crédito se dispara.", "0,05-0,10 % del PIB en inversión complementaria", "Lección de 1998-2007"]
    ],
    mecanismo: "Más suelo edificable donde ya hay ciudad y menos tiempo y riesgo para promover elevan las terminaciones. Con un retraso de tres a seis años, el alquiler crece menos de lo que habría crecido. Los límites al crédito impiden que la mayor oferta se convierta en burbuja.",
    efectos: [
      ["Licencias de 8-12 a 3-5 meses; visados +15-30 %", "186.000 terminaciones al año en 2035 (modelo)", "Déficit reducido a la mitad (modelo)"],
      ["Se revaloriza el suelo con más edificabilidad", "Alquiler 1-3 puntos anuales por debajo de lo esperable en las zonas densificadas", "Precio sobre renta de 8,3 años (modelo)"],
      ["Conflicto vecinal y recursos competenciales", "Más productividad en la construcción", "Fecundidad +0,03 a +0,08 hijos (estimación muy incierta)"]
    ],
    ganan: "Entre 4 y 5 millones de hogares inquilinos (estimación propia), los jóvenes que aún no se han emancipado y los municipios que construyen.",
    pierden: "Propietarios en zonas tensionadas, que se revalorizan menos; inquilinos con contrato regulado que pueden pagar un 5-15 % más al renovar; vecinos de barrios que se densifican.",
    compensacion: "Los contratos vigentes conservan su régimen; la subida al renovar se limita al 5 % anual durante tres años; las cesiones se gastan en el propio barrio.",
    riesgos: [
      ["Repetir la burbuja de 1998-2007", "Densidad antes que suelo periférico, y límites al crédito anunciados de antemano."],
      ["Falta de mano de obra e infraestructura", "Inversión protegida de la consolidación y metas a cinco o diez años."],
      ["Conflicto competencial con comunidades y ayuntamientos", "Ley básica y financiación condicionada a resultados."]
    ],
    advertencia: "El modelo reduce el déficit a la mitad, no a cero, y apenas mueve el precio sobre la renta a escala nacional (8,3 años frente a 8,5). La meta del 6-8 % de alquiler asequible no está respaldada: las medidas llevan el parque a poco más del 3 % (estimación propia)."
  },
  {
    id: "laboral",
    corto: "Mercado laboral",
    nombre: "Mercado laboral y salarios",
    color: "#24788A",
    doc: "docs/02-bloques/02-mercado-laboral-y-salarios.md",
    resumen: "Igualar el coste de salida entre contratos con una mochila portable, sin despido libre, y que la productividad llegue al salario neto.",
    objetivo: "Reducir el paro y la rotación estéril, y hacer que la productividad llegue al salario neto.",
    indicadores: [
      ["Tasa de paro", "10,2 %", "6-7,5 %", "7,0 %"],
      ["Paro de menores de 25 años", "≈23-24 %", "12-16 %", null],
      ["Cuña fiscal sobre el salario medio", "41,4 %", "37-39 %", "40,5 %"],
      ["Salario real neto (2025 = 100)", "100", "111-118", "119"]
    ],
    medidas: [
      ["Mochila portable para contratos nuevos", "Aportación del 1,5 % del salario a una cuenta individual desde 2029. Despido objetivo de 20 a 15 días; improcedente en 33 días más daños. La causa y la tutela judicial se mantienen.", "0,15-0,25 % del PIB a plena madurez (estimación propia)", "Austria (Abfertigung Neu)"],
      ["Cotización por desempleo según la rotación", "Del 4,0 % al 7,5 % según los despidos de cada empresa frente a su sector (bonus-malus).", "Neutro", "Estados Unidos; Francia desde 2022"],
      ["Servicios de empleo reformados, antes de tocar el despido", "Perfilado, gestión por casos, pago por inserción y cuenta de formación de 500 € al año.", "+0,2-0,35 % del PIB", "Alemania (Hartz I-III); OCDE 2025"],
      ["Negociación colectiva con suelo sectorial", "Prioridad del convenio de empresa en estructura salarial y jornada; arbitraje a los 24 meses.", "Nulo", "Cláusulas de apertura alemanas"],
      ["Menos cuña sobre los salarios bajos", "Deflactación del IRPF, rebaja de cotizaciones cerca del salario mínimo y complemento salarial reembolsable.", "5.000-8.500 M€ en conjunto (estimación propia)", "Rebajas francesas; EITC estadounidense (no verificado)"],
      ["Contrapesos al poder de los empleadores", "Salario mínimo fijado por comisión técnica (55-60 % del mediano), nulidad de pactos de no competencia en salarios bajos.", "Nulo", "Low Pay Commission británica"]
    ],
    mecanismo: "Igualar los costes de salida entre contratos reduce la rotación de corta duración, alarga las relaciones laborales y aumenta la formación en la empresa. La mochila facilita el cambio voluntario hacia empresas mejores. La menor cuña eleva el salario neto, y los contrapesos hacen que una parte mayor de la productividad llegue al trabajador.",
    efectos: [
      ["Servicios de empleo reforzados; renta neta +0,3-0,5 % anual por la deflactación", "Rupturas de contratos recientes −15/−30 %", "Paro estructural 2-3 puntos menor (rango amplio)"],
      ["Paro 0,2-0,3 puntos sobre el inercial en 2029-2030 (modelo)", "Paro juvenil −5/−8 puntos; más formación", "Fondo de la mochila del 3-5 % del PIB (estimación propia)"],
      ["Litigios y resistencia sectorial", "Reasignación hacia empresas mayores", "Emancipación algo más temprana"]
    ],
    ganan: "Los 2,59 millones de parados, en torno a 1,2 millones de fijos discontinuos y entre 3 y 4 millones de trabajadores de salario bajo (estimaciones propias).",
    pierden: "Las empresas de alta rotación, que pagan hasta 2 puntos más de cotización, y las organizaciones sectoriales, que ceden decisión al nivel de empresa.",
    compensacion: "Los contratos vigentes conservan su régimen; el bonus-malus entra en tres años y se mutualiza para las microempresas.",
    riesgos: [
      ["Flexibilizar en mal momento", "La mochila solo entra con servicios de empleo operativos, mercados de productos reformados y ciclo favorable."],
      ["Poder de los empleadores sobre los salarios", "Se vigila la participación salarial: si cae 1,5 puntos, la ganancia salarial del modelo baja del 19 % al 16 %."],
      ["Paro de larga duración", "Pausa automática si supera el 40 % del total de parados."]
    ],
    advertencia: "En el propio escenario central la reforma entra en 2029 con un paro del 10,1 %, valor con el que sus puertas la habrían aplazado. Llegar a una cuña del 37-39 % exige financiación que no está identificada."
  },
  {
    id: "productividad",
    corto: "Productividad",
    nombre: "Productividad y dinamismo empresarial",
    color: "#6551A6",
    doc: "docs/02-bloques/03-productividad-y-dinamismo-empresarial.md",
    resumen: "Que crecer no cueste un salto de obligaciones, un mercado único de verdad y el capital humano sin el cual liberalizar no basta.",
    objetivo: "Reducir los costes de crecer, entrar y salir, y aportar lo que faltó en Nueva Zelanda: capital humano e I+D.",
    indicadores: [
      ["Productividad por hora frente a las ocho líderes", "≈74 %", "78-83 %", "≈76-77 % (conversión propia)"],
      ["Tamaño medio de empresa", "≈4,8 ocupados (no verificado)", "5,4-6,0", null],
      ["I+D empresarial", "0,84 % del PIB", "1,3-1,6 %", null],
      ["Abandono educativo temprano", "12,8 %", "7,5-9 %", null]
    ],
    medidas: [
      ["Rampas en lugar de umbrales", "Plantilla medida a tres años, tres años de gracia al cruzar los 50 empleados y umbral fiscal de gran empresa a 10 M€.", "50-150 M€ (estimación propia)", "Acumulación de empresas en 49 empleados; Garicano et al. (2016)"],
      ["Unidad de mercado pactada", "Reconocimiento mutuo entre comunidades y pagos a las que eliminan barreras.", "850-1.700 M€ al año (estimación propia)", "Política nacional de competencia australiana"],
      ["CNMC reforzada", "Financiación propia, mandatos únicos e incompatibilidades.", "30-60 M€ al año", "Lección británica"],
      ["Servicios profesionales abiertos", "Colegiación obligatoria solo en una lista cerrada de profesiones.", "Nulo", "CNMC y Comisión Europea"],
      ["Licencia única, concurso digital y segunda oportunidad", "Quien fracasa de buena fe liquida en un año y vuelve a empezar.", "100-300 M€ al año (estimación propia)", "Directiva 2019/1023"],
      ["Normas con fecha de caducidad", "Caducidad de las normas con cargas y evaluación independiente.", "5-15 M€", "Canadá; Alemania"],
      ["Capital humano e I+D, protegidos del ajuste", "FP dual intensiva, pruebas externas, refuerzo al cuartil inferior y deducción de I+D cobrable por las pymes.", "+0,25-0,45 % del PIB", "Sistemas duales; Estonia"]
    ],
    mecanismo: "Sin saltos regulatorios, las empresas productivas crecen y ganan cuota a las que sobreviven gracias a barreras. La competencia reduce márgenes y presiona para innovar. Como las empresas grandes pagan más, el cambio de composición eleva el salario medio.",
    efectos: [
      ["Menos trámites; desaparece la acumulación en 49 empleados", "Tamaño medio +0,3-0,7; I+D empresarial +0,2-0,4 puntos", "Productividad un 3,5 % sobre el inercial (modelo)"],
      ["Salen empresas poco productivas, con empleo destruido en ellas", "Salario medio +0,2-0,4 puntos anuales por composición", "PIB per cápita en el 93 % de la UE (modelo)"],
      ["Resistencia de colegios y comunidades", "Mejora lenta del capital humano", "Base fiscal más amplia"]
    ],
    ganan: "Las pymes con potencial de crecer, los consumidores de servicios profesionales, quienes fracasan de buena fe y los alumnos de FP dual.",
    pierden: "Profesionales con reserva de actividad (entre el 5 % y el 20 % de sus rentas, estimación propia), empresas que viven de barreras locales y administraciones que pierden discrecionalidad.",
    compensacion: "Transición de tres a cinco años en las reservas de actividad y pagos a las comunidades que reforman. Las rentas regulatorias como tales no se compensan.",
    riesgos: [
      ["Repetir Nueva Zelanda: liberalizar sin converger", "Metas condicionadas; el paquete se revisa si la I+D empresarial queda dos años por debajo de la senda."],
      ["Captura del regulador", "Financiación propia e incompatibilidades en la CNMC."],
      ["Conflicto competencial", "Reconocimiento mutuo pactado: el Constitucional anuló en 2017 la vía unilateral."]
    ],
    advertencia: "El modelo atribuye a las reformas un 4,25 % de productividad a largo plazo, lo que equivale a pasar del 74 % a algo menos del 77 % de las líderes, por debajo de la meta del bloque."
  },
  {
    id: "precios",
    corto: "Precios y poder adquisitivo",
    nombre: "Poder adquisitivo y precios",
    color: "#46853A",
    doc: "docs/02-bloques/04-poder-adquisitivo-y-precios.md",
    resumen: "Actuar sobre lo que la política nacional sí controla: márgenes en servicios protegidos, la factura regulada y la subida de impuestos por la inflación.",
    objetivo: "Actuar sobre cuatro canales: márgenes en servicios protegidos, componentes regulados de la factura energética, subida implícita de impuestos por la inflación y coste laboral no salarial. Ningún programa nacional puede contener un shock energético como el de 2026.",
    indicadores: [
      ["PIB per cápita en paridad de poder adquisitivo (UE = 100)", "≈92", "97-102", "93"],
      ["Cuña fiscal", "41,4 %", "37,5-39,5 %", "40,5 %"],
      ["Renta disponible real per cápita (2019 = 100)", "105,6", "117-126", null],
      ["Precios de los servicios reformados frente al IPC", "0", "−5 a −10 puntos", null]
    ],
    medidas: [
      ["CNMC independiente, como condición previa", "Sin regulador fuerte, abrir mercados acaba en márgenes, no en precios.", "Neto cercano a cero", "Fibra española"],
      ["Apertura de servicios protegidos", "Comercio, farmacia sin receta, autobús interurbano, taxi y VTC, y servicios profesionales.", "Nulo; fondo del taxi con recargo por viaje", "Ferrocarril liberalizado; evidencia débil en comercio y farmacia"],
      ["Competencia en banca", "Remedios estructurales en las concentraciones y cambio de banco en cinco días.", "Nulo", "Fibra española"],
      ["Energía más barata por la vía regulada", "Permisos en 12 meses, red anticipatoria, almacenamiento, cargos repartidos entre todas las energías y prórroga nuclear sin subvención.", "Neutro para el presupuesto", "Sin caso internacional revisado"],
      ["Deflactación automática del IRPF", "La tarifa se actualiza con la inflación subyacente, con un tope del 2 %.", "0,3-0,5 puntos de PIB en 2036", "Banco de España"],
      ["Rebaja de 1,5 puntos de cotización empresarial", "Financiada con IVA y beneficios fiscales; si no hay financiación, no se activa.", "Neutra por diseño", "Literatura no revisada (no verificado)"]
    ],
    mecanismo: "Más entrada reduce márgenes y precios relativos en servicios. Menos horas con el gas fijando el precio y el traslado de cargos a los combustibles fósiles abaratan la electricidad. La deflactación hace que la renta neta crezca al ritmo del salario bruto.",
    efectos: [
      ["Servicios reformados un 3-10 % más baratos de lo esperable; renta neta +0,3/+0,6 % anual", "Factura eléctrica un 5-15 % menor (rango incierto)", "Cuña 0,9 puntos menor que hoy (modelo)"],
      ["Más empleo en distribución y transporte; conflicto con el taxi y los colegios", "Empleo formal +0,3/+0,8 % (no verificado)", "Productividad de los servicios +0,1/+0,3 puntos anuales"],
      ["Ganadores visibles que hacen viable el resto del programa", "Electrificación más rápida", "Menor vulnerabilidad a shocks fósiles"]
    ],
    ganan: "Unos 20 millones de declarantes del IRPF (entre 150 y 400 € al año por hogar, no verificado) y los consumidores de electricidad.",
    pierden: "Titulares de unas 65.000 licencias de taxi (no verificado), farmacias urbanas, la hostelería si su IVA sube y los consumidores de gas y carburantes, que pagan un 2-5 % más.",
    compensacion: "Fondo de recompra de licencias, tres años de transición para las farmacias y transferencias a las cuatro decilas rurales de menor renta.",
    riesgos: [
      ["Que la rebaja de cotizaciones acabe en margen empresarial", "Los mercados de productos se abren antes, y se mantienen el salario mínimo y la negociación."],
      ["Abandono del medio rural", "Obligaciones de servicio universal con financiación explícita."],
      ["Reconcentración tras la guerra de precios", "Remedios estructurales en las concentraciones."]
    ],
    advertencia: "La meta de paridad de poder adquisitivo depende sobre todo de la productividad; este bloque aporta entre 1 y 3 puntos. El 93 % del modelo equivale a mantener la posición actual."
  },
  {
    id: "pensiones",
    corto: "Pensiones y demografía",
    nombre: "Pensiones y demografía",
    color: "#B84C63",
    doc: "docs/02-bloques/05-pensiones-y-demografia.md",
    resumen: "Menos pensiones por ocupado y una pensión media que crece algo menos que la productividad, con los mínimos protegidos. En natalidad, quitar barreras sin prometer cifras.",
    objetivo: "Contener el gasto con menos pensiones por ocupado y una pensión media que crezca menos que la productividad, en lugar de con más cotizaciones. En natalidad, eliminar barreras a la fecundidad deseada, sin prometer una cifra.",
    indicadores: [
      ["Gasto en pensiones", "12,9 % del PIB", "13,6-14,6 %", "13,2 %"],
      ["Edad efectiva de jubilación", "≈65 (no verificado)", "66,5-67,5", "+1,5 años (supuesto)"],
      ["Asalariados con pilar complementario", "<15 % (no verificado)", "80-90 %", null],
      ["Fecundidad", "1,10", "1,15-1,40", null]
    ],
    medidas: [
      ["Edad legal ligada a la esperanza de vida", "Dos tercios de cada año ganado de esperanza de vida, con aviso de diez años.", "Ahorro de 0,2-0,3 puntos en 2036 (no verificado)", "Dinamarca, Países Bajos, Portugal, Finlandia"],
      ["Cómputo de toda la carrera", "Descartando los cuatro peores años; las lagunas por cuidado de hijos se cubren.", "Ahorro de 0,1-0,2 puntos en 2036 (no verificado)", "Sistemas nocionales"],
      ["Freno de revalorización", "De 2028 a 2037, las pensiones por encima de 1,5 veces la mínima, incluidas las ya causadas, suben con el IPC menos 0,5 puntos, sin recortes nominales. Las mínimas siguen el IPC. Desde 2038, freno automático y simétrico.", "Ahorro de 0,3-0,6 puntos en 2036 (no verificado)", "Freno sueco, sin su brusquedad"],
      ["Cuentas nocionales para los nacidos desde 1985", "Se mantiene el reparto, sin doble pago: cada trabajador ve anotado lo cotizado.", "Casi nulo antes de 2045", "Suecia, Italia, Letonia, Polonia"],
      ["Pilar complementario con inscripción automática", "Del 1 % + 1 % en 2028 al 3 % + 3 % en 2034, con fondo público por defecto y comisión máxima del 0,3 %.", "Coste de 0,05-0,15 puntos", "Reino Unido: participación del 55 % al 88-90 %"],
      ["Educación de 0 a 3 años y permisos pagados", "Plaza garantizada al acabar los permisos y crédito fiscal por hijo.", "Coste de 0,3-0,5 puntos", "Austria; Alemania"],
      ["Inmigración laboral por cualificación", "Homologación de títulos en seis meses.", "Neutro", "No revisado (no verificado)"]
    ],
    mecanismo: "La edad y la prolongación voluntaria reducen el número de pensiones por ocupado; el cómputo y el freno hacen crecer la pensión media menos que la productividad. El pilar complementario repone con ahorro propio parte de la menor pensión pública. En natalidad, los servicios de cuidado y los permisos pagados son el canal con mejor evidencia, de décimas de hijo.",
    efectos: [
      ["Participación del 50-70 % en el pilar complementario; freno sobre las pensiones altas", "Ahorro de 0,8 puntos de PIB en 2035 (modelo)", "Gasto del 13,8-14,9 % en 2050, frente al 16,1 %"],
      ["Más empleo de madres con hijos pequeños", "Edad efectiva +1-1,5 años", "Pensión pública del 65-75 % del salario más un 5-12 % complementario"],
      ["Conflicto político sobre la edad y el freno", "Algo más de credibilidad fiscal", "Más equidad entre generaciones, si hay pacto"]
    ],
    ganan: "Los trabajadores jóvenes, que heredan un sistema sostenible y un ahorro propio, y los 5-6 millones de pensionistas con pensiones bajas, que conservan el IPC (no verificado).",
    pierden: "Los 4-5 millones de pensionistas por encima de 1,5 veces la mínima pierden un 0,5 % real al año en 2028-2037, en torno a un 5 % acumulado. Las cohortes de 1960-1975 trabajan entre medio año y año y medio más.",
    compensacion: "Suelo nominal para todas las pensiones, IPC garantizado a las mínimas, aviso de diez años, protección de las carreras largas y jubilación activa.",
    riesgos: [
      ["Reversión política, como en 2013-2021", "Sin acuerdo del Pacto de Toledo con al menos 210 escaños no se legisla; solo se despliega el pilar complementario."],
      ["Recurso por el artículo 50 de la Constitución", "Pensiones sin recorte nominal y dictamen previo de constitucionalidad."],
      ["Peso electoral de los mayores de 65", "Ahorro con destino visible: mínimos y pilar complementario."]
    ],
    advertencia: "Desde 2038, agotadas las medidas, el gasto vuelve a subir: la reforma compra tiempo, no cierra el problema. El modelo no proyecta ningún aumento de la fecundidad y el programa no lo promete."
  },
  {
    id: "estado",
    corto: "Función pública y gasto",
    nombre: "Función pública y gasto",
    color: "#46596E",
    doc: "docs/02-bloques/06-funcion-publica-y-gasto.md",
    resumen: "Reglas fiscales con dientes, revisión de todo el gasto y mérito en la Administración. El objetivo es la eficiencia, no el tamaño.",
    objetivo: "Eficiencia, composición y reglas, no tamaño: España gasta unos cuatro puntos de PIB menos que la media de la UE y tiene menos empleo público que la OCDE.",
    indicadores: [
      ["Saldo público", "≈−2,5/−3 % estructural (estimación)", "0/−1 % estructural", "−2,0 %"],
      ["Deuda pública", "101,4 % del PIB", "75-90 %", "84 %"],
      ["Temporalidad en el empleo público", "27,3 %", "≤8 %", null],
      ["Gasto revisado con decisión publicada", "<20 % (no verificado)", "100 %", null]
    ],
    medidas: [
      ["Techo de gasto por legislatura", "Ajuste de 0,3-0,5 puntos estructurales al año, cláusula cíclica automática e inversión no inferior al 2,5 % del PIB.", "Nulo", "Suecia; norma Zalm neerlandesa"],
      ["Revisión de todo el gasto en ocho años", "La AIReF revisa cada programa y el Gobierno cumple o explica.", "20-30 M€ al año", "Program Review canadiense"],
      ["Subvenciones con fecha de caducidad", "Presupuesto base cero rotatorio y caducidad a cinco años de subvenciones y beneficios fiscales.", "Incluido en el cuadro fiscal", "Estonia"],
      ["Agencia independiente de selección", "Y dirección pública profesional elegida por concurso.", "30-60 M€ al año", "Evans y Rauch (1999); Suecia"],
      ["Contrato laboral para el nuevo ingreso sin funciones de autoridad", "Despido solo por causa ante órgano independiente, y ningún cese en los 12 meses siguientes a un cambio de gobierno.", "Neutro; riesgo constitucional (STC 99/1987)", "Suecia; Portugal 2008"],
      ["Fin de la temporalidad abusiva", "Oferta de plazas trienal obligatoria e interinidad máxima de tres años.", "Neutro", "Reforma de 2021"],
      ["Elección en sanidad y educación con financiación pública", "Sin selección de usuarios ni copagos, y un test de cuatro preguntas antes de cualquier privatización.", "0,05-0,1 puntos", "Países Bajos, Suecia, Alzira"]
    ],
    mecanismo: "La regla hace creíble un ajuste gradual y protege la inversión. La revisión del gasto elige qué recortar con criterios explícitos. Una mejor selección y dirección elevan la calidad de servicios que la economía privada necesita: justicia, licencias, educación.",
    efectos: [
      ["Ajuste de 0,3-0,5 puntos al año; temporalidad pública −8/−12 puntos", "Deuda del 89 % en 2035 (modelo)", "Deuda del 84 % y déficit del 2 % (modelo)"],
      ["Conflicto con los sectores que pierden subvenciones", "Menos litigios y mejores plazos (sin cuantificar)", "Menor coste de financiación (10-40 puntos básicos, no verificado)"],
      ["Señal de credibilidad, de efecto pequeño", "Administración menos expuesta al clientelismo", "Cultura de evaluación, si hay pacto"]
    ],
    ganan: "Los contribuyentes futuros, por una deuda más baja, y los usuarios de servicios públicos mejor dirigidos.",
    pierden: "Los beneficiarios de subvenciones y beneficios fiscales suprimidos (entre 0,55 y 1,1 puntos de PIB en conjunto) y los interinos que no superen los procesos de estabilización.",
    compensacion: "Dos o tres años de transición en las subvenciones. Los funcionarios actuales conservan su estatuto y no hay despidos públicos: solo una reposición más lenta.",
    riesgos: [
      ["Clientelismo al flexibilizar el empleo público", "La agencia de selección va antes que el contrato laboral, y el estatuto se mantiene en justicia, inspección, policía y regulación."],
      ["Incumplir la regla, como con la LO 2/2012", "Previsiones vinculantes de la AIReF y financiación extraordinaria condicionada."],
      ["Que no haya bastante gasto ineficiente que recortar", "Reserva de ingresos pactada (0,3-0,6 puntos) en lugar de recortes lineales."]
    ],
    advertencia: "La meta de saldo estructural (0/−1 en 2040) no se alcanza en el modelo, que da un déficit del 2,0 %. La partida de gasto ineficiente identificable solo da entre 0,4 y 0,85 puntos de PIB."
  }
];

// Relaciones causales entre bloques (de, a, explicación).
window.RELACIONES = [
  ["vivienda", "pensiones", "Vivienda asequible, emancipación más temprana y algo más de natalidad"],
  ["vivienda", "productividad", "Poder mudarse a las ciudades donde está el empleo productivo"],
  ["estado", "productividad", "Licencias, justicia y educación de calidad como insumos de la empresa"],
  ["estado", "precios", "Deflactación del IRPF y rebaja de cotizaciones financiadas"],
  ["precios", "laboral", "Menos cuña fiscal, más salario neto"],
  ["productividad", "laboral", "Productividad que llega al salario"],
  ["laboral", "pensiones", "Más ocupados, más cotizantes por pensionista"],
  ["pensiones", "estado", "Las pensiones aportan un tercio del ajuste fiscal"]
];

window.ESTRATEGIA = {
  fases: [
    { n: 0, nombre: "Preparación", desde: 2026.92, hasta: 2027.5, texto: "Auditoría jurídica de cada medida, Libro Blanco con su efecto por decila de renta y por provincia, y tres mesas: diálogo social, Pacto de Toledo y Conferencia de Presidentes." },
    { n: 1, nombre: "Cimientos y victorias rápidas", desde: 2027.5, hasta: 2029, texto: "Regla de gasto y AIReF, simplificación normativa, CNMC reforzada, profesiones, umbrales de tamaño, servicios de empleo, ley de vivienda de oferta con reglas macroprudenciales, y mérito en la función pública." },
    { n: 2, nombre: "Reformas núcleo", desde: 2029, hasta: 2031.5, texto: "Financiación autonómica, pensiones y pilar complementario, mochila y bonus-malus, negociación colectiva y contrato laboral público para el nuevo ingreso. Cada una solo si pasa su puerta." },
    { n: 3, nombre: "Consolidación", desde: 2031.5, hasta: 2037, texto: "Rebaja de cotizaciones, conversión voluntaria de contratos vigentes a la mochila, evaluación a seis años con caducidad de lo que no funcione y densificación en todas las zonas tensionadas." },
    { n: 4, nombre: "Régimen permanente", desde: 2037, hasta: 2041, texto: "Las reglas pasan a funcionar solas y se extinguen las compensaciones temporales." }
  ],
  puertas: [
    { anio: 2027.6, bloque: "estado", nombre: "Ajuste fiscal", condicion: "La brecha de producción está por encima de −1 %. Si no, la cláusula cíclica suspende el ajuste de ese año." },
    { anio: 2028.3, bloque: "productividad", nombre: "Productos antes que trabajo", condicion: "Ley de profesiones aprobada y CNMC reforzada en vigor." },
    { anio: 2028.6, bloque: "vivienda", nombre: "Vivienda", condicion: "Reglas macroprudenciales activas y crédito hipotecario nuevo por debajo del PIB nominal más 2 puntos." },
    { anio: 2028.95, bloque: "laboral", nombre: "Red de transición", condicion: "Perfilado operativo en comunidades con al menos el 70 % de los parados y fondo de transición ejecutado al 80 % en diciembre de 2028." },
    { anio: 2029.3, bloque: "laboral", nombre: "Ciclo laboral", condicion: "Paro por debajo del 10 % y sin subir en dos trimestres seguidos." },
    { anio: 2029.7, bloque: "pensiones", nombre: "Pensiones", condicion: "Acuerdo del Pacto de Toledo con al menos 210 escaños. Sin él, solo se despliega el pilar complementario." },
    { anio: 2030.2, bloque: "estado", nombre: "Empleo público", condicion: "Agencia de selección y dirección profesional operativas antes de introducir el contrato laboral." },
    { anio: 2030.7, bloque: "precios", nombre: "Redes", condicion: "Test de competencia superado y límites al endeudamiento y a los dividendos en vigor." }
  ],
  columnas: ["2027", "2028", "2029-30", "2031-32", "2033-36", "2037-40"],
  // Celdas: "" vacío, "mesa", "ley", "1" despliegue, "2" despliegue principal, "r" régimen, "eval" evaluación, o texto.
  gantt: [
    ["Auditoría, Libro Blanco y mesas", null, ["2", "", "", "", "", ""]],
    ["Regla de gasto y AIReF", "estado", ["2", "1", "r", "r", "r", "r"]],
    ["Simplificación, umbrales y profesiones", "productividad", ["2", "2", "1", "eval", "caducidad", ""]],
    ["CNMC reforzada", "precios", ["2", "1", "r", "r", "r", "r"]],
    ["Servicios de empleo y políticas activas", "laboral", ["1", "2", "2", "1", "eval", ""]],
    ["Vivienda de oferta y macroprudencial", "vivienda", ["2", "2", "2", "1", "1", "r"]],
    ["Financiación autonómica y fondo territorial", "estado", ["mesa", "2", "2", "2", "1", "fin"]],
    ["Pilar complementario de pensiones", "pensiones", ["mesa", "2", "2", "1", "r", "r"]],
    ["Ajuste automático y freno de pensiones", "pensiones", ["", "mesa", "ley", "1", "1", "r"]],
    ["Mochila y bonus-malus", "laboral", ["", "", "si pasa puertas", "1", "1", "r"]],
    ["Mérito y dirección en la función pública", "estado", ["2", "2", "1", "1", "1", "r"]],
    ["Rebaja de cotizaciones", "precios", ["", "", "", "1", "2", "1"]]
  ],
  elecciones: ["autonómicas y municipales", "", "generales", "autonómicas y municipales", "generales", "generales"],
  incentivos: [
    ["Institucionales", "Regla de gasto con rango orgánico, AIReF con previsiones vinculantes, normas que caducan y evaluación a los tres y seis años."],
    ["Compensatorios", "Siempre temporales o acotados: entre 1,2 y 1,9 puntos de PIB en el pico de 2029-2032, dentro del techo de gasto. Si una compensación no tiene financiación, la medida espera."],
    ["Electorales", "Resultados visibles pronto: declaración responsable en el mes 3, deflactación del IRPF en los meses 4-6, primeras bajadas de precios en los meses 9-12. La vivienda nueva no llega antes del mes 30, y así debe decirse."],
    ["Territoriales", "Fondo de reformas con pago por hitos, transferencia municipal por vivienda terminada y comparación pública anual. Quien no se adhiere no cobra."],
    ["Patrimoniales", "La mochila y el pilar complementario convierten derechos en saldos individuales que millones de titulares defenderán."]
  ],
  fracaso: [
    ["Tasa de paro", "+1,5 puntos en cuatro trimestres sin explicación por el ciclo europeo"],
    ["Paro de larga duración", "+5 puntos en dos años"],
    ["Riesgo de pobreza (AROPE, 25,7 % en 2025)", "+1 punto dos años seguidos"],
    ["Precio de la vivienda sobre renta", "Más de 8,5 años en 2030 con terminaciones por debajo de los hogares creados"],
    ["Plazo de licencia en municipios adheridos", "Más de cuatro meses en 2029: se retiene el fondo"],
    ["Prima de riesgo", "Más de 200 puntos básicos durante tres meses"],
    ["Márgenes en sectores liberalizados", "Si sube el margen sin bajar el precio, actúa la CNMC"]
  ],
  trayectorias: [
    ["Pacto amplio entre los dos grandes partidos", "20-30 %", 80, 90, "Sobrevive casi todo el programa."],
    ["Mayoría reformista estrecha", "45-55 %", 55, 65, "Quedan en riesgo las pensiones, la financiación autonómica y la mochila."],
    ["Avance solo desde comunidades y ayuntamientos", "20-30 %", 30, 40, "Vivienda, licencias y algo de función pública; poco más."]
  ]
};

window.ABIERTO = [
  "El modelo necesita 2,6 puntos de PIB de recorte fuera de las pensiones; el cuadro de gasto identifica entre 0,8 y 1,8.",
  "Entre 0,8 y 1,5 puntos de PIB de costes de los bloques de vivienda, laboral y productividad no están en el cuadro fiscal.",
  "La rebaja de la cuña es neutra en el bloque de precios y no está financiada en el modelo.",
  "En el escenario central, la reforma laboral entra en 2029 sin cumplir sus propias puertas.",
  "Buena parte de la literatura está citada de memoria y debe cotejarse antes de cualquier uso público."
];

// Versión maximalista: comparación con la contrastada (docs/05-version-maximalista/00-parametros-de-diseno.md).
window.MAXIMALISTA = {
  ambitos: [
    {
      nombre: "Trabajo",
      contrastada: "Mochila del 1,5 % manteniendo la causa del despido y el control judicial. Suelo sectorial y salario mínimo al 55-60 % del mediano.",
      maximalista: "Contrato único con extinción libre, preaviso de un mes e indemnización cero. Mochila del 1,53 %. Convenio de empresa por encima del sectorial. Cinco puntos menos de cotización empresarial.",
      doc: "docs/05-version-maximalista/01-trabajo.md"
    },
    {
      nombre: "Sanidad",
      contrastada: "Financiación pública íntegra. Elección de proveedor sin copagos ni selección.",
      maximalista: "Seguro obligatorio con copago del 10 % y tope anual. Subsidio público a la prima solo según renta. Todos los centros pasan a gestión privada en competencia entre 2029 y 2033.",
      doc: "docs/05-version-maximalista/02-sanidad-y-educacion.md"
    },
    {
      nombre: "Educación",
      contrastada: "Financiación pública íntegra. Autonomía de centros y evaluación externa.",
      maximalista: "Cheque íntegro de 3 a 16 años y parcial después; préstamos ligados a la renta en la universidad. Centros acreditados por resultados, con libertad de formato.",
      doc: "docs/05-version-maximalista/02-sanidad-y-educacion.md"
    },
    {
      nombre: "Pensiones",
      contrastada: "Reparto con cuentas nocionales para los nacidos desde 1985 y un pilar complementario del 3 % + 3 %.",
      maximalista: "Cuentas nocionales para los menores de 50 años. Cuatro puntos de cotización pasan a cuentas individuales: el 10 % del salario en total. El Estado garantiza solo la pensión mínima.",
      doc: "docs/05-version-maximalista/03-pensiones.md"
    },
    {
      nombre: "Estado y función pública",
      contrastada: "Eficiencia y reglas, no tamaño. Contrato laboral solo para el nuevo ingreso sin funciones de autoridad.",
      maximalista: "El Estado produce solo seguridad, justicia y las funciones de autoridad que las sostienen. Estatuto funcionarial para ese núcleo. Reposición cero en gestión administrativa.",
      doc: "docs/05-version-maximalista/04-estado-nucleo-y-gasto.md"
    },
    {
      nombre: "Gasto",
      contrastada: "Ancla de saldo estructural, con una reserva de ingresos si el ajuste no llega.",
      maximalista: "Gasto primario sin crecimiento real hasta un objetivo legal. Venta de todo el sector público comercial. Subvenciones a empresas: cero por defecto.",
      doc: "docs/05-version-maximalista/04-estado-nucleo-y-gasto.md"
    },
    {
      nombre: "IA agéntica",
      contrastada: "Una mención a la tramitación automatizada de prestaciones regladas.",
      maximalista: "El Estado conserva datos, reglas y evaluación, y compra la ejecución a agentes de proveedores en competencia. Lo favorable se resuelve solo; lo desfavorable admite revisión humana.",
      doc: "docs/05-version-maximalista/05-estado-agentico.md"
    }
  ],
  capas: [
    ["Datos", "Registros únicos de personas, empresas e inmuebles, consultables por API", "Estado"],
    ["Reglas", "Cada norma con trámite, publicada como especificación ejecutable con sus casos de prueba", "Estado"],
    ["Agentes", "Un orquestador por expediente y agentes especializados con herramientas", "Proveedores en competencia"],
    ["Evaluación", "Tasa de error medida frente al proceso humano, auditoría por muestreo y recurso", "Autoridad independiente"]
  ],
  condiciones: [
    "Reformar los artículos 35, 41, 43 y 103.3 de la Constitución, con tres quintos de ambas cámaras: 210 diputados. Los sondeos previos a las elecciones del 29 de noviembre dan al bloque afín entre 188 y 208.",
    "Lo que el Estado deja de financiar en sanidad y educación lo pagan los hogares en primas, copagos y matrículas.",
    "Pasar a cuentas individuales cuesta 1,4 puntos de PIB al año durante décadas, porque las pensiones actuales hay que seguir pagándolas.",
    "El despido necesita una causa formal hasta que pueda denunciarse el Convenio 158 de la OIT. La próxima ventana se abre en noviembre de 2035."
  ],
  docParametros: "docs/05-version-maximalista/00-parametros-de-diseno.md",
  docSecuencia: "docs/05-version-maximalista/06-reforma-constitucional-y-secuencia.md",
  docRevision: "docs/04-revision/01-revision-liberalizadora-ia.md"
};
