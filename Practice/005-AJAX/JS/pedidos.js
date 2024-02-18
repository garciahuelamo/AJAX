window.onload = function(){
    fetch("../API/pedidos.php")
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let plantilla = document.getElementById("plantillaclientes");
        let seccion = document.querySelector("section");
        if (seccion) {
            for(let i = 0; i<datos.length; i++){
                let importado = document.importNode(plantilla.content, true);
                importado.querySelector("h6").textContent = datos[i].idCliente;
                importado.querySelector(".fecha").textContent = datos[i].fecha;
                importado.querySelector(".tipo").textContent = datos[i].tipo;
                importado.querySelector(".valor").textContent = datos[i].valor_eur;
                importado.querySelector(".pesoenkg").textContent = datos[i].peso_kg;
                importado.querySelector(".destino").textContent = datos[i].destino;
                seccion.appendChild(importado);
            }
        } else {
            console.error("El elemento <section> no se encontró en el DOM.");
        }

    })
}