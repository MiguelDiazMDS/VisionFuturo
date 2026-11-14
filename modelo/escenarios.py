#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
España Dinámica 2040 · Modelo de escenarios 2026-2040
=====================================================

Modelo anual, determinista y deliberadamente sencillo. NO es un DSGE ni un
modelo de equilibrio general: es una contabilidad encadenada con cinco módulos
(crecimiento, fiscal, pensiones, vivienda, salarios) cuyos parámetros están a
la vista. Sirve para comprobar la coherencia aritmética de un programa de
reformas y para ver qué supuestos mueven los resultados; no predice.

Convenciones
------------
* Año base: 2025 (último año "estructural" completo; 2026 está contaminado por
  el shock energético, véase docs/01-investigacion/01-diagnostico-estructural.md §0).
* Todo en términos reales (euros de 2025) salvo la dinámica de deuda, que usa
  crecimiento nominal (real + deflactor).
* Etiquetas de procedencia de cada parámetro:
    [DIAG n]  indicador n de la tabla §10 del diagnóstico (línea base).
    [LIT]     magnitud tomada de la literatura. Las cifras se citan de memoria,
              como orden de magnitud; hay que cotejar la cifra exacta en la
              fuente antes de publicarla.
    [SUP]     supuesto del proyecto (sin fuente directa, o interpolación propia).
    [CAL]     calibrado para reproducir un dato de partida.
    [NV]      el dato de origen figura como "(no verificado)" en el diagnóstico.

