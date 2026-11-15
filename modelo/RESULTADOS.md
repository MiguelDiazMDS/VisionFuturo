# Resultados del modelo de escenarios 2026-2040

**Proyecto:** España Dinámica 2040 · **Código:** `modelo/escenarios.py` · **Fecha:** noviembre de 2026

Las cifras de este documento son **escenarios condicionados a supuestos explícitos, no predicciones**. Los decimales sirven para comparar escenarios entre sí; el nivel de cada cifra tiene un margen de error que la sección de sensibilidad cuantifica solo en parte.

## 1. Lo esencial

- **El programa central (B) estabiliza la deuda y la baja a cerca del 85 % del PIB en 2040, pero no llega al déficit cero.** Con 2,6 puntos de PIB de recortes discrecionales, una reforma de pensiones que ahorra 1,1 puntos y una rebaja de cuña de 1 punto, el déficit queda en torno al 2 %.
- **La ganancia de renta es moderada y tardía.** El PIB per cápita de 2040 supera al inercial en unos 7 % (rango de 2 % a 11 % según el tamaño de los efectos). Hasta 2030 no hay ganancia apreciable y el paro es algo más alto que sin reformas.
- **Con efectos bajos (C), la consolidación sigue funcionando por pura aritmética, y el dividendo de crecimiento casi desaparece:** +2 % de PIB per cápita y un paro prácticamente igual al inercial.
- **La terapia de choque (D) no es contraproducente para la deuda en este modelo, y sí es mucho más costosa en la transición:** el paro sube hasta cerca del 12 % en 2029 (unos 13-14 % con multiplicador e histéresis altos), el PIB per cápita se estanca tres años y la deuda no mejora respecto a B hasta 2029.
- **Lo que más mueve los resultados no son las reformas:** son el crecimiento tendencial de la productividad, la migración y el tipo de interés.
- **La versión maximalista (E, §9) baja el gasto público al 41 % del PIB, pero el 84 % de la diferencia con B reaparece como pagos obligatorios de los hogares.** Termina con menos déficit y menos deuda que B, con un paro parecido, y con un PIB per cápita algo menor y una renta salarial neta tras pagos obligatorios claramente menor.

## 2. Cómo funciona el modelo

Cinco módulos encadenados año a año, a partir de 2025:

1. **Crecimiento.** PIB potencial = población de 16 a 64 años × tasa de actividad × (1 − paro estructural) × horas × productividad por hora. La productividad crece con la PTF tendencial y el capital la acompaña a largo plazo. Las reformas suben el nivel de la PTF y bajan el paro estructural con un perfil logístico: casi nada los dos primeros años y la mitad del efecto a los 4-7 años.
2. **Demanda.** Cada punto de ajuste fiscal abre una brecha de producción según el multiplicador, que aumenta cuando ya hay holgura. La brecha se cierra un 40 % cada año. Cada punto-año de brecha negativa deja una pérdida permanente de potencial (histéresis). La reforma laboral tiene además un coste de demanda el año en que entra.
3. **Fiscal.** Ingresos, cuatro partidas de gasto primario, intereses con un tipo implícito que converge al tipo de las nuevas emisiones, y deuda. El gasto se fija sobre el PIB potencial, de modo que los estabilizadores automáticos operan.
4. **Pensiones.** Número de pensiones (población de 65 o más × cobertura) por pensión media. La pensión media evoluciona con altas y bajas: las nuevas pensiones dependen de los salarios pasados y de los parámetros de la reforma.
5. **Vivienda y salarios.** Déficit acumulado = hogares creados − viviendas terminadas; el precio sobre renta responde a ese déficit con una elasticidad. El salario real sigue al PIB por ocupado y a la cuña fiscal.

## 3. Supuestos principales y su fuente

Etiquetas: **DIAG** = tabla §10 del diagnóstico; **LIT** = literatura, citada de memoria como orden de magnitud (cotejar antes de publicar); **SUP** = supuesto del proyecto; **CAL** = calibrado.

