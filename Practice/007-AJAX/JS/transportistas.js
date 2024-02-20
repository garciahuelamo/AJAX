window.onload = function(){
    fetch("../API/transportistas.php")
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let plantilla = document.getElementById("plantillaclientes");
        let seccion = document.querySelector("section");
        if (seccion) {
            for(let i = 0; i<datos.length; i++){
                let importado = document.importNode(plantilla.content, true);
                importado.querySelector("h6").textContent = datos[i].nombre;
                importado.querySelector("h7").textContent = datos[i].cif;
                importado.querySelector("h8").textContent = datos[i].matricula_tractora;
                importado.querySelector(".direccion").textContent = datos[i].dir_facturacion;
                importado.querySelector(".dombancaria").textContent = datos[i].dom_bancaria;
                importado.querySelector(".pais_status").textContent = datos[i].pais_status;
                importado.querySelector(".cp_status").textContent = datos[i].cp_status;
                importado.querySelector(".telefono").textContent = datos[i].telefono;
                seccion.appendChild(importado);
            }
        } else {
            console.error("El elemento <section> no se encontró en el DOM.");
        }

    })

    document.getElementById("iniciarsesion").onclick = function(){
        console.log("Vamos a iniciar sesión");
        document.getElementById("modal").style.display = "block";
        document.getElementById("contenedormodal").innerHTML = "";
        let plantilla = document.getElementById("plantillainiciosesion");
        let importado = document.importNode(plantilla.content, true);
        document.getElementById("contenedormodal").appendChild(importado);

        document.getElementById("enviainiciosesion").onclick = function() {
            console.log("Iniciamos sesion");
            let nombre = document.getElementById("usuario").value;
            let contrasena = document.getElementById("contrasena").value;
            console.log("Envio:" + nombre + " - " + contrasena);
            fetch("../API/login.php?usuario="+nombre+"&contrasena="+contrasena) 
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                    console.log(datos);
                    if(datos.llave == "si"){
                        document.getElementById("modal").style.display = "none";
                        document.cookie = "usuario="+nombre;
                    }

                })
        }
    }
}