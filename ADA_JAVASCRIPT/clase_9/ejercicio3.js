const prompt = require('prompt-sync')();

let condition1 = prompt("Ingresar true o false para la primera condicion:").toLowerCase() === "true";
let condition2 = prompt("Ingresar true o false para la segunda condicion:").toLowerCase() === "true";

console.log(`Condition1 AND Condition2: ${condition1 && condition2}`);
console.log(`NOT Condition1: ${!condition1}`),
console.log(`Condition1 OR Condition2: ${condition1 || condition2}`);

