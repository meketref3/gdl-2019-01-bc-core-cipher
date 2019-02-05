window.cipher = {
  // ...
  //creo mi funcion con los parameros de string y offset
  encode :  (offsetCifrar, textoCifrado) =>{
      //creo mi variable de mensaje cifrado
      let mensajeCipher = '';
      /*hago mi for, mi variable de inicializacion es i=0,
      es 0 por que va a empezar a contar desde A que es 0,
      mientras i es menor a la cadena de caracteres que me esta mandando,
      i va a sumar uno mas.*/
      for ( let i = 0; i <  textoCifrado.length; i++) {
         /*creo mi variable de caracter de tipo string con charCodeAt para que me codifique
         mi texto a ASCII  y con forme a mi i que esta en mi for*/
         let caracter = textoCifrado.charCodeAt(i);
         //creo mi variable para utilizarla para desplazar mi textoCifrado
         let textoFormula;
         //creo una variable para almacenar la nueva letra que se va a cifrar.
         let nuevaLetra;
               /*hago mi condicional donde solo estoy utilizando mi cadena de string (caracter)
               donde solo uso MAYUSCULAS. solo se va a utilizar SI caracter mayor o igual a 65(A)
               y SI caracter es menor o igual a 90 (Z)*/
             if (caracter >= 65 && caracter <= 90 ) {
                /*utilizo la formula de michell para hacer el desplazamiento, mi variable textoFormula es igual
                a caracter - 65 (A)+ argumento de tipo cadena con el desplazaminto de lugares que quiero mover mis
                letras del alfabeto*/
                textoFormula   = ((caracter - 65 + parseInt(offsetCifrar)) % 26 + 65);
                      //mi almaceno el valor de mi letra cifrada y se convierte en caracter MAYUSCULA
                      // y tiene el desplazamiento del usuario
                      nuevaLetra = String.fromCharCode(textoFormula);
                           //mi nuevo nensaje se imprime cifrado en MAYUSCULAS
                           mensajeCipher= mensajeCipher+nuevaLetra;
            //Aumento mis condiciones con un else if donde si no es MAYUSCULA tambien convertira minusculas.
            }else if(caracter >= 97 && caracter <= 122){
              /*utilizo la formula de michell para hacer el desplazamiento, mi variable textoFormula es igual
              a caracter - 97 (a)+ argumento de tipo cadena con el desplazaminto de lugares que quiero mover mis
              letras del alfabeto*/
              textoFormula = ((caracter - 97 + parseInt(offsetCifrar)) % 26 + 97);
                   //mi almaceno el valor de mi letra cifrada y se convierte en caracter minusculas
                  // y tiene el desplazamiento del usuario
                  nuevaLetra = String.fromCharCode(textoFormula);
                       //mi nuevo nensaje se imprime cifrado en minusculas
                       mensajeCipher= mensajeCipher+nuevaLetra;
          //hago otra sentencia para respetar los espacios.
        }else if (caracter ===32){
           //anade solo el especio
            mensajeCipher = mensajeCipher +' ';
            //hago una centencia para colocar numeros 
          }
      }
      //me retormna mi mensajeCipher para que aparezca
      return mensajeCipher;
  },

  decode :  (offsetDescifrar, textoDescifrado)=>{
      //creo mi variable de mensaje cifrado
      let mensajeDescipher = '';
      //variable de textoFormulaDescifrado
      let textoFormulaDescifrado;
      //creo una variable para almacenar la nueva letra que se va a descifrar.
      let nuevaLetraDescifrado;
          /*hago mi for, mi variable de inicializacion es i=0,
          es 0 por que va a empezar a contar desde A que es 0,
          mientras i es menor a la cadena de caracteres que me esta mandando,
           i va a sumar uno mas.*/
           for ( let j = 0; j <  textoDescifrado.length; j++) {
               /*creo mi variable de caracter de tipo string con charCodeAt para que me codifique
               mi texto  y con forme a mi i que esta en mi for*/
               let caracterDescifrado = textoDescifrado.charCodeAt(j);
                   /*hago mi condicional donde solo estoy utilizando mi cadena de string (caracter)
                   donde solo uso MAYUSCULAS. solo se va a utilizar SI caracter mayor o igual a 65(A)
                   y SI caracter es menor o igual a 90 (Z)*/
                  if (caracterDescifrado >= 65 && caracterDescifrado <= 90 ) {
                          /*utilizo la formula de michell para hacer el desplazamiento, mi variable textoFormula es igual
                          a caracter - 65 (A)+ argumento de tipo cadena con el desplazaminto de lugares que quiero mover mis
                          letras del alfabeto*/
                          textoFormulaDescifrado = ((caracterDescifrado + 65 - parseInt(offsetDescifrar)) % 26 + 65);
                          //mi almaceno el valor de mi letra cifrada y se convierte en caracter minusculas
                         // y tiene el desplazamiento del usuario
                         nuevaLetraDescifrado = String.fromCharCode(textoFormulaDescifrado);
                         //mi nuevo nensaje se imprime cifrado en MAYUSCULAS
                         mensajeDescipher= mensajeDescipher+nuevaLetraDescifrado;
                         //Aumento mis condiciones con un else if donde si no es MAYUSCULA tambien convertira minusculas.
                       }else if (caracterDescifrado >= 97 && caracterDescifrado <= 122) {
                           /*utilizo la formula de michell para hacer el desplazamiento, mi variable textoFormula es igual
                           a caracter - 97 (a)+ argumento de tipo cadena con el desplazaminto de lugares que quiero mover mis
                           letras del alfabeto*/
                           textoFormulaDescifrado = ((caracterDescifrado  - 97 - parseInt(offsetDescifrar)) % 26 + 97);
                                //mi almaceno el valor de mi letra cifrada y se convierte en caracter minusculas
                               // y tiene el desplazamiento del usuario
                               nuevaLetraDescifrado = String.fromCharCode(textoFormulaDescifrado);
                                    //mi nuevo nensaje se imprime cifrado en minusculas
                                   mensajeDescipher= mensajeDescipher+nuevaLetraDescifrado;
                       //hago otra sentencia para respetar los espacios.
                     } else if (caracterDescifrado ===32){
                        //anade solo el especio
                         mensajeDescipher = mensajeDescipher +' ';
            }
      }
      //me retormna mi mensajeDipher para que aparezca
      return mensajeDescipher;
    }
};
