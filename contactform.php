<?php


    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phoneNumber = htmlspecialchars($_POST['phoneNumber']);
    $message = htmlspecialchars($_POST['message']);
    $headers = 'From: tmsmartp@tmsmart.pl' . "\r\n" .
    'Reply-To: no-reply' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $mailTo = "tmsmartbiuro@gmail.com";
    $subject = "Wiadomośc ze strony TM Smart";
    $txt = "Imie: ".$name."\n"."Email: ".$email."\n"."Numer telefonu: ".$phoneNumber."\n\n\n".$message;


    mail($mailTo, $subject, $txt, $headers);
    


?>