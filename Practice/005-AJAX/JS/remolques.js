window.onload = function(){
    fetch("../API/remolques.php")
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let plantilla = document.getElementById("plantillaclientes");
        let seccion = document.querySelector("section");
        if (seccion) {
            for(let i = 0; i<datos.length; i++){
                let importado = document.importNode(plantilla.content, true);
                importado.querySelector("h6").textContent = datos[i].matricula_remolque;
                importado.querySelector("h7").textContent = datos[i].tipo;
                importado.querySelector(".fechamatricula").textContent = datos[i].fecha_matriculacion;
                importado.querySelector(".itv").textContent = datos[i].ITV;
                seccion.appendChild(importado);
            }
        } else {
            console.error("El elemento <section> no se encontró en el DOM.");
        }

    })
}