/* Redirige a la direccion nueva. El <meta refresh> ya lo hace solo; esto lo
   repite por si el navegador lo tuviera desactivado, y usa replace() para no
   dejar la pagina vieja en el historial (asi el boton Atras no rebota). */
(function () {
  'use strict';
  var DESTINO = 'https://portafolio-creativo.github.io/tio-rene-invaders/';
  if (window.location.href.indexOf(DESTINO) === 0) { return; }
  window.location.replace(DESTINO);
})();
