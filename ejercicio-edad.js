function revisarEdad(){
    const inputEdad = document.querySelector("#edad");
    const valorInputEdad = parseInt(inputEdad.value)

    let edadResultado;

    const parrafoRespuesta = document.querySelector("#respuesta");

    if(valorInputEdad < 18){
        edadResultado = `Tienes ${valorInputEdad} años y eres menor de edad`;
    } else if(valorInputEdad >= 18 && valorInputEdad < 60) {
        edadResultado = `Tienes ${valorInputEdad} años y eres mayor de edad`;
    } else{
        edadResultado = `Tienes ${valorInputEdad} años y eres de la tercera de edad`;
    }

    parrafoRespuesta.textContent = edadResultado;
}