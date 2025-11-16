<?php
$host = 'localhost';
$port = 8889;
$db = 'milenas_boutique';
$user = 'root';
$pass = 'root';

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}
?>
