<?php
require "vendor/autoload.php";

use Formapro\TelegramBot\Bot;
use Formapro\TelegramBot\SendMessage;

$name = $_GET["name"];
$tel = $_GET["tel"];
$type = $_GET["type"];

$bot = new Bot("1098523742:AAFetMm_LcErQmlPwWXlKvGIgZjeJCfXBD4");

$msg = "Yangi Foydalanuvchi!

Ism: " .$name . "
Telefon: " . $tel . "
Qaysi formadan: " . $type . "

Tezroq qong'iroq qiling! Xaridor sizning qong'iroq qilishingizni kutmoqda!";
$bot->sendMessage(new SendMessage(
    -1001421494061,
    $msg
));

$headers = 'From: planbaby@mail.uz' . "\r\n" .
    'Reply-To: planbaby.uz' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// send email
$ok = mail('planbabyuz@yandex.ru','Заказ с сайта http://planbaby.uz/' ,$msg, $headers);

// use wordwrap() if lines are longer than 70 characters

header("Location: http://planbaby.uz/");
exit();