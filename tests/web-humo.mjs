// Prueba de humo de la web: la sirve en local y recorre sus partes interactivas.
// Uso: node tests/web-humo.mjs   (requiere playwright y su Chromium)
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const raizWeb = fileURLToPath(new URL("../web/", import.meta.url));
const tipos = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };
const servidor = createServer(async (req, res) => {
  const ruta = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  try {
    const cuerpo = await readFile(join(raizWeb, ruta || "index.html"));
    res.writeHead(200, { "content-type": tipos[extname(ruta || "index.html")] || "application/octet-stream" });
    res.end(cuerpo);
  } catch {
    res.writeHead(404); res.end();
  }
});
await new Promise((ok) => servidor.listen(0, "127.0.0.1", ok));
const url = `http://127.0.0.1:${servidor.address().port}/`;

const fallos = [];
const comprobar = (condicion, mensaje) => { if (!condicion) fallos.push(mensaje); };
const navegador = await chromium.launch();
const erroresPagina = [];

try {
  // Escritorio
  const p = await navegador.newPage({ viewport: { width: 1360, height: 900 } });
  p.setDefaultTimeout(5000);
  p.on("pageerror", (e) => erroresPagina.push(e.message));
  // Las fuentes externas pueden no cargar en la CI; no es un fallo de la web.
  await p.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await p.goto(url, { waitUntil: "load" });

  comprobar((await p.locator("#grafico svg path").count()) === 4, "El gráfico no dibuja los cuatro escenarios");
  comprobar((await p.locator("#nota-cruce strong").textContent())?.match(/^20\d\d$/), "Falta el año de cruce en la portada");
  for (const ind of await p.locator("#indicador option").evaluateAll((os) => os.map((o) => o.value))) {
    await p.selectOption("#indicador", ind);
    comprobar((await p.locator("#grafico svg path").count()) === 4, `Indicador ${ind}: faltan series`);
  }
  for (const esc of ["A", "B", "C", "D"]) {
    await p.click(`[data-esc="${esc}"]`);
    comprobar((await p.getAttribute(`[data-esc="${esc}"]`, "aria-checked")) === "true", `Escenario ${esc} no se selecciona`);
  }

  const bloques = await p.locator("#leyenda [role=tab]").count();
  comprobar(bloques === 6, `Se esperaban 6 bloques y hay ${bloques}`);
  comprobar((await p.locator(".nodo").count()) === 6, "El mapa no tiene seis nodos");
  for (let i = 0; i < bloques; i++) {
    await p.locator("#leyenda [role=tab]").nth(i).click();
    const nombre = await p.locator("#leyenda [role=tab]").nth(i).textContent();
    comprobar((await p.locator("#ficha h3").textContent()) === nombre, `La ficha no muestra ${nombre}`);
    comprobar((await p.locator("#ficha .indicadores tbody tr").count()) > 0, `${nombre}: sin indicadores`);
    for (const pest of ["medidas", "efectos", "balance", "riesgos"]) {
      await p.click(`#pt-${pest}`);
      comprobar(await p.locator(`#pp-${pest}`).isVisible(), `${nombre}: la pestaña ${pest} no se abre`);
    }
  }

  const fases = await p.locator(".fase-rect").count();
  comprobar(fases === 5, `Se esperaban 5 fases y hay ${fases}`);
  await p.locator(".puerta").first().click();
  comprobar((await p.locator("#detalle-cronologia .tipo").textContent())?.startsWith("Puerta"), "La puerta no muestra su condición");
  comprobar((await p.locator("#gantt tbody tr").count()) >= 10, "El calendario está incompleto");
  comprobar((await p.locator(".trayectoria").count()) === 3, "Faltan trayectorias políticas");
  await p.close();

  // Móvil
  const m = await navegador.newPage({ viewport: { width: 390, height: 844 } });
  await m.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await m.goto(url, { waitUntil: "load" });
  const ancho = await m.evaluate(() => document.documentElement.scrollWidth);
  comprobar(ancho <= 390, `Desbordamiento horizontal en móvil: ${ancho}px`);
  await m.close();
} catch (e) {
  fallos.push("La prueba se interrumpió: " + e.message.split("\n")[0]);
} finally {
  await navegador.close();
  servidor.close();
}

if (erroresPagina.length) fallos.push("Errores de JavaScript en la página: " + erroresPagina.join(" | "));
if (fallos.length) {
  console.error("Fallos:\n- " + fallos.join("\n- "));
  process.exit(1);
}
console.log("Prueba de humo de la web superada.");
