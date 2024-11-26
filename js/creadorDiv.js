let boton= document.getElementById("boton")
boton.addEventListener(
    "click", function (event){
        event.preventDefault();

    let nuevoID=document.createElement("Div");
         nuevoID.innerHTML="creadorDiv";
         nuevoID.classList.add("borde-negro");
    let resultadoDiv=document.getElementById("resultadoDiv");

    resultadoDiv.appendChild(nuevoID)








});