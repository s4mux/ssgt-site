<html>
 <head>
  <title>PHP-Test</title>
 </head>
 <body>
 <?php echo '<p>Hallo Welt</p>'; ?>



<?php

$errors = '';
$myemail = 'yourname@website.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['message']))
{
    $errors .= "\n Error: Es sind nicht alle Felder gültig ausgefüllt";
}
else{
$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message'];
$destination = $_POST['destination'];
$destinationName = $_POST['destinationName'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Ungültige E-Mail.";
}
}


if( empty($errors))

{

$to = "$destination"."@ssgt.ch";

$email_subject = "SSGT Kontaktanfrage von $name";

$email_body = "Hallo $destinationName\n\nDu hast eine Nachricht über unsere Website erhalten.\n\nHier sind die Details:\n".

"  Name: $name \n ".
"  E-Mail: $email_address\n".
"  Nachricht: \n $message";

$headers = "From: webserver@ssgt.ch\n";

$headers .= "Reply-To: $email_address";

if(mail($to,$email_subject,$email_body,$headers)){

  mail($email_address, "Kontaktanfrage an $destinationName", "Hallo $name\n\nIch habe deine Nachricht an $destinationName verschickt.\n \n  --Der SSGT-WebServer\n\n\n\Original Nachricht:\n\n$message", "From: webserver@ssgt.ch");


}

//redirect to the 'thank you' page

header('Location: /');

}


?>


</body>
</html>