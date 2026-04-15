// ===== PEGAR CANVAS =====
let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

let canvas2 = document.getElementById("tela2");
let ctx2 = canvas2.getContext("2d");

// ===== FUNÇÕES (OBRIGATÓRIO) =====

function desenhar_quadrado(ctx, x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(ctx, x1, y1, x2, y2, cor) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function desenhar_arco(ctx, x, y, raio, inicio, fim, cor) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.arc(x, y, raio, inicio, fim);
    ctx.stroke();
}

function escrever(ctx, texto, x, y, cor) {
    ctx.fillStyle = cor;
    ctx.font = "16px Arial";
    ctx.fillText(texto, x, y);
}

// ===== DESENHO 1 =====

// fundo
desenhar_quadrado(ctx, 0, 0, 300, 300, "#eeeeee");

// quadrados
desenhar_quadrado(ctx, 0, 0, 50, 50, "blue");
desenhar_quadrado(ctx, 250, 0, 50, 50, "red");
desenhar_quadrado(ctx, 125, 125, 50, 50, "red");

// linhas
desenhar_linha(ctx, 25, 50, 150, 150, "blue");
desenhar_linha(ctx, 275, 50, 150, 150, "red");

// arcos
desenhar_arco(ctx, 150, 150, 80, 0, Math.PI, "green");
desenhar_arco(ctx, 150, 150, 50, 0, Math.PI, "green");

// texto
escrever(ctx, "Canvas", 110, 80, "black");

// ===== DESENHO 2 =====

// fundo
desenhar_quadrado(ctx2, 0, 0, 300, 300, "#7fd3b6");

// sol
ctx2.beginPath();
ctx2.fillStyle = "yellow";
ctx2.arc(240, 60, 30, 0, Math.PI * 2);
ctx2.fill();

// chão
desenhar_quadrado(ctx2, 0, 200, 300, 100, "gray");

// casa
desenhar_quadrado(ctx2, 110, 140, 80, 60, "brown");

// telhado
ctx2.beginPath();
ctx2.moveTo(100, 140);
ctx2.lineTo(200, 140);
ctx2.lineTo(150, 100);
ctx2.fillStyle = "red";
ctx2.fill();

// porta
desenhar_quadrado(ctx2, 140, 160, 20, 40, "#5a2d0c");

// janelas
desenhar_quadrado(ctx2, 120, 150, 20, 20, "lightblue");
desenhar_quadrado(ctx2, 160, 150, 20, 20, "lightblue");

// árvore esquerda
ctx2.beginPath();
ctx2.arc(50, 180, 20, 0, Math.PI * 2);
ctx2.fillStyle = "green";
ctx2.fill();

desenhar_quadrado(ctx2, 45, 180, 10, 30, "brown");

// árvore direita
ctx2.beginPath();
ctx2.arc(250, 180, 20, 0, Math.PI * 2);
ctx2.fillStyle = "green";
ctx2.fill();

desenhar_quadrado(ctx2, 245, 180, 10, 30, "brown");

// rio
ctx2.beginPath();
ctx2.fillStyle = "#4a86e8";
ctx2.moveTo(0, 200);
ctx2.quadraticCurveTo(100, 220, 120, 300);
ctx2.lineTo(0, 300);
ctx2.fill();