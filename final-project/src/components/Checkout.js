import React, { useState, useContext } from "react";
import { Context } from "../Context";
import Total from "./Total";

const Checkout = ({ setShowCheckout }) => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [items] = useContext(Context);
  const [feedback, setFeedback] = useState(""); 

  const handleOrderSubmission = () => {
   
    if (!address || !email || Object.keys(items).length === 0) {
      setFeedback("Please provide all required details and items in your order.");
    } else {

      setFeedback("Order submitted successfully! Thank you!");

    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {feedback && <p>{feedback}</p>}
      <div>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <br />
      <Total />
      <button className="round-button" onClick={handleOrderSubmission}>Submit Order</button>
    </div>
  );
};

export default Checkout;
