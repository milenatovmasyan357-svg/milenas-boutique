// src/services/api.js
// MacBook MAMP-ի համար - port 8888
const API_BASE_URL = 'http://localhost:8888/milenas-boutique/backend/api';

export const api = {
  // ========== PRODUCTS ==========
  
  // Բոլոր ապրանքները
  async getProducts(category = null) {
    try {
      const url = category 
        ? `${API_BASE_URL}/products.php?category=${category}`
        : `${API_BASE_URL}/products.php`;
      
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return { success: false, message: error.message };
    }
  },

  // Մեկ ապրանք
  async getProduct(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products.php?id=${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      return { success: false, message: error.message };
    }
  },

  // Նոր ապրանք ավելացնել
  async createProduct(productData) {
    try {
      const response = await fetch(`${API_BASE_URL}/products.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating product:', error);
      return { success: false, message: error.message };
    }
  },

  // Ապրանք թարմացնել
  async updateProduct(productData) {
    try {
      const response = await fetch(`${API_BASE_URL}/products.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      return await response.json();
    } catch (error) {
      console.error('Error updating product:', error);
      return { success: false, message: error.message };
    }
  },

  // Ապրանք ջնջել
  async deleteProduct(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products.php?id=${id}`, {
        method: 'DELETE'
      });
      return await response.json();
    } catch (error) {
      console.error('Error deleting product:', error);
      return { success: false, message: error.message };
    }
  },

  // ========== CART (Զամբյուղ) ==========
  
  // Զամբյուղի բովանդակություն
  async getCart(userId = 1) {
    try {
      const response = await fetch(`${API_BASE_URL}/cart.php?user_id=${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching cart:', error);
      return { success: false, message: error.message };
    }
  },

  // Ավելացնել զամբյուղ
  async addToCart(productId, quantity = 1, userId = 1) {
    try {
      const response = await fetch(`${API_BASE_URL}/cart.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
          quantity: quantity
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, message: error.message };
    }
  },

  // Զամբյուղի քանակը փոխել
  async updateCartItem(cartId, quantity) {
    try {
      const response = await fetch(`${API_BASE_URL}/cart.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart_id: cartId,
          quantity: quantity
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Error updating cart:', error);
      return { success: false, message: error.message };
    }
  },

  // Հեռացնել զամբյուղից
  async removeFromCart(cartId) {
    try {
      const response = await fetch(`${API_BASE_URL}/cart.php?cart_id=${cartId}`, {
        method: 'DELETE'
      });
      return await response.json();
    } catch (error) {
      console.error('Error removing from cart:', error);
      return { success: false, message: error.message };
    }
  },

  // Մաքրել ամբողջ զամբյուղը
  async clearCart(userId = 1) {
    try {
      const response = await fetch(`${API_BASE_URL}/cart.php?user_id=${userId}`, {
        method: 'DELETE'
      });
      return await response.json();
    } catch (error) {
      console.error('Error clearing cart:', error);
      return { success: false, message: error.message };
    }
  },

  // ========== ORDERS (Պատվերներ) ==========
  
  // Բոլոր պատվերները
  async getOrders(userId = 1) {
    try {
      const response = await fetch(`${API_BASE_URL}/orders.php?user_id=${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching orders:', error);
      return { success: false, message: error.message };
    }
  },

  // Մեկ պատվեր
  async getOrder(orderId, userId = 1) {
    try {
      const response = await fetch(`${API_BASE_URL}/orders.php?id=${orderId}&user_id=${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching order:', error);
      return { success: false, message: error.message };
    }
  },

  // Նոր պատվեր ստեղծել
  async createOrder(orderData) {
    try {
      const response = await fetch(`${API_BASE_URL}/orders.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating order:', error);
      return { success: false, message: error.message };
    }
  },

  // Պատվերի կարգավիճակը փոխել
  async updateOrderStatus(orderId, status) {
    try {
      const response = await fetch(`${API_BASE_URL}/orders.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order_id: orderId,
          status: status
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Error updating order:', error);
      return { success: false, message: error.message };
    }
  }
};

export default api;