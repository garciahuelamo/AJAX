var usuario = "";
window.onload = function(){

    document.getElementById("chat").style.display = "none";

    document.getElementById("enviausuario").onclick = function(){
        usuario = document.getElementById("usuario").value
        console.log("Tu usuario es: "+ usuario);

        document.getElementById("chat").style.display = "block";
        document.getElementById("inicio").style.display = "none";
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