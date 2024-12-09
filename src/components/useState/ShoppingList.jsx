import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");

  const addToList = (event) => {
    event.preventDefault();
    setItems([...items, { name: inputName, quantity: inputQuantity }]);
    setInputName("");
    setInputQuantity("");
  };

  return (
    <div>
      <h2>Shopping List</h2>
      {items.map((item, index) => (
        <ol key={index}>
          <li>
            {item.name} x{item.quantity}
          </li>
        </ol>
      ))}
      <form onSubmit={addToList}>
        <input
          type="text"
          value={inputName}
          onChange={(productName) => setInputName(productName.target.value)}
        />
        <input
          type="number"
          value={inputQuantity}
          onChange={(productQuantity) =>
            setInputQuantity(productQuantity.target.value)
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ShoppingList;
