let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

let bola = {
    x: 100,
    y: 100,
    raio: 30,
    img: new Image(),
    carregada: false,

    desenha: function() {
        if (this.carregada) {
            ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2*this.raio, 2*this.raio);
        }
    }
};

// ===== CARREGAR IMAGEM =====
bola.img.src = "bola.png";

bola.img.onload = function() {
    bola.carregada = true;
};

// ===== ANIMAÇÃO =====
function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bola.desenha();
    requestAnimationFrame(animacao);
}
animacao();

// ===== MOUSE =====
canvas.addEventListener("mousemove", function(event) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = event.clientX - rect.left;
    let y_mouse = event.clientY - rect.top;

    // limitar
    bola.x = Math.max(bola.raio, Math.min(canvas.width - bola.raio, x_mouse));
    bola.y = Math.max(bola.raio, Math.min(canvas.height - bola.raio, y_mouse));
});