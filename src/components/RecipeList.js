import React from 'react';
import { Heart } from 'lucide-react';

const RecipeList = ({ recipes, onFavorite, favorites }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-md p-4 transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
            <button
              onClick={() => onFavorite(recipe)}
              className={`p-1 rounded-full ${
                favorites.some((fav) => fav.id === recipe.id)
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              <Heart size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;