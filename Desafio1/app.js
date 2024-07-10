let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafío";

let num1 = 0;
let num2 = 0;
let suma = 0;
let ciudadDeBrasil = "";


function clickConsole() {
    alert("El botón fue clicado");
}

function clickAlert() {
    alert("Yo amo JS");
}

function clickSuma() {
    num1 = parseInt(prompt("Ingrese el primer número:"));
    num2 = parseInt(prompt("Ingrese el segundo número:"));
    suma = num1 + num2;
    alert(`La suma de los dos números es: ${suma}`);
}

function clickPrompt() {
    ciudadDeBrasil = prompt("Ingrese el nombre de una ciudad de Brasil:");
    alert(`Estuve en ${ciudadDeBrasil} y me acordé de ti`);

}