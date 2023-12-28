<?php

    header('Content-Type: application/json');
    $file = 'videogame.json';
    $chainJSON = file_get_contents($file); 
    $JSON = json_decode($chainJSON);
    $exist = false;

    if (json_last_error() != JSON_ERROR_NONE) {
        error_log('JSON decoding error: ' . json_last_error_msg());
        echo '{"status" : "error"}';
        exit;
    }

    if (isset($_POST['videogame'])) {
        foreach ($JSON as $videogame) {
            if (isset($videogame->videogame) && strcasecmp($videogame->videogame, $_POST['videogame']) === 0) {
                $exist = true;
                break; 
            }
        }
    } else {
        echo '{"status" : "error", "message": "Undefined or empty value for videogame"}';
        exit;
    }
    
    if($exist == false){
        echo '{"status" : "ok"}';
    } else {
        echo '{"status" : "ko"}';
    }
    
    error_log('Content of videogame.json: ' . $chainJSON);
    error_log('$_POST["videogame"]: ' . $_POST['videogame']);
?>