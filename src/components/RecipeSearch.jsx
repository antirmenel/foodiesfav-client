import React, { useState } from 'react';

function RecipeSearch() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to fetch recipe data from API
  const fetchRecipes = async () => {
    const APP_ID = '6443964e';
    const APP_KEY = 'ce4b10fc2457c477449486cd0a1924db';
    const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  
  // Function to handle search query input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
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