| Supuesto | Valor central | Rango explorado | Procedencia |
|---|---|---|---|
| PIB 2025; déficit; deuda; intereses | 1,69 billones €; 2,4 %; 100,7 %; 2,4 % | — | DIAG 35-37; crítica §1.1 |
| Gasto 2025: pensiones / sanidad / educación / resto | 12,9 / 6,5 / 4,2 / 19,0 % PIB | — | DIAG 24; crítica §1.1; resto por diferencia (gasto total de 2025 no verificado) |
| Población | +4,4 M en 15 años | migración ×0,6-×1,3 | INE, proyecciones 2026-2076 (DIAG 32-33) |
| Población de 65 o más en 2040 | 13,6 M | — | SUP: el desglose por edad de la nueva proyección no se pudo extraer |
| Paro estructural sin reformas | 10,5 % → 9,0 % en 2035 | — | SUP |
| PTF tendencial | 0,65 % anual (productividad ≈1,0 %) | 0,35-0,95 % | SUP/CAL: por encima de la historia, algo por debajo de AIReF |
| Reformas de mercados, unidad de mercado y umbrales | +3 % de PTF a largo plazo | ×0,3-×1,6 | LIT: Égert y Gal (2017); FMI WEO 2016; Varga e in 't Veld (2014) |
| Reforma laboral (dualidad) | +0,75 % de PTF; −1,5 pp de paro; −0,3 pp de brecha al entrar | ×0,3-×1,5 | LIT: Bassanini y Duval; FMI WEO 2016; evidencia §8 |
| Políticas activas (+0,6 pp de PIB) | −0,6 pp de paro | ídem | LIT: Card, Kluve y Weber (2018); evidencia §9.4 |
| Función pública y competencia en servicios | +0,5 % de PTF | ídem | SUP: evidencia causal escasa (evidencia §5-6) |
| Rebaja de cuña (1 pp de PIB ≈ 2,1 pp de cuña) | −0,5 pp de paro | ídem | LIT: Bassanini y Duval |
| Multiplicador del gasto | 0,8; hasta 1,4 con brecha ≤ −2 % | 0,4-1,3 | LIT: evidencia §8-9; Auerbach y Gorodnichenko (2012); Blanchard y Leigh (2013) |
| Histéresis | 0,15 % de potencial por punto-año de brecha | 0-0,30 | LIT: DeLong y Summers (2012); Fatás y Summers (2018) |
| Tipo de las nuevas emisiones | 3,25 % + 2,5 pb por punto de deuda sobre 100 | 2,25-4,25 % | AIReF (≈3 %) y SUP |
| Deriva de sanidad y cuidados | +0,065 pp de PIB al año | — | Crítica §1.1 (AIReF vía CaixaBank Research) |
| Pensiones: edad efectiva | +1,5 años en 10 años; −3 % de pensiones por año | — | SUP de política; LIT (Ageing Report) |
| Pensiones: ajuste de las nuevas altas | −0,5 % por cohorte desde 2029 | — | SUP de política (equivale al factor de 2013) |
| Pensiones: indexación | IPC − 0,25 pp de media en 2028-2037 | — | SUP de política |
| Vivienda: obra nueva | de 150.000 a 220.000 al año | 175.000 en C | SUP; Auckland como techo (evidencia §4.1) |
| Elasticidad precio-oferta | 1,75 % de precio por 1 % de parque | 1,0-2,5 | LIT: estudios de Reino Unido y OCDE |

**Políticas del escenario B.** El gasto del "resto" baja 0,3 pp de PIB al año entre 2027 y 2034 (2,4 pp), y el de sanidad 0,2 pp. Las políticas activas suben 0,6 pp en 2027-2028, antes de la reforma laboral de 2029. La cuña baja 1 pp de PIB en 2030-2034. El recorte del "resto" equivale a un 13 % de un bloque que incluye defensa, justicia, inversión y prestaciones no contributivas. **Es una decisión de política que el modelo toma como dada, no un ahorro que haya identificado.** La crítica (§1.1) advierte de que las revisiones de gasto encuentran menos, así que esa cifra implica recortar programas reales.

