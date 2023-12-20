import React, { useContext } from "react";
import { Context } from "../Context";
import data from "../Data";

const Total = () => {
  const [items] = useContext(Context);

  const cartItems = Object.keys(items)
    .filter((key) => items[key] > 0)
    .map((key) => {
      const [group, item] = key.split("-");
      const {name} = data[group][item];
      const quantity = items[key];

      return (
        <div key={key}>
          <p>{name} x {quantity}</p>
        </div>
      );
    });

  const totalPrice = Object.keys(items).reduce((acc, curr) => {
    const [group, item] = curr.split("-");
    const amount = items[curr] * data[group][item].price;
    return acc + amount;
  }, 0);

  return (
    <div className="total">
      <h2>Order Summary</h2>
      {cartItems.length > 0 ? cartItems : <p>Your cart is empty.</p>}
      <span className="total-price">Total: €{totalPrice}</span>
    </div>
  );
};

export default Total;
