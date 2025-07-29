// lista donde se guardarán los amigos agregados
let amigos = [];

// Función que se ejecutará al clickear el botón "Agregar Amigo" en la página
function agregarAmigo(){
    
    // Se recupera el elemento INPUT del DOM y se guarda en una variable
    let inputAmigo = document.getElementById('amigo');
    
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
        
        // Se borra el contenido del input para ingresar otra cadena.
        inputAmigo.value = '';
        
        // Se posiciona el foco encima del input luego de clickear a fin de evitar darle click cada vez que querramos ingresar una cadena nueva.
        inputAmigo.focus();

    }else{
        // Se recupera el elemento Unordered List (<ul>) que almacena los nombres de los amigos agregados.
        let listaAmigos = document.getElementById('listaAmigos');
        
        // Se agrega la cadena válida recortada al array de amigos.
        amigos.push(inputAmigo.value.trim());
        inputAmigo.value = '';
        inputAmigo.focus();
    }
}