Uso:  python3 modelo/escenarios.py
Salidas en modelo/resultados/ (CSV, PNG y tablas en Markdown).
"""
from __future__ import annotations

import copy
import math
import os

import numpy as np
import pandas as pd

AÑO_BASE = 2025
AÑO_FIN = 2040
AÑOS = list(range(AÑO_BASE + 1, AÑO_FIN + 1))
DIR = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(DIR, "resultados")

# ---------------------------------------------------------------------------
# 1. PARÁMETROS ESTRUCTURALES (comunes a todos los escenarios)
# ---------------------------------------------------------------------------
P0 = dict(
    # ---- Demografía ------------------------------------------------------
    pob_2025=49.36,          # millones a 1/7/2025 = 49,80 (1/7/2026) - 0,444 [DIAG 32]
    inc_pob_2026=0.444,      # aumento anual observado [DIAG 32]
    inc_pob_2040=0.150,      # [SUP] el aumento se frena linealmente; suma ≈ +4,4 M en
                             # 15 años, coherente con "más de 4 millones" (INE, Proy. 2026-2076)
    saldo_vegetativo=-0.125,  # millones/año (−122.167 en 2025, INE) [DIAG §6]
    pob65_2025=10.29,        # 21,1 % de 49,80 M en 2026 = 10,51 M [DIAG 33]; 2025 por diferencia
    pob65_2040=13.60,        # [SUP][NV] aproximación propia (jubilación del baby boom
                             # 1958-1977); el desglose por edad de la proyección INE
                             # 2026-2076 no se pudo extraer
    pob_menor16_2025=6.90,   # [SUP] ≈14 % de la población
    pob_menor16_2040=6.50,   # [SUP]
    factor_migracion=1.0,    # sensibilidad: escala el saldo migratorio
    # ---- Mercado de trabajo ---------------------------------------------
    ocupados_2025=22.1,      # millones, media anual [SUP] (22,85 M en 3T 2026 [DIAG 9],
                             # creciendo ≈2 % anual)
    paro_2025=10.5,          # % media anual 2025 [SUP]; 10,18 % en 3T 2026 [DIAG 7]
    paro_estr_2040_base=9.5,  # [SUP] sin reformas el paro estructural baja 1 pp por la
                             # inercia de la reforma de 2021. El Ageing Report supone
                             # convergencia a ≈7 %: aquí NO se regala esa mejora a la base.
    part_tendencia=0.10,     # pp/año hasta 2035 [SUP] (efecto cohorte y reforma de 2011)
    horas_2025=1632.0,       # horas anuales por ocupado (OCDE, ≈1.630) [LIT]
    horas_tendencia=-0.15,   # % anual [SUP]
    okun=0.5,                # pp de paro por punto de brecha de producción [LIT]
                             # (en España se estiman valores de 0,5 a 0,9)
    # ---- Productividad ---------------------------------------------------
    pib_2025=1687.0,         # miles de M€: 40.314 M€ de intereses = 2,39 % del PIB [DIAG 37]
    ptf_base=0.5,            # % anual [SUP] entre el ≈0 de 2000-2019 y el ritmo de
                             # 2013-2025 (BdE IA 2025 [DIAG 5]). Sensibilidad 0,2-0,8.
    alfa=0.35,               # participación del capital [LIT]
    vel_capital=0.12,        # fracción anual del ajuste del capital a su nivel de largo plazo [SUP]
    composicion=0.15,        # caída de productividad media (%) por cada 1 % de empleo
                             # adicional debido a reformas (efecto composición) [LIT, OCDE]
    # ---- Ciclo, multiplicador e histéresis -------------------------------
    multiplicador=0.8,       # multiplicador del gasto con brecha cerrada [LIT]: 0,5-1,0 por
                             # el lado del gasto (02-evidencia §8-9; Alesina et al. 2019)
    amplificacion_holgura=0.75,  # el multiplicador sube hasta ×1,75 con brecha ≤ −2 %
                             # [LIT] Auerbach-Gorodnichenko 2012; Blanchard-Leigh 2013
    peso_transferencias=0.7,  # multiplicador relativo de pensiones [SUP]
    peso_impuestos=0.6,      # multiplicador relativo de la rebaja de cuña [SUP]
    persistencia_brecha=0.6,  # la brecha se cierra un 40 % cada año [SUP]
    histeresis=0.15,         # % de PIB potencial perdido de forma permanente por cada
                             # punto-año de brecha negativa [LIT] DeLong-Summers 2012
                             # (0,05-0,2); Fatás-Summers 2018 apuntan a más. Sens. 0-0,30.
    elast_viv_ciclo=4.0,     # % de viviendas iniciadas por punto de brecha [SUP]
    # ---- Fiscal (porcentaje del PIB, 2025) --------------------------------
    ingresos_2025=42.6,      # = gasto 45,0 − déficit 2,4 [DIAG 34-35] [NV: gasto 2025]
    pensiones_2025=12.9,     # [DIAG 24]
    sanidad_2025=6.5,        # sanidad y cuidados (03-crítica §1.1) [NV al decimal]
    educacion_2025=4.2,      # (03-crítica §1.1)
    resto_2025=19.0,         # residuo: 45,0 − 12,9 − 6,5 − 4,2 − 2,4 [CAL]
    deuda_2025=100.7,        # % PIB a cierre de 2025 (03-crítica §1.1); 101,4 en 2T 2026 [DIAG 36]
    tipo_implicito_2025=2.4,  # % [DIAG 37] y AIReF (coste medio de la cartera)
    tipo_nuevo=3.25,         # % nominal de las nuevas emisiones con deuda del 100 %
                             # (AIReF ≈3 %, [DIAG §7.1]) [SUP]. Sensibilidad ±1 pp.
    prima_por_deuda=0.025,   # pp de tipo por cada pp de deuda sobre el 100 % [LIT]
                             # (2-4 pb por punto en la literatura; con el TPI, menos)
    vida_media_deuda=7.5,    # años [LIT, Tesoro ≈8]
    deflactor={2026: 3.0, 2027: 2.3},  # % [SUP]; 2,0 después
    deflactor_lp=2.0,
    deriva_sanidad=0.065,    # pp de PIB al año por envejecimiento [LIT]: gasto ligado a la
                             # edad +5,2 pp en 2022-2050, de ellos +3,4 pensiones (03-crítica §1.1)
    defensa_extra=0.3,       # pp de PIB adicionales en 2030 [SUP]
    medidas_energia_2026=0.4,  # pp, temporales: déficit 2026 del 2,8 % según AIReF [DIAG 35]
    deriva_ingresos=0.04,    # pp de PIB al año: MEI hasta 1,2 %, destope y progresividad
                             # en frío [DIAG 28] [SUP]; AIReF cifra las medidas de ingreso de
                             # la reforma de 2023 en ≈1 pp de PIB de media en 2022-2050
    prest_desempleo=0.12,    # pp de PIB de gasto por pp de tasa de paro [SUP]
    base_laboral=0.47,       # remuneración de asalariados / PIB [LIT, CNE]: convierte
                             # puntos de PIB de recaudación en puntos de cuña
    # ---- Pensiones -------------------------------------------------------
    n_pensiones_2025=11.5,   # millones [SUP]: 10,5 M SS [DIAG §5.1] + Clases Pasivas + no contributivas
    mortalidad_pens=0.042,   # bajas anuales sobre el stock [SUP]
    rel_baja_media=0.84,     # pensión de quien causa baja / pensión media [SUP]
    rel_alta_media=1.08,     # pensión de las nuevas altas / pensión media en 2025 [SUP]
    deriva_cobertura=-0.25,  # % anual hasta 2035: edad legal de 67 en 2027 y endurecimiento
                             # de la anticipada [SUP]
    años_base_reguladora=20.0,  # memoria salarial de las nuevas pensiones [SUP]
    ahorro_por_año_edad=0.03,  # reducción del nº de pensiones por año de retraso de la edad
                             # efectiva, neta de la mayor pensión devengada [LIT, Ageing Report]
    part_por_año_edad=0.6,   # pp de tasa de actividad por año de retraso [SUP]
    # ---- Vivienda --------------------------------------------------------
    parque_2025=27.0,        # millones de viviendas (Censo 2021: 26,6 M) [LIT]
    hogares_2025=19.75,      # millones [DIAG §1.2: 19,87 M a 1/7/2026]
    deficit_viv_2025=0.75,   # millones [DIAG 21]
    iniciadas=(0.128, 0.139),  # visados 2024 y 2025 [DIAG 22]
    iniciadas_base_lp=0.150,  # [SUP] sin reformas la obra nueva sube a 150.000 en 2028 y se estanca
    tasa_finalizacion=0.95,  # [SUP]
    hogares_2026_31=0.205,   # creación neta anual, INE Proy. hogares 2026-2041 [DIAG §1.2]
    hogares_2032_40=0.116,   # ídem: (2,18 − 1,02 M) / 10 años (estimación propia)
    precio_renta_2025=7.98,  # años de renta bruta del hogar [DIAG 19]
    salto_precio_2026=6.0,   # % [SUP]: IPV +12 % frente a ≈+6 % de la renta nominal [DIAG 18]
    elast_precio_viv=1.75,   # % de precio real por cada 1 % del parque que falta [LIT]:
                             # 1,5-2 en estudios de Reino Unido (OBR/Auterson 2014) y
                             # revisiones de la OCDE. Sensibilidad 1,0-2,5.
    # ---- Salarios --------------------------------------------------------
    salario_2025=30700.0,    # € brutos anuales: 29.540 € en 2024 [DIAG 12] × 1,038 nominal
    cuña_2025=41.4,          # % del coste laboral [DIAG 14]
    delta_part_salarial=0.0,  # pp de variación de la participación salarial en 2040.
                             # 0 por defecto; la crítica del monopsonio (03-crítica §2.1)
                             # se explora en la sensibilidad con −1,5 pp.
    # ---- Convergencia (indicativo) --------------------------------------
    pib_pc_ue_2025=92.0,     # UE27 = 100 en PPA [DIAG 2]
    crec_pc_ue=1.2,          # % anual del PIB per cápita de la UE [SUP]
)

# ---------------------------------------------------------------------------
# 2. ESCENARIOS: políticas y tamaño de los efectos
# ---------------------------------------------------------------------------
# Efectos de largo plazo de cada bloque de reformas en el escenario central.
# [LIT] Órdenes de magnitud:
#  * Mercados de productos, unidad de mercado, umbrales por tamaño y licencias:
#    Égert y Gal (2017, OCDE, "The quantification of structural reforms") estiman
#    que una reforma típica de regulación de productos eleva el PIB per cápita
#    ≈0,7 % a 5 años y ≈2 % a largo plazo; el FMI (WEO abril 2016, cap. 3) da
#    ≈1,5 % a 4 años en los sectores reformados; Varga e in 't Veld (2014, CE)
#    obtienen varios puntos de PIB a 10 años si España cierra la mitad de la
#    brecha con los mejores. Central: +3 % de PTF (paquete de varias reformas);
#    rango 1-5 %.
#  * Laboral (dualidad): efecto sobre la PTF pequeño e incierto (03-crítica §2.2);
#    central +0,75 %. Sobre el paro estructural: Bassanini y Duval (2006/2009) y
#    Égert-Gal dan de 0 a −2 pp para paquetes de protección del empleo y
#    negociación; Hartz: de 0 a −1,4 pp (02-evidencia §8). Central −1,5 pp.
#    Coste a corto plazo: FMI WEO 2016 y Duval-Furceri (2018): contractiva con
#    holgura. Central −0,3 pp de brecha el año de entrada.
#  * Políticas activas: Égert-Gal y metaanálisis de Card, Kluve y Weber (2018):
#    efectos positivos a 2-3 años. Central −0,6 pp de paro con +0,6 pp de PIB de gasto.
#  * Función pública y competencia en servicios: evidencia causal escasa
#    (02-evidencia §5-6). Central +0,5 % de PTF; rango 0-1 %.
#  * Cuña fiscal: Bassanini-Duval: −10 pp de cuña ≈ −2,8 pp de paro. Aquí 1 pp de
#    PIB (≈2,1 pp de cuña) → −0,5 pp de paro.
REFORMAS_CENTRAL = [
    # nombre, año de inicio, años hasta la mitad del efecto, PTF (%), paro (pp), coste c/p (pp de brecha)
    dict(nombre="mercados_y_unidad", inicio=2027, mitad=6, ptf=3.0, paro=0.0, coste_cp=0.0),
    dict(nombre="politicas_activas", inicio=2027, mitad=4, ptf=0.0, paro=-0.6, coste_cp=0.0),
    dict(nombre="funcion_publica_servicios", inicio=2028, mitad=7, ptf=0.5, paro=0.0, coste_cp=0.0),
    dict(nombre="laboral_dualidad", inicio=2029, mitad=5, ptf=0.75, paro=-1.5, coste_cp=0.3),
]
PARO_POR_PP_CUÑA_PIB = -0.5   # pp de paro estructural por pp de PIB de rebaja de cuña (con 2 años de retraso)


def _serie(valores: dict) -> dict:
    """Rellena con ceros los años sin medida."""
    return {a: float(valores.get(a, 0.0)) for a in AÑOS}


def _tramo(ini, fin, valor):
    return {a: valor for a in range(ini, fin + 1)}


ESCENARIOS = {
    # (A) Inercial: sin reformas ni ajuste discrecional.
    "A": dict(
        nombre="A · Inercial",
        reformas=[], escala_ptf=0.0, escala_empleo=0.0,
        recorte_resto=_serie({}), recorte_sanidad=_serie({}), recorte_educacion=_serie({}),
        gasto_activas=_serie({}), rebaja_cuña=_serie({}),
        pens_edad=0.0, pens_edad_ini=2028, pens_edad_años=10,
        pens_fs=0.0, pens_fs_ini=2029, pens_brecha_index=_serie({}),
        viv_extra=0.0, viv_ini=2027, viv_mitad=4,
    ),
    # (B) Central: ajuste gradual (≤0,5 pp al año), transición antes que flexibilidad.
    "B": dict(
        nombre="B · España Dinámica (central)",
        reformas=REFORMAS_CENTRAL, escala_ptf=1.0, escala_empleo=1.0,
        # Gasto [SUP de política]: −0,3 pp de PIB al año en "resto" durante 2027-2034
        # (2,4 pp en total). Es una decisión de política, no un resultado: los
        # 'spending reviews' identifican menos (03-crítica §1.1), de modo que
        # implica recortes reales de programas y no solo eficiencia.
        recorte_resto=_serie(_tramo(2027, 2034, 0.30)),
        recorte_sanidad=_serie(_tramo(2029, 2032, 0.05)),
        recorte_educacion=_serie({}),
        gasto_activas=_serie({2027: 0.30, 2028: 0.30}),   # +0,6 pp permanentes (02-evidencia §9.4)
        rebaja_cuña=_serie(_tramo(2030, 2034, 0.20)),     # 1 pp de PIB ≈ −2,1 pp de cuña
        # Pensiones [SUP de política]: edad efectiva +1,5 años en 10 años; ajuste
        # actuarial de las nuevas pensiones de −0,5 % por cohorte (el factor de
        # sostenibilidad de 2013 equivalía a ≈−0,5 % anual); pensiones causadas
        # indexadas al IPC salvo las altas (IPC − 0,5), ≈0,25 pp de media, 2028-2037.
        pens_edad=1.5, pens_edad_ini=2028, pens_edad_años=10,
        pens_fs=0.5, pens_fs_ini=2029,
        pens_brecha_index=_serie(_tramo(2028, 2037, 0.25)),
        # Vivienda: +70.000 viviendas iniciadas al año a largo plazo (de ≈150.000 a
        # ≈220.000). [LIT] Auckland: +4 % del parque en 5 años en el área rezonificada
        # (02-evidencia §4.1); a escala nacional y con escasez de mano de obra en la
        # construcción (03-crítica §3.2) se toma bastante menos. Rango 25.000-110.000.
        viv_extra=0.070, viv_ini=2027, viv_mitad=4,
    ),
}
# (C) Pesimista: LAS MISMAS políticas que B, pero efectos en el extremo bajo de la evidencia.
ESCENARIOS["C"] = copy.deepcopy(ESCENARIOS["B"])
ESCENARIOS["C"].update(nombre="C · Reformas, efectos bajos", escala_ptf=0.3, escala_empleo=0.3,
                       viv_extra=0.025)
# (D) Choque: mismas reformas y mismos efectos de largo plazo que B, pero todo a la
# vez en 2027, ajuste de 1,2 pp de PIB al año durante tres años (incluidas sanidad y
# educación), cuasi congelación de pensiones y políticas activas financiadas después.
ESCENARIOS["D"] = copy.deepcopy(ESCENARIOS["B"])
ESCENARIOS["D"].update(
    nombre="D · Terapia de choque",
    reformas=[dict(r, inicio=2027) for r in REFORMAS_CENTRAL if r["nombre"] != "politicas_activas"]
    + [dict(REFORMAS_CENTRAL[1], inicio=2030)],
    recorte_resto=_serie(_tramo(2027, 2029, 1.00)),
    recorte_sanidad=_serie(_tramo(2027, 2029, 0.10)),
    recorte_educacion=_serie(_tramo(2027, 2029, 0.10)),
    gasto_activas=_serie({2030: 0.30, 2031: 0.30}),
    pens_edad_ini=2027, pens_fs_ini=2027,
    pens_brecha_index=_serie({**_tramo(2027, 2030, 1.00), **_tramo(2031, 2037, 0.25)}),
)

COLORES = {"A": "#52514e", "B": "#2a78d6", "C": "#1baf7a", "D": "#eb6834"}
ESTILOS = {"A": (0, (4, 2)), "B": "solid", "C": "solid", "D": "solid"}


# ---------------------------------------------------------------------------
# 3. FUNCIONES AUXILIARES
# ---------------------------------------------------------------------------
def perfil(año: int, inicio: int, mitad: float, pendiente: float = 2.0) -> float:
    """Perfil logístico de entrada de una reforma (0 antes de `inicio`, →1 a largo
    plazo, 50 % a los `mitad` años). Normalizado para valer 0 en el año de inicio."""
    if año <= inicio:
        return 0.0
    f = lambda t: 1.0 / (1.0 + math.exp(-(t - inicio - mitad) / pendiente))
    return (f(año) - f(inicio)) / (1.0 - f(inicio))


def lineal(año, a0, v0, a1, v1):
    if año <= a0:
        return v0
    if año >= a1:
        return v1
    return v0 + (v1 - v0) * (año - a0) / (a1 - a0)


def demografia(P: dict) -> pd.DataFrame:
    """Población total, 65+, <16 y en edad de trabajar (16-64), en millones."""
    filas, pob = [], P["pob_2025"]
    extra_acum = 0.0
    for a in [AÑO_BASE] + AÑOS:
        if a > AÑO_BASE:
            inc = lineal(a, 2026, P["inc_pob_2026"], 2040, P["inc_pob_2040"])
            mig = inc - P["saldo_vegetativo"]
            extra = mig * (P["factor_migracion"] - 1.0)
            extra_acum += extra
            pob += inc + extra
        p65 = lineal(a, 2025, P["pob65_2025"], 2040, P["pob65_2040"]) + 0.05 * extra_acum
        p16 = lineal(a, 2025, P["pob_menor16_2025"], 2040, P["pob_menor16_2040"]) + 0.15 * extra_acum
        hog = P["hogares_2026_31"] if a <= 2031 else P["hogares_2032_40"]
        if a > AÑO_BASE:  # un hogar más por cada 2,5 inmigrantes adicionales [SUP]
            hog += (lineal(a, 2026, P["inc_pob_2026"], 2040, P["inc_pob_2040"])
                    - P["saldo_vegetativo"]) * (P["factor_migracion"] - 1.0) / 2.5
        filas.append(dict(año=a, poblacion=pob, pob65=p65, pet=pob - p65 - p16, hogares_nuevos=hog))
    return pd.DataFrame(filas).set_index("año")


# ---------------------------------------------------------------------------
# 4. SIMULACIÓN
# ---------------------------------------------------------------------------
def simular(esc: dict, P: dict) -> pd.DataFrame:
    dem = demografia(P)
    a_ = P["alfa"]

    # ---- Estado inicial (2025) ----
    pet0 = dem.loc[AÑO_BASE, "pet"]
    u0 = P["paro_2025"]
    part0 = P["ocupados_2025"] / (1 - u0 / 100) / pet0           # [CAL]
    prod0 = P["pib_2025"] * 1e9 / (P["ocupados_2025"] * 1e6 * P["horas_2025"])  # €/hora
    pib_pc0 = P["pib_2025"] * 1e3 / P["pob_2025"]
    cob0 = P["n_pensiones_2025"] / P["pob65_2025"]
    pens_media0 = P["pensiones_2025"] / 100 * P["pib_2025"] * 1e3 / P["n_pensiones_2025"]  # €/año
    y_por_ocupado0 = P["pib_2025"] / P["ocupados_2025"]

    est = dict(
        brecha=0.0, cicatriz=0.0, cap=0.0, k_emp=0.0, indice_base=1.0,
        deuda=P["deuda_2025"], tipo=P["tipo_implicito_2025"], pib=P["pib_2025"],
        n=P["n_pensiones_2025"], pm=pens_media0, n_sr=P["n_pensiones_2025"], pm_sr=pens_media0,
        w_reg=1.0, medidas=0.0, ahorro_pens=0.0, cuña_acum=0.0,
        rec_resto=0.0, rec_san=0.0, rec_edu=0.0, activas=0.0, ajuste_cuña=[],
        deficit_viv=P["deficit_viv_2025"], parque=P["parque_2025"],
        ini_1=P["iniciadas"][1], ini_2=P["iniciadas"][0], tension0=None, salto=1.0,
    )
    filas = []

    for a in AÑOS:
        d = dem.loc[a]
        t = a - AÑO_BASE

        # ============ (1) OFERTA: PIB potencial ============
        # Efectos de las reformas con su perfil de entrada
        ptf_ref = sum(r["ptf"] * perfil(a, r["inicio"], r["mitad"]) for r in esc["reformas"]) * esc["escala_ptf"]
        du_ref = sum(r["paro"] * perfil(a, r["inicio"], r["mitad"]) for r in esc["reformas"])
        cuña_hace2 = est["ajuste_cuña"][-2] if len(est["ajuste_cuña"]) >= 2 else 0.0
        du_ref = (du_ref + PARO_POR_PP_CUÑA_PIB * cuña_hace2) * esc["escala_empleo"]
        fase_edad = min(1.0, max(0.0, (a - esc["pens_edad_ini"] + 1) / esc["pens_edad_años"]))
        # El efecto de la edad sobre la actividad es más mecánico: se rebaja menos en C
        esc_edad = 0.5 + 0.5 * min(1.0, esc["escala_empleo"]) if esc["pens_edad"] else 0.0
        dpart_ref = P["part_por_año_edad"] * esc["pens_edad"] * fase_edad * esc_edad

        u_base = lineal(a, 2025, u0, 2035, P["paro_estr_2040_base"])
        part_base = part0 * 100 + P["part_tendencia"] * min(t, 10)
        # La histéresis se reparte: mitad vía paro estructural, mitad vía productividad
        u_estr = u_base + du_ref + 0.5 * est["cicatriz"]
        part = part_base + dpart_ref
        empleo_pot = d["pet"] * part / 100 * (1 - u_estr / 100)
        empleo_sin_ref = d["pet"] * part_base / 100 * (1 - (u_base + 0.5 * est["cicatriz"]) / 100)
        e_ref = (empleo_pot / empleo_sin_ref - 1) * 100            # % de empleo debido a reformas

        # Capital: se ajusta poco a poco a la PTF (K/Y constante a largo plazo) y al empleo
        est["cap"] += P["vel_capital"] * (a_ / (1 - a_) * ptf_ref - est["cap"])
        est["k_emp"] += 0.15 * (e_ref - est["k_emp"])
        dilucion = -a_ * (e_ref - est["k_emp"]) - P["composicion"] * e_ref

        est["indice_base"] *= 1 + P["ptf_base"] / (1 - a_) / 100
        prod_pot = (prod0 * est["indice_base"] * (1 + ptf_ref / 100) * (1 + est["cap"] / 100)
                    * (1 + dilucion / 100) * (1 - 0.5 * est["cicatriz"] / 100))
        horas = P["horas_2025"] * (1 + P["horas_tendencia"] / 100) ** t
        pib_pot = prod_pot * horas * empleo_pot * 1e6 / 1e9         # miles de M€ de 2025

        # ============ (2) PENSIONES (en euros reales) ============
        cob_base = cob0 * (1 + P["deriva_cobertura"] / 100) ** min(t, 10)
        n_sr = cob_base * d["pob65"]
        n = n_sr * (1 - P["ahorro_por_año_edad"] * esc["pens_edad"] * fase_edad)
        nueva_sr = P["rel_alta_media"] * pens_media0 * est["w_reg"]
        años_fs = max(0, a - esc["pens_fs_ini"] + 1)
        nueva = nueva_sr * (1 - esc["pens_fs"] / 100 * años_fs)

        def _stock(n_prev, pm_prev, n_act, nueva_p, brecha_idx):
            bajas = P["mortalidad_pens"] * n_prev
            altas = max(0.0, n_act - n_prev + bajas)
            masa = (pm_prev * (1 - brecha_idx / 100) * (n_prev - bajas * P["rel_baja_media"])
                    + altas * nueva_p)
            return masa / n_act

        pm = _stock(est["n"], est["pm"], n, nueva, esc["pens_brecha_index"][a])
        pm_sr = _stock(est["n_sr"], est["pm_sr"], n_sr, nueva_sr, 0.0)
        gasto_pens = n * pm / 1e3                                   # miles de M€
        ahorro_pens = (n_sr * pm_sr - n * pm) / 1e3 / pib_pot * 100  # pp del PIB potencial
        est.update(n=n, pm=pm, n_sr=n_sr, pm_sr=pm_sr)

        # ============ (3) DEMANDA: multiplicador, brecha e histéresis ============
        est["rec_resto"] += esc["recorte_resto"][a]
        est["rec_san"] += esc["recorte_sanidad"][a]
        est["rec_edu"] += esc["recorte_educacion"][a]
        est["activas"] += esc["gasto_activas"][a]
        est["cuña_acum"] += esc["rebaja_cuña"][a]
        est["ajuste_cuña"].append(est["cuña_acum"])
        holgura = min(1.0, max(0.0, -est["brecha"] / 2.0))          # 0 con brecha cerrada, 1 con ≤ −2 %
        amp = 1 + P["amplificacion_holgura"] * holgura
        impulso = (esc["recorte_resto"][a] + esc["recorte_sanidad"][a] + esc["recorte_educacion"][a]
                   - esc["gasto_activas"][a]
                   + P["peso_transferencias"] * (ahorro_pens - est["ahorro_pens"])
                   - P["peso_impuestos"] * esc["rebaja_cuña"][a])
        coste_ref = sum(r["coste_cp"] * (1.0 if a == r["inicio"] else 0.5 if a == r["inicio"] + 1 else 0.0)
                        for r in esc["reformas"])
        brecha = (P["persistencia_brecha"] * est["brecha"]
                  - P["multiplicador"] * amp * impulso - amp * coste_ref)
        est["ahorro_pens"] = ahorro_pens
        cicatriz_previa = est["cicatriz"]
        est["cicatriz"] += P["histeresis"] * max(0.0, -brecha)
        est["brecha"] = brecha

        pib = pib_pot * (1 + brecha / 100)
        u = u_estr - P["okun"] * brecha
        empleo = d["pet"] * part / 100 * (1 - u / 100)
        crec = (pib / est["pib"] - 1) * 100

        # ============ (4) FISCAL (% del PIB efectivo) ============
        rel = pib_pot / pib      # el gasto se fija sobre el potencial: estabilizadores automáticos
        ingresos = P["ingresos_2025"] + P["deriva_ingresos"] * t - est["cuña_acum"]
        g_pens = gasto_pens / pib * 100
        g_san = (P["sanidad_2025"] + P["deriva_sanidad"] * t - est["rec_san"]) * rel
        g_edu = (P["educacion_2025"] - est["rec_edu"]) * rel
        g_resto = ((P["resto_2025"] + lineal(a, 2025, 0, 2030, P["defensa_extra"])
                    + (P["medidas_energia_2026"] if a == 2026 else 0.0)
                    - est["rec_resto"] + est["activas"]) * rel
                   + P["prest_desempleo"] * (u - u0))
        primario = ingresos - g_pens - g_san - g_edu - g_resto
        defl = P["deflactor"].get(a, P["deflactor_lp"])
        nominal = (1 + crec / 100) * (1 + defl / 100)
        tipo_marg = P["tipo_nuevo"] + P["prima_por_deuda"] * (est["deuda"] - 100)
        tipo = est["tipo"] + (tipo_marg - est["tipo"]) / P["vida_media_deuda"]
        intereses = tipo / 100 * est["deuda"] / nominal
        saldo = primario - intereses
        deuda = est["deuda"] / nominal - saldo
        est.update(deuda=deuda, tipo=tipo, pib=pib)

        # ============ (5) SALARIOS ============
        cuña = P["cuña_2025"] + (P["deriva_ingresos"] * t - est["cuña_acum"]) / P["base_laboral"]
        part_sal = 1 + P["delta_part_salarial"] / 100 / 0.5 * (ptf_ref / max(1e-9, sum(
            r["ptf"] for r in esc["reformas"]) * esc["escala_ptf"]) if esc["reformas"] and esc["escala_ptf"] else 0.0)
        # (la participación salarial ronda el 50 % del PIB: −1,5 pp ≈ −3 % del salario)
        coste_lab = (pib / empleo) / y_por_ocupado0 * part_sal      # índice 2025 = 1
        neto = coste_lab * (1 - cuña / 100) / (1 - P["cuña_2025"] / 100)
        est["w_reg"] += (coste_lab - est["w_reg"]) / P["años_base_reguladora"]

        # ============ (6) VIVIENDA ============
        ini_base = lineal(a, 2025, P["iniciadas"][1], 2028, P["iniciadas_base_lp"])
        iniciadas = ((ini_base + esc["viv_extra"] * perfil(a, esc["viv_ini"], esc["viv_mitad"]))
                     * (1 + P["elast_viv_ciclo"] * min(0.0, brecha) / 100))
        terminadas = P["tasa_finalizacion"] * 0.5 * (est["ini_1"] + est["ini_2"])
        est["deficit_viv"] += d["hogares_nuevos"] - terminadas
        est["parque"] += terminadas
        tension = est["deficit_viv"] / est["parque"] * 100           # % del parque
        if est["tension0"] is None:
            est["tension0"] = P["deficit_viv_2025"] / P["parque_2025"] * 100
        if a == 2026:
            est["salto"] = 1 + P["salto_precio_2026"] / 100
        precio_renta = (P["precio_renta_2025"] * est["salto"]
                        * math.exp(P["elast_precio_viv"] * (tension - est["tension0"]) / 100))
        est["ini_2"], est["ini_1"] = est["ini_1"], iniciadas

        pib_pc = pib * 1e3 / d["poblacion"]
        filas.append(dict(
            año=a, poblacion_M=d["poblacion"], pob_edad_trabajar_M=d["pet"], pob_65_M=d["pob65"],
            ocupados_M=empleo, tasa_paro=u, paro_estructural=u_estr,
            tasa_empleo_16_64=empleo / d["pet"] * 100, tasa_actividad=part,
            horas_por_ocupado=horas,
            pib_real_mmEUR=pib, pib_potencial_mmEUR=pib_pot, crecimiento_pib=crec, brecha_produccion=brecha,
            histeresis_acum_pct=cicatriz_previa,
            pib_pc_EUR2025=pib_pc * 1e3 / 1e3, pib_pc_indice=pib_pc / pib_pc0 * 100,
            pib_pc_ue100=P["pib_pc_ue_2025"] * (pib_pc / pib_pc0) / (1 + P["crec_pc_ue"] / 100) ** t,
            productividad_hora_EUR2025=pib * 1e9 / (empleo * 1e6 * horas),
            productividad_hora_indice=pib * 1e9 / (empleo * 1e6 * horas) / prod0 * 100,
            ptf_reformas_pct=ptf_ref,
            ingresos_pib=ingresos, gasto_pensiones_pib=g_pens, gasto_sanidad_pib=g_san,
            gasto_educacion_pib=g_edu, gasto_resto_pib=g_resto, intereses_pib=intereses,
            gasto_total_pib=g_pens + g_san + g_edu + g_resto + intereses,
            saldo_primario_pib=primario, saldo_publico_pib=saldo, deuda_pib=deuda, tipo_implicito=tipo,
            n_pensiones_M=n, pension_media_EUR2025=pm, ahorro_reforma_pensiones_pib=ahorro_pens,
            salario_bruto_real_indice=coste_lab * 100, salario_neto_real_indice=neto * 100,
            salario_bruto_EUR2025=P["salario_2025"] * coste_lab, cuña_fiscal=cuña,
            hogares_nuevos_miles=d["hogares_nuevos"] * 1e3, viviendas_iniciadas_miles=iniciadas * 1e3,
            viviendas_terminadas_miles=terminadas * 1e3, deficit_vivienda_miles=est["deficit_viv"] * 1e3,
            precio_renta_años=precio_renta,
            precio_real_vivienda_indice=precio_renta / P["precio_renta_2025"] * pib_pc / pib_pc0 * 100,
        ))
    return pd.DataFrame(filas).set_index("año")


def año_base_fila(P: dict) -> dict:
    """Valores de 2025 para que los gráficos arranquen en el dato observado."""
    dem = demografia(P).loc[AÑO_BASE]
    return dict(
        tasa_paro=P["paro_2025"], tasa_empleo_16_64=P["ocupados_2025"] / dem["pet"] * 100,
        pib_pc_indice=100.0, productividad_hora_indice=100.0, deuda_pib=P["deuda_2025"],
        gasto_pensiones_pib=P["pensiones_2025"], salario_neto_real_indice=100.0,
        salario_bruto_real_indice=100.0, deficit_vivienda_miles=P["deficit_viv_2025"] * 1e3,
        precio_renta_años=P["precio_renta_2025"], saldo_publico_pib=-2.4,
        viviendas_iniciadas_miles=P["iniciadas"][1] * 1e3,
    )


def correr_todo(P: dict | None = None, escenarios: dict | None = None) -> dict:
    P = P or P0
    escenarios = escenarios or ESCENARIOS
    return {k: simular(e, P) for k, e in escenarios.items()}


# ---------------------------------------------------------------------------
# 5. SENSIBILIDAD (un parámetro cada vez)
# ---------------------------------------------------------------------------
SENSIBILIDAD = [
    # etiqueta, tipo ('P' = parámetro estructural, 'E' = del escenario), clave, bajo, alto
    ("Efecto de las reformas en la PTF (×0,3 / ×1,6)", "E", "escala_ptf", 0.3, 1.6),
    ("Efecto de las reformas en el empleo (×0,3 / ×1,5)", "E", "escala_empleo", 0.3, 1.5),
    ("Multiplicador fiscal (0,4 / 1,3)", "P", "multiplicador", 0.4, 1.3),
    ("Histéresis (0 / 0,30)", "P", "histeresis", 0.0, 0.30),
    ("Tipo de las nuevas emisiones (2,25 % / 4,25 %)", "P", "tipo_nuevo", 2.25, 4.25),
    ("Crecimiento tendencial de la PTF (0,2 % / 0,8 %)", "P", "ptf_base", 0.2, 0.8),
    ("Saldo migratorio (×0,6 / ×1,3)", "P", "factor_migracion", 0.6, 1.3),
    ("Elasticidad precio-oferta de vivienda (1,0 / 2,5)", "P", "elast_precio_viv", 1.0, 2.5),
    ("Participación salarial (−1,5 pp / 0)", "P", "delta_part_salarial", -1.5, 0.0),
]
METRICAS = ["pib_pc_indice", "tasa_paro", "deuda_pib", "gasto_pensiones_pib",
            "salario_neto_real_indice", "precio_renta_años"]


def sensibilidad(claves=("B", "D")) -> pd.DataFrame:
    filas = []
    for etiqueta, tipo, clave, bajo, alto in SENSIBILIDAD:
        for nivel, valor in (("bajo", bajo), ("alto", alto)):
            P = copy.deepcopy(P0)
            escs = copy.deepcopy(ESCENARIOS)
            if tipo == "P":
                P[clave] = valor
            else:
                for k in claves:
                    escs[k][clave] = valor
            for k in ("A",) + tuple(claves):
                r = simular(escs[k], P).loc[AÑO_FIN]
                filas.append(dict(parametro=etiqueta, nivel=nivel, valor=valor, escenario=k,
                                  **{m: r[m] for m in METRICAS}))
    return pd.DataFrame(filas)


# ---------------------------------------------------------------------------
# 6. GRÁFICOS
# ---------------------------------------------------------------------------
TINTA, TINTA2, MUDO, REJILLA, EJE, FONDO = "#0b0b0b", "#52514e", "#898781", "#e1e0d9", "#c3c2b7", "#fcfcfb"


def _estilo():
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    plt.rcParams.update({
        "font.family": "DejaVu Sans", "font.size": 10.5, "figure.facecolor": FONDO,
        "axes.facecolor": FONDO, "savefig.facecolor": FONDO, "axes.edgecolor": EJE,
        "axes.labelcolor": TINTA2, "xtick.color": MUDO, "ytick.color": MUDO,
        "xtick.labelcolor": TINTA2, "ytick.labelcolor": TINTA2,
        "axes.grid": True, "grid.color": REJILLA, "grid.linewidth": 0.8,
        "axes.spines.top": False, "axes.spines.right": False, "axes.spines.left": False,
        "axes.axisbelow": True, "lines.solid_capstyle": "round", "lines.solid_joinstyle": "round",
    })
    return plt


def _lineas(ax, res, col, base0, titulo, unidad, dec=1, ref=None, etiquetas=True):
    """Una línea por escenario, con valor final rotulado y sin doble eje."""
    finales = []
    for k, df in res.items():
        x = [AÑO_BASE] + list(df.index)
        y = [base0[col]] + list(df[col])
        ax.plot(x, y, color=COLORES[k], lw=2.2 if k != "A" else 2.0, ls=ESTILOS[k],
                label=ESCENARIOS[k]["nombre"], zorder=3 if k != "A" else 2)
        ax.plot(x[-1], y[-1], "o", ms=7, color=COLORES[k], mec=FONDO, mew=1.6, zorder=4)
        finales.append([k, y[-1]])
    if ref is not None:
        ax.axhline(ref[0], color=EJE, lw=1.0, zorder=1)
        ax.text(AÑO_BASE + 0.1, ref[0], " " + ref[1], va="bottom", ha="left", fontsize=8.5, color=MUDO)
    if etiquetas:  # separa los rótulos finales que se pisan
        lo, hi = ax.get_ylim()
        sep = (hi - lo) * 0.058
        finales.sort(key=lambda f: f[1])
        pos = [f[1] for f in finales]
        for _ in range(50):
            for i in range(1, len(pos)):
                if pos[i] - pos[i - 1] < sep:
                    m = (pos[i] + pos[i - 1]) / 2
                    pos[i - 1], pos[i] = m - sep / 2, m + sep / 2
        for (k, v), p in zip(finales, pos):
            txt = f"{k}  {v:,.{dec}f}".replace(",", "@").replace(".", ",").replace("@", ".")
            ax.annotate(txt, (AÑO_FIN, p), xytext=(9, 0), textcoords="offset points",
                        va="center", ha="left", fontsize=9.5, color=TINTA)
    ax.set_title(titulo, loc="left", fontsize=12, color=TINTA, fontweight="bold", pad=22)
    ax.text(0, 1.035, unidad, transform=ax.transAxes, fontsize=9.5, color=TINTA2, va="bottom")
    ax.set_xlim(AÑO_BASE, AÑO_FIN)
    ax.set_xticks(range(AÑO_BASE, AÑO_FIN + 1, 5))
    ax.grid(axis="x", visible=False)
    ax.tick_params(length=0)


def _leyenda(fig, ax, ncol=4, y=0.0):
    h, l = ax.get_legend_handles_labels()
    fig.legend(h, l, loc="lower center", ncol=ncol, frameon=False, fontsize=9.5,
               labelcolor=TINTA2, bbox_to_anchor=(0.5, y), handlelength=2.4, columnspacing=1.8)


def graficos(res: dict, sens: pd.DataFrame):
    plt = _estilo()
    b0 = año_base_fila(P0)
    nota = "Escenarios condicionados a supuestos explícitos, no predicciones. Fuente: modelo/escenarios.py"

    def simple(col, titulo, unidad, archivo, dec=1, ref=None):
        fig, ax = plt.subplots(figsize=(9.2, 5.4), dpi=150)
        _lineas(ax, res, col, b0, titulo, unidad, dec, ref)
        fig.subplots_adjust(left=0.07, right=0.89, top=0.86, bottom=0.2)
        _leyenda(fig, ax, y=0.055)
        fig.text(0.07, 0.02, nota, fontsize=8, color=MUDO)
        fig.savefig(os.path.join(SALIDA, archivo))
        plt.close(fig)

    def doble(c1, t1, u1, d1, c2, t2, u2, d2, archivo, ref1=None, ref2=None):
        fig, axs = plt.subplots(1, 2, figsize=(12.4, 5.4), dpi=150)
        _lineas(axs[0], res, c1, b0, t1, u1, d1, ref1)
        _lineas(axs[1], res, c2, b0, t2, u2, d2, ref2)
        fig.subplots_adjust(left=0.05, right=0.92, top=0.86, bottom=0.2, wspace=0.3)
        _leyenda(fig, axs[0], y=0.055)
        fig.text(0.05, 0.02, nota, fontsize=8, color=MUDO)
        fig.savefig(os.path.join(SALIDA, archivo))
        plt.close(fig)

    simple("pib_pc_indice", "PIB real per cápita", "Índice, 2025 = 100", "01_pib_per_capita.png")
    simple("productividad_hora_indice", "Productividad por hora trabajada", "Índice, 2025 = 100",
           "02_productividad.png")
    doble("tasa_paro", "Tasa de paro", "% de la población activa", 1,
          "tasa_empleo_16_64", "Tasa de empleo", "Ocupados en % de la población de 16 a 64 años", 1,
          "03_paro_y_empleo.png")
    simple("deuda_pib", "Deuda pública", "% del PIB", "04_deuda_publica.png", dec=0,
           ref=(60, "Referencia del 60 % (Tratado UE)"))
    simple("saldo_publico_pib", "Saldo de las Administraciones Públicas", "% del PIB (negativo = déficit)",
           "05_saldo_publico.png", ref=(-3, "Límite del −3 %"))
    simple("gasto_pensiones_pib", "Gasto público en pensiones", "% del PIB", "06_pensiones.png")
    doble("salario_neto_real_indice", "Salario real neto por ocupado",
          "Índice, 2025 = 100 (después de cuña fiscal)", 1,
          "salario_bruto_real_indice", "Coste laboral real por ocupado", "Índice, 2025 = 100", 1,
          "07_salario_real.png")
    doble("deficit_vivienda_miles", "Déficit acumulado de vivienda",
          "Miles de viviendas (hogares creados − viviendas terminadas, desde 2021)", 0,
          "precio_renta_años", "Precio de la vivienda / renta del hogar", "Años de renta bruta", 1,
          "08_vivienda.png", ref1=(0, "Déficit absorbido"))

    # ---- Tornado de sensibilidad (escenario B, 2040) ----
    sb = sens[sens.escenario == "B"]
    central = res["B"].loc[AÑO_FIN]
    paneles = [("deuda_pib", "Deuda pública en 2040", "% del PIB", 0),
               ("pib_pc_indice", "PIB per cápita en 2040", "Índice, 2025 = 100", 1)]
    fig, axs = plt.subplots(1, 2, figsize=(12.4, 5.6), dpi=150, sharey=True)
    orden = None
    for ax, (m, tit, uni, dec) in zip(axs, paneles):
        t = sb.pivot(index="parametro", columns="nivel", values=m)
        t["amp"] = (t["alto"] - t["bajo"]).abs()
        if orden is None:
            orden = t.sort_values("amp").index
        t = t.loc[orden]
        for i, (_, f) in enumerate(t.iterrows()):
            for nivel, color in (("bajo", "#2a78d6"), ("alto", "#eb6834")):
                ax.barh(i, f[nivel] - central[m], left=central[m], height=0.42, color=color,
                        label=f"Valor {nivel} del parámetro" if i == 0 else None, zorder=3)
                if abs(f[nivel] - central[m]) > 1e-6:
                    ax.annotate(f"{f[nivel]:.{dec}f}".replace(".", ","), (f[nivel], i),
                                xytext=(4 if f[nivel] > central[m] else -4, 0), textcoords="offset points",
                                ha="left" if f[nivel] > central[m] else "right", va="center",
                                fontsize=8.5, color=TINTA2)
        ax.axvline(central[m], color=TINTA2, lw=1.0, zorder=4)
        ax.set_yticks(range(len(t)))
        ax.set_yticklabels(t.index, fontsize=9)
        ax.set_title(tit, loc="left", fontsize=12, color=TINTA, fontweight="bold", pad=22)
        ax.text(0, 1.035, f"{uni} · central B = {central[m]:.{dec}f}".replace(".", ","),
                transform=ax.transAxes, fontsize=9.5, color=TINTA2)
        ax.grid(axis="y", visible=False)
        ax.tick_params(length=0)
        ax.margins(x=0.16)
    fig.subplots_adjust(left=0.3, right=0.97, top=0.86, bottom=0.17, wspace=0.08)
    h, l = axs[0].get_legend_handles_labels()
    fig.legend(h, l, loc="lower center", ncol=2, frameon=False, fontsize=9.5, labelcolor=TINTA2,
               bbox_to_anchor=(0.62, 0.045))
    fig.text(0.02, 0.015, "Sensibilidad del escenario B, un parámetro cada vez. " + nota, fontsize=8, color=MUDO)
    fig.savefig(os.path.join(SALIDA, "09_sensibilidad.png"))
    plt.close(fig)


# ---------------------------------------------------------------------------
# 7. TABLAS
# ---------------------------------------------------------------------------
FILAS_TABLA = [
    ("PIB real per cápita (2025 = 100)", "pib_pc_indice", 0),
    ("PIB per cápita en PPA, UE27 = 100 (indicativo)", "pib_pc_ue100", 0),
    ("Crecimiento medio del PIB desde 2025 (% anual)", "_crec_medio", 1),
    ("Productividad por hora (2025 = 100)", "productividad_hora_indice", 0),
    ("Tasa de paro (%)", "tasa_paro", 1),
    ("Tasa de empleo 16-64 (%)", "tasa_empleo_16_64", 1),
    ("Saldo público (% PIB)", "saldo_publico_pib", 1),
    ("Saldo primario (% PIB)", "saldo_primario_pib", 1),
    ("Deuda pública (% PIB)", "deuda_pib", 0),
    ("Gasto en pensiones (% PIB)", "gasto_pensiones_pib", 1),
    ("Gasto público total (% PIB)", "gasto_total_pib", 1),
    ("Salario real neto por ocupado (2025 = 100)", "salario_neto_real_indice", 0),
    ("Cuña fiscal (%)", "cuña_fiscal", 1),
    ("Déficit de vivienda (miles)", "deficit_vivienda_miles", -1),
    ("Precio vivienda / renta (años)", "precio_renta_años", 1),
]


def _fmt(v, dec):
    if dec < 0:
        return f"{round(v, dec):,.0f}".replace(",", ".")
    return f"{v:.{dec}f}".replace(".", ",")


def tablas(res: dict, sens: pd.DataFrame) -> str:
    for df in res.values():
        df["_crec_medio"] = ((df["pib_real_mmEUR"] / P0["pib_2025"]) ** (1 / (df.index - AÑO_BASE)) - 1) * 100
    out = ["<!-- Generado por escenarios.py: no editar a mano -->", ""]
    for año in (2030, 2035, 2040):
        out += [f"### {año}", "", "| Indicador | A · Inercial | B · Central | C · Efectos bajos | D · Choque |",
                "|---|---|---|---|---|"]
        for nombre, col, dec in FILAS_TABLA:
            out.append(f"| {nombre} | " + " | ".join(_fmt(res[k].loc[año, col], dec) for k in "ABCD") + " |")
        out.append("")
    out += ["### Trayectoria de la terapia de choque frente a la central (2027-2032)", "",
            "| Año | Brecha B | Brecha D | Paro B | Paro D | Deuda B | Deuda D | Histéresis acum. D (% PIB pot.) |",
            "|---|---|---|---|---|---|---|---|"]
    for a in range(2027, 2033):
        b, dd = res["B"].loc[a], res["D"].loc[a]
        out.append(f"| {a} | {_fmt(b.brecha_produccion, 1)} | {_fmt(dd.brecha_produccion, 1)} | "
                   f"{_fmt(b.tasa_paro, 1)} | {_fmt(dd.tasa_paro, 1)} | {_fmt(b.deuda_pib, 0)} | "
                   f"{_fmt(dd.deuda_pib, 0)} | {_fmt(dd.histeresis_acum_pct, 1)} |")
    out += ["", "### Sensibilidad (valores en 2040; bajo → alto)", "",
            "| Parámetro | PIB pc B (2025 = 100) | Paro B (%) | Deuda B (% PIB) | Deuda A (% PIB) | Deuda D (% PIB) | PIB pc D |",
            "|---|---|---|---|---|---|---|"]
    for etiqueta, *_ in SENSIBILIDAD:
        s = sens[sens.parametro == etiqueta].set_index(["escenario", "nivel"])
        g = lambda k, m, dec: f"{_fmt(s.loc[(k, 'bajo'), m], dec)} → {_fmt(s.loc[(k, 'alto'), m], dec)}"
        out.append(f"| {etiqueta} | {g('B', 'pib_pc_indice', 0)} | {g('B', 'tasa_paro', 1)} | "
                   f"{g('B', 'deuda_pib', 0)} | {g('A', 'deuda_pib', 0)} | {g('D', 'deuda_pib', 0)} | "
                   f"{g('D', 'pib_pc_indice', 0)} |")
    out.append("")
    return "\n".join(out)


def comprobaciones(res: dict):
    """Controles de plausibilidad de la base frente a referencias oficiales."""
    A = res["A"]
    print("\nComprobaciones del escenario inercial (A):")
    print(f"  Pensiones/PIB 2030, 2040: {A.loc[2030, 'gasto_pensiones_pib']:.1f} %, "
          f"{A.loc[2040, 'gasto_pensiones_pib']:.1f} %  "
          "(AR 2024/AIReF: 12,7 % en 2022 → 16,1 % en 2050; interpolación lineal ≈14,9 % en 2040)")
    print(f"  Deuda/PIB 2030, 2040:     {A.loc[2030, 'deuda_pib']:.0f} %, {A.loc[2040, 'deuda_pib']:.0f} %  "
          "(AIReF: vuelve a superar el 120 % a largo plazo)")
    print(f"  Déficit 2026:             {-A.loc[2026, 'saldo_publico_pib']:.1f} %  (AIReF: 2,8 %)")
    print(f"  Crecimiento medio 2026-40: {A['crecimiento_pib'].mean():.2f} % anual; "
          f"paro 2026: {A.loc[2026, 'tasa_paro']:.1f} %")
    for k, df in res.items():
        assert df.notna().all().all(), f"NaN en el escenario {k}"
        assert (df["tasa_paro"].between(3, 20)).all(), f"paro fuera de rango en {k}"
        assert (df["deuda_pib"].between(30, 200)).all(), f"deuda fuera de rango en {k}"


def main():
    os.makedirs(SALIDA, exist_ok=True)
    res = correr_todo()
    for k, df in res.items():
        df.round(3).to_csv(os.path.join(SALIDA, f"escenario_{k}.csv"), encoding="utf-8")
    sens = sensibilidad()
    sens.round(3).to_csv(os.path.join(SALIDA, "sensibilidad.csv"), index=False, encoding="utf-8")
    comprobaciones(res)
    md = tablas(res, sens)
    with open(os.path.join(SALIDA, "tablas.md"), "w", encoding="utf-8") as f:
        f.write(md)
    resumen = pd.concat({k: df.loc[[2030, 2035, 2040]] for k, df in res.items()}, names=["escenario"])
    resumen.round(3).to_csv(os.path.join(SALIDA, "resumen_2030_2035_2040.csv"), encoding="utf-8")
    try:
        graficos(res, sens)
    except ImportError:
        print("matplotlib no está instalado: se omiten los gráficos (pip install matplotlib).")
    print("\n" + md)
    print(f"Resultados escritos en {SALIDA}")


if __name__ == "__main__":
    main()
