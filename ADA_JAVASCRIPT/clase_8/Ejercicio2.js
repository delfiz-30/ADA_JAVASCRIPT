const prompt = require('prompt-sync')();

let numero = parseFloat(prompt( `ìngresa un numero:`));

if (numero > 0){
    console.log( `El numero es positivo.`);
}
else if (numero < 0){
    console.log(`El numero es negativo.`);
}
else{
    console.log( `El numero es cero.`);
}