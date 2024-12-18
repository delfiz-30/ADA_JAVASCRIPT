const prompt = require('prompt-sync')();

const RANGO_MINIMO = 4
const RANGO_MAXIMO = 10

let numero = parseFloat(prompt("Ingresa un numero:"));

if(RANGO_MINIMO < numero > RANGO_MAXIMO){
    console.log("El numero se encuentra dentro del rango definido.")
}
else{
    console.log("El numero se encuentra fuera del rango definido.")
}
