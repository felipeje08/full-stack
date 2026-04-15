let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 50, 50);

ctx.fillStyle = "red";
ctx.fillRect(350, 0, 50, 50);

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(400, 0);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "aqua";
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(200, 150, 20, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(0, 200);
ctx.lineTo(400, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(200, 200, 50, 50, Math.PI * 1.5);
ctx.stroke();
