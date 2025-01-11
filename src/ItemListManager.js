import React, { useState } from "react";
import "./styles.css"; 

function ItemListManager() {
  
  const [items, setItems] = useState([]);

  
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]); 
      setInputValue("");
    }
  };

  
  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="item-list-manager">
      <h1 className="header">Item List Manager</h1>


      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button" onClick={handleAddItem}>Add Item</button>
      </div>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
            <button className="remove-button" onClick={() => handleRemoveItem(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
