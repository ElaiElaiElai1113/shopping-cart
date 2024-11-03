import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cart }) {
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalAmount.toFixed(2)}</p>

      <button onClick={() => navigate("/checkout")}>Go to Checkout</button>
    </div>
  );
}

export default Cart;
