<?php
    $archivo = 'usuario.json';
    $cadenaJSON = file_get_contents($archivo);
    $JSON = json_decode($cadenaJSON);

    $existe = false;

    foreach($json as $usuario){
        if($usuario->usuario == $_POST['usuario']){
            $existe = true;
        }
    }

    if($existe == false){
        echo "{'estado':'ok}";
    } else {
        echo "{'estado':'ko'}";
    }
?>