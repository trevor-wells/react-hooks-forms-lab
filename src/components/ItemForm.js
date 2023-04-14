import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  const newItem={
    id:uuid(),
    name: name,
    category: category
  }

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={() => onItemFormSubmit(newItem)}>
      <label>
        Name:
        <input value={name} onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={category} onChange={handleCategoryChange} name="category">
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
