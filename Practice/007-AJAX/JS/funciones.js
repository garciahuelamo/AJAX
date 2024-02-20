function valorCookie(identificador){
    let todasLasCookies = document.cookie;
    let partido = todasLasCookies.split(";");
    for(let i=0; i<partido.length; i++){
        let partido2 = partido[i].split("=");
        if(partido2[0] == identificador){
            return partido2[1];
        }
    }
}