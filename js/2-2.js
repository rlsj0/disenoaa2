// Cambiamos valores hardcodeados por variables
let posicionX = 23;
let posicionY = 23;

document.addEventListener("DOMContentLoaded", function() {
    // Ojo: pasarle a setInterval una función sin paréntesis:
    setInterval(drawCanvas, 16);
})

function drawCanvas() {
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
    ctx.arc(posicionX, posicionY, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

// addEventListener con las teclas
//
document.addEventListener("keydown", function(event) {
    console.log(event.key);
    // Nombre teclas: ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    switch (event.key) {
        case "ArrowUp":
            posicionY -= 5;
            break;
        case "ArrowDown":
            posicionY += 5;
            break;
        case "ArrowLeft":
            posicionX -= 5;
            break;
        case "ArrowRight":
            posicionX += 5;
            break;
        default:
            break;
    }
})
