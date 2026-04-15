let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 50, 50);

ctx.fillStyle = "blue";
ctx.fillRect(350, 0, 50, 50);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 350, 50, 50);

ctx.fillStyle = "green";
ctx.fillRect(350, 350, 50, 50);

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(100, 150, 20, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(300, 150, 20, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(400, 0);
ctx.lineTo(0, 400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(0, 200);
ctx.lineTo(400, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(200, 200, 50, 0, Math.PI);
ctx.stroke();

ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web", 200, 40);