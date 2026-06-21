<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $phone = htmlspecialchars(trim($_POST["phone"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));
    $delivery = htmlspecialchars(trim($_POST["delivery"] ?? ""));
    $address = htmlspecialchars(trim($_POST["address"] ?? ""));
    $comment = htmlspecialchars(trim($_POST["comment"] ?? ""));
    $cart = $_POST["cart"] ?? "[]";

    if (empty($name) || empty($phone)) {
        echo "Заповніть обов'язкові поля.";
        exit;
    }

    $items = json_decode($cart, true);
    $total = 0;
    $itemsList = "";
    foreach ($items as $item) {
        $sum = $item['price'] * $item['qty'];
        $total += $sum;
        $itemsList .= "{$item['name']} x{$item['qty']} = {$sum} грн\n";
    }

    $to = "info@favery-solar.ua";
    $subject = "Нове замовлення Favery-Solar";
    $body = "Ім'я: $name\n";
    $body .= "Телефон: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Доставка: $delivery\n";
    $body .= "Адреса: $address\n";
    $body .= "Коментар: $comment\n\n";
    $body .= "Товари:\n$itemsList\n";
    $body .= "Разом: {$total} грн\n";

    $headers = "From: no-reply@favery-solar.ua\r\n";
    $headers .= "Reply-To: $email\r\n";

    echo "Дякуємо, $name! Ваше замовлення прийнято. Ми передзвонимо для підтвердження.";
} else {
    echo "Помилка: невірний метод запиту.";
}
?>
