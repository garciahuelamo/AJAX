<?php

    switch($_GET['cliente']){
        case "1":
            echo '
                {
                    "nombre": "Jose Vicente",
                    "email": "info@josevicentecarratala.com",
                    "telefono": 1234
                }
            ';
            break;
        case "2":
            echo '
                {
                    "nombre": "Juan",
                    "email": "info@josevicentecarratala.com",
                    "telefono": 1234
                }
            ';
            break;
        case "3":
            echo '
                {
                    "nombre": "Jorge",
                    "email": "info@josevicentecarratala.com",
                    "telefono": 1234
                }
            ';
            break;        
    }

?>