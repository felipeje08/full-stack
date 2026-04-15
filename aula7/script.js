let idades = [25, 30, 35, 40];
console.log(idades);

idades.push(45);
console.log(idades);

idades.pop();
console.log(idades);

console.log(idades[0]);
console.log(idades[2]);
console.log(idades.length);

let retangulo_1 = {
    x:10,
    y:10,
    largura:30,
    altura:40,
    color:"red"
};
console.log(retangulo_1);

let retangulo_2 = {
    x:50,
    y:50,
    largura:30,
    altura:40,
    color:"blue"
};
console.log(retangulo_2);//

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(60,10,50,50);
ctx.closePath();

//linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,1.5*Math.PI,5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",250,350)
ctx.closePath();

