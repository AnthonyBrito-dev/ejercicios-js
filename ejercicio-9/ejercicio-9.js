let tarea1 = document.getElementById("tarea")
tarea1.addEventListener("keyup", ()=>{
  localStorage.setItem("tarea", tarea1.value)
  console.log(localStorage.getItem('tarea'))
})


let borrar = document.getElementById("borrar")
borrar.addEventListener("click", ()=> {
  localStorage.clear()
  console.log(localStorage.getItem('tarea'))
})