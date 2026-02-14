//Seleccionamos los botones de operaciones
let suma = document.getElementById("sumar")
let resta = document.getElementById("restar")
let multiplicacion = document.getElementById("multiplicar")
let division = document.getElementById("dividir")

//Seleccionamos los valores de los dos input de numeros
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")

//creamos el evento de suma
suma.addEventListener("click", ()=> {
    //Verificamos que haya numeros en los dos campos
    if (num1.value != "" && num2.value != ""){
        let valor1 = parseFloat(num1.value)
        let valor2 = parseFloat(num2.value)
        let result = valor1 + valor2
        //Seleccionamos el span para mostrar el resultado
        let displayResult = document.getElementById("resultado-op")
        displayResult.textContent = `Resultado de suma: ${result}`
    } else {
        alert("Ingresa un valor valido")
    }
})

//Añadimos el evento de restar 
resta.addEventListener("click", ()=> {
    //Verificamos que haya numeros en los dos campos
    if (num1.value != "" && num2.value != ""){
        let valor1 = parseFloat(num1.value)
        let valor2 = parseFloat(num2.value)
        let result = valor1 - valor2
        //Seleccionamos el span para mostrar el resultado
        let displayResult = document.getElementById("resultado-op")
        displayResult.textContent = `Resultado de resta: ${result}`
    } else {
        alert("Ingresa un valor valido")
    }
})

//Añadimos el evento de multiplicar
multiplicacion.addEventListener("click", ()=> {
    //Verificamos que haya numeros en los dos campos
    if (num1.value != "" && num2.value != ""){
        let valor1 = parseFloat(num1.value)
        let valor2 = parseFloat(num2.value)
        let result = valor1 * valor2
        //Seleccionamos el span para mostrar el resultado
        let displayResult = document.getElementById("resultado-op")
        displayResult.textContent = `Resultado de multiplicacion: ${result}`
    } else {
        alert("Ingresa un valor valido")
    }
})

//Añadimos el evento de division 
division.addEventListener("click", ()=> {
    //Verificamos que haya numeros en los dos campos
    if (num1.value != "" && num1.value != "0" && num2.value != "" && num2.value != "0"){
        let valor1 = parseFloat(num1.value)
        let valor2 = parseFloat(num2.value)
        let result = valor1 / valor2
        console.log(typeof(num1.value))
        console.log(num1.value)
        //Seleccionamos el span para mostrar el resultado
        let displayResult = document.getElementById("resultado-op")
        displayResult.textContent = `Resultado de division: ${result}`
    } else if (num1.value == "" || num2.value == ""){
        alert("Ingresa un valor valido")
    } else if (num1.value == '0' || num2.value == '0'){
        alert("No puedes dividir por cero")
    }
})