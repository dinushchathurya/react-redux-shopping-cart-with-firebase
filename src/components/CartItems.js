import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {" "}
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              total={item.total}
              name={item.name}
            />
            {" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
