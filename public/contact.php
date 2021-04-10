<?php

$errors = '';

echo $_POST['human'];
echo ('' != $_POST['human']);

if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['message']) || 
   empty($_POST['destination']) || 
   empty($_POST['destinationName'] ||
   '' != $_POST['human'] ))
{
    $errors .= "\n Error: Es sind nicht alle Felder gültig ausgefüllt";
}
else{
  $name = $_POST['name']; 
  $email_address = $_POST['email']; 
  $message = $_POST['message'];
  $destination = $_POST['destination'];
  $destinationName = $_POST['destinationName'];

  if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address))
  {
    $errors .= "\n Error: Ungültige E-Mail.";
}
}


if( empty($errors))

{

$to = "$destination"."@ssgt.ch";

$email_subject = "SSGT Kontaktanfrage von $name";

$email_body = "Hallo $destinationName\n\nDu hast eine Nachricht von $name ( $email_address ) über unsere Website erhalten:\n\n$message";


$headers = "From: webserver@ssgt.ch\n";

$headers .= "Reply-To: $email_address";

if(mail($to,$email_subject,$email_body,$headers)){

  mail($email_address, "Kontaktanfrage an $destinationName", "Hallo $name\n\nIch habe die Nachricht an $destinationName verschickt.\n \n\tDer SSGT-WebServer\n\n\nDeine Nachricht:\n\n$message", "From: webserver@ssgt.ch");


}

//redirect to the 'thank you' page

header('Location: /vorstand');

}


?>


<html>
 <head>
  <title>SSGT Contact Backend</title>
 </head>
 <body>
 <p>Besuche unsere <a href="/vorstand">Website</a> um das Kontakt-Formular auszufüllen.</p>

</body>
</html>