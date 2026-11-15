(function () {
  "use strict";

  var REPO = "https://github.com/MiguelDiazMDS/VisionFuturo/blob/ccr-8aa345ba-4zoprp/";
  var SVGNS = "http://www.w3.org/2000/svg";
  var reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, attrs, hijos) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (hijos || []).forEach(function (h) { if (h) n.appendChild(h); });
    return n;
  }
  function svg(tag, attrs) {
    var n = document.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    return n;
  }
  function num(v, dec) {
    return v.toLocaleString("es-ES", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  var porId = {};
  window.BLOQUES.forEach(function (b) { porId[b.id] = b; });

  /* ---------- Explorador de escenarios ---------- */

  var ESCENARIOS = [
    { id: "A", nombre: "Inercial", color: "var(--inercial)", hex: "#8E9895", trazo: "", explica: "Sin reformas. La deuda y las pensiones siguen subiendo y la renta relativa frente a la UE cae hacia el 86 %." },
    { id: "B", nombre: "Central", color: "var(--tinta)", hex: "#17324A", trazo: "", explica: "El programa con ajuste gradual y los efectos medios de la literatura. Cuesta en 2029-2030 y rinde desde 2031. No llega al déficit cero." },
    { id: "C", nombre: "Efectos bajos", color: "var(--tinta)", hex: "#17324A", trazo: "6 5", explica: "Las mismas políticas y los mismos costes, pero las reformas rinden el 30 % de lo esperado, como en Nueva Zelanda. Resiste la parte fiscal; el empleo y la renta apenas mejoran." },
    { id: "D", nombre: "Choque", color: "var(--correccion)", hex: "#A8325E", trazo: "", explica: "Todo en 2027 y 3,6 puntos de ajuste en tres años. Deja menos deuda, pero con un paro del 11,8 % en 2029. El modelo es benévolo con él: no incluye crisis de deuda ni reversión política." }
  ];
  var INDICADORES = [
    { clave: "pib", nombre: "PIB real per cápita", unidad: "índice, 2025 = 100", dec: 0, corto: "PIB per cápita" },
    { clave: "paro", nombre: "Tasa de paro", unidad: "% de la población activa", dec: 1, corto: "Paro", suf: " %" },
    { clave: "deuda", nombre: "Deuda pública", unidad: "% del PIB", dec: 0, corto: "Deuda", suf: " %" },
    { clave: "saldo", nombre: "Saldo público", unidad: "% del PIB; negativo es déficit", dec: 1, corto: "Saldo", suf: " %" },
    { clave: "pensiones", nombre: "Gasto en pensiones", unidad: "% del PIB", dec: 1, corto: "Pensiones", suf: " %" },
    { clave: "salario", nombre: "Salario real neto por ocupado", unidad: "índice, 2025 = 100", dec: 0, corto: "Salario neto" },
    { clave: "vivienda", nombre: "Déficit acumulado de vivienda", unidad: "miles de viviendas", dec: 0, corto: "Déficit de vivienda", suf: " mil" },
    { clave: "productividad", nombre: "Productividad por hora", unidad: "índice, 2025 = 100", dec: 0, corto: "Productividad" }
  ];
  var estado = { esc: "B", ind: "pib", dibujado: false };

  var M = window.MODELO;
  if (M.E) ESCENARIOS.push({ id: "E", nombre: "Maximalista", color: "var(--maximalista)", hex: "#A55B12", trazo: "", explica: window.EXPLICA_E || "La versión maximalista del programa." });
  var anios = M.A.anios;

  // Primer año en que el central supera al inercial y ya no vuelve a quedar por debajo.
  function anioCruce(clave, mayorEsMejor) {
    var a = M.A[clave], b = M.B[clave], cruce = null;
    for (var i = 0; i < anios.length; i++) {
      var mejor = mayorEsMejor ? b[i] - a[i] >= 0.3 : a[i] - b[i] >= 0.3;
      if (mejor && cruce === null) cruce = i;
      if (!mejor) cruce = null;
    }
    return cruce === null ? null : anios[cruce];
  }

  var cruce = anioCruce("pib", true);
  document.getElementById("nota-cruce").innerHTML =
    "En el escenario central, la renta per cápita no supera a la del escenario sin reformas hasta <strong>" + cruce +
    "</strong>. En 2040 la ventaja es de " + num(M.B.pib[14] - M.A.pib[14], 0) + " puntos. Si las reformas rinden poco, de " +
    num(M.C.pib[14] - M.A.pib[14], 0) + ".";

  var selector = document.getElementById("indicador");
  INDICADORES.forEach(function (ind) {
    selector.appendChild(el("option", { value: ind.clave, text: ind.nombre }));
  });
  selector.addEventListener("change", function () { estado.ind = selector.value; dibujarGrafico(false); });

  var grupo = document.getElementById("escenarios-botones");
  ESCENARIOS.forEach(function (e, i) {
    var b = el("button", { type: "button", role: "radio", "aria-checked": e.id === estado.esc ? "true" : "false", "data-esc": e.id, tabindex: e.id === estado.esc ? "0" : "-1" }, [
      el("span", { class: "muestra" + (e.trazo ? " discontinua" : ""), style: "color:" + e.hex, "aria-hidden": "true" }),
      document.createTextNode(e.nombre)
    ]);
    b.addEventListener("click", function () { elegirEscenario(e.id, false); });
    b.addEventListener("keydown", function (ev) {
      var d = ev.key === "ArrowRight" || ev.key === "ArrowDown" ? 1 : ev.key === "ArrowLeft" || ev.key === "ArrowUp" ? -1 : 0;
      if (!d) return;
      ev.preventDefault();
      var sig = ESCENARIOS[(i + d + ESCENARIOS.length) % ESCENARIOS.length];
      elegirEscenario(sig.id, true);
    });
    grupo.appendChild(b);
  });

  function elegirEscenario(id, enfocar) {
    estado.esc = id;
    grupo.querySelectorAll("button").forEach(function (b) {
      var si = b.getAttribute("data-esc") === id;
      b.setAttribute("aria-checked", si ? "true" : "false");
      b.setAttribute("tabindex", si ? "0" : "-1");
      if (si && enfocar) b.focus();
    });
    dibujarGrafico(false);
  }

  function escala(d0, d1, r0, r1) { return function (v) { return r0 + (v - d0) / (d1 - d0) * (r1 - r0); }; }
  function marcas(min, max, n) {
    var paso = (max - min) / n, mag = Math.pow(10, Math.floor(Math.log10(paso))), r = paso / mag;
    paso = (r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10) * mag;
    var out = [];
    for (var v = Math.ceil(min / paso) * paso; v <= max + 1e-9; v += paso) out.push(+v.toFixed(6));
    return out;
  }

  function dibujarGrafico(primeraVez) {
    var ind = INDICADORES.filter(function (x) { return x.clave === estado.ind; })[0];
    var esc = ESCENARIOS.filter(function (x) { return x.id === estado.esc; })[0];
    var ancho = document.getElementById("grafico").clientWidth || 680;
    var W = Math.max(340, Math.min(720, ancho)), H = W < 520 ? 300 : 340, mi = 40, md = W < 520 ? 84 : 96, ms = 16, mf = 30;
    var todos = [];
    ESCENARIOS.forEach(function (e) { todos = todos.concat(M[e.id][ind.clave]); });
    var min = Math.min.apply(null, todos), max = Math.max.apply(null, todos), holgura = (max - min) * 0.08 || 1;
    if (ind.clave === "saldo") max = Math.max(max, 0.5);
    var ticks = marcas(min - holgura, max + holgura, 5);
    var y0 = Math.min(ticks[0], min), y1 = Math.max(ticks[ticks.length - 1], max);
    var x = escala(anios[0], anios[anios.length - 1], mi, W - md), y = escala(y0, y1, H - mf, ms);

    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, "aria-hidden": "true" });
    ticks.forEach(function (t) {
      s.appendChild(svg("line", { x1: mi, x2: W - md, y1: y(t), y2: y(t), stroke: t === 0 && ind.clave === "saldo" ? "#17324A" : "#C5CCC2", "stroke-width": t === 0 && ind.clave === "saldo" ? 1.2 : 1 }));
      s.appendChild(svg("text", { x: mi - 8, y: y(t) + 4, "text-anchor": "end", "font-size": 12, fill: "#5F6B73", text: num(t, Math.abs(t) < 10 && t % 1 ? 1 : 0) }));
    });
    (W < 520 ? [2026, 2030, 2035, 2040] : [2026, 2028, 2030, 2032, 2034, 2036, 2038, 2040]).forEach(function (a) {
      s.appendChild(svg("text", { x: x(a), y: H - 8, "text-anchor": "middle", "font-size": 12, fill: "#5F6B73", text: a }));
    });

    if (ind.clave === "pib" && cruce) {
      var cx = x(cruce);
      s.appendChild(svg("line", { x1: cx, x2: cx, y1: ms, y2: H - mf, stroke: "#17324A", "stroke-width": 1, "stroke-dasharray": "2 3" }));
      s.appendChild(svg("text", { x: cx + 6, y: ms + 12, "font-size": 12, "font-weight": 700, fill: "#17324A", text: W < 520 ? cruce + ": cruce" : cruce + ": el central supera al inercial" }));
      var x0 = x(2029), xw = cx - x0;
      s.appendChild(svg("rect", { x: x0, y: ms, width: xw, height: H - mf - ms, fill: "#A8325E", opacity: 0.07 }));
      s.appendChild(svg("text", { x: x0 + 4, y: H - mf - 8, "font-size": 11, fill: "#A8325E", text: "coste de transición" }));
    }

    var orden = ESCENARIOS.filter(function (e) { return e.id !== estado.esc; }).concat([esc]);
    var etiquetas = [];
    orden.forEach(function (e) {
      var serie = M[e.id][ind.clave];
      var d = serie.map(function (v, i) { return (i ? "L" : "M") + x(anios[i]).toFixed(1) + " " + y(v).toFixed(1); }).join(" ");
      var activo = e.id === estado.esc;
      var p = svg("path", {
        d: d, fill: "none", stroke: e.hex, "stroke-width": activo ? 3.2 : 1.6,
        "stroke-dasharray": e.trazo || "none", opacity: activo ? 1 : 0.55, "stroke-linejoin": "round", "stroke-linecap": "round"
      });
      s.appendChild(p);
      if (primeraVez && !reducirMovimiento && !e.trazo) {
        var largo = 2000;
        p.style.strokeDasharray = largo; p.style.strokeDashoffset = largo;
        p.style.transition = "stroke-dashoffset 1400ms cubic-bezier(.3,.1,.2,1) " + (activo ? 250 : 0) + "ms";
        requestAnimationFrame(function () { requestAnimationFrame(function () { p.style.strokeDashoffset = 0; }); });
        p.addEventListener("transitionend", function () { p.style.strokeDasharray = ""; });
      }
      var ultimo = serie[serie.length - 1];
      etiquetas.push({ y: y(ultimo), texto: (W < 520 ? e.nombre.split(" ")[0] : e.nombre) + " " + num(ultimo, ind.dec), color: e.hex, activo: activo });
    });
    // Etiquetas finales sin solaparse.
    etiquetas.sort(function (a, b) { return a.y - b.y; });
    for (var i = 1; i < etiquetas.length; i++) if (etiquetas[i].y - etiquetas[i - 1].y < 15) etiquetas[i].y = etiquetas[i - 1].y + 15;
    etiquetas.forEach(function (l) {
      s.appendChild(svg("text", { x: W - md + 8, y: l.y + 4, "font-size": 12, "font-weight": l.activo ? 800 : 500, fill: l.color, text: l.texto }));
    });

    var cont = document.getElementById("grafico");
    cont.innerHTML = "";
    cont.appendChild(s);
    cont.setAttribute("aria-label", ind.nombre + " entre 2026 y 2040 en los cuatro escenarios. En 2040: " +
      ESCENARIOS.map(function (e) { return e.nombre + " " + num(M[e.id][ind.clave][14], ind.dec) + (ind.suf || ""); }).join(", ") + ".");
    document.getElementById("titulo-grafico").innerHTML = "<strong>" + ind.nombre + "</strong>, " + ind.unidad + ". Modelo de escenarios, 2026-2040.";
    document.getElementById("explica-escenario").textContent = esc.nombre + ". " + esc.explica;
    dibujarTira();
  }

  function dibujarTira() {
    var tira = document.getElementById("tira-2040");
    tira.innerHTML = "";
    ["pib", "paro", "deuda", "salario"].forEach(function (clave) {
      var ind = INDICADORES.filter(function (x) { return x.clave === clave; })[0];
      var v = M[estado.esc][clave][14], a = M.A[clave][14];
      var dd = el("dd", { text: num(v, ind.dec) + (ind.suf || "") });
      if (estado.esc !== "A") dd.appendChild(el("small", { text: "sin reformas: " + num(a, ind.dec) + (ind.suf || "") }));
      else dd.appendChild(el("small", { text: "referencia" }));
      tira.appendChild(el("div", null, [el("dt", { text: ind.corto + " en 2040" }), dd]));
    });
  }

  dibujarGrafico(true);
  var anchoPrevio = document.getElementById("grafico").clientWidth, espera;
  window.addEventListener("resize", function () {
    clearTimeout(espera);
    espera = setTimeout(function () {
      var w = document.getElementById("grafico").clientWidth;
      if (Math.abs(w - anchoPrevio) > 8) { anchoPrevio = w; dibujarGrafico(false); }
    }, 150);
  });

  /* ---------- Plano de bloques ---------- */

  var POS = {
    vivienda: [115, 70], productividad: [335, 160], estado: [115, 320],
    precios: [335, 320], laboral: [565, 235], pensiones: [695, 70]
  };
  var leyenda = document.getElementById("leyenda");
  var mapa = document.getElementById("mapa");
  var trazos = document.getElementById("mapa-trazos");
  var ficha = document.getElementById("ficha");
  var nodos = {};
  var actual = null;

  var defs = svg("defs");
  var marcador = svg("marker", { id: "punta", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" });
  marcador.appendChild(svg("path", { d: "M0 0 L10 5 L0 10 z", fill: "#17324A" }));
  defs.appendChild(marcador);
  trazos.appendChild(defs);

  function recortar(c, hacia) {
    var dx = hacia[0] - c[0], dy = hacia[1] - c[1], hw = 86, hh = 26;
    var t = Math.min(hw / Math.abs(dx || 1e-6), hh / Math.abs(dy || 1e-6));
    return [c[0] + dx * Math.min(t, 1), c[1] + dy * Math.min(t, 1)];
  }
  window.RELACIONES.forEach(function (r, i) {
    var a = POS[r[0]], b = POS[r[1]];
    var p0 = recortar(a, b), p1 = recortar(b, a);
    var mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2;
    var nx = -(p1[1] - p0[1]), ny = p1[0] - p0[0], L = Math.hypot(nx, ny) || 1;
    var c = [mx + nx / L * 18, my + ny / L * 18];
    var d = "M" + p0.join(" ") + " Q" + c.join(" ") + " " + p1.join(" ");
    // El retorno de pensiones al gasto rodea el plano por abajo para no cruzar otros bloques.
    if (r[0] === "pensiones" && r[1] === "estado") d = "M735 100 C 790 400, 420 408, 202 338";
    var path = svg("path", { d: d, "marker-end": "url(#punta)", "data-de": r[0], "data-a": r[1] });
    path.appendChild(svg("title", { text: porId[r[0]].nombre + " → " + porId[r[1]].nombre + ": " + r[2] }));
    trazos.appendChild(path);
  });

  window.BLOQUES.forEach(function (b, i) {
    var btn = el("button", { type: "button", role: "tab", id: "tab-" + b.id, "aria-controls": "ficha", "aria-selected": "false", tabindex: "-1" }, [
      el("span", { class: "zona", style: "background:" + b.color, "aria-hidden": "true" }),
      el("span", { class: "nombre-leyenda", text: b.nombre })
    ]);
    btn.addEventListener("click", function () { elegirBloque(b.id, true); });
    btn.addEventListener("keydown", function (ev) {
      var d = ev.key === "ArrowDown" || ev.key === "ArrowRight" ? 1 : ev.key === "ArrowUp" || ev.key === "ArrowLeft" ? -1 : 0;
      if (ev.key === "Home") d = -i; if (ev.key === "End") d = window.BLOQUES.length - 1 - i;
      if (!d) return;
      ev.preventDefault();
      var sig = window.BLOQUES[(i + d + window.BLOQUES.length) % window.BLOQUES.length];
      elegirBloque(sig.id, true);
      document.getElementById("tab-" + sig.id).focus();
    });
    leyenda.appendChild(el("li", { role: "presentation" }, [btn]));

    var n = el("button", { type: "button", class: "nodo", tabindex: "-1", "aria-pressed": "false", style: "left:" + (POS[b.id][0] / 8) + "%;top:" + (POS[b.id][1] / 4.2) + "%" }, [
      el("span", { class: "franja", style: "background:" + b.color }),
      el("span", { class: "n", text: b.corto })
    ]);
    n.addEventListener("click", function () { elegirBloque(b.id, true); });
    mapa.appendChild(n);
    nodos[b.id] = n;
  });

  function elegirBloque(id, actualizarUrl) {
    actual = id;
    var b = porId[id];
    window.BLOQUES.forEach(function (o) {
      var t = document.getElementById("tab-" + o.id);
      t.setAttribute("aria-selected", o.id === id ? "true" : "false");
      t.setAttribute("tabindex", o.id === id ? "0" : "-1");
      nodos[o.id].setAttribute("aria-pressed", o.id === id ? "true" : "false");
    });
    trazos.querySelectorAll("path[data-de]").forEach(function (p) {
      var conectada = p.getAttribute("data-de") === id || p.getAttribute("data-a") === id;
      p.classList.toggle("activa", conectada);
      p.classList.toggle("atenuada", !conectada);
    });
    ficha.setAttribute("aria-labelledby", "tab-" + id);
    pintarFicha(b);
    if (actualizarUrl && history.replaceState) history.replaceState(null, "", "#bloque-" + id);
  }

  function valor(texto, tipo) {
    if (texto === null) return el("span", { class: "valor vacio", text: "no modelizado" });
    return el("span", { class: "valor " + tipo, text: texto });
  }

  function pintarFicha(b) {
    ficha.innerHTML = "";
    ficha.style.setProperty("--color-bloque", b.color);

    var relaciones = window.RELACIONES.filter(function (r) { return r[0] === b.id || r[1] === b.id; });
    var listaRel = el("ul", { class: "relaciones" });
    relaciones.forEach(function (r) {
      var sale = r[0] === b.id;
      listaRel.appendChild(el("li", { text: (sale ? "Facilita " + porId[r[1]].nombre.toLowerCase() : "Depende de " + porId[r[0]].nombre.toLowerCase()) + ": " + r[2].charAt(0).toLowerCase() + r[2].slice(1) + "." }));
    });

    ficha.appendChild(el("div", { class: "ficha-cabeza" }, [
      el("div", null, [
        el("h3", { text: b.nombre }),
        el("p", { class: "objetivo", text: b.objetivo })
      ]),
      el("div", { class: "ficha-lado" }, [
        el("h4", { class: "lado-titulo", text: "Cómo se conecta" }),
        listaRel,
        el("a", { class: "enlace-detalle", href: REPO + b.doc, text: "Leer el documento del bloque" })
      ])
    ]));

    var tabla = el("table", { class: "indicadores" });
    tabla.appendChild(el("caption", { class: "visually-hidden", text: "Indicadores de " + b.nombre }));
    tabla.appendChild(el("thead", null, [el("tr", null, [
      el("th", { scope: "col", text: "Indicador" }), el("th", { scope: "col", text: "Hoy" }),
      el("th", { scope: "col", text: "Meta del bloque en 2040" }), el("th", { scope: "col", text: "Modelo central en 2040" })
    ])]));
    var cuerpo = el("tbody");
    b.indicadores.forEach(function (f) {
      cuerpo.appendChild(el("tr", null, [
        el("th", { scope: "row", text: f[0] }),
        el("td", { "data-etiqueta": "Hoy", text: f[1] }),
        el("td", { "data-etiqueta": "Meta" }, [valor(f[2], "meta")]),
        el("td", { "data-etiqueta": "Modelo" }, [valor(f[3], "modelo")])
      ]));
    });
    tabla.appendChild(cuerpo);
    ficha.appendChild(tabla);
    ficha.appendChild(el("p", { class: "clave-valores" }, [
      el("span", null, [el("span", { class: "valor meta", text: "rayado" }), document.createTextNode(" aspiración del bloque, sin respaldo del modelo")]),
      el("span", null, [el("span", { class: "valor modelo", text: "sólido" }), document.createTextNode(" resultado del modelo de escenarios")])
    ]));

    var PESTANAS = [
      ["medidas", "Medidas"], ["efectos", "Mecanismo y efectos"], ["balance", "Quién gana y quién pierde"], ["riesgos", "Riesgos"]
    ];
    var barra = el("div", { class: "pestanas", role: "tablist", "aria-label": "Detalle de " + b.nombre });
    var paneles = {};
    PESTANAS.forEach(function (p, i) {
      var t = el("button", { type: "button", role: "tab", id: "pt-" + p[0], "aria-controls": "pp-" + p[0], "aria-selected": i ? "false" : "true", tabindex: i ? "-1" : "0", text: p[1] });
      t.addEventListener("click", function () { abrir(p[0]); });
      t.addEventListener("keydown", function (ev) {
        var d = ev.key === "ArrowRight" ? 1 : ev.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        ev.preventDefault();
        var sig = PESTANAS[(i + d + PESTANAS.length) % PESTANAS.length][0];
        abrir(sig); document.getElementById("pt-" + sig).focus();
      });
      barra.appendChild(t);
    });
    function abrir(id) {
      PESTANAS.forEach(function (p) {
        var t = document.getElementById("pt-" + p[0]);
        t.setAttribute("aria-selected", p[0] === id ? "true" : "false");
        t.setAttribute("tabindex", p[0] === id ? "0" : "-1");
        paneles[p[0]].hidden = p[0] !== id;
      });
    }
    ficha.appendChild(barra);

    var lista = el("ul", { class: "medidas" });
    b.medidas.forEach(function (m) {
      lista.appendChild(el("li", null, [
        el("h4", { text: m[0] }), el("p", { text: m[1] }),
        el("dl", { class: "meta-medida" }, [el("dt", { text: "Coste" }), el("dd", { text: m[2] }), el("dt", { text: "Precedente" }), el("dd", { text: m[3] })])
      ]));
    });
    paneles.medidas = el("div", { class: "panel", role: "tabpanel", id: "pp-medidas", "aria-labelledby": "pt-medidas" }, [lista]);

    var ef = el("table", { class: "efectos" });
    ef.appendChild(el("caption", { class: "visually-hidden", text: "Efectos por orden y horizonte" }));
    ef.appendChild(el("thead", null, [el("tr", null, [el("td"), el("th", { scope: "col", text: "Corto plazo, 1-3 años" }), el("th", { scope: "col", text: "Medio plazo, 3-10 años" }), el("th", { scope: "col", text: "Largo plazo, más de 10" })])]));
    var efb = el("tbody");
    ["Efecto directo", "Efecto de segundo orden", "Efecto de tercer orden"].forEach(function (nom, i) {
      efb.appendChild(el("tr", null, [el("th", { scope: "row", text: nom })].concat(b.efectos[i].map(function (c) { return el("td", { text: c }); }))));
    });
    ef.appendChild(efb);
    paneles.efectos = el("div", { class: "panel", role: "tabpanel", id: "pp-efectos", "aria-labelledby": "pt-efectos", hidden: "" }, [
      el("p", { class: "mecanismo", text: b.mecanismo }), el("div", { class: "efectos-envoltorio" }, [ef])
    ]);

    paneles.balance = el("div", { class: "panel", role: "tabpanel", id: "pp-balance", "aria-labelledby": "pt-balance", hidden: "" }, [
      el("div", { class: "balance" }, [
        el("div", { class: "ganan" }, [el("h4", { text: "Ganan" }), el("p", { text: b.ganan })]),
        el("div", { class: "pierden" }, [el("h4", { text: "Pierden" }), el("p", { text: b.pierden })]),
        el("div", { class: "compensa" }, [el("h4", { text: "Cómo se compensa" }), el("p", { text: b.compensacion })])
      ])
    ]);

    var rt = el("table", { class: "riesgos" });
    rt.appendChild(el("thead", null, [el("tr", null, [el("th", { scope: "col", text: "Riesgo" }), el("th", { scope: "col", text: "Respuesta del diseño" })])]));
    var rtb = el("tbody");
    b.riesgos.forEach(function (r) { rtb.appendChild(el("tr", null, [el("th", { scope: "row", text: r[0] }), el("td", { text: r[1] })])); });
    rt.appendChild(rtb);
    paneles.riesgos = el("div", { class: "panel", role: "tabpanel", id: "pp-riesgos", "aria-labelledby": "pt-riesgos", hidden: "" }, [rt]);

    PESTANAS.forEach(function (p) { ficha.appendChild(paneles[p[0]]); });
    ficha.appendChild(el("p", { class: "advertencia" }, [el("strong", { text: "Lo que el modelo no confirma. " }), document.createTextNode(b.advertencia)]));
  }

  var inicial = (location.hash.match(/^#bloque-(\w+)/) || [])[1];
  elegirBloque(porId[inicial] ? inicial : "vivienda", false);
  if (porId[inicial]) document.getElementById("bloques").scrollIntoView();

  /* ---------- Cronología ---------- */

  var E = window.ESTRATEGIA;
  (function () {
    var W = 1000, H = 210, x0 = 2026.9, x1 = 2041, mi = 6, md = 6;
    var x = escala(x0, x1, mi, W - md);
    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, role: "group", "aria-label": "Cronología de fases y puertas de decisión" });
    var tonos = ["#E2E6DD", "#D6DCD1", "#E2E6DD", "#D6DCD1", "#E2E6DD"];
    var detalle = document.getElementById("detalle-cronologia");
    var elegido = null;

    function mostrar(tipo, titulo, texto, nodo) {
      detalle.innerHTML = "";
      detalle.appendChild(el("div", null, [el("span", { class: "tipo", text: tipo }), el("h4", { text: titulo })]));
      detalle.appendChild(el("p", { text: texto }));
      if (elegido) elegido.classList.remove("elegido");
      elegido = nodo; nodo.classList.add("elegido");
      s.querySelectorAll(".fase-rect rect").forEach(function (r) { r.setAttribute("stroke", "none"); });
      s.querySelectorAll(".puerta path").forEach(function (r) { r.setAttribute("stroke-width", 1.5); });
      var forma = nodo.querySelector("rect, path");
      if (forma.tagName === "rect") { forma.setAttribute("stroke", "#17324A"); forma.setAttribute("stroke-width", 2); }
      else forma.setAttribute("stroke-width", 3);
    }
    function activable(g, fn) {
      g.setAttribute("tabindex", "0"); g.setAttribute("role", "button");
      g.addEventListener("click", fn);
      g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); fn(); } });
    }

    var yb = 92, hb = 70;
    var primeraFase = null;
    E.fases.forEach(function (f, i) {
      var g = svg("g", { class: "fase-rect", "aria-label": "Fase " + f.n + ": " + f.nombre });
      g.appendChild(svg("rect", { x: x(f.desde), y: yb, width: x(f.hasta) - x(f.desde) - 2, height: hb, fill: tonos[i] }));
      g.appendChild(svg("text", { x: x(f.desde) + 10, y: yb + 30, "font-size": 26, "font-weight": 800, fill: "#17324A", text: f.n }));
      var ancho = x(f.hasta) - x(f.desde);
      if (ancho > 150) g.appendChild(svg("text", { x: x(f.desde) + 10, y: yb + 54, "font-size": 13, "font-weight": 600, fill: "#17324A", text: f.nombre }));
      activable(g, function () { mostrar("Fase " + f.n + ", " + periodo(f), f.nombre, f.texto, g); });
      s.appendChild(g);
      if (i === 1) primeraFase = [f, g];
    });
    function periodo(f) {
      return ["diciembre de 2026 a junio de 2027", "2027-2028", "2028-2031", "2031-2036", "2037-2040"][f.n];
    }

    s.appendChild(svg("text", { x: x(E.puertas[0].anio) - 7, y: 20, "font-size": 12, fill: "#5F6B73", text: "Puertas de decisión: condiciones que deben cumplirse para seguir" }));
    E.puertas.forEach(function (p, i) {
      var b = porId[p.bloque], cx = x(p.anio), cy = 52;
      var g = svg("g", { class: "puerta", "aria-label": "Puerta: " + p.nombre });
      g.appendChild(svg("line", { x1: cx, x2: cx, y1: cy + 11, y2: yb, stroke: "#17324A", "stroke-width": 1 }));
      g.appendChild(svg("path", { d: "M" + cx + " " + (cy - 11) + " L" + (cx + 11) + " " + cy + " L" + cx + " " + (cy + 11) + " L" + (cx - 11) + " " + cy + " Z", fill: b.color, stroke: "#17324A", "stroke-width": 1.5 }));
      activable(g, function () { mostrar("Puerta de decisión, " + b.nombre.toLowerCase(), p.nombre, p.condicion, g); });
      s.appendChild(g);
    });

    var ya = yb + hb + 22;
    for (var a = 2027; a <= 2040; a++) {
      s.appendChild(svg("line", { x1: x(a), x2: x(a), y1: yb + hb, y2: yb + hb + 6, stroke: "#17324A" }));
      if (a % 2 === 1 || a === 2040) s.appendChild(svg("text", { x: x(a), y: ya, "text-anchor": "middle", "font-size": 12, fill: "#5F6B73", text: a }));
    }
    [[2027.4, "Autonómicas y municipales"], [2030.5, "Generales"], [2031.4, "Autonómicas y municipales"], [2034.5, "Generales"], [2038.5, "Generales"]].forEach(function (e) {
      s.appendChild(svg("circle", { cx: x(e[0]), cy: ya + 14, r: 3.5, fill: "none", stroke: "#A8325E", "stroke-width": 1.5 }));
    });
    s.appendChild(svg("text", { x: W - md, y: ya + 18, "text-anchor": "end", "font-size": 11, fill: "#A8325E", text: "Círculos: elecciones previstas" }));

    var cont = document.getElementById("cronologia");
    cont.appendChild(s);
    // En pantallas estrechas la cronología se desplaza en horizontal.
    cont.style.overflowX = "auto";
    s.style.minWidth = "720px";
    mostrar("Fase 1, " + periodo(primeraFase[0]), primeraFase[0].nombre, primeraFase[0].texto, primeraFase[1]);
  })();

  /* ---------- Gantt ---------- */
  (function () {
    var t = document.getElementById("gantt");
    t.appendChild(el("caption", { class: "visually-hidden", text: "Calendario de despliegue por medida" }));
    var cg = el("colgroup", null, [el("col", { style: "width:30%" })]);
    E.columnas.forEach(function () { cg.appendChild(el("col", { style: "width:" + (70 / E.columnas.length).toFixed(2) + "%" })); });
    t.appendChild(cg);
    t.appendChild(el("thead", null, [el("tr", null, [el("th", { scope: "col", text: "Medida" })].concat(E.columnas.map(function (c) { return el("th", { scope: "col", text: c }); })))]));
    var cuerpo = el("tbody");
    var nombres = { "2": "Despliegue principal", "1": "Despliegue", "r": "Régimen estable", "eval": "evaluación", "mesa": "negociación", "ley": "ley", "": "" };
    E.gantt.forEach(function (fila) {
      var b = fila[1] ? porId[fila[1]] : null, color = b ? b.color : "#17324A";
      var th = el("th", { scope: "row" }, [el("span", { class: "zona-mini", style: "background:" + color, "aria-hidden": "true" }), document.createTextNode(fila[0])]);
      if (b) th.setAttribute("title", b.nombre);
      var tr = el("tr", null, [th]);
      fila[2].forEach(function (c) {
        var td = el("td");
        if (c === "2" || c === "1" || c === "r") {
          td.appendChild(el("span", { class: "celda c" + c, style: "--c:" + color, role: "img", "aria-label": nombres[c] }));
        } else if (c) {
          td.appendChild(el("span", { class: "celda texto", text: nombres[c] || c }));
        }
        tr.appendChild(td);
      });
      cuerpo.appendChild(tr);
    });
    t.appendChild(cuerpo);
    t.appendChild(el("tfoot", null, [el("tr", null, [el("th", { scope: "row", text: "Elecciones" })].concat(E.elecciones.map(function (e) { return el("td", { text: e }); })))]));
  })();

  /* ---------- Dos versiones ---------- */
  (function () {
    var X = window.MAXIMALISTA;
    var t = document.getElementById("comparativa");
    t.appendChild(el("caption", { class: "visually-hidden", text: "Versión contrastada frente a versión maximalista, por ámbito" }));
    t.appendChild(el("thead", null, [el("tr", null, [
      el("th", { scope: "col", text: "Ámbito" }), el("th", { scope: "col", text: "Versión contrastada" }), el("th", { scope: "col", text: "Versión maximalista" })
    ])]));
    var cuerpo = el("tbody");
    X.ambitos.forEach(function (a) {
      cuerpo.appendChild(el("tr", null, [
        el("th", { scope: "row" }, [document.createTextNode(a.nombre), el("a", { href: REPO + a.doc, text: "Leer el documento" })]),
        el("td", { "data-etiqueta": "Versión contrastada", text: a.contrastada }),
        el("td", { class: "max", "data-etiqueta": "Versión maximalista", text: a.maximalista })
      ]));
    });
    t.appendChild(cuerpo);

    var capas = document.getElementById("capas");
    X.capas.forEach(function (c) {
      capas.appendChild(el("li", { class: c[2] === "Estado" ? "" : "privada" }, [el("strong", { text: c[0] }), el("span", { text: c[1] }), el("em", { text: "La opera: " + c[2] })]));
    });
    var cond = document.getElementById("condiciones");
    X.condiciones.forEach(function (c) { cond.appendChild(el("li", { text: c })); });
    document.getElementById("enlace-parametros").href = REPO + X.docParametros;
    document.getElementById("enlace-revision").href = REPO + X.docRevision;
    document.getElementById("enlace-secuencia").href = REPO + X.docSecuencia;

    // Comparación numérica: solo si el modelo ya incluye el escenario maximalista.
    if (!M.E || !window.FRENTE) return;
    var ft = document.getElementById("frente-tabla");
    ft.appendChild(el("thead", null, [el("tr", null, [
      el("th", { scope: "col", text: "En 2040" }), el("th", { scope: "col", text: "Central" }), el("th", { scope: "col", text: "Maximalista" }), el("th", { scope: "col", text: "Lectura" })
    ])]));
    var fb = el("tbody");
    window.FRENTE.forEach(function (f) {
      fb.appendChild(el("tr", null, [
        el("th", { scope: "row", text: f.nombre }),
        el("td", { text: f.central }), el("td", { class: "max", text: f.maximalista }), el("td", { class: "nota", text: f.lectura })
      ]));
    });
    ft.appendChild(fb);
    document.getElementById("frente").hidden = false;
  })();

  /* ---------- Incentivos, fracaso, trayectorias, pendientes ---------- */
  (function () {
    var dl = document.getElementById("incentivos");
    E.incentivos.forEach(function (i) { dl.appendChild(el("div", null, [el("dt", { text: i[0] }), el("dd", { text: i[1] })])); });

    var tf = document.getElementById("fracaso");
    tf.appendChild(el("caption", { class: "visually-hidden", text: "Criterios de fracaso" }));
    var tb = el("tbody");
    E.fracaso.forEach(function (f) { tb.appendChild(el("tr", null, [el("th", { scope: "row", text: f[0] }), el("td", { text: f[1] })])); });
    tf.appendChild(tb);

    var tr = document.getElementById("trayectorias");
    E.trayectorias.forEach(function (t) {
      var barra = el("div", { class: "barra", role: "img", "aria-label": "Sobrevive entre el " + t[2] + " % y el " + t[3] + " % del programa" }, [
        el("span", { class: "seguro", style: "width:" + t[2] + "%" }),
        el("span", { class: "rango", style: "left:" + t[2] + "%;width:" + (t[3] - t[2]) + "%" })
      ]);
      tr.appendChild(el("div", { class: "trayectoria" }, [
        el("h4", null, [document.createTextNode(t[0]), el("span", { class: "prob", text: "Probabilidad: " + t[1] })]),
        barra,
        el("p", null, [el("strong", { text: "Sobrevive el " + t[2] + "-" + t[3] + " % del programa. " }), document.createTextNode(t[4])])
      ]));
    });

    var ul = document.getElementById("pendientes");
    window.ABIERTO.forEach(function (a) { ul.appendChild(el("li", { text: a })); });
    document.getElementById("enlace-documento").href = REPO + "ESPANA_DINAMICA_2040.md";
    document.getElementById("enlace-modelo").href = REPO.replace("/blob/", "/tree/") + "modelo";
  })();
})();