**Escenario D.** Mismas reformas y mismos efectos de largo plazo que B, todas en 2027. El recorte es de 1,2 pp de PIB al año durante tres años (3,6 pp, incluidos 0,3 de sanidad y 0,3 de educación), las pensiones pierden 1 pp anual frente al IPC en 2027-2030 y las políticas activas se financian en 2030. D ajusta por tanto **más y antes** que B, no solo más rápido.

## 4. ¿Es coherente el escenario inercial con las proyecciones oficiales?

| Magnitud | Modelo (A) | Referencia |
|---|---|---|
| Déficit 2026 | 2,8 % | AIReF: 2,8 % (calibrado con las medidas energéticas) |
| Pensiones / PIB en 2040 | 15,3 % | Ageing Report y AIReF: 12,7 % en 2022 y 16,1 % en 2050; la interpolación lineal da ≈14,9 % (estimación propia) |
| Deuda / PIB en 2040 | ≈115 % | AIReF: vuelve a superar el 120 % a largo plazo |
| Crecimiento medio 2026-2040 | 1,4 % | — |

El inercial es algo más pesimista que las fuentes oficiales, y la diferencia se explica: aquí el paro estructural solo baja al 9 % y la productividad crece un 1,0 %. Con supuestos macroeconómicos del tipo del Ageing Report (productividad ≈1,15 %, paro al 7,5 %), el mismo modelo da un 14,8 % en pensiones y un 104 % de deuda en 2040. La estructura es por tanto coherente con las proyecciones oficiales y la divergencia es de supuestos macro. Conviene tenerlo presente: **un inercial más benigno reduciría la distancia entre A y B.**

## 5. Resultados por escenario

### 2030

| Indicador | A · Inercial | B · Central | C · Efectos bajos | D · Choque |
|---|---|---|---|---|
| PIB real per cápita (2025 = 100) | 105 | 105 | 104 | 103 |
| Productividad por hora (2025 = 100) | 105 | 105 | 105 | 104 |
| Tasa de paro (%) | 9,8 | 10,0 | 10,2 | 10,8 |
| Tasa de empleo 16-64 (%) | 69,7 | 69,8 | 69,6 | 69,2 |
| Saldo público (% PIB) | -3,6 | -3,1 | -3,3 | -0,5 |
| Deuda pública (% PIB) | 97 | 96 | 97 | 91 |
| Gasto en pensiones (% PIB) | 13,6 | 13,3 | 13,4 | 13,0 |
| Salario real neto por ocupado (2025 = 100) | 104 | 104 | 104 | 103 |
| Déficit de vivienda (miles) | 1.090 | 1.090 | 1.090 | 1.120 |
| Precio vivienda / renta (años) | 8,6 | 8,6 | 8,6 | 8,6 |

### 2035

| Indicador | A · Inercial | B · Central | C · Efectos bajos | D · Choque |
|---|---|---|---|---|
| PIB real per cápita (2025 = 100) | 110 | 114 | 110 | 114 |
| Productividad por hora (2025 = 100) | 110 | 112 | 110 | 112 |
| Tasa de paro (%) | 9,0 | 7,8 | 9,1 | 7,8 |
| Tasa de empleo 16-64 (%) | 70,8 | 72,4 | 71,1 | 72,4 |
| Saldo público (% PIB) | -4,6 | -1,9 | -2,7 | 0,1 |
| Deuda pública (% PIB) | 102 | 89 | 94 | 73 |
| Gasto en pensiones (% PIB) | 14,2 | 12,9 | 13,3 | 12,5 |
| Salario real neto por ocupado (2025 = 100) | 107 | 113 | 111 | 113 |
| Déficit de vivienda (miles) | 1.050 | 910 | 1.020 | 940 |
| Precio vivienda / renta (años) | 8,6 | 8,5 | 8,6 | 8,5 |

