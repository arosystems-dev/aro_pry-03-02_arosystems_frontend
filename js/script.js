/* ////////////////////////
      INDEX (CSS)
//////////////////////// */


/* -----------------------
      VARIABLES
----------------------- */
var navBoton = document.getElementById('navBoton');
var navMenu = document.getElementById('navMenu');
var enlace1 = document.getElementById('enlace1');
var enlace2 = document.getElementById('enlace2');
var enlace3 = document.getElementById('enlace3');


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
enlace1.addEventListener('click', mostrarOcultarNav);
enlace2.addEventListener('click', mostrarOcultarNav);
enlace3.addEventListener('click', mostrarOcultarNav);