import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ newItem, onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(name, category);
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem);
  }
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select name="category" value={newItem} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
