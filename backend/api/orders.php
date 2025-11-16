<?php
require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];

// GET orders
if ($method === 'GET') {
    $userId = isset($_GET['user_id']) ? $_GET['user_id'] : 1;
    
    try {
        if (isset($_GET['id'])) {
            // Get single order with items
            $orderId = $_GET['id'];
            
            // Get order details
            $stmt = $db->prepare("SELECT * FROM orders WHERE id = ? AND user_id = ?");
            $stmt->execute([$orderId, $userId]);
            $order = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($order) {
                // Get order items
                $stmt = $db->prepare("
                    SELECT oi.*, p.name, p.image_url
                    FROM order_items oi
                    INNER JOIN products p ON oi.product_id = p.id
                    WHERE oi.order_id = ?
                ");
                $stmt->execute([$orderId]);
                $order['items'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
                
                echo json_encode([
                    "success" => true,
                    "data" => $order
                ]);
            } else {
                http_response_code(404);
                echo json_encode([
                    "success" => false,
                    "message" => "Order not found"
                ]);
            }
        } else {
            // Get all orders for user
            $stmt = $db->prepare("
                SELECT o.*, COUNT(oi.id) as item_count
                FROM orders o
                LEFT JOIN order_items oi ON o.id = oi.order_id
                WHERE o.user_id = ?
                GROUP BY o.id
                ORDER BY o.created_at DESC
            ");
            $stmt->execute([$userId]);
            $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            echo json_encode([
                "success" => true,
                "data" => $orders
            ]);
        }
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error fetching orders: " . $e->getMessage()
        ]);
    }
}

// POST - Create order
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $userId = $data['user_id'] ?? 1;
    
    try {
        $db->beginTransaction();
        
        // Create order
        $stmt = $db->prepare("
            INSERT INTO orders (user_id, total_amount, shipping_address, status) 
            VALUES (?, ?, ?, 'pending')
        ");
        $stmt->execute([
            $userId,
            $data['total_amount'],
            $data['shipping_address']
        ]);
        $orderId = $db->lastInsertId();
        
        // Add order items
        $stmt = $db->prepare("
            INSERT INTO order_items (order_id, product_id, quantity, price) 
            VALUES (?, ?, ?, ?)
        ");
        
        foreach ($data['items'] as $item) {
            $stmt->execute([
                $orderId,
                $item['product_id'],
                $item['quantity'],
                $item['price']
            ]);
            
            // Update product stock
            $updateStock = $db->prepare("UPDATE products SET stock = stock - ? WHERE id = ?");
            $updateStock->execute([$item['quantity'], $item['product_id']]);
        }
        
        // Clear cart
        $clearCart = $db->prepare("DELETE FROM cart WHERE user_id = ?");
        $clearCart->execute([$userId]);
        
        $db->commit();
        
        echo json_encode([
            "success" => true,
            "message" => "Order placed successfully",
            "order_id" => $orderId
        ]);
    } catch(PDOException $e) {
        $db->rollBack();
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error creating order: " . $e->getMessage()
        ]);
    }
}

// PUT - Update order status
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    try {
        $stmt = $db->prepare("UPDATE orders SET status = ? WHERE id = ?");
        $stmt->execute([$data['status'], $data['order_id']]);
        
        echo json_encode([
            "success" => true,
            "message" => "Order status updated"
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error updating order: " . $e->getMessage()
        ]);
    }
}
?>