document.getElementById("ol").innerHTML="Texto.novo";

//let nome = prompt("Digite seu nome:");
//let idade = prompt("Digite sua idade:");
//let ano = 2026;

//idade = Number(idade);

//let nasc = ano - idade;

//document.getElementById("respdoexemplo1").innerHTML =
  //"Olá " + nome + ", seu ano de nascimento é " + nasc + "!";

//function mensagem() {
        //alert("Olá");
//}
//function mensagem_2(texto){
        //alert(texto);
//}

//mensagem();
//mensagem_2("exemplo");
//mensagem_2("felipe");
//mensagem_2("ss");

function soma(a, b) { return a + b; }
function subt(a, b) { return a - b; }
function mult(a, b) { return a * b; }
function div(a, b) { return a / b; }

let respSoma = soma(5, 56);
let respSubt = subt(56, 5);
let respMult = mult(5, 10);
let respDiv = div(50, 5);

// mostrar na tela
document.getElementById("soma").innerHTML = respSoma;
document.getElementById("subt").innerHTML = respSubt;
document.getElementById("mult").innerHTML = respMult;
document.getElementById("div").innerHTML = respDiv;




function exemplo2() {
    let x = Number(document.getElementById("in_ex").value);
    let resultado = "";

    for (let i = 1; i <= x; i++) {
        resultado += i + " ";
    }

    document.getElementById("resp_ex2").innerHTML = resultado;
}

function exemplo3() {
    let a = Number(document.getElementById("in_1").value);
    let b = Number(document.getElementById("in_2").value);

    let resp = soma(a,b);
    document.getElementById("resp_ex3").innerHTML = resp;
}

function exemplo4() {
    let a = parseInt(document.getElementById("in_1_ex4").value);
    let b = parseInt(document.getElementById("in_2_ex4").value);

    let resp = 0;

    if (a < 0 || b < 0) {
        resp = a + b;
    } else {
        resp = a * b;
    }

    document.getElementById("respex4").innerHTML = resp;
}