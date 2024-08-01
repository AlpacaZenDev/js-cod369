let respuesta = document.getElementById('respuesta');
let btnEjecutar = document.getElementById('btnEjecutar');

btnEjecutar.addEventListener('click', iniciar);


let frutas = ['manzana', 'pera', 'uva', 'melon', 'platano', 'kiwi', 'mango', 'fresa'];


function iniciar() {
    // respuesta.innerText = frutas.length;
    // respuesta.innerText = frutas[frutas.length - 1];
    frutas.forEach(function(item, index, array){
        // respuesta.innerText += `${item} - ${index} \n`;
        // respuesta.innerText = array;
        // respuesta.innerText = array.join(' - ');
        respuesta.innerText = index;
    });

}

