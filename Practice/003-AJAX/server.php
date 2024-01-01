<?php

    $user = $_GET['user'];
    $message = $_GET['message'];
    $epoch = date('U');
    $date = date('Y')
            ."-".date('m')
            ."-".date('d')
            ." ".date('H')
            .":".date("i")
            .":".date("s");
    
    $archiv = "messages.json";
    $json = file_get_contents($archiv);
    $datajson = json_decode($json);

    $newmessage = array(

        "user" => $user,
        "message" => $message,
        "epoch" => $epoch,
        "date" => $date
    );

    array_push($datajson, $newmessage);

    $newjson = json_encode($datajson, JSON_PRETTY_PRINT);

    file_put_contents($archiv, $newjson);
?>