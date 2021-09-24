/* document.write('Hola desde javascript'); */

/* Devuelve un arreglo con los elementos que tengan esa etiqueta */

//Forma anterior
/* const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'Titulo cambiado desde javascript';

const texto = document.getElementById('text');
texto.innerHTML = 'Este texto esta escrito desde JavaScript';
texto.style.background = 'blue';
texto.style.color = 'white';

console.log(texto); */
/* Obtiene un elemento por Id */
document.getElementById
/* Obtiene todos los elementos de una clase y devuelve un arreglo */
document.getElementsByClassName
/* Obtiene todos los elementos pór nombre y devuelve un areglo */
document.getElementsByName

//Nueva forma y 'mejor'
const texto = document.querySelector('#text'); //Engloba todos los elementos
texto.textContent = '<p>Estoy escribiendo desde JavaScript</p>';

/* Crear elementos en HTML */
const div = document.createElement('div');
const body = document.querySelector('body');

body.appendChild(div);
