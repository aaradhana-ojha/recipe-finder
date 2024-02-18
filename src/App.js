import React, { useState, useEffect } from 'react';
import './App.css';
import Detail from './components/Detail';


import logo from './images/logo.png';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (query.trim() !== '') {
      fetchRecipes();
    }
  }, [query]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo-container">
          {/* logo */}
          <img src={logo} alt="Restaurant Logo" className="logo" />
          <h1 className="restaurant-name">Recipe Finder</h1>
        </div>
      </div>
      {selectedRecipe ? (
        <Detail recipe={selectedRecipe} onBack={handleBackToList} />
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search for a recipe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.idMeal}>
                <div className="recipe-card">
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-img" />
                  <h3 className="recipe-title">{recipe.strMeal}</h3>
                  <button className="recipe-button" onClick={() => handleViewDetail(recipe)}>View</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Contact us:</p>
          <p>Name: Aaradhana Ojha</p>
          <p>Address: Balkhu, Kathmandu</p>
          <p>Email: aaradhanaojha123@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
