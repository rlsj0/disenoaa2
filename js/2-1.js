document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    // Tablero
    ctx.strokeRect(2, 2, 497, 247);

    // Columna
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(250, 105);
    ctx.lineTo(230, 125);
    ctx.lineTo(250, 145);
    ctx.lineTo(270, 125);
    ctx.lineTo(250, 105);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    // Ficha (círculo)
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(23, 23, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.endPath();
})
