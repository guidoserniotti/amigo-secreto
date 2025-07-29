// lista donde se guardarán los amigos agregados
let amigos = [];


function agregarAmigo(){                                // Función que se ejecutará al clickear el botón "Agregar Amigo" en la página
    let inputAmigo = document.getElementById('amigo');  // Se recupera el elemento INPUT del DOM y se guarda en una variable
    
    /**
     * Se hace uso de la función .trim(). Elimina cualquier espacio en blanco que haya al inicio o al final de un string.
     * El caso de prueba básico a cubrir es clickear el botón sin agregar nada (lo que se considera la cadena "") e ingresar muchos espacios ("   ").
     * Ej:
     *  - let cadena1 = ""
     *  - cadena1.trim(); --salida--> ""
     *  - let cadena2 = "   "
     *  - cadena2.trim(); --salida--> ""
     * Se utiliza en el siguiente "if" para comprobar que el texto ingresado fue una cadena vacía ("").
     * En este caso, el único caso de prueba que es incorrecto pero que si pasa el "if" es por ejemplo, la cadena "G  ui d    o" ya que .trim() no comprueba espacios entre los caracteres de la cadena.
     * Demás casos de prueba como "    Guido", "Guido    " o "  Guido  " son recortados y omiten el if correctamente.
     */
    if (inputAmigo.value.trim()==''){
        alert('Por favor, inserte un nombre válido; solo letras, sin números, ni cadena vacía)');
        inputAmigo.value = '';                          // Se borra el contenido del input para ingresar otra cadena.
        inputAmigo.focus();                             // Se posiciona el foco encima del input luego de clickear a fin de evitar darle click cada vez que querramos ingresar una cadena nueva.
    }else{
        let listaAmigos = document.getElementById('listaAmigos');       // Se recupera el elemento Unordered List (<ul>) que almacena los nombres de los amigos agregados.
        amigos.push(inputAmigo.value.trim());                           // Se agrega la cadena válida recortada al array de amigos.
        inputAmigo.value = '';                                          // Se borra el contenido del input para ingresar otra cadena.
        inputAmigo.focus();                                             // Se posiciona el foco encima del input luego de clickear a fin de evitar darle click cada vez que querramos ingresar una cadena nueva.
    }
}