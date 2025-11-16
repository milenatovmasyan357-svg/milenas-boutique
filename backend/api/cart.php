<?php
require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];

// GET cart items for a user
if ($method === 'GET') {
    $userId = isset($_GET['user_id']) ? $_GET['user_id'] : 1;
    
    try {
        $stmt = $db->prepare("
            SELECT c.id as cart_id, c.quantity, c.added_at,
                   p.id, p.name, p.description, p.price, p.category, p.image_url, p.stock
            FROM cart c
            INNER JOIN products p ON c.product_id = p.id
            WHERE c.user_id = ?
            ORDER BY c.added_at DESC
        ");
        $stmt->execute([$userId]);
        $cartItems = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Calculate total
        $total = 0;
        foreach ($cartItems as $item) {
            $total += $item['price'] * $item['quantity'];
        }
        
        echo json_encode([
            "success" => true,
            "data" => [
                "items" => $cartItems,
                "total" => round($total, 2),
                "itemCount" => count($cartItems)
            ]
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error fetching cart: " . $e->getMessage()
        ]);
    }
}

// POST - Add item to cart
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $userId = $data['user_id'] ?? 1;
    $productId = $data['product_id'];
    $quantity = $data['quantity'] ?? 1;
    
    try {
        // Check if item already in cart
        $stmt = $db->prepare("SELECT * FROM cart WHERE user_id = ? AND product_id = ?");
        $stmt->execute([$userId, $productId]);
        $existing = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($existing) {
            // Update quantity
            $stmt = $db->prepare("UPDATE cart SET quantity = quantity + ? WHERE id = ?");
            $stmt->execute([$quantity, $existing['id']]);
            $message = "Cart updated";
        } else {
            // Add new item
            $stmt = $db->prepare("INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)");
            $stmt->execute([$userId, $productId, $quantity]);
            $message = "Item added to cart";
        }
        
        echo json_encode([
            "success" => true,
            "message" => $message
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error adding to cart: " . $e->getMessage()
        ]);
    }
}

// PUT - Update cart item quantity
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    try {
        $stmt = $db->prepare("UPDATE cart SET quantity = ? WHERE id = ?");
        $stmt->execute([$data['quantity'], $data['cart_id']]);
        
        echo json_encode([
            "success" => true,
            "message" => "Cart updated"
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error updating cart: " . $e->getMessage()
        ]);
    }
}

// DELETE - Remove item from cart
elseif ($method === 'DELETE') {
    $cartId = isset($_GET['cart_id']) ? $_GET['cart_id'] : null;
    
    try {
        if ($cartId) {
            $stmt = $db->prepare("DELETE FROM cart WHERE id = ?");
            $stmt->execute([$cartId]);
        } else {
            // Clear entire cart for user
            $userId = isset($_GET['user_id']) ? $_GET['user_id'] : 1;
            $stmt = $db->prepare("DELETE FROM cart WHERE user_id = ?");
            $stmt->execute([$userId]);
        }
        
        echo json_encode([
            "success" => true,
            "message" => "Item removed from cart"
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error removing from cart: " . $e->getMessage()
        ]);
    }
}
?>