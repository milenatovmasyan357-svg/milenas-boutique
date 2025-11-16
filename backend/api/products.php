<?php
require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];

// GET all products or single product
if ($method === 'GET') {
    try {
        if (isset($_GET['id'])) {
            // Get single product
            $stmt = $db->prepare("SELECT * FROM products WHERE id = ?");
            $stmt->execute([$_GET['id']]);
            $product = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($product) {
                echo json_encode([
                    "success" => true,
                    "data" => $product
                ]);
            } else {
                http_response_code(404);
                echo json_encode([
                    "success" => false,
                    "message" => "Product not found"
                ]);
            }
        } else {
            // Get all products (with optional category filter)
            $category = isset($_GET['category']) ? $_GET['category'] : null;
            
            if ($category) {
                $stmt = $db->prepare("SELECT * FROM products WHERE category = ? ORDER BY created_at DESC");
                $stmt->execute([$category]);
            } else {
                $stmt = $db->prepare("SELECT * FROM products ORDER BY created_at DESC");
                $stmt->execute();
            }
            
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            echo json_encode([
                "success" => true,
                "data" => $products,
                "count" => count($products)
            ]);
        }
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Database error: " . $e->getMessage()
        ]);
    }
}

// POST - Create new product
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    try {
        $stmt = $db->prepare("
            INSERT INTO products (name, description, price, category, image_url, stock) 
            VALUES (?, ?, ?, ?, ?, ?)
        ");
        
        $stmt->execute([
            $data['name'],
            $data['description'],
            $data['price'],
            $data['category'],
            $data['image_url'] ?? null,
            $data['stock'] ?? 0
        ]);
        
        echo json_encode([
            "success" => true,
            "message" => "Product created successfully",
            "id" => $db->lastInsertId()
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error creating product: " . $e->getMessage()
        ]);
    }
}

// PUT - Update product
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    try {
        $stmt = $db->prepare("
            UPDATE products 
            SET name = ?, description = ?, price = ?, category = ?, image_url = ?, stock = ?
            WHERE id = ?
        ");
        
        $stmt->execute([
            $data['name'],
            $data['description'],
            $data['price'],
            $data['category'],
            $data['image_url'],
            $data['stock'],
            $data['id']
        ]);
        
        echo json_encode([
            "success" => true,
            "message" => "Product updated successfully"
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error updating product: " . $e->getMessage()
        ]);
    }
}

// DELETE - Delete product
elseif ($method === 'DELETE') {
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "Product ID required"
        ]);
        exit;
    }
    
    try {
        $stmt = $db->prepare("DELETE FROM products WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode([
            "success" => true,
            "message" => "Product deleted successfully"
        ]);
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error deleting product: " . $e->getMessage()
        ]);
    }
}
?>