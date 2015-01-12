<?php

$to = 'FLS1 VP <sectoronevicepresident@gmail.com';
$subject = 'Message from floridalambdas.com';
$body = 'Message';
$headers = "From: webmaster@floridalambdas.com\r\n";
$headers .= "Content-Type: text/plain; charset= UTF-8\r\n";
$headers .= "CC: info@floridalambdas.com";

$success = mail($to,$subject,$body,$headers,'-fsectoronevicepresident@gmail.com');

?>