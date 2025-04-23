// src/pages/CartPage.js
import React, { useState } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ]);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <button className="btn btn-success mt-3">Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;
