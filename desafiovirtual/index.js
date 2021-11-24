const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');
const sumar = document.getElementById('sumar');
var total;

sumar.addEventListener('click', result);
function result() {
    total = parseInt(num1.value) + parseInt(num2.value);
    resultado.innerHTML = total
    console.log(total)
}