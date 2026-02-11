//Seleccionamos el textarea y el boton agregar
let buttonAdd = document.getElementById("add")
let textareaId = document.getElementById("texto")
let listAdd = document.getElementById("ingresados")

//Toma el texto dentro y lo añade a un li
buttonAdd.addEventListener("click", ()=> {
    if (textareaId.value != "") {
        let newLi = document.createElement('li')
        let newDelete = document.createElement('button')
        listAdd.appendChild(newLi)
        newLi.textContent = textareaId.value + ' '
        newLi.appendChild(newDelete)
        newDelete.textContent = 'X'

        newDelete.addEventListener('click', ()=> {
            newLi.remove()
        })

    } else {
        alert("no hay texto")
    }

})