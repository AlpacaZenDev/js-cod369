const txtn1 = document.getElementById('n1');
const txtn2 = document.getElementById('n2');
const btnSumar = document.getElementById('sumar');
const respuesta = document.getElementById('respuesta');

btnSumar.addEventListener('click', sumar);

function sumar() {
    let op1 = parseFloat(txtn1.value);
    let op2 = parseFloat(txtn2.value);
    let resultado = op1 + op2;
    respuesta.innerText = resultado;

}

