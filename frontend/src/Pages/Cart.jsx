import React from "react";

const Cart = ({ cartItems}) => {
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-name">{item.name}</div>
              </div>
              <div className="cart-item-price">
                <div className="cart-item-quantity">{item.quantity}</div>
                <div className="cart-item-total-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <div>Total:</div>
            <div>${cartTotal.toFixed(2)}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
