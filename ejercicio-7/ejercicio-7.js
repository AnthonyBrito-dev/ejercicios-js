//validamos el campo de texto para que sean mas de 4 caracteres
let campoTexto = document.getElementById("size")
let btnPassword = document.getElementById("password")
let divContainer = document.getElementById("generador")
let listaCaracteres = []

//creamos evento al boton
btnPassword.addEventListener("click", ()=>{
    let number = campoTexto.value
    if (number <= 3){
        alert('La contraseña debe tener al menos 4 caracteres')
    } else {
        //Nos aseguramos de que la contraseña tenga al menos una letra, un numero y un caracter especial
        let numeroParaLista = String.fromCharCode(Math.floor(Math.random() * (58 - 48 + 1)) + 48)
        let caracterEspecialParaLista = String.fromCharCode(Math.floor(Math.random() * (45 - 33 + 1)) + 33)
        let letraParaLista = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)
        listaCaracteres.push(numeroParaLista, caracterEspecialParaLista, letraParaLista)
        //usamos un bucle for con la cantidad de caracteres
        for (let caracter = 0; caracter < number-3; caracter++) {
            //utilizamos math.random y String.fromCharCode para generar un caracter
            let caracterParaLista = String.fromCharCode(Math.floor(Math.random()*93)+33)
            //concatenamos cada uno en la lista
            listaCaracteres.push(caracterParaLista)
        }
    }

    //convertimos todo a un string 
    let listaConcatenada = listaCaracteres.join("")
    //mostramos en pantalla 
    let password = document.getElementById('password-generated')
    password.textContent = `Contraseña generada: ${listaConcatenada}`
    //borramos la lista por si se quiere generar otra diferente
    listaCaracteres = []

})

