/* ==========================================================================
   Miércorres Running Club — Envío del formulario de contacto
   Envía los datos a un Google Apps Script (Web App) que reenvía el mensaje
   por correo a varios destinatarios. Configura la URL en APPS_SCRIPT_URL.
   Instrucciones completas en README.md.
   ========================================================================== */
(function () {
  "use strict";

  /* EDITA: pega aquí la URL de tu Web App de Apps Script (termina en /exec) */
  var APPS_SCRIPT_URL = "https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXX/exec";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var statusEl = document.getElementById("form-status");
  var btn = document.getElementById("submit-btn");

  function setStatus(msg, state) {
    statusEl.textContent = msg;
    statusEl.setAttribute("data-state", state || "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validación nativa del navegador
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Honeypot anti-spam: si viene relleno, ignoramos en silencio
    if (form.website && form.website.value.trim() !== "") {
      setStatus("¡Gracias! Tu mensaje se ha enviado.", "ok");
      form.reset();
      return;
    }

    var data = new FormData(form);

    // Aviso si aún no se ha configurado la URL de Apps Script
    if (APPS_SCRIPT_URL.indexOf("XXXX") !== -1) {
      setStatus("Formulario en modo demostración: configura APPS_SCRIPT_URL en js/form.js para activar el envío.", "error");
      return;
    }

    btn.disabled = true;
    var prevText = btn.textContent;
    btn.textContent = "Enviando…";
    setStatus("Enviando tu mensaje…", "");

    fetch(APPS_SCRIPT_URL, { method: "POST", body: data })
      .then(function (res) { return res.json(); })
      .then(function (out) {
        if (out && out.result === "success") {
          setStatus("¡Gracias! Tu mensaje se ha enviado correctamente.", "ok");
          form.reset();
        } else {
          throw new Error(out && out.message ? out.message : "Error desconocido");
        }
      })
      .catch(function () {
        setStatus("No hemos podido enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.", "error");
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = prevText;
      });
  });
})();
