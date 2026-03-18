console.log("Olá, mundo!");
console.log("Bem-vindo ao curso de Java e C++ na FEI!");
//prompt("Qual é o seu nome?");
//let nome = prompt("Qual é o seu nome?");
//console.log(nome);
//--window.alert("seu nome é " + nome);

//console.log("atividade 1)");
for (let i=1; i<=100; i+=2) {
    console.log(i);
}

//console.log("atividade 1");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//console.log("atividade 2");
for (let i=1; i<=500; i++) 
    if (i % 5 === 0) {
        console.log(i);
    }

//console.log("atividade 3");
//let numero = prompt("Digite um número inteiro positivo:");

//for (let i = numero; i >= 0; i--) {
    //console.log(i);
//}

console.log("atividade 4");

let numero = parseInt(prompt("Digite um número inteiro:"));
let fatorial = 1;
let multiplicacao = "";

for (let i = numero; i >= 1; i--) {
    fatorial = fatorial * i;
    multiplicacao += i;

    if (i > 1) {
        multiplicacao += " x ";
    }
}

console.log(numero + "! = " + multiplicacao + " = " + fatorial);
