//bloque de bienvenida, el nombre se queda.

//lo que no se va a ver.
document.getElementById('codificarYdecodificar').classList.add('display_none');
document.getElementById('mensajeCifrado').classList.add('display_none');
document.getElementById('mensajeDescifrado').classList.add('display_none');
//variable de bienvenida.
const botonTextoNombre=document.getElementById('botoNombre');
//hacer la funcion para activar el saludo.

botonTextoNombre.addEventListener('click',function(){
//variable de input de nombre.
const nombreInput =document.getElementById('nombre').value;
document.getElementById('darBienvenida').classList.add('display_none');
document.getElementById('darBienvenida').classList.remove('display_block');


//llamar de H1 de darBienvenida
document.getElementById('resultadoDelNombre').innerHTML = 'Hola '+nombreInput;
document.getElementById('codificarYdecodificar').classList.add('display_block');
});

//links de cifrado.
//variable de activado.
const linkActivar = document.getElementById('linkCodificar');
const linkDesactivar = document.getElementById('linkDecodificar');
//lo que se va a ver y no con los links.
linkActivar.addEventListener('click',function(){
  document.getElementById('linkCodificar').classList.add('linkActivado');
  document.getElementById('linkDecodificar').classList.add('linkActivado');
  document.getElementById('mensajeDescifrado').classList.add('display_none');
  document.getElementById('mensajeDescifrado').classList.remove('display_block');
  document.getElementById('mensajeCifrado').classList.add('display_block');
  document.getElementById('mensajeCifrado').classList.add('display_none');

});

//lo que se va a ver y no con los links.
linkDesactivar.addEventListener('click',function(){
  document.getElementById('linkCodificar').classList.add('linkActivado');
  document.getElementById('linkDecodificar').classList.add('linkActivado');
  document.getElementById('mensajeDescifrado').classList.add('display_block');
  document.getElementById('mensajeDescifrado').classList.add('display_none');
  document.getElementById('mensajeCifrado').classList.remove('display_block');
  document.getElementById('mensajeCifrado').classList.add('display_none');
});

//bloque de cifrado.

//variable para activar el boton de de cifrar cogigo
const botonTextoCifrar = document.getElementById('botonCifrar');
//Hacer la funcion y activar la caja de texto cuando hace click al boton de cifrar
botonTextoCifrar.addEventListener('click', function() {
  //variable de texto de la caja de texto que va a evaluar.
    const textoCifrado = document.getElementById('cajaMensajeCifrar').value;
    //variable de input de numero para desplazar el mensaje que va a evaluar
    const offsetCifrar = document.getElementById('numerOffsetCifrar').value;
    //llama el resultado del cifrado con las variables de textoCifrado y offsetCifrar
   document.getElementById('resultadoMensajeCifrado').innerHTML = window.cipher.encode(offsetCifrar, textoCifrado);
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
   document.getElementById('resultadoMensajeDescifrado').innerHTML = window.cipher.decode(offsetDescifrar, textoDescifrado);
});
