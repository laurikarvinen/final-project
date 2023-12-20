import React, { useState, useContext } from "react";
import { Context } from "../Context";
import "../styles.css"; 

export default function Input({ type, name, index }) {
  const [items, updateItem] = useContext(Context);
  const [inputWidth, setInputWidth] = useState("1.75rem");

  const handleInputChange = ({ target }) => {
    updateItem(type, index, target.value);
    setInputWidth(`${target.value.length + 1.75}rem`);
  };

  return (
    <input
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      onChange={handleInputChange}
      name={name.replace(" ", "-").toLowerCase()}
      style={{ width: inputWidth, minWidth: "1.75rem" }}
    />
  );
}
