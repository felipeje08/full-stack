let retangulo_1 = {
    x: 10,
    y: 10,
    largura: 30,
    altura: 40,
    color: "red"
};

let retangulo_2 = {
    x: 50,
    y: 50,
    largura: 30,
    altura: 40,
    color: "blue"
};

let retangulo_3 = {
    x: 100,
    y: 100,
    largura: 30,
    altura: 40,
    color: "green"
};

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

let img = new Image();
img.src = "bola.png";

function desenhaRetangulo(res) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = res.color;
    ctx.fillRect(res.x, res.y, res.largura, res.altura);
    ctx.closePath();
}

function desenha_bola() {
    if (img.complete) {
        ctx.drawImage(img, 200, 200, 50, 50);
    }
}

let mov = 1;

function desenhar() { 
    ctx.clearRect(0, 0, 400, 400);

    if (retangulo_1.x >= 400 - retangulo_1.largura) {
        mov = -1;
    }
    if (retangulo_1.x <= 0) {
        mov = 1;
    }

    retangulo_1.x += mov;

    desenhaRetangulo(retangulo_1);
    desenhaRetangulo(retangulo_2);
    desenhaRetangulo(retangulo_3);

    desenha_bola();

    requestAnimationFrame(desenhar);
}

img.onload = function() {
    desenhar();
};

document.addEventListener("keydown", function(event) {
    var tecla = event.key;
    var velocidade = 5;

    if (tecla === "ArrowUp") retangulo_2.y -= velocidade;
    if (tecla === "ArrowDown") retangulo_2.y += velocidade;
    if (tecla === "ArrowLeft") retangulo_2.x -= velocidade;
    if (tecla === "ArrowRight") retangulo_2.x += velocidade;
});

document.addEventListener('mousemove', function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    retangulo_3.x = x_mouse;
    retangulo_3.y = y_mouse;
});