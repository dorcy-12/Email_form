<?php

$name = $_POST["name"];
$email = $_POST["email"];
$about = $_POST["subject"];
$phone = $_POST["phone"];
$message = $_POST["message"];

if (!empty($email) && !empty($name)){
    if (filter_var($email, FILTER_VALIDATE_EMAIL)){
        $header = "From: agapedorcy@gmail.com" ;
        $msg = wordwrap($message,70);
        if (mail($email,$about,$msg,$header)){
            echo "Message Sent!";
        }   
        else{
            echo "Sorry, message has not been sent";
        }  
    }
    else
    {
        echo "Verify your Email!";
    }
    
}
else{
    echo "Enter Your Name And Email";
}

?>