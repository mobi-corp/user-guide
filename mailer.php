<?php

require_once('class.phpmailer.php');
$mail = new PHPMailer();

$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->Username = 'tina.bizaca@gmail.com';
$mail->Password = "mutchka1001";
$mail->SetFrom('tbizaca@mobicorp.com', 'mobi');
$mail->Subject = 'Testing??';
$mail->MsgHTML("<h1>Hello!</h1><p>Cool!</p>");
$mail->AddAddress('tina.bizaca@gmail.com', 'Tina');

if($mail->Send()) {
    header('Location: thank-you');
} else {
    echo "Mailer error: " . $mail->ErrorInfo;
}

?>