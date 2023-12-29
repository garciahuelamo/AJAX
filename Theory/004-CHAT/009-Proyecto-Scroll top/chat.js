var usuario = "";
var temporizador = "";
window.onload = function(){

    document.getElementById("chat").style.display = "none";

    document.getElementById("enviausuario").onclick = function(){
        usuario = document.getElementById("usuario").value
        console.log("Tu usuario es: "+ usuario);

        document.getElementById("chat").style.display = "block";
        document.getElementById("inicio").style.display = "none";
        temporizador = setTimeout("bucle()", 1000);
    }

    document.getElementById("mensaje").onkeyup = function(e){
        console.log("La tecla presionada es: " + e.key)
        if(e.key == "Enter"){
            let mensaje = this.value;
            console.log("El mensaje que voy a enviar es: " + mensaje);
            this.value = "";
            fetch("servidor.php?usuario=" + encodeURI(usuario) + "&mensaje=" + encodeURI(mensaje)) //No esperamos ningun retorno.
        }
    }
}


function bucle(){
    let fecha = new Date();

    fetch("mensajes.json?fecha=" + fecha.getUTCSeconds())
        . then(function(response){
            return response.json();
        })
        . then(function(datos){
            cadena = "";
            for(let i=0; i<datos.length; i++){
                cadena += `
                    <div class="mensaje">
                        <div class="usuario">`+datos[i].usuario+`</div>
                        <div class="fecha">`+datos[i].fecha+`</div>
                        <div class="mensaje">`+datos[i].mensaje+`</div>
                    </div>`
            }

            document.getElementById("contienemensajes").innerHTML = cadena;
            document.getElementById("contienemensajes").scrollTop = 100000000;
        })
        .catch(function(error){
            console.log(error)
        })
    //El bucle se ejecuta cada segundo
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()", 1000);
}
