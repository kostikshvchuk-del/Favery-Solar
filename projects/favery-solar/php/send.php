<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $phone = htmlspecialchars(trim($_POST["phone"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));
    $service = htmlspecialchars(trim($_POST["service"] ?? ""));
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    if (empty($name) || empty($phone)) {
        echo "Будь ласка, заповніть обов'язкові поля.";
        exit;
    }

    $to = "info@favery-solar.ua";
    $subject = "Нове повідомлення з сайту Favery-Solar";
    $body = "Ім'я: $name\n";
    $body .= "Телефон: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Послуга: $service\n";
    $body .= "Повідомлення:\n$message\n";

    $headers = "From: no-reply@favery-solar.ua\r\n";
    $headers .= "Reply-To: $email\r\n";

    echo "Дякуємо, $name! Ми зв'яжемося з вами найближчим часом.";
} else {
    echo "Помилка: невірний метод запиту.";
}
?>
