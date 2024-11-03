import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, resetCart }) {
  const navigate = useNavigate();
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    alert("Payment successful!");
    resetCart();
    navigate("/");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalAmount.toFixed(2)}</p>
      <button onClick={() => navigate(-1)}>Cancel</button>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
}

export default Checkout;
