//Seleccionamos el input con la busqueda y los li los metemos en una lista
let busqueda = document.getElementById("buscar")
let ulLis = document.querySelectorAll("li")
let lista1 = [] // se le añadiran los textos de cada <li>

//Se agrega el evento al input de busqueda 
busqueda.addEventListener("keyup", ()=> {
    let texto2 = busqueda.value.toUpperCase()
    
    for (let i of ulLis){
        if (lista1.length < ulLis.length){
            lista1.push(i.innerText)
        }
    }

    //Se filtra primero el array que contiene c/u de los textos
    lista1.filter(subArray => {
        //Se filtra cada elemento para buscar si contiene la palabra
        if (subArray.includes(texto2)){
            for (let newItem of ulLis){
                if (newItem.innerHTML.includes(texto2)){
                    newItem.style.display = "block"
                } else {
                    newItem.style.display = "none"
                }
            }
        }
    })
})