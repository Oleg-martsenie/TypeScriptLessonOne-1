let first = document.getElementById('numero1'); 
let second = document.getElementById('numero2');
let button = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

function calcular(n1, n2) {
    if(typeof n1 == 'number' && typeof n2 == 'number') {
        return  n1 + n2;
    } else {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1 + n2
    }
}

button.addEventListener('click', function () {
    resultado.innerHTML = calcular(first.value, second.value)
});