/* ==========================================================================
   Miércorres Running Club — JS compartido
   - Inyecta cabecera (navegación) y pie consistentes en todas las páginas
   - Menú móvil accesible (hamburguesa)
   - Marca el enlace activo y actualiza el año del pie
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Configuración editable del sitio -------------------------------- */
  var SITE = {
    name: "Miércorres",
    //place: "Totana (Murcia)",
    logo: "img/logo.png",
    email: "hola@miercorres.com", // EDITA: correo de contacto público
    social: {
      // EDITA estas URLs con vuestros perfiles reales:
      whatsapp: "https://chat.whatsapp.com/C1PV1CQXWxOCu9WcgdGWtK",
      instagram: "https://instagram.com/miercorres",
      strava: "https://www.strava.com/clubs/miercorres"
    },
    nav: [
      { href: "index.html", label: "Inicio" },
      { href: "quienes-somos.html", label: "Quiénes somos" },
      { href: "social-run.html", label: "Social Run" },
      { href: "totana.html", label: "Totana" },
      { href: "faq.html", label: "Preguntas frecuentes" },
      { href: "contacto.html", label: "Contacto" }
    ]
  };

  /* ---- Iconos SVG (inline, sin dependencias) --------------------------- */
  var ICON = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.9-2.8-1.5-4-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 3.1 1.2 3.1.8 3.6.8.6 0 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.3" cy="6.7" r="1"/></svg>',
    strava: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.8 12.6h2.9L12.5 3.9 6.9 14.6h3.2l2.4-4.4 1.3 2.4zM14.7 14.6l-1.4 2.7-1.4-2.7H8.5l4.8 8.5 4.8-8.5h-3.4z"/></svg>'
  };

  function socialLink(kind, extraClass) {
    var labels = { whatsapp: "WhatsApp", instagram: "Instagram", strava: "Strava" };
    return '<a class="' + (extraClass || "") + '" href="' + SITE.social[kind] +
      '" target="_blank" rel="noopener" aria-label="' + labels[kind] + ' de ' + SITE.name + '">' +
      ICON[kind] + (extraClass && extraClass.indexOf("social-btn") > -1 ? '<span>' + labels[kind] + '</span>' : '') +
      '</a>';
  }

  /* ---- Cabecera -------------------------------------------------------- */
  function buildHeader(current) {
    var items = SITE.nav.map(function (n) {
      var active = n.href === current ? ' aria-current="page"' : "";
      return '<li><a href="' + n.href + '"' + active + '>' + n.label + "</a></li>";
    }).join("");

    return '' +
      '<a class="skip-link" href="#main">Saltar al contenido</a>' +
      '<header class="site-header">' +
      '  <div class="container nav">' +
      '    <a class="brand" href="index.html">' +
      '      <img src="' + SITE.logo + '" alt="" width="46" height="46">' +
      '      <span>Miércorres</span>' +
      '    </a>' +
      '    <button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Abrir menú">' +
      '      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
      '    </button>' +
      '    <nav aria-label="Principal">' +
      '      <ul class="nav-menu" id="nav-menu">' + items + '</ul>' +
      '    </nav>' +
      '  </div>' +
      '</header>';
  }

  /* ---- Pie ------------------------------------------------------------- */
  function buildFooter() {
    var navLinks = SITE.nav.map(function (n) {
      return '<li><a href="' + n.href + '">' + n.label + "</a></li>";
    }).join("");

    return '' +
      '<footer class="site-footer">' +
      '  <div class="container">' +
      '    <div class="footer-grid">' +
      '      <div>' +
      '        <div class="footer-brand"><img src="' + SITE.logo + '" alt=""><span>' + SITE.name + '</span></div>' +
      '        <p>Un club de amigos que corre para disfrutar. Nos vemos en Totana (Murcia).</p>' +
      '        <div class="footer-socials">' +
                 socialLink("whatsapp") + socialLink("instagram") + socialLink("strava") +
      '        </div>' +
      '      </div>' +
      '      <div><h4>Secciones</h4><ul>' + navLinks + '</ul></div>' +
      '      <div><h4>Contacto</h4><ul>' +
      '        <li>' + SITE.place + '</li>' +
      '        <li><a href="mailto:' + SITE.email + '">' + SITE.email + '</a></li>' +
      '        <li><a href="contacto.html">Escríbenos</a></li>' +
      '      </ul></div>' +
      '    </div>' +
      '    <div class="footer-bottom">' +
      '      <span>© <span data-year></span> ' + SITE.name + '. Todos los derechos reservados.</span>' +
      '      <span>Hecho con cariño en Totana · <a href="https://miercorres.com">miercorres.com</a></span>' +
      '    </div>' +
      '  </div>' +
      '</footer>';
  }

  /* ---- Inicialización -------------------------------------------------- */
  function currentPage() {
    var path = window.location.pathname.split("/").pop();
    return path && path.length ? path : "index.html";
  }

  function init() {
    var current = currentPage();

    var headerMount = document.querySelector("[data-header]");
    if (headerMount) headerMount.innerHTML = buildHeader(current);

    var footerMount = document.querySelector("[data-footer]");
    if (footerMount) footerMount.innerHTML = buildFooter();

    // Año actual en el pie
    var yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Rellenar enlaces sociales marcados con data-social="whatsapp|instagram|strava"
    var socialLabels = { whatsapp: "WhatsApp", instagram: "Instagram", strava: "Strava" };
    document.querySelectorAll("[data-social]").forEach(function (a) {
      var kind = a.getAttribute("data-social");
      if (!SITE.social[kind]) return;
      a.setAttribute("href", SITE.social[kind]);
      if (!a.innerHTML.trim() && ICON[kind]) {
        a.innerHTML = ICON[kind] + '<span>' + socialLabels[kind] + '</span>';
      }
    });

    // Menú móvil
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      });
      // Cerrar al pulsar un enlace (móvil)
      menu.addEventListener("click", function (e) {
        if (e.target.tagName === "A" && menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
      // Cerrar con Escape
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
