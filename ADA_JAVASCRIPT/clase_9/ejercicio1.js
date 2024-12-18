const prompt = require('prompt-sync')();

let numero1 = parseFloat (prompt("Ingresa el primer numero:"));
let numero2 = parseFloat (prompt("Ingresa el segundo numero:"));

if (numero1 > numero2){
    console.log("El primer numero es mayor.");
}
else if (numero1 < numero2){
    console.log("El segundo numero es mayor.");
}
else {
    console.log("Ambos numeros son iguales.");
}
