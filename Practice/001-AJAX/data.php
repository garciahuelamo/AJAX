<?php

    switch($_GET['videogame']){

        case "1":
            echo '
                {
                    "name" : "FC 24",
                    "price" : 89.35,
                    "stock" : "Disponible"
                }
            ';
            break;

        case "2":
            echo '
                {
                    "name" : "Dreamlight Valley",
                    "price" : 35.00,
                    "stock" : "No disponible"
                }
            ';    
            break;
        case "3":
            echo '
                {
                    "name" : "God of War",
                    "price" : 46.95,
                    "stock" : "No disponible"
                }
            ';    
            break;   
        case "4":
            echo '
                {
                    "name" : "Fornite",
                    "price" : 0,
                    "stock" : "Disponible"
                }
            ';    
            break; 
    }
?>