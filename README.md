# Miércorres Running Club — Web

Web estática (HTML + CSS + JS) para el **Miércorres Running Club** de Totana (Murcia).
Diseño minimalista y responsive, lista para alojarse **gratis en GitHub Pages**.

Colores de marca: `#FFFFFF` y `#7AD1B5`.

---

## 📁 Estructura

```
miercorres/
├── index.html            → Portada
├── quienes-somos.html    → Historia del club (para completar)
├── social-run.html       → Social Runs (calendario editable con mapas)
├── totana.html           → Lugares de interés y carreras de Totana
├── faq.html              → Preguntas frecuentes (acordeón)
├── contacto.html         → Formulario de contacto
├── css/
│   └── styles.css        → Hoja de estilos compartida
├── js/
│   ├── main.js           → Cabecera + pie + menú móvil (compartido)
│   └── form.js           → Envío del formulario de contacto
├── img/
│   ├── logo.svg          → Logo del club (también usado como favicon)
│   ├── galeria-1..8.svg  → Imágenes de galería (sustituir por fotos reales)
│   └── placeholder.svg   → Imagen de relleno
├── apps-script/
│   └── Code.gs           → Backend del formulario (Google Apps Script)
├── CNAME                 → Dominio personalizado (miercorres.com)
├── .nojekyll             → Evita el procesado Jekyll en GitHub Pages
└── README.md
```

La cabecera (navegación) y el pie se generan desde `js/main.js`, de modo que
son **idénticos en todas las páginas** y solo se editan en un sitio.

---

## ✏️ Lista de personalización (qué editar)

1. **Logo y favicon** → ya están puestos con tu SVG en `img/logo.svg`.
2. **Enlaces de redes sociales** → `js/main.js`, objeto `SITE.social`
   (WhatsApp, Instagram, Strava). Se aplican automáticamente en toda la web.
3. **Correo público y nombre del club** → `js/main.js`, objeto `SITE`.
4. **Fotos de la galería** (portada) → sustituye `img/galeria-1.svg … galeria-6.svg`
   por tus fotos (puedes usar `.jpg`/`.png`; ajusta el `src` en `index.html`).
5. **Historia del club** → `quienes-somos.html`, textos entre `[ corchetes ]`
   e imágenes `img/placeholder.svg`.
6. **Social Runs** → `social-run.html`. Duplica el bloque `<article class="run">`
   por cada quedada. Cambia día/hora, lugar, distancia y el `src` del mapa
   (Google My Maps / Wikiloc / OpenStreetMap).
7. **Totana** → `totana.html`. Ajusta las tarjetas de lugares y de carreras y
   sus enlaces a mapa.
8. **FAQ** → `faq.html`. Completa las respuestas entre `[ corchetes ]`.
9. **Formulario de contacto** → ver sección siguiente.
10. **Dominio** → `CNAME` (ya contiene `miercorres.com`).

Todos los textos están redactados y listos; los marcadores `[ ... ]` señalan
lo que conviene reemplazar con datos reales.

---

## 📬 Activar el formulario de contacto (Google Apps Script)

El formulario envía un correo a **cuatro destinatarios** mediante un
Google Apps Script gratuito.

1. Entra en <https://script.google.com> con una cuenta de Google y crea un
   **proyecto nuevo**.
2. Borra el contenido de `Code.gs` y pega el de `apps-script/Code.gs`.
3. Edita la lista `DESTINATARIOS` con los correos reales
   (ahora: `destinatario1@example.com` … `destinatario4@example.com`).
4. Pulsa **Implementar → Nueva implementación**, elige tipo
   **Aplicación web**:
   - *Ejecutar como*: **Yo**
   - *Quién tiene acceso*: **Cualquier usuario**
5. Autoriza los permisos que pida (envío de correo en tu nombre).
6. Copia la **URL** que termina en `/exec`.
7. Pégala en `js/form.js`, en la constante `APPS_SCRIPT_URL`.

Hasta que configures la URL, el formulario funciona en "modo demostración" y
avisa de que falta la configuración (no envía correos).

> El campo oculto *honeypot* (`website`) filtra spam automático y no debe tocarse.

---

## 🚀 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub y sube **todo el contenido de esta carpeta**
   (que `index.html` quede en la raíz del repo).
2. En el repositorio: **Settings → Pages**.
3. En *Build and deployment* elige **Deploy from a branch**, rama `main` y
   carpeta `/ (root)`. Guarda.
4. Espera 1–2 minutos: tu web estará en
   `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

### Dominio propio (miercorres.com)

- El archivo `CNAME` ya contiene `miercorres.com`.
- En tu proveedor de dominio, crea estos registros DNS:
  - Cuatro registros **A** apuntando a las IP de GitHub Pages:
    `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
  - (Opcional, para `www`) un **CNAME** `www` → `TU-USUARIO.github.io`.
- En **Settings → Pages → Custom domain** confirma `miercorres.com` y activa
  **Enforce HTTPS** cuando esté disponible.

Los enlaces internos son **relativos**, así que la web funciona igual en un
"project site" de GitHub, con dominio propio, o abriendo los `.html` en local.

---

## ♿ Accesibilidad y detalles

- Menú móvil con botón hamburguesa accesible (`aria-expanded`, cierre con `Esc`).
- Enlace "Saltar al contenido", foco visible por teclado y `prefers-reduced-motion`.
- Etiquetas `<label>` asociadas a cada campo del formulario.
- FAQ con acordeón **nativo** (`<details>/<summary>`).
- Fuentes desde Google Fonts (Poppins + Inter).

---

Hecho con cariño para el Miércorres Running Club · Totana (Murcia).
