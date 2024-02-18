import React from 'react';
import '../css/detail.css';

function Detail({ recipe, onBack }) {
  return (
    <div className="detail-container">
      <button onClick={onBack} className="back-button">Back</button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-img" />
      <div className="detail-box-container">
        <div className="detail-box">
          <h3>Category:</h3>
          <p>{recipe.strCategory}</p>
        </div>
        <div className="detail-box">
          <h3>Area:</h3>
          <p>{recipe.strArea}</p>
        </div>
        <div className="detail-box">
          <h3>Ingredients:</h3>
          <ul>
            {Object.keys(recipe)
              .filter((key) => key.startsWith('strIngredient') && recipe[key])
              .map((key, index) => (
                <li key={key}>
                  {recipe[key]}
                  {index < Object.keys(recipe).filter((key) => key.startsWith('strIngredient') && recipe[key]).length - 1 && ','}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="detail-box">
        <h3>Instructions:</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default Detail;
