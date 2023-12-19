import React, { useState } from "react";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Total from "./components/Total";
import Checkout from "./components/Checkout";
import { Provider } from "./Context";
import menuData from "./Data";

import "./styles.css";

export default function App() {
  const [showCheckout, setShowCheckout] = useState(false); 
  const mains = menuData.mains;
  const sides = menuData.sides;
  const drinks = menuData.drinks;

  return (
    <Provider>
      <div className="menu">
        {showCheckout ? (
          <Checkout setShowCheckout={setShowCheckout} />
        ) : (
          <>
            <Mains meals={mains} />
            <aside className="aside">
              <Extras type="Sides" items={sides} />
              <Extras type="Drinks" items={drinks} />
            </aside>
            <Total />
            <button className="round-button" onClick={() => setShowCheckout(true)}>Proceed to Checkout</button>
          </>
        )}
      </div>
    </Provider>
  );
}
