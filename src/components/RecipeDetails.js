import React from 'react';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-details border rounded p-4 shadow-md mt-4">
      <h2 className="text-lg font-bold">{recipe.title}</h2>
      <p>Ingredients:</p>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <ol>
        {recipe.instructions.split('\n').map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;