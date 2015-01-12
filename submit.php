<?php
if(isset($_POST['send'])){

	$to = 'FLS1 VP <sectoronevicepresident@gmail.com';
	$subject = 'Message from floridalambdas.com';
	$message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
	$message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
	$message .= 'Phone: ' . $_POST['tel'] . "\r\n\r\n";
	$message .= 'Message: ' . $_POST['message'];


	$headers = "From: webmaster@floridalambdas.com\r\n";
	$headers .= "Content-Type: text/plain; charset= UTF-8\r\n";
	$headers .= "CC: info@floridalambdas.com";

	echo $message;
	//$success = mail($to,$subject,$body,$headers,'-fsectoronevicepresident@gmail.com');
}

?>