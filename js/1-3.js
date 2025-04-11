document.addEventListener("DOMContentLoaded", function() {
    const hora = document.getElementById("hora");
    const minuto = document.getElementById("minuto");
    const segundo = document.getElementById("segundo");
    setInterval(() => {
        const ahora = new Date();
        const horas = ahora.getHours();
        const minutos = ahora.getMinutes();
        const segundos = ahora.getSeconds();

        console.log(horas + ":" + minutos + ":" + segundos);

        const anguloHoras = horas * 30;
        const anguloMinutos = minutos * 6;
        const anguloSegundos = segundos * 6;

        hora.style.transform = "rotate(" + anguloHoras + "deg)";
        minuto.style.transform = "rotate(" + anguloMinutos + "deg)";
        segundo.style.transform = "rotate(" + anguloSegundos + "deg)";

    }, 1000);
})
