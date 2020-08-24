<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent=" From: $name \n Email: $email \n Phone: $phone \n Subject: $subject \n Message: $message";
$recipient = "samrpenquiries@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

if(mail($recipient, $subject, $formcontent, $mailheader)) {
  header("Location: ../contact.html?sent=success");
} else {
  header("Location: ../contact.html?sent=fail");
}

exit;
?>
