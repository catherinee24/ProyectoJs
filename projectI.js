const numeros = [1, 2, 3, 4, 5, 6, 7, 9]; // No tocar

// Esta funcion regresa el valor decifrado
function retornarValor(index) {
    return numeros[Math.abs(index) % numeros.length];
}

const arrEncryptado = [3, 23, 21, 12, 10, 2, 43, 100, 432, 34];
const newArr = [];
let solucion;

// Escribe aquí el código que va
// a ayudar a Dora abrir su puerta

for (let i = 0; i < arrEncryptado.length; i = i + 1) {
    let valor = arrEncryptado[i];
    if (valor % 2) {
        newArr[i] = retornarValor(valor + 8);
    } else {
        newArr[i] = retornarValor(valor - 12);
    }
}

let min = 10;
let max = 0;

for (let i = 0; i < newArr.length; i = i + 1) {
    if (newArr[i] > max) max = newArr[i];
    if (newArr[i] < min) min = newArr[i];
}

let resultado = min * max ** 4;

console.log(resultado);
