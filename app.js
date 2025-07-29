// lista donde se guardarán los amigos agregados
let amigos = [];

// Se recupera el elemento Unordered List (<ul>) que almacena los nombres de los amigos agregados.
let listaAmigos = document.getElementById('listaAmigos');

// Se recupera el elemento INPUT del DOM y se guarda en una variable
let inputAmigo = document.getElementById('amigo');

// Función que se ejecutará al clickear el botón "Agregar Amigo" en la página
function agregarAmigo(){
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
        // Limpiar la lista ya existente
        listaAmigos.innerHTML = '';

        // Se agrega la cadena válida recortada al array de amigos.
        amigos.push(inputAmigo.value.trim());
        
        // "for" loop para crear etiquetas <li> (items/elementos de lista) dentro de la ul "listaAmigos".
        // Como "amigos" vive fuera de la función, siempre se actualiza el valor máximo de "i". Además se está limpiando la lista anterior y se renderiza nuevamente con todos los valores agregados en "amigos".
        for (let i=0 ; i<amigos.length ; i++){
            // Se crea  una etiqueta li "itemAmigo", que será el elemento HTML que guardará cada nombre del amigo ingresado.
            let itemAmigo = document.createElement('li');
            
            // Se añade al <ul> "listaAmigos" cada uno de los <li> "itemAmigo".
            listaAmigos.appendChild(itemAmigo);
            
            // Se establece el texto del <li> "itemAmigo" con el valor del elemento del array en la posición "i"
            itemAmigo.innerHTML = amigos[i];
            
            // Operación básica con input similar al ingresar una cadena no válida.
            inputAmigo.value = '';
            inputAmigo.focus();
        }
    }
}

// función para elegir el ganador de la lista de amigos cuando se hace click en el botón "Sortear amigo"
function sortearAmigo(){
    // Se declara la variable cantidad amigos con el fin de controlar que no se sorteen entre 1 o ninguna persona, y también para definir un máximo y poder generar un número aleatorio válido.
    let cantidadAmigos = amigos.length

    // Se controla que al menos haya 2 personas entre las cuales sortear el ganador.
    if (cantidadAmigos<2){
        alert('No se puede sortear, agrega más amigos.')
        inputAmigo.focus();
    }else{
        // Se utiliza la función floor y random de la clase Math para generar un número aleatorio entero entre 0 y la cantidad de amigos dada por la longitud del array "amigos".
        // Esto se hace para que este número se utilice de índice, y que no puedan utilizarse índices no válidos en el array.
        let posicionAmigoGanador = Math.floor(Math.random()*cantidadAmigos);

        // Se guarda en una variable el elemento <ul> con id="resultado"
        let textoGanador = document.getElementById('resultado');

        // Se le actualiza el texto para que muestre el nombre del amigo ganador.
        textoGanador.innerHTML = `Ganador: ${amigos[posicionAmigoGanador]}`
    }
}