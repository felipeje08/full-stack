<<<<<<< HEAD
// ===== CONFIGURAÇÃO DOS CANVAS =====
const canvas1 = document.getElementById("tela");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.getElementById("tela2");
const ctx2 = canvas2.getContext("2d");

// Coordenada Central para Simetria
const cX = 150;
const cY = 150;

// ===== FUNÇÕES DE DESENHO LIMPO =====
function desenharRetangulo(ctx, x, y, w, h, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, w, h);
}

function desenharLinha(ctx, x1, y1, x2, y2, cor, largura = 1) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
=======
// ===== PEGAR CANVAS =====
let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

let canvas2 = document.getElementById("tela2");
let ctx2 = canvas2.getContext("2d");

// ===== FUNÇÕES =====

function desenhar_quadrado(ctx, x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(ctx, x1, y1, x2, y2, cor) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
>>>>>>> 3aae19dab20b13d0f8ef2e82862dfacd17ab8672
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

<<<<<<< HEAD
function desenharCirculo(ctx, x, y, r, cor, borda = false, corBorda = "green") {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    if (borda) {
        ctx.strokeStyle = corBorda;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

// DESENHO 1:

desenharRetangulo(ctx1, 0, 0, 300, 300, "white");
ctx1.strokeStyle = "black";
ctx1.lineWidth = 1;
ctx1.strokeRect(0, 0, 300, 300);

// 2. Elementos dos Cantos (Quadrados e Formas em L)
desenharRetangulo(ctx1, 0, 0, 55, 55, "blue");   // Superior Esq
desenharRetangulo(ctx1, 245, 0, 55, 55, "red");  // Superior Dir

// L Amarelo (Inferior Esq)
desenharRetangulo(ctx1, 0, 245, 30, 55, "yellow");
desenharRetangulo(ctx1, 30, 275, 50, 25, "yellow");

// L Preto (Inferior Dir)
desenharRetangulo(ctx1, 270, 245, 30, 55, "black");
desenharRetangulo(ctx1, 220, 275, 50, 25, "black");

// 3. Formas Laterais Cianas
desenharRetangulo(ctx1, 0, 125, 30, 50, "cyan");    // Esquerda
desenharRetangulo(ctx1, 270, 138, 30, 24, "cyan");  // Direita

// 4. Estrutura Central: Quadrado Vermelho e Eixos
desenharRetangulo(ctx1, 112, 150, 38, 38, "red");

// Linha Verde Horizontal
desenharLinha(ctx1, 0, 150, 112, 150, "green");   // Esq
desenharLinha(ctx1, 150, 150, 300, 150, "green"); // Dir

desenharLinha(ctx1, 150, 150, 150, 245, "grey");

desenharLinha(ctx1, 55, 55, 150, 150, "blue");
desenharLinha(ctx1, 245, 55, 150, 150, "red");

desenharCirculo(ctx1, 150, 112, 15, "cyan", true, "blue");

// Círculos Amarelos (Borda Verde)
desenharCirculo(ctx1, 85, 215, 15, "yellow", true, "green");
desenharCirculo(ctx1, 215, 215, 15, "yellow", true, "green");

// Arcos Verdes Superiores (Semicírculos)
ctx1.strokeStyle = "green";
ctx1.beginPath(); ctx1.arc(150, 150, 45, Math.PI, 0); ctx1.stroke();
ctx1.beginPath(); ctx1.arc(150, 150, 75, Math.PI, 0); ctx1.stroke();


ctx1.beginPath(); ctx1.arc(150, 150, 65, Math.PI * 0.75, Math.PI); ctx1.stroke();

ctx1.beginPath(); ctx1.arc(150, 150, 50, 0, Math.PI * 0.5); ctx1.stroke();
ctx1.beginPath(); ctx1.arc(150, 150, 75, 0, Math.PI * 0.5); ctx1.stroke();

// 6. Semicírculo Ciano da Base
ctx1.beginPath();
ctx1.fillStyle = "cyan";
ctx1.arc(150, 300, 55, Math.PI, 0);
ctx1.fill();
ctx1.strokeStyle = "green";
ctx1.stroke();

// 7. Texto
ctx1.fillStyle = "#333";
ctx1.font = "22px Arial";
ctx1.fillText("Canvas", 115, 55);

// DESENHO 2:

desenharRetangulo(ctx2, 0, 0, 300, 300, "#00ffbfff"); // Céu
desenharCirculo(ctx2, 230, 70, 40, "#ffff55");      // Sol
desenharRetangulo(ctx2, 0, 230, 300, 70, "gray");   // Chão

// Rio
desenharRetangulo(ctx2, 0, 210, 45, 90, "#5588ff");
desenharRetangulo(ctx2, 45, 255, 145, 45, "#5588ff");

// Casa
desenharRetangulo(ctx2, 115, 175, 80, 65, "#7a4a1a"); // Parede
desenharRetangulo(ctx2, 125, 190, 20, 18, "#66ccff"); // Janela
desenharRetangulo(ctx2, 165, 190, 20, 18, "#66ccff"); // Janela
desenharRetangulo(ctx2, 147, 205, 15, 35, "#4d2d00"); // Porta

// Telhado
ctx2.beginPath();
ctx2.fillStyle = "#e0664c";
ctx2.moveTo(105, 175); ctx2.lineTo(205, 175); ctx2.lineTo(155, 135);
ctx2.fill();

// Árvores
desenharRetangulo(ctx2, 48, 220, 15, 40, "#7a4a1a"); // Tronco
desenharCirculo(ctx2, 55, 205, 25, "#3d8b2f");      // Copa
desenharRetangulo(ctx2, 245, 240, 12, 35, "#7a4a1a"); // Tronco
desenharCirculo(ctx2, 251, 230, 20, "#3d8b2f");      // Copa
=======
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
>>>>>>> 3aae19dab20b13d0f8ef2e82862dfacd17ab8672
