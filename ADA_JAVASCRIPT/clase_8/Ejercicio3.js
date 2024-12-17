const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt(`Ingresar el primer numero:`));
let numero2 = parseFloat(prompt(`Ingresar el segundo numero:`));

let suma = numero1 + numero2;

console.log(`La suma de ambos numeros es: ${suma}`);