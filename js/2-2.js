// Cambiamos valores hardcodeados por variables
let posicionX = 23;
let posicionY = 23;

document.addEventListener("DOMContentLoaded", function() {
    anima();
})

function dibuja() {
    var canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    // Tablero
    ctx.strokeRect(2, 2, 492, 242);

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

function anima() {
    var canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    requestAnimationFrame(anima);
    dibuja();
    //console.log(posicionX, posicionY);
}

document.addEventListener("keydown", function(event) {
    // console.log(event.key);
    // Nombre teclas: ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    switch (event.key) {
        case "ArrowUp":
            if (!seChoca(posicionX, posicionY - 10)) {
                posicionY -= 10;
            }
            break;
        case "ArrowDown":
            if (!seChoca(posicionX, posicionY + 10)) {
                posicionY += 10;
            }
            break;
        case "ArrowLeft":
            if (!seChoca(posicionX - 10, posicionY)) {
                posicionX -= 10;
            }
            break;
        case "ArrowRight":
            if (!seChoca(posicionX + 10, posicionY)) {
                posicionX += 10;
            }
            break;
        default:
            break;
    }
})

function seChoca(x, y) {
    // Se choca es cierto cuando las coordenadas del centro de la ficha
    // son menores al punto en el que, estando ahí, borde toca con el rectángulo
    // Estos puntos son: cuando x<23, cuando y<23, cuando x>477  o cuando y>227
    if (x < 23 || y < 23 || x > 477 || y > 227) {
        return true;
    }
    return false;
}

