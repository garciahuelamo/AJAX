<?php
    $file = 'videogame.json';
    $chainJSON = file_get_contents($file);
    $JSON = json_decode($chainJSON);

    $exists = false;

    foreach($JSON as $videogame){
        if($videogame->videogame == $_POST['videogame']){
            $exists = true;
        }
    }

    if($exists == false){
        echo '{"status":"ok"}';
    } else {
        echo '{"status":"ko"}';
    }
?>