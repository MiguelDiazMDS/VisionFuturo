# Web interactiva de España Dinámica 2040

Sitio estático (HTML, CSS y JavaScript sin dependencias) para recorrer los seis bloques de la propuesta, la estrategia de implementación y los escenarios del modelo.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Estructura de la página |
| `styles.css` | Estilos: paleta de plano urbanístico, Archivo para titulares y Literata para el texto |
| `app.js` | Gráfico de escenarios, mapa causal de bloques, fichas, cronología y calendario |
| `data/modelo.js` | Series del modelo, generadas desde `modelo/resultados` |
| `data/contenido.js` | Contenido condensado de `ESPANA_DINAMICA_2040.md` |
| `build_data.py` | Regenera `data/modelo.js` |

## Uso

```bash
python3 web/build_data.py          # tras volver a ejecutar el modelo
python3 -m http.server -d web 8000 # vista local en http://localhost:8000
```

## Despliegue en Vercel

Proyecto de Vercel con **Root Directory** `web` y sin comando de compilación (Framework Preset: Other). No necesita variables de entorno.

## Convenciones visuales

- Cada bloque tiene un color de calificación urbanística, usado solo en marcas.
- Rayado: meta del bloque sin respaldo del modelo. Sólido: resultado del modelo.
- Rojo de corrección: el escenario de choque y lo que pierde o falta.
