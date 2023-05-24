import { getAnimeQuotes } from './api.js';

let ubicacionPrincipal = window.pageYOffset;
let $div = document.querySelector("div");

window.addEventListener("scroll", function () {
  let desplazamientoActual = window.pageYOffset;

  if (ubicacionPrincipal >= desplazamientoActual) {
    $div.style.top = "0px";
    console.log('Ubicacion Principal');
    console.log(ubicacionPrincipal);
    console.log('Desplazamiento');
    console.log(desplazamientoActual);
  } else {
    $div.style.top = "-80px";
    console.log('Ubicacion Principal');
    console.log(ubicacionPrincipal);
    console.log('Desplazamiento');
    console.log(desplazamientoActual);
  }

  ubicacionPrincipal = desplazamientoActual;

  // Llama a la función getAnimeQuotes() del archivo api.js
  getAnimeQuotes();
});
