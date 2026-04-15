/* ////////////////////////
      INDEX (CSS)
//////////////////////// */


/* -----------------------
      VARIABLES
----------------------- */
var navBoton = document.getElementById('navBoton');
var navMenu = document.getElementById('navMenu');

/* -----------------------
      FUNCIONES
----------------------- */

function mostrarOcultarNav() {
  navMenu.classList.toggle('ocultarNavMenu');
}

/* -----------------------
      EVENTOS
----------------------- */


navBoton.addEventListener('click', mostrarOcultarNav);