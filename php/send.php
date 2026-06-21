<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Тут можна налаштувати відправку на пошту
    // mail("your@email.com", "Нове повідомлення від $name", $message, "From: $email");

    echo "Дякую, $name! Повідомлення надіслано.";
}
?>