### 2040

| Indicador | A · Inercial | B · Central | C · Efectos bajos | D · Choque |
|---|---|---|---|---|
| PIB real per cápita (2025 = 100) | 112 | 121 | 114 | 120 |
| PIB per cápita en PPA, UE27 = 100 (indicativo) | 86 | 93 | 88 | 92 |
| Crecimiento medio del PIB desde 2025 (% anual) | 1,4 | 1,8 | 1,5 | 1,8 |
| Productividad por hora (2025 = 100) | 116 | 120 | 117 | 120 |
| Tasa de paro (%) | 9,0 | 7,0 | 8,8 | 7,3 |
| Tasa de empleo 16-64 (%) | 70,8 | 73,1 | 71,5 | 72,9 |
| Saldo público (% PIB) | -6,5 | -2,0 | -3,3 | 0,0 |
| Saldo primario (% PIB) | -2,9 | 0,4 | -0,5 | 1,6 |
| Deuda pública (% PIB) | 115 | 84 | 95 | 61 |
| Gasto en pensiones (% PIB) | 15,3 | 13,2 | 13,9 | 13,0 |
| Gasto público total (% PIB) | 49,7 | 44,2 | 45,5 | 42,2 |
| Salario real neto por ocupado (2025 = 100) | 111 | 119 | 116 | 119 |
| Cuña fiscal (%) | 42,7 | 40,5 | 40,5 | 40,5 |
| Déficit de vivienda (miles) | 920 | 480 | 790 | 500 |
| Precio vivienda / renta (años) | 8,5 | 8,3 | 8,4 | 8,3 |

La convergencia en PPA supone que el PIB per cápita de la UE crece un 1,2 % anual (supuesto), por lo que es solo indicativa.

### Lectura

- **Curva en J.** En B, el paro de 2029-2030 está 0,2-0,3 pp por encima del inercial y el PIB per cápita no lo supera hasta 2031. Las ganancias se concentran en 2032-2038.
- **Aritmética fiscal.** El inercial pasa de equilibrio primario a un déficit primario cercano a 3 puntos en 2040 (pensiones +2,4, sanidad +1,0, defensa +0,3, ingresos +0,6). B mejora el saldo de 2040 en 4,5 puntos frente a A y aun así queda con un déficit del 2 %. Llegar a déficit cero en 2040 exigiría unos 2 puntos más, lo que confirma el orden de magnitud de la crítica (de 5 a 7 puntos sobre la senda inercial).
- **Pensiones.** La reforma de B no reduce el gasto: lo mantiene cerca del 13 % en vez de dejarlo subir al 15 %. De los 2,1 puntos de diferencia con A, 1,1 son reforma paramétrica y el resto es mayor PIB. Desde 2038, agotadas las medidas, el gasto vuelve a subir en todos los escenarios: la reforma compra tiempo, no cierra el problema.
- **Salarios.** El salario neto de B supera al inercial en un 7-8 % en 2040. Unos 4 puntos vienen de la productividad y unos 4 de la cuña (el inercial la sube 1,3 pp y B la baja 0,9). Si la participación salarial cayera 1,5 pp, como sugiere la crítica del monopsonio, la ganancia bajaría a unos 5 %.
- **Vivienda.** Incluso con 70.000 viviendas más al año, el déficit acumulado no se absorbe antes de 2040 y el precio sobre renta apenas baja de 8,5 a 8,3 años. La oferta ayuda poco y despacio a escala nacional. La migración mueve este indicador (7,8-8,7) más que la reforma.

## 6. Terapia de choque: qué muestra el modelo y qué no

