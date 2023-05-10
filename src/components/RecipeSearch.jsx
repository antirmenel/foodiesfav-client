import React, { useState } from "react";

function RecipeSearch() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search query input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">search</button>
      </form>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.recipe.uri}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            <p>{recipe.recipe.source}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearch;
