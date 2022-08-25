import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputSearch, setinputSearch] = useState("");
  const [newItem, setnewItem] = useState(items);

  function handleSubmit(newItem) {
    setnewItem([...items, newItem]);
  }

  function inputChange(event) {
    setinputSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = newItem
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase())
    );

  return (
    <div className="ShoppingList">
      <ItemForm newItem={newItem} onItemFormSubmit={handleSubmit} />
      <Filter
        search={inputSearch}
        onCategoryChange={handleCategoryChange}
        onSearchChange={inputChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
