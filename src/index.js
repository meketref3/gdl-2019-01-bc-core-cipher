
//variable para activar el boton de de cifrar cogigo
const botonTextoCifrar = document.getElementById('botonCifrar');
//Hacer la funcion y activar la caja de texto cuando hace click al boton de cifrar
botonTextoCifrar.addEventListener('click', function() {
  //variable de texto de la caja de texto que va a evaluar.
    const textoCifrado = document.getElementById('cajaMensajeCifrar').value;
    //variable de input de numero para desplazar el mensaje que va a evaluar
    const offsetCifrar = document.getElementById('numerOffsetCifrar').value;
    //llama el resultado del cifrado con las variables de textoCifrado y offsetCifrar
   document.getElementById('resultadoMensajeCifrado').innerHTML = window.cipher.encode(textoCifrado, offsetCifrar);
});


//variable para activar el boton de de cifrar cogigo
const botonTextoDescifrar = document.getElementById('botonDescifrar');
//Hacer la funcion y activar la caja de texto cuando hace click al boton de cifrar
botonTextoDescifrar.addEventListener('click', function() {
  //variable de texto de la caja de texto que va a evaluar.
    const textoDescifrado = document.getElementById('cajaMensajeDescifrar').value;
    //variable de input de numero para desplazar el mensaje que va a evaluar
    const offsetDescifrar = document.getElementById('numerOffsetDescifrar').value;
    //llama el resultado del cifrado con las variables de textoCifrado y offsetCifrar
   document.getElementById('resultadoMensajeDescifrado').innerHTML = window.cipher.encode(textoDescifrado, offsetDescifrar);
});
