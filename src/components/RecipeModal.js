import React from 'react';
import PropTypes from 'prop-types';

const RecipeModal = ({ recipe, isOpen, onClose }) => {
  if (!isOpen || !recipe) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-5 w-3/4 max-w-2xl h-auto relative overflow-y-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">{recipe.title}</h2>
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-48 object-cover mb-4 rounded" 
        />
        <h3 className="text-lg mb-2">Ingredients:</h3>
        <ul>
          {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 ? (
            recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))
          ) : (
            <li>No ingredients available.</li>
          )}
        </ul>
        <h3 className="text-lg mb-2">Instructions:</h3>
        <p>{recipe.instructions}</p>
        <button
          className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};


RecipeModal.propTypes = {
  recipe: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RecipeModal;
