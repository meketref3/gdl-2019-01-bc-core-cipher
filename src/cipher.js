window.cipher = {
  // ...
  //creo mi funcion con los parameros de string y offset
  encode : (textoCifrado, offsetCifrar) => {
      //creo mi variable de mensaje cifrado
      let mensajeCipher = '';

      //const textoAcifrar = String.length;

      /*hago mi for, mi variable de inicializacion es i=0,
      es 0 por que va a empezar a contar desde A que es 0,
      mientras i es menor a la cadena de caracteres que me esta mandando,
      i va a sumar uno mas.*/
      for ( let i = 0; i <  textoCifrado.length; i++) {
  /*creo mi variable de caracter de tipo string con charCodeAt para que me codifique
  mi texto  y con forme a mi i que esta en mi for*/
         let caracter = textoCifrado.charCodeAt(i);
          /*hago mi condicional donde solo estoy utilizando mi cadena de string (caracter)
          donde solo uso MAYUSCULAS. solo se va a utilizar SI caracter mayor o igual a 65(A)
          y SI caracter es menor o igual a 90 (Z)*/
              if (caracter >= 65 && caracter <= 90 ) {
                /*utilizo la formula de michell para hacer el desplazamiento, mi variable textoFormula es igual
                a caracter - 65 (A)+ argumento de tipo cadena con el desplazaminto de lugares que quiero mover mis
                letras del alfabeto*/
                  let textoFormula = ((caracter - 65 + parseInt(offsetCifrar)) % 26 + 65);
                  /*mi variable mensajeCipher va a ser igual a esa misma variable mas mi fromCharCode
                  mas mi string.fromCharCode para que codifique a letras y le sumo mi formula de
                  desplazamiento*/
                 mensajeCipher = mensajeCipher + String.fromCharCode(textoFormula);
          }
      }
      //me retormna mi mensajeCipher para que aparezca
      return mensajeCipher;
  }

};