| Año | Brecha B | Brecha D | Paro B | Paro D | Deuda B | Deuda D | Histéresis acumulada D (% del potencial) |
|---|---|---|---|---|---|---|---|
| 2027 | 0,0 | -1,4 | 10,2 | 10,9 | 98 | 98 | 0,0 |
| 2028 | -0,1 | -2,7 | 10,0 | 11,4 | 97 | 97 | 0,2 |
| 2029 | -0,7 | -3,5 | 10,1 | 11,8 | 97 | 96 | 0,6 |
| 2030 | -0,9 | -1,7 | 10,0 | 10,8 | 96 | 91 | 1,1 |
| 2031 | -0,9 | -0,5 | 9,7 | 10,0 | 96 | 87 | 1,4 |
| 2032 | -0,8 | -0,3 | 9,3 | 9,4 | 94 | 83 | 1,5 |

Para separar la velocidad del tamaño se simuló el mismo ajuste total de D repartido en ocho años:

| Indicador | D · Choque (3 años) | Mismo ajuste en 8 años |
|---|---|---|
| Paro máximo (%) | 11,8 | 10,3 |
| Brecha de producción mínima (%) | -3,5 | -1,2 |
| PIB perdido acumulado (puntos-año) | 10,4 | 9,9 |
| Histéresis en 2040 (% del potencial) | 1,6 | 1,5 |
| Deuda 2032 / 2040 (% PIB) | 83 / 61 | 93 / 74 |

Tres conclusiones honestas:

1. **Durante dos años el ajuste rápido no reduce la deuda** más que el gradual: el denominador cae. Es el efecto que describen Eyraud y Weber, aunque aquí no llega a subir la ratio.
2. **La deuda más baja de D en 2040 se debe a que ajusta más y antes.** De los 23 puntos que la separan de B, unos 10 vienen del mayor tamaño del ajuste y unos 13 de adelantarlo (más años de mejor saldo primario y menos intereses acumulados). A cambio, la velocidad añade 1,5 pp al paro máximo y casi triplica la brecha mínima. En este modelo adelantar el ajuste compensa en términos de deuda; el coste está en la transición y en los riesgos del punto siguiente.
3. **El modelo es benévolo con el choque por construcción.** La histéresis es lineal (una brecha de −3,5 % un año daña lo mismo que −0,5 % siete años), la brecha se cierra sola, no hay crisis bancaria ni salto de la prima de riesgo, y las reformas no se revierten aunque el paro suba al 12-14 %. La experiencia de 2010-2013 indica que esos canales existen. El resultado de D es por tanto una cota optimista.

## 7. Sensibilidad

Valores en 2040 al mover un parámetro cada vez (valor bajo → valor alto).

| Parámetro | PIB pc B | Paro B (%) | Deuda B | Deuda A | Deuda D | Paro máx. D (%) |
|---|---|---|---|---|---|---|
| PTF tendencial (0,35 % / 0,95 %) | 112 → 129 | 7,0 | 98 → 71 | 131 → 101 | 74 → 50 | 11,8 |
| Saldo migratorio (×0,6 / ×1,3) | 119 → 122 | 7,0 | 96 → 76 | 129 → 106 | 73 → 54 | 11,8 |
| Tipo de las nuevas emisiones (2,25 % / 4,25 %) | 121 | 7,0 | 76 → 92 | 106 → 125 | 55 → 69 | 11,8 |
| Efecto de las reformas en la PTF (×0,3 / ×1,6) | 116 → 124 | 7,0 | 90 → 79 | 115 | 68 → 56 | 11,8 |
| Multiplicador e histéresis a la vez (0,4 y 0 / 1,3 y 0,30) | 122 → 118 | 6,5 → 8,1 | 80 → 91 | 115 | 54 → 76 | 10,7 → 13,6 |
| Efecto de las reformas en el empleo (×0,3 / ×1,5) | 118 → 122 | 8,8 → 5,7 | 88 → 81 | 115 | 66 → 59 | 11,9 → 11,7 |
| Persistencia de la brecha (0,4 / 0,8) | 121 → 119 | 6,8 → 7,6 | 82 → 88 | 115 | 59 → 69 | 11,4 → 12,2 |
| Multiplicador fiscal (0,4 / 1,3) | 121 → 120 | 6,8 → 7,4 | 81 → 87 | 115 | 57 → 68 | 10,7 → 13,1 |
| Histéresis (0 / 0,30) | 122 → 119 | 6,5 → 7,5 | 82 → 86 | 115 | 57 → 66 | 11,5 → 12,1 |

