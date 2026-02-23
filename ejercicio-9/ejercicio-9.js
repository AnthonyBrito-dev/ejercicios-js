let tareas = document.querySelectorAll("div#container-first input")

for (let i = 0; i < tareas.length; i++) {
	let textTarea = tareas[i].parentElement.innerText
	localStorage.setItem(`tarea${i}`, textTarea)
}

for (let i = 0; i < tareas.length; i++) {
	console.log(localStorage.getItem(`tarea${i}`))
}

let borrar = document.getElementById("borrar")
borrar.addEventListener("click", ()=> {
  	for (let i = 0; i < tareas.length; i++) {
		let padreDiv = tareas[i].parentElement.parentElement
		if (tareas[i].checked){
			localStorage.removeItem(`tarea${i}`)
			padreDiv.innerHTML = "" 
		}
		console.log(localStorage.getItem(`tarea${i}`))
	}
})