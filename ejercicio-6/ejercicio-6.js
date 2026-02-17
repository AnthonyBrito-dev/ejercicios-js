//seleccionar los botones a utilizar
let iniciar = document.getElementById("inicio")
let pausar = document.getElementById("pausa")
let reiniciar = document.getElementById("reinicio")
let tiempo = document.getElementById("time")

//hacer contador
contadorSeg = 50
contadorMin = 59
contadorHrs = 0

//añadir funcion de inicio para que los segundos muestren
iniciar.addEventListener("click", ()=>{
    let time = setInterval(() => {
        contadorSeg += 1
        tiempo.textContent = `0${contadorHrs}:0${contadorMin}:0${contadorSeg}`
        if (contadorSeg >= 10 && contadorSeg <= 59) {
            tiempo.textContent = `${contadorHrs}:${contadorMin}:${contadorSeg}` 
        } else if (contadorSeg >= 60){
            contadorSeg = 0
            contadorMin += 1
            tiempo.textContent = `${contadorHrs}:${contadorMin}:${contadorSeg}`
        }

        if (contadorMin > 59){
            contadorMin = 0
            contadorHrs += 1 
        }

        pausar.addEventListener("click", ()=>{clearInterval(time)})

        reiniciar.addEventListener("click", ()=>{
            contadorSeg = 0
            contadorMin = 0
            contadorHrs = 0
            tiempo.textContent = `0${contadorHrs}:0${contadorMin}:0${contadorSeg}`
            clearInterval(time)
        })
    }, 1000);
})