- **Los tres parámetros más influyentes son exógenos al programa.** La productividad tendencial mueve la deuda de B en 27 puntos, la migración en 20 y el tipo de interés en 16. El tamaño del efecto de las reformas sobre la PTF la mueve en 11.
- **El programa reduce la deuda frente al inercial en todos los casos explorados** (entre 20 puntos en C y unos 35), porque la mayor parte de la mejora es consolidación directa y no dividendo de crecimiento.
- **Multiplicador e histéresis importan poco para B y mucho para D:** en el caso adverso el paro máximo de D pasa del 11,8 % al 13,6 % y su PIB per cápita de 2040 cae a 115, por debajo del de B con los mismos parámetros (118).
- La elasticidad precio-oferta de la vivienda solo mueve el precio sobre renta de B entre 8,2 y 8,4.

## 8. Qué NO puede decir este modelo

1. **No es un DSGE ni hay equilibrio general.** No hay precios, salarios ni tipos que se ajusten para vaciar mercados, ni sector exterior, ni BCE, ni expectativas. Los efectos de las reformas se imponen desde fuera con cifras de la literatura; el modelo no los explica.
2. **No valida el tamaño de los efectos.** Si la literatura sobrestima lo que la desregulación aporta en un país como España (Nueva Zelanda liberalizó y no convergió), el resultado relevante es C, no B. El modelo no dice cuál es más probable.
3. **La natalidad no se modeliza de forma causal.** La población es la proyección del INE, igual en todos los escenarios. No hay efecto de la vivienda, el empleo o los recortes sobre la fecundidad ni sobre la emancipación, y la migración no responde a la economía.
4. **No hay distribución.** Todo son medias: nada sobre decilas, territorios, jóvenes frente a pensionistas ni perdedores concretos. Un salario medio un 8 % mayor es compatible con pérdidas para grupos amplios.
5. **No dice si el recorte es factible.** Los 2,4-3,6 puntos de recorte son una entrada. El modelo no identifica partidas ni contempla que recortar educación, sanidad o inversión reduzca la productividad futura.
6. **Subestima los riesgos de cola.** No hay recesiones exógenas, crisis financieras, dinámica no lineal de la prima de riesgo, histéresis convexa ni reversión política de las reformas. Las trayectorias son suaves porque el modelo lo es.
7. **La vivienda es nacional y agregada.** El problema está en unas pocas áreas urbanas y costeras; un déficit nacional no capta eso. No hay tipos de interés, crédito, alquiler ni demanda inversora, y la creación de hogares no responde a los precios.
8. **Las pensiones son un agregado.** No hay cohortes, carreras, mínimos ni pilar complementario, y la estructura por edades de la población es una aproximación propia.
9. **Los datos de partida tienen huecos.** Heredan las marcas "(no verificado)" del diagnóstico (gasto total de 2025, déficit estructural), y las magnitudes de la literatura se citan de memoria.
10. **No es una previsión.** 2026 parte de una economía sin brecha de producción y sin el shock energético más allá del déficit; los primeros años no deben leerse como coyuntura.

## 9. Escenario E: la versión maximalista

**Qué supone.** Los parámetros DEC proceden de `docs/05-version-maximalista/00-parametros-de-diseno.md`; el resto son supuestos (SUP). E mantiene las reformas de oferta, las políticas activas y las pensiones de B, y añade:

