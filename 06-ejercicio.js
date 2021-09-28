/* Colocar una lista en el documento HTML 
colocar un boton que diga agregar elemento
cada vez que le den clic al boton debe agregar un elmento a la lista*/

let nLista = 1;
const $listaPadre = document.querySelector("#lista");
const $boton = document.querySelector("#agregar");

$boton.addEventListener("click", () => {
  const listaHijo = document.createElement("li");
  listaHijo.textContent = `Elemento ${nLista}`;
  nLista += 1;
  $listaPadre.appendChild(listaHijo);
});
