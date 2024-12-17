const prompt = require('prompt-sync')();

let numero = parseFloat(prompt( `ingresa un numero:`));
let doble = numero *2

console.log(`El doble de tu numero es: ${doble}`);