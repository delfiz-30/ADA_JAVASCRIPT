const prompt = require('prompt-sync')();

let numero = parseFloat(prompt(`Ingresar numero entero:`));

if (numero % 2 === 0){
    console.log(`El numero es par.`);
}
else {
    console.log(`El numero es impar.`);
}