- **Trabajo (2029, sin puertas).** Despido libre, convenio de empresa y salario mínimo congelado restan 0,5 pp de paro estructural (SUP; rango de +0,5 a −1,5, porque la evidencia es mixta), no tocan la PTF y cuestan 0,5 pp de brecha al entrar, además de los 0,3 de B. La rebaja de 5 puntos de cotización (1,75 pp de PIB, DEC) usa el canal de cuña de B (LIT, Bassanini y Duval): −0,9 pp de paro. Una elasticidad de demanda de trabajo de −0,3 con traslado a salarios del 50 % daría −0,5.
- **Gasto (DEC).** El resto baja 3,0 pp en 2027-2034. La financiación pública de sanidad baja 0,2 pp al año (2029-2038) y la de educación 0,1 (2029-2036); el 95 % pasa a primas, copagos y matrículas.
- **Pensiones y activos (DEC).** Cuatro puntos de cotización van a cuentas individuales (1,4 pp de ingresos al año desde 2035), sin ahorro de gasto antes de 2040. Las ventas de activos (2,4 pp) bajan deuda.
- **Empleo público.** De 3.071.725 efectivos (EPSAP, enero de 2026) se traspasan 722.629 de instituciones sanitarias y 707.723 de docencia no universitaria (EPSAP según fuentes secundarias, sin cotejar). No se repone la gestión administrativa: 16 % de la plantilla (SUP, 10-22 %), y un 4 % de jubilaciones anuales (SUP, 3-5,5 %). En A-D la plantilla es constante por convención.
- **IA.** Sin efecto sobre la PTF agregada.

| Indicador | B 2030 | E 2030 | B 2035 | E 2035 | B 2040 | E 2040 |
|---|---|---|---|---|---|---|
| Gasto público total (% PIB) | 45,7 | 45,5 | 43,9 | 41,8 | 44,2 | 41,0 |
| Sanidad y educación públicas (% PIB) | 11,0 | 10,6 | 11,2 | 9,4 | 11,5 | 8,9 |
| Pagos privados obligatorios (% PIB) | 0,0 | 0,6 | 0,0 | 2,0 | 0,0 | 2,7 |
| Gasto público más pagos obligatorios (% PIB) | 45,7 | 46,1 | 43,9 | 43,8 | 44,2 | 43,7 |
| Efectivos públicos (miles) | 3.072 | 2.421 | 3.072 | 1.464 | 3.072 | 1.366 |
| Tasa de paro (%) | 10,0 | 10,6 | 7,8 | 8,0 | 7,0 | 6,8 |
| PIB real per cápita (2025 = 100) | 104,9 | 103,6 | 114,1 | 112,8 | 120,5 | 119,6 |
| Salario real neto (2025 = 100) | 104,1 | 104,1 | 113,1 | 115,0 | 119,4 | 121,5 |
| Renta neta tras pagos obligatorios (2025 = 100) | 104,1 | 102,5 | 113,1 | 109,0 | 119,4 | 113,0 |
| Saldo público (% PIB) | -3,1 | -3,5 | -1,9 | -2,0 | -2,0 | -1,0 |
| Deuda pública (% PIB) | 96,5 | 97,2 | 89,2 | 89,2 | 83,9 | 80,2 |
| Saldo de las cuentas individuales (% PIB) | 0,0 | 0,7 | 0,0 | 5,6 | 0,0 | 12,8 |

Paro máximo: E, 10,6 % en 2030; B, 10,3 % en 2026 (dato de partida) y 10,2 % desde 2027.

**Lectura franca.**

