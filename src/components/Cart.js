// src/components/Cart.js
import React from 'react';

function Cart({ cartItems, removeItem }) {
  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name} - ${item.price} x {item.quantity}
            <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button className="btn btn-success mt-3">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
