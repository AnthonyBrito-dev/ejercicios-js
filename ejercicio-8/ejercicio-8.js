//Seleccion de campo de texto, parrafos de palabra y caracteres
let tagTextarea = document.getElementById("texto")
let numCaracteres = document.getElementById("num-caracteres")
let numPalabras = document.getElementById("num-palabras")
let contadorPalabras = 0
let listaCaracteres = []
let listaPalabras = []

/*La funcion sirve para verificar si el caracter ingresado es una
letra, un numero o un caracter especial. De ser asi, lo añade a 
una lista y retorna el numero total. Si es un espacio no lo añade*/
let verificar = (letra)=> {
    for (let i = 33; i < 254; i++){
        if (letra == String.fromCharCode(i)){
            listaCaracteres.push(letra)
        }
    }

    //Verifica si el evento keydown es un backspace y si no es 
    //un espacio para quitar la letra del conteo
    if (letra == 'Backspace' && tagTextarea.value.slice(-1) != " ") {
        listaCaracteres.pop()
    }

    return listaCaracteres.length
}

tagTextarea.addEventListener("keydown", (event)=> {
    let letra = event.key
    numCaracteres.textContent = `Numero Caracteres: ${verificar(letra)}`
}) 