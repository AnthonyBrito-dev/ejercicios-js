let botonContar = document.getElementById("contar")
let contador = 0
botonContar.addEventListener("click", ()=> {
    contador += 1
    let contadorDisplay = document.getElementById("contador")
    contadorDisplay.textContent = `Clicks: ${contador}`
})

let resetear = document.getElementById("reset")
resetear.addEventListener("click", ()=> {
    contador = 0
    let contadorDisplay = document.getElementById("contador")
    contadorDisplay.textContent = `Clicks: ${contador}`
})