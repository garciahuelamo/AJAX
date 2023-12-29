var usuario = "";
window.onload = function(){

    document.getElementById("chat").style.display = "none";

    document.getElementById("enviausuario").onclick = function(){
        usuario = document.getElementById("usuario").value
        console.log("Tu usuario es: "+ usuario);

        document.getElementById("chat").style.display = "block";
        document.getElementById("inicio").style.display = "none";
    }

}