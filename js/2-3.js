// Cambiamos valores hardcodeados por variables
let posicionX = 23;
let posicionY = 23;
let timeOn = false;
let time = 0.00;
let timer;
let win = false;

document.addEventListener("DOMContentLoaded", function() {
    pintaTiempo();
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
}

document.addEventListener("keydown", function(event) {
    // console.log(event.key);
    // Nombre teclas: ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if (win == true) {
        return;
    }
    if (timeOn == false) {
        if (event.key == "ArrowUp" ||
            event.key == "ArrowDown" ||
            event.key == "ArrowLeft" ||
            event.key == "ArrowRight") {
            timeOn = true;
            comenzarTemporizador();
        }
    }
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

    // CALCULAR CUANDO CHOCA CON EL ROMBO
    // Para saber cuándo se choca con el rombo hay que conocer la función de sus bordes.
    //
    // Los bordes del rombo están definidos por 4 funciones
    // 1) Cuando x es >= que 230 y <0 que 250,
    // e y es mayor que 105 y menor que 125, la función es f(y)=-x
    //
    // 2) Cuando x es >= que 250 y <0 que 270,
    // e y es mayor que 105 y menor que 125, la función es f(y)=x
    //
    // 3) Cuando x es >= que 230 y <0 que 250,
    // e y es menor que 125 y menor que 145, la función es f(y)=x
    //
    // 4) Cuando x es >= que 250 y <0 que 270,
    // e y es menor que 125 y menor que 145, la función es f(y)=-x
    // 
    // Como el centro del rombo no está en el centro del recuadro,
    // hay que restarle a (x,y) las coordenadas del centro.
    //
    // A ello habrá que sumarle o restarle lo necesario para que el rombo
    // quede en el centro (la mitad de su altura), a lo que habrá que
    // sumar/restar el radio de la esfera. Esto en total es 40.

    if ((x >= 210 && x <= 250)) {
        if (((y - 125) >= - (x - 250 + 40)) && ((y - 125) <= (x - 250 + 40))) {
            return true;
        }
    } else if ((x >= 250 && x <= 290)) {
        if (((y - 125) >= ((x - 250) - 40)) && ((y - 125) <= -(x - 250) + 42)) {
            return true
        }
    }
    return false;
}

function pintaTiempo() {
    const temporizador = document.getElementById("temp");
    temporizador.innerText = time.toFixed(1) + "s";
    if (haLlegado()) {
        clearInterval(timer);
    }
}

function comenzarTemporizador() {
    timer = setInterval(() => {
        time += 0.1;
        pintaTiempo();
    }, 100);
}

function haLlegado() {
    if (posicionX > 470 && posicionY > 220) {
        win = true;
        return true
    }
    return false;
}