1. **El gasto público baja; lo que pagan los hogares por los mismos servicios, casi no.** E queda 3,2 pp por debajo de B en 2040 y 2,7 de ellos (el 84 %) son pagos obligatorios. La suma baja medio punto. El gasto sanitario público acaba en el 5,5 % y no en el 4,6 % del objetivo, porque el envejecimiento sigue sumando 0,065 pp al año.
2. **La rebaja de cuña no es una ganancia neta.** El salario neto de E supera al de B en 2 puntos; después de primas, copagos y matrículas queda 6 por debajo (113,0 frente a 119,4; de 110 a 116 según cuánto recaiga en los asalariados). Las cuentas individuales no lo compensan: sustituyen derechos del reparto.
3. **Recortar ingresos empeora el déficit durante siete años.** E renuncia a 3,15 pp de ingresos. Su déficit supera al de B de 2029 a 2035 (3,5 % en 2030) y es menor desde 2036. De los 3,7 puntos de deuda que le saca a B en 2040, 2,4 son ventas de activos. Sin la rebaja de cotizaciones habría superávit (0,7 %) y deuda del 70 %, con un paro del 8,0 %.
4. **La transición es más dura que la de B y más suave que la de D.** La brecha baja al −2,0 % y pasa ocho años (2029-2036) por debajo del −1 %, umbral de la cláusula cíclica de la regla de gasto, que el modelo no aplica. El PIB perdido suma 14,5 puntos-año frente a 6,4 en B.
5. **¿Cuándo supera E a B?** En salario neto, desde 2031; en deuda, desde 2035; en saldo, desde 2036; en paro, desde 2037. En PIB per cápita no lo supera antes de 2040 (−0,8 %): la histéresis de un ajuste mayor (2,1 % del potencial frente a 0,9 %) absorbe la ganancia estructural. Tampoco en renta neta tras pagos.
6. **La plantilla cae un 56 % y cinco de cada seis bajas son un cambio de empleador, que no ahorra gasto.** La no reposición (275.000 efectivos) vale 0,8 pp de PIB en 2040. Lo acumulado hasta 2034 (0,5 pp) es una forma de cumplir el recorte de 3,0 pp, no un ahorro adicional; lo posterior no se cuenta porque no está certificado. Solo es ahorro si la automatización sostiene el servicio.

**Sensibilidad.** E supera a B en PIB per cápita en tres casos: histéresis nula (122,3 frente a 121,7), un punto de PTF atribuible a la reforma laboral (121,0) o ganancias de la IA exclusivas de E (+0,3 pp anuales: 124,5; aplicadas también a B, este llega a 125,4). El efecto laboral adicional mueve el paro de 2040 entre el 5,9 % y el 7,8 %. Con multiplicador e histéresis altos y prima de riesgo no lineal, E acaba peor que B: PIB per cápita de 113,1 frente a 117,7 y deuda del 98 % frente al 91 %. La prima no lineal (opción desactivada por defecto, de forma supuesta) añade sola 4 pb a E y 39 a D; en el caso adverso, 27 a E y 207 a D, por encima del freno de 200 pb.

**Qué no puede decir el modelo sobre E.** No representa la calidad de los servicios traspasados ni la selección de riesgos entre aseguradoras. No hay distribución: el pago obligatorio es una media y el subsidio por renta no está calibrado. No estima la probabilidad de la reforma constitucional, que se supone aprobada. No mide la capacidad real de la IA. Tampoco aplica los frenos automáticos, y en B y D los recortes sanitarios no generan pagos privados, lo que les favorece si el servicio se resiente.

## 10. Archivos

- Series anuales: `resultados/escenario_A.csv` a `escenario_E.csv`; resumen en `resultados/resumen_2030_2035_2040.csv`; sensibilidad en `resultados/sensibilidad.csv`; tablas completas, incluidas las de E, en `resultados/tablas.md`.
- Gráficos: `resultados/01_pib_per_capita.png`, `02_productividad.png`, `03_paro_y_empleo.png`, `04_deuda_publica.png`, `05_saldo_publico.png`, `06_pensiones.png`, `07_salario_real.png`, `08_vivienda.png`, `09_sensibilidad.png`, `10_gasto_publico_y_pagos.png`, `11_renta_tras_pagos.png` y `12_efectivos_y_cuentas.png`. Los ocho primeros y el 10 y el 11 incluyen E; el 12 compara B y E.
- Instrucciones de ejecución: `README.md`.
